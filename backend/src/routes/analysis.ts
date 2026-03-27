// backend/src/routes/analysis.ts
// 🧠 Rutas API para el Sistema de Análisis SYNAPSIS

import { Router, Request, Response } from 'express';
import { MongoClient, Db, ObjectId, Collection } from 'mongodb';

const router = Router();

// 🔗 Conexión MongoDB (usar la existente del proyecto)
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

let db: Db;

// Inicializar conexión
MongoClient.connect(MONGODB_URI).then(client => {
    db = client.db('synapsis');
    console.log('📊 Conectado a base de datos para análisis');
}).catch(error => {
    console.error('Error conectando a MongoDB:', error);
});

// 📝 Interface para Análisis
interface AnalysisResponse {
    _id: ObjectId;
    content: string;
    authorId: string;
    authorType: string;
    createdAt: Date;
    reactions: {
        helpful: number;
        insightful: number;
        thought_provoking: number;
    };
}

interface Analysis {
    _id?: ObjectId;
    title: string;
    content: string;
    movieId?: number;
    movieTitle?: string;
    movieData?: any;
    blockType: string;
    privacy: 'private' | 'anonymous' | 'public';
    authorId: string;
    template?: string;
    createdAt: Date;
    updatedAt: Date;
    version: number;
    tags?: string[];
    responses?: AnalysisResponse[];
    metrics?: {
        views: number;
        reactions: number;
        responses: number;
    };
}

// 🆕 POST /api/analysis - Crear nuevo análisis
router.post('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Base de datos no disponible' });
        }

        const {
            title,
            content,
            movieId,
            movieTitle,
            movieData,
            blockType,
            privacy = 'private',
            template,
            tags = []
        } = req.body;

        // Validaciones básicas
        if (!title || !content || !blockType) {
            return res.status(400).json({
                error: 'Título, contenido y tipo de bloque son requeridos'
            });
        }

        // Generar ID de autor anónimo temporal
        const authorId = `ser_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        const newAnalysis: Analysis = {
            title,
            content,
            movieId,
            movieTitle,
            movieData,
            blockType,
            privacy,
            authorId,
            template,
            tags,
            createdAt: new Date(),
            updatedAt: new Date(),
            version: 1,
            responses: [],
            metrics: {
                views: 0,
                reactions: 0,
                responses: 0
            }
        };

        const result = await db.collection<Analysis>('analyses').insertOne(newAnalysis);
        
        return res.status(201).json({
            success: true,
            analysisId: result.insertedId,
            analysis: { ...newAnalysis, _id: result.insertedId },
            message: 'Análisis creado exitosamente'
        });

    } catch (error) {
        console.error('Error creando análisis:', error);
        return res.status(500).json({
            error: 'Error interno del servidor',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

// 📖 GET /api/analysis - Obtener análisis con filtros
router.get('/', async (req: Request, res: Response): Promise<Response> => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Base de datos no disponible' });
        }

        const {
            blockType,
            movieId,
            privacy = 'public',
            limit = 20,
            offset = 0,
            sortBy = 'createdAt',
            sortOrder = 'desc'
        } = req.query;

        // Construir filtros
        const filters: any = {};
        
        if (blockType) filters.blockType = blockType;
        if (movieId) filters.movieId = parseInt(movieId as string);
        if (privacy !== 'all') filters.privacy = privacy;

        // Opciones de ordenamiento
        const sortOptions: any = {};
        sortOptions[sortBy as string] = sortOrder === 'desc' ? -1 : 1;

        const analyses = await db.collection<Analysis>('analyses')
            .find(filters)
            .sort(sortOptions)
            .skip(parseInt(offset as string))
            .limit(parseInt(limit as string))
            .toArray();

        const total = await db.collection('analyses').countDocuments(filters);

        return res.json({
            success: true,
            analyses,
            pagination: {
                total,
                limit: parseInt(limit as string),
                offset: parseInt(offset as string),
                hasMore: (parseInt(offset as string) + parseInt(limit as string)) < total
            }
        });

    } catch (error) {
        console.error('Error obteniendo análisis:', error);
        return res.status(500).json({
            error: 'Error obteniendo análisis',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

// 🔍 GET /api/analysis/:id - Obtener análisis específico
router.get('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Base de datos no disponible' });
        }

        const { id } = req.params;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'ID de análisis inválido' });
        }

        const analysis = await db.collection<Analysis>('analyses').findOne({ _id: new ObjectId(id) });

        if (!analysis) {
            return res.status(404).json({ error: 'Análisis no encontrado' });
        }

        // Incrementar vistas
        await db.collection('analyses').updateOne(
            { _id: new ObjectId(id) },
            { $inc: { 'metrics.views': 1 } }
        );

        return res.json({
            success: true,
            analysis
        });

    } catch (error) {
        console.error('Error obteniendo análisis específico:', error);
        return res.status(500).json({
            error: 'Error obteniendo análisis',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

// ✏️ PUT /api/analysis/:id - Actualizar análisis
router.put('/:id', async (req: Request, res: Response): Promise<Response> => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Base de datos no disponible' });
        }

        const { id } = req.params;
        const updates = req.body;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'ID de análisis inválido' });
        }

        // Campos permitidos para actualización
        const allowedFields = ['title', 'content', 'privacy', 'tags', 'blockType'];
        const filteredUpdates: any = {};

        Object.keys(updates).forEach(key => {
            if (allowedFields.includes(key)) {
                filteredUpdates[key] = updates[key];
            }
        });

        filteredUpdates.updatedAt = new Date();

        const result = await db.collection<Analysis>('analyses').findOneAndUpdate(
            { _id: new ObjectId(id) },
            { 
                $set: filteredUpdates, 
                $inc: { version: 1 } 
            },
            { returnDocument: 'after' }
        );

        if (!result) {
            return res.status(404).json({ error: 'Análisis no encontrado' });
        }

        return res.json({
            success: true,
            analysis: result,
            message: 'Análisis actualizado exitosamente'
        });

    } catch (error) {
        console.error('Error actualizando análisis:', error);
        return res.status(500).json({
            error: 'Error actualizando análisis',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

// 💬 POST /api/analysis/:id/response - Añadir respuesta a análisis
router.post('/:id/response', async (req: Request, res: Response): Promise<Response> => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Base de datos no disponible' });
        }

        const { id } = req.params;
        const { content, authorId, authorType = 'human' } = req.body;

        if (!ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'ID de análisis inválido' });
        }

        if (!content) {
            return res.status(400).json({ error: 'Contenido de respuesta requerido' });
        }

        const response: AnalysisResponse = {
            _id: new ObjectId(),
            content,
            authorId: authorId || `ser_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            authorType,
            createdAt: new Date(),
            reactions: {
                helpful: 0,
                insightful: 0,
                thought_provoking: 0
            }
        };

        // Usar typed collection para evitar errores de tipo
        const collection = db.collection<Analysis>('analyses');
        
        const result = await collection.findOneAndUpdate(
            { _id: new ObjectId(id) },
            {                 
                $push: { responses: response } as any,
                $inc: { 'metrics.responses': 1 }
            },
            { returnDocument: 'after' }
        );

        if (!result) {
            return res.status(404).json({ error: 'Análisis no encontrado' });
        }

        return res.status(201).json({
            success: true,
            response,
            message: 'Respuesta añadida exitosamente'
        });

    } catch (error) {
        console.error('Error añadiendo respuesta:', error);
        return res.status(500).json({
            error: 'Error añadiendo respuesta',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

// 📊 GET /api/analysis/stats/general - Estadísticas generales
router.get('/stats/general', async (req: Request, res: Response): Promise<Response> => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Base de datos no disponible' });
        }

        const totalAnalyses = await db.collection('analyses').countDocuments();
        const publicAnalyses = await db.collection('analyses').countDocuments({ privacy: 'public' });
        const anonymousAnalyses = await db.collection('analyses').countDocuments({ privacy: 'anonymous' });

        // Análisis por bloque
        const analysesByBlock = await db.collection('analyses').aggregate([
            { $group: { _id: '$blockType', count: { $sum: 1 } } },
            { $sort: { count: -1 } }
        ]).toArray();

        // Análisis más vistos
        const topAnalyses = await db.collection('analyses')
            .find({ privacy: { $in: ['public', 'anonymous'] } })
            .sort({ 'metrics.views': -1 })
            .limit(10)
            .toArray();

        return res.json({
            success: true,
            stats: {
                total: totalAnalyses,
                public: publicAnalyses,
                anonymous: anonymousAnalyses,
                private: totalAnalyses - publicAnalyses - anonymousAnalyses,
                byBlock: analysesByBlock,
                topAnalyses
            }
        });

    } catch (error) {
        console.error('Error obteniendo estadísticas:', error);
        return res.status(500).json({
            error: 'Error obteniendo estadísticas',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

// 🔍 GET /api/analysis/search - Búsqueda de análisis
router.get('/search', async (req: Request, res: Response): Promise<Response> => {
    try {
        if (!db) {
            return res.status(503).json({ error: 'Base de datos no disponible' });
        }

        const { q, blockType, limit = 20 } = req.query;

        if (!q) {
            return res.status(400).json({ error: 'Query de búsqueda requerido' });
        }

        const searchFilters: any = {
            $or: [
                { title: { $regex: q, $options: 'i' } },
                { content: { $regex: q, $options: 'i' } },
                { movieTitle: { $regex: q, $options: 'i' } }
            ],
            privacy: { $in: ['public', 'anonymous'] }
        };

        if (blockType) {
            searchFilters.blockType = blockType;
        }

        const results = await db.collection('analyses')
            .find(searchFilters)
            .sort({ 'metrics.views': -1, createdAt: -1 })
            .limit(parseInt(limit as string))
            .toArray();

        return res.json({
            success: true,
            results,
            count: results.length
        });

    } catch (error) {
        console.error('Error en búsqueda de análisis:', error);
        return res.status(500).json({
            error: 'Error en búsqueda',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

export default router;