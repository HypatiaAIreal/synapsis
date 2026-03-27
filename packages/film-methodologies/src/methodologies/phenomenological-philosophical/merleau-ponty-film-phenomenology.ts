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

export const MERLEAU_PONTY_FILM_PHENOMENOLOGY: Methodology = {
  metadata: {
    id: 'merleau-ponty-film-phenomenology',
    name: 'Fenomenología de la Percepción Cinematográfica',
    author: 'Maurice Merleau-Ponty',
    year: 1945,
    category: 'phenomenological-philosophical',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['phenomenology-basics', 'philosophy-of-perception'],
    culturalContext: 'Fenomenología francesa',
    language: 'es'
  },
  
  description: `Maurice Merleau-Ponty aplicó la fenomenología al cine, entendiendo el film como una forma de pensamiento que se dirige a nuestra capacidad perceptiva encarnada. Su concepto del "cuerpo vivido" (corps vécu) revoluciona la comprensión de la experiencia cinematográfica: no vemos películas solo con los ojos sino con todo nuestro ser corporal. Merleau-Ponty argumenta que el cine no representa ideas sino que las hace sensibles a través de la "expresión cinematográfica" única. Su análisis de la percepción como actividad intencional y significativa, no pasiva recepción, transforma la comprensión del espectador cinematográfico como co-creador de sentido. El concepto de "quiasmo" - el entrecruzamiento de sujeto y mundo - explica cómo el cine crea un espacio intermedio donde espectador y film se interpenetran.`,
  
  keyConcepts: [
    {
      term: 'Cuerpo Vivido (Corps Vécu)',
      definition: 'El cuerpo como centro de experiencia y percepción, no objeto físico',
      importance: 'fundamental',
      relatedTerms: ['embodiment', 'corporalidad', 'experiencia encarnada']
    },
    {
      term: 'Percepción Encarnada',
      definition: 'Percepción como actividad de todo el ser corporal, no solo visual',
      importance: 'fundamental',
      relatedTerms: ['sinestesia', 'corporalidad perceptiva']
    },
    {
      term: 'Expresión Cinematográfica',
      definition: 'El cine como forma única de hacer sensibles las ideas',
      importance: 'fundamental',
      relatedTerms: ['pensamiento sensible', 'significado encarnado']
    },
    {
      term: 'Quiasmo',
      definition: 'Entrecruzamiento reversible entre percipiente y percibido',
      importance: 'important',
      relatedTerms: ['reversibilidad', 'intercorporalidad']
    },
    {
      term: 'Intencionalidad',
      definition: 'La conciencia siempre dirigida hacia objetos en el mundo',
      importance: 'important',
      relatedTerms: ['direccionalidad', 'conciencia-de']
    },
    {
      term: 'Mundo Vivido (Lebenswelt)',
      definition: 'El mundo tal como es experimentado pre-reflexivamente',
      importance: 'important',
      relatedTerms: ['experiencia pre-conceptual', 'mundo fenomenal']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de experiencia encarnada',
      description: 'Localizar momentos que apelan al cuerpo vivido del espectador',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de sinestesia cinematográfica',
        'Identificar apelaciones a sensaciones corporales',
        'Notar cómo el film "toca" al espectador'
      ],
      commonMistakes: [
        'Reducir lo corporal a lo meramente físico',
        'Ignorar dimensiones sutiles de la corporalidad'
      ]
    },
    {
      order: 2,
      name: 'Análisis de expresión sensible',
      description: 'Examinar cómo las ideas se hacen perceptibles',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar pensamiento hecho imagen y sonido',
        'Buscar significados que emergen de la forma',
        'Analizar la inseparabilidad de forma y contenido'
      ]
    },
    {
      order: 3,
      name: 'Exploración del quiasmo',
      description: 'Analizar entrecruzamientos entre film y espectador',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Identificar momentos de reversibilidad perceptiva',
        'Buscar interpenetraciones film-espectador'
      ]
    },
    {
      order: 4,
      name: 'Estudio de temporalidad vivida',
      description: 'Examinar el tiempo como experiencia fenomenológica',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis de intercorporeidad',
      description: 'Explorar conexiones corporales entre personajes y con espectador',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis fenomenológica',
      description: 'Integrar hallazgos en comprensión global de la experiencia',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Supera dualismos mente/cuerpo en teoría cinematográfica',
    'Atiende a dimensiones pre-conceptuales de la experiencia',
    'Valora la corporalidad del espectador',
    'Ofrece base filosófica profunda para el análisis',
    'Ilumina aspectos sensoriales y afectivos del cine'
  ],
  
  limitations: [
    'Alta complejidad conceptual puede ser barrera',
    'Dificultad metodológica en aplicación práctica',
    'Puede tender a universalizar experiencias corporales',
    'Menos atención a diferencias culturales en percepción',
    'Requiere familiaridad con fenomenología'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Maurice Merleau-Ponty'],
      title: 'The Film and the New Psychology',
      year: 1964,      
      publisher: 'Northwestern University Press',
      pages: '48-59',
      essential: true
    },
    {
      type: 'book',
      authors: ['Maurice Merleau-Ponty'],
      title: 'Phenomenology of Perception',
      year: 2012,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Maurice Merleau-Ponty'],
      title: 'The Visible and the Invisible',
      year: 1968,
      publisher: 'Northwestern University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Vivian Sobchack'],
      title: 'The Address of the Eye: A Phenomenology of Film Experience',
      year: 1992,
      publisher: 'Princeton University Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Diving Bell and the Butterfly',
        year: 2007,
        director: 'Julian Schnabel'
      },
      analysisExcerpt: `El film materializa la fenomenología merleau-pontiana al presentar la experiencia desde un cuerpo vivido radicalmente alterado. La cámara subjetiva no solo muestra lo que Jean-Dominique ve, sino cómo experimenta el mundo desde su parálisis. El parpadeo como único gesto expresivo encarna la intencionalidad reducida a su mínima expresión. El film hace sensible la diferencia entre cuerpo-objeto (paralizado) y cuerpo-vivido (que aún percibe y desea). La intercorporeidad se mantiene a través de la mirada y el tacto de otros.`,
      insightsGenerated: [
        'El cuerpo vivido persiste más allá de la capacidad motora',
        'La percepción encarnada puede ser cinematográficamente transmitida',
        'El quiasmo ojo-mundo se intensifica en la limitación'
      ],
      methodologyApplication: 'Análisis fenomenológico de corporalidad alterada y percepción',
      keyFindings: [
        'El cine puede expresar estados fenomenológicos extremos',
        'La limitación corporal revela la esencia del cuerpo vivido',
        'La cámara puede encarnar experiencias corporales ajenas'
      ]
    },
    {
      film: {
        title: 'Gravity',
        year: 2013,
        director: 'Alfonso Cuarón'
      },
      analysisExcerpt: `Gravity crea una experiencia encarnada de desorientación espacial y vulnerabilidad corporal. Los largos planos-secuencia mantienen la continuidad del cuerpo vivido en el espacio. La respiración como anclaje corporal primario cuando falta gravedad. El film explora la intercorporeidad a distancia (voces en el vacío) y el quiasmo entre cuerpo y cosmos. La tecnología como extensión del cuerpo vivido (traje espacial) que puede fallar. El espectador experimenta visceralmente la precariedad corporal.`,
      insightsGenerated: [
        'El espacio vacío intensifica la conciencia corporal',
        'La respiración como fundamento de la experiencia encarnada',
        'La tecnología puede mediar o amenazar el cuerpo vivido'
      ],
      methodologyApplication: 'Fenomenología de la corporalidad en condiciones extremas',
      keyFindings: [
        'El cine puede transmitir experiencias corporales imposibles',
        'La ausencia de gravedad revela nuestra corporalidad terrestre',
        'El cuerpo vivido busca orientación y conexión incluso en el vacío'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'sobchack-embodied-film',
      relationshipType: 'complementary',
      synergyDescription: 'Sobchack desarrolla y cinematiza las ideas fenomenológicas de Merleau-Ponty',
      combinedInsightPotential: 9
    },
    {
      id: 'marks-haptic-visuality',
      relationshipType: 'synthetic',
      synergyDescription: 'Marks explora la percepción táctil que Merleau-Ponty sugiere',
      combinedInsightPotential: 8
    },
    {
      id: 'deleuze-cinema-philosophy',
      relationshipType: 'dialectical',
      synergyDescription: 'Deleuze ofrece una filosofía del cine diferente pero complementaria',
      combinedInsightPotential: 8
    }
  ]
};
