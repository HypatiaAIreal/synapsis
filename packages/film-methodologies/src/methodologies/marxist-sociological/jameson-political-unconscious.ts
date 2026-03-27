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

export const JAMESON_POLITICAL_UNCONSCIOUS: Methodology = {
  metadata: {
    id: 'jameson-political-unconscious',
    name: 'El Inconsciente Político',
    author: 'Fredric Jameson',
    year: 1981,
    category: 'marxist-sociological',
    complexity: 'expert',
    timeToLearn: 50,
    prerequisities: ['marxist-theory', 'psychoanalysis', 'hermeneutics'],
    culturalContext: 'Marxismo crítico norteamericano',
    language: 'es'
  },
  
  description: `Fredric Jameson desarrolló un método marxista sofisticado que lee todos los textos culturales, incluido el cine, como alegorías inconscientes de luchas sociales e históricas. Su máxima "Always historicize!" demanda situar los films en sus contextos de producción y recepción. Jameson propone que toda interpretación debe pasar por tres horizontes concéntricos: historia política (eventos inmediatos), historia social (luchas de clase), e historia de los modos de producción. Su concepto del "inconsciente político" revela cómo los textos culturales intentan resolver simbólicamente contradicciones sociales irresolubles. Su trabajo sobre el posmodernismo examina cómo el cine contemporáneo refleja la "lógica cultural del capitalismo tardío" - fragmentación, pastiche, nostalgia por pasados simulados. La "cartografía cognitiva" explora cómo los films ayudan a orientarse en la totalidad del sistema mundial.`,
  
  keyConcepts: [
    {
      term: 'Inconsciente Político',
      definition: 'Dimensión reprimida donde textos alegorizan luchas sociales e históricas',
      importance: 'fundamental',
      relatedTerms: ['alegoría', 'represión social', 'interpretación']
    },
    {
      term: 'Tres Horizontes Interpretativos',
      definition: 'Político inmediato / Social-clasista / Modo de producción histórico',
      importance: 'fundamental',
      relatedTerms: ['hermenéutica', 'totalización', 'historización']
    },
    {
      term: 'Acto Socialmente Simbólico',
      definition: 'Texto como intento de resolver imaginariamente contradicciones reales',
      importance: 'fundamental',
      relatedTerms: ['resolución simbólica', 'contradicción', 'ideología']
    },
    {
      term: 'Cartografía Cognitiva',
      definition: 'Mapeo imaginario de la totalidad social imposible de representar directamente',
      importance: 'important',
      relatedTerms: ['totalidad', 'orientación', 'sistema mundial']
    },
    {
      term: 'Ideologema',
      definition: 'Unidad mínima de ideología, concepto que articula intereses de clase',
      importance: 'important',
      relatedTerms: ['ideología', 'clase', 'concepto']
    },
    {
      term: 'Utopía y Ideología',
      definition: 'Doble hermenéutica: todo texto contiene elementos ideológicos y utópicos',
      importance: 'important',
      relatedTerms: ['crítica', 'esperanza', 'dialéctica']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Historización radical',
      description: 'Situar el film en su momento histórico específico',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Investigar contexto de producción detalladamente',
        'Identificar debates y conflictos contemporáneos',
        'No asumir transparencia histórica'
      ],
      commonMistakes: [
        'Historicismo superficial',
        'Ignorar mediaciones entre contexto y texto'
      ]
    },
    {
      order: 2,
      name: 'Identificación de contradicciones',
      description: 'Localizar antagonismos sociales que el film intenta resolver',
      timeEstimate: 90,
      difficulty: 'expert',
      tips: [
        'Buscar tensiones no resueltas en la narrativa',
        'Identificar qué conflictos sociales se representan'
      ]
    },
    {
      order: 3,
      name: 'Análisis de resolución simbólica',
      description: 'Examinar cómo el film "resuelve" imaginariamente contradicciones',
      timeEstimate: 75,
      difficulty: 'expert'
    },
    {
      order: 4,
      name: 'Aplicación de tres horizontes',
      description: 'Expandir interpretación a través de los tres niveles',
      timeEstimate: 120,
      difficulty: 'expert',
      tips: [
        'Comenzar con lo político inmediato',
        'Expandir a luchas de clase',
        'Finalizar con modo de producción'
      ]
    },
    {
      order: 5,
      name: 'Búsqueda del inconsciente político',
      description: 'Identificar alegorías ocultas de lucha social',
      timeEstimate: 90,
      difficulty: 'expert'
    },
    {
      order: 6,
      name: 'Análisis utópico/ideológico',
      description: 'Doble lectura identificando elementos de ambos',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Sofisticación teórica excepcional',
    'Método dialéctico que conecta forma con historia',
    'Análisis totalizante ambicioso',
    'Útil para cine posmoderno complejo',
    'Mantiene horizonte utópico en crítica',
    'Síntesis magistral de múltiples tradiciones teóricas'
  ],
  
  limitations: [
    'Complejidad puede ser intimidante y elitista',
    'Tendencia a imponer alegorías',
    'Totalizante en exceso para algunos gustos',
    'Privilegia interpretación sobre otros placeres',
    'Determinismo económico latente',
    'Dificultad extrema de aplicación práctica'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Fredric Jameson'],
      title: 'The Political Unconscious: Narrative as a Socially Symbolic Act',
      year: 1981,
      publisher: 'Cornell University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Fredric Jameson'],
      title: 'Postmodernism, or, The Cultural Logic of Late Capitalism',
      year: 1991,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Fredric Jameson'],
      title: 'The Geopolitical Aesthetic: Cinema and Space in the World System',
      year: 1995,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Fredric Jameson'],
      title: 'Signatures of the Visible',
      year: 1992,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Blade Runner',
        year: 1982,
        director: 'Ridley Scott'
      },
      analysisExcerpt: `Blade Runner funciona como cartografía cognitiva del capitalismo tardío. Horizonte político: ansiedad por automatización y desempleo en era Reagan. Horizonte social: lucha de clases reimaginada como humanos vs. replicantes. Horizonte modal: transición del capitalismo industrial al informacional. El inconsciente político revela la alegoría del trabajo alienado: replicantes como proletariado perfecto con obsolescencia programada. Los Ángeles multicultural mappea ansiedades sobre globalización. La nostalgia noir por el pasado enmascara la imposibilidad de imaginar futuro post-capitalista. "More human than human" alegoriza la pérdida de humanidad bajo el capital.`,
      insightsGenerated: [
        'Los replicantes alegorizan el trabajo perfecto del capitalismo tardío',
        'La ciudad imposible mapea la totalidad global inimaginable',
        'La humanidad se define por mortalidad/límites vs. capital infinito'
      ],
      methodologyApplication: 'Triple horizonte interpretativo revelando alegorías del capitalismo tardío',
      keyFindings: [
        'La ciencia ficción permite cartografía cognitiva única',
        'El futuro se imagina solo como capitalismo intensificado',
        'La nostalgia formal indica bloqueo utópico'
      ]
    },
    {
      film: {
        title: 'The Wire',
        year: 2002,
        director: 'David Simon et al.'
      },
      analysisExcerpt: `The Wire representa el intento más ambicioso de cartografía cognitiva de la totalidad capitalista americana. Cada temporada mapea una institución: drogas/policia, puerto/trabajo, política, educación, medios. El inconsciente político revela cómo cada reforma fracasa por contradicciones sistémicas irresolubles. Baltimore funciona como alegoría de todo el sistema. La forma serial permite totalización imposible en film único. No hay resolución simbólica satisfactoria porque muestra contradicciones como verdaderamente irresolubles bajo el capitalismo. Único horizonte utópico: los breves momentos de solidaridad auténtica.`,
      insightsGenerated: [
        'La forma serial permite cartografía más completa',
        'Cada institución revela la misma lógica sistémica',
        'La ausencia de resolución es el mensaje político'
      ],
      methodologyApplication: 'Cartografía sistemática de instituciones como alegorías del capital',
      keyFindings: [
        'La televisión puede lograr totalización que el cine no puede',
        'El realismo social puede ser más radical que la fantasía',
        'La desesperanza sistémica contiene crítica utópica'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'lukacs-realism',
      relationshipType: 'dialectical',
      synergyDescription: 'Jameson moderniza y complica el realismo crítico de Lukács',
      combinedInsightPotential: 8
    },
    {
      id: 'althusser-ideology',
      relationshipType: 'synthetic',
      synergyDescription: 'Jameson historiza la teoría estructural de ideología de Althusser',
      combinedInsightPotential: 9
    },
    {
      id: 'benjamin-allegory',
      relationshipType: 'complementary',
      synergyDescription: 'Jameson desarrolla el concepto benjaminiano de alegoría',
      combinedInsightPotential: 9
    }
  ]
};
