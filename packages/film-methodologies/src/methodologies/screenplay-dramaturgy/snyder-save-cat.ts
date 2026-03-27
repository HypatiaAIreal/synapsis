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

export const SNYDER_SAVE_CAT: Methodology = {
  metadata: {
    id: 'snyder-save-cat',
    name: 'Save the Cat',
    author: 'Blake Snyder',
    year: 2005,
    category: 'screenplay-dramaturgy',
    complexity: 'basic',
    timeToLearn: 10,
    prerequisities: [],
    culturalContext: 'Fórmula comercial de Hollywood',
    language: 'es'
  },
  
  description: `Blake Snyder, guionista de comedias de Hollywood, creó uno de los sistemas más populares y accesibles para estructurar guiones comerciales. Su método "Save the Cat" divide cualquier película en 15 "beats" específicos con páginas exactas donde deben ocurrir. El título refiere al momento temprano donde el héroe hace algo agradable para ganarse la simpatía del público. Snyder también desarrolló un sistema de 10 géneros cinematográficos basados en situaciones narrativas en lugar de elementos estilísticos. Su enfoque ultra-práctico incluye herramientas como "The Board" (tablero visual para organizar 40 escenas) y principios como "Pope in the Pool" (exponer información mientras sucede algo interesante).`,
  
  keyConcepts: [
    {
      term: '15 Beats',
      definition: 'Momentos narrativos específicos con timing exacto: Opening Image, Theme Stated, Set-Up, Catalyst, Debate, Break into Two, B Story, Fun & Games, Midpoint, Bad Guys Close In, All Is Lost, Dark Night of the Soul, Break into Three, Finale, Final Image',
      importance: 'fundamental',
      relatedTerms: ['estructura', 'momentos clave']
    },
    {
      term: '10 Géneros de Snyder',
      definition: 'Monster in the House, Golden Fleece, Out of the Bottle, Dude with a Problem, Rites of Passage, Buddy Love, Whydunit, The Fool Triumphant, Institutionalized, Superhero',
      importance: 'important',
      relatedTerms: ['tipos de historia', 'situaciones']
    },
    {
      term: 'Save the Cat Moment',
      definition: 'Acción temprana que hace al héroe simpático para la audiencia',
      importance: 'fundamental',
      relatedTerms: ['simpatía', 'conexión emocional']
    },
    {
      term: 'The Board',
      definition: 'Sistema visual de 40 fichas en 4 filas para organizar el guión',
      importance: 'important',
      relatedTerms: ['planificación', 'estructura visual']
    },
    {
      term: 'Pope in the Pool',
      definition: 'Técnica de dar exposición mientras sucede algo visualmente interesante',
      importance: 'important',
      relatedTerms: ['exposición', 'información visual']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del género Snyder',
      description: 'Categorizar la película en uno de los 10 géneros situacionales',
      timeEstimate: 15,
      difficulty: 'basic',
      tips: [
        'Enfocarse en la situación central, no en el tono',
        'Una película puede tener elementos de varios géneros',
        'Identificar el género ayuda a entender expectativas'
      ],
      commonMistakes: [
        'Confundir con géneros tradicionales (comedia, drama)',
        'No reconocer el género dominante'
      ]
    },
    {
      order: 2,
      name: 'Localización de los 15 beats',
      description: 'Identificar cada beat en su página específica',
      timeEstimate: 60,
      difficulty: 'basic',
      tips: [
        'Opening Image (1), Theme Stated (5), Set-Up (1-10)',
        'Catalyst (12), Debate (12-25), Break into Two (25)',
        'B Story (30), Fun & Games (30-55), Midpoint (55)',
        'Bad Guys Close In (55-75), All Is Lost (75), Dark Night (75-85)',
        'Break into Three (85), Finale (85-110), Final Image (110)'
      ]
    },
    {
      order: 3,
      name: 'Verificación del Save the Cat',
      description: 'Encontrar el momento de conexión emocional con el héroe',
      timeEstimate: 15,
      difficulty: 'basic',
      tips: [
        'Generalmente ocurre en las primeras 10-15 páginas',
        'Puede ser sutil o explícito',
        'Debe ser activo, no pasivo'
      ]
    },
    {
      order: 4,
      name: 'Análisis de imagen apertura/cierre',
      description: 'Comparar primera y última imagen para ver transformación',
      timeEstimate: 20,
      difficulty: 'intermediate',
      tips: [
        'Deben ser opuestas temáticamente',
        'Muestran el cambio completo del viaje',
        'A menudo son visuales espejo'
      ]
    },
    {
      order: 5,
      name: 'Evaluación de Fun & Games',
      description: 'Verificar que se cumple la promesa de la premisa',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Es lo que el público vino a ver',
        'Debe ser la parte más entretenida',
        'Explora todas las posibilidades de la premisa'
      ]
    }
  ],
  
  strengths: [
    'Extremadamente práctica y específica para principiantes',
    'Fácil de seguir con páginas exactas para cada beat',
    'Probada en películas comerciales exitosas',
    'Herramientas visuales útiles para planificación',
    'Énfasis en conexión emocional con audiencia',
    'Sistema completo incluyendo géneros y técnicas'
  ],
  
  limitations: [
    'Excesivamente formulaica y restrictiva',
    'Orientada solo a cine comercial mainstream',
    'Rigidez puede matar creatividad y originalidad',
    'No funciona para cine de arte o experimental',
    'Simplifica excesivamente la complejidad humana',
    'Criticada por homogeneizar Hollywood'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Blake Snyder'],
      title: 'Save the Cat! The Last Book on Screenwriting You\'ll Ever Need',
      year: 2005,
      publisher: 'Michael Wiese Productions',
      essential: true
    },
    {
      type: 'book',
      authors: ['Blake Snyder'],
      title: 'Save the Cat! Goes to the Movies',
      year: 2007,
      publisher: 'Michael Wiese Productions',
      essential: true
    },
    {
      type: 'book',
      authors: ['Blake Snyder'],
      title: 'Save the Cat! Strikes Back',
      year: 2009,
      publisher: 'Save the Cat! Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Legally Blonde',
        year: 2001,
        director: 'Robert Luketic'
      },
      analysisExcerpt: `Ejemplo perfecto del método Snyder. Género: "Fish Out of Water" (Institutionalized). Opening Image: Elle como reina de sorority superficial. Save the Cat: Ayuda a su amiga con problemas amorosos. Theme Stated (min 5): "¿No crees en el amor?" Catalyst (min 12): Warner la deja por no ser "seria". Debate: ¿Debe ir a Harvard? Break into Two: Entra a Harvard Law. Fun & Games: Elle navigando el mundo legal con su estilo. Midpoint: Éxito en clase, falsa victoria. All Is Lost: Propuesta indecente de profesor. Dark Night: Casi abandona. Finale: Juicio donde usa su conocimiento único. Final Image: Elle graduándose con honores.`,
      insightsGenerated: [
        'Los 15 beats crean ritmo perfecto para comedia',
        'Save the Cat establece a Elle como buena persona bajo la superficie',
        'Fun & Games explota completamente el contraste de mundos'
      ],
      methodologyApplication: 'Aplicación exacta de los 15 beats con timing preciso',
      keyFindings: [
        'Snyder ideal para comedias high-concept',
        'La fórmula no impide desarrollo de personaje',
        'Los beats pueden contener sorpresas dentro de la estructura'
      ]
    },
    {
      film: {
        title: 'Miss Congeniality',
        year: 2000,
        director: 'Donald Petrie'
      },
      analysisExcerpt: `Otro ejemplo de estructura Snyder perfecta. Género: "Fish Out of Water". Opening Image: Gracie como tomboy agresiva. Save the Cat: Salva a su compañero (literalmente). Set-Up: Establecer su incompetencia social. Catalyst: Necesitan agente encubierto en concurso de belleza. Fun & Games: Transformación y preparación para concurso. Midpoint: Gracie empieza a disfrutar y hacer amigas. Bad Guys Close In: Amenaza real emerge. All Is Lost: Nadie le cree sobre la bomba. Break into Three: Decide actuar sola. Finale: Salva el día siendo ella misma. Final Image: Gracie integrando ambos aspectos de su personalidad.`,
      insightsGenerated: [
        'La transformación física externa refleja cambio interno',
        'Midpoint crucial donde el personaje abraza el nuevo mundo',
        'El finale sintetiza lo aprendido con la identidad original'
      ],
      methodologyApplication: 'Estructura Snyder aplicada a comedia de transformación',
      keyFindings: [
        'Los beats funcionan para arcos de auto-descubrimiento',
        'Genre "Fish Out of Water" permite máxima explotación de contraste',
        'La fórmula Snyder efectiva para comedias con corazón'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'field-three-act',
      relationshipType: 'complementary',
      synergyDescription: 'Snyder especifica detalladamente lo que Field esboza generalmente',
      combinedInsightPotential: 8
    },
    {
      id: 'vogler-writer-journey',
      relationshipType: 'complementary',
      synergyDescription: 'Vogler proporciona arquetipos mientras Snyder da estructura específica',
      combinedInsightPotential: 7
    },
    {
      id: 'hauge-six-stage',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos enfocan transformación pero con diferentes especificidades',
      combinedInsightPotential: 7
    }
  ],
  
  digitalTools: [
    {
      name: 'Save the Cat! Software',
      type: 'software',
      url: 'https://savethecat.com/software',
      description: 'Software oficial con los 15 beats y board digital',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    },
    {
      name: 'Beat Sheet Calculator',
      type: 'webapp',
      description: 'Calculadora online para los 15 beats según duración',
      cost: 'free',
      platforms: ['web']
    }
  ]
};
