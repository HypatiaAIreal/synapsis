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

export const PLANTINGA_EMOTION_CINEMA: Methodology = {
  metadata: {
    id: 'plantinga-emotion-cinema',
    name: 'Emoción y Cine',
    author: 'Carl Plantinga',
    year: 2009,
    category: 'cognitive',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['emotion-theory', 'cognitive-psychology'],
    culturalContext: 'Teoría cognitiva de la emoción cinematográfica',
    language: 'es'
  },
  
  description: `Carl Plantinga desarrolló una teoría cognitiva de las emociones cinematográficas que rechaza tanto el psicoanálisis como el cognitivismo puramente racional. Su trabajo examina cómo los films elicitan "emociones de ficción" mediante técnicas específicas de "mood cuing" (señalización del ánimo) y "emotion markers" (marcadores emocionales). Plantinga analiza el "contagio emocional" - cómo las expresiones faciales en primeros planos transmiten emociones directamente - y la "empatía proyectiva" donde imaginamos estar en la situación del personaje. Su taxonomía de emociones fílmicas distingue entre emociones directas, meta-emociones, y emociones estéticas. Plantinga estudia géneros específicos como "scenes of empathy" en melodramas y "disgust imagery" en horror.`,
  
  keyConcepts: [
    {
      term: 'Mood Cuing',
      definition: 'Técnicas para establecer y señalar estados anímicos',
      importance: 'fundamental',
      relatedTerms: ['atmósfera', 'tono emocional']
    },
    {
      term: 'Emotion Markers',
      definition: 'Indicadores específicos que provocan emociones',
      importance: 'fundamental',
      relatedTerms: ['triggers', 'señales emocionales']
    },
    {
      term: 'Contagio Emocional',
      definition: 'Transmisión directa de emociones via expresiones faciales',
      importance: 'fundamental',
      relatedTerms: ['mímica facial', 'empatía automática']
    },
    {
      term: 'Scenes of Empathy',
      definition: 'Momentos diseñados para máxima conexión emocional',
      importance: 'important',
      relatedTerms: ['clímax emocional', 'identificación']
    },
    {
      term: 'Meta-Emociones',
      definition: 'Emociones sobre nuestras propias respuestas emocionales',
      importance: 'important',
      relatedTerms: ['reflexividad emocional', 'autoconciencia']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar mood cuing',
      description: 'Localizar técnicas de establecimiento anímico',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Examinar música, color, ritmo, iluminación',
        'Notar establecimiento gradual vs. súbito',
        'Identificar coherencia entre elementos'
      ],
      commonMistakes: [
        'Focusing solo en un elemento',
        'Ignorar sutilezas del mood cuing'
      ]
    },
    {
      order: 2,
      name: 'Localizar emotion markers',
      description: 'Identificar triggers emocionales específicos',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar momentos de intensidad emocional',
        'Notar técnicas recurrentes',
        'Considerar timing de markers'
      ]
    },
    {
      order: 3,
      name: 'Analizar contagio facial',
      description: 'Examinar uso de primeros planos emotivos',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Contar duración de primeros planos',
        'Notar micro-expresiones',
        'Evaluar claridad de emociones'
      ]
    },
    {
      order: 4,
      name: 'Identificar scenes of empathy',
      description: 'Localizar momentos de máxima conexión emocional',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Distinguir tipos de emoción',
      description: 'Clasificar emociones directas, meta y estéticas',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluar orquestación emocional',
      description: 'Analizar la gestión global de emociones',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Teoría sofisticada pero accesible de la emoción',
    'Incluye dimensión corporal de las emociones',
    'Atiende a especificidad cultural y genérica',
    'Útil para análisis práctico de géneros',
    'Base empírica en psicología de la emoción'
  ],
  
  limitations: [
    'Taxonomías pueden ser algo rígidas',
    'Énfasis en cine narrativo mainstream',
    'Menos útil para cine experimental',
    'Debate sobre universalidad de emociones básicas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Carl Plantinga'],
      title: 'Moving Viewers: American Film and the Spectator\'s Experience',
      year: 2009,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Carl Plantinga'],
      title: 'Screen Stories: Emotion and the Ethics of Engagement',
      year: 2018,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Carl Plantinga', 'Greg M. Smith'],
      title: 'Passionate Views: Film, Cognition, and Emotion',
      year: 1999,
      publisher: 'Johns Hopkins University Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Inside Out',
        year: 2015,
        director: 'Pete Docter'
      },
      analysisExcerpt: `Inside Out literaliza brillantemente los conceptos de Plantinga. El mood cuing usa colores asociados a cada emoción. Los emotion markers son explícitos: cada acción de los personajes-emoción. El contagio emocional funciona doblemente: vemos las emociones de Riley y las emociones personificadas. Las scenes of empathy (Bing Bong desapareciendo) son calculadamente devastadoras. El film es pura meta-emoción: emociones sobre cómo funcionan las emociones. Demuestra pedagógicamente cómo el cine manipula emociones.`,
      insightsGenerated: [
        'La literalización hace visible el proceso emocional normalmente invisible',
        'El film educa sobre inteligencia emocional mientras la practica',
        'Las meta-emociones pueden ser las más poderosas'
      ],
      methodologyApplication: 'Análisis de pedagogía emocional y meta-emoción',
      keyFindings: [
        'Pixar convierte teoría emocional en narrativa',
        'La autoconciencia emocional no reduce el impacto',
        'El cine puede enseñar sobre sus propios mecanismos'
      ]
    },
    {
      film: {
        title: 'Manchester by the Sea',
        year: 2016,
        director: 'Kenneth Lonergan'
      },
      analysisExcerpt: `Manchester by the Sea ejemplifica el mood cuing minimalista pero efectivo. El emotion marking es sutil: silencios, miradas evitadas, paisajes invernales. El contagio emocional se bloquea deliberadamente - Lee evita mostrar emociones, creando tensión. Las scenes of empathy son contenidas pero devastadoras (el encuentro con Randi). El film crea meta-emociones sobre la incapacidad de procesar el dolor. La empatía proyectiva funciona por lo no expresado.`,
      insightsGenerated: [
        'La contención emocional puede ser más poderosa que la expresión',
        'El mood cuing puede trabajar por sustracción',
        'Las emociones bloqueadas crean su propia intensidad'
      ],
      methodologyApplication: 'Análisis de emoción contenida y empatía proyectiva',
      keyFindings: [
        'Lonergan subvierte las convenciones del melodrama',
        'El minimalismo emocional requiere trabajo activo del espectador',
        'El dolor inexpresable encuentra expresión cinematográfica'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'smith-mood-cue',
      relationshipType: 'synthetic',
      synergyDescription: 'Smith desarrolla específicamente el concepto de mood cuing de Plantinga',
      combinedInsightPotential: 9
    },
    {
      id: 'tan-emotion-structure',
      relationshipType: 'parallel',
      synergyDescription: 'Tan ofrece modelo más formal de estructura emocional',
      combinedInsightPotential: 8
    },
    {
      id: 'sobchack-phenomenology',
      relationshipType: 'complementary',
      synergyDescription: 'Sobchack añade dimensión fenomenológica a la experiencia emocional',
      combinedInsightPotential: 8
    }
  ]
};
