// 🚀 TEST RÁPIDO - Ejecutar con: node test-quick.js

const service = require('./src/services/shared-ai-config-simple.service.js');

async function test() {
  console.log('🔧 Testing servicio simplificado...\n');
  
  try {
    const models = await service.getAvailableModels('test');
    console.log(`✅ Modelos obtenidos: ${models.length}`);
    console.log('\nModelos disponibles:');
    models.forEach(m => {
      if (m.available) {
        console.log(`  ✅ ${m._id} (${m.provider})`);
      }
    });
    
    console.log('\n✅ TEST EXITOSO - El servicio funciona');
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await service.close();
  }
}

test();
