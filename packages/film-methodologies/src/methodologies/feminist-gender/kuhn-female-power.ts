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

export const KUHN_FEMALE_POWER: Methodology = {
  metadata: {
    id: 'kuhn-female-power',
    name: 'Poder Femenino y Cine',
    author: 'Annette Kuhn',
    year: 1982,
    category: 'feminist-gender',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['feminist-theory', 'cultural-studies'],
    culturalContext: 'Feminismo sociológico británico',
    language: 'es'
  },
  
  description: `Annette Kuhn desarrolló un enfoque sociológico-feminista que examina el cine como institución social y práctica cultural, no solo como texto. Su trabajo conecta análisis textual con estudios de producción, distribución y recepción, mostrando cómo el poder opera en todos los niveles de la institución cinematográfica. Kuhn fue pionera en estudiar la censura cinematográfica desde perspectiva feminista, revelando cómo los códigos de censura regulan específicamente la sexualidad femenina y refuerzan normas de género. Su investigación sobre públicos femeninos históricos desafió asunciones sobre espectatorialidad pasiva. Kuhn desarrolló metodologías para "memoria del cine" - cómo las audiencias recuerdan y dan sentido a sus experiencias cinematográficas.`,
  
  keyConcepts: [
    {
      term: 'Cinema as Institution',
      definition: 'El cine como sistema complejo más allá de films individuales',
      importance: 'fundamental',
      relatedTerms: ['institución cinematográfica', 'sistema de poder']
    },
    {
      term: 'Cultural Power',
      definition: 'Poder operando en producción, distribución, exhibición y recepción',
      importance: 'fundamental',
      relatedTerms: ['poder cultural', 'hegemonía']
    },
    {
      term: 'Censorship',
      definition: 'Regulación específica de sexualidad y género femeninos',
      importance: 'important',
      relatedTerms: ['censura', 'regulación moral']
    },
    {
      term: 'Women\'s Cinema',
      definition: 'Práctica alternativa de hacer cine desde perspectiva feminista',
      importance: 'important',
      relatedTerms: ['cine de mujeres', 'práctica feminista']
    },
    {
      term: 'Cinema Memory',
      definition: 'Cómo las audiencias recuerdan y significan experiencias fílmicas',
      importance: 'important',
      relatedTerms: ['memoria cinematográfica', 'recepción histórica']
    },
    {
      term: 'Counter-Cinema',
      definition: 'Oposición tanto formal como institucional al cine dominante',
      importance: 'important',
      relatedTerms: ['contra-cine', 'cine alternativo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis institucional',
      description: 'Examinar contexto de producción, distribución y exhibición',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Investigar quién financió y produjo el film',
        'Considerar circuitos de distribución',
        'Analizar contextos de exhibición'
      ],
      commonMistakes: [
        'Limitarse solo al análisis textual',
        'Ignorar factores económicos y políticos'
      ]
    },
    {
      order: 2,
      name: 'Examen de censura/regulación',
      description: 'Identificar qué se censura o autorregula y por qué',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar cortes o modificaciones',
        'Considerar autocensura',
        'Analizar clasificaciones por edad'
      ]
    },
    {
      order: 3,
      name: 'Investigación de recepción',
      description: 'Estudiar cómo audiencias reales recibieron el film',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Buscar reseñas de época',
        'Considerar diferentes públicos',
        'Analizar controversias'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de prácticas alternativas',
      description: 'Identificar elementos de counter-cinema o práctica feminista',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis de memoria cinematográfica',
      description: 'Si es film histórico, examinar cómo se recuerda',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de poder cultural',
      description: 'Sintetizar cómo opera el poder en todos los niveles',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Enfoque holístico que va más allá del texto',
    'Metodologías innovadoras de investigación histórica',
    'Atención a audiencias reales, no ideales',
    'Conecta teoría con práctica cinematográfica',
    'Considera factores materiales y económicos'
  ],
  
  limitations: [
    'Requiere investigación extensa más allá del film',
    'Menos útil para análisis textual detallado',
    'Datos históricos no siempre disponibles',
    'Puede perder especificidad cinematográfica',
    'Enfoque más sociológico que estético'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Annette Kuhn'],
      title: 'Women\'s Pictures: Feminism and Cinema',
      year: 1982,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Annette Kuhn'],
      title: 'Cinema, Censorship and Sexuality, 1909-1925',
      year: 1988,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Annette Kuhn'],
      title: 'An Everyday Magic: Cinema and Cultural Memory',
      year: 2002,
      publisher: 'I.B. Tauris',
      essential: true
    },
    {
      type: 'book',
      authors: ['Annette Kuhn'],
      title: 'Family Secrets: Acts of Memory and Imagination',
      year: 1995,
      publisher: 'Verso',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'A Question of Silence',
        year: 1982,
        director: 'Marleen Gorris'
      },
      analysisExcerpt: `A Question of Silence ejemplifica el women's cinema como práctica alternativa analizada por Kuhn. Producido fuera de Hollywood por feministas holandesas, distribuido en circuitos alternativos y de arte. El film sobre tres mujeres que asesinan a un hombre provocó debates masivos sobre violencia justificada. La censura y clasificación variaron por país, revelando ansiedades sobre violencia femenina colectiva. La recepción dividió audiencias por género: mujeres frecuentemente lo experimentaron como catártico, hombres como amenazante. El film creó "memoria cinematográfica" duradera en movimientos feministas. Representa counter-cinema tanto formal (rechazo de identificación) como institucionalmente.`,
      insightsGenerated: [
        'El women\'s cinema requiere circuitos alternativos de distribución',
        'La recepción de films feministas está profundamente generizada',
        'La censura revela ansiedades culturales sobre poder femenino'
      ],
      methodologyApplication: 'Análisis completo desde producción hasta memoria cultural',
      keyFindings: [
        'El poder institucional determina qué films feministas se ven',
        'Las prácticas alternativas requieren estructuras alternativas',
        'La memoria cinematográfica puede ser herramienta política'
      ]
    },
    {
      film: {
        title: 'Stories We Tell',
        year: 2012,
        director: 'Sarah Polley'
      },
      analysisExcerpt: `Stories We Tell investiga la memoria cinematográfica familiar y de género. Polley examina cómo su familia recuerda a su madre a través de films caseros y testimonios. El poder cultural opera en quién controla la narrativa familiar: inicialmente los hombres (padre, hermanos) hasta que Sarah toma control. No hay censura externa pero sí autocensura familiar sobre sexualidad materna. Como práctica documental feminista, cuestiona verdad y autoridad narrativa. La institución cinematográfica (NFB canadiense) apoyó esta exploración personal/política. El film crea nueva memoria cinematográfica sobre cómo recordamos a las madres.`,
      insightsGenerated: [
        'La memoria cinematográfica familiar está generizada',
        'Quien controla la cámara controla la narrativa familiar',
        'El documental personal puede ser práctica feminista radical'
      ],
      methodologyApplication: 'Análisis de memoria, poder narrativo y práctica feminista',
      keyFindings: [
        'Los archivos familiares requieren reinterpretación feminista',
        'La memoria cinematográfica personal es siempre política',
        'Las instituciones culturales pueden apoyar counter-cinema'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'johnston-womens-cinema',
      relationshipType: 'complementary',
      synergyDescription: 'Johnston teorizó el women\'s cinema que Kuhn analiza institucionalmente',
      combinedInsightPotential: 8
    },
    {
      id: 'bourdieu-cultural-capital',
      relationshipType: 'complementary',
      synergyDescription: 'Bourdieu proporciona marco para entender poder cultural que Kuhn aplica',
      combinedInsightPotential: 8
    },
    {
      id: 'staiger-reception',
      relationshipType: 'parallel',
      synergyDescription: 'Ambas investigan recepción histórica pero Kuhn con enfoque feminista',
      combinedInsightPotential: 7
    }
  ]
};
