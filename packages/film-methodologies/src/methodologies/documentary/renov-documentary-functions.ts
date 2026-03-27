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

export const RENOV_DOCUMENTARY_FUNCTIONS: Methodology = {
  metadata: {
    id: 'renov-documentary-functions',
    name: 'Funciones del Documental',
    author: 'Michael Renov',
    year: 1993,
    category: 'documentary',
    complexity: 'intermediate',
    timeToLearn: 20,
    prerequisities: [],
    culturalContext: 'Teoría documental postestructural',
    language: 'es'
  },
  
  description: `Michael Renov propuso un marco teórico alternativo que identifica cuatro funciones fundamentales del documental: registrar/revelar/preservar, persuadir/promover, analizar/interrogar, y expresar. Estas funciones no son mutuamente excluyentes sino que operan en diferentes proporciones en cada documental. Renov enfatiza la naturaleza construida y retórica de todo documental, rechazando la transparencia ingenua. Su trabajo sobre el documental subjetivo y autobiográfico legitimó formas personales y experimentales previamente marginalizadas. Renov analiza cómo el "sujeto del documental" es tanto el tema como el yo que enuncia, explorando las dimensiones performativas de la autorepresentación. Su concepto de "dominio documental" expande el campo más allá del cine para incluir video, instalación y medios digitales.`,
  
  keyConcepts: [
    {
      term: 'Cuatro Funciones',
      definition: 'Registrar/Preservar, Persuadir/Promover, Analizar/Interrogar, Expresar',
      importance: 'fundamental',
      relatedTerms: ['propósito documental', 'intención']
    },
    {
      term: 'Sujeto Documental',
      definition: 'Tanto el tema filmado como el yo enunciador',
      importance: 'fundamental',
      relatedTerms: ['subjetividad', 'autorepresentación']
    },
    {
      term: 'Documental Subjetivo',
      definition: 'Primera persona legitimada como modo documental',
      importance: 'important',
      relatedTerms: ['autobiografía', 'ensayo personal']
    },
    {
      term: 'Retórica Documental',
      definition: 'Persuasión inevitable en toda representación',
      importance: 'important',
      relatedTerms: ['argumento', 'construcción']
    },
    {
      term: 'Poética Documental',
      definition: 'Expresión artística dentro del modo documental',
      importance: 'important',
      relatedTerms: ['estética', 'forma']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar funciones',
      description: 'Determinar cuáles de las cuatro funciones están presentes',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Todas las funciones pueden estar presentes',
        'Buscar la función dominante',
        'Las funciones pueden cambiar durante el film'
      ],
      commonMistakes: [
        'Asumir una sola función',
        'Ignorar funciones sutiles'
      ]
    },
    {
      order: 2,
      name: 'Analizar proporciones',
      description: 'Evaluar el balance entre las diferentes funciones',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Considerar tiempo dedicado a cada función',
        'Evaluar intensidad, no solo duración'
      ]
    },
    {
      order: 3,
      name: 'Examinar sujeto',
      description: 'Analizar quién habla y sobre qué/quién',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Distinguir sujeto temático de sujeto enunciador',
        'Buscar marcas de subjetividad'
      ]
    },
    {
      order: 4,
      name: 'Buscar subjetividad',
      description: 'Identificar elementos personales o autobiográficos',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Analizar retórica',
      description: 'Examinar estrategias persuasivas empleadas',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Identificar poética',
      description: 'Localizar elementos expresivos y estéticos',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Marco flexible e inclusivo para diversos documentales',
    'Legitima formas experimentales y personales',
    'Reconoce la construcción inherente del documental',
    'Útil para documentales híbridos contemporáneos',
    'Expande la definición del campo documental'
  ],
  
  limitations: [
    'Funciones pueden solaparse excesivamente',
    'Menos atención al contexto histórico',
    'Complejidad conceptual para principiantes',
    'Aplicación requiere considerable interpretación'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Michael Renov'],
      title: 'Theorizing Documentary',
      year: 1993,
      publisher: 'Routledge',
      essential: true      
    },
    {
      type: 'book',
      authors: ['Michael Renov'],
      title: 'The Subject of Documentary',
      year: 2004,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Michael Renov', 'Jane Gaines'],
      title: 'Collecting Visible Evidence',
      year: 1999,
      publisher: 'University of Minnesota Press',
      essential: false      
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Sherman\'s March',
        year: 1986,
        director: 'Ross McElwee'
      },
      analysisExcerpt: `Ejemplo paradigmático donde la función expresiva domina. McElwee comienza con intención de registrar/preservar la historia de Sherman, pero el documental se convierte en exploración personal sobre relaciones románticas. La función analítica interroga la masculinidad sureña y el legado histórico. Persuasión sutil sobre la persistencia del pasado en el presente. El sujeto documental es simultáneamente Sherman, el Sur, y el propio McElwee. Autobiografía desviada que legitima la digresión como método. La poética de la deriva sustituye la retórica tradicional.`,
      insightsGenerated: [
        'La función expresiva puede subvertir intenciones documentales tradicionales',
        'El sujeto personal ilumina el sujeto histórico',
        'La digresión puede ser más reveladora que el enfoque directo'
      ],
      methodologyApplication: 'Análisis de cómo las funciones se transforman durante el film',
      keyFindings: [
        'Las funciones documentales son dinámicas, no estáticas',
        'Lo personal es político en el documental subjetivo',
        'La expresión no invalida otras funciones documentales'
      ]
    },
    {
      film: {
        title: 'The Act of Killing',
        year: 2012,
        director: 'Joshua Oppenheimer'
      },
      analysisExcerpt: `Todas las funciones operan en tensión extrema. Registrar: testimonios de perpetradores de genocidio. Persuadir: argumento sobre la banalidad del mal y la impunidad. Analizar/Interrogar: método de recreación como análisis psicológico. Expresar: dimensión surreal y onírica de las recreaciones. Los perpetradores son simultáneamente sujetos filmados y co-creadores. La retórica opera mediante shock y extrañamiento. La función analítica domina: el método mismo es el análisis.`,
      insightsGenerated: [
        'Las funciones pueden operar en conflicto productivo',
        'El método documental puede ser la principal herramienta analítica',
        'Los sujetos pueden apropiarse de las funciones documentales'
      ],
      methodologyApplication: 'Examen de tensiones entre funciones en documental extremo',
      keyFindings: [
        'La complejidad ética emerge de la tensión entre funciones',
        'Analizar puede requerir métodos no convencionales',
        'Las cuatro funciones pueden ser simultáneamente necesarias'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'nichols-documentary-modes',
      relationshipType: 'complementary',
      synergyDescription: 'Los modos de Nichols pueden mapearse a las funciones de Renov',
      combinedInsightPotential: 8
    },
    {
      id: 'grierson-creative-treatment',
      relationshipType: 'complementary',
      synergyDescription: 'Renov expande la "interpretación creativa" de Grierson en cuatro funciones',
      combinedInsightPotential: 7
    },
    {
      id: 'minh-ha-documentary',
      relationshipType: 'complementary',
      synergyDescription: 'Ambos cuestionan la transparencia documental desde perspectivas complementarias',
      combinedInsightPotential: 9
    }
  ]
};
