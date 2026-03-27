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

export const BORDWELL_FILM_NARRATION: Methodology = {
  metadata: {
    id: 'bordwell-film-narration',
    name: 'Narración Cinematográfica',
    author: 'David Bordwell',
    year: 1985,
    category: 'structural-narratological',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['film-history', 'cognitive-theory'],
    culturalContext: 'Neo-formalismo cognitivo',
    language: 'es'
  },
  
  description: `David Bordwell desarrolló una teoría cognitiva de la narración cinematográfica que se aleja de modelos lingüísticos y literarios para centrarse en cómo los espectadores construyen activamente la historia a partir de las pistas que proporciona el filme. Su enfoque neo-formalista examina la narración como un proceso dinámico de presentación de información narrativa (syuzhet) que permite al espectador inferir la historia (fabula). Bordwell identifica diferentes modos históricos de narración (clásica, de arte y ensayo, histórico-materialista, paramétrica) cada uno con sus propias normas y estrategias. Su análisis detallado del estilo cinematográfico como sistema formal incluye la puesta en escena, la cinematografía, el montaje y el sonido como elementos que trabajan conjuntamente para guiar la construcción narrativa del espectador.`,
  
  keyConcepts: [
    {
      term: 'Fabula/Syuzhet/Estilo',
      definition: 'Historia construida por espectador / Trama presentada / Técnicas cinematográficas empleadas',
      importance: 'fundamental',
      relatedTerms: ['historia', 'trama', 'forma fílmica']
    },
    {
      term: 'Narración como Proceso',
      definition: 'Actividad dinámica de presentación de información narrativa, no entidad',
      importance: 'fundamental',
      relatedTerms: ['proceso cognitivo', 'actividad']
    },
    {
      term: 'Modos de Narración',
      definition: 'Clásica / Arte y ensayo / Histórico-materialista / Paramétrica',
      importance: 'fundamental',
      relatedTerms: ['normas históricas', 'convenciones']
    },
    {
      term: 'Communicativeness',
      definition: 'Grado de información narrativa proporcionada al espectador',
      importance: 'important',
      relatedTerms: ['información', 'revelación']
    },
    {
      term: 'Self-consciousness',
      definition: 'Grado en que la narración reconoce su propio artificio',
      importance: 'important',
      relatedTerms: ['reflexividad', 'artificialidad']
    },
    {
      term: 'Hypothesis Testing',
      definition: 'Proceso cognitivo del espectador formando y revisando hipótesis sobre la historia',
      importance: 'important',
      relatedTerms: ['cognición', 'inferencia']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Distinción fabula/syuzhet',
      description: 'Separar la historia inferida de la trama presentada',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Reconstruir los eventos en orden causal-cronológico (fabula)',
        'Mapear cómo se presentan realmente (syuzhet)',
        'Identificar gaps informativos y su función'
      ],
      commonMistakes: [
        'Confundir syuzhet con estilo',
        'Asumir que la fabula es objetiva y única'
      ]
    },
    {
      order: 2,
      name: 'Análisis de la construcción temporal',
      description: 'Examinar orden, duración y frecuencia desde perspectiva cognitiva',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Considerar cómo las pistas temporales guían al espectador',
        'Identificar momentos de desorientación temporal deliberada'
      ]
    },
    {
      order: 3,
      name: 'Examen de la causalidad',
      description: 'Analizar conexiones causales explícitas e implícitas',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Distinguir causalidad directa de inferida',
        'Identificar falsas pistas causales'
      ]
    },
    {
      order: 4,
      name: 'Estudio de la presentación espacial',
      description: 'Analizar cómo se construye el espacio narrativo',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis de communicativeness',
      description: 'Evaluar qué información se proporciona, cuándo y cómo',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación del modo narrativo',
      description: 'Clasificar según los cuatro modos históricos',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 7,
      name: 'Análisis estilístico sistemático',
      description: 'Examinar cómo el estilo sirve a la narración',
      timeEstimate: 120,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Enfoque específicamente cinematográfico, no derivado de literatura',
    'Base cognitiva sólida en psicología de la percepción',
    'Atención detallada al contexto histórico del cine',
    'Análisis formal extremadamente riguroso',
    'Considera el papel activo y cognitivo del espectador',
    'Integración sistemática de narración y estilo'
  ],
  
  limitations: [
    'Menos útil para cine experimental extremo o no narrativo',
    'Énfasis cognitivo puede minimizar aspectos afectivos',
    'Modelo puede ser eurocéntrico en sus categorías',
    'Complejidad del método requiere considerable expertise'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['David Bordwell'],
      title: 'Narration in the Fiction Film',
      year: 1985,
      publisher: 'University of Wisconsin Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['David Bordwell', 'Janet Staiger', 'Kristin Thompson'],
      title: 'The Classical Hollywood Cinema',
      year: 1985,
      publisher: 'Columbia University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['David Bordwell'],
      title: 'The Way Hollywood Tells It',
      year: 2006,
      publisher: 'University of California Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Kristin Thompson'],
      title: 'Breaking the Glass Armor: Neoformalist Film Analysis',
      year: 1988,
      publisher: 'Princeton University Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Rear Window',
        year: 1954,
        director: 'Alfred Hitchcock'
      },
      analysisExcerpt: `Rear Window ejemplifica la narración clásica con variaciones. Alta communicativeness pero restringida al conocimiento de Jeff. El syuzhet limita la información a lo que Jeff puede ver/oír desde su ventana, creando suspense mediante restricción espacial. La fabula (el crimen de Thorwald) se construye mediante inferencias del espectador paralelas a las de Jeff. Estilo "invisible" típicamente clásico pero con innovación: la cámara casi nunca abandona el apartamento. Self-consciousness mínima salvo en momentos reflexivos sobre el voyeurismo. El espectador testea hipótesis junto con Jeff.`,
      insightsGenerated: [
        'La restricción espacial intensifica la identificación cognitiva',
        'El estilo clásico puede innovar dentro de sus normas',
        'La narración guía pero no determina las hipótesis del espectador'
      ],
      methodologyApplication: 'Análisis de narración clásica con restricciones formales innovadoras',
      keyFindings: [
        'La restricción formal puede potenciar la narración clásica',
        'El espectador como co-investigador activo',
        'La communicativeness puede ser alta aún con información limitada'
      ]
    },
    {
      film: {
        title: 'Last Year at Marienbad',
        year: 1961,
        director: 'Alain Resnais'
      },
      analysisExcerpt: `Marienbad representa el modo arte y ensayo en su extremo. Mínima communicativeness: imposible construir una fabula coherente. El syuzhet presenta eventos contradictorios sin resolución. Alta self-consciousness: la narración enfatiza su propia artificialidad. Ambigüedad temporal y causal sistemática. El estilo (composiciones geométricas, repeticiones) es tan prominente como la historia. La narración frustra deliberadamente el hypothesis testing normal, forzando al espectador a abandonar la construcción de fabula coherente y experimentar el film como juego formal o estado mental.`,
      insightsGenerated: [
        'El modo arte y ensayo puede eliminar la fabula recuperable',
        'La ambigüedad puede ser el objetivo, no un medio',
        'El estilo puede suplantar la historia como foco principal'
      ],
      methodologyApplication: 'Análisis de narración arte y ensayo en su forma más radical',
      keyFindings: [
        'Algunos films rechazan la distinción fabula/syuzhet',
        'La narración puede ser experiencia más que comunicación',
        'El espectador debe adaptar sus estrategias cognitivas al modo'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'russian-formalism',
      relationshipType: 'complementary',
      synergyDescription: 'Bordwell adapta conceptos formalistas rusos al análisis cinematográfico cognitivo',
      combinedInsightPotential: 9
    },
    {
      id: 'cognitive-film-theory',
      relationshipType: 'complementary',
      synergyDescription: 'La teoría cognitiva proporciona la base psicológica del modelo de Bordwell',
      combinedInsightPotential: 9
    },
    {
      id: 'historical-poetics',
      relationshipType: 'complementary',
      synergyDescription: 'Bordwell combina análisis formal con investigación histórica',
      combinedInsightPotential: 8
    }
  ]
};
