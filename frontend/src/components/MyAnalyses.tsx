import React, { useState, useEffect } from 'react';
import { 
  Eye, Calendar, Clock, Share2, Download, Filter, Search, 
  Grid, List, MessageSquare, Brain, Film, ChevronDown, Star,
  Edit3, Trash2
} from 'lucide-react';
import './MyAnalyses.css';

interface Analysis {
  id: string;
  movieId: string;
  movieTitle: string;
  moviePoster?: string;
  createdAt: Date;
  lastModified: Date;
  methodology?: string;
  aiModel?: string;
  summary: string;
  fullContent: string;
  insights?: string[];
  wordCount: number;
  readingTime: number;
  type: 'reflection' | 'ai-analysis';
  rating?: number;
}

interface MyAnalysesProps {
  userId?: string;
  onViewAnalysis?: (analysisId: string) => void;
}

const MyAnalyses: React.FC<MyAnalysesProps> = ({ userId = 'demo_user', onViewAnalysis }) => {
  const [analyses, setAnalyses] = useState<Analysis[]>([]);
  const [filteredAnalyses, setFilteredAnalyses] = useState<Analysis[]>([]);
  const [selectedAnalysis, setSelectedAnalysis] = useState<Analysis | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState<'all' | 'recent' | 'methodology'>('all');
  const [activeTab, setActiveTab] = useState<'reflections' | 'ai-analysis'>('reflections');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalyses();
  }, [userId]);

  useEffect(() => {
    filterAnalyses();
  }, [analyses, searchTerm, filterBy, activeTab, selectedMovie]);

  const loadAnalyses = async () => {
    try {
      setLoading(true);
      
      // Cargar TODOS los análisis guardados de localStorage
      const allAnalyses: Analysis[] = [];
      
      // Buscar en todas las claves de localStorage que contengan 'analyses_'
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('analyses_')) {
          try {
            const savedData = localStorage.getItem(key);
            if (savedData) {
              const movieAnalyses = JSON.parse(savedData);
              const movieId = key.replace('analyses_', '');
              
              // Convertir al formato Analysis
              movieAnalyses.forEach((analysis: any) => {
                // Para reflexiones personales
                if (analysis.type !== 'narrative') {
                  allAnalyses.push({
                    id: analysis.id || `ref-${Date.now()}-${Math.random()}`,
                    movieId: movieId,
                    movieTitle: analysis.movieTitle || 'Película',
                    moviePoster: analysis.moviePoster,
                    createdAt: new Date(analysis.createdAt || Date.now()),
                    lastModified: new Date(analysis.lastModified || analysis.createdAt || Date.now()),
                    summary: typeof analysis.content === 'string' 
                      ? analysis.content.substring(0, 150) + '...' 
                      : analysis.title || 'Mi reflexión personal',
                    fullContent: analysis.content || '',
                    wordCount: analysis.wordCount || 500,
                    readingTime: analysis.readingTime || Math.ceil((analysis.content?.length || 500) / 250),
                    type: 'reflection',
                    rating: analysis.rating
                  });
                } else {
                  // Para análisis con IA
                  allAnalyses.push({
                    id: analysis.id || `ai-${Date.now()}-${Math.random()}`,
                    movieId: movieId,
                    movieTitle: analysis.movieTitle || 'Película',
                    moviePoster: analysis.moviePoster,
                    createdAt: new Date(analysis.createdAt || Date.now()),
                    lastModified: new Date(analysis.createdAt || Date.now()),
                    methodology: analysis.theoryName || 'Análisis Narrativo',
                    aiModel: analysis.modelUsed || 'Claude-3',
                    summary: typeof analysis.content === 'string'
                      ? analysis.content.substring(0, 150) + '...'
                      : 'Análisis con IA',
                    fullContent: analysis.content || '',
                    insights: analysis.insights || [],
                    wordCount: analysis.wordCount || 2000,
                    readingTime: analysis.readingTime || 8,
                    type: 'ai-analysis'
                  });
                }
              });
            }
          } catch (error) {
            console.error('Error parsing analyses for key:', key, error);
          }
        }
      }
      
      // Si no hay análisis reales, mostrar mensaje apropiado (no mock data)
      setAnalyses(allAnalyses);
      console.log('✅ Análisis reales cargados:', allAnalyses.length);
      
      setLoading(false);
    } catch (error) {
      console.error('Error cargando análisis:', error);
      setLoading(false);
    }
  };

  const filterAnalyses = () => {
    let filtered = [...analyses];

    // Filtrar por tipo (reflexiones o análisis IA)
    filtered = filtered.filter(analysis => 
      activeTab === 'reflections' ? analysis.type === 'reflection' : analysis.type === 'ai-analysis'
    );

    // Filtrar por película seleccionada
    if (selectedMovie && selectedMovie !== 'all') {
      filtered = filtered.filter(analysis => analysis.movieId === selectedMovie);
    }

    // Búsqueda por texto
    if (searchTerm) {
      filtered = filtered.filter(analysis =>
        analysis.movieTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        analysis.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (analysis.methodology && analysis.methodology.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtros adicionales
    if (filterBy === 'recent') {
      filtered = filtered.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime()).slice(0, 5);
    }

    setFilteredAnalyses(filtered);
  };

  const handleViewComplete = (analysis: Analysis) => {
    setSelectedAnalysis(analysis);
    if (onViewAnalysis) {
      onViewAnalysis(analysis.id);
    }
  };

  const handleEdit = (analysis: Analysis) => {
    if (analysis.type === 'reflection') {
      // TODO: Implementar edición de reflexiones
      alert(`Editar reflexión: ${analysis.movieTitle}\n\nFunción en desarrollo`);
    } else {
      alert('Los análisis con IA no se pueden editar. Puedes generar uno nuevo con diferentes parámetros.');
    }
  };

  const handleDelete = (analysisId: string, movieId: string) => {
    const confirmMessage = '¿Estás seguro de que quieres eliminar este análisis?\n\nEsta acción no se puede deshacer.';
    
    if (confirm(confirmMessage)) {
      try {
        // Actualizar localStorage
        const key = `analyses_${movieId}`;
        const savedData = localStorage.getItem(key);
        if (savedData) {
          const movieAnalyses = JSON.parse(savedData);
          const updatedAnalyses = movieAnalyses.filter((a: any) => a.id !== analysisId);
          localStorage.setItem(key, JSON.stringify(updatedAnalyses));
          
          // Actualizar estado local
          setAnalyses(prev => prev.filter(a => a.id !== analysisId));
          
          console.log('✅ Análisis eliminado');
        }
      } catch (error) {
        console.error('Error al eliminar análisis:', error);
        alert('Error al eliminar el análisis. Por favor, intenta de nuevo.');
      }
    }
  };

  const handleShare = (analysis: Analysis) => {
    // Implementar lógica de compartir
    console.log('Compartiendo análisis:', analysis.id);
    // Aquí podrías abrir un modal con opciones de compartir
    // o copiar un link al portapapeles
  };

  const handleDownload = (analysis: Analysis) => {
    const content = `# ${analysis.movieTitle}
## ${analysis.type === 'reflection' ? 'Reflexión Personal' : analysis.methodology}

${analysis.fullContent}

${analysis.insights ? `\n## Insights Clave\n${analysis.insights.map(i => `- ${i}`).join('\n')}` : ''}

---
Generado por SYNAPSIS - ${new Date().toLocaleDateString()}`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${analysis.movieTitle.replace(/\s+/g, '-')}-${analysis.type}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  // Obtener películas únicas para el selector
  const uniqueMovies = Array.from(new Set(analyses.map(a => a.movieId))).map(id => {
    const movie = analyses.find(a => a.movieId === id);
    return { id, title: movie?.movieTitle || '', poster: movie?.moviePoster };
  });

  if (loading) {
    return (
      <div className="my-analyses-container">
        <div className="loading-state">
          <div className="spinner"></div>
          <p>Cargando tus análisis...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-analyses-container">
      {/* Vista completa de un análisis */}
      {selectedAnalysis && (
        <div className="analysis-modal-overlay" onClick={() => setSelectedAnalysis(null)}>
          <div className="analysis-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <h2>{selectedAnalysis.movieTitle}</h2>
                <p className="modal-subtitle">
                  {selectedAnalysis.type === 'reflection' ? 'Reflexión Personal' : selectedAnalysis.methodology}
                </p>
              </div>
              <button className="close-button" onClick={() => setSelectedAnalysis(null)}>
                ×
              </button>
            </div>
            
            <div className="modal-content">
              <div className="analysis-metadata">
                <span className="metadata-item">
                  <Calendar className="icon" />
                  {formatDate(selectedAnalysis.createdAt)}
                </span>
                <span className="metadata-item">
                  <Clock className="icon" />
                  {selectedAnalysis.readingTime} min de lectura
                </span>
                <span className="metadata-item">
                  {selectedAnalysis.wordCount} palabras
                </span>
                {selectedAnalysis.rating && (
                  <span className="metadata-item">
                    <Star className="icon" />
                    {selectedAnalysis.rating}/5
                  </span>
                )}
              </div>

              <div className="analysis-full-content">
                <div dangerouslySetInnerHTML={{ 
                  __html: selectedAnalysis.fullContent
                    .replace(/\n/g, '<br>')
                    .replace(/#{1,6}\s(.+)/g, '<h3>$1</h3>') 
                }} />
              </div>

              {selectedAnalysis.insights && selectedAnalysis.insights.length > 0 && (
                <div className="insights-section">
                  <h3>Insights Clave</h3>
                  <ul>
                    {selectedAnalysis.insights.map((insight, index) => (
                      <li key={index}>{insight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => handleShare(selectedAnalysis)}>
                <Share2 className="icon" />
                Compartir
              </button>
              <button className="btn-primary" onClick={() => handleDownload(selectedAnalysis)}>
                <Download className="icon" />
                Descargar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header con pestañas */}
      <div className="analyses-header">
        <h1>Mis Análisis</h1>
        
        {/* Pestañas principales */}
        <div className="main-tabs">
          <button 
            className={`tab-button ${activeTab === 'reflections' ? 'active' : ''}`}
            onClick={() => setActiveTab('reflections')}
          >
            <MessageSquare className="tab-icon" />
            Mis Reflexiones
          </button>
          <button 
            className={`tab-button ${activeTab === 'ai-analysis' ? 'active' : ''}`}
            onClick={() => setActiveTab('ai-analysis')}
          >
            <Brain className="tab-icon" />
            Análisis con IA
          </button>
        </div>

        <div className="header-controls">
          {/* Selector de película */}
          <div className="movie-selector">
            <Film className="selector-icon" />
            <select 
              value={selectedMovie || 'all'} 
              onChange={(e) => setSelectedMovie(e.target.value === 'all' ? null : e.target.value)}
              className="movie-dropdown"
            >
              <option value="all">Todas las películas</option>
              {uniqueMovies.map(movie => (
                <option key={movie.id} value={movie.id}>
                  {movie.title}
                </option>
              ))}
            </select>
            <ChevronDown className="dropdown-icon" />
          </div>

          {/* Búsqueda */}
          <div className="search-box">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder={`Buscar ${activeTab === 'reflections' ? 'reflexiones' : 'análisis'}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Controles de vista */}
          <div className="view-controls">
            <button
              className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Vista de cuadrícula"
            >
              <Grid className="icon" />
            </button>
            <button
              className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="Vista de lista"
            >
              <List className="icon" />
            </button>
          </div>

          {/* Filtros */}
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filterBy === 'all' ? 'active' : ''}`}
              onClick={() => setFilterBy('all')}
            >
              Todos
            </button>
            <button
              className={`filter-btn ${filterBy === 'recent' ? 'active' : ''}`}
              onClick={() => setFilterBy('recent')}
            >
              Recientes
            </button>
          </div>
        </div>
      </div>

      {/* Contenido */}
      {filteredAnalyses.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">
            {activeTab === 'reflections' ? <MessageSquare /> : <Brain />}
          </div>
          <p>
            {searchTerm 
              ? `No se encontraron ${activeTab === 'reflections' ? 'reflexiones' : 'análisis'}`
              : `Aún no tienes ${activeTab === 'reflections' ? 'reflexiones' : 'análisis con IA'}`
            }
          </p>
          <button 
            className="btn-primary"
            onClick={() => {
              // Para reflexiones, abrir el editor
              if (activeTab === 'reflections') {
                // TODO: Implementar apertura del editor de reflexiones
                alert('Función en desarrollo: Abrir editor de reflexiones');
              } else {
                // Para análisis IA, redirigir a la sección de análisis narrativo
                // TODO: Implementar navegación a análisis narrativo
                alert('Función en desarrollo: Ir a análisis narrativo con IA');
              }
            }}
          >
            {activeTab === 'reflections' ? 'Escribir primera reflexión' : 'Crear primer análisis'}
          </button>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'analyses-grid' : 'analyses-list'}>
          {filteredAnalyses.map((analysis) => (
            viewMode === 'grid' ? (
              // Vista Grid (Cards)
              <div key={analysis.id} className="analysis-card">
                {analysis.moviePoster && (
                  <img
                    src={analysis.moviePoster}
                    alt={analysis.movieTitle}
                    className="movie-poster"
                  />
                )}
                <div className="analysis-content">
                  <h3>{analysis.movieTitle}</h3>
                  <p className="methodology">
                    {analysis.type === 'reflection' 
                      ? 'Reflexión Personal' 
                      : analysis.methodology
                    }
                  </p>
                  <p className="summary">{analysis.summary}</p>
                  <div className="card-metadata">
                    <span>
                      <Calendar className="icon" />
                      {formatDate(analysis.createdAt)}
                    </span>
                    <span>
                      <Clock className="icon" />
                      {analysis.readingTime} min
                    </span>
                    {analysis.rating && (
                      <span>
                        <Star className="icon" />
                        {analysis.rating}/5
                      </span>
                    )}
                  </div>
                  <div className="card-actions">
                    <button
                      className="btn-view-complete"
                      onClick={() => handleViewComplete(analysis)}
                    >
                      <Eye className="icon" />
                      Ver completo
                    </button>
                    {analysis.type === 'reflection' && (
                      <button
                        className="btn-edit"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEdit(analysis);
                        }}
                        title="Editar reflexión"
                      >
                        <Edit3 className="icon" />
                      </button>
                    )}
                    <button
                      className="btn-delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(analysis.id, analysis.movieId);
                      }}
                      title="Eliminar análisis"
                    >
                      <Trash2 className="icon" />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              // Vista Lista
              <div key={analysis.id} className="analysis-list-item">
                <img
                  src={analysis.moviePoster}
                  alt={analysis.movieTitle}
                  className="list-poster"
                />
                <div className="list-content">
                  <div className="list-header">
                    <h3>{analysis.movieTitle}</h3>
                    <span className="list-methodology">
                      {analysis.type === 'reflection' ? 'Reflexión Personal' : analysis.methodology}
                    </span>
                  </div>
                  <p className="list-summary">{analysis.summary}</p>
                  <div className="list-footer">
                    <div className="list-metadata">
                      <span>
                        <Calendar className="icon" />
                        {formatDate(analysis.createdAt)}
                      </span>
                      <span>
                        <Clock className="icon" />
                        {analysis.readingTime} min
                      </span>
                      {analysis.rating && (
                        <span>
                          <Star className="icon" />
                          {analysis.rating}/5
                        </span>
                      )}
                    </div>
                    <div className="list-actions">
                      <button
                        className="btn-view-complete-small"
                        onClick={() => handleViewComplete(analysis)}
                      >
                        <Eye className="icon" />
                        Ver
                      </button>
                      {analysis.type === 'reflection' && (
                        <button
                          className="btn-edit-small"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleEdit(analysis);
                          }}
                          title="Editar reflexión"
                        >
                          <Edit3 className="icon" />
                        </button>
                      )}
                      <button
                        className="btn-delete-small"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(analysis.id, analysis.movieId);
                        }}
                        title="Eliminar análisis"
                      >
                        <Trash2 className="icon" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAnalyses;