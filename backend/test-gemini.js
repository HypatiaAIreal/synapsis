// 🔍 Debug de Gemini API

const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config({ path: '../.env' });

async function testGemini() {
  console.log('✨ Probando Gemini API...');
  console.log('API Key:', process.env.GEMINI_API_KEY ? `${process.env.GEMINI_API_KEY.substring(0, 10)}...` : 'NO ENCONTRADA');
  
  if (!process.env.GEMINI_API_KEY) {
    console.error('❌ GEMINI_API_KEY no encontrada en .env');
    return;
  }
  
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  // Probar diferentes modelos
  const modelsToTest = ['gemini-1.5-pro', 'gemini-1.5-flash', 'gemini-pro'];
  
  for (const modelName of modelsToTest) {
    console.log(`\n🧪 Probando modelo: ${modelName}`);
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent('Di "Hola, funciono"');
      const response = await result.response;
      const text = response.text();
      console.log(`✅ ${modelName} funciona:`, text.substring(0, 50) + '...');
    } catch (error) {
      console.error(`❌ ${modelName} error:`, error.message);
    }
  }
}

testGemini();
