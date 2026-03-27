/**
 * 🔍 SYNAPSIS TMDB SEARCH INTELLIGENT - BÚSQUEDA HÍBRIDA
 * Sistema que detecta automáticamente si buscar personas o películas
 */

import tmdbService, { TMDBMovie } from './tmdb-service';

export interface PersonSearchResult {
    id: number;
    name: string;
    known_for_department: string;
    profile_path?: string;
    known_for: TMDBMovie[];
}

export interface IntelligentSearchResult {
    movies: TMDBMovie[];
    persons: PersonSearchResult[];
    searchType: 'movie' | 'person' | 'hybrid';
    totalResults: number;
    suggestions: string[];
}

// ⭐ INTERFACES PARA RESPUESTAS DE TMDB API
interface TMDBPersonSearchResponse {
    results: PersonSearchResult[];
    total_results: number;
    total_pages: number;
}

interface TMDBPersonCreditsResponse {
    cast: TMDBMovie[];
    crew: TMDBMovie[];
    id: number;
}

class IntelligentTMDBSearch {
    
    /**
     * 🧠 Búsqueda inteligente que detecta automáticamente el tipo
     */
    async intelligentSearch(query: string): Promise<IntelligentSearchResult> {
        const cleanQuery = query.trim();
        
        // Detectar si es un nombre de persona (contiene espacios y mayúsculas típicas de nombres)
        const isLikelyPerson = this.isLikelyPersonName(cleanQuery);
        
        if (isLikelyPerson) {
            // Buscar persona primero, luego sus películas
            console.log(`🧠 Detectado nombre de persona: "${cleanQuery}"`);
            return await this.searchPersonAndMovies(cleanQuery);
        } else {
            // Buscar película normalmente
            console.log(`🎬 Detectado título de película: "${cleanQuery}"`);
            return await this.searchMoviesOnly(cleanQuery);
        }
    }

    /**
     * 🎭 Buscar persona y sus películas
     */
    private async searchPersonAndMovies(personName: string): Promise<IntelligentSearchResult> {
        try {
            // Buscar personas usando el endpoint correcto
            const personResults = await this.searchPersons(personName);
            
            let allMovies: TMDBMovie[] = [];
            
            // Para cada persona encontrada, buscar sus películas
            for (const person of personResults.slice(0, 3)) { // Solo las primeras 3 personas
                if (person.known_for_department === 'Directing' || 
                    person.known_for_department === 'Acting' ||
                    person.known_for_department === 'Writing') {
                    
                    // Agregar las películas que ya están en known_for
                    allMovies.push(...person.known_for);
                    
                    // Buscar más películas de esta persona
                    const additionalMovies = await this.getPersonMovies(person.id);
                    allMovies.push(...additionalMovies);
                }
            }
            
            // Eliminar duplicados por ID
            const uniqueMovies = allMovies.filter((movie, index, array) => 
                array.findIndex(m => m.id === movie.id) === index
            );
            
            return {
                movies: uniqueMovies.slice(0, 20), // Limitar a 20 resultados
                persons: personResults,
                searchType: 'person',
                totalResults: uniqueMovies.length,
                suggestions: [
                    `Más películas de ${personName}`,
                    `Directores similares a ${personName}`,
                    'Películas recientes',
                    'Mejores calificadas'
                ]
            };
            
        } catch (error) {
            console.error('🚨 Error en búsqueda de persona:', error);
            // Fallback a búsqueda de películas
            return await this.searchMoviesOnly(personName);
        }
    }

    /**
     * 🎬 Buscar solo películas
     */
    private async searchMoviesOnly(query: string): Promise<IntelligentSearchResult> {
        try {
            const searchResult = await tmdbService.searchMovies(query);
            
            return {
                movies: searchResult.results,
                persons: [],
                searchType: 'movie',
                totalResults: searchResult.total_results,
                suggestions: [
                    `Películas similares a "${query}"`,
                    'Por género',
                    'Por año',
                    'Mejor calificadas'
                ]
            };
            
        } catch (error) {
            console.error('🚨 Error en búsqueda de películas:', error);
            throw error;
        }
    }

    /**
     * 👤 Buscar personas usando TMDB API (CON API KEY)
     */
    private async searchPersons(name: string): Promise<PersonSearchResult[]> {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/person?api_key=${process.env.TMDB_API_KEY}&include_adult=false&language=es-ES&page=1&query=${encodeURIComponent(name)}`
            );
            
            if (!response.ok) {
                throw new Error(`Error en API TMDB: ${response.status}`);
            }
            
            // ⭐ CORREGIDO: Type assertion para TypeScript estricto
            const data = await response.json() as TMDBPersonSearchResponse;
            
            console.log(`🎭 Personas encontradas para "${name}": ${data.results?.length || 0}`);
            return data.results || [];
            
        } catch (error) {
            console.error('🚨 Error buscando personas:', error);
            return [];
        }
    }

    /**
     * 🎭 Obtener películas de una persona específica (CON API KEY)
     */
    private async getPersonMovies(personId: number): Promise<TMDBMovie[]> {
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=${process.env.TMDB_API_KEY}&language=es-ES`
            );
            
            if (!response.ok) {
                throw new Error(`Error obteniendo créditos: ${response.status}`);
            }
            
            // ⭐ CORREGIDO: Type assertion para TypeScript estricto
            const data = await response.json() as TMDBPersonCreditsResponse;
            
            // Combinar cast y crew, priorizando donde es director
            const movies: TMDBMovie[] = [];
            
            // Películas donde aparece como actor
            if (data.cast && Array.isArray(data.cast)) {
                movies.push(...data.cast);
                console.log(`🎬 Actor en ${data.cast.length} películas`);
            }
            
            // Películas donde trabaja como crew (director, productor, etc.)
            if (data.crew && Array.isArray(data.crew)) {
                movies.push(...data.crew);
                console.log(`🎬 Crew en ${data.crew.length} películas`);
            }
            
            // Eliminar duplicados y ordenar por popularidad
            const uniqueMovies = movies.filter((movie, index, array) => 
                array.findIndex(m => m.id === movie.id) === index
            );
            
            console.log(`🎥 Total películas únicas para persona ${personId}: ${uniqueMovies.length}`);
            
            return uniqueMovies
                .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
                .slice(0, 10); // Top 10 más populares
            
        } catch (error) {
            console.error(`🚨 Error obteniendo películas de persona ${personId}:`, error);
            return [];
        }
    }

    /**
     * 🧠 Detectar si una query parece nombre de persona
     */
    private isLikelyPersonName(query: string): boolean {
        // Patrones que indican nombre de persona
        const personPatterns = [
            /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+/, // Nombre Apellido
            /^[A-Z][a-z]+\s+[A-Z][a-z]+\s+[A-Z][a-z]+/, // Nombre Medio Apellido
            /(Villeneuve|Tarantino|Kubrick|Scorsese|Nolan|Lynch|Allen|Cameron|Jackson|Burton|Lucas|Spielberg|Hitchcock|Kurosawa)/i, // Directores conocidos
            /(DiCaprio|Pacino|De Niro|Brando|Hopkins|Streep|Blanchett|Portman|Johansson)/i // Actores conocidos
        ];
        
        return personPatterns.some(pattern => pattern.test(query));
    }
}

// Singleton
export const intelligentTMDBSearch = new IntelligentTMDBSearch();
export default intelligentTMDBSearch;
