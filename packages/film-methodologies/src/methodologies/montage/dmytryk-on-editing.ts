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

export const DMYTRYK_ON_EDITING: Methodology = {
  metadata: {
    id: 'dmytryk-on-editing',
    name: 'Montaje Cinematográfico',
    author: 'Edward Dmytryk',
    year: 1984,
    category: 'montage',
    complexity: 'intermediate',
    timeToLearn: 20,
    prerequisities: ['hollywood-classical'],
    culturalContext: 'Sistema de estudios Hollywood',
    language: 'es'
  },
  
  description: `Edward Dmytryk, director de Hollywood y víctima de la lista negra, desarrolló una teoría práctica del montaje basada en décadas de experiencia en el sistema de estudios. Su enfoque enfatiza el montaje como narración visual eficiente, donde cada corte debe avanzar la historia o será percibido como error. Dmytryk estableció "reglas" flexibles: cortar en movimiento, mantener dirección de pantalla, usar insertos para comprimir tiempo, y emplear el "corte en L" para conversaciones naturales. Su concepto de "montaje subliminal" explora cómo los cortes pueden comunicar información por debajo del umbral consciente. Dmytryk analizó géneros específicos, mostrando cómo el film noir requiere montaje diferente que la comedia o el western.`,
  
  keyConcepts: [
    {
      term: 'Eficiencia Narrativa',
      definition: 'Cada corte debe avanzar la historia o es superfluo',
      importance: 'fundamental',
      relatedTerms: ['economía', 'progresión', 'avance']
    },
    {
      term: 'Corte en Movimiento',
      definition: 'Transición durante acción para suavidad y dinamismo',
      importance: 'fundamental',
      relatedTerms: ['acción', 'fluidez', 'dinamismo']
    },
    {
      term: 'Montaje Subliminal',
      definition: 'Comunicación de información bajo el umbral consciente',
      importance: 'important',
      relatedTerms: ['subconsciente', 'sugestión', 'implicación']
    },
    {
      term: 'Corte en L',
      definition: 'Audio precede o sigue al corte visual en diálogos',
      importance: 'important',
      relatedTerms: ['J-cut', 'L-cut', 'continuidad sonora']
    },
    {
      term: 'Montaje Genérico',
      definition: 'Técnicas específicas según género cinematográfico',
      importance: 'important',
      relatedTerms: ['género', 'convenciones', 'estilo']
    },
    {
      term: 'Overlapping Action',
      definition: 'Repetición parcial de acción para énfasis dramático',
      importance: 'important',
      relatedTerms: ['solapamiento', 'énfasis', 'extensión']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Evaluación de eficiencia',
      description: 'Verificar que cada corte avance la narrativa',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Si un corte no añade información, eliminarlo',
        'La eficiencia no significa velocidad',
        'Considerar avance emocional, no solo informativo'
      ],
      commonMistakes: [
        'Cortar por cortar sin propósito',
        'Sacrificar claridad por brevedad'
      ]
    },
    {
      order: 2,
      name: 'Análisis de cortes en movimiento',
      description: 'Examinar transiciones durante acciones',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'El movimiento disfraza el corte',
        'Buscar continuidad de gesto o dirección',
        'No todos los movimientos requieren corte'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de montaje subliminal',
      description: 'Identificar información comunicada indirectamente',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Atender a lo que se sugiere sin mostrar',
        'Los cortes pueden implicar relaciones'
      ]
    },
    {
      order: 4,
      name: 'Examen de cortes en L',
      description: 'Analizar naturalidad en diálogos',
      timeEstimate: 30,
      difficulty: 'basic'
    },
    {
      order: 5,
      name: 'Aplicación de reglas genéricas',
      description: 'Identificar convenciones según género',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis de overlapping',
      description: 'Buscar extensiones dramáticas de acción',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Experiencia práctica profunda de Hollywood',
    'Claridad técnica y aplicabilidad inmediata',
    'Atención a géneros específicos',
    'Integra todos los elementos fílmicos',
    'Pedagogía efectiva y directa',
    'Reglas flexibles, no dogmas'
  ],
  
  limitations: [
    'Sesgo hacia Hollywood clásico',
    'Conservadurismo estético relativo',
    'Menos teoría que práctica',
    'Ignora cine experimental',
    'Centrado en narrativa tradicional'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Edward Dmytryk'],
      title: 'On Film Editing',
      year: 1984,
      publisher: 'Focal Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Edward Dmytryk'],
      title: 'On Screen Writing',
      year: 1985,
      publisher: 'Focal Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Edward Dmytryk'],
      title: 'On Screen Acting',
      year: 1988,
      publisher: 'Focal Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Murder, My Sweet',
        year: 1944,
        director: 'Edward Dmytryk'
      },
      analysisExcerpt: `Dmytryk aplica sus teorías en este noir clásico. Montaje subliminal: flashbacks fragmentados sugieren trauma. Cortes en movimiento durante peleas mantienen energía. Eficiencia narrativa: cada corte revela pista o estado mental. Montaje genérico noir: ángulos oblicuos, sombras cortadas. Cortes en L en interrogatorios crean naturalidad amenazante. Overlapping en golpes enfatiza brutalidad. Los sueños/alucinaciones usan montaje expresionista dentro del estilo clásico.`,
      insightsGenerated: [
        'El noir permite experimentación dentro de convenciones',
        'El montaje subliminal es especialmente efectivo en noir',
        'La eficiencia narrativa no impide expresividad'
      ],
      methodologyApplication: 'Aplicación de principios clásicos con innovación noir',
      keyFindings: [
        'Dmytryk equilibra convención e innovación',
        'El género determina posibilidades de montaje',
        'Las reglas flexibles permiten expresión personal'
      ]
    },
    {
      film: {
        title: 'L.A. Confidential',
        year: 1997,
        director: 'Curtis Hanson'
      },
      analysisExcerpt: `Neo-noir que actualiza principios de Dmytryk. Eficiencia narrativa extrema: múltiples tramas entrelazadas claramente. Montaje subliminal: miradas y gestos revelan corrupción. Cortes en movimiento en acción mantienen clasicismo moderno. Cortes en L sofisticados en interrogatorios paralelos. Montaje genérico respeta y actualiza convenciones noir. La masacre del Nite Owl: overlapping action para horror. Montaje invisible que permite complejidad narrativa.`,
      insightsGenerated: [
        'Los principios de Dmytryk siguen vigentes',
        'El neo-noir requiere mayor eficiencia narrativa',
        'El montaje clásico puede servir a narrativas complejas'
      ],
      methodologyApplication: 'Principios clásicos en narrativa contemporánea',
      keyFindings: [
        'La eficiencia narrativa es atemporal',
        'El montaje genérico evoluciona manteniendo bases',
        'Las técnicas de Dmytryk son fundamento sólido'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'classical-hollywood',
      relationshipType: 'complementary',
      synergyDescription: 'Dmytryk codifica y enseña el montaje clásico de Hollywood',
      combinedInsightPotential: 9
    },
    {
      id: 'film-noir-style',
      relationshipType: 'complementary',
      synergyDescription: 'Dmytryk maestro del montaje noir específico',
      combinedInsightPotential: 8
    },
    {
      id: 'genre-theory',
      relationshipType: 'complementary',
      synergyDescription: 'Dmytryk pionero en analizar montaje por géneros',
      combinedInsightPotential: 8
    }
  ]
};
