// 🔑 Test de API Keys para SYNAPSIS
// Ejecutar con: node test-api-keys.js

import dotenv from 'dotenv';
dotenv.config();

console.log('\n🧠 SYNAPSIS - Verificación de API Keys\n');
console.log('=====================================\n');

const apiKeys = {
  'Claude/Anthropic': process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY,
  'OpenAI': process.env.OPENAI_API_KEY,
  'Google Gemini': process.env.GEMINI_API_KEY,
  'xAI Grok': process.env.GROK_API_KEY,
  'DeepSeek': process.env.DEEPSEEK_API_KEY,
  'TMDB': process.env.TMDB_API_KEY
};

let allConfigured = true;

for (const [service, key] of Object.entries(apiKeys)) {
  if (key) {
    console.log(`✅ ${service}: CONFIGURADA`);
    console.log(`   Primeros caracteres: ${key.substring(0, 10)}...`);
  } else {
    console.log(`❌ ${service}: NO CONFIGURADA`);
    allConfigured = false;
  }
  console.log('');
}

console.log('=====================================\n');

if (allConfigured) {
  console.log('🎉 ¡Todas las API Keys están configuradas!\n');
  console.log('✨ Los modelos disponibles serán:');
  console.log('   - Claude 3 (Opus, Sonnet, Haiku)');
  console.log('   - GPT-4, GPT-4 Turbo, GPT-3.5 Turbo');
  console.log('   - Gemini 1.5 Pro, Gemini 1.5 Flash');
  console.log('   - Grok');
  console.log('   - DeepSeek Chat');
} else {
  console.log('⚠️  Algunas API Keys no están configuradas');
  console.log('   Los modelos correspondientes no estarán disponibles');
}

console.log('\n🚀 ¡SYNAPSIS listo para análisis narrativo con IA!\n');