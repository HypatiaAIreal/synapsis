import React, { useState, useEffect, useCallback } from 'react';
import { Search, Film, Star, Calendar, Sparkles, ArrowRight, Loader, Plus, Check } from 'lucide-react';
import axios from 'axios';

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
  genre_ids: number[];
  original_language: string;
  adult: boolean;
}

interface CinematecaMovie {
  _id: string;
  userId: string;
  movie: Movie;
  addedAt: string;
  analysisCount: number;
}

// Función debounce
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

interface TMDBIntelligentSearchProps {
  onMovieSelect?: (movieId: string) => void;
}

const TMDBIntelligentSearch: React.FC<TMDBIntelligentSearchProps> = ({ onMovieSelect }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cinematecaMovies, setCinematecaMovies] = useState<Set<number>>(new Set());
  const [addingMovie, setAddingMovie] = useState<number | null>(null);
  const [suggestions] = useState([
    "Blade Runner", "Pulp Fiction", "The Matrix", "Inception", 
    "Citizen Kane", "Casablanca", "Godfather", "2001 Space Odyssey",
    "Akira", "Seven Samurai", "8½", "Vertigo"
  ]);

  // Cargar películas de la cinemateca al inicio
  useEffect(() => {
    loadCinemateca();
  }, []);

  const loadCinemateca = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/tmdb/cinemateca?userId=demo_user');
      if (response.data.success) {
        const movieIds = response.data.data.map((item: CinematecaMovie) => item.movie.id);
        setCinematecaMovies(new Set(movieIds));
      }
    } catch (error) {
      console.error('Error cargando cinemateca:', error);
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    console.log(`🎬 Seleccionada película: ${movie.title} (ID: ${movie.id})`);
    // Si hay callback, usarlo para navegación React
    if (onMovieSelect) {
      onMovieSelect(movie.id.toString());
    } else {
      // Fallback si no hay callback
      console.warn('No se definió onMovieSelect callback');
    }
  };

  const handleAddToCinemateca = async (movie: Movie, e: React.MouseEvent) => {
    e.stopPropagation();
    setAddingMovie(movie.id);
    
    try {
      const response = await axios.post('http://localhost:3000/api/tmdb/cinemateca/add', {
        movie,
        userId: 'demo_user'
      });
      
      if (response.data.success) {
        setCinematecaMovies(prev => new Set([...prev, movie.id]));
        console.log('✅ Película agregada a la cinemateca');
      } else {
        setError(response.data.error || 'Error al agregar película');
      }
    } catch (error) {
      console.error('Error agregando a cinemateca:', error);
      setError('Error al agregar película a la cinemateca');
    } finally {
      setAddingMovie(null);
    }
  };

  const getPosterUrl = (posterPath: string | null) => {
    if (!posterPath) return 'https://via.placeholder.com/300x450?text=No+Image';
    return `https://image.tmdb.org/t/p/w300${posterPath}`;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Sin fecha';
    return new Date(dateString).getFullYear().toString();
  };

  // Búsqueda real con API backend TMDB
  const performSearch = useCallback(async (searchQuery: string) => {
    if (!searchQuery || searchQuery.length < 2) {
      setResults([]);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      console.log(`🔍 Buscando en TMDB: "${searchQuery}"`);
      
      const response = await axios.post('http://localhost:3000/api/tmdb/search', {
        query: searchQuery,
        options: {
          region: 'ES',
          sortBy: 'popularity',
          page: 1
        }
      });
      
      console.log('📊 Respuesta TMDB:', response.data);

      // if (response.data.success && response.data.data) {
      //   const movies = response.data.data.results || [];
      //   setResults(movies.slice(0, 8)); // Mostrar máximo 8 resultados
      //   console.log(`✅ Encontradas ${movies.length} películas`);
      // } 
      if (response.data.success && response.data.data) {
        const movies = response.data.data.movies || [];  // RESTAURADO: movies como estaba antes
        setResults(movies.slice(0, 8));
        console.log(`✅ Mostrando ${movies.length} películas`);
      } else {
        setResults([]);
        setError('No se encontraron resultados');
      }
    } catch (error: any) {
      console.error('❌ Error buscando películas:', error);
      
      if (error.response?.status === 404) {
        setError('Servicio de búsqueda no disponible. Verifica que el backend esté ejecutándose.');
      } else {
        setError(error.response?.data?.error || 'Error al buscar películas');
      }
      
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedSearch = useCallback(
    debounce(performSearch, 500),
    [performSearch]
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <div className="search-container">
      {/* Header */}
      <div className="search-header">
        <h1 className="search-title">
          <Sparkles className="text-purple-400 consciousness-pulse" />
          Buscador Cinematográfico
          <Film className="text-blue-400 consciousness-pulse" />
        </h1>
        <p className="search-subtitle">
          Descubre películas y accede a análisis profundos de nuestra comunidad consciente
        </p>
      </div>

      {/* Barra de búsqueda principal */}
      <div className="search-input-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Busca por título, director, actor... ej: 'Blade Runner'"
          className="search-input"
          autoFocus
        />
        <Search className="search-icon" />
        {loading && (
          <div className="absolute inset-y-0 right-12 flex items-center">
            <Loader className="h-6 w-6 text-purple-400 animate-spin" />
          </div>
        )}
      </div>

      {/* Error message */}
      {error && (
        <div className="max-w-4xl mx-auto mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {/* Sugerencias */}
      {query.length === 0 && (
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <p className="text-gray-300 mb-4">💡 Sugerencias para empezar:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setQuery(suggestion)}
                className="nav-button"
              >
                {suggestion}
              </button>
            ))}
            <button
              onClick={() => {
                const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
                setQuery(randomSuggestion);
              }}
              className="btn-secondary text-sm px-4 py-2"
            >
              ✨ Sorpréndeme
            </button>
          </div>
        </div>
      )}

      {/* Resultados */}
      {results.length > 0 && (
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-gray-300">
              <span className="text-purple-400 font-semibold consciousness-pulse">{results.length}</span> resultados para 
              <span className="text-white font-semibold"> "{query}"</span>
            </p>
          </div>

          <div className="search-results">
            {results.map((movie) => (
              <div
                key={movie.id}
                className="movie-card cursor-pointer transform transition-all hover:scale-[1.02]"
                onClick={() => handleMovieSelect(movie)}
              >
                <img
                  src={getPosterUrl(movie.poster_path)}
                  alt={movie.title}
                  className="movie-poster"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://via.placeholder.com/300x450?text=No+Image';
                  }}
                />
                
                <div className="movie-content">
                  <h3 className="movie-title">
                    {movie.title}
                  </h3>
                  
                  <div className="movie-info">
                    <div className="movie-year">
                      <Calendar className="w-4 h-4" />
                      {formatDate(movie.release_date)}
                    </div>
                    <div className="movie-rating">
                      <Star className="w-4 h-4" />
                      {movie.vote_average.toFixed(1)}
                    </div>
                  </div>

                  <div className="movie-overview">
                    {movie.overview}
                  </div>

                  <div className="movie-actions">
                    <button className="movie-action-btn flex-1">
                      Ver 8 Bloques
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    {cinematecaMovies.has(movie.id) ? (
                      <button className="movie-action-btn flex-shrink-0 bg-green-500/20 border-green-500/30 cursor-default">
                        <Check className="w-4 h-4" />
                        En Cinemateca
                      </button>
                    ) : (
                      <button 
                        className="movie-action-btn flex-shrink-0 bg-purple-500/20 border-purple-500/30 hover:bg-purple-500/30"
                        onClick={(e) => handleAddToCinemateca(movie, e)}
                        disabled={addingMovie === movie.id}
                      >
                        {addingMovie === movie.id ? (
                          <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                          <>
                            <Plus className="w-4 h-4" />
                            Agregar
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Estado vacío */}
      {query.length > 0 && results.length === 0 && !loading && !error && (
        <div className="text-center py-16">
          <Film className="w-16 h-16 text-purple-400 mx-auto mb-4 consciousness-pulse" />
          <h3 className="text-xl font-semibold text-white mb-2">
            No se encontraron películas para "{query}"
          </h3>
          <p className="text-gray-400">
            Intenta con términos diferentes o busca por director/actor
          </p>
        </div>
      )}

      {/* Loading state */}
      {loading && (
        <div className="text-center py-16">
          <div className="loading mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Buscando películas...
          </h3>
          <p className="text-gray-400">
            Explorando la cinemateca consciente
          </p>
        </div>
      )}
    </div>
  );
};

export default TMDBIntelligentSearch;