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

export const CLOVER_FINAL_GIRL: Methodology = {
  metadata: {
    id: 'clover-final-girl',
    name: 'Men, Women and Chain Saws',
    author: 'Carol J. Clover',
    year: 1992,
    category: 'feminist-gender',
    complexity: 'intermediate',
    timeToLearn: 20,
    prerequisities: ['horror-genre', 'gender-theory'],
    culturalContext: 'Estudios de género y horror',
    language: 'es'
  },
  
  description: `Carol J. Clover transformó el análisis del horror con su teoría de la "Final Girl" - la última sobreviviente que enfrenta y derrota al monstruo en slashers. Su trabajo revolucionario argumenta que el horror permite identificaciones cross-género complejas, donde audiencias masculinas se identifican masoquísticamente con víctimas femeninas. Clover analiza cómo la Final Girl es masculinizada (nombres andróginos, rechazo de sexualidad, competencia física) para facilitar esta identificación. Su concepto de "victim-hero" desdibuja límites entre víctima y héroe, femenino y masculino. El trabajo de Clover reveló el horror como espacio de fluidez de género y identificación compleja, desafiando asunciones sobre sadismo masculino simple.`,
  
  keyConcepts: [
    {
      term: 'Final Girl',
      definition: 'Última sobreviviente femenina que derrota al asesino, típicamente masculinizada',
      importance: 'fundamental',
      relatedTerms: ['sobreviviente', 'heroína masculinizada']
    },
    {
      term: 'Cross-gender Identification',
      definition: 'Audiencias masculinas identificándose con víctimas/héroes femeninas',
      importance: 'fundamental',
      relatedTerms: ['identificación cruzada', 'fluidez de género']
    },
    {
      term: 'Victim-Hero',
      definition: 'Transformación de víctima pasiva en héroe activo',
      importance: 'fundamental',
      relatedTerms: ['víctima-héroe', 'transformación']
    },
    {
      term: 'Terrible Place',
      definition: 'Espacio claustrófobico/uterino donde ocurre el horror',
      importance: 'important',
      relatedTerms: ['espacio monstruoso', 'lugar-útero']
    },
    {
      term: 'Phallic Weapons',
      definition: 'Armas penetrantes apropiadas por la Final Girl',
      importance: 'important',
      relatedTerms: ['apropiación fálica', 'inversión de poder']
    },
    {
      term: 'Feminized Killers',
      definition: 'Asesinos frecuentemente feminizados o con sexualidad ambigua',
      importance: 'important',
      relatedTerms: ['monstruo feminizado', 'ambigüedad sexual']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de la Final Girl',
      description: 'Localizar y analizar características de la sobreviviente final',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Buscar nombres andróginos o masculinos',
        'Notar rechazo o desinterés en romance/sexo',
        'Observar competencias prácticas o intelectuales'
      ],
      commonMistakes: [
        'Confundir cualquier sobreviviente con Final Girl',
        'Ignorar proceso de masculinización'
      ]
    },
    {
      order: 2,
      name: 'Análisis de identificaciones',
      description: 'Examinar cómo el film facilita identificación cross-género',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Analizar punto de vista cinematográfico',
        'Notar momentos de vulnerabilidad compartida',
        'Observar cómo se minimiza sexualización'
      ]
    },
    {
      order: 3,
      name: 'Examen victim-hero journey',
      description: 'Trazar transformación de víctima a héroe activo',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Análisis del terrible place',
      description: 'Identificar espacios claustrófobicos/uterinos',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Estudio de armas',
      description: 'Examinar apropiación de armas fálicas por Final Girl',
      timeEstimate: 20,
      difficulty: 'basic'
    },
    {
      order: 6,
      name: 'Análisis del killer',
      description: 'Examinar grado de feminización o ambigüedad sexual',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Revolucionó comprensión del horror y género',
    'Reveló complejidad de identificaciones cinematográficas',
    'Desafió estereotipos sobre audiencias y sadismo',
    'Influyente en producción posterior de horror',
    'Accesible sin jerga excesiva'
  ],
  
  limitations: [
    'Puede reforzar binarios de género al enfatizar masculinización',
    'Centrada en slasher específicamente',
    'Menos aplicable a horror sobrenatural o psicológico',
    'Ignora experiencias de espectadoras femeninas',
    'Pocas consideraciones raciales en análisis original'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Carol J. Clover'],
      title: 'Men, Women, and Chain Saws: Gender in the Modern Horror Film',
      year: 1992,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Carol J. Clover'],
      title: 'Her Body, Himself: Gender in the Slasher Film',
      year: 1987,
      journal: 'Representations',      
      pages: '187-228',
      essential: true
    },
    {
      type: 'book',
      authors: ['Carol J. Clover'],
      title: 'Getting Even: Rape and Revenge in I Spit on Your Grave and The Accused',
      year: 1993,           
      pages: '16-18',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Halloween',
        year: 1978,
        director: 'John Carpenter'
      },
      analysisExcerpt: `Halloween estableció el modelo de Final Girl con Laurie Strode. Laurie es virginal, estudiosa, responsable (cuida niños), con nombre relativamente andrógino. Mientras sus amigas sexualmente activas mueren, Laurie sobrevive por su vigilancia y rechazo del deseo. Su transformación de víctima a héroe ocurre gradualmente: primero huye, luego se esconde, finalmente contraataca con armas improvisadas (aguja de tejer, percha). Michael Myers es descrito como "simplemente fuerza", más allá del género humano normal. La masculinización de Laurie permite que audiencias masculinas se identifiquen con su terror y eventual triunfo.`,
      insightsGenerated: [
        'La virginidad de la Final Girl es sobre masculinización, no moralismo',
        'La identificación masculina requiere des-sexualización femenina',
        'El killer post-humano permite fluidez de género en la identificación'
      ],
      methodologyApplication: 'Análisis del prototipo de Final Girl y sus características',
      keyFindings: [
        'Halloween codificó las convenciones del slasher moderno',
        'La Final Girl debe "ganar" su supervivencia mediante masculinización',
        'El horror permite identificaciones de género fluidas'
      ]
    },
    {
      film: {
        title: 'You\'re Next',
        year: 2011,
        director: 'Adam Wingard'
      },
      analysisExcerpt: `You're Next deconstruye y reconstruye la Final Girl. Erin parece inicialmente una novia convencional, pero revela habilidades de supervivencia extremas debido a su crianza en un compound survivalista. No necesita masculinizarse porque ya posee competencias de combate. Su sexualidad no es castigada ni negada. Los killers son revelados como familiares codiciosos, no monstruos, problematizando la dinámica tradicional. Erin no se transforma en victim-hero porque nunca es verdaderamente víctima. El film sugiere evolución del tropo donde competencia femenina no requiere masculinización.`,
      insightsGenerated: [
        'La Final Girl contemporánea puede mantener feminidad',
        'La competencia pre-existente subvierte el arco victim-hero',
        'El horror post-moderno juega conscientemente con convenciones'
      ],
      methodologyApplication: 'Análisis de evolución y subversión del tropo Final Girl',
      keyFindings: [
        'El concepto Final Girl sigue evolucionando en horror contemporáneo',
        'La masculinización ya no es prerequisito para supervivencia',
        'El conocimiento del tropo permite su deconstrucción creativa'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'williams-body-genres',
      relationshipType: 'complementary',
      synergyDescription: 'Williams teoriza body genres mientras Clover se enfoca específicamente en horror',
      combinedInsightPotential: 9
    },
    {
      id: 'kristeva-abjection',
      relationshipType: 'complementary',
      synergyDescription: 'Kristeva proporciona marco psicoanalítico para entender el horror que Clover analiza',
      combinedInsightPotential: 8
    },
    {
      id: 'wood-horror-repressed',
      relationshipType: 'parallel',
      synergyDescription: 'Wood analiza represión social en horror mientras Clover enfoca género',
      combinedInsightPotential: 8
    }
  ]
};
