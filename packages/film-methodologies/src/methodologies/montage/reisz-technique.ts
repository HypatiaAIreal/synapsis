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

export const REISZ_TECHNIQUE: Methodology = {
  metadata: {
    id: 'reisz-technique',
    name: 'Técnica del Montaje',
    author: 'Karel Reisz',
    year: 1953,
    category: 'montage',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['basic-editing'],
    culturalContext: 'Free Cinema británico',
    language: 'es'
  },
  
  description: `Karel Reisz, cineasta checo-británico y crítico, escribió uno de los manuales de montaje más influyentes, combinando análisis técnico riguroso con sensibilidad artística. Su enfoque pragmático pero sofisticado examina el montaje como oficio que requiere tanto habilidad técnica como intuición creativa. Reisz distingue entre montaje "mecánico" (continuidad básica) y "creativo" (expresión artística), argumentando que el dominio del primero es prerequisito para el segundo. Su análisis del "tiempo cinematográfico" explora cómo el montaje crea duraciones psicológicas distintas del tiempo real. Reisz fue pionero en analizar el montaje documental, mostrando cómo la "realidad" se construye mediante selección y ordenamiento. Como co-fundador del Free Cinema británico, Reisz también practicó formas más experimentales, integrando tradiciones documentales y narrativas.`,
  
  keyConcepts: [
    {
      term: 'Montaje Mecánico/Creativo',
      definition: 'Técnica básica de continuidad vs. expresión artística personal',
      importance: 'fundamental',
      relatedTerms: ['técnica', 'arte', 'expresión']
    },
    {
      term: 'Tiempo Cinematográfico',
      definition: 'Duración psicológica creada por montaje vs. tiempo real',
      importance: 'fundamental',
      relatedTerms: ['duración', 'tiempo psicológico', 'percepción']
    },
    {
      term: 'Montaje Invisible',
      definition: 'Edición que no llama la atención sobre sí misma',
      importance: 'important',
      relatedTerms: ['transparencia', 'fluidez', 'continuidad']
    },
    {
      term: 'Continuidad Dinámica',
      definition: 'Fluidez narrativa con propósito dramático',
      importance: 'important',
      relatedTerms: ['flujo', 'propósito', 'drama']
    },
    {
      term: 'Montaje Documental',
      definition: 'Construcción de "realidad" mediante selección y orden',
      importance: 'important',
      relatedTerms: ['documental', 'construcción', 'selección']
    },
    {
      term: 'Puntuación Visual',
      definition: 'El montaje como gramática cinematográfica',
      importance: 'important',
      relatedTerms: ['gramática', 'sintaxis', 'puntuación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Distinción mecánico/creativo',
      description: 'Identificar niveles de montaje en secuencias',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Lo mecánico asegura comprensión',
        'Lo creativo añade expresión',
        'Ambos son necesarios'
      ],
      commonMistakes: [
        'Despreciar lo mecánico como inferior',
        'Intentar creatividad sin base técnica'
      ]
    },
    {
      order: 2,
      name: 'Análisis de tiempo cinematográfico',
      description: 'Examinar manipulaciones temporales',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Comparar duración real vs. percibida',
        'Identificar compresiones y expansiones',
        'Analizar el propósito de cada manipulación'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de invisibilidad',
      description: 'Identificar montaje transparente',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'El mejor montaje pasa desapercibido',
        'Buscar fluidez natural',
        'Notar cuándo se rompe la invisibilidad'
      ]
    },
    {
      order: 4,
      name: 'Examen de continuidad dinámica',
      description: 'Analizar fluidez con propósito',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de construcción documental',
      description: 'Ver cómo se construye la "realidad"',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis de puntuación',
      description: 'Examinar gramática visual del montaje',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Balance perfecto entre teoría y práctica',
    'Claridad pedagógica excepcional',
    'Aplicabilidad amplia a diversos estilos',
    'Integra documental y ficción',
    'Sensibilidad artística con rigor técnico',
    'Influencia duradera en formación editorial'
  ],
  
  limitations: [
    'Puede parecer conservador vs. vanguardias',
    'Sesgo hacia montaje invisible',
    'Menos experimental que contemporáneos',
    'Británico-céntrico en ejemplos',
    'Fechado en aspectos tecnológicos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Karel Reisz', 'Gavin Millar'],
      title: 'The Technique of Film Editing',
      year: 1968,
      publisher: 'Focal Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Karel Reisz'],
      title: 'The Technique of Film Editing',
      year: 1953,
      publisher: 'Focal Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Eva Orbanz'],
      title: 'Journey to a Legend and Back: The British Realistic Film',
      year: 1977,
      publisher: 'Edition Volker Spiess',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Saturday Night and Sunday Morning',
        year: 1960,
        director: 'Karel Reisz'
      },
      analysisExcerpt: `Reisz aplica sus propias teorías mezclando ficción y técnicas documentales. Montaje mecánico impecable asegura claridad narrativa. Montaje creativo en secuencias de fábrica: ritmo de máquinas = alienación. Tiempo cinematográfico: sábado noche expandido (libertad), lunes comprimido (opresión). Continuidad dinámica entre escenas de trabajo/ocio revela crítica social. Montaje "invisible" roto estratégicamente para énfasis. Puntuación visual: cortes como respiraciones entre rutina y escape.`,
      insightsGenerated: [
        'El Free Cinema integra documento y ficción via montaje',
        'El tiempo cinematográfico puede expresar crítica social',
        'La invisibilidad rota conscientemente crea énfasis'
      ],
      methodologyApplication: 'Síntesis de montaje documental y narrativo',
      keyFindings: [
        'Reisz practica lo que teoriza con consistencia',
        'El montaje puede ser simultáneamente invisible y expresivo',
        'La técnica sólida permite experimentación controlada'
      ]
    },
    {
      film: {
        title: 'The 400 Blows',
        year: 1959,
        director: 'François Truffaut'
      },
      analysisExcerpt: `Truffaut ejemplifica los principios de Reisz en la Nouvelle Vague. Montaje invisible revolucionario: fluidez que parece improvisada pero está calculada. Tiempo cinematográfico subjetivo: la infancia percibida. Continuidad dinámica: cada corte avanza comprensión de Antoine. Técnicas documentales en ficción: París real como personaje. La famosa carrera final: montaje creativo puro, tiempo expandido = libertad. Puntuación sutil: cortes como latidos del corazón adolescente.`,
      insightsGenerated: [
        'La Nouvelle Vague aplica principios de Reisz innovadoramente',
        'El montaje invisible puede ser radical',
        'La subjetividad requiere técnica mecánica perfecta'
      ],
      methodologyApplication: 'Montaje invisible al servicio de revolución estilística',
      keyFindings: [
        'Los principios de Reisz trascienden movimientos',
        'La base técnica permite libertad creativa',
        'El tiempo cinematográfico expresa estados internos'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'pudovkin-constructive',
      relationshipType: 'complementary',
      synergyDescription: 'Reisz sintetiza y moderniza los principios constructivos de Pudovkin',
      combinedInsightPotential: 8
    },
    {
      id: 'documentary-editing',
      relationshipType: 'complementary',
      synergyDescription: 'Reisz pionero en teorizar montaje documental junto al narrativo',
      combinedInsightPotential: 9
    },
    {
      id: 'nouvelle-vague',
      relationshipType: 'hierarchical',
      synergyDescription: 'Los principios de Reisz influencian la Nueva Ola francesa',
      combinedInsightPotential: 8
    }
  ]
};
