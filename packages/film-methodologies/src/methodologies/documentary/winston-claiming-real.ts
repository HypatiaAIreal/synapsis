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

export const WINSTON_CLAIMING_REAL: Methodology = {
  metadata: {
    id: 'winston-claiming-real',
    name: 'Reclamando lo Real',
    author: 'Brian Winston',
    year: 1995,
    category: 'documentary',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['documentary-history', 'media-theory'],
    culturalContext: 'Crítica documental británica',
    language: 'es'
  },
  
  description: `Brian Winston desarrolló una crítica fundamental de las pretensiones de verdad del documental, argumentando que la "reivindicación de lo real" es una construcción retórica e histórica, no una garantía ontológica. Su trabajo genealógico traza cómo diferentes tecnologías y momentos históricos producen diferentes "regímenes de verdad" documental. Winston analiza la "tradición de la víctima" en el documental - la tendencia a representar sujetos como objetos de lástima más que agentes. Su concepto de "reconstrucción honesta" acepta la inevitabilidad de la mediación mientras mantiene compromisos éticos. Winston examina cómo innovaciones tecnológicas prometen mayor autenticidad pero simplemente producen nuevas convenciones. Su crítica del "momento privilegiado" cuestiona la fetichización de la espontaneidad.`,
  
  keyConcepts: [
    {
      term: 'Reivindicación de lo Real',
      definition: 'Construcción retórica de autenticidad, no garantía ontológica',
      importance: 'fundamental',
      relatedTerms: ['verdad', 'autenticidad']
    },
    {
      term: 'Tradición de la Víctima',
      definition: 'Representación de sujetos como objetos pasivos de compasión',
      importance: 'fundamental',
      relatedTerms: ['objetificación', 'poder']
    },
    {
      term: 'Reconstrucción Honesta',
      definition: 'Mediación ética que reconoce su artificio',
      importance: 'important',
      relatedTerms: ['ética', 'transparencia']
    },
    {
      term: 'Regímenes de Verdad',
      definition: 'Sistemas históricamente específicos de autenticación',
      importance: 'important',
      relatedTerms: ['historia', 'convención']
    },
    {
      term: 'Momento Privilegiado',
      definition: 'Fetichización de la captura espontánea',
      importance: 'important',
      relatedTerms: ['espontaneidad', 'autenticidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Analizar reivindicación',
      description: 'Examinar cómo el documental clama verdad',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar marcadores retóricos de autenticidad',
        'Identificar estrategias de verificación',
        'Considerar qué se excluye de la reivindicación'
      ],
      commonMistakes: [
        'Aceptar reivindicaciones al pie de la letra',
        'Ignorar construcción retórica'
      ]
    },
    {
      order: 2,
      name: 'Identificar régimen',
      description: 'Situar en contexto histórico de convenciones',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Comparar con documentales contemporáneos',
        'Identificar tecnologías determinantes'
      ]
    },
    {
      order: 3,
      name: 'Buscar tradición víctima',
      description: 'Localizar objetificación de sujetos',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Examinar reconstrucciones',
      description: 'Evaluar honestidad sobre mediación',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Analizar tecnología',
      description: 'Examinar promesas de autenticidad tecnológica',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluar función social',
      description: 'Analizar efectos más allá de verdad simple',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Crítica epistemológica rigurosa y necesaria',
    'Historización valiosa de convenciones documentales',
    'Ética sofisticada sobre representación',
    'Desmitifica pretensiones de transparencia',
    'Abre posibilidades para nuevas formas'
  ],
  
  limitations: [
    'Puede paralizar con escepticismo excesivo',
    'Menos orientado a práctica constructiva',
    'Complejidad teórica intimidante',
    'Pesimismo sobre posibilidad de verdad'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Brian Winston'],
      title: 'Claiming the Real: The Documentary Film Revisited',
      year: 1995,
      publisher: 'British Film Institute',
      essential: true
    },
    {
      type: 'book',
      authors: ['Brian Winston'],
      title: 'Claiming the Real II: Documentary: Grierson and Beyond',
      year: 2008,
      publisher: 'British Film Institute',
      essential: true
    },
    {
      type: 'book',
      authors: ['Brian Winston'],
      title: 'Lies, Damn Lies and Documentaries',
      year: 2000,
      publisher: 'British Film Institute',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Thin Blue Line',
        year: 1988,
        director: 'Errol Morris'
      },
      analysisExcerpt: `Morris ejemplifica la "reconstrucción honesta" de Winston. Rechaza el momento privilegiado del cinema vérité por recreaciones estilizadas que no pretenden ser "reales". La reivindicación de verdad opera mediante investigación y argumento, no captura directa. Evita la tradición de la víctima presentando a Randall Adams como agente de su propia historia. El régimen de verdad es legal/investigativo, no observacional. La tecnología (Interrotron) crea intimidad artificial productiva. El film demuestra que admitir mediación puede fortalecer, no debilitar, reclamos de verdad.`,
      insightsGenerated: [
        'La reconstrucción honesta puede ser más verdadera que observación',
        'Rechazar convenciones de autenticidad puede producir nueva autenticidad',
        'La verdad documental puede ser argumental, no perceptual'
      ],
      methodologyApplication: 'Análisis de documental que abraza críticas de Winston',
      keyFindings: [
        'Winston ofrece salida constructiva al escepticismo',
        'La honestidad sobre artificio es éticamente superior',
        'Nuevos regímenes de verdad son posibles'
      ]
    },
    {
      film: {
        title: 'Man with a Movie Camera',
        year: 1929,
        director: 'Dziga Vertov'
      },
      analysisExcerpt: `Vertov anticipa las críticas de Winston por décadas. No reivindica capturar la realidad sino construir una nueva realidad fílmica. Muestra constantemente el aparato y proceso de filmación. Rechaza la tradición de la víctima mediante representación dinámica de trabajadores soviéticos. Sin momentos privilegiados: todo es construcción consciente. Establece un régimen de verdad basado en montaje y ritmo, no en observación. La honestidad radical sobre la mediación se vuelve el contenido mismo del film.`,
      insightsGenerated: [
        'Las críticas de Winston tienen precedentes históricos',
        'La vanguardia anticipa teoría documental posterior',
        'La reflexividad extrema puede ser liberadora'
      ],
      methodologyApplication: 'Genealogía de críticas a la transparencia documental',
      keyFindings: [
        'Winston recupera insights vanguardistas olvidados',
        'La crítica a la transparencia tiene larga historia',
        'El documental siempre contuvo su propia crítica'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'nichols-documentary-modes',
      relationshipType: 'complementary',
      synergyDescription: 'Winston problematiza las categorías modales de Nichols',
      combinedInsightPotential: 8
    },
    {
      id: 'bruzzi-new-documentary',
      relationshipType: 'complementary',
      synergyDescription: 'Bruzzi desarrolla implicaciones prácticas de las críticas de Winston',
      combinedInsightPotential: 9
    },
    {
      id: 'trinh-documentary',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos critican pretensiones de transparencia desde diferentes ángulos',
      combinedInsightPotential: 8
    }
  ]
};
