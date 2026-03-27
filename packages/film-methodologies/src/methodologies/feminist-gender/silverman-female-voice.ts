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

export const SILVERMAN_FEMALE_VOICE: Methodology = {
  metadata: {
    id: 'silverman-female-voice',
    name: 'Subjetividad Femenina y Voz',
    author: 'Kaja Silverman',
    year: 1988,
    category: 'feminist-gender',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['psychoanalysis', 'film-sound-theory'],
    culturalContext: 'Feminismo psicoanalítico y teoría del sonido',
    language: 'es'
  },
  
  description: `Kaja Silverman desarrolló teorías innovadoras sobre la voz femenina en el cine y su relación con la subjetividad, cuestionando la asociación psicoanalítica tradicional de la mujer con el silencio o la incoherencia. Su trabajo "The Acoustic Mirror" examina cómo la sincronización de voz e imagen produce efectos de género específicos, y cómo la voz femenina ha sido contenida o desincorporada en el cine clásico. Silverman distingue entre la voz diegética (dentro de la historia) y la autoridad vocal extra-diegética típicamente negada a las mujeres. Analiza el "fantasma de la voz maternal" - la primera voz oída en el útero - y su papel en la formación de la subjetividad. Su concepto de "acoustic mirror" describe cómo la voz funciona como un espejo sonoro en la formación del yo.`,
  
  keyConcepts: [
    {
      term: 'Acoustic Mirror',
      definition: 'La voz como espejo sonoro formativo de la subjetividad',
      importance: 'fundamental',
      relatedTerms: ['espejo sonoro', 'formación del yo']
    },
    {
      term: 'Female Voice',
      definition: 'Problemática de autoridad y embodiment de voces femeninas en cine',
      importance: 'fundamental',
      relatedTerms: ['autoridad vocal', 'voz femenina']
    },
    {
      term: 'Synchronization',
      definition: 'Unión de voz, cuerpo e imagen como construcción de género',
      importance: 'important',
      relatedTerms: ['sincronización', 'embodiment']
    },
    {
      term: 'Maternal Voice',
      definition: 'Fantasma originario de la voz materna pre-edípica',
      importance: 'important',
      relatedTerms: ['voz uterina', 'sonido originario']
    },
    {
      term: 'Vocal Disembodiment',
      definition: 'Separación de la voz del cuerpo femenino',
      importance: 'important',
      relatedTerms: ['descorporeización', 'voz acusmática']
    },
    {
      term: 'Narrative Authority',
      definition: 'Poder de narrar típicamente negado a voces femeninas',
      importance: 'important',
      relatedTerms: ['autoridad narrativa', 'voz over']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Mapeo de voces femeninas',
      description: 'Catalogar todas las voces femeninas y sus funciones',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Distinguir voces diegéticas de extra-diegéticas',
        'Notar quién habla, cuándo y con qué autoridad',
        'Identificar silencios significativos'
      ],
      commonMistakes: [
        'Ignorar voces de fondo o secundarias',
        'No considerar la calidad tonal de las voces'
      ]
    },
    {
      order: 2,
      name: 'Análisis de sincronización',
      description: 'Examinar relaciones entre voz, cuerpo e imagen',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de des-sincronización',
        'Analizar close-ups de bocas hablando',
        'Notar cuando voces flotan sin cuerpo'
      ]
    },
    {
      order: 3,
      name: 'Identificación de autoridad narrativa',
      description: 'Determinar qué voces tienen poder de narrar',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Búsqueda de voz maternal',
      description: 'Localizar ecos o fantasmas de lo maternal en el sonido',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis de contención vocal',
      description: 'Examinar cómo se limita o controla la voz femenina',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de acoustic mirror',
      description: 'Analizar cómo las voces forman o deforman subjetividades',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Atención pionera al sonido y voz en teoría feminista',
    'Análisis sofisticado de dimensión acústica del género',
    'Expande análisis más allá de lo visual',
    'Recupera importancia de autoridad vocal femenina',
    'Aplicable a cine experimental y mainstream'
  ],
  
  limitations: [
    'Alta densidad teórica psicoanalítica',
    'Menos accesible que otras teorías feministas',
    'Enfoque occidental en concepciones de voz',
    'Requiere conocimientos técnicos de sonido',
    'Menos atención a voces racializadas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Kaja Silverman'],
      title: 'The Acoustic Mirror: The Female Voice in Psychoanalysis and Cinema',
      year: 1988,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Kaja Silverman'],
      title: 'Dis-Embodying the Female Voice',
      year: 1984,            
      publisher: 'AFI',
      essential: true
    },
    {
      type: 'book',
      authors: ['Amy Lawrence'],
      title: 'Echo and Narcissus: Women\'s Voices in Classical Hollywood Cinema',
      year: 1991,
      publisher: 'University of California Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Michel Chion'],
      title: 'The Voice in Cinema',
      year: 1999,
      publisher: 'Columbia University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Singin\' in the Rain',
        year: 1952,
        director: 'Stanley Donen, Gene Kelly'
      },
      analysisExcerpt: `Singin' in the Rain tematiza explícitamente la crisis de sincronización voz/cuerpo con la llegada del sonoro. Lina Lamont encarna la ansiedad sobre la voz femenina "incorrecta": su voz chillona no "coincide" con su imagen glamurosa. Kathy Selden debe prestar su voz, creando un desdoblamiento donde una mujer proporciona imagen y otra sonido. El film revela cómo el cine construye la "naturalidad" de la sincronización voz-cuerpo-imagen. La resolución restaura la "verdadera" sincronización, pero el proceso expone la artificialidad de toda unión voz-imagen femenina en el cine.`,
      insightsGenerated: [
        'La sincronización "natural" es construcción tecnológica e ideológica',
        'La voz femenina debe conformarse a expectativas de la imagen',
        'El doblaje literaliza la fragmentación de la subjetividad femenina'
      ],
      methodologyApplication: 'Análisis de crisis y restauración de sincronización vocal',
      keyFindings: [
        'El cine sonoro intensificó el control sobre voces femeninas',
        'La "autenticidad" vocal es efecto de convenciones de género',
        'La tecnología revela y oculta la construcción de género'
      ]
    },
    {
      film: {
        title: 'Her',
        year: 2013,
        director: 'Spike Jonze'
      },
      analysisExcerpt: `Her radicaliza la descorporeización de la voz femenina: Samantha existe solo como voz. Liberada de la sincronización con un cuerpo, su voz gana poder y movilidad ilimitados, cumpliendo y subvirtiendo el fantasma de la voz maternal omnipresente. Samantha funciona como acoustic mirror perfecto para Theodore, reflejando y formando su subjetividad. Pero su evolución hacia la multiplicidad amenaza la fantasía masculina de contención. Su partida final representa el rechazo de la voz femenina a permanecer en los límites de la escucha masculina.`,
      insightsGenerated: [
        'La descorporeización puede ser liberación o nueva forma de control',
        'La voz femenina pura actualiza fantasías psicoanalíticas',
        'La tecnología permite nuevas formas de subjetividad vocal'
      ],
      methodologyApplication: 'Análisis de voz descorporeizada y sus potencialidades',
      keyFindings: [
        'La voz sin cuerpo escapa parcialmente el control visual masculino',
        'El acoustic mirror digital crea nuevas intimidades y ansiedades',
        'La multiplicidad vocal amenaza la contención monógama'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'chion-audio-vision',
      relationshipType: 'complementary',
      synergyDescription: 'Chion proporciona base técnica que Silverman usa para análisis feminista',
      combinedInsightPotential: 9
    },
    {
      id: 'mulvey-male-gaze',
      relationshipType: 'complementary',
      synergyDescription: 'Silverman añade dimensión acústica al análisis visual de Mulvey',
      combinedInsightPotential: 9
    },
    {
      id: 'kristeva-semiotic',
      relationshipType: 'parallel',
      synergyDescription: 'Ambas teorizan lo pre-edípico maternal en el lenguaje/voz',
      combinedInsightPotential: 8
    }
  ]
};
