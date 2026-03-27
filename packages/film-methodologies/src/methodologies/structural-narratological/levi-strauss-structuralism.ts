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

export const LEVI_STRAUSS_STRUCTURALISM: Methodology = {
  metadata: {
    id: 'levi-strauss-structuralism',
    name: 'Estructuralismo Antropológico',
    author: 'Claude Lévi-Strauss',
    year: 1955,
    category: 'structural-narratological',
    complexity: 'advanced',
    timeToLearn: 30,
    prerequisities: ['basic-semiotics'],
    culturalContext: 'Estructuralismo francés',
    language: 'es'
  },
  
  description: `Claude Lévi-Strauss aplicó los principios del estructuralismo lingüístico al análisis de mitos y narrativas, proponiendo que todas las historias humanas se organizan mediante oposiciones binarias fundamentales que reflejan estructuras mentales universales. Su teoría sostiene que el pensamiento humano opera mediante la creación de categorías opuestas (naturaleza/cultura, crudo/cocido, vida/muerte) y que los mitos funcionan como dispositivos lógicos para mediar estas contradicciones irreconciliables. En el cine, este enfoque revela cómo las películas construyen significado a través de sistemas de oposiciones que estructuran tanto la narrativa como los elementos visuales y sonoros. Lévi-Strauss argumenta que estas estructuras binarias no son arbitrarias sino que reflejan patrones cognitivos universales del pensamiento humano.`,
  
  keyConcepts: [
    {
      term: 'Oposiciones Binarias',
      definition: 'Pares de conceptos mutuamente excluyentes que estructuran el pensamiento y la narrativa',
      importance: 'fundamental',
      relatedTerms: ['estructura profunda', 'mitemas']
    },
    {
      term: 'Mitemas',
      definition: 'Unidades mínimas de significado mítico que se combinan para formar narrativas',
      importance: 'fundamental',
      relatedTerms: ['unidad narrativa', 'estructura']
    },
    {
      term: 'Mediación',
      definition: 'Resolución simbólica de contradicciones mediante elementos o personajes intermediarios',
      importance: 'important',
      relatedTerms: ['resolución', 'síntesis']
    },
    {
      term: 'Estructura Profunda vs. Superficial',
      definition: 'Patrones subyacentes universales versus manifestaciones culturales específicas',
      importance: 'important',
      relatedTerms: ['invariantes', 'transformación']
    },
    {
      term: 'Homología Estructural',
      definition: 'Correspondencias entre diferentes niveles de análisis (narrativo, visual, sonoro)',
      importance: 'important',
      relatedTerms: ['isomorfismo', 'paralelismo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de oposiciones',
      description: 'Catalogar todos los pares binarios presentes en la narrativa',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar contrastes en personajes, espacios, valores',
        'Incluir oposiciones visuales y sonoras',
        'No limitarse a oposiciones obvias'
      ],
      commonMistakes: [
        'Forzar oposiciones donde no existen',
        'Ignorar oposiciones sutiles o implícitas'
      ]
    },
    {
      order: 2,
      name: 'Mapeo de relaciones',
      description: 'Establecer cómo se relacionan y articulan las oposiciones entre sí',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Crear diagramas visuales de relaciones',
        'Identificar jerarquías entre oposiciones'
      ]
    },
    {
      order: 3,
      name: 'Análisis paradigmático',
      description: 'Examinar las sustituciones posibles en cada posición estructural',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Considerar qué otros elementos podrían ocupar cada posición',
        'Analizar por qué se eligieron estos elementos específicos'
      ]
    },
    {
      order: 4,
      name: 'Análisis sintagmático',
      description: 'Estudiar cómo se combinan las oposiciones en la narrativa',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de mediadores',
      description: 'Localizar elementos que reconcilian o median entre oposiciones',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Los mediadores suelen ser personajes híbridos o liminales',
        'Pueden ser objetos, espacios o conceptos'
      ]
    },
    {
      order: 6,
      name: 'Construcción del modelo estructural',
      description: 'Crear un diagrama completo de la estructura narrativa',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Revela estructuras profundas de significado no evidentes en superficie',
    'Aplicable a cualquier tipo de narrativa o género',
    'Conecta el cine con patrones culturales y mentales amplios',
    'Útil para análisis ideológico y cultural',
    'Permite comparaciones interculturales'
  ],
  
  limitations: [
    'Puede sobresimplificar narrativas complejas o ambiguas',
    'Ignora contextos históricos y sociales específicos',
    'Dificultad con narrativas que evitan deliberadamente el binarismo',
    'Tendencia al universalismo que puede borrar especificidades culturales'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Claude Lévi-Strauss'],
      title: 'Structural Anthropology',
      year: 1963,
      publisher: 'Basic Books',
      essential: true
    },
    {
      type: 'book',
      authors: ['Claude Lévi-Strauss'],
      title: 'The Raw and the Cooked',
      year: 1969,
      publisher: 'Harper & Row',
      essential: true
    },
    {
      type: 'book',
      authors: ['Claude Lévi-Strauss'],
      title: 'Myth and Meaning',
      year: 1978,
      publisher: 'University of Toronto Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Terence Hawkes'],
      title: 'Structuralism and Semiotics',
      year: 2003,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Avatar',
        year: 2009,
        director: 'James Cameron'
      },
      analysisExcerpt: `Avatar estructura su narrativa mediante oposiciones binarias claras: Naturaleza/Tecnología (Na\'vi vs. Humanos), Primitivo/Civilizado (Pandora vs. Tierra), Colectivo/Individual (conexión con Eywa vs. corporación), Espiritual/Material (árbol sagrado vs. unobtanium). Jake Sully funciona como mediador perfecto: humano que se vuelve Na\'vi, marine que se vuelve guerrero tribal, parálisis/movilidad a través del avatar. La película resuelve las contradicciones mediante la victoria de lo natural-espiritual sobre lo tecnológico-material.`,
      insightsGenerated: [
        'Jake Sully como mediador entre mundos opuestos',
        'La tecnología del avatar permite la mediación literal entre oposiciones',
        'El film privilegia consistentemente un lado de cada oposición'
      ],
      methodologyApplication: 'Identificación sistemática de oposiciones y análisis de su resolución narrativa',
      keyFindings: [
        'Las oposiciones binarias estructuran todos los niveles del film',
        'La mediación ocurre tanto literal (avatar) como simbólicamente',
        'El film presenta una crítica ecológica mediante estructura mítica'
      ]
    },
    {
      film: {
        title: 'Blade Runner',
        year: 1982,
        director: 'Ridley Scott'
      },
      analysisExcerpt: `Blade Runner problematiza la oposición fundamental Humano/Artificial mediante múltiples niveles: Orgánico/Sintético (humanos vs. replicantes), Memoria real/Implantada, Mortal/Inmortal (vida limitada vs. fecha de caducidad), Empático/Frío (test Voight-Kampff). La ambigüedad de Deckard representa la crisis del sistema binario mismo. Los replicantes muestran más "humanidad" que los humanos, invirtiendo y cuestionando las oposiciones tradicionales.`,
      insightsGenerated: [
        'El film deconstruye las oposiciones binarias tradicionales',
        'La ambigüedad de Deckard impide una mediación clara',
        'Los replicantes invierten las expectativas de cada oposición'
      ],
      methodologyApplication: 'Análisis de cómo el film subvierte y problematiza las oposiciones binarias',
      keyFindings: [
        'Blade Runner usa el estructuralismo contra sí mismo',
        'La imposibilidad de mediación refleja ansiedad posmoderna',
        'Las oposiciones se vuelven indecidibles, no resueltas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'derrida-deconstruction',
      relationshipType: 'dialectical',
      synergyDescription: 'Derrida deconstruye las oposiciones binarias que Lévi-Strauss identifica como fundamentales',
      combinedInsightPotential: 9
    },
    {
      id: 'jung-archetypes',
      relationshipType: 'complementary',
      synergyDescription: 'Jung ofrece una dimensión psicológica a las estructuras universales de Lévi-Strauss',
      combinedInsightPotential: 8
    },
    {
      id: 'greimas-semiotic-square',
      relationshipType: 'synthetic',
      synergyDescription: 'Greimas formaliza y expande el análisis de oposiciones con el cuadrado semiótico',
      combinedInsightPotential: 9
    }
  ]
};
