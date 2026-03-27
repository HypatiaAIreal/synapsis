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

export const COWIE_SPECTACLE_OF_REALITY: Methodology = {
  metadata: {
    id: 'cowie-spectacle-reality',
    name: 'Espectáculo de la Realidad',
    author: 'Elizabeth Cowie',
    year: 2011,
    category: 'documentary',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['psychoanalytic-theory', 'documentary-theory'],
    culturalContext: 'Teoría psicoanalítica del documental',
    language: 'es'
  },
  
  description: `Elizabeth Cowie desarrolló una teoría psicoanalítica del documental que examina el placer espectatorial en ver "la realidad" como espectáculo. Su trabajo analiza la paradoja del documental: deseamos ver la realidad "tal como es" pero también queremos que sea narrada, dramatizada, hecha significativa. Cowie examina cómo el documental satisface el "deseo de realidad" - una pulsión escópica específica diferente de la ficción. Su concepto de "espectáculo de realidad" no es peyorativo sino que reconoce cómo toda representación convierte lo real en espectáculo. Cowie analiza las dimensiones traumáticas del documental - cómo confrontamos sufrimiento real mediado. Su trabajo sobre el "testimonio" examina la compleja relación entre testigo, cineasta y espectador en la transmisión del trauma.`,
  
  keyConcepts: [
    {
      term: 'Espectáculo de Realidad',
      definition: 'Lo real convertido en objeto de mirada placentera/perturbadora',
      importance: 'fundamental',
      relatedTerms: ['espectacularización', 'mirada']
    },
    {
      term: 'Deseo de Realidad',
      definition: 'Pulsión escópica específica del espectador documental',
      importance: 'fundamental',
      relatedTerms: ['voyeurismo', 'pulsión']
    },
    {
      term: 'Placer Documental',
      definition: 'Goce específico de ver lo real representado',
      importance: 'important',
      relatedTerms: ['placer visual', 'satisfacción']
    },
    {
      term: 'Testimonio Mediado',
      definition: 'Transmisión del trauma a través del documental',
      importance: 'important',
      relatedTerms: ['trauma', 'testigo']
    },
    {
      term: 'Voyeurismo Sancionado',
      definition: 'Permiso social para mirar el sufrimiento ajeno',
      importance: 'important',
      relatedTerms: ['ética', 'mirada']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Analizar espectáculo',
      description: 'Examinar cómo lo real se convierte en espectáculo visual',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'El espectáculo no es necesariamente negativo',
        'Buscar momentos de intensidad visual',
        'Considerar encuadre y presentación'
      ],
      commonMistakes: [
        'Moralizar sobre espectacularización',
        'Ignorar dimensión visual del documental'
      ]
    },
    {
      order: 2,
      name: 'Identificar deseo',
      description: 'Analizar qué busca/desea el espectador',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'El deseo puede ser contradictorio',
        'Incluir deseos conscientes e inconscientes'
      ]
    },
    {
      order: 3,
      name: 'Examinar placer',
      description: 'Localizar fuentes de satisfacción espectatorial',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Analizar testimonio',
      description: 'Examinar transmisión de experiencia traumática',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificar voyeurismo',
      description: 'Analizar dinámicas de mirada sancionada',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluar identificaciones',
      description: 'Examinar posiciones espectatorials ofrecidas',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Análisis sofisticado del placer documental',
    'Atiende dimensiones inconscientes ignoradas',
    'Útil para documentales traumáticos',
    'Complejiza relación espectador-documental',
    'Marco teórico psicoanalítico rico'
  ],
  
  limitations: [
    'Jerga psicoanalítica puede ser densa',
    'Menos aplicable a documentales no traumáticos',
    'Puede patologizar experiencia espectatorial',
    'Enfoque occidental en conceptos psicoanalíticos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Elizabeth Cowie'],
      title: 'Recording Reality, Desiring the Real',
      year: 2011,
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Elizabeth Cowie'],
      title: 'The Spectacle of Actuality',
      year: 1999,
      journal: 'Collecting Visible Evidence',
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Elizabeth Cowie'],
      title: 'Representing the Woman: Cinema and Psychoanalysis',
      year: 1997,
      publisher: 'University of Minnesota Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Shoah',
        year: 1985,
        director: 'Claude Lanzmann'
      },
      analysisExcerpt: `Shoah ejemplifica la complejidad del testimonio traumático mediado. Lanzmann rechaza el espectáculo del archivo (imágenes de atrocidades) por el espectáculo del testimonio presente. El deseo de realidad del espectador es frustrado y satisfecho simultáneamente: no hay imágenes del horror pero sí presencia del trauma. El placer documental es problemático: ¿qué satisfacción hay en testimonios de genocidio? Cowie sugiere que es el placer de ser testigo secundario, de acceder a verdad histórica profunda. Voyeurismo sancionado por importancia histórica. Las identificaciones son múltiples: con víctimas, con Lanzmann como interrogador, con la cámara como testigo.`,
      insightsGenerated: [
        'El rechazo del espectáculo visual puede intensificar el impacto',
        'El testimonio crea su propio espectáculo de verdad',
        'El deseo de realidad incluye deseo de comprender lo incomprensible'
      ],
      methodologyApplication: 'Análisis de documental traumático sin imágenes de archivo',
      keyFindings: [
        'La ausencia visual puede ser más poderosa que la presencia',
        'El testimonio satisface deseos diferentes al archivo',
        'El placer documental puede coexistir con horror'
      ]
    },
    {
      film: {
        title: 'Grizzly Man',
        year: 2005,
        director: 'Werner Herzog'
      },
      analysisExcerpt: `Herzog presenta el espectáculo de una obsesión fatal. El deseo de realidad del espectador incluye morbo: queremos ver el ataque fatal pero Herzog lo niega. El placer documental deriva de acceso a material íntimo de Treadwell y de la mediación de Herzog. Espectáculo de la naturaleza salvaje mezclado con espectáculo de locura humana. Voyeurismo sancionado por muerte del sujeto y valor cautionary. Herzog funciona como analista/analizando, interpretando a Treadwell mientras revela sus propias obsesiones. El documental satisface deseo de comprender lo irracional mediante racionalización parcial.`,
      insightsGenerated: [
        'La negación del espectáculo último intensifica el deseo',
        'El documentalista como figura transferencial',
        'El placer deriva de la mediación tanto como del contenido'
      ],
      methodologyApplication: 'Examen de deseo, negación y satisfacción espectatorial',
      keyFindings: [
        'Herzog comprende intuitivamente la economía del deseo documental',
        'El espectáculo negado es más poderoso que el mostrado',
        'La interpretación es parte del placer documental'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'mulvey-visual-pleasure',
      relationshipType: 'complementary',
      synergyDescription: 'Cowie adapta teorías de Mulvey sobre placer visual al documental',
      combinedInsightPotential: 9
    },
    {
      id: 'sobchack-documentary',
      relationshipType: 'complementary',
      synergyDescription: 'Sobchack ofrece alternativa fenomenológica al psicoanálisis de Cowie',
      combinedInsightPotential: 8
    },
    {
      id: 'nichols-documentary-modes',
      relationshipType: 'complementary',
      synergyDescription: 'Cada modo produce diferentes placeres y deseos según análisis de Cowie',
      combinedInsightPotential: 8
    }
  ]
};
