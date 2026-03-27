// 🔍 Script de verificación completa del sistema de IA

const { MongoClient } = require('mongodb');

const MONGODB_URI = "mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function verifySystem() {
  console.log('🔍 VERIFICACIÓN COMPLETA DEL SISTEMA DE IA\n');
  
  const client = new MongoClient(MONGODB_URI);
  
  try {
    // 1. Conectar a MongoDB
    console.log('1️⃣ Conectando a MongoDB Atlas...');
    await client.connect();
    console.log('✅ Conexión exitosa\n');
    
    // 2. Verificar base de datos
    console.log('2️⃣ Verificando base de datos ai_config...');
    const db = client.db('ai_config');
    const collections = await db.listCollections().toArray();
    console.log('   Colecciones encontradas:', collections.map(c => c.name));
    
    // 3. Verificar proveedores
    console.log('\n3️⃣ Verificando proveedores de IA...');
    const providers = await db.collection('ai_providers').find({}).toArray();
    console.log(`   Proveedores encontrados: ${providers.length}`);
    providers.forEach(p => {
      console.log(`   - ${p._id}: ${p.name} (${p.enabled ? 'Habilitado' : 'Deshabilitado'})${p.apiKeyEnc ? ' [API Key ✓]' : ' [Sin API Key]'}`);
    });
    
    // 4. Verificar modelos
    console.log('\n4️⃣ Verificando modelos de IA...');
    const models = await db.collection('ai_models').find({}).toArray();
    console.log(`   Modelos encontrados: ${models.length}`);
    
    // Agrupar por proveedor
    const modelsByProvider = {};
    models.forEach(m => {
      if (!modelsByProvider[m.provider]) {
        modelsByProvider[m.provider] = [];
      }
      modelsByProvider[m.provider].push(m._id);
    });
    
    Object.entries(modelsByProvider).forEach(([provider, modelIds]) => {
      console.log(`   ${provider}: ${modelIds.join(', ')}`);
    });
    
    // 5. Verificar disponibilidad
    console.log('\n5️⃣ Verificando disponibilidad de modelos...');
    const providersWithKeys = providers.filter(p => p.apiKeyEnc).map(p => p._id);
    const availableModels = models.filter(m => providersWithKeys.includes(m.provider));
    console.log(`   Modelos disponibles (con API key): ${availableModels.length}`);
    availableModels.forEach(m => {
      console.log(`   ✅ ${m._id} (${m.provider})`);
    });
    
    // 6. Test del servicio compartido
    console.log('\n6️⃣ Probando servicio compartido...');
    try {
      const SharedAIService = require('./src/services/shared-ai-config.service.js');
      console.log('   ✅ Servicio cargado correctamente');
      
      const testModels = await SharedAIService.getAvailableModels('test');
      console.log(`   ✅ getAvailableModels() retornó ${testModels.length} modelos`);
    } catch (error) {
      console.log('   ❌ Error cargando servicio:', error.message);
    }
    
    console.log('\n✅ VERIFICACIÓN COMPLETADA');
    console.log('\n📝 PRÓXIMOS PASOS:');
    console.log('1. Si no hay API keys, ejecutar: node update-api-keys.js');
    console.log('2. Reiniciar el servidor: npm run dev');
    console.log('3. Verificar en navegador: http://localhost:3000/api/ai/providers');
    
  } catch (error) {
    console.error('❌ Error durante verificación:', error);
  } finally {
    await client.close();
  }
}

// Ejecutar verificación
verifySystem()
  .then(() => process.exit(0))
  .catch(console.error);
