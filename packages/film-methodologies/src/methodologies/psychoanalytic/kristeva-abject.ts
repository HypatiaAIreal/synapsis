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

export const KRISTEVA_ABJECT: Methodology = {
  metadata: {
    id: 'kristeva-abject',
    name: 'Lo Abyecto en el Cine',
    author: 'Julia Kristeva',
    year: 1982,
    category: 'psychoanalytic',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['psychoanalysis', 'semiotics'],
    culturalContext: 'Psicoanálisis feminista francés',
    language: 'es'
  },
  
  description: `Julia Kristeva desarrolló el concepto de "abyección" - el proceso psíquico de expulsar y rechazar elementos que amenazan la integridad del yo. Lo abyecto es aquello que perturba identidad, sistema y orden; lo que no respeta límites, posiciones, reglas. Es lo ambiguo, lo mixto, lo que está entre categorías. Para Kristeva, la abyección es necesaria para la formación del sujeto pero permanece como amenaza constante. En el cine, lo abyecto aparece en imágenes de fluidos corporales, cadáveres, monstruosidad, y todo lo que recuerda la materialidad y mortalidad del cuerpo. El horror cinematográfico moviliza la abyección para producir tanto repulsión como fascinación.`,
  
  keyConcepts: [
    {
      term: 'Abyección',
      definition: 'Proceso de rechazo violento de lo que amenaza los límites del yo',
      importance: 'fundamental',
      relatedTerms: ['expulsión', 'rechazo', 'formación del yo']
    },
    {
      term: 'Lo Abyecto',
      definition: 'Ni sujeto ni objeto, lo intermedio que perturba categorías',
      importance: 'fundamental',
      relatedTerms: ['entre-deux', 'liminal', 'ambiguo']
    },
    {
      term: 'Frontera',
      definition: 'Límites corporales y psíquicos que lo abyecto amenaza',
      importance: 'fundamental',
      relatedTerms: ['límite', 'borde', 'demarcación']
    },
    {
      term: 'Lo Semiótico/Simbólico',
      definition: 'Pre-lingüístico maternal vs. orden lingüístico paterno',
      importance: 'important',
      relatedTerms: ['chora', 'pre-edípico', 'maternal']
    },
    {
      term: 'Horror Maternal',
      definition: 'Miedo a ser reabsorbido por el cuerpo materno',
      importance: 'important',
      relatedTerms: ['madre arcaica', 'útero', 'devoración']
    },
    {
      term: 'Cadáver',
      definition: 'Lo abyecto supremo que confronta con la propia mortalidad',
      importance: 'important',
      relatedTerms: ['muerte', 'descomposición', 'materialidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de elementos abyectos',
      description: 'Catalogar qué perturba límites y categorías',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar fluidos corporales, heridas abiertas',
        'Identificar seres híbridos o transformaciones',
        'Notar violaciones de interior/exterior'
      ],
      commonMistakes: [
        'Confundir lo abyecto con lo simplemente repugnante',
        'Ignorar la fascinación que acompaña la repulsión'
      ]
    },
    {
      order: 2,
      name: 'Análisis de reacciones corporales',
      description: 'Examinar respuestas viscerales que provoca',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Náusea, escalofrío, necesidad de apartar la vista',
        'Pero también fascinación morbosa',
        'El cuerpo del espectador reacciona involuntariamente'
      ]
    },
    {
      order: 3,
      name: 'Examen de fronteras violadas',
      description: 'Identificar qué límites son transgredidos',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Dentro/fuera, yo/otro, vida/muerte',
        'Humano/animal, limpio/sucio',
        'Categorías que colapsan'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de lo maternal abyecto',
      description: 'Analizar representaciones del cuerpo materno amenazante',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Madre devoradora o sofocante',
        'Útero como espacio de horror',
        'Fluidos maternos como amenaza'
      ]
    },
    {
      order: 5,
      name: 'Análisis de lo semiótico',
      description: 'Identificar elementos pre-verbales y pulsionales',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Sonidos guturales, gritos primales',
        'Ritmos y pulsiones corporales',
        'Lo que escapa al lenguaje ordenado'
      ]
    },
    {
      order: 6,
      name: 'Evaluación del proceso de abyección',
      description: 'Cómo los personajes rechazan y son confrontados',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Explica poder visceral del horror corporal',
    'Conecta psique con corporalidad',
    'Útil para análisis de cine feminista',
    'Aborda experiencias pre-verbales',
    'Teoría sofisticada de formación del sujeto',
    'Interdisciplinaria y culturalmente rica'
  ],
  
  limitations: [
    'Enfoque puede parecer negativo sobre lo corporal',
    'Riesgo de esencialismo sobre lo maternal',
    'Complejidad teórica intimidante',
    'Menos aplicable a géneros no-horror',
    'Culturalmente específica en algunos aspectos',
    'Puede sobre-interpretar elementos visuales'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Julia Kristeva'],
      title: 'Powers of Horror: An Essay on Abjection',
      year: 1982,
      publisher: 'Columbia University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Julia Kristeva'],
      title: 'Revolution in Poetic Language',
      year: 1984,
      publisher: 'Columbia University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Barbara Creed'],
      title: 'The Monstrous-Feminine: Film, Feminism, Psychoanalysis',
      year: 1993,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Kelly Oliver'],
      title: 'Reading Kristeva: Unraveling the Double-bind',
      year: 1993,
      publisher: 'Indiana University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Exorcist',
        year: 1973,
        director: 'William Friedkin'
      },
      analysisExcerpt: `The Exorcist es el estudio definitivo de abyección cinematográfica. Regan poseída viola todas las fronteras: niña/demonio, puro/obsceno, interior/exterior (vómito proyectil, cabeza girando). Los fluidos corporales abundan: vómito verde, orina, sangre menstrual usada obscenamente. El lenguaje se vuelve semiótico: groserías, voces guturales, lenguas muertas. La masturbación con el crucifijo une lo sagrado/profano, placer/dolor. La madre confronta el horror de su hija volviéndose lo radicalmente Otro. El exorcismo es literalmente el proceso de abyección: expulsar lo que contamina.`,
      insightsGenerated: [
        'La posesión como abyección total del sujeto',
        'Los fluidos corporales marcan la pérdida de límites',
        'Lo maternal sagrado se vuelve obscenamente abyecto'
      ],
      methodologyApplication: 'Análisis exhaustivo de violaciones de fronteras corporales/psíquicas',
      keyFindings: [
        'El horror religioso moviliza abyección máxima',
        'La niña poseída encarna el colapso de todas las categorías',
        'El exorcismo reestablece fronteras mediante expulsión violenta'
      ]
    },
    {
      film: {
        title: 'The Fly',
        year: 1986,
        director: 'David Cronenberg'
      },
      analysisExcerpt: `Cronenberg es el cineasta de lo abyecto por excelencia. La transformación de Brundle ejemplifica la abyección progresiva: límite humano/insecto colapsa gradualmente. Cada etapa presenta nuevos horrores: pelos, babas, vómito ácido para digestión externa. "Brundlefly" es lo abyecto personificado: ni humano ni mosca, categorías colapsadas. El museo de partes corporales desprendidas muestra la abyección del propio cuerpo. Veronica embarazada del híbrido enfrenta el horror maternal extremo: gestar lo monstruoso. El clímax fusiona nacimiento y muerte en abyección total.`,
      insightsGenerated: [
        'La transformación gradual maximiza el horror abyecto',
        'El científico debe confrontar su propia monstruosidad',
        'El embarazo híbrido es pesadilla abyecta suprema'
      ],
      methodologyApplication: 'Exploración de abyección en metamorfosis corporal',
      keyFindings: [
        'Cronenberg especializa en "body horror" kristeviano',
        'La ciencia produce lo abyecto al violar límites naturales',
        'El amor no puede sobrevivir la abyección total'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'creed-monstrous-feminine',
      relationshipType: 'complementary',
      synergyDescription: 'Creed aplica conceptos kristevianos específicamente al horror',
      combinedInsightPotential: 9
    },
    {
      id: 'freud-uncanny',
      relationshipType: 'complementary',
      synergyDescription: 'Kristeva expande el concepto freudiano de lo siniestro',
      combinedInsightPotential: 8
    },
    {
      id: 'douglas-purity-danger',
      relationshipType: 'complementary',
      synergyDescription: 'Kristeva psicologiza las teorías antropológicas de Douglas',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Abjection Analysis Toolkit',
      type: 'framework',
      description: 'Herramientas para identificar elementos abyectos',
      cost: 'paid',
      platforms: ['research']
    },
    {
      name: 'Body Horror Database',
      type: 'webapp',
      description: 'Catálogo de representaciones abyectas en cine',
      cost: 'paid',
      platforms: ['web']
    }
  ]
};
