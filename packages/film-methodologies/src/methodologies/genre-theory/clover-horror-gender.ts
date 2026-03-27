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

export const CLOVER_HORROR_GENDER: Methodology = {
  metadata: {
    id: 'clover-horror-gender',
    name: 'Horror y Género/Gender',
    author: 'Carol Clover',
    year: 1992,
    category: 'genre-theory',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['gender-studies-basics'],
    culturalContext: 'Teoría feminista del cine',
    language: 'es'
  },
  
  description: `Carol Clover revolucionó el análisis del género de horror con su teoría de identificaciones cross-género que desafía asunciones sobre sadismo masculino y victimización femenina. Su análisis de la "Final Girl" y otros tropos del horror reveló complejidades en las dinámicas de género que operan en estos films. Clover argumenta que el horror permite a audiencias masculinas experimentar masoquismo y vulnerabilidad a través de identificación con víctimas femeninas, mientras las Final Girls adoptan características tradicionalmente masculinas para sobrevivir. Su trabajo desmantela la distinción víctima/héroe mostrando el continuo entre estas posiciones. Clover analiza cómo el horror negocia ansiedades sobre género, sexualidad y corporalidad en formas que otros géneros no pueden.`,
  
  keyConcepts: [
    {
      term: 'Final Girl',
      definition: 'Sobreviviente femenina que adopta características masculinas para derrotar al asesino',
      importance: 'fundamental',
      relatedTerms: ['sobreviviente', 'masculinización', 'agencia']
    },
    {
      term: 'Cross-Gender Identification',
      definition: 'Proceso por el cual espectadores se identifican con personajes del género opuesto',
      importance: 'fundamental',
      relatedTerms: ['identificación fluida', 'espectador masculino']
    },
    {
      term: 'Victim-Hero Continuum',
      definition: 'Espectro continuo entre victimización y heroísmo, no oposición binaria',
      importance: 'important',
      relatedTerms: ['transformación', 'agencia']
    },
    {
      term: 'Terrible Place',
      definition: 'Espacio feminizado amenazante donde ocurre la violencia',
      importance: 'important',
      relatedTerms: ['espacio uterino', 'casa monstruosa']
    },
    {
      term: 'Male Gaze/Body',
      definition: 'Vulnerabilidad y penetrabilidad del cuerpo masculino en el horror',
      importance: 'important',
      relatedTerms: ['masoquismo', 'vulnerabilidad']
    },
    {
      term: 'Gender Confusion',
      definition: 'Ambigüedad de género productiva en personajes del horror',
      importance: 'important',
      relatedTerms: ['androginia', 'fluidez']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de Final Girl',
      description: 'Localizar y analizar características de la sobreviviente principal',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Buscar virginidad/asexualidad, nombre andrógino, competencia',
        'Notar progresiva masculinización durante el film',
        'Comparar con otras víctimas femeninas'
      ],
      commonMistakes: [
        'Asumir toda sobreviviente es Final Girl',
        'Ignorar características específicas del tropo'
      ]
    },
    {
      order: 2,
      name: 'Análisis de identificaciones',
      description: 'Examinar procesos de identificación cross-género',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Considerar POV shots y su función',
        'Analizar momentos de vulnerabilidad compartida',
        'Identificar deslizamientos identificatorios'
      ]
    },
    {
      order: 3,
      name: 'Examen del victim-hero continuum',
      description: 'Trazar transformación de víctima a agente activo',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Marcar momentos de transición',
        'Analizar apropiación de herramientas/armas'
      ]
    },
    {
      order: 4,
      name: 'Análisis de espacios',
      description: 'Examinar construcción de "terrible place" y su género',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Estudio de gender confusion',
      description: 'Identificar ambigüedades de género en personajes',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Examinar asesinos andróginos',
        'Buscar inversiones de roles de género'
      ]
    },
    {
      order: 6,
      name: 'Evaluación de dinámicas masoquistas',
      description: 'Analizar placer en vulnerabilidad y sufrimiento',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Revolucionó comprensión del horror y género',
    'Desmantela binarios simplistas víctima/agresor',
    'Complejiza procesos de identificación cinematográfica',
    'Valida placeres del horror previamente patologizados',
    'Influencia masiva en producción posterior',
    'Metodología clara y aplicable'
  ],
  
  limitations: [
    'Enfoque limitado principalmente al slasher',
    'Puede reforzar binarios que intenta deconstruir',
    'Menos aplicable a horror no corporal',
    'Universaliza experiencia occidental/americana',
    'Minimiza dimensiones raciales y de clase',
    'Dependencia de psicoanálisis problemático'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Carol Clover'],
      title: 'Men, Women, and Chain Saws: Gender in the Modern Horror Film',
      year: 1992,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Carol Clover'],
      title: 'Her Body, Himself: Gender in the Slasher Film',
      year: 1987,
      journal: 'Representations',      
      pages: '187-228',
      essential: true
    },
    {
      type: 'book',
      authors: ['Barbara Creed'],
      title: 'The Monstrous-Feminine: Film, Feminism, Psychoanalysis',
      year: 1993,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Halloween',
        year: 1978,
        director: 'John Carpenter'
      },
      analysisExcerpt: `Halloween estableció el modelo de Final Girl que Clover teoriza. Laurie Strode ejemplifica todas las características: nombre andrógino, virginidad, competencia doméstica que se vuelve survival skills. Mientras sus amigas sexualmente activas mueren, Laurie sobrevive mediante progresiva masculinización - usa cuchillo de cocina, aguja de tejer, finalmente el arma fálica por excelencia (perchero). Michael Myers es sexualmente ambiguo, casi autista en su fijación. El espectador masculino experimenta terror a través de Laurie, identificándose masoquísticamente con su vulnerabilidad antes de su triunfo "fálico".`,
      insightsGenerated: [
        'La Final Girl debe "ganar" su supervivencia mediante masculinización',
        'Las armas domésticas se convierten en instrumentos fálicos',
        'El espectador masculino experimenta vulnerabilidad "segura"'
      ],
      methodologyApplication: 'Análisis del arquetipo de Final Girl en su forma clásica',
      keyFindings: [
        'Halloween codificó el template de Final Girl',
        'La identificación cross-género es central al placer del slasher',
        'La androginia es clave tanto en héroe como villano'
      ]
    },
    {
      film: {
        title: 'It Follows',
        year: 2014,
        director: 'David Robert Mitchell'
      },
      analysisExcerpt: `It Follows complica el modelo de Clover con una Final Girl sexualmente activa. Jay no es virginal - el sexo inicia su persecución. Pero mantiene otras características: competencia, resistencia, adopción de agencia. El monstruo cambiante desafía identificación de género. Los chicos son tan vulnerables como las chicas, subvirtiendo protección masculina tradicional. El "terrible place" es ubicuo - no hay casa segura. El film actualiza a Clover: la Final Girl puede ser sexual, pero debe mantener agencia y rehusarse a ser solo víctima. La identificación es más fluida, menos binaria.`,
      insightsGenerated: [
        'La Final Girl contemporánea puede ser sexualmente activa',
        'La vulnerabilidad masculina se hace más explícita',
        'Los géneros evolucionan manteniendo estructuras profundas'
      ],
      methodologyApplication: 'Análisis de evolución y complicación del modelo Final Girl',
      keyFindings: [
        'El modelo de Clover sigue vigente con modificaciones',
        'El horror contemporáneo explicita fluidez de género',
        'La agencia importa más que la pureza sexual'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'wood-ideology-genre',
      relationshipType: 'complementary',
      synergyDescription: 'Clover desarrolla intuiciones de Wood sobre género en el horror',
      combinedInsightPotential: 9
    },
    {
      id: 'mulvey-male-gaze',
      relationshipType: 'dialectical',
      synergyDescription: 'Clover complica el modelo de mirada masculina de Mulvey',
      combinedInsightPotential: 9
    },
    {
      id: 'creed-monstrous-feminine',
      relationshipType: 'complementary',
      synergyDescription: 'Creed analiza el monstruo mientras Clover enfoca la víctima-héroe',
      combinedInsightPotential: 9
    }
  ]
};
