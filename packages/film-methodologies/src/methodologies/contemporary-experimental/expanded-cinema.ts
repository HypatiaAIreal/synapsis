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

export const EXPANDED_CINEMA: Methodology = {
  metadata: {
    id: 'expanded-cinema',
    name: 'Cine Expandido - Gene Youngblood, VR/AR',
    author: 'Gene Youngblood',
    year: 1970,
    category: 'contemporary-experimental',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['experimental-film', 'new-media'],
    culturalContext: 'Contracultura y nuevas tecnologías',
    language: 'es'
  },
  
  description: `El concepto de "cine expandido", articulado por Gene Youngblood en 1970, anticipó desarrollos en realidad virtual, aumentada, instalaciones inmersivas y experiencias transmedia que desafían los límites tradicionales del cine. Youngblood propuso el cine como extensión de la consciencia humana a través de tecnologías que expanden percepción y creatividad. El cine expandido contemporáneo incluye VR cinematográfica que elimina el frame; AR que superpone capas narrativas sobre realidad física; instalaciones multi-pantalla que fragmentan perspectivas; y experiencias interactivas que convierten espectadores en co-creadores. Esta teoría examina cómo estas tecnologías cambian no solo la forma sino la ontología del cine - de ventana a mundo a mundo habitable.`,
  
  keyConcepts: [
    {
      term: 'Expanded Cinema',
      definition: 'Cine que trasciende la pantalla tradicional hacia experiencias multisensoriales y espaciales',
      importance: 'fundamental',
      relatedTerms: ['inmersión', 'multimedia']
    },
    {
      term: 'Synaesthetic Cinema',
      definition: 'Cine que genera sinestesia tecnológica, mezclando sentidos',
      importance: 'fundamental',
      relatedTerms: ['sinestesia', 'multisensorial']
    },
    {
      term: 'Immersive Environments',
      definition: 'Espacios cinematográficos que rodean y contienen al espectador',
      importance: 'fundamental',
      relatedTerms: ['inmersión', 'ambiente']
    },
    {
      term: 'Cybernetic Cinema',
      definition: 'Cine con retroalimentación entre obra y espectador',
      importance: 'important',
      relatedTerms: ['interactividad', 'retroalimentación']
    },
    {
      term: 'Post-Screen',
      definition: 'Más allá de superficies planas hacia espacios volumétricos',
      importance: 'important',
      relatedTerms: ['volumétrico', 'espacial']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de expansiones',
      description: 'Catalogar cómo la obra trasciende límites cinematográficos tradicionales',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Considerar expansiones espaciales, temporales, sensoriales',
        'Analizar rol del espectador-participante',
        'Incluir expansiones tecnológicas y conceptuales'
      ],
      commonMistakes: [
        'Confundir efectos especiales con verdadera expansión',
        'Ignorar implicaciones ontológicas de la expansión'
      ]
    },
    {
      order: 2,
      name: 'Análisis de inmersión',
      description: 'Examinar grados y tipos de inmersión sensorial y cognitiva',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Distinguir inmersión física de psicológica',
        'Analizar qué sentidos están involucrados',
        'Considerar libertad de movimiento y exploración'
      ]
    },
    {
      order: 3,
      name: 'Evaluación de agencia espectatorial',
      description: 'Analizar capacidad del espectador para afectar la experiencia',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Mapeo de espacialidad',
      description: 'Examinar cómo se construye y navega el espacio expandido',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis de retroalimentación',
      description: 'Estudiar loops cibernéticos entre sistema y usuario',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis experiencial',
      description: 'Integrar hallazgos sobre la experiencia expandida total',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Pionero en imaginar futuros cinematográficos ahora realizados',
    'Abraza potencial transformador de nuevas tecnologías',
    'Expande definición misma de qué puede ser cine',
    'Conecta con experiencias contemporáneas de medios',
    'Promueve experimentación radical'
  ],
  
  limitations: [
    'Costo prohibitivo de muchas tecnologías expandidas',
    'Accesibilidad limitada para audiencias',
    'Riesgo de fetichizar tecnología sobre contenido',
    'Dificultad de preservación y documentación',
    'Tensión entre espectáculo y arte'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Gene Youngblood'],
      title: 'Expanded Cinema',
      year: 1970,
      publisher: 'P. Dutton & Co.',
      essential: true
    },
    {
      type: 'book',
      authors: ['Kate Mondloch'],
      title: 'Screens: Viewing Media Installation Art',
      year: 2010,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jeremy Bailenson'],
      title: 'Experience on Demand: What Virtual Reality Is, How It Works, and What It Can Do',
      year: 2018,
      publisher: 'W.W. Norton',
      essential: false
    },
    {
      type: 'book',
      authors: ['Maria Engberg', 'Jay David Bolter'],
      title: 'Reality Media: Augmented and Virtual Reality',
      year: 2020,
      publisher: 'MIT Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Sleep No More',
        year: 2011,
        director: 'Punchdrunk'
      },
      analysisExcerpt: `Sleep No More expande el cine hacia teatro inmersivo habitado. Macbeth reimaginado en hotel de 5 pisos donde espectadores con máscaras deambulan libremente. No hay pantalla: el espacio arquitectónico ES el medio. Narrativa no-lineal fragmentada que cada espectador ensambla diferentemente según su recorrido. Sinestesia lograda: visual, sonora, táctil (pueden tocar objetos), olfativa (aromas en diferentes cuartos). Cybernetic: las acciones de espectadores afectan sutilmente las de performers. Duración expandida: 3 horas en loop continuo. Cada visita produce "film" único irreproducible.`,
      insightsGenerated: [
        'El espacio arquitectónico puede ser medio cinematográfico',
        'La agencia espectatorial produce narrativas únicas',
        'La repetición con variación crea temporalidad expandida'
      ],
      methodologyApplication: 'Análisis de inmersión total y narrativa espacializada emergente',
      keyFindings: [
        'El teatro inmersivo realiza visión de Youngblood',
        'La individualización extrema de experiencia desafía análisis tradicional',
        'El cuerpo del espectador se vuelve camarógrafo y editor'
      ]
    },
    {
      film: {
        title: 'Carne y Arena',
        year: 2017,
        director: 'Alejandro G. Iñárritu'
      },
      analysisExcerpt: `Iñárritu lleva VR más allá del espectáculo hacia embodiment ético. 6 minutos en desierto virtual como migrante cruzando frontera. Expansión radical: espectador descalzo sobre arena real sincronizada con virtual. No hay frame: vista 360° sitúa espectador DENTRO de la acción. Haptic feedback cuando helicóptero sobrevuela. Imposible mantener distancia: guardias fronterizos te apuntan directamente. Pre-show en celda fría replica condiciones de detención. Post-show con testimonios reales ancla experiencia virtual en realidad material. VR como máquina de empatía problemática pero potente.`,
      insightsGenerated: [
        'VR puede generar embodiment ético involuntario',
        'La expansión sensorial amplifica impacto político',
        'Los paratextos físicos son cruciales para meaning-making'
      ],
      methodologyApplication: 'Análisis de VR como tecnología de embodiment forzado',
      keyFindings: [
        'La eliminación del frame elimina distancia segura',
        'El cine expandido puede ser experiencia traumática productiva',
        'La materialidad (arena, frío) ancla lo virtual en lo real'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'installation-art',
      relationshipType: 'parallel',
      synergyDescription: 'Comparten interés en espacio y experiencia sobre objeto',
      combinedInsightPotential: 9
    },
    {
      id: 'game-studies',
      relationshipType: 'synthetic',
      synergyDescription: 'Videojuegos como forma de cine expandido interactivo',
      combinedInsightPotential: 8
    },
    {
      id: 'performance-studies',
      relationshipType: 'synthetic',
      synergyDescription: 'Performance en vivo se fusiona con tecnologías cinemáticas',
      combinedInsightPotential: 9
    }
  ],

  digitalTools: [
    {
      name: 'Unity',
      type: 'software',
      url: 'https://unity.com',
      description: 'Motor para crear experiencias VR/AR cinematográficas',
      cost: 'freemium',
      platforms: ['Windows', 'Mac', 'Linux']
    },
    {
      name: 'TouchDesigner',
      type: 'software',
      url: 'https://derivative.ca',
      description: 'Plataforma para instalaciones interactivas y multimedia',
      cost: 'freemium',
      platforms: ['Windows', 'Mac']
    },
    {
      name: 'Oculus Medium',
      type: 'software',
      description: 'Herramienta de creación escultórica en VR',
      cost: 'paid',
      platforms: ['Oculus']
    }
  ]
};
