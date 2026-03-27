// 🧪 Script de prueba para verificar conexión a MongoDB Atlas

const { MongoClient } = require('mongodb');

const MONGODB_URI = "mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function testConnection() {
  let client;
  
  try {
    console.log('🔄 Conectando a MongoDB Atlas...');
    
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    
    console.log('✅ Conexión exitosa');
    
    // Listar todas las bases de datos
    const databases = await client.db().admin().listDatabases();
    console.log('\n📚 Bases de datos disponibles:');
    databases.databases.forEach(db => {
      console.log(`  - ${db.name} (${(db.sizeOnDisk / 1024 / 1024).toFixed(2)} MB)`);
    });
    
    // Verificar en la base de datos principal
    console.log('\n🔍 Revisando base de datos "Cluster0"...');
    const db = client.db('Cluster0');
    const collections = await db.listCollections().toArray();
    console.log('📋 Colecciones en Cluster0:', collections.map(c => c.name));
    
    // Buscar colecciones relacionadas con AI
    console.log('\n🤖 Buscando colecciones de IA...');
    for (const dbName of ['Cluster0', 'ai_config', 'synapsis']) {
      try {
        const testDb = client.db(dbName);
        const cols = await testDb.listCollections().toArray();
        const aiCols = cols.filter(c => 
          c.name.includes('ai') || 
          c.name.includes('model') || 
          c.name.includes('provider')
        );
        
        if (aiCols.length > 0) {
          console.log(`\n✨ Colecciones de IA encontradas en "${dbName}":`);
          for (const col of aiCols) {
            const count = await testDb.collection(col.name).countDocuments();
            console.log(`  - ${col.name}: ${count} documentos`);
          }
        }
      } catch (e) {
        // Ignorar errores de bases de datos que no existen
      }
    }
    
    // Verificar colecciones específicas
    console.log('\n📊 Verificando colecciones específicas...');
    const specificCollections = ['ai_models', 'ai_providers', 'ai_usage_stats'];
    
    for (const colName of specificCollections) {
      try {
        const count = await db.collection(colName).countDocuments();
        console.log(`  ✅ ${colName}: ${count} documentos`);
        
        // Si hay documentos, mostrar un ejemplo
        if (count > 0) {
          const sample = await db.collection(colName).findOne();
          console.log(`     Ejemplo:`, Object.keys(sample));
        }
      } catch (e) {
        console.log(`  ❌ ${colName}: No encontrada`);
      }
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    if (client) {
      await client.close();
      console.log('\n👋 Conexión cerrada');
    }
  }
}

// Ejecutar la prueba
testConnection();
