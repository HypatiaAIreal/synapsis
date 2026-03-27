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

export const NEUROCINEMA: Methodology = {
  metadata: {
    id: 'neurocinema',
    name: 'Neurocinemática - Neurociencia del Cine',
    author: 'Uri Hasson y otros',
    year: 2008,
    category: 'contemporary-experimental',
    complexity: 'advanced',
    timeToLearn: 60,
    prerequisities: ['neuroscience-basics', 'film-theory'],
    culturalContext: 'Neurociencia cognitiva aplicada',
    language: 'es'
  },
  
  description: `La neurocinemática, término acuñado por Uri Hasson, estudia cómo el cerebro procesa y responde a estímulos cinematográficos mediante técnicas de neuroimagen como fMRI, EEG y eye-tracking. Esta disciplina revela que ciertos films producen sincronización neural entre espectadores - los cerebros responden de manera similar en momentos específicos - mientras otros generan respuestas más idiosincráticas. La investigación muestra cómo diferentes estilos cinematográficos activan distintas redes cerebrales. Los estudios sobre "transportation" narrativa mapean los correlatos neurales de la inmersión, mientras que la investigación sobre empatía cinematográfica revela la activación de neuronas espejo. Esta aproximación no busca reducir la experiencia estética a procesos neurales sino entender las bases biológicas de nuestra respuesta al cine.`,
  
  keyConcepts: [
    {
      term: 'Inter-Subject Correlation (ISC)',
      definition: 'Grado de sincronización de actividad cerebral entre diferentes espectadores viendo el mismo film',
      importance: 'fundamental',
      relatedTerms: ['sincronización neural', 'respuesta compartida']
    },
    {
      term: 'Neural Synchrony',
      definition: 'Activación cerebral coordinada temporal y espacialmente entre espectadores',
      importance: 'fundamental',
      relatedTerms: ['coherencia neural', 'acoplamiento']
    },
    {
      term: 'Mirror Neuron System',
      definition: 'Sistema neural que se activa tanto al realizar como al observar acciones',
      importance: 'important',
      relatedTerms: ['empatía cinematográfica', 'simulación corporeizada']
    },
    {
      term: 'Narrative Transportation',
      definition: 'Estado de inmersión narrativa con correlatos neurales específicos',
      importance: 'important',
      relatedTerms: ['inmersión', 'engagement neural']
    },
    {
      term: 'Predictive Coding',
      definition: 'Proceso cerebral de anticipación constante de eventos narrativos',
      importance: 'important',
      relatedTerms: ['anticipación neural', 'procesamiento predictivo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Selección de estímulos cinematográficos',
      description: 'Elegir clips o films completos apropiados para escaneo cerebral',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Clips de 5-20 minutos son ideales para fMRI',
        'Considerar diferentes géneros y estilos de montaje',
        'Incluir controles (pantalla negra, imágenes estáticas)'
      ],
      commonMistakes: [
        'Clips demasiado largos para mantener quietud en scanner',
        'Estímulos con demasiadas variables confundentes'
      ]
    },
    {
      order: 2,
      name: 'Diseño experimental',
      description: 'Establecer protocolo de presentación y medición',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Incluir medidas conductuales además de neurales',
        'Considerar orden de presentación y efectos de práctica',
        'Planificar análisis estadístico desde el diseño'
      ]
    },
    {
      order: 3,
      name: 'Reclutamiento y screening',
      description: 'Seleccionar participantes apropiados para neuroimagen',
      timeEstimate: 240,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Adquisición de datos',
      description: 'Registro de actividad cerebral durante visionado',
      timeEstimate: 480,
      difficulty: 'advanced',
      tips: [
        'Monitorear movimiento de cabeza constantemente',
        'Sincronizar perfectamente estímulo con registro neural'
      ]
    },
    {
      order: 5,
      name: 'Procesamiento de señales',
      description: 'Limpieza y preparación de datos neurales',
      timeEstimate: 240,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis ISC y mapping',
      description: 'Calcular correlaciones inter-sujeto y mapear activaciones',
      timeEstimate: 480,
      difficulty: 'advanced'
    },
    {
      order: 7,
      name: 'Interpretación neurocognitiva',
      description: 'Relacionar patrones neurales con procesos cognitivos y estéticos',
      timeEstimate: 240,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Base empírica objetiva para teorías sobre recepción cinematográfica',
    'Revela procesos inconscientes de procesamiento fílmico',
    'Permite comparar efectividad de diferentes técnicas cinematográficas',
    'Conecta ciencia y arte de manera innovadora',
    'Aplicaciones potenciales en diseño de experiencias cinematográficas'
  ],
  
  limitations: [
    'Condiciones artificiales de visionado en laboratorio',
    'Extremadamente costoso y requiere infraestructura especializada',
    'Riesgo de reduccionismo biológico de experiencias complejas',
    'Muestras pequeñas típicamente (20-40 participantes)',
    'Dificultad para estudiar films completos por limitaciones técnicas'
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
      type: 'book',
      authors: ['Arthur P. Shimamura'],
      title: 'Psychocinematics: Exploring Cognition at the Movies',
      year: 2013,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Vittorio Gallese', 'Michele Guerra'],
      title: 'The Empathic Screen: Cinema and Neuroscience',
      year: 2019,
      publisher: 'Oxford University Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Good, The Bad and The Ugly - Duelo final',
        year: 1966,
        director: 'Sergio Leone'
      },
      analysisExcerpt: `Estudio neurocnemático del duelo final revela extraordinaria sincronización neural. ISC alcanza 0.7 (muy alto) durante el montaje de miradas. fMRI muestra activación intensa en: corteza visual (procesamiento de miradas), amígdala (tensión emocional), corteza motora (preparación para acción), ínsula (anticipación). Eye-tracking revela patrón casi idéntico de movimientos oculares entre sujetos. La música de Morricone sincroniza ritmos cerebrales en banda gamma. El montaje rítmico produce "neural entrainment" medible.`,
      insightsGenerated: [
        'El montaje de Leone logra control casi total de atención neural',
        'La combinación música-imagen produce sincronización multi-modal',
        'La dilatación temporal subjetiva tiene correlatos neurales específicos'
      ],
      methodologyApplication: 'fMRI, EEG y eye-tracking simultáneos durante visionado',
      keyFindings: [
        'Maestría cinematográfica produce alta sincronización neural',
        'El suspense tiene firma neural específica y medible',
        'La música amplifica significativamente la respuesta neural a imágenes'
      ]
    },
    {
      film: {
        title: 'Inception - Escenas de sueños',
        year: 2010,
        director: 'Christopher Nolan'
      },
      analysisExcerpt: `Análisis neurocnemático de transiciones sueño/realidad en Inception. Durante transiciones ambiguas, aumento de actividad en Default Mode Network (red de modo predeterminado) asociada con introspección. Corteza prefrontal dorsolateral hiperactiva (monitoreo de realidad). Hipocampo muestra patrones inusuales durante arquitectura imposible. ISC disminuye en escenas ambiguas (respuestas más individuales) pero aumenta en momentos de revelación. Pupilometría muestra dilatación máxima en momentos de incertidumbre ontológica.`,
      insightsGenerated: [
        'La ambigüedad realidad/sueño activa sistemas de monitoreo de realidad',
        'Arquitectura imposible produce conflicto en procesamiento espacial',
        'Nolan manipula deliberadamente certeza/incertidumbre neural'
      ],
      methodologyApplication: 'fMRI de alta resolución con análisis de redes cerebrales',
      keyFindings: [
        'El cine puede inducir estados cerebrales similares a la confusión onírica',
        'La incertidumbre narrativa tiene correlatos neurales distintos',
        'Diferentes espectadores procesan ambigüedad de formas neuralmente distintas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'cognitive-film-theory',
      relationshipType: 'complementary',
      synergyDescription: 'La teoría cognitiva proporciona marco conceptual que la neurocinemática valida empíricamente',
      combinedInsightPotential: 9
    },
    {
      id: 'psychophysical-aesthetics',
      relationshipType: 'complementary',
      synergyDescription: 'Combina medidas neurales con respuestas psicofísicas para comprensión completa',
      combinedInsightPotential: 8
    },
    {
      id: 'embodied-cognition',
      relationshipType: 'complementary',
      synergyDescription: 'La cognición corporeizada explica activación de sistemas motores durante visionado',
      combinedInsightPotential: 9
    }
  ],

  digitalTools: [
    {
      name: 'PsychoPy',
      type: 'software',
      url: 'https://www.psychopy.org',
      description: 'Software para diseño de experimentos neurocnemáticos',
      cost: 'free',
      platforms: ['Windows', 'Mac', 'Linux']
    },
    {
      name: 'EEGLAB',
      type: 'software',
      url: 'https://sccn.ucsd.edu/eeglab',
      description: 'Toolbox de MATLAB para análisis de EEG',
      cost: 'free',
      platforms: ['Windows', 'Mac', 'Linux']
    },
    {
      name: 'SPM12',
      type: 'software',
      url: 'https://www.fil.ion.ucl.ac.uk/spm',
      description: 'Software para análisis de datos de fMRI',
      cost: 'free',
      platforms: ['Windows', 'Mac', 'Linux']
    }
  ]
};
