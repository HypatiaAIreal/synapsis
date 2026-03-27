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

export const DE_LAURETIS_TECHNOLOGIES: Methodology = {
  metadata: {
    id: 'de-lauretis-technologies',
    name: 'Tecnologías del Género',
    author: 'Teresa de Lauretis',
    year: 1987,
    category: 'feminist-gender',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['foucault-power', 'gender-theory'],
    culturalContext: 'Feminismo post-estructuralista',
    language: 'es'
  },
  
  description: `Teresa de Lauretis expandió radicalmente la teoría feminista del cine al proponer que el género no es una propiedad natural de los cuerpos sino el producto de diversas "tecnologías sociales", incluyendo el cine. Basándose en Foucault pero yendo más allá, argumenta que el cine no simplemente representa el género sino que lo produce activamente. Su concepto de "tecnologías del género" examina cómo las prácticas cinematográficas construyen y naturalizan las diferencias de género a través de códigos visuales y narrativos específicos. De Lauretis también introdujo la crucial distinción entre "woman" (la construcción cultural) y "women" (sujetos históricos reales), permitiendo un análisis más matizado de la representación. Su trabajo pionero sobre cine lésbico y teoría queer exploró cómo ciertas prácticas cinematográficas pueden desestabilizar las construcciones normativas de género y sexualidad.`,
  
  keyConcepts: [
    {
      term: 'Technologies of Gender',
      definition: 'Aparatos sociales y discursivos que producen el género como efecto',
      importance: 'fundamental',
      relatedTerms: ['construcción social', 'aparato ideológico']
    },
    {
      term: 'Woman vs. Women',
      definition: 'Distinción entre la construcción cultural (Woman) y sujetos históricos reales (women)',
      importance: 'fundamental',
      relatedTerms: ['representación', 'subjetividad']
    },
    {
      term: 'Space-off',
      definition: 'Espacio fuera de campo que el cine dominante no puede o no quiere representar',
      importance: 'fundamental',
      relatedTerms: ['márgenes', 'lo no representable']
    },
    {
      term: 'Eccentric Subject',
      definition: 'Sujeto que existe fuera de las categorías normativas de género',
      importance: 'important',
      relatedTerms: ['sujeto queer', 'marginalidad']
    },
    {
      term: 'Sexual Indifference',
      definition: 'Heterosexualidad obligatoria del cine que borra otras sexualidades',
      importance: 'important',
      relatedTerms: ['heteronormatividad', 'invisibilización']
    },
    {
      term: 'Elsewhere',
      definition: 'Espacios discursivos y prácticos de resistencia a las normas de género',
      importance: 'important',
      relatedTerms: ['resistencia', 'alternativa']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de tecnologías operando',
      description: 'Analizar cómo el film construye activamente el género',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Examinar códigos visuales, narrativos y sonoros',
        'Buscar momentos donde el género se "hace" más que se muestra',
        'Considerar qué normas de género se naturalizan'
      ],
      commonMistakes: [
        'Confundir representación con construcción',
        'Ignorar tecnologías sutiles o implícitas'
      ]
    },
    {
      order: 2,
      name: 'Distinción Woman/women',
      description: 'Separar construcciones culturales de experiencias reales',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Woman = ideal cultural abstracto',
        'women = sujetos diversos con experiencias concretas'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda del space-off',
      description: 'Identificar lo que queda fuera del marco representacional',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Qué experiencias de género no pueden mostrarse',
        'Qué sexualidades quedan fuera',
        'Qué sujetos son irrepresentables'
      ]
    },
    {
      order: 4,
      name: 'Localización de sujetos excéntricos',
      description: 'Identificar personajes/momentos fuera de normas de género',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis de sexual indifference',
      description: 'Examinar cómo se asume y naturaliza la heterosexualidad',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Identificación de elsewhere',
      description: 'Buscar espacios y prácticas alternativas de género',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Supera el esencialismo al mostrar el género como construcción',
    'Marco teórico sofisticado que conecta cine con poder social',
    'Incluye sexualidades diversas y experiencias queer',
    'Abre posibilidades para prácticas cinematográficas alternativas',
    'Influencia fundamental en teoría queer y estudios LGBTQ+'
  ],
  
  limitations: [
    'Alta complejidad teórica puede ser barrera de entrada',
    'A veces demasiado abstracta para análisis concretos',
    'Tensión entre teoría post-estructuralista y activismo',
    'Puede minimizar experiencias materiales de opresión'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Teresa de Lauretis'],
      title: 'Technologies of Gender: Essays on Theory, Film, and Fiction',
      year: 1987,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Teresa de Lauretis'],
      title: 'Alice Doesn\'t: Feminism, Semiotics, Cinema',
      year: 1984,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Teresa de Lauretis'],
      title: 'Queer Theory: Lesbian and Gay Sexualities',
      year: 1991,
      journal: 'differences',      
      pages: 'iii-xviii',
      essential: true
    },
    {
      type: 'book',
      authors: ['Teresa de Lauretis'],
      title: 'The Practice of Love: Lesbian Sexuality and Perverse Desire',
      year: 1994,
      publisher: 'Indiana University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Desert Hearts',
        year: 1985,
        director: 'Donna Deitch'
      },
      analysisExcerpt: `Desert Hearts opera como tecnología alternativa de género. El film construye el deseo lésbico sin recurrir a la mirada masculina o la patologización. El space-off del matrimonio heteronormativo de Vivian se hace visible cuando conoce a Cay. Las protagonistas son sujetos excéntricos que escapan las categorías tradicionales: Vivian no es la "esposa perfecta" ni Cay la "lesbiana masculina" estereotípica. El desierto funciona como elsewhere literal y simbólico donde nuevas configuraciones de género y deseo son posibles. La película produce activamente nuevas tecnologías de género lésbico.`,
      insightsGenerated: [
        'El cine puede crear tecnologías de género alternativas',
        'El space-off puede hacerse visible y habitable',
        'Los sujetos excéntricos generan nuevas posibilidades de género'
      ],
      methodologyApplication: 'Análisis de cómo el film produce género fuera de normas heterosexuales',
      keyFindings: [
        'El cine lésbico puede ser tecnología de género revolucionaria',
        'El elsewhere no es solo escape sino espacio de creación',
        'La representación positiva es insuficiente sin cambio en las tecnologías'
      ]
    },
    {
      film: {
        title: 'The Matrix',
        year: 1999,
        director: 'The Wachowskis'
      },
      analysisExcerpt: `The Matrix puede leerse como alegoría de las tecnologías de género. La Matrix misma es la tecnología que produce "realidad" incluyendo género normativo. Neo es sujeto excéntrico que debe elegir entre la píldora azul (permanecer en las construcciones normativas) o la roja (ver las tecnologías operando). La distinción Woman/women se literaliza: la "Woman in Red" es pura simulación mientras Trinity trasciende categorías. El film sugiere que el género, como la Matrix, es una construcción que puede ser hackeada y reescrita. Las lecturas trans del film revelan su crítica a las tecnologías de género normativas.`,
      insightsGenerated: [
        'La ciencia ficción puede literalizar conceptos de tecnologías de género',
        'La "realidad" del género es un programa que puede reescribirse',
        'Los sujetos excéntricos son necesarios para revelar las tecnologías'
      ],
      methodologyApplication: 'Lectura alegórica de las tecnologías de género como sistema de control',
      keyFindings: [
        'El género como sistema de control similar a la Matrix',
        'La liberación requiere ver y hackear las tecnologías',
        'Las directoras trans aportan perspectiva única sobre construcción de género'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'butler-performativity',
      relationshipType: 'complementary',
      synergyDescription: 'Butler desarrolla cómo el género se produce mediante actos repetidos, complementando las tecnologías de de Lauretis',
      combinedInsightPotential: 9
    },
    {
      id: 'foucault-sexuality',
      relationshipType: 'complementary',
      synergyDescription: 'De Lauretis adapta el concepto foucaultiano de tecnologías del yo al género',
      combinedInsightPotential: 8
    },
    {
      id: 'haraway-cyborg',
      relationshipType: 'parallel',
      synergyDescription: 'Ambas teorizan sobre tecnologías y construcción de identidades',
      combinedInsightPotential: 9
    }
  ]
};
