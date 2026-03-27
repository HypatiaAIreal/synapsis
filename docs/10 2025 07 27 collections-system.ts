// 📚 SYNAPSIS - Sistema de Colecciones Inteligentes
// Organización avanzada de cinemateca personal

// ============================================
// TIPOS Y INTERFACES
// ============================================

interface Collection {
  id: string;
  name: string;
  description?: string;
  type: 'manual' | 'smart' | 'system';
  icon?: string;
  color?: string;
  createdAt: Date;
  updatedAt: Date;
  movieCount: number;
  rules?: SmartRule[]; // Para colecciones inteligentes
  isDefault?: boolean;
  sortOrder?: number;
}

interface SmartRule {
  field: 'genre' | 'year' | 'rating' | 'director' | 'actor' | 'keyword' | 'hasAnalysis' | 'analysisShared' | 'watchStatus';
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan' | 'between' | 'in' | 'notIn';
  value: any;
  combineWith?: 'AND' | 'OR';
}

interface MovieInCollection {
  movieId: string;
  collectionId: string;
  addedAt: Date;
  personalRating?: number;
  watchStatus: 'watched' | 'watching' | 'to-watch';
  lastWatched?: Date;
  watchCount?: number;
  notes?: string;
}

interface CollectionStats {
  totalMovies: number;
  watchedMovies: number;
  totalRuntime: number;
  averageRating: number;
  topGenres: Array<{ genre: string; count: number }>;
  mostWatchedMovie?: { id: string; title: string; count: number };
  analysisStats: {
    withAnalysis: number;
    sharedAnalysis: number;
    privateAnalysis: number;
  };
}

// ============================================
// COLECCIONES PREDEFINIDAS DEL SISTEMA
// ============================================

const SYSTEM_COLLECTIONS: Collection[] = [
  {
    id: 'all-movies',
    name: 'Todas las Películas',
    type: 'system',
    icon: '🎬',
    color: '#9333ea',
    isDefault: true,
    movieCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    sortOrder: 0
  },
  {
    id: 'to-watch',
    name: 'Por Ver',
    type: 'system',
    icon: '👁️',
    color: '#3b82f6',
    movieCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    sortOrder: 1,
    rules: [
      {
        field: 'watchStatus',
        operator: 'equals',
        value: 'to-watch'
      }
    ]
  },
  {
    id: 'favorites',
    name: 'Favoritas',
    type: 'system',
    icon: '⭐',
    color: '#fbbf24',
    movieCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    sortOrder: 2,
    rules: [
      {
        field: 'rating',
        operator: 'greaterThan',
        value: 4.5
      }
    ]
  },
  {
    id: 'with-analysis',
    name: 'Con Análisis',
    type: 'system',
    icon: '📝',
    color: '#10b981',
    movieCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    sortOrder: 3,
    rules: [
      {
        field: 'hasAnalysis',
        operator: 'equals',
        value: true
      }
    ]
  },
  {
    id: 'shared-analysis',
    name: 'Análisis Compartidos',
    type: 'system',
    icon: '🌍',
    color: '#0891b2',
    movieCount: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    sortOrder: 4,
    rules: [
      {
        field: 'analysisShared',
        operator: 'equals',
        value: true
      }
    ]
  }
];

// ============================================
// PLANTILLAS DE COLECCIONES INTELIGENTES
// ============================================

const SMART_COLLECTION_TEMPLATES = [
  {
    name: 'Clásicos del Cine',
    description: 'Películas anteriores a 1980',
    icon: '🎞️',
    rules: [
      {
        field: 'year',
        operator: 'lessThan',
        value: 1980
      }
    ]
  },
  {
    name: 'Obras Maestras',
    description: 'Películas con calificación superior a 8.0',
    icon: '🏆',
    rules: [
      {
        field: 'rating',
        operator: 'greaterThan',
        value: 8.0
      }
    ]
  },
  {
    name: 'Cine de Autor',
    description: 'Directores selectos',
    icon: '🎨',
    rules: [
      {
        field: 'director',
        operator: 'in',
        value: ['Christopher Nolan', 'Denis Villeneuve', 'Quentin Tarantino', 'Wes Anderson', 'Paul Thomas Anderson']
      }
    ]
  },
  {
    name: 'Viajes Mentales',
    description: 'Ciencia ficción y fantasía',
    icon: '🚀',
    rules: [
      {
        field: 'genre',
        operator: 'in',
        value: ['Ciencia ficción', 'Fantasía'],
        combineWith: 'OR'
      }
    ]
  },
  {
    name: 'Para Reflexionar',
    description: 'Dramas y thrillers psicológicos',
    icon: '🧠',
    rules: [
      {
        field: 'genre',
        operator: 'contains',
        value: 'Drama',
        combineWith: 'OR'
      },
      {
        field: 'genre',
        operator: 'contains',
        value: 'Suspense',
        combineWith: 'OR'
      }
    ]
  }
];

// ============================================
// SERVICIO DE COLECCIONES
// ============================================

class CollectionService {
  private collections: Collection[] = [...SYSTEM_COLLECTIONS];
  private movieCollections: MovieInCollection[] = [];

  // Crear colección manual
  createCollection(name: string, description?: string, icon?: string): Collection {
    const newCollection: Collection = {
      id: `col-${Date.now()}`,
      name,
      description,
      type: 'manual',
      icon: icon || '📁',
      color: this.generateColor(),
      createdAt: new Date(),
      updatedAt: new Date(),
      movieCount: 0,
      sortOrder: this.collections.length
    };

    this.collections.push(newCollection);
    return newCollection;
  }

  // Crear colección inteligente
  createSmartCollection(
    name: string,
    rules: SmartRule[],
    description?: string,
    icon?: string
  ): Collection {
    const newCollection: Collection = {
      id: `smart-${Date.now()}`,
      name,
      description,
      type: 'smart',
      icon: icon || '🧩',
      color: this.generateColor(),
      rules,
      createdAt: new Date(),
      updatedAt: new Date(),
      movieCount: 0,
      sortOrder: this.collections.length
    };

    this.collections.push(newCollection);
    this.updateSmartCollectionMovies(newCollection);
    return newCollection;
  }

  // Agregar película a colección
  addMovieToCollection(movieId: string, collectionId: string, metadata?: Partial<MovieInCollection>): void {
    const existingEntry = this.movieCollections.find(
      mc => mc.movieId === movieId && mc.collectionId === collectionId
    );

    if (!existingEntry) {
      this.movieCollections.push({
        movieId,
        collectionId,
        addedAt: new Date(),
        watchStatus: 'to-watch',
        ...metadata
      });

      // Actualizar contador
      const collection = this.collections.find(c => c.id === collectionId);
      if (collection) {
        collection.movieCount++;
        collection.updatedAt = new Date();
      }
    }
  }

  // Eliminar película de colección
  removeMovieFromCollection(movieId: string, collectionId: string): void {
    const index = this.movieCollections.findIndex(
      mc => mc.movieId === movieId && mc.collectionId === collectionId
    );

    if (index !== -1) {
      this.movieCollections.splice(index, 1);
      
      const collection = this.collections.find(c => c.id === collectionId);
      if (collection) {
        collection.movieCount--;
        collection.updatedAt = new Date();
      }
    }
  }

  // Obtener películas de una colección
  getMoviesInCollection(collectionId: string, movies: any[]): any[] {
    const collection = this.collections.find(c => c.id === collectionId);
    
    if (!collection) return [];

    if (collection.type === 'smart' && collection.rules) {
      return this.evaluateSmartRules(movies, collection.rules);
    }

    const movieIds = this.movieCollections
      .filter(mc => mc.collectionId === collectionId)
      .map(mc => mc.movieId);

    return movies.filter(m => movieIds.includes(m.id));
  }

  // Evaluar reglas inteligentes
  private evaluateSmartRules(movies: any[], rules: SmartRule[]): any[] {
    return movies.filter(movie => {
      let result = true;
      let previousResult = true;

      for (const rule of rules) {
        let ruleResult = this.evaluateRule(movie, rule);
        
        if (rule.combineWith === 'OR') {
          result = previousResult || ruleResult;
        } else {
          result = result && ruleResult;
        }
        
        previousResult = ruleResult;
      }

      return result;
    });
  }

  // Evaluar una regla individual
  private evaluateRule(movie: any, rule: SmartRule): boolean {
    const value = this.getFieldValue(movie, rule.field);

    switch (rule.operator) {
      case 'equals':
        return value === rule.value;
      
      case 'contains':
        if (Array.isArray(value)) {
          return value.some(v => v.includes(rule.value));
        }
        return String(value).includes(rule.value);
      
      case 'greaterThan':
        return Number(value) > Number(rule.value);
      
      case 'lessThan':
        return Number(value) < Number(rule.value);
      
      case 'between':
        const [min, max] = rule.value;
        return Number(value) >= min && Number(value) <= max;
      
      case 'in':
        return rule.value.includes(value);
      
      case 'notIn':
        return !rule.value.includes(value);
      
      default:
        return false;
    }
  }

  // Obtener valor del campo
  private getFieldValue(movie: any, field: string): any {
    switch (field) {
      case 'genre':
        return movie.genres?.map((g: any) => g.name) || [];
      
      case 'year':
        return movie.release_date ? 
          parseInt(movie.release_date.split('-')[0]) : 0;
      
      case 'rating':
        return movie.vote_average || 0;
      
      case 'director':
        return movie.credits?.crew
          ?.filter((c: any) => c.job === 'Director')
          ?.map((d: any) => d.name) || [];
      
      case 'actor':
        return movie.credits?.cast?.map((c: any) => c.name) || [];
      
      case 'keyword':
        return movie.keywords?.keywords?.map((k: any) => k.name) || [];
      
      case 'hasAnalysis':
        // Esto vendría de otro servicio
        return movie.hasAnalysis || false;
      
      case 'analysisShared':
        return movie.analysisShared || false;
      
      case 'watchStatus':
        const mc = this.movieCollections.find(m => m.movieId === movie.id);
        return mc?.watchStatus || 'to-watch';
      
      default:
        return null;
    }
  }

  // Actualizar películas en colecciones inteligentes
  private updateSmartCollectionMovies(collection: Collection): void {
    // Esto se llamaría cuando se actualiza la biblioteca
    // para recalcular qué películas pertenecen a cada colección inteligente
  }

  // Obtener estadísticas de una colección
  getCollectionStats(collectionId: string, movies: any[]): CollectionStats {
    const collectionMovies = this.getMoviesInCollection(collectionId, movies);
    
    const stats: CollectionStats = {
      totalMovies: collectionMovies.length,
      watchedMovies: 0,
      totalRuntime: 0,
      averageRating: 0,
      topGenres: [],
      analysisStats: {
        withAnalysis: 0,
        sharedAnalysis: 0,
        privateAnalysis: 0
      }
    };

    // Calcular estadísticas
    const genreCount: Record<string, number> = {};
    let totalRating = 0;
    let ratingCount = 0;

    collectionMovies.forEach(movie => {
      // Runtime
      stats.totalRuntime += movie.runtime || 0;

      // Rating
      if (movie.vote_average) {
        totalRating += movie.vote_average;
        ratingCount++;
      }

      // Géneros
      movie.genres?.forEach((genre: any) => {
        genreCount[genre.name] = (genreCount[genre.name] || 0) + 1;
      });

      // Estado de visualización
      const mc = this.movieCollections.find(m => m.movieId === movie.id);
      if (mc?.watchStatus === 'watched') {
        stats.watchedMovies++;
      }

      // Análisis
      if (movie.hasAnalysis) {
        stats.analysisStats.withAnalysis++;
        if (movie.analysisShared) {
          stats.analysisStats.sharedAnalysis++;
        } else {
          stats.analysisStats.privateAnalysis++;
        }
      }
    });

    // Promedios y ordenamiento
    stats.averageRating = ratingCount > 0 ? totalRating / ratingCount : 0;
    stats.topGenres = Object.entries(genreCount)
      .map(([genre, count]) => ({ genre, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return stats;
  }

  // Generar color aleatorio para colecciones
  private generateColor(): string {
    const colors = [
      '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
      '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0891b2',
      '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
      '#ec4899', '#f43f5e'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // Sugerir colecciones basadas en la biblioteca
  suggestCollections(movies: any[]): Array<{ name: string; description: string; movieCount: number }> {
    const suggestions = [];

    // Por década
    const decades = new Set<number>();
    movies.forEach(movie => {
      const year = parseInt(movie.release_date?.split('-')[0] || '0');
      if (year > 0) {
        decades.add(Math.floor(year / 10) * 10);
      }
    });

    decades.forEach(decade => {
      const count = movies.filter(m => {
        const year = parseInt(m.release_date?.split('-')[0] || '0');
        return year >= decade && year < decade + 10;
      }).length;

      if (count >= 5) {
        suggestions.push({
          name: `Cine de los ${decade}s`,
          description: `Películas de ${decade} a ${decade + 9}`,
          movieCount: count
        });
      }
    });

    // Por director frecuente
    const directorCount: Record<string, number> = {};
    movies.forEach(movie => {
      const directors = movie.credits?.crew
        ?.filter((c: any) => c.job === 'Director')
        ?.map((d: any) => d.name) || [];
      
      directors.forEach((director: string) => {
        directorCount[director] = (directorCount[director] || 0) + 1;
      });
    });

    Object.entries(directorCount)
      .filter(([_, count]) => count >= 3)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .forEach(([director, count]) => {
        suggestions.push({
          name: `Filmografía de ${director}`,
          description: `Todas las películas dirigidas por ${director}`,
          movieCount: count
        });
      });

    return suggestions;
  }
}

// ============================================
// COMPONENTE REACT PARA UI
// ============================================

interface CollectionManagerProps {
  movies: any[];
  onCollectionSelect: (collectionId: string) => void;
}

const CollectionManager: React.FC<CollectionManagerProps> = ({
  movies,
  onCollectionSelect
}) => {
  const [collections, setCollections] = useState<Collection[]>(SYSTEM_COLLECTIONS);
  const [selectedCollection, setSelectedCollection] = useState<string>('all-movies');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [collectionStats, setCollectionStats] = useState<CollectionStats | null>(null);

  const service = useRef(new CollectionService());

  // Manejar selección de colección
  const handleSelectCollection = (collectionId: string) => {
    setSelectedCollection(collectionId);
    onCollectionSelect(collectionId);
  };

  // Mostrar estadísticas
  const showStats = (collectionId: string) => {
    const stats = service.current.getCollectionStats(collectionId, movies);
    setCollectionStats(stats);
    setShowStatsModal(true);
  };

  return (
    <div className="collection-manager">
      <div className="collections-sidebar">
        <div className="collections-header">
          <h3>📚 Mis Colecciones</h3>
          <button 
            className="create-collection-btn"
            onClick={() => setShowCreateModal(true)}
          >
            + Nueva
          </button>
        </div>

        <div className="collections-list">
          {collections.map(collection => (
            <div 
              key={collection.id}
              className={`collection-item ${selectedCollection === collection.id ? 'active' : ''}`}
              onClick={() => handleSelectCollection(collection.id)}
            >
              <span className="collection-icon">{collection.icon}</span>
              <div className="collection-info">
                <span className="collection-name">{collection.name}</span>
                <span className="movie-count">{collection.movieCount} películas</span>
              </div>
              {collection.type === 'smart' && (
                <span className="smart-badge">🧩</span>
              )}
              <button 
                className="stats-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  showStats(collection.id);
                }}
              >
                📊
              </button>
            </div>
          ))}
        </div>

        <div className="collection-filters">
          <h4>🔍 Filtros Rápidos</h4>
          <label>
            <input type="checkbox" />
            <span>Con análisis</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Análisis compartidos</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Sin ver</span>
          </label>
          <label>
            <input type="checkbox" />
            <span>Favoritas (★★★★★)</span>
          </label>
        </div>
      </div>

      {/* Modal de creación */}
      {showCreateModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Crear Nueva Colección</h3>
            {/* Formulario de creación */}
            <button onClick={() => setShowCreateModal(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal de estadísticas */}
      {showStatsModal && collectionStats && (
        <div className="modal">
          <div className="modal-content stats-modal">
            <h3>📊 Estadísticas de la Colección</h3>
            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-value">{collectionStats.totalMovies}</span>
                <span className="stat-label">Total Películas</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">{collectionStats.watchedMovies}</span>
                <span className="stat-label">Vistas</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">
                  {Math.floor(collectionStats.totalRuntime / 60)}h
                </span>
                <span className="stat-label">Duración Total</span>
              </div>
              <div className="stat-card">
                <span className="stat-value">
                  ⭐ {collectionStats.averageRating.toFixed(1)}
                </span>
                <span className="stat-label">Rating Promedio</span>
              </div>
            </div>

            <div className="top-genres">
              <h4>Géneros Principales</h4>
              {collectionStats.topGenres.map(({ genre, count }) => (
                <div key={genre} className="genre-stat">
                  <span>{genre}</span>
                  <span>{count} películas</span>
                </div>
              ))}
            </div>

            <div className="analysis-stats">
              <h4>Análisis</h4>
              <p>Con análisis: {collectionStats.analysisStats.withAnalysis}</p>
              <p>Compartidos: {collectionStats.analysisStats.sharedAnalysis}</p>
              <p>Privados: {collectionStats.analysisStats.privateAnalysis}</p>
            </div>

            <button onClick={() => setShowStatsModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================
// EXPORTS
// ============================================

export {
  CollectionService,
  CollectionManager,
  SYSTEM_COLLECTIONS,
  SMART_COLLECTION_TEMPLATES,
  type Collection,
  type SmartRule,
  type MovieInCollection,
  type CollectionStats
};