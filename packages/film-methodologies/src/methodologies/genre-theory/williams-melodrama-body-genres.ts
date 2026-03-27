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

export const WILLIAMS_MELODRAMA_BODY_GENRES: Methodology = {
  metadata: {
    id: 'williams-melodrama-body-genres',
    name: 'Melodrama y "Modos Corporales"',
    author: 'Linda Williams',
    year: 1991,
    category: 'genre-theory',
    complexity: 'intermediate',
    timeToLearn: 35,
    prerequisities: ['film-theory-basics'],
    culturalContext: 'Teoría feminista y estudios culturales',
    language: 'es'
  },
  
  description: `Linda Williams transformó la comprensión del melodrama argumentando que no es un género específico sino el modo fundamental del cine popular americano. Su concepto de "modo melodramático" describe una forma de narración organizada alrededor del pathos, la búsqueda de virtud oculta, y el timing moral del "demasiado tarde". Williams analiza cómo el melodrama negocia contradicciones sociales mediante exceso emocional y claridad moral, funcionando como la forma principal mediante la cual América piensa sobre sí misma. Su trabajo sobre "body genres" conectó melodrama con pornografía y horror como géneros que provocan respuestas corporales involuntarias, todos feminizados y despreciados. Williams examina cómo estos géneros movilizan diferentes temporalidades del fantasma.`,
  
  keyConcepts: [
    {
      term: 'Modo Melodramático',
      definition: 'Forma narrativa fundamental del cine americano basada en pathos y reconocimiento moral',
      importance: 'fundamental',
      relatedTerms: ['modo', 'narrativa americana', 'pathos']
    },
    {
      term: 'Body Genres',
      definition: 'Géneros que provocan respuesta física involuntaria: melodrama (lágrimas), pornografía (excitación), horror (miedo)',
      importance: 'fundamental',
      relatedTerms: ['respuesta corporal', 'géneros bajos']
    },
    {
      term: 'Timing Moral',
      definition: 'Temporalidad del reconocimiento: demasiado tarde (melodrama), a tiempo (pornografía), demasiado temprano (horror)',
      importance: 'fundamental',
      relatedTerms: ['temporalidad', 'reconocimiento']
    },
    {
      term: 'Exceso',
      definition: 'Desborde emocional y estilístico característico del melodrama',
      importance: 'important',
      relatedTerms: ['emoción', 'espectáculo', 'desborde']
    },
    {
      term: 'Virtud Oculta',
      definition: 'Bondad moral no reconocida que el melodrama busca revelar',
      importance: 'important',
      relatedTerms: ['moralidad', 'reconocimiento', 'inocencia']
    },
    {
      term: 'Melodrama Racial',
      definition: 'Cómo el modo procesa la historia racial americana mediante lágrimas y reconocimiento',
      importance: 'important',
      relatedTerms: ['raza', 'historia', 'reconciliación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del modo melodramático',
      description: 'Determinar cómo opera el melodrama más allá del género específico',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar momentos de pathos intenso',
        'Identificar búsqueda de reconocimiento moral',
        'Notar timing de revelaciones'
      ],
      commonMistakes: [
        'Limitar melodrama a "películas de mujeres"',
        'Ignorar melodrama en géneros "masculinos"'
      ]
    },
    {
      order: 2,
      name: 'Análisis de timing moral',
      description: 'Examinar temporalidad del reconocimiento y sus efectos',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar qué llega "demasiado tarde"',
        'Analizar efectos del timing en emociones'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de excesos',
      description: 'Localizar momentos de desborde emocional/estilístico',
      timeEstimate: 45,
      difficulty: 'basic',
      tips: [
        'Atender a música, actuación, mise-en-scène',
        'No juzgar exceso como "malo"'
      ]
    },
    {
      order: 4,
      name: 'Examen de virtud',
      description: 'Analizar qué valores morales busca afirmar el film',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de body responses',
      description: 'Si aplica, analizar respuestas corporales provocadas',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de dimensión racial',
      description: 'Si relevante, examinar cómo se procesa historia racial',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Revaloriza géneros despreciados como culturalmente centrales',
    'Concepto de modo más flexible que género rígido',
    'Conecta forma con función social y emocional',
    'Análisis sofisticado de raza en cine americano',
    'Integra respuestas corporales en análisis',
    'Explica persistencia y popularidad del melodrama'
  ],
  
  limitations: [
    'Muy centrado en contexto americano',
    'Puede universalizar modo culturalmente específico',
    'Menos útil para cine anti-melodramático',
    'Distinción modo/género a veces confusa',
    'Énfasis en emoción puede minimizar otros aspectos'
  ],
  
  bibliography: [
    {
      type: 'article',
      authors: ['Linda Williams'],
      title: 'Film Bodies: Gender, Genre, and Excess',
      year: 1991,
      journal: 'Film Quarterly',      
      pages: '2-13',
      essential: true
    },
    {
      type: 'book',
      authors: ['Linda Williams'],
      title: 'Playing the Race Card: Melodramas of Black and White from Uncle Tom to O.J. Simpson',
      year: 2001,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Linda Williams'],
      title: 'Melodrama Revised',
      year: 1998,
      journal: 'Refiguring American Film Genres',      
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Christine Gledhill', 'Linda Williams'],
      title: 'Melodrama Unbound: Across History, Media, and National Cultures',
      year: 2018,
      publisher: 'Columbia University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Titanic',
        year: 1997,
        director: 'James Cameron'
      },
      analysisExcerpt: `Titanic ejemplifica el modo melodramático en blockbuster moderno. El timing "demasiado tarde" estructura todo: Rose reconoce el verdadero amor cuando Jack muere, la sociedad reconoce la injusticia de clase cuando el barco se hunde. Exceso por doquier: música swelling, diálogos declarativos, espectáculo visual. La virtud oculta de Jack (noble pobre) debe ser reconocida contra villanos de clase alta. Body genre evidente: diseñado para provocar lágrimas mediante pathos calculado. El film no es "solo" melodrama sino que usa el modo melodramático para procesar ansiedades sobre clase, género y modernidad.`,
      insightsGenerated: [
        'El blockbuster moderno es fundamentalmente melodramático',
        'El "demasiado tarde" intensifica respuesta emocional',
        'El melodrama procesa contradicciones de clase mediante romance'
      ],
      methodologyApplication: 'Análisis de modo melodramático en blockbuster contemporáneo',
      keyFindings: [
        'Titanic demuestra universalidad del modo melodramático',
        'El exceso espectacular sirve al proyecto moral melodramático',
        'Las lágrimas son respuesta corporal culturalmente productiva'
      ]
    },
    {
      film: {
        title: '12 Years a Slave',
        year: 2013,
        director: 'Steve McQueen'
      },
      analysisExcerpt: `12 Years a Slave opera como melodrama racial que Williams teoriza. La virtud oculta de Solomon debe ser reconocida pero el timing es cruelmente "demasiado tarde" - 12 años de sufrimiento. El film busca reconocimiento moral de la audiencia sobre la atrocidad de la esclavitud. Exceso controlado: violencia mostrada sin romantización pero con impacto emocional máximo. Las lágrimas funcionan como forma de procesar trauma histórico racial. McQueen usa el modo melodramático para forzar confrontación con historia reprimida, convirtiendo espectadores en testigos morales.`,
      insightsGenerated: [
        'El melodrama racial enfrenta traumas históricos mediante emoción',
        'El reconocimiento tardío intensifica imperativo moral',
        'Las lágrimas pueden ser forma de trabajo histórico'
      ],
      methodologyApplication: 'Análisis de melodrama racial y reconocimiento histórico',
      keyFindings: [
        'El modo melodramático permite procesar traumas colectivos',
        'La virtud racial negada requiere reconocimiento melodramático',
        'El cine usa lágrimas para trabajo de memoria cultural'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'brooks-melodramatic-imagination',
      relationshipType: 'complementary',
      synergyDescription: 'Williams adapta teoría literaria de Brooks al cine específicamente',
      combinedInsightPotential: 9
    },
    {
      id: 'neale-genre-hollywood',
      relationshipType: 'complementary',
      synergyDescription: 'Neale ve géneros discretos donde Williams ve modo continuo',
      combinedInsightPotential: 8
    },
    {
      id: 'berlant-cruel-optimism',
      relationshipType: 'parallel',
      synergyDescription: 'Berlant analiza attachments melodramáticos en neoliberalismo',
      combinedInsightPotential: 8
    }
  ]
};
