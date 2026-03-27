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

export const ALTMAN_SEMANTIC_SYNTACTIC: Methodology = {
  metadata: {
    id: 'altman-semantic-syntactic',
    name: 'Aproximación Semántico-Sintáctica',
    author: 'Rick Altman',
    year: 1984,
    category: 'genre-theory',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['film-history'],
    culturalContext: 'Teoría de géneros americana',
    language: 'es'
  },
  
  description: `Rick Altman revolucionó la teoría de géneros cinematográficos con su modelo semántico-sintáctico-pragmático que supera las limitaciones de aproximaciones anteriores. Su distinción entre elementos "semánticos" (componentes superficiales como iconografía, escenarios, personajes tipo) y "sintácticos" (estructuras profundas, relaciones entre elementos, patrones narrativos) permite entender cómo los géneros evolucionan y se hibridan. Altman posteriormente añadió la dimensión "pragmática" - cómo los géneros son usados por industrias, audiencias y críticos en contextos específicos. Su teoría explica por qué algunos films comparten elementos semánticos sin pertenecer al mismo género, mientras otros con elementos diferentes pueden compartir sintaxis genérica. Altman analiza los géneros como construcciones históricas en constante negociación entre productores y consumidores, no como categorías fijas.`,
  
  keyConcepts: [
    {
      term: 'Semántica de Género',
      definition: 'Elementos superficiales reconocibles: iconografía, locaciones, personajes tipo, objetos característicos',
      importance: 'fundamental',
      relatedTerms: ['iconografía', 'elementos visuales']
    },
    {
      term: 'Sintaxis de Género',
      definition: 'Estructuras relacionales profundas, patrones narrativos, relaciones constitutivas entre elementos',
      importance: 'fundamental',
      relatedTerms: ['estructura narrativa', 'relaciones']
    },
    {
      term: 'Pragmática de Género',
      definition: 'Usos contextuales históricos: cómo industrias, audiencias y críticos emplean las categorías genéricas',
      importance: 'fundamental',
      relatedTerms: ['contexto', 'uso cultural']
    },
    {
      term: 'Proceso de Generificación',
      definition: 'Cómo un grupo de films llega a constituir un género reconocido',
      importance: 'important',
      relatedTerms: ['formación genérica', 'cristalización']
    },
    {
      term: 'Contratos Genéricos',
      definition: 'Acuerdos tácitos entre film y audiencia sobre expectativas y placeres',
      importance: 'important',
      relatedTerms: ['expectativas', 'horizonte de expectativas']
    },
    {
      term: 'Hibridación Genérica',
      definition: 'Mezcla productiva de elementos semánticos y/o sintácticos de diferentes géneros',
      importance: 'important',
      relatedTerms: ['mezcla', 'cross-over']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de elementos semánticos',
      description: 'Catalogar iconografía, tipos de personajes, escenarios, objetos recurrentes',
      timeEstimate: 45,
      difficulty: 'basic',
      tips: [
        'Hacer inventario visual detallado',
        'Incluir elementos sonoros característicos',
        'No prejuzgar qué elementos son significativos'
      ],
      commonMistakes: [
        'Confundir elementos semánticos con sintácticos',
        'Ignorar elementos sonoros o verbales'
      ]
    },
    {
      order: 2,
      name: 'Análisis de estructuras sintácticas',
      description: 'Identificar patrones narrativos y relaciones estructurales profundas',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar relaciones recurrentes entre personajes',
        'Identificar conflictos y resoluciones típicas',
        'Examinar estructura temporal característica'
      ]
    },
    {
      order: 3,
      name: 'Examen de dimensión pragmática',
      description: 'Analizar cómo se usa y negocia el género en su contexto',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Revisar materiales promocionales y recepción',
        'Considerar momento histórico de producción',
        'Examinar debates críticos sobre clasificación'
      ]
    },
    {
      order: 4,
      name: 'Rastreo del proceso de generificación',
      description: 'Si es género emergente, analizar cómo se está formando',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de contratos genéricos',
      description: 'Determinar qué expectativas establece y qué placeres promete',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de hibridaciones',
      description: 'Examinar mezclas genéricas y sus efectos',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Modelo flexible que explica evolución y cambio genérico',
    'Integra análisis textual con contexto industrial y cultural',
    'Supera dicotomías simplistas forma/contenido',
    'Explica tanto géneros puros como híbridos',
    'Considera papel activo de audiencias',
    'Metodología clara y replicable'
  ],
  
  limitations: [
    'Complejidad del modelo triple puede ser excesiva',
    'Categorías a veces difíciles de distinguir claramente',
    'Principalmente desarrollado para cine hollywoodense',
    'Requiere considerable conocimiento histórico',
    'Menos útil para cine experimental'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Rick Altman'],
      title: 'Film/Genre',
      year: 1999,
      publisher: 'British Film Institute',
      essential: true
    },
    {
      type: 'article',
      authors: ['Rick Altman'],
      title: 'A Semantic/Syntactic Approach to Film Genre',
      year: 1984,
      journal: 'Cinema Journal',      
      pages: '6-18',
      essential: true
    },
    {
      type: 'book',
      authors: ['Rick Altman'],
      title: 'The American Film Musical',
      year: 1987,
      publisher: 'Indiana University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Blade Runner',
        year: 1982,
        director: 'Ridley Scott'
      },
      analysisExcerpt: `Blade Runner ejemplifica la hibridación genérica productiva. Semánticamente combina elementos de ciencia ficción (androides, ciudad futura, tecnología avanzada) con iconografía del film noir (detective cínico, femme fatale, ciudad nocturna lluviosa, persianas venecianas). Sintácticamente, la estructura de investigación detectivesca del noir organiza la narrativa sci-fi. Pragmáticamente, fue comercializado como sci-fi pero revalorizado como neo-noir por críticos. Esta hibridación creó un nuevo subgénero: el "tech noir" o "future noir".`,
      insightsGenerated: [
        'La sintaxis del noir puede organizar semántica de sci-fi',
        'Las hibridaciones exitosas crean nuevos contratos genéricos',
        'La dimensión pragmática puede cambiar con el tiempo'
      ],
      methodologyApplication: 'Análisis de hibridación semántica y sintáctica entre géneros',
      keyFindings: [
        'Los géneros no son mutuamente excluyentes sino combinables',
        'La hibridación puede crear categorías genéricas nuevas',
        'El contexto de recepción afecta la clasificación genérica'
      ]
    },
    {
      film: {
        title: 'Get Out',
        year: 2017,
        director: 'Jordan Peele'
      },
      analysisExcerpt: `Get Out demuestra un proceso de generificación en tiempo real del "social thriller". Semánticamente: casa suburbana acomodada, familia blanca liberal, protagonista negro. Sintácticamente: estructura de paranoia racial, inversión de dinámicas de poder, revelación de conspiraciones sistémicas. Pragmáticamente: Peele y la crítica lo posicionaron explícitamente como nuevo género que usa el horror para explorar racismo. El film establece nuevos contratos genéricos donde el monstruo es el racismo liberal institucional.`,
      insightsGenerated: [
        'Los nuevos géneros emergen de recombinaciones específicas',
        'El autor puede participar activamente en la generificación',
        'Los géneros pueden tener funciones políticas explícitas'
      ],
      methodologyApplication: 'Análisis del proceso de creación de un nuevo género',
      keyFindings: [
        'La generificación puede ser intencional y estratégica',
        'Los nuevos géneros responden a ansiedades contemporáneas',
        'La pragmática es crucial en géneros emergentes'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'neale-genre-expectations',
      relationshipType: 'complementary',
      synergyDescription: 'Neale profundiza en las expectativas que Altman identifica en contratos genéricos',
      combinedInsightPotential: 9
    },
    {
      id: 'mittell-genre-discourse',
      relationshipType: 'synthetic',
      synergyDescription: 'Mittell expande la dimensión pragmática hacia análisis discursivo completo',
      combinedInsightPotential: 8
    },
    {
      id: 'williams-mode-excess',
      relationshipType: 'complementary',
      synergyDescription: 'Williams propone "modos" como alternativa a géneros discretos de Altman',
      combinedInsightPotential: 8
    }
  ]
};
