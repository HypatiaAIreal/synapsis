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

export const BALAZS_FILM_THEORY: Methodology = {
  metadata: {
    id: 'balazs-film-theory',
    name: 'Teoría del Film',
    author: 'Béla Balázs',
    year: 1924,
    category: 'montage',
    complexity: 'advanced',
    timeToLearn: 30,
    prerequisities: ['film-aesthetics', 'visual-culture'],
    culturalContext: 'Teoría fílmica europea temprana',
    language: 'es'
  },
  
  description: `Béla Balázs, teórico húngaro pionero, desarrolló una de las primeras teorías comprehensivas del cine con especial atención al montaje como lenguaje visual específico. Su concepto del "hombre visible" propone que el cine devuelve la cultura visual perdida por la imprenta, especialmente a través del primer plano que revela el "microphysiognomy" del rostro humano. Balázs teorizó el montaje como "escritura" cinematográfica que crea significados imposibles en planos aislados. Su análisis del "espíritu del film" examina cómo el montaje impregna todo el material con una atmósfera unificada. Balázs distinguió entre montaje "productivo" (que crea nuevas ideas) y "reproductivo" (que meramente conecta). Como crítico marxista, Balázs también analizó cómo el montaje puede revelar relaciones sociales ocultas.`,
  
  keyConcepts: [
    {
      term: 'Hombre Visible',
      definition: 'Cultura visual recuperada por el cine tras era de imprenta',
      importance: 'fundamental',
      relatedTerms: ['cultura visual', 'visualidad', 'rostro']
    },
    {
      term: 'Microphysiognomy',
      definition: 'Paisaje del rostro humano revelado por primer plano',
      importance: 'fundamental',
      relatedTerms: ['primer plano', 'rostro', 'expresión']
    },
    {
      term: 'Montaje Productivo',
      definition: 'Crea significados nuevos imposibles en planos aislados',
      importance: 'fundamental',
      relatedTerms: ['creación', 'síntesis', 'significado']
    },
    {
      term: 'Espíritu del Film',
      definition: 'Atmósfera unificada que impregna todo mediante montaje',
      importance: 'important',
      relatedTerms: ['atmósfera', 'unidad', 'tono']
    },
    {
      term: 'Polifonía Visual',
      definition: 'Múltiples líneas visuales entrelazadas como voces musicales',
      importance: 'important',
      relatedTerms: ['multiplicidad', 'contrapunto', 'voces']
    },
    {
      term: 'Ángulo Moral',
      definition: 'Perspectiva ética implícita en encuadre y montaje',
      importance: 'important',
      relatedTerms: ['ética', 'perspectiva', 'moral']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Búsqueda del hombre visible',
      description: 'Identificar cultura visual específicamente cinematográfica',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar expresiones imposibles en otros medios',
        'Identificar comunicación puramente visual',
        'Notar lo que solo el cine puede mostrar'
      ],
      commonMistakes: [
        'Confundir con simple visualidad',
        'Ignorar especificidad del medio'
      ]
    },
    {
      order: 2,
      name: 'Análisis de microphysiognomy',
      description: 'Examinar rostros como paisajes emocionales',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Los primeros planos revelan geografías internas',
        'Buscar microexpresiones significantes',
        'El rostro como universo'
      ]
    },
    {
      order: 3,
      name: 'Distinción productivo/reproductivo',
      description: 'Identificar montaje creativo vs. conectivo',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Identificación del espíritu unificado',
      description: 'Encontrar atmósfera total del film',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Examen de polifonía',
      description: 'Analizar líneas visuales entrelazadas',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de perspectiva moral',
      description: 'Identificar ética implícita del montaje',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Teoría pionera profundamente influyente',
    'Atención única al rostro humano',
    'Conceptos poéticos potentes',
    'Integra forma y contenido social',
    'Anticipa desarrollos sonoros',
    'Humanismo cinematográfico profundo'
  ],
  
  limitations: [
    'Escritura impresionista a veces vaga',
    'Conceptos pueden ser ambiguos',
    'Idealización del primer plano',
    'Menos sistemático que otros teóricos',
    'Contexto histórico muy específico'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Béla Balázs'],
      title: 'Béla Balázs: Early Film Theory',
      year: 2010,
      publisher: 'Berghahn Books',
      essential: true
    },
    {
      type: 'book',
      authors: ['Béla Balázs'],
      title: 'Theory of the Film: Character and Growth of a New Art',
      year: 1952,
      publisher: 'Dennis Dobson',
      essential: true
    },
    {
      type: 'book',
      authors: ['Hanno Loewy'],
      title: 'Béla Balázs: Märchen, Ritual und Film',
      year: 2003,
      publisher: 'Vorwerk 8',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Passion of Joan of Arc',
        year: 1928,
        director: 'Carl Theodor Dreyer'
      },
      analysisExcerpt: `Dreyer materializa las teorías de Balázs perfectamente. Microphysiognomy extrema: rostros como paisajes espirituales, geografías del alma. Montaje productivo: primeros planos crean éxtasis místico imposible de otro modo. El hombre visible: cultura visual pre-moderna recuperada. Espíritu del film: atmósfera de trascendencia impregna cada plano. Sin establecer espacios, solo rostros en relación. Ángulo moral: la cámara como testigo compasivo del martirio. Polifonía visual de rostros en comunión/conflicto.`,
      insightsGenerated: [
        'El primer plano puede ser épico, no solo íntimo',
        'La microphysiognomy revela lo universal en lo particular',
        'El montaje productivo crea experiencia espiritual'
      ],
      methodologyApplication: 'Aplicación extrema del primer plano como revelación',
      keyFindings: [
        'Balázs anticipa el cine espiritual moderno',
        'El rostro puede sustentar un film entero',
        'El montaje productivo trasciende la narrativa'
      ]
    },
    {
      film: {
        title: 'Persona',
        year: 1966,
        director: 'Ingmar Bergman'
      },
      analysisExcerpt: `Bergman radicaliza a Balázs. Microphysiognomy llevada al límite: rostros que se funden/separan. Montaje productivo puro: identidades que se intercambian. El hombre visible vuelto pregunta: ¿qué es un rostro? Espíritu del film: disolución de límites del yo. Primeros planos que revelan vacío existencial, no plenitud. Polifonía visual: dos rostros como uno/uno como dos. Ángulo moral: la cámara como psicoanalista cruel.`,
      insightsGenerated: [
        'La teoría de Balázs puede volverse contra sí misma',
        'El rostro puede ocultar tanto como revela',
        'El montaje productivo puede destruir identidades'
      ],
      methodologyApplication: 'Deconstrucción de los principios de Balázs',
      keyFindings: [
        'Las teorías pioneras contienen su propia crítica',
        'El primer plano puede ser alienante',
        'La microphysiognomy incluye el terror del rostro'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'eisenstein-montage',
      relationshipType: 'parallel',
      synergyDescription: 'Contemporáneos que desarrollan teorías paralelas del montaje productivo',
      combinedInsightPotential: 8
    },
    {
      id: 'deleuze-cinema',
      relationshipType: 'complementary',
      synergyDescription: 'Deleuze desarrolla el concepto de imagen-afección desde Balázs',
      combinedInsightPotential: 9
    },
    {
      id: 'epstein-photogenie',
      relationshipType: 'parallel',
      synergyDescription: 'Epstein y Balázs comparten fascinación por especificidad cinematográfica',
      combinedInsightPotential: 8
    }
  ]
};
