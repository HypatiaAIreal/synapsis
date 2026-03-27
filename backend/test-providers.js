// 🧠 TEST DIRECTO DEL ENDPOINT DE PROVEEDORES
const axios = require('axios');

async function testProviders() {
  console.log('\n🔍 Probando endpoint /api/analyze/providers...\n');
  
  try {
    const response = await axios.get('http://localhost:3000/api/analyze/providers');
    
    console.log('✅ Respuesta exitosa!');
    console.log('\n📊 Proveedores disponibles:\n');
    
    response.data.providers.forEach(provider => {
      const availableModels = provider.models.filter(m => m.available);
      console.log(`${provider.icon} ${provider.name}:`);
      console.log(`   - Total modelos: ${provider.models.length}`);
      console.log(`   - Disponibles: ${availableModels.length}`);
      
      availableModels.forEach(model => {
        console.log(`     ✓ ${model.name} ($${model.costPer1kTokens}/1K tokens)`);
      });
      
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('   Respuesta:', error.response.data);
    }
  }
}

// Ejecutar test
testProviders();