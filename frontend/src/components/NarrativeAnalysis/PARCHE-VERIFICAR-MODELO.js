// PARCHE DE SEGURIDAD - Agregar al inicio de generateAnalysis()
// En NarrativeAnalysisPanel.tsx, después de la línea:
// const generateAnalysis = async () => {

// AGREGAR ESTAS LÍNEAS:
console.log('🔍 Estado actual:', { selectedModel, selectedTheory });

if (!selectedModel || selectedModel === '') {
  console.error('❌ No hay modelo seleccionado');
  setError('Por favor selecciona un modelo de IA primero');
  
  // Intentar auto-seleccionar el primer modelo disponible
  const firstModel = providers.flatMap(p => p.models).find(m => m.available);
  if (firstModel) {
    console.log('🔄 Auto-seleccionando:', firstModel.id);
    setSelectedModel(firstModel.id);
    setError('Modelo auto-seleccionado. Por favor intenta de nuevo.');
  }
  return;
}
// FIN DEL PARCHE