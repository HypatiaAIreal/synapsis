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

export const HASSON_NEUROCINEMATICS: Methodology = {
  metadata: {
    id: 'hasson-neurocinematics',
    name: 'Neurocinemática',
    author: 'Uri Hasson',
    year: 2008,
    category: 'cognitive',
    complexity: 'advanced',
    timeToLearn: 50,
    prerequisities: ['neuroscience', 'research-methods', 'statistics'],
    culturalContext: 'Neurociencia cognitiva del cine',
    language: 'es'
  },
  
  description: `Uri Hasson fundó la "neurocinemática" - el estudio neurocientífico de cómo el cerebro responde al cine mediante técnicas como fMRI (resonancia magnética funcional). Su investigación reveló que ciertos films producen "inter-subject correlation" (ISC) alta - los cerebros de diferentes espectadores se sincronizan notablemente. Hasson descubrió que films de Hitchcock producen ISC mucho mayor que tomas no editadas, sugiriendo que el montaje cinematográfico efectivamente "controla" cerebros. Su trabajo identifica redes cerebrales específicas activadas por diferentes aspectos fílmicos: áreas visuales para movimiento, regiones auditivas para sonido, y crucialmente, áreas de teoría de la mente para comprensión de personajes.`,
  
  keyConcepts: [
    {
      term: 'Inter-Subject Correlation (ISC)',
      definition: 'Sincronización de actividad cerebral entre diferentes espectadores',
      importance: 'fundamental',
      relatedTerms: ['sincronía neural', 'correlación']
    },
    {
      term: 'Neural Entrainment',
      definition: 'Sincronización de ritmos cerebrales con ritmos fílmicos',
      importance: 'fundamental',
      relatedTerms: ['acoplamiento', 'ritmo neural']
    },
    {
      term: 'Brain-to-Brain Coupling',
      definition: 'Acoplamiento neural entre cerebros via experiencia fílmica compartida',
      importance: 'important',
      relatedTerms: ['sincronía intersubjetiva', 'acoplamiento']
    },
    {
      term: 'Theory of Mind Networks',
      definition: 'Regiones cerebrales para comprender mentes de otros',
      importance: 'important',
      relatedTerms: ['mentalización', 'comprensión social']
    },
    {
      term: 'Reverse Correlation',
      definition: 'Predecir contenido fílmico desde respuestas cerebrales',
      importance: 'important',
      relatedTerms: ['decodificación', 'predicción inversa']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Medir ISC',
      description: 'Evaluar correlación entre cerebros de espectadores',
      timeEstimate: 180,
      difficulty: 'advanced',
      tips: [
        'Requiere múltiples sujetos y fMRI',
        'Comparar con baseline de reposo',
        'Analizar por regiones cerebrales'
      ],
      commonMistakes: [
        'Muestra muy pequeña',
        'No controlar variables demográficas'
      ]
    },
    {
      order: 2,
      name: 'Identificar neural entrainment',
      description: 'Detectar sincronización de ritmos cerebrales',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Usar análisis de frecuencia',
        'Correlacionar con ritmos fílmicos',
        'Buscar en regiones sensoriales y atencionales'
      ]
    },
    {
      order: 3,
      name: 'Mapear activación de redes',
      description: 'Identificar qué redes cerebrales responden',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Usar atlas cerebrales estándar',
        'Distinguir redes funcionales',
        'Correlacionar con contenido fílmico'
      ]
    },
    {
      order: 4,
      name: 'Analizar theory of mind',
      description: 'Examinar activación en comprensión de personajes',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Estudiar predictive coding',
      description: 'Analizar anticipación neural',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluar control cinematográfico',
      description: 'Determinar grado de control sobre respuestas',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Base neurocientífica objetiva y medible',
    'Revela mecanismos cerebrales de experiencia fílmica',
    'Valida empíricamente teorías cognitivas',
    'Potencial para aplicaciones clínicas y educativas',
    'Método verdaderamente interdisciplinario'
  ],
  
  limitations: [
    'Extremadamente costoso y complejo',
    'Condiciones artificiales de visionado (fMRI)',
    'Riesgo de reduccionismo neural',
    'Cuestiones éticas sobre "control mental"',
    'Sesgo hacia efectos medibles y universales'
  ],
  
  bibliography: [
    {
      type: 'article',
      authors: ['Uri Hasson', 'Ohad Landesman', 'Barbara Knappmeyer', 'Ignacio Vallines', 'Nava Rubin', 'David J. Heeger'],
      title: 'Neurocinematics: The Neuroscience of Film',
      year: 2008,
      journal: 'Projections',      
      pages: '1-26',
      essential: true
    },
    {
      type: 'article',
      authors: ['Uri Hasson', 'Yuval Nir', 'Ifat Levy', 'Galit Fuhrmann', 'Rafael Malach'],
      title: 'Intersubject synchronization of cortical activity during natural vision',
      year: 2004,
      journal: 'Science',      
      pages: '1634-1640',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jeffrey M. Zacks'],
      title: 'Flicker: Your Brain on Movies',
      year: 2015,
      publisher: 'Oxford University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Good, the Bad and the Ugly',
        year: 1966,
        director: 'Sergio Leone'
      },
      analysisExcerpt: `El duelo final muestra ISC extraordinario: hasta 45% de correlación en corteza visual, auditiva y áreas atencionales. El neural entrainment con la música de Morricone es medible en corteza auditiva. Theory of mind networks hiperactivadas mientras espectadores predicen quién disparará. El montaje de Leone literalmente sincroniza cerebros: todos los espectadores miran los mismos puntos en los mismos momentos. La dilatación temporal subjetiva correlaciona con actividad en ínsula y corteza cingulada anterior.`,
      insightsGenerated: [
        'Leone logra control neural casi total en secuencias clave',
        'La música puede sincronizar cerebros tanto como imágenes',
        'La anticipación activa redes predictivas medibles'
      ],
      methodologyApplication: 'Medición de ISC y neural entrainment en suspense',
      keyFindings: [
        'El montaje clásico maximiza sincronización neural',
        'Los grandes directores son "neurocoreógrafos"',
        'El suspense tiene firma neural específica'
      ]
    },
    {
      film: {
        title: 'Mulholland Drive',
        year: 2001,
        director: 'David Lynch'
      },
      analysisExcerpt: `Mulholland Drive muestra ISC variable: alto en escenas individuales pero bajo en estructura global. Diferentes espectadores muestran patrones de activación divergentes en áreas de integración narrativa. Theory of mind networks muestran activación errática, reflejando ambigüedad de identidades. Áreas de detección de anomalías (corteza cingulada anterior) constantemente activas. La escena del Club Silencio produce ISC alto en áreas emocionales a pesar de confusión cognitiva.`,
      insightsGenerated: [
        'Lynch controla respuesta emocional pero no cognitiva',
        'La ambigüedad narrativa produce patrones neurales diversos',
        'Es posible sincronía emocional sin sincronía cognitiva'
      ],
      methodologyApplication: 'Análisis de ISC variable y activación diferencial',
      keyFindings: [
        'No todo cine busca maximizar ISC',
        'La diversidad neural puede ser objetivo estético',
        'Las emociones se sincronizan más fácilmente que cogniciones'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'grodal-embodied',
      relationshipType: 'complementary',
      synergyDescription: 'Grodal teoriza lo que Hasson mide empíricamente',
      combinedInsightPotential: 9
    },
    {
      id: 'cognitive-film-theory',
      relationshipType: 'complementary',
      synergyDescription: 'La neurocinemática valida empíricamente teorías cognitivas',
      combinedInsightPotential: 9
    },
    {
      id: 'psychophysical-methods',
      relationshipType: 'complementary',
      synergyDescription: 'Métodos psicofísicos complementan medidas neurales',
      combinedInsightPotential: 8
    }
  ]
};
