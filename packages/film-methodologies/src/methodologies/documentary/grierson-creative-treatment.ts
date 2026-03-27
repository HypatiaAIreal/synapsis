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

export const GRIERSON_CREATIVE_TREATMENT: Methodology = {
  metadata: {
    id: 'grierson-creative-treatment',
    name: 'Tratamiento Creativo de la Realidad',
    author: 'John Grierson',
    year: 1926,
    category: 'documentary',
    complexity: 'basic',
    timeToLearn: 15,
    prerequisities: [],
    culturalContext: 'Movimiento documental británico',
    language: 'es'
  },
  
  description: `John Grierson, quien acuñó el término "documentary" en 1926, estableció los fundamentos teóricos y prácticos del movimiento documental. Su famosa definición del documental como "tratamiento creativo de la actualidad" reconoce tanto la base factual como la inevitable mediación artística. Grierson desarrolló una filosofía del documental como educación cívica, viendo el medio como herramienta para crear ciudadanos informados en democracias modernas. Su trabajo con el Empire Marketing Board y el GPO Film Unit estableció el modelo de documental de servicio público. Grierson teorizó sobre el "drama en la puerta de al lado" - encontrar narrativas significativas en la vida cotidiana de gente común. Su visión del documentalista como intérprete social responsable influyó generaciones.`,
  
  keyConcepts: [
    {
      term: 'Tratamiento Creativo',
      definition: 'Interpretación artística inevitable de hechos reales',
      importance: 'fundamental',
      relatedTerms: ['interpretación', 'mediación']
    },
    {
      term: 'Actualidad',
      definition: 'Base en el mundo real contemporáneo',
      importance: 'fundamental',
      relatedTerms: ['realidad', 'hechos']
    },
    {
      term: 'Educación Cívica',
      definition: 'Documental como herramienta para democracia informada',
      importance: 'fundamental',
      relatedTerms: ['servicio público', 'ciudadanía']
    },
    {
      term: 'Drama Cotidiano',
      definition: 'Significado dramático en vida ordinaria',
      importance: 'important',
      relatedTerms: ['vida común', 'heroísmo cotidiano']
    },
    {
      term: 'Interpretación Social',
      definition: 'Documentalista como mediador responsable',
      importance: 'important',
      relatedTerms: ['responsabilidad', 'mediación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar tratamiento creativo',
      description: 'Localizar elementos de interpretación artística',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Todo documental implica decisiones creativas',
        'Buscar elementos poéticos o dramáticos',
        'El tratamiento no invalida la actualidad'
      ],
      commonMistakes: [
        'Separar artificialmente creatividad de realidad',
        'Ignorar aspectos interpretativos sutiles'
      ]
    },
    {
      order: 2,
      name: 'Analizar base factual',
      description: 'Examinar conexión con actualidad real',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Verificar referencias al mundo real',
        'Considerar contexto histórico de producción'
      ]
    },
    {
      order: 3,
      name: 'Buscar propósito cívico',
      description: 'Identificar función educativa o social',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Examinar drama cotidiano',
      description: 'Analizar cómo se dramatiza lo ordinario',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Evaluar interpretación',
      description: 'Examinar la mediación del documentalista',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Analizar impacto cívico',
      description: 'Evaluar efecto educativo potencial',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Visión fundacional que legitimó el documental como arte',
    'Conecta propósito social con expresión creativa',
    'Dignifica la vida ordinaria como tema válido',
    'Modelo de servicio público influyente',
    'Balance entre arte y función social'
  ],
  
  limitations: [
    'Paternalismo inherente en visión educativa',
    'Modelo estado-céntrico puede limitar crítica',
    'Romantización de clase trabajadora',
    'Contexto imperial británico problemático'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['John Grierson'],
      title: 'Grierson on Documentary',
      year: 1966,
      publisher: 'University of California Press',      
      essential: true
    },
    {
      type: 'book',
      authors: ['Jack Ellis'],
      title: 'John Grierson: Life, Contributions, Influence',
      year: 2000,
      publisher: 'Southern Illinois University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Ian Aitken'],
      title: 'Film and Reform: John Grierson and the Documentary Film Movement',
      year: 1990,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Night Mail',
        year: 1936,
        director: 'Harry Watt, Basil Wright'
      },
      analysisExcerpt: `Ejemplo perfecto del ideal griersoniano. Tratamiento creativo: poesía de W.H. Auden y música de Benjamin Britten elevan el servicio postal. Actualidad: operación real del tren correo Londres-Escocia. Drama cotidiano: heroísmo de trabajadores ordinarios manteniendo comunicaciones nacionales. Educación cívica: público aprende sobre infraestructura vital. La colaboración entre artistas y documentalistas crea obra que es simultáneamente informativa y poética. El tratamiento creativo amplifica, no distorsiona, la importancia social del tema.`,
      insightsGenerated: [
        'La poesía puede intensificar la realidad documental',
        'El trabajo ordinario contiene drama inherente',
        'La educación cívica puede ser estéticamente rica'
      ],
      methodologyApplication: 'Síntesis ideal de tratamiento creativo y propósito cívico',
      keyFindings: [
        'El modelo Grierson produce obras duraderas',
        'La colaboración artística enriquece el documental',
        'El servicio público no requiere sacrificar calidad estética'
      ]
    },
    {
      film: {
        title: 'The Corporation',
        year: 2003,
        director: 'Mark Achbar, Jennifer Abbott'
      },
      analysisExcerpt: `Documental moderno que actualiza principios griersonianos. Tratamiento creativo: metáfora de la corporación como psicópata estructura el film. Actualidad: análisis de corporaciones contemporáneas reales. Educación cívica: informa sobre estructuras de poder económico. Drama encontrado en consecuencias humanas del poder corporativo. Interpretación social clara pero basada en evidencia. Demuestra que los principios de Grierson pueden servir para crítica, no solo celebración.`,
      insightsGenerated: [
        'Los principios griersonianos se adaptan a contextos críticos',
        'El tratamiento creativo puede ser analítico, no solo poético',
        'La educación cívica incluye crítica al poder'
      ],
      methodologyApplication: 'Aplicación contemporánea crítica del modelo Grierson',
      keyFindings: [
        'Grierson sigue relevante para documental activista',
        'El tratamiento creativo puede estructurar argumentos complejos',
        'La función cívica evoluciona con la democracia'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'flaherty-romanticism',
      relationshipType: 'dialectical',
      synergyDescription: 'Flaherty enfatiza poesía mientras Grierson equilibra con función social',
      combinedInsightPotential: 8
    },
    {
      id: 'vertov-kino-eye',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos ven el cine como herramienta social pero con ideologías diferentes',
      combinedInsightPotential: 7
    },
    {
      id: 'nichols-documentary-modes',
      relationshipType: 'complementary',
      synergyDescription: 'Nichols sistematiza lo que Grierson inició',
      combinedInsightPotential: 9
    }
  ]
};
