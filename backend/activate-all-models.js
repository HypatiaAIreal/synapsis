// 🔧 Activar TODOS los modelos en MongoDB Atlas

const { MongoClient } = require('mongodb');

const MONGODB_URI = 'mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function activateAllModels() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Conectado a MongoDB Atlas');
    
    const db = client.db('ai_config');
    
    // Actualizar TODOS los modelos a available: true
    const result = await db.collection('ai_models').updateMany(
      {}, // Todos los documentos
      { $set: { available: true } }
    );
    
    console.log(`\n✅ ${result.modifiedCount} modelos activados`);
    
    // Verificar
    const models = await db.collection('ai_models').find({}).toArray();
    console.log('\n📋 ESTADO ACTUALIZADO:');
    console.log('='.repeat(60));
    
    models.forEach(model => {
      console.log(`${model.available ? '✅' : '❌'} ${model._id} - ${model.displayName}`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.close();
  }
}

console.log('🚀 Activando TODOS los modelos en MongoDB...');
activateAllModels();
