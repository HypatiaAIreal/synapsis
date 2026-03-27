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

export const ART_HISTORY_CINEMA: Methodology = {
  metadata: {
    id: 'art-history-cinema',
    name: 'Historia del Arte y Cine - Iconología cinematográfica',
    author: 'Aby Warburg, Erwin Panofsky aplicados al cine',
    year: 1970,
    category: 'hybrid-interdisciplinary',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['art-history', 'iconology'],
    culturalContext: 'Tradición Warburg-Panofsky',
    language: 'es'
  },
  
  description: `La iconología cinematográfica adapta métodos de historia del arte, especialmente la tradición Warburg-Panofsky, para analizar cómo el cine hereda, transforma y crea nuevas tradiciones visuales. Este enfoque interdisciplinario examina la "vida de las imágenes" - cómo motivos visuales migran entre medios, épocas y culturas, adquiriendo nuevos significados. Incluye el análisis de "pathosformeln" (fórmulas emotivas) - gestos y composiciones que transmiten emociones a través del tiempo. La iconología cinematográfica estudia cómo el cine cita, transforma y subvierte tradiciones pictóricas, creando "museos imaginarios" donde diferentes épocas visuales coexisten.`,
  
  keyConcepts: [
    {
      term: 'Pathosformeln',
      definition: 'Fórmulas visuales de expresión emocional que sobreviven a través del tiempo',
      importance: 'fundamental',
      relatedTerms: ['fórmula emotiva', 'gesto expresivo']
    },
    {
      term: 'Nachleben (Supervivencia)',
      definition: 'Vida posterior de las imágenes que reaparecen transformadas',
      importance: 'fundamental',
      relatedTerms: ['supervivencia', 'memoria visual']
    },
    {
      term: 'Iconografía/Iconología',
      definition: 'Descripción de imágenes / Interpretación de su significado cultural profundo',
      importance: 'fundamental',
      relatedTerms: ['análisis visual', 'interpretación cultural']
    },
    {
      term: 'Intermedialidad',
      definition: 'Diálogo y transferencia entre diferentes medios visuales',
      importance: 'important',
      relatedTerms: ['transmediación', 'diálogo interartístico']
    },
    {
      term: 'Atlas Visual',
      definition: 'Montaje de imágenes que revela conexiones no evidentes',
      importance: 'important',
      relatedTerms: ['montaje', 'correspondencias visuales']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de motivos visuales',
      description: 'Catalogar elementos iconográficos recurrentes',
      timeEstimate: 90,
      difficulty: 'intermediate',
      tips: [
        'Buscar gestos, composiciones, objetos simbólicos',
        'Incluir elementos aparentemente menores',
        'Considerar inversiones y transformaciones'
      ],
      commonMistakes: [
        'Limitarse a referencias obvias',
        'Ignorar transformaciones sutiles de motivos'
      ]
    },
    {
      order: 2,
      name: 'Rastreo genealógico',
      description: 'Trazar origen y transformaciones históricas de motivos',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Usar bases de datos visuales y atlas',
        'Considerar saltos temporales y geográficos',
        'Incluir cultura popular y alta cultura'
      ]
    },
    {
      order: 3,
      name: 'Análisis de pathosformeln',
      description: 'Examinar fórmulas emotivas y su eficacia',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Estudio intermedial',
      description: 'Analizar traducción entre pintura, fotografía, cine',
      timeEstimate: 60,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Construcción de atlas',
      description: 'Crear montajes visuales reveladores',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Interpretación cultural',
      description: 'Sintetizar significados culturales profundos',
      timeEstimate: 90,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Conecta cine con historia visual larga',
    'Revela capas de significado cultural profundo',
    'Método visualmente rico y evocativo',
    'Trasciende fronteras entre alta y baja cultura',
    'Atiende a dimensión emocional de imágenes'
  ],
  
  limitations: [
    'Requiere erudición visual considerable',
    'Puede ser eurocéntrico en referencias',
    'Riesgo de sobre-interpretación',
    'Menos atención a especificidad del medio cinematográfico',
    'Complejidad de verificar genealogías visuales'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Aby Warburg'],
      title: 'The Renewal of Pagan Antiquity',
      year: 1999,
      publisher: 'Getty Research Institute',
      essential: true
    },
    {
      type: 'book',
      authors: ['Erwin Panofsky'],
      title: 'Studies in Iconology',
      year: 1972,
      publisher: 'Westview Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Georges Didi-Huberman'],
      title: 'Atlas, or the Anxious Gay Science',
      year: 2018,
      publisher: 'University of Chicago Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Angela Dalle Vacche'],
      title: 'Cinema and Painting: How Art Is Used in Film',
      year: 1996,
      publisher: 'University of Texas Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Passion of Joan of Arc',
        year: 1928,
        director: 'Carl Theodor Dreyer'
      },
      analysisExcerpt: `Dreyer crea iconología cinematográfica del sufrimiento sacro. Primeros planos de Falconetti actualizan pathosformeln del dolor cristiano: ojos elevados al cielo, lágrimas, boca entreabierta - fórmulas desde pintura medieval. Pero Dreyer las transforma: elimina idealización por hiperrealismo facial. Supervivencia (Nachleben) de iconografía de mártires femeninas: Santa Catalina, Santa Ágata. Composiciones citan pinturas pero fragmentadas por montaje. Intermedialidad: entre ícono religioso y documento judicial. Los rostros de jueces evocan grotescos de Bosch. El cine deviene nuevo medio para antiguas fórmulas emotivas.`,
      insightsGenerated: [
        'El primer plano cinematográfico intensifica pathosformeln tradicionales',
        'El realismo puede renovar fórmulas religiosas gastadas',
        'El cine crea nuevas síntesis de tradiciones visuales'
      ],
      methodologyApplication: 'Análisis de transformación cinematográfica de iconografía religiosa',
      keyFindings: [
        'Dreyer demuestra cine como heredero/transformador de pintura sacra',
        'Los pathosformeln sobreviven pero mutados por nuevo medio',
        'La fragmentación moderna revitaliza iconografía antigua'
      ]
    },
    {
      film: {
        title: 'The Shining',
        year: 1980,
        director: 'Stanley Kubrick'
      },
      analysisExcerpt: `Kubrick construye atlas visual de horror americano citando y pervirtiendo tradiciones pictóricas. Overlook Hotel como museo maldito: fotografías que documentan genocidio nativo, art déco que esconde violencia. Pathosformeln de locura: Jack repite gestiones de máscaras grotescas, desde tragedia griega a expresionismo. Laberinto evoca grabados de Piranesi y jardines barrocos - racionalidad que enloquece. Sangre del elevador: Nachleben de diluvio bíblico en era moderna. Gemelas: doppelgänger romántico meets fotografía post-mortem victoriana. Cada frame es palimpsesto visual donde superviven y mutan imágenes culturales reprimidas.`,
      insightsGenerated: [
        'El hotel funciona como archivo visual de traumas americanos',
        'Kubrick pervierte conscientemente tradiciones visuales "nobles"',
        'El horror emerge de la supervivencia perturbada de imágenes culturales'
      ],
      methodologyApplication: 'Análisis del Overlook como atlas warburguiano perverso',
      keyFindings: [
        'The Shining crea iconología del uncanny americano',
        'Las imágenes culturales reprimidas retornan como horror',
        'El cine puede funcionar como atlas crítico de patologías visuales'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'visual-studies',
      relationshipType: 'complementary',
      synergyDescription: 'Estudios visuales expanden iconología más allá del arte tradicional',
      combinedInsightPotential: 9
    },
    {
      id: 'mnemonic-studies',
      relationshipType: 'complementary',
      synergyDescription: 'Estudios de memoria cultural complementan idea de Nachleben',
      combinedInsightPotential: 8
    },
    {
      id: 'intermediality',
      relationshipType: 'complementary',
      synergyDescription: 'Teorías de intermedialidad formalizan análisis de cruces mediáticos',
      combinedInsightPotential: 8
    }
  ]
};
