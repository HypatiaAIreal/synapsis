// 📚 Sistema de Colecciones Horizontal - Diseño Elegante
import React, { useState, useRef, useEffect } from 'react';
import { 
  Plus, Search, Filter, Grid, List, Star, Eye, Globe, 
  Lock, Brain, Sparkles, Film, Calendar, TrendingUp,
  FolderPlus, Tag, Zap, BarChart3, ChevronLeft, ChevronRight
} from 'lucide-react';
import styles from './CollectionManagerHorizontal.module.css';

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
  rules?: SmartRule[];
  isDefault?: boolean;
  sortOrder?: number;
}

interface SmartRule {
  field: 'genre' | 'year' | 'rating' | 'director' | 'actor' | 'keyword' | 'hasAnalysis' | 'analysisShared' | 'watchStatus';
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan' | 'between' | 'in' | 'notIn';
  value: any;
  combineWith?: 'AND' | 'OR';
}

interface CollectionStats {
  totalMovies: number;
  watchedMovies: number;
  totalRuntime: number;
  averageRating: number;
  topGenres: Array<{ genre: string; count: number }>;
}

// Colecciones del sistema predefinidas
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
    rules: [{ field: 'watchStatus', operator: 'equals', value: 'to-watch' }]
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
    rules: [{ field: 'rating', operator: 'greaterThan', value: 4.5 }]
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
    rules: [{ field: 'hasAnalysis', operator: 'equals', value: true }]
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
    rules: [{ field: 'analysisShared', operator: 'equals', value: true }]
  }
];

interface CollectionManagerHorizontalProps {
  movies: any[];
  onCollectionSelect: (collectionId: string) => void;
  currentCollectionId?: string;
}

export const CollectionManagerHorizontal: React.FC<CollectionManagerHorizontalProps> = ({
  movies,
  onCollectionSelect,
  currentCollectionId = 'all-movies'
}) => {
  const [collections, setCollections] = useState<Collection[]>(SYSTEM_COLLECTIONS);
  const [selectedCollection, setSelectedCollection] = useState<string>(currentCollectionId);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [collectionStats, setCollectionStats] = useState<CollectionStats | null>(null);
  const [createType, setCreateType] = useState<'manual' | 'smart'>('manual');
  const [newCollectionName, setNewCollectionName] = useState('');
  const [newCollectionDescription, setNewCollectionDescription] = useState('');
  const [newCollectionIcon, setNewCollectionIcon] = useState('📁');
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Actualizar contadores de películas
  useEffect(() => {
    const updatedCollections = collections.map(col => ({
      ...col,
      movieCount: getMoviesInCollection(col).length
    }));
    setCollections(updatedCollections);
  }, [movies]);

  // Verificar si necesita botones de scroll
  useEffect(() => {
    const checkScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth } = scrollContainerRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };
    
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [collections]);

  const handleSelectCollection = (collectionId: string) => {
    setSelectedCollection(collectionId);
    onCollectionSelect(collectionId);
  };

  const getMoviesInCollection = (collection: Collection): any[] => {
    if (collection.id === 'all-movies') return movies;
    
    if (collection.type === 'smart' && collection.rules) {
      return evaluateSmartRules(movies, collection.rules);
    }
    
    // Para colecciones manuales, por ahora devolver array vacío
    return [];
  };

  const evaluateSmartRules = (movies: any[], rules: SmartRule[]): any[] => {
    return movies.filter(movie => {
      return rules.every(rule => evaluateRule(movie, rule));
    });
  };

  const evaluateRule = (movie: any, rule: SmartRule): boolean => {
    const value = getFieldValue(movie, rule.field);
    
    switch (rule.operator) {
      case 'equals':
        return value === rule.value;
      case 'greaterThan':
        return Number(value) > Number(rule.value);
      case 'lessThan':
        return Number(value) < Number(rule.value);
      default:
        return false;
    }
  };

  const getFieldValue = (movie: any, field: string): any => {
    switch (field) {
      case 'rating':
        return movie.vote_average || 0;
      case 'year':
        return movie.release_date ? parseInt(movie.release_date.split('-')[0]) : 0;
      case 'hasAnalysis':
        // Por ahora simulado, después conectar con el sistema real
        return Math.random() > 0.7;
      case 'watchStatus':
        // Por ahora todas son 'to-watch'
        return 'to-watch';
      default:
        return null;
    }
  };

  const calculateStats = (collectionId: string): CollectionStats => {
    const collection = collections.find(c => c.id === collectionId);
    if (!collection) return {
      totalMovies: 0,
      watchedMovies: 0,
      totalRuntime: 0,
      averageRating: 0,
      topGenres: []
    };

    const collectionMovies = getMoviesInCollection(collection);
    
    const totalRuntime = collectionMovies.reduce((sum, m) => sum + (m.runtime || 0), 0);
    const avgRating = collectionMovies.reduce((sum, m) => sum + (m.vote_average || 0), 0) / collectionMovies.length;
    
    // Calcular géneros top
    const genreCount: Record<string, number> = {};
    collectionMovies.forEach(movie => {
      movie.genres?.forEach((genre: any) => {
        genreCount[genre.name] = (genreCount[genre.name] || 0) + 1;
      });
    });
    
    const topGenres = Object.entries(genreCount)
      .map(([genre, count]) => ({ genre, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    return {
      totalMovies: collectionMovies.length,
      watchedMovies: 0, // Por ahora
      totalRuntime,
      averageRating: avgRating || 0,
      topGenres
    };
  };

  const showStats = (collectionId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const stats = calculateStats(collectionId);
    setCollectionStats(stats);
    setShowStatsModal(true);
  };

  const createCollection = () => {
    if (!newCollectionName.trim()) return;
    
    const newCollection: Collection = {
      id: `col-${Date.now()}`,
      name: newCollectionName,
      description: newCollectionDescription,
      type: createType,
      icon: newCollectionIcon,
      color: generateColor(),
      createdAt: new Date(),
      updatedAt: new Date(),
      movieCount: 0,
      sortOrder: collections.length
    };

    setCollections([...collections, newCollection]);
    setShowCreateModal(false);
    resetCreateForm();
  };

  const resetCreateForm = () => {
    setNewCollectionName('');
    setNewCollectionDescription('');
    setNewCollectionIcon('📁');
    setCreateType('manual');
  };

  const generateColor = (): string => {
    const colors = [
      '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
      '#22c55e', '#10b981', '#14b8a6', '#06b6d4', '#0891b2',
      '#3b82f6', '#6366f1', '#8b5cf6', '#a855f7', '#d946ef',
      '#ec4899', '#f43f5e'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const scrollCollections = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const currentCollection = collections.find(c => c.id === selectedCollection);

  return (
    <div className={styles.collectionsHorizontal}>
      {/* Header de colecciones */}
      <div className={styles.collectionsHeader}>
        <h2 className={styles.collectionsTitle}>
          <span>📚</span>
          Mis Colecciones
        </h2>
        <div className={styles.collectionsActions}>
          <button 
            className={styles.btnStats}
            onClick={(e) => currentCollection && showStats(currentCollection.id, e)}
            title="Estadísticas globales"
          >
            <BarChart3 size={18} />
            <span>Estadísticas</span>
          </button>
          <button 
            className={styles.btnNewCollection}
            onClick={() => setShowCreateModal(true)}
            title="Crear nueva colección"
          >
            <Plus size={18} />
            <span>Nueva Colección</span>
          </button>
        </div>
      </div>

      {/* Contenedor de colecciones con scroll */}
      <div className={styles.collectionsWrapper}>
        {showScrollButtons && (
          <button 
            className={`${styles.scrollButton} ${styles.scrollLeft}`}
            onClick={() => scrollCollections('left')}
          >
            <ChevronLeft size={20} />
          </button>
        )}
        
        <div className={styles.collectionsContainer} ref={scrollContainerRef}>
          {collections.map(collection => (
            <div 
              key={collection.id}
              className={`${styles.collectionCard} ${selectedCollection === collection.id ? styles.active : ''}`}
              onClick={() => handleSelectCollection(collection.id)}
              style={{
                '--collection-color': collection.color
              } as React.CSSProperties}
            >
              <span className={styles.collectionIcon}>{collection.icon}</span>
              <div className={styles.collectionName}>{collection.name}</div>
              <div className={styles.collectionCount}>{collection.movieCount} películas</div>
              
              {collection.type === 'smart' && (
                <span className={styles.collectionBadge} title="Colección inteligente">
                  <Zap size={14} />
                </span>
              )}
              
              {/* Tooltip de estadísticas */}
              <div className={styles.statsTooltip}>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Duración total:</span>
                  <span className={styles.statValue}>
                    {Math.floor(calculateStats(collection.id).totalRuntime / 60)}h
                  </span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Rating promedio:</span>
                  <span className={styles.statValue}>
                    ⭐ {calculateStats(collection.id).averageRating.toFixed(1)}
                  </span>
                </div>
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>Vistas:</span>
                  <span className={styles.statValue}>
                    {calculateStats(collection.id).watchedMovies}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showScrollButtons && (
          <button 
            className={`${styles.scrollButton} ${styles.scrollRight}`}
            onClick={() => scrollCollections('right')}
          >
            <ChevronRight size={20} />
          </button>
        )}
      </div>

      {/* Filtros rápidos */}
      <div className={styles.quickFilters}>
        <div 
          className={`${styles.filterChip} ${activeFilters.includes('all') ? styles.active : ''}`}
          onClick={() => toggleFilter('all')}
        >
          <span>🎬</span>
          <span>Todas</span>
        </div>
        <div 
          className={`${styles.filterChip} ${activeFilters.includes('analysis') ? styles.active : ''}`}
          onClick={() => toggleFilter('analysis')}
        >
          <span>📝</span>
          <span>Con análisis</span>
        </div>
        <div 
          className={`${styles.filterChip} ${activeFilters.includes('shared') ? styles.active : ''}`}
          onClick={() => toggleFilter('shared')}
        >
          <span>🌍</span>
          <span>Compartidos</span>
        </div>
        <div 
          className={`${styles.filterChip} ${activeFilters.includes('5stars') ? styles.active : ''}`}
          onClick={() => toggleFilter('5stars')}
        >
          <span>⭐</span>
          <span>5 estrellas</span>
        </div>
        <div 
          className={`${styles.filterChip} ${activeFilters.includes('recent') ? styles.active : ''}`}
          onClick={() => toggleFilter('recent')}
        >
          <span>📅</span>
          <span>Este mes</span>
        </div>
      </div>

      {/* Modal de creación */}
      {showCreateModal && (
        <div className={styles.modal}>
          <div className={styles.modalBackdrop} onClick={() => setShowCreateModal(false)} />
          <div className={styles.modalContent}>
            <h3>Crear Nueva Colección</h3>
            
            <div className={styles.createForm}>
              <div className={styles.typeSelector}>
                <button
                  className={`${styles.typeBtn} ${createType === 'manual' ? styles.active : ''}`}
                  onClick={() => setCreateType('manual')}
                >
                  <FolderPlus size={20} />
                  Manual
                </button>
                <button
                  className={`${styles.typeBtn} ${createType === 'smart' ? styles.active : ''}`}
                  onClick={() => setCreateType('smart')}
                >
                  <Zap size={20} />
                  Inteligente
                </button>
              </div>

              <input
                type="text"
                placeholder="Nombre de la colección"
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
                className={styles.input}
              />

              <textarea
                placeholder="Descripción (opcional)"
                value={newCollectionDescription}
                onChange={(e) => setNewCollectionDescription(e.target.value)}
                className={styles.textarea}
              />

              <div className={styles.iconSelector}>
                <span>Icono:</span>
                <div className={styles.iconGrid}>
                  {['📁', '🎬', '⭐', '💜', '🚀', '🎨', '🎭', '🌟'].map(icon => (
                    <button
                      key={icon}
                      className={`${styles.iconOption} ${newCollectionIcon === icon ? styles.selected : ''}`}
                      onClick={() => setNewCollectionIcon(icon)}
                    >
                      {icon}
                    </button>
                  ))}
                </div>
              </div>

              {createType === 'smart' && (
                <div className={styles.smartRulesInfo}>
                  <Sparkles size={20} />
                  <p>Las colecciones inteligentes se actualizan automáticamente según las reglas que definas.</p>
                </div>
              )}
            </div>

            <div className={styles.modalActions}>
              <button onClick={() => setShowCreateModal(false)} className={styles.cancelBtn}>
                Cancelar
              </button>
              <button onClick={createCollection} className={styles.createBtn}>
                Crear Colección
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de estadísticas */}
      {showStatsModal && collectionStats && (
        <div className={styles.modal}>
          <div className={styles.modalBackdrop} onClick={() => setShowStatsModal(false)} />
          <div className={styles.modalContent}>
            <h3>📊 Estadísticas de {currentCollection?.name}</h3>
            
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{collectionStats.totalMovies}</span>
                <span className={styles.statLabel}>Total Películas</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{collectionStats.watchedMovies}</span>
                <span className={styles.statLabel}>Vistas</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>
                  {Math.floor(collectionStats.totalRuntime / 60)}h
                </span>
                <span className={styles.statLabel}>Duración Total</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>
                  ⭐ {collectionStats.averageRating.toFixed(1)}
                </span>
                <span className={styles.statLabel}>Rating Promedio</span>
              </div>
            </div>

            <div className={styles.topGenres}>
              <h4>Géneros Principales</h4>
              {collectionStats.topGenres.map(({ genre, count }) => (
                <div key={genre} className={styles.genreStat}>
                  <span>{genre}</span>
                  <div className={styles.genreBar}>
                    <div 
                      className={styles.genreBarFill}
                      style={{ width: `${(count / collectionStats.totalMovies) * 100}%` }}
                    />
                  </div>
                  <span>{count}</span>
                </div>
              ))}
            </div>

            <button onClick={() => setShowStatsModal(false)} className={styles.closeBtn}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};