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

export const SMITH_STRUCTURE_SYMPATHY: Methodology = {
  metadata: {
    id: 'smith-structure-sympathy',
    name: 'Estructura de Simpatía',
    author: 'Murray Smith',
    year: 1995,
    category: 'cognitive',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['cognitive-psychology', 'character-theory'],
    culturalContext: 'Cognitivismo cinematográfico británico',
    language: 'es'
  },
  
  description: `Murray Smith desarrolló una teoría cognitiva sofisticada sobre cómo los espectadores se relacionan emocionalmente con los personajes cinematográficos. Su "estructura de simpatía" distingue tres niveles de engagement: reconocimiento (identificar personajes como agentes humanos), alineación (acceso a información sobre personajes), y alianza (evaluación moral/emocional). Smith rechaza el concepto psicoanalítico de "identificación" por impreciso, proponiendo un modelo más matizado de respuestas espectatoriales. Su análisis de la "imaginación empática" examina cómo simulamos mentalmente estados internos de personajes sin necesariamente compartir sus valores. Smith también estudia las "emociones ficticias" - respuestas emocionales a ficciones que difieren de emociones reales en aspectos cruciales.`,
  
  keyConcepts: [
    {
      term: 'Estructura de Simpatía',
      definition: 'Sistema tripartito: Reconocimiento, Alineación, Alianza',
      importance: 'fundamental',
      relatedTerms: ['engagement', 'empatía']
    },
    {
      term: 'Reconocimiento',
      definition: 'Construcción básica del personaje como agente humano individual',
      importance: 'fundamental',
      relatedTerms: ['persona', 'agente']
    },
    {
      term: 'Alineación',
      definition: 'Grado de acceso a acciones, pensamientos y sentimientos del personaje',
      importance: 'fundamental',
      relatedTerms: ['perspectiva', 'información']
    },
    {
      term: 'Alianza',
      definition: 'Evaluación moral y emocional del personaje por el espectador',
      importance: 'fundamental',
      relatedTerms: ['juicio moral', 'simpatía']
    },
    {
      term: 'Imaginación Empática',
      definition: 'Simulación mental de estados internos de otros sin identificación completa',
      importance: 'important',
      relatedTerms: ['simulación', 'empatía cognitiva']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Analizar reconocimiento',
      description: 'Examinar cómo el film construye personajes como individuos',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Identificar primeras apariciones y presentaciones',
        'Notar marcadores de individualidad',
        'Examinar continuidad física y psicológica'
      ],
      commonMistakes: [
        'Dar por sentado el reconocimiento básico',
        'Ignorar casos de reconocimiento problemático'
      ]
    },
    {
      order: 2,
      name: 'Examinar alineación',
      description: 'Mapear el acceso informacional a cada personaje',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Distinguir alineación espaciotemporal de subjetiva',
        'Notar restricciones y expansiones de acceso',
        'Identificar patrones de focalización'
      ]
    },
    {
      order: 3,
      name: 'Evaluar alianza',
      description: 'Analizar los juicios morales y emocionales promovidos',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Distinguir alianza de alineación',
        'Considerar alianzas conflictivas o ambiguas',
        'Examinar técnicas de manipulación moral'
      ]
    },
    {
      order: 4,
      name: 'Rastrear imaginación empática',
      description: 'Identificar momentos de simulación mental',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar invitaciones a imaginar estados internos',
        'Distinguir empatía de simpatía'
      ]
    },
    {
      order: 5,
      name: 'Analizar simpatías perversas',
      description: 'Examinar alianzas moralmente problemáticas',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluar estructura total',
      description: 'Sintetizar el sistema completo de engagement',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Modelo sofisticado que supera simplificaciones de "identificación"',
    'Distingue claramente diferentes niveles de engagement',
    'Base psicológica sólida y empíricamente fundada',
    'Incluye dimensión moral del engagement cinematográfico',
    'Aplicable a personajes moralmente complejos'
  ],
  
  limitations: [
    'Modelo principalmente occidental de empatía y moralidad',
    'Menos útil para cine experimental sin personajes claros',
    'Privilegia narrativas centradas en personajes',
    'Puede intelectualizar respuestas emocionales espontáneas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Murray Smith'],
      title: 'Engaging Characters: Fiction, Emotion, and the Cinema',
      year: 1995,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Murray Smith'],
      title: 'Film, Art, and the Third Culture',
      year: 2017,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Carl Plantinga', 'Greg M. Smith'],
      title: 'Passionate Views: Film, Cognition, and Emotion',
      year: 1999,
      publisher: 'Johns Hopkins University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Silence of the Lambs',
        year: 1991,
        director: 'Jonathan Demme'
      },
      analysisExcerpt: `The Silence of the Lambs presenta una estructura de simpatía compleja. Reconocimiento: Clarice establecida como agente novata vulnerable pero determinada; Lecter como monstruo carismático. Alineación: Principalmente con Clarice, pero momentos cruciales de alineación con Lecter. Alianza: Fuerte con Clarice por su historia traumática y determinación; perversa y parcial con Lecter por su inteligencia y ayuda a Clarice. La imaginación empática funciona para ambos: comprendemos el trauma de Clarice y la perspectiva estética perversa de Lecter sin aprobarla moralmente.`,
      insightsGenerated: [
        'La alineación no determina automáticamente la alianza',
        'Es posible alianza parcial con personajes moralmente reprobables',
        'La estructura puede crear simpatías contradictorias productivas'
      ],
      methodologyApplication: 'Análisis de estructura de simpatía dual y perversa',
      keyFindings: [
        'Demme crea alianza perversa sin justificar a Lecter',
        'La alineación estratégica modula nuestra respuesta moral',
        'La complejidad moral emerge de la estructura, no del contenido'
      ]
    },
    {
      film: {
        title: 'Joker',
        year: 2019,
        director: 'Todd Phillips'
      },
      analysisExcerpt: `Joker presenta una estructura de simpatía éticamente desafiante. Reconocimiento: Arthur Fleck como individuo mentalmente enfermo y marginado. Alineación: Extremadamente íntima, casi exclusivamente desde su perspectiva deteriorada. Alianza: Inicialmente fuerte por su sufrimiento y victimización, progresivamente problemática según escala la violencia. La película manipula la estructura para crear empatía inicial que luego cuestiona. La imaginación empática nos hace experimentar su perspectiva sin necesariamente endorsar sus acciones.`,
      insightsGenerated: [
        'La alineación extrema puede crear alianza incómoda',
        'La estructura puede ser éticamente provocativa',
        'El film explora los límites de la simpatía cinematográfica'
      ],
      methodologyApplication: 'Análisis de manipulación estructural de simpatía',
      keyFindings: [
        'Phillips usa la estructura para provocar debate moral',
        'La alineación íntima no garantiza alianza sostenida',
        'El film demuestra los peligros de la simpatía sin contexto'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'bordwell-cognitivism',
      relationshipType: 'complementary',
      synergyDescription: 'Smith desarrolla aspectos emocionales dentro del marco cognitivo de Bordwell',
      combinedInsightPotential: 9
    },
    {
      id: 'plantinga-emotion',
      relationshipType: 'complementary',
      synergyDescription: 'Plantinga examina emociones directas mientras Smith enfoca engagement con personajes',
      combinedInsightPotential: 8
    },
    {
      id: 'mulvey-gaze',
      relationshipType: 'dialectical',
      synergyDescription: 'Mulvey ve identificación como ideológica mientras Smith la ve como cognitiva',
      combinedInsightPotential: 7
    }
  ]
};
