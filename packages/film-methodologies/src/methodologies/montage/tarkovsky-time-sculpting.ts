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

export const TARKOVSKY_TIME_SCULPTING: Methodology = {
  metadata: {
    id: 'tarkovsky-time-sculpting',
    name: 'Esculpir en el Tiempo',
    author: 'Andrei Tarkovsky',
    year: 1986,
    category: 'montage',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['film-philosophy', 'temporal-arts'],
    culturalContext: 'Cine poético soviético tardío',
    language: 'es'
  },
  
  description: `Andrei Tarkovsky desarrolló una teoría radicalmente diferente del montaje, rechazando el montaje-colisión de Eisenstein en favor de lo que llamó "esculpir en el tiempo". Para Tarkovsky, la esencia del cine no es el montaje sino el tiempo capturado dentro del plano. El montaje debe respetar el "tiempo-presión" interno de cada plano, uniéndolos según su ritmo temporal inherente, no según conceptos abstractos. Tarkovsky argumentaba que el ritmo cinematográfico no se crea por la duración de los planos sino por la "intensidad temporal" dentro de ellos. Su concepto de "tiempo sellado" ve cada plano como conteniendo una cualidad temporal única que el director debe reconocer y preservar. Esta teoría privilegia la observación paciente y la duración contemplativa sobre el montaje manipulador.`,
  
  keyConcepts: [
    {
      term: 'Esculpir en el Tiempo',
      definition: 'El cine como arte de capturar y moldear tiempo, no de yuxtaponer imágenes',
      importance: 'fundamental',
      relatedTerms: ['tiempo', 'escultura temporal', 'duración']
    },
    {
      term: 'Tiempo-Presión',
      definition: 'Intensidad temporal interna de cada plano que determina el montaje',
      importance: 'fundamental',
      relatedTerms: ['presión temporal', 'intensidad', 'ritmo interno']
    },
    {
      term: 'Tiempo Sellado',
      definition: 'Cualidad temporal única e irrepetible capturada en cada plano',
      importance: 'fundamental',
      relatedTerms: ['sello temporal', 'unicidad', 'captura']
    },
    {
      term: 'Montaje Orgánico',
      definition: 'Unión de planos según su ritmo temporal interno compatible',
      importance: 'important',
      relatedTerms: ['organicidad', 'compatibilidad', 'flujo natural']
    },
    {
      term: 'Observación Paciente',
      definition: 'Contemplación prolongada que revela verdad temporal',
      importance: 'important',
      relatedTerms: ['contemplación', 'paciencia', 'revelación']
    },
    {
      term: 'Lógica Poética',
      definition: 'Asociaciones no-lineales basadas en memoria y sueño',
      importance: 'important',
      relatedTerms: ['poesía', 'asociación', 'no-linealidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de tiempo-presión',
      description: 'Detectar la intensidad temporal en cada plano',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'No es duración sino intensidad interna',
        'Cada plano tiene su propio tiempo',
        'Sentir más que analizar'
      ],
      commonMistakes: [
        'Confundir duración con presión temporal',
        'Ignorar sutilezas del tiempo interno'
      ]
    },
    {
      order: 2,
      name: 'Análisis de tiempo sellado',
      description: 'Examinar cualidad temporal única de planos',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Cada momento es irrepetible',
        'Buscar la verdad temporal del instante',
        'No imponer tiempo externo'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de montaje orgánico',
      description: 'Identificar uniones naturales según tiempo interno',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Examen de observación',
      description: 'Analizar momentos de contemplación paciente',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de ritmo interior',
      description: 'Distinguir ritmo interno de métrica externa',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis de lógica poética',
      description: 'Examinar asociaciones no-causales',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 7,
      name: 'Evaluación de autenticidad temporal',
      description: 'Verificar verdad de duración',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Alternativa profunda al montaje manipulador',
    'Respeto profundo por el tiempo real',
    'Dimensión filosófica y espiritual única',
    'Crea experiencias cinematográficas trascendentes',
    'Influencia enorme en cine contemplativo',
    'Poética cinematográfica sin igual'
  ],
  
  limitations: [
    'Rechazo dogmático de tradición importante',
    'Puede resultar pretencioso o inaccesible',
    'Aplicación muy restrictiva',
    'Requiere paciencia extrema del espectador',
    'Idealización del plano largo'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Andrei Tarkovsky'],
      title: 'Sculpting in Time: Reflections on the Cinema',
      year: 1986,
      publisher: 'University of Texas Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Andrei Tarkovsky'],
      title: 'Time Within Time: The Diaries 1970-1986',
      year: 1994,
      publisher: 'Faber & Faber',
      essential: false
    },
    {
      type: 'book',
      authors: ['Vida T. Johnson', 'Graham Petrie'],
      title: 'The Films of Andrei Tarkovsky: A Visual Fugue',
      year: 1994,
      publisher: 'Indiana University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Stalker',
        year: 1979,
        director: 'Andrei Tarkovsky'
      },
      analysisExcerpt: `Stalker ejemplifica perfectamente el esculpir en el tiempo. Cada zona tiene su tiempo-presión específico: mundo exterior mecánico, Zona orgánica, Cuarto místico. Planos largos que capturan tiempo sellado irrepetible: el viaje en vagoneta, los sueños. Montaje orgánico: cortes solo cuando presiones temporales son compatibles. Observación paciente: objetos en agua, rostros en contemplación. Ritmo determinado por intensidad interna, no duración. Lógica poética de memoria y deseo, no causalidad.`,
      insightsGenerated: [
        'Diferentes espacios contienen diferentes tiempos',
        'La duración revela lo invisible',
        'El montaje puede respetar en vez de manipular'
      ],
      methodologyApplication: 'Demostración completa de esculpir tiempo vs. montar imágenes',
      keyFindings: [
        'El tiempo es la materia prima del cine',
        'La contemplación es forma de conocimiento',
        'El montaje orgánico crea flujo meditativo'
      ]
    },
    {
      film: {
        title: 'Sátántangó',
        year: 1994,
        director: 'Béla Tarr'
      },
      analysisExcerpt: `Béla Tarr hereda y radicaliza a Tarkovsky. 7 horas de tiempo esculpido. Tiempo-presión del hastío y decadencia rural. Planos de hasta 10 minutos sellando tiempo real. Montaje prácticamente eliminado: cuando corta, es cataclismo. Observación más allá de la paciencia: lluvia, barro, caminatas. El tiempo se vuelve personaje principal. Lógica circular, no poética. La duración como experiencia física, no contemplativa.`,
      insightsGenerated: [
        'Tarkovsky llevado al extremo se vuelve otra cosa',
        'El tiempo puede ser opresivo, no solo revelador',
        'La eliminación del montaje es statement radical'
      ],
      methodologyApplication: 'Radicalización de los principios tarkovskianos',
      keyFindings: [
        'Esculpir tiempo puede volverse brutalidad temporal',
        'La observación extrema revela el vacío',
        'El anti-montaje como postura política'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'eisenstein-montage',
      relationshipType: 'dialectical',
      synergyDescription: 'Tarkovsky rechaza explícitamente el montaje-colisión de Eisenstein',
      combinedInsightPotential: 7
    },
    {
      id: 'slow-cinema',
      relationshipType: 'hierarchical',
      synergyDescription: 'Tarkovsky como padre del cine lento contemporáneo',
      combinedInsightPotential: 9
    },
    {
      id: 'bazin-realism',
      relationshipType: 'complementary',
      synergyDescription: 'Ambos privilegian la duración y profundidad sobre montaje',
      combinedInsightPotential: 9
    }
  ]
};
