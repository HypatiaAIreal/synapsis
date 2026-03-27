// 🤖 ACTUALIZAR NarrativeAnalysisPanel.tsx CON ESTOS CAMBIOS:

// 1. AGREGAR GROK AL OBJETO AI_MODELS (después de deepseek):
grok: {
  name: 'Grok',
  icon: '🤖',
  endpoint: 'https://api.x.ai/v1/chat/completions',
  headers: (apiKey: string) => ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  }),
  body: (prompt: string) => ({
    model: 'grok-beta',
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 4000,
    temperature: 0.7
  }),
  extractResponse: (data: any) => data.choices[0].message.content
},

// 2. REEMPLAZAR TODA LA FUNCIÓN generateAnalysis:
const generateAnalysis = async (model: string, prompt: string) => {
  try {
    // USAR NUESTRO BACKEND COMO PROXY PARA EVITAR CORS
    const response = await fetch('http://localhost:3000/api/analyze/narrative', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model,
        prompt,
        movieTitle: movieTitle,
        theoryId: selectedTheory
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Error ${response.status}`);
    }

    const data = await response.json();
    return data.analysis;
  } catch (error) {
    console.error('Error en análisis:', error);
    throw error;
  }
};

// 3. EN handleGenerateAnalysis, DESPUÉS DE setAnalysisResult(result):
// Guardar el análisis con tipo 'narrative'
const newAnalysis = {
  type: 'narrative',  // IMPORTANTE: marcar como tipo narrative
  movieId,
  movieTitle,
  theoryId: selectedTheory,
  theoryName: theory.name,
  modelUsed: AI_MODELS[selectedModel].name,
  content: result,
  createdAt: new Date().toISOString()
};

// Guardar en localStorage (temporal)
const existingAnalyses = JSON.parse(localStorage.getItem(`analyses_${movieId}`) || '[]');
existingAnalyses.push(newAnalysis);
localStorage.setItem(`analyses_${movieId}`, JSON.stringify(existingAnalyses));

// Llamar callback si existe
if (onSaveAnalysis) {
  onSaveAnalysis(newAnalysis);
}

// 4. ACTUALIZAR EL MODELO DE GEMINI:
gemini: {
  name: 'Gemini 1.5 Pro',  // CAMBIO: era 'Gemini Pro'
  icon: '✨',
  endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',
  headers: () => ({
    'Content-Type': 'application/json',
  }),
  body: (prompt: string) => ({
    contents: [{ parts: [{ text: prompt }] }]
  }),
  extractResponse: (data: any) => data.candidates[0].content.parts[0].text,
  urlParams: (apiKey: string) => `?key=${apiKey}`
},