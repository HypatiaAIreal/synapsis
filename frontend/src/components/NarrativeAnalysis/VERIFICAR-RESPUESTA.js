// VERIFICACIÓN FINAL - Agregar temporalmente en generateAnalysis()
// Después de recibir la respuesta del backend (línea ~500):

console.log('🔍 RESPUESTA DEL BACKEND:', {
  status: response.status,
  dataType: typeof data,
  analysisType: typeof data.analysis,
  analysisPreview: data.analysis ? 
    (typeof data.analysis === 'string' ? 
      data.analysis.substring(0, 100) + '...' : 
      'OBJETO: ' + JSON.stringify(data.analysis).substring(0, 100) + '...'
    ) : 'SIN ANÁLISIS'
});

// Esto te mostrará exactamente qué está devolviendo el backend