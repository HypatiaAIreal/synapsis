/**
 * 🎬 SYNAPSIS TMDB SERVICE - Core API Handler
 * Servicio principal para interactuar con The Movie Database API
 */

import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { TMDB_CONFIG, TMDB_ENDPOINTS, GENRE_MAPPING } from './tmdb-config';

export interface TMDBMovie {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    release_date: string;
    poster_path?: string;
    backdrop_path?: string;
    genre_ids: number[];
    vote_average: number;
    vote_count: number;
    popularity: number;
    adult: boolean;
    original_language: string;
}

export interface TMDBMovieDetails extends TMDBMovie {
    runtime: number;
    budget: number;
    revenue: number;
    genres: Array<{ id: number; name: string }>;
    production_companies: Array<{ id: number; name: string; logo_path?: string }>;
    production_countries: Array<{ iso_3166_1: string; name: string }>;
    spoken_languages: Array<{ iso_639_1: string; name: string }>;
    status: string;
    tagline?: string;
    homepage?: string;
    imdb_id?: string;
}

export interface TMDBSearchResult {
    page: number;
    results: TMDBMovie[];
    total_pages: number;
    total_results: number;
}

export interface TMDBCredits {
    cast: Array<{
        id: number;
        name: string;
        character: string;
        profile_path?: string;
        order: number;
    }>;
    crew: Array<{
        id: number;
        name: string;
        job: string;
        department: string;
        profile_path?: string;
    }>;
}

class TMDBService {
    private api: AxiosInstance;

    constructor() {
        this.api = axios.create({
            baseURL: TMDB_CONFIG.API_BASE_URL,
            timeout: TMDB_CONFIG.TIMEOUT,
            params: {
                api_key: process.env.TMDB_API_KEY,
                language: TMDB_CONFIG.DEFAULT_LANGUAGE
            }
        });

        // Request interceptor for logging
        this.api.interceptors.request.use(
            (config) => {
                console.log(`🎬 TMDB Request: ${config.method?.toUpperCase()} ${config.url}`);
                return config;
            },
            (error) => {
                console.error('🚨 TMDB Request Error:', error);
                return Promise.reject(error);
            }
        );

        // Response interceptor for error handling
        this.api.interceptors.response.use(
            (response) => response,
            (error) => {
                console.error('🚨 TMDB API Error:', error.response?.data || error.message);
                return Promise.reject(error);
            }
        );
    }

    /**
     * 🔍 Buscar películas por título, director o actor
     */
    async searchMovies(query: string, page: number = 1): Promise<TMDBSearchResult> {
        try {
            const response: AxiosResponse<TMDBSearchResult> = await this.api.get(TMDB_ENDPOINTS.SEARCH_MOVIE, {
                params: {
                    query: query.trim(),
                    page,
                    include_adult: false,
                    region: TMDB_CONFIG.DEFAULT_REGION
                }
            });

            // Enriquecer resultados con géneros traducidos
            const enrichedResults = response.data.results.map(movie => ({
                ...movie,
                genres: movie.genre_ids.map(id => GENRE_MAPPING[id]).filter(Boolean)
            }));

            return {
                ...response.data,
                results: enrichedResults
            };
        } catch (error) {
            console.error('🚨 Error en búsqueda de películas:', error);
            throw new Error('Error al buscar películas en TMDB');
        }
    }

    /**
     * 🎬 Obtener detalles completos de una película
     */
    async getMovieDetails(movieId: number): Promise<TMDBMovieDetails> {
        try {
            const response: AxiosResponse<TMDBMovieDetails> = await this.api.get(`${TMDB_ENDPOINTS.MOVIE_DETAILS}/${movieId}`);
            return response.data;
        } catch (error) {
            console.error(`🚨 Error obteniendo detalles de película ${movieId}:`, error);
            throw new Error('Error al obtener detalles de la película');
        }
    }

    /**
     * 🎭 Obtener créditos (cast y crew) de una película
     */
    async getMovieCredits(movieId: number): Promise<TMDBCredits> {
        try {
            const endpoint = TMDB_ENDPOINTS.MOVIE_CREDITS.replace('{id}', movieId.toString());
            const response: AxiosResponse<TMDBCredits> = await this.api.get(endpoint);
            return response.data;
        } catch (error) {
            console.error(`🚨 Error obteniendo créditos de película ${movieId}:`, error);
            throw new Error('Error al obtener créditos de la película');
        }
    }

    /**
     * 🖼️ Obtener imágenes de una película
     */
    async getMovieImages(movieId: number) {
        try {
            const endpoint = TMDB_ENDPOINTS.MOVIE_IMAGES.replace('{id}', movieId.toString());
            const response = await this.api.get(endpoint);
            return response.data;
        } catch (error) {
            console.error(`🚨 Error obteniendo imágenes de película ${movieId}:`, error);
            throw new Error('Error al obtener imágenes de la película');
        }
    }

    /**
     * 🎥 Obtener videos (trailers, teasers) de una película
     */
    async getMovieVideos(movieId: number) {
        try {
            const endpoint = TMDB_ENDPOINTS.MOVIE_VIDEOS.replace('{id}', movieId.toString());
            const response = await this.api.get(endpoint);
            return response.data;
        } catch (error) {
            console.error(`🚨 Error obteniendo videos de película ${movieId}:`, error);
            throw new Error('Error al obtener videos de la película');
        }
    }

    /**
     * 💡 Obtener recomendaciones basadas en una película
     */
    async getMovieRecommendations(movieId: number, page: number = 1): Promise<TMDBSearchResult> {
        try {
            const endpoint = TMDB_ENDPOINTS.MOVIE_RECOMMENDATIONS.replace('{id}', movieId.toString());
            const response: AxiosResponse<TMDBSearchResult> = await this.api.get(endpoint, {
                params: { page }
            });
            return response.data;
        } catch (error) {
            console.error(`🚨 Error obteniendo recomendaciones de película ${movieId}:`, error);
            throw new Error('Error al obtener recomendaciones');
        }
    }

    /**
     * 🔥 Obtener películas trending
     */
    async getTrendingMovies(timeWindow: 'day' | 'week' = 'week'): Promise<TMDBSearchResult> {
        try {
            const response: AxiosResponse<TMDBSearchResult> = await this.api.get(`${TMDB_ENDPOINTS.TRENDING}/${timeWindow}`);
            return response.data;
        } catch (error) {
            console.error('🚨 Error obteniendo películas trending:', error);
            throw new Error('Error al obtener películas trending');
        }
    }

    /**
     * 🖼️ Construir URL completa para imágenes
     */
    buildImageUrl(path: string, size: keyof typeof TMDB_CONFIG.POSTER_SIZES = 'medium'): string {
        if (!path) return '';
        return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.POSTER_SIZES[size]}${path}`;
    }

    /**
     * 🖼️ Construir URL completa para backdrops
     */
    buildBackdropUrl(path: string, size: keyof typeof TMDB_CONFIG.BACKDROP_SIZES = 'large'): string {
        if (!path) return '';
        return `${TMDB_CONFIG.IMAGE_BASE_URL}/${TMDB_CONFIG.BACKDROP_SIZES[size]}${path}`;
    }

    /**
     * 🔍 Búsqueda inteligente multi-criterio
     */
    async intelligentSearch(query: string): Promise<{
        movies: TMDBMovie[];
        suggestions: string[];
        totalResults: number;
    }> {
        try {
            // Búsqueda principal
            const searchResult = await this.searchMovies(query);
            
            // Generar sugerencias basadas en géneros populares
            const suggestions: string[] = [];
            
            if (searchResult.results.length > 0) {
                const popularGenres = searchResult.results
                    .flatMap(movie => movie.genre_ids)
                    .reduce((acc, genreId) => {
                        acc[genreId] = (acc[genreId] || 0) + 1;
                        return acc;
                    }, {} as Record<number, number>);

                const topGenres = Object.entries(popularGenres)
                    .sort(([,a], [,b]) => b - a)
                    .slice(0, 3)
                    .map(([genreId]) => GENRE_MAPPING[parseInt(genreId)])
                    .filter(Boolean);

                suggestions.push(...topGenres);
            }

            return {
                movies: searchResult.results,
                suggestions,
                totalResults: searchResult.total_results
            };
        } catch (error) {
            console.error('🚨 Error en búsqueda inteligente:', error);
            throw new Error('Error en búsqueda inteligente');
        }
    }
}

// Singleton instance
export const tmdbService = new TMDBService();
export default tmdbService;
