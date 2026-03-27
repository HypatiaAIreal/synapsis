import { 
  Methodology,
  KeyConcept,
  ApplicationStep,
  BibliographyEntry,
  FilmExample,
  RelatedMethodology,
  DigitalTool,
  ResearchCenter
} from '../../core/interfaces';

export const SCHATZ_HOLLYWOOD_GENRES: Methodology = {
  metadata: {
    id: 'schatz-hollywood-genres',
    name: 'Hollywood Genres',
    author: 'Thomas Schatz',
    year: 1981,
    category: 'genre-theory',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['hollywood-history'],
    culturalContext: 'Estudios de género Hollywood clásico',
    language: 'es'
  },
  
  description: `Thomas Schatz propuso una teoría evolutiva de los géneros de Hollywood que los ve como sistemas culturales dinámicos que pasan por etapas identificables de desarrollo. Su modelo describe una evolución desde la fase "experimental" (establecimiento de convenciones), pasando por la "clásica" (equilibrio perfecto), hasta la "refinamiento" (autoconciencia creciente) y finalmente "barroca" o "paródica" (exceso autorreflexivo). Schatz distingue entre "géneros de integración" (musicales, comedias, melodramas) que celebran valores comunitarios y resuelven conflictos mediante la incorporación, y "géneros de orden" (westerns, gangster, detectives) que restauran el orden social mediante la eliminación de elementos disruptivos. Su análisis conecta la evolución genérica con cambios sociales más amplios.`,
  
  keyConcepts: [
    {
      term: 'Evolución Genérica',
      definition: 'Proceso de desarrollo: Experimental → Clásica → Refinamiento → Barroca',
      importance: 'fundamental',
      relatedTerms: ['fases', 'desarrollo', 'maduración']
    },
    {
      term: 'Géneros de Integración',
      definition: 'Géneros que resuelven conflictos mediante incorporación y celebración comunitaria',
      importance: 'fundamental',
      relatedTerms: ['comunidad', 'reconciliación', 'musical']
    },
    {
      term: 'Géneros de Orden',
      definition: 'Géneros que restauran orden mediante eliminación de elementos disruptivos',
      importance: 'fundamental',
      relatedTerms: ['violencia', 'exclusión', 'western']
    },
    {
      term: 'Fase Clásica',
      definition: 'Momento de equilibrio perfecto entre convención e innovación',
      importance: 'important',
      relatedTerms: ['equilibrio', 'madurez genérica']
    },
    {
      term: 'Fase Barroca',
      definition: 'Etapa de exceso, autoparodia y agotamiento genérico',
      importance: 'important',
      relatedTerms: ['decadencia', 'auto-reflexividad']
    },
    {
      term: 'Genius of the System',
      definition: 'Cómo el sistema de estudios produjo arte mediante convenciones',
      importance: 'important',
      relatedTerms: ['sistema de estudios', 'producción industrial']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de fase evolutiva',
      description: 'Determinar en qué etapa de desarrollo está el género',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Considerar contexto histórico del film',
        'Comparar con otros films del período',
        'Buscar signos de auto-consciencia o parodia'
      ],
      commonMistakes: [
        'Aplicar modelo muy rígidamente',
        'Ignorar posibles regresiones o saltos'
      ]
    },
    {
      order: 2,
      name: 'Clasificación como integración/orden',
      description: 'Determinar mecanismo de resolución de conflictos',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Examinar cómo termina el conflicto central',
        'Identificar si hay incorporación o eliminación'
      ]
    },
    {
      order: 3,
      name: 'Análisis de función ritual',
      description: 'Examinar qué ansiedades culturales procesa el género',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Conectar conflictos con contexto social',
        'Identificar valores afirmados o cuestionados'
      ]
    },
    {
      order: 4,
      name: 'Examen de iconografía',
      description: 'Analizar evolución de elementos visuales característicos',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Evaluación de convención/invención',
      description: 'Analizar balance entre elementos tradicionales y novedosos',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis del sistema de producción',
      description: 'Examinar cómo el contexto industrial influye en el género',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Modelo evolutivo claro y aplicable',
    'Conecta géneros con funciones sociales',
    'Valora sistema de estudios como productor de arte',
    'Distinción útil entre tipos de géneros',
    'Análisis histórico bien fundamentado',
    'Explica tanto auge como decadencia genérica'
  ],
  
  limitations: [
    'Modelo teleológico puede ser simplista',
    'Privilegia Hollywood clásico sobre otras épocas',
    'Determinismo evolutivo cuestionable',
    'Ignora hibridaciones y complejidades',
    'Menos aplicable a cine contemporáneo',
    'Visión nostálgica del sistema de estudios'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Thomas Schatz'],
      title: 'Hollywood Genres: Formulas, Filmmaking, and the Studio System',
      year: 1981,
      publisher: 'McGraw-Hill',
      essential: true
    },
    {
      type: 'book',
      authors: ['Thomas Schatz'],
      title: 'The Genius of the System: Hollywood Filmmaking in the Studio Era',
      year: 1988,
      publisher: 'Pantheon',
      essential: true
    },
    {
      type: 'book',
      authors: ['Thomas Schatz'],
      title: 'Boom and Bust: American Cinema in the 1940s',
      year: 1997,
      publisher: 'University of California Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'High Noon',
        year: 1952,
        director: 'Fred Zinnemann'
      },
      analysisExcerpt: `High Noon representa el western en fase de refinamiento, cuestionando valores fundamentales del género. Como género de orden, tradicionalmente el western elimina amenazas mediante violencia justificada. Pero aquí la comunidad cobarde abandona al héroe, cuestionando el mito de solidaridad fronteriza. La iconografía clásica permanece (pueblo polvoriento, duelo al mediodía) pero con significados invertidos. El tiempo real aumenta la presión psicológica sobre convenciones de acción. El film refleja ansiedades de la era McCarthy sobre conformismo y coraje cívico.`,
      insightsGenerated: [
        'La fase de refinamiento cuestiona premisas básicas del género',
        'Los géneros de orden pueden volverse críticos del orden mismo',
        'El contexto político influye en la evolución genérica'
      ],
      methodologyApplication: 'Análisis de género en fase de refinamiento crítico',
      keyFindings: [
        'El refinamiento permite crítica social dentro de convenciones',
        'La evolución genérica responde a cambios históricos',
        'Los géneros maduros pueden subvertir sus propias premisas'
      ]
    },
    {
      film: {
        title: 'Singin\' in the Rain',
        year: 1952,
        director: 'Stanley Donen, Gene Kelly'
      },
      analysisExcerpt: `Singin' in the Rain ejemplifica el musical en su fase clásica perfecta. Como género de integración, resuelve todos los conflictos mediante performance y celebración comunitaria. El balance entre convención (números musicales integrados) e innovación (reflexión sobre el propio medio cinematográfico) es ideal. La película celebra simultáneamente el entretenimiento y la autenticidad artística. El sistema de estudios (MGM) en su apogeo proporciona recursos para espectáculo máximo. No hay ironía ni deconstrucción, sino afirmación jubilosa del género.`,
      insightsGenerated: [
        'La fase clásica logra síntesis perfecta de elementos',
        'Los géneros de integración afirman valores comunitarios',
        'El sistema de estudios posibilitó perfección genérica'
      ],
      methodologyApplication: 'Identificación de características de fase clásica',
      keyFindings: [
        'La fase clásica representa apogeo creativo del género',
        'Integración perfecta de elementos narrativos y espectaculares',
        'El "genius of the system" produce obras maestras mediante convención'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'altman-semantic-syntactic',
      relationshipType: 'complementary',
      synergyDescription: 'Altman ofrece modelo sincrónico mientras Schatz propone uno diacrónico',
      combinedInsightPotential: 8
    },
    {
      id: 'wood-ideology-genre',
      relationshipType: 'dialectical',
      synergyDescription: 'Wood critica la nostalgia de Schatz con análisis ideológico',
      combinedInsightPotential: 9
    },
    {
      id: 'neale-genre-hollywood',
      relationshipType: 'complementary',
      synergyDescription: 'Neale problematiza el determinismo evolutivo de Schatz',
      combinedInsightPotential: 8
    }
  ]
};
