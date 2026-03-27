// Función helper para construir URLs de imágenes de TMDB correctamente
export const buildTMDBImageUrl = (path: string | undefined | null, size: string = 'w300'): string | undefined => {
  if (!path) return undefined;
  
  // Asegurar que el path comience con '/'
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  
  return `https://image.tmdb.org/t/p/${size}${cleanPath}`;
};

// Tamaños comunes de TMDB
export const TMDB_IMAGE_SIZES = {
  poster: {
    small: 'w185',
    medium: 'w300',
    large: 'w500',
    original: 'original'
  },
  backdrop: {
    small: 'w300',
    medium: 'w780',
    large: 'w1280',
    original: 'original'
  },
  profile: {
    small: 'w45',
    medium: 'w185',
    large: 'h632',
    original: 'original'
  }
};