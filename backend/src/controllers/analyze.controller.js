// // 🧠 SYNAPSIS - Controlador de Análisis Narrativo con IA
// const axios = require('axios');

// class AnalyzeController {

// 🧠 SYNAPSIS - Controlador de Análisis Narrativo con IA
const axios = require('axios');
const path = require('path');

// Cargar variables de entorno desde la raíz
require('dotenv').config({ path: path.join(__dirname, '../../../../.env') });

class AnalyzeController {
  
  // 📊 Obtener proveedores y modelos disponibles
  async getProviders(req, res) {
    try {
      // Cargar dotenv para asegurar que las variables estén disponibles
      require('dotenv').config();
      
      // Verificar qué API keys están configuradas
      const hasAnthropicKey = !!(process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY);
      const hasOpenAIKey = !!process.env.OPENAI_API_KEY;
      const hasGeminiKey = !!process.env.GEMINI_API_KEY;
      const hasGrokKey = !!process.env.GROK_API_KEY;
      const hasDeepSeekKey = !!process.env.DEEPSEEK_API_KEY;

      console.log('🔑 API Keys disponibles:', {
        anthropic: hasAnthropicKey,
        openai: hasOpenAIKey,
        gemini: hasGeminiKey,
        grok: hasGrokKey,
        deepseek: hasDeepSeekKey
      });

      const providers = [
        {
          id: 'anthropic',
          name: 'Anthropic',
          icon: '🧠',
          expanded: true,
          color: '#D4A574',
          models: [
            {
              id: 'claude-3-opus',
              name: 'Claude 3 Opus',
              provider: 'anthropic',
              costPer1kTokens: 0.015,
              available: hasAnthropicKey,
              description: 'Modelo más avanzado para análisis profundos',
              maxTokens: 4096,
              strengths: ['Análisis detallado', 'Comprensión contextual', 'Escritura académica']
            },
            {
              id: 'claude-3-sonnet',
              name: 'Claude 3 Sonnet',
              provider: 'anthropic',
              costPer1kTokens: 0.003,
              available: hasAnthropicKey,
              description: 'Balance perfecto entre calidad y velocidad',
              maxTokens: 4096,
              strengths: ['Velocidad', 'Precisión', 'Costo-efectivo']
            },
            {
              id: 'claude-3-haiku',
              name: 'Claude 3 Haiku',
              provider: 'anthropic',
              costPer1kTokens: 0.00025,
              available: hasAnthropicKey,
              description: 'Rápido y económico para análisis básicos',
              maxTokens: 4096,
              strengths: ['Ultra rápido', 'Económico', 'Resúmenes']
            }
          ]
        },
        {
          id: 'openai',
          name: 'OpenAI',
          icon: '🤖',
          expanded: false,
          color: '#74AA9C',
          models: [
            {
              id: 'gpt-4',
              name: 'GPT-4',
              provider: 'openai',
              costPer1kTokens: 0.03,
              available: hasOpenAIKey,
              description: 'Modelo más capaz de OpenAI',
              maxTokens: 8192,
              strengths: ['Razonamiento complejo', 'Creatividad', 'Multitarea']
            },
            {
              id: 'gpt-4-turbo',
              name: 'GPT-4 Turbo',
              provider: 'openai',
              costPer1kTokens: 0.01,
              available: hasOpenAIKey,
              description: 'Versión optimizada con ventana de contexto ampliada',
              maxTokens: 128000,
              strengths: ['Contexto largo', 'Velocidad mejorada', 'Actualizado']
            },
            {
              id: 'gpt-3.5-turbo',
              name: 'GPT-3.5 Turbo',
              provider: 'openai',
              costPer1kTokens: 0.0005,
              available: hasOpenAIKey,
              description: 'Rápido y económico para tareas simples',
              maxTokens: 4096,
              strengths: ['Velocidad', 'Economía', 'Eficiencia']
            }
          ]
        },
        {
          id: 'google',
          name: 'Google',
          icon: '✨',
          expanded: false,
          color: '#4285F4',
          models: [
            {
              id: 'gemini-pro',
              name: 'Gemini 1.5 Pro',
              provider: 'google',
              costPer1kTokens: 0.00125,
              available: hasGeminiKey,
              description: 'IA multimodal avanzada de Google',
              maxTokens: 1000000,
              strengths: ['Contexto masivo', 'Multimodal', 'Razonamiento']
            },
            {
              id: 'gemini-flash',
              name: 'Gemini 1.5 Flash',
              provider: 'google',
              costPer1kTokens: 0.00035,
              available: hasGeminiKey,
              description: 'Versión ultra rápida y eficiente',
              maxTokens: 1000000,
              strengths: ['Velocidad extrema', 'Costo bajo', 'Escalable']
            }
          ]
        },
        {
          id: 'xai',
          name: 'xAI',
          icon: '🔮',
          expanded: false,
          color: '#8B5CF6',
          models: [
            {
              id: 'grok',
              name: 'Grok',
              provider: 'xai',
              costPer1kTokens: 0.005,
              available: hasGrokKey,
              description: 'IA con humor y perspectiva única',
              maxTokens: 8192,
              strengths: ['Sin censura', 'Humor', 'Actualidad']
            }
          ]
        },
        {
          id: 'local',
          name: 'Modelos Locales',
          icon: '💻',
          expanded: false,
          color: '#10B981',
          models: [
            {
              id: 'llama-3',
              name: 'Llama 3 70B',
              provider: 'local',
              costPer1kTokens: 0,
              available: false, // Requiere configuración local
              description: 'Modelo open source de Meta',
              maxTokens: 4096,
              strengths: ['Privacidad', 'Sin costo', 'Personalizable']
            },
            {
              id: 'deepseek',
              name: 'DeepSeek Chat',
              provider: 'deepseek',
              costPer1kTokens: 0.0014,
              available: hasDeepSeekKey,
              description: 'Modelo eficiente y económico',
              maxTokens: 32768,
              strengths: ['Eficiente', 'Económico', 'Código']
            }
          ]
        }
      ];

      res.json({ success: true, providers });
    } catch (error) {
      console.error('❌ Error obteniendo proveedores:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Error al obtener proveedores' 
      });
    }
  }

  // 🤖 Para compatibilidad con el código actual
  async getModels(req, res) {
    try {
      require('dotenv').config();
      
      const models = [];
      
      // Verificar modelos disponibles
      if (process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY) {
        models.push(
          { id: 'claude-3-opus', available: true },
          { id: 'claude-3-sonnet', available: true },
          { id: 'claude-3-haiku', available: true }
        );
      }
      
      if (process.env.OPENAI_API_KEY) {
        models.push(
          { id: 'gpt-4', available: true },
          { id: 'gpt-4-turbo', available: true },
          { id: 'gpt-3.5-turbo', available: true }
        );
      }
      
      if (process.env.GEMINI_API_KEY) {
        models.push(
          { id: 'gemini-pro', available: true },
          { id: 'gemini-flash', available: true }
        );
      }
      
      if (process.env.GROK_API_KEY) {
        models.push({ id: 'grok', available: true });
      }
      
      if (process.env.DEEPSEEK_API_KEY) {
        models.push({ id: 'deepseek', available: true });
      }
      
      console.log('📊 Modelos disponibles:', models);
      res.json({ success: true, models });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        error: 'Error al obtener modelos' 
      });
    }
  }

  // 🎬 Generar análisis narrativo con IA
  async generateNarrativeAnalysis(req, res) {
    try {
      const { 
        model, 
        prompt, 
        movieId, 
        movieTitle, 
        theoryId, 
        userId,
        maxTokens = 4096 
      } = req.body;

      console.log('🎬 Generando análisis:', { model, movieTitle, theoryId });

      let analysis = '';
      let tokensUsed = 0;
      let actualCost = 0;

      // Mapeo de modelos a sus configuraciones
      const modelConfigs = {
        // Claude models
        'claude-3-opus': {
          apiKey: process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY,
          endpoint: 'https://api.anthropic.com/v1/messages',
          headers: (key) => ({
            'Content-Type': 'application/json',
            'x-api-key': key,
            'anthropic-version': '2023-06-01'
          }),
          body: {
            model: 'claude-3-opus-20240229',
            max_tokens: maxTokens,
            messages: [{ role: 'user', content: prompt }]
          },
          costPer1k: 0.015
        },
        'claude-3-sonnet': {
          apiKey: process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY,
          endpoint: 'https://api.anthropic.com/v1/messages',
          headers: (key) => ({
            'Content-Type': 'application/json',
            'x-api-key': key,
            'anthropic-version': '2023-06-01'
          }),
          body: {
            model: 'claude-3-sonnet-20240229',
            max_tokens: maxTokens,
            messages: [{ role: 'user', content: prompt }]
          },
          costPer1k: 0.003
        },
        'claude-3-haiku': {
          apiKey: process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY,
          endpoint: 'https://api.anthropic.com/v1/messages',
          headers: (key) => ({
            'Content-Type': 'application/json',
            'x-api-key': key,
            'anthropic-version': '2023-06-01'
          }),
          body: {
            model: 'claude-3-haiku-20240307',
            max_tokens: maxTokens,
            messages: [{ role: 'user', content: prompt }]
          },
          costPer1k: 0.00025
        },
        // OpenAI models
        'gpt-4': {
          apiKey: process.env.OPENAI_API_KEY,
          endpoint: 'https://api.openai.com/v1/chat/completions',
          headers: (key) => ({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
          }),
          body: {
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: maxTokens,
            temperature: 0.7
          },
          costPer1k: 0.03
        },
        'gpt-4-turbo': {
          apiKey: process.env.OPENAI_API_KEY,
          endpoint: 'https://api.openai.com/v1/chat/completions',
          headers: (key) => ({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
          }),
          body: {
            model: 'gpt-4-turbo-preview',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: maxTokens,
            temperature: 0.7
          },
          costPer1k: 0.01
        },
        'gpt-3.5-turbo': {
          apiKey: process.env.OPENAI_API_KEY,
          endpoint: 'https://api.openai.com/v1/chat/completions',
          headers: (key) => ({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
          }),
          body: {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: maxTokens,
            temperature: 0.7
          },
          costPer1k: 0.0005
        },
        // Google models
        'gemini-pro': {
          apiKey: process.env.GEMINI_API_KEY,
          endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
          headers: () => ({
            'Content-Type': 'application/json'
          }),
          body: {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { maxOutputTokens: maxTokens }
          },
          costPer1k: 0.00125
        },
        'gemini-flash': {
          apiKey: process.env.GEMINI_API_KEY,
          endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
          headers: () => ({
            'Content-Type': 'application/json'
          }),
          body: {
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { maxOutputTokens: maxTokens }
          },
          costPer1k: 0.00035
        },
        // xAI model
        'grok': {
          apiKey: process.env.GROK_API_KEY,
          endpoint: 'https://api.x.ai/v1/chat/completions',
          headers: (key) => ({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
          }),
          body: {
            model: 'grok-beta',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: maxTokens,
            temperature: 0.7
          },
          costPer1k: 0.005
        },
        // DeepSeek model
        'deepseek': {
          apiKey: process.env.DEEPSEEK_API_KEY,
          endpoint: 'https://api.deepseek.com/v1/chat/completions',
          headers: (key) => ({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`
          }),
          body: {
            model: 'deepseek-chat',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: maxTokens
          },
          costPer1k: 0.0014
        }
      };

      const config = modelConfigs[model];
      
      if (!config || !config.apiKey) {
        return res.status(400).json({ 
          error: `Modelo ${model} no está configurado o no tiene API key` 
        });
      }

      try {
        // Hacer la llamada a la API correspondiente
        const response = await axios.post(
          config.endpoint,
          config.body,
          { 
            headers: config.headers(config.apiKey),
            timeout: 60000 // 60 segundos timeout
          }
        );

        // Extraer la respuesta según el formato de cada API
        if (model.startsWith('claude')) {
          analysis = response.data.content[0].text;
          tokensUsed = response.data.usage?.output_tokens || Math.ceil(analysis.length / 4);
        } else if (model.startsWith('gpt') || model === 'grok' || model === 'deepseek') {
          analysis = response.data.choices[0].message.content;
          tokensUsed = response.data.usage?.completion_tokens || Math.ceil(analysis.length / 4);
        } else if (model.startsWith('gemini')) {
          analysis = response.data.candidates[0].content.parts[0].text;
          tokensUsed = response.data.usageMetadata?.candidatesTokenCount || Math.ceil(analysis.length / 4);
        }

        // Calcular costo
        actualCost = (tokensUsed / 1000) * config.costPer1k;

        console.log('✅ Análisis generado:', {
          model,
          tokensUsed,
          cost: `$${actualCost.toFixed(4)}`
        });

      } catch (apiError) {
        console.error('❌ Error llamando a la API:', apiError.response?.data || apiError.message);
        
        // Respuesta de fallback para desarrollo
        if (process.env.NODE_ENV === 'development') {
          analysis = `# Análisis de ${movieTitle} - ${theoryId}\n\n## Nota de Desarrollo\nEste es un análisis simulado porque hubo un error con la API.\n\nError: ${apiError.message}\n\n## Análisis Simulado\nAquí iría el análisis real generado por ${model}...`;
          tokensUsed = 100;
          actualCost = 0;
        } else {
          throw apiError;
        }
      }

      // TODO: Guardar en MongoDB aquí
      const analysisDoc = {
        movieId,
        movieTitle,
        theoryId,
        model,
        userId,
        content: analysis,
        tokensUsed,
        estimatedCost: `$${actualCost.toFixed(4)}`,
        createdAt: new Date(),
        shared: false
      };

      // Por ahora simulamos el guardado
      console.log('💾 Guardando análisis en MongoDB...', {
        movieTitle,
        theoryId,
        model,
        tokensUsed
      });

      res.json({
        success: true,
        id: `analysis_${Date.now()}`,
        analysis,
        metadata: {
          tokensUsed,
          estimatedCost: analysisDoc.estimatedCost,
          timestamp: analysisDoc.createdAt.toISOString()
        }
      });

    } catch (error) {
      console.error('❌ Error generando análisis:', error);
      res.status(500).json({ 
        success: false, 
        error: 'Error al generar análisis',
        details: error.message 
      });
    }
  }

  // 📚 Obtener análisis guardados
  async getAnalysesByMovie(req, res) {
    try {
      const { movieId } = req.params;
      
      // TODO: Conectar con MongoDB
      // Por ahora devolvemos array vacío
      const analyses = [];

      res.json({ 
        success: true, 
        analyses,
        count: analyses.length
      });

    } catch (error) {
      console.error('Error obteniendo análisis:', error);
      res.status(500).json({ 
        success: false,
        error: 'Error al obtener análisis' 
      });
    }
  }
}

module.exports = { AnalyzeController };