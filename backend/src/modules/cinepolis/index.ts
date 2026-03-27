import { initializeDefaultRooms } from '../../core/websockets';
import { createBeing } from '../../core/being-registry';
import { initializeTMDBIntegration, importInitialMovies } from './tmdb-integration';
import { createSampleAnalyses } from './database/analysis';
// import { initializeAICollaborators } from './ai-collaborators'; // Moved to src/ai/
import type { BeingType } from '../../types';

export async function initializeCinePolis(): Promise<void> {
  try {
    console.log('🎬 Inicializando CinePolis...');
    
    // 1. Initialize default chat rooms
    console.log('🏠 Creando salas temáticas...');
    initializeDefaultRooms();
    
    // 2. Initialize TMDB integration
    console.log('🎭 Configurando integración TMDB...');
    await initializeTMDBIntegration();
    
    // 3. Import initial movies if needed
    if (process.env.DEV_AUTO_CREATE_SAMPLE_DATA === 'true') {
      console.log('🎬 Importando películas iniciales...');
      await importInitialMovies();
    }
    
    // 4. Initialize analysis system with sample data
    console.log('📝 Inicializando sistema de análisis...');
    await createSampleAnalyses();
    
    // 5. AI collaborators are initialized from main server
    // (handled in src/index.ts after websockets are ready)
    
    console.log('✅ CinePolis completamente inicializado');
    
  } catch (error) {
    console.error('💥 Error inicializando CinePolis:', error);
    throw error;
  }
}

// Export all CinePolis functionality
export * from './tmdb-integration';
// export * from './ai-collaborators'; // Moved to src/ai/
export * from './movie-models';