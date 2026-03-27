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

export const QUEER_TRANS_THEORY: Methodology = {
  metadata: {
    id: 'queer-trans-theory',
    name: 'Teorías Queer/Trans - Jack Halberstam, Sara Ahmed',
    author: 'Jack Halberstam, Sara Ahmed',
    year: 1998,
    category: 'contemporary-experimental',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['gender-studies', 'queer-theory'],
    culturalContext: 'Estudios queer y trans contemporáneos',
    language: 'es'
  },
  
  description: `Las teorías queer y trans del cine han evolucionado desde análisis de representación hacia exploraciones radicales de temporalidad, fracaso, y orientación fenomenológica. Jack Halberstam desarrolla conceptos como "tiempo queer" - temporalidades fuera de la reproducción heteronormativa - y "el arte queer del fracaso" - resistencia a narrativas de éxito neoliberal. Su análisis del "female masculinity" y géneros trans reconfiguran comprensiones de identificación cinematográfica. Sara Ahmed aporta una "fenomenología queer" que examina cómo los cuerpos se orientan hacia objetos y otros cuerpos, creando líneas de deseo y pertenencia. Estas teorías no solo analizan contenido LGBTQ+ sino que queer-izan la forma cinematográfica misma.`,
  
  keyConcepts: [
    {
      term: 'Queer Time',
      definition: 'Temporalidades que resisten la cronormatividad reproductiva heterosexual',
      importance: 'fundamental',
      relatedTerms: ['temporalidad', 'cronormatividad']
    },
    {
      term: 'Queer Failure',
      definition: 'Fracaso como modo de resistencia a mandatos de éxito neoliberal',
      importance: 'fundamental',
      relatedTerms: ['fracaso', 'resistencia']
    },
    {
      term: 'Orientation',
      definition: 'Direccionalidad fenomenológica del deseo y la atención',
      importance: 'fundamental',
      relatedTerms: ['fenomenología', 'direccionalidad']
    },
    {
      term: 'Trans* Method',
      definition: 'Metodología que cruza y desestabiliza categorías fijas',
      importance: 'important',
      relatedTerms: ['cruce', 'fluidez']
    },
    {
      term: 'Affect Aliens',
      definition: 'Sujetos cuya infelicidad expone violencia de la normalidad',
      importance: 'important',
      relatedTerms: ['alienación afectiva', 'killjoy']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de temporalidades queer',
      description: 'Buscar momentos que resisten progresión normativa',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar loops, pausas, retrocesos temporales',
        'Identificar rechazos a futuridad reproductiva',
        'Notar temporalidades del placer vs. productividad'
      ],
      commonMistakes: [
        'Limitar análisis a personajes LGBTQ+ explícitos',
        'Ignorar dimensiones formales de lo queer'
      ]
    },
    {
      order: 2,
      name: 'Análisis de fracasos productivos',
      description: 'Examinar cómo el fracaso genera posibilidades alternativas',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Distinguir fracaso queer de tragedia tradicional',
        'Buscar humor y joy en el fracaso',
        'Analizar rechazo a teleología del éxito'
      ]
    },
    {
      order: 3,
      name: 'Mapeo de orientaciones',
      description: 'Rastrear líneas de deseo y direccionalidad afectiva',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Búsqueda de cruces trans*',
      description: 'Identificar momentos de cruce y desestabilización',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis de affect aliens',
      description: 'Examinar figuras de alienación afectiva productiva',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación política',
      description: 'Analizar potencial transformador vs. asimilacionista',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Abre nuevas formas de pensar tiempo, espacio e identidad',
    'Valora experiencias marginalizadas como fuente de conocimiento',
    'Conecta forma cinematográfica con política radical',
    'Resiste asimilación y homonormatividad',
    'Genera lecturas innovadoras de films canónicos'
  ],
  
  limitations: [
    'Jerga académica puede ser alienante',
    'Tensión entre teoría académica y activismo',
    'Riesgo de romantizar precariedad',
    'Aplicación desigual a diferentes géneros cinematográficos',
    'Puede ignorar necesidades materiales concretas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jack Halberstam'],
      title: 'The Queer Art of Failure',
      year: 2011,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jack Halberstam'],
      title: 'In a Queer Time and Place',
      year: 2005,
      publisher: 'NYU Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sara Ahmed'],
      title: 'Queer Phenomenology: Orientations, Objects, Others',
      year: 2006,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['José Esteban Muñoz'],
      title: 'Cruising Utopia: The Then and There of Queer Futurity',
      year: 2009,
      publisher: 'NYU Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Watermelon Woman',
        year: 1996,
        director: 'Cheryl Dunye'
      },
      analysisExcerpt: `Dunye queeriza el tiempo mediante búsqueda de archivo que revela ausencias. El film construye "Fae Richards" como ficción necesaria ante borrado histórico de lesbianas negras. Temporalidad no-lineal: pasado fabricado se vuelve más real que historia oficial. Fracaso del archivo tradicional genera metodología creativa queer. Cheryl como filmmaker orienta su deseo hacia fantasmas históricos, creando genealogía afectiva alternativa. El romance interracial contemporáneo resuena con el pasado inventado/recuperado. Meta-cine como método queer: hacer visible el proceso de construcción histórica.`,
      insightsGenerated: [
        'La ficción puede ser más verdadera que archivos oficiales incompletos',
        'El tiempo queer conecta pasados borrados con futuros posibles',
        'El fracaso archivístico demanda creatividad metodológica'
      ],
      methodologyApplication: 'Análisis de temporalidad queer y archivo afectivo',
      keyFindings: [
        'El cine puede crear historia queer donde no existe',
        'La meta-ficción revela construcción de todas las historias',
        'El deseo queer trasciende límites temporales lineales'
      ]
    },
    {
      film: {
        title: 'Tangerine',
        year: 2015,
        director: 'Sean Baker'
      },
      analysisExcerpt: `Tangerine presenta tiempo trans* frenético de supervivencia urbana. 24 horas en LA navideña con Sin-Dee buscando su novio infiel. iPhone aesthetic = estética DIY queer/trans de recursos limitados. Fracaso constante (del amor, de passing, de estabilidad) pero con fierce resiliencia. Las protagonistas trans no son objetos de contemplación sino sujetos en movimiento perpetuo. Orientación literal: Sin-Dee arrastra a Alexandra por la ciudad siguiendo líneas de furia y deseo. Final en lavandería: intimidad queer en espacios de fracaso. No hay arco de redención, solo persistencia feroz.`,
      insightsGenerated: [
        'La estética lo-fi puede ser inherentemente queer/trans',
        'El tiempo de supervivencia trans resiste narrativas de progreso',
        'La amistad trans como orientación más estable que romance'
      ],
      methodologyApplication: 'Análisis de temporalidad trans urbana y estética del fracaso',
      keyFindings: [
        'El iPhone democratiza producción de narrativas trans',
        'El fracaso como modo de vida, no como tragedia',
        'El movimiento perpetuo como resistencia al stasis normativo'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'affect-theory',
      relationshipType: 'complementary',
      synergyDescription: 'Ahmed desarrolla teoría afectiva específicamente queer',
      combinedInsightPotential: 9
    },
    {
      id: 'crip-theory',
      relationshipType: 'complementary',
      synergyDescription: 'Comparten crítica a normalidad obligatoria y temporalidad normativa',
      combinedInsightPotential: 9
    },
    {
      id: 'decolonial-theory',
      relationshipType: 'synthetic',
      synergyDescription: 'Intersección necesaria para evitar homonacionalismo',
      combinedInsightPotential: 8
    }
  ]
};
