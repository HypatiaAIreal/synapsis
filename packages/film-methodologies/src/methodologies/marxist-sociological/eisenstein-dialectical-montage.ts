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

export const EISENSTEIN_DIALECTICAL_MONTAGE: Methodology = {
  metadata: {
    id: 'eisenstein-dialectical-montage',
    name: 'Montaje Dialéctico',
    author: 'Sergei Eisenstein',
    year: 1924,
    category: 'marxist-sociological',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['basic-marxism', 'film-editing'],
    culturalContext: 'Cine soviético revolucionario',
    language: 'es'
  },
  
  description: `Sergei Eisenstein revolucionó tanto la práctica como la teoría cinematográfica con su concepto del montaje como colisión dialéctica de imágenes que produce nuevos significados. Basándose en la dialéctica marxista, Eisenstein concibió el montaje no como continuidad sino como conflicto productivo entre planos que genera síntesis conceptuales en la mente del espectador. Su teoría evolucionó desde el "montaje de atracciones" (choques calculados para producir efectos específicos) hasta conceptos más sofisticados como el "montaje intelectual" (que produce ideas abstractas) y el "montaje vertical" (sincronización de todos los elementos audiovisuales). Eisenstein veía el cine como herramienta para la transformación de la conciencia, capaz de enseñar al público a pensar dialécticamente. Para él, cada elemento del film participa en esta dialéctica total que busca no solo entretener sino revolucionar la percepción.`,
  
  keyConcepts: [
    {
      term: 'Montaje como Colisión',
      definition: 'Conflicto productivo entre planos que genera nuevos significados',
      importance: 'fundamental',
      relatedTerms: ['dialéctica', 'conflicto', 'síntesis']
    },
    {
      term: 'Dialéctica Visual',
      definition: 'Aplicación del método marxista tesis-antítesis-síntesis al cine',
      importance: 'fundamental',
      relatedTerms: ['marxismo', 'contradicción', 'transformación']
    },
    {
      term: 'Montaje de Atracciones',
      definition: 'Choques agresivos calculados para producir efectos específicos en el espectador',
      importance: 'important',
      relatedTerms: ['shock', 'agitación', 'efecto']
    },
    {
      term: 'Montaje Intelectual',
      definition: 'Yuxtaposición que produce conceptos abstractos e ideas',
      importance: 'fundamental',
      relatedTerms: ['concepto', 'abstracción', 'pensamiento']
    },
    {
      term: 'Montaje Vertical',
      definition: 'Orquestación sincrónica de todos los elementos audiovisuales',
      importance: 'important',
      relatedTerms: ['sincronización', 'polifonía', 'totalidad']
    },
    {
      term: 'Pathos',
      definition: 'Estado de éxtasis emocional que lleva al espectador fuera de sí mismo',
      importance: 'important',
      relatedTerms: ['éxtasis', 'emoción', 'transformación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de colisiones',
      description: 'Localizar momentos de conflicto visual/conceptual entre planos',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar contrastes de escala, dirección, ritmo, tono',
        'Identificar oposiciones conceptuales entre imágenes',
        'No confundir con simple contraste, debe generar síntesis'
      ],
      commonMistakes: [
        'Ver toda yuxtaposición como dialéctica',
        'Ignorar colisiones sutiles o conceptuales'
      ]
    },
    {
      order: 2,
      name: 'Análisis dialéctico',
      description: 'Identificar tesis, antítesis y síntesis en cada colisión',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'La síntesis no está en la imagen sino en la mente',
        'Buscar qué nueva idea emerge del conflicto'
      ]
    },
    {
      order: 3,
      name: 'Clasificación del montaje',
      description: 'Categorizar tipos: métrico, rítmico, tonal, armónico, intelectual',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Los tipos pueden superponerse',
        'Identificar el dominante en cada secuencia'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de atracciones',
      description: 'Localizar momentos de shock o agresión calculada',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis del montaje vertical',
      description: 'Examinar la orquestación de imagen, sonido, música, ritmo',
      timeEstimate: 75,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación del efecto revolucionario',
      description: 'Analizar cómo el montaje busca transformar la conciencia',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Teoría revolucionaria que conecta forma cinematográfica con política',
    'Método analítico poderoso para entender el montaje como pensamiento',
    'Expande las posibilidades expresivas y conceptuales del cine',
    'Base filosófica profunda en dialéctica marxista',
    'Influencia duradera en cine político y experimental'
  ],
  
  limitations: [
    'Puede resultar didáctico o propagandístico en exceso',
    'Intelectualismo a veces árido que aliena al espectador',
    'Manipulación emocional evidente puede generar rechazo',
    'Contexto soviético específico limita aplicabilidad universal',
    'Complejidad teórica dificulta aplicación práctica'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Sergei Eisenstein'],
      title: 'Film Form: Essays in Film Theory',
      year: 1949,
      publisher: 'Harcourt Brace',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sergei Eisenstein'],
      title: 'The Film Sense',
      year: 1942,
      publisher: 'Harcourt Brace',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sergei Eisenstein'],
      title: 'Towards a Theory of Montage',
      year: 1991,
      publisher: 'British Film Institute',
      essential: true
    },
    {
      type: 'book',
      authors: ['Richard Taylor'],
      title: 'Sergei Eisenstein: Selected Works (4 vols)',
      year: 2010,
      publisher: 'I.B. Tauris',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Battleship Potemkin',
        year: 1925,
        director: 'Sergei Eisenstein'
      },
      analysisExcerpt: `La secuencia de las escaleras de Odessa ejemplifica el montaje dialéctico en su máxima expresión. Tesis: pueblo solidario descendiendo. Antítesis: soldados mecanizados disparando. Síntesis: despertar de la conciencia revolucionaria. El montaje métrico acelera hasta el paroxismo, el rítmico contrapone movimientos opuestos, el tonal yuxtapone esperanza y horror. Los tres leones de piedra (dormido-despertando-rugiendo) crean montaje intelectual puro: el despertar del pueblo. Cada colisión busca no solo emocionar sino politizar.`,
      insightsGenerated: [
        'El montaje métrico acelera para crear pánico visceral',
        'Las colisiones direccionales desorientan y agreden al espectador',
        'El montaje intelectual transforma objetos en conceptos revolucionarios'
      ],
      methodologyApplication: 'Análisis sistemático de tipos de montaje y sus efectos dialécticos',
      keyFindings: [
        'La forma cinematográfica puede ser inherentemente revolucionaria',
        'El montaje piensa por/con el espectador',
        'La violencia formal refleja y critica la violencia social'
      ]
    },
    {
      film: {
        title: 'The Godfather',
        year: 1972,
        director: 'Francis Ford Coppola'
      },
      analysisExcerpt: `La secuencia del bautizo utiliza principios eisensteinianos en contexto hollywoodense. Montaje paralelo dialéctico: Tesis (ritual sagrado del bautismo) / Antítesis (asesinatos brutales) / Síntesis (Michael como padrino literal y criminal). La yuxtaposición no busca continuidad sino colisión conceptual. Las respuestas litúrgicas ("¿Renuncias a Satanás?") chocan con imágenes de violencia ordenada por Michael. El montaje produce la idea abstracta: el poder criminal como religión perversa, la hipocresía del poder institucional.`,
      insightsGenerated: [
        'Hollywood adaptó el montaje dialéctico para fines narrativos',
        'La colisión sacro/profano genera crítica social',
        'El montaje intelectual funciona incluso en cine comercial'
      ],
      methodologyApplication: 'Identificación de principios eisensteinianos en cine narrativo clásico',
      keyFindings: [
        'Las técnicas revolucionarias pueden ser apropiadas por el cine dominante',
        'El montaje dialéctico trasciende su contexto político original',
        'La forma puede subvertir incluso cuando el contenido no es explícitamente político'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'vertov-kino-eye',
      relationshipType: 'parallel',
      synergyDescription: 'Vertov desarrolla otra aproximación al montaje revolucionario más documental',
      combinedInsightPotential: 9
    },
    {
      id: 'pudovkin-linkage',
      relationshipType: 'dialectical',
      synergyDescription: 'Pudovkin propone montaje como linkage vs. colisión de Eisenstein',
      combinedInsightPotential: 8
    },
    {
      id: 'benjamin-shock',
      relationshipType: 'complementary',
      synergyDescription: 'Benjamin teoriza el shock perceptual que Eisenstein practica',
      combinedInsightPotential: 9
    }
  ]
};
