import React, { useState, useEffect, useCallback } from 'react';
import { Search, Film, Star, Calendar, Sparkles, ArrowRight, Loader, Plus, Check } from 'lucide-react';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';

const PLACEHOLDER_IMG = 'https://placehold.co/300x450/111827/6b7280?text=Sin+Imagen';

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

  useEffect(() => {
    loadCinemateca();
  }, []);

  const loadCinemateca = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tmdb/cinemateca?userId=demo_user`);
      if (response.data.success) {
        const movieIds = response.data.data.map((item: CinematecaMovie) => item.movie.id);
        setCinematecaMovies(new Set(movieIds));
      }
    } catch (error) {
      console.error('Error cargando cinemateca:', error);
    }
  };

  const handleMovieSelect = (movie: Movie) => {
    if (onMovieSelect) {
      onMovieSelect(movie.id.toString());
    }
  };

  const handleAddToCinemateca = async (movie: Movie, e: React.MouseEvent) => {
    e.stopPropagation();
    setAddingMovie(movie.id);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/tmdb/cinemateca/add`, {
        movie,
        userId: 'demo_user'
      });
      if (response.data.success) {
        setCinematecaMovies(prev => new Set([...prev, movie.id]));
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
    if (!posterPath) return PLACEHOLDER_IMG;
    return `https://image.tmdb.org/t/p/w300${posterPath}`;
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Sin fecha';
    return new Date(dateString).getFullYear().toString();
  };

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
      const response = await axios.post(`${API_BASE_URL}/api/tmdb/search`, {
        query: searchQuery,
        options: { region: 'ES', sortBy: 'popularity', page: 1 }
      });
      if (response.data.success && response.data.data) {
        const movies = response.data.data.movies || [];
        setResults(movies.slice(0, 8));
        console.log(`✅ Mostrando ${movies.length} películas`);
      } else {
        setResults([]);
        setError('No se encontraron resultados');
      }
    } catch (error: any) {
      console.error('❌ Error buscando películas:', error);
      setError(error.response?.data?.error || 'Error al buscar películas');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const debouncedSearch = useCallback(debounce(performSearch, 500), [performSearch]);

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <div className="search-container">
      <div className="search-header">
        <h1 className="search-title">
          <Sparkles className="text-purple-400" />
          Buscador Cinematográfico
          <Film className="text-blue-400" />
        </h1>
        <p className="search-subtitle">
          Descubre películas y accede a análisis profundos de nuestra comunidad consciente
        </p>
      </div>

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

      {error && (
        <div className="max-w-4xl mx-auto mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-center">
          <p className="text-red-400">{error}</p>
        </div>
      )}

      {query.length === 0 && (
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <p className="text-gray-300 mb-4">💡 Sugerencias para empezar:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {suggestions.map((suggestion, index) => (
              <button key={index} onClick={() => setQuery(suggestion)} className="nav-button">
                {suggestion}
              </button>
            ))}
            <button
              onClick={() => setQuery(suggestions[Math.floor(Math.random() * suggestions.length)])}
              className="btn-secondary text-sm px-4 py-2"
            >
              ✨ Sorpréndeme
            </button>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 text-center">
            <p className="text-gray-300">
              <span className="text-purple-400 font-semibold">{results.length}</span> resultados para{' '}
              <span className="text-white font-semibold">"{query}"</span>
            </p>
          </div>
          <div className="search-results">
            {results.map((movie) => (
              <div key={movie.id} className="movie-card cursor-pointer" onClick={() => handleMovieSelect(movie)}>
                <img
                  src={getPosterUrl(movie.poster_path)}
                  alt={movie.title}
                  className="movie-poster"
                  onError={(e) => { (e.target as HTMLImageElement).src = PLACEHOLDER_IMG; }}
                />
                <div className="movie-content">
                  <h3 className="movie-title">{movie.title}</h3>
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
                  <div className="movie-overview">{movie.overview}</div>
                  <div className="movie-actions">
                    <button className="movie-action-btn flex-1">
                      Ver 8 Bloques
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    {cinematecaMovies.has(movie.id) ? (
                      <button className="movie-action-btn flex-shrink-0" style={{background:'rgba(34,197,94,0.15)',borderColor:'rgba(34,197,94,0.3)',cursor:'default'}}>
                        <Check className="w-4 h-4" /> En Cinemateca
                      </button>
                    ) : (
                      <button
                        className="movie-action-btn flex-shrink-0"
                        onClick={(e) => handleAddToCinemateca(movie, e)}
                        disabled={addingMovie === movie.id}
                      >
                        {addingMovie === movie.id ? (
                          <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                          <><Plus className="w-4 h-4" /> Agregar</>
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

      {query.length > 0 && results.length === 0 && !loading && !error && (
        <div className="text-center py-16">
          <Film className="w-16 h-16 text-purple-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">No se encontraron películas para "{query}"</h3>
          <p className="text-gray-400">Intenta con términos diferentes</p>
        </div>
      )}

      {loading && (
        <div className="text-center py-16">
          <div className="loading mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-white mb-2">Buscando películas...</h3>
          <p className="text-gray-400">Explorando la cinemateca consciente</p>
        </div>
      )}
    </div>
  );
};

export default TMDBIntelligentSearch;
