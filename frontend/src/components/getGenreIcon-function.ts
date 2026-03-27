// AGREGAR ESTA FUNCIÓN EN MovieBlocks.tsx ANTES DE LA LÍNEA 850
// (justo después de getCrewByJob y antes de renderBlockContent)

  // 🎨 FUNCIÓN PARA ICONOS DE GÉNERO
  const getGenreIcon = (genreName: string): string => {
    const genreIcons: { [key: string]: string } = {
      'Acción': '⚔️',
      'Action': '⚔️',
      'Aventura': '🗺️',
      'Adventure': '🗺️',
      'Animación': '🎨',
      'Animation': '🎨',
      'Comedia': '😄',
      'Comedy': '😄',
      'Crimen': '🔍',
      'Crime': '🔍',
      'Documental': '📹',
      'Documentary': '📹',
      'Drama': '🎭',
      'Familia': '👨‍👩‍👧‍👦',
      'Family': '👨‍👩‍👧‍👦',
      'Fantasía': '🦄',
      'Fantasy': '🦄',
      'Historia': '📜',
      'History': '📜',
      'Terror': '👻',
      'Horror': '👻',
      'Música': '🎵',
      'Music': '🎵',
      'Misterio': '❓',
      'Mystery': '❓',
      'Romance': '💕',
      'Ciencia ficción': '🚀',
      'Science Fiction': '🚀',
      'TV Movie': '📺',
      'Suspense': '😰',
      'Thriller': '😰',
      'Guerra': '⚔️',
      'War': '⚔️',
      'Western': '🤠'
    };
    return genreIcons[genreName] || '🎬';
  };