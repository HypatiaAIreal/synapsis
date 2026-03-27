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

export const WOOD_IDEOLOGY_GENRE: Methodology = {
  metadata: {
    id: 'wood-ideology-genre',
    name: 'Ideología y Género',
    author: 'Robin Wood',
    year: 1970,
    category: 'genre-theory',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['psychoanalysis-basics', 'marxist-theory'],
    culturalContext: 'Crítica ideológica del cine',
    language: 'es'
  },
  
  description: `Robin Wood desarrolló una aproximación psicoanalítica-marxista a los géneros cinematográficos que reveló sus funciones ideológicas profundas. Su concepto central del "retorno de lo reprimido" explica cómo los géneros, especialmente el horror, dramatizan aquello que la sociedad burguesa debe reprimir para funcionar: sexualidad polimorfa, energía femenina, proletariado, otras culturas, niños, y la bisexualidad constitutiva. Wood analiza cómo diferentes géneros manejan estas energías reprimidas de formas específicas - el horror las materializa como monstruos, el melodrama las domestica, el western las elimina. Su trabajo conecta represiones psíquicas con opresiones sociales, mostrando cómo los géneros naturalizan ideología patriarcal-capitalista. Wood valoró el "cine incoherente" - films cuyos conflictos ideológicos no se resuelven limpiamente.`,
  
  keyConcepts: [
    {
      term: 'Retorno de lo Reprimido',
      definition: 'Lo que la sociedad niega que resurge simbólicamente en los géneros',
      importance: 'fundamental',
      relatedTerms: ['represión', 'monstruo', 'síntoma']
    },
    {
      term: 'Surplus Repression',
      definition: 'Represión socialmente innecesaria impuesta por el capitalismo-patriarcado',
      importance: 'fundamental',
      relatedTerms: ['opresión', 'ideología', 'control social']
    },
    {
      term: 'The Other',
      definition: 'Lo reprimido personificado: mujeres, proletariado, otras etnias, sexualidades alternativas',
      importance: 'fundamental',
      relatedTerms: ['alteridad', 'monstruosidad', 'marginalización']
    },
    {
      term: 'Normality',
      definition: 'Ideología dominante naturalizada como sentido común',
      importance: 'important',
      relatedTerms: ['hegemonía', 'familia nuclear', 'valores burgueses']
    },
    {
      term: 'Incoherent Text',
      definition: 'Films cuyas contradicciones ideológicas permanecen sin resolver',
      importance: 'important',
      relatedTerms: ['contradicción', 'síntoma', 'fisuras']
    },
    {
      term: 'Progressive Horror',
      definition: 'Horror que genera simpatía por lo reprimido/monstruoso',
      importance: 'important',
      relatedTerms: ['subversión', 'crítica', 'identificación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de represiones',
      description: 'Catalogar qué debe ser negado para mantener el orden social',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar energías que amenazan familia nuclear',
        'Identificar sexualidades no normativas',
        'Considerar dimensiones de clase y raza'
      ],
      commonMistakes: [
        'Simplificar la complejidad de las represiones',
        'Ignorar intersecciones entre diferentes opresiones'
      ]
    },
    {
      order: 2,
      name: 'Localización de retornos',
      description: 'Identificar cómo resurge lo reprimido en el género',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'El monstruo a menudo encarna lo reprimido',
        'Buscar momentos de exceso o ruptura',
        'Atender a lo que genera ansiedad'
      ]
    },
    {
      order: 3,
      name: 'Análisis de normalidad',
      description: 'Examinar qué se defiende como normal/natural',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar valores implícitos de protagonistas',
        'Examinar qué se presenta como deseable'
      ]
    },
    {
      order: 4,
      name: 'Examen del Otro',
      description: 'Analizar construcción y tratamiento de la alteridad',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Búsqueda de incoherencias',
      description: 'Identificar contradicciones ideológicas no resueltas',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos donde el film se contradice',
        'Identificar simpatías inesperadas'
      ]
    },
    {
      order: 6,
      name: 'Evaluación de progresividad',
      description: 'Determinar potencial crítico o conservador del film',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Análisis ideológico profundo y revelador',
    'Conecta psicoanálisis con crítica social',
    'Valora contradicciones productivas',
    'Especialmente poderoso para análisis del horror',
    'Historiza géneros en contexto capitalista',
    'Influencia duradera en estudios de género'
  ],
  
  limitations: [
    'Marco psicoanalítico puede parecer fechado',
    'A veces excesivamente determinista',
    'Heteronormatividad en trabajos tempranos',
    'Pesimismo sobre potencial del cine mainstream',
    'Menos aplicable a géneros no narrativos',
    'Requiere conocimiento teórico considerable'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Robin Wood'],
      title: 'Hollywood from Vietnam to Reagan... and Beyond',
      year: 2003,
      publisher: 'Columbia University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Andrew Britton', 'Richard Lippe', 'Tony Williams', 'Robin Wood'],
      title: 'American Nightmare: Essays on the Horror Film',
      year: 1979,
      publisher: 'Festival of Festivals',
      essential: true
    },
    {
      type: 'book',
      authors: ['Robin Wood'],
      title: 'Sexual Politics and Narrative Film',
      year: 1998,
      publisher: 'Columbia University Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Texas Chain Saw Massacre',
        year: 1974,
        director: 'Tobe Hooper'
      },
      analysisExcerpt: `Texas Chain Saw Massacre dramatiza el retorno del proletariado reprimido como familia caníbal monstruosa. La familia de trabajadores de matadero desempleados por la mecanización literalmente devora a la juventud burguesa. Lo reprimido (trabajo manual, ruralidad, pobreza) retorna con venganza sangrienta. Pero el film es "incoherente": genera horror pero también comprensión hacia los monstruos como víctimas del capitalismo. La "normalidad" (jóvenes urbanos) es banal y poco simpática. El film expone la violencia fundacional del American Dream: el canibalismo como metáfora del capitalismo devorando a sus hijos.`,
      insightsGenerated: [
        'El horror procesa ansiedades de clase usualmente invisibles',
        'Los monstruos pueden ser víctimas del sistema que los crea',
        'La violencia económica retorna como violencia literal'
      ],
      methodologyApplication: 'Análisis del horror como retorno de lo reprimido de clase',
      keyFindings: [
        'El proletariado desplazado se vuelve literalmente monstruoso',
        'El film critica tanto a monstruos como a "normalidad"',
        'El horror puede exponer violencia sistémica del capitalismo'
      ]
    },
    {
      film: {
        title: 'Get Out',
        year: 2017,
        director: 'Jordan Peele'
      },
      analysisExcerpt: `Get Out actualiza el análisis de Wood para el horror racial. Lo reprimido que retorna es la historia de violencia racial americana, específicamente la apropiación del cuerpo negro. La familia liberal blanca representa la "normalidad" que se revela monstruosa. El Otro racial (Chris) es víctima, no monstruo. El "hundimiento" literaliza la represión de la consciencia negra. El film es coherentemente progresivo: no hay ambigüedad sobre dónde están las simpatías. La represión liberal ("No veo color") se expone como más insidiosa que el racismo abierto. El género permite hacer visible lo ideológicamente reprimido.`,
      insightsGenerated: [
        'El horror contemporáneo puede actualizar análisis de Wood',
        'La represión racial opera similarmente a la represión de clase',
        'El liberalismo puede ser más monstruoso que el conservadurismo explícito'
      ],
      methodologyApplication: 'Extensión del modelo a represiones raciales contemporáneas',
      keyFindings: [
        'El modelo de Wood sigue vigente con actualizaciones',
        'Nuevas formas de horror revelan nuevas represiones',
        'El género evoluciona con las ansiedades sociales'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'clover-horror-gender',
      relationshipType: 'hierarchical',
      synergyDescription: 'Clover desarrolla aspectos de género que Wood inició',
      combinedInsightPotential: 9
    },
    {
      id: 'grant-genre-theory',
      relationshipType: 'parallel',
      synergyDescription: 'Grant comparte interés ideológico pero con menos psicoanálisis',
      combinedInsightPotential: 8
    },
    {
      id: 'creed-monstrous-feminine',
      relationshipType: 'complementary',
      synergyDescription: 'Creed expande análisis de Wood sobre género y monstruosidad',
      combinedInsightPotential: 9
    }
  ]
};
