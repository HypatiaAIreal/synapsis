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

export const NANCY_FILM_EVIDENCE: Methodology = {
  metadata: {
    id: 'nancy-film-evidence',
    name: 'La Evidencia del Filme',
    author: 'Jean-Luc Nancy',
    year: 2001,
    category: 'phenomenological-philosophical',
    complexity: 'expert',
    timeToLearn: 40,
    prerequisities: ['continental-philosophy', 'deconstruction'],
    culturalContext: 'Filosofía deconstructiva francesa',
    language: 'es'
  },
  
  description: `Jean-Luc Nancy, filósofo de la deconstrucción y la comunidad, aborda el cine como modo único de exposición del sentido en su evidencia material. Su concepto de "evidencia del filme" no refiere a lo obvio sino a la manera en que el cine hace evidente el movimiento mismo del sentido haciéndose. Nancy piensa el cine como arte del "espaciamiento" - la apertura de intervalos donde el sentido circula sin fijarse. Su noción de "cuerpo" como ser-expuesto-al-mundo ilumina cómo el cine presenta cuerpos en su vulnerabilidad y apertura constitutivas. Nancy analiza la imagen cinematográfica como "vestigio" - huella de una presencia que se retira, abriendo el espacio de la representación.`,
  
  keyConcepts: [
    {
      term: 'Evidencia del Filme',
      definition: 'El modo en que el cine hace visible el sentido haciéndose',
      importance: 'fundamental',
      relatedTerms: ['sentido', 'visibilidad', 'proceso']
    },
    {
      term: 'Espaciamiento',
      definition: 'Apertura de intervalos donde el sentido circula',
      importance: 'fundamental',
      relatedTerms: ['intervalo', 'apertura', 'circulación']
    },
    {
      term: 'Ser-Con (Être-Avec)',
      definition: 'Condición relacional fundamental expuesta por el cine',
      importance: 'fundamental',
      relatedTerms: ['comunidad', 'relación', 'exposición']
    },
    {
      term: 'Vestigio',
      definition: 'Huella de una presencia que se retira',
      importance: 'important',
      relatedTerms: ['huella', 'retirada', 'presencia-ausencia']
    },
    {
      term: 'Cuerpo Expuesto',
      definition: 'El cuerpo como apertura y vulnerabilidad constitutiva',
      importance: 'important',
      relatedTerms: ['exposición', 'vulnerabilidad', 'apertura']
    },
    {
      term: 'Técnica del Toque',
      definition: 'Contacto que mantiene la distancia',
      importance: 'important',
      relatedTerms: ['tacto', 'distancia', 'proximidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de evidencias',
      description: 'Localizar momentos donde el sentido se hace visible haciéndose',
      timeEstimate: 45,
      difficulty: 'expert',
      tips: [
        'Buscar procesos más que resultados',
        'Identificar sentido en movimiento',
        'No buscar significados fijos'
      ],
      commonMistakes: [
        'Confundir evidencia con obviedad',
        'Buscar sentidos establecidos en vez de haciéndose'
      ]
    },
    {
      order: 2,
      name: 'Análisis de espaciamientos',
      description: 'Examinar intervalos y aperturas en el film',
      timeEstimate: 60,
      difficulty: 'expert',
      tips: [
        'Identificar espacios entre imágenes',
        'Analizar pausas y vacíos significativos',
        'Buscar circulación más que fijación'
      ]
    },
    {
      order: 3,
      name: 'Exploración del ser-con',
      description: 'Analizar exposición de relaciones fundamentales',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Búsqueda de vestigios',
      description: 'Identificar huellas de presencias retiradas',
      timeEstimate: 45,
      difficulty: 'expert'
    },
    {
      order: 5,
      name: 'Análisis de cuerpos expuestos',
      description: 'Examinar vulnerabilidad y apertura corporal',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Síntesis deconstructiva',
      description: 'Integrar sin cerrar el análisis',
      timeEstimate: 60,
      difficulty: 'expert'
    }
  ],
  
  strengths: [
    'Filosofía cinematográfica altamente original',
    'Atiende materialidad del sentido',
    'No reduce cine a representación',
    'Pensamiento verdaderamente abierto',
    'Conecta cine con ontología fundamental',
    'Escritura poética y rigurosa'
  ],
  
  limitations: [
    'Extrema complejidad conceptual',
    'Requiere conocimiento previo de Nancy',
    'Difícil aplicación práctica',
    'Jerga deconstructiva densa',
    'Menos sistemático como método',
    'Muy selectivo en ejemplos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jean-Luc Nancy'],
      title: 'The Evidence of Film: Abbas Kiarostami',
      year: 2001,
      publisher: 'Yves Gevaert Publisher',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jean-Luc Nancy'],
      title: 'The Ground of the Image',
      year: 2008,
      publisher: 'Fordham University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jean-Luc Nancy'],
      title: 'Being Singular Plural',
      year: 2000,
      publisher: 'Stanford University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Jean-Luc Nancy'],
      title: 'Corpus',
      year: 2008,
      publisher: 'Fordham University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'L\'Intrus',
        year: 2004,
        director: 'Claire Denis'
      },
      analysisExcerpt: `L'Intrus, colaboración entre Denis y Nancy, materializa sus conceptos filosóficos. El intruso (corazón trasplantado) espacía el cuerpo, abriendo intervalos de no-pertenencia. Evidencia del filme: el sentido del extranjero haciéndose visible. Ser-con imposible: el protagonista rechazado por su hijo, su cuerpo, su corazón. Vestigios: Tahití como huella colonial, el hijo como presencia-ausente. Los cuerpos expuestos en su fragilidad radical. El montaje elíptico crea espaciamientos donde circula lo no-dicho.`,
      insightsGenerated: [
        'El cuerpo puede ser extranjero a sí mismo',
        'El cine puede pensar la hospitalidad imposible',
        'Los espaciamientos son tan significativos como las presencias'
      ],
      methodologyApplication: 'Filosofía de Nancy hecha cine directamente',
      keyFindings: [
        'El cine puede ser filosofía en acto',
        'El intruso es condición existencial, no excepción',
        'El sentido circula en los intervalos'
      ]
    },
    {
      film: {
        title: 'Under the Skin',
        year: 2013,
        director: 'Jonathan Glazer'
      },
      analysisExcerpt: `Under the Skin explora la evidencia del ser-humano desde perspectiva alienígena. La alienígena hace evidente lo humano por contraste. Espaciamientos: los silencios incómodos, las miradas sin reconocimiento. Cuerpos expuestos literalmente: desnudez vulnerable de las víctimas. Ser-con fallido: simulacro de seducción sin encuentro real. La piel como límite y exposición. Vestigios: los hombres disueltos dejan solo piel flotante. El film evidencia nuestra extrañeza constitutiva.`,
      insightsGenerated: [
        'Lo humano se evidencia en el encuentro con lo no-humano',
        'La piel es límite y apertura simultáneamente',
        'El ser-con puede ser depredación'
      ],
      methodologyApplication: 'Análisis de evidencia y exposición radical',
      keyFindings: [
        'El cine puede hacer evidente nuestra alienación fundamental',
        'El cuerpo es siempre ya expuesto y vulnerable',
        'La evidencia emerge del extrañamiento'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'derrida-differance',
      relationshipType: 'complementary',
      synergyDescription: 'Nancy desarrolla la deconstrucción hacia una ontología del con',
      combinedInsightPotential: 8
    },
    {
      id: 'agamben-bare-life',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos piensan la exposición y vulnerabilidad fundamental',
      combinedInsightPotential: 8
    },
    {
      id: 'levinas-other',
      relationshipType: 'complementary',
      synergyDescription: 'Nancy seculariza y pluraliza la ética levinasiana del otro',
      combinedInsightPotential: 7
    }
  ]
};
