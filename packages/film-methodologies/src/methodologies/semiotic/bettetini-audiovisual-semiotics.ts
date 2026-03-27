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

export const BETTETINI_AUDIOVISUAL_SEMIOTICS: Methodology = {
  metadata: {
    id: 'bettetini-audiovisual-semiotics',
    name: 'Semiótica Audiovisual',
    author: 'Gianfranco Bettetini',
    year: 1975,
    category: 'semiotic',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['general-semiotics', 'film-sound'],
    culturalContext: 'Semiótica mediática italiana',
    language: 'es'
  },
  
  description: `Gianfranco Bettetini desarrolló una semiótica específicamente audiovisual que analiza la integración de imagen y sonido como sistema significante unificado. Su trabajo estableció que el audiovisual no es simplemente imagen más sonido, sino un lenguaje sintético con propiedades emergentes. Bettetini exploró la "conversación audiovisual" - cómo el texto fílmico simula un diálogo con el espectador a través de estrategias enunciativas. Su concepto de "prótesis simbólica" examina cómo las tecnologías audiovisuales extienden las capacidades perceptivas y comunicativas humanas. Analizó la temporalidad específica del audiovisual y su "producción de presencia". Su trabajo anticipó desarrollos en medios digitales e interactividad.`,
  
  keyConcepts: [
    {
      term: 'Conversación Audiovisual',
      definition: 'Simulacro de diálogo entre texto fílmico y espectador',
      importance: 'fundamental',
      relatedTerms: ['diálogo', 'interacción', 'simulacro']
    },
    {
      term: 'Prótesis Simbólica',
      definition: 'Tecnologías audiovisuales como extensiones de capacidades perceptivas humanas',
      importance: 'fundamental',
      relatedTerms: ['tecnología', 'extensión', 'mediación']
    },
    {
      term: 'Sincretismo Semiótico',
      definition: 'Fusión de códigos visuales y sonoros en unidad significante nueva',
      importance: 'fundamental',
      relatedTerms: ['fusión', 'síntesis', 'integración']
    },
    {
      term: 'Temporalidad Audiovisual',
      definition: 'Tiempo específico del medio, diferente del real y del narrativo',
      importance: 'important',
      relatedTerms: ['tiempo', 'duración', 'ritmo']
    },
    {
      term: 'Producción de Presencia',
      definition: 'Capacidad del audiovisual de crear efectos de realidad y presencia',
      importance: 'important',
      relatedTerms: ['presencia', 'efecto de real', 'inmediatez']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis del sincretismo',
      description: 'Examinar la fusión de imagen y sonido',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'No separar imagen de sonido analíticamente',
        'Buscar emergencias significantes de la fusión',
        'Identificar momentos de contrapunto o redundancia'
      ],
      commonMistakes: [
        'Analizar imagen y sonido por separado',
        'Ignorar el silencio como elemento significante'
      ]
    },
    {
      order: 2,
      name: 'Identificación de estrategias conversacionales',
      description: 'Localizar cómo el film simula diálogo con espectador',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar interpelaciones directas o indirectas',
        'Identificar preguntas retóricas visuales/sonoras',
        'Notar pausas que esperan "respuesta"'
      ]
    },
    {
      order: 3,
      name: 'Examen de prótesis simbólicas',
      description: 'Analizar extensiones perceptivas que ofrece el film',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar capacidades perceptivas aumentadas',
        'Examinar nuevas formas de ver/oír'
      ]
    },
    {
      order: 4,
      name: 'Análisis de temporalidad',
      description: 'Estudiar el tiempo específicamente audiovisual',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Evaluación de producción de presencia',
      description: 'Examinar cómo se generan efectos de realidad',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis semio-pragmático',
      description: 'Estudiar el uso contextual de signos audiovisuales',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Especificidad del análisis audiovisual integrado',
    'Anticipación de desarrollos digitales e interactivos',
    'Atención a la dimensión tecnológica',
    'Valoración del sonido como co-constructor de sentido',
    'Marco teórico original y productivo',
    'Aplicabilidad a nuevos medios'
  ],
  
  limitations: [
    'Menor difusión internacional',
    'Complejidad conceptual alta',
    'Traducciones limitadas del italiano',
    'A veces excesivamente técnico',
    'Requiere conocimiento de tecnología audiovisual'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Gianfranco Bettetini'],
      title: 'La conversazione audiovisiva',
      year: 1984,
      publisher: 'Bompiani',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gianfranco Bettetini'],
      title: 'Tempo del senso: La logica temporale dei testi audiovisivi',
      year: 1979,
      publisher: 'Bompiani',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gianfranco Bettetini'],
      title: 'L\'audiovisivo: Dal cinema ai nuovi media',
      year: 1996,
      publisher: 'Bompiani',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gianfranco Bettetini', 'Fausto Colombo'],
      title: 'Le nuove tecnologie della comunicazione',
      year: 1993,
      publisher: 'Bompiani',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Conversation',
        year: 1974,
        director: 'Francis Ford Coppola'
      },
      analysisExcerpt: `The Conversation tematiza la prótesis simbólica del audio. Harry Caul extiende su oído mediante tecnología de vigilancia - literalización de la prótesis auditiva. El sincretismo se problematiza: imagen y sonido se desincronizan, el sonido revela lo que la imagen oculta. La conversación del título es múltiple: la grabada, la del film con espectador, la tecnológica. Temporalidad en capas: tiempo de grabación, de escucha, de reinterpretación. La producción de presencia se invierte: lo más mediado tecnológicamente se vuelve lo más real/amenazante.`,
      insightsGenerated: [
        'La tecnología de vigilancia literaliza la prótesis simbólica',
        'El sincretismo audiovisual puede deconstruirse productivamente',
        'La conversación audiovisual puede ser meta-conversación'
      ],
      methodologyApplication: 'Análisis de la prótesis tecnológica como tema y forma',
      keyFindings: [
        'Coppola anticipa ansiedades sobre mediación tecnológica',
        'El sonido puede dominar la construcción de realidad',
        'La prótesis simbólica tiene dimensiones éticas'
      ]
    },
    {
      film: {
        title: 'Gravity',
        year: 2013,
        director: 'Alfonso Cuarón'
      },
      analysisExcerpt: `Gravity explota el sincretismo audiovisual para crear presencia espacial imposible. La prótesis simbólica nos da experiencia perceptiva del espacio: ingravidez, vacío, vértigo. Conversación audiovisual mediante respiración: único sonido diegético en el vacío, crea intimidad extrema. Temporalidad de supervivencia: 90 minutos = tiempo real = órbita terrestre. El sincretismo crucial: silencio del espacio vs. música, sonido subjetivo vs. objetivo. Producción de presencia mediante ausencia: el vacío se vuelve palpable.`,
      insightsGenerated: [
        'El 3D y sonido envolvente crean nueva prótesis simbólica',
        'La ausencia (de sonido, gravedad) produce presencia',
        'El sincretismo puede crear experiencias imposibles'
      ],
      methodologyApplication: 'Análisis de nuevas tecnologías como extensiones perceptivas',
      keyFindings: [
        'Las nuevas tecnologías crean nuevas prótesis simbólicas',
        'El sincretismo audiovisual evoluciona con la tecnología',
        'La producción de presencia trasciende el realismo'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'chion-audiovision',
      relationshipType: 'parallel',
      synergyDescription: 'Chion desarrolla análisis audiovisual similar pero más centrado en el sonido',
      combinedInsightPotential: 9
    },
    {
      id: 'mcluhan-media',
      relationshipType: 'complementary',
      synergyDescription: 'McLuhan teoriza extensiones mediáticas que Bettetini analiza semióticamente',
      combinedInsightPotential: 8
    },
    {
      id: 'manovich-new-media',
      relationshipType: 'synthetic',
      synergyDescription: 'Manovich extiende ideas de Bettetini a medios digitales',
      combinedInsightPotential: 8
    }
  ]
};
