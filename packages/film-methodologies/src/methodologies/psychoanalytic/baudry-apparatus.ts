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

export const BAUDRY_APPARATUS: Methodology = {
  metadata: {
    id: 'baudry-apparatus',
    name: 'Aparato Cinematográfico',
    author: 'Jean-Louis Baudry',
    year: 1970,
    category: 'psychoanalytic',
    complexity: 'advanced',
    timeToLearn: 35,
    prerequisities: ['marxist-theory', 'psychoanalysis'],
    culturalContext: 'Teoría del aparato francesa',
    language: 'es'
  },
  
  description: `Jean-Louis Baudry desarrolló la influyente teoría del "aparato cinematográfico" que examina cómo las condiciones materiales y técnicas del cine producen efectos ideológicos específicos. Baudry argumenta que el dispositivo cinematográfico - la sala oscura, la inmovilidad del espectador, la proyección desde atrás, la pantalla enmarcada - recrea condiciones similares al estado del sueño y la fase del espejo lacaniana. Esta disposición produce un sujeto-efecto: el espectador regresa a un estado narcisista infantil de plenitud ilusoria. Baudry conecta la perspectiva renacentista de la cámara con la ideología burguesa del sujeto centrado y unificado. El aparato no es neutral sino que construye una posición subjetiva específica.`,
  
  keyConcepts: [
    {
      term: 'Aparato de Base',
      definition: 'Conjunto de condiciones técnicas y materiales del dispositivo cinematográfico',
      importance: 'fundamental',
      relatedTerms: ['dispositivo', 'base técnica']
    },
    {
      term: 'Efecto-Sujeto',
      definition: 'Posición psíquica e ideológica producida por el aparato',
      importance: 'fundamental',
      relatedTerms: ['sujeto cinematográfico', 'posición espectatorial']
    },
    {
      term: 'Doble Escena',
      definition: 'Pantalla cinematográfica y escena psíquica funcionando paralelamente',
      importance: 'important',
      relatedTerms: ['escena dual', 'pantalla psíquica']
    },
    {
      term: 'Perspectiva Monocular',
      definition: 'Sistema renacentista que construye sujeto centrado y unificado',
      importance: 'important',
      relatedTerms: ['perspectiva central', 'sujeto cartesiano']
    },
    {
      term: 'Estado Regresivo',
      definition: 'Retorno a narcisismo primario y omnipotencia infantil',
      importance: 'important',
      relatedTerms: ['regresión narcisista', 'estado onírico']
    },
    {
      term: 'Más-de-Placer',
      definition: 'Satisfacción ideológica adicional al placer narrativo',
      importance: 'important',
      relatedTerms: ['plus de goce', 'placer ideológico']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis de condiciones de proyección',
      description: 'Examinar el dispositivo material del cine',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Oscuridad, inmovilidad, aislamiento del espectador',
        'Proyección desde atrás, pantalla como único foco',
        'Similitud con condiciones del sueño'
      ],
      commonMistakes: [
        'Ignorar la materialidad del dispositivo',
        'Separar técnica de ideología'
      ]
    },
    {
      order: 2,
      name: 'Examen de construcción perspectiva',
      description: 'Analizar cómo la cámara construye un punto de vista único',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Perspectiva renacentista como ideología',
        'Sujeto posicionado como centro de visión',
        'Ilusión de dominio visual'
      ]
    },
    {
      order: 3,
      name: 'Identificación de efectos regresivos',
      description: 'Reconocer estados psíquicos inducidos',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Similitud con fase del espejo lacaniana',
        'Regresión a omnipotencia perceptual',
        'Identificación con ojo trascendental'
      ]
    },
    {
      order: 4,
      name: 'Análisis de continuidad ideológica',
      description: 'Examinar cómo se construye coherencia ilusoria',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Montaje invisible como ideología',
        'Continuidad que borra el trabajo',
        'Naturalización de la construcción'
      ]
    },
    {
      order: 5,
      name: 'Búsqueda de fisuras del aparato',
      description: 'Identificar momentos donde el dispositivo se revela',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Rupturas de continuidad',
        'Reflexividad que expone el aparato',
        'Momentos de extrañamiento'
      ]
    },
    {
      order: 6,
      name: 'Evaluación de la posición-sujeto',
      description: 'Analizar qué tipo de subjetividad construye el film',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Conecta técnica cinematográfica con ideología',
    'Análisis materialista riguroso del dispositivo',
    'Explica el poder ideológico del cine',
    'Desnaturaliza el aparato cinematográfico',
    'Base para crítica ideológica del cine',
    'Influencia fundamental en teoría del cine'
  ],
  
  limitations: [
    'Determinismo tecnológico excesivo',
    'Ignora agency y resistencia del espectador',
    'Modelo de espectador único y pasivo',
    'Sesgo hacia cine narrativo dominante',
    'No considera cines alternativos',
    'Pesimismo sobre posibilidades transformadoras'
  ],
  
  bibliography: [
    {
      type: 'article',
      authors: ['Jean-Louis Baudry'],
      title: 'Ideological Effects of the Basic Cinematographic Apparatus',
      year: 1974,
      journal: 'Film Quarterly',      
      pages: '39-47',
      essential: true
    },
    {
      type: 'article',
      authors: ['Jean-Louis Baudry'],
      title: 'The Apparatus: Metapsychological Approaches to the Impression of Reality in Cinema',
      year: 1975,
      journal: 'Camera Obscura',      
      pages: '104-126',
      essential: true
    },
    {
      type: 'book',
      authors: ['Philip Rosen'],
      title: 'Narrative, Apparatus, Ideology',
      year: 1986,
      publisher: 'Columbia University Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: '2001: A Space Odyssey',
        year: 1968,
        director: 'Stanley Kubrick'
      },
      analysisExcerpt: `2001 simultáneamente ejemplifica y subvierte el aparato de Baudry. La secuencia del Stargate lleva la regresión perceptual al extremo: pura estimulación visual sin referente, retorno a percepción pre-simbólica. Pero Kubrick también interrumpe el aparato clásico: planos extremadamente largos que frustran la absorción narrativa, la cámara HAL que devuelve la mirada, cuestionando la perspectiva monocular. El final con el feto estelar literaliza el estado regresivo del espectador. La película oscila entre afirmar el aparato (efectos transcendentales) y exponerlo (duración, frialdad).`,
      insightsGenerated: [
        'El aparato puede ser llevado a extremos experimentales',
        'La duración extrema puede romper la absorción ideológica',
        'La reflexividad puede coexistir con efectos regresivos'
      ],
      methodologyApplication: 'Análisis de cómo Kubrick manipula y expone el aparato',
      keyFindings: [
        'El cine experimental puede usar el aparato contra sí mismo',
        'La regresión perceptual puede ser experiencia consciente',
        'El aparato contiene potencial para su propia crítica'
      ]
    },
    {
      film: {
        title: 'The Matrix',
        year: 1999,
        director: 'The Wachowskis'
      },
      analysisExcerpt: `The Matrix literaliza la teoría del aparato de Baudry. La Matrix misma es el aparato cinematográfico último: realidad simulada que posiciona sujetos en un sueño colectivo. Los humanos enchufados = espectadores en sala oscura, inmóviles, alimentados por imágenes. Neo despertando = salir del cine/ideología. "The desert of the real" = mundo sin la ilusión del aparato. Pero paradójicamente, la película usa todos los recursos del aparato (efectos especiales, continuidad clásica) para contar esta historia. Meta-comentario sobre la imposibilidad de escapar completamente del aparato incluso cuando lo critican.`,
      insightsGenerated: [
        'El aparato cinematográfico como metáfora de ideología total',
        'La crítica del aparato requiere usar el aparato',
        'Despertar del aparato puede ser otra fantasía del aparato'
      ],
      methodologyApplication: 'Literalización narrativa de la teoría del aparato',
      keyFindings: [
        'La ciencia ficción puede tematizar teorías cinematográficas',
        'El aparato es tan penetrante que incluye su propia crítica',
        'No hay afuera absoluto del aparato ideológico'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'metz-imaginary-signifier',
      relationshipType: 'parallel',
      synergyDescription: 'Metz y Baudry desarrollan teorías complementarias del dispositivo',
      combinedInsightPotential: 9
    },
    {
      id: 'althusser-ideology',
      relationshipType: 'complementary',
      synergyDescription: 'Baudry aplica conceptos althusserianos al cine',
      combinedInsightPotential: 8
    },
    {
      id: 'plato-cave',
      relationshipType: 'complementary',
      synergyDescription: 'Baudry actualiza la alegoría de la caverna para el cine',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Apparatus Theory Visualizer',
      type: 'webapp',
      description: 'Herramienta para visualizar conceptos del aparato',
      cost: 'free',
      platforms: ['web']
    },
    {
      name: 'Ideological Analysis Framework',
      type: 'framework',
      description: 'Marco para análisis ideológico del dispositivo',
      cost: 'paid',
      platforms: ['research']
    }
  ]
};
