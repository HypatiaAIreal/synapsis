// AGREGAR ESTE CONSOLE.LOG EN NarrativeAnalysisPanel.tsx
// Justo ANTES de la línea: const response = await fetch(...) 
// Aproximadamente línea 485:

console.log('📤 VERIFICANDO requestBody completo:', {
  ...requestBody,
  prompt: requestBody.prompt.substring(0, 100) + '...' // Solo mostrar inicio del prompt
});

// Esto te mostrará exactamente qué se está enviando al backend