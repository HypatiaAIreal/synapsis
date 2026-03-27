// 🔍 SearchPage.tsx - Página principal de búsqueda
// Para integrar en F:\synapsis\frontend\src\components\

import React from 'react';
import TMDBIntelligentSearch from './TMDBIntelligentSearch';

interface SearchPageProps {
  onMovieSelect?: (movieId: string) => void;
}

const SearchPage: React.FC<SearchPageProps> = ({ onMovieSelect }) => {
  return (
    <div className="bg-animated min-h-screen">
      <TMDBIntelligentSearch onMovieSelect={onMovieSelect} />
    </div>
  );
};

export default SearchPage;