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

export const DOANE_MASQUERADE: Methodology = {
  metadata: {
    id: 'doane-masquerade',
    name: 'La Mujer y la Mascarada',
    author: 'Mary Ann Doane',
    year: 1982,
    category: 'feminist-gender',
    complexity: 'advanced',
    timeToLearn: 30,
    prerequisities: ['psychoanalysis', 'feminist-film-theory'],
    culturalContext: 'Feminismo psicoanalítico',
    language: 'es'
  },
  
  description: `Mary Ann Doane desarrolló teorías sofisticadas sobre la espectatorialidad femenina y la mascarada como estrategia de negociación con la imagen cinematográfica. Partiendo del psicoanálisis pero cuestionando sus premisas, Doane argumenta que la proximidad excesiva de las mujeres a la imagen (ser imagen más que tener imagen) crea problemas específicos de identificación y distancia. Su concepto de "mascarada femenina" - tomado de Joan Riviere - describe cómo la feminidad excesiva puede funcionar como máscara que crea distancia irónica. Doane exploró géneros "femeninos" como el melodrama y el "woman's film" de los 1940s, mostrando cómo estos géneros negocian los deseos y ansiedades femeninas dentro de estructuras patriarcales.`,
  
  keyConcepts: [
    {
      term: 'Masquerade',
      definition: 'Feminidad como máscara que puede crear distancia crítica',
      importance: 'fundamental',
      relatedTerms: ['performatividad', 'distancia irónica']
    },
    {
      term: 'Proximity',
      definition: 'Cercanía problemática de las mujeres a la imagen',
      importance: 'fundamental',
      relatedTerms: ['sobre-identificación', 'colapso sujeto-objeto']
    },
    {
      term: 'Woman\'s Film',
      definition: 'Género cinematográfico dirigido a y sobre mujeres',
      importance: 'important',
      relatedTerms: ['melodrama', 'weepie']
    },
    {
      term: 'Femme Fatale',
      definition: 'Figura femenina peligrosa que sabe demasiado',
      importance: 'important',
      relatedTerms: ['mujer fatal', 'conocimiento peligroso']
    },
    {
      term: 'Spectatorial Desire',
      definition: 'Deseo femenino de ver y saber en el cine',
      importance: 'important',
      relatedTerms: ['deseo escópico', 'epistemofilia']
    },
    {
      term: 'Medical Discourse',
      definition: 'Representación de la mujer como enigma médico/histérico',
      importance: 'important',
      relatedTerms: ['patologización', 'histeria']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis de proximidad/distancia',
      description: 'Examinar la relación de personajes femeninos con su propia imagen',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de contemplación en espejos',
        'Analizar cuando mujeres "performan" feminidad conscientemente',
        'Identificar colapsos entre ser y parecer'
      ],
      commonMistakes: [
        'Confundir mascarada con simple actuación',
        'Ignorar momentos sutiles de distanciamiento'
      ]
    },
    {
      order: 2,
      name: 'Identificación de mascaradas',
      description: 'Localizar momentos de feminidad excesiva o paródica',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'La mascarada puede ser defensa o estrategia',
        'Buscar excesos de feminidad que parecen "demasiado"'
      ]
    },
    {
      order: 3,
      name: 'Examen de woman\'s film elements',
      description: 'Identificar convenciones del género melodramático femenino',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Análisis de femmes fatales',
      description: 'Estudiar mujeres peligrosas y su relación con el conocimiento',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Examen de discursos médicos',
      description: 'Buscar patologización de deseos o comportamientos femeninos',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de negociaciones',
      description: 'Analizar cómo los personajes navegan estructuras patriarcales',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Teorización sofisticada de espectatorialidad femenina',
    'Atención a géneros cinematográficos "femeninos" despreciados',
    'Análisis matizado de identificación y distancia',
    'Útil para analizar melodrama y film noir',
    'Conecta psicoanálisis con análisis de género'
  ],
  
  limitations: [
    'Marco psicoanalítico puede ser limitante',
    'Enfoque principalmente en cine clásico de Hollywood',
    'Menos atención a diferencias raciales o de clase',
    'Complejidad teórica puede ser barrera',
    'Visión algo pesimista de agencia femenina'
  ],
  
  bibliography: [
    {
      type: 'article',
      authors: ['Mary Ann Doane'],
      title: 'Film and the Masquerade: Theorising the Female Spectator',
      year: 1982,
      journal: 'Screen',      
      pages: '74-88',
      essential: true
    },
    {
      type: 'book',
      authors: ['Mary Ann Doane'],
      title: 'The Desire to Desire: The Woman\'s Film of the 1940s',
      year: 1987,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Mary Ann Doane'],
      title: 'Femmes Fatales: Feminism, Film Theory, Psychoanalysis',
      year: 1991,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'article',
      authors: ['Mary Ann Doane'],
      title: 'The Voice in the Cinema: The Articulation of Body and Space',
      year: 1980,
      journal: 'Yale French Studies',      
      pages: '33-50',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Now, Voyager',
        year: 1942,
        director: 'Irving Rapper'
      },
      analysisExcerpt: `Now, Voyager ejemplifica el "woman's film" analizado por Doane. Charlotte Vale sufre de proximidad excesiva a la imagen materna hasta que la terapia le permite adoptar la mascarada de feminidad glamurosa. Su transformación de "patito feo" implica aprender a manipular su imagen, creando distancia entre su ser y su apariencia. La famosa escena del makeover muestra la feminidad como construcción consciente. Charlotte negocia entre deseo personal y deber maternal, encontrando en la maternidad sublimada con Tina una solución que evita tanto la sexualidad como el aislamiento.`,
      insightsGenerated: [
        'La transformación requiere dominar la mascarada femenina',
        'El woman\'s film negocia deseos femeninos dentro de límites patriarcales',
        'La maternidad desplazada ofrece agencia limitada pero real'
      ],
      methodologyApplication: 'Análisis de mascarada como estrategia de supervivencia psíquica',
      keyFindings: [
        'La mascarada permite cierta agencia dentro de la opresión',
        'El melodrama procesa ansiedades femeninas reales',
        'La distancia de la propia imagen puede ser liberadora'
      ]
    },
    {
      film: {
        title: 'Black Swan',
        year: 2010,
        director: 'Darren Aronofsky'
      },
      analysisExcerpt: `Black Swan actualiza las preocupaciones de Doane sobre proximidad e imagen. Nina sufre de proximidad patológica a un ideal de feminidad perfecta (el Cisne Blanco) y debe aprender la mascarada de sexualidad (Cisne Negro). Los espejos omnipresentes muestran su relación torturada con su propia imagen. La "perfección" del ballet funciona como discurso médico-disciplinario que patologiza cualquier desviación. Nina literalmente se fragmenta entre ser y parecer, culminando en una mascarada fatal donde la performance consume al performer.`,
      insightsGenerated: [
        'La proximidad excesiva a ideales femeninos puede ser destructiva',
        'La mascarada llevada al extremo colapsa en psicosis',
        'Los espejos revelan la vigilancia constante de la imagen femenina'
      ],
      methodologyApplication: 'Análisis de proximidad patológica y mascarada como destrucción',
      keyFindings: [
        'El film actualiza ansiedades sobre imagen femenina en era digital',
        'La perfección femenina como demanda imposible y letal',
        'La mascarada puede ser supervivencia o autodestrucción'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'riviere-womanliness',
      relationshipType: 'complementary',
      synergyDescription: 'Doane adapta el concepto de mascarada de Riviere al cine',
      combinedInsightPotential: 8
    },
    {
      id: 'mulvey-male-gaze',
      relationshipType: 'dialectical',
      synergyDescription: 'Doane responde a Mulvey teorizando estrategias femeninas de resistencia',
      combinedInsightPotential: 9
    },
    {
      id: 'butler-performativity',
      relationshipType: 'parallel',
      synergyDescription: 'Ambas teorizan la feminidad como performance, pero con diferentes énfasis',
      combinedInsightPotential: 8
    }
  ]
};
