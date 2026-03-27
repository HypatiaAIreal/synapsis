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

export const ROCHA_HUNGER_AESTHETICS: Methodology = {
  metadata: {
    id: 'rocha-hunger-aesthetics',
    name: 'Estética del Hambre',
    author: 'Glauber Rocha',
    year: 1965,
    category: 'postcolonial-decolonial',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['latin-american-cinema', 'third-world-politics'],
    culturalContext: 'Cinema Novo brasileño',
    language: 'es'
  },
  
  description: `Glauber Rocha, cineasta y teórico brasileño, propuso una "estética del hambre" que transforma la carencia en lenguaje revolucionario. Su manifiesto argumenta que el hambre latinoamericana no es solo tema sino forma - una estética violenta que comunica la urgencia de la situación colonial. Rocha rechaza el "cine digestivo" que hace el subdesarrollo pintoresco para consumo europeo. Propone un cine que haga sentir el hambre, no que la explique. Su concepto de "violencia revolucionaria" es estética y política. La "cámara en trance" expresa la locura de la situación colonial. El misticismo revolucionario incorpora elementos religiosos populares como fuerza política. La estética del hambre usa la pobreza de medios como ventaja expresiva.`,
  
  keyConcepts: [
    {
      term: 'Estética del Hambre',
      definition: 'Transformación de la carencia material en lenguaje cinematográfico revolucionario',
      importance: 'fundamental',
      relatedTerms: ['cine de pobreza', 'estética de la violencia']
    },
    {
      term: 'Violencia Revolucionaria',
      definition: 'Violencia estética como única respuesta posible a violencia colonial',
      importance: 'fundamental',
      relatedTerms: ['agresión visual', 'shock político']
    },
    {
      term: 'Cine Digestivo',
      definition: 'Cine que exotiza la miseria para consumo del Primer Mundo',
      importance: 'important',
      relatedTerms: ['miserabilismo', 'pornomiseria']
    },
    {
      term: 'Cámara en Trance',
      definition: 'Estilo delirante que expresa la locura de la situación colonial',
      importance: 'important',
      relatedTerms: ['delirio visual', 'éxtasis revolucionario']
    },
    {
      term: 'Misticismo Revolucionario',
      definition: 'Fusión de elementos religiosos populares con política radical',
      importance: 'important',
      relatedTerms: ['sincretismo', 'religiosidad popular']
    },
    {
      term: 'Tropicalismo',
      definition: 'Antropofagia cultural que devora y transforma influencias',
      importance: 'important',
      relatedTerms: ['canibalismo cultural', 'hibridación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del hambre estética',
      description: 'Localizar cómo la carencia se transforma en expresión',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar pobreza de medios como elección estética',
        'Identificar agresividad visual deliberada',
        'Notar rechazo de convenciones técnicas'
      ],
      commonMistakes: [
        'Confundir pobreza accidental con estética del hambre',
        'No distinguir entre miserabilismo y hambre revolucionaria'
      ]
    },
    {
      order: 2,
      name: 'Análisis de violencia estética',
      description: 'Examinar formas de agresión visual y narrativa',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar momentos de shock deliberado',
        'Buscar rupturas de expectativas genéricas',
        'Analizar violencia como lenguaje'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de elementos anti-digestivos',
      description: 'Identificar rechazo del consumo fácil',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Notar ausencia de explicaciones tranquilizadoras',
        'Buscar incomodidad deliberada del espectador',
        'Identificar rechazo del exotismo'
      ]
    },
    {
      order: 4,
      name: 'Examen del trance',
      description: 'Analizar estados alterados y delirio visual',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de misticismo político',
      description: 'Buscar fusiones de religiosidad popular y revolución',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis tropicalista',
      description: 'Examinar antropofagia cultural y transformaciones',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Originalidad radical en respuesta a condiciones específicas',
    'Transforma limitaciones en ventajas expresivas',
    'Rechaza paternalismos del Primer Mundo',
    'Crea lenguaje cinematográfico genuinamente tercermundista',
    'Fusiona vanguardia estética con compromiso político'
  ],
  
  limitations: [
    'Puede romantizar o estetizar la violencia',
    'Machismo implícito en retórica y práctica',
    'Hermetismo puede alienar audiencias populares',
    'Contexto específico brasileño limita aplicación',
    'Autor-centrismo contradice ideales colectivos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Glauber Rocha'],
      title: 'On Cinema',
      year: 2019,
      publisher: 'I.B. Tauris',
      essential: true
    },
    {
      type: 'book',
      authors: ['Glauber Rocha'],
      title: 'Aesthetic of Hunger',
      year: 1965,           
      publisher: 'Wayne State University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Ismail Xavier'],
      title: 'Allegories of Underdevelopment',
      year: 1997,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Randal Johnson', 'Robert Stam'],
      title: 'Brazilian Cinema',
      year: 1995,
      publisher: 'Columbia University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Black God, White Devil',
        year: 1964,
        director: 'Glauber Rocha'
      },
      analysisExcerpt: `Deus e o Diabo ejemplifica perfectamente la estética del hambre. El sertão árido se convierte en espacio mítico de transformación violenta. La cámara en trance sigue a personajes entre misticismo y revolución. Violencia estética: muertes teatrales, sangre simbólica. Rechazo del realismo digestivo por alegoría delirante. Misticismo revolucionario: beato y cangaceiro como caras de la misma moneda. Pobreza de producción transformada en intensidad expresiva. El hambre física del sertão se vuelve hambre de justicia y transformación.`,
      insightsGenerated: [
        'La geografía del hambre se vuelve escenario mítico',
        'Violencia ritual como lenguaje de transformación',
        'Misticismo y revolución como respuestas paralelas al hambre'
      ],
      methodologyApplication: 'Manifestación completa de todos los principios de la estética del hambre',
      keyFindings: [
        'El hambre genera su propio lenguaje cinematográfico',
        'La violencia estética comunica urgencia política',
        'El trance visual expresa delirio histórico colectivo'
      ]
    },
    {
      film: {
        title: 'Bacurau',
        year: 2019,
        director: "Kleber Mendonça Filho, Juliano Dornelles"
      },
      analysisExcerpt: `Bacurau actualiza la estética del hambre para el Brasil contemporáneo. El nordeste sigue siendo espacio de resistencia violenta. Mezcla géneros (western, sci-fi, horror) en antropofagia cinematográfica. Violencia como respuesta necesaria al imperialismo (literalmente estadounidense). Misticismo en rituales comunitarios y psicotrópicos. Rechazo del miserabilismo: Bacurau tiene dignidad y tecnología. El hambre ahora es de justicia y reconocimiento. Trance colectivo en la venganza final. Neo-tropicalismo que devora y subvierte el cine de género.`,
      insightsGenerated: [
        'La estética del hambre evoluciona sin perder radicalidad',
        'Nuevas tecnologías se integran a la resistencia',
        'El hambre contemporánea es más compleja pero igualmente urgente'
      ],
      methodologyApplication: 'Adaptación contemporánea de principios de Rocha',
      keyFindings: [
        'La estética del hambre trasciende su momento histórico',
        'El género puede ser vehículo de crítica decolonial',
        'La violencia sigue siendo lenguaje necesario contra el imperio'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'solanas-getino-third-cinema',
      relationshipType: 'parallel',
      synergyDescription: 'Desarrollos simultáneos de cine revolucionario latinoamericano',
      combinedInsightPotential: 9
    },
    {
      id: 'fanon-violence',
      relationshipType: 'complementary',
      synergyDescription: 'Fanon teoriza la violencia descolonizadora que Rocha estetiza',
      combinedInsightPotential: 9
    },
    {
      id: 'oswald-antropofagia',
      relationshipType: 'complementary',
      synergyDescription: 'Oswald de Andrade inspira el canibalismo cultural de Rocha',
      combinedInsightPotential: 8
    }
  ]
};
