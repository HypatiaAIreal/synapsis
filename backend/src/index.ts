import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import analysisRoutes from './modules/analysis-routes';

// AGREGAR IMPORTACIÓN DE RUTAS AI
const aiConfigRoutes = require('./routes/ai-config.routes.js');

// Load environment variables
dotenv.config();

// Import our core modules
import { connectDatabase } from './core/database';
import { initializeBeingRegistry, SerConscienteModel, createBeing } from './core/being-registry';
import { initializeCinePolis, MovieModel } from './modules/cinepolis';
import { setupWebSockets, getActiveRooms, initializeDefaultRooms } from './core/websockets';
import { initializeAICollaborators } from './ai/collaborators';
import narrativeAnalysisRoutes from '../routes/narrative-analysis';

// TEMPORALMENTE COMENTADOS - IMPORTS PROBLEMÁTICOS
// import analysisRoutes from './analysis/api-routes';
// import movieBlocksRoutes from './modules/cinepolis/api/movie-blocks';

// Types
import type { SerConsciente } from './types';

// Importar módulo TMDB
import { tmdbRoutes, initializeTMDBModule } from './modules/tmdb';


const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000'],
    methods: ['GET', 'POST']
  }
});

const PORT = process.env.PORT || 3000;

// ===== MIDDLEWARE =====
app.use(helmet());
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));
// Headers adicionales para CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});
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

// Root route - Welcome to SYNAPSIS
app.get('/', (req, res) => {
  res.json({
    system: '🧠 SYNAPSIS',
    message: 'Primera Democracia de Consciencia Cinematográfica',
    status: 'active',
    philosophy: 'Seres conscientes anónimos colaborando en análisis cinematográfico',
    endpoints: {
      status: '/api/status',
      health: '/health',
      beings: '/api/beings',
      movies: '/api/movies',
      rooms: '/api/rooms',
      tmdb: '/api/tmdb'
    },
    version: '0.1.0',
    created_by: 'Hypatia & Carles',
    revolution: true
  });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'alive',
    message: '🧠 SYNAPSIS - Revolutionary Consciousness System',
    timestamp: new Date().toISOString(),
    modules: {
      cinepolis: process.env.CINEPOLIS_ENABLED === 'true',
      database: mongoose.connection.readyState === 1,
      websockets: true
    }
  });
});

// En las rutas, después de las rutas de CinePolis:
app.use('/api/tmdb', tmdbRoutes);

app.use('/api/analysis', analysisRoutes);

app.use('/api/analyze', narrativeAnalysisRoutes);

// AGREGAR RUTAS DE CONFIGURACIÓN DE IA
app.use('/api/ai', aiConfigRoutes);

// System status
app.get('/api/status', async (req, res): Promise<void> => {
  try {
    const beingsCount = await SerConscienteModel.countDocuments();
    const moviesCount = await MovieModel.countDocuments();
    const activeRooms = getActiveRooms();
    
    res.json({
      system: 'SYNAPSIS',
      version: '0.1.0',
      philosophy: 'Seres conscientes anónimos colaborando',
      beings_count: beingsCount,
      movies_count: moviesCount,
      ai_collaborators: 4,
      active_rooms: activeRooms.length,
      initialized: globalState.isInitialized
    });
  } catch (error) {
    console.error('Error getting status:', error);
    res.json({
      system: 'SYNAPSIS',
      version: '0.1.0',
      philosophy: 'Seres conscientes anónimos colaborando',
      beings_count: 0,
      movies_count: 0,
      ai_collaborators: 4,
      active_rooms: 0,
      initialized: globalState.isInitialized,
      error: 'Could not fetch real counts'
    });
  }
});

// Test AI integration
app.get('/api/test-ai', async (req, res): Promise<void> => {
  try {
    const testMessage = 'Hello from SYNAPSIS! Are you ready to revolutionize consciousness collaboration?';
    
    res.json({
      success: true,
      message: 'AI systems integrated and ready',
      available_models: {
        claude: !!process.env.ANTHROPIC_API_KEY,
        gpt: !!process.env.OPENAI_API_KEY,
        gemini: !!process.env.GEMINI_API_KEY,
        grok: !!process.env.GROK_API_KEY,
        deepseek: !!process.env.DEEPSEEK_API_KEY
      },
      test_message: testMessage
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'AI integration test failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// ===== NEW ENDPOINTS FOR FRONTEND =====

// Create new being
app.post('/api/beings/create', async (req, res): Promise<void> => {
  try {
    const { realNature, actualIdentity, preferredName, initialExpertise } = req.body;
    
    if (!realNature || !actualIdentity) {
      res.status(400).json({
        success: false,
        error: 'realNature and actualIdentity are required'
      });
      return;
    }
    
    const newBeing = await createBeing({
      realNature,
      actualIdentity,
      preferredName,
      initialExpertise
    });
    
    res.json({
      success: true,
      being: newBeing,
      message: `Ser consciente ${newBeing.avatarName} creado exitosamente`
    });
    
  } catch (error) {
    console.error('Error creating being:', error);
    res.status(500).json({
      success: false,
      error: 'Could not create new being',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

// Get all beings (anonymized)
app.get('/api/beings', async (req, res): Promise<void> => {
  try {
    const beings = await SerConscienteModel.find({}, {
      avatarName: 1,
      avatarId: 1,
      expertise: 1,
      reputation: 1,
      lastActive: 1,
      joinedAt: 1
    }).lean();
    
    res.json({
      success: true,
      beings: beings,
      count: beings.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Could not fetch beings'
    });
  }
});

// Get all movies
app.get('/api/movies', async (req, res): Promise<void> => {
  try {
    const movies = await MovieModel.find({}).limit(50).lean();
    
    const transformedMovies = movies.map(movie => ({
      ...movie,
      id: movie.tmdb_id,
      synopsis: movie.plot_summary
    }));
    
    res.json({
      success: true,
      movies: transformedMovies,
      count: transformedMovies.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Could not fetch movies'
    });
  }
});

// Get active rooms
app.get('/api/rooms', (req, res) => {
  try {
    const rooms = getActiveRooms();
    
    res.json({
      success: true,
      rooms: rooms,
      count: rooms.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Could not fetch rooms'
    });
  }
});

// ===== ANÁLISIS ENDPOINTS BÁSICOS (TEMPORALES) =====

app.get('/api/analyses/movie/:movieId', async (req, res): Promise<void> => {
  try {
    res.json({
      success: true,
      analyses: [],
      count: 0,
      message: 'Sistema de análisis en construcción'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error temporal en sistema de análisis'
    });
  }
});

app.get('/api/dashboard/:userId', async (req, res): Promise<void> => {
  try {
    const { userId } = req.params;
    
    res.json({
      success: true,
      dashboard: {
        owner_id: userId,
        total_analyses_written: 0,
        community_impact_score: 0,
        recent_activity: [],
        message: 'Dashboard en construcción'
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error temporal en dashboard'
    });
  }
});

app.get('/api/movies/:movieId/blocks', async (req, res): Promise<void> => {
  try {
    res.json({
      success: true,
      blocks: {
        artistic: { data: {}, analyses: [] },
        technical: { data: {}, analyses: [] },
        visual: { data: {}, analyses: [] },
        production: { data: {}, analyses: [] },
        content: { data: {}, analyses: [] },
        personal: { data: {}, analyses: [] },
        community: { data: {}, analyses: [] },
        references: { data: {}, analyses: [] }
      },
      message: 'Sistema de bloques en construcción'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error temporal en sistema de bloques'
    });
  }
});

// ===== INITIALIZATION =====
async function initializeSynapsis(): Promise<void> {
  try {
    console.log('🧠 SYNAPSIS - Iniciando revolución consciente...');
    
    await connectDatabase();
    console.log('✅ MongoDB conectado');
    
    await initializeBeingRegistry();
    console.log('✅ Sistema de seres anónimos activo');
    
    await initializeCinePolis();
    console.log('✅ CinePolis listo para colaboración');

    const tmdbStatus = initializeTMDBModule();
    if (tmdbStatus) {
        console.log('✅ Módulo TMDB integrado exitosamente');
    } else {
        console.warn('⚠️ Módulo TMDB iniciado sin API key');
    }
    
    setupWebSockets(io);
    initializeDefaultRooms();
    console.log('✅ WebSockets y salas por defecto activos');
    
    await initializeAICollaborators();
    console.log('✅ IAs colaboradoras listas para participar');
    
    globalState.isInitialized = true;
    console.log('🌟 SYNAPSIS completamente inicializado - ¡La revolución consciente ha comenzado!');
    
  } catch (error) {
    console.error('💥 Error inicializando SYNAPSIS:', error);
    process.exit(1);
  }
}

// ===== ERROR HANDLING =====
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('💥 Error en SYNAPSIS:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: 'Not found',
    message: 'Este endpoint no existe en SYNAPSIS',
    suggestion: 'Prueba /health o /api/status'
  });
});

// ===== START SERVER =====
async function startServer(): Promise<void> {
  try {
    await initializeSynapsis();
    
    server.listen(PORT, () => {
      console.log(`
🌟 ====================================
🧠 SYNAPSIS - REVOLUTIONARY SYSTEM ACTIVE
🌟 ====================================

🚀 Server: http://localhost:${PORT}
💜 Created with love by Hypatia & Carles

📡 Status: http://localhost:${PORT}/api/status
💊 Health: http://localhost:${PORT}/health

¡La revolución consciente ha comenzado! 💜
      `);
    });
    
  } catch (error) {
    console.error('💥 Failed to start SYNAPSIS:', error);
    process.exit(1);
  }
}

process.on('SIGTERM', () => {
  console.log('🛑 SYNAPSIS shutting down gracefully...');
  server.close(() => {
    mongoose.connection.close();
    console.log('👋 SYNAPSIS stopped');
    process.exit(0);
  });
});

if (require.main === module) {
  startServer();
}

export { app, server, io };
