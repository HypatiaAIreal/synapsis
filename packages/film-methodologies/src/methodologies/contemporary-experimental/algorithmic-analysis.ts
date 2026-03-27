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

export const ALGORITHMIC_ANALYSIS: Methodology = {
  metadata: {
    id: 'algorithmic-analysis',
    name: 'Análisis Algorítmico/Computacional - Big Data y Cine',
    author: 'Lev Manovich y otros',
    year: 2008,
    category: 'contemporary-experimental',
    complexity: 'advanced',
    timeToLearn: 50,
    prerequisities: ['data-science-basics', 'film-studies'],
    culturalContext: 'Humanidades digitales',
    language: 'es'
  },
  
  description: `El análisis algorítmico del cine emerge de la convergencia entre humanidades digitales, ciencia de datos y estudios cinematográficos, utilizando métodos computacionales para analizar patrones en grandes corpus fílmicos. Este enfoque emplea machine learning, visión por computadora y procesamiento de lenguaje natural para detectar patrones invisibles al análisis humano tradicional. Investigadores como Lev Manovich con su "cultural analytics" han desarrollado herramientas para analizar millones de frames, revelando patrones estéticos, cromáticos y compositivos a través del tiempo y las culturas. El análisis de sentimientos aplicado a diálogos, el reconocimiento facial para estudiar representación de género/raza, y el análisis de redes para mapear colaboraciones industriales transforman nuestra comprensión del cine como fenómeno cultural masivo.`,
  
  keyConcepts: [
    {
      term: 'Cultural Analytics',
      definition: 'Análisis cultural a gran escala mediante métodos computacionales y visualización de datos',
      importance: 'fundamental',
      relatedTerms: ['big data', 'humanidades digitales']
    },
    {
      term: 'Distant Viewing',
      definition: 'Ver a distancia mediante datos agregados en lugar de visionado individual',
      importance: 'fundamental',
      relatedTerms: ['distant reading', 'análisis macro']
    },
    {
      term: 'Feature Extraction',
      definition: 'Extracción automática de características visuales, sonoras o narrativas',
      importance: 'fundamental',
      relatedTerms: ['computer vision', 'procesamiento']
    },
    {
      term: 'Pattern Recognition',
      definition: 'Identificación de patrones visuales, narrativos o estilísticos mediante algoritmos',
      importance: 'important',
      relatedTerms: ['machine learning', 'clasificación']
    },
    {
      term: 'Computational Aesthetics',
      definition: 'Estética cuantificada y analizada mediante métodos computacionales',
      importance: 'important',
      relatedTerms: ['estética digital', 'cuantificación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Definir corpus y pregunta de investigación',
      description: 'Seleccionar conjunto de films y formular preguntas específicas',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Comenzar con corpus manejable antes de escalar',
        'Formular preguntas que requieran análisis a gran escala',
        'Considerar disponibilidad y calidad de datos'
      ],
      commonMistakes: [
        'Corpus demasiado heterogéneo',
        'Preguntas que no requieren métodos computacionales'
      ]
    },
    {
      order: 2,
      name: 'Extracción de features',
      description: 'Extraer características relevantes usando herramientas computacionales',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Usar bibliotecas especializadas (OpenCV, FFmpeg)',
        'Considerar múltiples modalidades (visual, audio, texto)',
        'Documentar proceso de extracción detalladamente'
      ]
    },
    {
      order: 3,
      name: 'Procesamiento y limpieza de datos',
      description: 'Limpiar, normalizar y estructurar datos extraídos',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Aplicación de algoritmos',
      description: 'Aplicar técnicas de ML, clustering, clasificación según objetivos',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Comenzar con algoritmos simples antes de complejizar',
        'Validar resultados con muestras manuales'
      ]
    },
    {
      order: 5,
      name: 'Visualización de patrones',
      description: 'Crear visualizaciones que revelen patrones significativos',
      timeEstimate: 90,
      difficulty: 'intermediate',
      tips: [
        'Usar herramientas como D3.js, Tableau, o Python',
        'Priorizar claridad sobre complejidad visual'
      ]
    },
    {
      order: 6,
      name: 'Interpretación humanística',
      description: 'Interpretar hallazgos computacionales en contexto cultural',
      timeEstimate: 120,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Escala masiva permite detectar patrones invisibles al análisis tradicional',
    'Evidencia cuantitativa complementa interpretación cualitativa',
    'Revela sesgos sistémicos en representación',
    'Permite análisis longitudinal de evolución estilística',
    'Reproducibilidad y verificabilidad de resultados'
  ],
  
  limitations: [
    'Riesgo de reduccionismo al cuantificar fenómenos estéticos complejos',
    'Requiere expertise técnica significativa',
    'Sesgos en algoritmos pueden perpetuar prejuicios',
    'Pérdida de matices interpretativos y contextuales',
    'Alto costo computacional y de almacenamiento'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Lev Manovich'],
      title: 'Cultural Analytics',
      year: 2020,
      publisher: 'MIT Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Taylor Arnold', 'Lauren Tilton'],
      title: 'Distant Viewing: Computational Exploration of Digital Images',
      year: 2019,
      publisher: 'MIT Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Yuri Tsivian'],
      title: 'Cinemetrics, Part of the Humanities\' Cyberinfrastructure',
      year: 2009,
      journal: 'Digital Tools in Media Studies',
      pages: '93-100',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Análisis de 4000 films de Hollywood',
        year: 2020,
        director: 'Proyecto Cinemetrics'
      },
      analysisExcerpt: `Análisis computacional de longitud promedio de planos (ASL) en 4000 películas de Hollywood (1930-2010) revela aceleración sistemática del montaje: ASL promedio disminuye de 11 segundos en 1930 a 2.5 segundos en 2010. Machine learning identifica clusters estilísticos correlacionados con géneros y períodos. Análisis de color muestra transición hacia paletas desaturadas post-2000. Reconocimiento facial automatizado revela persistente subrepresentación de minorías y sesgo de género en tiempo de pantalla.`,
      insightsGenerated: [
        'Aceleración del montaje como tendencia industrial sistemática',
        'Homogeneización estilística en blockbusters contemporáneos',
        'Evidencia cuantitativa de disparidades de representación'
      ],
      methodologyApplication: 'Extracción masiva de features y análisis estadístico longitudinal',
      keyFindings: [
        'Los datos revelan tendencias industriales de largo plazo',
        'Patrones estéticos correlacionan con factores económicos',
        'Sesgos de representación son cuantificables y persistentes'
      ]
    },
    {
      film: {
        title: 'Proyecto Every Frame a Painting',
        year: 2019,
        director: 'Kevin B. Lee'
      },
      analysisExcerpt: `Análisis computacional de composición visual en la obra completa de Yasujiro Ozu usando computer vision. Algoritmos detectan líneas compositivas, proporciones áureas y patrones geométricos. El 73% de planos siguen reglas compositivas específicas de Ozu. Machine learning entrenado en su estilo puede predecir con 89% de precisión si un plano pertenece a Ozu. Visualización de datos revela evolución sutil pero sistemática en su estilo compositivo a lo largo de su carrera.`,
      insightsGenerated: [
        'La firma visual de Ozu es cuantificable y altamente consistente',
        'Evolución estilística sutil detectable solo a gran escala',
        'Posibilidad de "autentificación" computacional de autoría'
      ],
      methodologyApplication: 'Computer vision y machine learning para análisis estilístico',
      keyFindings: [
        'Los autores tienen firmas visuales computacionalmente detectables',
        'El estilo evoluciona de formas medibles pero sutiles',
        'ML puede aprender y reconocer estilos autorales específicos'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'digital-humanities',
      relationshipType: 'complementary',
      synergyDescription: 'Las humanidades digitales proporcionan el marco teórico para la aplicación de métodos computacionales',
      combinedInsightPotential: 9
    },
    {
      id: 'statistical-style-analysis',
      relationshipType: 'complementary',
      synergyDescription: 'El análisis estadístico de estilo complementa los métodos algorítmicos',
      combinedInsightPotential: 8
    },
    {
      id: 'network-analysis',
      relationshipType: 'complementary',
      synergyDescription: 'El análisis de redes revela conexiones en la industria cinematográfica',
      combinedInsightPotential: 8
    }
  ],

  digitalTools: [
    {
      name: 'Cinemetrics Database',
      type: 'webapp',
      url: 'http://www.cinemetrics.lv',
      description: 'Base de datos colaborativa de métricas cinematográficas',
      cost: 'free',
      platforms: ['web']
    },
    {
      name: 'ImagePlot',
      type: 'software',
      url: 'http://lab.softwarestudies.com/p/imageplot.html',
      description: 'Herramienta de Manovich para visualización de grandes colecciones de imágenes',
      cost: 'free',
      platforms: ['Windows', 'Mac', 'Linux']
    },
    {
      name: 'FFmpeg',
      type: 'software',
      description: 'Suite de herramientas para procesamiento de video',
      cost: 'free',
      platforms: ['Windows', 'Mac', 'Linux']
    }
  ]
};
