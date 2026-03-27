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

export const VAUGHAN_TELEVISION_DOCUMENTARY: Methodology = {
  metadata: {
    id: 'vaughan-television-documentary',
    name: 'Televisión Documental',
    author: 'Dai Vaughan',
    year: 1976,
    category: 'documentary',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['documentary-basics', 'television-studies'],
    culturalContext: 'Teoría documental televisiva británica',
    language: 'es'
  },
  
  description: `Dai Vaughan, editor y teórico, desarrolló insights únicos sobre el documental desde la perspectiva del montaje y la televisión. Su concepto del "momento documental" identifica instantes donde la realidad excede la intención del filmador, revelando verdades inesperadas. Vaughan analiza cómo el montaje construye argumentos documentales a través de yuxtaposición y ritmo, no solo contenido. Su trabajo sobre televisión documental examina cómo el medio transforma las convenciones: serialidad, intimidad doméstica, liveness, flujo continuo. Vaughan teoriza sobre la "autenticidad accidental" - cuando errores o momentos no planeados revelan más verdad que secuencias preparadas. Su análisis de la "mirada documental" examina cómo los sujetos se comportan para las cámaras.`,
  
  keyConcepts: [
    {
      term: 'Momento Documental',
      definition: 'Instantes donde la realidad excede la intención del filmador',
      importance: 'fundamental',
      relatedTerms: ['revelación', 'exceso']
    },
    {
      term: 'Autenticidad Accidental',
      definition: 'Verdad revelada en momentos no planeados',
      importance: 'important',
      relatedTerms: ['error productivo', 'espontaneidad']
    },
    {
      term: 'Mirada Documental',
      definition: 'Cómo los sujetos actúan consciente/inconscientemente para la cámara',
      importance: 'important',
      relatedTerms: ['performance', 'conciencia']
    },
    {
      term: 'Especificidad Televisiva',
      definition: 'Características únicas del documental en TV',
      importance: 'fundamental',
      relatedTerms: ['serialidad', 'domesticidad']
    },
    {
      term: 'Montaje Argumental',
      definition: 'Edición como construcción retórica',
      importance: 'important',
      relatedTerms: ['edición', 'argumento']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Buscar momentos documentales',
      description: 'Identificar instantes de exceso o revelación',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar cuando algo escapa al control',
        'Notar reacciones genuinas inesperadas',
        'Los momentos documentales son raros pero poderosos'
      ],
      commonMistakes: [
        'Confundir con momentos simplemente dramáticos',
        'Ignorar momentos sutiles'
      ]
    },
    {
      order: 2,
      name: 'Identificar autenticidad accidental',
      description: 'Localizar verdades en errores o accidentes',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Los errores técnicos pueden ser reveladores',
        'Buscar cuando el control se pierde productivamente'
      ]
    },
    {
      order: 3,
      name: 'Analizar mirada documental',
      description: 'Examinar comportamiento ante la cámara',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Examinar montaje',
      description: 'Analizar construcción argumental mediante edición',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificar especificidad mediática',
      description: 'Determinar características televisivas vs cinematográficas',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluar ética editorial',
      description: 'Examinar responsabilidad en decisiones de montaje',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Perspectiva única desde la práctica editorial',
    'Atención valiosa a especificidad televisiva',
    'Conceptos originales sobre autenticidad',
    'Sensibilidad a temporalidad y ritmo',
    'Ética práctica desde experiencia'
  ],
  
  limitations: [
    'Enfoque principalmente en TV británica',
    'Conceptos más impresionistas que sistemáticos',
    'Menos conocido que otros teóricos',
    'Escritura dispersa y fragmentaria'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Dai Vaughan'],
      title: 'For Documentary: Twelve Essays',
      year: 1999,
      publisher: 'University of California Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Dai Vaughan'],
      title: 'Television Documentary Usage',
      year: 1976,
      publisher: 'British Film Institute',
      essential: true
    },
    {
      type: 'book',
      authors: ['John Corner'],
      title: 'Documentary and the Mass Media',
      year: 1986,
      publisher: 'Edward Arnold',
      essential: false      
    }
  ],
  
  examples: [
    {
      film: {
        title: '7 Up Series',
        year: 1964-2019,
        director: 'Michael Apted'
      },
      analysisExcerpt: `Serie paradigmática para conceptos de Vaughan. Momentos documentales acumulados a través de décadas: cuando los sujetos revelan más de lo que pretenden. Autenticidad accidental en las reacciones a verse en episodios anteriores. La mirada documental evoluciona: los sujetos cada vez más conscientes de su performance longitudinal. Especificidad televisiva absoluta: serialidad que permite ver el tiempo mismo. El montaje entre episodios crea argumentos sobre clase, destino, determinismo. La intimidad doméstica de la TV permite conexión emocional profunda con sujetos.`,
      insightsGenerated: [
        'La serialidad televisiva permite documentar el tiempo mismo',
        'Los momentos documentales se acumulan longitudinalmente',
        'Los sujetos desarrollan relación compleja con su imagen mediática'
      ],
      methodologyApplication: 'Análisis de serialidad documental y temporalidad extendida',
      keyFindings: [
        'La TV permite formas documentales imposibles en cine',
        'El tiempo largo revela verdades inaccesibles al film único',
        'La mirada documental se complejiza con la repetición'
      ]
    },
    {
      film: {
        title: 'The Staircase',
        year: 2004,
        director: 'Jean-Xavier de Lestrade'
      },
      analysisExcerpt: `Documental que captura múltiples momentos documentales cruciales. La autenticidad accidental del búho revela verdad no buscada. Los sujetos oscilan entre performance consciente (Peterson como novelista) y revelación involuntaria. El montaje construye suspenso pero también argumento sobre sistema judicial. La serialidad televisiva permite desarrollo temporal del caso. Momentos de exceso cuando la realidad supera cualquier guión. La ética editorial se vuelve central: qué incluir/excluir afecta la justicia.`,
      insightsGenerated: [
        'Los momentos documentales pueden tener consecuencias legales',
        'La extensión televisiva permite complejidad narrativa superior',
        'La autenticidad accidental puede resolver enigmas reales'
      ],
      methodologyApplication: 'Examen de cómo el tiempo televisivo revela verdad',
      keyFindings: [
        'La duración extendida permite capturas imposibles',
        'Los momentos documentales emergen de la paciencia',
        'El montaje documental tiene responsabilidades éticas únicas'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'corner-television-documentary',
      relationshipType: 'parallel',
      synergyDescription: 'Corner ofrece análisis más sistemático de TV documental',
      combinedInsightPotential: 8
    },
    {
      id: 'ellis-television-documentary',
      relationshipType: 'complementary',
      synergyDescription: 'Ellis teoriza aspectos industriales que Vaughan observa estéticamente',
      combinedInsightPotential: 7
    },
    {
      id: 'nichols-documentary-modes',
      relationshipType: 'complementary',
      synergyDescription: 'Los modos de Nichols operan diferentemente en televisión según Vaughan',
      combinedInsightPotential: 7
    }
  ]
};
