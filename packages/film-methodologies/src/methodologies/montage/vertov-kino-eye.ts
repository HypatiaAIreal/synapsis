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

export const VERTOV_KINO_EYE: Methodology = {
  metadata: {
    id: 'vertov-kino-eye',
    name: 'Cine-Ojo (Kino-Glaz)',
    author: 'Dziga Vertov',
    year: 1922,
    category: 'montage',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['documentary-theory', 'soviet-montage'],
    culturalContext: 'Constructivismo soviético',
    language: 'es'
  },
  
  description: `Dziga Vertov radicalizó la teoría del montaje con su concepto del "Cine-Ojo" (Kino-Glaz), que buscaba capturar la vida "de improviso" y revelar verdades invisibles al ojo humano mediante el montaje. Vertov rechazaba el cine narrativo como "opio del pueblo", proponiendo en cambio un cine de hechos organizados mediante el montaje para producir verdad visual. Su teoría del "intervalo" - el movimiento entre planos - enfatizaba las transiciones y correlaciones sobre los planos individuales. Vertov desarrolló el concepto de "cine-verdad" (kino-pravda) donde el montaje no manipula sino que desvela estructuras ocultas de la realidad. Para Vertov, el montaje era un proceso de pensamiento visual que podía revelar las conexiones materiales del mundo socialista en construcción, haciendo del camarógrafo-editor un ingeniero de la percepción humana.`,
  
  keyConcepts: [
    {
      term: 'Cine-Ojo (Kino-Glaz)',
      definition: 'Visión mecánica superior al ojo humano que revela verdades ocultas',
      importance: 'fundamental',
      relatedTerms: ['visión mecánica', 'ojo-máquina']
    },
    {
      term: 'Vida de Improviso',
      definition: 'Captura no preparada de la realidad sin puesta en escena',
      importance: 'fundamental',
      relatedTerms: ['espontaneidad', 'realidad no mediada']
    },
    {
      term: 'Intervalos',
      definition: 'Movimiento y correlación entre planos más importante que planos mismos',
      importance: 'fundamental',
      relatedTerms: ['transición', 'correlación', 'movimiento']
    },
    {
      term: 'Cine-Verdad (Kino-Pravda)',
      definition: 'Revelación de verdades mediante organización de hechos filmados',
      importance: 'fundamental',
      relatedTerms: ['verdad visual', 'factografía']
    },
    {
      term: 'Teoría de Intervalos',
      definition: 'Sistema de correlaciones basado en movimiento, velocidad, dirección',
      importance: 'important',
      relatedTerms: ['sistema', 'correlación dinámica']
    },
    {
      term: 'Hombre con Cámara',
      definition: 'Cyborg perceptual: fusión de humano y máquina cinematográfica',
      importance: 'important',
      relatedTerms: ['kinok', 'cine-operador']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de vida de improviso',
      description: 'Localizar momentos no preparados o espontáneos',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar momentos que parecen "robados" a la realidad',
        'Identificar ausencia de puesta en escena',
        'Notar reacciones genuinas no actuadas'
      ],
      commonMistakes: [
        'Confundir estilo documental con vida de improviso real',
        'No reconocer staging sutil'
      ]
    },
    {
      order: 2,
      name: 'Análisis de intervalos',
      description: 'Examinar las transiciones y movimientos entre planos',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Enfocarse en el "entre" más que en los planos',
        'Analizar correlaciones de movimiento/ritmo',
        'Buscar patrones en las transiciones'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de correlaciones',
      description: 'Identificar cómo los planos se relacionan dinámicamente',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Correlaciones pueden ser visuales, rítmicas, conceptuales',
        'Buscar sistemas de relaciones no narrativas'
      ]
    },
    {
      order: 4,
      name: 'Examen de revelaciones',
      description: 'Analizar qué verdades se desvelan mediante el montaje',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de factografía',
      description: 'Examinar la organización de hechos documentados',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis del ritmo mecánico',
      description: 'Estudiar el tempo de máquina del montaje',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 7,
      name: 'Evaluación de la visión no-humana',
      description: 'Analizar perspectivas imposibles para el ojo humano',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Radicalidad experimental sin precedentes',
    'Unión perfecta de teoría y práctica',
    'Anticipa el cine-ensayo moderno',
    'Reflexividad cinematográfica pionera',
    'Visión utópica tecnológicamente productiva',
    'Influencia fundamental en documental'
  ],
  
  limitations: [
    'Rechazo dogmático del cine de ficción',
    'Utopismo ideológico fechado',
    'Complejidad práctica de implementación',
    'Accesibilidad limitada para audiencias',
    'Idealización excesiva de la tecnología'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Dziga Vertov'],
      title: 'Kino-Eye: The Writings of Dziga Vertov',
      year: 1984,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Annette Michelson'],
      title: 'Kino-Eye: The Writings of Dziga Vertov',
      year: 1984,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Vlada Petric'],
      title: 'Constructivism in Film: The Man with the Movie Camera',
      year: 1987,
      publisher: 'Cambridge University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['John MacKay'],
      title: 'Dziga Vertov: Life and Work',
      year: 2018,
      publisher: 'Academic Studies Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Man with a Movie Camera',
        year: 1929,
        director: 'Dziga Vertov'
      },
      analysisExcerpt: `La obra maestra de Vertov ejemplifica todos sus principios. Sin narrativa, solo vida urbana soviética capturada "de improviso". Los intervalos crean ritmos de máquinas, tranvías, trabajo. Correlaciones: ojo humano/lente de cámara, despertar ciudad/despertar ciudadana, máquinas industriales/máquina cinematográfica. El montaje revela la sinfonía oculta de la modernidad. Autorreflexividad radical: vemos al camarógrafo filmando, la editora montando. El Cine-Ojo desvela las conexiones materiales del socialismo en construcción. Tempo mecánico-musical sin precedentes.`,
      insightsGenerated: [
        'El intervalo como principio organizador supera la narrativa',
        'La reflexividad puede ser revolucionaria, no narcisista',
        'La ciudad moderna requiere un ojo mecánico para ser comprendida'
      ],
      methodologyApplication: 'Demostración completa del Cine-Ojo en práctica',
      keyFindings: [
        'El montaje puede revelar sin manipular',
        'La vida cotidiana contiene ritmos cinematográficos',
        'El cine puede ser pensamiento visual puro'
      ]
    },
    {
      film: {
        title: 'Koyaanisqatsi',
        year: 1982,
        director: 'Godfrey Reggio'
      },
      analysisExcerpt: `Koyaanisqatsi es el heredero directo de Vertov. "Vida fuera de balance" revelada mediante montaje puro. Sin narrativa ni diálogo, solo correlaciones visuales/musicales. Intervalos entre naturaleza/tecnología, individual/masa, lento/acelerado. Time-lapse y slow-motion funcionan como Cine-Ojo contemporáneo, revelando patrones invisibles. El montaje desvela la locura de la civilización moderna. Glass compone basándose en los intervalos de Vertov. La factografía ecológica mediante organización rítmica de imágenes.`,
      insightsGenerated: [
        'Los principios de Vertov trascienden su contexto soviético',
        'El Cine-Ojo puede revelar crisis ecológicas',
        'La música puede funcionar como sistema de intervalos'
      ],
      methodologyApplication: 'Actualización de Vertov para era ecológica',
      keyFindings: [
        'El método documental de Vertov sigue vigente',
        'Los intervalos pueden operar a escala global',
        'La vida de improviso incluye procesos geológicos'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'eisenstein-montage',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos revolucionan el montaje pero Vertov rechaza la ficción que Eisenstein abraza',
      combinedInsightPotential: 8
    },
    {
      id: 'cinema-verite',
      relationshipType: 'hierarchical',
      synergyDescription: 'Cinema verité toma el nombre pero traiciona principios de Vertov',
      combinedInsightPotential: 7
    },
    {
      id: 'structural-film',
      relationshipType: 'synthetic',
      synergyDescription: 'El cine estructural radicaliza la reflexividad de Vertov',
      combinedInsightPotential: 8
    }
  ]
};
