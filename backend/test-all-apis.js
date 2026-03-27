// 🧪 Test completo de todas las APIs

require('dotenv').config({ path: '../.env' });

console.log('🧠 SYNAPSIS - Verificación de APIs');
console.log('='.repeat(60));

// 1. Verificar variables de entorno
console.log('\n📋 Variables de entorno:');
const apis = [
  { name: 'Claude (Anthropic)', key: 'ANTHROPIC_API_KEY' },
  { name: 'OpenAI', key: 'OPENAI_API_KEY' },
  { name: 'Gemini', key: 'GEMINI_API_KEY' },
  { name: 'DeepSeek', key: 'DEEPSEEK_API_KEY' },
  { name: 'xAI (Grok)', key: 'GROK_API_KEY' }
];

apis.forEach(api => {
  const value = process.env[api.key];
  console.log(`${api.name}: ${value ? '✅ CONFIGURADA' : '❌ NO ENCONTRADA'}`);
  if (value) {
    console.log(`  └─ ${value.substring(0, 20)}...`);
  }
});

console.log('\n🚀 Para probar individualmente:');
console.log('  node test-gemini.js    - Probar Gemini');
console.log('  node test-deepseek.js  - Probar DeepSeek');

console.log('\n💡 Si alguna API falla:');
console.log('1. Verifica que la API key esté en .env');
console.log('2. Asegúrate de que la API key sea válida');
console.log('3. Reinicia el servidor después de cambios');

console.log('='.repeat(60));
