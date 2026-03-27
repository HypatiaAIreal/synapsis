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

export const ZIZEK_CONTEMPORARY: Methodology = {
  metadata: {
    id: 'zizek-contemporary',
    name: 'Cine y Psicoanálisis Contemporáneo',
    author: 'Slavoj Žižek',
    year: 1989,
    category: 'psychoanalytic',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['lacan-gaze-mirror', 'german-idealism'],
    culturalContext: 'Psicoanálisis cultural posmarxista',
    language: 'es'
  },
  
  description: `Slavoj Žižek ha revolucionado el análisis psicoanalítico del cine aplicando conceptos lacanianos de manera provocativa y accesible a películas populares. Su método lee los films como síntomas de traumas ideológicos y antagonismos sociales reprimidos. Žižek utiliza el cine para ilustrar conceptos psicoanalíticos complejos mientras simultáneamente usa el psicoanálisis para revelar las dimensiones inconscientes del cine. Su análisis del "fantasma ideológico fundamental" muestra cómo las películas organizan el goce y estructuran la realidad social. Žižek examina cómo el cine maneja lo Real traumático - aquello que resiste la simbolización - a través de formaciones fantasmáticas.`,
  
  keyConcepts: [
    {
      term: 'Lo Real Traumático',
      definition: 'Lo que resiste absolutamente la simbolización, núcleo imposible',
      importance: 'fundamental',
      relatedTerms: ['trauma', 'antagonismo', 'imposible']
    },
    {
      term: 'Fantasma Fundamental',
      definition: 'Escenario inconsciente que estructura la realidad y organiza el goce',
      importance: 'fundamental',
      relatedTerms: ['fantasía ideológica', 'escena primordial']
    },
    {
      term: 'Sinthome',
      definition: 'Síntoma que sostiene la identidad del sujeto, nudo de goce',
      importance: 'important',
      relatedTerms: ['síntoma', 'formación patológica']
    },
    {
      term: 'Acto Auténtico',
      definition: 'Ruptura radical del orden simbólico, atravesar el fantasma',
      importance: 'important',
      relatedTerms: ['acto ético', 'ruptura']
    },
    {
      term: 'Objeto-Voz/Mirada',
      definition: 'Objetos parciales lacanianos que causan deseo y ansiedad',
      importance: 'important',
      relatedTerms: ['objeto a', 'objeto parcial']
    },
    {
      term: 'Goce del Otro',
      definition: 'Ansiedad sobre el deseo incomprensible del Otro',
      importance: 'important',
      relatedTerms: ['jouissance', 'deseo del Otro']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del antagonismo central',
      description: 'Localizar la contradicción irresoluble en el corazón del film',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar lo que el film no puede resolver',
        'El antagonismo es estructural, no personal',
        'A menudo se manifiesta en síntomas narrativos'
      ],
      commonMistakes: [
        'Confundir conflicto superficial con antagonismo',
        'Buscar resolución donde hay aporía'
      ]
    },
    {
      order: 2,
      name: 'Localización de lo Real',
      description: 'Identificar qué resiste la integración simbólica',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Lo Real a menudo aparece como horror o goce excesivo',
        'Buscar momentos de colapso del sentido',
        'Puede manifestarse en repeticiones compulsivas'
      ]
    },
    {
      order: 3,
      name: 'Análisis del fantasma ideológico',
      description: 'Examinar cómo se organiza el goce narrativamente',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'El fantasma estructura lo que es posible desear',
        'Buscar la escena fundamental que se repite',
        'Identificar cómo se distribuye el goce'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de síntomas',
      description: 'Identificar retornos de lo reprimido social',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Los síntomas son soluciones de compromiso',
        'Revelan verdades ideológicas ocultas',
        'A menudo aparecen como excesos narrativos'
      ]
    },
    {
      order: 5,
      name: 'Examen de objetos parciales',
      description: 'Analizar función de voz y mirada perturbadoras',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de actos auténticos',
      description: 'Identificar rupturas del orden simbólico',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Hace accesible teoría lacaniana compleja',
    'Conecta psicoanálisis con crítica ideológica',
    'Análisis provocativo y original',
    'Aplicable a cine popular y de arte',
    'Revela dimensiones inconscientes de la cultura',
    'Método dialéctico dinámico'
  ],
  
  limitations: [
    'A veces más performance que análisis riguroso',
    'Puede forzar interpretaciones',
    'Eurocentrismo en referencias culturales',
    'Usa films para ilustrar teoría preexistente',
    'Estilo puede opacar sustancia',
    'Controversias políticas pueden distraer'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Slavoj Žižek'],
      title: 'Looking Awry: An Introduction to Jacques Lacan through Popular Culture',
      year: 1991,
      publisher: 'MIT Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Slavoj Žižek'],
      title: 'Everything You Always Wanted to Know About Lacan But Were Afraid to Ask Hitchcock',
      year: 1992,
      publisher: 'Verso',
      essential: true
    },
    {
      type: 'book',
      authors: ['Slavoj Žižek'],
      title: 'The Fright of Real Tears: Krzysztof Kieślowski Between Theory and Post-Theory',
      year: 2001,
      publisher: 'BFI Publishing',
      essential: true
    },
    {
      type: 'film',
      authors: ['Sophie Fiennes', 'Slavoj Žižek'],
      title: 'The Pervert\'s Guide to Cinema',
      year: 2006,
      publisher: 'P Guide Ltd',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Birds',
        year: 1963,
        director: 'Alfred Hitchcock'
      },
      analysisExcerpt: `Para Žižek, los pájaros son materialización pura del goce materno excesivo. No tienen explicación porque son lo Real mismo: antagonismo sexual materializado. Los ataques comienzan cuando Melanie (sexualidad disruptiva) entra en Bodega Bay (orden simbólico cerrado). Los pájaros no simbolizan nada: son la mancha de lo Real, el exceso de goce que perturba el equilibrio. La madre de Mitch goza demasiado de su hijo; este goce excesivo se materializa en pájaros atacantes. El film muestra cómo lo Real traumático irrumpe cuando el orden simbólico no puede contener los antagonismos sexuales.`,
      insightsGenerated: [
        'Lo Real no necesita explicación simbólica',
        'El goce excesivo se materializa en catástrofes inexplicables',
        'Los antagonismos sexuales pueden manifestarse como horror cósmico'
      ],
      methodologyApplication: 'Lectura de elementos inexplicables como irrupciones de lo Real',
      keyFindings: [
        'Hitchcock intuye que el horror verdadero es inexplicable',
        'El psicoanálisis revela la lógica del sinsentido',
        'Lo Real traumático estructura la realidad narrativa'
      ]
    },
    {
      film: {
        title: 'Fight Club',
        year: 1999,
        director: 'David Fincher'
      },
      analysisExcerpt: `Žižek lee Fight Club como fantasma ideológico de liberación mediante destrucción. Tyler Durden es sinthome del narrador: síntoma que sostiene su identidad. El club de pelea intenta acceder a lo Real del cuerpo más allá de la alienación consumista. Pero el acto verdaderamente auténtico no es la destrucción terrorista sino el disparo final: atravesar el fantasma, matar al síntoma. "You met me at a very strange time in my life" - reconocimiento de que toda identidad es transitoria. La película expone y atraviesa el fantasma fascista de purificación mediante violencia.`,
      insightsGenerated: [
        'La violencia como búsqueda fallida de lo Real',
        'El síntoma puede ser más real que el yo "normal"',
        'Atravesar el fantasma requiere "matar" la fantasía salvadora'
      ],
      methodologyApplication: 'Análisis del sinthome y el atravesamiento del fantasma',
      keyFindings: [
        'El fascismo como fantasma de acceso directo a lo Real',
        'La verdadera liberación requiere abandonar la fantasía de liberación',
        'El síntoma revela la verdad del sujeto'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'lacan-gaze-mirror',
      relationshipType: 'complementary',
      synergyDescription: 'Žižek aplica y populariza conceptos lacanianos',
      combinedInsightPotential: 9
    },
    {
      id: 'marx-ideology',
      relationshipType: 'synthetic',
      synergyDescription: 'Žižek sintetiza psicoanálisis con crítica marxista',
      combinedInsightPotential: 9
    },
    {
      id: 'hegel-dialectics',
      relationshipType: 'complementary',
      synergyDescription: 'Žižek lee Lacan a través de Hegel',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Žižek Film Analysis Archive',
      type: 'webapp',
      url: 'https://zizekstudies.org',
      description: 'Archivo de análisis cinematográficos de Žižek',
      cost: 'free',
      platforms: ['web']
    },
    {
      name: 'Pervert\'s Guide Companion',
      type: 'webapp',
      description: 'Guía interactiva de conceptos žižekianos',
      cost: 'paid',
      platforms: ['web', 'mobile']
    }
  ]
};
