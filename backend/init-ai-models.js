// 🚀 Script para inicializar modelos de IA en MongoDB Atlas
const { MongoClient } = require('mongodb');

const MONGODB_URI = "mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const AI_MODELS = [
  // Anthropic
  {
    _id: 'claude-3-opus',
    provider: 'anthropic',
    modelName: 'claude-3-opus-20240229',
    displayName: 'Claude 3 Opus',
    cost: { input: 15, output: 75 }, // por millón de tokens
    contextWindow: 200000,
    strengths: ['Análisis profundo', 'Comprensión contextual', 'Creatividad narrativa'],
    enabled: true
  },
  {
    _id: 'claude-3-sonnet',
    provider: 'anthropic',
    modelName: 'claude-3-sonnet-20240229',
    displayName: 'Claude 3 Sonnet',
    cost: { input: 3, output: 15 },
    contextWindow: 200000,
    strengths: ['Balance velocidad-calidad', 'Análisis estructurado', 'Eficiencia'],
    enabled: true
  },
  {
    _id: 'claude-3-haiku',
    provider: 'anthropic',
    modelName: 'claude-3-haiku-20240307',
    displayName: 'Claude 3 Haiku',
    cost: { input: 0.25, output: 1.25 },
    contextWindow: 200000,
    strengths: ['Velocidad extrema', 'Tareas simples', 'Costo eficiente'],
    enabled: true
  },
  
  // OpenAI
  {
    _id: 'gpt-4-turbo',
    provider: 'openai',
    modelName: 'gpt-4-turbo-preview',
    displayName: 'GPT-4 Turbo',
    cost: { input: 10, output: 30 },
    contextWindow: 128000,
    strengths: ['Versatilidad', 'Conocimiento amplio', 'Análisis técnico'],
    enabled: true
  },
  {
    _id: 'gpt-4',
    provider: 'openai',
    modelName: 'gpt-4',
    displayName: 'GPT-4',
    cost: { input: 30, output: 60 },
    contextWindow: 8192,
    strengths: ['Precisión', 'Razonamiento complejo', 'Creatividad'],
    enabled: true
  },
  {
    _id: 'gpt-3.5-turbo',
    provider: 'openai',
    modelName: 'gpt-3.5-turbo',
    displayName: 'GPT-3.5 Turbo',
    cost: { input: 0.5, output: 1.5 },
    contextWindow: 16385,
    strengths: ['Velocidad', 'Costo efectivo', 'Tareas generales'],
    enabled: true
  },
  
  // Google
  {
    _id: 'gemini-pro',
    provider: 'google',
    modelName: 'gemini-pro',
    displayName: 'Gemini Pro',
    cost: { input: 0.5, output: 1.5 },
    contextWindow: 32768,
    strengths: ['Multimodal', 'Análisis visual', 'Eficiencia'],
    enabled: true
  },
  
  // xAI
  {
    _id: 'grok-1',
    provider: 'xai',
    modelName: 'grok-1',
    displayName: 'Grok',
    cost: { input: 5, output: 15 },
    contextWindow: 8192,
    strengths: ['Actualidad', 'Humor', 'Perspectiva única'],
    enabled: true
  },
  
  // DeepSeek
  {
    _id: 'deepseek-chat',
    provider: 'deepseek',
    modelName: 'deepseek-chat',
    displayName: 'DeepSeek Chat',
    cost: { input: 0.14, output: 0.28 },
    contextWindow: 32768,
    strengths: ['Costo ultra bajo', 'Eficiencia', 'Código'],
    enabled: true
  },
  {
    _id: 'deepseek-coder',
    provider: 'deepseek',
    modelName: 'deepseek-coder',
    displayName: 'DeepSeek Coder',
    cost: { input: 0.14, output: 0.28 },
    contextWindow: 16384,
    strengths: ['Análisis de código', 'Documentación técnica', 'Eficiencia'],
    enabled: true
  }
];

const AI_PROVIDERS = [
  {
    _id: 'anthropic',
    name: 'Anthropic',
    enabled: true,
    apiKeyEnc: process.env.ANTHROPIC_API_KEY ? 'configured' : null,
    endpoint: 'https://api.anthropic.com/v1/messages'
  },
  {
    _id: 'openai',
    name: 'OpenAI',
    enabled: true,
    apiKeyEnc: process.env.OPENAI_API_KEY ? 'configured' : null,
    endpoint: 'https://api.openai.com/v1/chat/completions'
  },
  {
    _id: 'google',
    name: 'Google',
    enabled: true,
    apiKeyEnc: process.env.GEMINI_API_KEY ? 'configured' : null,
    endpoint: 'https://generativelanguage.googleapis.com/v1beta/models'
  },
  {
    _id: 'xai',
    name: 'xAI',
    enabled: true,
    apiKeyEnc: process.env.GROK_API_KEY ? 'configured' : null,
    endpoint: 'https://api.x.ai/v1/chat/completions'
  },
  {
    _id: 'deepseek',
    name: 'DeepSeek',
    enabled: true,
    apiKeyEnc: process.env.DEEPSEEK_API_KEY ? 'configured' : null,
    endpoint: 'https://api.deepseek.com/v1/chat/completions'
  }
];

async function initializeAIModels() {
  let client;
  
  try {
    console.log('🔄 Conectando a MongoDB Atlas...');
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    
    console.log('✅ Conexión exitosa');
    
    // Usar la base de datos correcta
    const db = client.db('Cluster0');
    
    // Crear colecciones si no existen
    console.log('\n📚 Creando colecciones...');
    
    // Limpiar colecciones existentes (opcional)
    const collections = await db.listCollections().toArray();
    const collectionNames = collections.map(c => c.name);
    
    if (collectionNames.includes('ai_models')) {
      console.log('⚠️  Colección ai_models ya existe. ¿Deseas sobrescribir? (Ctrl+C para cancelar)');
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    // Insertar proveedores
    console.log('\n🏢 Insertando proveedores de IA...');
    const providersCollection = db.collection('ai_providers');
    await providersCollection.deleteMany({}); // Limpiar existentes
    await providersCollection.insertMany(AI_PROVIDERS);
    console.log(`✅ ${AI_PROVIDERS.length} proveedores insertados`);
    
    // Insertar modelos
    console.log('\n🤖 Insertando modelos de IA...');
    const modelsCollection = db.collection('ai_models');
    await modelsCollection.deleteMany({}); // Limpiar existentes
    await modelsCollection.insertMany(AI_MODELS);
    console.log(`✅ ${AI_MODELS.length} modelos insertados`);
    
    // Verificar
    console.log('\n📊 Verificando datos insertados...');
    const modelCount = await modelsCollection.countDocuments();
    const providerCount = await providersCollection.countDocuments();
    
    console.log(`  - Modelos: ${modelCount}`);
    console.log(`  - Proveedores: ${providerCount}`);
    
    // Mostrar ejemplo
    const sampleModel = await modelsCollection.findOne();
    console.log('\n📋 Modelo de ejemplo:', sampleModel);
    
    console.log('\n✨ ¡Inicialización completada con éxito!');
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    if (client) {
      await client.close();
      console.log('\n👋 Conexión cerrada');
    }
  }
}

// Ejecutar
console.log('🚀 SYNAPSIS - Inicializador de Modelos de IA');
console.log('============================================\n');

initializeAIModels();
