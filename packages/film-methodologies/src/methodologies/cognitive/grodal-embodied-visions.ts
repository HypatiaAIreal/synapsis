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

export const GRODAL_EMBODIED_VISIONS: Methodology = {
  metadata: {
    id: 'grodal-embodied-visions',
    name: 'Embodied Visions',
    author: 'Torben Grodal',
    year: 2009,
    category: 'cognitive',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['neuroscience-basics', 'evolutionary-psychology'],
    culturalContext: 'Teoría bio-cultural del cine',
    language: 'es'
  },
  
  description: `Torben Grodal desarrolló una teoría bio-cultural del cine que integra neurociencia, psicología evolutiva y análisis cultural. Su modelo PECMA (Percepción-Emoción-Cognición-Acción Motora) describe el flujo de procesamiento cerebral durante la experiencia cinematográfica. Grodal argumenta que diferentes géneros activan diferentes sistemas cerebrales: el horror activa respuestas de supervivencia primitivas, mientras que el melodrama activa sistemas de apego social. Su concepto de "embodied simulation" explica cómo el cerebro simula acciones vistas en pantalla, creando respuestas corporales. Grodal analiza la evolución de los géneros cinematográficos como adaptaciones a nichos cognitivo-emocionales específicos.`,
  
  keyConcepts: [
    {
      term: 'Modelo PECMA',
      definition: 'Flujo Percepción→Emoción→Cognición→Acción Motora en el cerebro',
      importance: 'fundamental',
      relatedTerms: ['procesamiento', 'flujo neural']
    },
    {
      term: 'Embodied Simulation',
      definition: 'Simulación corporal automática de acciones observadas',
      importance: 'fundamental',
      relatedTerms: ['neuronas espejo', 'corporeidad']
    },
    {
      term: 'Films Tensos/Relajados',
      definition: 'Activación del sistema nervioso simpático vs. parasimpático',
      importance: 'important',
      relatedTerms: ['arousal', 'activación']
    },
    {
      term: 'Módulos Evolutivos',
      definition: 'Sistemas cerebrales especializados por evolución',
      importance: 'important',
      relatedTerms: ['adaptación', 'especialización']
    },
    {
      term: 'Bioculturalismo',
      definition: 'Integración de factores biológicos y culturales',
      importance: 'important',
      relatedTerms: ['natura/cultura', 'integración']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Mapear flujo PECMA',
      description: 'Trazar el procesamiento desde percepción hasta acción',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar momentos de cada fase',
        'Notar bloqueos o intensificaciones del flujo',
        'Considerar variaciones individuales'
      ],
      commonMistakes: [
        'Simplificar el flujo como lineal',
        'Ignorar retroalimentación entre fases'
      ]
    },
    {
      order: 2,
      name: 'Identificar embodied simulation',
      description: 'Localizar momentos de simulación corporal',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar acciones que inviten imitación',
        'Notar respuestas corporales propias',
        'Identificar bloqueos de simulación'
      ]
    },
    {
      order: 3,
      name: 'Clasificar tensión/relajación',
      description: 'Evaluar activación del sistema nervioso',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Considerar ritmo, música, acción',
        'Identificar momentos de cambio'
      ]
    },
    {
      order: 4,
      name: 'Localizar módulos evolutivos',
      description: 'Identificar sistemas ancestrales activados',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar miedos universales',
        'Identificar placeres básicos',
        'Considerar diferencias culturales'
      ]
    },
    {
      order: 5,
      name: 'Analizar reality status',
      description: 'Examinar evaluación cognitiva de realidad',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Integrar bio-cultural',
      description: 'Sintetizar aspectos biológicos y culturales',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Integra neurociencia actual con análisis cinematográfico',
    'Base evolutiva proporciona fundamento sólido',
    'Explica respuestas corporales al cine',
    'Modelo comprehensivo y multinivel',
    'Une biología y cultura productivamente'
  ],
  
  limitations: [
    'Puede tender al reduccionismo biológico',
    'Requiere conocimiento interdisciplinario complejo',
    'Menos útil para cine altamente abstracto',
    'Debates sobre validez de módulos evolutivos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Torben Grodal'],
      title: 'Embodied Visions: Evolution, Emotion, Culture, and Film',
      year: 2009,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Torben Grodal'],
      title: 'Moving Pictures: A New Theory of Film Genres, Feelings, and Cognition',
      year: 1997,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Joseph D. Anderson', 'Barbara Fisher Anderson'],
      title: 'Narration and Spectatorship in Moving Images',
      year: 2007,
      publisher: 'Cambridge Scholars',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Mad Max: Fury Road',
        year: 2015,
        director: 'George Miller'
      },
      analysisExcerpt: `Mad Max: Fury Road ejemplifica el cine "tenso" extremo. El flujo PECMA es constante e intenso: percepción de peligro→emoción de supervivencia→cognición táctica→acción motora simulada. La embodied simulation es máxima en las persecuciones, activando sistemas motores del espectador. Los módulos evolutivos de supervivencia, territorialidad y protección grupal están constantemente activos. El film logra un estado de "flow" donde el procesamiento PECMA es óptimamente fluido. Culturalmente, actualiza arquetipos de guerra y éxodo en contexto post-apocalíptico.`,
      insightsGenerated: [
        'La acción constante mantiene activación PECMA máxima',
        'La simplicidad narrativa permite focus en embodiment',
        'Los módulos evolutivos sustentan el impacto visceral'
      ],
      methodologyApplication: 'Análisis de activación PECMA sostenida y módulos de supervivencia',
      keyFindings: [
        'Miller domina la orchestración del sistema nervioso',
        'El minimalismo narrativo maximiza el impacto corporal',
        'El cine de acción explota sistemas evolutivos antiguos'
      ]
    },
    {
      film: {
        title: 'The Tree of Life',
        year: 2011,
        director: 'Terrence Malick'
      },
      analysisExcerpt: `The Tree of Life representa cine "relajado" contemplativo. El flujo PECMA es lento y recursivo: percepción estética→emoción nostálgica→cognición reflexiva→acción motora mínima. La embodied simulation es sutil, más sobre estados que acciones. Activa módulos evolutivos de apego parental, espiritualidad y asombro ante la naturaleza. El modo "lírico" permite procesamiento parasimpático, creando estados meditativos. Bioculturalmente, conecta experiencias familiares universales con cosmología particular.`,
      insightsGenerated: [
        'El cine contemplativo utiliza PECMA diferentemente',
        'La reducción de acción permite profundidad emocional',
        'Los módulos de apego son tan poderosos como los de supervivencia'
      ],
      methodologyApplication: 'Análisis de PECMA contemplativo y activación parasimpática',
      keyFindings: [
        'Malick crea estados embodied alternativos',
        'El ritmo lento permite procesamiento emocional profundo',
        'El cine puede activar módulos espirituales/estéticos'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'hasson-neurocinematics',
      relationshipType: 'complementary',
      synergyDescription: 'Hasson provee evidencia neurocientífica para las teorías de Grodal',
      combinedInsightPotential: 9
    },
    {
      id: 'shaviro-cinematic-body',
      relationshipType: 'parallel',
      synergyDescription: 'Shaviro teoriza el cuerpo cinemático desde perspectiva más fenomenológica',
      combinedInsightPotential: 8
    },
    {
      id: 'gallese-embodied-simulation',
      relationshipType: 'complementary',
      synergyDescription: 'Gallese provee la base neurocientífica del embodied simulation',
      combinedInsightPotential: 9
    }
  ]
};
