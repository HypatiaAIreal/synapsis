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

export const COGNITIVE_FILM_PSYCHOLOGY: Methodology = {
  metadata: {
    id: 'cognitive-film-psychology',
    name: 'Psicología Cognitiva del Cine - Integración interdisciplinaria',
    author: 'David Bordwell, Murray Smith, Carl Plantinga',
    year: 1985,
    category: 'hybrid-interdisciplinary',
    complexity: 'advanced',
    timeToLearn: 50,
    prerequisities: ['cognitive-psychology', 'film-theory'],
    culturalContext: 'Giro cognitivo en humanidades',
    language: 'es'
  },
  
  description: `La psicología cognitiva del cine integra neurociencia, psicología experimental, ciencia cognitiva y filosofía de la mente para entender cómo procesamos y comprendemos las películas. Este enfoque interdisciplinario examina mecanismos universales de percepción, atención, memoria, emoción y comprensión narrativa. Los investigadores utilizan métodos empíricos (eye-tracking, neuroimaging, medidas psicofisiológicas) junto con análisis teórico para entender la experiencia cinematográfica. Conceptos clave incluyen la "teoría de la mente" cinematográfica (cómo inferimos estados mentales de personajes), "simulación encarnada" (cómo nuestros cuerpos resuenan con lo que vemos), y "modelos mentales" (cómo construimos coherencia narrativa).`,
  
  keyConcepts: [
    {
      term: 'Teoría de la Mente Fílmica',
      definition: 'Capacidad de inferir estados mentales de personajes desde información cinematográfica',
      importance: 'fundamental',
      relatedTerms: ['mentalización', 'inferencia psicológica']
    },
    {
      term: 'Simulación Encarnada',
      definition: 'Activación corporal y neural que mimetiza lo percibido en pantalla',
      importance: 'fundamental',
      relatedTerms: ['embodiment', 'resonancia motora']
    },
    {
      term: 'Modelos Mentales',
      definition: 'Representaciones cognitivas que construimos para entender la narrativa',
      importance: 'fundamental',
      relatedTerms: ['esquemas', 'coherencia narrativa']
    },
    {
      term: 'PECMA Flow',
      definition: 'Percepción-Emoción-Cognición-Acción Motora como flujo integrado',
      importance: 'important',
      relatedTerms: ['procesamiento integrado', 'flujo cognitivo']
    },
    {
      term: 'Paradoja de la Ficción',
      definition: 'Por qué respondemos emocionalmente a lo que sabemos ficticio',
      importance: 'important',
      relatedTerms: ['suspensión de incredulidad', 'emoción ficticia']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis de demandas cognitivas',
      description: 'Identificar qué procesos mentales requiere el film',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Mapear complejidad narrativa y carga cognitiva',
        'Identificar momentos de ambigüedad o confusión deliberada',
        'Considerar conocimiento previo requerido'
      ],
      commonMistakes: [
        'Asumir procesamiento uniforme entre espectadores',
        'Ignorar diferencias culturales en cognición'
      ]
    },
    {
      order: 2,
      name: 'Rastreo atencional',
      description: 'Analizar cómo el film guía la atención visual y auditiva',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Usar eye-tracking si está disponible',
        'Analizar composición, movimiento, sonido como guías',
        'Identificar jerarquías atencionales'
      ]
    },
    {
      order: 3,
      name: 'Mapeo de teoría de la mente',
      description: 'Examinar cómo inferimos estados mentales de personajes',
      timeEstimate: 60,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Análisis de simulación encarnada',
      description: 'Identificar momentos de resonancia corporal/emocional',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Estudio de construcción de modelos',
      description: 'Rastrear cómo construimos coherencia narrativa',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Integración multinivel',
      description: 'Sintetizar hallazgos desde perceptual hasta narrativo',
      timeEstimate: 90,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Base empírica sólida en ciencia cognitiva',
    'Explica mecanismos universales de comprensión fílmica',
    'Integra múltiples niveles de análisis',
    'Aplicable a todo tipo de cine',
    'Genera predicciones testables',
    'Puente productivo entre ciencias y humanidades'
  ],
  
  limitations: [
    'Puede minimizar diferencias culturales/históricas',
    'Énfasis en universales sobre particularidades',
    'Requiere conocimiento técnico considerable',
    'Menos atención a dimensiones políticas/ideológicas',
    'Riesgo de reduccionismo cognitivo'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['David Bordwell'],
      title: 'Narration in the Fiction Film',
      year: 1985,
      publisher: 'University of Wisconsin Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Murray Smith'],
      title: 'Engaging Characters: Fiction, Emotion, and the Cinema',
      year: 1995,
      publisher: 'Oxford University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Carl Plantinga', 'Greg M. Smith'],
      title: 'Passionate Views: Film, Cognition, and Emotion',
      year: 1999,
      publisher: 'Johns Hopkins University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Arthur P. Shimamura'],
      title: 'Psychocinematics: Exploring Cognition at the Movies',
      year: 2013,
      publisher: 'Oxford University Press',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Memento',
        year: 2000,
        director: 'Christopher Nolan'
      },
      analysisExcerpt: `Memento funciona como experimento en psicología cognitiva aplicada. La estructura reversa fuerza a espectadores a experimentar déficits de memoria similares a Leonard. Sin memoria episódica, dependemos de notas externas (tatuajes, fotos) como él. Teoría de la mente comprometida: no podemos predecir comportamientos sin acceso a historia causal. Carga cognitiva extrema: mantener dos líneas temporales mientras reconstruimos eventos. El film demuestra plasticidad de modelos mentales: cada revelación fuerza reconstrucción completa. Paradoja final: sabemos que Leonard se engaña pero seguimos identificados emocionalmente.`,
      insightsGenerated: [
        'La estructura fílmica puede simular condiciones cognitivas específicas',
        'La identificación emocional persiste despite conocimiento de unreliability',
        'Los espectadores son remarkably adaptativos a demandas cognitivas inusuales'
      ],
      methodologyApplication: 'Análisis de cómo estructura fílmica modela experiencia cognitiva',
      keyFindings: [
        'Memento demuestra cine como laboratorio cognitivo',
        'La forma puede generar empatía con condiciones neurológicas',
        'Los límites de procesamiento cognitivo son más flexibles de lo asumido'
      ]
    },
    {
      film: {
        title: 'Inside Out',
        year: 2015,
        director: 'Pete Docter'
      },
      analysisExcerpt: `Inside Out literaliza procesos cognitivo-emocionales, funcionando como psicología cognitiva popular. Modelo de emociones básicas (alegría, tristeza, miedo, ira, asco) simplificado pero recognizable. Memoria representada espacialmente: long-term storage, forgetting como abismo. Theory of mind meta-nivel: entendemos las emociones de Riley entendiendo las mentes de sus emociones. Simulación encarnada: audiencias reportan activación emocional correspondiente a emoción dominante en pantalla. El film enseña literacia emocional: la tristeza como adaptativa, no solo negativa. Modelo mental expandido de cómo funcionan emociones y memoria.`,
      insightsGenerated: [
        'La literalización puede ser herramienta pedagógica cognitiva efectiva',
        'Los espectadores pueden mantener múltiples niveles de teoría de la mente',
        'El cine puede modificar modelos mentales de procesos psicológicos'
      ],
      methodologyApplication: 'Análisis de psicología popular cinematográfica y su impacto cognitivo',
      keyFindings: [
        'Inside Out demuestra potencial educativo del cine cognitivo',
        'La metáfora visual puede restructurar comprensión de procesos mentales',
        'La complejidad cognitiva puede empaquetarse en formas accesibles'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'neurocinema',
      relationshipType: 'complementary',
      synergyDescription: 'Neurocinemática proporciona datos neurales para teorías cognitivas',
      combinedInsightPotential: 9
    },
    {
      id: 'ecological-psychology',
      relationshipType: 'complementary',
      synergyDescription: 'Psicología ecológica informa comprensión de percepción cinematográfica',
      combinedInsightPotential: 8
    },
    {
      id: 'phenomenology',
      relationshipType: 'complementary',
      synergyDescription: 'Fenomenología aporta dimensión experiencial a modelos cognitivos',
      combinedInsightPotential: 8
    }
  ]
};
