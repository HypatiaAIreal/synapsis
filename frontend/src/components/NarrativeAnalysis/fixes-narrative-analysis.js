// 🔧 ARREGLOS PARA NARRATIVE ANALYSIS PANEL
// Copiar y pegar estos cambios en NarrativeAnalysisPanel.tsx

// 1. ACTUALIZAR MODELO DE GEMINI (línea ~60)
gemini: {
  name: 'Gemini 1.5 Pro',  // CAMBIO: era 'Gemini Pro'
  icon: '✨',
  endpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent',  // CAMBIO: era gemini-pro
  headers: (apiKey: string) => ({
    'Content-Type': 'application/json',
  }),
  body: (prompt: string, apiKey: string) => ({
    contents: [{ parts: [{ text: prompt }] }]
  }),
  urlParams: (apiKey: string) => `?key=${apiKey}`
},

// 2. CAMBIAR generateAnalysis PARA USAR BACKEND PROXY (línea ~94)
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

// 3. ACTUALIZAR handleSaveAnalysis para guardar en MongoDB (línea ~157)
if (onSaveAnalysis) {
  onSaveAnalysis({
    movieId,
    movieTitle,
    theoryId: selectedTheory,
    theoryName: theory.name,
    modelUsed: AI_MODELS[selectedModel].name,
    content: result,
    createdAt: new Date().toISOString()
  });
  
  // GUARDAR EN BACKEND
  try {
    await fetch('http://localhost:3000/api/analysis/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movieId,
        movieTitle,
        theoryId: selectedTheory,
        theoryName: theory.name,
        modelUsed: AI_MODELS[selectedModel].name,
        content: result,
        type: 'narrative'
      })
    });
  } catch (error) {
    console.error('Error guardando análisis:', error);
  }
}