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

export const CAMPBELL_HERO_JOURNEY: Methodology = {
  metadata: {
    id: 'campbell-hero-journey',
    name: 'El Viaje del Héroe/Monomito',
    author: 'Joseph Campbell',
    year: 1949,
    category: 'screenplay-dramaturgy',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: [],
    culturalContext: 'Mitología comparada americana',
    language: 'es'
  },
  
  description: `Joseph Campbell, mitólogo y profesor estadounidense, revolucionó la comprensión de las narrativas universales con su teoría del monomito o "viaje del héroe". Basándose en estudios comparativos de mitos mundiales, Campbell identificó un patrón narrativo arquetípico presente en historias de todas las culturas: un héroe que abandona su mundo ordinario, enfrenta pruebas en un mundo especial, y regresa transformado con un "elixir" para su comunidad. Su estructura de 17 etapas, dividida en tres actos (Partida, Iniciación, Retorno), refleja no solo un patrón narrativo sino un proceso psicológico universal de transformación humana. Campbell integró conceptos junguianos sobre arquetipos y el inconsciente colectivo, proponiendo que estas historias resuenan profundamente porque reflejan procesos internos de crecimiento y autodescubrimiento.`,
  
  keyConcepts: [
    {
      term: 'Las 17 Etapas del Viaje',
      definition: 'Mundo ordinario, llamada a la aventura, rechazo, encuentro con el mentor, cruce del umbral, pruebas/aliados/enemigos, acercamiento, ordalía, recompensa, camino de regreso, resurrección, retorno con el elixir',
      importance: 'fundamental',
      relatedTerms: ['monomito', 'estructura mítica']
    },
    {
      term: 'Tres Actos Míticos',
      definition: 'Partida/Separación, Iniciación/Descenso, Retorno/Integración',
      importance: 'fundamental',
      relatedTerms: ['estructura narrativa', 'transformación']
    },
    {
      term: 'Arquetipos',
      definition: 'Héroe, Mentor, Guardián del Umbral, Heraldo, Camaleón, Sombra, Aliado, Embaucador',
      importance: 'fundamental',
      relatedTerms: ['personajes arquetípicos', 'roles míticos']
    },
    {
      term: 'Umbral',
      definition: 'Frontera simbólica entre el mundo ordinario y el mundo especial',
      importance: 'important',
      relatedTerms: ['transformación', 'punto de no retorno']
    },
    {
      term: 'Elixir',
      definition: 'Don, conocimiento o poder que el héroe trae de vuelta para beneficiar su mundo',
      importance: 'important',
      relatedTerms: ['recompensa', 'transformación social']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del mundo ordinario',
      description: 'Establecer la normalidad y carencias del héroe antes de la aventura',
      timeEstimate: 20,
      difficulty: 'basic',
      tips: [
        'Buscar elementos que muestren la vida cotidiana del héroe',
        'Identificar qué le falta o necesita el protagonista',
        'Notar contrastes con el mundo especial posterior'
      ],
      commonMistakes: [
        'Confundir prólogo con mundo ordinario',
        'No identificar las carencias sutiles del héroe'
      ]
    },
    {
      order: 2,
      name: 'Rastreo de la llamada a la aventura',
      description: 'Identificar el evento o mensaje que inicia el viaje',
      timeEstimate: 15,
      difficulty: 'basic',
      tips: [
        'Puede ser externa (mensaje, evento) o interna (deseo, necesidad)',
        'A menudo coincide con el incidente incitador',
        'Buscar el momento de ruptura con la normalidad'
      ]
    },
    {
      order: 3,
      name: 'Mapeo de las 17 etapas',
      description: 'Localizar cada etapa presente en la narrativa',
      timeEstimate: 90,
      difficulty: 'intermediate',
      tips: [
        'No todas las etapas deben estar presentes',
        'Algunas etapas pueden estar combinadas o reordenadas',
        'Enfocarse en la función más que en el orden exacto'
      ]
    },
    {
      order: 4,
      name: 'Identificación de arquetipos',
      description: 'Asignar roles arquetípicos a los personajes principales',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Un personaje puede cumplir múltiples arquetipos',
        'Los arquetipos pueden cambiar durante la historia',
        'Buscar la función narrativa, no solo la apariencia'
      ]
    },
    {
      order: 5,
      name: 'Análisis de transformación',
      description: 'Examinar los cambios internos y externos del héroe',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Comparar al héroe del inicio con el del final',
        'Identificar momentos clave de cambio',
        'Considerar transformaciones psicológicas y sociales'
      ]
    },
    {
      order: 6,
      name: 'Evaluación del elixir',
      description: 'Determinar qué beneficio trae el héroe a su comunidad',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Estructura universal que resuena en todas las culturas',
    'Base psicológica profunda en arquetipos junguianos',
    'Flexible y adaptable a diversos géneros y contextos',
    'Proporciona un mapa claro para el desarrollo del personaje',
    'Conecta narrativa con procesos de transformación humana'
  ],
  
  limitations: [
    'Puede resultar formulaica si se aplica rígidamente',
    'Sesgo hacia protagonistas masculinos en ejemplos clásicos',
    'Estructura occidental-céntrica a pesar de pretensiones universales',
    'No todas las historias valiosas siguen este patrón',
    'Puede simplificar la diversidad narrativa cultural'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Joseph Campbell'],
      title: 'The Hero with a Thousand Faces',
      year: 1949,
      publisher: 'Pantheon Books',
      essential: true
    },
    {
      type: 'book',
      authors: ['Joseph Campbell'],
      title: 'The Power of Myth',
      year: 1988,
      publisher: 'Doubleday',
      essential: true
    },
    {
      type: 'book',
      authors: ['Joseph Campbell'],
      title: 'Pathways to Bliss: Mythology and Personal Transformation',
      year: 2004,
      publisher: 'New World Library',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Star Wars',
        year: 1977,
        director: 'George Lucas'
      },
      analysisExcerpt: `George Lucas aplicó conscientemente el monomito de Campbell. Luke Skywalker ejemplifica perfectamente el viaje: Mundo ordinario (granja en Tatooine), Llamada (mensaje de Leia), Rechazo inicial (debe ayudar a sus tíos), Mentor (Obi-Wan), Cruce del umbral (cantina de Mos Eisley), Pruebas (rescate de Leia, entrenamiento), Acercamiento a la cueva (Estrella de la Muerte), Ordalía (ataque final), Recompensa (destrucción de la estación), Resurrección (momento de fe usando la Fuerza), Retorno con elixir (esperanza para la rebelión).`,
      insightsGenerated: [
        'Star Wars moderniza el monomito en contexto de ciencia ficción',
        'La Fuerza funciona como elemento espiritual/mágico actualizado',
        'Lucas simplifica las 17 etapas para narrativa cinematográfica'
      ],
      methodologyApplication: 'Aplicación directa y consciente del modelo completo de Campbell',
      keyFindings: [
        'El monomito funciona efectivamente en géneros modernos',
        'Los arquetipos mantienen su poder en contextos futuristas',
        'La estructura mítica trasciende épocas y tecnologías'
      ]
    },
    {
      film: {
        title: 'The Matrix',
        year: 1999,
        director: 'The Wachowskis'
      },
      analysisExcerpt: `The Matrix reinterpreta el viaje del héroe en clave cyberpunk. Neo sigue el patrón clásico: Mundo ordinario (vida como Thomas Anderson), Llamada ("Follow the white rabbit"), Rechazo (intenta escapar de los agentes), Mentor (Morpheus), Umbral (píldora roja), Mundo especial (la verdad sobre Matrix), Pruebas (entrenamiento en artes marciales y simulaciones), Ordalía (muerte y resurrección literal), Elixir (poder para liberar a la humanidad). El film añade capas filosóficas sobre realidad y percepción al esquema mítico.`,
      insightsGenerated: [
        'El viaje del héroe se adapta a narrativas sobre realidad virtual',
        'Los arquetipos funcionan en contextos tecnológicos',
        'La muerte/renacimiento puede ser literal en ciencia ficción'
      ],
      methodologyApplication: 'Adaptación del monomito a temáticas contemporáneas de identidad digital',
      keyFindings: [
        'Campbell aplicable a anxiedades tecnológicas modernas',
        'El mentor puede guiar tanto física como epistemológicamente',
        'El elixir puede ser conocimiento además de poder'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'vogler-writer-journey',
      relationshipType: 'complementary',
      synergyDescription: 'Vogler simplifica y adapta Campbell específicamente para guionistas',
      combinedInsightPotential: 9
    },
    {
      id: 'jung-archetypes',
      relationshipType: 'complementary',
      synergyDescription: 'Jung proporciona la base psicológica de los arquetipos de Campbell',
      combinedInsightPotential: 8
    },
    {
      id: 'propp-morphology',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos identifican patrones universales pero Propp es más estructural',
      combinedInsightPotential: 7
    }
  ],
  
  digitalTools: [
    {
      name: 'Hero\'s Journey Story Circle',
      type: 'webapp',
      url: 'https://www.storylinecreator.com',
      description: 'Herramienta interactiva para mapear las etapas del viaje del héroe',
      cost: 'freemium',
      platforms: ['web']
    },
    {
      name: 'Beemgee',
      type: 'software',
      description: 'Software de desarrollo de historias con plantillas del viaje del héroe',
      cost: 'paid',
      platforms: ['web', 'iOS', 'Android']
    }
  ]
};
