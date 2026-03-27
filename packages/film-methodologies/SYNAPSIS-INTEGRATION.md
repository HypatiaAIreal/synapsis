# 🔗 INTEGRACIÓN DE FILM-METHODOLOGIES EN SYNAPSIS

## 1. INSTALACIÓN EN SYNAPSIS

```bash
cd C:\synapsis
npm install ./packages/film-methodologies
```

## 2. INTEGRACIÓN EN EL MÓDULO DE ANÁLISIS NARRATIVO

### Actualizar `NarrativeAnalysisPanel.tsx`:

```typescript
import { 
  FilmMethodologyService,
  Methodology,
  AdaptiveAnalysisConfig 
} from '@synapsis/film-methodologies';

const NarrativeAnalysisPanel: React.FC<Props> = ({ movie }) => {
  const [methodologyService] = useState(() => new FilmMethodologyService());
  const [selectedMethodologies, setSelectedMethodologies] = useState<Methodology[]>([]);
  const [adaptiveRecommendations, setAdaptiveRecommendations] = useState<any>(null);

  // Obtener recomendaciones adaptativas
  useEffect(() => {
    const config: AdaptiveAnalysisConfig = {
      film: {
        title: movie.title,
        year: parseInt(movie.release_date.split('-')[0]),
        director: movie.credits?.crew
          ?.filter(c => c.job === 'Director')
          ?.map(d => d.name) || [],
        genres: movie.genres?.map(g => g.name) || [],
        duration: movie.runtime,
        culturalOrigin: detectCulturalOrigin(movie),
        language: movie.original_language,
        productionCountries: movie.production_countries?.map(c => c.name) || []
      },
      query: {
        questionType: 'thematic',
        depth: 'deep',
        scope: 'macro'
      },
      userProfile: {
        expertiseLevel: 'intermediate',
        familiarMethodologies: [],
        interests: [],
        language: 'es'
      }
    };

    const recommendations = methodologyService.selectAdaptiveMethodologies(config);
    setAdaptiveRecommendations(recommendations);
  }, [movie]);

  // Renderizar metodologías por categoría
  const renderMethodologyCategories = () => {
    const categories = [
      'structural-narratological',
      'screenplay-dramaturgy',
      'psychoanalytic',
      'feminist-gender',
      // ... más categorías
    ];

    return categories.map(category => {
      const methodologies = methodologyService.getMethodologiesByCategory(category);
      
      return (
        <div key={category} className="methodology-category">
          <h3>{getCategoryName(category)}</h3>
          <div className="methodology-grid">
            {methodologies.map(method => (
              <MethodologyCard
                key={method.metadata.id}
                methodology={method}
                isRecommended={isInRecommendations(method.metadata.id)}
                onSelect={() => toggleMethodology(method)}
              />
            ))}
          </div>
        </div>
      );
    });
  };
};
```

## 3. COMPONENTE DE TARJETA DE METODOLOGÍA

```typescript
// components/MethodologyCard.tsx
import { Methodology } from '@synapsis/film-methodologies';

interface MethodologyCardProps {
  methodology: Methodology;
  isRecommended: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const MethodologyCard: React.FC<MethodologyCardProps> = ({
  methodology,
  isRecommended,
  isSelected,
  onSelect
}) => {
  const { metadata, description } = methodology;
  
  return (
    <div 
      className={`methodology-card ${isSelected ? 'selected' : ''} ${isRecommended ? 'recommended' : ''}`}
      onClick={onSelect}
    >
      {isRecommended && <span className="recommendation-badge">⭐ Recomendada</span>}
      
      <h4>{metadata.name}</h4>
      <p className="author">por {Array.isArray(metadata.author) ? metadata.author.join(', ') : metadata.author}</p>
      <p className="year">{metadata.year}</p>
      
      <div className="metadata">
        <span className="complexity">{getComplexityLabel(metadata.complexity)}</span>
        <span className="time">{metadata.timeToLearn}h</span>
      </div>
      
      <p className="description">{description.substring(0, 150)}...</p>
      
      <div className="concepts">
        {methodology.keyConcepts.slice(0, 3).map(concept => (
          <span key={concept.term} className="concept-tag">
            {concept.term}
          </span>
        ))}
      </div>
    </div>
  );
};
```

## 4. INTEGRACIÓN CON LAS 4 IAs

```typescript
// services/AIMethodologyMapper.ts
import { Methodology } from '@synapsis/film-methodologies';

export class AIMethodologyMapper {
  // Mapear IAs a sus metodologías preferidas
  private aiMethodologyMap = {
    'DirectorOscuro': [
      'jung-archetypes',
      'zizek-psychoanalysis', 
      'deleuze-time-image',
      'bazin-realism'
    ],
    'MontajistaPoético': [
      'eisenstein-montage',
      'vertov-kino-eye',
      'deleuze-movement-image',
      'mitry-rhythm'
    ],
    'CríticaFeminista': [
      'mulvey-male-gaze',
      'hooks-oppositional-gaze',
      'butler-performativity',
      'clover-final-girl'
    ],
    'TeóricoMarxista': [
      'jameson-political-unconscious',
      'benjamin-mechanical-reproduction',
      'gramsci-hegemony',
      'williams-structures-feeling'
    ]
  };

  getAIMethodologies(aiId: string): string[] {
    return this.aiMethodologyMap[aiId] || [];
  }

  generateAIPrompt(
    aiId: string, 
    methodology: Methodology, 
    film: any
  ): string {
    const aiPersonality = this.getAIPersonality(aiId);
    
    return `
Como ${aiPersonality.name}, aplicarás la metodología "${methodology.metadata.name}" de ${methodology.metadata.author} para analizar "${film.title}".

CONCEPTOS CLAVE A UTILIZAR:
${methodology.keyConcepts.map(c => `- ${c.term}: ${c.definition}`).join('\n')}

PROCESO DE APLICACIÓN:
${methodology.applicationProcess.map(p => `${p.order}. ${p.name}: ${p.description}`).join('\n')}

Mantén tu perspectiva única como ${aiPersonality.description} mientras aplicas rigurosamente esta metodología.
    `;
  }
}
```

## 5. SISTEMA DE COMBINACIONES PARA DEBATE

```typescript
// services/MethodologyDebateOrchestrator.ts
import { 
  FilmMethodologyService, 
  MethodologyCombination 
} from '@synapsis/film-methodologies';

export class MethodologyDebateOrchestrator {
  constructor(
    private methodologyService: FilmMethodologyService
  ) {}

  orchestrateDebate(
    aiParticipants: AIParticipant[],
    film: Film,
    selectedMethodologies: string[]
  ): DebateStructure {
    // Analizar compatibilidades
    const compatibilityMatrix = this.buildCompatibilityMatrix(selectedMethodologies);
    
    // Identificar tensiones productivas
    const productiveTensions = this.findProductiveTensions(compatibilityMatrix);
    
    // Asignar metodologías a IAs
    const assignments = this.assignMethodologiesToAIs(
      aiParticipants,
      selectedMethodologies,
      compatibilityMatrix
    );
    
    // Generar estructura de debate
    return {
      rounds: [
        {
          type: 'individual-analysis',
          duration: 5,
          instructions: this.generateIndividualInstructions(assignments)
        },
        {
          type: 'dialectical-exchange',
          duration: 10,
          pairings: this.generateDialecticalPairs(productiveTensions)
        },
        {
          type: 'synthetic-convergence',
          duration: 5,
          focus: this.identifyConvergencePoints(assignments)
        }
      ],
      expectedInsights: this.predictInsights(selectedMethodologies, film)
    };
  }

  private buildCompatibilityMatrix(methodologyIds: string[]): CompatibilityMatrix {
    const matrix: CompatibilityMatrix = {};
    
    for (let i = 0; i < methodologyIds.length; i++) {
      for (let j = i + 1; j < methodologyIds.length; j++) {
        const compatibility = this.methodologyService.analyzeCompatibility(
          methodologyIds[i],
          methodologyIds[j]
        );
        matrix[`${methodologyIds[i]}-${methodologyIds[j]}`] = compatibility;
      }
    }
    
    return matrix;
  }
}
```

## 6. VISUALIZACIÓN DE METODOLOGÍAS

```typescript
// components/MethodologyGraph.tsx
import * as d3 from 'd3';
import { Methodology } from '@synapsis/film-methodologies';

const MethodologyGraph: React.FC<{ methodologies: Methodology[] }> = ({ 
  methodologies 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const nodes = methodologies.map(m => ({
      id: m.metadata.id,
      name: m.metadata.name,
      category: m.metadata.category,
      complexity: m.metadata.complexity
    }));
    
    const links = [];
    methodologies.forEach(m => {
      m.relatedMethodologies?.forEach(rel => {
        links.push({
          source: m.metadata.id,
          target: rel.id,
          type: rel.relationshipType,
          strength: rel.combinedInsightPotential
        });
      });
    });
    
    // Crear visualización D3
    const simulation = d3.forceSimulation(nodes)
      .force('link', d3.forceLink(links).id(d => d.id))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(width / 2, height / 2));
      
    // ... resto de la visualización D3
  }, [methodologies]);
  
  return <svg ref={svgRef} width={800} height={600} />;
};
```

## 7. EXPORTACIÓN DE ANÁLISIS

```typescript
// services/AnalysisExporter.ts
import { 
  Methodology, 
  AnalysisResult,
  ExportMetadata 
} from '@synapsis/film-methodologies';

export class AnalysisExporter {
  exportToMarkdown(
    film: Film,
    methodologies: Methodology[],
    analyses: AnalysisResult[]
  ): string {
    let markdown = `# Análisis de ${film.title} (${film.year})\n\n`;
    markdown += `## Metodologías Aplicadas\n\n`;
    
    methodologies.forEach((method, index) => {
      markdown += `### ${index + 1}. ${method.metadata.name}\n`;
      markdown += `**Autor**: ${method.metadata.author}\n`;
      markdown += `**Categoría**: ${method.metadata.category}\n\n`;
      
      const analysis = analyses.find(a => a.methodologyId === method.metadata.id);
      if (analysis) {
        markdown += `#### Análisis\n${analysis.content}\n\n`;
        markdown += `#### Insights Clave\n`;
        analysis.insights.forEach(insight => {
          markdown += `- **${insight.type}**: ${insight.content}\n`;
        });
        markdown += '\n';
      }
    });
    
    return markdown;
  }
  
  exportToPDF(/* ... */) {
    // Implementación de exportación a PDF
  }
  
  exportToInteractive(/* ... */) {
    // Exportación a formato interactivo
  }
}
```

## 8. RUTAS DE APRENDIZAJE EN SYNAPSIS

```typescript
// components/LearningPathway.tsx
import { FilmMethodologyService } from '@synapsis/film-methodologies';

const LearningPathway: React.FC = () => {
  const [learningPath, setLearningPath] = useState(null);
  const methodologyService = new FilmMethodologyService();
  
  const generatePath = () => {
    const targetMethodologies = [
      'propp-functions',
      'mulvey-male-gaze',
      'deleuze-time-image',
      'jameson-political-unconscious'
    ];
    
    const path = methodologyService.generateLearningPath(
      targetMethodologies,
      userProfile.expertiseLevel,
      40 // horas disponibles
    );
    
    setLearningPath(path);
  };
  
  return (
    <div className="learning-pathway">
      <h2>Tu Ruta de Aprendizaje Personalizada</h2>
      
      {learningPath && (
        <>
          <ProgressBar 
            total={learningPath.estimatedTime}
            completed={getUserProgress()}
          />
          
          <div className="learning-steps">
            {learningPath.path.map((step, index) => (
              <LearningStepCard
                key={step.methodologyId}
                step={step}
                number={index + 1}
                isCompleted={isStepCompleted(step.methodologyId)}
                isCurrent={isCurrentStep(step.methodologyId)}
              />
            ))}
          </div>
          
          <div className="milestones">
            {learningPath.milestones.map(milestone => (
              <MilestoneCard
                key={milestone.name}
                milestone={milestone}
                isAchieved={isMilestoneAchieved(milestone)}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
```

## 9. SCRIPTS DE INSTALACIÓN

```bash
# install-methodologies.sh
#!/bin/bash

echo "🎬 Instalando módulo de metodologías cinematográficas..."

# Navegar al directorio del módulo
cd packages/film-methodologies

# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Volver al directorio principal
cd ../..

# Instalar en SYNAPSIS
npm install ./packages/film-methodologies

echo "✅ Módulo instalado correctamente!"
```

## 10. TESTING

```typescript
// __tests__/methodologies.test.ts
import { FilmMethodologyService } from '@synapsis/film-methodologies';

describe('FilmMethodologyService', () => {
  let service: FilmMethodologyService;
  
  beforeEach(() => {
    service = new FilmMethodologyService();
  });
  
  test('debe cargar todas las metodologías', () => {
    const all = service.getAllMethodologies();
    expect(all.length).toBeGreaterThan(100);
  });
  
  test('selección adaptativa funciona correctamente', () => {
    const config = {
      film: {
        title: 'Test Film',
        year: 2020,
        genres: ['horror'],
        culturalOrigin: 'hollywood'
      },
      query: {
        questionType: 'thematic',
        depth: 'deep',
        scope: 'macro'
      }
    };
    
    const selection = service.selectAdaptiveMethodologies(config);
    expect(selection.primary.length).toBeGreaterThan(0);
    expect(selection.reasoning).toBeTruthy();
  });
});
```

---

**¡Con esta integración, SYNAPSIS tendrá el sistema de análisis cinematográfico más completo del mundo!** 🎬✨
