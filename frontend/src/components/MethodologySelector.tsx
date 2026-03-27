// 🎬 COMPONENTE DE SELECCIÓN DE METODOLOGÍAS - NUEVA UI

import React, { useState, useEffect } from 'react';
import { 
  MethodologyIntegrationService, 
  METHODOLOGY_UI_LAYOUT,
  MethodologyCategory 
} from '../data/methodologyIntegration';
import { AIModelSelector } from './AIModelSelector';
import './MethodologySelector.css';

interface MethodologySelectorProps {
  movie: any;
  onSelectMethodology: (methodologyId: string, aiModel?: string) => void;
  onClose: () => void;
}

export const MethodologySelector: React.FC<MethodologySelectorProps> = ({
  movie,
  onSelectMethodology,
  onClose
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('hc-selection');
  const [methodologies, setMethodologies] = useState<any[]>([]);
  const [showAISelector, setShowAISelector] = useState(false);
  const [selectedMethodology, setSelectedMethodology] = useState<string>('');
  const [recommendations, setRecommendations] = useState<any>(null);
  const [integrationService] = useState(() => new MethodologyIntegrationService());

  // Cargar metodologías cuando cambia la categoría
  useEffect(() => {
    const loadMethodologies = async () => {
      const methods = integrationService.getMethodologiesForCategory(selectedCategory);
      setMethodologies(methods);
    };
    
    loadMethodologies();
  }, [selectedCategory, integrationService]);

  // Obtener recomendaciones adaptativas
  useEffect(() => {
    const loadRecommendations = async () => {
      const recs = await integrationService.getAdaptiveRecommendations(movie);
      setRecommendations(recs);
    };
    
    loadRecommendations();
  }, [movie, integrationService]);

  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleMethodologySelect = (methodologyId: string) => {
    setSelectedMethodology(methodologyId);
    setShowAISelector(true);
  };

  const handleAIModelSelect = (aiModel: string) => {
    onSelectMethodology(selectedMethodology, aiModel);
    setShowAISelector(false);
  };

  const isRecommended = (methodologyId: string): boolean => {
    if (!recommendations) return false;
    
    // Verificar en recomendaciones clásicas
    if (recommendations.fromClassic?.includes(methodologyId)) return true;
    
    // Verificar en recomendaciones comprehensivas
    const allRecommended = [
      ...(recommendations.fromComprehensive?.primary || []),
      ...(recommendations.fromComprehensive?.complementary || [])
    ];
    
    return allRecommended.some(m => m.metadata?.id === methodologyId);
  };

  return (
    <>
      <div className="methodology-selector-modal">
        <div className="methodology-selector-container">
          <div className="methodology-selector-header">
            <h2>🎬 Selecciona la Metodología de Análisis</h2>
            <p className="movie-context">
              Para: <strong>{movie.title}</strong> ({movie.release_date?.split('-')[0]})
            </p>
            <button className="close-button" onClick={onClose}>✕</button>
          </div>

          <div className="methodology-grid">
            {/* Grid de 3x5 categorías */}
            {METHODOLOGY_UI_LAYOUT.map((category) => (
              <div
                key={category.id}
                className={`category-card ${selectedCategory === category.id ? 'selected' : ''} ${
                  category.type === 'selection' ? 'special' : ''
                }`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="category-icon">{category.icon}</div>
                <div className="category-name">{category.name}</div>
                <div className="category-description">{category.description}</div>
                {category.type === 'selection' && (
                  <div className="category-badge">Curadas</div>
                )}
              </div>
            ))}
          </div>

          <div className="methodologies-section">
            <h3>
              {METHODOLOGY_UI_LAYOUT.find(c => c.id === selectedCategory)?.name}
              <span className="methodology-count">({methodologies.length} metodologías)</span>
            </h3>
            
            {recommendations?.fromComprehensive?.reasoning && selectedCategory !== 'hc-selection' && (
              <div className="recommendations-reasoning">
                <p>💡 {recommendations.fromComprehensive.reasoning}</p>
              </div>
            )}

            <div className="methodologies-list">
              {methodologies.map((methodology) => (
                <div
                  key={methodology.id}
                  className={`methodology-item ${isRecommended(methodology.id) ? 'recommended' : ''}`}
                  onClick={() => handleMethodologySelect(methodology.id)}
                >
                  <div className="methodology-header">
                    <span className="methodology-icon">{methodology.icon}</span>
                    <div className="methodology-info">
                      <h4>{methodology.name}</h4>
                      <p className="methodology-author">por {methodology.author}</p>
                    </div>
                    {isRecommended(methodology.id) && (
                      <span className="recommendation-star">⭐</span>
                    )}
                  </div>
                  <p className="methodology-description">{methodology.description}</p>
                  {methodology.complexity && (
                    <div className="methodology-metadata">
                      <span className={`complexity-badge ${methodology.complexity}`}>
                        {getComplexityLabel(methodology.complexity)}
                      </span>
                      {methodology.source === 'comprehensive' && (
                        <span className="source-badge">📚 Completa</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showAISelector && (
        <AIModelSelector
          onSelectModel={handleAIModelSelect}
          onClose={() => setShowAISelector(false)}
        />
      )}
    </>
  );
};

function getComplexityLabel(complexity: string): string {
  const labels: Record<string, string> = {
    'basic': 'Básico',
    'intermediate': 'Intermedio',
    'advanced': 'Avanzado',
    'expert': 'Experto'
  };
  return labels[complexity] || complexity;
}
