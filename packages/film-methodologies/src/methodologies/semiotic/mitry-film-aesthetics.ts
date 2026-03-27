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

export const MITRY_FILM_AESTHETICS: Methodology = {
  metadata: {
    id: 'mitry-film-aesthetics',
    name: 'Estética y Psicología del Cine',
    author: 'Jean Mitry',
    year: 1963,
    category: 'semiotic',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['film-theory', 'psychology', 'aesthetics'],
    culturalContext: 'Teoría comprehensiva francesa',
    language: 'es'
  },
  
  description: `Jean Mitry desarrolló una teoría comprehensiva del cine que integra estética, psicología y semiótica en un sistema unificado. Su obra monumental examina cómo el cine crea significado a través de la organización específica de imágenes en movimiento. Mitry rechazó analogías lingüísticas simplistas, argumentando que el cine tiene su propia lógica basada en la "imagen-movimiento" como unidad fundamental. Exploró la "participación afectiva" - cómo el espectador no solo comprende sino siente el film a través de procesos psico-fisiológicos. Su concepto de "imagen-signo" propone que las imágenes cinematográficas son simultáneamente presentación y representación. Analizó el ritmo cinematográfico como generador de significados que trascienden el contenido individual de las imágenes.`,
  
  keyConcepts: [
    {
      term: 'Imagen-Movimiento',
      definition: 'Unidad básica del cine, irreducible a fotografías estáticas',
      importance: 'fundamental',
      relatedTerms: ['movimiento', 'unidad básica', 'especificidad']
    },
    {
      term: 'Imagen-Signo',
      definition: 'Doble naturaleza de la imagen como presentación directa y representación simbólica',
      importance: 'fundamental',
      relatedTerms: ['signo', 'presentación', 'representación']
    },
    {
      term: 'Ritmo Cinematográfico',
      definition: 'Organización temporal que genera significados propios',
      importance: 'fundamental',
      relatedTerms: ['tempo', 'duración', 'musicalidad']
    },
    {
      term: 'Participación Afectiva',
      definition: 'Involucramiento psico-físico del espectador con el film',
      importance: 'important',
      relatedTerms: ['emoción', 'psicología', 'espectador']
    },
    {
      term: 'Lógica de Implicación',
      definition: 'Sistema de conexiones no-verbales entre imágenes',
      importance: 'important',
      relatedTerms: ['conexión', 'lógica visual', 'implicación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis de imagen-movimiento',
      description: 'Examinar unidades básicas de movimiento cinematográfico',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'No descomponer en fotogramas estáticos',
        'Considerar el movimiento como esencial',
        'Analizar cualidades dinámicas'
      ],
      commonMistakes: [
        'Reducir el cine a fotografías en serie',
        'Ignorar la especificidad del movimiento'
      ]
    },
    {
      order: 2,
      name: 'Estudio del ritmo',
      description: 'Analizar patrones temporales y su significación',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Medir duraciones de planos',
        'Identificar patrones rítmicos',
        'Relacionar ritmo con contenido emocional'
      ]
    },
    {
      order: 3,
      name: 'Examen de participación afectiva',
      description: 'Analizar mecanismos de involucramiento emocional',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar momentos de intensidad emocional',
        'Examinar recursos psico-fisiológicos'
      ]
    },
    {
      order: 4,
      name: 'Identificación de imagen-signo',
      description: 'Distinguir aspectos presentacionales y representacionales',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis de lógica de implicación',
      description: 'Examinar conexiones no-verbales entre imágenes',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis estético-psicológica',
      description: 'Integrar dimensiones estéticas y psicológicas',
      timeEstimate: 90,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Síntesis teórica monumental y comprehensiva',
    'Especificidad del medio cinematográfico',
    'Integración de múltiples dimensiones analíticas',
    'Atención fundamental al ritmo y tiempo',
    'Base histórica y teórica sólida',
    'Influencia foundacional en teoría del cine'
  ],
  
  limitations: [
    'Obra extremadamente densa y compleja',
    'Privilegia montaje y cine clásico',
    'Aspectos técnicos pueden estar fechados',
    'Traducciones parciales dificultan acceso',
    'Complejidad puede ser intimidante'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jean Mitry'],
      title: 'The Aesthetics and Psychology of the Cinema',
      year: 1997,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jean Mitry'],
      title: 'La sémiologie en question',
      year: 1987,
      publisher: 'Editions du Cerf',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jean Mitry'],
      title: 'Histoire du cinéma',
      year: 1967,      
      publisher: 'Editions Universitaires',
      essential: false
    },
    {
      type: 'book',
      authors: ['Dudley Andrew'],
      title: 'The Major Film Theories',
      year: 1976,
      publisher: 'Oxford University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Ballet Mécanique',
        year: 1924,
        director: 'Fernand Léger'
      },
      analysisExcerpt: `Ballet Mécanique ejemplifica la teoría de Mitry sobre ritmo puro. Sin narrativa, el film es imagen-movimiento y ritmo absolutos. La participación afectiva es kinestésica: el espectador siente físicamente los ritmos mecánicos. Imágenes oscilan entre presentación (objetos reales filmados) y representación (formas abstractas). Lógica de implicación puramente rítmica: conexiones por tempo, no por significado. El montaje-rey de Mitry en estado puro: el ritmo ES el significado, no vehículo de significado.`,
      insightsGenerated: [
        'El ritmo puede ser significado primario, no secundario',
        'La participación afectiva puede ser puramente kinestésica',
        'La imagen-movimiento existe independiente de representación'
      ],
      methodologyApplication: 'Análisis de ritmo puro como generador de significado',
      keyFindings: [
        'El cine puede significar mediante ritmo solo',
        'La abstracción revela esencias del medio',
        'El montaje rítmico crea lógicas no-verbales'
      ]
    },
    {
      film: {
        title: '2001: A Space Odyssey',
        year: 1968,
        director: 'Stanley Kubrick'
      },
      analysisExcerpt: `2001 demuestra el sistema completo de Mitry. Imagen-movimiento: la rotación de la estación espacial al vals, significado en el movimiento mismo. Ritmo épico: duraciones contemplativas crean tiempo cósmico. Participación afectiva mediante escala y música: lo sublime tecnológico. Imagen-signo: el monolito como presentación (objeto) y representación (evolución/trascendencia). Lógica de implicación no-verbal: corte de hueso a nave espacial. La música no decora sino estructura: Ligeti crea significados imposibles verbalmente.`,
      insightsGenerated: [
        'Las duraciones largas crean nuevas formas de significación',
        'La música puede ser estructural, no decorativa',
        'La lógica de implicación permite saltos conceptuales enormes'
      ],
      methodologyApplication: 'Análisis integral de estética, psicología y semiótica',
      keyFindings: [
        'Kubrick sintetiza todas las dimensiones teorizadas por Mitry',
        'El cine puede pensar mediante imágenes-movimiento',
        'La participación afectiva trasciende identificación narrativa'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'epstein-photogenie',
      relationshipType: 'complementary',
      synergyDescription: 'Epstein influenció profundamente el pensamiento de Mitry sobre especificidad',
      combinedInsightPotential: 8
    },
    {
      id: 'deleuze-cinema',
      relationshipType: 'complementary',
      synergyDescription: 'Deleuze desarrolla filosóficamente conceptos iniciados por Mitry',
      combinedInsightPotential: 9
    },
    {
      id: 'arnheim-film-art',
      relationshipType: 'dialectical',
      synergyDescription: 'Arnheim enfatiza forma donde Mitry integra forma y psicología',
      combinedInsightPotential: 7
    }
  ]
};
