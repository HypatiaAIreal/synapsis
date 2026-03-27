/**
 * 📝 RUTAS DE ANÁLISIS PARA SYNAPSIS
 * Sistema de análisis cinematográficos por bloques
 */

import { Router, Request, Response } from 'express';
import { MongoClient, Db, ObjectId } from 'mongodb';

const router = Router();

// Conexión a MongoDB
let db: Db | null = null;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/synapsis?retryWrites=true&w=majority';

MongoClient.connect(MONGODB_URI).then(client => {
    db = client.db('synapsis');
    console.log('📝 Conectado a MongoDB para análisis');
}).catch(err => {
    console.error('❌ Error conectando a MongoDB:', err);
});

/**
 * GET /api/analysis - Obtener análisis por película/usuario
 */
router.get('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const { movieId, userId, isPublic } = req.query;
        
        if (!db) {
            res.status(500).json({
                success: false,
                error: 'Base de datos no disponible'
            });
            return;
        }

        // Construir query
        let query: any = {};
        if (movieId) query.movieId = movieId;
        if (userId) query.authorId = userId;
        if (isPublic !== undefined) query.isPublic = isPublic === 'true';

        const analyses = await db.collection('analyses')
            .find(query)
            .sort({ createdAt: -1 })
            .toArray();

        res.json({
            success: true,
            data: analyses,
            count: analyses.length
        });
    } catch (error) {
        console.error('❌ Error obteniendo análisis:', error);
        res.status(500).json({
            success: false,
            error: 'Error al obtener análisis'
        });
    }
});

/**
 * POST /api/analysis - Crear nuevo análisis
 */
router.post('/', async (req: Request, res: Response): Promise<void> => {
    try {
        const analysis = req.body;
        
        if (!db) {
            res.status(500).json({
                success: false,
                error: 'Base de datos no disponible'
            });
            return;
        }

        // Agregar timestamps
        const newAnalysis = {
            ...analysis,
            createdAt: new Date(),
            updatedAt: new Date(),
            reactions: {
                like: 0,
                insightful: 0,
                love: 0
            }
        };

        const result = await db.collection('analyses').insertOne(newAnalysis);

        res.json({
            success: true,
            data: {
                _id: result.insertedId,
                ...newAnalysis
            },
            message: 'Análisis creado exitosamente'
        });
    } catch (error) {
        console.error('❌ Error creando análisis:', error);
        res.status(500).json({
            success: false,
            error: 'Error al crear análisis'
        });
    }
});

/**
 * PUT /api/analysis/:id - Actualizar análisis
 */
router.put('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const updates = req.body;
        
        if (!db) {
            res.status(500).json({
                success: false,
                error: 'Base de datos no disponible'
            });
            return;
        }

        // Agregar timestamp de actualización
        updates.updatedAt = new Date();

        const result = await db.collection('analyses').updateOne(
            { _id: new ObjectId(id) },
            { $set: updates }
        );

        if (result.matchedCount === 0) {
            res.status(404).json({
                success: false,
                error: 'Análisis no encontrado'
            });
            return;
        }

        res.json({
            success: true,
            message: 'Análisis actualizado exitosamente'
        });
    } catch (error) {
        console.error('❌ Error actualizando análisis:', error);
        res.status(500).json({
            success: false,
            error: 'Error al actualizar análisis'
        });
    }
});

/**
 * POST /api/analysis/:id/reaction - Agregar reacción
 */
router.post('/:id/reaction', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { userId, reactionType } = req.body;
        
        if (!db) {
            res.status(500).json({
                success: false,
                error: 'Base de datos no disponible'
            });
            return;
        }

        // Incrementar contador de reacción
        const result = await db.collection('analyses').updateOne(
            { _id: new ObjectId(id) },
            { 
                $inc: { [`reactions.${reactionType}`]: 1 },
                $addToSet: { [`reactionUsers.${reactionType}`]: userId }
            }
        );

        if (result.matchedCount === 0) {
            res.status(404).json({
                success: false,
                error: 'Análisis no encontrado'
            });
            return;
        }

        res.json({
            success: true,
            message: 'Reacción agregada'
        });
    } catch (error) {
        console.error('❌ Error agregando reacción:', error);
        res.status(500).json({
            success: false,
            error: 'Error al agregar reacción'
        });
    }
});

/**
 * DELETE /api/analysis/:id - Eliminar análisis
 */
router.delete('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        
        if (!db) {
            res.status(500).json({
                success: false,
                error: 'Base de datos no disponible'
            });
            return;
        }

        const result = await db.collection('analyses').deleteOne({
            _id: new ObjectId(id)
        });

        if (result.deletedCount === 0) {
            res.status(404).json({
                success: false,
                error: 'Análisis no encontrado'
            });
            return;
        }

        res.json({
            success: true,
            message: 'Análisis eliminado'
        });
    } catch (error) {
        console.error('❌ Error eliminando análisis:', error);
        res.status(500).json({
            success: false,
            error: 'Error al eliminar análisis'
        });
    }
});

export default router;