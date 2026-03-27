// 🧪 Test rápido de configuración de IA

console.log('='.repeat(60));
console.log('🧠 SYNAPSIS - Test de Configuración de IA');
console.log('='.repeat(60));

// Intentar múltiples rutas para .env
const path = require('path');
const dotenv = require('dotenv');

const envPaths = [
  path.join(__dirname, '.env'),
  path.join(__dirname, '../.env'),
  path.join(__dirname, '../../.env'),
  'C:\\synapsis\\.env'
];

console.log('\n📁 Buscando archivo .env:');
const fs = require('fs');
for (const envPath of envPaths) {
  const exists = fs.existsSync(envPath);
  console.log(`${exists ? '✅' : '❌'} ${envPath}`);
  if (exists) {
    dotenv.config({ path: envPath });
    console.log('   ↳ Cargado desde esta ubicación');
    break;
  }
}

console.log('\n🔑 Variables de API:');
console.log('ANTHROPIC_API_KEY:', process.env.ANTHROPIC_API_KEY ? '✅ ENCONTRADA' : '❌ NO ENCONTRADA');
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? '✅ ENCONTRADA' : '❌ NO ENCONTRADA');
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? '✅ ENCONTRADA' : '❌ NO ENCONTRADA');

console.log('\n💡 Si las API keys no aparecen:');
console.log('1. Verifica que el archivo .env existe en C:\\synapsis\\');
console.log('2. Reinicia el servidor completamente (Ctrl+C y npm run dev)');
console.log('3. Las variables deben decir "ENCONTRADA" arriba');

console.log('='.repeat(60));
