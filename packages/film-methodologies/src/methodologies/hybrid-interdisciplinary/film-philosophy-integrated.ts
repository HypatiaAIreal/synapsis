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

export const FILM_PHILOSOPHY_INTEGRATED: Methodology = {
  metadata: {
    id: 'film-philosophy-integrated',
    name: 'Filosofía del Cine - Integración de múltiples filósofos',
    author: 'Stanley Cavell, Gilles Deleuze, y otros',
    year: 1985,
    category: 'hybrid-interdisciplinary',
    complexity: 'expert',
    timeToLearn: 60,
    prerequisities: ['philosophy', 'film-theory'],
    culturalContext: 'Filosofía continental y analítica',
    language: 'es'
  },
  
  description: `La filosofía del cine como campo integrado reúne diversas tradiciones filosóficas (analítica, continental, pragmatista, no-occidental) para examinar cuestiones fundamentales sobre la naturaleza del medio, su capacidad de generar conocimiento, y sus implicaciones éticas y estéticas. Este enfoque interdisciplinario no aplica simplemente filosofía preexistente al cine, sino que explora cómo el cine mismo filosofa a través de sus medios específicos. Integra preguntas ontológicas (¿qué es el cine?), epistemológicas (¿cómo conocemos a través del cine?), éticas (¿cuáles son las responsabilidades del cine?), y estéticas (¿qué hace valioso al cine como arte?).`,
  
  keyConcepts: [
    {
      term: 'Cine como Filosofía',
      definition: 'El cine no ilustra filosofía sino que filosofa mediante sus propios medios',
      importance: 'fundamental',
      relatedTerms: ['pensamiento fílmico', 'filosofía visual']
    },
    {
      term: 'Experimento Mental Fílmico',
      definition: 'Films como laboratorios para explorar posibilidades conceptuales',
      importance: 'fundamental',
      relatedTerms: ['hipótesis fílmica', 'especulación visual']
    },
    {
      term: 'Ontología Cinematográfica',
      definition: 'La naturaleza específica del ser cinematográfico',
      importance: 'fundamental',
      relatedTerms: ['ser fílmico', 'realidad cinematográfica']
    },
    {
      term: 'Epistemología Visual',
      definition: 'Modos de conocimiento específicos al medio visual',
      importance: 'important',
      relatedTerms: ['conocimiento visual', 'verdad fílmica']
    },
    {
      term: 'Ética de la Imagen',
      definition: 'Responsabilidades morales de la representación cinematográfica',
      importance: 'important',
      relatedTerms: ['responsabilidad visual', 'ética representacional']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del problema filosófico',
      description: 'Determinar qué cuestión filosófica aborda o genera el film',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar preguntas implícitas, no solo temas explícitos',
        'Considerar problemas que emergen de la forma',
        'Incluir paradojas y aporías'
      ],
      commonMistakes: [
        'Reducir filosofía a mensaje temático',
        'Ignorar cómo la forma genera pensamiento'
      ]
    },
    {
      order: 2,
      name: 'Análisis del método fílmico',
      description: 'Examinar cómo el cine desarrolla el problema filosóficamente',
      timeEstimate: 90,
      difficulty: 'expert',
      tips: [
        'Atender a recursos específicamente cinematográficos',
        'Buscar argumentos visuales y temporales',
        'Considerar silencios y ausencias'
      ]
    },
    {
      order: 3,
      name: 'Mapeo de conceptos cinematográficos',
      description: 'Identificar conceptos filosóficos generados por el film',
      timeEstimate: 60,
      difficulty: 'expert'
    },
    {
      order: 4,
      name: 'Evaluación epistemológica',
      description: 'Analizar qué tipo de conocimiento produce el film',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Consideraciones éticas',
      description: 'Examinar implicaciones morales de la obra',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis filosófica',
      description: 'Integrar hallazgos en interpretación filosófica comprehensiva',
      timeEstimate: 90,
      difficulty: 'expert'
    }
  ],
  
  strengths: [
    'Toma el cine seriamente como forma de pensamiento',
    'Integra múltiples tradiciones filosóficas productivamente',
    'Genera nuevas preguntas filosóficas',
    'Conecta cine con cuestiones existenciales fundamentales',
    'Evita aplicación mecánica de teorías preexistentes'
  ],
  
  limitations: [
    'Requiere formación filosófica considerable',
    'Puede intelectualizar excesivamente la experiencia',
    'Tensión entre diferentes tradiciones filosóficas',
    'Riesgo de elitismo académico',
    'Dificultad de evaluación de claims filosóficos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Stanley Cavell'],
      title: 'The World Viewed: Reflections on the Ontology of Film',
      year: 1979,
      publisher: 'Harvard University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gilles Deleuze'],
      title: 'Cinema 1: The Movement-Image',
      year: 1986,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gilles Deleuze'],
      title: 'Cinema 2: The Time-Image',
      year: 1989,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Robert Sinnerbrink'],
      title: 'New Philosophies of Film: Thinking Images',
      year: 2011,
      publisher: 'Continuum',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Thin Red Line',
        year: 1998,
        director: 'Terrence Malick'
      },
      analysisExcerpt: `Malick crea cine-filosofía sobre naturaleza, guerra y consciencia. No ilustra ideas heideggerianas sino que piensa cinematográficamente problemas similares. Voice-overs múltiples crean consciencia coral, no individual. Naturaleza no es backdrop sino co-protagonista filosófico con agency propia. Yuxtaposición constante belleza/horror genera pregunta sobre el mal en la creación. Tiempo cinematográfico fluido entre memoria/presente/anticipación cuestiona linearidad de experiencia. La guerra deviene ocasión para meditación sobre mortalidad y trascendencia. Cada plano es pregunta visual sobre relación humano/mundo.`,
      insightsGenerated: [
        'El cine puede filosofar mediante yuxtaposición y ritmo',
        'Los voice-overs pueden crear formas de consciencia no-individuales',
        'La naturaleza puede ser agente filosófico en cine'
      ],
      methodologyApplication: 'Análisis de cine como pensamiento filosófico autónomo',
      keyFindings: [
        'Malick desarrolla fenomenología específicamente cinematográfica',
        'El cine puede pensar problemas filosóficos sin verbalizarlos',
        'La forma fílmica es inseparable del contenido filosófico'
      ]
    },
    {
      film: {
        title: 'The Matrix',
        year: 1999,
        director: 'The Wachowskis'
      },
      analysisExcerpt: `The Matrix funciona como experimento mental fílmico sobre realidad, conocimiento y libertad. Actualiza alegoría de la caverna platónica en era digital: no sombras en pared sino simulación computacional. Problema cartesiano del genio maligno deviene IA controladora. Elección pastilla roja/azul dramatiza problema epistemológico: ¿es preferible verdad dolorosa a ilusión confortable? Acción kung-fu no es mero espectáculo sino exploración de agency y determinismo. "No hay cuchara" - idealismo berkeleyano meets budismo zen. Film genera nuevos problemas: ¿puede la simulación ser más "real" que realidad? Filosofía popular que no simplifica sino complejiza.`,
      insightsGenerated: [
        'El sci-fi puede actualizar problemas filosóficos clásicos',
        'La acción puede ser vehículo de exploración conceptual',
        'El cine popular puede hacer filosofía sofisticada'
      ],
      methodologyApplication: 'Análisis de film como experimento mental expandido',
      keyFindings: [
        'The Matrix demuestra cine blockbuster como filosofía',
        'Los efectos especiales pueden ser argumentos filosóficos',
        'La cultura popular es espacio legítimo de investigación filosófica'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'phenomenology',
      relationshipType: 'complementary',
      synergyDescription: 'Fenomenología informa comprensión de experiencia cinematográfica',
      combinedInsightPotential: 9
    },
    {
      id: 'cognitive-philosophy',
      relationshipType: 'dialectical',
      synergyDescription: 'Debate productivo entre aproximaciones fenomenológicas y cognitivas',
      combinedInsightPotential: 8
    },
    {
      id: 'ethics',
      relationshipType: 'complementary',
      synergyDescription: 'Ética aplicada examina responsabilidades morales del cine',
      combinedInsightPotential: 8
    }
  ]
};
