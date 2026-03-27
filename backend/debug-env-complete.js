// 🔍 Debug completo de variables de entorno y APIs

console.log('🧠 SYNAPSIS - Debug de configuración de IA');
console.log('='.repeat(60));

// Cargar dotenv PRIMERO
const dotenv = require('dotenv');
const path = require('path');

// Intentar cargar desde múltiples ubicaciones
const envPath1 = path.join(__dirname, '../.env');
const envPath2 = path.join(__dirname, '../../.env');
const envPath3 = path.join(__dirname, '.env');

console.log('\n📁 Intentando cargar .env desde:');
console.log('  1.', envPath1);
console.log('  2.', envPath2);
console.log('  3.', envPath3);

// Cargar con la ruta correcta
const result = dotenv.config({ path: envPath2 });

if (result.error) {
  console.error('❌ Error cargando .env:', result.error);
} else {
  console.log('✅ .env cargado exitosamente');
}

console.log('\n🔑 Variables de entorno de IA:');
console.log('ANTHROPIC_API_KEY:', process.env.ANTHROPIC_API_KEY ? `${process.env.ANTHROPIC_API_KEY.substring(0, 20)}...` : '❌ NO ENCONTRADA');
console.log('CLAUDE_API_KEY:', process.env.CLAUDE_API_KEY ? `${process.env.CLAUDE_API_KEY.substring(0, 20)}...` : '❌ NO ENCONTRADA');
console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? `${process.env.OPENAI_API_KEY.substring(0, 20)}...` : '❌ NO ENCONTRADA');
console.log('GEMINI_API_KEY:', process.env.GEMINI_API_KEY ? `${process.env.GEMINI_API_KEY.substring(0, 20)}...` : '❌ NO ENCONTRADA');
console.log('DEEPSEEK_API_KEY:', process.env.DEEPSEEK_API_KEY ? `${process.env.DEEPSEEK_API_KEY.substring(0, 20)}...` : '❌ NO ENCONTRADA');

console.log('\n📊 TODAS las variables que contienen "API":');
Object.keys(process.env).filter(key => key.includes('API')).forEach(key => {
  console.log(`${key}: ${process.env[key] ? 'CONFIGURADA' : 'NO CONFIGURADA'}`);
});

console.log('\n🧪 Probando librerías de IA:');
try {
  const OpenAI = require('openai');
  console.log('✅ OpenAI library cargada');
} catch (e) {
  console.log('❌ Error cargando OpenAI:', e.message);
}

try {
  const { GoogleGenerativeAI } = require('@google/generative-ai');
  console.log('✅ Google Generative AI library cargada');
} catch (e) {
  console.log('❌ Error cargando Google AI:', e.message);
}

try {
  const Anthropic = require('@anthropic-ai/sdk');
  console.log('✅ Anthropic library cargada');
} catch (e) {
  console.log('❌ Error cargando Anthropic:', e.message);
}

console.log('\n🚀 Instrucciones:');
console.log('1. Ejecuta este script: node debug-env-complete.js');
console.log('2. Si las API keys no aparecen, el problema es la carga del .env');
console.log('3. Si aparecen, el problema es en server.js');

console.log('='.repeat(60));
