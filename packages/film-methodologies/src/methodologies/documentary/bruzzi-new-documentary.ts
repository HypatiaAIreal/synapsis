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

export const BRUZZI_NEW_DOCUMENTARY: Methodology = {
  metadata: {
    id: 'bruzzi-new-documentary',
    name: 'Nuevas Teorías Documentales',
    author: 'Stella Bruzzi',
    year: 2006,
    category: 'documentary',
    complexity: 'advanced',
    timeToLearn: 30,
    prerequisities: ['nichols-documentary-modes'],
    culturalContext: 'Teoría documental británica contemporánea',
    language: 'es'
  },
  
  description: `Stella Bruzzi desafió paradigmas establecidos del documental argumentando que la presencia inevitable del cineasta no compromete sino que constituye la autenticidad documental. Su concepto de "documentales performativos" (distinto del modo de Nichols) enfatiza cómo todos los documentales son performances de sus realizadores y sujetos. Bruzzi critica el "ideal observacional" como fantasía imposible, proponiendo en cambio una estética de la negociación donde la realidad emerge del encuentro entre cineasta, sujetos y aparato. Su análisis de documentales contemporáneos muestra cómo las formas híbridas y autorreflexivas no debilitan sino que fortalecen los reclamos de verdad. Bruzzi examina el "nuevo documental" que abraza subjetividad, reconstrucción y espectáculo sin abandonar compromisos éticos.`,
  
  keyConcepts: [
    {
      term: 'Performatividad Constitutiva',
      definition: 'La performance no contamina sino que constituye la realidad documental',
      importance: 'fundamental',
      relatedTerms: ['actuación', 'autenticidad']
    },
    {
      term: 'Negociación de Realidad',
      definition: 'Verdad emerge del encuentro entre cineasta, sujetos y aparato',
      importance: 'fundamental',
      relatedTerms: ['encuentro', 'construcción']
    },
    {
      term: 'Nuevo Documental',
      definition: 'Formas híbridas contemporáneas que abrazan artificio',
      importance: 'important',
      relatedTerms: ['hibridación', 'docudrama']
    },
    {
      term: 'Mascarada de Objetividad',
      definition: 'Crítica a la fantasía de observación neutral',
      importance: 'important',
      relatedTerms: ['observación', 'transparencia']
    },
    {
      term: 'Ética de la Transparencia',
      definition: 'Mostrar el aparato y proceso como compromiso ético',
      importance: 'important',
      relatedTerms: ['reflexividad', 'honestidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar performatividad',
      description: 'Localizar elementos donde sujetos o cineastas actúan conscientemente',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'La performatividad no invalida la autenticidad',
        'Buscar momentos de actuación consciente',
        'Considerar la cámara como catalizador de performance'
      ],
      commonMistakes: [
        'Equiparar performance con falsedad',
        'Ignorar performatividad sutil'
      ]
    },
    {
      order: 2,
      name: 'Analizar negociaciones',
      description: 'Examinar interacciones visibles entre participantes',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de tensión o negociación',
        'Considerar lo que revelan estas interacciones'
      ]
    },
    {
      order: 3,
      name: 'Buscar hibridaciones',
      description: 'Identificar mezclas entre documental y ficción',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Examinar transparencia',
      description: 'Evaluar si y cómo se muestra el proceso de filmación',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificar espectáculo',
      description: 'Localizar elementos dramatizados o espectaculares',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Analizar autenticidad',
      description: 'Evaluar cómo se construye la verdad a través del artificio',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Actualiza teoría documental para prácticas contemporáneas',
    'Supera binarios simplistas verdad/ficción',
    'Abraza complejidad formal del documental actual',
    'Ofrece ética sofisticada para nuevas formas',
    'Valora innovación y experimentación'
  ],
  
  limitations: [
    'Puede relativizar excesivamente conceptos de verdad',
    'Menos sistemática que otros enfoques',
    'Énfasis en documental anglófono reciente',
    'Requiere familiaridad con debates previos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Stella Bruzzi'],
      title: 'New Documentary',
      year: 2006,
      publisher: 'Routledge',      
      essential: true
    },
    {
      type: 'book',
      authors: ['Stella Bruzzi'],
      title: 'Seven Up',
      year: 2007,
      publisher: 'British Film Institute',
      essential: false
    },
    {
      type: 'book',
      authors: ['Thomas Austin', 'Wilma de Jong'],
      title: 'Rethinking Documentary',
      year: 2008,
      publisher: 'Open University Press',
      essential: false      
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Arbor',
        year: 2010,
        director: 'Clio Barnard'
      },
      analysisExcerpt: `Ejemplo radical de performatividad constitutiva. Actores hacen lip-sync de entrevistas reales con la familia de Andrea Dunbar. La artificialidad extrema del método paradójicamente produce mayor autenticidad emocional. Negociación compleja entre testimonio original, interpretación actoral y puesta en escena. La transparencia del artificio es total: vemos a los actores preparándose. El nuevo documental en su máxima expresión: la verdad a través de la mediación extrema, no a pesar de ella.`,
      insightsGenerated: [
        'El artificio extremo puede producir verdad emocional profunda',
        'La transparencia del método refuerza la autenticidad',
        'La performance puede honrar al sujeto más que la observación directa'
      ],
      methodologyApplication: 'Análisis de performatividad radical como método documental',
      keyFindings: [
        'La autenticidad no requiere acceso directo',
        'El nuevo documental inventa métodos para cada historia',
        'La ética puede requerir mediación, no inmediatez'
      ]
    },
    {
      film: {
        title: 'The Jinx',
        year: 2015,
        director: 'Andrew Jarecki'
      },
      analysisExcerpt: `Serie que ejemplifica la negociación de realidad en tiempo real. Robert Durst performa conscientemente para la cámara, pero esa performance revela verdades. El aparato documental (entrevistas, confrontaciones con evidencia) cataliza revelaciones. Hibridación con true crime y thriller. Momento climático en el baño muestra cómo la realidad emerge inesperadamente del proceso documental. Ética compleja de usar el documental como investigación criminal.`,
      insightsGenerated: [
        'Los sujetos pueden traicionarse a través de su propia performance',
        'El proceso documental puede producir evidencia legal',
        'La negociación entre cineasta y sujeto puede ser antagonística'
      ],
      methodologyApplication: 'Examen de cómo la realidad emerge del encuentro documental',
      keyFindings: [
        'El nuevo documental puede tener consecuencias legales reales',
        'La performatividad del sujeto no invalida revelaciones',
        'El espectáculo puede servir a la verdad'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'nichols-documentary-modes',
      relationshipType: 'complementary',
      synergyDescription: 'Bruzzi critica y expande las categorías modales de Nichols',
      combinedInsightPotential: 9
    },
    {
      id: 'corner-documentary-studies',
      relationshipType: 'parallel',
      synergyDescription: 'Corner ofrece perspectiva británica complementaria sobre documental contemporáneo',
      combinedInsightPotential: 8
    },
    {
      id: 'aufderheide-documentary-ethics',
      relationshipType: 'complementary',
      synergyDescription: 'Aufderheide profundiza en las implicaciones éticas que Bruzzi plantea',
      combinedInsightPotential: 8
    }
  ]
};
