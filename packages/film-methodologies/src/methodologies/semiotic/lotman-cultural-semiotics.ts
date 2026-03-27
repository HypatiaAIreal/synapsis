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

export const LOTMAN_CULTURAL_SEMIOTICS: Methodology = {
  metadata: {
    id: 'lotman-cultural-semiotics',
    name: 'Semiótica de la Cultura',
    author: 'Yuri Lotman',
    year: 1973,
    category: 'semiotic',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['cultural-theory', 'semiotics'],
    culturalContext: 'Escuela de Tartu-Moscú',
    language: 'es'
  },
  
  description: `Yuri Lotman, fundador de la Escuela de Tartu, desarrolló una semiótica cultural que entiende el cine como parte de la "semiosfera" - el espacio semiótico total donde ocurre la comunicación cultural. Su teoría examina cómo los films funcionan dentro de sistemas culturales más amplios. Lotman propuso que todo texto artístico tiene doble naturaleza: comunica información y genera nueva información a través de su estructura. Su concepto de "texto artístico" enfatiza la densidad semántica y capacidad de recodificación múltiple del cine. Analizó cómo el cine crea "explosiones" semióticas - momentos de impredecibilidad que generan nuevo sentido. Su teoría del "mecanismo bipolar" examina cómo las culturas oscilan entre homogeneización y heterogeneización, reflejado en estilos cinematográficos.`,
  
  keyConcepts: [
    {
      term: 'Semiosfera',
      definition: 'Espacio semiótico total donde ocurre toda comunicación cultural',
      importance: 'fundamental',
      relatedTerms: ['espacio cultural', 'sistema semiótico', 'contexto']
    },
    {
      term: 'Texto Artístico',
      definition: 'Texto que no solo transmite sino genera nueva información',
      importance: 'fundamental',
      relatedTerms: ['generación de sentido', 'información', 'arte']
    },
    {
      term: 'Explosión Semiótica',
      definition: 'Momentos de impredecibilidad que generan nuevos significados',
      importance: 'fundamental',
      relatedTerms: ['impredecibilidad', 'innovación', 'cambio']
    },
    {
      term: 'Frontera Semiótica',
      definition: 'Límite y mecanismo de traducción entre diferentes sistemas culturales',
      importance: 'important',
      relatedTerms: ['traducción', 'límite', 'intercambio']
    },
    {
      term: 'Memoria Cultural',
      definition: 'Mecanismo de preservación y transformación de códigos culturales',
      importance: 'important',
      relatedTerms: ['tradición', 'transformación', 'continuidad']
    },
    {
      term: 'Autocomunicación',
      definition: 'Proceso donde el texto transforma al receptor al comunicarse consigo mismo',
      importance: 'important',
      relatedTerms: ['auto-reflexión', 'transformación', 'receptor']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Situación en la semiosfera',
      description: 'Ubicar el film en su contexto cultural total',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Considerar contexto histórico-cultural de producción',
        'Identificar sistemas semióticos en diálogo',
        'Mapear influencias culturales múltiples'
      ],
      commonMistakes: [
        'Análisis aislado sin contexto cultural',
        'Ignorar la dinámica temporal de la semiosfera'
      ]
    },
    {
      order: 2,
      name: 'Identificación de fronteras',
      description: 'Localizar qué límites culturales cruza o establece el film',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar elementos de diferentes sistemas culturales',
        'Identificar procesos de traducción cultural',
        'Notar hibridaciones y mestizajes'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de explosiones semióticas',
      description: 'Identificar momentos de impredecibilidad generadora',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Localizar rupturas con expectativas culturales',
        'Buscar momentos de múltiple interpretabilidad'
      ]
    },
    {
      order: 4,
      name: 'Análisis de memoria cultural',
      description: 'Examinar qué preserva y qué transforma de la tradición',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Estudio del poliglotismo',
      description: 'Analizar la multiplicidad de lenguajes culturales',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de la generación informativa',
      description: 'Determinar qué nueva información cultural genera el texto',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Marco comprehensivo para análisis cultural del cine',
    'Considera dinamismo histórico y cambio cultural',
    'Valora la complejidad y densidad artística',
    'Aplicable cross-culturalmente',
    'Integra múltiples niveles de análisis',
    'Teoría de la creatividad y la innovación'
  ],
  
  limitations: [
    'Alta abstracción conceptual',
    'Requiere amplio conocimiento cultural',
    'Menos específico al medio cinematográfico',
    'Complejidad metodológica intimidante',
    'Conceptos a veces metafóricos',
    'Dificultades de traducción del ruso'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Yuri Lotman'],
      title: 'Universe of the Mind: A Semiotic Theory of Culture',
      year: 1990,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Yuri Lotman'],
      title: 'Culture and Explosion',
      year: 2009,
      publisher: 'De Gruyter Mouton',
      essential: true
    },
    {
      type: 'book',
      authors: ['Yuri Lotman'],
      title: 'The Structure of the Artistic Text',
      year: 1977,
      publisher: 'University of Michigan Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Yuri Lotman'],
      title: 'Semiotics of Cinema',
      year: 1976,
      publisher: 'University of Michigan Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Russian Ark',
        year: 2002,
        director: 'Alexander Sokurov'
      },
      analysisExcerpt: `Russian Ark es exploración literal de la semiosfera rusa. El Hermitage como espacio semiótico condensado: cada sala es época y código cultural diferente. La cámara fluye atravesando fronteras temporales/culturales sin cortes (plano secuencia de 96 minutos). Explosiones semióticas en encuentros anacrónicos: europeo del XIX dialoga con sovieticos, zaristas bailan con contemporáneos. El film es memoria cultural materializada, mostrando la semiosfera rusa como palimpsesto. La técnica digital permite lo imposible: habitar simultáneamente múltiples tiempos culturales.`,
      insightsGenerated: [
        'El museo funciona como metáfora perfecta de la semiosfera',
        'El plano secuencia elimina fronteras temporales manteniendo las culturales',
        'La memoria cultural puede materializarse cinematográficamente'
      ],
      methodologyApplication: 'Análisis de la semiosfera como espacio físico y temporal simultáneo',
      keyFindings: [
        'El cine puede visualizar literalmente conceptos de Lotman',
        'Las fronteras culturales son porosas y productivas',
        'La explosión semiótica ocurre en la coexistencia anacrónica'
      ]
    },
    {
      film: {
        title: 'Cloud Atlas',
        year: 2012,
        director: 'The Wachowskis & Tom Tykwer'
      },
      analysisExcerpt: `Cloud Atlas presenta seis semioferas distintas interconectadas: Pacífico 1849, Cambridge 1936, San Francisco 1973, Londres 2012, Neo Seoul 2144, post-apocalipsis 2321. Cada segmento tiene sus códigos culturales específicos pero elementos cruzan fronteras: música, diario, novela, film, transmisión. Explosiones semióticas cuando información de una época impacta otra. El film modela la memoria cultural como transmisión y transformación. Los mismos actores en diferentes roles sugieren continuidades trans-históricas en la semiosfera humana total.`,
      insightsGenerated: [
        'Las semioferas pueden comunicarse a través del tiempo mediante textos',
        'La reencarnación funciona como metáfora de memoria cultural',
        'Cada época recodifica los textos de las anteriores'
      ],
      methodologyApplication: 'Análisis de múltiples semioferas y sus mecanismos de comunicación',
      keyFindings: [
        'El cine puede presentar la semiosfera como multidimensional',
        'Los textos artísticos son vehículos de memoria cultural',
        'La traducción entre semioferas genera nueva información'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'bakhtin-dialogism',
      relationshipType: 'complementary',
      synergyDescription: 'Bakhtin influyó en Lotman; ambos enfatizan polifonía y diálogo cultural',
      combinedInsightPotential: 9
    },
    {
      id: 'even-zohar-polysystem',
      relationshipType: 'parallel',
      synergyDescription: 'Even-Zohar desarrolla ideas similares sobre sistemas culturales dinámicos',
      combinedInsightPotential: 8
    },
    {
      id: 'cultural-studies',
      relationshipType: 'complementary',
      synergyDescription: 'Los estudios culturales politizan lo que Lotman analiza semióticamente',
      combinedInsightPotential: 8
    }
  ]
};
