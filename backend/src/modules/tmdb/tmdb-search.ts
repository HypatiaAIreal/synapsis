/**
 * 🔍 SYNAPSIS TMDB SEARCH - Búsqueda Inteligente Avanzada
 * Sistema de búsqueda multi-criterio para películas
 */

import tmdbService, { TMDBMovie, TMDBMovieDetails, TMDBCredits } from './tmdb-service';

export interface SynapsisMovie {
    id: number;
    title: string;
    originalTitle: string;
    director: string[];
    year: number;
    genre: string[];
    poster_url?: string;
    backdrop_url?: string;
    plot_summary: string;
    duration?: number;
    rating: number;
    votes: number;
    budget?: number;
    revenue?: number;
    status: string;
    tmdbId: number;
    cast: Array<{
        name: string;
        character: string;
        profile_url?: string;
    }>;
    crew: Array<{
        name: string;
        job: string;
        department: string;
    }>;
}

export interface SearchOptions {
    includeAdult?: boolean;
    year?: number;
    region?: string;
    genre?: string;
    sortBy?: 'popularity' | 'release_date' | 'vote_average' | 'vote_count';
    page?: number;
}

export interface SearchResult {
    movies: SynapsisMovie[];
    totalResults: number;
    totalPages: number;
    currentPage: number;
    suggestions: string[];
    searchTime: number;
}

class TMDBSearchEngine {
    
    /**
     * 🔍 Búsqueda principal inteligente
     */
    async search(query: string, options: SearchOptions = {}): Promise<SearchResult> {
        const startTime = Date.now();
        
        try {
            console.log(`🔍 Iniciando búsqueda TMDB: "${query}"`);
            
            // Búsqueda base
            const searchResult = await tmdbService.searchMovies(query, options.page || 1);
            
            // Enriquecer resultados con detalles completos
            const enrichedMovies = await this.enrichMovieResults(searchResult.results.slice(0, 10));
            
            // Generar sugerencias inteligentes
            const suggestions = await this.generateSuggestions(query, searchResult.results);
            
            const searchTime = Date.now() - startTime;
            
            console.log(`✅ Búsqueda completada en ${searchTime}ms - ${enrichedMovies.length} resultados`);
            
            return {
                movies: enrichedMovies,
                totalResults: searchResult.total_results,
                totalPages: searchResult.total_pages,
                currentPage: searchResult.page,
                suggestions,
                searchTime
            };
            
        } catch (error) {
            console.error('🚨 Error en búsqueda TMDB:', error);
            throw new Error(`Error en búsqueda: ${error instanceof Error ? error.message : 'Error desconocido'}`);
        }
    }

    /**
     * 🎬 Búsqueda por director
     */
    async searchByDirector(directorName: string): Promise<SearchResult> {
        try {
            console.log(`🎭 Búsqueda por director: "${directorName}"`);
            
            // Primero buscar películas que mencionen al director
            const searchResult = await tmdbService.searchMovies(directorName);
            
            // Filtrar resultados verificando los créditos
            const directorMovies: SynapsisMovie[] = [];
            
            for (const movie of searchResult.results.slice(0, 10)) {
                try {
                    const credits = await tmdbService.getMovieCredits(movie.id);
                    const isDirector = credits.crew.some(
                        person => person.job === 'Director' && 
                        person.name.toLowerCase().includes(directorName.toLowerCase())
                    );
                    
                    if (isDirector) {
                        const enrichedMovie = await this.enrichSingleMovie(movie);
                        directorMovies.push(enrichedMovie);
                    }
                } catch (error) {
                    console.warn(`⚠️ Error verificando director para película ${movie.id}`);
                }
            }
            
            return {
                movies: directorMovies,
                totalResults: directorMovies.length,
                totalPages: 1,
                currentPage: 1,
                suggestions: [`Más películas de ${directorName}`, 'Directores similares'],
                searchTime: Date.now()
            };
            
        } catch (error) {
            console.error('🚨 Error en búsqueda por director:', error);
            throw new Error('Error buscando por director');
        }
    }

    /**
     * 🎯 Búsqueda exacta por ID de TMDB
     */
    async getMovieById(tmdbId: number): Promise<SynapsisMovie | null> {
        try {
            console.log(`🎯 Obteniendo película por ID: ${tmdbId}`);
            
            const [details, credits] = await Promise.all([
                tmdbService.getMovieDetails(tmdbId),
                tmdbService.getMovieCredits(tmdbId)
            ]);
            
            return this.transformToSynapsisMovie(details, credits);
            
        } catch (error) {
            console.error(`🚨 Error obteniendo película ${tmdbId}:`, error);
            return null;
        }
    }

    /**
     * 🔥 Obtener películas trending
     */
    async getTrending(timeWindow: 'day' | 'week' = 'week'): Promise<SearchResult> {
        try {
            const trendingResult = await tmdbService.getTrendingMovies(timeWindow);
            const enrichedMovies = await this.enrichMovieResults(trendingResult.results.slice(0, 20));
            
            return {
                movies: enrichedMovies,
                totalResults: trendingResult.total_results,
                totalPages: trendingResult.total_pages,
                currentPage: trendingResult.page,
                suggestions: ['Más trending', 'Por género', 'Por año'],
                searchTime: Date.now()
            };
            
        } catch (error) {
            console.error('🚨 Error obteniendo trending:', error);
            throw new Error('Error obteniendo películas trending');
        }
    }

    /**
     * 💡 Obtener recomendaciones basadas en una película
     */
    async getRecommendations(movieId: number): Promise<SynapsisMovie[]> {
        try {
            const recommendations = await tmdbService.getMovieRecommendations(movieId);
            return await this.enrichMovieResults(recommendations.results.slice(0, 10));
        } catch (error) {
            console.error(`🚨 Error obteniendo recomendaciones para ${movieId}:`, error);
            return [];
        }
    }

    /**
     * 🔍 Búsqueda multi-criterio avanzada
     */
    async advancedSearch(criteria: {
        title?: string;
        director?: string;
        actor?: string;
        year?: number;
        genre?: string;
        minRating?: number;
    }): Promise<SearchResult> {
        try {
            let searchTerms: string[] = [];
            
            if (criteria.title) searchTerms.push(criteria.title);
            if (criteria.director) searchTerms.push(criteria.director);
            if (criteria.actor) searchTerms.push(criteria.actor);
            
            const query = searchTerms.join(' ');
            
            if (!query) {
                throw new Error('Se requiere al menos un criterio de búsqueda');
            }
            
            const result = await this.search(query);
            
            // Filtrar por criterios adicionales
            let filteredMovies = result.movies;
            
            if (criteria.year) {
                filteredMovies = filteredMovies.filter(movie => movie.year === criteria.year);
            }
            
            if (criteria.minRating !== undefined) {
                filteredMovies = filteredMovies.filter(movie => movie.rating >= criteria.minRating!);
            }
            
            if (criteria.genre) {
                filteredMovies = filteredMovies.filter(movie => 
                    movie.genre.some(g => g.toLowerCase().includes(criteria.genre!.toLowerCase()))
                );
            }
            
            return {
                ...result,
                movies: filteredMovies,
                totalResults: filteredMovies.length
            };
            
        } catch (error) {
            console.error('🚨 Error en búsqueda avanzada:', error);
            throw new Error('Error en búsqueda avanzada');
        }
    }

    /**
     * 🔄 Enriquecer resultados con detalles completos
     */
    private async enrichMovieResults(movies: TMDBMovie[]): Promise<SynapsisMovie[]> {
        const enrichedMovies: SynapsisMovie[] = [];
        
        for (const movie of movies) {
            try {
                const enrichedMovie = await this.enrichSingleMovie(movie);
                enrichedMovies.push(enrichedMovie);
            } catch (error) {
                console.warn(`⚠️ Error enriqueciendo película ${movie.id}, usando datos básicos`);
                // Usar datos básicos si falla el enriquecimiento
                enrichedMovies.push(this.createBasicSynapsisMovie(movie));
            }
        }
        
        return enrichedMovies;
    }

    /**
     * 🎬 Enriquecer una película individual
     */
    private async enrichSingleMovie(movie: TMDBMovie): Promise<SynapsisMovie> {
        try {
            const [details, credits] = await Promise.all([
                tmdbService.getMovieDetails(movie.id),
                tmdbService.getMovieCredits(movie.id)
            ]);
            
            return this.transformToSynapsisMovie(details, credits);
            
        } catch (error) {
            console.warn(`⚠️ Error obteniendo detalles para película ${movie.id}`);
            return this.createBasicSynapsisMovie(movie);
        }
    }

    /**
     * 🔄 Transformar datos TMDB a formato Synapsis
     */
    private transformToSynapsisMovie(details: TMDBMovieDetails, credits: TMDBCredits): SynapsisMovie {
        const directors = credits.crew
            .filter(person => person.job === 'Director')
            .map(person => person.name);

        const cast = credits.cast
            .slice(0, 10)
            .map(actor => ({
                name: actor.name,
                character: actor.character,
                profile_url: actor.profile_path ? tmdbService.buildImageUrl(actor.profile_path, 'small') : undefined
            }));

        const crew = credits.crew
            .filter(person => ['Director', 'Producer', 'Writer', 'Cinematography', 'Music'].includes(person.job))
            .map(person => ({
                name: person.name,
                job: person.job,
                department: person.department
            }));

        return {
            id: details.id,
            title: details.title,
            originalTitle: details.original_title,
            director: directors,
            year: details.release_date ? new Date(details.release_date).getFullYear() : 0,
            genre: details.genres.map(g => g.name),
            poster_url: details.poster_path ? tmdbService.buildImageUrl(details.poster_path, 'medium') : undefined,
            backdrop_url: details.backdrop_path ? tmdbService.buildBackdropUrl(details.backdrop_path, 'large') : undefined,
            plot_summary: details.overview,
            duration: details.runtime,
            rating: Math.round(details.vote_average * 10) / 10,
            votes: details.vote_count,
            budget: details.budget,
            revenue: details.revenue,
            status: details.status,
            tmdbId: details.id,
            cast,
            crew
        };
    }

    /**
     * 🔄 Crear película básica cuando fallan los detalles
     */
    private createBasicSynapsisMovie(movie: TMDBMovie): SynapsisMovie {
        return {
            id: movie.id,
            title: movie.title,
            originalTitle: movie.original_title,
            director: [],
            year: movie.release_date ? new Date(movie.release_date).getFullYear() : 0,
            genre: movie.genre_ids.map(id => {
                const genre = Object.entries(tmdbService.constructor.prototype.GENRE_MAPPING || {})
                    .find(([genreId]) => parseInt(genreId) === id);
                return genre ? genre[1] as string : 'Desconocido';
            }).filter((g): g is string => typeof g === 'string'),
            poster_url: movie.poster_path ? tmdbService.buildImageUrl(movie.poster_path, 'medium') : undefined,
            backdrop_url: movie.backdrop_path ? tmdbService.buildBackdropUrl(movie.backdrop_path, 'large') : undefined,
            plot_summary: movie.overview,
            rating: Math.round(movie.vote_average * 10) / 10,
            votes: movie.vote_count,
            status: 'Released',
            tmdbId: movie.id,
            cast: [],
            crew: []
        };
    }

    /**
     * 💡 Generar sugerencias inteligentes
     */
    private async generateSuggestions(query: string, results: TMDBMovie[]): Promise<string[]> {
        const suggestions: string[] = [];
        
        if (results.length > 0) {
            // Sugerencias por género
            const genres = results.flatMap(movie => movie.genre_ids);
            const popularGenre = this.getMostFrequent(genres);
            if (popularGenre) {
                const genreName = Object.entries(tmdbService.constructor.prototype.GENRE_MAPPING || {})
                    .find(([id]) => parseInt(id) === popularGenre)?.[1];
                if (genreName) {
                    suggestions.push(`Más películas de ${genreName}`);
                }
            }
            
            // Sugerencias por año
            const years = results
                .map(movie => movie.release_date ? new Date(movie.release_date).getFullYear() : null)
                .filter(Boolean) as number[];
            const popularYear = this.getMostFrequent(years);
            if (popularYear) {
                suggestions.push(`Películas de ${popularYear}`);
            }
            
            // Sugerencias relacionadas
            suggestions.push(`"${query}" similar`, `Directores de "${query}"`);
        } else {
            // Sugerencias cuando no hay resultados
            suggestions.push(
                'Verificar ortografía',
                'Buscar por director',
                'Buscar por actor',
                'Películas populares'
            );
        }
        
        return suggestions.slice(0, 5);
    }

    /**
     * 📊 Obtener el valor más frecuente en un array
     */
    private getMostFrequent<T>(array: T[]): T | null {
        if (array.length === 0) return null;
        
        const frequency = array.reduce((acc, item) => {
            acc[String(item)] = (acc[String(item)] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);
        
        const mostFrequent = Object.entries(frequency)
            .sort(([,a], [,b]) => b - a)[0];
        
        return mostFrequent ? array.find(item => String(item) === mostFrequent[0]) || null : null;
    }
}

// Singleton instance
export const tmdbSearchEngine = new TMDBSearchEngine();
export default tmdbSearchEngine;
