// 🚀 Script para migrar configuración de modelos de IA a MongoDB Atlas
// Ejecutar una sola vez para centralizar todo

const { MongoClient } = require('mongodb');
const crypto = require('crypto');

const MONGODB_URI = "mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Función para encriptar API keys
function encrypt(text, key) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

async function migrateModelsToAtlas() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    console.log('🔄 Conectando a MongoDB Atlas...');
    await client.connect();
    
    const db = client.db('ai_config');
    
    // 1. Crear colección de proveedores
    console.log('📦 Creando proveedores de IA...');
    const providers = [
      {
        _id: 'anthropic',
        name: 'Anthropic',
        icon: '🧠',
        enabled: true,
        apiEndpoint: 'https://api.anthropic.com/v1/messages',
        // API key se actualizará después manualmente
        apiKeyEnc: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'openai',
        name: 'OpenAI',
        icon: '🤖',
        enabled: true,
        apiEndpoint: 'https://api.openai.com/v1',
        apiKeyEnc: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'google',
        name: 'Google',
        icon: '✨',
        enabled: true,
        apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta',
        apiKeyEnc: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'xai',
        name: 'xAI',
        icon: '🔮',
        enabled: true,
        apiEndpoint: 'https://api.x.ai/v1',
        apiKeyEnc: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'deepseek',
        name: 'DeepSeek',
        icon: '🌊',
        enabled: true,
        apiEndpoint: 'https://api.deepseek.com/v1',
        apiKeyEnc: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    // Insertar proveedores (o actualizar si existen)
    for (const provider of providers) {
      await db.collection('ai_providers').replaceOne(
        { _id: provider._id },
        provider,
        { upsert: true }
      );
    }
    console.log('✅ Proveedores creados');
    
    // 2. Crear colección de modelos
    console.log('🤖 Creando modelos de IA...');
    const models = [
      // ANTHROPIC MODELS
      {
        _id: 'claude-3-opus',
        provider: 'anthropic',
        name: 'Claude 3 Opus',
        displayName: '🎭 Claude 3 Opus',
        contextWindow: 200000,
        cost: { input: 15.0, output: 75.0 },
        features: ['superior_reasoning', 'creative_writing', 'complex_analysis'],
        strengths: ['Comprensión profunda', 'Creatividad excepcional', 'Análisis filosófico'],
        rating: {
          quality: 10,
          speed: 7,
          costEfficiency: 4,
          creativity: 10,
          technical: 9
        },
        bestFor: ['Videos filosóficos', 'Contenido creativo', 'Análisis profundo'],
        maxVideoLength: 180,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'claude-3-sonnet',
        provider: 'anthropic',
        name: 'Claude 3 Sonnet',
        displayName: '🎼 Claude 3 Sonnet',
        contextWindow: 200000,
        cost: { input: 3.0, output: 15.0 },
        features: ['balanced_performance', 'efficient', 'reliable'],
        strengths: ['Balance perfecto', 'Respuestas rápidas', 'Costo eficiente'],
        rating: {
          quality: 9,
          speed: 9,
          costEfficiency: 8,
          creativity: 8,
          technical: 8
        },
        bestFor: ['Uso general', 'Videos medianos', 'Balance calidad-precio'],
        maxVideoLength: 120,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'claude-3-haiku',
        provider: 'anthropic',
        name: 'Claude 3 Haiku',
        displayName: '🌸 Claude 3 Haiku',
        contextWindow: 200000,
        cost: { input: 0.25, output: 1.25 },
        features: ['ultra_fast', 'cost_effective', 'simple_tasks'],
        strengths: ['Velocidad extrema', 'Muy económico', 'Tareas simples'],
        rating: {
          quality: 7,
          speed: 10,
          costEfficiency: 10,
          creativity: 6,
          technical: 7
        },
        bestFor: ['Videos cortos', 'Resúmenes rápidos', 'Alto volumen'],
        maxVideoLength: 30,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // OPENAI MODELS
      {
        _id: 'gpt-4-turbo',
        provider: 'openai',
        name: 'GPT-4 Turbo',
        displayName: '🚀 GPT-4 Turbo',
        contextWindow: 128000,
        cost: { input: 10.0, output: 30.0 },
        features: ['vision', 'function_calling', 'json_mode'],
        strengths: ['Multimodal', 'Análisis técnico', 'Estructuración'],
        rating: {
          quality: 9,
          speed: 8,
          costEfficiency: 6,
          creativity: 8,
          technical: 10
        },
        bestFor: ['Contenido técnico', 'Tutoriales', 'Documentación'],
        maxVideoLength: 90,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'gpt-4o',
        provider: 'openai',
        name: 'GPT-4 Omni',
        displayName: '🎯 GPT-4o',
        contextWindow: 128000,
        cost: { input: 5.0, output: 15.0 },
        features: ['multimodal', 'fast', 'efficient'],
        strengths: ['Velocidad mejorada', 'Multimodal nativo', 'Eficiente'],
        rating: {
          quality: 9,
          speed: 9,
          costEfficiency: 7,
          creativity: 8,
          technical: 9
        },
        bestFor: ['Videos con imágenes', 'Análisis rápido', 'Contenido mixto'],
        maxVideoLength: 60,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'gpt-3.5-turbo',
        provider: 'openai',
        name: 'GPT-3.5 Turbo',
        displayName: '⚡ GPT-3.5 Turbo',
        contextWindow: 16000,
        cost: { input: 0.5, output: 1.5 },
        features: ['fast', 'cheap', 'reliable'],
        strengths: ['Muy rápido', 'Económico', 'Confiable'],
        rating: {
          quality: 7,
          speed: 10,
          costEfficiency: 9,
          creativity: 7,
          technical: 7
        },
        bestFor: ['Videos cortos', 'Alto volumen', 'Presupuesto limitado'],
        maxVideoLength: 20,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // GOOGLE MODELS
      {
        _id: 'gemini-2.5-pro',
        provider: 'google',
        name: 'Gemini 2.5 Pro',
        displayName: '💎 Gemini 2.5 Pro',
        contextWindow: 200000,
        cost: { input: 1.25, output: 10.0 },
        features: ['thinking', 'reasoning', 'multimodal'],
        strengths: ['Razonamiento avanzado', 'Contexto largo', 'Pensamiento adaptativo'],
        rating: {
          quality: 9,
          speed: 8,
          costEfficiency: 8,
          creativity: 8,
          technical: 9
        },
        bestFor: ['Análisis complejos', 'Videos largos', 'Razonamiento'],
        maxVideoLength: 150,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'gemini-2.0-flash',
        provider: 'google',
        name: 'Gemini 2.0 Flash',
        displayName: '⚡ Gemini 2.0 Flash',
        contextWindow: 1000000,
        cost: { input: 0.1, output: 0.4 },
        features: ['multimodal', 'realtime', 'native_tools'],
        strengths: ['Ultra rápido', 'Contexto masivo', 'Muy económico'],
        rating: {
          quality: 8,
          speed: 10,
          costEfficiency: 10,
          creativity: 7,
          technical: 8
        },
        bestFor: ['Videos muy largos', 'Procesamiento rápido', 'Gran volumen'],
        maxVideoLength: 240,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        _id: 'gemini-1.5-flash',
        provider: 'google',
        name: 'Gemini 1.5 Flash',
        displayName: '🌟 Gemini 1.5 Flash',
        contextWindow: 1000000,
        cost: { input: 0.075, output: 0.3 },
        features: ['image_understanding', 'video_understanding', 'audio_understanding'],
        strengths: ['Comprensión multimedia', 'Económico', 'Versátil'],
        rating: {
          quality: 8,
          speed: 9,
          costEfficiency: 9,
          creativity: 7,
          technical: 8
        },
        bestFor: ['Contenido multimedia', 'Balance general', 'Videos variados'],
        maxVideoLength: 180,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // xAI MODEL
      {
        _id: 'grok',
        provider: 'xai',
        name: 'Grok',
        displayName: '🔮 Grok',
        contextWindow: 8192,
        cost: { input: 5.0, output: 15.0 },
        features: ['uncensored', 'humor', 'current_events'],
        strengths: ['Sin censura', 'Humor', 'Actualidad'],
        rating: {
          quality: 8,
          speed: 8,
          costEfficiency: 7,
          creativity: 9,
          technical: 7
        },
        bestFor: ['Análisis sin filtros', 'Contenido humorístico', 'Temas actuales'],
        maxVideoLength: 60,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      // DEEPSEEK MODEL
      {
        _id: 'deepseek',
        provider: 'deepseek',
        name: 'DeepSeek Chat',
        displayName: '🌊 DeepSeek Chat',
        contextWindow: 32768,
        cost: { input: 1.4, output: 2.8 },
        features: ['efficient', 'code_focused', 'economical'],
        strengths: ['Eficiente', 'Económico', 'Código'],
        rating: {
          quality: 8,
          speed: 8,
          costEfficiency: 8,
          creativity: 7,
          technical: 9
        },
        bestFor: ['Análisis técnico', 'Código', 'Eficiencia'],
        maxVideoLength: 60,
        enabled: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];
    
    // Insertar modelos
    for (const model of models) {
      await db.collection('ai_models').replaceOne(
        { _id: model._id },
        model,
        { upsert: true }
      );
    }
    console.log('✅ Modelos creados');
    
    // 3. Crear índices
    console.log('📑 Creando índices...');
    await db.collection('ai_models').createIndex({ provider: 1 });
    await db.collection('ai_models').createIndex({ 'rating.quality': -1 });
    await db.collection('ai_models').createIndex({ enabled: 1 });
    await db.collection('ai_providers').createIndex({ enabled: 1 });
    await db.collection('ai_usage_stats').createIndex({ timestamp: -1 });
    await db.collection('ai_usage_stats').createIndex({ appId: 1, timestamp: -1 });
    console.log('✅ Índices creados');
    
    console.log('\n🎉 ¡Migración completada exitosamente!');
    console.log('\n📝 PRÓXIMOS PASOS:');
    console.log('1. Actualizar las API keys encriptadas en la colección ai_providers');
    console.log('2. Integrar shared-ai-config.service.js en ambas apps');
    console.log('3. Actualizar el frontend para usar el nuevo servicio');
    
  } catch (error) {
    console.error('❌ Error durante la migración:', error);
  } finally {
    await client.close();
  }
}

// Ejecutar migración
migrateModelsToAtlas()
  .then(() => console.log('\n✅ Script finalizado'))
  .catch(console.error);
