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

export const POSTHUMAN_CINEMA: Methodology = {
  metadata: {
    id: 'posthuman-cinema',
    name: 'Teorías Posthumanas - Cine y Posthumanismo',
    author: 'Rosi Braidotti, N. Katherine Hayles, Donna Haraway',
    year: 2000,
    category: 'contemporary-experimental',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['critical-theory', 'philosophy-of-technology'],
    culturalContext: 'Posthumanismo crítico',
    language: 'es'
  },
  
  description: `Las teorías posthumanas del cine exploran cómo el medio cinematográfico desafía y reconfigura las concepciones tradicionales de lo humano, anticipando y representando futuros donde las fronteras entre humano/máquina, natural/artificial, y orgánico/tecnológico se disuelven. Basándose en pensadores como Rosi Braidotti, Donna Haraway y N. Katherine Hayles, este enfoque analiza cómo el cine imagina subjetividades cyborg, inteligencias artificiales, y ecologías multi-especies. El análisis posthumano examina no solo representaciones temáticas sino cómo las tecnologías cinematográficas mismas (CGI, motion capture, VR) crean experiencias posthumanas. Esta teoría critica el antropocentrismo del cine clásico, explorando perspectivas no-humanas y temporalidades no-lineales.`,
  
  keyConcepts: [
    {
      term: 'Cyborg Cinema',
      definition: 'Cine que explora la fusión humano-máquina tanto temática como tecnológicamente',
      importance: 'fundamental',
      relatedTerms: ['hibridación', 'tecnogénesis']
    },
    {
      term: 'Multi-species Storytelling',
      definition: 'Narrativas que incluyen perspectivas y agencias no-humanas',
      importance: 'fundamental',
      relatedTerms: ['perspectiva no-humana', 'agencia distribuida']
    },
    {
      term: 'Techno-Genesis',
      definition: 'Co-evolución de humanos y tecnología reflejada en el cine',
      importance: 'important',
      relatedTerms: ['co-evolución', 'simbiosis tecnológica']
    },
    {
      term: 'Becoming-Other',
      definition: 'Procesos de transformación que desafían identidades fijas',
      importance: 'important',
      relatedTerms: ['devenir', 'transformación radical']
    },
    {
      term: 'Post-Anthropocene Cinema',
      definition: 'Cine que imagina futuros más allá de la era humana',
      importance: 'important',
      relatedTerms: ['especulación', 'futuros no-humanos']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de elementos posthumanos',
      description: 'Localizar representaciones de cyborgs, IA, híbridos, y entidades no-humanas',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar no solo en contenido sino en forma cinematográfica',
        'Considerar tecnologías de producción como CGI y mocap',
        'Incluir representaciones sutiles de hibridación'
      ],
      commonMistakes: [
        'Limitarse solo a robots y cyborgs obvios',
        'Ignorar críticas implícitas al humanismo'
      ]
    },
    {
      order: 2,
      name: 'Análisis de perspectivas no-humanas',
      description: 'Examinar cómo el film presenta puntos de vista no-antropocéntricos',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de cámara "no-humana"',
        'Analizar temporalidades no-humanas',
        'Identificar agency de entidades no-humanas'
      ]
    },
    {
      order: 3,
      name: 'Examen de tecnologías cinematográficas',
      description: 'Analizar cómo las tecnologías de producción crean efectos posthumanos',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Búsqueda de devenires',
      description: 'Identificar procesos de transformación y hibridación',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Rastrear transformaciones corporales y mentales',
        'Analizar disolución de fronteras ontológicas'
      ]
    },
    {
      order: 5,
      name: 'Análisis de ensamblajes',
      description: 'Examinar conexiones heterogéneas entre entidades diversas',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación crítica del antropocentrismo',
      description: 'Analizar cómo el film cuestiona o refuerza el humanismo',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Relevante para futuros tecnológicos emergentes',
    'Cuestiona límites tradicionales de identidad y subjetividad',
    'Abraza complejidad de relaciones humano-tecnología',
    'Conecta con debates contemporáneos sobre IA y biotecnología',
    'Abre nuevas posibilidades narrativas y estéticas'
  ],
  
  limitations: [
    'Puede romantizar la tecnología ignorando problemas materiales',
    'Alta abstracción conceptual dificulta aplicación',
    'Riesgo de determinismo tecnológico',
    'Sesgo hacia ciencia ficción sobre otros géneros',
    'Puede olvidar cuerpos y experiencias humanas actuales'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Rosi Braidotti'],
      title: 'The Posthuman',
      year: 2013,
      publisher: 'Polity Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['N. Katherine Hayles'],
      title: 'How We Became Posthuman',
      year: 1999,
      publisher: 'University of Chicago Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Donna Haraway'],
      title: 'Staying with the Trouble: Making Kin in the Chthulucene',
      year: 2016,
      publisher: 'Duke University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Shane Denson', 'Julia Leyda'],
      title: 'Post-Cinema: Theorizing 21st-Century Film',
      year: 2016,
      publisher: 'REFRAME Books',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Ghost in the Shell',
        year: 1995,
        director: 'Mamoru Oshii'
      },
      analysisExcerpt: `Ghost in the Shell epitomiza el cine cyborg posthumano. Major Kusanagi cuestiona constantemente su humanidad: cuerpo completamente artificial, "ghost" (consciencia) de origen incierto. El film visualiza la ciudad como organismo cyborg, información fluyendo como sangre. La fusión final con el Puppet Master representa becoming-other radical: nueva forma de vida emergente. Animación permite fluidez entre orgánico/mecánico imposible en live action. Filosofía posthumana explícita: "¿Qué significa ser humano cuando todo es reemplazable?"`,
      insightsGenerated: [
        'El anime como medio ideal para explorar fluidez posthumana',
        'La identidad como proceso, no esencia fija',
        'La ciudad misma como entidad cyborg'
      ],
      methodologyApplication: 'Análisis de disolución de fronteras humano/máquina en múltiples niveles',
      keyFindings: [
        'El posthumanismo cuestiona la esencia misma de identidad',
        'La fusión cyborg es evolución, no degradación',
        'La tecnología de animación es crucial para la visión posthumana'
      ]
    },
    {
      film: {
        title: 'Annihilation',
        year: 2018,
        director: 'Alex Garland'
      },
      analysisExcerpt: `Annihilation presenta posthumanismo ecológico radical. "The Shimmer" como zona de refracción genética donde las fronteras entre especies se disuelven. Transformaciones corporales grotescas pero hermosas: humano-planta, humano-animal. Temporalidad no-humana del cambio evolutivo acelerado. El final rechaza salvación humanista: Lena transformada, no "curada". CGI orgánico-digital refleja hibridación temática. Perspectiva del Shimmer como protagonista no-humano con agenda propia.`,
      insightsGenerated: [
        'El horror corporal como estética posthumana',
        'La evolución como fuerza creativa no-antropocéntrica',
        'Imposibilidad de retorno a lo "puramente" humano'
      ],
      methodologyApplication: 'Análisis de multi-species becomings y temporalidades no-humanas',
      keyFindings: [
        'El posthumanismo puede ser terrorífico y bello simultáneamente',
        'La naturaleza misma es fuerza posthumanizante',
        'CGI como tecnología intrínsecamente posthumana'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'new-materialism',
      relationshipType: 'complementary',
      synergyDescription: 'El nuevo materialismo complementa el posthumanismo con atención a agencia material',
      combinedInsightPotential: 9
    },
    {
      id: 'eco-criticism',
      relationshipType: 'complementary',
      synergyDescription: 'La ecocrítica comparte crítica al antropocentrismo desde perspectiva ambiental',
      combinedInsightPotential: 8
    },
    {
      id: 'monster-theory',
      relationshipType: 'complementary',
      synergyDescription: 'La teoría del monstruo explora límites de lo humano que el posthumanismo celebra',
      combinedInsightPotential: 8
    }
  ]
};
