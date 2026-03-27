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

export const KAPLAN_WOMEN_FILM: Methodology = {
  metadata: {
    id: 'kaplan-women-film',
    name: 'Mujeres y Film',
    author: 'E. Ann Kaplan',
    year: 1983,
    category: 'feminist-gender',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['feminist-theory', 'psychoanalysis'],
    culturalContext: 'Feminismo cinematográfico institucional',
    language: 'es'
  },
  
  description: `E. Ann Kaplan fue pionera en institucionalizar los estudios feministas del cine, editando antologías fundamentales y desarrollando marcos teóricos que conectan psicoanálisis, feminismo y análisis cultural. Su trabajo examina la "mirada imperial" y cómo el cine occidental construye al Otro racial y genérico simultáneamente. Kaplan analizó el "maternal melodrama" como sitio de negociación de ansiedades sobre maternidad y feminidad. Su concepto de "looking relations" examina no solo quién mira a quién, sino las estructuras de poder que organizan estas miradas. Kaplan también fue crucial en introducir perspectivas psicoanalíticas francesas al feminismo cinematográfico angloparlante. Su trabajo posterior sobre trauma y cine exploró cómo las películas procesan traumas colectivos, especialmente relacionados con género.`,
  
  keyConcepts: [
    {
      term: 'Imperial Gaze',
      definition: 'Mirada que construye simultáneamente al Otro racial y de género',
      importance: 'fundamental',
      relatedTerms: ['mirada colonial', 'orientalismo']
    },
    {
      term: 'Looking Relations',
      definition: 'Estructuras de poder que organizan quién puede mirar a quién',
      importance: 'fundamental',
      relatedTerms: ['relaciones de mirada', 'poder visual']
    },
    {
      term: 'Maternal Melodrama',
      definition: 'Subgénero que negocia ansiedades sobre maternidad y feminidad',
      importance: 'important',
      relatedTerms: ['melodrama maternal', 'maternidad']
    },
    {
      term: 'Trauma Cinema',
      definition: 'Cine que procesa traumas colectivos, especialmente de género',
      importance: 'important',
      relatedTerms: ['cine de trauma', 'memoria colectiva']
    },
    {
      term: 'Cross-Cultural Analysis',
      definition: 'Análisis feminista que considera diferencias culturales globales',
      importance: 'important',
      relatedTerms: ['feminismo transnacional', 'análisis intercultural']
    },
    {
      term: 'Psychoanalytic Feminism',
      definition: 'Síntesis de teoría psicoanalítica y feminista',
      importance: 'important',
      relatedTerms: ['feminismo psicoanalítico', 'síntesis teórica']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de looking relations',
      description: 'Mapear las estructuras de poder visual en el film',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Analizar quién mira con impunidad',
        'Notar miradas prohibidas o castigadas',
        'Considerar intersecciones de raza y género'
      ],
      commonMistakes: [
        'Limitar análisis solo a género sin considerar raza',
        'Ignorar miradas entre mujeres'
      ]
    },
    {
      order: 2,
      name: 'Análisis de imperial gaze',
      description: 'Examinar construcción simultánea de Otro racial y de género',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar exotización de mujeres racializadas',
        'Analizar jerarquías entre mujeres',
        'Considerar contexto colonial/postcolonial'
      ]
    },
    {
      order: 3,
      name: 'Examen de maternal melodrama',
      description: 'Si aplica, analizar representación de maternidad',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Búsqueda de trauma markers',
      description: 'Identificar procesamiento de traumas colectivos',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis cross-cultural',
      description: 'Considerar diferencias culturales en representación de género',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis teórica',
      description: 'Integrar múltiples marcos teóricos en análisis',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Enfoque comprehensivo que integra múltiples perspectivas',
    'Atención pionera a intersección de raza y género',
    'Puente entre teoría francesa y angloamericana',
    'Consideración de contextos globales y culturales',
    'Influencia institucional en establecer campo de estudio'
  ],
  
  limitations: [
    'A veces demasiado ecléctica, falta coherencia teórica',
    'Dependencia del psicoanálisis puede ser limitante',
    'Menos innovadora teóricamente que otras feministas',
    'Puede homogeneizar diferencias culturales',
    'Perspectiva más académica que activista'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['E. Ann Kaplan'],
      title: 'Women and Film: Both Sides of the Camera',
      year: 1983,
      publisher: 'Methuen',
      essential: true
    },
    {
      type: 'book',
      authors: ['E. Ann Kaplan'],
      title: 'Looking for the Other: Feminism, Film, and the Imperial Gaze',
      year: 1997,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['E. Ann Kaplan'],
      title: 'Motherhood and Representation',
      year: 1992,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['E. Ann Kaplan'],
      title: 'Trauma Culture: The Politics of Terror and Loss in Media and Literature',
      year: 2005,
      publisher: 'Rutgers University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Piano',
        year: 1993,
        director: 'Jane Campion'
      },
      analysisExcerpt: `The Piano ejemplifica las preocupaciones de Kaplan sobre imperial gaze y looking relations. Ada, mujer blanca muda, es intercambiada entre hombres blancos en Nueva Zelanda colonial. Los Maorí son representados como Otros exóticos que facilitan el despertar sexual de Ada. Las looking relations son complejas: Ada no puede hablar pero su mirada es poderosa; Baines la mira voyeurísticamente pero también es objetificado; Stewart representa la mirada colonial patriarcal. El film negocia entre crítica y reproducción del imperial gaze. El piano funciona como voz sustituta de Ada, pero también como objeto de intercambio colonial.`,
      insightsGenerated: [
        'El imperial gaze opera incluso en films aparentemente feministas',
        'Las mujeres blancas pueden ser simultáneamente víctimas y cómplices del colonialismo',
        'La mudez literal dramatiza el silenciamiento simbólico femenino'
      ],
      methodologyApplication: 'Análisis interseccional de género, raza y colonialismo',
      keyFindings: [
        'El feminismo blanco puede reproducir violencias coloniales',
        'Las looking relations son multidireccionales y contradictorias',
        'La liberación de unas puede depender de la opresión de otras'
      ]
    },
    {
      film: {
        title: 'Still Alice',
        year: 2014,
        director: 'Richard Glatzer, Wash Westmoreland'
      },
      analysisExcerpt: `Still Alice representa el trauma cinema analizado por Kaplan, específicamente el trauma de perder identidad a través del Alzheimer. Alice, lingüista brillante, pierde gradualmente el lenguaje mismo. El maternal melodrama emerge en las relaciones con sus hijas, especialmente Lydia. Las looking relations cambian a medida que Alice pasa de sujeto mirante (profesora) a objeto de miradas médicas y familiares. El film procesa ansiedades culturales sobre envejecimiento femenino, donde las mujeres "desaparecen" doblemente: por edad y por enfermedad. El trauma es tanto individual como colectivo en una sociedad que envejece.`,
      insightsGenerated: [
        'El Alzheimer como metáfora de invisibilización femenina en la vejez',
        'El maternal melodrama persiste incluso en narrativas contemporáneas',
        'El trauma del envejecimiento es específicamente generizado'
      ],
      methodologyApplication: 'Análisis de trauma, maternidad y envejecimiento femenino',
      keyFindings: [
        'El cine procesa traumas colectivos sobre pérdida cognitiva',
        'Las mujeres enfrentan doble estigma de edad y enfermedad',
        'La identidad profesional no protege de la invisibilización por género'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'spivak-subaltern',
      relationshipType: 'complementary',
      synergyDescription: 'Ambas analizan la intersección de género y colonialismo',
      combinedInsightPotential: 9
    },
    {
      id: 'modleski-women-genres',
      relationshipType: 'parallel',
      synergyDescription: 'Ambas analizan géneros dirigidos a mujeres',
      combinedInsightPotential: 8
    },
    {
      id: 'creed-monstrous-feminine',
      relationshipType: 'complementary',
      synergyDescription: 'Creed desarrolla aspectos del horror que Kaplan toca tangencialmente',
      combinedInsightPotential: 7
    }
  ]
};
