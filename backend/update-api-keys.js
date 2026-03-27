// 🔐 Script para actualizar API keys en MongoDB Atlas de forma segura
// IMPORTANTE: Ejecutar solo una vez con las API keys correctas

const { MongoClient } = require('mongodb');
const crypto = require('crypto');
const readline = require('readline');

const MONGODB_URI = "mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Clave de encriptación (CAMBIAR EN PRODUCCIÓN)
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || '0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef';

// Función para encriptar
function encrypt(text) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return iv.toString('hex') + ':' + encrypted.toString('hex');
}

// Crear interfaz para input seguro
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para preguntar de forma segura
function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function updateAPIKeys() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    console.log('🔄 Conectando a MongoDB Atlas...');
    await client.connect();
    
    const db = client.db('ai_config');
    
    console.log('\n🔐 ACTUALIZACIÓN DE API KEYS');
    console.log('================================');
    console.log('Ingresa las API keys (dejar en blanco para omitir):\n');
    
    // Obtener API keys del usuario
    const apiKeys = {
      anthropic: await askQuestion('ANTHROPIC_API_KEY: '),
      openai: await askQuestion('OPENAI_API_KEY: '),
      google: await askQuestion('GEMINI_API_KEY: '),
      xai: await askQuestion('GROK_API_KEY: '),
      deepseek: await askQuestion('DEEPSEEK_API_KEY: ')
    };
    
    console.log('\n📝 Actualizando API keys...');
    
    // Actualizar cada proveedor
    for (const [provider, apiKey] of Object.entries(apiKeys)) {
      if (apiKey && apiKey.trim()) {
        const encryptedKey = encrypt(apiKey.trim());
        
        const result = await db.collection('ai_providers').updateOne(
          { _id: provider },
          { 
            $set: { 
              apiKeyEnc: encryptedKey,
              updatedAt: new Date()
            }
          }
        );
        
        if (result.modifiedCount > 0) {
          console.log(`✅ ${provider}: API key actualizada`);
        } else {
          console.log(`⚠️ ${provider}: No se encontró el proveedor`);
        }
      } else {
        console.log(`⏭️ ${provider}: Omitido`);
      }
    }
    
    console.log('\n🎉 ¡Actualización completada!');
    
    // Verificar disponibilidad
    console.log('\n🔍 Verificando disponibilidad de modelos...');
    
    const providers = await db.collection('ai_providers').find({}).toArray();
    const models = await db.collection('ai_models').find({}).toArray();
    
    console.log('\n📊 RESUMEN:');
    console.log('===========');
    
    for (const provider of providers) {
      const hasKey = !!provider.apiKeyEnc;
      const modelCount = models.filter(m => m.provider === provider._id).length;
      
      console.log(`${provider.icon} ${provider.name}:`);
      console.log(`   - API Key: ${hasKey ? '✅ Configurada' : '❌ No configurada'}`);
      console.log(`   - Modelos: ${modelCount}`);
      console.log(`   - Estado: ${provider.enabled ? 'Habilitado' : 'Deshabilitado'}`);
    }
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    rl.close();
    await client.close();
  }
}

// Ejecutar
console.log('🚀 SYNAPSIS & HARMONYATLAS - Configuración de API Keys\n');
updateAPIKeys()
  .then(() => console.log('\n✅ Script finalizado'))
  .catch(console.error);
