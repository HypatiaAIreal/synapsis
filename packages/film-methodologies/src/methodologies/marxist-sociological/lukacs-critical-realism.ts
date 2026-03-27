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

export const LUKACS_CRITICAL_REALISM: Methodology = {
  metadata: {
    id: 'lukacs-critical-realism',
    name: 'Realismo Crítico',
    author: 'Georg Lukács',
    year: 1938,
    category: 'marxist-sociological',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['marxist-theory', 'aesthetic-philosophy'],
    culturalContext: 'Marxismo humanista húngaro',
    language: 'es'
  },
  
  description: `Georg Lukács desarrolló una teoría marxista del realismo que valora el arte capaz de revelar las fuerzas históricas esenciales bajo la superficie de los fenómenos. Su concepto de "totalidad" busca obras que capturen la dinámica total de una época histórica a través de lo particular y concreto. Lukács distingue entre realismo crítico (que revela contradicciones) y naturalismo (que solo describe superficies), y entre realismo y modernismo (que considera decadente por su subjetivismo). Su concepto del "tipo" - personajes que encarnan fuerzas históricas sin ser alegóricos - influyó el análisis de personajes cinematográficos. Para el cine, su teoría implica valorar films que revelen las fuerzas históricas profundas a través de narrativas concretas y personajes típicos, manteniendo la tensión entre lo individual y lo histórico-social.`,
  
  keyConcepts: [
    {
      term: 'Totalidad',
      definition: 'Captura de la dinámica histórica completa de una época',
      importance: 'fundamental',
      relatedTerms: ['visión total', 'perspectiva histórica', 'unidad']
    },
    {
      term: 'Tipo',
      definition: 'Personaje que encarna fuerzas históricas sin perder individualidad',
      importance: 'fundamental',
      relatedTerms: ['tipicidad', 'representatividad', 'particularidad']
    },
    {
      term: 'Realismo Crítico',
      definition: 'Arte que revela la esencia histórica bajo las apariencias',
      importance: 'fundamental',
      relatedTerms: ['esencia', 'apariencia', 'revelación']
    },
    {
      term: 'Perspectiva de Totalidad',
      definition: 'Visión que conecta lo particular con el movimiento histórico general',
      importance: 'important',
      relatedTerms: ['perspectiva', 'visión histórica', 'conexión']
    },
    {
      term: 'Narrar vs. Describir',
      definition: 'Acción dinámica que revela vs. observación pasiva que solo muestra',
      importance: 'important',
      relatedTerms: ['narración', 'descripción', 'dinamismo']
    },
    {
      term: 'Partidismo',
      definition: 'Compromiso con el progreso histórico sin sacrificar complejidad artística',
      importance: 'important',
      relatedTerms: ['compromiso', 'progreso', 'perspectiva']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Búsqueda de totalidad',
      description: 'Evaluar si el film captura dinámica histórica completa',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar conexiones entre destinos individuales y fuerzas históricas',
        'Identificar si lo particular ilumina lo general',
        'Evaluar amplitud de visión histórica'
      ],
      commonMistakes: [
        'Confundir totalidad con exhaustividad',
        'Buscar alegoría directa en vez de mediación'
      ]
    },
    {
      order: 2,
      name: 'Identificación de tipos',
      description: 'Analizar personajes como encarnaciones de fuerzas históricas',
      timeEstimate: 75,
      difficulty: 'advanced',
      tips: [
        'Buscar representatividad sin pérdida de individualidad',
        'Identificar qué fuerzas sociales encarnan'
      ]
    },
    {
      order: 3,
      name: 'Análisis del realismo crítico',
      description: 'Examinar cómo se revelan esencias bajo apariencias',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Evaluación narrar/describir',
      description: 'Distinguir narración dinámica de descripción estática',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de perspectiva',
      description: 'Analizar desde qué punto de vista histórico se narra',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de partidismo',
      description: 'Examinar compromiso con progreso sin simplificación',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Ambición totalizante conecta arte con historia',
    'Defiende poder cognitivo del arte',
    'Criterios evaluativos claros',
    'Base filosófica profunda',
    'Influencia en realismo cinematográfico mundial',
    'Equilibrio entre compromiso político y complejidad artística'
  ],
  
  limitations: [
    'Rechazo dogmático del modernismo',
    'Nostalgia por realismo decimonónico',
    'Prescriptivo en exceso',
    'Concepto de tipo puede ser esquemático',
    'Determinismo histórico problemático',
    'Eurocentrismo marcado'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Georg Lukács'],
      title: 'The Historical Novel',
      year: 1962,
      publisher: 'University of Nebraska Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Georg Lukács'],
      title: 'Studies in European Realism',
      year: 1972,
      publisher: 'Merlin Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Georg Lukács'],
      title: 'The Theory of the Novel',
      year: 1971,
      publisher: 'MIT Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Georg Lukács'],
      title: 'History and Class Consciousness',
      year: 1971,
      publisher: 'MIT Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Grapes of Wrath',
        year: 1940,
        director: 'John Ford'
      },
      analysisExcerpt: `The Grapes of Wrath ejemplifica el realismo crítico lukácsiano. Los Joads funcionan como tipos: encarnan el destino del campesinado desposeído sin perder individualidad. La totalidad de la Depresión se captura a través de su odisea particular. Tom Joad evoluciona de individuo a conciencia colectiva, encarnando el desarrollo histórico. Ford narra dinámicamente, no describe pasivamente. La perspectiva es claramente progresista sin simplificar contradicciones. El film revela fuerzas económicas bajo dramas personales, conectando destino familiar con transformación histórica del capitalismo agrario.`,
      insightsGenerated: [
        'Los Joads tipifican sin esquematizar',
        'Lo particular (familia) ilumina lo general (sistema económico)',
        'La evolución de Tom encarna desarrollo de conciencia histórica'
      ],
      methodologyApplication: 'Identificación de tipos y totalidad en narrativa de migración',
      keyFindings: [
        'Hollywood podía producir realismo crítico lukácsiano',
        'El melodrama familiar puede vehicular análisis histórico',
        'El tipo bien logrado mantiene tensión individual/histórico'
      ]
    },
    {
      film: {
        title: '4 Months, 3 Weeks and 2 Days',
        year: 2007,
        director: 'Cristian Mungiu'
      },
      analysisExcerpt: `El film de Mungiu actualiza el realismo crítico para el postcomunismo. Otilia y Găbița tipifican la generación atrapada en el colapso del socialismo de estado. La búsqueda de aborto ilegal revela la totalidad del sistema: burocracia, corrupción, patriarcado, economía informal. Mungiu narra sin describir: cada acción revela estructuras. El plano secuencia no es formalismo sino medio para capturar duración real de la opresión. La perspectiva es crítica sin nostalgia: muestra contradicciones del "socialismo real" sin idealizar capitalismo. Realismo crítico contemporáneo.`,
      insightsGenerated: [
        'El aborto como prisma de totalidad social',
        'Los planos largos pueden servir al realismo crítico',
        'La crítica puede evitar tanto nostalgia como celebración'
      ],
      methodologyApplication: 'Análisis de realismo crítico en cine contemporáneo',
      keyFindings: [
        'El realismo crítico puede adaptarse a nuevos contextos',
        'La forma minimalista puede revelar totalidades',
        'El tipo sigue siendo concepto útil para análisis'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'brecht-alienation',
      relationshipType: 'dialectical',
      synergyDescription: 'Brecht rechaza identificación que Lukács considera esencial',
      combinedInsightPotential: 8
    },
    {
      id: 'goldman-genetic',
      relationshipType: 'synthetic',
      synergyDescription: 'Goldman desarrolla sociología de formas desde Lukács',
      combinedInsightPotential: 8
    },
    {
      id: 'jameson-political-unconscious',
      relationshipType: 'synthetic',
      synergyDescription: 'Jameson sintetiza Lukács con psicoanálisis y postestructuralismo',
      combinedInsightPotential: 9
    }
  ]
};
