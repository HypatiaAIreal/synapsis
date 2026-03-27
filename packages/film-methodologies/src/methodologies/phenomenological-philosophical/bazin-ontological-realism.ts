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

export const BAZIN_ONTOLOGICAL_REALISM: Methodology = {
  metadata: {
    id: 'bazin-ontological-realism',
    name: 'Realismo Ontológico',
    author: 'André Bazin',
    year: 1958,
    category: 'phenomenological-philosophical',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['film-history', 'basic-philosophy'],
    culturalContext: 'Crítica cinematográfica francesa post-guerra',
    language: 'es'
  },
  
  description: `André Bazin revolucionó la teoría cinematográfica con su defensa del realismo ontológico, argumentando que el cine tiene una relación única con la realidad basada en la naturaleza fotográfica de la imagen. Para Bazin, el cine satisface nuestra "obsesión por el realismo" y nuestro deseo de "embalsamar el tiempo", preservando la realidad en su duración. Su concepto de la "imagen-hecho" sostiene que la imagen cinematográfica mantiene una conexión existencial con su referente a través de la huella lumínica. Bazin defendió técnicas como el plano-secuencia y la profundidad de campo porque respetan la continuidad espacio-temporal y la ambigüedad de lo real, permitiendo al espectador ejercer libertad interpretativa. Criticó el montaje manipulador por imponer significados, prefiriendo un cine que revele la realidad en lugar de construirla.`,
  
  keyConcepts: [
    {
      term: 'Realismo Ontológico',
      definition: 'Conexión existencial entre la imagen cinematográfica y la realidad que representa',
      importance: 'fundamental',
      relatedTerms: ['imagen-hecho', 'huella luminosa']
    },
    {
      term: 'Complejo de la Momia',
      definition: 'Deseo humano fundamental de preservar la vida contra el paso del tiempo',
      importance: 'fundamental',
      relatedTerms: ['embalsamamiento', 'preservación temporal']
    },
    {
      term: 'Plano-Secuencia',
      definition: 'Toma continua que respeta la unidad espacio-temporal de la acción',
      importance: 'fundamental',
      relatedTerms: ['duración real', 'continuidad']
    },
    {
      term: 'Profundidad de Campo',
      definition: 'Técnica que mantiene múltiples planos en foco, permitiendo libertad perceptiva',
      importance: 'fundamental',
      relatedTerms: ['democracia perceptiva', 'ambigüedad']
    },
    {
      term: 'Montaje Prohibido',
      definition: 'Situaciones donde el montaje destruiría la verdad del evento',
      importance: 'important',
      relatedTerms: ['unidad espacial', 'integridad del evento']
    },
    {
      term: 'Transparencia',
      definition: 'Ideal estético de borrar las marcas de enunciación cinematográfica',
      importance: 'important',
      relatedTerms: ['invisibilidad del estilo', 'ventana al mundo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de imagen-hecho',
      description: 'Localizar momentos donde la imagen mantiene conexión directa con la realidad',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Buscar tomas que preserven la integridad espacial y temporal',
        'Identificar momentos donde la cámara "registra" más que "construye"',
        'Notar ausencia de manipulación evidente'
      ],
      commonMistakes: [
        'Confundir realismo estilístico con realismo ontológico',
        'Ignorar que toda imagen implica selección'
      ]
    },
    {
      order: 2,
      name: 'Análisis de duración',
      description: 'Examinar cómo el film trata el tiempo real versus tiempo cinematográfico',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar planos-secuencia significativos',
        'Analizar respeto por tiempo real de acciones',
        'Buscar momentos de "tiempo muerto" revelador'
      ]
    },
    {
      order: 3,
      name: 'Estudio de profundidad de campo',
      description: 'Analizar uso de foco profundo y sus implicaciones',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Examinar qué elementos permanecen en foco simultáneamente',
        'Considerar las opciones interpretativas que ofrece al espectador'
      ]
    },
    {
      order: 4,
      name: 'Evaluación del montaje',
      description: 'Identificar tipos de montaje y su relación con la realidad',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Distinguir montaje analítico de sintético',
        'Buscar momentos de "montaje prohibido"'
      ]
    },
    {
      order: 5,
      name: 'Análisis de transparencia',
      description: 'Evaluar el grado de invisibilidad del dispositivo cinematográfico',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis ontológica',
      description: 'Evaluar la relación global del film con la realidad',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Fundamenta una ética del cine basada en respeto a la realidad',
    'Valora la libertad interpretativa del espectador',
    'Ofrece criterios estéticos claros y coherentes',
    'Influyó profundamente en el cine moderno',
    'Conecta técnica cinematográfica con filosofía'
  ],
  
  limitations: [
    'Puede idealizar la transparencia como único valor',
    'Sesgo contra el montaje puede limitar apreciación',
    'Noción de realidad puede ser ingenua filosóficamente',
    'Menos aplicable a cine digital o animación',
    'Privilegia ciertos géneros sobre otros'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['André Bazin'],
      title: 'What Is Cinema? Vol. 1',
      year: 2005,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['André Bazin'],
      title: 'What Is Cinema? Vol. 2',
      year: 2005,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Dudley Andrew'],
      title: 'André Bazin',
      year: 1978,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Dudley Andrew'],
      title: 'What Cinema Is!',
      year: 2010,
      publisher: 'Wiley-Blackwell',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Citizen Kane',
        year: 1941,
        director: 'Orson Welles'
      },
      analysisExcerpt: `Citizen Kane ejemplifica los principios bazinianos a través de su revolucionario uso de la profundidad de campo. En la famosa escena del intento de suicidio de Susan, tres planos narrativos coexisten: primer plano (veneno), plano medio (Susan inconsciente), fondo (Kane entrando). La profundidad de campo permite al espectador elegir dónde mirar, creando una "democracia perceptiva". Los planos-secuencia preservan la continuidad temporal, mientras que la composición en profundidad revela relaciones espaciales y psicológicas simultáneamente.`,
      insightsGenerated: [
        'La profundidad de campo crea ambigüedad interpretativa productiva',
        'El plano-secuencia respeta la integridad del evento dramático',
        'La técnica revela sin imponer significados'
      ],
      methodologyApplication: 'Análisis de profundidad de campo y plano-secuencia como revelación de realidad',
      keyFindings: [
        'Welles anticipa principios del realismo baziniano',
        'La forma cinematográfica puede ser ética',
        'La ambigüedad visual refleja complejidad psicológica'
      ]
    },
    {
      film: {
        title: 'Umberto D.',
        year: 1952,
        director: 'Vittorio De Sica'
      },
      analysisExcerpt: `Umberto D. representa el ideal baziniano del neorrealismo. La secuencia de la criada preparando café ejemplifica el "tiempo muerto" significativo: acciones cotidianas filmadas en su duración real sin dramatización. El uso de no-actores, locaciones reales y situaciones ordinarias crea transparencia ontológica. De Sica evita el montaje manipulador, prefiriendo planos medios y largos que respetan la integridad espacial. El film revela la dignidad en lo cotidiano sin imponerla mediante técnica.`,
      insightsGenerated: [
        'El tiempo muerto puede ser profundamente revelador',
        'La transparencia estilística permite emergencia de lo real',
        'Lo ordinario contiene dimensión ontológica profunda'
      ],
      methodologyApplication: 'Análisis de transparencia neorrealista y tiempo real',
      keyFindings: [
        'El neorrealismo cumple el ideal baziniano',
        'La no-dramatización puede intensificar el impacto',
        'El respeto por la duración revela verdades ocultas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'kracauer-physical-reality',
      relationshipType: 'parallel',
      synergyDescription: 'Kracauer comparte con Bazin la defensa del realismo pero enfatiza más lo material',
      combinedInsightPotential: 8
    },
    {
      id: 'cavell-world-viewed',
      relationshipType: 'complementary',
      synergyDescription: 'Cavell desarrolla filosóficamente las intuiciones ontológicas de Bazin',
      combinedInsightPotential: 9
    },
    {
      id: 'deleuze-movement-image',
      relationshipType: 'dialectical',
      synergyDescription: 'Deleuze reconoce a Bazin pero propone una ontología más compleja',
      combinedInsightPotential: 9
    }
  ]
};
