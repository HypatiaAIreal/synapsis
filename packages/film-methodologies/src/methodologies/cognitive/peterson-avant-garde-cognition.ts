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

export const PETERSON_AVANT_GARDE_COGNITION: Methodology = {
  metadata: {
    id: 'peterson-avant-garde',
    name: 'Cognición y Cine de Vanguardia',
    author: 'James Peterson',
    year: 1994,
    category: 'cognitive',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['avant-garde-history', 'cognitive-theory'],
    culturalContext: 'Teoría cognitiva del cine experimental',
    language: 'es'
  },
  
  description: `James Peterson desarrolló una teoría cognitiva específicamente para el cine experimental y de vanguardia, desafiando la noción de que el cognitivismo solo sirve para cine narrativo clásico. Peterson argumenta que el cine de vanguardia requiere "procedimientos interpretativos" específicos que las audiencias aprenden dentro de comunidades interpretativas particulares. Su concepto de "invitation to interpretation" examina cómo los films experimentales señalan que requieren lectura no-narrativa. Peterson identifica estrategias cognitivas específicas: "pattern detection", "metaphorical mapping", y "categorical thinking". Su análisis de la "poetic logic" muestra cómo el cine experimental crea coherencia mediante asociaciones no-causales.`,
  
  keyConcepts: [
    {
      term: 'Procedimientos Interpretativos',
      definition: 'Estrategias cognitivas específicas para cine no-narrativo',
      importance: 'fundamental',
      relatedTerms: ['estrategias', 'interpretación']
    },
    {
      term: 'Invitation to Interpretation',
      definition: 'Señales de que el film requiere lectura alternativa',
      importance: 'fundamental',
      relatedTerms: ['metacomunicación', 'contrato espectatorial']
    },
    {
      term: 'Pattern Detection',
      definition: 'Búsqueda de estructuras abstractas no-narrativas',
      importance: 'fundamental',
      relatedTerms: ['estructura', 'abstracción']
    },
    {
      term: 'Poetic Logic',
      definition: 'Coherencia mediante asociaciones no-causales',
      importance: 'important',
      relatedTerms: ['asociación', 'lógica alternativa']
    },
    {
      term: 'Interpretive Communities',
      definition: 'Grupos que comparten competencias interpretativas',
      importance: 'important',
      relatedTerms: ['comunidad', 'competencia cultural']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar invitation',
      description: 'Reconocer señales de experimentalidad',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Buscar rupturas con convenciones narrativas',
        'Notar énfasis en cualidades formales',
        'Identificar ausencia de causalidad clara'
      ],
      commonMistakes: [
        'Forzar lectura narrativa en film abstracto',
        'Ignorar invitaciones sutiles'
      ]
    },
    {
      order: 2,
      name: 'Detectar patterns',
      description: 'Buscar estructuras y repeticiones abstractas',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Mapear recurrencias visuales/sonoras',
        'Buscar progresiones no-narrativas',
        'Identificar variaciones sobre temas'
      ]
    },
    {
      order: 3,
      name: 'Mapear metáforas',
      description: 'Identificar interpretaciones simbólicas posibles',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Considerar múltiples niveles metafóricos',
        'No fijar interpretación única',
        'Buscar resonancias culturales'
      ]
    },
    {
      order: 4,
      name: 'Aplicar categorical thinking',
      description: 'Clasificar elementos no-narrativamente',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Buscar poetic logic',
      description: 'Identificar coherencia asociativa',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Considerar community context',
      description: 'Evaluar contexto interpretativo',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Expande cognitivismo más allá del cine narrativo',
    'Reconoce aprendizaje cultural de competencias',
    'Métodos específicos para cine experimental',
    'Incluye dimensión social de interpretación',
    'Desmitifica lo aparentemente "incomprensible"'
  ],
  
  limitations: [
    'Puede intelectualizar experiencia sensorial directa',
    'Dependencia de contextos interpretativos',
    'Comunidades no siempre claramente definidas',
    'Tensión con experiencia inmediata del arte'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['James Peterson'],
      title: 'Dreams of Chaos, Visions of Order: Understanding the American Avant-Garde Cinema',
      year: 1994,
      publisher: 'Wayne State University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['P. Adams Sitney'],
      title: 'Visionary Film: The American Avant-Garde',
      year: 2002,
      publisher: 'Oxford University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['William C. Wees'],
      title: 'Light Moving in Time',
      year: 1992,
      publisher: 'University of California Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Wavelength',
        year: 1967,
        director: 'Michael Snow'
      },
      analysisExcerpt: `Wavelength invita a interpretación estructural desde el inicio: un zoom de 45 minutos niega narrativa convencional. Pattern detection: progresión inexorable del zoom con eventos interrumpiendo. Categorical thinking: espacio, tiempo, percepción como categorías exploradas. Poetic logic: la muerte humana es solo otro evento en el continuum espacial. La interpretive community del cine estructural proporciona contexto. El film enseña su propio procedimiento interpretativo: atención a duración y transformación gradual.`,
      insightsGenerated: [
        'El film educa al espectador en su propia lógica',
        'La estructura ES el contenido',
        'Los procedimientos cognitivos deben adaptarse al film'
      ],
      methodologyApplication: 'Análisis de procedimientos estructurales y duración',
      keyFindings: [
        'Snow redefine qué constituye evento cinematográfico',
        'El pattern formal reemplaza la narrativa',
        'La cognición debe volverse duracional'
      ]
    },
    {
      film: {
        title: 'Decasia',
        year: 2002,
        director: 'Bill Morrison'
      },
      analysisExcerpt: `Decasia encuentra poetic logic en el deterioro del nitrato. Invitation: el film decayente señala lectura no-narrativa. Pattern detection: tipos de deterioro (burbujas, rasgaduras, desvanecimientos) crean ritmo visual. Metaphorical mapping: deterioro como tiempo, memoria, mortalidad. Categorical: archivo, historia, materialidad del cine. La música de Gordon crea coherencia emocional. Interpretive community: conocimiento de found footage y materialidad fílmica enriquece lectura.`,
      insightsGenerated: [
        'El deterioro material puede tener lógica poética',
        'Los patterns accidentales pueden estructurar obras',
        'La metáfora puede emerger de procesos físicos'
      ],
      methodologyApplication: 'Análisis de found footage y poética material',
      keyFindings: [
        'Morrison convierte destrucción en creación',
        'La cognición puede encontrar orden en el caos',
        'El contexto cinéfilo es crucial para apreciación completa'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'sitney-visionary',
      relationshipType: 'parallel',
      synergyDescription: 'Sitney proporciona historia que Peterson teoriza cognitivamente',
      combinedInsightPotential: 8
    },
    {
      id: 'le-grice-materialist',
      relationshipType: 'complementary',
      synergyDescription: 'Le Grice enfoca materialidad que Peterson analiza cognitivamente',
      combinedInsightPotential: 8
    },
    {
      id: 'deren-poetry-film',
      relationshipType: 'complementary',
      synergyDescription: 'Deren anticipa la "poetic logic" que Peterson sistematiza',
      combinedInsightPotential: 9
    }
  ]
};
