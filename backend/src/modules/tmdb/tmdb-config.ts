/**
 * 🎬 SYNAPSIS TMDB MODULE - Configuration
 * Configuración integrada para The Movie Database API
 */

export const TMDB_CONFIG = {
    API_BASE_URL: 'https://api.themoviedb.org/3',
    IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
    POSTER_SIZES: {
        small: 'w185',
        medium: 'w342', 
        large: 'w500',
        original: 'original'
    },
    BACKDROP_SIZES: {
        small: 'w300',
        medium: 'w780',
        large: 'w1280', 
        original: 'original'
    },
    DEFAULT_LANGUAGE: 'es-ES',
    DEFAULT_REGION: 'ES',
    SEARCH_LIMIT: 20,
    TIMEOUT: 10000
};

export const TMDB_ENDPOINTS = {
    SEARCH_MOVIE: '/search/movie',
    SEARCH_PERSON: '/search/person',
    MOVIE_DETAILS: '/movie',
    MOVIE_CREDITS: '/movie/{id}/credits',
    MOVIE_IMAGES: '/movie/{id}/images',
    MOVIE_VIDEOS: '/movie/{id}/videos',
    MOVIE_RECOMMENDATIONS: '/movie/{id}/recommendations',
    DISCOVER_MOVIES: '/discover/movie',
    GENRES: '/genre/movie/list',
    TRENDING: '/trending/movie'
};

export const GENRE_MAPPING: Record<number, string> = {
    28: 'Acción',
    12: 'Aventura', 
    16: 'Animación',
    35: 'Comedia',
    80: 'Crimen',
    99: 'Documental',
    18: 'Drama',
    10751: 'Familia',
    14: 'Fantasía',
    36: 'Historia',
    27: 'Terror',
    10402: 'Música',
    9648: 'Misterio',
    10749: 'Romance',
    878: 'Ciencia ficción',
    10770: 'Película de TV',
    53: 'Suspense',
    10752: 'Bélica',
    37: 'Western'
};
