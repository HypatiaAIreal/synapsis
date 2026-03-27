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

export const MIGNOLO_VISUAL_DECOLONIALITY: Methodology = {
  metadata: {
    id: 'mignolo-visual-decoloniality',
    name: 'Decolonialidad Visual',
    author: 'Walter Mignolo',
    year: 2000,
    category: 'postcolonial-decolonial',
    complexity: 'expert',
    timeToLearn: 50,
    prerequisities: ['decolonial-theory', 'epistemology', 'latin-american-studies'],
    culturalContext: 'Pensamiento decolonial latinoamericano',
    language: 'es'
  },
  
  description: `Walter Mignolo, teórico argentino, desarrolló el concepto de "decolonialidad" que va más allá de la descolonización política para abordar la colonialidad del poder, del saber y del ser. Para el cine, Mignolo propone una "desobediencia epistémica" que rechaza las categorías occidentales de arte y estética. Su concepto de "pensamiento fronterizo" valoriza el conocimiento producido desde las fronteras del sistema mundo moderno/colonial. Mignolo analiza la "colonialidad de la visión" - cómo Occidente impuso regímenes visuales que clasifican y jerarquizan. Su trabajo sobre la "opción decolonial" propone no una nueva verdad universal sino el reconocimiento de múltiples opciones cosmológicas. El concepto de "delinking" sugiere desconectarse de la matriz colonial para reconectarse con memorias y prácticas otras.`,
  
  keyConcepts: [
    {
      term: 'Decolonialidad',
      definition: 'Proyecto de desprendimiento de la matriz colonial de poder/saber/ser',
      importance: 'fundamental',
      relatedTerms: ['decolonial turn', 'giro decolonial']
    },
    {
      term: 'Colonialidad del Ver',
      definition: 'Imposición de regímenes visuales occidentales como universales',
      importance: 'fundamental',
      relatedTerms: ['regímenes escópicos', 'visualidad colonial']
    },
    {
      term: 'Pensamiento Fronterizo',
      definition: 'Epistemología desde los márgenes del sistema mundo moderno/colonial',
      importance: 'fundamental',
      relatedTerms: ['border thinking', 'epistemología otra']
    },
    {
      term: 'Desobediencia Epistémica',
      definition: 'Rechazo de categorías y marcos de conocimiento occidentales',
      importance: 'important',
      relatedTerms: ['rebeldía epistémica', 'insurgencia']
    },
    {
      term: 'Delinking/Desprendimiento',
      definition: 'Desconexión de la matriz colonial para reconexión con lo propio',
      importance: 'important',
      relatedTerms: ['desenganche', 'desvinculación']
    },
    {
      term: 'Pluriversalidad',
      definition: 'Un mundo donde quepan muchos mundos',
      importance: 'important',
      relatedTerms: ['pluriverso', 'mundos otros']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de colonialidad visual',
      description: 'Detectar imposición de regímenes visuales occidentales',
      timeEstimate: 60,
      difficulty: 'expert',
      tips: [
        'Buscar naturalización de perspectiva occidental',
        'Identificar jerarquías visuales impuestas',
        'Examinar qué se hace visible/invisible'
      ],
      commonMistakes: [
        'Confundir crítica de colonialidad con rechazo total de Occidente',
        'No distinguir modernidad de colonialidad'
      ]
    },
    {
      order: 2,
      name: 'Búsqueda de pensamiento fronterizo',
      description: 'Identificar epistemologías desde los márgenes',
      timeEstimate: 60,
      difficulty: 'expert',
      tips: [
        'Buscar conocimientos no-occidentales',
        'Identificar lógicas otras de ver/conocer',
        'Examinar hibridaciones epistémicas'
      ]
    },
    {
      order: 3,
      name: 'Análisis de desobediencia epistémica',
      description: 'Examinar rechazos de categorías occidentales',
      timeEstimate: 45,
      difficulty: 'expert',
      tips: [
        'Identificar uso de categorías propias',
        'Buscar marcos interpretativos otros',
        'Notar ausencia de legitimación occidental'
      ]
    },
    {
      order: 4,
      name: 'Examen de corpo-política',
      description: 'Analizar desde qué cuerpo/lugar se enuncia',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de delinking',
      description: 'Buscar desprendimientos de matriz colonial',
      timeEstimate: 60,
      difficulty: 'expert'
    },
    {
      order: 6,
      name: 'Búsqueda de opciones otras',
      description: 'Identificar alternativas a universalismo occidental',
      timeEstimate: 45,
      difficulty: 'expert'
    },
    {
      order: 7,
      name: 'Análisis de re-existencia',
      description: 'Examinar formas otras de ser/estar en el mundo',
      timeEstimate: 60,
      difficulty: 'expert'
    },
    {
      order: 8,
      name: 'Evaluación de pluriversalidad',
      description: 'Analizar reconocimiento de múltiples mundos',
      timeEstimate: 45,
      difficulty: 'expert'
    }
  ],
  
  strengths: [
    'Radicalidad epistémica que va a la raíz del problema colonial',
    'Valorización de conocimientos y estéticas otras',
    'Proyecto pluriversal no universalista',
    'Conexión entre estética y geopolítica del conocimiento',
    'Propuesta transformadora integral'
  ],
  
  limitations: [
    'Alta abstracción conceptual dificulta aplicación',
    'Puede tender a esencializar lo indígena/local',
    'Dificultad práctica del desprendimiento total',
    'Jerga especializada crea barreras',
    'Menos específico al análisis cinematográfico'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Walter Mignolo'],
      title: 'Local Histories/Global Designs: Coloniality, Subaltern Knowledges, and Border Thinking',
      year: 2000,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Walter Mignolo', 'Catherine Walsh'],
      title: 'On Decoloniality: Concepts, Analytics, Praxis',
      year: 2018,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Walter Mignolo', 'Rolando Vázquez'],
      title: 'Decolonial AestheSis: Colonial Wounds/Decolonial Healings',
      year: 2013,
      journal: 'Social Text',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Embrace of the Serpent',
        year: 2015,
        director: 'Ciro Guerra'
      },
      analysisExcerpt: `El Abrazo de la Serpiente practica desobediencia epistémica visual. El conocimiento indígena amazónico no se traduce a categorías occidentales - permanece opaco, otro. Pensamiento fronterizo: perspectiva de Karamakate descentra la mirada antropológica occidental. Delinking radical: el film rechaza explicar o justificar cosmovisión indígena para audiencia occidental. Colonialidad del ver subvertida: los occidentales son vistos como enfermos, limitados. Re-existencia: formas otras de relacionarse con plantas, río, cosmos. Pluriversalidad: coexisten mundos incompatibles sin síntesis. El blanco y negro rechaza exotización visual tropical.`,
      insightsGenerated: [
        'El cine puede practicar desobediencia epistémica sin explicarla',
        'La opacidad protege conocimientos otros de apropiación',
        'Es posible un cine decolonial dentro de circuitos comerciales'
      ],
      methodologyApplication: 'Ejemplo de decolonialidad visual en práctica cinematográfica',
      keyFindings: [
        'La estética decolonial no es un estilo sino una política del conocimiento',
        'El pensamiento fronterizo puede guiar decisiones formales',
        'La re-existencia se muestra, no se explica'
      ]
    },
    {
      film: {
        title: 'Ixcanul',
        year: 2015,
        director: 'Jayro Bustamante'
      },
      analysisExcerpt: `Ixcanul despliega visualidad maya-kaqchikel sin traducción colonial. Corpo-política clara: se enuncia desde cuerpo/lugar indígena específico. Desobediencia epistémica: rituales y cosmovisión presentados sin explicación etnográfica. Colonialidad del ser enfrentada: María existe en sus propios términos, no como "indígena" genérica. Delinking parcial: usa forma cinematográfica occidental pero la llena de contenido otro. Lengua kaqchikel sin subtítulos en momentos clave - opacidad estratégica. Modernidad/colonialidad expuesta en sistema de salud. Estética telúrica, corporal, no folclórica.`,
      insightsGenerated: [
        'La corpo-política del conocimiento determina la estética',
        'Es posible usar herramientas occidentales para fines decoloniales',
        'La especificidad cultural resiste la colonialidad mejor que el indigenismo genérico'
      ],
      methodologyApplication: 'Análisis de estrategias decoloniales en cine indígena contemporáneo',
      keyFindings: [
        'El cine indígena puede evitar auto-etnografía y auto-exotización',
        'La decolonialidad opera en múltiples niveles simultáneamente',
        'Las estéticas otras emergen de epistemologías otras'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'quijano-coloniality-power',
      relationshipType: 'complementary',
      synergyDescription: 'Quijano conceptualiza la colonialidad que Mignolo desarrolla',
      combinedInsightPotential: 9
    },
    {
      id: 'dussel-philosophy-liberation',
      relationshipType: 'complementary',
      synergyDescription: 'Dussel y Mignolo comparten proyecto de filosofía/estética desde el Sur',
      combinedInsightPotential: 9
    },
    {
      id: 'rivera-cusicanqui-chixi',
      relationshipType: 'complementary',
      synergyDescription: 'Rivera Cusicanqui critica abstracciones decoloniales desde praxis ch\'ixi',
      combinedInsightPotential: 8
    }
  ]
};
