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

export const CHATMAN_STORY_DISCOURSE: Methodology = {
  metadata: {
    id: 'chatman-story-discourse',
    name: 'Historia vs. Discurso',
    author: 'Seymour Chatman',
    year: 1978,
    category: 'structural-narratological',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['genette-narratology'],
    culturalContext: 'Narratología cinematográfica americana',
    language: 'es'
  },
  
  description: `Seymour Chatman sintetizó y expandió las teorías narratológicas previas, estableciendo una distinción fundamental entre "historia" (el qué) y "discurso" (el cómo) aplicable tanto a la literatura como al cine. Su modelo distingue entre eventos (acciones y sucesos) y existentes (personajes y escenarios) en el nivel de la historia, y su manifestación específica en el nivel del discurso. Chatman fue pionero en adaptar conceptos narratológicos al medio cinematográfico, reconociendo las peculiaridades del cine como sistema narrativo que combina múltiples canales (visual, auditivo, verbal). Su análisis de la "cámara narrativa" como análogo del narrador literario, y su exploración de cómo el cine presenta la subjetividad y el punto de vista, son contribuciones fundamentales.`,
  
  keyConcepts: [
    {
      term: 'Historia/Discurso',
      definition: 'Contenido narrativo (eventos + existentes) / Expresión narrativa (cómo se presenta)',
      importance: 'fundamental',
      relatedTerms: ['contenido', 'forma', 'expresión']
    },
    {
      term: 'Eventos',
      definition: 'Acciones (realizadas por agentes) y Sucesos (experimentados por pacientes)',
      importance: 'fundamental',
      relatedTerms: ['acción', 'acontecimiento', 'cambio']
    },
    {
      term: 'Existentes',
      definition: 'Personajes (agentes narrativos) y Escenarios (espacios narrativos)',
      importance: 'fundamental',
      relatedTerms: ['personaje', 'espacio', 'ambiente']
    },
    {
      term: 'Filtro/Slant',
      definition: 'Perspectiva perceptual (quién percibe) / Perspectiva conceptual (actitud narrativa)',
      importance: 'important',
      relatedTerms: ['punto de vista', 'perspectiva', 'focalización']
    },
    {
      term: 'Cámara Narrativa',
      definition: 'La instancia narrativa cinematográfica que selecciona y presenta información',
      importance: 'important',
      relatedTerms: ['narrador cinematográfico', 'enunciación fílmica']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Separación historia/discurso',
      description: 'Distinguir el contenido narrativo de su presentación cinematográfica',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Reconstruir mentalmente los eventos en orden cronológico',
        'Identificar qué información se presenta y cuál se omite',
        'Notar las decisiones de presentación (ángulos, montaje, sonido)'
      ],
      commonMistakes: [
        'Confundir estilo visual con historia',
        'Ignorar la selección de información como parte del discurso'
      ]
    },
    {
      order: 2,
      name: 'Catalogación de eventos',
      description: 'Clasificar eventos como acciones (agentivas) o sucesos (no agentivas)',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Las acciones implican voluntad y agencia',
        'Los sucesos le ocurren a los personajes',
        'Un mismo evento puede ser acción para uno y suceso para otro'
      ]
    },
    {
      order: 3,
      name: 'Análisis de existentes',
      description: 'Examinar cómo se construyen personajes y espacios',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Considerar caracterización directa e indirecta',
        'Analizar la función narrativa de los espacios'
      ]
    },
    {
      order: 4,
      name: 'Examen del discurso cinematográfico',
      description: 'Analizar las técnicas específicas de presentación',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Considerar todos los canales: visual, auditivo, verbal',
        'Examinar cómo el montaje estructura el discurso',
        'Identificar la "voz" de la cámara narrativa'
      ]
    },
    {
      order: 5,
      name: 'Análisis de perspectiva',
      description: 'Distinguir entre filtro perceptual y slant conceptual',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Estudio de la narración cinematográfica',
      description: 'Examinar cómo opera la instancia narrativa fílmica',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Puente efectivo entre narratología literaria y cinematográfica',
    'Vocabulario preciso adaptado al medio fílmico',
    'Considera las especificidades del lenguaje cinematográfico',
    'Útil para análisis comparativo cine-literatura',
    'Integra elementos formales y narrativos'
  ],
  
  limitations: [
    'A veces demasiado dependiente de modelos literarios',
    'Dificultad con cine experimental o no narrativo',
    'Menos atención a aspectos afectivos y sensoriales',
    'Complejidad terminológica puede ser barrera'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Seymour Chatman'],
      title: 'Story and Discourse: Narrative Structure in Fiction and Film',
      year: 1978,
      publisher: 'Cornell University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Seymour Chatman'],
      title: 'Coming to Terms: The Rhetoric of Narrative in Fiction and Film',
      year: 1990,
      publisher: 'Cornell University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Seymour Chatman'],
      title: 'What Novels Can Do That Films Can\'t (and Vice Versa)',
      year: 1981,
      journal: 'Critical Inquiry',     
       pages: '121-140',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Rashomon',
        year: 1950,
        director: 'Akira Kurosawa'
      },
      analysisExcerpt: `Rashomon separa magistralmente historia de discurso. Historia: Un crimen (violación y posible asesinato) en el bosque. Discurso: Cuatro versiones contradictorias del mismo evento, cada una filtrada por diferentes narradores-testigos. Los eventos básicos permanecen constantes (encuentro, lucha, muerte) pero el discurso los transforma radicalmente. La cámara narrativa adopta el filtro perceptual de cada narrador pero mantiene su propio slant escéptico. El film demuestra que no hay acceso directo a la "historia" sino solo a través de discursos particulares.`,
      insightsGenerated: [
        'La multiplicidad de discursos cuestiona la existencia de una historia única',
        'Cada filtro perceptual transforma los eventos en su discurso',
        'La cámara narrativa nunca privilegia una versión sobre otra'
      ],
      methodologyApplication: 'Análisis de cómo múltiples discursos construyen/deconstruyen una historia',
      keyFindings: [
        'El discurso no es mero vehículo sino constructor de realidad',
        'La verdad narrativa es inaccesible sin mediación discursiva',
        'El cine puede presentar la relatividad de toda narración'
      ]
    },
    {
      film: {
        title: 'Fight Club',
        year: 1999,
        director: 'David Fincher'
      },
      analysisExcerpt: `Fight Club manipula brillantemente la distinción historia/discurso. El discurso (narración en primera persona, presentación visual) oculta sistemáticamente elementos cruciales de la historia (la verdadera identidad de Tyler). Filtro: Percepción no confiable del narrador. Slant: Ironía que solo se revela retroactivamente. La cámara narrativa es cómplice del engaño, mostrando a Tyler como personaje separado. Los existentes (Narrador/Tyler) son uno en la historia pero dos en el discurso hasta la revelación.`,
      insightsGenerated: [
        'El discurso puede ocultar activamente elementos de la historia',
        'La cámara narrativa puede ser tan no confiable como un narrador verbal',
        'La reinterpretación retroactiva revela la manipulación discursiva'
      ],
      methodologyApplication: 'Análisis de narración no confiable en el discurso cinematográfico',
      keyFindings: [
        'El cine puede crear narradores no confiables visualmente',
        'El discurso cinematográfico puede contradecir la historia',
        'La revelación transforma retroactivamente todo el discurso previo'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'genette-narratology',
      relationshipType: 'complementary',
      synergyDescription: 'Chatman adapta y simplifica conceptos de Genette para el cine',
      combinedInsightPotential: 9
    },
    {
      id: 'bordwell-narration',
      relationshipType: 'dialectical',
      synergyDescription: 'Bordwell critica el modelo comunicativo de Chatman con enfoque cognitivo',
      combinedInsightPotential: 8
    },
    {
      id: 'bal-narratology',
      relationshipType: 'parallel',
      synergyDescription: 'Bal desarrolla conceptos similares con énfasis en focalización',
      combinedInsightPotential: 8
    }
  ]
};
