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

export const BAUDRILLARD_SIMULACRUM: Methodology = {
  metadata: {
    id: 'baudrillard-simulacrum',
    name: 'Simulacro y Simulación',
    author: 'Jean Baudrillard',
    year: 1981,
    category: 'marxist-sociological',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['postmodern-theory', 'media-theory'],
    culturalContext: 'Post-marxismo francés',
    language: 'es'
  },
  
  description: `Jean Baudrillard radicalizó el análisis de los medios y el cine con su teoría de los simulacros - copias sin original - y la simulación - generación de modelos de lo real sin origen en la realidad. Para Baudrillard, el cine no representa la realidad sino que participa en su sustitución por hiperrealidad. Su análisis de las cuatro fases del simulacro muestra la evolución desde la imagen como reflejo hasta la imagen sin relación con realidad alguna. Baudrillard examina cómo el cine crea "precesión de simulacros" donde las imágenes preceden y determinan lo real. Su concepto de "hiperrealidad" describe un régimen donde la distinción entre real y simulación colapsa. Su trabajo desafía análisis marxistas tradicionales al sugerir que la simulación reemplaza la producción como lógica dominante.`,
  
  keyConcepts: [
    {
      term: 'Simulacro',
      definition: 'Copia que no tiene original, signo sin referente',
      importance: 'fundamental',
      relatedTerms: ['copia', 'imagen', 'signo']
    },
    {
      term: 'Simulación',
      definition: 'Generación de modelos de realidad sin origen ni realidad',
      importance: 'fundamental',
      relatedTerms: ['modelo', 'generación', 'hiperrealidad']
    },
    {
      term: 'Hiperrealidad',
      definition: 'Condición donde lo real y simulación son indistinguibles',
      importance: 'fundamental',
      relatedTerms: ['más real que lo real', 'indistinción', 'implosión']
    },
    {
      term: 'Precesión de Simulacros',
      definition: 'Proceso donde simulacros preceden y determinan lo real',
      importance: 'important',
      relatedTerms: ['precedencia', 'determinación', 'inversión']
    },
    {
      term: 'Cuatro Fases del Simulacro',
      definition: 'Reflejo → Máscara → Ausencia → Simulacro puro',
      importance: 'important',
      relatedTerms: ['evolución', 'fases', 'transformación']
    },
    {
      term: 'Implosión',
      definition: 'Colapso de distinciones antes fundamentales (real/imaginario)',
      importance: 'important',
      relatedTerms: ['colapso', 'indistinción', 'fusión']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del nivel de simulacro',
      description: 'Determinar en qué fase del simulacro opera el film',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Evaluar relación imagen-realidad',
        'Buscar referencias a originales ausentes',
        'Identificar autorreferencialidad'
      ],
      commonMistakes: [
        'Confundir representación con simulación',
        'Buscar siempre simulacro puro'
      ]
    },
    {
      order: 2,
      name: 'Análisis de relación con lo real',
      description: 'Examinar cómo el film se relaciona (o no) con realidad',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar si refleja, enmascara, o prescinde de real',
        'Buscar momentos de hiperrealidad'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de hiperrealidad',
      description: 'Identificar momentos "más reales que lo real"',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Examen de precesión',
      description: 'Analizar cómo imágenes preceden/crean realidad',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de implosiones',
      description: 'Localizar colapsos de categorías tradicionales',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación del régimen de simulación',
      description: 'Determinar lógica de simulación dominante',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Captura la lógica cultural del capitalismo tardío',
    'Análisis provocativo de cultura mediática',
    'Anticipa desarrollos digitales y virtuales',
    'Desafía marxismo ortodoxo productivamente',
    'Conceptos sugerentes y evocadores',
    'Influencia masiva en teoría cultural'
  ],
  
  limitations: [
    'Nihilismo potencialmente paralizante',
    'Hipérbole teórica a veces excesiva',
    'Ignora resistencias materiales persistentes',
    'Determinismo tecnológico implícito',
    'Estilo críptico y aforístico',
    'Puede fetichizar la simulación misma'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jean Baudrillard'],
      title: 'Simulacra and Simulation',
      year: 1994,
      publisher: 'University of Michigan Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jean Baudrillard'],
      title: 'The System of Objects',
      year: 2005,
      publisher: 'Verso',
      essential: false
    },
    {
      type: 'book',
      authors: ['Jean Baudrillard'],
      title: 'The Ecstasy of Communication',
      year: 1988,
      publisher: 'Semiotext(e)',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jean Baudrillard'],
      title: 'The Perfect Crime',
      year: 2008,
      publisher: 'Verso',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Matrix',
        year: 1999,
        director: 'The Wachowskis'
      },
      analysisExcerpt: `The Matrix literaliza la teoría de Baudrillard (quien aparece como libro). La Matrix es simulación perfecta sin original: hiperrealidad total. Ironía: el film mantiene distinción real/simulado que Baudrillard dice imposible. El "desierto de lo real" es cita directa, pero mal entendida: para Baudrillard, lo "real" también es simulación. Las píldoras roja/azul asumen acceso a verdad que Baudrillard niega. El film es simulacro sobre simulación: crea mitología de resistencia que refuerza la simulación que critica. Morpheus como profeta de un real que nunca existió.`,
      insightsGenerated: [
        'The Matrix simplifica a Baudrillard manteniendo real/simulado',
        'La resistencia a la simulación puede ser otra simulación',
        'Hollywood convierte crítica radical en mitología consumible'
      ],
      methodologyApplication: 'Análisis de apropiación hollywoodense de teoría de simulacros',
      keyFindings: [
        'El cine sobre simulación participa en la simulación',
        'La teoría radical se vuelve entretenimiento',
        'La hiperrealidad no permite "despertar" verdadero'
      ]
    },
    {
      film: {
        title: 'The Truman Show',
        year: 1998,
        director: 'Peter Weir'
      },
      analysisExcerpt: `The Truman Show presenta evolución completa de las fases del simulacro. Seahaven comienza como reflejo (set que imita pueblo), deviene máscara (oculta su artificialidad), ausencia (Truman no conoce "real"), y finalmente simulacro puro (más real que cualquier pueblo real). La vida de Truman precede cualquier realidad: precesión perfecta. Christof como demiurgo de hiperrealidad. La audiencia prefiere simulación a sus vidas "reales". Final ambiguo: ¿escapa Truman a otra simulación? El show within show sugiere infinitos niveles de simulación.`,
      insightsGenerated: [
        'La telerrealidad es paradigma de simulación baudrillardiana',
        'La audiencia participa activamente en preferir simulación',
        'No hay escape verdadero de la hiperrealidad'
      ],
      methodologyApplication: 'Trazado de las cuatro fases del simulacro en narrativa',
      keyFindings: [
        'La TV realiza la precesión de simulacros literalmente',
        'La hiperrealidad se vuelve más deseable que lo real',
        'La simulación no necesita ocultar su naturaleza'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'debord-spectacle',
      relationshipType: 'complementary',
      synergyDescription: 'Baudrillard radicaliza la sociedad del espectáculo de Debord',
      combinedInsightPotential: 9
    },
    {
      id: 'mcluhan-media',
      relationshipType: 'complementary',
      synergyDescription: 'Ambos analizan medios como ambiente, no herramientas',
      combinedInsightPotential: 8
    },
    {
      id: 'jameson-postmodernism',
      relationshipType: 'parallel',
      synergyDescription: 'Jameson historiza lo que Baudrillard presenta como condición total',
      combinedInsightPotential: 8
    }
  ]
};
