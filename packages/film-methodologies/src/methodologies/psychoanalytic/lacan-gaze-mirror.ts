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

export const LACAN_GAZE_MIRROR: Methodology = {
  metadata: {
    id: 'lacan-gaze-mirror',
    name: 'La Mirada y el Espejo',
    author: 'Jacques Lacan',
    year: 1949,
    category: 'psychoanalytic',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['freud-psychoanalysis', 'structural-linguistics'],
    culturalContext: 'Psicoanálisis estructuralista francés',
    language: 'es'
  },
  
  description: `Jacques Lacan revolucionó la teoría psicoanalítica del cine con sus conceptos del "estadio del espejo" y la distinción entre el ojo y la mirada. El estadio del espejo describe cómo el infante forma su ego a través de la identificación con su imagen reflejada, creando una alienación fundamental entre el yo real fragmentado y la imagen ideal unificada. Lacan aplicó esto al cine, donde el espectador se identifica con imágenes idealizadas en la pantalla. Su concepto de "la mirada" (le regard) va más allá del simple acto de ver: es el sentimiento de ser observado por el Otro, creando ansiedad y deseo. La cámara funciona como esta mirada del Otro que estructura la subjetividad del espectador.`,
  
  keyConcepts: [
    {
      term: 'Estadio del Espejo',
      definition: 'Formación del ego mediante identificación con imagen especular idealizada',
      importance: 'fundamental',
      relatedTerms: ['identificación imaginaria', 'ego ideal']
    },
    {
      term: 'La Mirada (Le Regard)',
      definition: 'Sensación de ser observado por el Otro, no simple acto de ver',
      importance: 'fundamental',
      relatedTerms: ['objeto a', 'ansiedad escópica']
    },
    {
      term: 'Real/Simbólico/Imaginario',
      definition: 'Tres registros psíquicos que estructuran la experiencia',
      importance: 'fundamental',
      relatedTerms: ['RSI', 'registros lacanianos']
    },
    {
      term: 'Sujeto Escindido',
      definition: 'División fundamental del ser entre yo consciente e inconsciente',
      importance: 'important',
      relatedTerms: ['sujeto barrado', 'división subjetiva']
    },
    {
      term: 'Objeto a',
      definition: 'Objeto causa del deseo, siempre elusivo e inalcanzable',
      importance: 'important',
      relatedTerms: ['plus de goce', 'objeto perdido']
    },
    {
      term: 'El Gran Otro',
      definition: 'Orden simbólico del lenguaje, ley y cultura',
      importance: 'important',
      relatedTerms: ['Otro', 'orden simbólico']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de procesos especulares',
      description: 'Analizar cómo el film construye identificaciones imaginarias',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de identificación con imágenes idealizadas',
        'Analizar el uso de espejos literales y metafóricos',
        'Considerar cómo la pantalla funciona como espejo'
      ],
      commonMistakes: [
        'Confundir identificación imaginaria con empatía simple',
        'Ignorar la alienación inherente en la identificación'
      ]
    },
    {
      order: 2,
      name: 'Análisis de la mirada',
      description: 'Examinar la economía de miradas y el sentirse observado',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Distinguir entre quien mira y quien es mirado',
        'Buscar momentos de ansiedad por ser observado',
        'La cámara como manifestación de la mirada del Otro'
      ]
    },
    {
      order: 3,
      name: 'Mapeo de registros RSI',
      description: 'Identificar elementos Reales, Simbólicos e Imaginarios',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Real: lo traumático, imposible de simbolizar',
        'Simbólico: lenguaje, ley, estructura social',
        'Imaginario: identificaciones, imágenes del yo'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda del objeto a',
      description: 'Identificar qué funciona como objeto causa del deseo',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'El objeto a es lo que impulsa la búsqueda',
        'Siempre elusivo, nunca plenamente obtenible',
        'Puede ser mirada, voz, o objeto parcial'
      ]
    },
    {
      order: 5,
      name: 'Análisis del sujeto escindido',
      description: 'Examinar la división del protagonista',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación del Gran Otro',
      description: 'Identificar cómo opera la ley simbólica en el film',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Sofisticación teórica excepcional',
    'Explica complejidad del ver y ser visto en cine',
    'Útil para cine moderno y posmoderno',
    'Integra lenguaje y psicoanálisis',
    'Aborda cuestiones profundas de identidad',
    'Influyente en teoría feminista del cine'
  ],
  
  limitations: [
    'Extremadamente complejo y abstracto',
    'Jerga técnica puede ser intimidante',
    'Difícil aplicación práctica sin formación',
    'Culturalmente específico al contexto francés',
    'Resistente a verificación empírica',
    'Puede oscurecer más que iluminar'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jacques Lacan'],
      title: 'Écrits: A Selection',
      year: 1977,
      publisher: 'W.W. Norton',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jacques Lacan'],
      title: 'The Four Fundamental Concepts of Psychoanalysis',
      year: 1978,
      publisher: 'W.W. Norton',
      essential: true
    },
    {
      type: 'book',
      authors: ['Todd McGowan', 'Sheila Kunkle'],
      title: 'Lacan and Contemporary Film',
      year: 2004,
      publisher: 'Other Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Slavoj Žižek'],
      title: 'Everything You Always Wanted to Know About Lacan But Were Afraid to Ask Hitchcock',
      year: 1992,
      publisher: 'Verso',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock'
      },
      analysisExcerpt: `Rear Window es el film lacaniano por excelencia sobre la mirada. Jeff encarna el sujeto atrapado en la pulsión escópica, pero el film revela que él también es objeto de la mirada. La ventana funciona como pantalla/espejo donde Jeff proyecta sus fantasías. El momento crucial lacaniano: cuando Thorwald mira directamente a cámara/Jeff, el observador se vuelve observado, causando ansiedad extrema. Lisa representa el objeto a, inicialmente rechazada por demasiado perfecta, solo deseada cuando está en peligro (falta). El Gran Otro está representado por la ley (Doyle) que Jeff constantemente evade.`,
      insightsGenerated: [
        'La mirada que estructura el placer también genera ansiedad',
        'El voyeur teme ser descubierto porque revela su falta',
        'El deseo se activa por la amenaza de pérdida del objeto'
      ],
      methodologyApplication: 'Análisis de la economía de miradas y la reversibilidad observador/observado',
      keyFindings: [
        'Hitchcock intuye la distinción lacaniana entre ojo y mirada',
        'La pantalla cinematográfica funciona como espejo alienante',
        'El placer escópico siempre conlleva ansiedad de castración'
      ]
    },
    {
      film: {
        title: 'Mulholland Drive',
        year: 2001,
        director: 'David Lynch'
      },
      analysisExcerpt: `Lynch presenta la desintegración del imaginario lacaniano. Primera parte: Diane/Betty vive en registro imaginario, identificación especular con su ideal de Hollywood. La caja azul marca la intrusión de lo Real traumático. Segunda parte: colapso del imaginario, emergencia de lo Real. Rita/Camilla como objeto a inalcanzable. El Club Silencio revela que todo es grabación (orden simbólico sin garantía). "No hay banda" = no hay Otro del Otro. Los personajes cambiantes muestran la naturaleza inestable de la identificación imaginaria. Hollywood como máquina del imaginario que produce y destruye egos.`,
      insightsGenerated: [
        'El imaginario es frágil y puede colapsar ante lo Real',
        'Hollywood funciona como fábrica de identificaciones especulares',
        'No hay garantía última del orden simbólico'
      ],
      methodologyApplication: 'Exploración del colapso de los tres registros lacanianos',
      keyFindings: [
        'Lynch cinematiza la topología lacaniana',
        'Los sueños revelan la fragilidad del ego especular',
        'Lo Real retorna para destruir las identificaciones imaginarias'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'freud-psychoanalysis',
      relationshipType: 'complementary',
      synergyDescription: 'Lacan relee a Freud a través del estructuralismo lingüístico',
      combinedInsightPotential: 9
    },
    {
      id: 'metz-imaginary-signifier',
      relationshipType: 'complementary',
      synergyDescription: 'Metz aplica conceptos lacanianos específicamente al cine',
      combinedInsightPotential: 9
    },
    {
      id: 'zizek-contemporary',
      relationshipType: 'complementary',
      synergyDescription: 'Žižek populariza y expande Lacan en análisis cinematográfico',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Lacanian Film Analysis Toolkit',
      type: 'webapp',
      description: 'Recursos para aplicar conceptos lacanianos al cine',
      cost: 'free',
      platforms: ['web']
    },
    {
      name: 'Gaze Theory Visualizer',
      type: 'software',
      description: 'Herramienta para mapear estructuras de mirada en films',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    }
  ]
};
