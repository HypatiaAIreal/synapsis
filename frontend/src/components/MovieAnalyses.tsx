import React, { useState } from 'react';
import { Eye, Calendar, Clock, Share2, Download, MessageSquare, Brain, List, Grid as GridIcon, Star, Edit3, Trash2 } from 'lucide-react';
import './MovieAnalyses.css';

interface Analysis {
  id: string;
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

interface MovieAnalysesProps {
  movieId: string;
  movieTitle: string;
  moviePoster?: string;
  analyses: Analysis[];
  onViewAnalysis?: (analysisId: string) => void;
  onEditAnalysis?: (analysis: Analysis) => void;
  onDeleteAnalysis?: (analysisId: string) => void;
  onCreateNew?: (type: 'reflection' | 'ai-analysis') => void;
}

const MovieAnalyses: React.FC<MovieAnalysesProps> = ({ 
  movieId, 
  movieTitle, 
  moviePoster,
  analyses,
  onViewAnalysis,
  onEditAnalysis,
  onDeleteAnalysis,
  onCreateNew 
}) => {
  const [activeTab, setActiveTab] = useState<'reflections' | 'ai-analysis'>('reflections');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedAnalysis, setSelectedAnalysis] = useState<Analysis | null>(null);

  const filteredAnalyses = analyses.filter(analysis => 
    activeTab === 'reflections' ? analysis.type === 'reflection' : analysis.type === 'ai-analysis'
  );

  const handleViewComplete = (analysis: Analysis) => {
    setSelectedAnalysis(analysis);
    if (onViewAnalysis) {
      onViewAnalysis(analysis.id);
    }
  };

  const handleShare = (analysis: Analysis) => {
    console.log('Compartiendo análisis:', analysis.id);
  };

  const handleEdit = (analysis: Analysis) => {
    if (onEditAnalysis) {
      onEditAnalysis(analysis);
    } else {
      alert('Función de edición en desarrollo');
    }
  };

  const handleDelete = (analysisId: string) => {
    const confirmMessage = '¿Estás seguro de que quieres eliminar este análisis?\n\nEsta acción no se puede deshacer.';
    
    if (confirm(confirmMessage)) {
      if (onDeleteAnalysis) {
        onDeleteAnalysis(analysisId);
      } else {
        // Implementación local por defecto
        const key = `analyses_${movieId}`;
        const savedData = localStorage.getItem(key);
        if (savedData) {
          const analyses = JSON.parse(savedData);
          const updatedAnalyses = analyses.filter((a: any) => a.id !== analysisId);
          localStorage.setItem(key, JSON.stringify(updatedAnalyses));
          // Recargar la página para reflejar cambios
          window.location.reload();
        }
      }
    }
  };

  const handleDownload = (analysis: Analysis) => {
    const content = `# ${movieTitle}
## ${analysis.type === 'reflection' ? 'Reflexión Personal' : analysis.methodology}

${analysis.fullContent}

${analysis.insights ? `\n## Insights Clave\n${analysis.insights.map(i => `- ${i}`).join('\n')}` : ''}

---
Generado por SYNAPSIS - ${new Date().toLocaleDateString()}`;

    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${movieTitle.replace(/\s+/g, '-')}-${analysis.type}.md`;
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

  return (
    <div className="movie-analyses-container">
      {/* Modal de vista completa */}
      {selectedAnalysis && (
        <div className="analysis-modal-overlay" onClick={() => setSelectedAnalysis(null)}>
          <div className="analysis-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">
                <h2>{movieTitle}</h2>
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

      {/* Header con película y pestañas */}
      <div className="movie-analyses-header">
        {moviePoster && (
          <img src={moviePoster} alt={movieTitle} className="header-poster" />
        )}
        <div className="header-content">
          <h2>{movieTitle}</h2>
          <div className="tabs-container">
            <button 
              className={`tab-btn ${activeTab === 'reflections' ? 'active' : ''}`}
              onClick={() => setActiveTab('reflections')}
            >
              <MessageSquare className="tab-icon" />
              Mis Reflexiones ({analyses.filter(a => a.type === 'reflection').length})
            </button>
            <button 
              className={`tab-btn ${activeTab === 'ai-analysis' ? 'active' : ''}`}
              onClick={() => setActiveTab('ai-analysis')}
            >
              <Brain className="tab-icon" />
              Análisis con IA ({analyses.filter(a => a.type === 'ai-analysis').length})
            </button>
          </div>
        </div>
        
        {/* Controles de vista */}
        <div className="view-mode-toggle">
          <button
            className={`view-toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
            onClick={() => setViewMode('grid')}
            title="Vista de cuadrícula"
          >
            <GridIcon className="icon" />
          </button>
          <button
            className={`view-toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
            onClick={() => setViewMode('list')}
            title="Vista de lista"
          >
            <List className="icon" />
          </button>
        </div>
      </div>

      {/* Botón para crear nuevo - SIEMPRE VISIBLE */}
      <div className="create-new-section">
        <button 
          className="btn-create-always"
          onClick={() => {
            if (onCreateNew) {
              onCreateNew(activeTab === 'reflections' ? 'reflection' : 'ai-analysis');
            } else {
              alert(`Crear ${activeTab === 'reflections' ? 'reflexión' : 'análisis'} para: ${movieTitle}`);
            }
          }}
        >
          {activeTab === 'reflections' ? (
            <>
              <Edit3 className="icon" />
              Escribir nueva reflexión
            </>
          ) : (
            <>
              <Brain className="icon" />
              Crear nuevo análisis con IA
            </>
          )}
        </button>
      </div>

      {/* Contenido */}
      {filteredAnalyses.length === 0 ? (
        <div className="empty-analyses">
          <div className="empty-icon">
            {activeTab === 'reflections' ? <MessageSquare /> : <Brain />}
          </div>
          <p>
            Aún no tienes {activeTab === 'reflections' ? 'reflexiones' : 'análisis con IA'} para esta película
          </p>
        </div>
      ) : (
        <div className={viewMode === 'grid' ? 'analyses-grid' : 'analyses-list'}>
          {filteredAnalyses.map((analysis) => (
            viewMode === 'grid' ? (
              // Vista Grid
              <div key={analysis.id} className="analysis-card-compact">
                <div className="card-header">
                  <span className="card-type">
                    {analysis.type === 'reflection' ? 'Reflexión' : analysis.methodology}
                  </span>
                  {analysis.rating && (
                    <span className="card-rating">
                      <Star className="icon" /> {analysis.rating}
                    </span>
                  )}
                </div>
                <p className="card-summary">{analysis.summary}</p>
                <div className="card-meta">
                  <span>
                    <Calendar className="icon" />
                    {formatDate(analysis.createdAt)}
                  </span>
                  <span>
                    <Clock className="icon" />
                    {analysis.readingTime} min
                  </span>
                </div>
                <div className="card-actions">
                  <button
                    className="btn-view"
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
                      handleDelete(analysis.id);
                    }}
                    title="Eliminar análisis"
                  >
                    <Trash2 className="icon" />
                  </button>
                </div>
              </div>
            ) : (
              // Vista Lista
              <div key={analysis.id} className="analysis-list-row">
                <div className="row-content">
                  <div className="row-header">
                    <span className="row-type">
                      {analysis.type === 'reflection' ? 'Reflexión Personal' : analysis.methodology}
                    </span>
                    {analysis.rating && (
                      <span className="row-rating">
                        <Star className="icon" /> {analysis.rating}/5
                      </span>
                    )}
                  </div>
                  <p className="row-summary">{analysis.summary}</p>
                  <div className="row-meta">
                    <span>
                      <Calendar className="icon" />
                      {formatDate(analysis.createdAt)}
                    </span>
                    <span>
                      <Clock className="icon" />
                      {analysis.readingTime} min
                    </span>
                    <span>{analysis.wordCount} palabras</span>
                  </div>
                </div>
                <div className="row-actions">
                  <button
                    className="btn-view-small"
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
                      handleDelete(analysis.id);
                    }}
                    title="Eliminar análisis"
                  >
                    <Trash2 className="icon" />
                  </button>
                </div>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieAnalyses;