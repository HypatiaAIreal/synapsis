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

export const PUDOVKIN_CONSTRUCTIVE: Methodology = {
  metadata: {
    id: 'pudovkin-constructive',
    name: 'Montaje Constructivo',
    author: 'Vsevolod Pudovkin',
    year: 1926,
    category: 'montage',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['basic-editing'],
    culturalContext: 'Cine soviético clásico',
    language: 'es'
  },
  
  description: `Vsevolod Pudovkin desarrolló una teoría del montaje que, aunque contemporánea a Eisenstein, enfatizaba la construcción narrativa sobre la colisión. Para Pudovkin, el montaje es el método fundamental para organizar material fílmico en una narración coherente y emocionalmente efectiva. Su enfoque "constructivo" ve los planos como ladrillos que se ensamblan para construir escenas, secuencias y finalmente la arquitectura total del film. Pudovkin identificó cinco métodos de montaje: contraste, paralelismo, simbolismo, simultaneidad y leitmotiv. A diferencia del montaje-conflicto de Eisenstein, Pudovkin buscaba la "linkage" (enlace) fluido entre planos que guiara suavemente la atención del espectador. Su teoría del "tiempo fílmico" exploraba cómo el montaje puede comprimir, expandir o reorganizar el tiempo real.`,
  
  keyConcepts: [
    {
      term: 'Montaje Constructivo',
      definition: 'Enlaces que construyen narración coherente, planos como ladrillos',
      importance: 'fundamental',
      relatedTerms: ['construcción', 'enlace', 'linkage']
    },
    {
      term: 'Cinco Métodos',
      definition: 'Contraste / Paralelismo / Simbolismo / Simultaneidad / Leitmotiv',
      importance: 'fundamental',
      relatedTerms: ['técnicas', 'métodos de enlace']
    },
    {
      term: 'Linkage',
      definition: 'Conexión fluida entre planos que guía la atención',
      importance: 'fundamental',
      relatedTerms: ['enlace', 'fluidez', 'conexión']
    },
    {
      term: 'Tiempo Fílmico',
      definition: 'Manipulación temporal mediante montaje: compresión/expansión',
      importance: 'important',
      relatedTerms: ['duración', 'tempo', 'ritmo']
    },
    {
      term: 'Material Plástico',
      definition: 'Planos como material moldeable para construir significado',
      importance: 'important',
      relatedTerms: ['material', 'plasticidad']
    },
    {
      term: 'Actuación Construida',
      definition: 'Performance creada mediante fragmentación y montaje',
      importance: 'important',
      relatedTerms: ['performance', 'construcción actoral']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del método dominante',
      description: 'Determinar cuál de los cinco métodos prevalece',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Una secuencia puede combinar métodos',
        'Buscar el método que estructura la secuencia',
        'El paralelismo es muy común en cine narrativo'
      ],
      commonMistakes: [
        'Confundir contraste con conflicto eisensteiniano',
        'No reconocer leitmotivs visuales sutiles'
      ]
    },
    {
      order: 2,
      name: 'Análisis de linkage',
      description: 'Examinar la fluidez de conexiones entre planos',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar continuidad de movimiento',
        'Analizar transiciones suaves de atención',
        'Notar cómo se guía el ojo del espectador'
      ]
    },
    {
      order: 3,
      name: 'Examen de construcción temporal',
      description: 'Analizar compresión y expansión del tiempo',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Identificar elipsis temporales',
        'Buscar momentos expandidos para énfasis',
        'Analizar el ritmo psicológico creado'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de guía de atención',
      description: 'Mapear cómo el montaje dirige la mirada',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de leitmotivs',
      description: 'Encontrar elementos visuales o sonoros recurrentes',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de actuación construida',
      description: 'Examinar cómo el montaje crea la performance',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 7,
      name: 'Evaluación de arquitectura narrativa',
      description: 'Analizar la construcción total de la secuencia/film',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Más accesible y aplicable que el montaje-colisión',
    'Énfasis narrativo útil para cine comercial',
    'Métodos claros y fácilmente identificables',
    'Privilegia fluidez sobre shock',
    'Teoría innovadora sobre actuación cinematográfica',
    'Balance entre emoción y estructura'
  ],
  
  limitations: [
    'Menos revolucionario teóricamente que Eisenstein',
    'Puede resultar convencional o predecible',
    'Subordina la forma al contenido narrativo',
    'Menos exploración de posibilidades formales',
    'Ideología menos explícita pero presente'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Vsevolod Pudovkin'],
      title: 'Film Technique and Film Acting',
      year: 1949,
      publisher: 'Vision Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Vsevolod Pudovkin'],
      title: 'Film Technique: Five Essays and Two Addresses',
      year: 1958,
      publisher: 'Newnes',
      essential: false
    },
    {
      type: 'book',
      authors: ['Amy Sargeant'],
      title: 'Vsevolod Pudovkin: Classic Films of the Soviet Avant-Garde',
      year: 2000,
      publisher: 'I.B. Tauris',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Mother',
        year: 1926,
        director: 'Vsevolod Pudovkin'
      },
      analysisExcerpt: `Mother demuestra magistralmente el montaje constructivo. Paralelismo: hielo derritiéndose/manifestación obrera creciendo. Contraste temporal: rostro inmóvil de la madre/reloj acelerando. Simbolismo: agua fluyendo = libertad. Simultaneidad: eventos en la prisión/preparativos externos. Leitmotiv: imágenes de agua recurrentes. El montaje construye gradualmente la emoción sin shocks eisensteinianos. La actuación de la madre se construye mediante primeros planos que revelan su transformación interior. La fluidez del linkage guía al espectador sin violencia.`,
      insightsGenerated: [
        'El paralelismo puede ser tan efectivo como la colisión',
        'La construcción emocional gradual crea impacto acumulativo',
        'El simbolismo natural refuerza temas sin didactismo'
      ],
      methodologyApplication: 'Uso sistemático de los cinco métodos en una narrativa coherente',
      keyFindings: [
        'El montaje constructivo privilegia la emoción sobre la ideología',
        'La fluidez no significa falta de poder expresivo',
        'Los métodos de Pudovkin anticipan el cine clásico'
      ]
    },
    {
      film: {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont'
      },
      analysisExcerpt: `Shawshank utiliza montaje constructivo pudovkiniano clásico. Compresión temporal: 19 años condensados fluidamente. Paralelismo: Andy tallando ajedrez/excavando túnel. Leitmotiv: la esperanza visualizada en múltiples formas. Contraste: brutalidad carcelaria/momentos de humanidad. La secuencia de la ópera demuestra simbolismo puro: música = libertad espiritual. El montaje construye pacientemente hacia la liberación, cada plano un ladrillo en la arquitectura narrativa. Linkage impecable mantiene fluidez narrativa.`,
      insightsGenerated: [
        'El montaje constructivo sigue siendo la base del cine narrativo',
        'La compresión temporal puede mantener continuidad emocional',
        'Los leitmotivs visuales unifican narrativas extensas'
      ],
      methodologyApplication: 'Montaje constructivo en narrativa clásica contemporánea',
      keyFindings: [
        'Pudovkin permanece relevante en el cine mainstream',
        'La construcción paciente puede ser más efectiva que el shock',
        'El tiempo fílmico bien manejado crea inmersión total'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'eisenstein-montage',
      relationshipType: 'dialectical',
      synergyDescription: 'Debate fundamental: construcción vs. colisión en el montaje soviético',
      combinedInsightPotential: 9
    },
    {
      id: 'classical-hollywood',
      relationshipType: 'hierarchical',
      synergyDescription: 'Pudovkin influenció el desarrollo del montaje invisible hollywoodense',
      combinedInsightPotential: 8
    },
    {
      id: 'reisz-technique',
      relationshipType: 'synthetic',
      synergyDescription: 'Reisz sistematiza y expande los principios constructivos de Pudovkin',
      combinedInsightPotential: 8
    }
  ]
};
