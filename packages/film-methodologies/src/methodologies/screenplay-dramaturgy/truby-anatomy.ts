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

export const TRUBY_ANATOMY: Methodology = {
  metadata: {
    id: 'truby-anatomy',
    name: 'Anatomía del Guión',
    author: 'John Truby',
    year: 2007,
    category: 'screenplay-dramaturgy',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['basic-screenwriting'],
    culturalContext: 'Teoría orgánica de desarrollo narrativo',
    language: 'es'
  },
  
  description: `John Truby desarrolló uno de los sistemas más sofisticados y orgánicos para la construcción narrativa, rechazando la estructura mecánica de tres actos en favor de un desarrollo que emerge naturalmente del personaje y la premisa. Su método de "22 pasos" no es una fórmula rígida sino bloques de construcción que pueden reorganizarse según las necesidades de cada historia. Truby enfatiza la creación de una "premisa narrativa" que contenga el potencial para el cambio del personaje, y el desarrollo de un "argumento moral" que explore dilemas éticos profundos. Su concepto de "diseño de la premisa" examina cómo combinar géneros y símbolos para crear historias únicas. También introdujo la "red de personajes" donde cada personaje representa una variación del tema central.`,
  
  keyConcepts: [
    {
      term: '22 Pasos de Construcción',
      definition: 'Bloques narrativos flexibles desde auto-revelación inicial hasta nuevo equilibrio',
      importance: 'fundamental',
      relatedTerms: ['estructura orgánica', 'desarrollo natural']
    },
    {
      term: 'Premisa Narrativa',
      definition: 'Una oración que contiene personaje, deseo y potencial de cambio',
      importance: 'fundamental',
      relatedTerms: ['concepto', 'idea central']
    },
    {
      term: 'Debilidad y Necesidad',
      definition: 'Fallo psicológico y necesidad moral que el héroe debe superar',
      importance: 'fundamental',
      relatedTerms: ['arco de personaje', 'transformación']
    },
    {
      term: 'Red de Personajes',
      definition: 'Sistema donde cada personaje representa una variación del tema',
      importance: 'important',
      relatedTerms: ['orquestación', 'variaciones temáticas']
    },
    {
      term: 'Auto-Revelación',
      definition: 'Momento cuando el héroe comprende su debilidad y cambia moralmente',
      importance: 'fundamental',
      relatedTerms: ['epifanía', 'cambio moral']
    },
    {
      term: 'Argumento Moral',
      definition: 'La exploración ética que subyace a la acción narrativa',
      importance: 'important',
      relatedTerms: ['tema', 'dilema ético']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Creación de la premisa narrativa',
      description: 'Desarrollar una oración que contenga el potencial completo de la historia',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Incluir personaje, situación y potencial de cambio',
        'Debe sugerir principio, medio y final',
        'Evitar premisas que no sugieran transformación'
      ],
      commonMistakes: [
        'Confundir premisa con logline o sinopsis',
        'Crear premisas sin potencial de cambio'
      ]
    },
    {
      order: 2,
      name: 'Identificación de debilidad/necesidad',
      description: 'Determinar el fallo psicológico y la necesidad moral del héroe',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'La debilidad debe causar problemas al héroe y otros',
        'La necesidad moral involucra cómo trata a otros',
        'Deben estar conectadas orgánicamente'
      ]
    },
    {
      order: 3,
      name: 'Diseño de la red de personajes',
      description: 'Crear personajes que representen variaciones del tema',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Cada personaje debe iluminar un aspecto del tema',
        'El oponente debe atacar la debilidad principal',
        'Los aliados representan caminos alternativos'
      ]
    },
    {
      order: 4,
      name: 'Mapeo de los 22 pasos',
      description: 'Organizar los bloques narrativos en orden orgánico',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'No todos los pasos son necesarios',
        'El orden puede variar según la historia',
        'Enfocarse en la lógica interna, no en fórmulas'
      ]
    },
    {
      order: 5,
      name: 'Desarrollo del argumento moral',
      description: 'Tejer la exploración ética a través de la acción',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Cada escena debe avanzar el argumento moral',
        'Evitar sermones, explorar mediante acción',
        'El clímax debe resolver el dilema moral'
      ]
    },
    {
      order: 6,
      name: 'Diseño de la auto-revelación',
      description: 'Crear el momento de comprensión y cambio del héroe',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Enfoque orgánico que surge del personaje y tema',
    'Profundidad psicológica y moral sofisticada',
    'Flexibilidad para diferentes tipos de historias',
    'Integración de todos los elementos narrativos',
    'Énfasis en originalidad y evitar clichés',
    'Herramientas para crear historias temáticamente ricas'
  ],
  
  limitations: [
    'Complejidad puede abrumar a principiantes',
    'Requiere tiempo considerable de desarrollo',
    'Menos intuitiva que métodos más simples',
    'Puede sobre-intelectualizar el proceso creativo',
    'Difícil de aplicar bajo presión de tiempo'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['John Truby'],
      title: 'The Anatomy of Story: 22 Steps to Becoming a Master Storyteller',
      year: 2007,
      publisher: 'Faber & Faber',
      essential: true
    },
    {
      type: 'book',
      authors: ['John Truby'],
      title: 'Great Screenwriting: Audio Course',
      year: 2004,
      publisher: 'The Writers Studio',
      essential: false
    },
    {
      type: 'web',
      authors: ['John Truby'],
      title: 'Comedy Writing: Audio Course',
      year: 2006,
      publisher: 'The Writers Studio',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola'
      },
      analysisExcerpt: `Ejemplo maestro del método Truby. Premisa: "El hijo menor de una familia criminal se convierte en el nuevo Don, perdiendo su alma en el proceso." Debilidad: Michael cree ser moralmente superior a su familia. Necesidad: Aceptar su verdadera naturaleza. Red de personajes: Vito (viejo orden), Sonny (violencia sin control), Tom (razón sin poder), Kay (mundo legítimo). Cada uno representa una opción para Michael. Auto-revelación: "I'm smart" - Michael acepta que es como su familia pero más efectivo. El argumento moral explora si la familia justifica la corrupción moral.`,
      insightsGenerated: [
        'La red de personajes crea un sistema temático completo',
        'La auto-revelación es oscura: aceptación de corrupción',
        'El argumento moral no ofrece respuestas fáciles'
      ],
      methodologyApplication: 'Análisis de cómo cada elemento sirve a la exploración moral central',
      keyFindings: [
        'Truby excelente para tragedias morales complejas',
        'La debilidad del héroe puede ser su creencia en su superioridad moral',
        'Los 22 pasos se reorganizan para servir a la lógica interna'
      ]
    },
    {
      film: {
        title: 'The Dark Knight',
        year: 2008,
        director: 'Christopher Nolan'
      },
      analysisExcerpt: `Estructura Truby en superhéroe deconstruido. Premisa: "Un vigilante debe decidir hasta dónde llegará para detener el caos." Debilidad de Batman: Cree que puede controlar el crimen sin corromperse. Necesidad: Aceptar límites morales o volverse el monstruo. Red: Joker (caos puro), Harvey Dent (orden corrompible), Gordon (compromiso pragmático), Rachel (vida normal imposible). El Joker como oponente perfecto ataca directamente la debilidad de Batman. Auto-revelación: Batman acepta ser el villano que Gotham necesita. Argumento moral sobre los límites del heroísmo.`,
      insightsGenerated: [
        'El oponente (Joker) diseñado para exponer la debilidad del héroe',
        'Cada personaje representa una respuesta al dilema moral',
        'La auto-revelación puede ser aceptar un rol negativo por bien mayor'
      ],
      methodologyApplication: 'Red de personajes como variaciones sobre orden vs caos',
      keyFindings: [
        'Truby aplicable a blockbusters con profundidad',
        'El género superhéroe puede explorar dilemas morales sofisticados',
        'La victoria puede requerir auto-sacrificio moral'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'mckee-story',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos buscan profundidad pero McKee enfoca valores, Truby enfoca moral',
      combinedInsightPotential: 9
    },
    {
      id: 'egri-dramatic-writing',
      relationshipType: 'complementary',
      synergyDescription: 'Truby expande el concepto de premisa de Egri considerablemente',
      combinedInsightPotential: 8
    },
    {
      id: 'campbell-hero-journey',
      relationshipType: 'dialectical',
      synergyDescription: 'Truby ofrece alternativa más flexible al viaje del héroe',
      combinedInsightPotential: 7
    }
  ],
  
  digitalTools: [
    {
      name: 'Truby\'s Blockbuster Software',
      type: 'software',
      description: 'Software oficial con los 22 pasos y herramientas de Truby',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    },
    {
      name: 'StoryWeaver',
      type: 'software',
      description: 'Alternativa que incluye conceptos de Truby',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    }
  ]
};
