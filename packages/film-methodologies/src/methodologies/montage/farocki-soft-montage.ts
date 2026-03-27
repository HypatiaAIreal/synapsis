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

export const FAROCKI_SOFT_MONTAGE: Methodology = {
  metadata: {
    id: 'farocki-soft-montage',
    name: 'Montaje Suave',
    author: 'Harun Farocki',
    year: 1995,
    category: 'montage',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['installation-art', 'critical-theory', 'digital-media'],
    culturalContext: 'Arte contemporáneo y crítica mediática',
    language: 'es'
  },
  
  description: `Harun Farocki desarrolló el concepto de "soft montage" (montaje suave) para la era de instalaciones multi-pantalla y medios digitales. En contraste con el "hard cut" del cine tradicional, el montaje suave permite la coexistencia simultánea de imágenes en diálogo, creando comparaciones, contrastes y comentarios sin la violencia del corte. Farocki exploró cómo las imágenes operacionales (de vigilancia, militares, industriales) requieren nuevas formas de montaje que revelen sus lógicas ocultas. Su método de "contra-imagen" yuxtapone imágenes aparentemente dispares para exponer conexiones ideológicas y tecnológicas. El montaje para Farocki es una herramienta crítica que puede desarmar la "programación" de las imágenes contemporáneas.`,
  
  keyConcepts: [
    {
      term: 'Soft Montage',
      definition: 'Yuxtaposición simultánea sin corte, diálogo entre imágenes coexistentes',
      importance: 'fundamental',
      relatedTerms: ['montaje suave', 'simultaneidad', 'coexistencia']
    },
    {
      term: 'Hard Cut',
      definition: 'Montaje tradicional violento que elimina una imagen por otra',
      importance: 'fundamental',
      relatedTerms: ['corte duro', 'montaje tradicional', 'sucesión']
    },
    {
      term: 'Imágenes Operacionales',
      definition: 'Imágenes funcionales no estéticas (vigilancia, militar, industrial)',
      importance: 'fundamental',
      relatedTerms: ['imágenes técnicas', 'funcionalidad', 'operatividad']
    },
    {
      term: 'Contra-Imagen',
      definition: 'Yuxtaposición crítica que revela ideologías ocultas',
      importance: 'important',
      relatedTerms: ['crítica visual', 'yuxtaposición', 'revelación']
    },
    {
      term: 'Montaje Multi-Canal',
      definition: 'Edición espacial entre múltiples pantallas simultáneas',
      importance: 'important',
      relatedTerms: ['multipantalla', 'espacialidad', 'instalación']
    },
    {
      term: 'Programación Visual',
      definition: 'Ideología embedded en imágenes técnicas y operacionales',
      importance: 'important',
      relatedTerms: ['ideología', 'código visual', 'programación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de montaje suave',
      description: 'Localizar coexistencias simultáneas de imágenes',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar diálogos sin corte entre imágenes',
        'Identificar comparaciones simultáneas',
        'Notar ausencia de violencia editorial'
      ],
      commonMistakes: [
        'Confundir con split-screen tradicional',
        'No percibir sutilezas del diálogo'
      ]
    },
    {
      order: 2,
      name: 'Análisis de imágenes operacionales',
      description: 'Examinar funciones ocultas de imágenes técnicas',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Identificar propósito funcional vs. estético',
        'Buscar lógicas de control o vigilancia',
        'Analizar qué revelan sin pretenderlo'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de contra-imágenes',
      description: 'Identificar yuxtaposiciones críticas',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Examen multi-canal',
      description: 'Analizar diálogos espaciales entre pantallas',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de programación',
      description: 'Detectar ideología en imágenes técnicas',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis de montaje forense',
      description: 'Examinar investigación visual crítica',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 7,
      name: 'Evaluación crítica',
      description: 'Analizar desmontaje de programación visual',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Perfectamente adaptado a era digital',
    'Crítica efectiva de imágenes técnicas',
    'Expansión espacial del concepto de montaje',
    'Menos manipulador que montaje tradicional',
    'Reflexividad crítica inherente',
    'Relevancia política contemporánea'
  ],
  
  limitations: [
    'Requiere espacios de exhibición específicos',
    'Menor control autoral sobre experiencia',
    'Puede resultar disperso o confuso',
    'Aplicación limitada fuera de instalaciones',
    'Teoría aún en desarrollo',
    'Acceso limitado a obras completas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Harun Farocki'],
      title: 'Harun Farocki: Working on the Sight-Lines',
      year: 2004,
      publisher: 'Amsterdam University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Harun Farocki'],
      title: 'Cross Influence/Soft Montage',
      year: 2009,
      journal: 'Harun Farocki: Against What? Against Whom?',
      pages: '69-74',
      essential: true
    },
    {
      type: 'book',
      authors: ['Antje Ehmann', 'Kodwo Eshun'],
      title: 'Harun Farocki: Against What? Against Whom?',
      year: 2009,
      publisher: 'Koenig Books',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Serious Games I-IV',
        year: 2009,
        director: 'Harun Farocki'
      },
      analysisExcerpt: `Serious Games demuestra el montaje suave entre guerra real y simulada. Cuatro pantallas muestran: entrenamiento militar virtual / terapia PTSD / imágenes de guerra real / simulaciones. Sin cortes, las imágenes dialogan revelando la convergencia guerra/videojuego. Imágenes operacionales militares expuestas en su función ideológica. Contra-imágenes: la misma tecnología para matar y para curar. El espectador navega entre pantallas creando su propio montaje crítico. Soft montage revela la programación de la percepción militar.`,
      insightsGenerated: [
        'El montaje suave permite crítica sin didactismo',
        'Las imágenes operacionales contienen su propia crítica',
        'La simultaneidad revela contradicciones'
      ],
      methodologyApplication: 'Montaje suave como herramienta de crítica mediática',
      keyFindings: [
        'La guerra contemporánea es inseparable de su simulación',
        'El montaje espacial supera limitaciones temporales',
        'El espectador se vuelve montajista crítico'
      ]
    },
    {
      film: {
        title: 'Workers Leaving the Factory',
        year: 1995,
        director: 'Harun Farocki'
      },
      analysisExcerpt: `Farocki recopila 100 años de la misma imagen: trabajadores saliendo de fábricas. Montaje suave temporal: Lumière / Lang / Chaplin / documentales / vigilancia contemporánea coexisten. Sin jerarquía cronológica, las imágenes dialogan sobre trabajo/control/resistencia. Imágenes operacionales de vigilancia junto a ficción revelan continuidades. Contra-imagen: la primera película es ya sobre control laboral. Montaje reflexivo sobre la historia del cine como historia del trabajo filmado.`,
      insightsGenerated: [
        'El montaje suave puede ser arqueología visual',
        'La repetición histórica revela estructuras profundas',
        'Todo cine es potencialmente operacional'
      ],
      methodologyApplication: 'Montaje suave como método historiográfico',
      keyFindings: [
        'Una imagen contiene toda la historia del cine',
        'El soft montage permite comparación sin violencia',
        'La crítica emerge de la yuxtaposición, no del comentario'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'godard-video',
      relationshipType: 'parallel',
      synergyDescription: 'Godard también explora montaje entre pantallas en trabajo tardío',
      combinedInsightPotential: 8
    },
    {
      id: 'installation-art',
      relationshipType: 'complementary',
      synergyDescription: 'El montaje suave emerge del contexto del arte de instalación',
      combinedInsightPotential: 9
    },
    {
      id: 'critical-media-theory',
      relationshipType: 'complementary',
      synergyDescription: 'Farocki aplica teoría crítica mediante práctica de montaje',
      combinedInsightPotential: 9
    }
  ]
};
