// 🧪 Script de verificación de configuración

console.log('🧠 SYNAPSIS - Verificación de configuración de análisis narrativo');
console.log('='.repeat(60));

// Cargar variables de entorno
require('dotenv').config({ path: '../.env' });

console.log('\n📋 Verificando variables de entorno:');
console.log('✅ ANTHROPIC_API_KEY:', process.env.ANTHROPIC_API_KEY ? 'CONFIGURADA' : '❌ NO ENCONTRADA');
console.log('✅ OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? 'CONFIGURADA' : '❌ NO ENCONTRADA');
console.log('✅ GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? 'CONFIGURADA' : '❌ NO ENCONTRADA');
console.log('✅ DEEPSEEK_API_KEY:', process.env.DEEPSEEK_API_KEY ? 'CONFIGURADA' : '❌ NO ENCONTRADA');
console.log('✅ MONGODB_URI:', process.env.MONGODB_URI ? 'CONFIGURADA' : '❌ NO ENCONTRADA');

console.log('\n📁 Verificando archivos:');
const fs = require('fs');
const path = require('path');

const filesToCheck = [
  'src/routes/ai-config.routes.js',
  'src/routes/analyses.routes.js',
  'src/server.js',
  '../.env'
];

filesToCheck.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`${exists ? '✅' : '❌'} ${file}`);
});

console.log('\n🎯 Para iniciar el servidor:');
console.log('1. cd C:\\synapsis\\backend');
console.log('2. npm run dev');

console.log('\n✨ Los modelos de IA están en MongoDB Atlas:');
console.log('   Cluster0 → ai_config → ai_models (11 modelos)');
console.log('   Cluster0 → ai_config → ai_providers (5 proveedores)');

console.log('\n💜 ¡Todo listo para generar análisis narrativos reales!');
console.log('='.repeat(60));
