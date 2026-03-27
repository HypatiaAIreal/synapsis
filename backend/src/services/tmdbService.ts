/**
 * 🎬 SYNAPSIS TMDB SERVICE - Servicio de integración con The Movie Database
 */

import axios, { AxiosInstance } from 'axios';

// Configuración TMDB
const TMDB_CONFIG = {
  API_BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  API_KEY: process.env.TMDB_API_KEY || '67d42d2efe60cf1caba3d959c052cda6',
  DEFAULT_LANGUAGE: 'es-ES',
  DEFAULT_REGION: 'ES',
  TIMEOUT: 10000
};

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

export interface TMDBSearchResult {
  page: number;
  results: TMDBMovie[];
  total_pages: number;
  total_results: number;
}

class TMDBService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: TMDB_CONFIG.API_BASE_URL,
      timeout: TMDB_CONFIG.TIMEOUT,
      params: {
        api_key: TMDB_CONFIG.API_KEY,
        language: TMDB_CONFIG.DEFAULT_LANGUAGE
      }
    });

    // Request interceptor for logging
    this.api.interceptors.request.use(
      (config) => {
        console.log(`🎬 TMDB Request: ${config.method?.toUpperCase()} ${config.url}`);
        console.log('📊 Params:', config.params);
        return config;
      },
      (error) => {
        console.error('🚨 TMDB Request Error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor for logging
    this.api.interceptors.response.use(
      (response) => {
        console.log('✅ TMDB Response received');
        console.log('📊 Data keys:', Object.keys(response.data));
        return response;
      },
      (error) => {
        console.error('❌ TMDB Response Error:', error.response?.data || error.message);
        return Promise.reject(error);
      }
    );
  }

  /**
   * 🔍 Buscar películas
   */
  async searchMovies(query: string, page: number = 1): Promise<TMDBSearchResult> {
    try {
      const response = await this.api.get('/search/movie', {
        params: {
          query: query.trim(),
          page,
          include_adult: false,
          region: TMDB_CONFIG.DEFAULT_REGION
        }
      });

      return response.data;
    } catch (error) {
      console.error('🚨 Error en búsqueda de películas:', error);
      throw new Error('Error al buscar películas en TMDB');
    }
  }

  /**
   * 🎬 Obtener detalles de película
   */
  async getMovieDetails(movieId: number) {
    try {
      const response = await this.api.get(`/movie/${movieId}`);
      return response.data;
    } catch (error) {
      console.error(`🚨 Error obteniendo detalles de película ${movieId}:`, error);
      throw new Error('Error al obtener detalles de la película');
    }
  }

  /**
   * 🎬 Obtener detalles de película con datos enriquecidos
   * @param movieId ID de la película
   * @param appendToResponse Datos adicionales separados por comas (credits,images,videos,keywords,reviews,external_ids)
   */
  async getMovieDetailsEnhanced(movieId: number, appendToResponse: string) {
    try {
      console.log(`📊 Obteniendo detalles enriquecidos para película ${movieId}`);
      console.log(`📊 append_to_response: ${appendToResponse}`);
      
      const response = await this.api.get(`/movie/${movieId}`, {
        params: {
          append_to_response: appendToResponse,
          api_key: TMDB_CONFIG.API_KEY,
          language: TMDB_CONFIG.DEFAULT_LANGUAGE
        }
      });
      
      console.log('✅ Datos enriquecidos obtenidos:');
      console.log('- Credits:', !!response.data.credits);
      console.log('- Images:', !!response.data.images);
      console.log('- Videos:', !!response.data.videos);
      console.log('- Keywords:', !!response.data.keywords);
      console.log('- Reviews:', !!response.data.reviews);
      console.log('- External IDs:', !!response.data.external_ids);
      
      return response.data;
    } catch (error) {
      console.error(`🚨 Error obteniendo detalles enriquecidos de película ${movieId}:`, error);
      throw new Error('Error al obtener detalles enriquecidos de la película');
    }
  }

  /**
   * 🎭 Obtener créditos de película
   */
  async getMovieCredits(movieId: number) {
    try {
      const response = await this.api.get(`/movie/${movieId}/credits`);
      return response.data;
    } catch (error) {
      console.error(`🚨 Error obteniendo créditos de película ${movieId}:`, error);
      throw new Error('Error al obtener créditos de la película');
    }
  }

  /**
   * 🖼️ Obtener imágenes de película
   */
  async getMovieImages(movieId: number) {
    try {
      const response = await this.api.get(`/movie/${movieId}/images`);
      return response.data;
    } catch (error) {
      console.error(`🚨 Error obteniendo imágenes de película ${movieId}:`, error);
      throw new Error('Error al obtener imágenes de la película');
    }
  }

  /**
   * 🎥 Obtener videos de película
   */
  async getMovieVideos(movieId: number) {
    try {
      const response = await this.api.get(`/movie/${movieId}/videos`);
      return response.data;
    } catch (error) {
      console.error(`🚨 Error obteniendo videos de película ${movieId}:`, error);
      throw new Error('Error al obtener videos de la película');
    }
  }

  /**
   * 🏷️ Obtener palabras clave de película
   */
  async getMovieKeywords(movieId: number) {
    try {
      const response = await this.api.get(`/movie/${movieId}/keywords`);
      return response.data;
    } catch (error) {
      console.error(`🚨 Error obteniendo palabras clave de película ${movieId}:`, error);
      throw new Error('Error al obtener palabras clave de la película');
    }
  }

  /**
   * 📝 Obtener reseñas de película
   */
  async getMovieReviews(movieId: number) {
    try {
      const response = await this.api.get(`/movie/${movieId}/reviews`);
      return response.data;
    } catch (error) {
      console.error(`🚨 Error obteniendo reseñas de película ${movieId}:`, error);
      throw new Error('Error al obtener reseñas de la película');
    }
  }

  /**
   * 🔥 Obtener películas populares
   */
  async getPopularMovies(page: number = 1) {
    try {
      const response = await this.api.get('/movie/popular', {
        params: { page }
      });
      return response.data;
    } catch (error) {
      console.error('🚨 Error obteniendo películas populares:', error);
      throw new Error('Error al obtener películas populares');
    }
  }

  /**
   * 🌟 Obtener películas trending
   */
  async getTrendingMovies(timeWindow: 'day' | 'week' = 'week') {
    try {
      const response = await this.api.get(`/trending/movie/${timeWindow}`);
      return response.data;
    } catch (error) {
      console.error('🚨 Error obteniendo películas trending:', error);
      throw new Error('Error al obtener películas trending');
    }
  }

  /**
   * 🖼️ Construir URL de imagen
   */
  buildImageUrl(path: string, size: 'small' | 'medium' | 'large' | 'original' = 'medium'): string {
    if (!path) return '';
    const sizes = {
      small: 'w185',
      medium: 'w342',
      large: 'w500',
      original: 'original'
    };
    return `${TMDB_CONFIG.IMAGE_BASE_URL}/${sizes[size]}${path}`;
  }
}

// Singleton instance
export const tmdbService = new TMDBService();
export default tmdbService;