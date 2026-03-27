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

export const AUFDERHEIDE_DOCUMENTARY_ETHICS: Methodology = {
  metadata: {
    id: 'aufderheide-documentary-ethics',
    name: 'Ética Documental',
    author: 'Patricia Aufderheide',
    year: 2007,
    category: 'documentary',
    complexity: 'intermediate',
    timeToLearn: 20,
    prerequisities: [],
    culturalContext: 'Ética aplicada estadounidense',
    language: 'es'
  },
  
  description: `Patricia Aufderheide ha liderado el desarrollo de marcos éticos prácticos para documentalistas, basados en investigación empírica con realizadores. Su trabajo identifica tres obligaciones éticas principales: con los sujetos (no hacer daño), con la audiencia (no engañar), y con el proyecto artístico (integridad). Aufderheide analiza cómo los documentalistas navegan constantemente entre estos compromisos a veces conflictivos. Su concepto de "momentos éticos" examina decisiones críticas en producción, edición y distribución. Desarrolló guías para el "consentimiento informado" apropiado al documental, diferente de modelos periodísticos o académicos. Su trabajo sobre "fair use" revolucionó las prácticas documentales respecto al material de archivo.`,
  
  keyConcepts: [
    {
      term: 'Triple Obligación',
      definition: 'Responsabilidad con sujetos, audiencia y proyecto artístico',
      importance: 'fundamental',
      relatedTerms: ['ética', 'responsabilidad']
    },
    {
      term: 'Momentos Éticos',
      definition: 'Decisiones críticas durante la producción documental',
      importance: 'fundamental',
      relatedTerms: ['decisión', 'dilema']
    },
    {
      term: 'Consentimiento Procesual',
      definition: 'Negociación continua, no solo permiso inicial',
      importance: 'important',
      relatedTerms: ['consentimiento informado', 'acuerdo']
    },
    {
      term: 'Fair Use Documental',
      definition: 'Derechos de uso transformativo de material con copyright',
      importance: 'important',
      relatedTerms: ['derechos de autor', 'archivo']
    },
    {
      term: 'Transparencia Situada',
      definition: 'Honestidad apropiada al contexto específico',
      importance: 'important',
      relatedTerms: ['honestidad', 'contexto']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar obligaciones',
      description: 'Mapear responsabilidades con cada parte involucrada',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Las obligaciones pueden entrar en conflicto',
        'Priorizar según el contexto específico',
        'Considerar consecuencias a largo plazo'
      ],
      commonMistakes: [
        'Ignorar alguna de las tres obligaciones',
        'Asumir que las obligaciones son absolutas'
      ]
    },
    {
      order: 2,
      name: 'Localizar momentos éticos',
      description: 'Identificar decisiones críticas en el proceso',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Los momentos éticos ocurren en todas las etapas',
        'Documentar decisiones y razonamientos'
      ]
    },
    {
      order: 3,
      name: 'Analizar consentimiento',
      description: 'Evaluar cómo se negoció y mantuvo el consentimiento',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Examinar transparencia',
      description: 'Evaluar honestidad con todas las partes',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Buscar protecciones',
      description: 'Identificar medidas para proteger vulnerables',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluar accountability',
      description: 'Examinar responsabilidad asumida por consecuencias',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Marco ético práctico basado en investigación',
    'Flexible para diferentes contextos documentales',
    'Reconoce complejidad de dilemas éticos reales',
    'Guías aplicables para realizadores',
    'Evoluciona con prácticas contemporáneas'
  ],
  
  limitations: [
    'Contexto principalmente estadounidense',
    'Puede no aplicar a todas las culturas',
    'Tensión entre ética y legalidad',
    'Consenso ético no siempre posible'
  ],
  
  bibliography: [
    {
      type: 'web',
      authors: ['Patricia Aufderheide', 'Peter Jaszi', 'Mridu Chandra'],
      title: 'Honest Truths: Documentary Filmmakers on Ethical Challenges in Their Work',
      year: 2009,
      publisher: 'Center for Media & Social Impact',
      essential: true
    },
    {
      type: 'book',
      authors: ['Patricia Aufderheide'],
      title: 'Documentary Film: A Very Short Introduction',
      year: 2007,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Patricia Aufderheide', 'Peter Jaszi'],
      title: 'Reclaiming Fair Use',
      year: 2011,
      publisher: 'University of Chicago Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Citizenfour',
        year: 2014,
        director: 'Laura Poitras'
      },
      analysisExcerpt: `Caso extremo de navegación ética. Obligación con Snowden: proteger su seguridad como fuente. Obligación con audiencia: revelar información de interés público masivo. Obligación artística: mantener tensión narrativa sin comprometer seguridad. Momentos éticos constantes sobre qué revelar y cuándo. Consentimiento complejo: Snowden controla parcialmente su representación. Transparencia sobre el proceso de filmación y sus riesgos. Fair use no aplica, pero ética del whistleblowing sí.`,
      insightsGenerated: [
        'La seguridad puede ser la consideración ética primaria',
        'El consentimiento puede incluir control editorial compartido',
        'La obligación pública puede superar riesgos personales'
      ],
      methodologyApplication: 'Análisis de ética en documental de alto riesgo político',
      keyFindings: [
        'Los momentos éticos pueden tener consecuencias globales',
        'La transparencia selectiva puede ser éticamente necesaria',
        'Las tres obligaciones pueden alinearse en casos excepcionales'
      ]
    },
    {
      film: {
        title: 'The Act of Killing',
        year: 2012,
        director: 'Joshua Oppenheimer'
      },
      analysisExcerpt: `Ética controversial extrema. Obligación con perpetradores: ¿protegerlos mientras confiesan? Obligación con víctimas (ausentes): ¿re-traumatizar comunidades? Obligación con audiencia: revelar mecanismos de genocidio. Obligación artística: método innovador pero perturbador. Momento ético clave: permitir recreaciones. Consentimiento problemático: ¿pueden los perpetradores consentir verdaderamente? Transparencia sobre método pero no sobre todas las implicaciones.`,
      insightsGenerated: [
        'La ética documental puede ser irresoluble',
        'Los ausentes también merecen consideración ética',
        'La innovación artística puede crear nuevos dilemas éticos'
      ],
      methodologyApplication: 'Examen de límites éticos en documental experimental',
      keyFindings: [
        'Algunos documentales existen en zonas éticas grises',
        'El debate ético puede ser parte del valor del film',
        'No todos los dilemas éticos tienen soluciones claras'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'winston-ethics',
      relationshipType: 'complementary',
      synergyDescription: 'Winston proporciona crítica histórica a la ética práctica de Aufderheide',
      combinedInsightPotential: 8
    },
    {
      id: 'nichols-documentary-modes',
      relationshipType: 'complementary',
      synergyDescription: 'Cada modo de Nichols implica diferentes consideraciones éticas',
      combinedInsightPotential: 8
    },
    {
      id: 'nash-documentary-ethics',
      relationshipType: 'parallel',
      synergyDescription: 'Nash ofrece perspectiva internacional sobre ética documental',
      combinedInsightPotential: 7
    }
  ]
};
