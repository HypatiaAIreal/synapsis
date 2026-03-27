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

export const STAM_SHOHAT_MULTICULTURALISM: Methodology = {
  metadata: {
    id: 'stam-shohat-multiculturalism',
    name: 'Multiculturalismo y Cine',
    author: ['Robert Stam', 'Ella Shohat'],
    year: 1994,
    category: 'postcolonial-decolonial',
    complexity: 'intermediate',
    timeToLearn: 35,
    prerequisities: ['film-history', 'cultural-studies'],
    culturalContext: 'Crítica multicultural estadounidense',
    language: 'es'
  },
  
  description: `Robert Stam y Ella Shohat desarrollaron un marco teórico comprehensivo para analizar el cine desde perspectivas multiculturales y poscoloniales. Su trabajo desmantela el eurocentrismo en la teoría y práctica cinematográfica, revelando cómo incluso conceptos aparentemente neutros están cargados de prejuicios coloniales. Proponen un "multiculturalismo policéntrico" que reconoce múltiples centros culturales sin jerarquías. Su análisis del "imperialismo de representación" muestra cómo Hollywood globaliza imaginarios coloniales. Examinan la "retórica del imperio" en géneros como el western, el musical y el film de aventuras. Desarrollaron metodologías para analizar estereotipos no como imágenes falsas sino como parte de estructuras de poder, insistiendo en la democratización radical de la producción y distribución de imágenes.`,
  
  keyConcepts: [
    {
      term: 'Multiculturalismo Policéntrico',
      definition: 'Reconocimiento de múltiples centros culturales sin jerarquías entre ellos',
      importance: 'fundamental',
      relatedTerms: ['pluralismo', 'descentramiento']
    },
    {
      term: 'Eurocentrismo',
      definition: 'Sesgo sistemático que privilegia perspectivas y valores europeos/occidentales',
      importance: 'fundamental',
      relatedTerms: ['occidentalismo', 'colonialidad']
    },
    {
      term: 'Imperialismo de Representación',
      definition: 'Dominación global a través de imágenes y narrativas hegemónicas',
      importance: 'fundamental',
      relatedTerms: ['hegemonía visual', 'colonización mental']
    },
    {
      term: 'Retórica del Imperio',
      definition: 'Tropos y convenciones narrativas que naturalizan la dominación colonial',
      importance: 'important',
      relatedTerms: ['tropos coloniales', 'narrativas imperiales']
    },
    {
      term: 'Sincretismo Cultural',
      definition: 'Mezclas creativas que producen nuevas formas culturales',
      importance: 'important',
      relatedTerms: ['hibridación', 'mestizaje cultural']
    },
    {
      term: 'Estética de la Resistencia',
      definition: 'Formas cinematográficas que desafían hegemonías visuales y narrativas',
      importance: 'important',
      relatedTerms: ['contra-cine', 'cine alternativo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de eurocentrismos',
      description: 'Detectar sesgos occidentales en narrativa, estética y producción',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Examinar qué culturas son centrales o marginales',
        'Identificar jerarquías implícitas de civilización',
        'Buscar universalizaciones de valores occidentales'
      ],
      commonMistakes: [
        'Ver eurocentrismo solo en contenido explícito',
        'Ignorar eurocentrismos en cine "progresista"'
      ]
    },
    {
      order: 2,
      name: 'Búsqueda de policentrismos',
      description: 'Identificar momentos de múltiples perspectivas culturales',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar narrativas que no privilegien un centro',
        'Identificar voces múltiples sin jerarquía',
        'Notar estéticas diversas en igualdad'
      ]
    },
    {
      order: 3,
      name: 'Análisis de retóricas imperiales',
      description: 'Examinar tropos y convenciones que naturalizan dominación',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Identificar narrativas de "descubrimiento" y "civilización"',
        'Buscar justificaciones de violencia colonial',
        'Examinar representaciones de "progreso"'
      ]
    },
    {
      order: 4,
      name: 'Examen de economías de representación',
      description: 'Analizar quién produce imágenes y para quién',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de sincretismos',
      description: 'Buscar mezclas culturales creativas y resistentes',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de estéticas resistentes',
      description: 'Examinar formas que desafían convenciones hegemónicas',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 7,
      name: 'Evaluación de democratización',
      description: 'Analizar acceso a medios de producción y distribución',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Marco analítico comprehensivo y aplicable globalmente',
    'Conecta análisis textual con economía política',
    'Valoriza cines periféricos y minoritarios',
    'Propone alternativas concretas al eurocentrismo',
    'Accesible sin sacrificar rigor teórico'
  ],
  
  limitations: [
    'Amplitud puede diluir especificidades locales',
    'Optimismo sobre multiculturalismo puede ignorar conflictos',
    'Menos atención a contradicciones dentro de culturas',
    'Riesgo de tokenismo en celebración de diversidad',
    'Contexto estadounidense puede sesgar análisis'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Ella Shohat', 'Robert Stam'],
      title: 'Unthinking Eurocentrism: Multiculturalism and the Media',
      year: 1994,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Robert Stam'],
      title: 'Tropical Multiculturalism: A Comparative History of Race in Brazilian Cinema and Culture',
      year: 1997,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Ella Shohat'],
      title: 'Taboo Memories, Diasporic Voices',
      year: 2006,
      publisher: 'Duke University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Ella Shohat', 'Robert Stam'],
      title: 'Multiculturalism, Postcoloniality, and Transnational Media',
      year: 2003,
      publisher: 'Rutgers University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Black Panther',
        year: 2018,
        director: 'Ryan Coogler'
      },
      analysisExcerpt: `Black Panther ejemplifica las posibilidades y límites del multiculturalismo policéntrico en Hollywood. Wakanda como afrofuturismo descentra narrativas eurocéntricas, imaginando África como centro tecnológico mundial. El film sincretiza estéticas africanas diversas en diseño de producción. Sin embargo, opera dentro de fórmulas Marvel eurocéntricas. La película demuestra tanto el potencial del multiculturalismo comercial como sus limitaciones estructurales. Representa una estética de resistencia parcial que negocia con el imperialismo de representación de Hollywood.`,
      insightsGenerated: [
        'El multiculturalismo comercial puede abrir espacios pero con límites',
        'El sincretismo estético puede ser políticamente significativo',
        'El policentrismo es posible incluso en productos mainstream'
      ],
      methodologyApplication: 'Análisis de negociaciones entre multiculturalismo y hegemonía comercial',
      keyFindings: [
        'Hollywood puede incorporar elementos policéntricos sin abandonar eurocentrismo',
        'El sincretismo visual puede ser más radical que el narrativo',
        'El éxito comercial puede amplificar mensajes multiculturales'
      ]
    },
    {
      film: {
        title: 'Babel',
        year: 2006,
        director: 'Alejandro González Iñárritu'
      },
      analysisExcerpt: `Babel intenta multiculturalismo pero revela problemas del cosmopolitismo superficial. Aunque presenta múltiples centros geográficos (Marruecos, México, Japón, USA), mantiene jerarquías donde el sufrimiento del Primer Mundo importa más. Los marroquíes y mexicanos sufren consecuencias desproporcionadas. El film perpetúa el "imperialismo de montaje" donde la técnica occidental une fragmentos del Tercer Mundo. Falso policentrismo que mantiene eurocentrismo estructural disfrazado de humanismo universal.`,
      insightsGenerated: [
        'La multiplicidad geográfica no garantiza policentrismo real',
        'El humanismo universal puede enmascarar jerarquías persistentes',
        'La forma cinematográfica puede contradecir intenciones multiculturales'
      ],
      methodologyApplication: 'Crítica de multiculturalismo superficial y eurocentrismo persistente',
      keyFindings: [
        'El multiculturalismo liberal puede reforzar jerarquías que dice criticar',
        'La técnica cinematográfica occidental puede recolonizar contenidos diversos',
        'El verdadero policentrismo requiere cambios estructurales no solo temáticos'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'said-orientalism',
      relationshipType: 'complementary',
      synergyDescription: 'Extienden la crítica del orientalismo de Said a un análisis multicultural global',
      combinedInsightPotential: 9
    },
    {
      id: 'hall-representation',
      relationshipType: 'complementary',
      synergyDescription: 'Hall teoriza la representación que Stam/Shohat analizan en contextos específicos',
      combinedInsightPotential: 8
    },
    {
      id: 'naficy-accented-cinema',
      relationshipType: 'complementary',
      synergyDescription: 'Naficy profundiza en aspectos diaspóricos que Stam/Shohat mencionan',
      combinedInsightPotential: 8
    }
  ]
};
