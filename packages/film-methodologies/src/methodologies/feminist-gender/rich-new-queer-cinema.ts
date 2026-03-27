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

export const RICH_NEW_QUEER_CINEMA: Methodology = {
  metadata: {
    id: 'rich-new-queer-cinema',
    name: 'New Queer Cinema',
    author: 'B. Ruby Rich',
    year: 1992,
    category: 'feminist-gender',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['queer-theory', 'independent-cinema'],
    culturalContext: 'Movimiento cinematográfico queer años 90',
    language: 'es'
  },
  
  description: `B. Ruby Rich acuñó el término "New Queer Cinema" para describir un movimiento cinematográfico emergente a principios de los 1990s que rechazaba tanto la asimilación gay mainstream como las representaciones positivas didácticas. Este cine se caracterizaba por su irreverencia, experimentación formal, y rechazo de categorías identitarias fijas. Rich identificó características clave: protagonistas anti-sociales, estéticas punk/guerrilla, narrativas no lineales, y una política de la negatividad que rechazaba la respetabilidad. El NQC emergió en la intersección del activismo AIDS, teoría queer académica, y culturas subculturales urbanas. Rich también ha seguido la evolución y comercialización del NQC, analizando qué se pierde y gana cuando lo queer entra al mainstream.`,
  
  keyConcepts: [
    {
      term: 'New Queer Cinema',
      definition: 'Movimiento cinematográfico radical de los 90 que rechaza asimilación',
      importance: 'fundamental',
      relatedTerms: ['cine queer', 'anti-asimilación']
    },
    {
      term: 'Anti-assimilation',
      definition: 'Rechazo de normalización y respetabilidad gay mainstream',
      importance: 'fundamental',
      relatedTerms: ['política radical', 'negatividad queer']
    },
    {
      term: 'Queer Negativity',
      definition: 'Abrazo de lo antisocial, criminal, no reproductivo',
      importance: 'important',
      relatedTerms: ['antisocial', 'rechazo']
    },
    {
      term: 'Formal Experimentation',
      definition: 'Estéticas radicales que rechazan narrativas convencionales',
      importance: 'important',
      relatedTerms: ['experimentación', 'vanguardia']
    },
    {
      term: 'AIDS Activism',
      definition: 'Contexto político de urgencia y rabia que informó el movimiento',
      importance: 'important',
      relatedTerms: ['ACT UP', 'crisis del SIDA']
    },
    {
      term: 'Identity Trouble',
      definition: 'Cuestionamiento de categorías identitarias fijas',
      importance: 'important',
      relatedTerms: ['fluidez', 'anti-identidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de elementos NQC',
      description: 'Buscar características estéticas y políticas del movimiento',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar estéticas DIY, punk o guerrilla',
        'Identificar rechazo de narrativas convencionales',
        'Notar protagonistas criminales o antisociales'
      ],
      commonMistakes: [
        'Confundir cualquier film LGBT con NQC',
        'Ignorar la política radical específica'
      ]
    },
    {
      order: 2,
      name: 'Análisis de anti-asimilación',
      description: 'Examinar cómo el film rechaza normalización',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar críticas a homonormatividad',
        'Identificar rechazo de familia, matrimonio, respetabilidad'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de experimentación formal',
      description: 'Analizar innovaciones estéticas y narrativas',
      timeEstimate: 60,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Examen de identity trouble',
      description: 'Identificar cómo se cuestionan categorías fijas',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis del contexto AIDS',
      description: 'Buscar referencias directas o indirectas a la crisis',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación de evolución',
      description: 'Si es film posterior, analizar relación con NQC original',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Capturó momento histórico crucial del cine queer',
    'Valoriza experimentación radical sobre representación positiva',
    'Conecta estética con política de forma integral',
    'Influencia duradera en cine queer global',
    'Abrió espacios para representaciones no normativas'
  ],
  
  limitations: [
    'Término puede homogeneizar diversidad del movimiento',
    'Inicialmente dominado por hombres blancos',
    'Tensión con necesidades de activismo identitario',
    'Nostalgia por momento que quizás no puede repetirse',
    'Dificultad para mantener radicalidad con comercialización'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['B. Ruby Rich'],
      title: 'New Queer Cinema: The Director\'s Cut',
      year: 2013,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['B. Ruby Rich'],
      title: 'New Queer Cinema',
      year: 1992,
      journal: 'Sight & Sound',      
      pages: '30-34',
      essential: true
    },
    {
      type: 'book',
      authors: ['Michele Aaron'],
      title: 'New Queer Cinema: A Critical Reader',
      year: 2004,
      publisher: 'Edinburgh University Press',
      essential: false
    },
    {
      type: 'article',
      authors: ['B. Ruby Rich'],
      title: 'The New Homosexual Film Festivals',
      year: 2004,
      journal: 'GLQ',      
      pages: '75-80',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Poison',
        year: 1991,
        director: 'Todd Haynes'
      },
      analysisExcerpt: `Poison epitomiza el New Queer Cinema con su estructura de tres historias entrelazadas que rechazan narrativa convencional. "Hero" parodia documental sensacionalista, "Horror" homenajea B-movies de los 50s con metáfora del SIDA, "Homo" adapta a Genet con erotismo carcelario. La estética guerrilla (filmado en 16mm con presupuesto mínimo) es política. No hay imágenes positivas ni personajes gay respetables. El criminal, el monstruo y el perverso son los héroes. La controversia con la NEA confirmó su política anti-asimilacionista. Haynes rechaza tanto Hollywood como cine gay convencional.`,
      insightsGenerated: [
        'La forma fragmentada refleja identidades fracturadas',
        'La criminalidad y abyección son abrazadas, no superadas',
        'El SIDA aparece como ausencia presente, nunca nombrado'
      ],
      methodologyApplication: 'Análisis de estética y política radical del NQC',
      keyFindings: [
        'NQC rechaza representación positiva por política negativa',
        'La experimentación formal es inseparable del contenido queer',
        'La controversia validó la potencia política del movimiento'
      ]
    },
    {
      film: {
        title: 'Tangerine',
        year: 2015,
        director: 'Sean Baker'
      },
      analysisExcerpt: `Tangerine representa una evolución del NQC para la era digital. Filmado completamente en iPhone, mantiene la estética guerrilla pero con tecnología contemporánea. Las protagonistas trans racializadas trabajadoras sexuales encarnan la marginalidad queer, pero con humor y humanidad más que abyección. La narrativa es frenética pero no experimental. El film negocia entre política radical (centrar sujetos más marginalizados) y accesibilidad mainstream (estructura narrativa clásica). Representa tanto continuidad como transformación del espíritu NQC: mantiene el foco en marginales pero busca audiencias más amplias.`,
      insightsGenerated: [
        'NQC contemporáneo debe negociar con nuevas tecnologías y audiencias',
        'La marginalidad puede representarse con dignidad sin perder radicalidad',
        'La evolución del movimiento incluye mayor diversidad racial y trans'
      ],
      methodologyApplication: 'Análisis de legado y transformación del NQC',
      keyFindings: [
        'El espíritu NQC persiste pero transformado',
        'La tecnología digital democratiza la estética guerrilla',
        'La interseccionalidad es central al NQC contemporáneo'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'edelman-no-future',
      relationshipType: 'complementary',
      synergyDescription: 'Edelman teoriza la negatividad queer que NQC practica',
      combinedInsightPotential: 9
    },
    {
      id: 'halberstam-queer-failure',
      relationshipType: 'complementary',
      synergyDescription: 'Halberstam analiza el fracaso queer que NQC celebra',
      combinedInsightPotential: 8
    },
    {
      id: 'munoz-queer-utopia',
      relationshipType: 'dialectical',
      synergyDescription: 'Muñoz propone futuridad queer contra la negatividad del NQC',
      combinedInsightPotential: 8
    }
  ]
};
