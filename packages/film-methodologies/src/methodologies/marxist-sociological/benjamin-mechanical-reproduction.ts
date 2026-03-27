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

export const BENJAMIN_MECHANICAL_REPRODUCTION: Methodology = {
  metadata: {
    id: 'benjamin-mechanical-reproduction',
    name: 'La Obra de Arte en la Era de la Reproductibilidad Técnica',
    author: 'Walter Benjamin',
    year: 1935,
    category: 'marxist-sociological',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['basic-marxism', 'aesthetic-theory'],
    culturalContext: 'Teoría crítica de Frankfurt',
    language: 'es'
  },
  
  description: `Walter Benjamin transformó la comprensión del cine al analizarlo como fenómeno que revoluciona fundamentalmente la naturaleza del arte y la percepción humana. Su concepto de "aura" - la presencia única e irrepetible de la obra de arte tradicional - y su "pérdida" en la reproducción mecánica, reveló las implicaciones políticas y perceptuales del cine. Benjamin vio en el cine un potencial democrático revolucionario: al destruir el aura ritual del arte, lo hace accesible a las masas y permite nuevas formas de conciencia crítica. Su análisis de la "percepción distraída" del cine anticipa formas modernas de recepción mediática. Benjamin exploró cómo el cine transforma la experiencia del espacio-tiempo a través del inconsciente óptico, revelando dimensiones invisibles de la realidad. Su dialéctica entre el potencial emancipador del cine y su apropiación fascista sigue siendo crucial.`,
  
  keyConcepts: [
    {
      term: 'Aura',
      definition: 'Unicidad irrepetible y presencia auténtica de la obra de arte tradicional',
      importance: 'fundamental',
      relatedTerms: ['autenticidad', 'ritual', 'culto']
    },
    {
      term: 'Reproductibilidad Técnica',
      definition: 'Capacidad de multiplicación mecánica infinita que transforma la naturaleza del arte',
      importance: 'fundamental',
      relatedTerms: ['reproducción', 'democratización', 'masificación']
    },
    {
      term: 'Pérdida del Aura',
      definition: 'Destrucción de la unicidad ritual que democratiza pero también desacraliza el arte',
      importance: 'fundamental',
      relatedTerms: ['desacralización', 'secularización', 'democratización']
    },
    {
      term: 'Inconsciente Óptico',
      definition: 'Dimensiones de la realidad reveladas por la cámara invisibles al ojo humano',
      importance: 'important',
      relatedTerms: ['percepción expandida', 'revelación técnica']
    },
    {
      term: 'Percepción Distraída',
      definition: 'Modo de recepción táctil y habitual opuesto a la contemplación concentrada',
      importance: 'important',
      relatedTerms: ['distracción', 'hábito', 'tactilidad']
    },
    {
      term: 'Politización del Arte',
      definition: 'Uso del arte para fines revolucionarios contra la estetización fascista de la política',
      importance: 'fundamental',
      relatedTerms: ['revolución', 'emancipación', 'conciencia crítica']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de presencia/ausencia aurática',
      description: 'Analizar si el film busca crear o destruir el aura',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar elementos que enfaticen unicidad o reproductibilidad',
        'Examinar la relación con tradiciones artísticas',
        'Considerar el contexto de exhibición'
      ],
      commonMistakes: [
        'Confundir calidad artística con aura',
        'Ignorar intentos de restaurar aura artificialmente'
      ]
    },
    {
      order: 2,
      name: 'Análisis de modos perceptivos',
      description: 'Examinar si promueve contemplación o distracción',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar ritmo y estructura de la atención',
        'Analizar uso del shock y la sorpresa',
        'Considerar la demanda cognitiva sobre el espectador'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda del inconsciente óptico',
      description: 'Identificar qué revela la técnica cinematográfica',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar uso de cámara lenta, primeros planos extremos',
        'Identificar perspectivas imposibles para el ojo humano'
      ]
    },
    {
      order: 4,
      name: 'Examen valor cultual/exhibitivo',
      description: 'Analizar orientación hacia ritual o exposición masiva',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis político',
      description: 'Evaluar potencial emancipador vs. apropiación ideológica',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Distinguir intención de efecto',
        'Considerar contexto de producción y recepción'
      ]
    },
    {
      order: 6,
      name: 'Evaluación dialéctica',
      description: 'Examinar tensiones entre democratización y pérdida',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Análisis materialista profundo de la transformación del arte',
    'Conecta cambios tecnológicos con transformaciones políticas y perceptuales',
    'Anticipó desarrollos mediáticos posteriores con notable precisión',
    'Dialéctica sofisticada entre pérdida y ganancia',
    'Influencia duradera en teoría mediática y cultural'
  ],
  
  limitations: [
    'Cierta nostalgia romántica por el aura pre-moderna',
    'Optimismo sobre el potencial revolucionario de las masas cuestionable',
    'Determinismo tecnológico parcial',
    'Contexto histórico específico (ascenso del fascismo)',
    'Conceptos a veces ambiguos o contradictorios'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Walter Benjamin'],
      title: 'The Work of Art in the Age of Its Technological Reproducibility, and Other Writings on Media',
      year: 2008,
      publisher: 'Harvard University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Walter Benjamin'],
      title: 'The Arcades Project',
      year: 1999,
      publisher: 'Harvard University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Susan Buck-Morss'],
      title: 'The Dialectics of Seeing: Walter Benjamin and the Arcades Project',
      year: 1989,
      publisher: 'MIT Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Miriam Bratu Hansen'],
      title: 'Cinema and Experience: Siegfried Kracauer, Walter Benjamin, and Theodor W. Adorno',
      year: 2012,
      publisher: 'University of California Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Man with a Movie Camera',
        year: 1929,
        director: 'Dziga Vertov'
      },
      analysisExcerpt: `Vertov celebra explícitamente la reproductibilidad técnica y la destrucción del aura. El film revela el inconsciente óptico urbano: movimientos imperceptibles acelerados/ralentizados, perspectivas imposibles, la ciudad como organismo mecánico. Promueve percepción distraída mediante montaje rápido y multiplicidad visual. Rechaza valor cultual del arte burgués por valor exhibitivo revolucionario. La cámara no imita el ojo sino que lo supera. Politización explícita: el cine como herramienta de construcción de conciencia socialista.`,
      insightsGenerated: [
        'Celebración consciente de la pérdida del aura como liberación',
        'El inconsciente óptico revela la verdad social de la modernidad',
        'La percepción distraída se vuelve modo de conocimiento crítico'
      ],
      methodologyApplication: 'Identificación de estrategias anti-auráticas y revelación técnica',
      keyFindings: [
        'El cine soviético realizó conscientemente el programa benjaminiano',
        'La técnica puede ser revolucionaria en sí misma',
        'La destrucción del aura permite nuevas formas de verdad'
      ]
    },
    {
      film: {
        title: 'Russian Ark',
        year: 2002,
        director: 'Alexander Sokurov'
      },
      analysisExcerpt: `Russian Ark intenta paradójicamente restaurar el aura en la era digital. Plano único de 96 minutos irrepetible (aura técnica). Recorrido por el Hermitage sacraliza el arte-alta cultura. Promueve contemplación concentrada, no distracción. Sin embargo, la tecnología digital que lo permite es pura reproductibilidad. Tensión irresuelta: usa la reproductibilidad técnica extrema (digital) para crear unicidad artificial. Nostalgia reaccionaria por el valor cultual del arte pre-moderno.`,
      insightsGenerated: [
        'Intentos contemporáneos de restaurar el aura son contradictorios',
        'La tecnología digital radicaliza la reproductibilidad',
        'La nostalgia aurática puede ser políticamente reaccionaria'
      ],
      methodologyApplication: 'Análisis de intentos paradójicos de restauración aurática',
      keyFindings: [
        'El aura no puede ser restaurada artificialmente',
        'La digitalización completa el proceso que Benjamin identificó',
        'Los intentos de re-auratización revelan ansiedades culturales'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'adorno-culture-industry',
      relationshipType: 'dialectical',
      synergyDescription: 'Adorno es más pesimista sobre el potencial emancipador que Benjamin identifica',
      combinedInsightPotential: 9
    },
    {
      id: 'baudrillard-simulation',
      relationshipType: 'complementary',
      synergyDescription: 'Baudrillard radicaliza la pérdida del original que Benjamin teoriza',
      combinedInsightPotential: 8
    },
    {
      id: 'mcluhan-media',
      relationshipType: 'complementary',
      synergyDescription: 'McLuhan desarrolla las intuiciones de Benjamin sobre cambios perceptivos',
      combinedInsightPotential: 8
    }
  ]
};
