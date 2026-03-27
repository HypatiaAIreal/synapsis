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

export const SEGER_SUBTEXT: Methodology = {
  metadata: {
    id: 'seger-subtext',
    name: 'Creación del Subtexto',
    author: 'Linda Seger',
    year: 1987,
    category: 'screenplay-dramaturgy',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['basic-screenwriting'],
    culturalContext: 'Consultoría de guiones Hollywood',
    language: 'es'
  },
  
  description: `Linda Seger, una de las primeras consultoras de guiones profesionales, desarrolló métodos específicos para la adaptación y el rewriting, con especial énfasis en la creación de subtexto - las capas de significado no expresadas directamente en diálogo o acción. Su trabajo pionero en adaptación literaria estableció principios para transformar material de un medio a otro. Seger enfatiza cómo el subtexto emerge de la intersección entre el backstory del personaje, sus objetivos no expresados, y las dinámicas de poder en las relaciones. Su método incluye técnicas para crear diálogo que funcione en múltiples niveles, donde lo que se dice difiere de lo que se significa. También desarrolló herramientas específicas para identificar y resolver problemas estructurales en guiones existentes.`,
  
  keyConcepts: [
    {
      term: 'Subtexto',
      definition: 'Significado real bajo la superficie del texto, lo no dicho pero comunicado',
      importance: 'fundamental',
      relatedTerms: ['significado implícito', 'comunicación indirecta']
    },
    {
      term: 'Tres Niveles de Texto',
      definition: 'Texto (lo que se dice), Subtexto (lo que se significa), Contexto (circunstancias)',
      importance: 'fundamental',
      relatedTerms: ['capas de significado', 'comunicación multinivel']
    },
    {
      term: 'Backstory Integration',
      definition: 'Cómo el pasado del personaje informa su comportamiento presente sin exponerlo',
      importance: 'important',
      relatedTerms: ['historia previa', 'motivación oculta']
    },
    {
      term: 'Dinámicas de Poder',
      definition: 'Quién tiene control en cada escena y cómo cambia',
      importance: 'important',
      relatedTerms: ['control', 'jerarquía relacional']
    },
    {
      term: 'Agendas Ocultas',
      definition: 'Objetivos no expresados que motivan el comportamiento del personaje',
      importance: 'important',
      relatedTerms: ['motivación secreta', 'objetivo real']
    },
    {
      term: 'Character Spine',
      definition: 'La motivación central profunda que impulsa todas las acciones',
      importance: 'important',
      relatedTerms: ['motivación central', 'núcleo del personaje']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del texto superficial',
      description: 'Catalogar lo que literalmente se dice y hace',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Transcribir diálogos importantes literalmente',
        'Notar acciones físicas específicas',
        'No interpretar aún, solo observar'
      ],
      commonMistakes: [
        'Confundir interpretación con observación',
        'Ignorar elementos no verbales'
      ]
    },
    {
      order: 2,
      name: 'Búsqueda de contradicciones',
      description: 'Identificar discrepancias entre palabras, acciones y emociones',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar cuando las acciones contradicen palabras',
        'Notar emociones que no coinciden con lo expresado',
        'Las contradicciones revelan subtexto'
      ]
    },
    {
      order: 3,
      name: 'Análisis del backstory',
      description: 'Determinar qué historia previa informa el comportamiento actual',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'El backstory debe revelarse gradualmente',
        'Buscar cómo el pasado crea patrones presentes',
        'No todo backstory necesita ser explícito'
      ]
    },
    {
      order: 4,
      name: 'Examen de dinámicas de poder',
      description: 'Analizar quién controla cada interacción y cómo cambia',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'El poder puede ser psicológico, no solo físico',
        'Buscar cambios de poder dentro de escenas',
        'El silencio puede ser poder'
      ]
    },
    {
      order: 5,
      name: 'Identificación de agendas ocultas',
      description: 'Descubrir qué quiere realmente cada personaje',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Las agendas reales rara vez se expresan directamente',
        'Buscar patrones de comportamiento',
        'Considerar qué gana cada personaje'
      ]
    },
    {
      order: 6,
      name: 'Creación de diálogo subtextual',
      description: 'Escribir diálogos que operen en múltiples niveles',
      timeEstimate: 90,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Añade profundidad y complejidad a personajes y diálogos',
    'Herramientas prácticas para rewriting efectivo',
    'Especialmente útil para adaptaciones literarias',
    'Mejora significativamente la calidad del diálogo',
    'Aplicable a cualquier género o estilo',
    'Enfoque en relaciones humanas complejas'
  ],
  
  limitations: [
    'Puede sobre-intelectualizar interacciones simples',
    'Menos útil para géneros de acción pura',
    'Requiere sutileza y habilidad considerable',
    'Difícil de enseñar/aprender sistemáticamente',
    'Puede ralentizar el ritmo si se abusa'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Linda Seger'],
      title: 'Making a Good Script Great',
      year: 1987,
      publisher: 'Samuel French',
      essential: true
    },
    {
      type: 'book',
      authors: ['Linda Seger'],
      title: 'Writing Subtext: What Lies Beneath',
      year: 2011,
      publisher: 'Michael Wiese Productions',
      essential: true
    },
    {
      type: 'book',
      authors: ['Linda Seger'],
      title: 'The Art of Adaptation: Turning Fact and Fiction into Film',
      year: 1992,
      publisher: 'Henry Holt',
      essential: true
    },
    {
      type: 'book',
      authors: ['Linda Seger'],
      title: 'Creating Unforgettable Characters',
      year: 1990,
      publisher: 'Henry Holt',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Ordinary People',
        year: 1980,
        director: 'Robert Redford'
      },
      analysisExcerpt: `Masterclass en subtexto familiar. La escena de la cena: Texto superficial sobre cotidianidades. Subtexto: culpa por la muerte del hermano, preferencia materna no expresada, matrimonio fracturándose. Beth nunca dice que prefería a Buck, pero cada acción lo comunica. Conrad no acusa a su madre, pero su breakdown lo hace por él. Calvin media sin admitir que su matrimonio está muriendo. El poder cambia sutilmente: Beth controla mediante frialdad, Conrad mediante vulnerabilidad, Calvin pierde control progresivamente. Backstory del accidente permea cada interacción sin exposición directa.`,
      insightsGenerated: [
        'El subtexto puede ser más poderoso que cualquier diálogo directo',
        'Las dinámicas familiares operan principalmente en subtexto',
        'El backstory traumático informa todo sin ser constantemente mencionado'
      ],
      methodologyApplication: 'Análisis de cómo cada escena opera en múltiples niveles simultáneos',
      keyFindings: [
        'El drama psicológico depende del subtexto efectivo',
        'Los silencios y miradas comunican tanto como palabras',
        'El poder emocional puede invertir poder social'
      ]
    },
    {
      film: {
        title: 'Lost in Translation',
        year: 2003,
        director: 'Sofia Coppola'
      },
      analysisExcerpt: `El subtexto define la película. Bob y Charlotte nunca expresan directamente su conexión o atracción. Texto: conversaciones sobre jet lag, matrimonios, Japón. Subtexto: soledad profunda, conexión inesperada, imposibilidad de relación. La escena del karaoke: cantan sobre otros pero comunican sobre ellos. El whisper final: el subtexto permanece privado incluso para la audiencia. Dinámicas de poder equilibradas: ambos vulnerables, ambos cautelosos. Agendas ocultas: buscan comprensión, no romance, pero encuentran ambos.`,
      insightsGenerated: [
        'El subtexto puede ser el texto principal en ciertas películas',
        'Lo no dicho puede ser más romántico que declaraciones directas',
        'El subtexto respetado (no revelado) mantiene el misterio'
      ],
      methodologyApplication: 'Cómo construir una película completa sobre lo no expresado',
      keyFindings: [
        'Algunas historias solo funcionan en subtexto',
        'La contención emocional puede intensificar la conexión',
        'El subtexto permite que el público complete la historia'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'mckee-story',
      relationshipType: 'complementary',
      synergyDescription: 'McKee proporciona estructura mientras Seger añade profundidad textural',
      combinedInsightPotential: 8
    },
    {
      id: 'iglesias-emotional-writing',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos enfocan la experiencia emocional pero desde ángulos diferentes',
      combinedInsightPotential: 8
    },
    {
      id: 'stanislavsky-method',
      relationshipType: 'complementary',
      synergyDescription: 'El subtexto de Seger conecta con los objetivos ocultos de Stanislavsky',
      combinedInsightPotential: 9
    }
  ],
  
  digitalTools: [
    {
      name: 'Subtext Analysis Worksheet',
      type: 'framework',
      description: 'Plantilla para analizar niveles de texto en escenas',
      cost: 'free',
      platforms: ['web']
    },
    {
      name: 'Dialogue Tracker',
      type: 'software',
      description: 'Herramienta para rastrear subtexto en diálogos',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    }
  ]
};
