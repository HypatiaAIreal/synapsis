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

export const BHABHA_HYBRIDITY: Methodology = {
  metadata: {
    id: 'bhabha-hybridity',
    name: 'Hibridez y Tercer Espacio',
    author: 'Homi Bhabha',
    year: 1994,
    category: 'postcolonial-decolonial',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['poststructuralism', 'psychoanalysis-basics'],
    culturalContext: 'Teoría poscolonial india-británica',
    language: 'es'
  },
  
  description: `Homi Bhabha desarrolló conceptos sofisticados para entender las complejidades de la identidad y representación poscolonial más allá de binarios simples. Su concepto de "hibridez" describe la mezcla productiva e inestable de culturas en el encuentro colonial que subvierte ambas. El "tercer espacio" es ese lugar intersticial donde las identidades se negocian sin síntesis final. Bhabha analiza el "mimetismo colonial" como repetición con diferencia que amenaza la autoridad colonial al revelarla como construcción. Su concepto de "ambivalencia" muestra cómo el discurso colonial simultáneamente construye al colonizado como radicalmente otro y peligrosamente similar. Para el cine, Bhabha ofrece herramientas para analizar representaciones que no son ni puramente coloniales ni auténticamente nativas, sino negociaciones complejas en espacios intermedios.`,
  
  keyConcepts: [
    {
      term: 'Hibridez',
      definition: 'Mezcla cultural productiva que subvierte tanto la cultura colonial como la colonizada',
      importance: 'fundamental',
      relatedTerms: ['mestizaje', 'sincretismo', 'criollización']
    },
    {
      term: 'Tercer Espacio',
      definition: 'Lugar intersticial de enunciación donde se negocian identidades sin síntesis final',
      importance: 'fundamental',
      relatedTerms: ['intersticio', 'entre-lugar', 'liminalidad']
    },
    {
      term: 'Mimetismo Colonial',
      definition: 'Imitación del colonizador que produce "casi lo mismo pero no exactamente"',
      importance: 'fundamental',
      relatedTerms: ['mimicry', 'camuflaje', 'repetición']
    },
    {
      term: 'Ambivalencia Colonial',
      definition: 'Construcción simultánea del colonizado como similar y diferente',
      importance: 'important',
      relatedTerms: ['doble vínculo', 'contradicción']
    },
    {
      term: 'Ansiedad Colonial',
      definition: 'Inestabilidad de la autoridad colonial ante la amenaza del mimetismo',
      importance: 'important',
      relatedTerms: ['paranoia', 'inseguridad']
    },
    {
      term: 'Unhomely/Unheimlich',
      definition: 'Extrañeza inquietante de lo familiar en contextos poscoloniales',
      importance: 'important',
      relatedTerms: ['uncanny', 'desplazamiento']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de hibrideces',
      description: 'Localizar mezclas culturales productivas y subversivas',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar elementos que no son ni puramente A ni B',
        'Identificar fusiones que desestabilizan categorías',
        'Notar lenguajes mezclados, estéticas híbridas'
      ],
      commonMistakes: [
        'Confundir hibridez con simple mezcla',
        'Romantizar toda hibridez como resistencia'
      ]
    },
    {
      order: 2,
      name: 'Localización del tercer espacio',
      description: 'Identificar zonas intersticiales de negociación identitaria',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de indeterminación identitaria',
        'Identificar espacios físicos o simbólicos liminales',
        'Notar donde las categorías fijas se vuelven fluidas'
      ]
    },
    {
      order: 3,
      name: 'Análisis de mimetismos',
      description: 'Examinar imitaciones que revelan y subvierten el poder',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar repeticiones imperfectas',
        'Identificar excesos en la imitación',
        'Notar cómo el mimetismo amenaza la autoridad'
      ]
    },
    {
      order: 4,
      name: 'Examen de ambivalencias',
      description: 'Analizar construcciones contradictorias del Otro',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Búsqueda de ansiedades',
      description: 'Identificar momentos de inestabilidad en la autoridad colonial',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de traducción cultural',
      description: 'Examinar transformaciones en el paso entre culturas',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Supera binarios simplistas colonizador/colonizado',
    'Reconoce complejidad y ambigüedad de identidades poscoloniales',
    'Útil para analizar cine diaspórico y transnacional',
    'Ofrece vocabulario sofisticado para hibrideces culturales',
    'Abre espacios teóricos para identidades fluidas'
  ],
  
  limitations: [
    'Alta abstracción puede dificultar aplicación práctica',
    'Riesgo de celebrar acrícticamente toda hibridez',
    'Jerga postestructuralista puede ser barrera',
    'Puede despolitizar luchas concretas',
    'Privilegia élites cosmopolitas sobre subalternos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Homi Bhabha'],
      title: 'The Location of Culture',
      year: 1994,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Homi Bhabha'],
      title: 'Nation and Narration',
      year: 1990,
      publisher: 'Routledge',
      essential: false
    },
    {
      type: 'article',
      authors: ['Homi Bhabha'],
      title: 'The Right to Narrate',
      year: 2018,
      journal: 'Harvard Design Magazine',
      essential: false
    },
    {
      type: 'book',
      authors: ['David Huddart'],
      title: 'Homi K. Bhabha',
      year: 2006,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Namesake',
        year: 2006,
        director: 'Mira Nair'
      },
      analysisExcerpt: `The Namesake habita el tercer espacio de la experiencia indo-americana. Gogol existe en hibridez permanente: ni completamente indio ni americano. Su nombre mismo es híbrido (ruso dado por padres bengalíes en América). Los espacios domésticos mezclan elementos culturales sin síntesis. El mimetismo aparece en los padres "actuando" americanos mientras mantienen costumbres bengalíes. La película evita resolver la tensión identitaria, manteniéndose en el espacio productivo de la negociación constante.`,
      insightsGenerated: [
        'El nombre como sitio de negociación identitaria híbrida',
        'Los espacios domésticos como terceros espacios literales',
        'La imposibilidad y no-deseabilidad de resolución identitaria'
      ],
      methodologyApplication: 'Análisis de hibridez diaspórica y espacios intersticiales',
      keyFindings: [
        'La segunda generación habita permanentemente el tercer espacio',
        'La hibridez puede ser dolorosa y productiva simultáneamente',
        'El cine puede representar fluidez sin buscar resolución'
      ]
    },
    {
      film: {
        title: 'Sorry to Bother You',
        year: 2018,
        director: 'Boots Riley'
      },
      analysisExcerpt: `El film explora el mimetismo racial a través del "white voice". Cassius Green debe imitar no solo un acento sino toda una performance de blanquitud. Este mimetismo revela la construcción artificial de la autoridad racial. El tercer espacio surge en la grotesca transformación en "equisapiens" - ni humano ni caballo. La hibridez se vuelve literal y monstruosa. La ambivalencia del poder blanco necesita y rechaza a los trabajadores negros simultáneamente.`,
      insightsGenerated: [
        'El código switching como forma de mimetismo colonial contemporáneo',
        'La hibridez forzada como crítica del capitalismo racial',
        'El exceso del mimetismo como estrategia de supervivencia y subversión'
      ],
      methodologyApplication: 'Análisis del mimetismo racial en contexto neoliberal',
      keyFindings: [
        'El mimetismo puede ser simultáneamente estrategia y trampa',
        'La hibridez bajo capitalismo puede ser monstruosa',
        'El tercer espacio puede ser lugar de explotación tanto como liberación'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'fanon-masks',
      relationshipType: 'dialectical',
      synergyDescription: 'Fanon ve las máscaras como alienación mientras Bhabha encuentra potencial subversivo',
      combinedInsightPotential: 9
    },
    {
      id: 'hall-cultural-identity',
      relationshipType: 'complementary',
      synergyDescription: 'Hall desarrolla identidad como producción similar al tercer espacio de Bhabha',
      combinedInsightPotential: 9
    },
    {
      id: 'anzaldua-borderlands',
      relationshipType: 'parallel',
      synergyDescription: 'Anzaldúa teoriza la frontera de manera similar al tercer espacio pero con énfasis en género',
      combinedInsightPotential: 8
    }
  ]
};
