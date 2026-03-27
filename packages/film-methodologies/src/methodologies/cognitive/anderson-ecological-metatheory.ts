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

export const ANDERSON_ECOLOGICAL_METATHEORY: Methodology = {
  metadata: {
    id: 'anderson-ecological',
    name: 'Ecological Metatheory',
    author: 'Joseph Anderson',
    year: 1996,
    category: 'cognitive',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['ecological-psychology', 'perception-theory'],
    culturalContext: 'Psicología ecológica aplicada al cine',
    language: 'es'
  },
  
  description: `Joseph Anderson desarrolló una "metateoría ecológica" del cine basada en la psicología ecológica de J.J. Gibson, que enfatiza la percepción directa de información en el ambiente más que construcción mental compleja. Anderson argumenta que el cine explota nuestra capacidad evolutiva para percibir información en superficies luminosas en movimiento. Su teoría rechaza modelos que ven al espectador como descifrando códigos, proponiendo en cambio que percibimos directamente affordances (posibilidades de acción) en las imágenes. Anderson analiza cómo el "flujo óptico" cinematográfico simula experiencia perceptual real, permitiendo respuestas naturales.`,
  
  keyConcepts: [
    {
      term: 'Percepción Directa',
      definition: 'Captación inmediata de información sin mediación mental compleja',
      importance: 'fundamental',
      relatedTerms: ['inmediatez', 'no-mediación']
    },
    {
      term: 'Affordances Fílmicas',
      definition: 'Posibilidades de acción percibidas directamente en imágenes',
      importance: 'fundamental',
      relatedTerms: ['posibilidades', 'acción potencial']
    },
    {
      term: 'Flujo Óptico',
      definition: 'Patrón de luz estructurada en movimiento que contiene información',
      importance: 'fundamental',
      relatedTerms: ['información visual', 'movimiento']
    },
    {
      term: 'Ecological Validity',
      definition: 'Grado en que el estímulo fílmico preserva información del mundo real',
      importance: 'important',
      relatedTerms: ['realismo perceptual', 'fidelidad']
    },
    {
      term: 'Invariantes Perceptuales',
      definition: 'Información que permanece constante a través de transformaciones',
      importance: 'important',
      relatedTerms: ['constancias', 'información estable']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Analizar flujo óptico',
      description: 'Examinar patrones de información en movimiento',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Observar cómo el movimiento revela estructura',
        'Identificar información en transformaciones',
        'Notar simulación de movimiento natural'
      ],
      commonMistakes: [
        'Confundir con análisis formal tradicional',
        'Ignorar información en el movimiento'
      ]
    },
    {
      order: 2,
      name: 'Identificar affordances',
      description: 'Localizar posibilidades de acción percibidas',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar qué acciones sugieren los espacios',
        'Notar affordances de objetos y superficies',
        'Considerar affordances sociales'
      ]
    },
    {
      order: 3,
      name: 'Evaluar ecological validity',
      description: 'Determinar fidelidad perceptual al mundo real',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Comparar con experiencia perceptual real',
        'Notar preservación de invariantes',
        'Identificar distorsiones significativas'
      ]
    },
    {
      order: 4,
      name: 'Buscar invariantes',
      description: 'Identificar información perceptual constante',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Examinar especificación directa',
      description: 'Analizar claridad de información perceptual',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluar resonancia perceptual',
      description: 'Determinar sintonización con sistemas perceptuales',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Base en psicología perceptual establecida',
    'Explica inmediatez de la experiencia cinematográfica',
    'No requiere aprendizaje de códigos culturales',
    'Útil para entender realismo y VR',
    'Parsimonia teórica elegante'
  ],
  
  limitations: [
    'Minimiza aspectos culturales y simbólicos',
    'Rechaza convenciones cinematográficas',
    'Menos útil para cine abstracto o experimental',
    'Debate sobre qué tan "directa" es la percepción'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Joseph D. Anderson'],
      title: 'The Reality of Illusion: An Ecological Approach to Cognitive Film Theory',
      year: 1996,
      publisher: 'Southern Illinois University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['James J. Gibson'],
      title: 'The Ecological Approach to Visual Perception',
      year: 1979,
      publisher: 'Houghton Mifflin',
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
        title: 'Gravity',
        year: 2013,
        director: 'Alfonso Cuarón'
      },
      analysisExcerpt: `Gravity maximiza la ecological validity para crear experiencia visceral. El flujo óptico simula perfectamente la ingravidez: rotaciones continuas, ausencia de arriba/abajo. Las affordances están alteradas: superficies no ofrecen soporte, el vacío no permite locomoción normal. Los invariantes perceptuales (tamaño relativo, oclusión) se mantienen creando realismo. La percepción directa del peligro es inmediata: no necesitamos "decodificar" el vacío del espacio. El film resuena con sistemas vestibulares y propioceptivos del espectador.`,
      insightsGenerated: [
        'La alteración controlada de affordances crea tensión',
        'La ecological validity aumenta el impacto visceral',
        'La percepción directa del espacio genera respuestas corporales'
      ],
      methodologyApplication: 'Análisis de simulación ecológica y affordances alteradas',
      keyFindings: [
        'Cuarón explota magistralmente la percepción directa',
        'El realismo ecológico es más importante que el fotográfico',
        'Las affordances ausentes son tan poderosas como las presentes'
      ]
    },
    {
      film: {
        title: 'Russian Ark',
        year: 2002,
        director: 'Alexander Sokurov'
      },
      analysisExcerpt: `Russian Ark presenta ecological validity máxima mediante el plano secuencia único. El flujo óptico es continuo y natural, simulando exploración humana real del espacio. Las affordances arquitectónicas son percibidas directamente: puertas invitan a pasar, escaleras a subir. Los invariantes se mantienen perfectamente al no haber cortes. La especificación directa es completa: percibimos el Hermitage como lo haríamos en persona. El film demuestra que el montaje no es esencial para el cine.`,
      insightsGenerated: [
        'La continuidad maximiza la validez ecológica',
        'Las affordances arquitectónicas guían la narrativa',
        'La percepción directa puede sostener experiencias complejas'
      ],
      methodologyApplication: 'Análisis de percepción continua y affordances espaciales',
      keyFindings: [
        'Sokurov valida empíricamente las teorías de Anderson',
        'El cine puede aproximarse a la experiencia perceptual directa',
        'Las convenciones (montaje) no son perceptualmente necesarias'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'gibson-ecological',
      relationshipType: 'complementary',
      synergyDescription: 'Gibson proporciona la base teórica que Anderson aplica al cine',
      combinedInsightPotential: 9
    },
    {
      id: 'merleau-ponty-phenomenology',
      relationshipType: 'complementary',
      synergyDescription: 'Ambos enfatizan percepción corporeizada directa',
      combinedInsightPotential: 8
    },
    {
      id: 'cutting-visual-flow',
      relationshipType: 'complementary',
      synergyDescription: 'Cutting proporciona evidencia empírica para teorías ecológicas',
      combinedInsightPotential: 8
    }
  ]
};
