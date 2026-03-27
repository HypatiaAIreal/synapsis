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

export const CASETTI_DICHIO_FILM_ANALYSIS: Methodology = {
  metadata: {
    id: 'casetti-dichio-film-analysis',
    name: 'Análisis del Film',
    author: 'Francesco Casetti & Federico di Chio',
    year: 1990,
    category: 'semiotic',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['basic-semiotics'],
    culturalContext: 'Semiótica aplicada italiana',
    language: 'es'
  },
  
  description: `Francesco Casetti y Federico di Chio desarrollaron un método sistemático de análisis fílmico que integra múltiples aproximaciones semióticas en un marco pedagógico coherente. Su trabajo sintetiza décadas de teoría semiótica en herramientas prácticas para descomponer y comprender films. Distinguen cuatro niveles: representación (qué muestra), narración (cómo cuenta), comunicación (cómo se dirige al espectador) y significación (qué significa). Su método enfatiza la naturaleza construida del film, revelando las operaciones por las cuales imágenes y sonidos se organizan en textos significantes. Desarrollaron instrumentos específicos para analizar espacio, tiempo, personajes y régimen escópico del cine. Su concepto de "mirada" examina no solo quién mira a quién dentro del film, sino cómo el film organiza la mirada del espectador.`,
  
  keyConcepts: [
    {
      term: 'Cuatro Niveles de Análisis',
      definition: 'Representación / Narración / Comunicación / Significación como dimensiones analíticas',
      importance: 'fundamental',
      relatedTerms: ['análisis sistemático', 'niveles', 'método']
    },
    {
      term: 'Puesta en Escena/Cuadro/Serie',
      definition: 'Contenido del encuadre / Modalidad de filmación / Relaciones de montaje',
      importance: 'fundamental',
      relatedTerms: ['mise-en-scène', 'encuadre', 'montaje']
    },
    {
      term: 'Régimen Escópico',
      definition: 'Sistema de organización de miradas dentro del film y hacia el espectador',
      importance: 'important',
      relatedTerms: ['mirada', 'punto de vista', 'espectador']
    },
    {
      term: 'Marcas Enunciativas',
      definition: 'Señales de la presencia del discurso cinematográfico',
      importance: 'important',
      relatedTerms: ['enunciación', 'discurso', 'marcas']
    },
    {
      term: 'Pacto Comunicativo',
      definition: 'Acuerdo implícito entre film y espectador sobre cómo leer la obra',
      importance: 'important',
      relatedTerms: ['contrato', 'expectativas', 'género']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Descomposición en niveles',
      description: 'Separar los cuatro niveles analíticos del film',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Comenzar identificando qué se muestra (representación)',
        'Distinguir cómo se estructura la historia (narración)',
        'Examinar la relación con el espectador (comunicación)',
        'Interpretar significados globales (significación)'
      ],
      commonMistakes: [
        'Mezclar niveles sin distinguirlos',
        'Privilegiar un nivel ignorando otros'
      ]
    },
    {
      order: 2,
      name: 'Análisis representacional',
      description: 'Examinar puesta en escena, puesta en cuadro y puesta en serie',
      timeEstimate: 90,
      difficulty: 'intermediate',
      tips: [
        'Catalogar elementos visuales y sonoros',
        'Analizar decisiones de encuadre y composición',
        'Estudiar relaciones de montaje'
      ]
    },
    {
      order: 3,
      name: 'Análisis narrativo',
      description: 'Estudiar estructura del relato y construcción temporal',
      timeEstimate: 60,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Análisis comunicativo',
      description: 'Examinar estrategias de interpelación al espectador',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis del régimen escópico',
      description: 'Mapear el sistema de miradas del film',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis interpretativa',
      description: 'Integrar los cuatro niveles en interpretación global',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Método pedagógico claro y sistemático',
    'Síntesis efectiva de teorías semióticas previas',
    'Herramientas prácticas aplicables',
    'Balance entre rigor y accesibilidad',
    'Atención tanto a forma como contenido',
    'Vocabulario técnico preciso pero comprensible'
  ],
  
  limitations: [
    'Puede resultar mecánico si se aplica rígidamente',
    'Menos innovador teóricamente',
    'Sesgo hacia cine narrativo clásico',
    'Simplifica algunos debates teóricos complejos',
    'Marco a veces demasiado esquemático'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Francesco Casetti', 'Federico di Chio'],
      title: 'Cómo analizar un film',
      year: 1991,
      publisher: 'Paidós',
      essential: true
    },
    {
      type: 'book',
      authors: ['Francesco Casetti'],
      title: 'Theories of Cinema, 1945-1995',
      year: 1999,
      publisher: 'University of Texas Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Francesco Casetti'],
      title: 'The Lumière Galaxy: Seven Key Words for the Cinema to Come',
      year: 2015,
      publisher: 'Columbia University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Federico di Chio'],
      title: 'American Storytelling: Le forme del cinema e delle serie TV',
      year: 2011,
      publisher: 'Carocci',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Grand Budapest Hotel',
        year: 2014,
        director: 'Wes Anderson'
      },
      analysisExcerpt: `Representación: Puesta en escena obsesivamente simétrica, paleta de colores por época, composiciones pictóricas. Puesta en cuadro frontal, tableaux vivants. Puesta en serie rítmica, montaje musical. Narración: Estructura de muñecas rusas (narrador del narrador del narrador), cada nivel con su estilo visual. Comunicación: Marcas enunciativas evidentes (iris, títulos, proporción de pantalla variable). Mundo diegético artificial conscientemente. Significación: Nostalgia por Europa perdida, artificio como verdad emocional, memoria como construcción estética.`,
      insightsGenerated: [
        'Los cuatro niveles funcionan coherentemente hacia el mismo efecto',
        'El estilo ultra-artificial comunica autenticidad emocional',
        'Las marcas enunciativas son parte del placer estético'
      ],
      methodologyApplication: 'Análisis sistemático de los cuatro niveles y su interrelación',
      keyFindings: [
        'Anderson integra perfectamente forma y contenido',
        'La artificialidad extrema puede generar emoción genuina',
        'Cada nivel analítico refuerza los demás'
      ]
    },
    {
      film: {
        title: 'Her',
        year: 2013,
        director: 'Spike Jonze'
      },
      analysisExcerpt: `Representación: Espacios minimalistas, colores cálidos, composiciones que aíslan a Theodore. Cámara íntima, POV subjetivos. Narración: Progresión de relación amorosa clásica con giro ontológico. Comunicación: Régimen escópico problemático: ¿cómo filmar una presencia invisible? Voz de Samantha llena el espacio. Interpelación emocional directa. Significación: Soledad contemporánea, amor post-humano, mediación tecnológica de afectos. El film reflexiona sobre su propio medio: el cine también es presencia inmaterial que genera emoción real.`,
      insightsGenerated: [
        'La ausencia visual de Samantha es presencia sonora total',
        'El régimen escópico se adapta a un personaje invisible',
        'El film es meta-cinematográfico sobre presencia/ausencia'
      ],
      methodologyApplication: 'Análisis de adaptación formal a contenido conceptual',
      keyFindings: [
        'La representación puede trabajar con ausencias significativas',
        'El sonido puede dominar el régimen escópico',
        'Los cuatro niveles pueden estar en tensión productiva'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'metz-film-semiology',
      relationshipType: 'complementary',
      synergyDescription: 'Casetti/di Chio simplifican y sistematizan insights de Metz para pedagogía',
      combinedInsightPotential: 8
    },
    {
      id: 'bordwell-film-art',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos buscan método sistemático pero Bordwell es más formalista',
      combinedInsightPotential: 8
    },
    {
      id: 'aumont-film-analysis',
      relationshipType: 'complementary',
      synergyDescription: 'Aumont ofrece aproximación más teórica al mismo objetivo pedagógico',
      combinedInsightPotential: 7
    }
  ]
};
