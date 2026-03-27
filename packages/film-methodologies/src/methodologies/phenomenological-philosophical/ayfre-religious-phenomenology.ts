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

export const AYFRE_RELIGIOUS_PHENOMENOLOGY: Methodology = {
  metadata: {
    id: 'ayfre-religious-phenomenology',
    name: 'Fenomenología Religiosa del Cine',
    author: 'Amédée Ayfre',
    year: 1964,
    category: 'phenomenological-philosophical',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['phenomenology-basics', 'religious-studies'],
    culturalContext: 'Fenomenología católica francesa',
    language: 'es'
  },
  
  description: `Amédée Ayfre, sacerdote y fenomenólogo francés, desarrolló una aproximación única que combina fenomenología con sensibilidad religiosa para analizar cómo el cine puede revelar dimensiones espirituales de la existencia. Su concepto de "realismo fenomenológico" busca films que muestren la realidad en su misterio y profundidad, no reduciéndola a explicaciones causales. Ayfre distingue entre "presencia" (revelación del ser) y "representación" (imitación superficial), valorando el cine que logra hacer presente lo invisible en lo visible. Su análisis del "estilo transcendental" identifica técnicas cinematográficas (tiempo muerto, elipsis, silencio) que abren la imagen a la trascendencia.`,
  
  keyConcepts: [
    {
      term: 'Realismo Fenomenológico',
      definition: 'Captación de la realidad en su misterio y profundidad espiritual',
      importance: 'fundamental',
      relatedTerms: ['misterio', 'profundidad', 'revelación']
    },
    {
      term: 'Presencia vs. Representación',
      definition: 'Revelación del ser versus mera imitación externa',
      importance: 'fundamental',
      relatedTerms: ['manifestación', 'epifanía', 'apariencia']
    },
    {
      term: 'Sacramento Secular',
      definition: 'El cine como signo eficaz de realidades espirituales sin dogmatismo',
      importance: 'important',
      relatedTerms: ['signo', 'gracia', 'mediación']
    },
    {
      term: 'Estilo Transcendental',
      definition: 'Técnicas que abren la imagen a dimensiones espirituales',
      importance: 'important',
      relatedTerms: ['apertura', 'transcendencia', 'técnica espiritual']
    },
    {
      term: 'Tiempo de Gracia',
      definition: 'Duración que permite manifestación de lo sagrado',
      importance: 'important',
      relatedTerms: ['duración sagrada', 'tiempo kairós', 'momento revelador']
    },
    {
      term: 'Atención Reverente',
      definition: 'Mirada contemplativa que permite emergencia del misterio',
      importance: 'important',
      relatedTerms: ['contemplación', 'respeto', 'apertura']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Búsqueda de presencias',
      description: 'Identificar momentos de revelación del ser, no representación',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar momentos donde lo invisible se hace visible',
        'Identificar epifanías cotidianas',
        'Distinguir presencia auténtica de simbolismo forzado'
      ],
      commonMistakes: [
        'Confundir simbolismo religioso con presencia',
        'Buscar solo en films explícitamente religiosos'
      ]
    },
    {
      order: 2,
      name: 'Identificación de estilo transcendental',
      description: 'Localizar técnicas que abren a la transcendencia',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Buscar uso significativo del silencio',
        'Identificar tiempos muertos reveladores',
        'Notar elipsis que sugieren misterio'
      ]
    },
    {
      order: 3,
      name: 'Análisis de tiempos de gracia',
      description: 'Examinar duraciones que permiten manifestación sagrada',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Exploración de atención reverente',
      description: 'Analizar la cualidad contemplativa de la mirada',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Búsqueda del misterio cotidiano',
      description: 'Identificar lo sagrado en lo ordinario',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis espiritual',
      description: 'Integrar hallazgos sin imponer interpretación dogmática',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Atiende dimensión espiritual generalmente ignorada',
    'No dogmático ni proselitista',
    'Valoriza contemplación y silencio',
    'Análisis sutil de presencias',
    'Abre cine a transcendencia',
    'Respeta misterio sin reducirlo'
  ],
  
  limitations: [
    'Sesgo cristiano aunque no exclusivo',
    'Privilegia ciertos estilos contemplativos',
    'Menos sistemático que otros enfoques',
    'Aplicación puede ser subjetiva',
    'Poco conocido fuera de círculos especializados',
    'Puede mistificar excesivamente'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Amédée Ayfre'],
      title: 'Le Cinéma et sa vérité',
      year: 1969,
      publisher: 'Éditions du Cerf',
      essential: true
    },
    {
      type: 'book',
      authors: ['Amédée Ayfre'],
      title: 'Conversion aux images?',
      year: 1964,
      publisher: 'Éditions du Cerf',
      essential: true
    },
    {
      type: 'book',
      authors: ['Paul Schrader'],
      title: 'Transcendental Style in Film: Ozu, Bresson, Dreyer',
      year: 1972,
      publisher: 'Da Capo Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Henri Agel'],
      title: 'Le Cinéma et le Sacré',
      year: 1961,
      publisher: 'Éditions du Cerf',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Diary of a Country Priest',
        year: 1951,
        director: 'Robert Bresson'
      },
      analysisExcerpt: `El film de Bresson ejemplifica perfectamente el realismo fenomenológico de Ayfre. No representa la santidad sino que la hace presente mediante estilo austero. Presencias: la gracia en gestos mínimos, lo sagrado en objetos cotidianos (pan, vino). Tiempo de gracia en las pausas y silencios. Elipsis que sugieren misterio sin explicarlo. La voz en off no psicologiza sino que mantiene distancia contemplativa. El rostro del sacerdote como epifanía. La muerte final no como tragedia sino como consumación mística.`,
      insightsGenerated: [
        'La austeridad formal puede ser vehículo de lo sagrado',
        'La gracia se manifiesta en lo mínimo y cotidiano',
        'El misterio se preserva mediante la elipsis'
      ],
      methodologyApplication: 'Análisis de presencia espiritual mediante estilo transcendental',
      keyFindings: [
        'Bresson crea "sacramento secular" cinematográfico',
        'El estilo transcendental revela sin explicar',
        'Lo sagrado emerge de la atención reverente a lo real'
      ]
    },
    {
      film: {
        title: 'The Tree of Life',
        year: 2011,
        director: 'Terrence Malick'
      },
      analysisExcerpt: `Malick actualiza la fenomenología religiosa mediante imágenes de creación y gracia. Presencia cósmica en secuencia del universo: no ilustración sino manifestación. Tiempo de infancia como tiempo de gracia donde todo es epifánico. Susurros en voice-over como oración contemplativa. Naturaleza vs. Gracia encarnadas en los padres. La luz natural como presencia divina inmanente. El film no argumenta sobre Dios sino que hace presente el misterio del ser. Final: reconciliación mística más allá de explicación.`,
      insightsGenerated: [
        'El cine puede ser oración visual contemporánea',
        'La creación entera puede ser sacramento secular',
        'La memoria puede ser vehículo de gracia'
      ],
      methodologyApplication: 'Fenomenología religiosa en cine mainstream contemporáneo',
      keyFindings: [
        'La visión religiosa puede expresarse sin dogma',
        'Las imágenes naturales pueden ser teofanías',
        'El cine puede reconciliar ciencia y espiritualidad'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'bazin-ontological-realism',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos buscan revelación de realidad profunda, Ayfre con énfasis espiritual',
      combinedInsightPotential: 8
    },
    {
      id: 'tarkovsky-sculpting-time',
      relationshipType: 'complementary',
      synergyDescription: 'Tarkovsky practica lo que Ayfre teoriza sobre cine espiritual',
      combinedInsightPotential: 9
    },
    {
      id: 'otto-numinous',
      relationshipType: 'complementary',
      synergyDescription: 'Otto proporciona base teológica para experiencias que Ayfre encuentra en cine',
      combinedInsightPotential: 7
    }
  ]
};
