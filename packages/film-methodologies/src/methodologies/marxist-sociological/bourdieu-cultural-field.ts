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

export const BOURDIEU_CULTURAL_FIELD: Methodology = {
  metadata: {
    id: 'bourdieu-cultural-field',
    name: 'Campo Cultural y Habitus',
    author: 'Pierre Bourdieu',
    year: 1979,
    category: 'marxist-sociological',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['sociology', 'cultural-theory'],
    culturalContext: 'Sociología crítica francesa',
    language: 'es'
  },
  
  description: `Pierre Bourdieu desarrolló una sociología de la cultura que analiza el cine como parte de un "campo" cultural estructurado por luchas por capital simbólico. Su concepto de "habitus" - disposiciones duraderas adquiridas socialmente - explica cómo diferentes clases desarrollan gustos cinematográficos distintos que parecen naturales pero son socialmente construidos. El análisis del "capital cultural" revela cómo el conocimiento cinematográfico funciona como marcador de clase. Su distinción entre el "campo de producción restringida" (cine de arte) y "gran producción" (cine comercial) muestra cómo diferentes sectores del cine obedecen a lógicas distintas. Bourdieu examina las "estrategias de distinción" mediante las cuales las clases usan el consumo cultural para diferenciarse. Su concepto de "violencia simbólica" explica cómo el cine puede imponer visiones del mundo que los dominados aceptan como legítimas.`,
  
  keyConcepts: [
    {
      term: 'Campo Cultural',
      definition: 'Espacio social estructurado de posiciones y luchas por capital simbólico',
      importance: 'fundamental',
      relatedTerms: ['espacio social', 'posición', 'lucha']
    },
    {
      term: 'Habitus',
      definition: 'Sistema de disposiciones duraderas, esquemas de percepción y acción incorporados',
      importance: 'fundamental',
      relatedTerms: ['disposición', 'incorporación', 'esquema']
    },
    {
      term: 'Capital Cultural',
      definition: 'Conocimientos, habilidades y gustos que funcionan como recursos de distinción',
      importance: 'fundamental',
      relatedTerms: ['conocimiento', 'gusto', 'distinción']
    },
    {
      term: 'Capital Simbólico',
      definition: 'Prestigio y reconocimiento acumulado en el campo',
      importance: 'important',
      relatedTerms: ['prestigio', 'reconocimiento', 'legitimidad']
    },
    {
      term: 'Distinción',
      definition: 'Diferenciación social mediante consumo y gusto cultural',
      importance: 'fundamental',
      relatedTerms: ['diferenciación', 'gusto', 'clase']
    },
    {
      term: 'Violencia Simbólica',
      definition: 'Imposición de significados como legítimos ocultando relaciones de fuerza',
      importance: 'important',
      relatedTerms: ['dominación', 'legitimación', 'naturalización']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Mapeo del campo',
      description: 'Situar el film en el espacio de posiciones del campo cinematográfico',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar posición entre arte y comercio',
        'Considerar trayectoria del director',
        'Analizar estrategias de legitimación'
      ],
      commonMistakes: [
        'Ignorar la historia del campo',
        'No considerar campos nacionales específicos'
      ]
    },
    {
      order: 2,
      name: 'Identificación de habitus',
      description: 'Analizar disposiciones de clase visibles en el film',
      timeEstimate: 75,
      difficulty: 'advanced',
      tips: [
        'Buscar gustos naturalizados',
        'Identificar esquemas de percepción de clase',
        'Examinar representaciones del cuerpo y modales'
      ]
    },
    {
      order: 3,
      name: 'Análisis de capitales',
      description: 'Examinar tipos de capital en juego: cultural, económico, simbólico',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Examen de distinciones',
      description: 'Identificar estrategias de diferenciación social',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Búsqueda de violencia simbólica',
      description: 'Analizar qué dominaciones se naturalizan',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar qué se presenta como "buen gusto"',
        'Identificar exclusiones naturalizadas'
      ]
    },
    {
      order: 6,
      name: 'Análisis de estrategias',
      description: 'Examinar estrategias de posicionamiento en el campo',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Análisis sociológico riguroso del cine como práctica social',
    'Conecta gusto con estructura social',
    'Desnaturaliza preferencias estéticas',
    'Método empírico sólido',
    'Conceptos operativos para investigación',
    'Revela violencias simbólicas ocultas'
  ],
  
  limitations: [
    'Determinismo de clase latente',
    'Menos atención a resistencias y subversiones',
    'Francia-céntrico en ejemplos',
    'Subestima agencia individual',
    'Énfasis en reproducción sobre transformación',
    'Complejidad conceptual intimida'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Pierre Bourdieu'],
      title: 'Distinction: A Social Critique of the Judgement of Taste',
      year: 1984,
      publisher: 'Harvard University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Pierre Bourdieu'],
      title: 'The Field of Cultural Production',
      year: 1993,
      publisher: 'Columbia University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Pierre Bourdieu'],
      title: 'The Rules of Art',
      year: 1996,
      publisher: 'Stanford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Pierre Bourdieu'],
      title: 'The Logic of Practice',
      year: 1990,
      publisher: 'Stanford University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Amélie',
        year: 2001,
        director: 'Jean-Pierre Jeunet'
      },
      analysisExcerpt: `Amélie ejemplifica estrategias de distinción de clase media cultural. El film acumula capital simbólico mediante estética "quirky" que señala sofisticación sin ser inaccesible. Habitus pequeñoburgués idealizado: coleccionar, pequeños placeres, nostalgia cultivada. París del film elimina violencia simbólica real: no hay inmigrantes, pobreza, conflicto. Capital cultural como tema: referencias cinéfilas, arte, literatura. Posición en campo: entre cine arte (estética distintiva) y comercial (narrativa accesible). Violencia simbólica: presenta habitus de clase media como universalmente encantador.`,
      insightsGenerated: [
        'La estética "quirky" como estrategia de distinción clase media',
        'El capital cultural puede ser tema y forma simultáneamente',
        'La nostalgia selectiva ejerce violencia simbólica'
      ],
      methodologyApplication: 'Análisis de estrategias de distinción en cine "middlebrow"',
      keyFindings: [
        'El cine puede acumular capital simbólico mediante distinción moderada',
        'El habitus de clase se puede romantizar como universal',
        'La violencia simbólica opera mediante exclusión "encantadora"'
      ]
    },
    {
      film: {
        title: 'Parasite',
        year: 2019,
        director: 'Bong Joon-ho'
      },
      analysisExcerpt: `Parasite expone brillantemente la violencia simbólica del habitus. Los Kim no solo carecen de capital económico sino cultural: su olor los delata. Los Park ejercen violencia simbólica inconsciente: su "bondad" humilla. El film muestra cómo el habitus es literalmente incorporado: gestos, olores, gustos. La arquitectura materializa distinción: líneas, niveles, barreras. Bong ocupa posición única en campo: capital simbólico de autor con alcance comercial. El film desnaturaliza distinción mostrando su construcción violenta. Meta-comentario sobre el campo: ¿puede el cine transcender la distinción que retrata?`,
      insightsGenerated: [
        'El habitus es corporal, no solo mental',
        'La violencia simbólica puede ser "bondadosa"',
        'El espacio materializa las distinciones de clase'
      ],
      methodologyApplication: 'Film que expone mecanismos de distinción que analiza Bourdieu',
      keyFindings: [
        'El cine puede revelar violencia simbólica haciéndola visible',
        'El habitus trasciende lo económico penetrando lo sensorial',
        'La distinción espacial refuerza la social'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'gramsci-hegemony',
      relationshipType: 'complementary',
      synergyDescription: 'Gramsci enfoca consenso político, Bourdieu dominación cultural',
      combinedInsightPotential: 9
    },
    {
      id: 'foucault-power',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos analizan poder simbólico pero Foucault más microfísico',
      combinedInsightPotential: 8
    },
    {
      id: 'williams-cultural-materialism',
      relationshipType: 'dialectical',
      synergyDescription: 'Williams más optimista sobre cultura popular que Bourdieu',
      combinedInsightPotential: 8
    }
  ]
};
