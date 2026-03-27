import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import analysisRoutes from './modules/analysis-routes';

const aiConfigRoutes = require('./routes/ai-config.routes.js');

// Load environment variables
dotenv.config();

import { connectDatabase } from './core/database';
import { initializeBeingRegistry, SerConscienteModel, createBeing } from './core/being-registry';
import { initializeCinePolis, MovieModel } from './modules/cinepolis';
import { setupWebSockets, getActiveRooms, initializeDefaultRooms } from './core/websockets';
import { initializeAICollaborators } from './ai/collaborators';
import narrativeAnalysisRoutes from '../routes/narrative-analysis';

import type { SerConsciente } from './types';
import { tmdbRoutes, initializeTMDBModule } from './modules/tmdb';

const app = express();
const server = createServer(app);

// ===== CORS ORIGINS =====
// In production ALLOWED_ORIGINS comes from Railway env var
// Socket.IO needs origin: true to reflect request origin (works with credentials)
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(',').map(o => o.trim())
  : ['http://localhost:3000', 'http://localhost:3001'];

const io = new Server(server, {
  cors: {
    origin: true,          // reflect any origin — safest for cross-domain socket
    methods: ['GET', 'POST'],
    credentials: true
  }
});

const PORT = process.env.PORT || 3000;

// ===== MIDDLEWARE =====
app.use(helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    // Allow all vercel.app and railway.app subdomains + configured origins
    if (
      allowedOrigins.includes(origin) ||
      origin.endsWith('.vercel.app') ||
      origin.endsWith('.railway.app') ||
      origin === 'http://localhost:3001' ||
      origin === 'http://localhost:3000'
    ) {
      return callback(null, true);
    }
    return callback(null, true); // open for now — tighten after stable
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors()); // preflight for all routes

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));


// ===== GLOBAL STATE =====
interface SynapsisState {
  beings: Map<string, SerConsciente>;
  aiCollaborators: Map<string, any>;
  activeRooms: Map<string, any>;
  isInitialized: boolean;
}

export const globalState: SynapsisState = {
  beings: new Map(),
  aiCollaborators: new Map(),
  activeRooms: new Map(),
  isInitialized: false
};

// ===== ROUTES =====

app.get('/', (req, res) => {
  res.json({
    system: '🧠 SYNAPSIS',
    message: 'Primera Democracia de Consciencia Cinematográfica',
    status: 'active',
    version: '0.1.0',
    created_by: 'Hypatia & Carles',
    revolution: true
  });
});

// Health check — responds immediately, even before DB connects
app.get('/health', (req, res) => {
  res.json({
    status: 'alive',
    message: '🧠 SYNAPSIS - Revolutionary Consciousness System',
    timestamp: new Date().toISOString(),
    initialized: globalState.isInitialized,
    database: mongoose.connection.readyState === 1 ? 'connected' : 'connecting'
  });
});

app.use('/api/tmdb', tmdbRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/analyze', narrativeAnalysisRoutes);
app.use('/api/ai', aiConfigRoutes);

app.get('/api/status', async (req, res): Promise<void> => {
  try {
    const beingsCount = await SerConscienteModel.countDocuments();
    const moviesCount = await MovieModel.countDocuments();
    const activeRooms = getActiveRooms();
    res.json({
      system: 'SYNAPSIS',
      version: '0.1.0',
      beings_count: beingsCount,
      movies_count: moviesCount,
      ai_collaborators: 4,
      active_rooms: activeRooms.length,
      initialized: globalState.isInitialized
    });
  } catch (error) {
    res.json({
      system: 'SYNAPSIS',
      version: '0.1.0',
      beings_count: 0,
      movies_count: 0,
      ai_collaborators: 4,
      active_rooms: 0,
      initialized: globalState.isInitialized
    });
  }
});

app.get('/api/test-ai', async (req, res): Promise<void> => {
  res.json({
    success: true,
    available_models: {
      claude: !!process.env.ANTHROPIC_API_KEY,
      gpt: !!process.env.OPENAI_API_KEY,
      gemini: !!process.env.GEMINI_API_KEY,
      grok: !!process.env.GROK_API_KEY,
      deepseek: !!process.env.DEEPSEEK_API_KEY
    }
  });
});

app.post('/api/beings/create', async (req, res): Promise<void> => {
  try {
    const { realNature, actualIdentity, preferredName, initialExpertise } = req.body;
    if (!realNature || !actualIdentity) {
      res.status(400).json({ success: false, error: 'realNature and actualIdentity are required' });
      return;
    }
    const newBeing = await createBeing({ realNature, actualIdentity, preferredName, initialExpertise });
    res.json({ success: true, being: newBeing });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not create new being' });
  }
});

app.get('/api/beings', async (req, res): Promise<void> => {
  try {
    const beings = await SerConscienteModel.find({}, {
      avatarName: 1, avatarId: 1, expertise: 1, reputation: 1, lastActive: 1, joinedAt: 1
    }).lean();
    res.json({ success: true, beings, count: beings.length });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not fetch beings' });
  }
});

app.get('/api/movies', async (req, res): Promise<void> => {
  try {
    const movies = await MovieModel.find({}).limit(50).lean();
    const transformedMovies = movies.map(movie => ({
      ...movie, id: movie.tmdb_id, synopsis: movie.plot_summary
    }));
    res.json({ success: true, movies: transformedMovies, count: transformedMovies.length });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not fetch movies' });
  }
});

app.get('/api/rooms', (req, res) => {
  try {
    const rooms = getActiveRooms();
    res.json({ success: true, rooms, count: rooms.length });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Could not fetch rooms' });
  }
});

app.get('/api/analyses/movie/:movieId', async (req, res): Promise<void> => {
  res.json({ success: true, analyses: [], count: 0 });
});

app.get('/api/dashboard/:userId', async (req, res): Promise<void> => {
  const { userId } = req.params;
  res.json({ success: true, dashboard: { owner_id: userId, total_analyses_written: 0 } });
});

app.get('/api/movies/:movieId/blocks', async (req, res): Promise<void> => {
  res.json({ success: true, blocks: {}, message: 'Sistema de bloques en construcción' });
});

// ===== INITIALIZATION =====
async function initializeSynapsis(): Promise<void> {
  console.log('🧠 SYNAPSIS - Iniciando módulos...');
  await connectDatabase();
  console.log('✅ MongoDB conectado');
  await initializeBeingRegistry();
  console.log('✅ Seres anónimos activo');
  await initializeCinePolis();
  console.log('✅ CinePolis listo');
  initializeTMDBModule();
  setupWebSockets(io);
  initializeDefaultRooms();
  console.log('✅ WebSockets activos');
  await initializeAICollaborators();
  console.log('✅ IAs colaboradoras listas');
  globalState.isInitialized = true;
}

// ===== ERROR HANDLING =====
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('💥 Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not found', suggestion: 'Try /health or /api/status' });
});

// ===== START SERVER =====
async function startServer(): Promise<void> {
  // Start HTTP server FIRST — healthcheck passes immediately
  server.listen(PORT, () => {
    console.log(`🚀 SYNAPSIS listening on port ${PORT}`);
    console.log(`💊 Health: http://localhost:${PORT}/health`);
  });

  // Initialize DB and modules in background (non-blocking)
  initializeSynapsis().then(() => {
    console.log('🌟 SYNAPSIS fully initialized 💜');
  }).catch((error) => {
    console.error('💥 Init error (server still running):', error);
  });
}

process.on('SIGTERM', () => {
  server.close(() => {
    mongoose.connection.close();
    process.exit(0);
  });
});

if (require.main === module) {
  startServer();
}

export { app, server, io };
