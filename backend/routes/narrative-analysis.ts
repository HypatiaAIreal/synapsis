// CREAR ARCHIVO: C:\synapsis\backend\routes\narrative-analysis.ts

import express from 'express';
import axios from 'axios';

const router = express.Router();

// Configuración de modelos con costes
const AI_MODELS = {
  claude: {
    name: 'Claude 3 Opus',
    costPer1kTokens: 0.015, // $0.015 por 1K tokens
    endpoint: 'https://api.anthropic.com/v1/messages',
    getHeaders: (apiKey: string) => ({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    }),
    buildBody: (prompt: string) => ({
      model: 'claude-3-opus-20240229',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }]
    }),
    extractResponse: (data: any) => data.content[0].text
  },
  openai: {
    name: 'GPT-4',
    costPer1kTokens: 0.03, // $0.03 por 1K tokens
    endpoint: 'https://api.openai.com/v1/chat/completions',
    getHeaders: (apiKey: string) => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }),
    buildBody: (prompt: string) => ({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4000,
      temperature: 0.7
    }),
    extractResponse: (data: any) => data.choices[0].message.content
  },
  gemini: {
    name: 'Gemini 1.5 Pro',
    costPer1kTokens: 0.00125, // $0.00125 por 1K tokens
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
    getHeaders: () => ({
      'Content-Type': 'application/json',
    }),
    buildBody: (prompt: string) => ({
      contents: [{ parts: [{ text: prompt }] }]
    }),
    buildUrl: (apiKey: string) => `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${apiKey}`,
    extractResponse: (data: any) => data.candidates[0].content.parts[0].text
  },
  deepseek: {
    name: 'DeepSeek',
    costPer1kTokens: 0.0014, // $0.0014 por 1K tokens
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    getHeaders: (apiKey: string) => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }),
    buildBody: (prompt: string) => ({
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4000
    }),
    extractResponse: (data: any) => data.choices[0].message.content
  },
  grok: {
    name: 'Grok',
    costPer1kTokens: 0.005, // $0.005 por 1K tokens (estimado)
    endpoint: 'https://api.x.ai/v1/chat/completions',
    getHeaders: (apiKey: string) => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }),
    buildBody: (prompt: string) => ({
      model: 'grok-beta',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4000,
      temperature: 0.7
    }),
    extractResponse: (data: any) => data.choices[0].message.content
  }
};

// Función para estimar tokens (aproximado)
function estimateTokens(text: string): number {
  // Aproximación: 1 token ≈ 4 caracteres
  return Math.ceil(text.length / 4);
}

// Función para calcular costo
function calculateCost(model: string, tokens: number): number {
  const modelConfig = AI_MODELS[model as keyof typeof AI_MODELS];
  if (!modelConfig) return 0;
  
  return (tokens / 1000) * modelConfig.costPer1kTokens;
}

// Endpoint para obtener información de modelos y costes
router.get('/models', (req, res) => {
  const modelsInfo = Object.entries(AI_MODELS).map(([key, model]) => ({
    id: key,
    name: model.name,
    costPer1kTokens: model.costPer1kTokens,
    available: !!process.env[`${key.toUpperCase()}_API_KEY`]
  }));

  res.json({
    success: true,
    models: modelsInfo
  });
});

// Endpoint principal para análisis narrativo
router.post('/narrative', async (req, res) => {
  try {
    const { model, prompt, movieTitle, theoryId } = req.body;

    // Validar modelo
    const modelConfig = AI_MODELS[model as keyof typeof AI_MODELS];
    if (!modelConfig) {
      return res.status(400).json({
        success: false,
        error: 'Modelo no válido'
      });
    }

    // Obtener API key del modelo
    let apiKey = process.env[`${model.toUpperCase()}_API_KEY`];
    
    // Para Claude, también intentar con ANTHROPIC_API_KEY
    if (!apiKey && model === 'claude') {
      apiKey = process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY;
    }
    if (!apiKey) {
      return res.status(400).json({
        success: false,
        error: `No se ha configurado la API key para ${modelConfig.name}`
      });
    }

    // Estimar tokens y costo
    const estimatedTokens = estimateTokens(prompt);
    const estimatedCost = calculateCost(model, estimatedTokens);

    // Construir URL (especial para Gemini)
    let url = modelConfig.endpoint;
    if (model === 'gemini' && modelConfig.buildUrl) {
      url = modelConfig.buildUrl(apiKey);
    }

    // Hacer la llamada a la API
    const response = await axios.post(
      url,
      modelConfig.buildBody(prompt),
      {
        headers: modelConfig.getHeaders(apiKey),
        timeout: 60000 // 60 segundos timeout
      }
    );

    // Extraer respuesta según el modelo
    const analysis = modelConfig.extractResponse(response.data);
    
    // Calcular tokens reales usados (aproximado)
    const actualTokens = estimateTokens(analysis) + estimatedTokens;
    const actualCost = calculateCost(model, actualTokens);

    // Guardar en MongoDB
    const newAnalysis = {
      movieId: req.body.movieId,
      movieTitle,
      theoryId,
      model,
      modelName: modelConfig.name,
      content: analysis,
      promptTokens: estimatedTokens,
      completionTokens: estimateTokens(analysis),
      totalTokens: actualTokens,
      estimatedCost: actualCost,
      userId: req.body.userId || 'demo_user',
      createdAt: new Date()
    };

    // Aquí deberías guardar en MongoDB
    // await NarrativeAnalysis.create(newAnalysis);

    res.json({
      success: true,
      analysis,
      metadata: {
        model: modelConfig.name,
        tokensUsed: actualTokens,
        estimatedCost: `$${actualCost.toFixed(4)}`,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error: any) {
    console.error('Error en análisis narrativo:', error);
    
    // Manejo específico de errores por modelo
    let errorMessage = 'Error al generar análisis';
    
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage = 'API key inválida o expirada';
      } else if (error.response.status === 429) {
        errorMessage = 'Límite de rate excedido. Intenta más tarde';
      } else if (error.response.data) {
        errorMessage = error.response.data.error?.message || 
                      error.response.data.message || 
                      errorMessage;
      }
    }

    res.status(500).json({
      success: false,
      error: errorMessage
    });
  }
});

// Endpoint para obtener análisis guardados
router.get('/analyses/:movieId', async (req, res) => {
  try {
    const { movieId } = req.params;
    const userId = req.query.userId || 'demo_user';

    // Aquí deberías consultar MongoDB
    // const analyses = await NarrativeAnalysis.find({ movieId, userId });

    // Por ahora devolvemos un array vacío
    res.json({
      success: true,
      analyses: []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Error al obtener análisis'
    });
  }
});

export default router;

// AGREGAR EN backend/server.ts o index.ts:
// import narrativeAnalysisRoutes from './routes/narrative-analysis';
// app.use('/api/analyze', narrativeAnalysisRoutes);
