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

export const BARNOUW_DOCUMENTARY_HISTORY: Methodology = {
  metadata: {
    id: 'barnouw-documentary-history',
    name: 'Historia y Tipología Documental',
    author: 'Erik Barnouw',
    year: 1974,
    category: 'documentary',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['film-history'],
    culturalContext: 'Historiografía documental estadounidense',
    language: 'es'
  },
  
  description: `Erik Barnouw desarrolló una aproximación histórica comprehensiva al documental, trazando su evolución desde los orígenes hasta el presente a través de arquetipos de realizadores. Su tipología incluye: profeta (predice), explorador (descubre), reportero (informa), pintor (poetiza), abogado (argumenta), toque de clarín (moviliza), promotor (publicita), observador (registra), catalizador (provoca), guerrillero (subvierte). Esta clasificación vincula formas documentales con contextos socio-políticos específicos, mostrando cómo cada tipo responde a necesidades históricas. Barnouw analiza el documental como "contrato social" entre realizadores y audiencias basado en expectativas compartidas sobre verdad y propósito. Su trabajo examina las tecnologías cambiantes y su impacto en las posibilidades documentales.`,
  
  keyConcepts: [
    {
      term: 'Arquetipos de Realizadores',
      definition: 'Profeta, Explorador, Reportero, Pintor, Abogado, Toque de clarín, Promotor, Observador, Catalizador, Guerrillero',
      importance: 'fundamental',
      relatedTerms: ['tipología', 'función social']
    },
    {
      term: 'Contrato Social Documental',
      definition: 'Expectativas compartidas entre realizadores y audiencias',
      importance: 'important',
      relatedTerms: ['pacto', 'convención']
    },
    {
      term: 'Evolución Tecnológica',
      definition: 'Impacto de nuevas herramientas en posibilidades documentales',
      importance: 'important',
      relatedTerms: ['innovación', 'técnica']
    },
    {
      term: 'Contexto Socio-político',
      definition: 'Documentales como respuesta a necesidades históricas',
      importance: 'fundamental',
      relatedTerms: ['historia', 'sociedad']
    },
    {
      term: 'Patrocinio y Poder',
      definition: 'Influencia del financiamiento en contenido documental',
      importance: 'important',
      relatedTerms: ['financiamiento', 'independencia']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar arquetipo',
      description: 'Determinar qué tipo de realizador representa el documentalista',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Un realizador puede combinar múltiples arquetipos',
        'Considerar la intención principal del film',
        'El contexto histórico es crucial'
      ],
      commonMistakes: [
        'Forzar un solo arquetipo',
        'Ignorar evolución del realizador'
      ]
    },
    {
      order: 2,
      name: 'Situar históricamente',
      description: 'Contextualizar el film en su momento de producción',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Investigar eventos contemporáneos',
        'Considerar el clima político y social'
      ]
    },
    {
      order: 3,
      name: 'Analizar contrato social',
      description: 'Examinar expectativas implícitas con la audiencia',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Examinar tecnología',
      description: 'Evaluar herramientas disponibles y su impacto',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificar función social',
      description: 'Determinar el propósito público del documental',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Buscar patrocinio',
      description: 'Investigar fuentes de financiamiento e influencias',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Perspectiva histórica comprehensiva y contextual',
    'Conecta forma documental con función social',
    'Tipología memorable y pedagógica',
    'Atención importante a tecnología y economía',
    'Análisis del poder en la producción documental'
  ],
  
  limitations: [
    'Arquetipos pueden simplificar complejidad',
    'Sesgo hacia documental occidental/estadounidense',
    'Menos útil para formas híbridas contemporáneas',
    'Categorías pueden parecer anticuadas'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Erik Barnouw'],
      title: 'Documentary: A History of the Non-Fiction Film',
      year: 1993,
      publisher: 'Oxford University Press',      
      essential: true
    },
    {
      type: 'book',
      authors: ['Erik Barnouw'],
      title: 'The Sponsor: Notes on a Modern Potentate',
      year: 1978,
      publisher: 'Oxford University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Erik Barnouw'],
      title: 'Tube of Plenty: The Evolution of American Television',
      year: 1990,
      publisher: 'Oxford University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Nanook of the North',
        year: 1922,
        director: 'Robert Flaherty'
      },
      analysisExcerpt: `Flaherty como arquetipo del explorador/pintor. Revela culturas "exóticas" al público occidental, pero poetiza y romanticiza. Tecnología primitiva requiere puesta en escena. Contrato social: mostrar lo desconocido de forma entretenida. Patrocinio comercial (pieles Revillon) influye en representación. Función social ambigua: preservación cultural pero también explotación colonial. El documental responde a la curiosidad moderna por el "otro" pero dentro de marcos imperialistas.`,
      insightsGenerated: [
        'Los arquetipos tempranos mezclan exploración con explotación',
        'El patrocinio comercial moldea la representación desde los inicios',
        'La tecnología limitada fuerza soluciones creativas éticamente complejas'
      ],
      methodologyApplication: 'Análisis histórico-contextual del documental temprano',
      keyFindings: [
        'El contexto colonial es inseparable del documental temprano',
        'La función social puede ser contradictoria',
        'Los arquetipos evolucionan con la tecnología y la política'
      ]
    },
    {
      film: {
        title: 'Super Size Me',
        year: 2004,
        director: 'Morgan Spurlock'
      },
      analysisExcerpt: `Spurlock como catalizador/guerrillero contemporáneo. Usa su propio cuerpo como campo de batalla contra corporaciones. Tecnología digital permite producción independiente de bajo costo. Contrato social: entretenimiento con mensaje activista. Función clara: crítica al capitalismo corporativo y sus efectos en la salud. El arquetipo del guerrillero adaptado a la era de los medios sociales. Patrocinio independiente permite crítica directa.`,
      insightsGenerated: [
        'Los arquetipos se adaptan a nuevos contextos mediáticos',
        'La tecnología digital democratiza el documental guerrillero',
        'El cuerpo del realizador puede ser herramienta política'
      ],
      methodologyApplication: 'Identificación de arquetipos en documental activista contemporáneo',
      keyFindings: [
        'El catalizador moderno usa métodos de espectáculo',
        'La independencia financiera permite crítica radical',
        'Los nuevos medios transforman el contrato social documental'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'grierson-creative-treatment',
      relationshipType: 'complementary',
      synergyDescription: 'Grierson estableció principios que Barnouw historiza',
      combinedInsightPotential: 8
    },
    {
      id: 'winston-claiming-real',
      relationshipType: 'complementary',
      synergyDescription: 'Winston problematiza la historia progresiva que Barnouw narra',
      combinedInsightPotential: 7
    },
    {
      id: 'rotha-documentary-film',
      relationshipType: 'parallel',
      synergyDescription: 'Rotha ofrece historia alternativa desde perspectiva británica',
      combinedInsightPotential: 7
    }
  ]
};
