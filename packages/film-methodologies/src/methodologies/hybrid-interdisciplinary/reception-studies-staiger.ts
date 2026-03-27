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

export const RECEPTION_STUDIES_STAIGER: Methodology = {
  metadata: {
    id: 'reception-studies-staiger',
    name: 'Estudios de Recepción y Audiencias - Janet Staiger',
    author: 'Janet Staiger',
    year: 1992,
    category: 'hybrid-interdisciplinary',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['cultural-studies', 'film-history'],
    culturalContext: 'Giro hacia audiencias activas',
    language: 'es'
  },
  
  description: `Janet Staiger desarrolló un enfoque histórico-materialista para estudiar cómo las audiencias reales interpretan y usan los films en contextos específicos, desafiando tanto teorías textuales deterministas como nociones de espectadores ideales. Su método de "historia de recepción" utiliza fuentes diversas - reseñas, cartas, memorias, entrevistas, datos de taquilla - para reconstruir "eventos de interpretación" históricos. Staiger examina cómo factores como clase, género, raza, sexualidad, y momento histórico shaped las lecturas cinematográficas. Su concepto de "perversidad interpretativa" muestra cómo las audiencias consistentemente exceden o subvierten intenciones autorales y significados dominantes.`,
  
  keyConcepts: [
    {
      term: 'Eventos de Interpretación',
      definition: 'Momentos históricos específicos donde audiencias producen significados',
      importance: 'fundamental',
      relatedTerms: ['recepción histórica', 'contexto interpretativo']
    },
    {
      term: 'Perversidad Interpretativa',
      definition: 'Tendencia de audiencias a leer contra intenciones dominantes',
      importance: 'fundamental',
      relatedTerms: ['lecturas resistentes', 'exceso interpretativo']
    },
    {
      term: 'Modos Históricos de Recepción',
      definition: 'Convenciones interpretativas específicas a períodos y lugares',
      importance: 'fundamental',
      relatedTerms: ['protocolos de lectura', 'horizontes de expectativa']
    },
    {
      term: 'Identidades Interpretativas',
      definition: 'Cómo posiciones sociales informan prácticas de lectura',
      importance: 'important',
      relatedTerms: ['posicionalidad', 'interpretación situada']
    },
    {
      term: 'Controversias como Síntomas',
      definition: 'Debates públicos que revelan ansiedades culturales profundas',
      importance: 'important',
      relatedTerms: ['pánico moral', 'lucha cultural']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Delimitación histórica',
      description: 'Establecer período y contexto específico de recepción',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Ser específico sobre tiempo y lugar',
        'Considerar múltiples escalas (local, nacional, global)',
        'Incluir contexto político y social'
      ],
      commonMistakes: [
        'Generalizar recepciones across tiempo/espacio',
        'Ignorar diferencias regionales'
      ]
    },
    {
      order: 2,
      name: 'Recopilación de fuentes',
      description: 'Reunir evidencia diversa de recepción histórica',
      timeEstimate: 180,
      difficulty: 'advanced',
      tips: [
        'Usar archivos digitales y físicos',
        'Incluir fuentes no tradicionales (diarios, cartas)',
        'Buscar voces marginalizadas'
      ]
    },
    {
      order: 3,
      name: 'Mapeo de identidades',
      description: 'Analizar cómo diferentes grupos interpretaron el film',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Evitar esencializar grupos',
        'Buscar diversidad dentro de categorías',
        'Considerar identidades interseccionales'
      ]
    },
    {
      order: 4,
      name: 'Análisis de controversias',
      description: 'Examinar debates públicos como eventos interpretativos',
      timeEstimate: 90,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de perversidades',
      description: 'Localizar lecturas inesperadas o resistentes',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis contextual',
      description: 'Integrar hallazgos en narrativa histórica comprehensiva',
      timeEstimate: 120,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Centra audiencias reales vs. espectadores ideales',
    'Método empíricamente riguroso',
    'Revela diversidad de interpretaciones',
    'Conecta cine con historia social',
    'Desafía autoridad textual y autoral',
    'Políticamente comprometido con voces marginalizadas'
  ],
  
  limitations: [
    'Requiere investigación archivística extensa',
    'Dificultad de acceder algunas fuentes históricas',
    'Puede fragmentar análisis de obras',
    'Menos útil para cine muy reciente',
    'Riesgo de relativismo interpretativo extremo'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Janet Staiger'],
      title: 'Interpreting Films: Studies in the Historical Reception of American Cinema',
      year: 1992,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Janet Staiger'],
      title: 'Perverse Spectators: The Practices of Film Reception',
      year: 2000,
      publisher: 'NYU Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Janet Staiger'],
      title: 'Media Reception Studies',
      year: 2005,
      publisher: 'NYU Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Barbara Klinger'],
      title: 'Melodrama and Meaning: History, Culture, and the Films of Douglas Sirk',
      year: 1994,
      publisher: 'Indiana University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Brokeback Mountain',
        year: 2005,
        director: 'Ang Lee'
      },
      analysisExcerpt: `Staiger analizaría Brokeback Mountain como evento interpretativo que cristaliza ansiedades sobre masculinidad y sexualidad en América post-9/11. Recepción urbana costera: celebración de visibilidad queer mainstream. Recepción rural/conservadora: no unívocamente negativa - algunos ven historia de amor universal, otros tragedia sobre masculinidad imposible. Perversidad interpretativa: hombres heterosexuales identificándose con soledad emocional de cowboys. Controversia en cines de Utah/Wyoming revela geografías afectivas de nación dividida. Oscar perdido ante Crash sintomático de límites de aceptación liberal. Múltiples identidades interpretativas producen film radicalmente diferente.`,
      insightsGenerated: [
        'La geografía shapes profundamente la recepción cinematográfica',
        'Las audiencias conservadoras pueden producir lecturas inesperadamente complejas',
        'Los premios funcionan como eventos interpretativos nacionales'
      ],
      methodologyApplication: 'Análisis multi-situado de recepción across geografías y identidades',
      keyFindings: [
        'Brokeback reveló fault lines culturales profundas en América',
        'La "universalidad" del amor fue tactical para diferentes agendas',
        'La perversidad interpretativa puede ser políticamente productiva'
      ]
    },
    {
      film: {
        title: 'The Birth of a Nation',
        year: 1915,
        director: 'D.W. Griffith'
      },
      analysisExcerpt: `Evento interpretativo fundacional del cine americano. NAACP organizó protestas masivas, creando primer boycott cinematográfico organizado. Pero recepción afroamericana no fue monolítica: algunos líderes negros argumentaron por engagement crítico vs. censura. Audiencias blancas sureñas: nostalgia validada. Audiencias blancas norteñas: divididas entre admiración técnica y discomfort moral. Reescrituras locales: algunos cines cortaron escenas más racistas. Perversidad: el film galvanizó organización política negra. Wilson screening en Casa Blanca legitimó propaganda como historia. Controversia estableció cine como force política seria.`,
      insightsGenerated: [
        'Los films pueden catalizar organización política oppositional',
        'La recepción racializada no sigue líneas simples',
        'Las controversias establecen la importancia cultural del medio'
      ],
      methodologyApplication: 'Reconstrucción de evento interpretativo desde múltiples archivos',
      keyFindings: [
        'Birth generó templates para protesta cinematográfica futura',
        'La perversidad interpretativa incluye movilización política',
        'Los eventos de recepción pueden exceder completamente el texto'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'cultural-studies-hall',
      relationshipType: 'complementary',
      synergyDescription: 'Staiger operacionaliza empíricamente el modelo encoding/decoding de Hall',
      combinedInsightPotential: 9
    },
    {
      id: 'fan-studies',
      relationshipType: 'parallel',
      synergyDescription: 'Estudios de fans examinan formas específicas de recepción activa',
      combinedInsightPotential: 8
    },
    {
      id: 'oral-history',
      relationshipType: 'complementary',
      synergyDescription: 'Historia oral proporciona método para acceder memorias de recepción',
      combinedInsightPotential: 8
    }
  ]
};
