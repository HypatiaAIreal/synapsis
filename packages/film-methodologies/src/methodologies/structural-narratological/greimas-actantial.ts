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

export const GREIMAS_ACTANTIAL: Methodology = {
  metadata: {
    id: 'greimas-actantial',
    name: 'Modelo Actancial',
    author: 'A.J. Greimas',
    year: 1966,
    category: 'structural-narratological',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['propp-morphology'],
    culturalContext: 'Semiótica estructural francesa',
    language: 'es'
  },
  
  description: `Algirdas Julien Greimas desarrolló un modelo semiótico-estructural que reduce todas las narrativas a seis roles fundamentales o "actantes" organizados en tres pares de oposiciones. Su teoría, derivada de Propp pero más abstracta y universal, propone que toda narrativa puede entenderse como una estructura de relaciones entre: Sujeto/Objeto (eje del deseo), Destinador/Destinatario (eje de la comunicación), y Ayudante/Oponente (eje del poder). Este modelo trasciende los personajes individuales, enfocándose en funciones narrativas que pueden ser desempeñadas por múltiples personajes, objetos o conceptos abstractos. Greimas también desarrolló el "cuadrado semiótico", una herramienta para mapear las relaciones lógicas entre conceptos narrativos.`,
  
  keyConcepts: [
    {
      term: 'Seis Actantes',
      definition: 'Roles narrativos fundamentales: Sujeto, Objeto, Destinador, Destinatario, Ayudante, Oponente',
      importance: 'fundamental',
      relatedTerms: ['función narrativa', 'rol']
    },
    {
      term: 'Tres Ejes',
      definition: 'Relaciones estructurales: Deseo (Sujeto-Objeto), Comunicación (Destinador-Destinatario), Poder (Ayudante-Oponente)',
      importance: 'fundamental',
      relatedTerms: ['relación actancial', 'estructura']
    },
    {
      term: 'Programa Narrativo',
      definition: 'Secuencia de transformaciones de estado que constituyen la acción narrativa',
      importance: 'important',
      relatedTerms: ['transformación', 'secuencia']
    },
    {
      term: 'Cuadrado Semiótico',
      definition: 'Estructura lógica que mapea relaciones de oposición, contradicción y complementariedad',
      importance: 'important',
      relatedTerms: ['oposición', 'lógica narrativa']
    },
    {
      term: 'Modalidades',
      definition: 'Competencias del sujeto: Querer, Deber, Poder, Saber',
      importance: 'important',
      relatedTerms: ['competencia', 'capacidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del objeto de deseo',
      description: 'Determinar qué busca o desea el protagonista principal',
      timeEstimate: 20,
      difficulty: 'basic',
      tips: [
        'El objeto puede ser concreto o abstracto',
        'Puede haber múltiples objetos en narrativas complejas',
        'El objeto puede transformarse durante la narrativa'
      ],
      commonMistakes: [
        'Confundir medio con fin',
        'Ignorar objetos abstractos como libertad o venganza'
      ]
    },
    {
      order: 2,
      name: 'Mapeo de actantes',
      description: 'Asignar personajes y elementos narrativos a los 6 roles actanciales',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Un personaje puede ocupar múltiples roles actanciales',
        'Los roles pueden cambiar durante la narrativa',
        'Conceptos abstractos pueden ser actantes'
      ]
    },
    {
      order: 3,
      name: 'Análisis de ejes',
      description: 'Examinar las relaciones en cada uno de los tres ejes',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Evaluar la fuerza de cada relación',
        'Identificar conflictos entre ejes'
      ]
    },
    {
      order: 4,
      name: 'Construcción del esquema actancial',
      description: 'Visualizar las relaciones entre todos los actantes',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de programas narrativos',
      description: 'Determinar las secuencias de transformación de estados',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Un film puede contener múltiples programas narrativos',
        'Identificar programas principales y secundarios'
      ]
    },
    {
      order: 6,
      name: 'Análisis modal',
      description: 'Examinar las competencias (querer, deber, poder, saber) del sujeto',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Modelo flexible aplicable a cualquier tipo de narrativa',
    'Más abstracto y universal que el modelo de Propp',
    'Revela estructuras de poder y deseo en las narrativas',
    'Útil para análisis comparativo entre diferentes films',
    'Integra aspectos semióticos y narratológicos'
  ],
  
  limitations: [
    'Puede ser demasiado abstracto para análisis detallados',
    'Dificultad con narrativas múltiples o corales',
    'No considera aspectos estilísticos o formales',
    'Simplifica motivaciones psicológicas complejas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['A.J. Greimas'],
      title: 'On Meaning: Selected Writings in Semiotic Theory',
      year: 1987,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['A.J. Greimas'],
      title: 'Structural Semantics: An Attempt at a Method',
      year: 1983,
      publisher: 'University of Nebraska Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['A.J. Greimas', 'J. Courtés'],
      title: 'Semiotics and Language: An Analytical Dictionary',
      year: 1982,
      publisher: 'Indiana University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Inception',
        year: 2010,
        director: 'Christopher Nolan'
      },
      analysisExcerpt: `Inception presenta una estructura actancial compleja con múltiples niveles. Sujeto: Cobb; Objeto dual: Volver con sus hijos / Realizar la inception; Destinador: Saito (externo) y culpa de Cobb (interno); Destinatario: Los hijos de Cobb / Fischer (para la inception); Ayudantes: El equipo (Ariadne, Arthur, Eames, Yusuf); Oponentes: Mal (proyección) / El subconsciente de Fischer / El tiempo. El programa narrativo principal (reunión familiar) se entrelaza con el programa secundario (inception), creando una estructura en mise en abyme.`,
      insightsGenerated: [
        'Dualidad del objeto refleja el conflicto interno de Cobb',
        'Mal funciona simultáneamente como oponente y objeto perdido',
        'La estructura actancial se replica en cada nivel de sueño'
      ],
      methodologyApplication: 'Análisis de actantes en múltiples niveles narrativos y diegéticos',
      keyFindings: [
        'Los actantes pueden operar en múltiples niveles de realidad',
        'El destinador interno (culpa) es más poderoso que el externo',
        'La inception es McGuffin actancial que permite el verdadero objeto'
      ]
    },
    {
      film: {
        title: 'The Social Network',
        year: 2010,
        director: 'David Fincher'
      },
      analysisExcerpt: `Estructura actancial reveladora: Sujeto: Mark Zuckerberg; Objeto: Reconocimiento/Aceptación social (no Facebook en sí); Destinador: Rechazo de Erica y los clubes de Harvard; Destinatario: Mark mismo / La sociedad; Ayudantes: Eduardo (inicialmente), Sean Parker; Oponentes: Los gemelos Winklevoss, Eduardo (posteriormente), el sistema social de Harvard. Facebook es el medio, no el objeto. El programa narrativo muestra cómo la búsqueda de conexión produce aislamiento.`,
      insightsGenerated: [
        'El objeto real (aceptación) se oculta tras el aparente (Facebook)',
        'Los ayudantes se transforman en oponentes',
        'El éxito en el programa narrativo aparente garantiza el fracaso en el real'
      ],
      methodologyApplication: 'Identificación de objetos latentes versus manifiestos',
      keyFindings: [
        'La ironía actancial: crear conexión buscando aceptación produce aislamiento',
        'Los actantes humanos son reemplazados por la plataforma',
        'El sujeto se convierte en su propio oponente principal'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'propp-morphology',
      relationshipType: 'synthetic',
      synergyDescription: 'Greimas sintetiza las 7 esferas de acción de Propp en 6 actantes más abstractos',
      combinedInsightPotential: 9
    },
    {
      id: 'campbell-hero-journey',
      relationshipType: 'complementary',
      synergyDescription: 'Campbell enfoca la transformación del héroe mientras Greimas mapea relaciones estructurales',
      combinedInsightPotential: 8
    },
    {
      id: 'lacan-desire',
      relationshipType: 'complementary',
      synergyDescription: 'Lacan profundiza en la naturaleza del deseo que Greimas esquematiza en el eje Sujeto-Objeto',
      combinedInsightPotential: 9
    }
  ]
};
