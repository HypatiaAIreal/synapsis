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

export const GRANT_GENRE_THEORY: Methodology = {
  metadata: {
    id: 'grant-genre-theory',
    name: 'Teoría del Género',
    author: 'Barry Keith Grant',
    year: 1977,
    category: 'genre-theory',
    complexity: 'intermediate',
    timeToLearn: 35,
    prerequisities: ['film-theory-basics'],
    culturalContext: 'Estudios culturales del género',
    language: 'es'
  },
  
  description: `Barry Keith Grant ha sido uno de los teóricos más prolíficos y comprehensivos del género cinematográfico, desarrollando aproximaciones que integran análisis textual, cultural e ideológico. Grant examina cómo los géneros funcionan como "mitos culturales" que procesan contradicciones sociales mediante narrativas familiares. Su trabajo abarca desde géneros mainstream hasta subgéneros marginales, siempre atendiendo a las dimensiones políticas de las convenciones genéricas. Grant analiza la "experiencia genérica" - cómo las audiencias usan los géneros para negociar placeres y ansiedades. Su concepto de "transgresión genérica" examina films que deliberadamente violan convenciones para efectos críticos. Grant ha sido especialmente influyente en legitimar el estudio académico de géneros despreciados como el horror y la ciencia ficción.`,
  
  keyConcepts: [
    {
      term: 'Mitos Culturales',
      definition: 'Géneros como sistemas narrativos que procesan contradicciones y ansiedades sociales',
      importance: 'fundamental',
      relatedTerms: ['mitología moderna', 'función social']
    },
    {
      term: 'Experiencia Genérica',
      definition: 'Cómo las audiencias usan activamente los géneros para obtener placer y significado',
      importance: 'fundamental',
      relatedTerms: ['recepción activa', 'usos y gratificaciones']
    },
    {
      term: 'Transgresión Genérica',
      definition: 'Violación deliberada de convenciones para efectos críticos o renovadores',
      importance: 'important',
      relatedTerms: ['subversión', 'innovación']
    },
    {
      term: 'Ideología Genérica',
      definition: 'Dimensiones políticas implícitas en las convenciones de cada género',
      importance: 'important',
      relatedTerms: ['política', 'valores culturales']
    },
    {
      term: 'Géneros Nacionales',
      definition: 'Adaptaciones y variaciones locales de géneros transnacionales',
      importance: 'important',
      relatedTerms: ['cine nacional', 'hibridación cultural']
    },
    {
      term: 'Géneros Menores',
      definition: 'Subgéneros marginales o despreciados culturalmente pero significativos',
      importance: 'important',
      relatedTerms: ['cult cinema', 'exploitation']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del mito cultural',
      description: 'Determinar qué contradicciones sociales procesa el género',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar tensiones sociales subyacentes',
        'Identificar qué ansiedades alivia o explora',
        'Considerar contexto histórico de producción'
      ],
      commonMistakes: [
        'Simplificar excesivamente las contradicciones',
        'Ignorar múltiples niveles de significado'
      ]
    },
    {
      order: 2,
      name: 'Análisis de experiencia genérica',
      description: 'Examinar cómo las audiencias usan y disfrutan el género',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Considerar diferentes tipos de audiencia',
        'Analizar placeres específicos ofrecidos',
        'Examinar comunidades de fans'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de transgresiones',
      description: 'Identificar violaciones productivas de convenciones',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Distinguir transgresión de incompetencia',
        'Evaluar efectos de las transgresiones'
      ]
    },
    {
      order: 4,
      name: 'Examen ideológico',
      description: 'Analizar política implícita en las convenciones',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar valores naturalizados',
        'Buscar exclusiones y marginalizaciones',
        'Considerar representaciones de poder'
      ]
    },
    {
      order: 5,
      name: 'Consideración de contexto nacional',
      description: 'Si aplica, examinar adaptaciones locales del género',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación crítica',
      description: 'Sintetizar función cultural y política del género',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Amplitud excepcional cubriendo géneros marginales y mainstream',
    'Integración de múltiples aproximaciones teóricas',
    'Legitimación académica de géneros populares',
    'Atención a contextos nacionales y transnacionales',
    'Considera audiencias activas y creativas',
    'Análisis ideológico sofisticado'
  ],
  
  limitations: [
    'A veces más descriptivo que teóricamente innovador',
    'Eclecticismo puede carecer de coherencia metodológica',
    'Puede romantizar géneros marginales',
    'Énfasis en contenido sobre forma',
    'Menos sistemático que otros teóricos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Barry Keith Grant'],
      title: 'Film Genre Reader IV',
      year: 2012,
      publisher: 'University of Texas Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Barry Keith Grant'],
      title: 'Film Genre: From Iconography to Ideology',
      year: 2007,
      publisher: 'Wallflower Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Barry Keith Grant'],
      title: 'Shadows of Doubt: Negotiations of Masculinity in American Genre Films',
      year: 2010,
      publisher: 'Wayne State University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Barry Keith Grant'],
      title: 'Monster Cinema',
      year: 2018,
      publisher: 'Rutgers University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Dawn of the Dead',
        year: 1978,
        director: 'George A. Romero'
      },
      analysisExcerpt: `Dawn of the Dead ejemplifica el horror como crítica social que Grant valora. El mito cultural procesado es el consumismo zombificante del capitalismo tardío. Los zombis en el mall funcionan como metáfora literal de consumidores sin mente. La experiencia genérica combina placeres del horror (sustos, gore) con satisfacción intelectual de la sátira. Transgrede convenciones del horror mediante humor negro y comentario político explícito. Ideológicamente, el film critica tanto el consumismo como el survivalism individualista. Romero eleva el género "menor" del horror zombie a vehículo de crítica social sofisticada.`,
      insightsGenerated: [
        'Los géneros menores pueden vehicular crítica social compleja',
        'El horror procesa ansiedades sobre el capitalismo moderno',
        'La transgresión genérica puede tener función política'
      ],
      methodologyApplication: 'Análisis de género menor como vehículo crítico',
      keyFindings: [
        'El horror zombie como género inherentemente político',
        'Los placeres genéricos no excluyen reflexión crítica',
        'Los géneros marginales permiten críticas más radicales'
      ]
    },
    {
      film: {
        title: 'The Babadook',
        year: 2014,
        director: 'Jennifer Kent'
      },
      analysisExcerpt: `The Babadook transgrede el horror convencional al hacer del monstruo una manifestación del duelo y depresión materna. El mito cultural es la maternidad perfecta imposible y sus costos psíquicos. La experiencia genérica es perturbadora porque viola expectativas: el verdadero horror es interno, psicológico. Ideológicamente, critica presiones sobre las madres para reprimir emociones negativas. Como film de horror australiano, adapta convenciones del género a ansiedades nacionales específicas sobre familia nuclear. Kent usa el género "menor" para explorar tabúes sobre maternidad ambivalente.`,
      insightsGenerated: [
        'El horror puede explorar tabúes psicológicos y sociales',
        'Las adaptaciones nacionales revelan ansiedades locales',
        'La transgresión genérica permite abordar temas censurados'
      ],
      methodologyApplication: 'Análisis de transgresión genérica con función terapéutica',
      keyFindings: [
        'El género permite procesar traumas colectivos específicos',
        'Las directoras pueden transformar géneros mediante perspectivas marginalizadas',
        'El horror psicológico politiza lo personal'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'wood-ideology-genre',
      relationshipType: 'complementary',
      synergyDescription: 'Ambos analizan dimensiones ideológicas pero Grant es menos psicoanalítico',
      combinedInsightPotential: 9
    },
    {
      id: 'altman-semantic-syntactic',
      relationshipType: 'complementary',
      synergyDescription: 'Grant añade dimensión cultural al formalismo de Altman',
      combinedInsightPotential: 8
    },
    {
      id: 'mittell-genre-discourse',
      relationshipType: 'complementary',
      synergyDescription: 'Mittell teoriza lo que Grant practica en análisis cultural',
      combinedInsightPotential: 8
    }
  ]
};
