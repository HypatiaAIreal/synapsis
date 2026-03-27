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

export const ALTHUSSER_IDEOLOGICAL_APPARATUS: Methodology = {
  metadata: {
    id: 'althusser-ideological-apparatus',
    name: 'Aparatos Ideológicos del Estado',
    author: 'Louis Althusser',
    year: 1970,
    category: 'marxist-sociological',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['marxist-theory', 'structuralism'],
    culturalContext: 'Marxismo estructuralista francés',
    language: 'es'
  },
  
  description: `Louis Althusser revolucionó el análisis marxista del cine con su teoría de los Aparatos Ideológicos del Estado (AIE), donde el cine funciona como uno de los principales medios de reproducción ideológica. Su concepto de "interpelación" - cómo la ideología "llama" a los individuos como sujetos - es fundamental para entender cómo el cine posiciona a los espectadores. Althusser distingue entre Aparatos Represivos que funcionan mediante violencia y Aparatos Ideológicos que operan mediante ideología. El cine, como AIE cultural, reproduce las relaciones de producción creando sujetos que se reconocen en las representaciones dominantes. Su análisis de la ideología como "representación imaginaria de las relaciones reales" explica cómo el cine no refleja la realidad sino las relaciones imaginarias de los sujetos con sus condiciones de existencia.`,
  
  keyConcepts: [
    {
      term: 'Aparatos Ideológicos del Estado',
      definition: 'Instituciones que reproducen ideología dominante: escuela, iglesia, medios, cultura',
      importance: 'fundamental',
      relatedTerms: ['reproducción social', 'ideología', 'hegemonía']
    },
    {
      term: 'Interpelación',
      definition: 'Proceso por el cual la ideología constituye individuos como sujetos',
      importance: 'fundamental',
      relatedTerms: ['subjetivación', 'llamado ideológico', 'reconocimiento']
    },
    {
      term: 'Sujeto Ideológico',
      definition: 'Efecto de la interpelación, no causa; sujeto siempre-ya constituido por ideología',
      importance: 'fundamental',
      relatedTerms: ['subjetividad', 'identidad', 'posición-sujeto']
    },
    {
      term: 'Representación Imaginaria',
      definition: 'La ideología no representa relaciones reales sino relación imaginaria con lo real',
      importance: 'important',
      relatedTerms: ['imaginario', 'mistificación', 'falsa conciencia']
    },
    {
      term: 'Reconocimiento/Desconocimiento',
      definition: 'Doble operación: reconocerse en la ideología mientras se desconoce su carácter construido',
      importance: 'important',
      relatedTerms: ['identificación', 'naturalización', 'evidencia']
    },
    {
      term: 'Materialidad de la Ideología',
      definition: 'La ideología existe en prácticas materiales, no solo en ideas',
      importance: 'important',
      relatedTerms: ['práctica', 'ritual', 'aparato']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de interpelación',
      description: 'Analizar cómo el film "llama" al espectador como sujeto',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de dirección directa al espectador',
        'Identificar qué posición-sujeto se ofrece',
        'Examinar con qué valores se pide identificación'
      ],
      commonMistakes: [
        'Confundir identificación narrativa con interpelación ideológica',
        'No ver interpelaciones sutiles o naturalizadas'
      ]
    },
    {
      order: 2,
      name: 'Análisis de posición-sujeto',
      description: 'Examinar qué tipo de subjetividad construye el film',
      timeEstimate: 75,
      difficulty: 'advanced',
      tips: [
        'Identificar valores, deseos, temores promovidos',
        'Analizar qué se presenta como "normal" o "natural"'
      ]
    },
    {
      order: 3,
      name: 'Examen de reconocimiento',
      description: 'Estudiar dónde/cómo se espera que el espectador se reconozca',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Búsqueda de representación imaginaria',
      description: 'Identificar qué relaciones sociales se mistifican',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Contrastar representación con relaciones materiales reales',
        'Buscar qué contradicciones se ocultan'
      ]
    },
    {
      order: 5,
      name: 'Análisis de reproducción',
      description: 'Examinar qué relaciones sociales el film ayuda a perpetuar',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Identificación del aparato',
      description: 'Situar el film en el sistema más amplio de AIE',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Marco analítico riguroso para entender función ideológica del cine',
    'Conecta cine con reproducción social más amplia',
    'Concepto de interpelación extremadamente influyente',
    'Análisis materialista de la ideología',
    'Complejidad teórica productiva para análisis profundo'
  ],
  
  limitations: [
    'Funcionalismo latente: todo sirve a la reproducción',
    'Sujetos demasiado pasivos, poca agencia',
    'Determinismo estructural problemático',
    'Ignora contradicciones y resistencias',
    'Abstracto y difícil de aplicar concretamente'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Louis Althusser'],
      title: 'Lenin and Philosophy and Other Essays',
      year: 1971,
      publisher: 'Monthly Review Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Louis Althusser'],
      title: 'On the Reproduction of Capitalism',
      year: 2014,
      publisher: 'Verso',
      essential: true
    },
    {
      type: 'book',
      authors: ['Louis Althusser'],
      title: 'For Marx',
      year: 1969,
      publisher: 'Penguin Press',
      essential: false
    },
    {
      type: 'article',
      authors: ['Ben Brewster', 'Colin MacCabe'],
      title: 'Althusser and Film Theory',
      year: 1974,
      journal: 'Screen',      
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Pretty Woman',
        year: 1990,
        director: 'Garry Marshall'
      },
      analysisExcerpt: `Pretty Woman interpela magistralmente al sujeto neoliberal-romántico. Interpelación dual: mujeres como Cenicientas potenciales, hombres como salvadores benevolentes. La prostitución se reimagina como oportunidad empresarial. Reconocimiento en fantasía de movilidad social mediante romance. Representación imaginaria: el capitalismo como cuento de hadas donde el amor trasciende clase. Desconocimiento sistemático de explotación real. El film reproduce ideología del sueño americano, individualismo meritocrático, y roles de género tradicionales bajo apariencia moderna.`,
      insightsGenerated: [
        'La interpelación romántica oculta interpelación de clase',
        'El reconocimiento en fantasía facilita desconocimiento de realidad',
        'Los AIE culturales naturalizan relaciones de explotación'
      ],
      methodologyApplication: 'Análisis de interpelación dual romántica-económica',
      keyFindings: [
        'El romance funciona como vehículo ideológico privilegiado',
        'La interpelación opera mediante deseo no coerción',
        'El cine mainstream es AIE cultural paradigmático'
      ]
    },
    {
      film: {
        title: 'The Matrix',
        year: 1999,
        director: 'The Wachowskis'
      },
      analysisExcerpt: `The Matrix tematiza explícitamente la interpelación ideológica. La Matrix misma es metáfora del aparato ideológico total. Neo debe des-interpelarse, rechazar su posición-sujeto. Sin embargo, el film re-interpela al espectador como sujeto individualista: el Elegido que trasciende ideología por voluntad personal. Ironía: critica interpelación mientras interpela. La rebelión se imagina como despertar individual, no transformación colectiva de aparatos. Reproduce ideología del excepcionalismo mientras parece criticarla.`,
      insightsGenerated: [
        'La crítica de ideología puede ser ideológica',
        'La des-interpelación se reimagina como nuevo tipo de interpelación',
        'El individualismo heroico es interpelación dominante en Hollywood'
      ],
      methodologyApplication: 'Análisis de meta-interpelación y contradicciones ideológicas',
      keyFindings: [
        'Incluso films críticos operan como AIE',
        'La interpelación individualista es hegemónica',
        'La conciencia crítica puede ser mercantilizada'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'gramsci-hegemony',
      relationshipType: 'complementary',
      synergyDescription: 'Gramsci ofrece teoría más flexible de hegemonía vs. aparatos de Althusser',
      combinedInsightPotential: 9
    },
    {
      id: 'lacan-subject',
      relationshipType: 'complementary',
      synergyDescription: 'Lacan influencia concepto de sujeto e interpelación de Althusser',
      combinedInsightPotential: 8
    },
    {
      id: 'butler-performativity',
      relationshipType: 'synthetic',
      synergyDescription: 'Butler desarrolla interpelación en teoría de performatividad',
      combinedInsightPotential: 8
    }
  ]
};
