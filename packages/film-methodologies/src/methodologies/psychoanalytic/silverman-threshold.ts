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

export const SILVERMAN_THRESHOLD: Methodology = {
  metadata: {
    id: 'silverman-threshold',
    name: 'El Umbral del Mundo Visible',
    author: 'Kaja Silverman',
    year: 1996,
    category: 'psychoanalytic',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['lacan-gaze-mirror', 'feminist-theory'],
    culturalContext: 'Psicoanálisis feminista fenomenológico',
    language: 'es'
  },
  
  description: `Kaja Silverman ha desarrollado una sofisticada síntesis de psicoanálisis, feminismo y fenomenología para analizar la visualidad cinematográfica. Su trabajo examina cómo el cine media entre lo psíquico y lo social, especialmente en relación al género y la mirada. Silverman revisa conceptos lacanianos desde una perspectiva feminista, argumentando contra el determinismo fálico y proponiendo alternativas a la masculinidad normativa. Su concepto de "identificación heteropática" describe identificaciones que cruzan límites de género, raza y clase. Analiza el "screen" (pantalla/tamiz) como mediador entre la mirada y el ojo, el lugar donde se negocian las identificaciones.`,
  
  keyConcepts: [
    {
      term: 'Screen/Pantalla',
      definition: 'Mediador cultural entre la mirada del Otro y el ojo del sujeto',
      importance: 'fundamental',
      relatedTerms: ['tamiz cultural', 'mediación visual']
    },
    {
      term: 'Identificación Heteropática',
      definition: 'Identificación ética con el otro diferente a uno mismo',
      importance: 'fundamental',
      relatedTerms: ['identificación excéntrica', 'empatía radical']
    },
    {
      term: 'Acoustic Mirror',
      definition: 'La voz materna como primer espejo en formación del yo',
      importance: 'important',
      relatedTerms: ['espejo sonoro', 'voz maternal']
    },
    {
      term: 'Productive Look',
      definition: 'Mirada que afirma y da valor al otro en lugar de objetificar',
      importance: 'important',
      relatedTerms: ['mirada ética', 'afirmación visual']
    },
    {
      term: 'Idealización',
      definition: 'Investimiento amoroso que da valor a objetos despreciados',
      importance: 'important',
      relatedTerms: ['valorización', 'investimiento libidinal']
    },
    {
      term: 'Memoria Heteropática',
      definition: 'Memoria del trauma ajeno como responsabilidad ética',
      importance: 'important',
      relatedTerms: ['memoria vicaria', 'testimonio empático']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis del screen cultural',
      description: 'Examinar qué imágenes son culturalmente visibles/invisibles',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'El screen determina qué puede ser visto',
        'Incluye ideologías de género, raza, clase',
        'Algunos sujetos son sistemáticamente invisibilizados'
      ],
      commonMistakes: [
        'Ignorar la dimensión histórica del screen',
        'No considerar interseccionalidad'
      ]
    },
    {
      order: 2,
      name: 'Identificación de identificaciones',
      description: 'Mapear identificaciones normativas vs. heteropáticas',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Heteropáticas cruzan límites identitarios',
        'Requieren abandono del yo narcisista',
        'Son éticamente transformadoras'
      ]
    },
    {
      order: 3,
      name: 'Examen de construcción de género',
      description: 'Analizar cómo se construye visualmente el género',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Género como performance visual',
        'Buscar momentos de inestabilidad',
        'Identificar alternativas a normas'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de productive look',
      description: 'Identificar miradas que afirman en lugar de cosificar',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Miradas que dan agencia al otro',
        'Reconocimiento de subjetividad plena',
        'Amor como forma de dar valor'
      ]
    },
    {
      order: 5,
      name: 'Análisis de voz y sonido',
      description: 'Examinar dimensión acústica de la subjetividad',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'La voz puede subvertir la imagen',
        'Sincronización voz/cuerpo es política',
        'Silencios también significan'
      ]
    },
    {
      order: 6,
      name: 'Evaluación ética de la representación',
      description: 'Determinar responsabilidad ética del film',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Síntesis teórica excepcionalmente sofisticada',
    'Alternativa feminista al psicoanálisis falocéntrico',
    'Éticamente comprometida con la diferencia',
    'Atiende a interseccionalidad',
    'Útil para cine queer y feminista',
    'Conecta lo psíquico con lo social/histórico'
  ],
  
  limitations: [
    'Alta complejidad teórica',
    'Requiere conocimiento previo extenso',
    'A veces demasiado optimista sobre potencial',
    'Menos aplicable a cine mainstream',
    'Puede idealizar la identificación',
    'Escritura densa y académica'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Kaja Silverman'],
      title: 'The Threshold of the Visible World',
      year: 1996,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Kaja Silverman'],
      title: 'The Acoustic Mirror: The Female Voice in Psychoanalysis and Cinema',
      year: 1988,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Kaja Silverman'],
      title: 'Male Subjectivity at the Margins',
      year: 1992,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Kaja Silverman'],
      title: 'World Spectators',
      year: 2000,
      publisher: 'Stanford University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Beau Travail',
        year: 1999,
        director: 'Claire Denis'
      },
      analysisExcerpt: `Denis crea un cine de productive look que afirma cuerpos masculinos sin objetificarlos. La cámara observa a los legionarios con una mirada que reconoce su vulnerabilidad bajo la hipermasculinidad. Silverman vería aquí una reconfiguración del screen: hombres presentados como objetos de belleza sin feminización. La identificación heteropática opera cuando Sentain se identifica con Galoup a pesar de la rivalidad. El baile final de Galoup es momento de productive look supremo: afirmación de un cuerpo masculino en éxtasis no fálico. La directora mujer reconfigura la mirada sobre masculinidad.`,
      insightsGenerated: [
        'La mirada femenina puede reconfigurar la masculinidad',
        'Los cuerpos masculinos pueden ser bellos sin ser feminizados',
        'La danza permite expresión masculina no-fálica'
      ],
      methodologyApplication: 'Análisis de productive look y masculinidad alternativa',
      keyFindings: [
        'Denis ejemplifica el cine de productive look',
        'La identificación heteropática trasciende rivalidad',
        'El screen puede ser reconfigurado por miradas marginales'
      ]
    },
    {
      film: {
        title: 'Moonlight',
        year: 2016,
        director: 'Barry Jenkins'
      },
      analysisExcerpt: `Moonlight reconfigura radicalmente el screen de masculinidad negra. Chiron existe en la intersección de múltiples marginalizaciones, usualmente invisible en el screen dominante. Jenkins crea productive look: la cámara afirma la vulnerabilidad de Chiron sin explotarla. Las identificaciones heteropáticas abundan: Juan ve su yo joven en Chiron, el público cruza barreras de raza/sexualidad. El acoustic mirror distorsionado: la madre adicta no puede proporcionar reconocimiento sonoro. Kevin representa posibilidad de ser visto/amado. El final: dos hombres negros mirándose con productive look mutuo, reescribiendo el screen.`,
      insightsGenerated: [
        'Las identidades interseccionales requieren nuevo screen',
        'La vulnerabilidad masculina negra puede ser afirmada visualmente',
        'El amor como productive look que permite ser visto'
      ],
      methodologyApplication: 'Reconfiguración del screen para subjetividades marginalizadas',
      keyFindings: [
        'Jenkins crea nuevo lenguaje visual para masculinidad negra queer',
        'La identificación heteropática permite solidaridad cross-diferencia',
        'El cine puede reescribir screens culturales dominantes'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'mulvey-male-gaze',
      relationshipType: 'dialectical',
      synergyDescription: 'Silverman revisa y expande la teoría de Mulvey',
      combinedInsightPotential: 9
    },
    {
      id: 'butler-performativity',
      relationshipType: 'complementary',
      synergyDescription: 'Ambas teorizan género como construcción performativa',
      combinedInsightPotential: 8
    },
    {
      id: 'fanon-colonial-gaze',
      relationshipType: 'synthetic',
      synergyDescription: 'Silverman integra raza en su análisis de la mirada',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Visual Ethics Analyzer',
      type: 'framework',
      description: 'Marco para evaluar ética de representación visual',
      cost: 'paid',
      platforms: ['research']
    },
    {
      name: 'Identification Mapper',
      type: 'software',
      description: 'Herramienta para mapear tipos de identificación cinematográfica',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    }
  ]
};
