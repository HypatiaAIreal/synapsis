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

export const LEVINAS_FACE_CINEMA: Methodology = {
  metadata: {
    id: 'levinas-face-cinema',
    name: 'El Rostro en el Cine',
    author: 'Emmanuel Levinas',
    year: 1961,
    category: 'phenomenological-philosophical',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['phenomenology-basics', 'ethics-philosophy'],
    culturalContext: 'Fenomenología ética judeo-francesa',
    language: 'es'
  },
  
  description: `Emmanuel Levinas, aunque escribió poco directamente sobre cine, ofrece conceptos fundamentales para una ética cinematográfica basada en el encuentro con el Otro. Su filosofía del "rostro" - no como conjunto de rasgos físicos sino como vulnerabilidad y demanda ética del otro - transforma la comprensión del primer plano cinematográfico. Para Levinas, el rostro dice "no matarás" y establece la responsabilidad infinita ante el otro antes de cualquier decisión consciente. Su distinción entre "Decir" (exposición ética) y "Dicho" (contenido comunicado) ilumina cómo el cine puede ser testimonio ético más allá de su contenido narrativo.`,
  
  keyConcepts: [
    {
      term: 'Rostro (Visage)',
      definition: 'Epifanía del otro como vulnerabilidad y demanda ética infinita',
      importance: 'fundamental',
      relatedTerms: ['vulnerabilidad', 'mandato ético', 'epifanía']
    },
    {
      term: 'Alteridad',
      definition: 'Otredad radical e irreductible del Otro',
      importance: 'fundamental',
      relatedTerms: ['otredad', 'diferencia absoluta', 'trascendencia']
    },
    {
      term: 'Responsabilidad Infinita',
      definition: 'Obligación ética anterior a toda decisión o libertad',
      importance: 'fundamental',
      relatedTerms: ['obligación', 'anterioridad ética', 'infinitud']
    },
    {
      term: 'Decir/Dicho',
      definition: 'Exposición ética vs. contenido comunicado',
      importance: 'important',
      relatedTerms: ['exposición', 'comunicación', 'testimonio']
    },
    {
      term: 'Proximidad',
      definition: 'Cercanía pre-ontológica y no-tematizable con el Otro',
      importance: 'important',
      relatedTerms: ['cercanía', 'pre-ontológico', 'encuentro']
    },
    {
      term: 'Huella del Infinito',
      definition: 'Marca de lo que excede toda representación',
      importance: 'important',
      relatedTerms: ['infinito', 'trascendencia', 'exceso']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de rostros éticos',
      description: 'Localizar apariciones del rostro como demanda ética',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'El rostro no es necesariamente la cara física',
        'Buscar momentos de vulnerabilidad expuesta',
        'Identificar demandas éticas silenciosas'
      ],
      commonMistakes: [
        'Reducir rostro a primeros planos de caras',
        'Ignorar rostros no-humanos o abstractos'
      ]
    },
    {
      order: 2,
      name: 'Análisis de alteridad',
      description: 'Examinar preservación o reducción de la otredad',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'La alteridad no puede ser completamente representada',
        'Buscar momentos donde el Otro excede la imagen',
        'Identificar respeto o violación de la diferencia'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de responsabilidad',
      description: 'Identificar llamadas a responsabilidad infinita',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Distinción Decir/Dicho',
      description: 'Separar exposición ética de contenido narrativo',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis de proximidad',
      description: 'Examinar cercanías éticas cinematográficas',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación ética',
      description: 'Síntesis de dimensión ética del film',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Fundamenta ética cinematográfica profunda',
    'Atiende a responsabilidad ante el Otro',
    'Valora vulnerabilidad y diferencia',
    'Crítica violencia de la representación',
    'Base filosófica rigurosa',
    'Urgencia ética contemporánea'
  ],
  
  limitations: [
    'Levinas no teorizó directamente sobre cine',
    'Suspicacia hacia imágenes y arte',
    'Aplicación requiere adaptación creativa',
    'Puede sobre-moralizar análisis',
    'Sesgo religioso implícito',
    'Complejidad conceptual considerable'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Emmanuel Levinas'],
      title: 'Totality and Infinity',
      year: 1969,
      publisher: 'Duquesne University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Emmanuel Levinas'],
      title: 'Otherwise than Being or Beyond Essence',
      year: 1998,
      publisher: 'Duquesne University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sam B. Girgus'],
      title: 'Levinas and the Cinema of Redemption',
      year: 2010,
      publisher: 'Columbia University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Sarah Cooper'],
      title: 'Selfless Cinema?: Ethics and French Documentary',
      year: 2006,
      publisher: 'Legenda',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Passion of Joan of Arc',
        year: 1928,
        director: 'Carl Theodor Dreyer'
      },
      analysisExcerpt: `Los primeros planos de Dreyer encarnan la epifanía del rostro levinasiano. El rostro de Falconetti no es composición estética sino pura vulnerabilidad que demanda. Cada lágrima es huella del infinito sufrimiento. La cámara no objetiva sino que testimonia. El rostro de Juana dice simultáneamente "no matarás" y muestra la violación de ese mandato. La proximidad extrema crea responsabilidad insoportable en el espectador. Los rostros de los jueces muestran la negación de la alteridad. El Decir excede infinitamente lo Dicho.`,
      insightsGenerated: [
        'El primer plano puede ser epifanía ética',
        'El rostro cinematográfico puede demandar infinitamente',
        'La proximidad visual crea responsabilidad ética'
      ],
      methodologyApplication: 'Análisis del rostro como demanda ética absoluta',
      keyFindings: [
        'Dreyer logra presentar el rostro en sentido levinasiano',
        'El cine puede testimoniar lo in-representable',
        'La vulnerabilidad filmada interpela éticamente'
      ]
    },
    {
      film: {
        title: 'Son of Saul',
        year: 2015,
        director: 'László Nemes'
      },
      analysisExcerpt: `El film mantiene proximidad extrema con Saul mientras preserva la alteridad del horror. Los rostros fuera de foco en el fondo son Otros cuya alteridad se respeta mediante no-mostrar. El rostro del niño muerto como demanda ética absoluta de sepultura digna. La cámara pegada a Saul crea proximidad claustrofóbica pero ética. El Holocausto como ruptura de todo rostro. Saul busca restaurar el rostro (dar rostro al hijo) en medio de la desfiguración total. El Decir del film: testimoniar sin representar.`,
      insightsGenerated: [
        'La ética puede requerir no mostrar',
        'El fuera de foco puede preservar alteridad',
        'Dar rostro es acto ético fundamental'
      ],
      methodologyApplication: 'Ética cinematográfica en situación extrema',
      keyFindings: [
        'El cine puede respetar lo irrepresentable',
        'La proximidad puede ser ética sin ser totalizante',
        'El rostro persiste como demanda incluso en la muerte'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'derrida-hospitality',
      relationshipType: 'complementary',
      synergyDescription: 'Derrida desarrolla la ética de la hospitalidad desde bases levinasianas',
      combinedInsightPotential: 8
    },
    {
      id: 'butler-precarious-life',
      relationshipType: 'parallel',
      synergyDescription: 'Butler actualiza la vulnerabilidad levinasiana políticamente',
      combinedInsightPotential: 8
    },
    {
      id: 'dardenne-ethical-cinema',
      relationshipType: 'complementary',
      synergyDescription: 'Los Dardenne practican un cine profundamente levinasiano',
      combinedInsightPotential: 9
    }
  ]
};
