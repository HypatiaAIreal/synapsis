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

export const EISENSTEIN_MONTAGE: Methodology = {
  metadata: {
    id: 'eisenstein-montage',
    name: 'Montaje de Atracciones',
    author: 'Sergei Eisenstein',
    year: 1923,
    category: 'montage',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['basic-film-theory', 'dialectical-materialism'],
    culturalContext: 'Vanguardia soviética',
    language: 'es'
  },
  
  description: `Sergei Eisenstein revolucionó la teoría y práctica del montaje con su concepto de "montaje de atracciones", derivado del teatro y el circo, donde cada "atracción" es un momento agresivo que impacta sensorialmente al espectador. Eisenstein concebía el montaje no como continuidad narrativa sino como colisión dialéctica entre planos que produce un tercer significado en la mente del espectador. Su teoría evolucionó hacia formas más complejas: montaje métrico (basado en longitud temporal), rítmico (movimiento interno), tonal (resonancia emocional), armónico (síntesis de los anteriores) e intelectual (producción de conceptos abstractos). Para Eisenstein, el montaje es el principio cinematográfico fundamental donde 1+1=3, creando ideas y emociones que no existen en los planos individuales. Su visión del "cine-puño" buscaba no entretener sino transformar la conciencia del espectador mediante shocks perceptuales calculados.`,
  
  keyConcepts: [
    {
      term: 'Montaje de Atracciones',
      definition: 'Momentos de impacto sensorial calculado que sacuden al espectador',
      importance: 'fundamental',
      relatedTerms: ['shock', 'impacto', 'cine-puño']
    },
    {
      term: 'Colisión Dialéctica',
      definition: 'Tesis + antítesis = síntesis; conflicto entre planos que genera nuevo significado',
      importance: 'fundamental',
      relatedTerms: ['dialéctica', 'conflicto', 'síntesis']
    },
    {
      term: 'Cinco Tipos de Montaje',
      definition: 'Métrico (duración) / Rítmico (movimiento) / Tonal (emoción) / Armónico (síntesis) / Intelectual (concepto)',
      importance: 'fundamental',
      relatedTerms: ['tipos de montaje', 'categorías']
    },
    {
      term: 'Cine-Puño',
      definition: 'Cine como arma revolucionaria que golpea la conciencia',
      importance: 'important',
      relatedTerms: ['agitación', 'propaganda', 'transformación']
    },
    {
      term: 'Conflicto Gráfico',
      definition: 'Oposición de formas, líneas, volúmenes entre planos sucesivos',
      importance: 'important',
      relatedTerms: ['composición', 'choque visual']
    },
    {
      term: 'Éxtasis',
      definition: 'Estado de "salir fuera de sí mismo" que el montaje debe provocar',
      importance: 'important',
      relatedTerms: ['pathos', 'emoción extrema']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de tipos de montaje',
      description: 'Catalogar qué tipo de montaje predomina en cada secuencia',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Los tipos pueden superponerse y combinarse',
        'Buscar el tipo dominante pero notar las síntesis',
        'El montaje intelectual es el más complejo de identificar'
      ],
      commonMistakes: [
        'Confundir montaje rítmico con métrico',
        'No reconocer cuando operan múltiples tipos simultáneamente'
      ]
    },
    {
      order: 2,
      name: 'Análisis de colisiones',
      description: 'Identificar conflictos específicos entre planos adyacentes',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Buscar conflictos gráficos, direccionales, escalares',
        'Analizar cómo el conflicto genera significado',
        'Considerar conflictos de luz, volumen, duración'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de atracciones',
      description: 'Localizar momentos diseñados para impacto máximo',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Las atracciones son momentos de intensidad extrema',
        'Pueden ser visuales, sonoras o conceptuales'
      ]
    },
    {
      order: 4,
      name: 'Examen de síntesis dialéctica',
      description: 'Analizar qué tercer significado emerge de las colisiones',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'La síntesis no está en ningún plano individual',
        'Surge en la mente del espectador'
      ]
    },
    {
      order: 5,
      name: 'Identificación de conflictos gráficos',
      description: 'Mapear oposiciones visuales entre planos',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de progresión',
      description: 'Examinar cómo se construye hacia clímax o éxtasis',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 7,
      name: 'Evaluación del efecto ideológico',
      description: 'Analizar la transformación de conciencia buscada',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Teoría más influyente en la historia del montaje',
    'Base dialéctica proporciona profundidad filosófica',
    'Aplicable en múltiples niveles de complejidad',
    'Conecta forma cinematográfica con ideología',
    'Inspiró experimentación continua en el cine',
    'Poder emocional e intelectual comprobado'
  ],
  
  limitations: [
    'Puede resultar manipulador y autoritario',
    'Intelectualismo a veces excesivo para audiencias',
    'Técnica agotadora para el espectador',
    'Ideológicamente fechado en su marxismo explícito',
    'Complejidad puede ser intimidante para aplicar'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Sergei Eisenstein'],
      title: 'Film Form: Essays in Film Theory',
      year: 1949,
      publisher: 'Harcourt Brace',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sergei Eisenstein'],
      title: 'The Film Sense',
      year: 1942,
      publisher: 'Harcourt Brace',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sergei Eisenstein'],
      title: 'Towards a Theory of Montage',
      year: 1991,
      publisher: 'British Film Institute',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sergei Eisenstein'],
      title: 'Nonindifferent Nature',
      year: 1987,
      publisher: 'Cambridge University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Battleship Potemkin',
        year: 1925,
        director: 'Sergei Eisenstein'
      },
      analysisExcerpt: `La secuencia de las escaleras de Odessa es la demostración máxima del montaje de Eisenstein. Montaje rítmico: botas descendiendo vs. pueblo ascendiendo. Montaje tonal: del júbilo al terror. Montaje métrico: aceleración progresiva de cortes. Colisiones: movimiento descendente/ascendente, orden/caos, líneas verticales/diagonales. Los leones de piedra "despiertan" mediante montaje intelectual puro. El cochecito cayendo funciona como atracción suprema. La síntesis dialéctica: la brutalidad del zarismo genera inevitablemente la revolución.`,
      insightsGenerated: [
        'Múltiples tipos de montaje operan simultáneamente',
        'Las colisiones direccionales intensifican el conflicto ideológico',
        'El montaje intelectual puede animar lo inanimado'
      ],
      methodologyApplication: 'Identificación y análisis de todos los tipos de montaje en una secuencia',
      keyFindings: [
        'La teoría de Eisenstein alcanza su máxima expresión práctica',
        'El montaje puede ser simultáneamente visceral e intelectual',
        'La forma cinematográfica es inseparable del contenido ideológico'
      ]
    },
    {
      film: {
        title: 'Requiem for a Dream',
        year: 2000,
        director: 'Darren Aronofsky'
      },
      analysisExcerpt: `Aronofsky actualiza a Eisenstein con el "hip-hop montage". Montaje métrico obsesivo: repetición de micro-acciones de consumo de drogas. Montaje rítmico: aceleración que mimetiza el rush. Montaje tonal: de euforia a desesperación. Colisiones: macro/micro (pupilas dilatándose/cityscape), velocidad/stasis. El montaje final es puro montaje armónico del horror: madre en electroshock, hijo sin brazo, novia prostituyéndose, todos en ritmo de pesadilla. Eisenstein para la era MTV.`,
      insightsGenerated: [
        'Las técnicas de Eisenstein siguen vigentes en cine contemporáneo',
        'El montaje de atracciones puede representar estados mentales alterados',
        'La colisión dialéctica funciona en contextos no ideológicos'
      ],
      methodologyApplication: 'Adaptación moderna de las técnicas de montaje soviético',
      keyFindings: [
        'Eisenstein trasciende su contexto histórico',
        'El montaje métrico puede crear adicción visual',
        'Las atracciones contemporáneas son más viscerales que ideológicas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'pudovkin-constructive',
      relationshipType: 'dialectical',
      synergyDescription: 'Pudovkin propone enlace donde Eisenstein propone colisión, creando debate fundamental',
      combinedInsightPotential: 9
    },
    {
      id: 'vertov-kino-eye',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos buscan verdad mediante montaje pero Vertov rechaza la ficción',
      combinedInsightPotential: 8
    },
    {
      id: 'murch-blink',
      relationshipType: 'synthetic',
      synergyDescription: 'Murch humaniza y psicologiza lo que Eisenstein ideologiza',
      combinedInsightPotential: 8
    }
  ]
};
