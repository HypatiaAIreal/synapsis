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

export const ROUCH_CINEMA_VERITE: Methodology = {
  metadata: {
    id: 'rouch-cinema-verite',
    name: 'Cine Verdad y Antropología Visual',
    author: 'Jean Rouch',
    year: 1960,
    category: 'documentary',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['documentary-basics', 'anthropology-basics'],
    culturalContext: 'Antropología visual francesa',
    language: 'es'
  },
  
  description: `Jean Rouch revolucionó tanto el documental como la antropología visual con su práctica del "cinéma vérité" y la "antropología compartida". Su método involucra a los sujetos como co-creadores, no objetos de estudio. El concepto de "cine-trance" describe estados alterados de conciencia durante la filmación donde realidad y performance se fusionan. Rouch desarrolló la "cámara participante" - el cineasta como catalizador que provoca situaciones reveladoras. Su práctica de proyectar películas a los sujetos filmados y incorporar sus respuestas anticipó métodos colaborativos contemporáneos. Rouch teorizó sobre la "verdad cinematográfica" - no la verdad superficial de la observación sino verdades profundas que emergen de la provocación creativa.`,
  
  keyConcepts: [
    {
      term: 'Cinéma Vérité',
      definition: 'Verdad provocada y catalizada, no meramente observada',
      importance: 'fundamental',
      relatedTerms: ['verdad', 'provocación']
    },
    {
      term: 'Antropología Compartida',
      definition: 'Sujetos como colaboradores activos, no objetos de estudio',
      importance: 'fundamental',
      relatedTerms: ['colaboración', 'participación']
    },
    {
      term: 'Cine-Trance',
      definition: 'Estados alterados durante filmación que revelan verdades',
      importance: 'important',
      relatedTerms: ['trance', 'revelación']
    },
    {
      term: 'Cámara Participante',
      definition: 'Cineasta como catalizador activo, no observador neutral',
      importance: 'important',
      relatedTerms: ['participación', 'catálisis']
    },
    {
      term: 'Etno-ficción',
      definition: 'Ficción improvisada que revela verdades culturales',
      importance: 'important',
      relatedTerms: ['ficción', 'improvisación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar participación',
      description: 'Evaluar nivel de colaboración con sujetos',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'La participación va más allá de aparecer en cámara',
        'Buscar evidencia de co-creación',
        'Los sujetos pueden influir en la dirección'
      ],
      commonMistakes: [
        'Confundir presencia con participación',
        'Ignorar desequilibrios de poder'
      ]
    },
    {
      order: 2,
      name: 'Buscar provocación',
      description: 'Identificar momentos donde se cataliza verdad',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'La provocación puede ser sutil',
        'No es manipulación sino catálisis'
      ]
    },
    {
      order: 3,
      name: 'Analizar trance',
      description: 'Localizar estados alterados o intensificados',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Examinar feedback',
      description: 'Buscar incorporación de respuestas de sujetos',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificar etno-ficción',
      description: 'Localizar elementos de performance cultural',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluar compartir',
      description: 'Analizar grado real de antropología compartida',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Métodos colaborativos verdaderamente pioneros',
    'Supera dicotomía sujeto/objeto',
    'Innovación formal constante',
    'Respeto genuino por sujetos filmados',
    'Influencia duradera en documental'
  ],
  
  limitations: [
    'Contexto colonial inicial problemático',
    'El poder nunca es completamente compartido',
    'Provocación puede ser manipulativa',
    'Romanticización del trance y ritual'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jean Rouch'],
      title: 'Ciné-Ethnography',
      year: 2003,
      publisher: 'University of Minnesota Press',      
      essential: true
    },
    {
      type: 'book',
      authors: ['Paul Henley'],
      title: 'The Adventure of the Real: Jean Rouch and the Craft of Ethnographic Cinema',
      year: 2009,
      publisher: 'University of Chicago Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Paul Stoller'],
      title: 'The Cinematic Griot',
      year: 1992,
      publisher: 'University of Chicago Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Chronicle of a Summer',
        year: 1961,
        director: 'Jean Rouch, Edgar Morin'
      },
      analysisExcerpt: `Film fundacional del cinéma vérité. La pregunta "¿Eres feliz?" cataliza revelaciones profundas de parisinos. Cámara participante provoca confesiones y confrontaciones. Los sujetos ven el film y comentan, creando meta-nivel. No observación neutral sino provocación productiva. Verdad emerge del encuentro entre cineastas y sujetos. El método revela alienación urbana moderna mejor que observación distanciada. Antropología de la propia cultura mediante extrañamiento. El feedback final muestra sujetos debatiendo su propia representación.`,
      insightsGenerated: [
        'La provocación puede revelar verdades ocultas',
        'El cinéma vérité funciona en cualquier cultura',
        'El feedback crea niveles adicionales de verdad'
      ],
      methodologyApplication: 'Cinéma vérité aplicado a sociedad urbana moderna',
      keyFindings: [
        'La verdad emerge de la interacción, no observación',
        'Los sujetos pueden reflexionar productivamente sobre su imagen',
        'El método Rouch trasciende contextos exóticos'
      ]
    },
    {
      film: {
        title: 'The Mad Masters',
        year: 1955,
        director: 'Jean Rouch'
      },
      analysisExcerpt: `Documentación del ritual Hauka en Ghana, donde participantes entran en trance imitando colonizadores. Cine-trance literal: Rouch filma en estado alterado siguiendo el ritual. Colaboración compleja: los Hauka permiten filmación de ceremonia secreta. Etno-ficción: el ritual mismo es performance de poder colonial. Verdad profunda sobre colonialismo emerge de la parodia ritual. Controversial por mostrar comportamiento "primitivo", pero revela resistencia sofisticada. La proyección a participantes generó debate sobre representación.`,
      insightsGenerated: [
        'El trance puede ser método documental legítimo',
        'Los rituales revelan verdades políticas profundas',
        'La colaboración no elimina todos los problemas éticos'
      ],
      methodologyApplication: 'Cine-trance documentando ritual de resistencia colonial',
      keyFindings: [
        'Rouch pionero en filmar estados alterados desde dentro',
        'La etno-ficción puede ser más reveladora que observación',
        'El método plantea dilemas éticos irresolubles'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'vertov-kino-eye',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos ven la cámara como más que dispositivo de registro',
      combinedInsightPotential: 8
    },
    {
      id: 'flaherty-documentary',
      relationshipType: 'dialectical',
      synergyDescription: 'Rouch critica y transforma el paternalismo de Flaherty',
      combinedInsightPotential: 7
    },
    {
      id: 'macdougall-observational',
      relationshipType: 'synthetic',
      synergyDescription: 'MacDougall desarrolla aspectos de la antropología visual de Rouch',
      combinedInsightPotential: 8
    }
  ]
};
