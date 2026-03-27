// 🧠 SYNAPSIS - Rutas para configuración de IA desde MongoDB Atlas
console.log('🎉 Cargando rutas de configuración de IA...');

// CARGAR VARIABLES DE ENTORNO PRIMERO - ¡CRÍTICO!
require('dotenv').config({ path: require('path').join(__dirname, '../../../.env') });
console.log('🔑 Variables de entorno cargadas desde:', require('path').join(__dirname, '../../../.env'));

const express = require('express');
const router = express.Router();
const sharedAIConfig = require('../services/shared-ai-config-simple.service');

// IMPORTAR LIBRERÍAS DE IA
const OpenAI = require('openai');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Anthropic = require('@anthropic-ai/sdk');

// INICIALIZACIÓN DIFERIDA DE APIs
let openai = null;
let genAI = null;
let anthropic = null;
let deepseekConfigured = false;
let xaiConfigured = false;

// Función para inicializar APIs cuando se necesiten
function initializeAPIs() {
  if (!openai && process.env.OPENAI_API_KEY) {
    openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    console.log('✅ OpenAI API inicializada');
  }
  
  if (!genAI && process.env.GEMINI_API_KEY) {
    genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    console.log('✅ Gemini API inicializada');
  }
  
  if (!anthropic && process.env.ANTHROPIC_API_KEY) {
    anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    console.log('✅ Claude API inicializada');
  }
  
  if (!deepseekConfigured && process.env.DEEPSEEK_API_KEY) {
    deepseekConfigured = true;
    console.log('✅ DeepSeek API configurada');
  }
  
  if (!xaiConfigured && process.env.GROK_API_KEY) {
    xaiConfigured = true;
    console.log('✅ xAI (Grok) API configurada');
  }
  
  // DEBUG: Verificar que las APIs estén configuradas
  console.log('🔑 Estado de APIs:');
  console.log('  - OpenAI:', openai ? '✅ LISTA' : '❌ NO CONFIGURADA');
  console.log('  - Gemini:', genAI ? '✅ LISTA' : '❌ NO CONFIGURADA');
  console.log('  - Claude:', anthropic ? '✅ LISTA' : '❌ NO CONFIGURADA');
  console.log('  - DeepSeek:', deepseekConfigured ? '✅ LISTA' : '❌ NO CONFIGURADA');
  console.log('  - xAI (Grok):', xaiConfigured ? '✅ LISTA' : '❌ NO CONFIGURADA');
  console.log('  - ANTHROPIC_API_KEY:', process.env.ANTHROPIC_API_KEY ? '✅ EN ENV' : '❌ NO EN ENV');
}

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
        displayName: model.displayName, // Agregar displayName también
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
              displayName: 'Claude 3 Opus',
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
              displayName: 'Claude 3 Sonnet',
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
              displayName: 'GPT-4 Turbo',
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

// Generar análisis narrativo con IA - VERSIÓN CON APIS REALES
router.post('/narrative', async (req, res) => {
  try {
    // INICIALIZAR APIs SI NO ESTÁN LISTAS
    initializeAPIs();
    
    const { 
      movieId, 
      movieTitle, 
      theoryId, 
      modelId,
      prompt,
      maxTokens = 4096,
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
    
    // GENERAR ANÁLISIS REAL SEGÚN EL PROVEEDOR
    let analysisContent;
    let tokensUsed = 0;
    let cost = 0;
    
    try {
      switch (model.provider) {
        case 'openai':
          if (!openai) {
            throw new Error('OpenAI API key no configurada. Añade OPENAI_API_KEY en el archivo .env');
          }
          
          console.log('🤖 Llamando a OpenAI...');
          const openaiResponse = await openai.chat.completions.create({
            model: modelId === 'gpt-4' ? 'gpt-4' : 
                   modelId === 'gpt-4-turbo' ? 'gpt-4-turbo-preview' : 
                   modelId === 'gpt-4o' ? 'gpt-4o' :
                   'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: Math.min(maxTokens, 4096), // OpenAI tiene límite de 4096
            temperature: 0.7
          });
          
          analysisContent = openaiResponse.choices[0].message.content;
          tokensUsed = openaiResponse.usage?.total_tokens || 0;
          cost = (tokensUsed / 1000) * (model.cost.input / 1000);
          console.log('✅ Respuesta de OpenAI recibida');
          break;
          
        case 'google':
          if (!genAI) {
            throw new Error('Gemini API key no configurada. Añade GEMINI_API_KEY en el archivo .env');
          }
          
          console.log('✨ Llamando a Gemini...');
          const geminiModel = genAI.getGenerativeModel({ 
            model: modelId === 'gemini-2.5-pro' ? 'gemini-1.5-pro' :
                   modelId === 'gemini-2.0-flash' ? 'gemini-2.0-flash-exp' : 
                   modelId === 'gemini-1.5-flash' ? 'gemini-1.5-flash' : 
                   'gemini-1.5-pro' 
          });
          
          const geminiResult = await geminiModel.generateContent(prompt);
          analysisContent = geminiResult.response.text();
          // Gemini no devuelve tokens usados directamente
          tokensUsed = Math.ceil(prompt.length / 4) + Math.ceil(analysisContent.length / 4);
          cost = (tokensUsed / 1000) * (model.cost.input / 1000);
          console.log('✅ Respuesta de Gemini recibida');
          break;
          
        case 'anthropic':
          if (!anthropic) {
            throw new Error('Claude API key no configurada. Añade ANTHROPIC_API_KEY en el archivo .env');
          }
          
          console.log('🧠 Llamando a Claude...');
          const claudeResponse = await anthropic.messages.create({
            model: modelId === 'claude-3-opus' ? 'claude-3-opus-20240229' :
                   modelId === 'claude-3-sonnet' ? 'claude-3-sonnet-20240229' :
                   'claude-3-haiku-20240307',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: maxTokens
          });
          
          analysisContent = claudeResponse.content[0].text;
          tokensUsed = claudeResponse.usage?.input_tokens + claudeResponse.usage?.output_tokens || 0;
          cost = (tokensUsed / 1000) * (model.cost.input / 1000);
          console.log('✅ Respuesta de Claude recibida');
          break;
          
        case 'deepseek':
          if (!deepseekConfigured) {
            throw new Error('DeepSeek API key no configurada. Añade DEEPSEEK_API_KEY en el archivo .env');
          }
          const deepseekMaxTokens = Math.min(maxTokens, 8192); // DeepSeek límite 8192

          // DeepSeek usa la misma API que OpenAI
          console.log('🌊 Llamando a DeepSeek...');
          console.log('🔑 DeepSeek API Key:', process.env.DEEPSEEK_API_KEY ? 'Configurada' : 'NO ENCONTRADA');
          
          const deepseekResponse = await fetch('https://api.deepseek.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
            },
            body: JSON.stringify({
              model: 'deepseek-chat',
              messages: [{ role: 'user', content: prompt }],
              max_tokens: deepseekMaxTokens,
              temperature: 0.7
            })
          });
          
          if (!deepseekResponse.ok) {
            const errorData = await deepseekResponse.json();
            console.error('❌ DeepSeek error completo:', errorData);
            throw new Error(`DeepSeek API error: ${deepseekResponse.status} - ${JSON.stringify(errorData)}`);
          }
          
          const deepseekData = await deepseekResponse.json();
          analysisContent = deepseekData.choices[0].message.content;
          tokensUsed = deepseekData.usage?.total_tokens || 0;
          cost = (tokensUsed / 1000) * 0.0014;
          console.log('✅ Respuesta de DeepSeek recibida');
          break;
          
        case 'xai':
          if (!xaiConfigured) {
            throw new Error('xAI (Grok) API key no configurada. Añade GROK_API_KEY en el archivo .env');
          }
          
          console.log('🔮 Llamando a xAI Grok...');
          const grokResponse = await fetch('https://api.x.ai/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${process.env.GROK_API_KEY}`
            },
            body: JSON.stringify({
              mmodel: 'grok-4',
              messages: [{ role: 'user', content: prompt }],
              max_tokens: Math.min(maxTokens, 4096),
              temperature: 0.7
            })
          });
          
          if (!grokResponse.ok) {
            const errorData = await grokResponse.json();
            console.error('❌ Grok error:', errorData);
            throw new Error(`Grok API error: ${grokResponse.status}`);
          }
          
          const grokData = await grokResponse.json();
          analysisContent = grokData.choices[0].message.content;
          tokensUsed = grokData.usage?.total_tokens || 0;
          cost = (tokensUsed / 1000) * 0.005;
          console.log('✅ Respuesta de Grok recibida');
          break;
          
        case 'local':
          console.log('💻 Usando modelo local...');
          // Para modelos locales como Llama
          analysisContent = `# Análisis de ${movieTitle} con Modelo Local\n\nPara usar modelos locales como Llama, necesitas configurar un servidor local (como Ollama o LM Studio) y ajustar la configuración.`;
          tokensUsed = 0;
          cost = 0;
          break;
          
        default:
          // Fallback a análisis demo
          console.log('⚠️ Proveedor no reconocido, usando análisis demo...');
          analysisContent = `# Análisis de ${movieTitle}\n\nEste es un análisis demo. El proveedor '${model.provider}' no está completamente implementado aún.`;
          tokensUsed = 1000;
          cost = 0;
      }
    } catch (apiError) {
      console.error('❌ Error llamando API:', apiError);
      // Si falla la API, usar análisis demo
      analysisContent = `# Análisis de ${movieTitle}\n\n⚠️ Error al generar análisis real:\n${apiError.message}\n\n---\n\nModo demo activado. Verifica tu configuración de API keys.`;
      tokensUsed = 500;
      cost = 0;
    }
    
    // Crear objeto de análisis
    const analysis = {
      id: `analysis-${Date.now()}`,
      movieId,
      movieTitle,
      theoryId,
      modelUsed: modelId,
      content: analysisContent,
      insights: extractInsights(analysisContent),
      metadata: {
        tokensUsed,
        processingTime: Date.now() / 1000,
        cost,
        estimatedCost: `$${cost.toFixed(4)}`
      },
      createdAt: new Date().toISOString()
    };
    
    // Registrar uso
    await sharedAIConfig.trackUsage({
      appId: 'synapsis',
      userId,
      modelId,
      providerId: model.provider,
      tokensUsed: analysis.metadata.tokensUsed,
      cost: analysis.metadata.cost,
      purpose: 'narrative_analysis'
    });
    
    console.log(`✅ Análisis completado. Tokens: ${tokensUsed}, Costo: $${cost.toFixed(4)}`);
    
    res.json({
      success: true,
      analysis: analysis.content, // El frontend espera el contenido directamente
      metadata: analysis.metadata,
      id: analysis.id
    });
    
  } catch (error) {
    console.error('❌ Error generando análisis:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Función auxiliar para extraer insights del análisis
function extractInsights(content) {
  // Análisis básico del contenido para extraer insights
  const insights = [];
  
  if (content.includes('tres actos') || content.includes('estructura clásica')) {
    insights.push({
      category: 'Estructura',
      finding: 'Sigue el patrón clásico de tres actos',
      confidence: 0.9
    });
  }
  
  if (content.includes('héroe') || content.includes('protagonista')) {
    insights.push({
      category: 'Personajes',
      finding: 'Presenta un viaje del héroe tradicional',
      confidence: 0.85
    });
  }
  
  return insights;
}

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
    deepseek: '🌊',
    local: '💻'
  };
  return icons[provider] || '🤖';
}

// Ruta de prueba para verificar APIs
router.get('/test-apis', async (req, res) => {
  initializeAPIs();
  
  res.json({
    success: true,
    apis: {
      openai: !!openai,
      gemini: !!genAI,
      anthropic: !!anthropic,
      deepseek: deepseekConfigured,
      xai: xaiConfigured
    },
    env: {
      OPENAI_API_KEY: !!process.env.OPENAI_API_KEY,
      GEMINI_API_KEY: !!process.env.GEMINI_API_KEY,
      ANTHROPIC_API_KEY: !!process.env.ANTHROPIC_API_KEY,
      DEEPSEEK_API_KEY: !!process.env.DEEPSEEK_API_KEY,
      GROK_API_KEY: !!process.env.GROK_API_KEY
    }
  });
});

console.log('✅ Router de IA config exportado correctamente');
module.exports = router;
