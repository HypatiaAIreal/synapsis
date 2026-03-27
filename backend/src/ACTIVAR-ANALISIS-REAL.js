// ACTIVAR ANÁLISIS REALES EN EL BACKEND
// En backend/src/routes/ai-config.routes.js
// Buscar la sección del mockAnalysis (línea ~200) y reemplazar por:

// IMPORTAR AL INICIO DEL ARCHIVO:
const OpenAI = require('openai');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const Anthropic = require('@anthropic-ai/sdk');

// CONFIGURAR LAS APIs (después de los imports):
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const anthropic = new Anthropic({ apiKey: process.env.CLAUDE_API_KEY });

// REEMPLAZAR mockAnalysis POR ESTO:
// Generar análisis real según el proveedor
let analysisContent;
try {
  switch (model.provider) {
    case 'openai':
      const openaiResponse = await openai.chat.completions.create({
        model: modelId,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: maxTokens || 4096,
        temperature: 0.7
      });
      analysisContent = openaiResponse.choices[0].message.content;
      break;
      
    case 'google':
      const geminiModel = genAI.getGenerativeModel({ model: modelId });
      const geminiResult = await geminiModel.generateContent(prompt);
      analysisContent = geminiResult.response.text();
      break;
      
    case 'anthropic':
      const claudeResponse = await anthropic.messages.create({
        model: modelId,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: maxTokens || 4096
      });
      analysisContent = claudeResponse.content[0].text;
      break;
      
    default:
      // Análisis demo para otros proveedores
      analysisContent = `# Análisis de ${movieTitle}\n\nEste es un análisis demo...`;
  }
} catch (apiError) {
  console.error('Error llamando API:', apiError);
  // Fallback a análisis demo si falla
  analysisContent = `# Análisis de ${movieTitle}\n\nError generando análisis real. Modo demo activado...`;
}

const realAnalysis = {
  id: `analysis-${Date.now()}`,
  movieId,
  movieTitle,
  theoryId,
  modelUsed: modelId,
  content: analysisContent,
  // ... resto del objeto
};