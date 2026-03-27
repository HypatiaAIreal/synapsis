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

export const WILLIAMS_CULTURAL_MATERIALISM: Methodology = {
  metadata: {
    id: 'williams-cultural-materialism',
    name: 'Materialismo Cultural',
    author: 'Raymond Williams',
    year: 1977,
    category: 'marxist-sociological',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['marxist-theory', 'cultural-studies'],
    culturalContext: 'Nueva izquierda británica',
    language: 'es'
  },
  
  description: `Raymond Williams desarrolló el "materialismo cultural" como alternativa tanto al marxismo mecánico como al idealismo cultural, entendiendo la cultura como práctica material constitutiva, no mero reflejo de la base económica. Su análisis de las "estructuras de sentimiento" - experiencias sociales en solución, aún no precipitadas en ideología formal - es crucial para entender cómo el cine captura y forma experiencias emergentes. Williams distinguió entre elementos culturales "dominantes", "residuales" (del pasado pero aún activos) y "emergentes" (nuevas prácticas y significados), proporcionando un marco dinámico para analizar las luchas culturales en el cine. Su trabajo conecta análisis textual detallado con historia social amplia, siempre atento a la "cultura ordinaria" de la experiencia vivida cotidiana.`,
  
  keyConcepts: [
    {
      term: 'Materialismo Cultural',
      definition: 'La cultura como práctica material constitutiva de la realidad social',
      importance: 'fundamental',
      relatedTerms: ['práctica', 'producción cultural', 'materialidad']
    },
    {
      term: 'Estructuras de Sentimiento',
      definition: 'Experiencias sociales emergentes aún no articuladas en ideología formal',
      importance: 'fundamental',
      relatedTerms: ['experiencia', 'emergente', 'pre-ideológico']
    },
    {
      term: 'Dominante/Residual/Emergente',
      definition: 'Elementos culturales hegemónicos/del pasado activo/nuevos en formación',
      importance: 'fundamental',
      relatedTerms: ['hegemonía', 'tradición', 'innovación']
    },
    {
      term: 'Cultura Ordinaria',
      definition: 'Cultura como modo de vida total, no solo arte elevado',
      importance: 'important',
      relatedTerms: ['democratización', 'vida cotidiana', 'popular']
    },
    {
      term: 'Determinación Suave',
      definition: 'Presiones y límites más que determinación mecánica',
      importance: 'important',
      relatedTerms: ['presión', 'límite', 'condicionamiento']
    },
    {
      term: 'Keywords',
      definition: 'Vocabulario cultural históricamente específico y cambiante',
      importance: 'important',
      relatedTerms: ['lenguaje', 'significado', 'historia']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de estructura de sentimiento',
      description: 'Localizar experiencias emergentes aún no codificadas',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar lo que se siente pero no se puede nombrar aún',
        'Identificar tensiones entre experiencia y discursos disponibles',
        'Prestar atención a ambigüedades productivas'
      ],
      commonMistakes: [
        'Confundir con ideología ya formada',
        'Buscar solo en diálogos, no en forma'
      ]
    },
    {
      order: 2,
      name: 'Mapeo dominante/residual/emergente',
      description: 'Clasificar elementos culturales según su posición histórica',
      timeEstimate: 75,
      difficulty: 'intermediate',
      tips: [
        'Identificar qué es hegemónico en el momento',
        'Buscar elementos del pasado aún activos',
        'Detectar lo genuinamente nuevo'
      ]
    },
    {
      order: 3,
      name: 'Análisis como práctica material',
      description: 'Examinar el film como producción material concreta',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Considerar condiciones de producción',
        'Analizar trabajo creativo como labor'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de cultura ordinaria',
      description: 'Identificar representaciones de vida cotidiana',
      timeEstimate: 45,
      difficulty: 'basic'
    },
    {
      order: 5,
      name: 'Identificación de determinaciones',
      description: 'Analizar presiones y límites, no causas mecánicas',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis de keywords',
      description: 'Examinar vocabulario clave y sus significados cambiantes',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Marco flexible y dinámico para análisis cultural',
    'Atención a experiencia vivida y cultura popular',
    'Evita reduccionismos económicos o idealistas',
    'Democratiza el análisis cultural',
    'Historización sofisticada pero accesible',
    'Aplicabilidad amplia a diversos contextos'
  ],
  
  limitations: [
    'Conceptos a veces vagos o difíciles de operacionalizar',
    'Británico-céntrico en sus ejemplos',
    'Menos sistemático que otros enfoques',
    'Tensión entre análisis formal y social',
    'Optimismo sobre cultura popular a veces ingenuo'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Raymond Williams'],
      title: 'Marxism and Literature',
      year: 1977,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Raymond Williams'],
      title: 'The Long Revolution',
      year: 1961,
      publisher: 'Chatto & Windus',
      essential: true
    },
    {
      type: 'book',
      authors: ['Raymond Williams'],
      title: 'Keywords: A Vocabulary of Culture and Society',
      year: 1983,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Raymond Williams'],
      title: 'Television: Technology and Cultural Form',
      year: 1974,
      publisher: 'Fontana',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Saturday Night and Sunday Morning',
        year: 1960,
        director: 'Karel Reisz'
      },
      analysisExcerpt: `Saturday Night and Sunday Morning captura perfectamente una estructura de sentimiento emergente: la nueva juventud obrera británica post-guerra. Arthur Seaton encarna experiencias aún no articuladas ideológicamente: prosperidad relativa pero alienación persistente, rechazo tanto del conformismo tradicional (residual) como del consumismo americanizado (dominante). La cultura ordinaria del pub, fábrica y hogar se presenta sin condescendencia. El film es práctica material del movimiento Free Cinema. Keywords como "freedom" y "responsibility" se redefinen desde experiencia obrera. La ambigüedad del final refleja estructura de sentimiento no resuelta.`,
      insightsGenerated: [
        'El "angry young man" como estructura de sentimiento pre-política',
        'Lo emergente puede ser contradictorio e inarticulado',
        'La cultura ordinaria contiene crítica implícita'
      ],
      methodologyApplication: 'Identificación de experiencia emergente en cultura working class',
      keyFindings: [
        'Las estructuras de sentimiento preceden articulación política',
        'El cine captura experiencias que otros medios no pueden',
        'La ambigüedad puede ser más verdadera que la claridad ideológica'
      ]
    },
    {
      film: {
        title: 'This Is England',
        year: 2006,
        director: 'Shane Meadows'
      },
      analysisExcerpt: `This Is England mapea brillantemente la lucha entre residual/dominante/emergente en la cultura británica de 1983. Residual: solidaridad working class tradicional, cultura skinhead original multicultural. Dominante: thatcherismo, individualismo, racismo renovado. Emergente: nuevas formas de identidad híbrida en Shaun. La estructura de sentimiento de la era - pérdida, rabia, confusión - se materializa en la estética y narrativa. Keywords como "England" se disputan entre significados incompatibles. El film muestra cómo lo residual puede ser apropiado reaccionariamente.`,
      insightsGenerated: [
        'Lo residual puede ser progresista o reaccionario según apropiación',
        'Las estructuras de sentimiento incluyen contradicciones dolorosas',
        'La cultura juvenil es campo de batalla entre fuerzas culturales'
      ],
      methodologyApplication: 'Análisis de luchas entre elementos culturales en momento histórico',
      keyFindings: [
        'El materialismo cultural revela complejidad de luchas culturales',
        'La nostalgia puede ser residual progresista o reaccionaria',
        'Las keywords nacionales son especialmente disputadas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'gramsci-hegemony',
      relationshipType: 'complementary',
      synergyDescription: 'Williams desarrolla concepto gramsciano de hegemonía culturalmente',
      combinedInsightPotential: 9
    },
    {
      id: 'hall-cultural-studies',
      relationshipType: 'synthetic',
      synergyDescription: 'Hall extiende materialismo cultural de Williams en estudios culturales',
      combinedInsightPotential: 9
    },
    {
      id: 'hoggart-uses-literacy',
      relationshipType: 'parallel',
      synergyDescription: 'Hoggart comparte interés en cultura ordinaria working class',
      combinedInsightPotential: 8
    }
  ]
};
