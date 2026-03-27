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

export const STUDLAR_MASOCHISM: Methodology = {
  metadata: {
    id: 'studlar-masochism',
    name: 'Masoquismo y Cine',
    author: 'Gaylyn Studlar',
    year: 1985,
    category: 'feminist-gender',
    complexity: 'advanced',
    timeToLearn: 30,
    prerequisities: ['psychoanalysis', 'deleuze-masochism'],
    culturalContext: 'Teoría feminista psicoanalítica alternativa',
    language: 'es'
  },
  
  description: `Gaylyn Studlar desarrolló una teoría alternativa del placer visual cinematográfico basada en el masoquismo más que en el sadismo, desafiando las teorías dominantes de Mulvey. Basándose en Gilles Deleuze, Studlar argumenta que el placer cinematográfico deriva de una posición masoquista pre-edípica donde el espectador busca fusión con la imagen maternal idealizada. En lugar de control sádico sobre el objeto, el masoquismo busca sumisión placentera a la imagen. Studlar analiza el cine de Josef von Sternberg y Marlene Dietrich como paradigmático de esta estética masoquista: la mujer como ideal inalcanzable, exceso visual, suspensión temporal, y placer en la espera. Su teoría revaloriza géneros "femeninos" como el melodrama y explica el placer en la identificación con posiciones aparentemente pasivas.`,
  
  keyConcepts: [
    {
      term: 'Masochistic Aesthetic',
      definition: 'Placer en la sumisión a la imagen más que control sobre ella',
      importance: 'fundamental',
      relatedTerms: ['sumisión placentera', 'estética masoquista']
    },
    {
      term: 'Pre-Oedipal',
      definition: 'Fase anterior a la ley paterna, dominada por la madre',
      importance: 'fundamental',
      relatedTerms: ['pre-edípico', 'fase maternal']
    },
    {
      term: 'Oral Mother',
      definition: 'Madre todopoderosa pre-edípica idealizada en la pantalla',
      importance: 'fundamental',
      relatedTerms: ['madre oral', 'imago maternal']
    },
    {
      term: 'Suspension',
      definition: 'Placer en la demora y espera más que en la satisfacción',
      importance: 'important',
      relatedTerms: ['suspensión', 'dilación']
    },
    {
      term: 'Dream Screen',
      definition: 'La pantalla como superficie maternal envolvente',
      importance: 'important',
      relatedTerms: ['pantalla-sueño', 'superficie maternal']
    },
    {
      term: 'Disavowal',
      definition: 'Mecanismo de "sé pero aun así" característico del masoquismo',
      importance: 'important',
      relatedTerms: ['desmentida', 'renegación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de estética masoquista',
      description: 'Buscar elementos de exceso visual, suspensión, adoración',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Observar predominancia de contemplación sobre acción',
        'Buscar exceso decorativo y visual',
        'Notar placer en la espera y demora'
      ],
      commonMistakes: [
        'Confundir masoquismo con simple pasividad',
        'Ignorar el placer activo en la sumisión'
      ]
    },
    {
      order: 2,
      name: 'Búsqueda de figuras maternales idealizadas',
      description: 'Identificar mujeres poderosas, distantes, idealizadas',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'No necesariamente madres literales',
        'Buscar figuras de poder y distancia',
        'Observar adoración más que posesión'
      ]
    },
    {
      order: 3,
      name: 'Análisis de suspension',
      description: 'Examinar cómo se demora o suspende la satisfacción',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Examen de contratos masoquistas',
      description: 'Identificar acuerdos tácitos de sumisión/dominación',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis de dream screen',
      description: 'Examinar cómo la pantalla funciona como superficie maternal',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de disavowal',
      description: 'Buscar mecanismos de saber pero no aceptar',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Alternativa al modelo sádico dominante de Mulvey',
    'Revaloriza posiciones espectatoriales "pasivas"',
    'Explica placer en géneros melodramáticos',
    'Útil para analizar cine de autor contemplativo',
    'Abre espacios para placeres no normativos'
  ],
  
  limitations: [
    'Dependencia heavy de psicoanálisis controvertido',
    'Puede romantizar sumisión problemáticamente',
    'Aplicabilidad limitada a ciertos tipos de cine',
    'Complejidad teórica alta',
    'Menos atención a contextos sociales/políticos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Gaylyn Studlar'],
      title: 'In the Realm of Pleasure: Von Sternberg, Dietrich, and the Masochistic Aesthetic',
      year: 1988,
      publisher: 'University of Illinois Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gaylyn Studlar'],
      title: 'This Mad Masquerade: Stardom and Masculinity in the Jazz Age',
      year: 1996,
      publisher: 'Columbia University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Gilles Deleuze'],
      title: 'Coldness and Cruelty',
      year: 1991,
      publisher: 'Zone Books',
      essential: true
    },
    {
      type: 'article',
      authors: ['Gaylyn Studlar'],
      title: 'Masochism and the Perverse Pleasures of the Cinema',
      year: 1985,
      journal: 'Quarterly Review of Film Studies',      
      pages: '267-282',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Scarlet Empress',
        year: 1934,
        director: 'Josef von Sternberg'
      },
      analysisExcerpt: `The Scarlet Empress representa el apogeo de la estética masoquista Sternberg-Dietrich. Catherine/Dietrich se transforma en figura maternal todopoderosa, inalcanzable pese a su aparente disponibilidad sexual. El exceso visual extremo (decorados barrocos, veladuras, sombras) crea un mundo onírico pre-edípico. La narrativa constantemente suspende resoluciones en favor de contemplación extática. Los hombres se someten gozosamente a su poder, buscando humillación más que conquista. La cámara adora a Dietrich sin pretender poseerla. El espectador experimenta placer en la sumisión a esta visión imposible.`,
      insightsGenerated: [
        'El exceso visual crea espacio onírico pre-edípico',
        'El poder femenino es adorado, no temido o castigado',
        'La suspensión narrativa intensifica el placer masoquista'
      ],
      methodologyApplication: 'Análisis de todos los elementos de estética masoquista',
      keyFindings: [
        'Sternberg-Dietrich perfeccionan el cine masoquista',
        'El masoquismo ofrece placer alternativo al sadismo visual',
        'La adoración de la mujer poderosa no requiere su castigo'
      ]
    },
    {
      film: {
        title: 'Carol',
        year: 2015,
        director: 'Todd Haynes'
      },
      analysisExcerpt: `Carol actualiza la estética masoquista para el cine queer contemporáneo. Carol funciona como figura maternal idealizada para Therese: mayor, más sofisticada, aparentemente inalcanzable. El film privilegia la contemplación (largas miradas, silencios) sobre acción. La suspensión domina: demoras en confesiones, toques, consumación. La cinematografía (filtros difusos, ventanas empañadas) crea el dream screen que separa y une. Therese busca sumisión a Carol más que posesión. El placer reside en la espera, la anticipación, el diferimiento. Incluso consumado el deseo, permanece la distancia adorativa.`,
      insightsGenerated: [
        'El cine queer puede emplear estética masoquista productivamente',
        'La diferencia de edad/clase intensifica la dinámica masoquista',
        'La suspensión es más erótica que la satisfacción'
      ],
      methodologyApplication: 'Análisis de masoquismo en contexto queer contemporáneo',
      keyFindings: [
        'El masoquismo trasciende dinámicas heterosexuales',
        'Haynes conscientemente emplea estética masoquista',
        'El melodrama queer encuentra en el masoquismo su modo ideal'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'deleuze-masochism',
      relationshipType: 'complementary',
      synergyDescription: 'Studlar aplica la teoría del masoquismo de Deleuze al cine',
      combinedInsightPotential: 9
    },
    {
      id: 'mulvey-male-gaze',
      relationshipType: 'dialectical',
      synergyDescription: 'Studlar ofrece alternativa masoquista al sadismo visual de Mulvey',
      combinedInsightPotential: 9
    },
    {
      id: 'silverman-male-subjectivity',
      relationshipType: 'complementary',
      synergyDescription: 'Silverman también explora alternativas a la masculinidad dominante',
      combinedInsightPotential: 8
    }
  ]
};
