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

export const MURCH_BLINK: Methodology = {
  metadata: {
    id: 'murch-blink',
    name: 'In the Blink of an Eye',
    author: 'Walter Murch',
    year: 1995,
    category: 'montage',
    complexity: 'intermediate',
    timeToLearn: 20,
    prerequisities: ['basic-editing', 'film-psychology'],
    culturalContext: 'Post-producción digital Hollywood',
    language: 'es'
  },
  
  description: `Walter Murch, legendario editor y diseñador de sonido, desarrolló una teoría del montaje profundamente humanista basada en la fisiología y psicología de la percepción. Su concepto central es que el corte cinematográfico replica el parpadeo natural - ambos son formas de procesar información y cambiar punto de vista mental. Murch estableció la "Regla de Seis" jerárquica para evaluar dónde cortar: emoción (51%), historia (23%), ritmo (10%), línea de mirada (7%), plano bidimensional (5%) y espacio tridimensional (4%). Esta jerarquía revolucionaria prioriza la verdad emocional sobre la continuidad técnica. Murch también teorizó sobre el montaje digital no-lineal como retorno a una forma más escultural y musical de trabajar, liberando al editor de la linealidad física del celuloide.`,
  
  keyConcepts: [
    {
      term: 'Blink Theory',
      definition: 'El corte como parpadeo mental que procesa información',
      importance: 'fundamental',
      relatedTerms: ['parpadeo', 'procesamiento', 'cognición']
    },
    {
      term: 'Regla de Seis',
      definition: 'Jerarquía: Emoción > Historia > Ritmo > Mirada > 2D > 3D',
      importance: 'fundamental',
      relatedTerms: ['jerarquía', 'prioridades', 'decisión']
    },
    {
      term: 'Densidad de Imagen',
      definition: 'Cantidad de información procesable por plano',
      importance: 'important',
      relatedTerms: ['información visual', 'complejidad']
    },
    {
      term: 'Montaje Vertical',
      definition: 'Sincronización e integración de audio y visual',
      importance: 'important',
      relatedTerms: ['sonido', 'sincronización', 'capas']
    },
    {
      term: 'Flujo Onírico',
      definition: 'Lógica de sueño aplicada al montaje',
      importance: 'important',
      relatedTerms: ['sueño', 'asociación', 'fluidez']
    },
    {
      term: 'Respiración del Film',
      definition: 'Ritmo orgánico natural del montaje',
      importance: 'important',
      relatedTerms: ['ritmo orgánico', 'tempo natural']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Evaluación según Regla de Seis',
      description: 'Aplicar la jerarquía para cada decisión de corte',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Siempre priorizar emoción sobre técnica',
        'No sacrificar niveles superiores por inferiores',
        'La continuidad perfecta es la menor prioridad'
      ],
      commonMistakes: [
        'Obsesionarse con continuidad técnica',
        'Ignorar el impacto emocional del corte'
      ]
    },
    {
      order: 2,
      name: 'Identificación de parpadeos naturales',
      description: 'Encontrar puntos orgánicos de corte',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Observar cuándo los actores parpadean',
        'Buscar pausas naturales del pensamiento',
        'Sentir el ritmo interno de la escena'
      ]
    },
    {
      order: 3,
      name: 'Análisis de densidad',
      description: 'Evaluar información por plano',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Más densidad requiere más duración',
        'Considerar complejidad visual y conceptual'
      ]
    },
    {
      order: 4,
      name: 'Examen de flujo emocional',
      description: 'Priorizar verdad emocional sobre técnica',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Búsqueda de respiración',
      description: 'Identificar y respetar ritmo natural',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Integración sonido/imagen',
      description: 'Crear montaje vertical unificado',
      timeEstimate: 90,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Humaniza la teoría técnica del montaje',
    'Prioriza emoción sobre convención',
    'Integra sonido sistemáticamente',
    'Aplicabilidad práctica inmediata',
    'Base fisiológica/psicológica sólida',
    'Adaptado perfectamente a era digital'
  ],
  
  limitations: [
    'Menos sistemático que teorías estructuralistas',
    'Sesgo hacia cine narrativo convencional',
    'La jerarquía puede ser cuestionable',
    'Metáfora del parpadeo tiene límites',
    'Occidentalcéntrico en sus asunciones'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Walter Murch'],
      title: 'In the Blink of an Eye: A Perspective on Film Editing',
      year: 2001,
      publisher: 'Silman-James Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Michael Ondaatje'],
      title: 'The Conversations: Walter Murch and the Art of Editing Film',
      year: 2002,
      publisher: 'Knopf',
      essential: true
    },
    {
      type: 'article',
      authors: ['Walter Murch'],
      title: 'Dense Clarity - Clear Density',
      year: 2005,
      journal: 'Transom Review',      
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Apocalypse Now',
        year: 1979,
        director: 'Francis Ford Coppola'
      },
      analysisExcerpt: `Murch editó Apocalypse Now revolucionando el montaje sonoro. Helicópteros/ventilador: transición onírica perfecta, un "parpadeo" entre Vietnam y Saigón. Densidad de imagen extrema en secuencias de combate requiere cortes más largos. Emoción sobre continuidad: saltos temporales que preservan impacto psicológico. El diseño sonoro funciona como montaje paralelo constante. La respiración del film alterna momentos contemplativos con caos. Montaje vertical: hasta 6 pistas de sonido creando espacio tridimensional.`,
      insightsGenerated: [
        'El sonido puede liderar el montaje visual',
        'Los "parpadeos" pueden ser transiciones oníricas',
        'La densidad extrema requiere nuevo acercamiento al ritmo'
      ],
      methodologyApplication: 'Integración revolucionaria de sonido y montaje emocional',
      keyFindings: [
        'El montaje moderno es necesariamente audiovisual',
        'La emoción justifica cualquier ruptura de continuidad',
        'El flujo onírico conecta realidades dispares'
      ]
    },
    {
      film: {
        title: 'The English Patient',
        year: 1996,
        director: 'Anthony Minghella'
      },
      analysisExcerpt: `Murch ganó el Oscar por editar The English Patient. Múltiples líneas temporales unidas por "parpadeos" de memoria. Transiciones fluidas entre pasado/presente mediante objetos o gestos compartidos. La Regla de Seis en acción: cortes emocionales sobre geográficos. Densidad poética de imágenes del desierto permite contemplación. Montaje vertical: música árabe/occidental entrelazadas. La respiración alterna intimidad y épica. Cada corte es un parpadeo de memoria o deseo.`,
      insightsGenerated: [
        'La memoria funciona como serie de parpadeos',
        'Los objetos pueden ser puntos de corte emocional',
        'El montaje puede ser lírico sin perder narrativa'
      ],
      methodologyApplication: 'Montaje como flujo de conciencia estructurado',
      keyFindings: [
        'El parpadeo mental organiza memorias fragmentadas',
        'La emoción crea su propia continuidad',
        'El montaje poético respeta la densidad de imagen'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'eisenstein-montage',
      relationshipType: 'synthetic',
      synergyDescription: 'Murch humaniza lo que Eisenstein intelectualiza, emoción sobre ideología',
      combinedInsightPotential: 8
    },
    {
      id: 'tarkovsky-time',
      relationshipType: 'complementary',
      synergyDescription: 'Ambos respetan ritmos orgánicos pero difieren en aproximación al corte',
      combinedInsightPotential: 7
    },
    {
      id: 'digital-editing',
      relationshipType: 'complementary',
      synergyDescription: 'Murch teoriza las posibilidades creativas de la edición no-lineal',
      combinedInsightPotential: 9
    }
  ]
};
