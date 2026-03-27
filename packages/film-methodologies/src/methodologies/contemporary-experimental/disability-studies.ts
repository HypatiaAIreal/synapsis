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

export const DISABILITY_STUDIES: Methodology = {
  metadata: {
    id: 'disability-studies',
    name: 'Estudios de la Discapacidad - Cine y Diversidad Funcional',
    author: 'Robert McRuer, Rosemarie Garland-Thomson',
    year: 2000,
    category: 'contemporary-experimental',
    complexity: 'intermediate',
    timeToLearn: 35,
    prerequisities: ['disability-studies-intro'],
    culturalContext: 'Movimiento por derechos de discapacidad',
    language: 'es'
  },
  
  description: `Los estudios de discapacidad en cine han evolucionado desde críticas de representación estereotípica hacia análisis complejos de cómo el medio cinematográfico construye y potencialmente reconfigura nociones de capacidad, normalidad y embodiment. Este enfoque examina no solo cómo se representan cuerpos y mentes diversas, sino cómo las convenciones cinematográficas mismas asumen y refuerzan capacitismo. Teóricos como Robert McRuer desarrollan "crip theory" que conecta estudios queer y de discapacidad, mientras Rosemarie Garland-Thomson analiza el "staring" como práctica visual que constituye la discapacidad. Esta aproximación explora "crip time" - temporalidades de la discapacidad que resisten productividad neoliberal - y "estéticas del acceso" que reimaginan el cine desde experiencias sordas, ciegas, neurodivergentes.`,
  
  keyConcepts: [
    {
      term: 'Crip Theory',
      definition: 'Teoría que desafía la capacidad corporal obligatoria, paralela a heterosexualidad obligatoria',
      importance: 'fundamental',
      relatedTerms: ['teoría queer', 'capacitismo']
    },
    {
      term: 'Crip Time',
      definition: 'Temporalidades flexibles que acomodan ritmos diversos de cuerpos/mentes',
      importance: 'fundamental',
      relatedTerms: ['temporalidad', 'flexibilidad']
    },
    {
      term: 'Narrative Prosthesis',
      definition: 'Uso de discapacidad como dispositivo narrativo que refuerza normalidad',
      importance: 'fundamental',
      relatedTerms: ['estereotipo', 'dispositivo narrativo']
    },
    {
      term: 'Access Aesthetics',
      definition: 'Estéticas que emergen de y celebran accesibilidad',
      importance: 'important',
      relatedTerms: ['accesibilidad', 'diseño universal']
    },
    {
      term: 'Staring',
      definition: 'Mirada intensa que constituye a algunos cuerpos como extraordinarios',
      importance: 'important',
      relatedTerms: ['mirada', 'constitución visual']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de capacitismo',
      description: 'Localizar asunciones sobre normalidad corporal/mental',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar en estructura narrativa, no solo representación',
        'Analizar qué cuerpos/mentes se asumen como audiencia',
        'Examinar metáforas capacitistas en lenguaje cinematográfico'
      ],
      commonMistakes: [
        'Enfocarse solo en personajes con discapacidad visible',
        'Ignorar capacitismo en forma cinematográfica'
      ]
    },
    {
      order: 2,
      name: 'Análisis de narrative prosthesis',
      description: 'Examinar uso instrumental de discapacidad en narrativa',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Identificar si discapacidad sirve solo para desarrollo de otros',
        'Buscar arcos de "superación" problemáticos',
        'Analizar si discapacidad se usa como metáfora'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de crip time',
      description: 'Identificar temporalidades alternativas a productividad normativa',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Evaluación de access aesthetics',
      description: 'Analizar si y cómo el film incorpora estéticas accesibles',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis de auto-representación',
      description: 'Evaluar participación de personas con discapacidad en producción',
      timeEstimate: 30,
      difficulty: 'basic'
    },
    {
      order: 6,
      name: 'Síntesis política',
      description: 'Evaluar si film desafía o refuerza capacitismo',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Promueve justicia representacional y material',
    'Expande comprensión de diversidad humana',
    'Cuestiona normas cinematográficas capacitistas',
    'Conecta con movimiento activista vibrante',
    'Genera innovaciones estéticas y narrativas'
  ],
  
  limitations: [
    'Resistencia industrial a cambios significativos',
    'Riesgo de tokenismo en respuestas superficiales',
    'Complejidad de balancear crítica con celebración',
    'Recursos limitados para producción verdaderamente accesible',
    'Necesita más desarrollo teórico en contexto cinematográfico'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['David Mitchell', 'Sharon Snyder'],
      title: 'Narrative Prosthesis: Disability and the Dependencies of Discourse',
      year: 2000,
      publisher: 'University of Michigan Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Robert McRuer'],
      title: 'Crip Theory: Cultural Signs of Queerness and Disability',
      year: 2006,
      publisher: 'NYU Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Rosemarie Garland-Thomson'],
      title: 'Staring: How We Look',
      year: 2009,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sally Chivers', 'Nicole Markotić'],
      title: 'The Problem Body: Projecting Disability on Film',
      year: 2010,
      publisher: 'Ohio State University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Sound of Metal',
        year: 2019,
        director: 'Darius Marder'
      },
      analysisExcerpt: `Sound of Metal subvierte narrativas típicas de discapacidad. Ruben inicialmente ve sordera como tragedia a superar, buscando implante coclear como "cura". Pero en comunidad sorda descubre cultura rica y completa. El film pasa de perspectiva audiocéntrica (sordera como pérdida) a reconocimiento de "Deaf gain". Diseño sonoro innovador no simula sordera para oyentes sino crea experiencia estética única. Joe (Paul Raci) como mentor sordo muestra vida plena sin necesidad de "arreglo". Final ambiguo: implante no trae felicidad prometida. Silencio final es aceptación, no derrota.`,
      insightsGenerated: [
        'La "pérdida" auditiva puede ser ganancia cultural',
        'El diseño sonoro puede crear estéticas de acceso innovadoras',
        'Las comunidades de discapacidad ofrecen modelos de vida alternativos'
      ],
      methodologyApplication: 'Análisis de shift desde modelo médico a modelo cultural de sordera',
      keyFindings: [
        'El cine puede educar sobre culturas de discapacidad',
        'La estética accesible puede ser artísticamente innovadora',
        'Subvertir narrative prosthesis requiere complejidad narrativa'
      ]
    },
    {
      film: {
        title: 'Crip Camp',
        year: 2020,
        director: 'James Lebrecht, Nicole Newnham'
      },
      analysisExcerpt: `Crip Camp documenta génesis del movimiento disability rights desde campamento hippie. Jóvenes con discapacidad experimentan libertad y comunidad por primera vez. El film centra voces y experiencias de activistas con discapacidad, no "expertos" sin discapacidad. Temporalidad crip: el film toma tiempo necesario para mostrar procesos lentos de cambio social. Estética DIY del archivo casero afirma valor de documentación comunitaria. Conexión camp → protesta → legislación muestra discapacidad como identidad política. No hay narrativas de superación individual sino transformación colectiva de sociedad capacitista.`,
      insightsGenerated: [
        'La comunidad de discapacidad como fuente de poder político',
        'El archivo activista desafía historias oficiales',
        'El modelo social de discapacidad en acción'
      ],
      methodologyApplication: 'Análisis de auto-representación y construcción de archivo activista',
      keyFindings: [
        'Documentales de discapacidad por personas con discapacidad transforman el género',
        'La historia del movimiento disability rights sigue siendo desconocida',
        'El cine puede ser herramienta de activismo crip'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'queer-trans-theory',
      relationshipType: 'complementary',
      synergyDescription: 'Crip y queer theory comparten crítica a normalidad obligatoria',
      combinedInsightPotential: 9
    },
    {
      id: 'mad-studies',
      relationshipType: 'complementary',
      synergyDescription: 'Mad studies aporta crítica de normatividad psiquiátrica',
      combinedInsightPotential: 8
    },
    {
      id: 'universal-design',
      relationshipType: 'complementary',
      synergyDescription: 'Diseño universal informa práctica de cine accesible',
      combinedInsightPotential: 8
    }
  ]
};
