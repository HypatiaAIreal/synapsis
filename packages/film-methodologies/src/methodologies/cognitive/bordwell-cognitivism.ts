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

export const BORDWELL_COGNITIVISM: Methodology = {
  metadata: {
    id: 'bordwell-cognitivism',
    name: 'Cognitivismo Cinematográfico',
    author: 'David Bordwell',
    year: 1985,
    category: 'cognitive',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['film-theory-basics'],
    culturalContext: 'Teoría cognitiva del cine',
    language: 'es'
  },
  
  description: `David Bordwell es el principal arquitecto del cognitivismo cinematográfico, una aproximación que analiza cómo los espectadores comprenden activamente las películas mediante procesos mentales universales. Rechazando el psicoanálisis y las "grandes teorías", Bordwell propone un análisis empírico de las operaciones cognitivas específicas que los films demandan. Su teoría de la "construcción de la historia" examina cómo los espectadores infieren la fabula (historia) a partir del syuzhet (trama presentada) mediante esquemas cognitivos, hipótesis y inferencias. Bordwell identifica "prototipos" narrativos que guían las expectativas y "procedimientos" que los espectadores emplean para dar sentido a la información fílmica. Su análisis del estilo cinematográfico como sistema que guía la atención y facilita la comprensión conecta forma con cognición.`,
  
  keyConcepts: [
    {
      term: 'Construcción Activa',
      definition: 'El espectador como constructor activo de sentido, no receptor pasivo',
      importance: 'fundamental',
      relatedTerms: ['esquemas cognitivos', 'hipótesis']
    },
    {
      term: 'Esquemas Cognitivos',
      definition: 'Estructuras mentales de conocimiento previo que guían la comprensión',
      importance: 'fundamental',
      relatedTerms: ['prototipos', 'expectativas']
    },
    {
      term: 'Hipótesis y Confirmación',
      definition: 'Proceso interpretativo continuo de formular y verificar predicciones',
      importance: 'fundamental',
      relatedTerms: ['inferencia', 'predicción']
    },
    {
      term: 'Indicios (Cues)',
      definition: 'Señales fílmicas que guían la construcción mental del espectador',
      importance: 'important',
      relatedTerms: ['información', 'pistas']
    },
    {
      term: 'Gap-Filling',
      definition: 'Proceso de completar información ausente mediante inferencias',
      importance: 'important',
      relatedTerms: ['elipsis', 'inferencia']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar indicios narrativos',
      description: 'Catalogar la información proporcionada por el film',
      timeEstimate: 45,
      difficulty: 'basic',
      tips: [
        'Distinguir información explícita de implícita',
        'Notar qué información se retiene o retrasa',
        'Identificar pistas visuales y sonoras'
      ],
      commonMistakes: [
        'Ignorar indicios sutiles o no verbales',
        'Sobreinterpretar información ambigua'
      ]
    },
    {
      order: 2,
      name: 'Analizar construcción fabula/syuzhet',
      description: 'Examinar cómo se infiere la historia desde la presentación',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Reconstruir el orden cronológico de eventos',
        'Identificar información suprimida u ordenada estratégicamente'
      ]
    },
    {
      order: 3,
      name: 'Examinar esquemas activados',
      description: 'Identificar qué conocimientos previos utiliza el film',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Considerar esquemas de género',
        'Identificar prototipos narrativos esperados'
      ]
    },
    {
      order: 4,
      name: 'Rastrear hipótesis espectatoriales',
      description: 'Mapear las predicciones y revisiones del espectador',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Notar momentos de confirmación o sorpresa',
        'Identificar falsas pistas deliberadas'
      ]
    },
    {
      order: 5,
      name: 'Analizar guía atencional',
      description: 'Examinar cómo el film dirige la atención del espectador',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluar problem-solving narrativo',
      description: 'Analizar los enigmas cognitivos planteados',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Base empírica sólida en psicología cognitiva',
    'Método sistemático y replicable',
    'Evita interpretaciones excesivas o arbitrarias',
    'Aplicable universalmente a diferentes culturas',
    'Conecta análisis formal con procesos mentales reales'
  ],
  
  limitations: [
    'Puede minimizar aspectos culturales específicos',
    'Menos atención a dimensiones emocionales',
    'Modelo quizás demasiado racional del espectador',
    'Ignora procesos inconscientes',
    'Sesgo hacia narrativa clásica hollywoodense'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['David Bordwell'],
      title: 'Narration in the Fiction Film',
      year: 1985,
      publisher: 'University of Wisconsin Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['David Bordwell'],
      title: 'Making Meaning: Inference and Rhetoric in the Interpretation of Cinema',
      year: 1989,
      publisher: 'Harvard University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['David Bordwell'],
      title: 'Poetics of Cinema',
      year: 2008,
      publisher: 'Routledge',
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
      analysisExcerpt: `Rear Window presenta un caso paradigmático de problem-solving narrativo. Los indicios visuales sobre los vecinos activan esquemas de misterio/thriller. El espectador formula hipótesis paralelas a las de Jeff sobre el posible asesinato. El gap-filling es crucial: debemos inferir qué ocurrió en el apartamento de Thorwald. Los esquemas de género guían expectativas pero Hitchcock las manipula expertamente. La restricción espacial intensifica el proceso cognitivo al limitar la información disponible.`,
      insightsGenerated: [
        'El film convierte al espectador en detective cognitivo',
        'La restricción de información intensifica el engagement mental',
        'Los esquemas de género son tanto utilizados como subvertidos'
      ],
      methodologyApplication: 'Análisis del problem-solving narrativo y construcción de hipótesis',
      keyFindings: [
        'Hitchcock domina la manipulación de procesos cognitivos',
        'La identificación cognitiva precede a la emocional',
        'El suspense surge del manejo estratégico de información'
      ]
    },
    {
      film: {
        title: 'Memento',
        year: 2000,
        director: 'Christopher Nolan'
      },
      analysisExcerpt: `Memento desafía radicalmente los procesos cognitivos normales. La estructura inversa frustra los esquemas temporales habituales. El espectador debe revisar constantemente sus hipótesis a medida que nueva información recontextualiza la anterior. El gap-filling se vuelve problemático cuando no podemos confiar en la memoria del protagonista. Los indicios están diseñados para engañar tanto como para informar. La construcción de la fabula desde este syuzhet fragmentado demanda un esfuerzo cognitivo extraordinario.`,
      insightsGenerated: [
        'La estructura refleja la condición cognitiva del protagonista',
        'Los esquemas normales de comprensión son sistemáticamente subvertidos',
        'El film exige una participación cognitiva activa extrema'
      ],
      methodologyApplication: 'Análisis de cognición desafiada y reconstrucción narrativa compleja',
      keyFindings: [
        'Nolan utiliza la forma para crear experiencia cognitiva',
        'La desorientación del espectador es calculada y significante',
        'El cognitivismo puede analizar incluso narrativas anti-cognitivas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'carroll-philosophy',
      relationshipType: 'complementary',
      synergyDescription: 'Carroll añade dimensión filosófica al cognitivismo empírico de Bordwell',
      combinedInsightPotential: 8
    },
    {
      id: 'smith-structure-sympathy',
      relationshipType: 'complementary',
      synergyDescription: 'Smith examina los aspectos emocionales que Bordwell minimiza',
      combinedInsightPotential: 9
    },
    {
      id: 'psychoanalytic-theory',
      relationshipType: 'dialectical',
      synergyDescription: 'El psicoanálisis enfoca lo inconsciente que el cognitivismo rechaza',
      combinedInsightPotential: 7
    }
  ]
};
