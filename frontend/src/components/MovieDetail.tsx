import React from 'react';
import { Film, Star, Calendar, Clock } from 'lucide-react';

interface MovieDetailProps {
  movie?: any;
  onBack?: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie, onBack }) => {
  if (!movie) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Film className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No se encontró información de la película</p>
          {onBack && (
            <button 
              onClick={onBack}
              className="mt-4 text-purple-400 hover:text-purple-300"
            >
              ← Volver
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        {onBack && (
          <button 
            onClick={onBack}
            className="text-purple-400 hover:text-purple-300 mb-6"
          >
            ← Volver a películas
          </button>
        )}

        <div className="bg-slate-800/50 rounded-xl border border-purple-500/20 overflow-hidden">
          {/* Header */}
          <div className="p-6">
            <div className="flex items-start space-x-6">
              {movie.poster_url && (
                <img
                  src={movie.poster_url}
                  alt={movie.title}
                  className="w-48 h-72 object-cover rounded-lg"
                />
              )}
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-white mb-2">{movie.title}</h1>
                
                <div className="flex items-center space-x-4 text-gray-300 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{movie.year}</span>
                  </div>
                  {movie.duration && (
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{movie.duration} min</span>
                    </div>
                  )}
                  {movie.vote_average && (
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>{movie.vote_average}</span>
                    </div>
                  )}
                </div>

                {movie.director && (
                  <p className="text-purple-300 mb-2">
                    <span className="font-medium">Dirección:</span> {Array.isArray(movie.director) ? movie.director.join(', ') : movie.director}
                  </p>
                )}

                {movie.genre && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(Array.isArray(movie.genre) ? movie.genre : [movie.genre]).map((g: string, i: number) => (
                      <span key={i} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                        {g}
                      </span>
                    ))}
                  </div>
                )}

                {movie.plot_summary && (
                  <div>
                    <h3 className="font-semibold text-white mb-2">Sinopsis</h3>
                    <p className="text-gray-300 leading-relaxed">{movie.plot_summary}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-slate-700 p-6">
            <div className="flex space-x-4">
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors">
                Ver Bloques de Análisis
              </button>
              <button className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-lg transition-colors">
                Crear Análisis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;