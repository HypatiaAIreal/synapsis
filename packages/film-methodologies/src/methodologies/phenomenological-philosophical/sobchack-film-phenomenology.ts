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

export const SOBCHACK_FILM_PHENOMENOLOGY: Methodology = {
  metadata: {
    id: 'sobchack-film-phenomenology',
    name: 'Fenomenología del Cine Encarnado',
    author: 'Vivian Sobchack',
    year: 1992,
    category: 'phenomenological-philosophical',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['merleau-ponty-phenomenology', 'feminist-theory'],
    culturalContext: 'Fenomenología feminista del cine',
    language: 'es'
  },
  
  description: `Vivian Sobchack desarrolló la fenomenología cinematográfica más sistemática y corporal, teorizando el film como "cuerpo vivido" que percibe y expresa. Su trabajo revolucionario propone que el film no es objeto inerte sino sujeto de experiencia con su propia intencionalidad encarnada. Sobchack analiza la "experiencia cinematográfica" como encuentro entre dos cuerpos vividos - el del film y el del espectador - en un espacio existencial compartido. Su concepto de "cenestesia" describe cómo experimentamos el cine sinestésicamente con todo nuestro ser sensorial. Sobchack examina tecnologías cinematográficas (zoom, steadicam, CGI) como extensiones de la corporalidad fílmica que transforman modos de ser-en-el-mundo.`,
  
  keyConcepts: [
    {
      term: 'Film como Cuerpo Vivido',
      definition: 'El film como sujeto perceptivo con experiencia encarnada propia',
      importance: 'fundamental',
      relatedTerms: ['subjetividad fílmica', 'cuerpo cinematográfico']
    },
    {
      term: 'Doble Encarnación',
      definition: 'Encuentro entre cuerpo vivido del film y del espectador',
      importance: 'fundamental',
      relatedTerms: ['intercorporeidad', 'encuentro corporal']
    },
    {
      term: 'Cenestesia',
      definition: 'Experiencia cinematográfica sinestésica total',
      importance: 'fundamental',
      relatedTerms: ['sinestesia', 'percepción multisensorial']
    },
    {
      term: 'Intencionalidad Fílmica',
      definition: 'Dirección perceptiva y expresiva propia del film',
      importance: 'important',
      relatedTerms: ['percepción fílmica', 'expresión cinematográfica']
    },
    {
      term: 'Tecnología Encarnada',
      definition: 'Tecnologías cinematográficas como extensiones corporales',
      importance: 'important',
      relatedTerms: ['prótesis perceptiva', 'mediación corporal']
    },
    {
      term: 'Reversibilidad Cinematográfica',
      definition: 'El film como vidente-visible simultáneamente',
      importance: 'important',
      relatedTerms: ['quiasmo fílmico', 'reciprocidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del cuerpo fílmico',
      description: 'Reconocer cómo el film percibe y expresa como cuerpo',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Analizar movimientos de cámara como gestos corporales',
        'Identificar la "respiración" del montaje',
        'Buscar expresiones de corporalidad fílmica'
      ],
      commonMistakes: [
        'Antropomorfizar excesivamente el film',
        'Ignorar especificidad de corporalidad fílmica'
      ]
    },
    {
      order: 2,
      name: 'Análisis de doble encarnación',
      description: 'Examinar encuentro entre cuerpo fílmico y espectatorial',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar momentos de sincronía corporal',
        'Analizar tensiones entre corporalidades',
        'Buscar resonancias cenestésicas'
      ]
    },
    {
      order: 3,
      name: 'Exploración cenestésica',
      description: 'Analizar experiencia multisensorial del film',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Atender a sinestesias cinematográficas',
        'Identificar apelaciones sensoriales cruzadas',
        'Analizar textura y tactilidad visual'
      ]
    },
    {
      order: 4,
      name: 'Estudio de tecnologías encarnadas',
      description: 'Examinar cómo las tecnologías extienden corporalidad',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis de intencionalidad',
      description: 'Identificar dirección perceptiva del film',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis fenomenológica feminista',
      description: 'Integrar análisis con perspectiva de género',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Fenomenología cinematográfica más sistemática',
    'Atiende corporalidad ignorada por otras teorías',
    'Integra perspectiva feminista naturalmente',
    'Incluye análisis de tecnología',
    'Metodología aplicable y rigurosa',
    'Valora experiencia sensorial completa'
  ],
  
  limitations: [
    'Complejidad conceptual considerable',
    'Puede antropomorfizar el film excesivamente',
    'Requiere familiaridad con fenomenología',
    'Menos atención a contextos culturales',
    'Puede universalizar experiencia corporal',
    'Aplicación laboriosa'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Vivian Sobchack'],
      title: 'The Address of the Eye: A Phenomenology of Film Experience',
      year: 1992,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Vivian Sobchack'],
      title: 'Carnal Thoughts: Embodiment and Moving Image Culture',
      year: 2004,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Vivian Sobchack'],
      title: 'Screening Space: The American Science Fiction Film',
      year: 1987,
      publisher: 'Rutgers University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Vivian Sobchack'],
      title: 'Meta-Morphing: Visual Transformation and the Culture of Quick Change',
      year: 2000,
      publisher: 'University of Minnesota Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Leviathan',
        year: 2012,
        director: 'Lucien Castaing-Taylor & Véréna Paravel'
      },
      analysisExcerpt: `Leviathan radicaliza la fenomenología sobchackiana al crear un cuerpo fílmico no-antropomórfico. Las cámaras GoPro adheridas a pescadores, redes y peces crean perspectivas encarnadas no-humanas. El film percibe desde múltiples cuerpos: humano, animal, máquina. La cenestesia es abrumadora: mareo, frío, humedad, peso. No hay distancia contemplativa sino inmersión corporal total. La tecnología (cámaras impermeables, gran angular) permite nuevas formas de corporalidad fílmica. El espectador experimenta reversibilidad radical: ver como pez, red, océano.`,
      insightsGenerated: [
        'El cine puede encarnar perspectivas no-humanas',
        'La tecnología permite nuevas formas de corporalidad fílmica',
        'La cenestesia puede ser deliberadamente desestabilizadora'
      ],
      methodologyApplication: 'Análisis de corporalidad fílmica expandida y cenestesia radical',
      keyFindings: [
        'El cuerpo fílmico puede ser múltiple y no-humano',
        'La tecnología digital expande posibilidades fenomenológicas',
        'La doble encarnación puede ser profundamente alienante'
      ]
    },
    {
      film: {
        title: 'Amour',
        year: 2012,
        director: 'Michael Haneke'
      },
      analysisExcerpt: `Amour presenta la fenomenología del envejecimiento y la fragilidad corporal. El cuerpo fílmico envejece con los protagonistas: movimientos de cámara cada vez más limitados, encuadres más estáticos. La intencionalidad fílmica respeta la dignidad mediante distancia. Cenestesia de la incomodidad: dolor, rigidez, pérdida de control. La doble encarnación confronta al espectador con su propia mortalidad. Tecnología minimal: sin efectos, sin embellecimiento. El film inscribe marcas temporales en los cuerpos, mostrando cómo el envejecimiento transforma la experiencia vivida.`,
      insightsGenerated: [
        'El cuerpo fílmico puede envejecer con sus sujetos',
        'La restricción técnica puede expresar limitación corporal',
        'La fenomenología incluye experiencias de fragilidad'
      ],
      methodologyApplication: 'Fenomenología del envejecimiento y corporalidad vulnerable',
      keyFindings: [
        'El cine puede transmitir experiencias corporales difíciles',
        'La ética cinematográfica puede ser encarnada',
        'La mortalidad es experiencia fenomenológica fundamental'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'merleau-ponty-phenomenology',
      relationshipType: 'complementary',
      synergyDescription: 'Sobchack desarrolla y cinematiza la fenomenología de Merleau-Ponty',
      combinedInsightPotential: 9
    },
    {
      id: 'marks-haptic-cinema',
      relationshipType: 'complementary',
      synergyDescription: 'Marks explora tactilidad que Sobchack teoriza cenestésicamente',
      combinedInsightPotential: 8
    },
    {
      id: 'shaviro-cinematic-body',
      relationshipType: 'parallel',
      synergyDescription: 'Shaviro ofrece otra teoría del cuerpo cinematográfico más visceral',
      combinedInsightPotential: 8
    }
  ]
};
