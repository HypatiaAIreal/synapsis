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

export const PROPP_MORPHOLOGY: Methodology = {
  metadata: {
    id: 'propp-morphology',
    name: 'Morfología del Cuento',
    author: 'Vladimir Propp',
    year: 1928,
    category: 'structural-narratological',
    complexity: 'intermediate',
    timeToLearn: 20,
    prerequisities: [],
    culturalContext: 'Formalismo ruso',
    language: 'es'
  },
  
  description: `Vladimir Propp, folclorista ruso, revolucionó el análisis narrativo con su estudio morfológico de los cuentos maravillosos rusos. Su teoría postula que todos los cuentos folclóricos comparten una estructura subyacente común basada en 31 funciones narrativas que aparecen en un orden relativamente fijo. Propp identificó que, independientemente de las variaciones superficiales en personajes, escenarios o detalles culturales, existe un patrón estructural profundo que gobierna la narración. Su enfoque formalista busca las invariantes estructurales, tratando la narrativa como un sistema de elementos interrelacionados donde cada función cumple un papel específico en el desarrollo de la historia. Esta metodología transformó el estudio de las narrativas de un enfoque temático a uno estructural, influyendo profundamente en la narratología posterior y el análisis cinematográfico.`,
  
  keyConcepts: [
    {
      term: '31 Funciones Narrativas',
      definition: 'Unidades mínimas de acción narrativa (alejamiento, prohibición, transgresión, interrogatorio, información, engaño, complicidad, fechoría, carencia, mediación, etc.) que aparecen en orden fijo',
      importance: 'fundamental',
      relatedTerms: ['secuencia narrativa', 'morfología']
    },
    {
      term: '7 Esferas de Acción',
      definition: 'Roles funcionales que agrupan acciones: agresor, donante, auxiliar, princesa, mandatario, héroe, falso héroe',
      importance: 'fundamental',
      relatedTerms: ['actante', 'personaje funcional']
    },
    {
      term: 'Secuencia Narrativa',
      definition: 'Orden relativamente fijo en que aparecen las funciones narrativas',
      importance: 'important',
      relatedTerms: ['estructura', 'progresión']
    },
    {
      term: 'Invariantes vs. Variables',
      definition: 'Elementos estructurales constantes (funciones) versus elementos superficiales cambiantes (nombres, lugares)',
      importance: 'important',
      relatedTerms: ['estructura profunda', 'morfología']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de la situación inicial',
      description: 'Establecer el equilibrio narrativo inicial y presentación de personajes',
      timeEstimate: 15,
      difficulty: 'basic',
      tips: [
        'Buscar el estado de normalidad antes del conflicto',
        'Identificar la presentación de personajes principales'
      ],
      commonMistakes: [
        'Confundir prólogo con situación inicial',
        'Incluir elementos de perturbación en el equilibrio inicial'
      ]
    },
    {
      order: 2,
      name: 'Catalogación de funciones',
      description: 'Identificar cada una de las 31 funciones narrativas presentes en el filme',
      timeEstimate: 90,
      difficulty: 'intermediate',
      tips: [
        'No todas las funciones deben estar presentes',
        'Una acción puede cumplir múltiples funciones',
        'Enfocarse en acciones que cambian el estado narrativo'
      ]
    },
    {
      order: 3,
      name: 'Secuenciación',
      description: 'Ordenar las funciones según aparecen en la narrativa',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Verificar si siguen el orden canónico de Propp',
        'Identificar desviaciones significativas del orden'
      ]
    },
    {
      order: 4,
      name: 'Identificación de esferas de acción',
      description: 'Asignar personajes a las 7 esferas funcionales',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Un personaje puede ocupar múltiples esferas',
        'Las esferas pueden transferirse entre personajes'
      ]
    },
    {
      order: 5,
      name: 'Análisis de movimientos',
      description: 'Examinar las transiciones entre funciones y su significado',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar patrones de aceleración o desaceleración narrativa',
        'Identificar puntos de inflexión estructural'
      ]
    },
    {
      order: 6,
      name: 'Evaluación estructural',
      description: 'Analizar desviaciones del modelo canónico y su significado',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Proporciona un marco sistemático y replicable para el análisis',
    'Revela patrones universales en narrativas aparentemente diversas',
    'Útil para análisis comparativo entre diferentes films',
    'Base sólida para guionistas en la construcción narrativa',
    'Identifica arquetipos narrativos fundamentales'
  ],
  
  limitations: [
    'Diseñado específicamente para cuentos folclóricos, no para cine',
    'Puede ser reduccionista con narrativas contemporáneas complejas',
    'No considera aspectos psicológicos o temáticos profundos',
    'Dificultad con narrativas no lineales o experimentales'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Vladimir Propp'],
      title: 'Morphology of the Folktale',
      year: 1968,
      publisher: 'University of Texas Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Vladimir Propp'],
      title: 'Theory and History of Folklore',
      year: 1984,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Alan Dundes'],
      title: 'Sacred Narrative: Readings in the Theory of Myth',
      year: 1984,
      publisher: 'University of California Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Star Wars',
        year: 1977,
        director: 'George Lucas'
      },
      analysisExcerpt: `Star Wars presenta un ejemplo perfecto del esquema proppiano: Alejamiento (Luke deja Tatooine), Prohibición (no buscar a R2-D2), Transgresión (lo busca), Primera función del donante (Obi-Wan entrena a Luke), Recepción del objeto mágico (sable de luz), Combate (ataque a la Estrella de la Muerte), Victoria (destrucción de la estación), y Regreso (ceremonia de premiación). La película actualiza conscientemente elementos del cuento maravilloso en un contexto de ciencia ficción.`,
      insightsGenerated: [
        'Perfecta correspondencia con el modelo de cuento maravilloso',
        'La Fuerza funciona como elemento mágico modernizado',
        'Doble secuencia narrativa: rescate de Leia + destrucción de la Estrella de la Muerte'
      ],
      methodologyApplication: 'Identificación directa de 18 de las 31 funciones en orden canónico',
      keyFindings: [
        'Star Wars demuestra la universalidad del esquema de Propp',
        'Los arquetipos funcionan efectivamente en contextos futuristas',
        'La estructura mítica trasciende géneros y épocas'
      ]
    },
    {
      film: {
        title: 'El Señor de los Anillos: La Comunidad del Anillo',
        year: 2001,
        director: 'Peter Jackson'
      },
      analysisExcerpt: `La película presenta múltiples ciclos proppianos entrelazados. El ciclo principal sigue a Frodo: Situación inicial (La Comarca), Fechoría (amenaza de Sauron), Mediación (Gandalf revela la verdad), Partida (Frodo deja la Comarca), Primera función del donante (Consejo de Elrond), Recepción del objeto mágico (mithril, Dardo), múltiples Combates y Pruebas. Paralelamente, Aragorn sigue su propio ciclo de reconocimiento como héroe.`,
      insightsGenerated: [
        'Las narrativas épicas modernas mantienen estructuras proppianas',
        'Múltiples héroes pueden seguir ciclos paralelos',
        'La expansión temporal no altera las funciones fundamentales'
      ],
      methodologyApplication: 'Análisis de ciclos narrativos múltiples y paralelos',
      keyFindings: [
        'Las sagas cinematográficas multiplican los ciclos de Propp',
        'Cada personaje principal puede tener su propia secuencia funcional',
        'La complejidad narrativa se logra por acumulación, no por ruptura del modelo'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'campbell-hero-journey',
      relationshipType: 'complementary',
      synergyDescription: 'Campbell desarrolla aspectos psicológicos que Propp omite, mientras que Propp ofrece mayor precisión estructural',
      combinedInsightPotential: 9
    },
    {
      id: 'greimas-actantial',
      relationshipType: 'synthetic',
      synergyDescription: 'Greimas sintetiza las 7 esferas de Propp en 6 actantes más abstractos y universales',
      combinedInsightPotential: 8
    },
    {
      id: 'todorov-narrative-theory',
      relationshipType: 'complementary',
      synergyDescription: 'Todorov simplifica a 5 etapas lo que Propp detalla en 31 funciones',
      combinedInsightPotential: 7
    }
  ]
};
