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

export const RUSSELL_EXPERIMENTAL_ETHNOGRAPHY: Methodology = {
  metadata: {
    id: 'russell-experimental-ethnography',
    name: 'Etnografía Experimental',
    author: 'Catherine Russell',
    year: 1999,
    category: 'postcolonial-decolonial',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['experimental-film', 'ethnographic-film', 'postcolonial-theory'],
    culturalContext: 'Crítica de cine experimental canadiense',
    language: 'es'
  },
  
  description: `Catherine Russell teorizó la "etnografía experimental" como práctica cinematográfica que deconstruye la autoridad etnográfica mientras explora nuevas formas de encuentro cultural. Su trabajo examina cómo cineastas experimentales subvierten las convenciones del documental etnográfico, creando obras que son autorreflexivas, poéticas y políticamente comprometidas. Russell analiza estrategias como la "autoetnografía" (volverse la cámara hacia uno mismo/cultura), el "collage etnográfico" (yuxtaposiciones que revelan constructividad), y la "etnografía doméstica" (lo familiar como extraño). Su concepto de "parallax view" reconoce que todo conocimiento cultural está mediado por la posición del observador. Su trabajo conecta vanguardia histórica con prácticas poscoloniales contemporáneas.`,
  
  keyConcepts: [
    {
      term: 'Etnografía Experimental',
      definition: 'Práctica que une experimentación formal con crítica de autoridad etnográfica',
      importance: 'fundamental',
      relatedTerms: ['cine experimental', 'anti-etnografía']
    },
    {
      term: 'Autoetnografía',
      definition: 'Práctica de volver la cámara etnográfica hacia uno mismo y su cultura',
      importance: 'fundamental',
      relatedTerms: ['auto-reflexividad', 'etnografía personal']
    },
    {
      term: 'Collage Etnográfico',
      definition: 'Yuxtaposiciones que revelan la naturaleza construida del conocimiento cultural',
      importance: 'important',
      relatedTerms: ['montaje', 'bricolaje cultural']
    },
    {
      term: 'Etnografía Doméstica',
      definition: 'Exploración de lo familiar como si fuera extraño',
      importance: 'important',
      relatedTerms: ['desfamiliarización', 'extrañamiento']
    },
    {
      term: 'Parallax View',
      definition: 'Reconocimiento de que el conocimiento cambia según la posición del observador',
      importance: 'important',
      relatedTerms: ['perspectivismo', 'relatividad observacional']
    },
    {
      term: 'Contact Zones',
      definition: 'Espacios de encuentro cultural asimétrico',
      importance: 'important',
      relatedTerms: ['zonas de contacto', 'encuentros coloniales']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de experimentación formal',
      description: 'Detectar rupturas con convenciones documentales',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar técnicas de vanguardia aplicadas a material etnográfico',
        'Identificar rechazo de transparencia documental',
        'Notar estrategias de extrañamiento'
      ],
      commonMistakes: [
        'Confundir cualquier documental artístico con etnografía experimental',
        'Ignorar dimensión política de la experimentación'
      ]
    },
    {
      order: 2,
      name: 'Búsqueda de autoetnografías',
      description: 'Identificar momentos donde el cineasta se examina',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar presencia del realizador en imagen o voz',
        'Identificar reflexiones sobre propia cultura',
        'Notar cuestionamiento de posición del observador'
      ]
    },
    {
      order: 3,
      name: 'Análisis de collages',
      description: 'Examinar yuxtaposiciones reveladoras',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Identificar choques culturales productivos',
        'Buscar montaje que revele constructividad',
        'Analizar mezclas de materiales heterogéneos'
      ]
    },
    {
      order: 4,
      name: 'Examen de domesticidad extrañada',
      description: 'Analizar cómo lo familiar se vuelve extraño',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de parallax',
      description: 'Buscar múltiples perspectivas sobre mismo fenómeno',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis de contact zones',
      description: 'Examinar representación de encuentros culturales',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 7,
      name: 'Evaluación de crítica colonial',
      description: 'Analizar cómo se deconstruye autoridad etnográfica',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Une innovación formal con crítica política rigurosa',
    'Valoriza prácticas marginales y experimentales',
    'Deconstruye autoridad sin abandonar encuentro cultural',
    'Conecta historia del cine experimental con poscolonialismo',
    'Abre nuevas posibilidades para representación cultural'
  ],
  
  limitations: [
    'Aplicable principalmente a cine experimental/artístico',
    'Audiencias limitadas para estas prácticas',
    'Puede privilegiar forma sobre acceso comunitario',
    'Contexto occidental del cine experimental',
    'Distribución limitada de obras analizadas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Catherine Russell'],
      title: 'Experimental Ethnography: The Work of Film in the Age of Video',
      year: 1999,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Catherine Russell'],
      title: 'Archiveology: Walter Benjamin and Archival Film Practices',
      year: 2018,
      publisher: 'Duke University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Bill Nichols'],
      title: 'Blurred Boundaries: Questions of Meaning in Contemporary Culture',
      year: 1994,
      publisher: 'Indiana University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Laura Marks'],
      title: 'The Skin of the Film: Intercultural Cinema, Embodiment, and the Senses',
      year: 2000,
      publisher: 'Duke University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Sans Soleil',
        year: 1983,
        director: 'Chris Marker'
      },
      analysisExcerpt: `Sans Soleil es etnografía experimental paradigmática. Marker crea collage global (Japón, Guinea-Bissau, Islandia) que rechaza autoridad etnográfica tradicional. Autoetnografía implícita: el viajero occidental examina su propia mirada. Cartas ficticias revelan mediación y constructividad. Parallax extremo: mismas imágenes recontextualizadas múltiplemente. Lo familiar (Tokio moderno) se vuelve extraño, lo extraño (rituales africanos) familiar. Contact zones problemáticas: turista, veterano, cineasta. Experimentación formal (La Zone) como metáfora de memoria cultural. Etnografía como poesía, no ciencia.`,
      insightsGenerated: [
        'La ficción puede ser más "verdadera" que el documental etnográfico',
        'El collage revela conexiones no evidentes entre culturas',
        'La autoetnografía implícita es tan importante como la explícita'
      ],
      methodologyApplication: 'Ejemplo maestro de todas las estrategias de etnografía experimental',
      keyFindings: [
        'La etnografía experimental puede ser globalmente inclusiva',
        'La poesía visual comunica conocimiento cultural profundo',
        'La reflexividad no requiere presencia literal del cineasta'
      ]
    },
    {
      film: {
        title: 'In the Absence',
        year: 2018,
        director: 'Yi Seung-jun'
      },
      analysisExcerpt: `In the Absence experimenta con etnografía del trauma colectivo. Collage de footage oficial, videos de víctimas, animación. Autoetnografía nacional: Corea del Sur examinándose tras Sewol. Domesticidad trágica: ferry escolar cotidiano vuelto tumba. Parallax radical: mismas imágenes desde perspectiva gobierno vs. familias. Contact zone entre ciudadanos y estado revelada como abismo. Experimentación formal comunica lo indecible del trauma. Autoridad no en cineasta sino en comunidad afectada. Deconstruye narrativa oficial mediante yuxtaposición.`,
      insightsGenerated: [
        'La etnografía experimental puede abordar trauma contemporáneo',
        'El collage de fuentes múltiples democratiza autoridad',
        'La experimentación formal es necesaria para lo indecible'
      ],
      methodologyApplication: 'Adaptación de etnografía experimental a documental de crisis',
      keyFindings: [
        'Las tragedias colectivas requieren nuevas formas etnográficas',
        'La autoridad puede redistribuirse a las víctimas',
        'La experimentación sirve a la justicia, no solo a la estética'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'trinh-speaking-nearby',
      relationshipType: 'complementary',
      synergyDescription: 'Trinh practica lo que Russell teoriza sobre etnografía experimental',
      combinedInsightPotential: 9
    },
    {
      id: 'nichols-documentary-modes',
      relationshipType: 'complementary',
      synergyDescription: 'Russell expande la reflexividad que Nichols identifica',
      combinedInsightPotential: 8
    },
    {
      id: 'benjamin-dialectical-image',
      relationshipType: 'complementary',
      synergyDescription: 'Benjamin inspira el método de collage y montaje de Russell',
      combinedInsightPotential: 8
    }
  ]
};
