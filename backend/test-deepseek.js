// 🔍 Debug de DeepSeek API

require('dotenv').config({ path: '../.env' });

async function testDeepSeek() {
  console.log('🌊 Probando DeepSeek API...');
  console.log('API Key:', process.env.DEEPSEEK_API_KEY ? `${process.env.DEEPSEEK_API_KEY.substring(0, 10)}...` : 'NO ENCONTRADA');
  
  if (!process.env.DEEPSEEK_API_KEY) {
    console.error('❌ DEEPSEEK_API_KEY no encontrada en .env');
    return;
  }
  
  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: 'Hola, ¿funcionas?' }],
        max_tokens: 100,
        temperature: 0.7
      })
    });
    
    console.log('📊 Status:', response.status);
    console.log('📋 Headers:', Object.fromEntries(response.headers.entries()));
    
    const data = await response.json();
    console.log('📦 Respuesta:', JSON.stringify(data, null, 2));
    
    if (response.ok) {
      console.log('✅ DeepSeek API funciona correctamente');
    } else {
      console.error('❌ Error:', data);
    }
  } catch (error) {
    console.error('❌ Error de conexión:', error);
  }
}

testDeepSeek();
