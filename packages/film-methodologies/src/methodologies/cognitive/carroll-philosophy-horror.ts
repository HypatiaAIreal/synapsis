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

export const CARROLL_PHILOSOPHY_HORROR: Methodology = {
  metadata: {
    id: 'carroll-philosophy-horror',
    name: 'Filosofía del Horror y Cognición',
    author: 'Noël Carroll',
    year: 1990,
    category: 'cognitive',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['philosophy-basics', 'genre-theory'],
    culturalContext: 'Filosofía analítica del cine',
    language: 'es'
  },
  
  description: `Noël Carroll desarrolló una aproximación cognitiva-filosófica al cine que combina análisis conceptual riguroso con atención a respuestas emocionales. Su teoría del horror como "art-horror" distingue entre miedo real y miedo estético, analizando cómo el género produce respuestas emocionales específicas mediante estructuras cognitivas. Carroll propone que los monstruos del horror son "intersticiales" - violan categorías conceptuales básicas (vivo/muerto, humano/animal), provocando respuestas de disgusto y fascinación. Su teoría "erotética" de la narrativa la concibe como serie de preguntas y respuestas que mantienen el interés cognitivo. Carroll también desarrolló el concepto de "criterial prefocusing" - cómo los films dirigen la atención mediante composición visual hacia elementos narrativamente relevantes.`,
  
  keyConcepts: [
    {
      term: 'Art-Horror',
      definition: 'Emoción estética específica del género de horror, distinta del miedo real',
      importance: 'fundamental',
      relatedTerms: ['emoción estética', 'paradoja del horror']
    },
    {
      term: 'Monstruos Intersticiales',
      definition: 'Seres que violan categorías conceptuales básicas provocando repulsión cognitiva',
      importance: 'fundamental',
      relatedTerms: ['categorías', 'impureza']
    },
    {
      term: 'Thought Theory',
      definition: 'Los pensamientos sobre situaciones ficticias causan emociones reales',
      importance: 'fundamental',
      relatedTerms: ['emoción', 'ficción']
    },
    {
      term: 'Erotética Narrativa',
      definition: 'Estructura de preguntas y respuestas que guía el interés narrativo',
      importance: 'important',
      relatedTerms: ['suspense', 'curiosidad']
    },
    {
      term: 'Criterial Prefocusing',
      definition: 'Dirección de la atención mediante indicios visuales compositivos',
      importance: 'important',
      relatedTerms: ['atención', 'composición']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar emociones objetivo',
      description: 'Determinar qué respuestas emocionales busca el film',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Distinguir entre emociones pretendidas y logradas',
        'Considerar variaciones culturales en respuestas',
        'Identificar mezclas emocionales complejas'
      ],
      commonMistakes: [
        'Confundir respuesta personal con intención del film',
        'Ignorar emociones secundarias o ambivalentes'
      ]
    },
    {
      order: 2,
      name: 'Analizar monstruosidad',
      description: 'Examinar qué categorías conceptuales viola el monstruo',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar violaciones de categorías naturales',
        'Examinar hibridaciones y contradicciones',
        'Considerar impurezas culturales específicas'
      ]
    },
    {
      order: 3,
      name: 'Examinar estructura erotética',
      description: 'Mapear las preguntas narrativas planteadas y respondidas',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Identificar macropreguntas principales',
        'Rastrear micropreguntas escena por escena',
        'Notar preguntas sin respuesta o engañosas'
      ]
    },
    {
      order: 4,
      name: 'Rastrear criterial prefocusing',
      description: 'Analizar cómo la composición guía la atención',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Examinar encuadres y composiciones clave',
        'Identificar patrones de dirección atencional'
      ]
    },
    {
      order: 5,
      name: 'Analizar thought content',
      description: 'Examinar qué pensamientos provocan las emociones',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluar paradoja ficcional',
      description: 'Analizar cómo se generan emociones sin creencia real',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Análisis filosófico riguroso de géneros populares',
    'Incluye tanto cognición como emoción',
    'Base conceptual clara y bien argumentada',
    'Explica paradojas estéticas fundamentales',
    'Método aplicable más allá del horror'
  ],
  
  limitations: [
    'Centrado principalmente en géneros específicos',
    'Modelo quizás demasiado racionalista de las emociones',
    'Menos útil para cine experimental o abstracto',
    'Puede simplificar respuestas culturalmente específicas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Noël Carroll'],
      title: 'The Philosophy of Horror, or Paradoxes of the Heart',
      year: 1990,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Noël Carroll'],
      title: 'Theorizing the Moving Image',
      year: 1996,
      publisher: 'Cambridge University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Noël Carroll'],
      title: 'The Philosophy of Motion Pictures',
      year: 2008,
      publisher: 'Blackwell',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Thing',
        year: 1982,
        director: 'John Carpenter'
      },
      analysisExcerpt: `The Thing presenta el monstruo intersticial perfecto: viola las categorías de identidad (puede ser cualquiera), forma (cambia constantemente), y vida/no-vida (parásito que replica). El art-horror surge de la imposibilidad cognitiva de categorizar la amenaza. La estructura erotética gira en torno a: ¿Quién está infectado? ¿Cómo detectarlo? El criterial prefocusing utiliza la paranoia visual: cualquier encuadre puede revelar al monstruo. La thought theory explica nuestro miedo: pensamos en la situación de desconfianza total.`,
      insightsGenerated: [
        'La violación de categorías de identidad genera horror profundo',
        'La paranoia surge de la imposibilidad de categorización segura',
        'El horror conceptual supera al visual'
      ],
      methodologyApplication: 'Análisis de categorías violadas y estructura de preguntas paranoicas',
      keyFindings: [
        'Carpenter maximiza el horror mediante ambigüedad categorial',
        'El monstruo invisible conceptualmente es más terrorífico',
        'La estructura erotética sostiene la tensión sin respuestas claras'
      ]
    },
    {
      film: {
        title: 'Get Out',
        year: 2017,
        director: 'Jordan Peele'
      },
      analysisExcerpt: `Get Out redefine el horror intersticial: los antagonistas violan la categoría de humanidad no físicamente sino moralmente y racialmente. El "Sunken Place" es intersticialidad psicológica: consciente pero sin control. La estructura erotética comienza con microagresiones ambiguas antes de revelar el horror sistémico. El criterial prefocusing usa la composición para crear incomodidad racial. El art-horror surge de pensar en la apropiación literal de cuerpos negros, convirtiendo metáforas sociales en horror literal.`,
      insightsGenerated: [
        'El horror social puede ser más perturbador que el sobrenatural',
        'Las categorías raciales violadas crean nuevo tipo de monstruosidad',
        'El thought content político intensifica el art-horror'
      ],
      methodologyApplication: 'Aplicación de conceptos de horror a crítica social',
      keyFindings: [
        'Peele expande el concepto de monstruosidad intersticial',
        'El horror cognitivo puede ser herramienta de crítica social',
        'Las categorías culturales son tan fundamentales como las naturales'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'bordwell-cognitivism',
      relationshipType: 'complementary',
      synergyDescription: 'Bordwell provee base cognitiva que Carroll aplica a géneros específicos',
      combinedInsightPotential: 8
    },
    {
      id: 'wood-horror-repressed',
      relationshipType: 'dialectical',
      synergyDescription: 'Wood ve horror como retorno de lo reprimido vs. Carroll como violación categorial',
      combinedInsightPotential: 9
    },
    {
      id: 'kristeva-abjection',
      relationshipType: 'complementary',
      synergyDescription: 'Kristeva ofrece dimensión psicoanalítica a la impureza que Carroll racionaliza',
      combinedInsightPotential: 9
    }
  ]
};
