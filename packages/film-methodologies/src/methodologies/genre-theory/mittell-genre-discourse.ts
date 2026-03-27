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

export const MITTELL_GENRE_DISCOURSE: Methodology = {
  metadata: {
    id: 'mittell-genre-discourse',
    name: 'Género como Práctica Cultural',
    author: 'Jason Mittell',
    year: 2004,
    category: 'genre-theory',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['discourse-analysis', 'cultural-studies'],
    culturalContext: 'Estudios culturales contemporáneos',
    language: 'es'
  },
  
  description: `Jason Mittell propone una aproximación radicalmente pragmática al género que lo entiende no como propiedad textual sino como práctica cultural discursiva. Rechazando análisis textuales tradicionales, Mittell examina cómo los géneros son constituidos por los discursos de industrias, audiencias, críticos y académicos en contextos históricos específicos. Su método de "genealogía genérica" rastrea cómo las categorías genéricas emergen, se estabilizan, y transforman a través de prácticas discursivas. Mittell analiza géneros como "clusters culturales" de expectativas, interpretaciones y evaluaciones que exceden textos individuales. Su trabajo sobre televisión mostró cómo los géneros operan diferentemente en distintos medios. Mittell examina las "luchas genéricas" - disputas sobre clasificación que revelan inversiones culturales más amplias.`,
  
  keyConcepts: [
    {
      term: 'Género como Práctica',
      definition: 'Género no como propiedad textual sino como proceso cultural discursivo',
      importance: 'fundamental',
      relatedTerms: ['práctica discursiva', 'proceso', 'actividad']
    },
    {
      term: 'Genealogía Genérica',
      definition: 'Historia de cómo emergen y se transforman las categorías genéricas',
      importance: 'fundamental',
      relatedTerms: ['historia', 'emergencia', 'transformación']
    },
    {
      term: 'Clusters Culturales',
      definition: 'Constelaciones de discursos, expectativas y evaluaciones alrededor de géneros',
      importance: 'important',
      relatedTerms: ['constelación', 'discurso', 'expectativas']
    },
    {
      term: 'Luchas Genéricas',
      definition: 'Disputas sobre clasificación que revelan inversiones culturales',
      importance: 'important',
      relatedTerms: ['disputa', 'clasificación', 'conflicto']
    },
    {
      term: 'Instancias Discursivas',
      definition: 'Momentos específicos donde se define o redefine un género',
      importance: 'important',
      relatedTerms: ['momento definitorio', 'discurso']
    },
    {
      term: 'Paratextos Genéricos',
      definition: 'Materiales que enmarcan y definen géneros (publicidad, críticas, etc.)',
      importance: 'important',
      relatedTerms: ['paratexto', 'encuadre', 'contexto']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Rastreo genealógico',
      description: 'Investigar historia de emergencia y desarrollo de la categoría genérica',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Buscar primeros usos del término genérico',
        'Identificar momentos de cristalización',
        'Rastrear cambios en definición'
      ],
      commonMistakes: [
        'Asumir géneros como categorías naturales',
        'Ignorar disputas y contestaciones'
      ]
    },
    {
      order: 2,
      name: 'Mapeo de discursos',
      description: 'Catalogar discursos de industria, crítica, audiencias',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Incluir materiales promocionales',
        'Examinar recepción crítica',
        'Considerar discursos de fans'
      ]
    },
    {
      order: 3,
      name: 'Identificación de luchas',
      description: 'Localizar disputas sobre clasificación genérica',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar debates sobre pertenencia genérica',
        'Identificar qué está en juego en disputas'
      ]
    },
    {
      order: 4,
      name: 'Análisis de paratextos',
      description: 'Examinar materiales que enmarcan el género',
      timeEstimate: 60,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Examen de comunidades',
      description: 'Analizar qué grupos definen y usan el género',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Síntesis pragmática',
      description: 'Integrar hallazgos sobre práctica genérica',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Aproximación innovadora que supera limitaciones textuales',
    'Historiza categorías genéricas como construcciones',
    'Atiende a relaciones de poder en definiciones genéricas',
    'Especialmente útil para géneros emergentes o disputados',
    'Flexible para nuevos medios y convergencia',
    'Evita esencialismos genéricos'
  ],
  
  limitations: [
    'Puede minimizar importancia de textos mismos',
    'Complejidad metodológica considerable',
    'Requiere investigación histórica extensiva',
    'Menos útil para análisis textual específico',
    'Riesgo de relativismo extremo',
    'Dificultad de delimitar corpus de análisis'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jason Mittell'],
      title: 'Genre and Television: From Cop Shows to Cartoons in American Culture',
      year: 2004,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'article',
      authors: ['Jason Mittell'],
      title: 'A Cultural Approach to Television Genre Theory',
      year: 2001,
      journal: 'Cinema Journal',      
      pages: '3-24',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jason Mittell'],
      title: 'Complex TV: The Poetics of Contemporary Television Storytelling',
      year: 2015,
      publisher: 'NYU Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Wire',
        year: 2002,
        director: 'David Simon'
      },
      analysisExcerpt: `The Wire ejemplifica luchas genéricas que Mittell teoriza. Discursivamente posicionado por creadores como "visual novel" no "cop show". HBO lo comercializó enfatizando diferencia de TV convencional. Críticos debatieron si era "mejor que TV" o redefinición de TV misma. Audiencias se dividieron entre quienes esperaban procedural policial y quienes abrazaron complejidad novelística. La serie became sitio de lucha sobre qué puede ser "quality TV". Paratextos (entrevistas con Simon, ensayos críticos) fueron cruciales en establecer nuevo cluster cultural alrededor de "novelistic television". Genealogía revela emergencia de nueva categoría genérica.`,
      insightsGenerated: [
        'Los géneros emergen mediante luchas discursivas',
        'Creadores pueden participar activamente en redefinición genérica',
        'HBO como institución fue crucial en legitimar nuevo género'
      ],
      methodologyApplication: 'Análisis de emergencia de nuevo género televisivo mediante discursos',
      keyFindings: [
        'The Wire catalizó redefinición de posibilidades televisivas',
        'El género se constituyó mediante múltiples discursos convergentes',
        'Las luchas genéricas revelan cambios en jerarquías culturales'
      ]
    },
    {
      film: {
        title: 'Get Out',
        year: 2017,
        director: 'Jordan Peele'
      },
      analysisExcerpt: `Get Out demuestra construcción activa de nueva categoría genérica: "social thriller". Peele consistentemente usó este término en entrevistas, rechazando "horror" puro. Discurso industrial (Blumhouse, Universal) adoptó término para marketing. Críticos debatieron si era horror, thriller, sátira o nuevo híbrido. Audiencias afroamericanas versus blancas tuvieron lecturas genéricas distintas. Paratextos (trailer, poster) enfatizaron elementos thriller sobre horror. Academia rápidamente adoptó film como ejemplo de "horror político" emergente. La película became instancia discursiva definitoria de cómo el horror puede ser explícitamente político. Genealogía conecta con historia de horror racial pero marca nueva articulación.`,
      insightsGenerated: [
        'Los directores pueden ser agentes activos en generificación',
        'Las categorías genéricas pueden tener funciones políticas explícitas',
        'Diferentes audiencias pueden constituir géneros diferentemente'
      ],
      methodologyApplication: 'Análisis de creación intencional de nueva categoría genérica',
      keyFindings: [
        'Get Out institucionalizó "social thriller" como categoría viable',
        'El género se construyó mediante convergencia de múltiples discursos',
        'Las prácticas genéricas pueden ser actos políticos'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'altman-semantic-syntactic',
      relationshipType: 'dialectical',
      synergyDescription: 'Mittell critica el textualismo de Altman con enfoque pragmático',
      combinedInsightPotential: 8
    },
    {
      id: 'neale-genre-hollywood',
      relationshipType: 'synthetic',
      synergyDescription: 'Mittell radicaliza atención de Neale a contextos industriales',
      combinedInsightPotential: 9
    },
    {
      id: 'foucault-discourse-analysis',
      relationshipType: 'complementary',
      synergyDescription: 'Mittell aplica análisis discursivo foucaultiano a géneros',
      combinedInsightPotential: 9
    }
  ]
};
