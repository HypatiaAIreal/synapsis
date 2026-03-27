// Función helper para guardar análisis con metadata completa
export const saveAnalysisWithMetadata = (
  movieId: string,
  movieTitle: string,
  moviePoster: string | undefined,
  analysis: any
) => {
  try {
    // Obtener análisis existentes
    const key = `analyses_${movieId}`;
    const existingData = localStorage.getItem(key);
    const analyses = existingData ? JSON.parse(existingData) : [];
    
    // Añadir metadata de película al análisis
    const enrichedAnalysis = {
      ...analysis,
      movieId,
      movieTitle,
      moviePoster,
      id: analysis.id || `${analysis.type === 'narrative' ? 'ai' : 'ref'}-${Date.now()}-${Math.random()}`,
      createdAt: analysis.createdAt || new Date().toISOString()
    };
    
    // Añadir al array
    analyses.push(enrichedAnalysis);
    
    // Guardar
    localStorage.setItem(key, JSON.stringify(analyses));
    
    console.log('✅ Análisis guardado con metadata:', enrichedAnalysis);
    return enrichedAnalysis;
  } catch (error) {
    console.error('Error guardando análisis:', error);
    throw error;
  }
};

// Función para obtener todos los análisis de todas las películas
export const getAllAnalyses = () => {
  const allAnalyses: any[] = [];
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('analyses_')) {
      try {
        const savedData = localStorage.getItem(key);
        if (savedData) {
          const analyses = JSON.parse(savedData);
          allAnalyses.push(...analyses);
        }
      } catch (error) {
        console.error('Error parsing analyses for key:', key, error);
      }
    }
  }
  
  return allAnalyses;
};

// Función para obtener análisis de una película específica
export const getMovieAnalyses = (movieId: string) => {
  try {
    const key = `analyses_${movieId}`;
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : [];
  } catch (error) {
    console.error('Error obteniendo análisis:', error);
    return [];
  }
};

// Función para eliminar un análisis específico
export const deleteAnalysis = (movieId: string, analysisId: string) => {
  try {
    const key = `analyses_${movieId}`;
    const savedData = localStorage.getItem(key);
    
    if (savedData) {
      const analyses = JSON.parse(savedData);
      const updatedAnalyses = analyses.filter((a: any) => a.id !== analysisId);
      
      // Si no quedan análisis, eliminar la clave completa
      if (updatedAnalyses.length === 0) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(updatedAnalyses));
      }
      
      console.log('✅ Análisis eliminado:', analysisId);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error eliminando análisis:', error);
    return false;
  }
};