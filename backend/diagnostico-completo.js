
// 🩺 DIAGNÓSTICO COMPLETO DE ANÁLISIS NARRATIVO
const path = require('path');
console.log('\n🧠 === SYNAPSIS DIAGNÓSTICO COMPLETO ===\n');

// 1. Verificar variables de entorno DESDE LA RAÍZ
console.log('1️⃣ VERIFICANDO VARIABLES DE ENTORNO:\n');

// IMPORTANTE: Cargar desde la raíz del proyecto
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

console.log('📁 Cargando .env desde:', path.join(__dirname, '../../.env'));
// 🩺 DIAGNÓSTICO COMPLETO DE ANÁLISIS NARRATIVO
console.log('\n🧠 === SYNAPSIS DIAGNÓSTICO COMPLETO ===\n');

// 1. Verificar variables de entorno
console.log('1️⃣ VERIFICANDO VARIABLES DE ENTORNO:\n');
// require('dotenv').config();

const keys = {
  'ANTHROPIC_API_KEY': process.env.ANTHROPIC_API_KEY,
  'CLAUDE_API_KEY': process.env.CLAUDE_API_KEY,
  'OPENAI_API_KEY': process.env.OPENAI_API_KEY,
  'GEMINI_API_KEY': process.env.GEMINI_API_KEY,
  'GROK_API_KEY': process.env.GROK_API_KEY,
  'DEEPSEEK_API_KEY': process.env.DEEPSEEK_API_KEY
};

for (const [name, value] of Object.entries(keys)) {
  if (value) {
    console.log(`✅ ${name}: ${value.substring(0, 15)}...`);
  } else {
    console.log(`❌ ${name}: NO ENCONTRADA`);
  }
}

// 2. Verificar que el controlador detecta las keys
console.log('\n2️⃣ SIMULANDO CONTROLADOR:\n');

const hasAnthropicKey = !!(process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY);
const hasOpenAIKey = !!process.env.OPENAI_API_KEY;
const hasGeminiKey = !!process.env.GEMINI_API_KEY;
const hasGrokKey = !!process.env.GROK_API_KEY;
const hasDeepSeekKey = !!process.env.DEEPSEEK_API_KEY;

console.log('Detección de disponibilidad:');
console.log(`- Anthropic/Claude: ${hasAnthropicKey ? '✅ DISPONIBLE' : '❌ NO DISPONIBLE'}`);
console.log(`- OpenAI: ${hasOpenAIKey ? '✅ DISPONIBLE' : '❌ NO DISPONIBLE'}`);
console.log(`- Gemini: ${hasGeminiKey ? '✅ DISPONIBLE' : '❌ NO DISPONIBLE'}`);
console.log(`- Grok: ${hasGrokKey ? '✅ DISPONIBLE' : '❌ NO DISPONIBLE'}`);
console.log(`- DeepSeek: ${hasDeepSeekKey ? '✅ DISPONIBLE' : '❌ NO DISPONIBLE'}`);

// 3. Probar el endpoint real
console.log('\n3️⃣ PROBANDO ENDPOINT REAL:\n');

const axios = require('axios');

async function testEndpoint() {
  try {
    console.log('Llamando a http://localhost:3000/api/analyze/providers...');
    const response = await axios.get('http://localhost:3000/api/analyze/providers');
    
    console.log('\n✅ Respuesta recibida!\n');
    
    // Mostrar modelos disponibles por proveedor
    response.data.providers.forEach(provider => {
      const available = provider.models.filter(m => m.available).length;
      const total = provider.models.length;
      
      console.log(`${provider.icon} ${provider.name}: ${available}/${total} modelos disponibles`);
      
      provider.models.forEach(model => {
        console.log(`   ${model.available ? '✅' : '❌'} ${model.name}`);
      });
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ ERROR al llamar endpoint:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.error('\n⚠️  ¡El servidor no está corriendo!');
      console.error('   Ejecuta: npm run dev');
    }
  }
}

// Esperar un poco y probar
setTimeout(testEndpoint, 1000);

console.log('\n📋 INSTRUCCIONES:\n');
console.log('1. Si las API keys aparecen como NO ENCONTRADA:');
console.log('   - Verifica que el archivo .env esté en C:\\synapsis\\backend\\.env');
console.log('   - Reinicia el servidor después de agregar las keys');
console.log('');
console.log('2. Si el endpoint falla:');
console.log('   - Asegúrate de que el servidor esté corriendo (npm run dev)');
console.log('   - Verifica que no haya errores en la consola del servidor');
console.log('');
console.log('3. Si todo está bien pero el frontend no funciona:');
console.log('   - Limpia la caché del navegador (Ctrl+F5)');
console.log('   - Verifica la consola del navegador (F12)');
console.log('\n=====================================\n');