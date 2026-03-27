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

export const ECO_CINEMA: Methodology = {
  metadata: {
    id: 'eco-cinema',
    name: 'Ecocrítica Cinematográfica - Cine y Medio Ambiente',
    author: 'Sean Cubitt, Adrian Ivakhiv, Anat Pick',
    year: 1995,
    category: 'contemporary-experimental',
    complexity: 'intermediate',
    timeToLearn: 35,
    prerequisities: ['environmental-studies', 'film-theory'],
    culturalContext: 'Crisis ecológica global',
    language: 'es'
  },
  
  description: `La ecocrítica cinematográfica examina las complejas relaciones entre cine, naturaleza y crisis ecológica, analizando cómo las películas representan, construyen y potencialmente transforman nuestra relación con el medio ambiente. Este enfoque va más allá del análisis temático de "films sobre naturaleza" para examinar la huella ecológica de la producción cinematográfica, las ideologías ambientales implícitas en géneros diversos, y el potencial del cine para imaginar futuros sostenibles. Basándose en pensadores como Timothy Morton, Donna Haraway y Bruno Latour, la ecocrítica explora conceptos como "hiperobjetos", "naturalezas-culturas" entrelazadas, y "ecologías oscuras". También examina cómo tecnologías cinematográficas emergentes pueden reducir impactos ambientales mientras crean nuevas formas de conciencia ecológica.`,
  
  keyConcepts: [
    {
      term: 'Anthropocene Cinema',
      definition: 'Cine que refleja y responde a la era geológica definida por impacto humano',
      importance: 'fundamental',
      relatedTerms: ['era geológica', 'impacto humano']
    },
    {
      term: 'Hyperobjects',
      definition: 'Entidades masivamente distribuidas en espacio-tiempo como el calentamiento global',
      importance: 'fundamental',
      relatedTerms: ['cambio climático', 'escala no-humana']
    },
    {
      term: 'Slow Violence',
      definition: 'Violencia ambiental gradual e imperceptible pero devastadora',
      importance: 'important',
      relatedTerms: ['degradación ambiental', 'temporalidad extendida']
    },
    {
      term: 'Cinematic Footprint',
      definition: 'Impacto ambiental de la producción y distribución cinematográfica',
      importance: 'important',
      relatedTerms: ['huella de carbono', 'producción sostenible']
    },
    {
      term: 'Solastalgia',
      definition: 'Dolor psíquico causado por cambios ambientales en el propio entorno',
      importance: 'important',
      relatedTerms: ['eco-ansiedad', 'pérdida ambiental']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis de representaciones ambientales',
      description: 'Examinar cómo se construye visualmente la naturaleza',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Distinguir entre naturaleza romantizada y representaciones complejas',
        'Analizar ausencias tanto como presencias',
        'Considerar sonido ambiental y diseño sonoro'
      ],
      commonMistakes: [
        'Asumir que toda representación de naturaleza es ecocrítica',
        'Ignorar ideologías implícitas en géneros no-ambientales'
      ]
    },
    {
      order: 2,
      name: 'Identificación de ideologías ambientales',
      description: 'Descubrir asunciones sobre relación humano-naturaleza',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar antropocentrismo implícito',
        'Analizar quién tiene agencia en la narrativa',
        'Examinar soluciones propuestas a problemas ambientales'
      ]
    },
    {
      order: 3,
      name: 'Evaluación de huella material',
      description: 'Investigar impacto ambiental de la producción',
      timeEstimate: 90,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Búsqueda de hiperobjetos',
      description: 'Identificar representaciones de fenómenos a escala no-humana',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Análisis de temporalidades ecológicas',
      description: 'Examinar cómo se representa el tiempo geológico/evolutivo',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación del potencial transformador',
      description: 'Analizar capacidad del film para generar conciencia ecológica',
      timeEstimate: 60,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Urgencia política y relevancia contemporánea extrema',
    'Conecta estética con ética ambiental',
    'Revela ideologías ambientales ocultas en todos los géneros',
    'Promueve prácticas de producción sostenibles',
    'Abre nuevas lecturas de films clásicos y contemporáneos'
  ],
  
  limitations: [
    'Riesgo de moralismo que puede alienar audiencias',
    'Tensión entre mensaje ecológico y entretenimiento',
    'Dificultad para medir impacto real en conciencia ambiental',
    'Puede generar eco-fatiga o parálisis',
    'Complejidad de implementar producción verdaderamente sostenible'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Sean Cubitt', 'Salma Monani', 'Stephen Rust'],
      title: 'Ecocinema Theory and Practice',
      year: 2015,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Adrian Ivakhiv'],
      title: 'Ecologies of the Moving Image',
      year: 2013,
      publisher: 'Wilfrid Laurier University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Timothy Morton'],
      title: 'Dark Ecology: For a Logic of Future Coexistence',
      year: 2018,
      publisher: 'Columbia University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Anat Pick', 'Guinevere Narraway'],
      title: 'Screening Nature: Cinema Beyond the Human',
      year: 2013,
      publisher: 'Berghahn Books',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Princess Mononoke',
        year: 1997,
        director: 'Hayao Miyazaki'
      },
      analysisExcerpt: `Miyazaki presenta ecología compleja sin maniqueísmo. No hay villanos puros: Lady Eboshi protege marginados mientras destruye el bosque. Los dioses-animales no son naturaleza idealizada sino fuerzas violentas y ambiguas. Ashitaka media sin poder detener el conflicto inevitable entre desarrollo humano y mundo natural. La animación permite representar el bosque como entidad viva con agencia propia. El final rechaza restauración total: cicatrices permanentes en paisaje y personajes. Visión eco-trágica: reconoce necesidades humanas legítimas en conflicto irresoluble con naturaleza.`,
      insightsGenerated: [
        'Rechazo del binarismo simplista naturaleza-buena/humanos-malos',
        'La tragedia ecológica como inevitabilidad histórica',
        'Animación como medio ideal para dar vida a la naturaleza'
      ],
      methodologyApplication: 'Análisis de complejidad moral ecológica y agencia no-humana',
      keyFindings: [
        'La mejor ecocrítica evita moralismos simplistas',
        'El conflicto ecológico puede ser trágico, no melodramático',
        'La animación permite perspectivas no-humanas únicas'
      ]
    },
    {
      film: {
        title: 'First Reformed',
        year: 2017,
        director: 'Paul Schrader'
      },
      analysisExcerpt: `Schrader conecta crisis espiritual con crisis ecológica. Reverendo Toller experimenta eco-ansiedad extrema que fusiona con crisis de fe. El activista Michael representa generación paralizada por futuro climático. Secuencia surrealista visualiza el Antropoceno como horror cósmico. La iglesia financiada por petrolera simboliza complicidad institucional. Estilo austero (4:3, mínimo movimiento) contrasta con enormidad de la crisis. Final ambiguo: ¿martirio ecológico o salvación por amor? Film como slow violence: la crisis se infiltra gradualmente hasta explotar.`,
      insightsGenerated: [
        'La crisis ecológica como crisis espiritual fundamental',
        'Complicidad institucional en destrucción ambiental',
        'Eco-ansiedad como respuesta racional, no patológica'
      ],
      methodologyApplication: 'Análisis de eco-ansiedad y representación del Antropoceno',
      keyFindings: [
        'El cine puede representar la escala psíquica de la crisis climática',
        'La austeridad formal puede expresar enormidad temática',
        'La desesperación ecológica desafía frameworks espirituales tradicionales'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'posthuman-cinema',
      relationshipType: 'complementary',
      synergyDescription: 'Comparten crítica al antropocentrismo y exploración de futuros alternativos',
      combinedInsightPotential: 9
    },
    {
      id: 'slow-cinema',
      relationshipType: 'synthetic',
      synergyDescription: 'El cine lento permite contemplación de temporalidades ecológicas',
      combinedInsightPotential: 8
    },
    {
      id: 'documentary-studies',
      relationshipType: 'complementary',
      synergyDescription: 'Documentales ambientales aplican directamente principios ecocríticos',
      combinedInsightPotential: 8
    }
  ]
};
