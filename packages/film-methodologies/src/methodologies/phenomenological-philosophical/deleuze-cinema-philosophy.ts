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

export const DELEUZE_CINEMA_PHILOSOPHY: Methodology = {
  metadata: {
    id: 'deleuze-cinema-philosophy',
    name: 'Imagen-Movimiento e Imagen-Tiempo',
    author: 'Gilles Deleuze',
    year: 1985,
    category: 'phenomenological-philosophical',
    complexity: 'expert',
    timeToLearn: 60,
    prerequisities: ['philosophy-basics', 'bergson-time', 'film-history'],
    culturalContext: 'Filosofía post-estructuralista francesa',
    language: 'es'
  },
  
  description: `Gilles Deleuze creó la taxonomía filosófica más ambiciosa del cine, distinguiendo entre dos regímenes de imágenes que corresponden a diferentes concepciones del tiempo y el pensamiento. La "imagen-movimiento" del cine clásico subordina el tiempo al movimiento a través del montaje, creando un esquema sensorio-motor donde percepción lleva a acción. La "imagen-tiempo" del cine moderno presenta el tiempo directamente, rompiendo los vínculos sensorio-motores y confrontando al pensamiento con su propio límite. Deleuze desarrolló una compleja tipología: imagen-percepción, imagen-afección, imagen-acción para el primer régimen; imagen-cristal, imagen-recuerdo, imagen-sueño para el segundo. Su análisis no es histórico sino conceptual, explorando las potencias del cine para crear conceptos en imágenes.`,
  
  keyConcepts: [
    {
      term: 'Imagen-Movimiento',
      definition: 'Régimen donde el tiempo se subordina al movimiento mediante montaje',
      importance: 'fundamental',
      relatedTerms: ['cine clásico', 'esquema sensorio-motor']
    },
    {
      term: 'Imagen-Tiempo',
      definition: 'Régimen donde el tiempo se presenta directamente sin mediación del movimiento',
      importance: 'fundamental',
      relatedTerms: ['cine moderno', 'cristal de tiempo']
    },
    {
      term: 'Esquema Sensorio-Motor',
      definition: 'Conexión automática entre percepción y acción en la imagen-movimiento',
      importance: 'fundamental',
      relatedTerms: ['percepción-acción', 'automatismo']
    },
    {
      term: 'Imagen-Cristal',
      definition: 'Imagen donde actual y virtual son indiscernibles',
      importance: 'fundamental',
      relatedTerms: ['actual/virtual', 'tiempo puro']
    },
    {
      term: 'Situación Óptica y Sonora Pura',
      definition: 'Percepción desconectada de la acción motora',
      importance: 'important',
      relatedTerms: ['videncia', 'parálisis motora']
    },
    {
      term: 'Taxonomía de Signos',
      definition: 'Clasificación de tipos de imagen según Peirce y Bergson',
      importance: 'important',
      relatedTerms: ['semiótica', 'tipología']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del régimen dominante',
      description: 'Determinar si predomina imagen-movimiento o imagen-tiempo',
      timeEstimate: 30,
      difficulty: 'advanced',
      tips: [
        'Examinar si el montaje subordina tiempo a movimiento',
        'Buscar rupturas del esquema sensorio-motor',
        'Identificar presentaciones directas del tiempo'
      ],
      commonMistakes: [
        'Asociar mecánicamente períodos históricos con regímenes',
        'Ignorar coexistencia de ambos regímenes'
      ]
    },
    {
      order: 2,
      name: 'Análisis del esquema sensorio-motor',
      description: 'Examinar conexiones o desconexiones entre percepción y acción',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar situaciones ópticas y sonoras puras',
        'Buscar momentos de parálisis o indecisión',
        'Analizar automatismos y sus rupturas'
      ]
    },
    {
      order: 3,
      name: 'Tipología de imágenes',
      description: 'Clasificar tipos específicos según taxonomía deleuziana',
      timeEstimate: 90,
      difficulty: 'expert',
      tips: [
        'Aplicar categorías: percepción, afección, acción, etc.',
        'Identificar imágenes-cristal y sus variantes',
        'No forzar categorías donde no aplican'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de cristales de tiempo',
      description: 'Localizar imágenes donde actual/virtual coexisten',
      timeEstimate: 45,
      difficulty: 'expert'
    },
    {
      order: 5,
      name: 'Análisis de conceptos cinematográficos',
      description: 'Identificar qué conceptos filosóficos crea el film',
      timeEstimate: 60,
      difficulty: 'expert'
    },
    {
      order: 6,
      name: 'Síntesis filosófica',
      description: 'Integrar análisis en comprensión del film como pensamiento',
      timeEstimate: 60,
      difficulty: 'expert'
    }
  ],
  
  strengths: [
    'Crea vocabulario filosófico único para el cine',
    'Trata el cine como forma de pensamiento',
    'Conecta cine con filosofía occidental',
    'Valoriza innovaciones del cine moderno',
    'Ofrece taxonomía comprehensiva de imágenes',
    'No subordina cine a otras artes'
  ],
  
  limitations: [
    'Complejidad conceptual extrema',
    'Requiere conocimiento previo de Deleuze',
    'Aplicación puede ser idiosincrática',
    'Menos útil para análisis socio-culturales',
    'Privilegia ciertos autores y estilos',
    'Jerga puede ser impenetrable'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Gilles Deleuze'],
      title: 'Cinema 1: The Movement-Image',
      year: 1986,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gilles Deleuze'],
      title: 'Cinema 2: The Time-Image',
      year: 1989,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['D.N. Rodowick'],
      title: 'Gilles Deleuze\'s Time Machine',
      year: 1997,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Ronald Bogue'],
      title: 'Deleuze on Cinema',
      year: 2003,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Vertigo',
        year: 1958,
        director: 'Alfred Hitchcock'
      },
      analysisExcerpt: `Vertigo marca la transición de imagen-movimiento a imagen-tiempo en Hitchcock. Primera parte: imagen-movimiento clásica con esquema sensorio-motor intacto (detective sigue, observa, actúa). Después del trauma: ruptura progresiva del esquema. La espiral es imagen-tiempo pura, cristal donde pasado y presente coexisten. Scottie entra en situación óptica pura: ve sin poder actuar. El museo como cristal de tiempo donde Madeleine/Carlotta se funden. Final: fracaso definitivo del esquema sensorio-motor.`,
      insightsGenerated: [
        'Hitchcock anticipa el cine moderno dentro del clásico',
        'La espiral como figura del tiempo cristalizado',
        'El vértigo como ruptura sensorio-motora'
      ],
      methodologyApplication: 'Análisis de transición entre regímenes de imagen',
      keyFindings: [
        'Los grandes autores clásicos contienen gérmenes de lo moderno',
        'El trauma puede catalizar el paso a imagen-tiempo',
        'El amor imposible como situación óptica pura'
      ]
    },
    {
      film: {
        title: '2001: A Space Odyssey',
        year: 1968,
        director: 'Stanley Kubrick'
      },
      analysisExcerpt: `2001 despliega la imagen-tiempo en estado puro. El monolito como cristal de tiempo absoluto donde convergen pasado cósmico, presente y futuro. Ruptura total del esquema sensorio-motor: los personajes contemplan sin comprender ni actuar. La secuencia stargate: tiempo puro desligado de todo movimiento narrativo. La habitación final: cristal donde todas las edades coexisten. HAL como último vestigio del esquema sensorio-motor que debe ser desactivado. El film piensa el devenir-cósmico de la humanidad.`,
      insightsGenerated: [
        'El cine puede presentar el tiempo cósmico directamente',
        'La evolución como problema filosófico-cinematográfico',
        'La imagen-tiempo puede prescindir de psicología y drama'
      ],
      methodologyApplication: 'Análisis de imagen-tiempo pura y devenir cósmico',
      keyFindings: [
        'Kubrick crea cine-pensamiento sobre el tiempo y evolución',
        'La abstracción visual puede ser rigurosamente filosófica',
        'El monolito funciona como cristal de tiempo absoluto'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'bergson-duration',
      relationshipType: 'complementary',
      synergyDescription: 'Deleuze basa su filosofía del cine en la concepción bergsoniana del tiempo',
      combinedInsightPotential: 9
    },
    {
      id: 'ranciere-aesthetic-regime',
      relationshipType: 'parallel',
      synergyDescription: 'Rancière ofrece una política de las imágenes complementaria a Deleuze',
      combinedInsightPotential: 8
    },
    {
      id: 'epstein-photogenie',
      relationshipType: 'parallel',
      synergyDescription: 'Epstein anticipa aspectos de la imagen-tiempo con su concepto de fotogenia',
      combinedInsightPotential: 7
    }
  ]
};
