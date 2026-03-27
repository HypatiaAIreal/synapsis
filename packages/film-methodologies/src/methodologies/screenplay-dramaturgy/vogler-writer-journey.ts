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

export const VOGLER_WRITER_JOURNEY: Methodology = {
  metadata: {
    id: 'vogler-writer-journey',
    name: 'El Viaje del Escritor',
    author: 'Christopher Vogler',
    year: 1992,
    category: 'screenplay-dramaturgy',
    complexity: 'basic',
    timeToLearn: 20,
    prerequisities: ['campbell-hero-journey'],
    culturalContext: 'Hollywood desarrollo de guiones',
    language: 'es'
  },
  
  description: `Christopher Vogler, ejecutivo de desarrollo en Hollywood y escritor, adaptó el monomito de Campbell específicamente para las necesidades de la escritura cinematográfica moderna. Su versión simplificada de 12 etapas hizo el viaje del héroe más accesible y prácticamente aplicable para guionistas. Vogler no solo redujo las etapas sino que las reinterpretó en términos de estructura dramática cinematográfica, añadiendo conceptos sobre el arco de transformación del personaje y la función dramática de los arquetipos. Su mayor contribución fue demostrar cómo los arquetipos pueden ser roles flexibles que los personajes adoptan y abandonan según las necesidades narrativas, en lugar de identidades fijas. Su trabajo se convirtió en una herramienta fundamental en Hollywood, influenciando innumerables blockbusters.`,
  
  keyConcepts: [
    {
      term: '12 Etapas Simplificadas',
      definition: 'Mundo ordinario, llamada, rechazo, mentor, cruce del umbral, pruebas/aliados/enemigos, aproximación, ordalía, recompensa, camino de vuelta, resurrección, retorno con elixir',
      importance: 'fundamental',
      relatedTerms: ['estructura simplificada', 'viaje del héroe']
    },
    {
      term: 'Arquetipos como Máscaras',
      definition: 'Funciones dramáticas flexibles que los personajes pueden adoptar o abandonar',
      importance: 'fundamental',
      relatedTerms: ['roles dinámicos', 'funciones narrativas']
    },
    {
      term: 'Viaje Interior/Exterior',
      definition: 'Transformación psicológica paralela a la aventura física',
      importance: 'fundamental',
      relatedTerms: ['arco de personaje', 'transformación dual']
    },
    {
      term: 'Arco de Transformación',
      definition: 'Cambio medible y observable en el personaje desde el inicio hasta el final',
      importance: 'important',
      relatedTerms: ['desarrollo de personaje', 'cambio']
    },
    {
      term: 'Tema como Elixir',
      definition: 'El mensaje o aprendizaje de la historia como beneficio para la audiencia',
      importance: 'important',
      relatedTerms: ['significado', 'mensaje']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Establecimiento del mundo ordinario',
      description: 'Mostrar la vida normal del héroe y sus carencias',
      timeEstimate: 20,
      difficulty: 'basic',
      tips: [
        'Mostrar no solo dónde vive sino cómo vive emocionalmente',
        'Establecer qué le falta al personaje',
        'Crear contraste con el mundo especial'
      ],
      commonMistakes: [
        'Dedicar demasiado tiempo al mundo ordinario',
        'No establecer claramente las carencias del héroe'
      ]
    },
    {
      order: 2,
      name: 'Diseño de la llamada efectiva',
      description: 'Crear un evento catalizador irresistible',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'La llamada debe relacionarse con las carencias del héroe',
        'Puede ser positiva (oportunidad) o negativa (crisis)',
        'Debe prometer cambio significativo'
      ]
    },
    {
      order: 3,
      name: 'Construcción del rechazo creíble',
      description: 'Mostrar dudas humanas y comprensibles',
      timeEstimate: 20,
      difficulty: 'basic',
      tips: [
        'El rechazo humaniza al héroe',
        'Debe ser proporcionado al peligro percibido',
        'Establece lo que está en juego'
      ]
    },
    {
      order: 4,
      name: 'Introducción del mentor',
      description: 'Proporcionar guía y herramientas para el viaje',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'El mentor puede ser una persona, objeto o experiencia',
        'Debe proporcionar justo lo necesario, no resolver todo',
        'Puede tener sus propias motivaciones'
      ]
    },
    {
      order: 5,
      name: 'Desarrollo de pruebas progresivas',
      description: 'Crear obstáculos que construyan habilidades y relaciones',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Cada prueba debe enseñar algo al héroe',
        'Introducir aliados y enemigos orgánicamente',
        'Aumentar gradualmente la dificultad'
      ]
    },
    {
      order: 6,
      name: 'Diseño de la ordalía transformadora',
      description: 'Crear el momento de muerte y renacimiento simbólicos',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Debe representar el mayor miedo del héroe',
        'El héroe debe usar todo lo aprendido',
        'La transformación debe ser evidente'
      ]
    }
  ],
  
  strengths: [
    'Más simple y práctica que el modelo original de Campbell',
    'Flexibilidad en la aplicación de arquetipos',
    'Integra conscientemente el desarrollo del personaje',
    'Probada efectividad en el cine comercial',
    'Incluye consideraciones sobre el viaje interior',
    'Adaptable a diversos géneros cinematográficos'
  ],
  
  limitations: [
    'Puede promover fórmulas si se aplica mecánicamente',
    'Riesgo de homogeneización narrativa en Hollywood',
    'Menos profundidad mítica que Campbell',
    'Orientada principalmente al cine comercial mainstream',
    'Puede simplificar excesivamente las complejidades culturales'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Christopher Vogler'],
      title: 'The Writer\'s Journey: Mythic Structure for Writers',
      year: 2007,
      publisher: 'Michael Wiese Productions',
      essential: true
    },
    {
      type: 'book',
      authors: ['Christopher Vogler', 'David McKenna'],
      title: 'Memo from the Story Department',
      year: 2011,
      publisher: 'Michael Wiese Productions',
      essential: false
    },
    {
      type: 'article',
      authors: ['Christopher Vogler'],
      title: 'A Practical Guide to The Hero with a Thousand Faces',
      year: 1985,
      journal: 'Disney Studios Memo',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Lion King',
        year: 1994,
        director: 'Roger Allers, Rob Minkoff'
      },
      analysisExcerpt: `Vogler fue consultor en El Rey León, que ejemplifica su método. Mundo ordinario: Pride Rock bajo Mufasa. Llamada: Simba debe ser rey. Rechazo: Huye tras la muerte de Mufasa. Mentores múltiples: Mufasa (espiritual), Rafiki (sabiduría), Timón y Pumba (supervivencia pero falsa filosofía). Umbral: Abandona Pride Lands. Pruebas: Crecer en el exilio. Cueva más profunda: Regresar a Pride Lands devastadas. Ordalía: Enfrentar a Scar y su propia culpa. Resurrección: Aceptar su verdadera identidad. Elixir: Restauración del círculo de la vida.`,
      insightsGenerated: [
        'Los arquetipos pueden tener aspectos positivos y negativos',
        'El mentor puede aparecer en múltiples formas',
        'El viaje interior (superar la culpa) es tan importante como el exterior'
      ],
      methodologyApplication: 'Aplicación consciente del modelo de 12 etapas con énfasis en transformación psicológica',
      keyFindings: [
        'Vogler efectivo para narrativas de maduración',
        'Los arquetipos funcionan bien en animación',
        'El elixir puede ser restauración del orden natural'
      ]
    },
    {
      film: {
        title: 'The Devil Wears Prada',
        year: 2006,
        director: 'David Frankel'
      },
      analysisExcerpt: `Aplicación del viaje del héroe en contexto contemporáneo. Mundo ordinario: Andy como aspirante a periodista. Llamada: Trabajo en Runway. Rechazo: "No sé nada de moda". Mentor complejo: Miranda es mentora y sombra simultáneamente. Umbral: Primera transformación de vestuario. Pruebas: Tareas imposibles, mundo fashion. Ordalía: París y la traición a Emily. Recompensa: Éxito profesional pero pérdida personal. Resurrección: Rechazar el mundo de Miranda. Elixir: Autoconocimiento y claridad sobre valores.`,
      insightsGenerated: [
        'El viaje funciona en contextos urbanos modernos',
        'El mentor puede ser también el antagonista',
        'El rechazo del mundo especial puede ser el verdadero elixir'
      ],
      methodologyApplication: 'Adaptación del modelo a drama laboral contemporáneo',
      keyFindings: [
        'Vogler aplicable más allá de fantasía y aventura',
        'La transformación puede ser rechazar lo aprendido',
        'Los arquetipos funcionan en contextos realistas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'campbell-hero-journey',
      relationshipType: 'complementary',
      synergyDescription: 'Vogler simplifica y cinematiza el modelo más complejo de Campbell',
      combinedInsightPotential: 9
    },
    {
      id: 'hauge-six-stage',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos enfocan la transformación pero Hauge enfatiza identidad vs esencia',
      combinedInsightPotential: 8
    },
    {
      id: 'snyder-save-cat',
      relationshipType: 'complementary',
      synergyDescription: 'Snyder proporciona beats más específicos dentro del viaje general',
      combinedInsightPotential: 7
    }
  ],
  
  digitalTools: [
    {
      name: 'The Writer\'s Journey App',
      type: 'software',
      description: 'Aplicación oficial de Vogler para mapear historias',
      cost: 'paid',
      platforms: ['iOS', 'Android']
    },
    {
      name: 'Dramatica Pro',
      type: 'software',
      description: 'Software que incluye el modelo de Vogler entre otros',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    }
  ]
};
