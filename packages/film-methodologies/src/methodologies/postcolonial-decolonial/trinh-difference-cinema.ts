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

export const TRINH_DIFFERENCE_CINEMA: Methodology = {
  metadata: {
    id: 'trinh-difference-cinema',
    name: 'Cine y Diferencia',
    author: 'Trinh T. Minh-ha',
    year: 1989,
    category: 'postcolonial-decolonial',
    complexity: 'expert',
    timeToLearn: 45,
    prerequisities: ['feminist-theory', 'experimental-cinema', 'postcolonial-theory'],
    culturalContext: 'Feminismo poscolonial vietnamita-americano',
    language: 'es'
  },
  
  description: `Trinh T. Minh-ha, cineasta y teórica vietnamita-americana, desarrolló una crítica fundamental de la representación documental del "Otro" cultural. Su concepto de "hablar cerca" en lugar de "hablar sobre" o "hablar por" revoluciona la ética de la representación. Trinh deconstruye la autoridad antropológica que objetifica a los sujetos filmados, proponiendo un cine que reconozca su propia parcialidad y constructividad. Su trabajo sobre "inappropriate/d others" celebra a quienes no caben en categorías dominantes. Analiza cómo el género documental perpetúa violencias coloniales a través de su reclamo de verdad objetiva. Su práctica del "boundary event" crea films que existen entre categorías, desafiando divisiones entre documental/ficción, teoría/poesía.`,
  
  keyConcepts: [
    {
      term: 'Hablar Cerca',
      definition: 'Modo de representación que evita la autoridad de hablar sobre o por otros',
      importance: 'fundamental',
      relatedTerms: ['speaking nearby', 'proximidad ética']
    },
    {
      term: 'Inappropriate/d Others',
      definition: 'Sujetos que no caben en categorías dominantes y resisten apropiación',
      importance: 'fundamental',
      relatedTerms: ['otredad irreducible', 'inclasificables']
    },
    {
      term: 'Boundary Event',
      definition: 'Obras que existen entre categorías establecidas',
      importance: 'important',
      relatedTerms: ['entre-géneros', 'hibridez formal']
    },
    {
      term: 'Intervalo',
      definition: 'Espacio entre identidades donde emerge la diferencia',
      importance: 'important',
      relatedTerms: ['in-between', 'espacio liminal']
    },
    {
      term: 'Cine-Escritura',
      definition: 'Fusión de teoría y práctica cinematográfica',
      importance: 'important',
      relatedTerms: ['film-writing', 'teoría fílmica']
    },
    {
      term: 'Reflexividad Crítica',
      definition: 'Auto-cuestionamiento constante de la propia posición y autoridad',
      importance: 'important',
      relatedTerms: ['auto-crítica', 'meta-reflexión']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de modos de habla',
      description: 'Analizar si el film habla sobre, por, o cerca de sus sujetos',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Examinar relación entre cineasta y sujetos filmados',
        'Buscar momentos de autoridad cuestionada',
        'Identificar proximidad sin apropiación'
      ],
      commonMistakes: [
        'Confundir cercanía física con hablar cerca',
        'No reconocer formas sutiles de hablar por otros'
      ]
    },
    {
      order: 2,
      name: 'Búsqueda de inappropriate/d others',
      description: 'Identificar sujetos que desbordan categorías',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar personajes inclasificables',
        'Identificar resistencias a la categorización',
        'Notar fluidez identitaria'
      ]
    },
    {
      order: 3,
      name: 'Análisis de boundary events',
      description: 'Examinar cómo el film cruza fronteras genéricas',
      timeEstimate: 60,
      difficulty: 'expert',
      tips: [
        'Identificar mezclas de documental/ficción',
        'Buscar fusiones de teoría/poesía',
        'Examinar hibridaciones formales'
      ]
    },
    {
      order: 4,
      name: 'Examen de intervalos',
      description: 'Localizar espacios entre identidades fijas',
      timeEstimate: 45,
      difficulty: 'expert'
    },
    {
      order: 5,
      name: 'Identificación de reflexividad',
      description: 'Buscar auto-cuestionamiento del proceso representacional',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis de verdades parciales',
      description: 'Examinar cómo se presenta el conocimiento como provisional',
      timeEstimate: 60,
      difficulty: 'expert'
    }
  ],
  
  strengths: [
    'Ética representacional extremadamente rigurosa',
    'Innovación formal unida a crítica política',
    'Deconstruye autoridad documental colonial',
    'Valoriza diferencia irreducible',
    'Une teoría y práctica cinematográfica'
  ],
  
  limitations: [
    'Alta complejidad puede limitar audiencias',
    'Estilo experimental puede parecer hermético',
    'Circulación limitada fuera de circuitos especializados',
    'Traducción de conceptos es compleja',
    'Puede paralizar más que habilitar acción'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Trinh T. Minh-ha'],
      title: 'Woman, Native, Other: Writing Postcoloniality and Feminism',
      year: 1989,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Trinh T. Minh-ha'],
      title: 'When the Moon Waxes Red: Representation, Gender and Cultural Politics',
      year: 1991,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Trinh T. Minh-ha'],
      title: 'Framer Framed',
      year: 1992,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'article',
      authors: ['Nancy N. Chen'],
      title: 'Speaking Nearby: A Conversation with Trinh T. Minh-ha',
      year: 1992,
      journal: 'Visual Anthropology Review',      
      pages: '82-91',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Reassemblage',
        year: 1982,
        director: 'Trinh T. Minh-ha'
      },
      analysisExcerpt: `Reassemblage deconstruye radicalmente el documental etnográfico. Filmado en Senegal, rechaza explicar o interpretar. "No intento hablar sobre, solo hablar cerca". Silencios largos cuestionan la compulsión occidental de narrar. Imágenes fragmentadas resisten totalización. No hay entrevistas - evita hacer hablar al Otro. Reflexividad constante: "Un film sobre qué?" La cámara reconoce su parcialidad. Mujeres senegalesas permanecen inappropriate/d - no reducidas a categorías antropológicas. Boundary event entre documental, ensayo y poema visual.`,
      insightsGenerated: [
        'El silencio puede ser más ético que la explicación',
        'La fragmentación respeta la complejidad irreducible',
        'Hablar cerca requiere abandonar autoridad interpretativa'
      ],
      methodologyApplication: 'Ejemplo paradigmático de todos los principios de Trinh',
      keyFindings: [
        'Es posible hacer etnografía sin violencia representacional',
        'La forma experimental es políticamente necesaria',
        'La diferencia debe permanecer irreducible'
      ]
    },
    {
      film: {
        title: 'Surname Viet Given Name Nam',
        year: 1989,
        director: 'Trinh T. Minh-ha'
      },
      analysisExcerpt: `El film explora identidades vietnamitas femeninas a través de re-actuaciones. Entrevistas "documentales" son actuadas, revelando toda identidad como performance. Mujeres vietnamitas hablan de experiencias pero Trinh revela la mediación. Traducción se tematiza: del vietnamita al inglés, de experiencia a representación. Boundary event absoluto: documental que deconstruye la verdad documental. Las mujeres son inappropriate/d others - ni víctimas ni heroínas, ni tradicionales ni modernas. Intervalos entre Vietnam/América, pasado/presente, real/actuado.`,
      insightsGenerated: [
        'La actuación puede ser más "verdadera" que el documento',
        'La identidad es siempre ya una traducción',
        'Las categorías binarias fallan ante la experiencia vivida'
      ],
      methodologyApplication: 'Exploración compleja de identidad como diferencia',
      keyFindings: [
        'La verdad documental es una construcción ideológica',
        'Las mujeres del Tercer Mundo exceden todas las categorías',
        'El cine puede habitar productivamente las contradicciones'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'spivak-subaltern',
      relationshipType: 'parallel',
      synergyDescription: 'Ambas cuestionan la posibilidad y ética de representar al Otro',
      combinedInsightPotential: 9
    },
    {
      id: 'haraway-situated-knowledge',
      relationshipType: 'complementary',
      synergyDescription: 'Haraway teoriza el conocimiento situado que Trinh practica',
      combinedInsightPotential: 9
    },
    {
      id: 'marks-haptic-visuality',
      relationshipType: 'synthetic',
      synergyDescription: 'Marks desarrolla aspectos sensoriales del cine que Trinh explora',
      combinedInsightPotential: 8
    }
  ]
};
