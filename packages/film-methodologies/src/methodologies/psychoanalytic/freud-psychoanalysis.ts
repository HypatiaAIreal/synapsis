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

export const FREUD_PSYCHOANALYSIS: Methodology = {
  metadata: {
    id: 'freud-psychoanalysis',
    name: 'Psicoanálisis Aplicado al Cine',
    author: 'Sigmund Freud',
    year: 1895,
    category: 'psychoanalytic',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['basic-psychology'],
    culturalContext: 'Psicoanálisis vienés',
    language: 'es'
  },
  
  description: `Aunque Freud nunca escribió directamente sobre cine, sus teorías psicoanalíticas fundamentales han sido extensamente aplicadas al análisis cinematográfico. Los conceptos freudianos del inconsciente, la interpretación de los sueños, el complejo de Edipo, la pulsión escópica (placer de mirar), y los mecanismos de defensa proporcionan herramientas poderosas para entender tanto la construcción como la recepción del cine. El cine funciona como una "fábrica de sueños" que permite la expresión y exploración segura de deseos reprimidos, ansiedades y fantasías inconscientes. La teoría freudiana explica cómo el cine opera mediante procesos primarios similares al sueño: condensación (múltiples significados en una imagen), desplazamiento (emociones transferidas), y simbolización.`,
  
  keyConcepts: [
    {
      term: 'Inconsciente',
      definition: 'Material psíquico reprimido que influye en comportamiento y percepción',
      importance: 'fundamental',
      relatedTerms: ['represión', 'contenido latente']
    },
    {
      term: 'Trabajo del Sueño',
      definition: 'Procesos de condensación, desplazamiento y simbolización que transforman contenido',
      importance: 'fundamental',
      relatedTerms: ['proceso primario', 'elaboración onírica']
    },
    {
      term: 'Pulsión Escópica',
      definition: 'Placer derivado del acto de mirar (scopophilia)',
      importance: 'fundamental',
      relatedTerms: ['voyeurismo', 'exhibicionismo', 'mirada']
    },
    {
      term: 'Complejo de Edipo',
      definition: 'Dinámicas triangulares de deseo y rivalidad en relaciones familiares',
      importance: 'important',
      relatedTerms: ['triangulación', 'complejo de castración']
    },
    {
      term: 'Lo Siniestro (Unheimlich)',
      definition: 'Lo familiar vuelto extraño y amenazante',
      importance: 'important',
      relatedTerms: ['uncanny', 'retorno de lo reprimido']
    },
    {
      term: 'Mecanismos de Defensa',
      definition: 'Proyección, negación, sublimación usados por personajes y narrativa',
      importance: 'important',
      relatedTerms: ['represión', 'racionalización']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de contenido manifiesto/latente',
      description: 'Distinguir entre superficie narrativa y significados inconscientes',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'El contenido manifiesto es lo explícito en pantalla',
        'El contenido latente son los deseos/miedos ocultos',
        'Buscar símbolos recurrentes y su posible significado'
      ],
      commonMistakes: [
        'Sobre-interpretar cada elemento como símbolo sexual',
        'Ignorar el contexto cultural del film'
      ]
    },
    {
      order: 2,
      name: 'Análisis de símbolos y condensación',
      description: 'Examinar objetos e imágenes con carga simbólica múltiple',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Un símbolo puede condensar múltiples significados',
        'Atender a objetos recurrentes o enfatizados',
        'Los símbolos fálicos/vaginales son comunes pero no únicos'
      ]
    },
    {
      order: 3,
      name: 'Examen de dinámicas edípicas',
      description: 'Identificar triángulos amorosos y rivalidades parentales',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'No solo literal padre-madre-hijo',
        'Puede ser simbólico: mentor-autoridad-héroe',
        'Buscar temas de rivalidad y deseo prohibido'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de lo reprimido',
      description: 'Identificar qué intenta ocultar o negar la narrativa',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Lo reprimido tiende a retornar distorsionado',
        'Buscar negaciones excesivas o insistentes',
        'Los monstruos/villanos a menudo representan lo reprimido'
      ]
    },
    {
      order: 5,
      name: 'Análisis de pulsiones',
      description: 'Identificar manifestaciones de Eros (vida) y Thanatos (muerte)',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación de identificaciones',
      description: 'Analizar con quién/qué se identifica el espectador y por qué',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Profundidad psicológica en análisis de personajes y motivaciones',
    'Explica la atracción del cine como experiencia onírica',
    'Útil para géneros psicológicos, horror y thriller',
    'Revela significados ocultos y subtextos',
    'Conecta individual con universal mediante arquetipos',
    'Base fundamental para teorías psicoanalíticas posteriores'
  ],
  
  limitations: [
    'Puede ser reduccionista al enfatizar sexualidad',
    'Sesgo cultural específico (Viena siglo XIX)',
    'Ignora contextos sociales y políticos más amplios',
    'Difícil de verificar empíricamente',
    'Visión patriarcal y heteronormativa en origen',
    'Riesgo de sobre-interpretación'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Sigmund Freud'],
      title: 'The Interpretation of Dreams',
      year: 1900,
      publisher: 'Basic Books',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sigmund Freud'],
      title: 'The Uncanny',
      year: 1919,
      publisher: 'Penguin Classics',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sigmund Freud'],
      title: 'Three Essays on the Theory of Sexuality',
      year: 1905,
      publisher: 'Basic Books',
      essential: false
    },
    {
      type: 'book',
      authors: ['Vicky Lebeau'],
      title: 'Psychoanalysis and Cinema: The Play of Shadows',
      year: 2001,
      publisher: 'Wallflower Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Psycho',
        year: 1960,
        director: 'Alfred Hitchcock'
      },
      analysisExcerpt: `Psycho es un caso de estudio freudiano perfecto. Norman Bates sufre una fijación edípica extrema que resulta en la internalización completa de la madre. El motel funciona como espacio del ello (impulsos primitivos) mientras la casa representa el superyó materno represivo. La escena de la ducha condensa violencia y sexualidad: el cuchillo como símbolo fálico, la penetración violenta, Marion desnuda y vulnerable. El voyeurismo de Norman (y nuestro) revela la pulsión escópica. La madre muerta que "vive" ejemplifica lo siniestro freudiano.`,
      insightsGenerated: [
        'La represión sexual extrema se manifiesta como violencia',
        'El complejo de Edipo no resuelto lleva a la psicosis',
        'El espectador es cómplice voyeurista del protagonista'
      ],
      methodologyApplication: 'Análisis de fijaciones edípicas y retorno de lo reprimido',
      keyFindings: [
        'Hitchcock conscientemente emplea conceptos freudianos',
        'La arquitectura (motel/casa) externaliza topografía psíquica',
        'El horror emerge de deseos reprimidos'
      ]
    },
    {
      film: {
        title: 'Black Swan',
        year: 2010,
        director: 'Darren Aronofsky'
      },
      analysisExcerpt: `Nina ejemplifica la represión sexual y artística bajo una madre castradora. Su transformación en Cisne Negro representa el retorno violento de todo lo reprimido: sexualidad, agresión, espontaneidad. El doppelgänger (Lily/Nina oscura) personifica su sombra jungiana/freudiana. La masturbación interrumpida por la madre visualiza literalmente la represión sexual. Las alucinaciones funcionan como trabajo del sueño: condensan deseo y miedo. La "perfección" final requiere la destrucción del superyó materno y ultimadamente del yo.`,
      insightsGenerated: [
        'El arte requiere integración de impulsos reprimidos',
        'El doble representa aspectos negados del self',
        'La perfección artística puede requerir desintegración psíquica'
      ],
      methodologyApplication: 'Análisis de represión sexual/artística y su retorno violento',
      keyFindings: [
        'El ballet como sublimación de impulsos eróticos y agresivos',
        'La madre como agente de castración simbólica',
        'La locura como precio de romper represiones'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'jung-archetypes',
      relationshipType: 'dialectical',
      synergyDescription: 'Jung expandió y divergió del psicoanálisis freudiano hacia lo colectivo',
      combinedInsightPotential: 8
    },
    {
      id: 'lacan-gaze',
      relationshipType: 'complementary',
      synergyDescription: 'Lacan reinterpreta Freud a través del lenguaje y la mirada',
      combinedInsightPotential: 9
    },
    {
      id: 'mulvey-male-gaze',
      relationshipType: 'dialectical',
      synergyDescription: 'Mulvey aplica y critica conceptos freudianos desde perspectiva feminista',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Dream Symbol Analyzer',
      type: 'webapp',
      description: 'Herramienta para identificar símbolos freudianos en películas',
      cost: 'free',
      platforms: ['web']
    },
    {
      name: 'Psychoanalytic Film Database',
      type: 'webapp',
      url: 'https://psychfilm.org',
      description: 'Base de datos de análisis psicoanalíticos de películas',
      cost: 'paid',
      platforms: ['web']
    }
  ]
};
