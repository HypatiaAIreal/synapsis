// 🎬 SYNAPSIS - Selector de Metodologías de Análisis Cinematográfico
// UI 3x5 para acceder a 141 metodologías organizadas en 14 categorías

import React, { useState, useEffect } from 'react';
import { X, BookOpen, Search, Sparkles, Info, Clock, Users, Globe } from 'lucide-react';
import { methodologyIntegrationService } from '../../data/methodologyIntegration';
// import { NARRATIVE_THEORIES } from '../../data/narrativeTheories';
import styles from './MethodologySelector.module.css';

// Tipos
interface Methodology {
  id: string;
  name: string;
  author: string;
  year?: number;
  description: string;
  complexity?: 'basic' | 'intermediate' | 'advanced' | 'expert';
  timeToLearn?: number;
  culturalContext?: string;
}

interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  methodologyCount: number;
  featured?: boolean;
  completed?: boolean;
}

interface MethodologySelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectMethodology: (methodologyId: string, methodology: Methodology, categoryId: string) => void;
  selectedMethodologyId?: string;
}

// Categorías del sistema - Actualizado para reflejar qué está implementado
const CATEGORIES: Category[] = [
  {
    id: 'curated-selection',
    name: 'Selección Hypatia & Carles',
    icon: '💜',
    color: '#9333ea',
    description: '11 metodologías esenciales curadas especialmente',
    methodologyCount: 11,
    featured: true,
    completed: true
  },
  {
    id: 'structural-narratological',
    name: 'Estructurales y Narratológicas',
    icon: '📚',
    color: '#3b82f6',
    description: 'Análisis de la estructura narrativa y sus funciones',
    methodologyCount: 8,
    completed: true
  },
  {
    id: 'screenplay-dramaturgy',
    name: 'Guion y Dramaturgia',
    icon: '📝',
    color: '#10b981',
    description: 'Técnicas de escritura y construcción dramática',
    methodologyCount: 12,
    completed: true
  },
  {
    id: 'psychoanalytic',
    name: 'Psicoanalíticas',
    icon: '🧠',
    color: '#ef4444',
    description: 'El inconsciente y la psique en el cine',
    methodologyCount: 8,
    completed: true
  },
  {
    id: 'feminist-gender',
    name: 'Feministas y de Género',
    icon: '♀️',
    color: '#ec4899',
    description: 'Perspectivas de género y teoría feminista',
    methodologyCount: 12,
    completed: true
  },
  {
    id: 'semiotic',
    name: 'Semióticas',
    icon: '🔤',
    color: '#8b5cf6',
    description: 'Signos, símbolos y significados cinematográficos',
    methodologyCount: 11,
    completed: false
  },
  {
    id: 'marxist-sociological',
    name: 'Marxistas y Sociológicas',
    icon: '⚒️',
    color: '#dc2626',
    description: 'Análisis social, político e ideológico',
    methodologyCount: 11,
    completed: false
  },
  {
    id: 'phenomenological-philosophical',
    name: 'Fenomenológicas y Filosóficas',
    icon: '💭',
    color: '#0891b2',
    description: 'La experiencia y filosofía del cine',
    methodologyCount: 11,
    completed: false
  },
  {
    id: 'postcolonial-decolonial',
    name: 'Poscoloniales y Decoloniales',
    icon: '🌍',
    color: '#059669',
    description: 'Perspectivas no occidentales y decoloniales',
    methodologyCount: 12,
    completed: false
  },
  {
    id: 'cognitive',
    name: 'Cognitivas',
    icon: '🧩',
    color: '#7c3aed',
    description: 'Percepción, emoción y procesamiento mental',
    methodologyCount: 12,
    completed: false
  },
  {
    id: 'genre-theory',
    name: 'Teoría de Géneros',
    icon: '🎭',
    color: '#ca8a04',
    description: 'Análisis de géneros cinematográficos',
    methodologyCount: 10,
    completed: false
  },
  {
    id: 'montage',
    name: 'Teorías del Montaje',
    icon: '✂️',
    color: '#0284c7',
    description: 'El arte de la edición y el montaje',
    methodologyCount: 13,
    completed: false
  },
  {
    id: 'documentary',
    name: 'Teorías del Documental',
    icon: '📹',
    color: '#65a30d',
    description: 'Análisis del cine documental',
    methodologyCount: 13,
    completed: false
  },
  {
    id: 'contemporary-experimental',
    name: 'Contemporáneas y Experimentales',
    icon: '🔬',
    color: '#e11d48',
    description: 'Vanguardia y nuevas aproximaciones',
    methodologyCount: 9,
    completed: false
  },
  {
    id: 'hybrid-interdisciplinary',
    name: 'Híbridas e Interdisciplinarias',
    icon: '🔀',
    color: '#0e7490',
    description: 'Enfoques múltiples e interdisciplinarios',
    methodologyCount: 7,
    completed: false
  }
];

export const MethodologySelector: React.FC<MethodologySelectorProps> = ({
  isOpen,
  onClose,
  onSelectMethodology,
  selectedMethodologyId
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [methodologies, setMethodologies] = useState<Methodology[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState<'all' | 'basic' | 'intermediate' | 'advanced' | 'expert'>('all');
  const [expandedMethodology, setExpandedMethodology] = useState<string | null>(null);

  // Cargar metodologías cuando se selecciona una categoría
  useEffect(() => {
    if (selectedCategory) {
      loadMethodologies(selectedCategory);
    }
  }, [selectedCategory]);

  const loadMethodologies = (categoryId: string) => {
    setLoading(true);
    try {
      // Ahora es síncrono
      const loadedMethodologies = methodologyIntegrationService.loadMethodologiesForCategory(categoryId);
      setMethodologies(loadedMethodologies);
    } catch (error) {
      console.error('Error cargando metodologías:', error);
      setMethodologies([]);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar metodologías según búsqueda y complejidad
  const filteredMethodologies = methodologies.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         m.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || m.complexity === filter;
    return matchesSearch && matchesFilter;
  });

  // Estadísticas rápidas
  const totalMethodologies = CATEGORIES.reduce((sum, cat) => sum + cat.methodologyCount, 0);

  // Toggle información expandida
  const toggleExpanded = (methodologyId: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setExpandedMethodology(expandedMethodology === methodologyId ? null : methodologyId);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>
              <BookOpen className={styles.titleIcon} />
              Metodologías de Análisis Cinematográfico
            </h2>
            <p className={styles.subtitle}>
              Explora {totalMethodologies} metodologías organizadas en {CATEGORIES.length} categorías
            </p>
          </div>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Vista principal */}
        {!selectedCategory ? (
          // Grid de categorías 3x5
          <div className={styles.categoryGrid}>
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className={`${styles.categoryCard} ${category.featured ? styles.featured : ''}`}
                onClick={() => setSelectedCategory(category.id)}
                style={{
                  borderColor: category.color,
                  '--hover-color': category.color
                } as React.CSSProperties}
              >
                <div className={styles.categoryIcon}>{category.icon}</div>
                <h3 className={styles.categoryName}>{category.name}</h3>
                <p className={styles.categoryDescription}>{category.description}</p>
                <div className={styles.categoryMeta}>
                  <span className={styles.methodologyCount}>
                    {category.methodologyCount} metodologías
                  </span>
                  {category.featured && (
                    <span className={styles.featuredBadge}>
                      <Sparkles size={14} /> Curada
                    </span>
                  )}
                  {category.completed && (
                    <span className={styles.completedBadge} style={{
                      background: 'rgba(34, 197, 94, 0.2)',
                      color: '#22c55e',
                      padding: '2px 8px',
                      borderRadius: '12px',
                      fontSize: '11px',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      ✓ Completo
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Vista de metodologías de la categoría seleccionada
          <div className={styles.methodologiesView}>
            {/* Breadcrumb */}
            <div className={styles.breadcrumb}>
              <button onClick={() => setSelectedCategory(null)}>
                ← Todas las categorías
              </button>
              <span>/</span>
              <span className={styles.currentCategory}>
                {CATEGORIES.find(c => c.id === selectedCategory)?.icon}{' '}
                {CATEGORIES.find(c => c.id === selectedCategory)?.name}
              </span>
            </div>

            {/* Controles de filtrado */}
            <div className={styles.controls}>
              <div className={styles.searchBox}>
                <Search size={20} />
                <input
                  type="text"
                  placeholder="Buscar metodología o autor..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className={styles.filterButtons}>
                <button
                  className={filter === 'all' ? styles.active : ''}
                  onClick={() => setFilter('all')}
                >
                  Todas
                </button>
                <button
                  className={filter === 'basic' ? styles.active : ''}
                  onClick={() => setFilter('basic')}
                >
                  Básico
                </button>
                <button
                  className={filter === 'intermediate' ? styles.active : ''}
                  onClick={() => setFilter('intermediate')}
                >
                  Intermedio
                </button>
                <button
                  className={filter === 'advanced' ? styles.active : ''}
                  onClick={() => setFilter('advanced')}
                >
                  Avanzado
                </button>
                <button
                  className={filter === 'expert' ? styles.active : ''}
                  onClick={() => setFilter('expert')}
                >
                  Experto
                </button>
              </div>
            </div>

            {/* Lista de metodologías */}
            {loading ? (
              <div className={styles.loading}>
                <div className={styles.spinner}></div>
                <p>Cargando metodologías...</p>
              </div>
            ) : methodologies.length === 0 ? (
              <div className={styles.loading}>
                <p style={{ fontSize: '18px', color: 'rgba(255, 255, 255, 0.9)' }}>
                  🚧 Esta categoría está en construcción
                </p>
                <p style={{ marginTop: '10px', fontSize: '14px', color: 'rgba(255, 255, 255, 0.7)' }}>
                  Pronto agregaré las {CATEGORIES.find(c => c.id === selectedCategory)?.methodologyCount || ''} metodologías de esta categoría.
                </p>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    background: 'rgba(147, 51, 234, 0.2)',
                    border: '1px solid rgba(147, 51, 234, 0.4)',
                    borderRadius: '8px',
                    color: '#a855f7',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  ← Volver a las categorías
                </button>
              </div>
            ) : (
              <div className={styles.methodologiesList}>
                {filteredMethodologies.map((methodology) => (
                  <div
                    key={methodology.id}
                    className={`${styles.methodologyCard} ${
                      selectedMethodologyId === methodology.id ? styles.selected : ''
                    }`}
                    onClick={() => onSelectMethodology(methodology.id, methodology, selectedCategory!)}
                  >
                    <div className={styles.methodologyHeader}>
                      <h4>{methodology.name}</h4>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <button
                          className={styles.infoButton}
                          onClick={(e) => toggleExpanded(methodology.id, e)}
                          style={{
                            background: 'rgba(147, 51, 234, 0.2)',
                            border: '1px solid rgba(147, 51, 234, 0.4)',
                            borderRadius: '50%',
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            color: '#a855f7'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(147, 51, 234, 0.4)';
                            e.currentTarget.style.transform = 'scale(1.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(147, 51, 234, 0.2)';
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          <Info size={14} />
                        </button>
                        <span className={`${styles.complexityBadge} ${styles[methodology.complexity]}`}>
                          {methodology.complexity}
                        </span>
                      </div>
                    </div>
                    
                    <div className={styles.methodologyInfo}>
                      <p className={styles.author}>
                        <Users size={14} /> {methodology.author} {methodology.year && methodology.year > 0 ? `(${methodology.year})` : ''}
                      </p>
                      <p className={styles.description} style={{ 
                        marginTop: '8px',
                        fontSize: '14px',
                        color: 'rgba(255, 255, 255, 0.8)',
                        lineHeight: '1.4'
                      }}>
                        {expandedMethodology === methodology.id ? methodology.description : methodology.description.substring(0, 80) + '...'}
                      </p>
                    </div>
                    
                    <div className={styles.methodologyMeta}>
                      <span className={styles.timeToLearn}>
                        <Clock size={14} /> ~{methodology.timeToLearn}h para dominar
                      </span>
                      {methodology.culturalContext && (
                        <span className={styles.culturalContext}>
                          <Globe size={14} /> {methodology.culturalContext}
                        </span>
                      )}
                    </div>
                    
                    {selectedMethodologyId === methodology.id && (
                      <div className={styles.selectedIndicator}>✓ Seleccionada</div>
                    )}
                  </div>
                ))}
                
                {filteredMethodologies.length === 0 && (
                  <div className={styles.noResults}>
                    <p>No se encontraron metodologías con estos criterios</p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Footer con información */}
        <div className={styles.footer}>
          <div className={styles.footerInfo}>
            <Info size={16} />
            <span>
              Las metodologías están organizadas por complejidad y tiempo de aprendizaje. 
              La selección curada incluye las más versátiles para comenzar.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologySelector;