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

export const BRANIGAN_NARRATIVE_COMPREHENSION: Methodology = {
  metadata: {
    id: 'branigan-narrative-comprehension',
    name: 'Comprensión Narrativa',
    author: 'Edward Branigan',
    year: 1992,
    category: 'cognitive',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['narratology', 'cognitive-theory'],
    culturalContext: 'Teoría cognitiva de la narración',
    language: 'es'
  },
  
  description: `Edward Branigan desarrolló una teoría cognitiva de la narración cinematográfica centrada en cómo los espectadores comprenden estructuras narrativas complejas, especialmente la focalización y los niveles narrativos. Su modelo distingue ocho niveles de narración, desde el más abstracto (narrativa histórica) hasta el más específico (subpercepción de personaje). Branigan analiza cómo procesamos cambios de punto de vista, flashbacks, y narraciones no confiables mediante "esquemas" cognitivos específicos. Su concepto de "focalización" examina no solo quién ve sino cómo el conocimiento narrativo es distribuido y restringido. Branigan estudia la "cámara" no como dispositivo físico sino como construcción cognitiva del espectador.`,
  
  keyConcepts: [
    {
      term: 'Ocho Niveles de Narración',
      definition: 'Jerarquía desde texto histórico hasta subpercepción del personaje',
      importance: 'fundamental',
      relatedTerms: ['jerarquía narrativa', 'niveles diegéticos']
    },
    {
      term: 'Esquemas Narrativos',
      definition: 'Estructuras cognitivas para comprender tipos de narración',
      importance: 'fundamental',
      relatedTerms: ['comprensión', 'procesamiento']
    },
    {
      term: 'Focalización Cognitiva',
      definition: 'Distribución y restricción del conocimiento narrativo',
      importance: 'fundamental',
      relatedTerms: ['punto de vista', 'perspectiva']
    },
    {
      term: 'Cámara como Construcción',
      definition: 'La "cámara" como entidad cognitiva, no física',
      importance: 'important',
      relatedTerms: ['narrador implícito', 'instancia narrativa']
    },
    {
      term: 'Dispersal/Integration',
      definition: 'Fragmentación y unificación de información narrativa',
      importance: 'important',
      relatedTerms: ['coherencia', 'procesamiento']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar niveles narrativos',
      description: 'Mapear la jerarquía narrativa presente en el film',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Comenzar con el nivel más general y descender',
        'Buscar cambios entre niveles',
        'Identificar marcadores de cada nivel'
      ],
      commonMistakes: [
        'Confundir niveles adyacentes',
        'Ignorar niveles implícitos'
      ]
    },
    {
      order: 2,
      name: 'Analizar focalización',
      description: 'Examinar la distribución del conocimiento narrativo',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Distinguir entre quién ve y quién sabe',
        'Mapear restricciones de información',
        'Identificar cambios de focalización'
      ]
    },
    {
      order: 3,
      name: 'Examinar esquemas activados',
      description: 'Identificar qué esquemas cognitivos requiere el film',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Considerar esquemas genéricos',
        'Identificar esquemas culturales específicos'
      ]
    },
    {
      order: 4,
      name: 'Analizar cámara cognitiva',
      description: 'Examinar cómo construimos la instancia narrativa',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Estudiar dispersal/integration',
      description: 'Analizar manejo de información fragmentada',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluar competencia requerida',
      description: 'Determinar las demandas cognitivas al espectador',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Análisis sistemático de complejidad narrativa',
    'Modelo jerárquico sofisticado y útil',
    'Atiende a subjetividad y punto de vista',
    'Base cognitiva sólida',
    'Especialmente útil para narrativas complejas'
  ],
  
  limitations: [
    'Alta complejidad del modelo puede ser barrera',
    'Sesgo hacia cine de arte y ensayo',
    'Menos útil para narrativas simples',
    'Terminología densa y especializada'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Edward Branigan'],
      title: 'Narrative Comprehension and Film',
      year: 1992,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Edward Branigan'],
      title: 'Point of View in the Cinema',
      year: 1984,
      publisher: 'Mouton',
      essential: true
    },
    {
      type: 'book',
      authors: ['Edward Branigan'],
      title: 'Projecting a Camera',
      year: 2006,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Rashomon',
        year: 1950,
        director: 'Akira Kurosawa'
      },
      analysisExcerpt: `Rashomon presenta múltiples niveles narrativos complejos. Nivel extradiegético: el film como texto. Nivel diegético: conversación en la puerta. Nivel hipodiegético: los testimonios en la corte. Nivel metadiegético: los flashbacks de cada testimonio. La focalización cambia con cada narrador, distribuyendo conocimiento contradictorio. Los esquemas de "testimonio verdadero" son sistemáticamente subvertidos. La cámara cognitiva debe reconstruirse con cada versión. El dispersal extremo de información resiste la integration final.`,
      insightsGenerated: [
        'Los niveles narrativos pueden contener información mutuamente excluyente',
        'La focalización múltiple impide construir una verdad única',
        'El film demanda esquemas cognitivos sofisticados'
      ],
      methodologyApplication: 'Análisis de niveles narrativos múltiples y focalización contradictoria',
      keyFindings: [
        'Kurosawa utiliza la estructura para cuestionar la verdad narrativa',
        'La competencia narrativa requerida es extraordinariamente alta',
        'El film anticipa teorías posmodernas de narración'
      ]
    },
    {
      film: {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
        director: 'Michel Gondry'
      },
      analysisExcerpt: `Eternal Sunshine presenta una comprensión narrativa desafiante mediante niveles que colapsan: realidad presente, memorias siendo borradas, memorias dentro de memorias. La focalización es consistentemente interna (Joel) pero en estados mentales diferentes. Los esquemas de "memoria" y "realidad" deben ajustarse constantemente. La cámara cognitiva navega fluidamente entre niveles sin marcadores claros. El dispersal temporal extremo requiere integration activa constante del espectador.`,
      insightsGenerated: [
        'Los niveles narrativos pueden ser fluidos y permeables',
        'La subjetividad extrema requiere nuevos esquemas cognitivos',
        'La integración narrativa puede ser proceso más que producto'
      ],
      methodologyApplication: 'Análisis de narrativa subjetiva y niveles fluidos',
      keyFindings: [
        'Gondry expande los límites de la comprensión narrativa',
        'La focalización interna extrema crea nueva forma narrativa',
        'El espectador debe desarrollar competencias específicas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'genette-narratology',
      relationshipType: 'complementary',
      synergyDescription: 'Branigan cognitiviza los conceptos narratológicos de Genette',
      combinedInsightPotential: 9
    },
    {
      id: 'bordwell-narration',
      relationshipType: 'complementary',
      synergyDescription: 'Ambos aplican cognitivismo pero Branigan enfoca más la subjetividad',
      combinedInsightPotential: 8
    },
    {
      id: 'bal-focalization',
      relationshipType: 'parallel',
      synergyDescription: 'Bal y Branigan desarrollan teorías sofisticadas de focalización',
      combinedInsightPotential: 8
    }
  ]
};
