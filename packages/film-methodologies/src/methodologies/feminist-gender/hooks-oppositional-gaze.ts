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

export const HOOKS_OPPOSITIONAL_GAZE: Methodology = {
  metadata: {
    id: 'hooks-oppositional-gaze',
    name: 'The Oppositional Gaze',
    author: 'bell hooks',
    year: 1992,
    category: 'feminist-gender',
    complexity: 'intermediate',
    timeToLearn: 20,
    prerequisities: ['mulvey-male-gaze', 'critical-race-theory'],
    culturalContext: 'Feminismo negro interseccional',
    language: 'es'
  },
  
  description: `bell hooks desarrolló el concepto de "mirada oposicional" para teorizar cómo las espectadoras negras han desarrollado formas críticas de ver que resisten las representaciones racistas y sexistas del cine dominante. Su trabajo parte de la historia de la prohibición de mirar para los esclavos negros, transformando este trauma en una práctica de resistencia visual. hooks argumenta que las mujeres negras, excluidas tanto del placer visual teorizado por Mulvey como de las identificaciones disponibles para mujeres blancas, desarrollaron una relación crítica única con las imágenes cinematográficas. Esta mirada oposicional no es simple rechazo sino una práctica compleja de negociación, crítica y reimaginación. Su trabajo conecta íntimamente lo personal con lo político, mostrando cómo las prácticas de espectatorialidad son actos de supervivencia y resistencia.`,
  
  keyConcepts: [
    {
      term: 'Oppositional Gaze',
      definition: 'Mirada crítica y resistente desarrollada por espectadores marginalizados',
      importance: 'fundamental',
      relatedTerms: ['resistencia visual', 'mirada crítica']
    },
    {
      term: 'Critical Spectatorship',
      definition: 'Ver activamente cuestionando y resistiendo representaciones dominantes',
      importance: 'fundamental',
      relatedTerms: ['agencia espectatorial', 'lectura resistente']
    },
    {
      term: 'Black Female Spectators',
      definition: 'Sujetos específicos con experiencias únicas de exclusión y resistencia visual',
      importance: 'fundamental',
      relatedTerms: ['interseccionalidad', 'espectatorialidad negra']
    },
    {
      term: 'Looking Relations',
      definition: 'Políticas raciales y de género del acto de mirar',
      importance: 'important',
      relatedTerms: ['poder visual', 'política de la mirada']
    },
    {
      term: 'Talking Back',
      definition: 'Respuesta verbal y crítica activa a las imágenes',
      importance: 'important',
      relatedTerms: ['voz crítica', 'respuesta activa']
    },
    {
      term: 'Loving Blackness',
      definition: 'Política afirmativa de amor propio y representación positiva',
      importance: 'important',
      relatedTerms: ['afirmación', 'auto-amor político']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de exclusiones',
      description: 'Analizar quién no puede identificarse con las representaciones',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar ausencias de mujeres negras como sujetos',
        'Notar cuando aparecen solo como objetos o estereotipos',
        'Identificar a quién se dirige el film'
      ],
      commonMistakes: [
        'Asumir que toda inclusión es positiva',
        'Ignorar exclusiones sutiles o simbólicas'
      ]
    },
    {
      order: 2,
      name: 'Examen de looking relations',
      description: 'Analizar las políticas raciales del mirar en el film',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Quién tiene derecho a mirar a quién',
        'Cómo se castiga o permite la mirada según raza'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de espacios de resistencia',
      description: 'Identificar dónde y cómo se puede resistir la narrativa dominante',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Análisis de representaciones ausentes',
      description: 'Examinar qué tipos de negritud no se muestran',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de talking back',
      description: 'Localizar momentos de respuesta crítica dentro o fuera del film',
      timeEstimate: 30,
      difficulty: 'basic'
    },
    {
      order: 6,
      name: 'Evaluación de loving blackness',
      description: 'Buscar afirmaciones de belleza y valor negro',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Centra experiencias de mujeres negras ignoradas por feminismo blanco',
    'Conecta raza y género de forma interseccional',
    'Valora la agencia de audiencias marginalizadas',
    'Accesible y aplicable sin jerga excesiva',
    'Políticamente comprometida con cambio social'
  ],
  
  limitations: [
    'Puede parecer esencializar experiencia negra como monolítica',
    'Menos sistemática que otras metodologías teóricas',
    'Enfoque principalmente en contexto estadounidense',
    'Tensión entre crítica y búsqueda de placer visual'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['bell hooks'],
      title: 'The Oppositional Gaze: Black Female Spectators',
      year: 1992,      
      publisher: 'South End Press',
      pages: '115-131',
      essential: true
    },
    {
      type: 'book',
      authors: ['bell hooks'],
      title: 'Reel to Real: Race, Sex, and Class at the Movies',
      year: 1996,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['bell hooks'],
      title: 'Outlaw Culture: Resisting Representations',
      year: 1994,
      publisher: 'Routledge',
      essential: false
    },
    {
      type: 'book',
      authors: ['bell hooks'],
      title: 'Art on My Mind: Visual Politics',
      year: 1995,
      publisher: 'The New Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Color Purple',
        year: 1985,
        director: 'Steven Spielberg'
      },
      analysisExcerpt: `The Color Purple generó respuestas oposicionales complejas de espectadoras negras. Mientras algunas celebraron ver sus historias en pantalla grande, otras criticaron la perpetuación de estereotipos de violencia masculina negra y sufrimiento femenino. hooks analiza cómo las espectadoras negras "hablaron de vuelta" al film, rechazando la victimización unidimensional de Celie y creando lecturas alternativas que enfatizaban su agencia y resistencia. La controversia misma demuestra la mirada oposicional en acción: las audiencias negras no aceptaron pasivamente sino que debatieron activamente las políticas de representación.`,
      insightsGenerated: [
        'Las audiencias negras tienen respuestas diversas, no monolíticas',
        'La representación puede ser simultáneamente progresiva y problemática',
        'El debate público es forma de talking back colectivo'
      ],
      methodologyApplication: 'Análisis de recepción crítica y respuestas oposicionales diversas',
      keyFindings: [
        'La mirada oposicional no es rechazo simple sino negociación compleja',
        'Las espectadoras negras crean significados más allá de las intenciones',
        'La controversia revela la política de las looking relations'
      ]
    },
    {
      film: {
        title: 'Moonlight',
        year: 2016,
        director: 'Barry Jenkins'
      },
      analysisExcerpt: `Moonlight representa un momento de "loving blackness" cinematográfico. El film ofrece una mirada íntima y tierna sobre masculinidad negra queer, rechazando tanto estereotipos como la mirada blanca voyeurista. La cinematografía crea una estética de cuidado visual donde los cuerpos negros son presentados con belleza y dignidad. Las espectadoras negras no necesitan desarrollar una mirada oposicional porque el film ya incorpora esa perspectiva. Jenkins crea un espacio donde la negritud es amada visualmente sin ser fetichizada ni explicada para audiencias blancas.`,
      insightsGenerated: [
        'El cine negro puede crear sus propias estéticas afirmativas',
        'Loving blackness visual trasciende representación positiva superficial',
        'La mirada negra puede ser constitutiva, no solo oposicional'
      ],
      methodologyApplication: 'Análisis de estética afirmativa y loving blackness visual',
      keyFindings: [
        'La dirección negra puede transformar las looking relations',
        'La intimidad visual resiste tanto objetificación como victimización',
        'Loving blackness crea nuevas posibilidades estéticas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'mulvey-male-gaze',
      relationshipType: 'complementary',
      synergyDescription: 'hooks expande y critica a Mulvey incluyendo raza y espectadoras marginalizadas',
      combinedInsightPotential: 9
    },
    {
      id: 'fanon-black-skin',
      relationshipType: 'complementary',
      synergyDescription: 'hooks aplica ideas de Fanon sobre la mirada colonial al cine',
      combinedInsightPotential: 8
    },
    {
      id: 'crenshaw-intersectionality',
      relationshipType: 'complementary',
      synergyDescription: 'hooks practica análisis interseccional avant la lettre',
      combinedInsightPotential: 9
    }
  ]
};
