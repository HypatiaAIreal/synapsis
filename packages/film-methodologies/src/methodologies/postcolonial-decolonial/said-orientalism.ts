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

export const SAID_ORIENTALISM: Methodology = {
  metadata: {
    id: 'said-orientalism',
    name: 'Orientalismo en el Cine',
    author: 'Edward Said',
    year: 1978,
    category: 'postcolonial-decolonial',
    complexity: 'intermediate',
    timeToLearn: 35,
    prerequisities: ['colonial-history', 'cultural-studies'],
    culturalContext: 'Crítica poscolonial palestino-americana',
    language: 'es'
  },
  
  description: `Edward Said transformó los estudios culturales con su análisis del "Orientalismo" como sistema de representación occidental que construye el "Oriente" como Otro exótico, inferior y amenazante. Para el cine, Said reveló cómo Hollywood y el cine europeo perpetúan estereotipos orientalistas: el árabe terrorista, la mujer del harén, el déspota cruel, el paisaje vacío esperando conquista. Su concepto de "geografías imaginarias" muestra cómo el cine mapea fantasías imperiales sobre espacios reales. Said analiza la "visión orientalista" como aparato óptico que solo puede ver lo que confirma sus prejuicios. Su trabajo sobre "cultura e imperialismo" examina cómo incluso films aparentemente progresistas contienen residuos coloniales. El concepto de "contrapunto" de Said propone lecturas que revelen las voces silenciadas en los textos dominantes.`,
  
  keyConcepts: [
    {
      term: 'Orientalismo',
      definition: 'Sistema de representación occidental que construye "Oriente" como Otro inferior y exótico',
      importance: 'fundamental',
      relatedTerms: ['alteridad', 'representación colonial']
    },
    {
      term: 'Geografías Imaginarias',
      definition: 'Espacios fantaseados que proyectan deseos y ansiedades imperiales',
      importance: 'fundamental',
      relatedTerms: ['espacio colonial', 'cartografía imperial']
    },
    {
      term: 'Otredad Constitutiva',
      definition: 'Oriente como negativo necesario para definir la identidad occidental',
      importance: 'important',
      relatedTerms: ['identidad', 'diferencia']
    },
    {
      term: 'Cultura e Imperialismo',
      definition: 'Complicidad de la producción cultural con proyectos imperiales',
      importance: 'fundamental',
      relatedTerms: ['hegemonía cultural', 'soft power']
    },
    {
      term: 'Lectura Contrapuntual',
      definition: 'Método de lectura que revela voces silenciadas y perspectivas suprimidas',
      importance: 'important',
      relatedTerms: ['resistencia textual', 'deconstrucción']
    },
    {
      term: 'Representación como Poder',
      definition: 'El acto de representar al Otro como ejercicio de dominación',
      importance: 'fundamental',
      relatedTerms: ['poder discursivo', 'autoridad cultural']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de estereotipos orientalistas',
      description: 'Catalogar representaciones estereotípicas del "Otro" oriental',
      timeEstimate: 45,
      difficulty: 'basic',
      tips: [
        'Buscar tropos recurrentes: harén, desierto, bazaar, mezquita',
        'Identificar caracterizaciones: místico, bárbaro, sensual, irracional',
        'Notar ausencias: modernidad, individualidad, racionalidad'
      ],
      commonMistakes: [
        'Asumir que toda representación de Oriente es orientalista',
        'Ignorar orientalismos "positivos" pero igualmente reductivos'
      ]
    },
    {
      order: 2,
      name: 'Mapeo de geografías imaginarias',
      description: 'Analizar cómo se construyen espacios orientales fantaseados',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Examinar establecimiento de locaciones',
        'Analizar música y diseño sonoro "oriental"',
        'Buscar vacíos a llenar por el héroe occidental'
      ]
    },
    {
      order: 3,
      name: 'Análisis de otredad',
      description: 'Examinar construcción del Oriental como Otro',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Identificar oposiciones binarias Occidente/Oriente',
        'Buscar momentos de deshumanización o exotización',
        'Analizar silencios y ausencia de subjetividad'
      ]
    },
    {
      order: 4,
      name: 'Examen de la visión orientalista',
      description: 'Analizar el aparato óptico que estructura la mirada',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Búsqueda de complicidades imperiales',
      description: 'Identificar cómo el film sirve a narrativas de dominación',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Aplicación de lectura contrapuntual',
      description: 'Buscar voces y perspectivas silenciadas o marginadas',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Imaginar la historia desde perspectiva del "oriental"',
        'Buscar resistencias implícitas en el texto',
        'Identificar contradicciones en la representación dominante'
      ]
    }
  ],
  
  strengths: [
    'Marco analítico fundamental para estudios poscoloniales',
    'Revela estructuras de poder en representación cultural',
    'Aplicabilidad amplia a diversos contextos y períodos',
    'Conecta cultura con política de manera rigurosa',
    'Metodología clara y replicable'
  ],
  
  limitations: [
    'Puede homogeneizar "Occidente" y "Oriente"',
    'Riesgo de esencialismo inverso',
    'Menos útil para otros colonialismos no-occidentales',
    'Debate sobre qué constituye representación "auténtica"',
    'Enfoque en alta cultura puede ignorar resistencias populares'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Edward Said'],
      title: 'Orientalism',
      year: 1978,
      publisher: 'Pantheon Books',
      essential: true
    },
    {
      type: 'book',
      authors: ['Edward Said'],
      title: 'Culture and Imperialism',
      year: 1993,
      publisher: 'Knopf',
      essential: true
    },
    {
      type: 'book',
      authors: ['Edward Said'],
      title: 'Covering Islam: How the Media and the Experts Determine How We See the Rest of the World',
      year: 1997,
      publisher: 'Vintage',
      essential: false
    },
    {
      type: 'book',
      authors: ['Ella Shohat', 'Robert Stam'],
      title: 'Unthinking Eurocentrism: Multiculturalism and the Media',
      year: 1994,
      publisher: 'Routledge',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Lawrence of Arabia',
        year: 1962,
        director: 'David Lean'
      },
      analysisExcerpt: `Lawrence ejemplifica el orientalismo cinematográfico elegante. El desierto como vacío sublime esperando la llegada del héroe occidental. Los árabes oscilan entre nobles salvajes infantiles y fanáticos irracionales. Lawrence media entre civilización británica y primitivismo árabe. Las geografías imaginarias son épicas: dunas infinitas, campamentos beduinos atemporales. Ningún árabe tiene la complejidad psicológica de Lawrence. La modernidad es exclusivamente británica. El film es bella propaganda imperial que hace del colonialismo una aventura existencial del hombre blanco.`,
      insightsGenerated: [
        'La estética sublime puede enmascarar ideología imperial',
        'El héroe occidental como consciencia necesaria para los orientales',
        'La "simpatía" por los árabes mantiene jerarquías coloniales'
      ],
      methodologyApplication: 'Deconstrucción de orientalismo estético y narrativo',
      keyFindings: [
        'El orientalismo puede ser visualmente seductor y políticamente reaccionario',
        'La mediación occidental se presenta como necesaria e inevitable',
        'Los espacios vacíos justifican la penetración imperial'
      ]
    },
    {
      film: {
        title: 'Capernaum',
        year: 2018,
        director: 'Nadine Labaki'
      },
      analysisExcerpt: `Capernaum ofrece un contra-orientalismo desde dentro. Rechaza geografías imaginarias mostrando Beirut contemporáneo en su complejidad. Los niños árabes tienen agencia y subjetividad plena, no son víctimas mudas esperando salvación occidental. La pobreza se presenta sin exotización ni sentimentalismo orientalista. La directora libanesa evita tanto los estereotipos occidentales como el auto-orientalismo. El film demuestra que es posible representar el "Oriente" sin orientalismo.`,
      insightsGenerated: [
        'El cine árabe puede rechazar tanto orientalismo como auto-orientalismo',
        'La representación desde dentro transforma la mirada',
        'La complejidad humana trasciende categorías orientalistas'
      ],
      methodologyApplication: 'Análisis de estrategias anti-orientalistas',
      keyFindings: [
        'La autorepresentación no garantiza escape del orientalismo',
        'Rechazar exotización no significa rechazar especificidad cultural',
        'El realismo social puede ser resistencia al orientalismo'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'fanon-colonial-psychology',
      relationshipType: 'complementary',
      synergyDescription: 'Fanon analiza efectos psíquicos mientras Said examina representaciones',
      combinedInsightPotential: 9
    },
    {
      id: 'spivak-subaltern',
      relationshipType: 'complementary',
      synergyDescription: 'Spivak cuestiona si el subalterno puede hablar incluso en críticas del orientalismo',
      combinedInsightPotential: 8
    },
    {
      id: 'bhabha-mimicry',
      relationshipType: 'complementary',
      synergyDescription: 'Bhabha complejiza con conceptos de mimetismo y ambivalencia colonial',
      combinedInsightPotential: 9
    }
  ]
};
