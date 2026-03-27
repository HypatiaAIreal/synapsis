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

export const TODOROV_NARRATIVE_THEORY: Methodology = {
  metadata: {
    id: 'todorov-narrative-theory',
    name: 'Teoría del Relato',
    author: 'Tzvetan Todorov',
    year: 1969,
    category: 'structural-narratological',
    complexity: 'basic',
    timeToLearn: 15,
    prerequisities: [],
    culturalContext: 'Estructuralismo francés',
    language: 'es'
  },
  
  description: `Tzvetan Todorov desarrolló una teoría narrativa que conceptualiza toda historia como un movimiento desde un equilibrio inicial, a través de una perturbación, hacia un nuevo equilibrio. Su modelo de cinco etapas (equilibrio - perturbación - reconocimiento - intento de reparación - nuevo equilibrio) proporciona una estructura elemental pero poderosa para entender la dinámica narrativa. Todorov también contribuyó significativamente a la teoría de los géneros, especialmente el fantástico, argumentando que los géneros se definen por las convenciones estructurales y temáticas específicas. Su trabajo enfatiza la naturaleza transformacional de la narrativa: las historias no simplemente presentan eventos, sino que trazan transformaciones fundamentales en el mundo narrativo.`,
  
  keyConcepts: [
    {
      term: 'Cinco Etapas Narrativas',
      definition: 'Equilibrio inicial / Perturbación / Reconocimiento / Reparación / Nuevo equilibrio',
      importance: 'fundamental',
      relatedTerms: ['transformación', 'estructura narrativa']
    },
    {
      term: 'Proposiciones Narrativas',
      definition: 'Unidades básicas de acción que pueden combinarse para formar secuencias',
      importance: 'important',
      relatedTerms: ['unidad narrativa', 'acción']
    },
    {
      term: 'Transformación',
      definition: 'Cambio fundamental de estado narrativo entre equilibrio inicial y final',
      importance: 'fundamental',
      relatedTerms: ['cambio', 'evolución narrativa']
    },
    {
      term: 'Lo Fantástico',
      definition: 'Vacilación entre explicaciones naturales y sobrenaturales de eventos',
      importance: 'important',
      relatedTerms: ['género', 'ambigüedad']
    },
    {
      term: 'Sintaxis Narrativa',
      definition: 'Reglas de combinación de elementos narrativos',
      importance: 'important',
      relatedTerms: ['estructura', 'gramática narrativa']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del equilibrio inicial',
      description: 'Localizar el estado de normalidad o estabilidad al inicio',
      timeEstimate: 15,
      difficulty: 'basic',
      tips: [
        'Buscar el estado "normal" del mundo narrativo',
        'Puede ser brevemente mostrado o implícito',
        'No confundir con escenas introductorias de acción'
      ],
      commonMistakes: [
        'Identificar falsas calmas como equilibrio',
        'Ignorar equilibrios implícitos o referidos'
      ]
    },
    {
      order: 2,
      name: 'Localización de la perturbación',
      description: 'Identificar el evento que rompe el equilibrio inicial',
      timeEstimate: 15,
      difficulty: 'basic',
      tips: [
        'Generalmente es el "incidente incitador"',
        'Puede ser gradual o súbito'
      ]
    },
    {
      order: 3,
      name: 'Análisis del reconocimiento',
      description: 'Determinar cuándo los personajes toman conciencia del problema',
      timeEstimate: 20,
      difficulty: 'intermediate',
      tips: [
        'No siempre es inmediato tras la perturbación',
        'Diferentes personajes pueden reconocer en diferentes momentos'
      ]
    },
    {
      order: 4,
      name: 'Examen de intentos de reparación',
      description: 'Analizar las acciones para restaurar el equilibrio',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Pueden ser múltiples intentos fallidos',
        'Constituyen el grueso de la acción narrativa'
      ]
    },
    {
      order: 5,
      name: 'Evaluación del nuevo equilibrio',
      description: 'Comparar el estado final con el inicial',
      timeEstimate: 20,
      difficulty: 'intermediate',
      tips: [
        'El nuevo equilibrio nunca es idéntico al inicial',
        'Evaluar qué ha cambiado fundamentalmente'
      ]
    },
    {
      order: 6,
      name: 'Mapeo de transformaciones',
      description: 'Analizar los cambios fundamentales entre estados',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Modelo simple y universalmente aplicable',
    'Útil para estructurar guiones y analizar arcos narrativos',
    'Revela la dinámica fundamental del cambio narrativo',
    'Base excelente para principiantes en análisis',
    'Aplicable a cualquier género cinematográfico'
  ],
  
  limitations: [
    'Puede ser demasiado simplificador para narrativas complejas',
    'Asume progresión lineal que no todas las películas siguen',
    'Dificultad con narrativas cíclicas o abiertas',
    'No considera aspectos estilísticos o formales'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Tzvetan Todorov'],
      title: 'The Poetics of Prose',
      year: 1977,
      publisher: 'Cornell University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Tzvetan Todorov'],
      title: 'The Fantastic: A Structural Approach to a Literary Genre',
      year: 1975,
      publisher: 'Cornell University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Tzvetan Todorov'],
      title: 'Introduction to Poetics',
      year: 1981,
      publisher: 'University of Minnesota Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Jaws',
        year: 1975,
        director: 'Steven Spielberg'
      },
      analysisExcerpt: `Jaws ejemplifica perfectamente el modelo de Todorov. Equilibrio inicial: Amity Island preparándose para la temporada turística de verano. Perturbación: Ataques de tiburón amenazan la economía y seguridad. Reconocimiento: Tras varias muertes, se acepta la realidad de la amenaza. Reparación: Brody, Quint y Hooper cazan al tiburón. Nuevo equilibrio: Pueblo salvado pero transformado; Brody supera su miedo al agua, Amity debe reconstruir su reputación. La transformación fundamental: de la negación comunitaria a la confrontación con fuerzas naturales.`,
      insightsGenerated: [
        'El reconocimiento tardío intensifica el conflicto',
        'El nuevo equilibrio implica maduración personal y comunitaria',
        'La estructura simple permite focus en suspense y caracterización'
      ],
      methodologyApplication: 'Identificación clara de las cinco etapas en progresión lineal',
      keyFindings: [
        'La simplicidad estructural no impide complejidad temática',
        'El modelo de Todorov es ideal para thrillers',
        'Las transformaciones operan en múltiples niveles'
      ]
    },
    {
      film: {
        title: 'Parasite',
        year: 2019,
        director: 'Bong Joon-ho'
      },
      analysisExcerpt: `Parasite subvierte sutilmente el modelo de Todorov. Equilibrio inicial: Familia Kim en pobreza pero unida. Perturbación: Oportunidad de infiltrarse en casa Park. Reconocimiento: Descubrimiento del búnker y sus ocupantes. Reparación: Intento violento de mantener la fachada. Nuevo equilibrio: Destrucción total, Ki-taek en el búnker. Sin embargo, el film cuestiona si existió algún equilibrio real alguna vez, sugiriendo que la desigualdad sistémica hace imposible cualquier equilibrio verdadero.`,
      insightsGenerated: [
        'El "equilibrio" inicial ya es un desequilibrio social',
        'La violencia como falsa reparación de problemas sistémicos',
        'El nuevo equilibrio es más desequilibrado que el inicial'
      ],
      methodologyApplication: 'Aplicación irónica que revela crítica social',
      keyFindings: [
        'Todorov puede usarse para revelar ausencia de equilibrio real',
        'Las cinco etapas pueden ser cíclicas o regresivas',
        'La estructura clásica puede contener crítica radical'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'propp-morphology',
      relationshipType: 'complementary',
      synergyDescription: 'Propp detalla en 31 funciones lo que Todorov simplifica en 5 etapas',
      combinedInsightPotential: 7
    },
    {
      id: 'freytag-pyramid',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos describen arcos narrativos pero Freytag enfoca tensión dramática',
      combinedInsightPotential: 8
    },
    {
      id: 'field-paradigm',
      relationshipType: 'synthetic',
      synergyDescription: 'Field expande el modelo en el paradigma de tres actos hollywoodense',
      combinedInsightPotential: 8
    }
  ]
};
