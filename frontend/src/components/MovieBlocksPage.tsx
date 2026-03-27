import React, { useEffect, useState } from 'react';
import { Film, ArrowLeft } from 'lucide-react';
import MovieBlocks from './MovieBlocks';

const MovieBlocksPage: React.FC = () => {
  const [movieId, setMovieId] = useState<string | null>(null);

  useEffect(() => {
    // Extraer ID de película desde la URL
    const path = window.location.pathname;
    const movieMatch = path.match(/\/movie\/(\d+)/);
    if (movieMatch) {
      setMovieId(movieMatch[1]);
    }
  }, []);

  const handleBack = () => {
    // Volver a la búsqueda o página anterior
    window.history.back();
  };

  if (!movieId) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Film className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <p className="text-gray-400">No se encontró ID de película en la URL</p>
          <button 
            onClick={handleBack}
            className="mt-4 text-purple-400 hover:text-purple-300 flex items-center gap-2 mx-auto"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
        </div>
      </div>
    );
  }

  return <MovieBlocks movieId={movieId} onBack={handleBack} />;
};

export default MovieBlocksPage;