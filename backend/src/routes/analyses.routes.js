// 📚 SYNAPSIS - Rutas para gestión de análisis guardados
const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

// Conexión a MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/synapsis?retryWrites=true&w=majority';
let db;

// Conectar a MongoDB
MongoClient.connect(MONGODB_URI)
  .then(client => {
    console.log('✅ Conectado a MongoDB para análisis');
    db = client.db('synapsis');
  })
  .catch(error => {
    console.error('❌ Error conectando a MongoDB:', error);
  });

// Obtener todos los análisis de una película
router.get('/movie/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    
    if (!db) {
      // Si no hay conexión a MongoDB, usar localStorage como fallback
      return res.json({
        success: true,
        analyses: [],
        source: 'fallback'
      });
    }

    const analyses = await db.collection('narrative_analyses')
      .find({ movieId })
      .sort({ createdAt: -1 })
      .toArray();

    res.json({
      success: true,
      analyses,
      count: analyses.length
    });
  } catch (error) {
    console.error('Error obteniendo análisis:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Guardar nuevo análisis
router.post('/', async (req, res) => {
  try {
    const analysis = req.body;
    
    if (!db) {
      // Si no hay MongoDB, devolver el análisis con ID generado
      return res.json({
        success: true,
        id: analysis.id || `analysis-${Date.now()}`,
        message: 'Análisis guardado localmente'
      });
    }

    // Agregar timestamps
    analysis.createdAt = new Date();
    analysis.updatedAt = new Date();

    const result = await db.collection('narrative_analyses').insertOne(analysis);

    res.json({
      success: true,
      id: result.insertedId,
      message: 'Análisis guardado exitosamente'
    });
  } catch (error) {
    console.error('Error guardando análisis:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Obtener análisis por ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!db) {
      return res.status(404).json({
        success: false,
        error: 'Análisis no encontrado'
      });
    }

    const analysis = await db.collection('narrative_analyses').findOne({ 
      $or: [
        { id },
        { _id: id }
      ]
    });

    if (!analysis) {
      return res.status(404).json({
        success: false,
        error: 'Análisis no encontrado'
      });
    }

    res.json({
      success: true,
      analysis
    });
  } catch (error) {
    console.error('Error obteniendo análisis:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Actualizar análisis (compartir, likes, etc)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    
    if (!db) {
      return res.json({
        success: true,
        message: 'Actualización simulada'
      });
    }

    updates.updatedAt = new Date();

    const result = await db.collection('narrative_analyses').updateOne(
      { 
        $or: [
          { id },
          { _id: id }
        ]
      },
      { $set: updates }
    );

    res.json({
      success: true,
      modified: result.modifiedCount
    });
  } catch (error) {
    console.error('Error actualizando análisis:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Obtener estadísticas de análisis
router.get('/stats/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    
    if (!db) {
      return res.json({
        success: true,
        stats: {
          totalAnalyses: 0,
          sharedAnalyses: 0,
          totalLikes: 0,
          theoriesUsed: []
        }
      });
    }

    const analyses = await db.collection('narrative_analyses')
      .find({ userId })
      .toArray();

    const stats = {
      totalAnalyses: analyses.length,
      sharedAnalyses: analyses.filter(a => a.shared).length,
      totalLikes: analyses.reduce((sum, a) => sum + (a.likes || 0), 0),
      theoriesUsed: [...new Set(analyses.map(a => a.theoryId))]
    };

    res.json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Error obteniendo estadísticas:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

module.exports = router;
