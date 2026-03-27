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

export const VISUAL_ANTHROPOLOGY: Methodology = {
  metadata: {
    id: 'visual-anthropology',
    name: 'Antropología Visual - Jean Rouch, David MacDougall',
    author: 'Jean Rouch, David MacDougall',
    year: 1950,
    category: 'hybrid-interdisciplinary',
    complexity: 'advanced',
    timeToLearn: 45,
    prerequisities: ['anthropology', 'documentary-theory'],
    culturalContext: 'Descolonización y nueva etnografía',
    language: 'es'
  },
  
  description: `La antropología visual, pionerizada por Jean Rouch y desarrollada por David MacDougall, transformó tanto el documental etnográfico como la teoría cinematográfica al cuestionar la autoridad del observador y explorar formas participativas y reflexivas de filmación. Rouch desarrolló el "cine-trance" y la "antropología compartida", donde la cámara cataliza eventos más que observarlos pasivamente, y los sujetos filmados participan activamente en la construcción de su representación. Su concepto de "ciné-vérité" reconoce que la cámara provoca una verdad particular, no preexistente. MacDougall profundizó la reflexividad con su "cine observacional participativo", explorando la corporalidad del conocimiento etnográfico y la naturaleza intersubjetiva del encuentro fílmico.`,
  
  keyConcepts: [
    {
      term: 'Antropología Compartida',
      definition: 'Colaboración activa entre cineasta y sujetos en la construcción de representación',
      importance: 'fundamental',
      relatedTerms: ['colaboración', 'co-creación', 'participación']
    },
    {
      term: 'Cine-Trance',
      definition: 'Estado alterado de conciencia del cineasta durante filmación ritual',
      importance: 'fundamental',
      relatedTerms: ['embodiment', 'participación corporal']
    },
    {
      term: 'Ciné-Vérité',
      definition: 'Verdad provocada por la presencia de la cámara, no verdad preexistente',
      importance: 'fundamental',
      relatedTerms: ['verdad fílmica', 'provocación']
    },
    {
      term: 'Observación Participativa',
      definition: 'Reconocimiento explícito de la presencia e influencia del cineasta',
      importance: 'important',
      relatedTerms: ['reflexividad', 'presencia']
    },
    {
      term: 'Feedback Screening',
      definition: 'Proyección del material filmado a los participantes para su respuesta',
      importance: 'important',
      relatedTerms: ['retroalimentación', 'validación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Establecimiento de relación colaborativa',
      description: 'Negociar términos de participación con sujetos/comunidad',
      timeEstimate: 240,
      difficulty: 'advanced',
      tips: [
        'Invertir tiempo significativo antes de filmar',
        'Clarificar expectativas mutuas',
        'Establecer protocolos de consentimiento ongoing'
      ],
      commonMistakes: [
        'Asumir autoridad unilateral del cineasta',
        'Romantizar la colaboración ignorando power dynamics'
      ]
    },
    {
      order: 2,
      name: 'Filmación participativa',
      description: 'Involucrar activamente a sujetos en decisiones de filmación',
      timeEstimate: 480,
      difficulty: 'advanced',
      tips: [
        'Permitir que sujetos sugieran qué filmar',
        'Compartir cámara cuando sea apropiado',
        'Mantener reflexividad sobre proceso'
      ]
    },
    {
      order: 3,
      name: 'Documentación del proceso',
      description: 'Registrar la meta-narrativa de cómo se construye el film',
      timeEstimate: 120,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Sesiones de feedback',
      description: 'Proyectar material a participantes y documentar respuestas',
      timeEstimate: 240,
      difficulty: 'intermediate',
      tips: [
        'Crear espacio seguro para críticas',
        'Documentar desacuerdos productivamente'
      ]
    },
    {
      order: 5,
      name: 'Incorporación de respuestas',
      description: 'Integrar feedback en estructura final del film',
      timeEstimate: 240,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Reflexión epistemológica',
      description: 'Analizar qué tipo de conocimiento produce el proceso',
      timeEstimate: 120,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Desafía jerarquías tradicionales observador/observado',
    'Produce conocimiento más rico y polifónico',
    'Éticamente más responsable que etnografía extractiva',
    'Reconoce naturaleza construida de toda representación',
    'Innova formalmente en documental',
    'Crea puentes entre arte y ciencia social'
  ],
  
  limitations: [
    'Proceso extremadamente largo y costoso',
    'No elimina completamente asimetrías de poder',
    'Puede romantizar colaboración',
    'Dificultad de balancear voces múltiples',
    'Resistencia desde antropología tradicional',
    'Complejidad de navegación ética'
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
      authors: ['David MacDougall'],
      title: 'Transcultural Cinema',
      year: 1998,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['David MacDougall'],
      title: 'The Corporeal Image',
      year: 2006,
      publisher: 'Princeton University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Paul Henley'],
      title: 'The Adventure of the Real: Jean Rouch and the Craft of Ethnographic Cinema',
      year: 2009,
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
      analysisExcerpt: `Chronicle of a Summer inaugura el ciné-vérité como método antropológico aplicado a París. Rouch/Morin provocan a parisinos con la pregunta "¿Eres feliz?" La cámara no observa sino cataliza confesiones y confrontaciones. Momento clave: proyección del film a los participantes filmada e incluida. Marceline critica su propia representación, otros debaten autenticidad. Esta meta-reflexividad revela la construcción colaborativa de "verdad". El film no documenta París 1960 sino que lo produce a través del encuentro fílmico. La antropología se vuelve hacia adentro, cuestionando la cultura del antropólogo.`,
      insightsGenerated: [
        'La cámara como catalizador social, no observador neutral',
        'El feedback screening como método epistemológico crucial',
        'La antropología visual puede estudiar la propia cultura'
      ],
      methodologyApplication: 'Ciné-vérité con feedback screening integrado',
      keyFindings: [
        'La verdad fílmica emerge en el encuentro, no preexiste',
        'Los sujetos son co-autores activos de su representación',
        'La reflexividad puede ser método, no solo postura ética'
      ]
    },
    {
      film: {
        title: 'The Wedding Camels',
        year: 1977,
        director: 'David MacDougall'
      },
      analysisExcerpt: `MacDougall desarrolla observación participativa filmando negociaciones matrimoniales Turkana. La cámara reconoce su presencia: los participantes miran, hablan y bromean con el equipo. No hay pretensión de invisibilidad. Los planos largos respetan temporalidad cultural Turkana. MacDougall incluye momentos de espera, silencios, procesos completos. La corporalidad es central: sudor, gestos, proximidades físicas transmiten conocimiento encarnado. Subtítulos incluyen comentarios de participantes sobre el proceso de filmación mismo. El conocimiento etnográfico emerge del encuentro intersubjetivo, no de observación distante.`,
      insightsGenerated: [
        'La duración respeta temporalidades culturales específicas',
        'El conocimiento etnográfico es fundamentalmente corporal',
        'La presencia reconocida puede producir mayor autenticidad'
      ],
      methodologyApplication: 'Observación participativa con temporalidad cultural respetada',
      keyFindings: [
        'El tiempo fílmico puede honrar ritmos culturales diversos',
        'La intersubjetividad es fuente de conocimiento, no contaminación',
        'El cuerpo del etnógrafo es instrumento epistemológico'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'participatory-video',
      relationshipType: 'complementary',
      synergyDescription: 'PV extiende principios de Rouch dando cámaras directamente a comunidades',
      combinedInsightPotential: 9
    },
    {
      id: 'sensory-ethnography',
      relationshipType: 'synthetic',
      synergyDescription: 'La etnografía sensorial radicaliza el énfasis corporal de MacDougall',
      combinedInsightPotential: 8
    },
    {
      id: 'indigenous-media',
      relationshipType: 'dialectical',
      synergyDescription: 'Media indígena lleva auto-representación más allá de colaboración',
      combinedInsightPotential: 9
    }
  ]
};
