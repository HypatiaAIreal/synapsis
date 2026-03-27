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

export const WILLIAMS_BODY_GENRES: Methodology = {
  metadata: {
    id: 'williams-body-genres',
    name: 'Cuerpos en Pantalla',
    author: 'Linda Williams',
    year: 1989,
    category: 'feminist-gender',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['genre-theory', 'affect-theory'],
    culturalContext: 'Estudios culturales feministas',
    language: 'es'
  },
  
  description: `Linda Williams revolucionó el estudio de géneros corporales "bajos" - pornografía, horror y melodrama - argumentando que estos "body genres" provocan respuestas físicas involuntarias (excitación, miedo, llanto) y han sido marginalizados precisamente por su asociación con lo femenino y lo corporal. Williams analiza cómo estos géneros ponen en escena "cuerpos en éxtasis" - cuerpos fuera de control, especialmente femeninos - para producir sensaciones corporales en la audiencia. Su trabajo desmantela jerarquías culturales mostrando la sofisticación de estos géneros supuestamente "primitivos". Williams desarrolló el concepto de "on/scenity" (lo que puede mostrarse en pantalla en cada momento histórico) para analizar cómo cambian los límites de la representación.`,
  
  keyConcepts: [
    {
      term: 'Body Genres',
      definition: 'Pornografía, horror y melodrama como géneros que provocan respuesta física',
      importance: 'fundamental',
      relatedTerms: ['géneros corporales', 'géneros bajos']
    },
    {
      term: 'Bodies in Excess',
      definition: 'Cuerpos en pantalla que pierden control (orgasmo, terror, llanto)',
      importance: 'fundamental',
      relatedTerms: ['éxtasis', 'exceso corporal']
    },
    {
      term: 'On/scenity',
      definition: 'Lo que es culturalmente mostrable en pantalla en cada época',
      importance: 'fundamental',
      relatedTerms: ['obscenidad', 'límites de representación']
    },
    {
      term: 'Melodramatic Mode',
      definition: 'Modo fundamental del cine americano, no solo un género',
      importance: 'important',
      relatedTerms: ['modo melodramático', 'exceso emocional']
    },
    {
      term: 'Fantasy Structures',
      definition: 'Organización temporal del deseo en cada género corporal',
      importance: 'important',
      relatedTerms: ['fantasía', 'temporalidad del deseo']
    },
    {
      term: 'Sensation Production',
      definition: 'Cómo los films producen respuestas corporales en audiencias',
      importance: 'important',
      relatedTerms: ['afecto', 'sensación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del body genre',
      description: 'Clasificar si el film pertenece o mezcla géneros corporales',
      timeEstimate: 20,
      difficulty: 'basic',
      tips: [
        'Buscar momentos diseñados para respuesta física',
        'Los géneros pueden mezclarse o hibridarse',
        'Considerar respuesta emocional como corporal'
      ],
      commonMistakes: [
        'Limitar análisis solo a ejemplos puros del género',
        'Ignorar elementos corporales en films "serios"'
      ]
    },
    {
      order: 2,
      name: 'Análisis de bodies in excess',
      description: 'Identificar momentos de pérdida de control corporal',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Examinar rostros en close-up durante clímax',
        'Notar sincronía entre cuerpos en pantalla y audiencia'
      ]
    },
    {
      order: 3,
      name: 'Examen de on/scenity',
      description: 'Analizar qué se muestra/oculta según época',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Comparar con normas de representación de la época',
        'Identificar lo que se sugiere vs. lo que se muestra'
      ]
    },
    {
      order: 4,
      name: 'Análisis de fantasy structures',
      description: 'Examinar organización temporal del deseo/miedo/pérdida',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Pornografía: a tiempo; Horror: demasiado pronto; Melodrama: demasiado tarde'
      ]
    },
    {
      order: 5,
      name: 'Estudio del modo melodramático',
      description: 'Identificar elementos melodramáticos más allá del género',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación de sensation production',
      description: 'Analizar técnicas para producir respuesta corporal',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Revaloriza géneros despreciados por su asociación con lo femenino',
    'Análisis innovador de la dimensión corporal del cine',
    'Conecta forma cinematográfica con respuesta física',
    'Historiza cambios en representación corporal',
    'Desmantela jerarquías culturales elitistas'
  ],
  
  limitations: [
    'Puede simplificar la diversidad dentro de cada género',
    'A veces normaliza representaciones problemáticas',
    'Enfoque principalmente en cine estadounidense',
    'Menos atención a cómo diferentes audiencias responden',
    'Debate sobre si refuerza o critica estereotipos de género'
  ],
  
  bibliography: [
    {
      type: 'article',
      authors: ['Linda Williams'],
      title: 'Film Bodies: Gender, Genre, and Excess',
      year: 1991,
      journal: 'Film Quarterly',      
      pages: '2-13',
      essential: true
    },
    {
      type: 'book',
      authors: ['Linda Williams'],
      title: 'Hard Core: Power, Pleasure, and the "Frenzy of the Visible"',
      year: 1989,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Linda Williams'],
      title: 'Melodrama Revised',
      year: 1998,          
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Linda Williams'],
      title: 'Screening Sex',
      year: 2008,
      publisher: 'Duke University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Silence of the Lambs',
        year: 1991,
        director: 'Jonathan Demme'
      },
      analysisExcerpt: `The Silence of the Lambs sofistica el body genre del horror. Los cuerpos en exceso son principalmente masculinos (víctimas de Buffalo Bill, Miggs masturbándose), invirtiendo convenciones de género. Clarice mantiene control corporal extremo, rechazando la posición tradicional de víctima femenina gritando. El film negocia cuidadosamente la on/scenity: sugiere más que muestra la violencia, excepto en momentos clave. La estructura temporal del horror (too early) se combina con investigación policial. El film intelectualiza el body genre sin abandonar su función de producir miedo corporal.`,
      insightsGenerated: [
        'Los body genres pueden invertir expectativas de género',
        'El control corporal femenino subvierte convenciones del horror',
        'La sofisticación no elimina la función corporal del género'
      ],
      methodologyApplication: 'Análisis de inversiones y sofisticaciones del body genre',
      keyFindings: [
        'Los body genres evolucionan manteniendo su función afectiva',
        'Las protagonistas femeninas transforman convenciones genéricas',
        'La respuesta corporal trasciende divisiones alto/bajo cultural'
      ]
    },
    {
      film: {
        title: 'Black Swan',
        year: 2010,
        director: 'Darren Aronofsky'
      },
      analysisExcerpt: `Black Swan fusiona los tres body genres: horror (transformación corporal), melodrama (madre e hija, ambición frustrada) y elementos eróticos (escena lésbica, masturbación). Nina experimenta todos los excesos corporales: terror, llanto, orgasmo. El film explota la on/scenity contemporánea mostrando explícitamente lo que el ballet clásico reprime. La estructura temporal mezcla el "too late" melodramático (nunca puede ser perfecta) con el "too early" del horror (la transformación que viene). El cuerpo de la bailarina es el sitio donde todos los géneros convergen.`,
      insightsGenerated: [
        'Los body genres contemporáneos se hibridan frecuentemente',
        'El cuerpo femenino sigue siendo sitio privilegiado del exceso',
        'La alta cultura (ballet) se revela como body genre'
      ],
      methodologyApplication: 'Análisis de hibridación y convergencia de body genres',
      keyFindings: [
        'Los límites entre body genres son cada vez más porosos',
        'El arte corporal es inherentemente un body genre',
        'La on/scenity contemporánea permite nuevas convergencias'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'clover-final-girl',
      relationshipType: 'parallel',
      synergyDescription: 'Clover analiza específicamente horror mientras Williams teoriza todos los body genres',
      combinedInsightPotential: 8
    },
    {
      id: 'modleski-mass-culture',
      relationshipType: 'complementary',
      synergyDescription: 'Ambas revalorizan géneros "femeninos" despreciados',
      combinedInsightPotential: 8
    },
    {
      id: 'sobchack-carnal-thoughts',
      relationshipType: 'complementary',
      synergyDescription: 'Sobchack desarrolla fenomenología del cuerpo que complementa a Williams',
      combinedInsightPotential: 9
    }
  ]
};
