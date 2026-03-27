// ARREGLO PARA MarkdownRenderer - Asegurar que siempre reciba texto
// En NarrativeAnalysisPanel.tsx, buscar la función MarkdownRenderer (línea ~69)
// ANTES:
const renderMarkdown = useCallback((text: string) => {
  // Dividir por bloques de código
  const parts = text.split(/```(\w*)\n([\s\S]*?)```/g);

// CAMBIAR POR:
const renderMarkdown = useCallback((text: string) => {
  // Asegurar que text sea una cadena
  const safeText = typeof text === 'string' ? text : String(text || '');
  
  // Dividir por bloques de código
  const parts = safeText.split(/```(\w*)\n([\s\S]*?)```/g);

// TAMBIÉN, donde se guarda el resultado del análisis (línea ~506):
// ANTES:
setAnalysisResult(data.analysis);

// CAMBIAR POR:
setAnalysisResult(typeof data.analysis === 'string' ? data.analysis : JSON.stringify(data.analysis, null, 2));