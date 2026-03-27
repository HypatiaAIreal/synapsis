// 🔍 Debug rápido para verificar rutas

console.log('🔍 VERIFICANDO RUTAS...\n');

const path = require('path');
const fs = require('fs');

// Verificar archivos
const files = [
  path.join(__dirname, 'src/routes/ai-config.routes.js'),
  path.join(__dirname, 'src/services/shared-ai-config-simple.service.js'),
  path.join(__dirname, 'src/server.js')
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${path.basename(file)} existe`);
  } else {
    console.log(`❌ ${path.basename(file)} NO ENCONTRADO`);
  }
});

// Probar importación
try {
  const routes = require('./src/routes/ai-config.routes.js');
  console.log('\n✅ Rutas importadas correctamente');
  console.log('   Tipo:', typeof routes);
} catch (error) {
  console.log('\n❌ Error importando rutas:', error.message);
}

// Probar servicio
try {
  const service = require('./src/services/shared-ai-config-simple.service.js');
  console.log('✅ Servicio importado correctamente');
} catch (error) {
  console.log('❌ Error importando servicio:', error.message);
}

console.log('\n📝 Si todo está ✅, ejecuta: npm run dev');
