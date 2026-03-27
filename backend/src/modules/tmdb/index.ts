/**
 * 🎬 SYNAPSIS TMDB MODULE - Exportaciones principales
 * Punto de entrada del módulo TMDB integrado
 */

export { default as tmdbService } from './tmdb-service';
export { default as tmdbSearchEngine } from './tmdb-search';
export { default as tmdbRoutes } from './tmdb-routes';

// Agregamos también export default para compatibilidad
export { default } from './tmdb-routes';

export * from './tmdb-config';
export * from './tmdb-service';
export * from './tmdb-search';

// Re-exportar tipos principales
export type {
    TMDBMovie,
    TMDBMovieDetails,
    TMDBCredits,
    TMDBSearchResult
} from './tmdb-service';

export type {
    SynapsisMovie,
    SearchOptions,
    SearchResult
} from './tmdb-search';

/**
 * 🚀 Función de inicialización del módulo TMDB
 */
export const initializeTMDBModule = () => {
    console.log('🎬 Inicializando módulo TMDB integrado...');
    
    if (!process.env.TMDB_API_KEY) {
        console.warn('⚠️ TMDB_API_KEY no configurada');
        return false;
    }
    
    console.log('✅ Módulo TMDB listo para usar');
    return true;
};