// 🔍 Debug: Ver los IDs exactos de los modelos en MongoDB

const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function checkModelIds() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Conectado a MongoDB Atlas');
    
    const db = client.db('ai_config');
    const models = await db.collection('ai_models').find({}).toArray();
    
    console.log('\n📋 MODELOS EN MONGODB:');
    console.log('='.repeat(60));
    
    models.forEach(model => {
      console.log(`\nID: ${model._id}`);
      console.log(`Nombre: ${model.displayName}`);
      console.log(`Proveedor: ${model.provider}`);
      console.log(`Disponible: ${model.available ? '✅' : '❌'}`);
      console.log('-'.repeat(40));
    });
    
    // Buscar específicamente modelos de Gemini
    const geminiModels = models.filter(m => m.provider === 'google');
    console.log('\n✨ MODELOS DE GEMINI:');
    geminiModels.forEach(m => {
      console.log(`- ID: "${m._id}" -> ${m.displayName}`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.close();
  }
}

checkModelIds();
