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

export const PASOLINI_CINEMA_POETRY: Methodology = {
  metadata: {
    id: 'pasolini-cinema-poetry',
    name: 'Cine de Poesía',
    author: 'Pier Paolo Pasolini',
    year: 1965,
    category: 'semiotic',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['film-aesthetics'],
    culturalContext: 'Semiótica herética italiana',
    language: 'es'
  },
  
  description: `Pier Paolo Pasolini, cineasta y teórico, desarrolló una semiótica herética del cine que desafiaba el estructuralismo dominante. Su concepto de "cinema di poesia" versus "cinema di prosa" distingue entre cine que revela su artificialidad expresiva y uno que la oculta tras convenciones naturalistas. Pasolini teorizó el "discurso indirecto libre" cinematográfico - cuando la cámara adopta la subjetividad de un personaje sin señales explícitas. Su concepto de "im-signo" propone que las imágenes cinematográficas son signos naturales pre-lingüísticos, conectados directamente con la realidad. Argumentó que el cine es el "lenguaje escrito de la realidad", una semiología que presenta directamente antes que traducir. Esta visión mística y materialista influyó profundamente el cine de autor.`,
  
  keyConcepts: [
    {
      term: 'Cinema di Poesia/Prosa',
      definition: 'Cine expresivo que revela su construcción vs. cine narrativo transparente',
      importance: 'fundamental',
      relatedTerms: ['expresividad', 'transparencia', 'estilo']
    },
    {
      term: 'Discurso Indirecto Libre',
      definition: 'Adopción de la subjetividad del personaje sin marcas explícitas de subjetividad',
      importance: 'fundamental',
      relatedTerms: ['subjetividad', 'punto de vista', 'mímesis']
    },
    {
      term: 'Im-signos',
      definition: 'Imágenes como signos naturales pre-lingüísticos, directamente conectados con lo real',
      importance: 'fundamental',
      relatedTerms: ['signo natural', 'realidad', 'pre-lingüístico']
    },
    {
      term: 'Lenguaje de la Realidad',
      definition: 'El cine como escritura directa de lo real, no traducción simbólica',
      importance: 'important',
      relatedTerms: ['realidad', 'escritura', 'directo']
    },
    {
      term: 'Código de Códigos',
      definition: 'El cine como meta-código que puede revelar estructuras profundas de lo real',
      importance: 'important',
      relatedTerms: ['meta-lenguaje', 'revelación', 'estructura profunda']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Distinción poesía/prosa',
      description: 'Identificar el modo dominante del film',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Buscar momentos donde el estilo se hace visible',
        'Identificar si la forma llama atención sobre sí misma',
        'Evaluar transparencia vs. opacidad estilística'
      ],
      commonMistakes: [
        'Equiparar poesía con belleza visual simplemente',
        'Ignorar que puede haber mezcla de ambos modos'
      ]
    },
    {
      order: 2,
      name: 'Identificación de discurso indirecto libre',
      description: 'Localizar momentos de subjetividad no marcada',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar cuando la cámara "ve" como el personaje sin POV explícito',
        'Identificar contaminación estilística por estado mental',
        'Notar distorsiones visuales/sonoras subjetivas'
      ]
    },
    {
      order: 3,
      name: 'Localización de im-signos',
      description: 'Identificar imágenes que funcionan como signos naturales',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar imágenes "crudas" no codificadas culturalmente',
        'Identificar momentos de revelación directa de lo real'
      ]
    },
    {
      order: 4,
      name: 'Análisis de sacralidad',
      description: 'Examinar momentos donde lo real se revela como sagrado',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de estilemas autorales',
      description: 'Localizar marcas estilísticas recurrentes del autor',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación del código de códigos',
      description: 'Analizar qué estructuras profundas revela el film',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Alternativa radical al estructuralismo dominante',
    'Valora la expresividad autoral y poética',
    'Conecta cine directamente con realidad',
    'Teoría practicada en sus propios films',
    'Influencia profunda en cine de autor',
    'Visión mística-materialista única'
  ],
  
  limitations: [
    'Conceptos a veces místicos o imprecisos',
    'Romanticismo problemático sobre "realidad directa"',
    'Menos sistemático que otras semióticas',
    'Difícil aplicación rigurosa',
    'Puede promover elitismo cinematográfico'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Pier Paolo Pasolini'],
      title: 'Heretical Empiricism',
      year: 1988,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Pier Paolo Pasolini'],
      title: 'Cinema',
      year: 2005,      
      publisher: 'Semiotext(e)',
      essential: true
    },
    {
      type: 'book',
      authors: ['John David Rhodes', 'John Perkins'],
      title: 'Pier Paolo Pasolini, Contemporary Perspectives',
      year: 2012,
      publisher: 'University of Toronto Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Oswald Stack'],
      title: 'Pasolini on Pasolini',
      year: 1969,
      publisher: 'Thames and Hudson',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Gospel According to St. Matthew',
        year: 1964,
        director: 'Pier Paolo Pasolini'
      },
      analysisExcerpt: `El propio film de Pasolini ejemplifica su teoría. Im-signos puros en rostros de no-actores: campesinos que son campesinos, no representación. La cámara adopta frecuentemente discurso indirecto libre, viendo con la mirada mística de Cristo sin subjetivas explícitas. Cine de poesía mediante: uso de Bach anacrónico, encuadres frontales hieráticos, duraciones contemplativas. La realidad del sur de Italia se vuelve directamente Palestina antigua. No traducción sino presentación directa de lo sagrado en lo material.`,
      insightsGenerated: [
        'Los no-actores funcionan como im-signos de autenticidad',
        'La sacralidad emerge de la materialidad directa',
        'El anacronismo revela verdades trans-históricas'
      ],
      methodologyApplication: 'Identificación de im-signos y análisis de sacralidad materialista',
      keyFindings: [
        'El cine puede ser escritura directa de lo real-sagrado',
        'La poesía cinematográfica trasciende códigos culturales',
        'Los rostros humanos son los im-signos fundamentales'
      ]
    },
    {
      film: {
        title: 'Red Desert',
        year: 1964,
        director: 'Michelangelo Antonioni'
      },
      analysisExcerpt: `Antonioni, citado por Pasolini como maestro del discurso indirecto libre. La neurosis de Giuliana contamina toda la imagen: colores industriales se vuelven pesadilla, sonidos de fábricas se distorsionan, espacios se vacían de sentido. No vemos su POV sino el mundo visto a través de su neurosis. Cine de poesía puro: el estilo expresa directamente el estado mental sin mediación narrativa. Los paisajes industriales funcionan como im-signos de alienación moderna, no símbolos sino presencias directas.`,
      insightsGenerated: [
        'El discurso indirecto libre puede contaminar toda la mise-en-scène',
        'La neurosis tiene su propia gramática visual',
        'El color funciona como im-signo directo del estado mental'
      ],
      methodologyApplication: 'Análisis del discurso indirecto libre cinematográfico',
      keyFindings: [
        'Antonioni perfecciona la técnica del discurso indirecto libre visual',
        'El cine de poesía puede expresar estados mentales directamente',
        'La modernidad industrial genera sus propios im-signos'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'deleuze-time-image',
      relationshipType: 'complementary',
      synergyDescription: 'Deleuze desarrolla filosóficamente ideas similares sobre imagen directa y tiempo',
      combinedInsightPotential: 9
    },
    {
      id: 'bazin-realism',
      relationshipType: 'complementary',
      synergyDescription: 'Bazin comparte la creencia en la conexión directa cine-realidad pero difiere en método',
      combinedInsightPotential: 8
    },
    {
      id: 'tarkovsky-sculpting-time',
      relationshipType: 'parallel',
      synergyDescription: 'Tarkovsky desarrolla una poética cinematográfica similar pero más mística',
      combinedInsightPotential: 9
    }
  ]
};
