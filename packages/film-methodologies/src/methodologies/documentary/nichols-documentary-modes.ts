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

export const NICHOLS_DOCUMENTARY_MODES: Methodology = {
  metadata: {
    id: 'nichols-documentary-modes',
    name: 'Seis Modos Documentales',
    author: 'Bill Nichols',
    year: 1991,
    category: 'documentary',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['documentary-basics'],
    culturalContext: 'Teoría documental estadounidense',
    language: 'es'
  },
  
  description: `Bill Nichols revolucionó el estudio del documental al proponer una taxonomía de seis "modos de representación" que organizan las convenciones documentales históricamente. Estos modos - poético, expositivo, observacional, participativo, reflexivo y performativo - no son categorías rígidas sino tendencias dominantes que pueden mezclarse. Nichols analiza cómo cada modo implica diferentes relaciones éticas entre cineasta, sujeto y audiencia, y diferentes formas de argumento sobre el mundo histórico. Su concepto de "voz del documental" examina cómo los documentales expresan una perspectiva particular a través de todos sus elementos formales, no solo narración. Nichols también desarrolló conceptos sobre la "representación de la realidad" y los problemas éticos de hablar sobre/por otros. Su trabajo establece que los documentales no son ventanas transparentes al mundo sino representaciones construidas que hacen argumentos sobre la realidad histórica mediante convenciones específicas.`,
  
  keyConcepts: [
    {
      term: 'Seis Modos',
      definition: 'Poético, Expositivo, Observacional, Participativo, Reflexivo, Performativo',
      importance: 'fundamental',
      relatedTerms: ['representación', 'convenciones documentales']
    },
    {
      term: 'Voz Documental',
      definition: 'Perspectiva expresada por medios formales, no solo narración',
      importance: 'fundamental',
      relatedTerms: ['punto de vista', 'argumento']
    },
    {
      term: 'Mundo Histórico',
      definition: 'Realidad compartida referenciada por el documental',
      importance: 'important',
      relatedTerms: ['realidad', 'referente']
    },
    {
      term: 'Ética de la Representación',
      definition: 'Responsabilidad ante sujetos filmados y audiencia',
      importance: 'fundamental',
      relatedTerms: ['responsabilidad', 'consentimiento']
    },
    {
      term: 'Axiografía',
      definition: 'Valores inscritos en las imágenes documentales',
      importance: 'important',
      relatedTerms: ['valores', 'ideología']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar modo dominante',
      description: 'Determinar cuál de los seis modos prevalece en el documental',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Un documental puede combinar múltiples modos',
        'Buscar el modo que estructura la mayor parte del film',
        'Considerar el contexto histórico de producción'
      ],
      commonMistakes: [
        'Forzar un documental en un solo modo',
        'Ignorar hibridaciones modales'
      ]
    },
    {
      order: 2,
      name: 'Analizar voz documental',
      description: 'Examinar cómo se expresa la perspectiva del documental',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'La voz no es solo narración verbal',
        'Incluye montaje, música, composición visual',
        'Buscar coherencia entre elementos'
      ]
    },
    {
      order: 3,
      name: 'Examinar argumento',
      description: 'Identificar qué afirmaciones hace sobre el mundo',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Los argumentos pueden ser implícitos',
        'Considerar qué se incluye y qué se excluye'
      ]
    },
    {
      order: 4,
      name: 'Identificar convenciones',
      description: 'Catalogar técnicas específicas del modo identificado',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Analizar ética',
      description: 'Evaluar la relación con sujetos filmados',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Considerar consentimiento y representación',
        'Evaluar relaciones de poder'
      ]
    },
    {
      order: 6,
      name: 'Buscar hibridaciones',
      description: 'Identificar mezclas y transiciones entre modos',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Taxonomía clara y pedagógicamente útil',
    'Flexibilidad para analizar documentales híbridos',
    'Atención crucial a dimensiones éticas',
    'Base histórica sólida',
    'Vocabulario compartido para análisis',
    'Aplicabilidad amplia a diferentes tipos de documental'
  ],
  
  limitations: [
    'Puede simplificar la complejidad de algunos documentales',
    'Sesgo hacia documental anglófono tradicional',
    'Categorías a veces se superponen ambiguamente',
    'Menos útil para formas experimentales extremas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Bill Nichols'],
      title: 'Representing Reality: Issues and Concepts in Documentary',
      year: 1991,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Bill Nichols'],
      title: 'Introduction to Documentary',
      year: 2010,
      publisher: 'Indiana University Press',      
      essential: true
    },
    {
      type: 'book',
      authors: ['Bill Nichols'],
      title: 'Speaking Truths with Film',
      year: 2016,
      publisher: 'University of California Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'An Inconvenient Truth',
        year: 2006,
        director: 'Davis Guggenheim'
      },
      analysisExcerpt: `Ejemplo paradigmático del modo expositivo. Voz de autoridad (Gore) presenta argumento directo sobre calentamiento global mediante evidencia científica. Estructura de conferencia ilustrada con gráficos, datos, imágenes. Discurso de sobriedad científica combinado con llamado emocional a la acción. La voz documental es unívoca y didáctica, organizando evidencia para persuadir. Ética de urgencia que justifica el tono alarmista. Modo expositivo puro con elementos performativos menores (historia personal de Gore).`,
      insightsGenerated: [
        'El modo expositivo sigue siendo efectivo para argumentos urgentes',
        'La autoridad personal puede reforzar autoridad científica',
        'La estructura didáctica no impide impacto emocional'
      ],
      methodologyApplication: 'Identificación clara del modo expositivo y sus convenciones',
      keyFindings: [
        'El documental expositivo puede movilizar acción social',
        'La voz de autoridad funciona cuando está respaldada por evidencia',
        'La hibridación modal mínima puede fortalecer el argumento'
      ]
    },
    {
      film: {
        title: 'Grey Gardens',
        year: 1975,
        director: 'Maysles Brothers'
      },
      analysisExcerpt: `Híbrido entre modo observacional y participativo. La cámara observa la vida de las Beale pero su presencia es reconocida e incorporada. Sin narración explicativa, permite que los sujetos se revelen a través de sus acciones y palabras. Ética compleja: ¿explotación o empatía? La voz documental emerge del montaje y la selección, no de comentario directo. Tensión entre observación distanciada y participación afectiva. El modo observacional se quiebra cuando los sujetos interactúan directamente con los cineastas.`,
      insightsGenerated: [
        'Los modos pueden coexistir productivamente',
        'La presencia de la cámara inevitablemente afecta lo filmado',
        'La ética observacional es inherentemente ambigua'
      ],
      methodologyApplication: 'Análisis de hibridación modal y sus implicaciones éticas',
      keyFindings: [
        'La pureza modal es rara en la práctica documental',
        'La participación puede humanizar la observación',
        'Los sujetos pueden apropiarse del proceso documental'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'renov-documentary-functions',
      relationshipType: 'complementary',
      synergyDescription: 'Renov ofrece un marco funcional que complementa la taxonomía modal de Nichols',
      combinedInsightPotential: 8
    },
    {
      id: 'bruzzi-new-documentary',
      relationshipType: 'dialectical',
      synergyDescription: 'Bruzzi critica y expande las categorías de Nichols para el documental contemporáneo',
      combinedInsightPotential: 9
    },
    {
      id: 'plantinga-rhetoric',
      relationshipType: 'complementary',
      synergyDescription: 'Plantinga profundiza en la dimensión retórica que Nichols identifica',
      combinedInsightPotential: 7
    }
  ]
};
