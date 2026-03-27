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

export const GRAMSCI_CULTURAL_HEGEMONY: Methodology = {
  metadata: {
    id: 'gramsci-cultural-hegemony',
    name: 'Hegemonía Cultural',
    author: 'Antonio Gramsci',
    year: 1929,
    category: 'marxist-sociological',
    complexity: 'intermediate',
    timeToLearn: 35,
    prerequisities: ['marxist-theory', 'political-theory'],
    culturalContext: 'Marxismo italiano desde la cárcel',
    language: 'es'
  },
  
  description: `Antonio Gramsci revolucionó el análisis marxista de la cultura con su concepto de "hegemonía" - el liderazgo moral e intelectual mediante el cual las clases dominantes obtienen el consentimiento de los dominados. Para el cine, esto significa analizar cómo las películas participan en la construcción del "sentido común" que naturaliza relaciones de poder. Gramsci distingue entre dominación (coerción) y hegemonía (consenso), mostrando cómo el cine opera principalmente en el segundo terreno. Su análisis de los "intelectuales orgánicos" se aplica a cineastas que articulan visiones del mundo de diferentes clases. El concepto de "guerra de posiciones" describe la lucha cultural prolongada donde el cine es un frente crucial. Su visión dialéctica permite entender el cine popular como campo de negociación hegemónica.`,
  
  keyConcepts: [
    {
      term: 'Hegemonía',
      definition: 'Liderazgo cultural-moral que obtiene consentimiento sin coerción',
      importance: 'fundamental',
      relatedTerms: ['consenso', 'liderazgo', 'dirección cultural']
    },
    {
      term: 'Sentido Común',
      definition: 'Ideología naturalizada como sabiduría popular evidente',
      importance: 'fundamental',
      relatedTerms: ['naturalización', 'ideología', 'evidencia']
    },
    {
      term: 'Intelectuales Orgánicos',
      definition: 'Articuladores de la visión del mundo de una clase social',
      importance: 'important',
      relatedTerms: ['articulación', 'clase', 'visión del mundo']
    },
    {
      term: 'Guerra de Posiciones',
      definition: 'Lucha cultural prolongada por hegemonía en sociedad civil',
      importance: 'important',
      relatedTerms: ['lucha cultural', 'estrategia', 'sociedad civil']
    },
    {
      term: 'Bloque Histórico',
      definition: 'Alianza de clases bajo liderazgo hegemónico',
      importance: 'important',
      relatedTerms: ['alianza', 'coalición', 'liderazgo']
    },
    {
      term: 'Nacional-Popular',
      definition: 'Cultura que articula intereses populares en forma nacional',
      importance: 'important',
      relatedTerms: ['popular', 'nacional', 'articulación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de construcción hegemónica',
      description: 'Analizar qué consensos el film busca crear o reforzar',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar qué se presenta como "natural" o "evidente"',
        'Identificar valores promovidos como universales',
        'Examinar qué alternativas se excluyen'
      ],
      commonMistakes: [
        'Confundir hegemonía con propaganda directa',
        'No ver hegemonías en competencia'
      ]
    },
    {
      order: 2,
      name: 'Análisis del sentido común',
      description: 'Examinar qué "sabiduría popular" el film refuerza',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar lugares comunes y clichés',
        'Analizar qué se da por sentado'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de intelectuales orgánicos',
      description: 'Identificar voces que articulan intereses de clase',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Examen de guerra de posiciones',
      description: 'Situar el film en luchas culturales más amplias',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Considerar contexto de debates culturales',
        'Identificar posiciones en disputa'
      ]
    },
    {
      order: 5,
      name: 'Identificación de contradicciones',
      description: 'Buscar elementos que resisten o contradicen hegemonía',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis nacional-popular',
      description: 'Examinar articulación de lo popular y lo nacional',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Concepto de hegemonía fundamental para análisis cultural',
    'Atención a cultura popular sin desprecio',
    'Dialéctica sofisticada de dominación/resistencia',
    'Evita reduccionismo económico',
    'Conecta análisis cultural con estrategia política',
    'Marco dinámico que reconoce luchas y cambios'
  ],
  
  limitations: [
    'Escritura fragmentaria dificulta sistematización',
    'Conceptos a veces ambiguos',
    'Contexto italiano específico',
    'Optimismo sobre nacional-popular problemático',
    'Aplicación requiere conocimiento histórico profundo'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Antonio Gramsci'],
      title: 'Selections from the Prison Notebooks',
      year: 1971,
      publisher: 'International Publishers',
      essential: true
    },
    {
      type: 'book',
      authors: ['Antonio Gramsci'],
      title: 'Selections from Cultural Writings',
      year: 1985,
      publisher: 'Harvard University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Antonio Gramsci'],
      title: 'The Gramsci Reader: Selected Writings 1916-1935',
      year: 2000,
      publisher: 'NYU Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Marcia Landy'],
      title: 'Film, Politics, and Gramsci',
      year: 1994,
      publisher: 'University of Minnesota Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Rocky',
        year: 1976,
        director: 'John G. Avildsen'
      },
      analysisExcerpt: `Rocky funciona como construcción hegemónica magistral del sentido común americano. Articula el sueño americano como hegemonía: éxito por esfuerzo individual, no lucha colectiva. Stallone opera como intelectual orgánico de la clase trabajadora que acepta liderazgo burgués. El film negocia contradicciones: reconoce dureza de vida working class pero canaliza descontento hacia fantasía individual. Nacional-popular perfecto: une clases en identificación con underdog. La derrota "moral victory" naturaliza imposibilidad de victoria real. Guerra de posiciones: respuesta a movimientos sociales de los 60s con retorno a valores "tradicionales".`,
      insightsGenerated: [
        'El sueño americano como hegemonía que obtiene consentimiento',
        'La derrota heroica como victoria moral neutraliza descontento',
        'Lo nacional-popular puede servir hegemonía conservadora'
      ],
      methodologyApplication: 'Análisis de construcción hegemónica a través del deporte',
      keyFindings: [
        'El cine popular es terreno principal de lucha hegemónica',
        'La hegemonía opera mediante identificación emocional',
        'El sentido común se refuerza mediante narrativas míticas'
      ]
    },
    {
      film: {
        title: 'Black Panther',
        year: 2018,
        director: 'Ryan Coogler'
      },
      analysisExcerpt: `Black Panther representa guerra de posiciones en terreno hegemónico de Marvel. Coogler como intelectual orgánico articula visión afrofuturista que disputa hegemonía racial. Construye nuevo sentido común: África como fuente de tecnología y civilización. Wakanda ofrece contra-hegemonía al desarrollo occidental. Sin embargo, la resolución reafirma hegemonía liberal: reforma no revolución, inclusión no transformación. Killmonger articula crítica radical pero es villano. Nacional-popular complejo: celebra identidad negra dentro de estructura corporativa. Contradicciones productivas entre forma (blockbuster) y contenido (afrocentrismo).`,
      insightsGenerated: [
        'La contra-hegemonía puede operar dentro de formas hegemónicas',
        'Los blockbusters son terreno disputado, no perdido',
        'Las contradicciones hegemónicas pueden ser productivas'
      ],
      methodologyApplication: 'Análisis de negociación hegemónica en cine mainstream',
      keyFindings: [
        'La hegemonía nunca es total, siempre hay fisuras',
        'El cine popular puede articular visiones contra-hegemónicas',
        'La forma comercial limita pero no determina el contenido'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'hall-encoding-decoding',
      relationshipType: 'synthetic',
      synergyDescription: 'Hall desarrolla hegemonía en teoría de comunicación',
      combinedInsightPotential: 9
    },
    {
      id: 'williams-cultural-materialism',
      relationshipType: 'complementary',
      synergyDescription: 'Williams elabora conceptos gramscianos en materialismo cultural',
      combinedInsightPotential: 9
    },
    {
      id: 'althusser-ideology',
      relationshipType: 'dialectical',
      synergyDescription: 'Althusser enfatiza aparatos mientras Gramsci enfatiza luchas',
      combinedInsightPotential: 8
    }
  ]
};
