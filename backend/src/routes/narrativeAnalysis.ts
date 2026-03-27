// 🤖 BACKEND PROXY PARA ANÁLISIS NARRATIVO
// Crear este archivo en: backend/src/routes/narrativeAnalysis.ts

import { Router, Request, Response } from 'express';
import axios from 'axios';

const router = Router();

// Configuración de modelos
const AI_CONFIGS = {
  claude: {
    endpoint: 'https://api.anthropic.com/v1/messages',
    headers: (apiKey: string) => ({
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01'
    }),
    body: (prompt: string) => ({
      model: 'claude-3-opus-20240229',
      max_tokens: 4000,
      messages: [{ role: 'user', content: prompt }]
    }),
    extractResponse: (data: any) => data.content[0].text
  },
  openai: {
    endpoint: 'https://api.openai.com/v1/chat/completions',
    headers: (apiKey: string) => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }),
    body: (prompt: string) => ({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4000,
      temperature: 0.7
    }),
    extractResponse: (data: any) => data.choices[0].message.content
  },
  gemini: {
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
    headers: () => ({
      'Content-Type': 'application/json',
    }),
    body: (prompt: string) => ({
      contents: [{ parts: [{ text: prompt }] }]
    }),
    extractResponse: (data: any) => data.candidates[0].content.parts[0].text,
    urlParams: (apiKey: string) => `?key=${apiKey}`
  },
  deepseek: {
    endpoint: 'https://api.deepseek.com/v1/chat/completions',
    headers: (apiKey: string) => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }),
    body: (prompt: string) => ({
      model: 'deepseek-chat',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4000
    }),
    extractResponse: (data: any) => data.choices[0].message.content
  },
  grok: {
    endpoint: 'https://api.x.ai/v1/chat/completions',
    headers: (apiKey: string) => ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    }),
    body: (prompt: string) => ({
      model: 'grok-beta',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 4000,
      temperature: 0.7
    }),
    extractResponse: (data: any) => data.choices[0].message.content
  }

};

// Endpoint para análisis narrativo
router.post('/narrative', async (req: Request, res: Response) => {
  try {
    const { model, prompt, movieTitle, theoryId } = req.body;
    
    // Obtener configuración del modelo
    const config = AI_CONFIGS[model as keyof typeof AI_CONFIGS];
    if (!config) {
      return res.status(400).json({ error: 'Modelo no soportado' });
    }

    // Obtener API key del entorno
    const apiKeyMap: Record<string, string | undefined> = {
      claude: process.env.CLAUDE_API_KEY,
      openai: process.env.OPENAI_API_KEY,
      gemini: process.env.GEMINI_API_KEY,
      deepseek: process.env.DEEPSEEK_API_KEY,
      grok: process.env.GROK_API_KEY
    };

    const apiKey = apiKeyMap[model];
    if (!apiKey) {
      return res.status(400).json({ error: `No se encontró API key para ${model}` });
    }

    // Construir URL
    let url = config.endpoint;
    if (model === 'gemini' && config.urlParams) {
      url += config.urlParams(apiKey);
    }

    // Hacer la solicitud
    const response = await axios.post(
      url,
      config.body(prompt),
      { headers: config.headers(apiKey) }
    );

    // Extraer respuesta
    const analysis = config.extractResponse(response.data);

    // Devolver análisis
    res.json({ 
      success: true, 
      analysis,
      metadata: {
        model,
        movieTitle,
        theoryId,
        timestamp: new Date().toISOString()
      }
    });

  } catch (error: any) {
    console.error('Error en análisis narrativo:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Error generando análisis',
      details: error.response?.data || error.message
    });
  }
});

// Endpoint para guardar análisis
router.post('/save', async (req: Request, res: Response) => {
  try {
    const { movieId, movieTitle, theoryId, theoryName, modelUsed, content, type } = req.body;
    
    // Aquí conectar con MongoDB para guardar
    // Por ahora simulamos el guardado
    console.log('💾 Guardando análisis:', {
      movieId,
      movieTitle,
      theoryId,
      theoryName,
      modelUsed,
      type,
      contentLength: content.length
    });

    res.json({ 
      success: true, 
      message: 'Análisis guardado correctamente',
      analysisId: `analysis_${Date.now()}`
    });

  } catch (error: any) {
    console.error('Error guardando análisis:', error);
    res.status(500).json({ error: 'Error al guardar análisis' });
  }
});

// Endpoint para obtener análisis guardados
router.get('/movie/:movieId', async (req: Request, res: Response) => {
  try {
    const { movieId } = req.params;
    
    // Aquí conectar con MongoDB para obtener análisis
    // Por ahora devolvemos array vacío
    const analyses: any[] = [];

    res.json({ 
      success: true, 
      analyses,
      count: analyses.length
    });

  } catch (error: any) {
    console.error('Error obteniendo análisis:', error);
    res.status(500).json({ error: 'Error al obtener análisis' });
  }
});

export default router;