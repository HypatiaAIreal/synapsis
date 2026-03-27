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

export const FANON_COLONIAL_PSYCHOLOGY: Methodology = {
  metadata: {
    id: 'fanon-colonial-psychology',
    name: 'Psicología Colonial y Cine',
    author: 'Frantz Fanon',
    year: 1952,
    category: 'postcolonial-decolonial',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['psychoanalysis-basics', 'colonial-history'],
    culturalContext: 'Anticolonialismo caribeño-africano',
    language: 'es'
  },
  
  description: `Frantz Fanon, psiquiatra y revolucionario martiniqués, desarrolló análisis fundamentales sobre la psicología del colonialismo que iluminan profundamente la representación cinematográfica. Su concepto de la "epidermización de la inferioridad" explica cómo el colonialismo se inscribe en los cuerpos racializados a través de imágenes y miradas. Fanon analiza la "alienación colonial" donde el colonizado se ve a través de los ojos del colonizador, internalizando su desprecio. Su trabajo sobre la "mirada blanca" anticipa teorías cinematográficas sobre el poder de objetificación visual. El análisis fanoniano del "complejo de dependencia" revela cómo el cine colonial perpetúa relaciones de dominación psíquica. Su concepto de "violencia descolonizadora" no solo es física sino también simbólica - la necesidad de destruir las imágenes coloniales para crear nuevas subjetividades.`,
  
  keyConcepts: [
    {
      term: 'Epidermización',
      definition: 'Proceso por el cual el racismo se inscribe en la piel como marca visible de inferioridad',
      importance: 'fundamental',
      relatedTerms: ['racialización', 'corporalidad']
    },
    {
      term: 'Mirada Blanca',
      definition: 'Poder de objetificación visual que fija al colonizado como Otro inferior',
      importance: 'fundamental',
      relatedTerms: ['objetificación', 'alteridad']
    },
    {
      term: 'Alienación Colonial',
      definition: 'Condición del colonizado que se percibe a través de los ojos del colonizador',
      importance: 'fundamental',
      relatedTerms: ['enajenación', 'falsa conciencia']
    },
    {
      term: 'Zona del No-Ser',
      definition: 'Espacio de deshumanización ontológica donde el colonizado es negado como humano',
      importance: 'important',
      relatedTerms: ['deshumanización', 'negación ontológica']
    },
    {
      term: 'Máscaras Blancas',
      definition: 'Estrategias de mimetismo y alienación del colonizado que busca ser aceptado',
      importance: 'important',
      relatedTerms: ['mimetismo', 'asimilación']
    },
    {
      term: 'Violencia Descolonizadora',
      definition: 'Violencia necesaria para romper las estructuras coloniales psíquicas y materiales',
      importance: 'important',
      relatedTerms: ['liberación', 'catarsis']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de la mirada colonial',
      description: 'Analizar quién mira y quién es mirado en la estructura visual del film',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Examinar ángulos de cámara y relaciones de poder visual',
        'Identificar momentos de objetificación racial',
        'Buscar ausencias significativas de mirada recíproca'
      ],
      commonMistakes: [
        'Reducir todo a binario colonizador/colonizado',
        'Ignorar complejidades en las miradas'
      ]
    },
    {
      order: 2,
      name: 'Análisis de epidermización',
      description: 'Examinar cómo el racismo se inscribe visualmente en los cuerpos',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Observar iluminación, maquillaje, encuadre de cuerpos racializados',
        'Analizar contrastes visuales entre personajes',
        'Buscar momentos de "revelación" racial'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de alienación',
      description: 'Identificar momentos de identificación colonial en personajes',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Examinar diálogos internalizados de inferioridad',
        'Buscar deseo de blanqueamiento o asimilación',
        'Identificar rechazo de la propia cultura'
      ]
    },
    {
      order: 4,
      name: 'Mapeo de zonas del no-ser',
      description: 'Localizar espacios y momentos de deshumanización',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Identificar espacios segregados o marginales',
        'Buscar ausencia de subjetividad o voz',
        'Examinar representaciones animalizantes'
      ]
    },
    {
      order: 5,
      name: 'Identificación de máscaras',
      description: 'Analizar estrategias de mimetismo y disfraces identitarios',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Búsqueda de violencia simbólica',
      description: 'Identificar rupturas descolonizadoras en imagen y narrativa',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 7,
      name: 'Análisis de desalienación',
      description: 'Buscar momentos de recuperación del ser y conciencia',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Conecta profundamente psicología con política colonial',
    'Base teórica para análisis de racismo cinematográfico',
    'Atención a dimensiones corporales y afectivas',
    'Influencia revolucionaria en cine del Tercer Mundo',
    'Análisis de la mirada como poder colonial'
  ],
  
  limitations: [
    'Contexto histórico específico puede limitar aplicación',
    'Género menos central en análisis original',
    'Binarismo colonizador/colonizado a veces rígido',
    'Énfasis en confrontación puede oscurecer negociaciones',
    'Traducción del psicoanálisis al cine requiere adaptación'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Frantz Fanon'],
      title: 'Black Skin, White Masks',
      year: 2008,
      publisher: 'Grove Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Frantz Fanon'],
      title: 'The Wretched of the Earth',
      year: 2004,
      publisher: 'Grove Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Frantz Fanon'],
      title: 'A Dying Colonialism',
      year: 1967,
      publisher: 'Grove Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Nigel C. Gibson'],
      title: 'Fanon: The Postcolonial Imagination',
      year: 2003,
      publisher: 'Polity Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Battle of Algiers',
        year: 1966,
        director: 'Gillo Pontecorvo'
      },
      analysisExcerpt: `El film materializa las teorías de Fanon sobre violencia descolonizadora. La mirada documental evita la objetificación colonial típica. La Casbah representa la "zona del no-ser" donde los argelinos recuperan su humanidad mediante la lucha. Los personajes experimentan desalienación colectiva, rechazando las máscaras de sumisión. La violencia no es gratuita sino catártica y necesaria para la liberación psíquica. El film muestra la transformación de colonizados en sujetos revolucionarios, exactamente como Fanon teorizó.`,
      insightsGenerated: [
        'La violencia revolucionaria como proceso de humanización',
        'La cámara como testigo no como poder colonial',
        'La desalienación colectiva a través de la acción política'
      ],
      methodologyApplication: 'Análisis de la violencia descolonizadora y la recuperación de la subjetividad',
      keyFindings: [
        'El cine puede ser herramienta de desalienación colectiva',
        'La representación dignifica cuando evita la mirada colonial',
        'La violencia fílmica puede tener función terapéutica anticolonial'
      ]
    },
    {
      film: {
        title: 'Get Out',
        year: 2017,
        director: 'Jordan Peele'
      },
      analysisExcerpt: `Get Out actualiza brillantemente los conceptos fanonianos. La epidermización es literal: los blancos quieren habitar cuerpos negros. El "sunken place" es la zona del no-ser contemporánea. Chris experimenta alienación progresiva en el mundo blanco liberal. Las máscaras blancas son impuestas quirúrgicamente. La mirada (flash de la cámara) se convierte en arma de resistencia. La violencia final es pura descolonización psíquica. El horror corporal expresa las ansiedades raciales que Fanon diagnosticó.`,
      insightsGenerated: [
        'El liberalismo racial como nueva forma de colonización psíquica',
        'El cuerpo negro como objeto de consumo y posesión',
        'La paranoia como respuesta racional al racismo sistémico'
      ],
      methodologyApplication: 'Traducción de conceptos fanonianos al horror racial contemporáneo',
      keyFindings: [
        'Las máscaras blancas persisten en formas "progresistas"',
        'El género de horror puede expresar violencias raciales psíquicas',
        'La desalienación requiere violencia contra estructuras no solo individuos'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'said-orientalism',
      relationshipType: 'complementary',
      synergyDescription: 'Said se enfoca en representación mientras Fanon en psicología, juntos ofrecen análisis completo',
      combinedInsightPotential: 9
    },
    {
      id: 'bhabha-hybridity',
      relationshipType: 'dialectical',
      synergyDescription: 'Bhabha complejiza los binarios de Fanon con conceptos de hibridez y ambivalencia',
      combinedInsightPotential: 8
    },
    {
      id: 'hooks-oppositional-gaze',
      relationshipType: 'complementary',
      synergyDescription: 'hooks extiende el análisis de la mirada de Fanon con perspectiva feminista negra',
      combinedInsightPotential: 9
    }
  ]
};
