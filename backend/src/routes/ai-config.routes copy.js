// 🧠 SYNAPSIS - Rutas para configuración de IA desde MongoDB Atlas
console.log('🎉 Cargando rutas de configuración de IA...');

const express = require('express');
const router = express.Router();
const sharedAIConfig = require('../services/shared-ai-config-simple.service');

console.log('🛣️ Registrando rutas de IA: /test, /providers, /narrative, etc.');

// Ruta de prueba para verificar conexión
router.get('/test', async (req, res) => {
  try {
    console.log('🧪 Probando conexión a MongoDB Atlas...');
    const testConnection = await sharedAIConfig.connect();
    
    // Verificar que podemos listar colecciones
    const collections = await testConnection.listCollections().toArray();
    console.log('📋 Colecciones disponibles:', collections.map(c => c.name));
    
    res.json({
      success: true,
      message: 'Conexión exitosa',
      collections: collections.map(c => c.name),
      database: testConnection.databaseName
    });
  } catch (error) {
    console.error('❌ Error en test:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Obtener todos los modelos disponibles
router.get('/providers', async (req, res) => {
  try {
    console.log('📡 Obteniendo modelos desde MongoDB Atlas...');
    
    const models = await sharedAIConfig.getAvailableModels('synapsis');
    
    // Agrupar por proveedor como espera el frontend
    const grouped = models.reduce((acc, model) => {
      const providerId = model.provider;
      
      if (!acc[providerId]) {
        acc[providerId] = {
          id: providerId,
          name: model.provider.charAt(0).toUpperCase() + model.provider.slice(1),
          icon: getProviderIcon(providerId),
          expanded: providerId === 'anthropic',
          models: []
        };
      }
      
      acc[providerId].models.push({
        id: model._id,
        name: model.displayName,
        provider: providerId,
        costPer1kTokens: model.cost.input / 1000, // Convertir a formato esperado
        available: model.available,
        description: model.strengths.join(', '),
        maxTokens: model.contextWindow,
        strengths: model.strengths
      });
      
      return acc;
    }, {});
    
    // Convertir a array
    const providers = Object.values(grouped);
    
    console.log(`✅ ${models.length} modelos encontrados de ${providers.length} proveedores`);
    
    // Si no hay modelos, usar datos de respaldo temporales
    if (models.length === 0) {
      console.log('⚠️ Usando modelos de respaldo temporales...');
      
      const fallbackProviders = [
        {
          id: 'anthropic',
          name: 'Anthropic',
          icon: '🧠',
          expanded: true,
          models: [
            {
              id: 'claude-3-opus',
              name: 'Claude 3 Opus',
              provider: 'anthropic',
              costPer1kTokens: 0.015,
              available: true,
              description: 'Más poderoso, análisis profundo',
              maxTokens: 200000,
              strengths: ['Análisis profundo', 'Comprensión contextual', 'Creatividad']
            },
            {
              id: 'claude-3-sonnet',
              name: 'Claude 3 Sonnet',
              provider: 'anthropic',
              costPer1kTokens: 0.003,
              available: true,
              description: 'Balance perfecto calidad-velocidad',
              maxTokens: 200000,
              strengths: ['Velocidad', 'Precisión', 'Eficiencia']
            }
          ]
        },
        {
          id: 'openai',
          name: 'OpenAI',
          icon: '🤖',
          expanded: false,
          models: [
            {
              id: 'gpt-4-turbo',
              name: 'GPT-4 Turbo',
              provider: 'openai',
              costPer1kTokens: 0.01,
              available: true,
              description: 'Análisis estructurado y creativo',
              maxTokens: 128000,
              strengths: ['Versatilidad', 'Conocimiento amplio']
            }
          ]
        }
      ];
      
      return res.json({
        success: true,
        providers: fallbackProviders,
        totalModels: 3,
        warning: 'Usando modelos de respaldo. Verifica la conexión a MongoDB Atlas.'
      });
    }
    
    res.json({
      success: true,
      providers,
      totalModels: models.length
    });
    
  } catch (error) {
    console.error('❌ Error obteniendo modelos:', error);
    res.status(500).json({
      success: false,
      error: error.message,
      providers: [] // Devolver array vacío como fallback
    });
  }
});

// Generar análisis narrativo con IA
router.post('/narrative', async (req, res) => {
  try {
    const { 
      movieId, 
      movieTitle, 
      theoryId, 
      modelId,
      userId = 'demo_user'
    } = req.body;
    
    console.log(`🎬 Generando análisis narrativo para "${movieTitle}"`);
    console.log(`📚 Teoría: ${theoryId}, Modelo: ${modelId}`);
    
    // Obtener configuración del modelo
    const model = await sharedAIConfig.getModel(modelId);
    
    if (!model || !model.available) {
      throw new Error(`Modelo ${modelId} no disponible`);
    }
    
    console.log(`✅ Usando ${model.displayName} (${model.provider})`);
    
    // TODO: Implementar la generación real con las APIs
    // Por ahora, respuesta de ejemplo
    const mockAnalysis = {
      id: `analysis-${Date.now()}`,
      movieId,
      movieTitle,
      theoryId,
      modelUsed: modelId,
      content: `# Análisis de ${movieTitle}\n\nEste es un análisis generado con ${model.displayName} usando la teoría ${theoryId}.\n\n## Estructura Narrativa\n\nLa película presenta una estructura clásica...`,
      insights: [
        {
          category: 'Estructura',
          finding: 'Sigue el patrón clásico de tres actos',
          confidence: 0.9
        }
      ],
      metadata: {
        tokensUsed: 1500,
        processingTime: 3.2,
        cost: 0.05
      },
      createdAt: new Date().toISOString()
    };
    
    // Registrar uso
    await sharedAIConfig.trackUsage({
      appId: 'synapsis',
      userId,
      modelId,
      providerId: model.provider,
      tokensUsed: mockAnalysis.metadata.tokensUsed,
      cost: mockAnalysis.metadata.cost,
      purpose: 'narrative_analysis'
    });
    
    res.json({
      success: true,
      analysis: mockAnalysis
    });
    
  } catch (error) {
    console.error('❌ Error generando análisis:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Obtener análisis guardados de una película
router.get('/movie/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    
    // TODO: Implementar obtención desde MongoDB
    const mockAnalyses = [];
    
    res.json({
      success: true,
      analyses: mockAnalyses
    });
    
  } catch (error) {
    console.error('❌ Error obteniendo análisis:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Actualizar API key de un proveedor
router.put('/provider/:providerId/key', async (req, res) => {
  try {
    const { providerId } = req.params;
    const { apiKey } = req.body;
    
    if (!apiKey) {
      return res.status(400).json({
        success: false,
        error: 'API key requerida'
      });
    }
    
    await sharedAIConfig.updateProviderKey(providerId, apiKey);
    
    console.log(`✅ API key actualizada para ${providerId}`);
    
    res.json({
      success: true,
      message: 'API key actualizada correctamente'
    });
    
  } catch (error) {
    console.error('❌ Error actualizando API key:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Obtener estadísticas de uso
router.get('/stats', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    const stats = await sharedAIConfig.getUsageStats({
      appId: 'synapsis',
      startDate,
      endDate
    });
    
    res.json({
      success: true,
      stats
    });
    
  } catch (error) {
    console.error('❌ Error obteniendo estadísticas:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Helper para obtener iconos de proveedores
function getProviderIcon(provider) {
  const icons = {
    anthropic: '🧠',
    openai: '🤖',
    google: '✨',
    xai: '🔮',
    deepseek: '🌊'
  };
  return icons[provider] || '🤖';
}

console.log('✅ Router de IA config exportado correctamente');
module.exports = router;
