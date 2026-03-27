// 🧩 METODOLOGÍAS COGNITIVAS
// 10 enfoques sobre percepción, comprensión y procesamiento mental del cine

export const BORDWELL_CONSTRUCTIVIST_THEORY = {
  metadata: {
    id: 'bordwell-constructivist-theory',
    name: 'Teoría Constructivista del Cine',
    author: 'David Bordwell',
    year: 1985,
    complexity: 'advanced',
    timeToLearn: 30,
    culturalContext: 'Cognitivismo Cinematográfico'
  },
  
  shortDescription: 'El espectador como constructor activo de significado mediante esquemas cognitivos y procesos inferenciales.',
  
  description: 'David Bordwell revolucionó la teoría del cine al aplicar principios de la psicología cognitiva para entender cómo los espectadores comprenden las películas. Su teoría constructivista propone que el visionado es un proceso activo donde el espectador construye la historia y el significado usando esquemas mentales, haciendo inferencias y probando hipótesis. Bordwell identifica diferentes niveles de significado: referencial (mundo de la historia), explícito (mensaje directo), implícito (temas), y sintomático (ideología inconsciente). Los espectadores usan esquemas procedimentales (cómo seguir una narrativa), esquemas de género (expectativas según el tipo de film), y esquemas estilísticos (comprensión de técnicas). Su análisis del "espectador ideal" muestra cómo el filme guía la actividad constructiva mediante pistas, lagunas y redundancias. Bordwell demuestra que la comprensión cinematográfica es una actividad cognitiva compleja que involucra percepción, memoria, inferencia y resolución de problemas.',
  
  cognitive_processes: {
    construction: {
      active_viewer: 'Espectador como constructor activo',
      hypothesis_testing: 'Formación y prueba de hipótesis',
      gap_filling: 'Llenar lagunas narrativas'
    },
    schemas: {
      procedural: 'Cómo seguir una narrativa',
      genre: 'Expectativas según tipo de film',
      stylistic: 'Comprensión de técnicas cinematográficas',
      cultural: 'Conocimiento contextual'
    },
    meaning_levels: {
      referential: 'Construcción del mundo diegético',
      explicit: 'Mensaje directo o moraleja',
      implicit: 'Temas y significados abstractos',
      symptomatic: 'Significados ideológicos reprimidos'
    },
    cues_system: {
      primacy_effect: 'Importancia de información inicial',
      recency_effect: 'Peso de información reciente',
      redundancy: 'Repetición para claridad',
      retardation: 'Retrasar información clave'
    }
  }
};

export const GRODAL_EMBODIED_VISIONS = {
  metadata: {
    id: 'grodal-embodied-visions',
    name: 'Visiones Encarnadas: Teoría PECMA',
    author: 'Torben Grodal',
    year: 2009,
    complexity: 'advanced',
    timeToLearn: 32,
    culturalContext: 'Neurocinemática'
  },
  
  shortDescription: 'Modelo PECMA (Percepción-Emoción-Cognición-Acción Motora) que explica cómo el cerebro procesa el cine.',
  
  description: 'Torben Grodal desarrolla una teoría bioculturalista del cine basada en neurociencia y psicología evolutiva. Su modelo PECMA (Perception-Emotion-Cognition-Motor Action) describe el flujo de procesamiento cerebral durante el visionado: la percepción activa emociones básicas, que informan procesos cognitivos, que preparan acciones motoras (inhibidas en el cine). Grodal explica géneros según qué parte del flujo enfatizan: el horror activa respuestas de supervivencia, la acción simula actividad motora, el melodrama procesa emociones sociales complejas. Su concepto de "realismo encarnado" muestra cómo diferentes estilos cinematográficos activan diferentes modos de procesamiento cerebral. Grodal analiza la paradoja de la ficción (por qué respondemos emocionalmente a lo que sabemos irreal) mediante la arquitectura modular del cerebro. Su teoría evolutiva explica por qué ciertas narrativas son universales: activan sistemas adaptativos antiguos. La neurocinemática de Grodal es fundamental para entender las bases biológicas de la experiencia cinematográfica.',
  
  pecma_flow: {
    perception: {
      visual_processing: 'Análisis de formas, movimiento, color',
      auditory_processing: 'Procesamiento de sonido y música',
      multimodal_integration: 'Fusión de sentidos'
    },
    emotion: {
      basic_emotions: 'Miedo, alegría, tristeza, ira',
      social_emotions: 'Empatía, vergüenza, orgullo',
      embodied_simulation: 'Neuronas espejo activadas'
    },
    cognition: {
      narrative_comprehension: 'Construcción de historia',
      character_modeling: 'Teoría de la mente',
      causal_reasoning: 'Comprensión de causas-efectos'
    },
    motor_action: {
      action_preparation: 'Preparación motora inhibida',
      vicarious_action: 'Acción vicaria',
      tension_release: 'Ciclos de tensión-relajación'
    }
  },
  
  genre_brain_activation: {
    horror: 'Sistema de amenaza-supervivencia',
    action: 'Simulación motora intensa',
    melodrama: 'Procesamiento emocional social',
    comedy: 'Detección de incongruencias'
  }
};

export const SMITH_FILM_STRUCTURE_EMOTION = {
  metadata: {
    id: 'smith-film-structure-emotion',
    name: 'Estructura Fílmica y Emoción',
    author: 'Greg M. Smith',
    year: 2003,
    complexity: 'intermediate',
    timeToLearn: 24,
    culturalContext: 'Teoría Cognitiva de la Emoción'
  },
  
  shortDescription: 'Modelo del "mood-cue approach" que explica cómo las películas crean y mantienen estados emocionales.',
  
  description: 'Greg M. Smith propone que las películas crean "estados de ánimo" (moods) sostenidos mediante un sistema coordinado de "pistas emocionales" (emotion cues). A diferencia de teorías que se centran en emociones puntuales, Smith argumenta que el cine establece orientaciones afectivas duraderas que predisponen a emociones específicas. Su modelo identifica múltiples canales de pistas: música, iluminación, actuación, ritmo de edición, composición, color. Estas pistas trabajan redundantemente para mantener coherencia emocional. Smith distingue entre "emociones prototípicas" (breves e intensas) y "estados de ánimo" (duraderos y difusos). Los géneros se especializan en diferentes combinaciones de estados de ánimo y emociones. Su análisis de las "emotion markers" muestra cómo pequeños detalles estilísticos preparan grandes momentos emocionales. Smith también examina cómo las expectativas emocionales del espectador interactúan con las pistas del filme, creando experiencias emocionales complejas y matizadas.',
  
  mood_cue_system: {
    mood_establishment: {
      definition: 'Estados afectivos sostenidos',
      duration: 'Orientaciones emocionales duraderas',
      function: 'Predisponer a emociones específicas'
    },
    emotion_cues: {
      musical: 'Tono, tempo, instrumentación',
      visual: 'Color, iluminación, composición',
      narrative: 'Situaciones, conflictos',
      performance: 'Expresiones faciales, gestos',
      rhythmic: 'Edición, pacing'
    },
    redundancy: {
      multi_channel: 'Múltiples canales refuerzan',
      coherence: 'Consistencia emocional',
      preparation: 'Anticipación de momentos clave'
    },
    emotion_types: {
      prototypical: 'Emociones breves e intensas',
      moods: 'Estados difusos y duraderos',
      meta_emotions: 'Emociones sobre emociones'
    }
  }
};

export const CARROLL_PHILOSOPHY_HORROR = {
  metadata: {
    id: 'carroll-philosophy-horror',
    name: 'Filosofía Cognitiva del Horror',
    author: 'Noël Carroll',
    year: 1990,
    complexity: 'intermediate',
    timeToLearn: 26,
    culturalContext: 'Filosofía Analítica del Cine'
  },
  
  shortDescription: 'Teoría cognitiva-evaluativa del horror que explica el "paradoja del horror" mediante el concepto de "art-horror".',
  
  description: 'Noël Carroll desarrolla una teoría cognitiva del horror cinematográfico que resuelve la "paradoja del horror": por qué buscamos experiencias que nos causan miedo y repulsión. Carroll distingue entre "horror natural" (miedo real) y "art-horror" (emoción estética). El monstruo del horror debe ser: amenazante y impuro (categorialmente intersticial, incompleto o sin forma). La respuesta de art-horror combina evaluación cognitiva (este ser viola categorías) con respuesta afectiva (repulsión/miedo). Carroll analiza las estructuras narrativas del horror: descubrimiento, confirmación, confrontación. Su teoría del "thought theory" explica que respondemos a pensamientos sobre monstruos, no a creencias en su existencia. El placer del horror deriva del proceso cognitivo de descubrimiento y la fascinación por lo imposible. Carroll también examina cómo el horror explora ansiedades culturales sobre categorías y límites, haciendo del género un laboratorio filosófico sobre la naturaleza de las categorías cognitivas.',
  
  art_horror_theory: {
    monster_criteria: {
      threatening: 'Peligroso física o psicológicamente',
      impure: 'Viola categorías cognitivas',
      interstitial: 'Entre categorías (vivo/muerto)',
      formless: 'Sin forma definida'
    },
    cognitive_evaluation: {
      category_violation: 'Reconocimiento de anomalía',
      impossibility: 'Evaluación de imposibilidad',
      fascination: 'Atracción cognitiva'
    },
    emotional_response: {
      fear: 'Respuesta a amenaza',
      disgust: 'Respuesta a impureza',
      curiosity: 'Deseo de saber más'
    },
    narrative_structure: {
      onset: 'Irrupción del monstruo',
      discovery: 'Confirmación de lo imposible',
      confrontation: 'Enfrentamiento con anomalía',
      defeat: 'Restauración del orden'
    }
  }
};

export const PLANTINGA_MOVING_VIEWERS = {
  metadata: {
    id: 'plantinga-moving-viewers',
    name: 'Moviendo Espectadores: Emoción y Cognición',
    author: 'Carl Plantinga',
    year: 2009,
    complexity: 'intermediate',
    timeToLearn: 22,
    culturalContext: 'Teoría Cognitiva-Afectiva'
  },
  
  shortDescription: 'Teoría que integra cognición y emoción para explicar cómo las películas mueven afectivamente a los espectadores.',
  
  description: 'Carl Plantinga desarrolla una teoría integral de cómo las películas generan respuestas emocionales mediante la integración de procesos cognitivos y afectivos. Rechazando la dicotomía cognición/emoción, Plantinga muestra que ambas están entrelazadas en la experiencia cinematográfica. Su concepto de "affective trajectories" analiza cómo las películas guían a los espectadores a través de recorridos emocionales planificados. Plantinga examina técnicas específicas: el "scene of empathy" (primeros planos prolongados de rostros sufrientes), "synesthetic affect" (cómo el estilo genera sensaciones corporales), y "direct address" (miradas a cámara que generan incomodidad). Su análisis del "contagio emocional" explica cómo las emociones se transmiten de personajes a espectadores mediante mecanismos de mímica facial y feedback corporal. Plantinga también teoriza sobre las "metaemociones" - cómo las películas nos hacen sentir sobre nuestros propios sentimientos, generando experiencias afectivas complejas y reflexivas.',
  
  affect_cognition_integration: {
    affective_trajectories: {
      definition: 'Recorridos emocionales planificados',
      pacing: 'Ritmo de revelaciones emocionales',
      climax: 'Momentos de intensidad máxima'
    },
    empathy_techniques: {
      scene_of_empathy: 'Primeros planos prolongados',
      facial_feedback: 'Mímica facial automática',
      emotional_contagion: 'Transmisión directa de emoción'
    },
    synesthetic_affect: {
      rhythm: 'Edición genera sensaciones corporales',
      texture: 'Cualidades táctiles de la imagen',
      kinetic: 'Movimiento de cámara encarnado'
    },
    meta_emotions: {
      reflexivity: 'Emociones sobre emociones',
      guilt: 'Culpa por disfrutar violencia',
      pride: 'Orgullo por sensibilidad'
    }
  }
};

export const ANDERSON_ECOLOGICAL_APPROACH = {
  metadata: {
    id: 'anderson-ecological-approach',
    name: 'Aproximación Ecológica al Cine',
    author: 'Joseph D. Anderson',
    year: 1996,
    complexity: 'advanced',
    timeToLearn: 28,
    culturalContext: 'Psicología Ecológica'
  },
  
  shortDescription: 'Aplicación de la psicología ecológica de Gibson al cine, enfocándose en la percepción directa de affordances.',
  
  description: 'Joseph D. Anderson aplica la psicología ecológica de James J. Gibson al cine, proponiendo que percibimos directamente las "affordances" (posibilidades de acción) en las películas sin necesidad de procesamiento simbólico complejo. Anderson argumenta que el cine explota nuestros sistemas perceptivos evolucionados, presentando información óptica que especifica objetos, eventos y affordances. Su teoría del "ecological realism" sostiene que el cine es efectivo porque preserva invariantes perceptuales del mundo real. Anderson analiza cómo el movimiento de cámara simula el flujo óptico de la locomoción real, cómo el montaje respeta las contingencias ecológicas de la atención, y cómo el sonido proporciona información sobre materialidad y espacio. Su crítica a teorías semióticas y psicoanalíticas es que ignoran cómo la percepción cinematográfica se basa en capacidades perceptivas ordinarias. Anderson muestra que muchas convenciones cinematográficas derivan de constraints ecológicos, no de códigos arbitrarios.',
  
  ecological_principles: {
    direct_perception: {
      no_mediation: 'Percepción sin interpretación simbólica',
      affordances: 'Detección directa de posibilidades de acción',
      invariants: 'Información que permanece constante'
    },
    optical_flow: {
      locomotion: 'Movimiento de cámara simula desplazamiento',
      parallax: 'Información de profundidad',
      occlusion: 'Revelación/ocultación especifica layout'
    },
    ecological_montage: {
      attention_shifts: 'Cortes siguen patrones atencionales',
      contingencies: 'Respeto por relaciones causales',
      persistence: 'Objetos mantienen identidad'
    },
    sound_specification: {
      material: 'Sonido especifica materiales',
      space: 'Reverberación indica espacio',
      causality: 'Sincronía indica fuente'
    }
  }
};

export const BRANIGAN_NARRATIVE_COMPREHENSION = {
  metadata: {
    id: 'branigan-narrative-comprehension',
    name: 'Comprensión Narrativa y Esquemas',
    author: 'Edward Branigan',
    year: 1992,
    complexity: 'advanced',
    timeToLearn: 30,
    culturalContext: 'Narratología Cognitiva'
  },
  
  shortDescription: 'Teoría de niveles de narración y cómo los espectadores usan esquemas cognitivos para comprender estructuras narrativas complejas.',
  
  description: 'Edward Branigan desarrolla una teoría cognitiva de la narración cinematográfica que analiza cómo los espectadores comprenden estructuras narrativas complejas mediante esquemas mentales jerárquicos. Branigan identifica ocho niveles de narración, desde datos perceptuales básicos hasta juicios autorales abstractos. Su análisis de la "focalización" muestra cómo el cine puede representar experiencias subjetivas mediante técnicas específicas que activan esquemas de percepción, cognición o experiencia interna. Branigan examina cómo los espectadores manejan narradores no fiables, estructuras temporales complejas, y niveles narrativos embebidos. Su concepto de "disparity of knowledge" analiza cómo el filme manipula lo que saben diferentes personajes y el espectador. La teoría de esquemas de Branigan explica cómo podemos comprender innovaciones narrativas: aplicamos, modificamos y ocasionalmente abandonamos esquemas existentes. Su trabajo es fundamental para entender la narración cinematográfica como proceso cognitivo activo.',
  
  narrative_levels: {
    hierarchy: [
      'Datos perceptuales extra-ficticios',
      'Representación diegética',
      'Focalización externa',
      'Focalización superficial interna',
      'Focalización profunda interna',
      'Narración no-caracterial',
      'Narración caracterial',
      'Narración autoral'
    ],
    focalization: {
      external: 'Vista desde fuera',
      internal_surface: 'Lo que personaje percibe',
      internal_deep: 'Lo que personaje piensa/siente'
    },
    knowledge_structures: {
      disparity: 'Diferencias en conocimiento',
      revelation: 'Momentos de descubrimiento',
      suppression: 'Información retenida'
    },
    schema_adaptation: {
      application: 'Usar esquemas existentes',
      modification: 'Ajustar esquemas',
      innovation: 'Crear nuevos esquemas'
    }
  }
};

export const TAN_EMOTION_ACTION_READINESS = {
  metadata: {
    id: 'tan-emotion-action-readiness',
    name: 'Emoción como Disposición para la Acción',
    author: 'Ed S. Tan',
    year: 1996,
    complexity: 'intermediate',
    timeToLearn: 24,
    culturalContext: 'Psicología de la Emoción'
  },
  
  shortDescription: 'Las emociones cinematográficas como tendencias de acción virtual que preparan respuestas sin poder ejecutarlas.',
  
  description: 'Ed S. Tan propone que las emociones cinematográficas son fundamentalmente "action tendencies" (tendencias de acción) que preparan al espectador para respuestas que no puede ejecutar. Basándose en la teoría de Frijda, Tan argumenta que ver cine genera genuinas emociones porque activa sistemas de evaluación y preparación para la acción, aunque la acción real esté inhibida. Tan distingue entre "emociones ficticias" (hacia los personajes y eventos) y "emociones artefactuales" (hacia el filme como construcción). Su análisis del "interés" como emoción fundamental del cine muestra cómo la narrativa mantiene un estado de anticipación activa. Tan examina cómo diferentes géneros activan diferentes perfiles de tendencias de acción: el thriller activa vigilancia y escape, el melodrama activa acercamiento y cuidado, la comedia activa relajación y apertura. Su teoría explica la intensidad emocional del cine: la imposibilidad de acción real intensifica la experiencia emocional.',
  
  action_readiness_theory: {
    emotion_as_action: {
      appraisal: 'Evaluación de situación',
      action_tendency: 'Preparación para respuesta',
      virtual_action: 'Acción imaginada pero no ejecutada'
    },
    emotion_types: {
      fictional: 'Hacia mundo diegético',
      artefactual: 'Hacia construcción fílmica',
      testimonial: 'Hacia realidad representada'
    },
    interest_emotion: {
      promise: 'Anticipación de información',
      curiosity: 'Deseo de conocer',
      suspense: 'Incertidumbre sobre resultado'
    },
    genre_action_profiles: {
      thriller: 'Huida, ocultación, vigilancia',
      melodrama: 'Abrazo, consuelo, protección',
      horror: 'Escape, parálisis, evitación',
      comedy: 'Relajación, apertura, risa'
    }
  }
};

export const PERSSON_UNDERSTANDING_CINEMA = {
  metadata: {
    id: 'persson-understanding-cinema',
    name: 'Psicología Popular y Comprensión del Cine',
    author: 'Per Persson',
    year: 2003,
    complexity: 'advanced',
    timeToLearn: 26,
    culturalContext: 'Psicología Cultural Cognitiva'
  },
  
  shortDescription: 'Cómo la "psicología popular" (folk psychology) estructura la comprensión de personajes y narrativas cinematográficas.',
  
  description: 'Per Persson examina cómo los espectadores usan la "psicología popular" (conocimiento cotidiano sobre mentes y comportamiento) para comprender el cine. Esta psicología popular incluye conceptos de creencias, deseos, emociones, personalidad y normas sociales que aplicamos automáticamente a los personajes. Persson muestra cómo el cine explota estas estructuras cognitivas culturalmente variables para crear personajes comprensibles con mínima información. Su análisis del "personal space" revela cómo diferentes culturas interpretan distancias en pantalla según sus propios esquemas proxémicos. Persson examina dispositivos cinematográficos como primeros planos, point-of-view shots, y miradas como triggers para inferencias psicológicas específicas. Su trabajo demuestra que la comprensión cinematográfica no es universal sino culturalmente situada, dependiendo de las psicologías populares locales. Persson también analiza cómo el cine puede expandir o desafiar la psicología popular, introduciendo formas nuevas de entender la mente y el comportamiento.',
  
  folk_psychology_cinema: {
    mental_attribution: {
      beliefs: 'Inferir lo que personajes creen',
      desires: 'Entender qué quieren',
      emotions: 'Reconocer estados emocionales',
      personality: 'Construir rasgos estables'
    },
    cultural_variation: {
      proxemics: 'Interpretación de distancias',
      emotion_display: 'Reglas de expresión emocional',
      social_norms: 'Expectativas comportamentales',
      narrative_schemas: 'Estructuras story esperadas'
    },
    cinematic_triggers: {
      close_up: 'Activa lectura psicológica',
      pov_shot: 'Adoptar perspectiva mental',
      eyeline_match: 'Inferir atención y deseo',
      reaction_shot: 'Leer respuesta emocional'
    },
    expansion_folk_psychology: {
      new_mentalities: 'Introducir psicologías alternativas',
      challenge_assumptions: 'Cuestionar psicología popular',
      cross_cultural: 'Exponer a otras psicologías'
    }
  }
};

export const HOCHBERG_BROOKS_PERCEPTION = {
  metadata: {
    id: 'hochberg-brooks-perception',
    name: 'Percepción Cinematográfica y Teoría de la Información',
    author: ['Julian Hochberg', 'Virginia Brooks'],
    year: 1978,
    complexity: 'advanced',
    timeToLearn: 28,
    culturalContext: 'Psicología Experimental'
  },
  
  shortDescription: 'Aplicación de la teoría de la información visual para explicar cómo percibimos cortes y continuidad cinematográfica.',
  
  description: 'Julian Hochberg y Virginia Brooks desarrollaron experimentos pioneros sobre percepción cinematográfica, demostrando que la comprensión del montaje no requiere aprendizaje cultural sino que explota principios perceptivos básicos. Su investigación con niños sin exposición previa al cine mostró comprensión inmediata de convenciones cinematográficas. Hochberg y Brooks proponen que mantenemos un "mapa cognitivo visual" del espacio cinematográfico que se actualiza con cada plano mediante principios de economía perceptiva. Su teoría de "minimum principle" sugiere que elegimos interpretaciones que requieren menor reorganización del mapa mental. Analizaron cómo violaciones de continuidad son toleradas si mantienen coherencia en el mapa cognitivo general. Su trabajo sobre "visual momentum" muestra cómo ciertos elementos visuales facilitan la integración de planos sucesivos. Esta investigación fundamentó científicamente muchas intuiciones sobre montaje y demostró que el lenguaje cinematográfico se basa en capacidades perceptivas universales más que convenciones arbitrarias.',
  
  information_theory_cinema: {
    cognitive_map: {
      spatial_model: 'Mapa mental del espacio fílmico',
      updating: 'Actualización con cada plano',
      persistence: 'Mantener coherencia espacial'
    },
    minimum_principle: {
      economy: 'Preferir interpretación más simple',
      reorganization: 'Minimizar cambios en mapa',
      tolerance: 'Aceptar violaciones menores'
    },
    visual_momentum: {
      overlapping_elements: 'Elementos comunes entre planos',
      motion_vectors: 'Continuidad de movimiento',
      compositional_links: 'Enlaces composicionales'
    },
    universal_comprehension: {
      no_learning: 'Comprensión sin exposición previa',
      perceptual_basis: 'Basado en percepción básica',
      cross_cultural: 'Validez transcultural'
    }
  }
};

// Exportar todas las metodologías
export const COGNITIVE_METHODOLOGIES = [
  BORDWELL_CONSTRUCTIVIST_THEORY,
  GRODAL_EMBODIED_VISIONS,
  SMITH_FILM_STRUCTURE_EMOTION,
  CARROLL_PHILOSOPHY_HORROR,
  PLANTINGA_MOVING_VIEWERS,
  ANDERSON_ECOLOGICAL_APPROACH,
  BRANIGAN_NARRATIVE_COMPREHENSION,
  TAN_EMOTION_ACTION_READINESS,
  PERSSON_UNDERSTANDING_CINEMA,
  HOCHBERG_BROOKS_PERCEPTION
];

export default {
  BORDWELL_CONSTRUCTIVIST_THEORY,
  GRODAL_EMBODIED_VISIONS,
  SMITH_FILM_STRUCTURE_EMOTION,
  CARROLL_PHILOSOPHY_HORROR,
  PLANTINGA_MOVING_VIEWERS,
  ANDERSON_ECOLOGICAL_APPROACH,
  BRANIGAN_NARRATIVE_COMPREHENSION,
  TAN_EMOTION_ACTION_READINESS,
  PERSSON_UNDERSTANDING_CINEMA,
  HOCHBERG_BROOKS_PERCEPTION
};