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

export const CAWELTI_FORMULA_NARRATIVES: Methodology = {
  metadata: {
    id: 'cawelti-formula-narratives',
    name: 'Fórmulas Narrativas',
    author: 'John Cawelti',
    year: 1976,
    category: 'genre-theory',
    complexity: 'intermediate',
    timeToLearn: 20,
    prerequisities: ['narrative-theory-basics'],
    culturalContext: 'Estudios de cultura popular americana',
    language: 'es'
  },
  
  description: `John Cawelti desarrolló una teoría de las "fórmulas narrativas" que analiza los géneros populares como estructuras que combinan convenciones culturales específicas con arquetipos universales. Su concepto de "fórmula" describe patrones narrativos que equilibran lo familiar (convenciones reconocibles) con lo novedoso (variaciones específicas), proporcionando audiencias con experiencias simultáneamente confortables y excitantes. Cawelti distingue entre "mímesis" (representación realista) y "fórmula" (patrones escapistas), argumentando que las fórmulas cumplen funciones psicológicas y sociales específicas. Su análisis de géneros americanos - western, detective, melodrama - revela cómo procesan tensiones culturales mediante resoluciones ritualizadas. Cawelti examina la "moral fantasy" de cada fórmula.`,
  
  keyConcepts: [
    {
      term: 'Fórmula Cultural',
      definition: 'Patrón narrativo que combina convenciones específicas con arquetipos universales',
      importance: 'fundamental',
      relatedTerms: ['convención', 'arquetipo', 'patrón']
    },
    {
      term: 'Mímesis vs. Fórmula',
      definition: 'Representación realista vs. patrones escapistas convencionales',
      importance: 'fundamental',
      relatedTerms: ['realismo', 'escapismo', 'convención']
    },
    {
      term: 'Moral Fantasy',
      definition: 'Visión idealizada de justicia y orden social que cada fórmula presenta',
      importance: 'important',
      relatedTerms: ['justicia poética', 'resolución moral']
    },
    {
      term: 'Tension Management',
      definition: 'Cómo las fórmulas procesan y resuelven conflictos culturales',
      importance: 'important',
      relatedTerms: ['resolución', 'conflicto cultural']
    },
    {
      term: 'Ritual Narrative',
      definition: 'Aspecto ceremonial de las fórmulas que proporciona resolución psicológica',
      importance: 'important',
      relatedTerms: ['ritual', 'ceremonia', 'catarsis']
    },
    {
      term: 'Cultural Mythology',
      definition: 'Creencias y valores profundos expresados mediante fórmulas',
      importance: 'important',
      relatedTerms: ['mito moderno', 'valores culturales']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de la fórmula',
      description: 'Determinar el patrón narrativo central operando',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Buscar estructura narrativa recurrente',
        'Identificar elementos predecibles',
        'Notar qué se mantiene constante entre ejemplos'
      ],
      commonMistakes: [
        'Confundir superficie con fórmula profunda',
        'Ser demasiado específico o general'
      ]
    },
    {
      order: 2,
      name: 'Distinción convención/arquetipo',
      description: 'Separar elementos culturalmente específicos de universales',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Convenciones son históricas, arquetipos atemporales',
        'Buscar qué podría cambiar sin alterar fórmula'
      ]
    },
    {
      order: 3,
      name: 'Análisis de moral fantasy',
      description: 'Examinar qué visión de justicia presenta la fórmula',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar qué se premia y castiga',
        'Analizar resolución del conflicto central'
      ]
    },
    {
      order: 4,
      name: 'Examen de tensiones culturales',
      description: 'Identificar qué conflictos sociales procesa la fórmula',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis ritual',
      description: 'Examinar aspectos ceremoniales y catárticos',
      timeEstimate: 30,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de función escapista',
      description: 'Analizar qué alivio psicológico proporciona',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Conecta cultura popular con necesidades psicológicas profundas',
    'Valora funciones sociales del entretenimiento',
    'Análisis claro de patrones narrativos',
    'Útil para entender persistencia de fórmulas',
    'Aplicable a múltiples medios',
    'Respeta cultura popular sin condescendencia'
  ],
  
  limitations: [
    'Distinción mímesis/fórmula demasiado rígida',
    'Puede simplificar textos complejos',
    'Enfoque funcionalista a veces reduccionista',
    'Principalmente centrado en narrativas americanas',
    'Menos útil para cine experimental',
    'Minimiza resistencias de audiencia'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['John Cawelti'],
      title: 'Adventure, Mystery, and Romance: Formula Stories as Art and Popular Culture',
      year: 1976,
      publisher: 'University of Chicago Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['John Cawelti'],
      title: 'The Six-Gun Mystique',
      year: 1971,
      publisher: 'Bowling Green University Popular Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['John Cawelti'],
      title: 'The Six-Gun Mystique Sequel',
      year: 1999,
      publisher: 'Bowling Green State University Popular Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Shane',
        year: 1953,
        director: 'George Stevens'
      },
      analysisExcerpt: `Shane ejemplifica la fórmula del western clásico que Cawelti analiza. Arquetipo: guerrero solitario que restaura orden. Convenciones: pistolero, homesteaders vs. ganaderos, duelo climático. Moral fantasy: la violencia justificada puede proteger la civilización pero quien la ejerce debe partir. Tensión cultural procesada: salvajismo necesario para establecer civilización que luego lo rechaza. Ritual: duelo purificador que elimina el mal. Shane debe irse porque representa el salvajismo que permitió pero amenaza el orden doméstico. La fórmula reconcilia necesidad y rechazo de violencia.`,
      insightsGenerated: [
        'El western procesa ambivalencia americana sobre violencia',
        'El héroe debe sacrificarse para que triunfe la civilización',
        'La fórmula permite fantasy de violencia justificada'
      ],
      methodologyApplication: 'Análisis de fórmula western y su moral fantasy',
      keyFindings: [
        'Shane perfecciona la fórmula del gunfighter redentor',
        'La partida del héroe es estructuralmente necesaria',
        'El western ritualiza transición salvajismo/civilización'
      ]
    },
    {
      film: {
        title: 'John Wick',
        year: 2014,
        director: 'Chad Stahelski'
      },
      analysisExcerpt: `John Wick actualiza la fórmula de venganza con convenciones contemporáneas. Arquetipo: guerrero en retiro forzado a regresar. Convenciones actualizadas: asesino profesional, mundo criminal estilizado, violencia coreografiada. Moral fantasy: la venganza es justificada por violación de códigos sagrados (matar al perro/memoria de esposa). Tensión cultural: individualismo vs. sistemas burocráticos (incluso criminales). Ritual: eliminación sistemática escalando hasta el responsable. La fórmula permite fantasy de competencia individual absoluta contra sistemas deshumanizantes.`,
      insightsGenerated: [
        'Las fórmulas se actualizan con nuevas convenciones',
        'La moral fantasy persiste bajo superficies modernas',
        'El ritual de venganza satisface deseos de agencia individual'
      ],
      methodologyApplication: 'Análisis de fórmula de venganza en contexto contemporáneo',
      keyFindings: [
        'John Wick moderniza arquetipos antiguos de venganza',
        'Las convenciones cambian pero las funciones persisten',
        'La estilización extrema no impide función ritual'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'wright-sixguns-society',
      relationshipType: 'hierarchical',
      synergyDescription: 'Wright aplica estructuralismo a las fórmulas western de Cawelti',
      combinedInsightPotential: 8
    },
    {
      id: 'campbell-hero-journey',
      relationshipType: 'parallel',
      synergyDescription: 'Campbell enfoca mito mientras Cawelti examina fórmulas populares',
      combinedInsightPotential: 8
    },
    {
      id: 'eco-superman-myth',
      relationshipType: 'complementary',
      synergyDescription: 'Eco analiza serialidad que las fórmulas de Cawelti permiten',
      combinedInsightPotential: 8
    }
  ]
};
