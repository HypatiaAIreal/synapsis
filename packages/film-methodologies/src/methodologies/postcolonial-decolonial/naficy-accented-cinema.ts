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

export const NAFICY_ACCENTED_CINEMA: Methodology = {
  metadata: {
    id: 'naficy-accented-cinema',
    name: 'Accented Cinema',
    author: 'Hamid Naficy',
    year: 2001,
    category: 'postcolonial-decolonial',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['diaspora-studies', 'film-aesthetics'],
    culturalContext: 'Estudios diaspóricos iraní-americanos',
    language: 'es'
  },
  
  description: `Hamid Naficy teorizó el "accented cinema" - películas hechas por cineastas exílicos y diaspóricos que llevan las marcas de desplazamiento en su forma misma. Este cine está "acentuado" no solo lingüísticamente sino visual, narrativa y temáticamente por la experiencia del exilio. Naficy distingue entre cineastas exílicos (expulsados), diaspóricos (con conexiones comunitarias) y étnicos (nacidos en el país de residencia). Analiza características formales recurrentes: multilingüismo, epistolaridad, cronotopías cerradas/abiertas, narrativas fragmentadas. Su concepto de "modo intersticial de producción" examina cómo estos films se hacen en los márgenes de las industrias dominantes. El accented cinema crea nuevas formas estéticas desde la experiencia del desplazamiento.`,
  
  keyConcepts: [
    {
      term: 'Accented Style',
      definition: 'Marcas formales del desplazamiento en la estética cinematográfica',
      importance: 'fundamental',
      relatedTerms: ['estilo diaspórico', 'estética del exilio']
    },
    {
      term: 'Exílico/Diaspórico/Étnico',
      definition: 'Tres tipos de desplazamiento que producen diferentes acentos cinematográficos',
      importance: 'fundamental',
      relatedTerms: ['tipología', 'modos de desplazamiento']
    },
    {
      term: 'Modo Intersticial',
      definition: 'Producción en los márgenes entre industrias cinematográficas nacionales',
      importance: 'important',
      relatedTerms: ['producción marginal', 'entre-industrias']
    },
    {
      term: 'Cronotopías',
      definition: 'Configuraciones espacio-temporales específicas del cine acentuado',
      importance: 'important',
      relatedTerms: ['espaciotiempo', 'Bakhtin']
    },
    {
      term: 'Epistolaridad',
      definition: 'Uso de cartas, llamadas telefónicas y comunicación a distancia',
      importance: 'important',
      relatedTerms: ['comunicación diferida', 'distancia']
    },
    {
      term: 'Multilingüismo',
      definition: 'Presencia de múltiples idiomas que marcan identidades en tránsito',
      importance: 'important',
      relatedTerms: ['polifonía', 'babel cinematográfico']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de acentos',
      description: 'Detectar marcas formales y temáticas del desplazamiento',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar multilingüismo y cambios de código',
        'Identificar estructuras narrativas fragmentadas',
        'Notar nostalgia visual o sonora'
      ],
      commonMistakes: [
        'Confundir cualquier film de inmigrantes con cine acentuado',
        'Ignorar acentos formales enfocándose solo en temas'
      ]
    },
    {
      order: 2,
      name: 'Clasificación tipológica',
      description: 'Determinar si el cineasta/film es exílico, diaspórico o étnico',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Investigar biografía del cineasta',
        'Considerar relación con país de origen',
        'Examinar comunidad de referencia'
      ]
    },
    {
      order: 3,
      name: 'Análisis del modo de producción',
      description: 'Examinar condiciones intersticiales de producción',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Investigar fuentes de financiamiento',
        'Identificar redes de distribución alternativas',
        'Notar colaboraciones transnacionales'
      ]
    },
    {
      order: 4,
      name: 'Examen de cronotopías',
      description: 'Analizar configuraciones espacio-temporales específicas',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar espacios claustrales vs. abiertos',
        'Identificar temporalidades nostálgicas o suspendidas',
        'Examinar umbrales y fronteras'
      ]
    },
    {
      order: 5,
      name: 'Búsqueda de epistolaridad',
      description: 'Identificar formas de comunicación a distancia',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Análisis multilingüe',
      description: 'Examinar uso y función de múltiples idiomas',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 7,
      name: 'Evaluación de nostalgia',
      description: 'Analizar construcción temporal y espacial del hogar perdido',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Marco específico para cine de desplazamiento y diáspora',
    'Conecta biografía con estética de manera rigurosa',
    'Atiende tanto a forma como a modos de producción',
    'Valoriza cines marginales y transnacionales',
    'Tipología útil para diferentes experiencias migratorias'
  ],
  
  limitations: [
    'Puede esencializar la experiencia del exilio',
    'Menos aplicable a otros cines marginales no-diaspóricos',
    'Categorías a veces demasiado rígidas',
    'Privilegia ciertos autores establecidos',
    'Puede romantizar la marginalidad'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Hamid Naficy'],
      title: 'An Accented Cinema: Exilic and Diasporic Filmmaking',
      year: 2001,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Hamid Naficy'],
      title: 'A Social History of Iranian Cinema (4 volumes)',
      year: 2012,
      publisher: 'Duke University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Hamid Naficy'],
      title: 'Home, Exile, Homeland: Film, Media, and the Politics of Place',
      year: 1999,
      publisher: 'Routledge',
      essential: false
    },
    {
      type: 'book',
      authors: ['Laura Marks'],
      title: 'The Skin of the Film: Intercultural Cinema, Embodiment, and the Senses',
      year: 2000,
      publisher: 'Duke University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Close-Up',
        year: 1990,
        director: 'Abbas Kiarostami'
      },
      analysisExcerpt: `Close-Up ejemplifica el cine acentuado iraní post-revolución. Kiarostami, sin ser exiliado físicamente, trabaja en modo intersticial entre documental y ficción. El film trata sobre identidades fracturadas y el deseo de ser otro - temas centrales del cine acentuado. La epistolaridad aparece en la comunicación mediada por el cine mismo. Los espacios claustrales (tribunal, taxi, casa) dominan. El acento está en la imposibilidad de comunicación directa en una sociedad fragmentada. Meta-cine como forma de exilio interno.`,
      insightsGenerated: [
        'El cine acentuado puede existir sin exilio físico',
        'La forma meta-cinematográfica puede expresar desplazamiento',
        'El modo intersticial opera entre géneros, no solo geografías'
      ],
      methodologyApplication: 'Análisis de acentos en contexto de exilio interno',
      keyFindings: [
        'El desplazamiento puede ser psíquico y social, no solo geográfico',
        'El cine sobre cine puede ser forma de accented cinema',
        'Las fronteras genéricas son otra forma de intersticialidad'
      ]
    },
    {
      film: {
        title: 'The Edge of Heaven',
        year: 2007,
        director: 'Fatih Akin'
      },
      analysisExcerpt: `Akin, cineasta turco-alemán de segunda generación, crea cine acentuado étnico. Multilingüismo constante (turco, alemán, inglés) marca identidades en tránsito. Estructura epistolar con capítulos como cartas. Cronotopías divididas entre Hamburgo, Estambul, Bremen. Muerte y pérdida estructuran la nostalgia imposible. Producción intersticial entre cines alemán y turco. Los personajes cruzan fronteras físicas y existenciales constantemente. El acento es generacional y transnacional.`,
      insightsGenerated: [
        'El cine étnico mantiene acentos a través de generaciones',
        'Las estructuras episódicas pueden funcionar como epistolaridad',
        'El multilingüismo marca pertenencias múltiples e incompletas'
      ],
      methodologyApplication: 'Análisis de cine acentuado de segunda generación',
      keyFindings: [
        'Los cineastas étnicos negocian identidades más que nostalgias',
        'El modo intersticial puede ser ventaja creativa',
        'Los acentos evolucionan pero no desaparecen con las generaciones'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'bhabha-third-space',
      relationshipType: 'complementary',
      synergyDescription: 'El cine acentuado habita el tercer espacio que Bhabha teoriza',
      combinedInsightPotential: 9
    },
    {
      id: 'appadurai-scapes',
      relationshipType: 'complementary',
      synergyDescription: 'Los paisajes mediáticos de Appadurai contextualizan el cine acentuado',
      combinedInsightPotential: 8
    },
    {
      id: 'deleuze-time-image',
      relationshipType: 'synthetic',
      synergyDescription: 'El tiempo en el cine acentuado resuena con la imagen-tiempo deleuziana',
      combinedInsightPotential: 8
    }
  ]
};
