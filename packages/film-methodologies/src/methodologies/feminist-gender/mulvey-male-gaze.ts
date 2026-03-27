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

export const MULVEY_MALE_GAZE: Methodology = {
  metadata: {
    id: 'mulvey-male-gaze',
    name: 'Visual Pleasure and Narrative Cinema',
    author: 'Laura Mulvey',
    year: 1975,
    category: 'feminist-gender',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['basic-psychoanalysis', 'film-theory'],
    culturalContext: 'Feminismo psicoanalítico británico',
    language: 'es'
  },
  
  description: `Laura Mulvey revolucionó la teoría cinematográfica con su ensayo seminal que introdujo el concepto del "male gaze" (mirada masculina), transformando para siempre cómo entendemos la representación de género en el cine. Utilizando herramientas psicoanalíticas, Mulvey argumentó que el cine narrativo clásico está estructurado por y para el placer visual masculino, posicionando a las mujeres como objetos pasivos de contemplación ("to-be-looked-at-ness") mientras los hombres son sujetos activos que avanzan la narrativa. Identificó tres miradas interrelacionadas: la de la cámara, la del público, y la de los personajes masculinos dentro del film. Su análisis reveló cómo el aparato cinematográfico reproduce estructuras patriarcales de ver y ser visto, donde la mujer funciona como espectáculo erótico que detiene la narrativa.`,
  
  keyConcepts: [
    {
      term: 'Male Gaze',
      definition: 'Mirada masculina que estructura la narrativa y posiciona a la mujer como objeto',
      importance: 'fundamental',
      relatedTerms: ['mirada patriarcal', 'objetificación']
    },
    {
      term: 'To-be-looked-at-ness',
      definition: 'Cualidad de ser-mirada asignada a las mujeres en el cine',
      importance: 'fundamental',
      relatedTerms: ['espectáculo', 'objetificación visual']
    },
    {
      term: 'Scopophilia',
      definition: 'Placer voyeurista de mirar, especialmente cuerpos femeninos',
      importance: 'fundamental',
      relatedTerms: ['voyeurismo', 'placer visual']
    },
    {
      term: 'Three Looks',
      definition: 'Mirada de la cámara, del público y de personajes masculinos',
      importance: 'important',
      relatedTerms: ['aparato cinematográfico', 'identificación']
    },
    {
      term: 'Active/Passive',
      definition: 'División binaria donde masculino=activo/mirante, femenino=pasivo/mirado',
      importance: 'important',
      relatedTerms: ['binarismo de género', 'agency']
    },
    {
      term: 'Castration Anxiety',
      definition: 'Ansiedad masculina ante la diferencia sexual femenina',
      importance: 'important',
      relatedTerms: ['psicoanálisis', 'fetichismo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de las tres miradas',
      description: 'Analizar cómo operan la cámara, audiencia y personajes en la construcción visual',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Observar posiciones de cámara y ángulos sobre personajes femeninos',
        'Notar con quién se identifica la cámara',
        'Analizar quién mira a quién dentro del film'
      ],
      commonMistakes: [
        'Ignorar momentos donde mujeres tienen la mirada',
        'No considerar contexto histórico del film'
      ]
    },
    {
      order: 2,
      name: 'Análisis active/passive',
      description: 'Examinar quién impulsa la acción narrativa vs. quién es espectáculo',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Mapear qué personajes toman decisiones narrativas',
        'Identificar momentos donde la narrativa se detiene para contemplación'
      ]
    },
    {
      order: 3,
      name: 'Examen de to-be-looked-at-ness',
      description: 'Identificar momentos de espectacularización femenina',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar números musicales, escenas de vestirse/desvestirse',
        'Analizar iluminación y encuadre de cuerpos femeninos'
      ]
    },
    {
      order: 4,
      name: 'Análisis de disrupciones narrativas',
      description: 'Localizar cuándo la presencia femenina interrumpe el flujo narrativo',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de mecanismos defensivos',
      description: 'Buscar fetichización o investigación/castigo de personajes femeninos',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'La fetichización convierte a la mujer en objeto tranquilizador',
        'El sadismo investiga y castiga la diferencia femenina'
      ]
    },
    {
      order: 6,
      name: 'Evaluación de resistencias',
      description: 'Identificar momentos que desafían o subvierten el male gaze',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Reveló estructuras de poder visual antes invisibles',
    'Herramienta analítica poderosa y accesible',
    'Conectó psicoanálisis con crítica política feminista',
    'Influyó profundamente en toda la teoría cinematográfica posterior',
    'Aplicable a múltiples géneros y períodos cinematográficos'
  ],
  
  limitations: [
    'Binarismo de género rígido que excluye otras identidades',
    'Ignora la experiencia de espectadoras femeninas',
    'Determinismo psicoanalítico cuestionable',
    'Heteronormatividad implícita en el modelo',
    'Basado principalmente en cine clásico de Hollywood'
  ],
  
  bibliography: [
    {
      type: 'article',
      authors: ['Laura Mulvey'],
      title: 'Visual Pleasure and Narrative Cinema',
      year: 1975,
      journal: 'Screen',      
      pages: '6-18',
      essential: true
    },
    {
      type: 'article',
      authors: ['Laura Mulvey'],
      title: 'Afterthoughts on "Visual Pleasure and Narrative Cinema"',
      year: 1981,
      journal: 'Framework',      
      pages: '12-15',
      essential: true
    },
    {
      type: 'book',
      authors: ['Laura Mulvey'],
      title: 'Fetishism and Curiosity',
      year: 1996,
      publisher: 'BFI/Indiana University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Laura Mulvey'],
      title: 'Death 24x a Second: Stillness and the Moving Image',
      year: 2006,
      publisher: 'Reaktion Books',
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
      analysisExcerpt: `Rear Window es el ejemplo paradigmático de Mulvey. Jeff (James Stewart) encarna la mirada masculina voyeurista, mirando a través de su teleobjetivo/cámara. Lisa (Grace Kelly) inicialmente existe como objeto de contemplación, introducida mediante glamurosos close-ups mientras Jeff mantiene el control visual. La película literaliza las tres miradas: Jeff mira (personaje), su cámara/teleobjetivo mira (aparato), y nosotros miramos con él (audiencia). Sin embargo, Lisa gradualmente gana agencia cuando cruza al otro lado y se convierte en sujeto activo de la investigación.`,
      insightsGenerated: [
        'El film reflexiona sobre su propio voyeurismo cinematográfico',
        'Lisa transiciona de objeto pasivo a sujeto activo',
        'La inmovilidad de Jeff feminiza parcialmente su posición'
      ],
      methodologyApplication: 'Identificación de las tres miradas y análisis de la transformación active/passive',
      keyFindings: [
        'Hitchcock simultáneamente ejemplifica y critica el male gaze',
        'La agencia femenina emerge cuando Lisa adopta la mirada investigativa',
        'El film anticipa su propia crítica feminista'
      ]
    },
    {
      film: {
        title: 'Wonder Woman',
        year: 2017,
        director: 'Patty Jenkins'
      },
      analysisExcerpt: `Wonder Woman intenta subvertir el male gaze tradicional pero con resultados mixtos. Diana es presentada como sujeto activo: ella mira, actúa y dirige la narrativa. La cámara evita la fragmentación típica del cuerpo femenino y mantiene encuadres que enfatizan su poder más que su sexualidad. Sin embargo, el diseño de vestuario y ciertas escenas (como la de probarse ropa) reintroducen elementos de to-be-looked-at-ness. El film negocia entre empoderamiento femenino y convenciones del género de superhéroes que tradicionalmente objetifican.`,
      insightsGenerated: [
        'La dirección femenina puede alterar patrones del male gaze',
        'Los géneros cinematográficos llevan incorporadas convenciones de género',
        'El empoderamiento visual no elimina completamente la objetificación'
      ],
      methodologyApplication: 'Análisis de intentos de subversión y persistencia del male gaze',
      keyFindings: [
        'El female gaze no es simplemente la inversión del male gaze',
        'Las convenciones genéricas pueden perpetuar estructuras patriarcales',
        'La representación progresista requiere cambios en múltiples niveles'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'de-lauretis-technologies',
      relationshipType: 'complementary',
      synergyDescription: 'De Lauretis expande el análisis de Mulvey hacia una teoría más amplia de construcción de género',
      combinedInsightPotential: 9
    },
    {
      id: 'hooks-oppositional-gaze',
      relationshipType: 'complementary',
      synergyDescription: 'hooks critica y expande a Mulvey incluyendo raza y espectadoras marginalizadas',
      combinedInsightPotential: 9
    },
    {
      id: 'doane-masquerade',
      relationshipType: 'complementary',
      synergyDescription: 'Doane desarrolla estrategias de resistencia femenina al male gaze',
      combinedInsightPotential: 8
    }
  ]
};
