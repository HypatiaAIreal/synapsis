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

export const SOCIOLOGY_OF_CINEMA_SORLIN: Methodology = {
  metadata: {
    id: 'sociology-of-cinema-sorlin',
    name: 'Sociología del Cine - Pierre Sorlin',
    author: 'Pierre Sorlin',
    year: 1977,
    category: 'hybrid-interdisciplinary',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['sociology', 'film-history'],
    culturalContext: 'Sociología histórica europea',
    language: 'es'
  },
  
  description: `Pierre Sorlin desarrolló una sociología histórica del cine que examina los films como documentos sociales complejos que revelan mentalidades colectivas, estructuras sociales y transformaciones históricas. Su método combina análisis textual detallado con investigación histórica rigurosa, atendiendo tanto a las condiciones de producción como a las de recepción. Sorlin introdujo el concepto de "visible/no-visible" para analizar qué una sociedad puede o no puede mostrar en un momento histórico dado. Su noción de "punto de fijación" identifica elementos recurrentes que revelan obsesiones sociales profundas. Sorlin examina cómo los géneros cinematográficos codifican ansiedades sociales específicas y cómo las transformaciones estilísticas correlacionan con cambios sociales más amplios.`,
  
  keyConcepts: [
    {
      term: 'Visible/No-visible',
      definition: 'Límites históricos de lo que una sociedad puede mostrar o concebir visualmente',
      importance: 'fundamental',
      relatedTerms: ['representabilidad', 'límites sociales', 'censura implícita']
    },
    {
      term: 'Punto de Fijación',
      definition: 'Elementos visuales o narrativos recurrentes que revelan obsesiones sociales',
      importance: 'fundamental',
      relatedTerms: ['obsesión colectiva', 'síntoma social']
    },
    {
      term: 'Mentalidad Colectiva',
      definition: 'Estructuras mentales compartidas por grupos sociales en momentos históricos',
      importance: 'fundamental',
      relatedTerms: ['imaginario social', 'consciencia colectiva']
    },
    {
      term: 'Sociología de Públicos',
      definition: 'Estudio de audiencias históricamente situadas y sus prácticas',
      importance: 'important',
      relatedTerms: ['recepción histórica', 'audiencias']
    },
    {
      term: 'Género como Síntoma',
      definition: 'Géneros cinematográficos como codificaciones de ansiedades sociales',
      importance: 'important',
      relatedTerms: ['ansiedad social', 'codificación genérica']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Contextualización histórica rigurosa',
      description: 'Investigar exhaustivamente el momento de producción y recepción',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Consultar fuentes primarias de la época',
        'Examinar contexto político, económico y social',
        'Incluir historia de producción y distribución'
      ],
      commonMistakes: [
        'Aplicar conceptos contemporáneos anacrónicamente',
        'Ignorar especificidades nacionales/regionales'
      ]
    },
    {
      order: 2,
      name: 'Identificación de visible/no-visible',
      description: 'Analizar qué puede y no puede mostrarse en ese momento histórico',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Comparar con films contemporáneos',
        'Buscar ausencias significativas',
        'Considerar códigos de censura y autocensura'
      ]
    },
    {
      order: 3,
      name: 'Localización de puntos de fijación',
      description: 'Identificar elementos obsesivamente recurrentes',
      timeEstimate: 90,
      difficulty: 'intermediate',
      tips: [
        'Pueden ser objetos, espacios, situaciones, tipos de personaje',
        'Buscar repeticiones across múltiples films'
      ]
    },
    {
      order: 4,
      name: 'Análisis de mentalidades',
      description: 'Inferir estructuras mentales colectivas desde evidencia fílmica',
      timeEstimate: 120,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Reconstrucción de públicos',
      description: 'Investigar quién veía qué, dónde y cómo',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Usar datos de taquilla, críticas, memorias',
        'Considerar geografía de exhibición'
      ]
    },
    {
      order: 6,
      name: 'Síntesis sociológica',
      description: 'Integrar hallazgos en interpretación social comprehensiva',
      timeEstimate: 90,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Rigor histórico excepcional',
    'Conecta cine con estructuras sociales profundas',
    'Evita determinismos simplistas',
    'Método replicable y sistemático',
    'Atención a especificidades nacionales/culturales',
    'Balance entre análisis textual y contextual'
  ],
  
  limitations: [
    'Requiere investigación histórica extensiva',
    'Menos aplicable a cine contemporáneo',
    'Puede minimizar innovación estética individual',
    'Dependiente de disponibilidad de fuentes',
    'Principalmente eurocéntrico en aplicación'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Pierre Sorlin'],
      title: 'European Cinemas, European Societies 1939-1990',
      year: 1991,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Pierre Sorlin'],
      title: 'Italian National Cinema 1896-1996',
      year: 1996,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Pierre Sorlin'],
      title: 'The Film in History: Restaging the Past',
      year: 1980,
      publisher: 'Barnes & Noble',
      essential: true
    },
    {
      type: 'article',
      authors: ['Pierre Sorlin'],
      title: 'How to Look at an Historical Film',
      year: 2001,
      journal: 'The Historical Film: History and Memory in Media',
      pages: '25-49',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Bicycle Thieves',
        year: 1948,
        director: 'Vittorio De Sica'
      },
      analysisExcerpt: `Sorlin analiza Bicycle Thieves como documento de la Italia posbélica. Visible: pobreza urbana, desempleo masivo, solidaridad familiar precaria. No-visible: causas políticas del desempleo, Marshall Plan, Guerra Fría emergente. Punto de fijación: la bicicleta como herramienta de supervivencia - obsesión con objetos materiales básicos revela trauma de escasez. Mentalidad colectiva: mezcla de esperanza (buscar trabajo) y desesperación (robar). Públicos de 1948 lloraban por reconocimiento, no solo empatía. El neorrealismo codifica experiencia colectiva de precariedad material y moral.`,
      insightsGenerated: [
        'La bicicleta condensa ansiedades materiales de toda una sociedad',
        'Lo no-visible (contexto político) es tan significativo como lo visible',
        'El neorrealismo funciona como elaboración colectiva del trauma'
      ],
      methodologyApplication: 'Análisis integrado de texto fílmico y contexto social específico',
      keyFindings: [
        'Los objetos cotidianos pueden ser puntos de fijación social',
        'El estilo neorrealista emerge de/responde a condiciones históricas precisas',
        'Los públicos contemporáneos experimentaban reconocimiento, no solo entretenimiento'
      ]
    },
    {
      film: {
        title: 'The Full Monty',
        year: 1997,
        director: 'Peter Cattaneo'
      },
      analysisExcerpt: `Sorlin examinaría The Full Monty como síntoma de la desindustrialización británica. Visible: masculinidad obrera en crisis, humor como supervivencia, cuerpos masculinos mercantilizados. No-visible: políticas neoliberales específicas, destrucción sistemática de sindicatos, alternativas políticas. Punto de fijación: la fábrica abandonada - espacios industriales vacíos obsesionan el imaginario. Mentalidad: adaptación individual a fuerzas estructurales presentadas como inevitables. Público de Blair-era buscaba narrativas de resiliencia sin cuestionar causas. Comedia como género permite procesar trauma económico.`,
      insightsGenerated: [
        'La comedia puede codificar traumas económicos profundos',
        'Los espacios abandonados funcionan como puntos de fijación de pérdida',
        'La "adaptación creativa" oculta crítica estructural'
      ],
      methodologyApplication: 'Análisis de género como síntoma de transformación socioeconómica',
      keyFindings: [
        'La desindustrialización genera nuevos puntos de fijación visuales',
        'El humor permite procesar pérdidas colectivas',
        'Lo no-visible (causas políticas) se naturaliza como inevitable'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'historical-reception',
      relationshipType: 'complementary',
      synergyDescription: 'Comparten interés en reconstruir experiencias históricas de audiencias',
      combinedInsightPotential: 9
    },
    {
      id: 'cultural-history',
      relationshipType: 'complementary',
      synergyDescription: 'Historia cultural proporciona marco más amplio para análisis de Sorlin',
      combinedInsightPotential: 8
    },
    {
      id: 'genre-studies',
      relationshipType: 'complementary',
      synergyDescription: 'Sorlin enriquece estudios de género con dimensión sociológica',
      combinedInsightPotential: 8
    }
  ]
};
