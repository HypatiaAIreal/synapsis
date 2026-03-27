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

export const COMPARATO_LATIN_SCREENPLAY: Methodology = {
  metadata: {
    id: 'comparato-latin-screenplay',
    name: 'Guión Latinoamericano',
    author: 'Doc Comparato',
    year: 1983,
    category: 'screenplay-dramaturgy',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['basic-screenwriting'],
    culturalContext: 'Cine latinoamericano',
    language: 'es'
  },
  
  description: `Doc Comparato, pionero de la teoría del guión en América Latina, desarrolló un enfoque que considera las particularidades culturales, sociales y de producción del cine latinoamericano. Su método integra la narrativa oral tradicional, el realismo mágico, y las estructuras no lineales características de la región con principios dramáticos universales. Comparato enfatiza la importancia del "conflicto matriz" - un conflicto central que refleja tensiones sociales más amplias - y el concepto de "tiempo circular" opuesto al tiempo lineal hollywoodense. Su trabajo aborda las realidades de producción en América Latina, incluyendo presupuestos limitados y la necesidad de conectar con audiencias locales mientras se mantiene relevancia universal.`,
  
  keyConcepts: [
    {
      term: 'Conflicto Matriz',
      definition: 'Conflicto personal que refleja y encarna tensiones sociales mayores',
      importance: 'fundamental',
      relatedTerms: ['conflicto social', 'microhistoria']
    },
    {
      term: 'Tiempo Circular',
      definition: 'Estructura narrativa no lineal que refleja cosmovisión latinoamericana',
      importance: 'fundamental',
      relatedTerms: ['tiempo mítico', 'narrativa cíclica']
    },
    {
      term: 'Personaje Coral',
      definition: 'Protagonista colectivo que representa una comunidad o grupo social',
      importance: 'important',
      relatedTerms: ['protagonista colectivo', 'personaje comunitario']
    },
    {
      term: 'Realismo Mágico Cinematográfico',
      definition: 'Integración natural de elementos fantásticos en narrativas realistas',
      importance: 'important',
      relatedTerms: ['lo real maravilloso', 'fantasía cotidiana']
    },
    {
      term: 'Economía Narrativa',
      definition: 'Máximo impacto dramático con recursos mínimos de producción',
      importance: 'important',
      relatedTerms: ['producción austera', 'creatividad limitada']
    },
    {
      term: 'Hibridación',
      definition: 'Mezcla de ficción con elementos documentales y testimoniales',
      importance: 'important',
      relatedTerms: ['docuficción', 'testimonio ficcionalizado']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del conflicto matriz',
      description: 'Encontrar la tensión social que subyace al conflicto personal',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar cómo lo personal refleja lo político/social',
        'El conflicto individual debe resonar colectivamente',
        'Evitar alegorías obvias o panfletarias'
      ],
      commonMistakes: [
        'Separar artificialmente lo personal de lo social',
        'Crear alegorías demasiado directas'
      ]
    },
    {
      order: 2,
      name: 'Diseño de estructura temporal',
      description: 'Decidir entre tiempo lineal, circular o fragmentado',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'El tiempo circular refleja cosmovisiones indígenas/africanas',
        'La fragmentación puede reflejar memoria traumática',
        'La estructura debe servir al tema, no ser ornamental'
      ]
    },
    {
      order: 3,
      name: 'Desarrollo del personaje coral',
      description: 'Crear protagonistas colectivos o representativos',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Cada individuo representa un aspecto de la comunidad',
        'Mantener identidades individuales dentro del colectivo',
        'El coral puede ser literal o simbólico'
      ]
    },
    {
      order: 4,
      name: 'Integración del realismo mágico',
      description: 'Incorporar elementos fantásticos naturalmente',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Lo mágico debe surgir de la cosmovisión cultural',
        'Evitar exotismo o folklorismo superficial',
        'Lo fantástico comenta sobre lo real'
      ]
    },
    {
      order: 5,
      name: 'Aplicación de economía narrativa',
      description: 'Maximizar impacto con recursos limitados',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Usar locaciones naturales significativamente',
        'Convertir limitaciones en ventajas estéticas',
        'Enfocarse en conflictos humanos sobre espectáculo'
      ]
    },
    {
      order: 6,
      name: 'Exploración de hibridación',
      description: 'Mezclar ficción con elementos documentales',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Culturalmente específico y socialmente relevante',
    'Integra tradiciones narrativas orales y locales',
    'Flexible para diferentes realidades de producción',
    'Valora narrativas no hegemónicas',
    'Conecta lo personal con lo político naturalmente',
    'Adaptable a diversos contextos latinoamericanos'
  ],
  
  limitations: [
    'Menos conocido internacionalmente',
    'Puede ser muy específico regionalmente',
    'Menos sistemático que métodos hollywoodenses',
    'Requiere comprensión cultural profunda',
    'Dificultad para aplicar fuera del contexto latino'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Doc Comparato'],
      title: 'El Guión: Arte y Técnica de la Escritura para Cine y Televisión',
      year: 1983,
      publisher: 'EUDEBA',
      essential: true
    },
    {
      type: 'book',
      authors: ['Doc Comparato'],
      title: 'De la Creación al Guión',
      year: 1993,
      publisher: 'IORTV',
      essential: true
    },
    {
      type: 'book',
      authors: ['Doc Comparato'],
      title: 'El Guión: Arte, Técnica y Lenguaje',
      year: 2014,
      publisher: 'Ediciones Manantial',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Central do Brasil',
        year: 1998,
        director: 'Walter Salles'
      },
      analysisExcerpt: `Ejemplo magistral del método Comparato. Conflicto matriz: abandono social/búsqueda de identidad nacional. Dora y Josué representan el Brasil urbano cínico y el Brasil rural esperanzado. Estructura: viaje físico que es también temporal, del Brasil moderno al tradicional. Economía narrativa: road movie con recursos mínimos pero impacto máximo. Personaje coral implícito: cada personaje encontrado representa aspectos de Brasil. Hibridación: actores no profesionales, locaciones reales, situaciones documentadas. El conflicto personal (encontrar al padre) refleja la búsqueda nacional de identidad y pertenencia.`,
      insightsGenerated: [
        'El viaje personal como metáfora del viaje nacional',
        'La economía narrativa puede generar intimidad poderosa',
        'El conflicto matriz une lo individual con lo colectivo'
      ],
      methodologyApplication: 'Integración perfecta de elementos comparatianos en narrativa accesible',
      keyFindings: [
        'Comparato efectivo para road movies latinoamericanas',
        'La búsqueda personal puede encarnar búsquedas colectivas',
        'El minimalismo puede ser más poderoso que el espectáculo'
      ]
    },
    {
      film: {
        title: 'Amores Perros',
        year: 2000,
        director: 'Alejandro González Iñárritu'
      },
      analysisExcerpt: `Estructura circular/fragmentada típicamente latinoamericana. Conflicto matriz: violencia urbana y desigualdad en Ciudad de México. Tiempo circular: el accidente como punto de convergencia repetido. Personaje coral: tres historias representan diferentes clases sociales mexicanas. Realismo brutal sin elementos mágicos pero con estructura que refleja caos urbano. Hibridación: peleas de perros reales, locaciones auténticas, actores mezclados con no-profesionales. Cada historia individual refleja aspectos de la violencia estructural mexicana. La fragmentación formal refleja la fragmentación social.`,
      insightsGenerated: [
        'La estructura fragmentada puede reflejar realidades sociales fragmentadas',
        'El personaje coral puede construirse mediante historias paralelas',
        'La violencia individual emerge de violencia estructural'
      ],
      methodologyApplication: 'Tiempo circular y personaje coral en contexto urbano contemporáneo',
      keyFindings: [
        'Comparato aplicable al cine urbano moderno',
        'La estructura puede ser tan política como el contenido',
        'Las conexiones entre historias revelan conexiones sociales'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'garcia-marquez-narrative',
      relationshipType: 'complementary',
      synergyDescription: 'Comparato adapta técnicas del boom literario al cine',
      combinedInsightPotential: 9
    },
    {
      id: 'third-cinema',
      relationshipType: 'synthetic',
      synergyDescription: 'Comparato comparte preocupaciones políticas con el Tercer Cine',
      combinedInsightPotential: 8
    },
    {
      id: 'neorealism',
      relationshipType: 'synthetic',
      synergyDescription: 'Influencia neorrealista en la economía narrativa de Comparato',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Guión Colectivo',
      type: 'framework',
      description: 'Metodología para desarrollo comunitario de guiones',
      cost: 'free',
      platforms: ['workshops']
    },
    {
      name: 'CineLatino Script',
      type: 'software',
      description: 'Software adaptado a necesidades del cine latinoamericano',
      cost: 'freemium',
      platforms: ['web', 'Windows', 'Mac']
    }
  ]
};
