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

export const KULESHOV_EFFECT: Methodology = {
  metadata: {
    id: 'kuleshov-effect',
    name: 'Efecto Kuleshov',
    author: 'Lev Kuleshov',
    year: 1920,
    category: 'montage',
    complexity: 'basic',
    timeToLearn: 15,
    prerequisities: [],
    culturalContext: 'Experimentación soviética temprana',
    language: 'es'
  },
  
  description: `Lev Kuleshov estableció uno de los principios fundamentales del montaje cinematográfico con su famoso experimento que demostró cómo el significado de una imagen depende de su contexto - las imágenes que la preceden y siguen. El "Efecto Kuleshov" mostró que la misma expresión facial neutra de un actor podía leerse como hambre, tristeza o deseo según se yuxtapusiera con un plato de sopa, un ataúd o una mujer. Kuleshov teorizó el montaje como la esencia específica del cine, diferenciándolo de otras artes. Su concepto de "geografía creativa" demostró cómo el montaje puede crear espacios coherentes a partir de fragmentos filmados en lugares distintos. La "mujer ideal" de Kuleshov - construida mediante montaje de partes de diferentes mujeres - anticipó ideas sobre la construcción cinematográfica del cuerpo.`,
  
  keyConcepts: [
    {
      term: 'Efecto Kuleshov',
      definition: 'El contexto (planos adyacentes) determina el significado de una imagen',
      importance: 'fundamental',
      relatedTerms: ['contexto', 'yuxtaposición', 'significado']
    },
    {
      term: 'Geografía Creativa',
      definition: 'Espacio coherente construido mediante montaje de lugares diversos',
      importance: 'fundamental',
      relatedTerms: ['espacio fílmico', 'construcción espacial']
    },
    {
      term: 'Mujer Ideal',
      definition: 'Cuerpo cinematográfico compuesto de fragmentos de diferentes personas',
      importance: 'important',
      relatedTerms: ['fragmentación', 'construcción corporal']
    },
    {
      term: 'Material Fílmico',
      definition: 'Planos como elementos básicos para construir significado',
      importance: 'important',
      relatedTerms: ['material', 'elementos básicos']
    },
    {
      term: 'Economía Expresiva',
      definition: 'Máximo efecto emocional con mínimo material',
      importance: 'important',
      relatedTerms: ['eficiencia', 'minimalismo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de efectos Kuleshov',
      description: 'Localizar recontextualizaciones de imágenes',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Buscar rostros neutros que cambian significado',
        'Identificar objetos recontextualizados',
        'Notar cómo el contexto altera la percepción'
      ],
      commonMistakes: [
        'Confundir con simple continuidad',
        'No reconocer sutilezas del efecto'
      ]
    },
    {
      order: 2,
      name: 'Análisis de geografía creativa',
      description: 'Examinar construcción de espacios mediante montaje',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar discontinuidades espaciales ocultas',
        'Analizar cómo se crea coherencia espacial',
        'Buscar "imposibles" espaciales'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de cuerpos compuestos',
      description: 'Identificar fragmentación y reunificación corporal',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Examen de rostros neutros',
      description: 'Analizar expresiones abiertas a interpretación',
      timeEstimate: 30,
      difficulty: 'basic'
    },
    {
      order: 5,
      name: 'Identificación de economía',
      description: 'Evaluar eficiencia expresiva del montaje',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de contextos cambiantes',
      description: 'Examinar cómo cambia el significado según contexto',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Principio fundamental demostrado empíricamente',
    'Simplicidad elegante del concepto',
    'Aplicabilidad universal en todo tipo de cine',
    'Base pedagógica sólida para enseñanza',
    'Economía narrativa máxima',
    'Influencia duradera en teoría y práctica'
  ],
  
  limitations: [
    'Puede simplificar excesivamente la percepción',
    'Enfoque mecanicista de la respuesta espectatorial',
    'Ignora factores culturales en interpretación',
    'Experimento original históricamente cuestionado',
    'Reduce complejidad de la experiencia cinematográfica'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Lev Kuleshov'],
      title: 'Kuleshov on Film',
      year: 1974,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Ronald Levaco'],
      title: 'Kuleshov on Film: Writings of Lev Kuleshov',
      year: 1974,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Mikhail Yampolsky'],
      title: 'Kuleshov\'s Experiments and the New Anthropology of the Actor',
      year: 1991,
      journal: 'Inside the Film Factory',
      pages: '31-50',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock'
      },
      analysisExcerpt: `Hitchcock es el maestro del Efecto Kuleshov. El rostro de Stewart funciona como la cara neutral de Mosjukhin: su expresión + lo que observa = emoción específica. Mirada + mujer bailando = deseo; mirada + cuchillo = miedo; mirada + perro muerto = tristeza. La geografía creativa construye el patio entero desde el punto de vista de Jeff, espacios separados unidos por montaje. Cada ventana es un fragmento que el montaje ensambla en un mundo coherente. Economía expresiva máxima: mínimos cambios faciales, máximo impacto emocional.`,
      insightsGenerated: [
        'Hitchcock sistematiza el Efecto Kuleshov como gramática',
        'La geografía creativa puede estructurar un film entero',
        'El voyeurismo cinematográfico depende del Efecto Kuleshov'
      ],
      methodologyApplication: 'Uso sistemático del efecto para construir suspense',
      keyFindings: [
        'El Efecto Kuleshov es base del lenguaje cinematográfico clásico',
        'La mirada es el conector principal en geografía creativa',
        'La economía expresiva intensifica la identificación'
      ]
    },
    {
      film: {
        title: '2001: A Space Odyssey',
        year: 1968,
        director: 'Stanley Kubrick'
      },
      analysisExcerpt: `Kubrick lleva el Efecto Kuleshov a dimensiones cósmicas. Hueso/nave espacial: el montaje crea evolución tecnológica. El ojo rojo de HAL: expresión perfectamente neutral que adquiere amenaza mediante contexto. Rostro de Bowman + luces psicodélicas = trascendencia. Geografía creativa extrema: habitaciones victorianas en Júpiter. El feto estelar recontextualiza toda la película precedente. Mínima expresión facial, máximas implicaciones filosóficas.`,
      insightsGenerated: [
        'El Efecto Kuleshov puede operar a escala conceptual',
        'La neutralidad perfecta (HAL) maximiza el efecto',
        'La yuxtaposición puede crear significados metafísicos'
      ],
      methodologyApplication: 'Expansión del efecto a dimensiones filosóficas',
      keyFindings: [
        'Kuleshov trasciende el realismo psicológico',
        'El contexto puede transformar objetos en símbolos',
        'La geografía creativa incluye dimensiones cósmicas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'eisenstein-montage',
      relationshipType: 'complementary',
      synergyDescription: 'Kuleshov establece base que Eisenstein teoriza como colisión dialéctica',
      combinedInsightPotential: 9
    },
    {
      id: 'pudovkin-constructive',
      relationshipType: 'synthetic',
      synergyDescription: 'Pudovkin fue alumno de Kuleshov y desarrolló sus ideas hacia narrativa',
      combinedInsightPotential: 8
    },
    {
      id: 'cognitive-film-theory',
      relationshipType: 'complementary',
      synergyDescription: 'La teoría cognitiva explica científicamente el Efecto Kuleshov',
      combinedInsightPotential: 8
    }
  ]
};
