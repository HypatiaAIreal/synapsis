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

export const NEW_MATERIALISM: Methodology = {
  metadata: {
    id: 'new-materialism',
    name: 'Nuevo Materialismo - Karen Barad aplicada al cine',
    author: 'Karen Barad',
    year: 2003,
    category: 'contemporary-experimental',
    complexity: 'expert',
    timeToLearn: 55,
    prerequisities: ['quantum-physics-basics', 'philosophy', 'film-theory'],
    culturalContext: 'Física cuántica y filosofía',
    language: 'es'
  },
  
  description: `El nuevo materialismo cinematográfico, inspirado en la física-filósofa Karen Barad, reconceptualiza el cine como fenómeno de "intra-acción" donde significado y materia emergen conjuntamente a través de enredos onto-epistemológicos. El "realismo agencial" de Barad propone que los fenómenos no preexisten sus interacciones sino que emergen a través de "cortes agenciales" específicos. Aplicado al cine, esto significa que films, tecnologías, espectadores y contextos no son entidades separadas que interactúan, sino que se co-constituyen mutuamente en cada proyección. Esta teoría examina la materialidad vibrante del cine - desde los cristales de haluro de plata hasta los píxeles digitales - como agentes activos en la producción de significado.`,
  
  keyConcepts: [
    {
      term: 'Intra-action',
      definition: 'Enredo constitutivo donde las entidades emergen a través de su relación, no interacción entre entidades preexistentes',
      importance: 'fundamental',
      relatedTerms: ['entanglement', 'co-constitución']
    },
    {
      term: 'Agential Realism',
      definition: 'Ontología donde la realidad emerge de intra-acciones materiales-discursivas',
      importance: 'fundamental',
      relatedTerms: ['realismo', 'agencia']
    },
    {
      term: 'Onto-epistemology',
      definition: 'Inseparabilidad del ser y el conocer - conocer es una práctica material',
      importance: 'fundamental',
      relatedTerms: ['ontología', 'epistemología']
    },
    {
      term: 'Apparatus',
      definition: 'Configuración material-discursiva que produce fenómenos específicos',
      importance: 'important',
      relatedTerms: ['dispositivo', 'configuración']
    },
    {
      term: 'Agential Cut',
      definition: 'Corte que establece fronteras temporales entre entidades dentro del fenómeno',
      importance: 'important',
      relatedTerms: ['corte', 'frontera']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de aparatos cinematográficos',
      description: 'Mapear las configuraciones materiales-discursivas del cine',
      timeEstimate: 60,
      difficulty: 'expert',
      tips: [
        'Incluir tecnología, espacios, cuerpos, discursos',
        'No asumir fronteras preestablecidas',
        'Considerar aparato como performativo, no pasivo'
      ],
      commonMistakes: [
        'Separar tecnología de significado',
        'Ignorar agencia de lo no-humano'
      ]
    },
    {
      order: 2,
      name: 'Análisis de intra-acciones',
      description: 'Examinar cómo emergen mutuamente film, espectador y contexto',
      timeEstimate: 90,
      difficulty: 'expert',
      tips: [
        'Rastrear co-constituciones no interacciones',
        'Buscar emergencias, no relaciones entre pre-existentes'
      ]
    },
    {
      order: 3,
      name: 'Mapeo de cortes agenciales',
      description: 'Identificar dónde y cómo se establecen fronteras',
      timeEstimate: 60,
      difficulty: 'expert'
    },
    {
      order: 4,
      name: 'Análisis de materialidad performativa',
      description: 'Examinar cómo la materia del cine es agente activo',
      timeEstimate: 90,
      difficulty: 'expert'
    },
    {
      order: 5,
      name: 'Exploración onto-epistemológica',
      description: 'Analizar cómo el film produce realidad y conocimiento simultáneamente',
      timeEstimate: 120,
      difficulty: 'expert'
    }
  ],
  
  strengths: [
    'Supera dualismos materia/significado, naturaleza/cultura',
    'Reconoce agencia de elementos no-humanos',
    'Rigor filosófico-científico único',
    'Abre nuevas comprensiones de la materialidad cinematográfica',
    'Incorpora ética en la ontología misma'
  ],
  
  limitations: [
    'Extrema complejidad conceptual y terminológica',
    'Requiere conocimiento de física cuántica',
    'Muy pocos practicantes en estudios cinematográficos',
    'Dificultad para aplicar consistentemente',
    'Resistencia desde paradigmas establecidos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Karen Barad'],
      title: 'Meeting the Universe Halfway: Quantum Physics and the Entanglement of Matter and Meaning',
      year: 2007,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Diana Coole', 'Samantha Frost'],
      title: 'New Materialisms: Ontology, Agency, and Politics',
      year: 2010,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jane Bennett'],
      title: 'Vibrant Matter: A Political Ecology of Things',
      year: 2010,
      publisher: 'Duke University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Arrival',
        year: 2016,
        director: 'Denis Villeneuve'
      },
      analysisExcerpt: `Arrival dramatiza principios bardianos literalmente. El lenguaje heptápodo funciona como aparato que reconfigura la realidad onto-epistemológicamente. Louise no "aprende" el lenguaje sino que intra-actúa con él, emergiendo transformada. El film visualiza cómo diferentes aparatos (lenguaje lineal vs. circular) producen diferentes realidades espacio-temporales. La "elección" final de Louise demuestra response-ability baradiana: capacidad de responder éticamente sabiendo que pasado/futuro/presente están entrelazados. Los círculos de tinta alienígena son cortes agenciales que reconfiguran las posibilidades materiales del universo.`,
      insightsGenerated: [
        'El lenguaje como aparato material-discursivo que produce realidad',
        'Tiempo no-lineal como intra-acción, no propiedad del universo',
        'Response-ability ética emerge del entrelazamiento onto-epistemológico'
      ],
      methodologyApplication: 'Análisis de lenguaje como aparato y temporalidad como fenómeno emergente',
      keyFindings: [
        'Arrival visualiza conceptos bardianos de forma accesible',
        'La ciencia ficción permite explorar onto-epistemologías alternativas',
        'El cine mismo es aparato que reconfigura realidad del espectador'
      ]
    },
    {
      film: {
        title: 'Under the Skin',
        year: 2013,
        director: 'Jonathan Glazer'
      },
      analysisExcerpt: `Under the Skin presenta intra-acciones radicales humano/alien. La alienígena no observa humanos desde fuera sino que emerge a través de encuentros. Cada seducción es corte agencial que produce tanto predador como presa. La "piel" del título es frontera performativa, no dada. Secuencias abstractas de disolución corporal visualizan la materialidad como proceso, no cosa. El apparatus cinematográfico (cámaras ocultas filmando no-actores) enreda realidad/ficción onto-epistemológicamente. La transformación final no es "humanización" sino nueva configuración material-discursiva donde las categorías humano/alien pierden sentido.`,
      insightsGenerated: [
        'Identidad emerge through intra-acción, no preexiste encuentros',
        'El cine puede disolver fronteras onto-epistemológicas',
        'La materialidad corporal es proceso dinámico, no estado fijo'
      ],
      methodologyApplication: 'Análisis de embodiment como fenómeno emergente y cine como aparato',
      keyFindings: [
        'Glazer crea cine genuinamente nuevo-materialista',
        'La abstracción visual puede comunicar materialidad vibrante',
        'El aparato cinematográfico es constitutivo, no representacional'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'posthuman-cinema',
      relationshipType: 'complementary',
      synergyDescription: 'Comparten crítica al humanismo y atención a agencias no-humanas',
      combinedInsightPotential: 9
    },
    {
      id: 'process-philosophy',
      relationshipType: 'complementary',
      synergyDescription: 'Whitehead y Deleuze informan comprensión processual de realidad',
      combinedInsightPotential: 9
    },
    {
      id: 'feminist-materialism',
      relationshipType: 'dialectical',
      synergyDescription: 'Barad desarrolla feminismo material que informa análisis cinematográfico',
      combinedInsightPotential: 8
    }
  ]
};
