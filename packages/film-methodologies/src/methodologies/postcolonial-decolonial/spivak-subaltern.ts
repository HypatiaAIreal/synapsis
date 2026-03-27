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

export const SPIVAK_SUBALTERN: Methodology = {
  metadata: {
    id: 'spivak-subaltern',
    name: '¿Puede Hablar el Subalterno?',
    author: 'Gayatri Spivak',
    year: 1988,
    category: 'postcolonial-decolonial',
    complexity: 'expert',
    timeToLearn: 50,
    prerequisities: ['deconstruction', 'marxism', 'feminism'],
    culturalContext: 'Feminismo poscolonial deconstructivo',
    language: 'es'
  },
  
  description: `Gayatri Spivak planteó una de las preguntas más perturbadoras para la representación poscolonial: ¿puede el subalterno hablar? Su respuesta - que el subalterno como tal no puede hablar dentro de los circuitos hegemónicos de representación - complica radicalmente el proyecto de "dar voz" en el cine. Spivak analiza cómo los intentos benevolentes de representar al subalterno a menudo lo silencian más al traducir su diferencia a categorías dominantes. Su concepto de "violencia epistémica" describe cómo el conocimiento colonial borra formas de saber subalternas. Para el cine, esto significa examinar no solo quién es representado sino las condiciones mismas de representabilidad. Spivak critica el "esencialismo estratégico" y su trabajo sobre la subalterna femenina revela la doble colonización de género e imperio.`,
  
  keyConcepts: [
    {
      term: 'Subalterno',
      definition: 'Quien no puede hablar/ser oído dentro de los circuitos hegemónicos de poder',
      importance: 'fundamental',
      relatedTerms: ['subalternidad', 'silencio estructural']
    },
    {
      term: 'Violencia Epistémica',
      definition: 'Destrucción de formas de conocimiento y marcos interpretativos subalternos',
      importance: 'fundamental',
      relatedTerms: ['epistemicidio', 'colonialidad del saber']
    },
    {
      term: 'Representación (Vertreten/Darstellen)',
      definition: 'Distinción entre representación política (hablar por) y estética (retratar)',
      importance: 'fundamental',
      relatedTerms: ['mediación', 'advocacy']
    },
    {
      term: 'Esencialismo Estratégico',
      definition: 'Uso táctico pero peligroso de identidades esencializadas para acción política',
      importance: 'important',
      relatedTerms: ['identidad', 'estrategia política']
    },
    {
      term: 'Doble Colonización',
      definition: 'Opresión interseccional de género e imperio sobre mujeres subalternas',
      importance: 'important',
      relatedTerms: ['interseccionalidad', 'patriarcado colonial']
    },
    {
      term: 'Aporía',
      definition: 'Imposibilidad productiva que no debe resolverse sino habitarse',
      importance: 'important',
      relatedTerms: ['paradoja', 'indecidibilidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de silencios estructurales',
      description: 'Localizar quiénes no pueden hablar o ser oídos en el film',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar ausencias significativas más que presencias',
        'Identificar quién habla por quién',
        'Notar mediaciones y traducciones de voz'
      ],
      commonMistakes: [
        'Confundir silencio elegido con imposibilidad de hablar',
        'Asumir que dar líneas de diálogo es dar voz'
      ]
    },
    {
      order: 2,
      name: 'Análisis de representación dual',
      description: 'Distinguir entre representación política y estética',
      timeEstimate: 45,
      difficulty: 'expert',
      tips: [
        'Examinar quién tiene autoridad para hablar por otros',
        'Analizar cómo la representación estética implica política'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de violencia epistémica',
      description: 'Identificar destrucción o traducción reductiva de saberes',
      timeEstimate: 60,
      difficulty: 'expert',
      tips: [
        'Buscar momentos donde conocimiento local es invalidado',
        'Identificar imposición de marcos interpretativos dominantes',
        'Notar traducciones que traicionan'
      ]
    },
    {
      order: 4,
      name: 'Examen de traducciones',
      description: 'Analizar cómo se traducen las diferencias subalternas',
      timeEstimate: 60,
      difficulty: 'expert'
    },
    {
      order: 5,
      name: 'Identificación de doble colonización',
      description: 'Buscar intersecciones de opresiones múltiples',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis de aporías representacionales',
      description: 'Examinar imposibilidades productivas en la representación',
      timeEstimate: 90,
      difficulty: 'expert'
    }
  ],
  
  strengths: [
    'Rigor teórico excepcional sobre problemática de representación',
    'Evita romantización del subalterno',
    'Análisis sofisticado de violencias epistémicas',
    'Atención a género en contextos coloniales',
    'Cuestiona proyectos bienintencionados de "dar voz"'
  ],
  
  limitations: [
    'Complejidad extrema puede paralizar acción práctica',
    'Densidad teórica requiere formación especializada',
    'Pesimismo sobre posibilidades de agencia subalterna',
    'Puede ser elitista en su inaccesibilidad',
    'Riesgo de convertir aporía en callejón sin salida'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Gayatri Spivak'],
      title: 'Can the Subaltern Speak?',
      year: 1988,     
      publisher: 'University of Illinois Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gayatri Spivak'],
      title: 'A Critique of Postcolonial Reason',
      year: 1999,
      publisher: 'Harvard University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gayatri Spivak'],
      title: 'Death of a Discipline',
      year: 2003,
      publisher: 'Columbia University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Stephen Morton'],
      title: 'Gayatri Chakravorty Spivak',
      year: 2003,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Water',
        year: 2005,
        director: 'Deepa Mehta'
      },
      analysisExcerpt: `Water intenta dar voz a viudas subalternas pero ejemplifica las aporias que Spivak identifica. Las viudas "hablan" pero a través de estructuras narrativas occidentales (melodrama) para audiencia global. Su subalternidad se traduce a términos feministas liberales comprensibles. La violencia epistémica ocurre al presentar su opresión como problema del "pasado" indio que requiere modernización. La directora canadiense-india media su experiencia. El film es hermoso pero confirma que el subalterno solo puede "hablar" cuando deja de ser subalterno.`,
      insightsGenerated: [
        'La belleza estética puede ser forma de violencia epistémica',
        'Dar voz requiere traducción que inevitablemente traiciona',
        'El feminismo global puede silenciar especificidades locales'
      ],
      methodologyApplication: 'Análisis de las aporías de representación subalterna',
      keyFindings: [
        'Los intentos de representar al subalterno revelan imposibilidades estructurales',
        'La traducción para audiencias globales ejerce violencia epistémica',
        'El subalterno "habla" solo cuando ya no es subalterno'
      ]
    },
    {
      film: {
        title: 'Roma',
        year: 2018,
        director: 'Alfonso Cuarón'
      },
      analysisExcerpt: `Roma presenta el dilema de representación subalterna. Cleo, trabajadora doméstica indígena, es central pero mayormente silenciosa. Cuarón (clase media) representa memorias donde ella era subalterna. Su silencio es respetado pero también mantiene su subalternidad. Los momentos más poderosos son sus acciones, no palabras. El mixteco no se subtitula, preservando opacidad. El film habita la aporía: no pretende que Cleo "hable" en sentido spivakiano, reconociendo los límites de representación.`,
      insightsGenerated: [
        'El silencio puede ser más honesto que el falso dar voz',
        'Reconocer límites de representación es éticamente necesario',
        'La opacidad lingüística puede resistir violencia epistémica'
      ],
      methodologyApplication: 'Análisis de estrategias que reconocen límites representacionales',
      keyFindings: [
        'Algunos films reconocen la aporía sin pretender resolverla',
        'El respeto al silencio puede ser más ético que forzar habla',
        'La subalternidad persiste incluso en representaciones empáticas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'gramsci-hegemony',
      relationshipType: 'complementary',
      synergyDescription: 'Spivak desarrolla el concepto gramsciano de subalterno con perspectiva deconstructiva',
      combinedInsightPotential: 8
    },
    {
      id: 'derrida-deconstruction',
      relationshipType: 'complementary',
      synergyDescription: 'Spivak aplica deconstrucción derridiana a problemáticas poscoloniales',
      combinedInsightPotential: 9
    },
    {
      id: 'butler-performativity',
      relationshipType: 'parallel',
      synergyDescription: 'Butler y Spivak comparten interés en cómo sujetos son constituidos discursivamente',
      combinedInsightPotential: 8
    }
  ]
};
