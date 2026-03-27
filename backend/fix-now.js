// 🚨 ARREGLO DEFINITIVO - EJECUTAR: node fix-now.js

const fs = require('fs');
const path = require('path');

console.log('🔧 ARREGLANDO TODO DE UNA VEZ...\n');

// 1. Verificar que el servicio simple existe
const serviceFile = path.join(__dirname, 'src/services/shared-ai-config-simple.service.js');
if (!fs.existsSync(serviceFile)) {
  console.log('❌ Falta el servicio simple');
  process.exit(1);
}

// 2. Verificar server.js
const serverFile = path.join(__dirname, 'src/server.js');
let serverContent = fs.readFileSync(serverFile, 'utf8');

// Asegurarse de que las rutas AI estén registradas
if (!serverContent.includes("app.use('/api/ai', aiConfigRoutes)")) {
  console.log('❌ Las rutas /api/ai no están registradas en server.js');
  console.log('📝 Por favor, verifica que en server.js esté la línea:');
  console.log("   app.use('/api/ai', aiConfigRoutes);");
  console.log('   Después de las otras rutas app.use()');
} else {
  console.log('✅ Rutas /api/ai registradas correctamente');
}

// 3. Test rápido del servicio
console.log('\n🔍 Probando servicio...');
const service = require('./src/services/shared-ai-config-simple.service.js');

service.getAvailableModels('test')
  .then(models => {
    console.log(`✅ Servicio funciona - ${models.length} modelos encontrados`);
    console.log('\n✅ TODO LISTO');
    console.log('\n📝 AHORA EJECUTA:');
    console.log('   npm run dev');
    console.log('\n📝 Y ABRE:');
    console.log('   http://localhost:3000/api/ai/providers');
    service.close();
  })
  .catch(error => {
    console.error('❌ Error:', error.message);
    service.close();
  });
