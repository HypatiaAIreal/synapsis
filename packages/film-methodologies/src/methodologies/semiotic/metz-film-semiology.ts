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

export const METZ_FILM_SEMIOLOGY: Methodology = {
  metadata: {
    id: 'metz-film-semiology',
    name: 'Semiología del Cine',
    author: 'Christian Metz',
    year: 1968,
    category: 'semiotic',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['basic-semiotics', 'structuralism'],
    culturalContext: 'Semiología estructuralista francesa',
    language: 'es'
  },
  
  description: `Christian Metz fue pionero en aplicar sistemáticamente la semiología estructuralista al cine, estableciendo las bases para entender el cine como lenguaje. Su proyecto buscaba identificar los códigos específicamente cinematográficos que distinguen al cine de otros sistemas de signos. Desarrolló la "grande syntagmatique" - una taxonomía de ocho tipos de segmentos autónomos que organizan tiempo y espacio en el cine narrativo clásico. Su trabajo evolucionó hacia un semio-psicoanálisis, explorando cómo el dispositivo cinematográfico produce significado y placer. Metz distinguió entre códigos específicos (exclusivos del cine como el montaje) y no-específicos (compartidos con otras artes). Su análisis del cine como "lenguaje sin lengua" - sistema de significación sin unidades mínimas fijas - revolucionó la comprensión teórica del medio.`,
  
  keyConcepts: [
    {
      term: 'Grande Syntagmatique',
      definition: 'Taxonomía de 8 tipos de segmentos autónomos que organizan la narrativa cinematográfica',
      importance: 'fundamental',
      relatedTerms: ['sintagma', 'segmento autónomo', 'montaje']
    },
    {
      term: 'Códigos Cinematográficos',
      definition: 'Sistemas de convenciones específicos (montaje, movimientos de cámara) y no-específicos (iluminación, música)',
      importance: 'fundamental',
      relatedTerms: ['código', 'convención', 'sistema significante']
    },
    {
      term: 'Lenguaje sin Lengua',
      definition: 'El cine como sistema de significación sin unidades mínimas discretas como los fonemas',
      importance: 'fundamental',
      relatedTerms: ['sistema semiótico', 'articulación']
    },
    {
      term: 'Significante Imaginario',
      definition: 'La imagen cinematográfica como presencia de una ausencia, fundamental para el efecto de realidad',
      importance: 'important',
      relatedTerms: ['dispositivo', 'psicoanálisis', 'espectador']
    },
    {
      term: 'Plano como Enunciado',
      definition: 'La unidad mínima de sentido cinematográfico, no segmentable en unidades menores',
      importance: 'important',
      relatedTerms: ['unidad mínima', 'enunciado', 'sintagma']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Segmentación del film',
      description: 'Dividir el film en segmentos autónomos según cambios espacio-temporales',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Identificar puntos de demarcación claros (fundidos, cortes)',
        'Considerar la continuidad diegética',
        'No confundir plano con segmento'
      ],
      commonMistakes: [
        'Segmentar demasiado fino perdiendo unidades significativas',
        'Ignorar marcas de puntuación cinematográfica'
      ]
    },
    {
      order: 2,
      name: 'Clasificación sintagmática',
      description: 'Identificar cada segmento según los 8 tipos de la grande syntagmatique',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Plano autónomo / Sintagma paralelo / Sintagma en abanico / Sintagma descriptivo',
        'Sintagma alternante / Escena / Secuencia episódica / Secuencia ordinaria',
        'Algunos segmentos pueden ser ambiguos'
      ]
    },
    {
      order: 3,
      name: 'Análisis de códigos',
      description: 'Identificar códigos específicos y no-específicos en operación',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Separar códigos puramente cinematográficos de los compartidos',
        'Examinar cómo interactúan diferentes códigos'
      ]
    },
    {
      order: 4,
      name: 'Identificación de paradigmas',
      description: 'Analizar las opciones paradigmáticas en cada punto sintagmático',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Examen de trucajes',
      description: 'Identificar manipulaciones visibles del significante cinematográfico',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de la enunciación',
      description: 'Buscar marcas del discurso cinematográfico',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Primer sistema riguroso de análisis semiótico del cine',
    'Distingue lo específicamente cinematográfico',
    'Base teórica para toda semiótica fílmica posterior',
    'Taxonomías útiles para análisis sistemático',
    'Conecta forma cinematográfica con producción de sentido',
    'Influencia fundamental en teoría del cine'
  ],
  
  limitations: [
    'Diseñado para cine narrativo clásico, menos útil para cine moderno',
    'Rigidez taxonómica puede forzar clasificaciones',
    'Complejidad técnica intimidante',
    'Enfoque excesivamente lingüístico inicial',
    'Descuida factores culturales y contextuales',
    'Menos aplicable a cine experimental'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Christian Metz'],
      title: 'Film Language: A Semiotics of the Cinema',
      year: 1974,
      publisher: 'University of Chicago Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Christian Metz'],
      title: 'The Imaginary Signifier: Psychoanalysis and the Cinema',
      year: 1982,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Christian Metz'],
      title: 'Language and Cinema',
      year: 1974,
      publisher: 'Mouton',
      essential: true
    },
    {
      type: 'book',
      authors: ['Warren Buckland'],
      title: 'The Cognitive Semiotics of Film',
      year: 2000,
      publisher: 'Cambridge University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Citizen Kane',
        year: 1941,
        director: 'Orson Welles'
      },
      analysisExcerpt: `Citizen Kane presenta rica variedad sintagmática. El montaje del desayuno es sintagma paralelo perfecto: compresión temporal mediante repetición variada. Xanadu se presenta mediante sintagma descriptivo. Los flashbacks funcionan como secuencias episódicas autónomas. El noticiero inicial es sintagma en abanico (múltiples aspectos de Kane). Los códigos específicos (profundidad de campo extrema, ángulos expresivos) se combinan con no-específicos (música, iluminación expresionista). Las transiciones temporales usan trucajes visibles (fundidos, disolvencias) como puntuación.`,
      insightsGenerated: [
        'La innovación de Welles opera dentro del sistema sintagmático clásico',
        'Los códigos específicos del cine crean significados imposibles en otros medios',
        'La grande syntagmatique revela la arquitectura temporal del film'
      ],
      methodologyApplication: 'Identificación sistemática de tipos sintagmáticos y códigos operantes',
      keyFindings: [
        'Kane usa todos los tipos sintagmáticos disponibles',
        'La complejidad narrativa se logra mediante combinación sintagmática',
        'Los códigos cinematográficos específicos son esenciales al significado'
      ]
    },
    {
      film: {
        title: 'Breathless',
        year: 1960,
        director: 'Jean-Luc Godard'
      },
      analysisExcerpt: `Godard subvierte sistemáticamente la grande syntagmatique de Metz. Los jump cuts destruyen la continuidad de la escena clásica. Las secuencias se fragmentan mediante elipsis agresivas. El sintagma alternante se vuelve ambiguo (¿alternancia o continuidad?). Los códigos específicos se hacen visibles: la cámara al hombro, la iluminación natural, el sonido directo. La enunciación se marca constantemente (miradas a cámara, referencias cinéfilas). El film revela y cuestiona los códigos del cine clásico que Metz sistematiza.`,
      insightsGenerated: [
        'La Nouvelle Vague hace visible el aparato sintagmático al romperlo',
        'Los códigos pueden usarse contra sí mismos',
        'La enunciación visible crea nuevo nivel de significación'
      ],
      methodologyApplication: 'Análisis de desviaciones sistemáticas del modelo clásico',
      keyFindings: [
        'Breathless inaugura nueva gramática cinematográfica',
        'La ruptura de códigos es en sí misma significante',
        'Metz permite entender la innovación por contraste con la norma'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'eco-film-semiotics',
      relationshipType: 'complementary',
      synergyDescription: 'Eco añade dimensión pragmática y cultural a la semiótica formal de Metz',
      combinedInsightPotential: 9
    },
    {
      id: 'deleuze-movement-image',
      relationshipType: 'dialectical',
      synergyDescription: 'Deleuze rechaza el modelo lingüístico de Metz proponiendo uno filosófico',
      combinedInsightPotential: 8
    },
    {
      id: 'heath-suture',
      relationshipType: 'synthetic',
      synergyDescription: 'Heath desarrolla las implicaciones psicoanalíticas iniciadas por Metz',
      combinedInsightPotential: 8
    }
  ]
};
