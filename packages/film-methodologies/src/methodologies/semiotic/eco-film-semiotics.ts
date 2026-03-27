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

export const ECO_FILM_SEMIOTICS: Methodology = {
  metadata: {
    id: 'eco-film-semiotics',
    name: 'Semiótica Cinematográfica',
    author: 'Umberto Eco',
    year: 1976,
    category: 'semiotic',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['general-semiotics', 'cultural-studies'],
    culturalContext: 'Semiótica cultural italiana',
    language: 'es'
  },
  
  description: `Umberto Eco aplicó su teoría semiótica general al cine, enfocándose en los procesos de codificación y decodificación, y en la naturaleza cultural de los signos cinematográficos. Su concepto de "obra abierta" fue fundamental para entender cómo los films permiten múltiples interpretaciones legítimas. Eco distinguió entre señales (información física), signos (unidades culturales) y textos (combinaciones complejas), aplicando esta tricotomía al análisis fílmico. Su teoría de los códigos culturales examina cómo el cine moviliza enciclopedias culturales compartidas para producir significado. El trabajo de Eco sobre la cooperación interpretativa explora cómo los films anticipan y guían las interpretaciones del "Lector Modelo", mientras permiten lecturas aberrantes productivas.`,
  
  keyConcepts: [
    {
      term: 'Obra Abierta',
      definition: 'Texto que permite múltiples interpretaciones válidas dentro de límites estructurales',
      importance: 'fundamental',
      relatedTerms: ['interpretación', 'apertura', 'polisemia']
    },
    {
      term: 'Enciclopedia Cultural',
      definition: 'Conjunto de conocimientos y competencias culturales necesarios para decodificar',
      importance: 'fundamental',
      relatedTerms: ['competencia', 'código cultural', 'conocimiento']
    },
    {
      term: 'Lector Modelo',
      definition: 'Espectador ideal previsto por el texto, capaz de actualizarlo interpretativamente',
      importance: 'fundamental',
      relatedTerms: ['cooperación interpretativa', 'espectador implícito']
    },
    {
      term: 'Decodificación Aberrante',
      definition: 'Interpretaciones no previstas pero productivas del texto',
      importance: 'important',
      relatedTerms: ['interpretación alternativa', 'lectura negociada']
    },
    {
      term: 'Sobrecódigos',
      definition: 'Códigos secundarios que se superponen a códigos básicos (géneros, estilos)',
      importance: 'important',
      relatedTerms: ['código secundario', 'convención genérica']
    },
    {
      term: 'Isotopía',
      definition: 'Nivel de coherencia semántica que garantiza la homogeneidad del mensaje',
      importance: 'important',
      relatedTerms: ['coherencia', 'homogeneidad semántica']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del Lector Modelo',
      description: 'Determinar qué tipo de espectador presupone el film',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Examinar qué conocimientos da por sentados',
        'Identificar referencias culturales esperadas',
        'Considerar el género y contexto de producción'
      ],
      commonMistakes: [
        'Confundir Lector Modelo con audiencia real',
        'Ignorar múltiples niveles de lectura posibles'
      ]
    },
    {
      order: 2,
      name: 'Mapeo de la enciclopedia requerida',
      description: 'Catalogar conocimientos culturales necesarios para decodificación completa',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Incluir referencias intertextuales',
        'Considerar competencias genéricas',
        'Evaluar conocimientos histórico-culturales presupuestos'
      ]
    },
    {
      order: 3,
      name: 'Análisis de niveles de codificación',
      description: 'Examinar códigos básicos y sobrecódigos en operación',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Distinguir códigos perceptivos, icónicos, iconográficos',
        'Identificar códigos narrativos, estilísticos, ideológicos'
      ]
    },
    {
      order: 4,
      name: 'Identificación de isotopías',
      description: 'Localizar niveles de coherencia semántica',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis de cooperación interpretativa',
      description: 'Examinar cómo el film guía la actividad del espectador',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación de apertura textual',
      description: 'Determinar grado de apertura interpretativa',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Marco flexible que reconoce múltiples interpretaciones válidas',
    'Atención central a factores culturales y contextuales',
    'Teoría sofisticada de la recepción cinematográfica',
    'Aplicable a cualquier tipo de film',
    'Valora la ambigüedad productiva',
    'Conecta semiótica con pragmática'
  ],
  
  limitations: [
    'Puede relativizar excesivamente el significado',
    'Menos sistemático que otros enfoques semióticos',
    'Conceptos a veces vagos o metafóricos',
    'Tensión entre apertura y límites interpretativos',
    'Requiere amplio conocimiento cultural del analista'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Umberto Eco'],
      title: 'A Theory of Semiotics',
      year: 1976,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Umberto Eco'],
      title: 'The Role of the Reader',
      year: 1979,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Umberto Eco'],
      title: 'The Open Work',
      year: 1989,
      publisher: 'Harvard University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Umberto Eco'],
      title: 'The Limits of Interpretation',
      year: 1990,
      publisher: 'Indiana University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Name of the Rose',
        year: 1986,
        director: 'Jean-Jacques Annaud'
      },
      analysisExcerpt: `La adaptación de la novela de Eco funciona en múltiples niveles isotópicos. Nivel detectivesco: investigación de asesinatos. Nivel filosófico: debate sobre la risa y el conocimiento. Nivel histórico: conflictos medievales Iglesia/herejía. Nivel semiótico: la biblioteca como laberinto de signos. El Lector Modelo debe poseer enciclopedia sobre: semiótica medieval, historia eclesiástica, géneros detectivescos, filosofía aristotélica. La obra permanece abierta: ¿triunfa la razón o la fe? ¿Es Guillermo héroe o su orgullo intelectual causa la catástrofe?`,
      insightsGenerated: [
        'Múltiples isotopías crean profundidad interpretativa',
        'La enciclopedia requerida es vasta pero el film funciona en nivel básico',
        'La apertura opera en el nivel filosófico, no en el detectivesco'
      ],
      methodologyApplication: 'Análisis de niveles isotópicos y enciclopedia cultural requerida',
      keyFindings: [
        'El film estratifica niveles de lectura para diferentes competencias',
        'La obra abierta puede tener elementos cerrados (trama) y abiertos (significado)',
        'La adaptación preserva la reflexión semiótica del original'
      ]
    },
    {
      film: {
        title: 'The Usual Suspects',
        year: 1995,
        director: 'Bryan Singer'
      },
      analysisExcerpt: `Film que explota magistralmente la decodificación aberrante. Lector Modelo inicial: espectador de thriller que sigue pistas. Códigos genéricos del noir y heist film. Pero la revelación final fuerza recodificación total: Verbal Kint construyó su narrativa usando signos del entorno inmediato. La enciclopedia del detective (y espectador) es manipulada. Isotopía de "realidad" se revela como isotopía de "ficción". La segunda visualización revela sobrecódigos antes invisibles. La obra se abre retroactivamente: ¿qué fue real?`,
      insightsGenerated: [
        'El film tematiza la construcción semiótica de la realidad',
        'La decodificación aberrante se vuelve la correcta',
        'Los signos visuales engañan tanto como los verbales'
      ],
      methodologyApplication: 'Análisis de manipulación de códigos y recodificación forzada',
      keyFindings: [
        'El cine puede weaponizar la cooperación interpretativa',
        'La revelación transforma retroactivamente todos los códigos',
        'La apertura final es consecuencia de la clausura narrativa'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'barthes-codes',
      relationshipType: 'parallel',
      synergyDescription: 'Barthes y Eco comparten interés en códigos culturales pero Eco enfatiza más la interpretación',
      combinedInsightPotential: 9
    },
    {
      id: 'hall-encoding-decoding',
      relationshipType: 'complementary',
      synergyDescription: 'Hall politiza lo que Eco describe semióticamente sobre decodificación aberrante',
      combinedInsightPotential: 8
    },
    {
      id: 'fish-interpretive-communities',
      relationshipType: 'complementary',
      synergyDescription: 'Fish radicaliza la idea de Eco sobre el rol del lector/espectador',
      combinedInsightPotential: 8
    }
  ]
};
