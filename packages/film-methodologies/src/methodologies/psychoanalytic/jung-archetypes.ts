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

export const JUNG_ARCHETYPES: Methodology = {
  metadata: {
    id: 'jung-archetypes',
    name: 'Arquetipos en el Cine',
    author: 'Carl Jung',
    year: 1913,
    category: 'psychoanalytic',
    complexity: 'intermediate',
    timeToLearn: 35,
    prerequisities: ['basic-psychology'],
    culturalContext: 'Psicología analítica suiza',
    language: 'es'
  },
  
  description: `Carl Jung desarrolló una teoría del inconsciente colectivo poblado por arquetipos - patrones psíquicos universales que se manifiestan en mitos, sueños y arte a través de todas las culturas. Para el cine, los arquetipos junguianos proporcionan un marco para entender por qué ciertos personajes, situaciones y símbolos resuenan universalmente. Los arquetipos principales incluyen el Héroe, la Sombra, el Anima/Animus, el Mentor (Viejo Sabio), la Madre, el Trickster, y el Self. Jung también desarrolló el concepto de individuación - el proceso de integrar aspectos conscientes e inconscientes de la psique - que muchas narrativas cinematográficas dramatizan. Su teoría explica la resonancia profunda del cine como espacio moderno para el encuentro con lo numinoso.`,
  
  keyConcepts: [
    {
      term: 'Inconsciente Colectivo',
      definition: 'Patrimonio psíquico compartido por toda la humanidad',
      importance: 'fundamental',
      relatedTerms: ['psique colectiva', 'herencia psíquica']
    },
    {
      term: 'Arquetipos Principales',
      definition: 'Héroe, Sombra, Anima/Animus, Self, Mentor, Madre, Trickster',
      importance: 'fundamental',
      relatedTerms: ['imágenes primordiales', 'patrones universales']
    },
    {
      term: 'Individuación',
      definition: 'Proceso de integración psíquica hacia la totalidad del Self',
      importance: 'fundamental',
      relatedTerms: ['autorrealización', 'totalidad psíquica']
    },
    {
      term: 'Sombra',
      definition: 'Aspectos rechazados y reprimidos de la personalidad',
      importance: 'important',
      relatedTerms: ['lado oscuro', 'yo rechazado']
    },
    {
      term: 'Anima/Animus',
      definition: 'Contraparte sexual interna: femenino en hombre, masculino en mujer',
      importance: 'important',
      relatedTerms: ['contrasexualidad', 'opuesto interno']
    },
    {
      term: 'Símbolos Universales',
      definition: 'Mandala, cruz, círculo, cuaternidad como expresiones del Self',
      importance: 'important',
      relatedTerms: ['simbolismo', 'imágenes numinosas']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de arquetipos presentes',
      description: 'Mapear qué arquetipos encarnan los personajes principales',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Un personaje puede encarnar múltiples arquetipos',
        'Los arquetipos pueden cambiar durante la historia',
        'Buscar funciones psicológicas, no solo apariencias'
      ],
      commonMistakes: [
        'Reducir personajes complejos a un solo arquetipo',
        'Ignorar manifestaciones culturalmente específicas'
      ]
    },
    {
      order: 2,
      name: 'Mapeo del viaje de individuación',
      description: 'Trazar el proceso de integración psíquica del héroe',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'La individuación implica enfrentar la Sombra',
        'Integración del Anima/Animus es crucial',
        'El final debe mostrar mayor totalidad psíquica'
      ]
    },
    {
      order: 3,
      name: 'Análisis de encuentros con la Sombra',
      description: 'Examinar confrontaciones con aspectos rechazados',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'El villano a menudo representa la Sombra del héroe',
        'La Sombra puede ser individual o colectiva',
        'La integración, no destrucción, es la meta'
      ]
    },
    {
      order: 4,
      name: 'Exploración de Anima/Animus',
      description: 'Identificar proyecciones y integraciones de lo contrasexual',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'El amor romántico a menudo implica proyección de Anima/Animus',
        'La maduración requiere retirar proyecciones',
        'Buscar figuras que guían hacia lo inconsciente'
      ]
    },
    {
      order: 5,
      name: 'Búsqueda de símbolos del Self',
      description: 'Identificar imágenes de totalidad y trascendencia',
      timeEstimate: 30,
      difficulty: 'advanced',
      tips: [
        'Mandalas, círculos, cuaternidades',
        'Momentos de unión de opuestos',
        'Imágenes de totalidad cósmica'
      ]
    },
    {
      order: 6,
      name: 'Evaluación del logro de individuación',
      description: 'Determinar si el héroe alcanza mayor integración',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Explica resonancia universal de ciertas historias',
    'Profundidad simbólica y espiritual',
    'Aplicable cross-culturalmente',
    'Útil para fantasía, ciencia ficción y mitos modernos',
    'Valora dimensión espiritual y trascendente',
    'Base sólida para desarrollo de personajes profundos'
  ],
  
  limitations: [
    'Puede tender al universalismo excesivo',
    'Ignora especificidades culturales e históricas',
    'Elementos místicos pueden parecer acientíficos',
    'Simplifica complejidad individual',
    'Conceptos difíciles de definir precisamente',
    'Riesgo de crear estereotipos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Carl G. Jung'],
      title: 'The Archetypes and the Collective Unconscious',
      year: 1969,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Carl G. Jung'],
      title: 'Man and His Symbols',
      year: 1964,
      publisher: 'Dell Publishing',
      essential: true
    },
    {
      type: 'book',
      authors: ['Christopher Vogler'],
      title: 'The Writer\'s Journey: Mythic Structure for Writers',
      year: 2007,
      publisher: 'Michael Wiese Productions',
      essential: true
    },
    {
      type: 'book',
      authors: ['Christopher Hauke', 'Ian Alister'],
      title: 'Jung and Film: Post-Jungian Takes on the Moving Image',
      year: 2001,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Star Wars Saga',
        year: 1977,
        director: 'George Lucas'
      },
      analysisExcerpt: `Star Wars es una dramatización consciente del proceso de individuación junguiano. Luke Skywalker encarna el arquetipo del Héroe en su viaje desde la inconsciencia (granja) hacia la realización del Self (Jedi). Darth Vader representa literalmente la Sombra - el padre oscuro que Luke debe enfrentar e integrar, no destruir. Leia funciona inicialmente como Anima (antes de revelarse como hermana). Yoda encarna el Viejo Sabio/Mentor. La Fuerza misma representa el Self transpersonal. El viaje de Luke es explícitamente de individuación: debe integrar su herencia oscura (Vader) sin ser consumido por ella.`,
      insightsGenerated: [
        'La space opera puede ser vehículo para procesos psíquicos profundos',
        'La Sombra familiar (padre) es especialmente poderosa',
        'La individuación requiere enfrentar el linaje psíquico'
      ],
      methodologyApplication: 'Mapeo completo del viaje de individuación en contexto mítico-futurista',
      keyFindings: [
        'Lucas conscientemente empleó arquetipos junguianos',
        'Los arquetipos funcionan efectivamente en cualquier setting',
        'La redención del padre es integración de la Sombra colectiva'
      ]
    },
    {
      film: {
        title: 'Pan\'s Labyrinth',
        year: 2006,
        director: 'Guillermo del Toro'
      },
      analysisExcerpt: `Ofelia experimenta un proceso de individuación a través del encuentro con el inconsciente colectivo. El laberinto representa la psique profunda; el Fauno es Trickster/Guía ambiguo. Las tres pruebas son etapas de individuación. El Pale Man encarna la Sombra devoradora del mundo adulto/fascista. La madre moribunda y Mercedes representan aspectos de la Gran Madre. El capitán Vidal es la Sombra del principio paterno corrupto. La "muerte" final de Ofelia es una transformación: integración completa con el Self mediante el sacrificio del ego. El reino subterráneo simboliza el inconsciente colectivo integrado.`,
      insightsGenerated: [
        'Los cuentos de hadas dramatizan procesos de individuación',
        'El fascismo representa la Sombra colectiva no integrada',
        'La muerte simbólica puede representar transformación psíquica'
      ],
      methodologyApplication: 'Análisis de individuación femenina mediante imaginería feérica',
      keyFindings: [
        'Del Toro usa conscientemente simbolismo junguiano',
        'Los mundos fantásticos representan realidades psíquicas',
        'La individuación femenina tiene sus propios desafíos arquetípicos'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'campbell-hero-journey',
      relationshipType: 'complementary',
      synergyDescription: 'Campbell aplicó conceptos junguianos al monomito',
      combinedInsightPotential: 9
    },
    {
      id: 'freud-psychoanalysis',
      relationshipType: 'dialectical',
      synergyDescription: 'Jung divergió de Freud hacia lo colectivo y espiritual',
      combinedInsightPotential: 7
    },
    {
      id: 'pearson-archetypes',
      relationshipType: 'complementary',
      synergyDescription: 'Pearson expandió y sistematizó los arquetipos junguianos',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Archetype Calculator',
      type: 'webapp',
      description: 'Herramienta para identificar arquetipos dominantes en personajes',
      cost: 'free',
      platforms: ['web']
    },
    {
      name: 'Individuation Journey Mapper',
      type: 'software',
      description: 'Software para trazar procesos de individuación en narrativas',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    }
  ]
};
