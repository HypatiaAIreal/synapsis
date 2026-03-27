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

export const HAUGE_SIX_STAGE: Methodology = {
  metadata: {
    id: 'hauge-six-stage',
    name: 'Estructura en Seis Etapas',
    author: 'Michael Hauge',
    year: 2011,
    category: 'screenplay-dramaturgy',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['basic-screenwriting'],
    culturalContext: 'Teoría de transformación Hollywood',
    language: 'es'
  },
  
  description: `Michael Hauge desarrolló un sistema que combina estructura externa (trama) con viaje interno (transformación del personaje) en seis etapas claramente definidas. Su método único mapea cómo el personaje se mueve entre su "identidad" (imagen protectora falsa) y su "esencia" (verdadero yo) a lo largo de la historia. Hauge divide cualquier narrativa en seis etapas: Setup (0-10%), New Situation (10-25%), Progress (25-50%), Complications and Higher Stakes (50-75%), Final Push (75-90%), y Aftermath (90-100%), cada una con funciones específicas para ambos viajes. Su concepto de "wound" explica por qué el personaje adoptó su identidad falsa, mientras que el "fear" es lo que le impide abrazar su esencia.`,
  
  keyConcepts: [
    {
      term: 'Identidad vs. Esencia',
      definition: 'Falso yo protector vs. verdadero yo auténtico del personaje',
      importance: 'fundamental',
      relatedTerms: ['máscara', 'autenticidad', 'transformación']
    },
    {
      term: 'Seis Etapas',
      definition: 'Setup, New Situation, Progress, Complications, Final Push, Aftermath',
      importance: 'fundamental',
      relatedTerms: ['estructura', 'progresión narrativa']
    },
    {
      term: 'Viaje Exterior/Interior',
      definition: 'Objetivo visible (trama) paralelo a transformación invisible (arco)',
      importance: 'fundamental',
      relatedTerms: ['dualidad narrativa', 'arco paralelo']
    },
    {
      term: 'Wound',
      definition: 'Trauma o experiencia que causó la adopción de la identidad falsa',
      importance: 'important',
      relatedTerms: ['trauma originario', 'causa psicológica']
    },
    {
      term: 'Fear',
      definition: 'Miedo específico que impide al personaje mostrar su esencia',
      importance: 'important',
      relatedTerms: ['obstáculo interno', 'bloqueo psicológico']
    },
    {
      term: 'Reflection Character',
      definition: 'Personaje que representa o modela la esencia del protagonista',
      importance: 'important',
      relatedTerms: ['espejo', 'modelo aspiracional']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Definición de identidad/esencia',
      description: 'Establecer el falso yo y el verdadero yo del protagonista',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identidad: cómo se protege el personaje del mundo',
        'Esencia: quién es realmente cuando es auténtico',
        'Deben ser opuestos pero creíbles en la misma persona'
      ],
      commonMistakes: [
        'Hacer la identidad completamente negativa',
        'No conectar identidad con supervivencia emocional'
      ]
    },
    {
      order: 2,
      name: 'Mapeo de las seis etapas',
      description: 'Distribuir la historia en las proporciones correctas',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Setup (0-10%): Establecer identidad y mundo ordinario',
        'New Situation (10-25%): Oportunidad que desafía identidad',
        'Progress (25-50%): Éxitos mientras mantiene identidad',
        'Complications (50-75%): Identidad insuficiente, crisis',
        'Final Push (75-90%): Debe elegir entre identidad y esencia',
        'Aftermath (90-100%): Nueva vida integrando esencia'
      ]
    },
    {
      order: 3,
      name: 'Identificación del wound',
      description: 'Descubrir el origen de la identidad protectora',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Puede ser revelado gradualmente o en flashback',
        'Debe justificar psicológicamente la identidad',
        'No necesita ser extremadamente traumático'
      ]
    },
    {
      order: 4,
      name: 'Definición del fear',
      description: 'Establecer qué teme el personaje si muestra su esencia',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Miedo a vulnerabilidad, rechazo, fracaso, etc.',
        'Debe ser específico y personal',
        'El clímax debe confrontar este miedo'
      ]
    },
    {
      order: 5,
      name: 'Desarrollo del viaje paralelo',
      description: 'Sincronizar viaje exterior (trama) con interior (transformación)',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Cada etapa externa debe reflejar cambio interno',
        'Los obstáculos externos revelan conflictos internos',
        'La resolución debe integrar ambos viajes'
      ]
    },
    {
      order: 6,
      name: 'Creación del reflection character',
      description: 'Diseñar personaje que muestre la esencia posible',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Integra perfectamente estructura externa con arco interno',
    'Claridad matemática con profundidad psicológica',
    'Especialmente efectivo para romances y dramas de transformación',
    'Proporciona mapa claro para desarrollo de personaje',
    'Considera viajes paralelos de múltiples personajes',
    'Porcentajes específicos facilitan la planificación'
  ],
  
  limitations: [
    'Menos útil para películas de ensemble o corales',
    'Asume transformación positiva hacia autenticidad',
    'Puede simplificar personajes psicológicamente complejos',
    'Estructura algo rígida para narrativas experimentales',
    'Mejor para mainstream que cine de arte'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Michael Hauge'],
      title: 'Writing Screenplays That Sell',
      year: 2011,
      publisher: 'Collins Reference',
      essential: true
    },
    {
      type: 'book',
      authors: ['Michael Hauge'],
      title: 'Selling Your Story in 60 Seconds',
      year: 2006,
      publisher: 'Michael Wiese Productions',
      essential: false
    },
    {
      type: 'film',
      authors: ['Michael Hauge', 'Christopher Vogler'],
      title: 'The Hero\'s 2 Journeys',
      year: 2003,
      publisher: 'Writer\'s AudioShop',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The King\'s Speech',
        year: 2010,
        director: 'Tom Hooper'
      },
      analysisExcerpt: `Perfecta aplicación del modelo Hauge. Identidad: Rey tartamudo, inadecuado, distante. Esencia: Líder capaz, valiente, conectado. Wound: Abuso infantil y presión familiar crearon tartamudez. Fear: Humillación pública y fracaso como rey. Setup: Bertie oculto tras su hermano. New Situation: Abdicación lo fuerza al trono. Progress: Mejora con Logue manteniendo distancia real. Complications: Debe hablar a la nación en guerra. Final Push: Elige autenticidad sobre protocolo. Aftermath: Rey que inspira por su humanidad. Logue es reflection character perfecto.`,
      insightsGenerated: [
        'El impedimento físico simboliza bloqueo emocional',
        'El viaje exterior (hablar) refleja viaje interior (conectar)',
        'La esencia incluye vulnerabilidad como fortaleza'
      ],
      methodologyApplication: 'Sincronización perfecta de transformación externa/interna',
      keyFindings: [
        'Hauge ideal para biopics de transformación',
        'Los impedimentos físicos pueden externalizar conflictos internos',
        'El reflection character puede ser de clase social opuesta'
      ]
    },
    {
      film: {
        title: 'Pretty Woman',
        year: 1990,
        director: 'Garry Marshall'
      },
      analysisExcerpt: `Romance clásico estructura Hauge. Vivian - Identidad: Prostituta endurecida, cínica. Esencia: Mujer digna de amor verdadero. Edward - Identidad: Tiburón corporativo sin emociones. Esencia: Hombre capaz de intimidad. Ambos wounds: abandono/traición previos. Ambos fears: vulnerabilidad y pérdida de control. Las seis etapas mapeadas para ambos personajes paralelamente. New Situation: contrato de negocios. Progress: éxito en roles falsos. Complications: sentimientos reales emergen. Final Push: deben elegir amor (esencia) sobre seguridad (identidad). Cada uno es reflection character del otro.`,
      insightsGenerated: [
        'En romance, ambos protagonistas tienen viajes completos',
        'Los personajes pueden ser mutuamente reflection characters',
        'La transformación debe ser bidireccional para ser creíble'
      ],
      methodologyApplication: 'Doble aplicación del modelo para romance equilibrado',
      keyFindings: [
        'Hauge excelente para romances con transformación mutua',
        'Las identidades protectoras pueden ser profesiones',
        'El amor verdadero requiere mostrar esencia, no identidad'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'vogler-writer-journey',
      relationshipType: 'complementary',
      synergyDescription: 'Vogler proporciona arquetipos mientras Hauge mapea transformación interna',
      combinedInsightPotential: 9
    },
    {
      id: 'snyder-save-cat',
      relationshipType: 'complementary',
      synergyDescription: 'Los beats de Snyder pueden mapear dentro de las 6 etapas de Hauge',
      combinedInsightPotential: 8
    },
    {
      id: 'enneagram-characters',
      relationshipType: 'complementary',
      synergyDescription: 'El eneagrama puede definir específicamente identidad/esencia',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Identity to Essence Mapper',
      type: 'software',
      description: 'Herramienta para mapear transformación según Hauge',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    },
    {
      name: 'Six Stage Calculator',
      type: 'webapp',
      description: 'Calculadora para distribuir las 6 etapas según duración',
      cost: 'free',
      platforms: ['web']
    }
  ]
};
