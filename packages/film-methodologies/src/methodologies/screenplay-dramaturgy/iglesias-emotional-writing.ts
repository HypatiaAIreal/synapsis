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

export const IGLESIAS_EMOTIONAL_WRITING: Methodology = {
  metadata: {
    id: 'iglesias-emotional-writing',
    name: 'Escritura Emocional',
    author: 'Karl Iglesias',
    year: 2011,
    category: 'screenplay-dramaturgy',
    complexity: 'intermediate',
    timeToLearn: 35,
    prerequisities: ['basic-screenwriting'],
    culturalContext: 'Técnica emocional Hollywood',
    language: 'es'
  },
  
  description: `Karl Iglesias se enfoca en el aspecto más crucial pero menos enseñado del guión: cómo crear experiencias emocionales en la audiencia. Su método va más allá de la estructura para examinar técnicas específicas que generan empatía, suspenso, humor, y otras respuestas emocionales. Iglesias identifica "momentos de emoción" clave que toda película exitosa debe tener y proporciona herramientas concretas para crearlos. Su trabajo incluye análisis detallado de cómo el ritmo, la revelación de información, y la construcción de escenas afectan el engagement emocional. Distingue entre interés intelectual y conexión emocional, argumentando que esta última es lo que hace memorables a las películas.`,
  
  keyConcepts: [
    {
      term: 'Momentos Emocionales',
      definition: 'Beats específicos diseñados para provocar respuesta visceral en audiencia',
      importance: 'fundamental',
      relatedTerms: ['beats emocionales', 'respuesta visceral']
    },
    {
      term: 'Experiencia del Lector',
      definition: 'Escribir pensando en cómo el lector del guión experimentará emocionalmente el texto',
      importance: 'fundamental',
      relatedTerms: ['lectura emocional', 'engagement textual']
    },
    {
      term: 'Herramientas de Empatía',
      definition: 'Técnicas específicas para crear conexión emocional con personajes',
      importance: 'fundamental',
      relatedTerms: ['conexión emocional', 'identificación']
    },
    {
      term: 'Tensión vs. Suspense',
      definition: 'Anticipación general vs. miedo específico por resultado conocido',
      importance: 'important',
      relatedTerms: ['anticipación', 'ansiedad narrativa']
    },
    {
      term: 'Surprise vs. Suspense',
      definition: 'Revelación inesperada vs. anticipación de lo conocido',
      importance: 'important',
      relatedTerms: ['revelación', 'expectativa']
    },
    {
      term: 'Subtexto Emocional',
      definition: 'Emociones no expresadas pero comunicadas bajo el diálogo',
      importance: 'important',
      relatedTerms: ['comunicación no verbal', 'emoción implícita']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de emociones objetivo',
      description: 'Determinar qué emociones específicas debe sentir la audiencia',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Ser específico: no solo "triste" sino "nostálgico" o "devastado"',
        'Mapear emociones por escena y acto',
        'Considerar contrastes emocionales para impacto'
      ],
      commonMistakes: [
        'Ser vago sobre emociones objetivo',
        'Intentar demasiadas emociones simultáneas'
      ]
    },
    {
      order: 2,
      name: 'Mapeo del viaje emocional',
      description: 'Diseñar altibajos emocionales a lo largo del guión',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Crear "montaña rusa" emocional con picos y valles',
        'Evitar monotonía emocional sostenida',
        'Los contrastes amplifican impacto'
      ]
    },
    {
      order: 3,
      name: 'Aplicación de técnicas de empatía',
      description: 'Implementar herramientas específicas para conexión con personajes',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Mostrar vulnerabilidad temprano',
        'Dar pequeñas victorias antes de grandes derrotas',
        'Humanizar incluso a antagonistas'
      ]
    },
    {
      order: 4,
      name: 'Construcción de suspense/tensión',
      description: 'Crear anticipación y ansiedad narrativa efectivas',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Suspense: audiencia sabe más que personajes',
        'Tensión: incertidumbre sobre resultado',
        'Usar "ticking clocks" para urgencia'
      ]
    },
    {
      order: 5,
      name: 'Balance surprise/suspense',
      description: 'Equilibrar revelaciones inesperadas con anticipación',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Surprises mejor cuando inevitables en retrospectiva',
        'Suspense más efectivo que surprise para engagement',
        'Preparar surprises con pistas sutiles'
      ]
    },
    {
      order: 6,
      name: 'Escritura de escenas emocionalmente cargadas',
      description: 'Aplicar todas las técnicas en escenas clave',
      timeEstimate: 120,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Enfoque único en impacto emocional sobre estructura',
    'Técnicas prácticas inmediatamente aplicables',
    'Mejora significativa en engagement del lector',
    'Aplicable a cualquier género o estilo',
    'Basado en análisis de éxitos comerciales',
    'Considera la experiencia completa del espectador'
  ],
  
  limitations: [
    'Puede llevar a manipulación emocional si se abusa',
    'Menos sistemático que métodos estructurales',
    'Requiere intuición emocional desarrollada',
    'Difícil de enseñar objetivamente',
    'Riesgo de melodrama si se aplica sin sutileza'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Karl Iglesias'],
      title: 'Writing for Emotional Impact',
      year: 2011,
      publisher: 'WingSpan Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Karl Iglesias'],
      title: 'The 101 Habits of Highly Successful Screenwriters',
      year: 2001,
      publisher: 'Adams Media',
      essential: true
    },
    {
      type: 'book',
      authors: ['Karl Iglesias'],
      title: 'Advanced Emotional Writing Techniques',
      year: 2016,
      publisher: 'WingSpan Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Up',
        year: 2009,
        director: 'Pete Docter'
      },
      analysisExcerpt: `Masterclass en escritura emocional. Montaje inicial "Married Life": comprime toda una vida en minutos, creando empatía profunda inmediata. Técnicas: mostrar sueños compartidos (empatía), pequeñas victorias (casa, matrimonio), gran pérdida (infertilidad, muerte de Ellie). Contraste emocional: de alegría a devastación. Suspense emocional: sabemos que Ellie morirá pero no cuándo. Surprise con propósito: libro de aventuras revela mensaje final. Resto del film usa esta inversión emocional: cada decisión de Carl resuena porque entendemos su pérdida. Russell representa nueva oportunidad de conexión.`,
      insightsGenerated: [
        'La inversión emocional temprana sostiene toda la película',
        'El contraste emocional amplifica el impacto',
        'Los objetos (casa, libro) cargan emocionalmente por asociación'
      ],
      methodologyApplication: 'Concentración de técnicas emocionales en secuencia inicial',
      keyFindings: [
        'Iglesias efectivo para crear conexión emocional rápida',
        'El montaje puede comprimir décadas de empatía en minutos',
        'Los payoffs emocionales requieren setups emocionales'
      ]
    },
    {
      film: {
        title: 'The Sixth Sense',
        year: 1999,
        director: 'M. Night Shyamalan'
      },
      analysisExcerpt: `Ejemplo perfecto de surprise vs. suspense. Film construye suspense sobre la seguridad de Cole, pero el verdadero poder es el surprise final. Empatía dual: Cole vulnerable por su don, Malcolm por su fracaso matrimonial. Técnicas: información dosificada cuidadosamente, pistas visuales sutiles (rojo, frío), diálogos con doble significado. Suspense en escenas de fantasmas, pero surprise transforma toda la película retrospectivamente. Emociones objetivo: miedo→compasión→asombro→tristeza. El twist no es truco sino revelación emocional: Malcolm debe aceptar su muerte como Cole acepta su don.`,
      insightsGenerated: [
        'El mejor surprise recontextualiza emocionalmente toda la historia',
        'La empatía dual permite twist sin traicionar audiencia',
        'Las pistas deben ser visibles pero no obvias'
      ],
      methodologyApplication: 'Balance magistral de surprise/suspense con propósito emocional',
      keyFindings: [
        'Los twists efectivos son emocionales, no solo intelectuales',
        'El suspense prepara para el impacto del surprise',
        'La rewatch revela nueva capa emocional'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'seger-subtext',
      relationshipType: 'complementary',
      synergyDescription: 'Seger proporciona profundidad mientras Iglesias añade impacto emocional',
      combinedInsightPotential: 9
    },
    {
      id: 'mckee-story',
      relationshipType: 'parallel',
      synergyDescription: 'McKee estructura valores mientras Iglesias estructura emociones',
      combinedInsightPotential: 8
    },
    {
      id: 'hitchcock-suspense',
      relationshipType: 'complementary',
      synergyDescription: 'Iglesias formaliza y expande las técnicas intuitivas de Hitchcock',
      combinedInsightPotential: 9
    }
  ],
  
  digitalTools: [
    {
      name: 'Emotional Beat Tracker',
      type: 'software',
      description: 'Herramienta para mapear beats emocionales en guiones',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    },
    {
      name: 'Reader Experience Analyzer',
      type: 'webapp',
      description: 'Analiza el impacto emocional del texto del guión',
      cost: 'freemium',
      platforms: ['web']
    }
  ]
};
