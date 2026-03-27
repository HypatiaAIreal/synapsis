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

export const CHOW_ETHNIC_VISUALITY: Methodology = {
  metadata: {
    id: 'chow-ethnic-visuality',
    name: 'Visualidad Étnica',
    author: 'Rey Chow',
    year: 1995,
    category: 'postcolonial-decolonial',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['psychoanalysis', 'postcolonial-theory', 'film-theory'],
    culturalContext: 'Teoría poscolonial china-americana',
    language: 'es'
  },
  
  description: `Rey Chow desarrolló teorías sofisticadas sobre cómo la etnicidad es producida visualmente en el cine global. Su concepto de "ethnic spectatorship" examina cómo los sujetos racializados son interpelados como espectadores étnicos, esperados a responder de maneras predeterminadas. Chow analiza la "violencia de la visibilidad" - cómo hacer visible al otro étnico es ya un acto de poder. Su trabajo sobre "sentimental fabulations" muestra cómo el sentimentalismo funciona políticamente en el cine del Tercer Mundo. Chow critica tanto la "autoetnografía" como el "nativismo". Su concepto de "coercive mimeticism" describe la presión sobre sujetos étnicos para ser más auténticamente "ellos mismos". Su trabajo conecta psicoanálisis, poscolonialismo y teoría cinematográfica.`,
  
  keyConcepts: [
    {
      term: 'Ethnic Spectatorship',
      definition: 'Interpelación de espectadores como sujetos étnicos con respuestas esperadas',
      importance: 'fundamental',
      relatedTerms: ['espectador racializado', 'interpelación étnica']
    },
    {
      term: 'Violencia de Visibilidad',
      definition: 'El acto de hacer visible al otro étnico como ejercicio de poder',
      importance: 'fundamental',
      relatedTerms: ['hipervisibilidad', 'objetificación visual']
    },
    {
      term: 'Sentimental Fabulations',
      definition: 'Uso político del sentimentalismo en cine del Tercer Mundo',
      importance: 'important',
      relatedTerms: ['melodrama político', 'afecto estratégico']
    },
    {
      term: 'Coercive Mimeticism',
      definition: 'Presión para performar autenticidad étnica',
      importance: 'fundamental',
      relatedTerms: ['autenticidad forzada', 'esencialismo impuesto']
    },
    {
      term: 'Autoetnografía',
      definition: 'Cuando los sujetos étnicos se representan para la mirada dominante',
      importance: 'important',
      relatedTerms: ['auto-orientalismo', 'auto-exotización']
    },
    {
      term: 'Entanglements',
      definition: 'Complicidades inevitables en sistemas de representación',
      importance: 'important',
      relatedTerms: ['enredos', 'complicidad estructural']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis de interpelación étnica',
      description: 'Examinar cómo el film construye espectadores étnicos',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar suposiciones sobre audiencias étnicas',
        'Buscar momentos de reconocimiento étnico esperado',
        'Analizar exclusiones de espectador universal'
      ],
      commonMistakes: [
        'Asumir que representación étnica es para grupos étnicos',
        'Ignorar construcción de espectador blanco normativo'
      ]
    },
    {
      order: 2,
      name: 'Examen de violencia de visibilidad',
      description: 'Analizar cómo la visibilidad étnica ejerce poder',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar hipervisibilidad de diferencia',
        'Identificar invisibilidad de normalidad',
        'Examinar espectacularización étnica'
      ]
    },
    {
      order: 3,
      name: 'Análisis de sentimentalismo',
      description: 'Examinar funciones políticas del melodrama étnico',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar apelaciones emocionales estratégicas',
        'Buscar lágrimas como política',
        'Analizar compasión como poder'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de coercive mimeticism',
      description: 'Identificar presiones de autenticidad',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de autoetnografías',
      description: 'Buscar auto-representaciones para mirada dominante',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de entanglements',
      description: 'Examinar complicidades inevitables',
      timeEstimate: 60,
      difficulty: 'expert'
    },
    {
      order: 7,
      name: 'Evaluación de commodity ethnicity',
      description: 'Analizar mercantilización de diferencia étnica',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Sofisticación teórica excepcional sobre visualidad étnica',
    'Evita binarios simples de resistencia/complicidad',
    'Análisis matizado del sentimentalismo político',
    'Conecta psicoanálisis con política poscolonial',
    'Atención a economías globales de representación'
  ],
  
  limitations: [
    'Alta densidad conceptual requiere formación especializada',
    'Puede ser pesimista sobre posibilidades de agencia',
    'Contexto académico estadounidense puede limitar alcance',
    'Menos atención a prácticas de resistencia concretas',
    'Complejidad puede inhibir aplicación práctica'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Rey Chow'],
      title: 'Primitive Passions: Visuality, Sexuality, Ethnography, and Contemporary Chinese Cinema',
      year: 1995,
      publisher: 'Columbia University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Rey Chow'],
      title: 'Sentimental Fabulations, Contemporary Chinese Films',
      year: 2007,
      publisher: 'Columbia University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Rey Chow'],
      title: 'The Protestant Ethnic and the Spirit of Capitalism',
      year: 2002,
      publisher: 'Columbia University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Rey Chow'],
      title: 'Entanglements, or Transmedial Thinking about Capture',
      year: 2012,
      publisher: 'Duke University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Crouching Tiger, Hidden Dragon',
        year: 2000,
        director: 'Ang Lee'
      },
      analysisExcerpt: `Crouching Tiger ejemplifica la autoetnografía sofisticada. Lee crea wuxia para consumo occidental, consciente del coercive mimeticism - debe ser "auténticamente" chino. Sentimental fabulations abundan: melodrama confuciano empaquetado para lágrimas globales. Ethnic spectatorship complejo: chinos esperados a reconocer tradición, occidentales a consumir exotismo. Violencia de visibilidad: China se hace hipervisible como fantasía atemporal. Film navega entanglements: no puede escapar orientalismo pero lo usa estratégicamente. Commodity ethnicity premium: Chineseness como marca global de arte.`,
      insightsGenerated: [
        'La autoetnografía puede ser estratégica y problemática simultáneamente',
        'El sentimentalismo traduce diferencia cultural para consumo global',
        'El éxito global requiere negociar coercive mimeticism'
      ],
      methodologyApplication: 'Análisis de cómo opera la etnicidad como commodity visual global',
      keyFindings: [
        'Los cineastas étnicos navegan imposibles demandas de autenticidad',
        'El melodrama funciona como lenguaje universal que borra especificidad',
        'La visualidad étnica es siempre ya una economía política'
      ]
    },
    {
      film: {
        title: 'The Farewell',
        year: 2019,
        director: 'Lulu Wang'
      },
      analysisExcerpt: `The Farewell negocia brillantemente las trampas que Chow identifica. Wang resiste coercive mimeticism: rechaza hacer "película china" o "americana". Ethnic spectatorship subvertido: no explica cultura china ni la exotiza. Sentimentalismo estratégico: usa emoción familiar universal pero mantiene especificidad cultural. Violencia de visibilidad minimizada: China contemporánea ordinaria, no espectacular. Autoetnografía reflexiva: film sobre imposibilidad de traducción cultural. Entanglements reconocidos: financiamiento americano, historia personal, audiencia global navegados conscientemente.`,
      insightsGenerated: [
        'Es posible resistir parcialmente el coercive mimeticism',
        'La especificidad cultural puede mantenerse en productos globales',
        'Reconocer entanglements permite navegarlos más éticamente'
      ],
      methodologyApplication: 'Análisis de estrategias para minimizar violencia de visibilidad étnica',
      keyFindings: [
        'La reflexividad sobre traducción cultural reduce violencia representacional',
        'El sentimentalismo puede usarse sin sacrificar complejidad',
        'Los cineastas pueden resistir interpelaciones étnicas esperadas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'said-orientalism',
      relationshipType: 'complementary',
      synergyDescription: 'Chow complejiza el orientalismo con análisis psicoanalítico',
      combinedInsightPotential: 8
    },
    {
      id: 'mulvey-male-gaze',
      relationshipType: 'complementary',
      synergyDescription: 'Chow adapta análisis de la mirada para contextos étnicos',
      combinedInsightPotential: 9
    },
    {
      id: 'bhabha-mimicry',
      relationshipType: 'complementary',
      synergyDescription: 'Chow desarrolla el mimetismo en coercive mimeticism',
      combinedInsightPotential: 8
    }
  ]
};
