// ================================================================
// js/services/tmdb-service.js
// 🎬 Servicio TMDB con datos completos según Gemini

import { AppConfig } from '../config/constants.js';

export class TMDBService {
    constructor() {
        this.apiKey = AppConfig.TMDB.API_KEY;
        this.baseUrl = AppConfig.TMDB.BASE_URL;
        this.imageBase = AppConfig.TMDB.IMAGE_BASE;
    }

    // 🔍 Búsqueda inteligente
    async searchMovies(query) {
        if (query.length < 2) return [];
        
        const isLikelyPerson = this.detectPersonName(query);
        
        if (isLikelyPerson) {
            return await this.searchPersonAndMovies(query);
        } else {
            return await this.searchMoviesByTitle(query);
        }
    }

    // 🎭 Detección de nombres de personas
    detectPersonName(query) {
        const personPatterns = [
            /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+\s+[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+/,
            /(Villeneuve|Tarantino|Kubrick|Scorsese|Nolan|Lynch|Allen|Cameron|Jackson|Burton|Lucas|Spielberg|Hitchcock|Kurosawa)/i,
            /(DiCaprio|Pacino|De Niro|Brando|Hopkins|Streep|Blanchett|Portman|Johansson)/i
        ];
        return personPatterns.some(pattern => pattern.test(query));
    }

    // 🔍 Búsqueda por persona
    async searchPersonAndMovies(personName) {
        const url = `${this.baseUrl}/search/person?api_key=${this.apiKey}&query=${encodeURIComponent(personName)}&language=es-ES`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error ${response.status}`);
            
            const data = await response.json();
            const persons = data.results || [];
            let allMovies = [];
            
            for (const person of persons.slice(0, 3)) {
                if (person.known_for_department === 'Directing' || 
                    person.known_for_department === 'Acting' ||
                    person.known_for_department === 'Writing') {
                    
                    if (person.known_for) {
                        const movies = person.known_for.filter(item => item.media_type === 'movie');
                        allMovies.push(...movies);
                    }
                    
                    try {
                        const creditsUrl = `${this.baseUrl}/person/${person.id}/movie_credits?api_key=${this.apiKey}&language=es-ES`;
                        const creditsResponse = await fetch(creditsUrl);
                        
                        if (creditsResponse.ok) {
                            const creditsData = await creditsResponse.json();
                            if (creditsData.cast) allMovies.push(...creditsData.cast.slice(0, 8));
                            if (creditsData.crew) allMovies.push(...creditsData.crew.slice(0, 8));
                        }
                    } catch (e) {
                        console.warn(`⚠️ Error obteniendo créditos para ${person.name}`);
                    }
                }
            }
            
            return this.removeDuplicates(allMovies);
            
        } catch (error) {
            console.error('❌ Error en búsqueda de persona:', error);
            throw error;
        }
    }

    // 🔍 Búsqueda por título
    async searchMoviesByTitle(query) {
        const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}&language=es-ES`;
        
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Error ${response.status}`);
            
            const data = await response.json();
            return data.results || [];
            
        } catch (error) {
            console.error('❌ Error en búsqueda de películas:', error);
            throw error;
        }
    }

    // 🎬 DETALLES COMPLETOS CON APPEND_TO_RESPONSE (INFO DE GEMINI)
    async getMovieDetails(movieId) {
        const appendToResponse = 'credits,images,videos,reviews,keywords,external_ids';
        const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=es-ES&append_to_response=${appendToResponse}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.status_message || `Error ${response.status}`);
            }
            const movieDetails = await response.json();
            
            console.log("🎬 Detalles completos obtenidos:", movieDetails.title);
            
            // 🎯 PROCESAMOS DATOS PARA CADA BLOQUE
            return this.processMovieDetails(movieDetails);
            
        } catch (error) {
            console.error("❌ Error al obtener detalles de la película:", error);
            throw error;
        }
    }

    // 🎯 PROCESAMOS DATOS SEGÚN INFO DE GEMINI
    processMovieDetails(raw) {
        return {
            // ✅ Datos base (todo el objeto original)
            ...raw,
            
            // 🕐 Marca temporal
            added_date: new Date().toISOString(),
            tmdb_id: raw.id,
            
            // 🎭 Para Ficha Artística
            artistic: {
                directors: raw.credits?.crew?.filter(person => person.job === 'Director') || [],
                cast: raw.credits?.cast?.slice(0, 15) || [],
                genres: raw.genres || [],
                originalTitle: raw.original_title,
                title: raw.title,
                year: raw.release_date ? new Date(raw.release_date).getFullYear() : null,
                rating: {
                    average: raw.vote_average,
                    count: raw.vote_count
                }
            },
            
            // ⚙️ Para Ficha Técnica  
            technical: {
                year: raw.release_date ? new Date(raw.release_date).getFullYear() : null,
                releaseDate: raw.release_date,
                runtime: raw.runtime,
                budget: raw.budget,
                revenue: raw.revenue,
                originalLanguage: raw.original_language,
                spokenLanguages: raw.spoken_languages || [],
                productionCompanies: raw.production_companies || [],
                productionCountries: raw.production_countries || [],
                status: raw.status,
                tagline: raw.tagline,
                popularity: raw.popularity,
                // 🎬 Equipo técnico específico
                crew: {
                    cinematographer: raw.credits?.crew?.find(person => person.job === 'Director of Photography')?.name || 'Desconocido',
                    composer: raw.credits?.crew?.find(person => person.job === 'Original Music Composer')?.name || 'Desconocido',
                    editor: raw.credits?.crew?.find(person => person.job === 'Editor')?.name || 'Desconocido',
                    producer: raw.credits?.crew?.find(person => person.job === 'Producer')?.name || 'Desconocido',
                    writer: raw.credits?.crew?.find(person => person.job === 'Screenplay')?.name || 'Desconocido'
                }
            },
            
            // 🎨 Para Crítica & Imágenes
            visual: {
                reviews: raw.reviews?.results || [],
                posters: raw.images?.posters || [],
                backdrops: raw.images?.backdrops || [],
                videos: raw.videos?.results || []
            },
            
            // 💰 Para Producción & Taquilla
            production: {
                budget: raw.budget,
                revenue: raw.revenue,
                profit: raw.revenue && raw.budget ? raw.revenue - raw.budget : null,
                companies: raw.production_companies || [],
                countries: raw.production_countries || [],
                // 📊 Análisis financiero
                roi: raw.revenue && raw.budget && raw.budget > 0 ? 
                     ((raw.revenue - raw.budget) / raw.budget * 100).toFixed(2) : null
            },
            
            // 📖 Para Contenido & Argumento
            content: {
                overview: raw.overview,
                tagline: raw.tagline,
                keywords: raw.keywords?.keywords || [],
                genres: raw.genres || [],
                themes: this.extractThemes(raw.keywords?.keywords || [])
            },
            
            // 🔗 Para Referencias & Enlaces
            references: {
                homepage: raw.homepage,
                imdbId: raw.external_ids?.imdb_id,
                imdbUrl: raw.external_ids?.imdb_id ? `https://www.imdb.com/title/${raw.external_ids.imdb_id}/` : null,
                facebookId: raw.external_ids?.facebook_id,
                twitterId: raw.external_ids?.twitter_id,
                instagramId: raw.external_ids?.instagram_id,
                tmdbUrl: `https://www.themoviedb.org/movie/${raw.id}`,
                // 📱 URLs de redes sociales
                socialLinks: {
                    facebook: raw.external_ids?.facebook_id ? `https://www.facebook.com/${raw.external_ids.facebook_id}` : null,
                    twitter: raw.external_ids?.twitter_id ? `https://twitter.com/${raw.external_ids.twitter_id}` : null,
                    instagram: raw.external_ids?.instagram_id ? `https://www.instagram.com/${raw.external_ids.instagram_id}` : null
                }
            }
        };
    }

    // 🎯 Extraer temas de keywords
    extractThemes(keywords) {
        const themeKeywords = keywords.filter(keyword => 
            ['love', 'revenge', 'friendship', 'family', 'death', 'war', 'peace', 'justice', 'freedom'].includes(keyword.name.toLowerCase())
        );
        return themeKeywords.map(k => k.name);
    }

    // 🧹 Remover duplicados
    removeDuplicates(movies) {
        const seen = new Set();
        return movies.filter(movie => {
            if (seen.has(movie.id)) return false;
            seen.add(movie.id);
            return true;
        });
    }

    // 🖼️ Utilidades de imágenes
    getPosterUrl(posterPath, size = 'w500') {
        if (!posterPath) return null;
        const baseUrl = size === 'large' ? AppConfig.TMDB.IMAGE_BASE_LARGE : 
                       size === 'small' ? AppConfig.TMDB.IMAGE_BASE_SMALL : 
                       AppConfig.TMDB.IMAGE_BASE;
        return `${baseUrl}${posterPath}`;
    }

    getBackdropUrl(backdropPath, size = 'w1280') {
        if (!backdropPath) return null;
        const baseUrl = size === 'large' ? 'https://image.tmdb.org/t/p/w1920' : 
                       'https://image.tmdb.org/t/p/w1280';
        return `${baseUrl}${backdropPath}`;
    }
}