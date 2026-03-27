// 🔍 Debug de xAI (Grok) API

require('dotenv').config({ path: '../.env' });

async function testGrok() {
  console.log('🔮 Probando xAI (Grok) API...');
  console.log('API Key:', process.env.GROK_API_KEY ? `${process.env.GROK_API_KEY.substring(0, 10)}...` : 'NO ENCONTRADA');
  
  if (!process.env.GROK_API_KEY) {
    console.error('❌ GROK_API_KEY no encontrada en .env');
    return;
  }
  
  console.log('\n⚠️ NOTA: La API de Grok/xAI aún está en desarrollo.');
  console.log('Es posible que necesites documentación actualizada de xAI.');
  console.log('Por ahora, el análisis con Grok usa un modo demo.');
  
  // Intentar llamada básica (puede necesitar ajustes según la documentación actual de xAI)
  try {
    console.log('\n🧪 Intentando conexión básica...');
    // La API de xAI puede tener un endpoint diferente
    // Esto es solo un ejemplo, verificar documentación actual
    const response = await fetch('https://api.x.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.GROK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'grok-1',
        messages: [{ role: 'user', content: 'Hello' }],
        max_tokens: 100
      })
    });
    
    console.log('📊 Status:', response.status);
    const data = await response.json();
    console.log('📦 Respuesta:', JSON.stringify(data, null, 2));
    
  } catch (error) {
    console.log('❌ Error:', error.message);
    console.log('\n💡 Esto es esperado si la API de xAI ha cambiado.');
    console.log('Verifica la documentación más reciente en https://x.ai/api');
  }
}

testGrok();
