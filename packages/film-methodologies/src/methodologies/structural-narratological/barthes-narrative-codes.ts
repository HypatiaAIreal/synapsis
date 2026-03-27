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

export const BARTHES_NARRATIVE_CODES: Methodology = {
  metadata: {
    id: 'barthes-narrative-codes',
    name: 'Códigos Narrativos',
    author: 'Roland Barthes',
    year: 1970,
    category: 'structural-narratological',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['basic-semiotics', 'structuralism'],
    culturalContext: 'Post-estructuralismo francés',
    language: 'es'
  },
  
  description: `Roland Barthes revolucionó el análisis textual con su teoría de los cinco códigos narrativos en "S/Z", proponiendo que todo texto es un tejido de códigos que el lector activa durante la interpretación. Estos códigos - hermenéutico (enigmas), proairético (acciones), sémico (connotaciones), simbólico (temas profundos) y cultural (referencias) - funcionan simultáneamente para crear significado. Barthes rechazó la búsqueda de una estructura única y definitiva, enfatizando en cambio la pluralidad de significados y la naturaleza activa de la lectura/visualización. Su distinción entre textos "legibles" (clásicos, cerrados) y "escribibles" (modernos, abiertos) es fundamental para entender diferentes estrategias cinematográficas.`,
  
  keyConcepts: [
    {
      term: 'Código Hermenéutico',
      definition: 'Elementos que plantean enigmas y organizan su revelación o resolución',
      importance: 'fundamental',
      relatedTerms: ['enigma', 'suspense', 'revelación']
    },
    {
      term: 'Código Proairético',
      definition: 'Secuencias de acciones que crean expectativas sobre lo que seguirá',
      importance: 'fundamental',
      relatedTerms: ['acción', 'secuencia', 'causalidad']
    },
    {
      term: 'Código Sémico',
      definition: 'Connotaciones y significados que se acumulan alrededor de personajes u objetos',
      importance: 'fundamental',
      relatedTerms: ['connotación', 'caracterización', 'atmósfera']
    },
    {
      term: 'Código Simbólico',
      definition: 'Temas profundos y oposiciones fundamentales que estructuran el significado',
      importance: 'fundamental',
      relatedTerms: ['símbolo', 'tema', 'antítesis']
    },
    {
      term: 'Código Cultural/Referencial',
      definition: 'Referencias a conocimientos compartidos culturales, históricos o científicos',
      importance: 'fundamental',
      relatedTerms: ['intertextualidad', 'referencia', 'conocimiento cultural']
    },
    {
      term: 'Texto Legible/Escribible',
      definition: 'Texto cerrado que confirma expectativas vs. texto abierto que requiere producción activa de sentido',
      importance: 'important',
      relatedTerms: ['apertura', 'pluralidad', 'interpretación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'División en lexías',
      description: 'Segmentar el filme en unidades de lectura significativas',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Las lexías pueden ser planos, escenas o secuencias',
        'No hay tamaño fijo, depende de la densidad semiótica',
        'Buscar momentos de cambio o intensidad significativa'
      ],
      commonMistakes: [
        'Hacer divisiones demasiado mecánicas',
        'Ignorar la dimensión visual y sonora'
      ]
    },
    {
      order: 2,
      name: 'Identificación de códigos por lexía',
      description: 'Catalogar qué códigos están activos en cada unidad',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Múltiples códigos operan simultáneamente',
        'Prestar atención a la interacción entre códigos',
        'No forzar la presencia de todos los códigos'
      ]
    },
    {
      order: 3,
      name: 'Mapeo de interrelaciones',
      description: 'Analizar cómo los códigos interactúan y se refuerzan',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Análisis de voces textuales',
      description: 'Identificar qué "voz" habla a través de cada código',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Evaluación de apertura/cierre',
      description: 'Determinar el grado de pluralidad interpretativa',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Reconoce la complejidad y riqueza semiótica del cine',
    'Integra múltiples niveles de análisis simultáneamente',
    'Valoriza el papel activo del espectador',
    'Especialmente útil para cine moderno y posmoderno',
    'Revela capas de significado no evidentes'
  ],
  
  limitations: [
    'Método menos sistemático que otros enfoques estructurales',
    'Alta subjetividad en la identificación de códigos',
    'Complejidad extrema para aplicación exhaustiva',
    'Menos útil para narrativas simples o directas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Roland Barthes'],
      title: 'S/Z',
      year: 1974,
      publisher: 'Hill and Wang',
      essential: true
    },
    {
      type: 'book',
      authors: ['Roland Barthes'],
      title: 'Image-Music-Text',
      year: 1977,
      publisher: 'Hill and Wang',
      essential: true
    },
    {
      type: 'book',
      authors: ['Roland Barthes'],
      title: 'The Pleasure of the Text',
      year: 1975,
      publisher: 'Hill and Wang',
      essential: false
    },
    {
      type: 'book',
      authors: ['Roland Barthes'],
      title: 'Camera Lucida: Reflections on Photography',
      year: 1981,
      publisher: 'Hill and Wang',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock'
      },
      analysisExcerpt: `Psycho teje magistralmente los cinco códigos. Hermenéutico: ¿Quién es la madre? ¿Qué pasó con Marion? Proairético: Huida-llegada al motel-ducha-investigación. Sémico: Pájaros (Norman como presa/predador), espejos (dualidad), cuchillos (castración). Simbólico: Madre/hijo, masculino/femenino, cordura/locura, alto/bajo (casa/motel). Cultural: Psicoanálisis freudiano, gótico americano, roles de género de los 50. La película es "legible" en superficie pero "escribible" en sus ambigüedades psicosexuales.`,
      insightsGenerated: [
        'Los códigos convergen en la escena de la ducha como nexo semiótico',
        'El código hermenéutico manipula magistralmente al espectador',
        'Los códigos simbólico y cultural revelan ansiedades culturales profundas'
      ],
      methodologyApplication: 'Análisis de convergencia e interacción de códigos en momentos clave',
      keyFindings: [
        'Hitchcock maestro en la orquestación de códigos múltiples',
        'La "solución" del enigma no cierra la pluralidad simbólica',
        'Los códigos visuales son tan importantes como los narrativos'
      ]
    },
    {
      film: {
        title: 'Mulholland Drive',
        year: 2001,
        director: 'David Lynch'
      },
      analysisExcerpt: `Mulholland Drive ejemplifica el texto "escribible" por excelencia. Código hermenéutico: Enigmas sin resolución clara (identidades, caja azul, vaquero). Proairético: Acciones que no siguen causalidad convencional. Sémico: Connotaciones oníricas, Hollywood como fábrica de sueños/pesadillas. Simbólico: Realidad/fantasía, éxito/fracaso, amor/odio. Cultural: Referencias al noir, al viejo Hollywood, a Persona de Bergman. Los códigos no convergen en significado único sino que proliferan interpretaciones.`,
      insightsGenerated: [
        'Lynch subvierte deliberadamente el código hermenéutico tradicional',
        'Los códigos operan según lógica onírica, no narrativa',
        'El film exige que el espectador produzca activamente sentido'
      ],
      methodologyApplication: 'Análisis de cómo los códigos resisten la clausura interpretativa',
      keyFindings: [
        'El cine "escribible" frustra deliberadamente los códigos clásicos',
        'La pluralidad de códigos crea vértigo interpretativo',
        'Los códigos pueden operar contradictoriamente'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'eco-open-work',
      relationshipType: 'complementary',
      synergyDescription: 'Eco teoriza la "obra abierta" que Barthes ejemplifica con lo "escribible"',
      combinedInsightPotential: 9
    },
    {
      id: 'derrida-deconstruction',
      relationshipType: 'complementary',
      synergyDescription: 'Derrida radicaliza la pluralidad de significados que Barthes identifica',
      combinedInsightPotential: 8
    },
    {
      id: 'kristeva-intertextuality',
      relationshipType: 'complementary',
      synergyDescription: 'Kristeva desarrolla el código cultural/referencial en teoría de intertextualidad',
      combinedInsightPotential: 9
    }
  ]
};
