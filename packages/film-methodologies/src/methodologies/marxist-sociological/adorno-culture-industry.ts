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

export const ADORNO_CULTURE_INDUSTRY: Methodology = {
  metadata: {
    id: 'adorno-culture-industry',
    name: 'Industria Cultural',
    author: 'Theodor Adorno',
    year: 1944,
    category: 'marxist-sociological',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['critical-theory', 'marxist-philosophy'],
    culturalContext: 'Escuela de Frankfurt en exilio',
    language: 'es'
  },
  
  description: `Theodor Adorno, junto con Max Horkheimer, desarrolló el concepto de "industria cultural" como crítica devastadora del entretenimiento masivo bajo el capitalismo tardío. Para Adorno, el cine comercial ejemplifica cómo la industria cultural produce conformidad mediante la estandarización pseudo-individualizada, donde la aparente variedad oculta una uniformidad fundamental. Su análisis revela cómo las películas de Hollywood funcionan como mercancías que reconcilian a las masas con su dominación, ofreciendo satisfacciones sustitutivas que perpetúan el status quo. Adorno examina la "regresión de la escucha" aplicable al cine: cómo la repetición de fórmulas atrofia la capacidad crítica. Aunque pesimista sobre el cine comercial, valoró el potencial crítico del cine experimental que preserva la negatividad estética.`,
  
  keyConcepts: [
    {
      term: 'Industria Cultural',
      definition: 'Sistema de producción masiva que manufactura conformidad y falsa conciencia',
      importance: 'fundamental',
      relatedTerms: ['masificación', 'estandarización', 'mercancía cultural']
    },
    {
      term: 'Estandarización Pseudo-individualizada',
      definition: 'Falsa variedad que oculta uniformidad estructural de productos culturales',
      importance: 'fundamental',
      relatedTerms: ['homogeneización', 'fórmula', 'repetición']
    },
    {
      term: 'Esquematismo Industrial',
      definition: 'Pre-digestión de experiencia que elimina trabajo interpretativo del espectador',
      importance: 'important',
      relatedTerms: ['simplificación', 'pasividad', 'manipulación']
    },
    {
      term: 'Regresión Perceptiva',
      definition: 'Atrofia de capacidad crítica por exposición a fórmulas repetitivas',
      importance: 'important',
      relatedTerms: ['infantilización', 'degradación', 'embrutecimiento']
    },
    {
      term: 'Reconciliación Falsa',
      definition: 'Conformidad disfrazada de satisfacción con el status quo',
      importance: 'fundamental',
      relatedTerms: ['ideología', 'conformismo', 'falsa conciencia']
    },
    {
      term: 'Negatividad Estética',
      definition: 'Capacidad del arte verdadero de resistir integración y afirmación',
      importance: 'important',
      relatedTerms: ['resistencia', 'crítica', 'autonomía artística']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de estandarización',
      description: 'Detectar fórmulas y patrones repetitivos en la estructura',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar estructuras narrativas formulaicas',
        'Identificar tipos de personajes recurrentes',
        'Analizar resoluciones predecibles'
      ],
      commonMistakes: [
        'Confundir género con estandarización',
        'No ver la fórmula bajo la aparente novedad'
      ]
    },
    {
      order: 2,
      name: 'Análisis de pseudo-individualización',
      description: 'Examinar cómo se disfraza la uniformidad como variedad',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar variaciones superficiales',
        'Buscar la estructura invariable bajo los cambios cosméticos'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de esquematismo',
      description: 'Analizar cómo el film pre-digiere la experiencia',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Examinar explicaciones redundantes',
        'Identificar manipulación emocional obvia'
      ]
    },
    {
      order: 4,
      name: 'Examen de regresión',
      description: 'Evaluar demandas cognitivas y perceptivas del film',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de reconciliación falsa',
      description: 'Analizar qué conflictos sociales se suavizan o niegan',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar finales que restauran el orden sin resolver contradicciones',
        'Identificar qué críticas potenciales se neutralizan'
      ]
    },
    {
      order: 6,
      name: 'Búsqueda de negatividad',
      description: 'Identificar momentos de resistencia estética genuina',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Crítica ideológica poderosa de la mercantilización cultural',
    'Análisis profundo de mecanismos de control social',
    'Atención a efectos sociales y psicológicos del cine',
    'Rigor filosófico excepcional',
    'Presciente sobre desarrollos de la industria del entretenimiento'
  ],
  
  limitations: [
    'Pesimismo excesivo que puede paralizar la acción',
    'Elitismo cultural implícito',
    'Subestima la agencia y resistencia de las audiencias',
    'Rechazo total del placer popular',
    'Nostalgia problemática por la alta cultura burguesa'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Theodor Adorno', 'Max Horkheimer'],
      title: 'Dialectic of Enlightenment',
      year: 2002,
      publisher: 'Stanford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Theodor Adorno'],
      title: 'The Culture Industry: Selected Essays on Mass Culture',
      year: 2001,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Theodor Adorno'],
      title: 'Aesthetic Theory',
      year: 1997,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['J.M. Bernstein'],
      title: 'The Culture Industry Reconsidered',
      year: 1991,
      publisher: 'Polity Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Marvel Cinematic Universe',
        year: 2008,
        director: 'Various'
      },
      analysisExcerpt: `El MCU ejemplifica perfectamente la tesis de Adorno. Estandarización extrema: fórmula origen-conflicto-teamup-victoria repetida infinitamente. Pseudo-individualización: cada héroe parece único pero sigue idéntico arco. Esquematismo: emociones pre-programadas, humor que desarma crítica, conflictos simplificados. Regresión: espectáculo sensorial que atrofia reflexión. Reconciliación falsa: problemas sistémicos resueltos por individuos excepcionales. Incluso la "diversidad" es mercantilizada. La crítica superficial al poder refuerza el sistema que critica.`,
      insightsGenerated: [
        'La serialización intensifica la estandarización industrial',
        'La interconexión narrativa es nueva forma de control total',
        'El fan service reemplaza experiencia estética genuina'
      ],
      methodologyApplication: 'Análisis sistemático de estandarización en franchise contemporáneo',
      keyFindings: [
        'La industria cultural perfeccionó sus mecanismos desde Adorno',
        'La participación fan profundiza la alienación',
        'La crítica superficial inmuniza contra crítica real'
      ]
    },
    {
      film: {
        title: 'Wavelength',
        year: 1967,
        director: 'Michael Snow'
      },
      analysisExcerpt: `Wavelength representa la negatividad estética que Adorno valoraba. Rechaza completamente el esquematismo industrial: 45 minutos de zoom lento frustra expectativas narrativas. Anti-entretenimiento consciente que exige trabajo perceptivo activo. No ofrece reconciliación sino ansiedad productiva. Resiste mercantilización por su rechazo radical del placer convencional. Sin embargo, su hermetismo lo confina a espacios de arte eliminando potencial político masivo. Paradoja: la resistencia estética requiere alejarse del público.`,
      insightsGenerated: [
        'El cine experimental preserva negatividad crítica',
        'La resistencia formal puede ser política',
        'El dilema entre accesibilidad y compromiso estético'
      ],
      methodologyApplication: 'Identificación de estrategias de negatividad estética',
      keyFindings: [
        'El arte autónomo existe pero en márgenes',
        'La negatividad tiene costo: inaccesibilidad',
        'La tensión entre autonomía estética y eficacia política'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'benjamin-mechanical-reproduction',
      relationshipType: 'dialectical',
      synergyDescription: 'Benjamin más optimista sobre potencial democrático que Adorno rechaza',
      combinedInsightPotential: 9
    },
    {
      id: 'marcuse-one-dimensional',
      relationshipType: 'parallel',
      synergyDescription: 'Marcuse extiende análisis de Adorno a toda la sociedad unidimensional',
      combinedInsightPotential: 8
    },
    {
      id: 'hall-encoding-decoding',
      relationshipType: 'dialectical',
      synergyDescription: 'Hall reconoce resistencias que Adorno niega en recepción popular',
      combinedInsightPotential: 8
    }
  ]
};
