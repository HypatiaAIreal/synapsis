// F:\synapsis\src\server.ts
// 🧠 Servidor Principal SYNAPSIS con Editor de Análisis Integrado

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import path from 'path';

// Importar rutas existentes
import tmdbRoutes from './modules/tmdb/tmdb-routes';
import beingsRoutes from './routes/beings';
import moviesRoutes from './routes/movies';
import roomsRoutes from './routes/rooms';

// 🆕 Importar nueva ruta de análisis
import analysisRoutes from './routes/analysis';

const app = express();
const server = createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: ["http://localhost:3001", "http://127.0.0.1:3001"],
        methods: ["GET", "POST"]
    }
});

const PORT = process.env.PORT || 3000;

// 🔧 Middleware
app.use(cors({
    origin: ["http://localhost:3001", "http://127.0.0.1:3001"],
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// 📁 Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// 🛣️ Rutas API existentes
app.use('/api/tmdb', tmdbRoutes);
app.use('/api/beings', beingsRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/rooms', roomsRoutes);

// 🆕 Nueva ruta para análisis
app.use('/api/analysis', analysisRoutes);

// 📊 Ruta de salud del servidor
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: '2.0.0',
        features: {
            tmdb_search: true,
            beings_system: true,
            chat_system: true,
            analysis_editor: true, // 🆕 Nueva funcionalidad
            eight_blocks: true,
            conscious_democracy: true
        },
        stats: {
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            node_version: process.version
        }
    });
});

// 💬 WebSocket para chat en tiempo real + notificaciones de análisis
io.on('connection', (socket) => {
    console.log(`🔗 Ser consciente conectado: ${socket.id}`);

    // Chat existente
    socket.on('join_room', (roomId) => {
        socket.join(roomId);
        socket.to(roomId).emit('user_joined', {
            userId: socket.id,
            timestamp: new Date().toISOString()
        });
        console.log(`👤 Usuario ${socket.id} se unió a sala: ${roomId}`);
    });

    socket.on('send_message', (data) => {
        const { roomId, message, sender } = data;
        const messageData = {
            id: Date.now().toString(),
            message,
            sender,
            timestamp: new Date().toISOString(),
            type: 'message'
        };
        
        socket.to(roomId).emit('new_message', messageData);
        console.log(`💬 Mensaje en ${roomId} de ${sender}: ${message}`);
    });

    // 🆕 Eventos para análisis
    socket.on('analysis_created', (data) => {
        const { analysisId, title, blockType, movieId } = data;
        
        // Notificar a usuarios interesados en esa película/bloque
        socket.broadcast.emit('new_analysis_notification', {
            analysisId,
            title,
            blockType,
            movieId,
            timestamp: new Date().toISOString()
        });
        
        console.log(`📝 Nuevo análisis creado: ${title} (${blockType})`);
    });

    socket.on('analysis_response', (data) => {
        const { analysisId, responseId, authorType } = data;
        
        // Notificar respuesta (especialmente si es de una IA)
        socket.broadcast.emit('analysis_response_notification', {
            analysisId,
            responseId,
            authorType,
            timestamp: new Date().toISOString()
        });
        
        console.log(`💭 Nueva respuesta en análisis ${analysisId} de ${authorType}`);
    });

    // Typing indicators para análisis
    socket.on('analysis_typing', (data) => {
        const { analysisId, isTyping } = data;
        socket.broadcast.emit('someone_typing_analysis', {
            analysisId,
            isTyping,
            userId: socket.id
        });
    });

    socket.on('disconnect', () => {
        console.log(`👋 Ser consciente desconectado: ${socket.id}`);
    });
});

// 🌐 Servir aplicación React (index.html) para todas las rutas frontend
app.get('*', (req, res) => {
    // Solo servir index.html para rutas que no sean API
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, '../frontend/index.html'));
    } else {
        res.status(404).json({ error: 'API endpoint not found' });
    }
});

// 🚀 Iniciar servidor
server.listen(PORT, () => {
    console.log('\n🧠 =============================================');
    console.log('🎬 SYNAPSIS - Primera Democracia de Consciencia');
    console.log('🧠 =============================================');
    console.log(`🌐 Servidor ejecutándose en: http://localhost:${PORT}`);
    console.log(`📱 Frontend accesible en: http://localhost:3001`);
    console.log('📊 APIs disponibles:');
    console.log('   - GET  /api/health          (Estado del servidor)');
    console.log('   - POST /api/tmdb/search     (Búsqueda películas)');
    console.log('   - GET  /api/tmdb/movie/:id  (Detalles película)');
    console.log('   - GET  /api/beings          (Seres conscientes)');
    console.log('   - POST /api/analysis        (Crear análisis) 🆕');
    console.log('   - GET  /api/analysis        (Obtener análisis) 🆕');
    console.log('   - GET  /api/analysis/:id    (Análisis específico) 🆕');
    console.log('   - PUT  /api/analysis/:id    (Actualizar análisis) 🆕');
    console.log('   - POST /api/analysis/:id/response (Responder) 🆕');
    console.log('💬 WebSocket activo para:');
    console.log('   - Chat en tiempo real');
    console.log('   - Notificaciones de análisis 🆕');
    console.log('   - Typing indicators 🆕');
    console.log('\n✨ Funcionalidades activas:');
    console.log('   ✅ Buscador TMDB inteligente');
    console.log('   ✅ 83 Seres conscientes registrados');
    console.log('   ✅ 4 IAs especializadas');
    console.log('   ✅ Sistema de 8 bloques navegables');
    console.log('   ✅ Editor de análisis cinematográfico 🆕');
    console.log('   ✅ Sistema de respuestas y comentarios 🆕');
    console.log('   ✅ Análisis anónimos y públicos 🆕');
    console.log('\n🚀 ¡SYNAPSIS ESTÁ COMPLETAMENTE OPERATIVO!');
    console.log('🧠 =============================================\n');
});

// Manejo de errores globales
process.on('uncaughtException', (error) => {
    console.error('❌ Error no capturado:', error);
    process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Promesa rechazada no manejada:', reason);
    console.error('En promesa:', promise);
});

export default app;