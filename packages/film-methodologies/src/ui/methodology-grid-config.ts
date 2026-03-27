// 🎬 CONFIGURACIÓN DE CATEGORÍAS PARA SYNAPSIS

import { METHODOLOGY_CATEGORIES } from '@synapsis/film-methodologies';

// Las 11 metodologías clásicas que ya tenemos implementadas
export const HC_CLASSIC_METHODOLOGIES = {
  id: 'hc-selection',
  name: '✨ Selección HC Clásica',
  icon: '💜',
  description: 'Las 11 metodologías fundamentales curadas por Hypatia & Carles',
  methodologies: [
    {
      id: 'campbell-hero-journey',
      name: 'El Viaje del Héroe',
      author: 'Joseph Campbell',
      icon: '🗺️',
      description: 'El monomito - estructura universal del viaje heroico'
    },
    {
      id: 'mckee-story',
      name: 'Story - Paradigma de McKee',
      author: 'Robert McKee',
      icon: '📊',
      description: 'Análisis profundo de estructura, valores en conflicto y diseño narrativo'
    },
    {
      id: 'propp-functions',
      name: 'Las 31 Funciones de Propp',
      author: 'Vladimir Propp',
      icon: '🎭',
      description: 'Análisis morfológico del cuento aplicado al cine'
    },
    {
      id: 'truby-22-steps',
      name: 'Los 22 Pasos de Truby',
      author: 'John Truby',
      icon: '🧬',
      description: 'Construcción narrativa orgánica basada en el crecimiento del personaje'
    },
    {
      id: 'seger-subtext',
      name: 'El Arte del Subtexto',
      author: 'Linda Seger',
      icon: '🎨',
      description: 'Análisis de las capas no verbales de significado'
    },
    {
      id: 'tobias-master-plots',
      name: '20 Tramas Maestras',
      author: 'Ronald Tobias',
      icon: '🎯',
      description: 'Identificación de las tramas arquetípicas universales'
    },
    {
      id: 'greimas-actantial',
      name: 'Modelo Actancial de Greimas',
      author: 'A.J. Greimas',
      icon: '🔗',
      description: 'Análisis de roles narrativos y sus relaciones estructurales'
    },
    {
      id: 'vogler-writer-journey',
      name: 'El Viaje del Escritor',
      author: 'Christopher Vogler',
      icon: '✨',
      description: 'Los 7 arquetipos cinematográficos y su función dramática'
    },
    {
      id: 'field-paradigm',
      name: 'Paradigma de Syd Field',
      author: 'Syd Field',
      icon: '🎬',
      description: 'Estructura clásica en tres actos con puntos de giro precisos'
    },
    {
      id: 'todorov-equilibrium',
      name: 'Equilibrio Narrativo',
      author: 'Tzvetan Todorov',
      icon: '⚖️',
      description: 'Los cinco estadios del equilibrio narrativo'
    },
    {
      id: 'barthes-codes',
      name: 'Códigos Narrativos',
      author: 'Roland Barthes',
      icon: '🔤',
      description: 'Los cinco códigos de significación en el texto cinematográfico'
    }
  ]
};

// Configuración de las 15 categorías en grid 3x5
export const SYNAPSIS_METHODOLOGY_GRID = [
  // FILA 1
  [
    HC_CLASSIC_METHODOLOGIES,
    {
      ...METHODOLOGY_CATEGORIES['structural-narratological'],
      id: 'structural-narratological'
    },
    {
      ...METHODOLOGY_CATEGORIES['screenplay-dramaturgy'],
      id: 'screenplay-dramaturgy'
    }
  ],
  // FILA 2
  [
    {
      ...METHODOLOGY_CATEGORIES['psychoanalytic'],
      id: 'psychoanalytic'
    },
    {
      ...METHODOLOGY_CATEGORIES['feminist-gender'],
      id: 'feminist-gender'
    },
    {
      ...METHODOLOGY_CATEGORIES['semiotic'],
      id: 'semiotic'
    }
  ],
  // FILA 3
  [
    {
      ...METHODOLOGY_CATEGORIES['marxist-sociological'],
      id: 'marxist-sociological'
    },
    {
      ...METHODOLOGY_CATEGORIES['phenomenological-philosophical'],
      id: 'phenomenological-philosophical'
    },
    {
      ...METHODOLOGY_CATEGORIES['postcolonial-decolonial'],
      id: 'postcolonial-decolonial'
    }
  ],
  // FILA 4
  [
    {
      ...METHODOLOGY_CATEGORIES['cognitive'],
      id: 'cognitive'
    },
    {
      ...METHODOLOGY_CATEGORIES['genre-theory'],
      id: 'genre-theory'
    },
    {
      ...METHODOLOGY_CATEGORIES['montage'],
      id: 'montage'
    }
  ],
  // FILA 5
  [
    {
      ...METHODOLOGY_CATEGORIES['documentary'],
      id: 'documentary'
    },
    {
      ...METHODOLOGY_CATEGORIES['contemporary-experimental'],
      id: 'contemporary-experimental'
    },
    {
      ...METHODOLOGY_CATEGORIES['hybrid-interdisciplinary'],
      id: 'hybrid-interdisciplinary'
    }
  ]
];

// Componente React para el nuevo grid
export const MethodologyGridComponent = `
import React, { useState } from 'react';
import { SYNAPSIS_METHODOLOGY_GRID, HC_CLASSIC_METHODOLOGIES } from './methodology-grid-config';
import { FilmMethodologyService } from '@synapsis/film-methodologies';

const MethodologyGrid: React.FC<{ onSelectMethodology: (id: string) => void }> = ({ 
  onSelectMethodology 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showClassicList, setShowClassicList] = useState(false);
  const methodologyService = new FilmMethodologyService();

  const handleCategoryClick = (categoryId: string) => {
    if (categoryId === 'hc-selection') {
      setShowClassicList(!showClassicList);
    } else {
      setSelectedCategory(categoryId);
    }
  };

  return (
    <div className="methodology-selection-container">
      <h2>🎬 Selecciona el Enfoque de Análisis</h2>
      
      {/* Grid Principal 3x5 */}
      <div className="methodology-grid three-columns">
        {SYNAPSIS_METHODOLOGY_GRID.map((row, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {row.map((category) => (
              <div
                key={category.id}
                className={\`category-card \${selectedCategory === category.id ? 'selected' : ''}\`}
                onClick={() => handleCategoryClick(category.id)}
              >
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                {category.id === 'hc-selection' && (
                  <span className="methodology-count">11 metodologías</span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lista de HC Classic */}
      {showClassicList && (
        <div className="classic-methodologies-list">
          <h3>💜 Selección HC Clásica</h3>
          <div className="methodology-cards">
            {HC_CLASSIC_METHODOLOGIES.methodologies.map((method) => (
              <div
                key={method.id}
                className="methodology-card classic"
                onClick={() => onSelectMethodology(method.id)}
              >
                <span className="method-icon">{method.icon}</span>
                <h4>{method.name}</h4>
                <p className="author">por {method.author}</p>
                <p className="description">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Lista de metodologías por categoría */}
      {selectedCategory && selectedCategory !== 'hc-selection' && (
        <div className="category-methodologies-list">
          <h3>{getCategoryInfo(selectedCategory).name}</h3>
          <MethodologyList 
            category={selectedCategory}
            onSelect={onSelectMethodology}
            service={methodologyService}
          />
        </div>
      )}
    </div>
  );
};

// CSS para el grid 3x5
const styles = \`
.methodology-grid.three-columns {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 1.5rem;
  padding: 2rem;
}

.grid-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.category-card {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border: 2px solid transparent;
  border-radius: 12px;
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.category-card:hover {
  border-color: #9333ea;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(147, 51, 234, 0.3);
}

.category-card.selected {
  border-color: #9333ea;
  background: linear-gradient(135deg, #2d1b69 0%, #1f1545 100%);
}

.category-icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 0.5rem;
}

.category-card h3 {
  font-size: 1.1rem;
  color: #fff;
  margin: 0.5rem 0;
}

.category-card p {
  font-size: 0.85rem;
  color: #a0a0a0;
  margin: 0;
  line-height: 1.4;
}

.methodology-count {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #9333ea;
  color: white;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
}

/* Especial para HC Selection */
.category-card:first-child {
  background: linear-gradient(135deg, #6b46c1 0%, #9333ea 100%);
}

.category-card:first-child:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 12px 32px rgba(147, 51, 234, 0.5);
}

/* Lista de metodologías clásicas */
.classic-methodologies-list {
  margin-top: 2rem;
  padding: 2rem;
  background: rgba(26, 26, 46, 0.8);
  border-radius: 12px;
  animation: slideDown 0.3s ease;
}

.methodology-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.methodology-card.classic {
  background: linear-gradient(135deg, #2d1b69 0%, #1f1545 100%);
  border: 1px solid #9333ea40;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.methodology-card.classic:hover {
  border-color: #9333ea;
  transform: translateY(-1px);
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 1200px) {
  .grid-row {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .grid-row {
    grid-template-columns: 1fr;
  }
}
\`;
`;
