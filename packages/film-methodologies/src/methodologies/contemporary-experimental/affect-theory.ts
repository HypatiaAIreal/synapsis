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

export const AFFECT_THEORY: Methodology = {
  metadata: {
    id: 'affect-theory',
    name: 'Teorías Afectivas - Brian Massumi, Steven Shaviro',
    author: 'Brian Massumi, Steven Shaviro',
    year: 1995,
    category: 'contemporary-experimental',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['philosophy', 'film-theory'],
    culturalContext: 'Giro afectivo en humanidades',
    language: 'es'
  },
  
  description: `Las teorías afectivas del cine, desarrolladas por pensadores como Brian Massumi y Steven Shaviro, se enfocan en las intensidades pre-personales y sensaciones corporales que el cine genera antes de su captura en emociones reconocibles o interpretaciones conscientes. Massumi distingue entre "afecto" (intensidad autónoma) y "emoción" (afecto capturado y calificado), explorando cómo el cine opera en el intervalo entre estímulo y respuesta consciente. Shaviro desarrolla una "estética de las sensaciones" post-cinemática que analiza cómo el cine digital y los nuevos medios crean nuevas modalidades afectivas. Esta aproximación examina ritmos, velocidades, texturas e intensidades más que significados, atendiendo a cómo los films modulan los cuerpos de los espectadores.`,
  
  keyConcepts: [
    {
      term: 'Affect vs. Emotion',
      definition: 'Intensidad pre-personal no consciente versus sentimiento reconocible y nombrable',
      importance: 'fundamental',
      relatedTerms: ['intensidad', 'pre-personal']
    },
    {
      term: 'Autonomy of Affect',
      definition: 'Independencia del afecto respecto a significación y consciencia',
      importance: 'fundamental',
      relatedTerms: ['autonomía', 'no-consciente']
    },
    {
      term: 'Intensity',
      definition: 'Fuerza o carga afectiva no cualificada ni dirigida',
      importance: 'fundamental',
      relatedTerms: ['fuerza', 'potencia']
    },
    {
      term: 'Post-Cinematic Affect',
      definition: 'Nuevas modalidades afectivas del cine digital y transmedia',
      importance: 'important',
      relatedTerms: ['digital', 'nuevos medios']
    },
    {
      term: 'Modulation',
      definition: 'Control y manipulación de estados afectivos',
      importance: 'important',
      relatedTerms: ['control', 'modulación afectiva']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Atención a intensidades pre-emocionales',
      description: 'Identificar momentos de intensidad antes de su codificación emocional',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Enfocarse en respuestas corporales inmediatas',
        'Notar aceleraciones y desaceleraciones',
        'Distinguir entre afecto sentido y emoción nombrada'
      ],
      commonMistakes: [
        'Confundir afecto con emoción',
        'Sobre-intelectualizar respuestas corporales'
      ]
    },
    {
      order: 2,
      name: 'Mapeo de ritmos y velocidades',
      description: 'Analizar patrones temporales y dinámicos del film',
      timeEstimate: 90,
      difficulty: 'intermediate',
      tips: [
        'Considerar montaje, movimiento de cámara, sonido',
        'Buscar patrones de intensificación y relajación',
        'Notar sincronías y asincronías'
      ]
    },
    {
      order: 3,
      name: 'Análisis de texturas hápticas',
      description: 'Examinar cualidades táctiles y sensoriales de la imagen',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Rastreo de contagios afectivos',
      description: 'Identificar cómo se transmiten intensidades entre cuerpos',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de modulaciones',
      description: 'Analizar técnicas de control afectivo',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis de dimensión afectiva',
      description: 'Integrar hallazgos sobre economía afectiva del film',
      timeEstimate: 90,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Atiende a dimensiones pre-cognitivas de la experiencia cinematográfica',
    'Valora respuestas corporales tanto como interpretaciones',
    'Especialmente útil para cine experimental y de género',
    'Revela políticas de la sensación',
    'Conecta con neurociencia y estudios de embodiment'
  ],
  
  limitations: [
    'Vocabulario abstracto y difícil de aplicar consistentemente',
    'Resistente a sistematización metodológica',
    'Puede ignorar dimensiones semánticas importantes',
    'Dificultad para comunicar hallazgos',
    'Riesgo de misticismo en torno a lo "inefable"'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Brian Massumi'],
      title: 'Parables for the Virtual: Movement, Affect, Sensation',
      year: 2002,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Steven Shaviro'],
      title: 'Post Cinematic Affect',
      year: 2010,
      publisher: 'Zero Books',
      essential: true
    },
    {
      type: 'book',
      authors: ['Melissa Gregg', 'Gregory J. Seigworth'],
      title: 'The Affect Theory Reader',
      year: 2010,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Eugenie Brinkema'],
      title: 'The Forms of the Affects',
      year: 2014,
      publisher: 'Duke University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Mad Max: Fury Road',
        year: 2015,
        director: 'George Miller'
      },
      analysisExcerpt: `Fury Road opera primariamente a nivel afectivo: intensidad kinética sostenida por 120 minutos. El montaje frenético, diseño sonoro atronador y paleta cromática saturada crean bombardeo sensorial constante. No hay tiempo para procesar emocionalmente: el espectador existe en estado de intensidad pura. Los cuerpos en pantalla (vehículos, humanos, explosiones) forman ensamblajes afectivos en movimiento perpetuo. La narrativa es secundaria al momentum afectivo. Shaviro lo llamaría "post-continuity cinema": coherencia espacial sacrificada por impacto afectivo. El film modula masterfully entre picos de intensidad insostenible y breves valles de respiro.`,
      insightsGenerated: [
        'El cine de acción contemporáneo prioriza afecto sobre narrativa',
        'La intensidad sostenida crea nuevos estados corporales en espectador',
        'El momentum puede ser más importante que la coherencia'
      ],
      methodologyApplication: 'Análisis de intensidades, ritmos y modulación afectiva',
      keyFindings: [
        'Fury Road representa apotheosis del cine afectivo de acción',
        'La saturación sensorial es estrategia estética deliberada',
        'El affect precede y excede la interpretación narrativa'
      ]
    },
    {
      film: {
        title: 'Enter the Void',
        year: 2009,
        director: 'Gaspar Noé'
      },
      analysisExcerpt: `Enter the Void explora estados afectivos extremos asociados con muerte y transcendencia. Cámara flotante induce desorientación corporal constante. Estroboscopios y patrones visuales psicodélicos bypassean procesamiento cognitivo normal, generando afectos directamente. Diseño sonoro subsónico produce unease físico. La narrativa se disuelve en pura experiencia sensorial durante secuencias de "viaje". Afectos de disolución del ego, terror existencial y éxtasis se mezclan sin resolverse en emociones discretas. El film rechaza identificación emocional tradicional por inmersión afectiva radical.`,
      insightsGenerated: [
        'El cine puede inducir estados alterados mediante manipulación afectiva',
        'Técnicas sensoriales extremas generan afectos no-ordinarios',
        'La disolución narrativa permite emergencia de afecto puro'
      ],
      methodologyApplication: 'Análisis de técnicas de alteración afectiva y estados no-ordinarios',
      keyFindings: [
        'Noé usa el medio cinematográfico como tecnología afectiva',
        'Los afectos pueden ser más perturbadores que emociones explícitas',
        'El cine experimental explora límites de modulación afectiva'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'phenomenology',
      relationshipType: 'complementary',
      synergyDescription: 'La fenomenología proporciona base filosófica para entender experiencia pre-reflexiva',
      combinedInsightPotential: 9
    },
    {
      id: 'neurocinema',
      relationshipType: 'complementary',
      synergyDescription: 'La neurocinemática puede medir correlatos neurales de estados afectivos',
      combinedInsightPotential: 8
    },
    {
      id: 'haptic-visuality',
      relationshipType: 'complementary',
      synergyDescription: 'La visualidad háptica explora dimensiones táctiles del afecto cinematográfico',
      combinedInsightPotential: 9
    }
  ]
};
