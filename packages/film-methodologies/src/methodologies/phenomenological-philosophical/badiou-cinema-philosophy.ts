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

export const BADIOU_CINEMA_PHILOSOPHY: Methodology = {
  metadata: {
    id: 'badiou-cinema-philosophy',
    name: 'Cine como Experimentación Filosófica',
    author: 'Alain Badiou',
    year: 2013,
    category: 'phenomenological-philosophical',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['continental-philosophy', 'set-theory-basics'],
    culturalContext: 'Filosofía del acontecimiento francesa',
    language: 'es'
  },
  
  description: `Alain Badiou propone el cine como "situación filosófica" privilegiada donde se experimentan las paradojas del tiempo, el movimiento y el ser. Para Badiou, el cine no ilustra ideas filosóficas preexistentes sino que produce pensamiento a través de sus operaciones específicas. Su concepto del cine como "arte impuro" - que incorpora todas las demás artes - lo hace capaz de síntesis filosóficas únicas. Badiou analiza cómo el cine crea "procedimientos de verdad" mediante la construcción de situaciones que revelan posibilidades invisibles de lo real. Su teoría del "sujeto cinematográfico" examina cómo los films interpelan y constituyen nuevas formas de subjetividad.`,
  
  keyConcepts: [
    {
      term: 'Arte Impuro',
      definition: 'El cine como síntesis de todas las artes',
      importance: 'fundamental',
      relatedTerms: ['síntesis', 'multiplicidad', 'hibridez']
    },
    {
      term: 'Situación Filosófica',
      definition: 'Configuración que permite experimentación de paradojas conceptuales',
      importance: 'fundamental',
      relatedTerms: ['experimentación', 'paradoja', 'pensamiento']
    },
    {
      term: 'Procedimiento de Verdad',
      definition: 'Proceso que produce verdades nuevas, no descubre preexistentes',
      importance: 'fundamental',
      relatedTerms: ['verdad', 'proceso', 'novedad']
    },
    {
      term: 'Acontecimiento Cinematográfico',
      definition: 'Ruptura que inaugura nuevas posibilidades',
      importance: 'fundamental',
      relatedTerms: ['ruptura', 'novedad', 'posibilidad']
    },
    {
      term: 'Sujeto-Espectador',
      definition: 'Subjetividad constituida por interpelación del film',
      importance: 'important',
      relatedTerms: ['subjetivación', 'interpelación', 'constitución']
    },
    {
      term: 'Operaciones Cinematográficas',
      definition: 'Modos específicos en que el cine piensa',
      importance: 'important',
      relatedTerms: ['montaje-pensamiento', 'imagen-idea']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de situación filosófica',
      description: 'Localizar configuraciones que plantean paradojas',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar paradojas temporales, espaciales o existenciales',
        'Identificar experimentaciones conceptuales',
        'No reducir a ilustración de ideas previas'
      ],
      commonMistakes: [
        'Buscar filosofía explícita en diálogos',
        'Ignorar la filosofía de las formas'
      ]
    },
    {
      order: 2,
      name: 'Búsqueda de procedimientos de verdad',
      description: 'Identificar procesos que producen verdades nuevas',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Las verdades son producidas, no descubiertas',
        'Buscar fidelidad a acontecimientos',
        'Identificar lo imposible hecho posible'
      ]
    },
    {
      order: 3,
      name: 'Análisis de impureza productiva',
      description: 'Examinar síntesis de diferentes artes',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Identificación de acontecimientos',
      description: 'Localizar rupturas que abren posibilidades',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Examen de interpelación',
      description: 'Analizar constitución de sujetos-espectadores',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis militante',
      description: 'Evaluar fidelidad a verdades producidas',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Trata cine como productor de filosofía',
    'Conceptos originales y potentes',
    'Conecta estética, ética y política',
    'Valora experimentación e innovación',
    'Marco sistemático coherente',
    'Militancia por el pensamiento'
  ],
  
  limitations: [
    'Sistema filosófico muy complejo',
    'Aplicación puede ser doctrinaria',
    'Sesgo hacia ciertos autores',
    'Jerga técnica intimidante',
    'Puede intelectualizar excesivamente',
    'Menos atención a placeres simples'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Alain Badiou'],
      title: 'Cinema',
      year: 2013,
      publisher: 'Polity Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Alain Badiou'],
      title: 'Handbook of Inaesthetics',
      year: 2005,
      publisher: 'Stanford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Alain Badiou'],
      title: 'Being and Event',
      year: 2007,
      publisher: 'Continuum',
      essential: false
    },
    {
      type: 'book',
      authors: ['Alex Ling'],
      title: 'Badiou and Cinema',
      year: 2011,
      publisher: 'Edinburgh University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Matrix',
        year: 1999,
        director: 'The Wachowskis'
      },
      analysisExcerpt: `The Matrix presenta la situación filosófica perfecta: la elección entre verdad dolorosa e ilusión confortable. El acontecimiento: tomar la píldora roja, ruptura irreversible con el mundo conocido. Procedimiento de verdad: la fidelidad de Neo al acontecimiento pese a las dificultades. Arte impuro: fusión de filosofía, artes marciales, cyberpunk, efectos digitales. El film interpela al espectador como sujeto potencial de su propio despertar. "No hay cuchara" - operación cinematográfica que piensa la inexistencia del obstáculo.`,
      insightsGenerated: [
        'El cine puede presentar la elección filosófica fundamental',
        'Los efectos especiales pueden ser operaciones de pensamiento',
        'El blockbuster puede ser experimentación filosófica'
      ],
      methodologyApplication: 'Análisis del acontecimiento y procedimiento de verdad',
      keyFindings: [
        'El cine popular puede producir situaciones filosóficas',
        'La fidelidad al acontecimiento estructura la narrativa',
        'El espectador es interpelado como sujeto potencial'
      ]
    },
    {
      film: {
        title: 'Melancholia',
        year: 2011,
        director: 'Lars von Trier'
      },
      analysisExcerpt: `Melancholia crea una situación filosófica radical: ¿cómo vivir sabiendo el fin absoluto? Justine pasa de depresión a serenidad cuando el apocalipsis confirma su verdad interior. Acontecimiento: la certeza del fin transforma retroactivamente toda la vida. Procedimiento de verdad: asumir el nihilismo hasta sus últimas consecuencias. Arte impuro: Wagner, pintura romántica, ciencia ficción, melodrama. El planeta Melancholia como materialización de una verdad psíquica. El film produce una ética de la finitud absoluta.`,
      insightsGenerated: [
        'La depresión puede ser lucidez filosófica anticipada',
        'El apocalipsis como situación filosófica límite',
        'La belleza puede coexistir con la destrucción total'
      ],
      methodologyApplication: 'Experimentación filosófica con el nihilismo absoluto',
      keyFindings: [
        'El cine puede pensar lo impensable',
        'La verdad subjetiva puede coincidir con verdad cósmica',
        'El arte puede producir calma ante lo inevitable'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'deleuze-cinema-concepts',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos ven cine como productor de conceptos, con enfoques distintos',
      combinedInsightPotential: 8
    },
    {
      id: 'ranciere-aesthetic-politics',
      relationshipType: 'parallel',
      synergyDescription: 'Comparten interés en política del cine pero difieren en método',
      combinedInsightPotential: 7
    },
    {
      id: 'zizek-psychoanalytic-cinema',
      relationshipType: 'dialectical',
      synergyDescription: 'Žižek usa psicoanálisis donde Badiou usa teoría del acontecimiento',
      combinedInsightPotential: 8
    }
  ]
};
