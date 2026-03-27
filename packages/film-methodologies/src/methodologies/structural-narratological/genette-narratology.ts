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

export const GENETTE_NARRATOLOGY: Methodology = {
  metadata: {
    id: 'genette-narratology',
    name: 'Narratología',
    author: 'Gérard Genette',
    year: 1972,
    category: 'structural-narratological',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['basic-narratology'],
    culturalContext: 'Estructuralismo narratológico francés',
    language: 'es'
  },
  
  description: `Gérard Genette revolucionó el análisis narrativo al establecer una distinción sistemática entre historia (qué se cuenta), relato (cómo se cuenta) y narración (acto de contar). Su teoría proporciona un vocabulario técnico preciso para analizar las complejas relaciones temporales, modales y vocales en cualquier narrativa. Genette identificó tres aspectos fundamentales del discurso narrativo: tiempo (orden, duración, frecuencia), modo (distancia, perspectiva) y voz (tiempo de narración, niveles narrativos, persona). Su trabajo es especialmente valioso para el análisis cinematográfico porque permite examinar cómo el cine manipula el tiempo narrativo, gestiona la información y construye puntos de vista. La distinción entre focalización (quién ve) y narración (quién cuenta) es particularmente útil para analizar la compleja construcción del punto de vista cinematográfico.`,
  
  keyConcepts: [
    {
      term: 'Historia/Relato/Narración',
      definition: 'Contenido narrativo (qué) / Discurso narrativo (cómo) / Acto narrativo (quién cuenta)',
      importance: 'fundamental',
      relatedTerms: ['diégesis', 'discurso', 'enunciación']
    },
    {
      term: 'Analepsis/Prolepsis',
      definition: 'Retrospección (flashback) / Anticipación (flashforward) en el orden temporal',
      importance: 'fundamental',
      relatedTerms: ['anacronía', 'orden temporal']
    },
    {
      term: 'Focalización',
      definition: 'Perspectiva desde la cual se presenta la información: Interna/Externa/Cero',
      importance: 'fundamental',
      relatedTerms: ['punto de vista', 'perspectiva']
    },
    {
      term: 'Niveles Diegéticos',
      definition: 'Extradiegético (narrador fuera) / Intradiegético (dentro) / Metadiegético (relato dentro del relato)',
      importance: 'important',
      relatedTerms: ['diégesis', 'mise en abyme']
    },
    {
      term: 'Velocidad Narrativa',
      definition: 'Relación entre duración de historia y relato: Elipsis/Sumario/Escena/Pausa/Extensión',
      importance: 'important',
      relatedTerms: ['tempo', 'ritmo narrativo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Separación historia/relato',
      description: 'Distinguir los eventos narrados de su presentación discursiva',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Reconstruir el orden cronológico real de eventos',
        'Identificar qué información se omite o se añade',
        'Notar discrepancias entre orden de historia y presentación'
      ],
      commonMistakes: [
        'Confundir orden del relato con orden de la historia',
        'Ignorar elipsis temporales significativas'
      ]
    },
    {
      order: 2,
      name: 'Análisis temporal',
      description: 'Examinar orden (anacronías), duración (velocidad) y frecuencia',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Mapear todas las anacronías y su alcance',
        'Calcular velocidades narrativas en cada segmento',
        'Identificar repeticiones y sus funciones'
      ]
    },
    {
      order: 3,
      name: 'Análisis modal',
      description: 'Estudiar distancia narrativa y tipo de focalización',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Distinguir entre quién ve y quién narra',
        'Identificar cambios de focalización',
        'Evaluar grado de mediación narrativa'
      ]
    },
    {
      order: 4,
      name: 'Análisis vocal',
      description: 'Examinar tiempo de narración, niveles narrativos e instancia narrativa',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Construcción del diagrama temporal',
      description: 'Visualizar la estructura temporal completa del film',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Vocabulario técnico preciso para análisis sistemático',
    'Especialmente útil para narrativas temporalmente complejas',
    'Distingue claramente forma de contenido narrativo',
    'Aplicable tanto a literatura como a cine',
    'Esencial para analizar films no lineales modernos'
  ],
  
  limitations: [
    'Complejidad terminológica puede ser abrumadora',
    'Originalmente diseñado para literatura, requiere adaptación',
    'Menos útil para cine puramente visual o experimental',
    'No considera suficientemente aspectos emocionales'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Gérard Genette'],
      title: 'Narrative Discourse: An Essay in Method',
      year: 1980,
      publisher: 'Cornell University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Gérard Genette'],
      title: 'Narrative Discourse Revisited',
      year: 1988,
      publisher: 'Cornell University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Shlomith Rimmon-Kenan'],
      title: 'Narrative Fiction: Contemporary Poetics',
      year: 2002,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Memento',
        year: 2000,
        director: 'Christopher Nolan'
      },
      analysisExcerpt: `Memento presenta una estructura temporal extraordinariamente compleja. Orden: Dos líneas temporales, una progresiva (B/N) y otra regresiva (color) que convergen. Duración: Isocronía en escenas color, sumario en B/N. Frecuencia: Repetición obsesiva de información clave. Focalización: Interna fija en Leonard, creando paralepsis sistemática. La estructura refleja la condición del protagonista: el espectador experimenta la desorientación temporal de la amnesia anterógrada. El relato oculta información crucial que la historia contiene.`,
      insightsGenerated: [
        'La estructura temporal mimetiza la condición mental del protagonista',
        'La focalización interna estricta permite el engaño narrativo',
        'La convergencia temporal revela la circularidad de la venganza'
      ],
      methodologyApplication: 'Análisis exhaustivo de anacronías y focalización restrictiva',
      keyFindings: [
        'Forma y contenido son inseparables en la construcción del sentido',
        'La manipulación temporal es significante, no mero artificio',
        'El espectador reconstruye activamente la historia desde el relato fragmentado'
      ]
    },
    {
      film: {
        title: 'Citizen Kane',
        year: 1941,
        director: 'Orson Welles'
      },
      analysisExcerpt: `Estructura narrativa pioneera con múltiples niveles diegéticos. Nivel extradiegético: Narrador del noticiero. Nivel intradiegético: Thompson investigando. Nivel metadiegético: Los relatos de los entrevistados sobre Kane. Anacronías constantes con analepsis de diferentes alcances y amplitudes. Focalización variable según el narrador. "Rosebud" funciona como enigma hermenéutico que estructura toda la investigación. Cada narrador ofrece una perspectiva parcial, creando un retrato prismático.`,
      insightsGenerated: [
        'Los múltiples niveles diegéticos crean profundidad narrativa',
        'Cada focalización revela y oculta aspectos diferentes de Kane',
        'La estructura fragmentada refleja la imposibilidad de conocer completamente a una persona'
      ],
      methodologyApplication: 'Análisis de niveles diegéticos y focalizaciones múltiples',
      keyFindings: [
        'La multiplicidad de voces narrativas anticipa el cine moderno',
        'La estructura episódica con marco investigativo se volvió paradigmática',
        'El enigma final ironiza sobre la búsqueda de significado único'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'chatman-story-discourse',
      relationshipType: 'synthetic',
      synergyDescription: 'Chatman adapta y simplifica los conceptos de Genette específicamente para el cine',
      combinedInsightPotential: 9
    },
    {
      id: 'barthes-narrative-codes',
      relationshipType: 'complementary',
      synergyDescription: 'Barthes añade dimensión semiótica al análisis formal de Genette',
      combinedInsightPotential: 8
    },
    {
      id: 'bordwell-narration',
      relationshipType: 'dialectical',
      synergyDescription: 'Bordwell critica el modelo lingüístico de Genette proponiendo uno cognitivo',
      combinedInsightPotential: 9
    }
  ]
};
