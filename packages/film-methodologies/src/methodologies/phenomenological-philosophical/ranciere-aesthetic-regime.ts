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

export const RANCIERE_AESTHETIC_REGIME: Methodology = {
  metadata: {
    id: 'ranciere-aesthetic-regime',
    name: 'El Régimen Estético del Arte',
    author: 'Jacques Rancière',
    year: 2000,
    category: 'phenomenological-philosophical',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['political-philosophy', 'aesthetics'],
    culturalContext: 'Filosofía política y estética francesa contemporánea',
    language: 'es'
  },
  
  description: `Jacques Rancière desarrolló una teoría estético-política del cine que rechaza las divisiones tradicionales entre arte elevado y cultura popular, entre estética y política. Su concepto de "régimen estético del arte" describe un modo de experiencia donde el arte no se define por reglas técnicas sino por un modo específico de ser sensible. Para Rancière, el cine es el arte democrático por excelencia porque borra jerarquías entre temas nobles e innobles, entre acción y pasividad. Su noción de "reparto de lo sensible" examina cómo el cine redistribuye lo visible y lo decible, creando nuevas posibilidades de experiencia. Rancière critica la "lógica representativa" que subordina las imágenes a las historias, valorando momentos de "suspensión estética" donde el cine se libera de la tiranía narrativa.`,
  
  keyConcepts: [
    {
      term: 'Régimen Estético',
      definition: 'Modo de identificación del arte basado en lo sensible, no en reglas',
      importance: 'fundamental',
      relatedTerms: ['sensibilidad', 'experiencia estética']
    },
    {
      term: 'Reparto de lo Sensible',
      definition: 'Distribución de lo visible, decible y pensable en una comunidad',
      importance: 'fundamental',
      relatedTerms: ['distribución', 'visibilidad', 'política']
    },
    {
      term: 'Fábula Cinematográfica',
      definition: 'Tensión entre lógica narrativa y potencia visual del cine',
      importance: 'fundamental',
      relatedTerms: ['narración', 'imagen', 'tensión']
    },
    {
      term: 'Espectador Emancipado',
      definition: 'Espectador activo que traduce y construye su propia experiencia',
      importance: 'important',
      relatedTerms: ['actividad', 'interpretación', 'emancipación']
    },
    {
      term: 'Suspensión Estética',
      definition: 'Momentos donde la imagen se libera de función narrativa',
      importance: 'important',
      relatedTerms: ['autonomía', 'contemplación', 'ruptura']
    },
    {
      term: 'Frase-Imagen',
      definition: 'Unidad que combina elementos heterogéneos productivamente',
      importance: 'important',
      relatedTerms: ['montaje', 'heterogeneidad', 'choque']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del régimen',
      description: 'Determinar si opera en régimen estético o representativo',
      timeEstimate: 30,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de autonomía de lo sensible',
        'Identificar jerarquías o su ausencia',
        'Examinar relación entre forma y contenido'
      ],
      commonMistakes: [
        'Confundir régimen estético con experimentalismo',
        'Asociar automáticamente con períodos históricos'
      ]
    },
    {
      order: 2,
      name: 'Análisis del reparto sensible',
      description: 'Examinar qué se hace visible/invisible, decible/indecible',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar redistribuciones de visibilidad',
        'Buscar voces o perspectivas emergentes',
        'Analizar nuevas formas de aparecer'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de suspensiones',
      description: 'Localizar momentos de suspensión estética',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar imágenes liberadas de función',
        'Buscar contemplación no-narrativa',
        'Notar rupturas en la lógica causal'
      ]
    },
    {
      order: 4,
      name: 'Análisis de frase-imagen',
      description: 'Examinar montajes de elementos heterogéneos',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Evaluación de emancipación',
      description: 'Analizar el rol activo propuesto al espectador',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Síntesis político-estética',
      description: 'Integrar dimensiones políticas y estéticas del análisis',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Supera divisiones entre arte elevado y popular',
    'Integra naturalmente estética y política',
    'Valoriza capacidad interpretativa del espectador',
    'No prescriptivo políticamente',
    'Aplicable a cualquier tipo de cine',
    'Pensamiento verdaderamente democrático'
  ],
  
  limitations: [
    'Conceptos pueden ser abstractos',
    'Menos atención a especificidades técnicas',
    'Puede romantizar la igualdad',
    'Resistente a metodologización',
    'Requiere repensar categorías tradicionales',
    'Menos sistemático que otros enfoques'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jacques Rancière'],
      title: 'Film Fables',
      year: 2006,
      publisher: 'Berg Publishers',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jacques Rancière'],
      title: 'The Emancipated Spectator',
      year: 2009,
      publisher: 'Verso',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jacques Rancière'],
      title: 'The Politics of Aesthetics',
      year: 2004,
      publisher: 'Continuum',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jacques Rancière'],
      title: 'The Intervals of Cinema',
      year: 2014,
      publisher: 'Verso',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Béla Tarr films (e.g., Sátántangó)',
        year: 1994,
        director: 'Béla Tarr'
      },
      analysisExcerpt: `Los films de Béla Tarr ejemplifican el régimen estético puro. El tiempo liberado de función narrativa crea suspensión estética radical. Lluvia, barro, caminatas: lo sensible sin jerarquía. No hay distinción entre momentos importantes y triviales. El reparto de lo sensible incluye a campesinos húngaros en su duración real, sin folclorismo ni miserabilismo. Las largas tomas emancipan al espectador de la tiranía del montaje. La frase-imagen surge del choque entre duración extrema y minimal acontecer.`,
      insightsGenerated: [
        'La duración extrema puede ser políticamente democrática',
        'La suspensión estética no requiere belleza convencional',
        'El tiempo emancipado crea nueva forma de experiencia'
      ],
      methodologyApplication: 'Análisis de suspensión estética y temporalidad democrática',
      keyFindings: [
        'El régimen estético puede operar mediante duración pura',
        'La igualdad de momentos es política radical',
        'El espectador debe crear activamente sentido'
      ]
    },
    {
      film: {
        title: 'Moonlight',
        year: 2016,
        director: 'Barry Jenkins'
      },
      analysisExcerpt: `Moonlight redistribuye lo sensible al hacer visible la intimidad negra queer masculina raramente vista. Suspensiones estéticas: Chiron en el agua, las manos en la arena, la luz azul nocturna. Estos momentos exceden función narrativa, creando pura presencia sensible. El film rechaza tanto estereotipos de hipermasculinidad negra como narrativas de victimización. La frase-imagen surge en la tensión entre dureza del entorno y ternura de los momentos íntimos. Emancipa al espectador de expectativas genéricas sobre "película negra" o "película gay".`,
      insightsGenerated: [
        'El reparto de lo sensible es acto político fundamental',
        'La belleza formal puede ser redistribución democrática',
        'Las suspensiones estéticas crean espacio para nuevas subjetividades'
      ],
      methodologyApplication: 'Análisis de redistribución de visibilidad y suspensión poética',
      keyFindings: [
        'El régimen estético permite emergencia de invisibilizados',
        'La poesía visual es política cuando redistribuye lo sensible',
        'El cine puede crear nuevas formas de aparecer'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'benjamin-mechanical-reproduction',
      relationshipType: 'parallel',
      synergyDescription: 'Benjamin anticipa aspectos del régimen estético democrático de Rancière',
      combinedInsightPotential: 8
    },
    {
      id: 'deleuze-cinema-books',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos piensan el cine filosóficamente pero con enfoques distintos',
      combinedInsightPotential: 8
    },
    {
      id: 'agamben-gesture',
      relationshipType: 'complementary',
      synergyDescription: 'Agamben ofrece otra política de la imagen complementaria',
      combinedInsightPotential: 7
    }
  ]
};
