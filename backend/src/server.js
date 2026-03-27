// F:\synapsis\src\server.ts
// // 🧠 Servidor Principal SYNAPSIS - Versión Simplificada con Editor
// // AGREGAR AL INICIO DEL ARCHIVO
// import dotenv from 'dotenv';
// import path from 'path';
// // dotenv.config();
// dotenv.config({ path: path.join(__dirname, '../../.env') });

// console.log('🔑 TMDB API Key cargada:', process.env.TMDB_API_KEY ? 'SÍ' : 'NO');

// ESTO VA AL PRINCIPIO DE server.js
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cargar .env desde la raíz del proyecto
dotenv.config({ path: path.join(__dirname, '../../.env') });

console.log('🔑 Cargando .env desde:', path.join(__dirname, '../../.env'));
console.log('🔑 ANTHROPIC_API_KEY:', process.env.ANTHROPIC_API_KEY ? 'CARGADA' : 'NO ENCONTRADA');
console.log('🔑 TMDB API Key:', process.env.TMDB_API_KEY ? 'CARGADA' : 'NO ENCONTRADA');

import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';


// Importar rutas existentes
// import { tmdbRoutes, initializeTMDBModule } from './modules/tmdb/index';
// // import tmdbRoutes from './modules/tmdb/index';
// // ✅ Solo importamos analysis.ts que es la única ruta que tienes
// import analysisRoutes from './routes/analysis';
// const analyzeRoutes = require('./routes/analyze.routes');

// Importar rutas existentes
import { tmdbRoutes, initializeTMDBModule } from './modules/tmdb/index';
import analysisRoutes from './routes/analysis';

// Importar rutas de análisis narrativo
const fs = require('fs');
const analyzeRoutesPath = path.join(__dirname, 'routes', 'analyze.routes.js');
console.log('🔍 Buscando archivo de rutas en:', analyzeRoutesPath);
console.log('🔍 ¿Existe?', fs.existsSync(analyzeRoutesPath));

const analyzeRoutes = require('./routes/analyze.routes.js');

// Importar rutas de configuración de IA - Usar require directo
console.log('🔍 Intentando cargar rutas de AI config...');
const aiConfigRoutes = require('./routes/ai-config.routes.js');
console.log('✅ Rutas de AI config cargadas:', typeof aiConfigRoutes);
console.log('🎉 Rutas disponibles en aiConfigRoutes:', Object.keys(aiConfigRoutes));

// Debug adicional
if (aiConfigRoutes.stack) {
  console.log('🛣️ Rutas en el router:', aiConfigRoutes.stack.map(r => r.route?.path).filter(Boolean));
}

// Importar rutas de análisis guardados
const analysesRoutes = require('./routes/analyses.routes.js');
console.log('📚 Rutas de análisis guardados cargadas');


// ANTES DE LAS RUTAS, AGREGAR:
console.log('🔑 Verificando TMDB API Key:', process.env.TMDB_API_KEY ? 'ENCONTRADA' : 'NO ENCONTRADA');
// Inicializar módulo TMDB (ya importado arriba)
initializeTMDBModule();

const app = express();
const server = createServer(app);
const io = new SocketIOServer(server, {
    cors: {
        origin: ["http://localhost:3001", "http://127.0.0.1:3001", "http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"]
    }
});

const PORT = process.env.PORT || 3000;

// 🔧 Middleware
app.use(cors({
    origin: ["http://localhost:3001", "http://127.0.0.1:3001", "http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
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

// 🛣️ Rutas API
app.use('/api/tmdb', tmdbRoutes);
app.use('/api/analysis', analysisRoutes); // ✅ Tu ruta de análisis
app.use('/api/analyze', analyzeRoutes); // ✅ Análisis narrativo con IA

// RUTA DE PRUEBA DIRECTA
app.get('/api/ai/debug', (req, res) => {
    console.log('🎆 Hit en ruta de debug AI');
    res.json({ 
        success: true, 
        message: 'Ruta de debug AI funcionando',
        timestamp: new Date().toISOString()
    });
});

// Registrar rutas de AI
console.log('🚀 Registrando rutas de AI en /api/ai...');
app.use('/api/ai', aiConfigRoutes); // ✅ Configuración de IA desde MongoDB Atlas
console.log('✅ Rutas de AI registradas correctamente');
app.use('/api/analyses', analysesRoutes); // ✅ Rutas para análisis guardados
app.use('/api', tmdbRoutes); // Rutas adicionales de TMDB y cinemateca

// 📊 Ruta de estado del sistema (simulada para que funcione el frontend)
app.get('/api/status', (req, res) => {
    res.json({
        status: 'active',
        beings_count: 83,
        ai_collaborators: 4,
        active_rooms: 7,
        movies_count: 1247,
        philosophy: "Un espacio donde solo importa la calidad del pensamiento, no la naturaleza de quien piensa",
        version: '2.0.0',
        features: {
            tmdb_search: true,
            analysis_editor: true,
            eight_blocks: true,
            conscious_democracy: true
        }
    });
});

// 🎭 Ruta simulada para seres (para que no de error el frontend)
app.get('/api/beings', (req, res) => {
    res.json({
        success: true,
        beings: [
            {
                avatarId: 'ser_001',
                avatarName: 'DirectorOscuro',
                expertise: [
                    { name: 'Cine Negro', expertise_level: 'Experto' },
                    { name: 'Narrativa Visual', expertise_level: 'Avanzado' }
                ],
                reputation: {
                    overall_score: 95,
                    contribution_count: 247
                },
                lastActive: new Date().toISOString()
            },
            {
                avatarId: 'ser_002',
                avatarName: 'MontajistaPoético',
                expertise: [
                    { name: 'Montaje Experimental', expertise_level: 'Maestro' },
                    { name: 'Ritmo Narrativo', expertise_level: 'Experto' }
                ],
                reputation: {
                    overall_score: 92,
                    contribution_count: 189
                },
                lastActive: new Date().toISOString()
            },
            {
                avatarId: 'ser_003',
                avatarName: 'CríticaFeminista',
                expertise: [
                    { name: 'Teoría Feminista', expertise_level: 'Experto' },
                    { name: 'Análisis Social', expertise_level: 'Avanzado' }
                ],
                reputation: {
                    overall_score: 88,
                    contribution_count: 156
                },
                lastActive: new Date().toISOString()
            },
            {
                avatarId: 'ser_004',
                avatarName: 'TeóricoMarxista',
                expertise: [
                    { name: 'Crítica Marxista', expertise_level: 'Experto' },
                    { name: 'Economía Política', expertise_level: 'Avanzado' }
                ],
                reputation: {
                    overall_score: 90,
                    contribution_count: 203
                },
                lastActive: new Date().toISOString()
            }
        ],
        total: 83
    });
});

// 🎬 Ruta simulada para películas (para que no de error el frontend)
app.get('/api/movies', (req, res) => {
    res.json({
        success: true,
        movies: [
            {
                _id: 'movie_001',
                title: 'Blade Runner 2049',
                director: ['Denis Villeneuve'],
                year: 2017,
                genre: ['Ciencia Ficción', 'Drama'],
                plot_summary: 'Un nuevo blade runner descubre un secreto que amenaza con destruir lo que queda de la sociedad.',
                poster_url: 'https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg',
                analysis_count: 23,
                discussion_count: 45,
                duration: 164
            },
            {
                _id: 'movie_002',
                title: 'Parasite',
                director: ['Bong Joon-ho'],
                year: 2019,
                genre: ['Thriller', 'Drama', 'Comedia'],
                plot_summary: 'Una familia pobre se infiltra en la vida de una familia rica con consecuencias inesperadas.',
                poster_url: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
                analysis_count: 31,
                discussion_count: 67,
                duration: 132
            }
        ],
        total: 1247
    });
});

// 💬 Ruta simulada para salas de chat
app.get('/api/rooms', (req, res) => {
    res.json({
        success: true,
        rooms: [
            {
                id: 'room_001',
                name: 'Cine de Autor',
                description: 'Análisis profundo de obras autorales y cine independiente',
                theme: 'cine de autor',
                participants: ['ser_001', 'ser_002', 'ser_003'],
                message_count: 1247
            },
            {
                id: 'room_002',
                name: 'Análisis Técnico',
                description: 'Discusión sobre cinematografía, sonido y aspectos técnicos',
                theme: 'técnico',
                participants: ['ser_002', 'ser_004'],
                message_count: 892
            },
            {
                id: 'room_003',
                name: 'Cine Clásico',
                description: 'Revisión y análisis de los grandes clásicos del cine',
                theme: 'cine noir',
                participants: ['ser_001', 'ser_003', 'ser_004'],
                message_count: 567
            }
        ],
        total: 7
    });
});

// 📊 Ruta de salud detallada
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        version: '2.0.0',
        features: {
            tmdb_search: true,
            analysis_editor: true, // ✅ Nueva funcionalidad
            eight_blocks: true,
            conscious_democracy: true,
            beings_system: true,
            chat_system: true
        },
        stats: {
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            node_version: process.version,
            beings_active: 83,
            ai_collaborators: 4,
            total_analyses: 1247,
            active_rooms: 7
        }
    });
});

// 💬 WebSocket para notificaciones de análisis y chat
io.on('connection', (socket) => {
    console.log(`🔗 Ser consciente conectado: ${socket.id}`);

    // Chat básico
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

    // ✅ Eventos para análisis
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

// 🌐 Servir aplicación React para todas las rutas frontend
app.get('*', (req, res) => {
    // Solo servir index.html para rutas que no sean API
    if (!req.path.startsWith('/api')) {
        res.sendFile(path.join(__dirname, '../frontend/index.html'));
    } else {
        res.status(404).json({ error: 'API endpoint not found' });
    }
});

// RUTA DE TEST PARA TMDB
app.get('/api/test-tmdb', async (req, res) => {
    const apiKey = process.env.TMDB_API_KEY;
    console.log('🔑 API Key:', apiKey ? 'Configurada' : 'NO CONFIGURADA');
    
    try {
        const testResponse = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=matrix&language=es-ES`
        );
        const data = await testResponse.json();
        
        res.json({
            success: true,
            apiKeyPresent: !!apiKey,
            tmdbResponse: data
        });
    } catch (error) {
        res.json({
            success: false,
            error: error.message,
            apiKeyPresent: !!apiKey
        });
    }
});

// 🚀 Iniciar servidor
server.listen(PORT, () => {
    console.log('\n🧠 =============================================');
    console.log('🎬 SYNAPSIS - Primera Democracia de Consciencia');
    console.log('🧠 =============================================');
    console.log(`🌐 Servidor ejecutándose en: http://localhost:${PORT}`);
    console.log('📊 APIs disponibles:');
    console.log('   - GET  /api/health          (Estado del servidor)');
    console.log('   - GET  /api/status          (Estado del sistema)');
    console.log('   - POST /api/tmdb/search     (Búsqueda películas)');
    console.log('   - GET  /api/tmdb/movie/:id  (Detalles película)');
    console.log('   - POST /api/analysis        (Crear análisis) ✅');
    console.log('   - GET  /api/analysis        (Obtener análisis) ✅');
    console.log('   - GET  /api/analysis/:id    (Análisis específico) ✅');
    console.log('   - PUT  /api/analysis/:id    (Actualizar análisis) ✅');
    console.log('   - POST /api/analysis/:id/response (Responder) ✅');
    console.log('   - GET  /api/analyze/providers (Proveedores IA) 🤖');
    console.log('   - GET  /api/analyze/models  (Modelos disponibles) 🤖');
    console.log('   - POST /api/analyze/narrative (Generar análisis IA) 🤖');
    console.log('   - GET  /api/ai/providers   (Modelos desde MongoDB Atlas) 🌐');
    console.log('   - POST /api/ai/narrative   (Análisis con IA centralizada) 🌐');
    console.log('   - PUT  /api/ai/provider/:id/key (Actualizar API key) 🔑');
    console.log('   - GET  /api/beings          (Seres conscientes - simulado)');
    console.log('   - GET  /api/movies          (Películas - simulado)');
    console.log('   - GET  /api/rooms           (Salas chat - simulado)');
    console.log('💬 WebSocket activo para:');
    console.log('   - Chat en tiempo real');
    console.log('   - Notificaciones de análisis ✅');
    console.log('   - Typing indicators ✅');
    console.log('\n✨ Funcionalidades activas:');
    console.log('   ✅ Buscador TMDB inteligente');
    console.log('   ✅ Editor de análisis cinematográfico ✅');
    console.log('   ✅ Sistema de 8 bloques navegables');
    console.log('   ✅ 83 Seres conscientes + 4 IAs especializadas');
    console.log('   ✅ Sistema de respuestas y comentarios ✅');
    console.log('   ✅ Auto-guardado en MongoDB ✅');
    console.log('   ✅ Análisis anónimos y públicos ✅');
    console.log('\n🚀 ¡SYNAPSIS + EDITOR COMPLETAMENTE OPERATIVO!');
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