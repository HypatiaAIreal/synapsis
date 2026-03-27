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

export const WORTH_VISUAL_ANTHROPOLOGY: Methodology = {
  metadata: {
    id: 'worth-visual-anthropology',
    name: 'Antropología Visual',
    author: 'Sol Worth',
    year: 1972,
    category: 'semiotic',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['anthropology', 'ethnography'],
    culturalContext: 'Antropología visual americana',
    language: 'es'
  },
  
  description: `Sol Worth pionero en antropología visual, desarrolló una semiótica del film etnográfico que examina cómo diferentes culturas crean e interpretan imágenes en movimiento. Su proyecto revolucionario con los Navajo, enseñándoles a filmar sin imponer convenciones occidentales, reveló modos culturalmente específicos de organizar la realidad visual. Worth distinguió entre "cadenas atributivas" (lo que el espectador añade) y "cadenas inferibles" (lo que la imagen permite inferir), crucial para entender interpretación cross-cultural. Su concepto de "bio-documentary" propone que toda filmación revela tanto sobre quien filma como sobre lo filmado. Desarrolló la noción de "competencia visual" - habilidades culturalmente aprendidas para crear e interpretar imágenes.`,
  
  keyConcepts: [
    {
      term: 'Competencia Visual',
      definition: 'Habilidades culturalmente específicas para crear e interpretar imágenes',
      importance: 'fundamental',
      relatedTerms: ['cultura visual', 'habilidad', 'aprendizaje']
    },
    {
      term: 'Cadenas Atributivas/Inferibles',
      definition: 'Lo que el espectador proyecta vs. lo que la imagen permite deducir',
      importance: 'fundamental',
      relatedTerms: ['interpretación', 'proyección', 'inferencia']
    },
    {
      term: 'Bio-documentary',
      definition: 'Todo film revela información sobre quien lo realiza',
      importance: 'fundamental',
      relatedTerms: ['autorevelación', 'subjetividad', 'cultura']
    },
    {
      term: 'Eventos Fílmicos',
      definition: 'Unidades culturalmente significativas de acción',
      importance: 'important',
      relatedTerms: ['unidad cultural', 'acción', 'significado']
    },
    {
      term: 'Feeling-Concern',
      definition: 'Motivación emocional/cultural para filmar algo',
      importance: 'important',
      relatedTerms: ['motivación', 'emoción', 'interés']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de competencia visual',
      description: 'Determinar qué habilidades visuales muestra el film',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar patrones de filmación no occidentales',
        'Identificar qué se considera digno de filmar',
        'Notar duraciones y ritmos culturalmente específicos'
      ],
      commonMistakes: [
        'Asumir universalidad de convenciones occidentales',
        'Juzgar como "errores" diferencias culturales'
      ]
    },
    {
      order: 2,
      name: 'Análisis de cadenas interpretativas',
      description: 'Distinguir entre atribuciones e inferencias',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar qué añade el espectador culturalmente',
        'Separar lo que realmente muestra la imagen'
      ]
    },
    {
      order: 3,
      name: 'Examen bio-documental',
      description: 'Analizar qué revela el film sobre el realizador',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar valores culturales implícitos',
        'Identificar prioridades visuales'
      ]
    },
    {
      order: 4,
      name: 'Identificación de eventos fílmicos',
      description: 'Localizar unidades culturales de significado',
      timeEstimate: 60,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis de feeling-concern',
      description: 'Examinar motivaciones para filmar',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación ética',
      description: 'Considerar implicaciones de representación cultural',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Sensibilidad cultural única en análisis fílmico',
    'Cuestiona universalismo de teorías occidentales',
    'Metodología práctica innovadora',
    'Considera ética de representación',
    'Valora diversidad de competencias visuales',
    'Influencia duradera en documental etnográfico'
  ],
  
  limitations: [
    'Corpus teórico limitado por muerte temprana',
    'Puede esencializar diferencias culturales',
    'Menos aplicable a ficción',
    'Requiere conocimiento antropológico',
    'Dificultad de acceso a material original'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Sol Worth', 'John Adair'],
      title: 'Through Navajo Eyes',
      year: 1972,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sol Worth'],
      title: 'Studying Visual Communication',
      year: 1981,
      publisher: 'University of Pennsylvania Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Larry Gross'],
      title: 'Sol Worth and the Study of Visual Communication',
      year: 1981,
      journal: 'Studies in Visual Communication',
      essential: false
    },
    {
      type: 'book',
      authors: ['Jay Ruby'],
      title: 'Picturing Culture: Explorations of Film and Anthropology',
      year: 2000,
      publisher: 'University of Chicago Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Navajo Film Themselves',
        year: 1966,
        director: 'Worth & Adair Project'
      },
      analysisExcerpt: `Los films navajo revelaron competencias visuales radicalmente diferentes. Sin close-ups (invasivos culturalmente), prevalecen planos generales respetando distancia social. Movimiento circular recurrente refleja cosmovisión. Eventos fílmicos completos: acciones mostradas de principio a fin sin cortes. Largas secuencias de caminar (culturalmente significativo). Bio-documentary evidente: los films revelan valores navajo de armonía, respeto, integridad de acciones. Cadenas atributivas occidentales (aburrimiento) chocan con inferencias navajo (respeto, contemplación).`,
      insightsGenerated: [
        'Las convenciones cinematográficas son culturalmente específicas',
        'Lo que parece "error" puede ser elección cultural',
        'Diferentes culturas tienen diferentes eventos fílmicos significativos'
      ],
      methodologyApplication: 'Análisis de competencias visuales culturalmente específicas',
      keyFindings: [
        'No existe un lenguaje cinematográfico universal',
        'Las culturas organizan la realidad visual diferentemente',
        'El cine occidental impone sus convenciones como "naturales"'
      ]
    },
    {
      film: {
        title: 'Forest of Bliss',
        year: 1986,
        director: 'Robert Gardner'
      },
      analysisExcerpt: `Gardner aplica implícitamente principios de Worth en Benares. Sin narración explicativa, el film requiere competencia visual para decodificar rituales hindúes. Cadenas inferibles ricas para conocedores de la cultura, atributivas para externos. Bio-documentary: revela tanto sobre la mirada occidental fascinada por la muerte como sobre Benares. Eventos fílmicos seleccionados por feeling-concern occidental: muerte, cremación, ritual exótico. La ausencia de explicación respeta la diferencia cultural pero también puede exotizar.`,
      insightsGenerated: [
        'La no-explicación puede ser respeto o exotización',
        'El feeling-concern occidental privilegia lo "exótico"',
        'Las cadenas interpretativas varían radicalmente según cultura'
      ],
      methodologyApplication: 'Análisis de mirada cross-cultural y sus límites',
      keyFindings: [
        'Incluso el cine observacional tiene feeling-concern cultural',
        'La competencia visual del espectador determina la interpretación',
        'La ética de representación es compleja en film etnográfico'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'visual-anthropology',
      relationshipType: 'complementary',
      synergyDescription: 'Worth es fundador del campo junto con Mead, Bateson y otros',
      combinedInsightPotential: 9
    },
    {
      id: 'ethnographic-film',
      relationshipType: 'complementary',
      synergyDescription: 'Worth proporciona base teórica para práctica etnográfica',
      combinedInsightPotential: 8
    },
    {
      id: 'cultural-studies',
      relationshipType: 'complementary',
      synergyDescription: 'Estudios culturales desarrollan implicaciones políticas de Worth',
      combinedInsightPotential: 8
    }
  ]
};
