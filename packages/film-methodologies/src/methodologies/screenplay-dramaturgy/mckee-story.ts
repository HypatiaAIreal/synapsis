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

export const MCKEE_STORY: Methodology = {
  metadata: {
    id: 'mckee-story',
    name: 'Story',
    author: 'Robert McKee',
    year: 1997,
    category: 'screenplay-dramaturgy',
    complexity: 'advanced',
    timeToLearn: 50,
    prerequisities: ['basic-screenwriting'],
    culturalContext: 'Teoría narrativa cinematográfica americana',
    language: 'es'
  },
  
  description: `Robert McKee desarrolló una teoría comprehensiva que va más allá de las fórmulas estructurales para explorar los principios fundamentales de la narración. Su enfoque se centra en el concepto de "valores narrativos" - cualidades de la experiencia humana que pueden cambiar de positivo a negativo o viceversa (vida/muerte, amor/odio, libertad/esclavitud). McKee argumenta que las historias son metáforas de la vida y que el cambio de valores es el motor de toda narrativa significativa. Su análisis distingue entre archplot, miniplot y antiplot, reconociendo la validez de diferentes aproximaciones narrativas. McKee enfatiza la importancia del subtexto, el conflicto en múltiples niveles, y la progresión de escenas a través de "beats" de comportamiento.`,
  
  keyConcepts: [
    {
      term: 'Valores Narrativos',
      definition: 'Cualidades binarias de experiencia humana que pueden cambiar de positivo a negativo',
      importance: 'fundamental',
      relatedTerms: ['cambio', 'conflicto', 'significado']
    },
    {
      term: 'Brecha entre Expectativa y Resultado',
      definition: 'La diferencia entre lo que el personaje espera y lo que realmente ocurre',
      importance: 'fundamental',
      relatedTerms: ['conflicto', 'sorpresa', 'revelación']
    },
    {
      term: 'Beats',
      definition: 'Intercambios de comportamiento que cambian valores en nivel micro',
      importance: 'fundamental',
      relatedTerms: ['acción/reacción', 'comportamiento', 'cambio']
    },
    {
      term: 'Archplot/Miniplot/Antiplot',
      definition: 'Diseño clásico / Minimalista / Anti-estructura narrativa',
      importance: 'important',
      relatedTerms: ['estructura', 'diseño narrativo']
    },
    {
      term: 'Principio Controlador',
      definition: 'El tema expresado como el cambio de valor final e irreversible',
      importance: 'important',
      relatedTerms: ['tema', 'significado', 'mensaje']
    },
    {
      term: 'Crisis/Clímax/Resolución',
      definition: 'Decisión bajo máxima presión / Acción resultante / Nuevo equilibrio',
      importance: 'fundamental',
      relatedTerms: ['estructura', 'punto de giro']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de valores en juego',
      description: 'Determinar qué valores humanos están en riesgo en la historia',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar pares opuestos: vida/muerte, amor/odio, verdad/mentira',
        'Identificar valores primarios y secundarios',
        'Los valores deben ser universalmente comprensibles'
      ],
      commonMistakes: [
        'Confundir valores con objetivos',
        'Elegir valores demasiado abstractos o específicos'
      ]
    },
    {
      order: 2,
      name: 'Mapeo de cambios de valor',
      description: 'Rastrear cómo los valores cambian de positivo a negativo y viceversa',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Analizar cada escena buscando cambios',
        'Los mejores cambios son inesperados pero inevitables',
        'Buscar progresión en la intensidad de cambios'
      ]
    },
    {
      order: 3,
      name: 'Análisis de beats',
      description: 'Examinar los micro-cambios dentro de cada escena',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Cada línea de diálogo puede ser un beat',
        'Buscar acción/reacción que altere relaciones',
        'Los silencios también pueden ser beats'
      ]
    },
    {
      order: 4,
      name: 'Identificación del diseño narrativo',
      description: 'Determinar si es archplot, miniplot o antiplot',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Archplot: causalidad clara, final cerrado, protagonista activo',
        'Miniplot: final abierto, protagonista pasivo, minimalista',
        'Antiplot: coincidencia, tiempo no lineal, realidades inconsistentes'
      ]
    },
    {
      order: 5,
      name: 'Análisis de la brecha',
      description: 'Examinar momentos donde la realidad traiciona las expectativas',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Los mejores momentos dramáticos explotan esta brecha',
        'La brecha revela verdades sobre personajes y mundo',
        'Genera tanto conflicto como revelación'
      ]
    },
    {
      order: 6,
      name: 'Determinación del principio controlador',
      description: 'Identificar el significado final de la historia',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Profundidad analítica sin recurrir a fórmulas rígidas',
    'Aplicable a todo tipo de narrativas y géneros',
    'Énfasis en significado y valores humanos universales',
    'Reconoce y valida diversidad de formas narrativas',
    'Integra todos los elementos narrativos cohesivamente',
    'Base filosófica sólida sobre la naturaleza de las historias'
  ],
  
  limitations: [
    'Complejidad puede intimidar a principiantes',
    'Sesgo hacia narrativas dramáticas sobre otros géneros',
    'Menos práctica inmediata que otros métodos',
    'Requiere comprensión profunda de principios abstractos',
    'Puede intelectualizar excesivamente el proceso creativo'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Robert McKee'],
      title: 'Story: Substance, Structure, Style, and the Principles of Screenwriting',
      year: 1997,
      publisher: 'ReganBooks',
      essential: true
    },
    {
      type: 'book',
      authors: ['Robert McKee'],
      title: 'Dialogue: The Art of Verbal Action',
      year: 2016,
      publisher: 'Twelve',
      essential: true
    },
    {
      type: 'book',
      authors: ['Robert McKee'],
      title: 'Character: The Art of Role and Cast Design',
      year: 2021,
      publisher: 'Twelve',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Chinatown',
        year: 1974,
        director: 'Roman Polanski'
      },
      analysisExcerpt: `McKee frecuentemente cita Chinatown como ejemplo maestro. Valor central: Justicia ↔ Injusticia. Jake Gittes comienza creyendo en la justicia alcanzable, cada revelación profundiza la corrupción. La brecha se amplía progresivamente: espera resolver un caso de infidelidad, descubre conspiración de agua; espera proteger a Evelyn, causa su muerte; espera justicia, encuentra corrupción institucional total. Beats magistrales en la escena "She's my sister/daughter". Principio controlador: "La corrupción del poder es tan profunda que destruye incluso a quienes buscan justicia."`,
      insightsGenerated: [
        'Cada escena profundiza el cambio de valor justicia→injusticia',
        'La brecha entre expectativa y resultado impulsa toda la trama',
        'El clímax hace irreversible el triunfo de la injusticia'
      ],
      methodologyApplication: 'Análisis exhaustivo de cambios de valor y progresión hacia la injusticia total',
      keyFindings: [
        'Los valores narrativos unifican todos los elementos de la película',
        'La brecha creciente crea momentum narrativo imparable',
        'El principio controlador emerge orgánicamente de la acción'
      ]
    },
    {
      film: {
        title: 'Breaking Bad',
        year: 2008,
        director: 'Vince Gilligan'
      },
      analysisExcerpt: `Serie que ejemplifica el cambio de valores extremo. Valor primario: Bien ↔ Mal. Walter White: maestro con cáncer → narcotraficante despiadado. Cada episodio marca un cambio incremental pero irreversible. La brecha constantemente traiciona las justificaciones de Walt: cocina para su familia → destruye su familia; busca seguridad financiera → se vuelve adicto al poder. Miniplot elementos: final relativamente abierto, múltiples protagonistas. Principio controlador: "El camino al mal está pavimentado con auto-justificaciones."`,
      insightsGenerated: [
        'La transformación gradual es más impactante que la súbita',
        'Cada decisión cierra posibilidades de redención',
        'Los valores secundarios (familia, orgullo) complican el primario'
      ],
      methodologyApplication: 'Rastreo episódico de degradación moral a través de cambios de valor',
      keyFindings: [
        'Las series permiten cambios de valor más graduales y complejos',
        'La brecha entre intención y resultado revela carácter',
        'McKee aplicable a narrativas televisivas largas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'egri-dramatic-writing',
      relationshipType: 'complementary',
      synergyDescription: 'McKee expande el concepto de premisa de Egri hacia valores narrativos',
      combinedInsightPotential: 8
    },
    {
      id: 'truby-anatomy',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos buscan principios profundos pero Truby enfoca más en estructura orgánica',
      combinedInsightPotential: 9
    },
    {
      id: 'aristotle-poetics',
      relationshipType: 'complementary',
      synergyDescription: 'McKee actualiza principios aristotélicos para el cine moderno',
      combinedInsightPotential: 9
    }
  ],
  
  digitalTools: [
    {
      name: 'Storyline Creator',
      type: 'software',
      description: 'Herramienta para mapear cambios de valor según McKee',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    },
    {
      name: 'McKee Story Seminars',
      type: 'webapp',
      url: 'https://mckeestory.com',
      description: 'Seminarios oficiales de McKee en formato online',
      cost: 'paid',
      platforms: ['web']
    }
  ]
};
