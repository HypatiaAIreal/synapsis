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

export const TRINH_DOCUMENTARY_DIFFERENCE: Methodology = {
  metadata: {
    id: 'trinh-documentary-difference',
    name: 'Documental y Diferencia',
    author: 'Trinh T. Minh-ha',
    year: 1989,
    category: 'documentary',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['postcolonial-theory', 'feminist-theory'],
    culturalContext: 'Teoría documental feminista poscolonial',
    language: 'es'
  },
  
  description: `Trinh T. Minh-ha, cineasta y teórica, deconstruyó las convenciones documentales desde perspectivas feministas y poscoloniales. Su crítica de "hablar sobre" versus "hablar cerca de" transforma la ética de la representación documental. Trinh cuestiona la autoridad omnisciente del documentalista occidental que objetifica al "otro" cultural. Su concepto de "inappropriate/d other" juega con ser simultáneamente inapropiada (resistiendo categorización) e inapropiada por otros (mal representada). Trinh desarrolló estrategias formales radicales: ruptura de sincronía imagen/sonido, rechazo de traducción transparente, multiplicidad de voces sin jerarquía. Su trabajo teoriza el "intervalo" - espacios entre categorías donde emergen nuevas posibilidades.`,
  
  keyConcepts: [
    {
      term: 'Hablar Cerca/Sobre',
      definition: 'Proximidad respetuosa vs. dominio autoritario',
      importance: 'fundamental',
      relatedTerms: ['ética', 'representación']
    },
    {
      term: 'Inappropriate/d Other',
      definition: 'Doble condición de no encajar y ser mal representado',
      importance: 'fundamental',
      relatedTerms: ['alteridad', 'resistencia']
    },
    {
      term: 'Intervalo',
      definition: 'Espacio productivo entre categorías fijas',
      importance: 'important',
      relatedTerms: ['liminalidad', 'hibridez']
    },
    {
      term: 'Boundary Event',
      definition: 'Acontecimiento que cruza/cuestiona fronteras',
      importance: 'important',
      relatedTerms: ['frontera', 'transgresión']
    },
    {
      term: 'Traducción Opaca',
      definition: 'Resistencia a la transparencia colonial',
      importance: 'important',
      relatedTerms: ['opacidad', 'resistencia']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar posición de habla',
      description: 'Determinar si el film habla sobre o cerca de sus sujetos',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Hablar cerca implica humildad y proximidad',
        'Hablar sobre implica autoridad y distancia',
        'La diferencia es ética más que técnica'
      ],
      commonMistakes: [
        'Reducir a cuestión de estilo',
        'Ignorar relaciones de poder'
      ]
    },
    {
      order: 2,
      name: 'Buscar inappropriate/d',
      description: 'Localizar resistencias a categorización',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Los sujetos pueden resistir activamente',
        'La ambigüedad puede ser estratégica'
      ]
    },
    {
      order: 3,
      name: 'Analizar intervalos',
      description: 'Identificar espacios productivos entre categorías',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Examinar boundary events',
      description: 'Localizar momentos de cruce de fronteras',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Analizar traducción',
      description: 'Evaluar estrategias de traducción cultural',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluar descolonización',
      description: 'Examinar estrategias liberadoras empleadas',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Crítica poscolonial fundamental y necesaria',
    'Innovación formal radical y coherente',
    'Ética representacional profunda',
    'Abre nuevas posibilidades documentales',
    'Integra teoría y práctica'
  ],
  
  limitations: [
    'Complejidad puede alienar audiencias',
    'Estilo específico difícil de replicar',
    'Jerga teórica densa',
    'Circulación limitada de sus films'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Trinh T. Minh-ha'],
      title: 'Woman, Native, Other',
      year: 1989,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Trinh T. Minh-ha'],
      title: 'When the Moon Waxes Red',
      year: 1991,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Trinh T. Minh-ha'],
      title: 'Framer Framed',
      year: 1992,
      publisher: 'Routledge',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Reassemblage',
        year: 1982,
        director: 'Trinh T. Minh-ha'
      },
      analysisExcerpt: `Film-manifiesto de Trinh contra el documental etnográfico. Habla cerca de mujeres senegalesas, no sobre ellas. Rechaza explicación autoritaria: "No pretendo hablar sobre/Solo hablar cerca de". Inappropriate/d other múltiple: mujeres africanas resistiendo categorización occidental. Intervalos constantes: silencios, cortes abruptos, sincronía rota. Traducción opaca: no subtítulos, voces sin jerarquía. Boundary events: la cámara reconoce su intrusión. Descolonización formal radical: destruye convenciones etnográficas mediante poesía disruptiva.`,
      insightsGenerated: [
        'El rechazo de convenciones puede ser liberador',
        'La opacidad protege contra la apropiación',
        'Hablar cerca requiere renuncia al control narrativo'
      ],
      methodologyApplication: 'Deconstrucción radical del documental etnográfico',
      keyFindings: [
        'La forma documental puede ser inherentemente colonial',
        'Nuevas éticas requieren nuevas formas',
        'La poesía puede ser más verdadera que la explicación'
      ]
    },
    {
      film: {
        title: 'Surname Viet Given Name Nam',
        year: 1989,
        director: 'Trinh T. Minh-ha'
      },
      analysisExcerpt: `Exploración compleja de identidad vietnamita femenina. Revela que "entrevistas documentales" son actuadas, cuestionando autenticidad. Inappropriate/d other: mujeres vietnamitas entre/contra categorías de víctima/heroína. Intervalos entre documental/ficción, Vietnam/América, pasado/presente. Traducción como tema y método: del vietnamita al inglés, de testimonio a performance. Boundary events constantes entre géneros, lenguas, identidades. La verdad emerge no de la transparencia sino de la multiplicidad de capas.`,
      insightsGenerated: [
        'La actuación puede revelar verdades más profundas',
        'La identidad existe en los intervalos',
        'La traducción es transformación, no transparencia'
      ],
      methodologyApplication: 'Exploración de identidad mediante forma híbrida',
      keyFindings: [
        'El documental puede embracer la ficción productivamente',
        'Las mujeres del tercer mundo hablan por sí mismas complejamente',
        'La forma experimental sirve a la política poscolonial'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'said-orientalism',
      relationshipType: 'complementary',
      synergyDescription: 'Trinh aplica crítica orientalista de Said al documental',
      combinedInsightPotential: 9
    },
    {
      id: 'spivak-subaltern',
      relationshipType: 'parallel',
      synergyDescription: 'Ambas cuestionan quién puede hablar y cómo',
      combinedInsightPotential: 9
    },
    {
      id: 'nichols-documentary-modes',
      relationshipType: 'complementary',
      synergyDescription: 'Trinh deconstruye los modos que Nichols categoriza',
      combinedInsightPotential: 8
    }
  ]
};
