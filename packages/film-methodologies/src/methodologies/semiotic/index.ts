// 🔤 METODOLOGÍAS SEMIÓTICAS
// 11 enfoques fundamentales de la semiótica aplicada al análisis cinematográfico

export const PEIRCE_TRIADIC_SEMIOTICS = {
  metadata: {
    id: 'peirce-triadic-semiotics',
    name: 'Semiótica Triádica del Cine',
    author: 'Charles Sanders Peirce',
    year: 1903,
    complexity: 'advanced',
    timeToLearn: 28,
    culturalContext: 'Pragmatismo Americano'
  },
  
  shortDescription: 'Análisis del cine a través de la tricotomía signo-objeto-interpretante y las categorías de primeridad, segundidad y terceridad.',
  
  description: 'Charles Sanders Peirce revolucionó la semiótica al proponer que todo signo opera en una relación triádica entre el signo mismo, su objeto y su interpretante. Aplicado al cine, este enfoque revela cómo las imágenes funcionan simultáneamente como íconos (se parecen a lo que representan), índices (tienen conexión causal con su referente) y símbolos (operan por convención cultural). Su teoría de las tres categorías fenomenológicas - primeridad (cualidad pura), segundidad (reacción) y terceridad (mediación) - permite analizar cómo el cine genera significado a través de sensaciones inmediatas, choques narrativos y convenciones establecidas. Este marco teórico es fundamental para entender cómo el espectador interpreta y da sentido a las imágenes en movimiento.',
  
  sign_types: {
    icon: {
      definition: 'Signo que se parece a su objeto',
      cinematic_examples: ['Imagen fotográfica', 'Onomatopeyas visuales', 'Metáforas visuales']
    },
    index: {
      definition: 'Signo conectado causalmente con su objeto',
      cinematic_examples: ['Humo/fuego', 'Huellas', 'Síntomas', 'Close-ups emotivos']
    },
    symbol: {
      definition: 'Signo arbitrario y convencional',
      cinematic_examples: ['Lenguaje verbal', 'Banderas', 'Cruces', 'Colores simbólicos']
    }
  },
  
  categories: {
    firstness: {
      definition: 'Cualidad pura, posibilidad',
      cinema: 'Sensación cromática, atmosférica, afectiva'
    },
    secondness: {
      definition: 'Hecho bruto, acción-reacción',
      cinema: 'Conflicto, choque, montaje de atracciones'
    },
    thirdness: {
      definition: 'Mediación, ley, hábito',
      cinema: 'Convenciones narrativas, géneros, códigos'
    }
  }
};

export const ECO_CINEMATIC_CODES = {
  metadata: {
    id: 'eco-cinematic-codes',
    name: 'Códigos Cinematográficos',
    author: 'Umberto Eco',
    year: 1968,
    complexity: 'advanced',
    timeToLearn: 30,
    culturalContext: 'Semiótica Italiana'
  },
  
  shortDescription: 'Sistema de múltiples códigos que operan simultáneamente en el texto fílmico, desde lo perceptivo hasta lo ideológico.',
  
  description: 'Umberto Eco propuso que el cine funciona a través de una compleja arquitectura de códigos superpuestos que van desde los más básicos (perceptivos) hasta los más complejos (ideológicos). Su taxonomía identifica diez niveles de codificación: perceptivos, de reconocimiento, de transmisión, tonales, icónicos, iconográficos, del gusto y la sensibilidad, retóricos, estilísticos y del inconsciente. Esta estratificación permite analizar cómo el significado cinematográfico se construye mediante la interacción de múltiples sistemas de signos, cada uno con sus propias reglas y convenciones. El enfoque de Eco es especialmente valioso para entender cómo los espectadores decodifican mensajes complejos y cómo diferentes culturas pueden interpretar las mismas imágenes de maneras distintas.',
  
  code_levels: {
    perceptive_codes: {
      definition: 'Códigos de reconocimiento visual básico',
      examples: ['Perspectiva', 'Profundidad', 'Movimiento']
    },
    recognition_codes: {
      definition: 'Identificación de objetos y seres',
      cultural_variation: 'Varían según contexto cultural'
    },
    transmission_codes: {
      definition: 'Códigos técnicos del medio',
      elements: ['Grano', 'Definición', 'Formato']
    },
    tonal_codes: {
      definition: 'Convenciones de género y estilo',
      examples: ['Film noir', 'Western', 'Melodrama']
    },
    iconic_codes: {
      definition: 'Figuras, signos, enunciados icónicos',
      levels: ['Figuras', 'Signos', 'Semas']
    },
    iconographic_codes: {
      definition: 'Convenciones de representación histórica',
      tradition: 'Historia del arte aplicada al cine'
    },
    taste_and_sensibility: {
      definition: 'Códigos estéticos y estilísticos',
      variation: 'Cambian con épocas y culturas'
    },
    rhetorical_codes: {
      definition: 'Figuras retóricas visuales',
      examples: ['Metáfora', 'Metonimia', 'Sinécdoque']
    },
    stylistic_codes: {
      definition: 'Marcas autorales y de época',
      auteur: 'Estilo personal del director'
    },
    unconscious_codes: {
      definition: 'Estructuras psicológicas profundas',
      psychoanalysis: 'Códigos del inconsciente'
    }
  }
};

export const LOTMAN_SEMIOSPHERE = {
  metadata: {
    id: 'lotman-semiosphere',
    name: 'La Semiosfera Cinematográfica',
    author: 'Yuri Lotman',
    year: 1984,
    complexity: 'expert',
    timeToLearn: 35,
    culturalContext: 'Escuela de Tartu'
  },
  
  shortDescription: 'El cine como parte de la semiosfera cultural, un espacio semiótico donde los significados se generan a través de fronteras y traducciones.',
  
  description: 'Yuri Lotman concibió la semiosfera como el espacio semiótico fuera del cual es imposible la existencia misma de la semiosis. Aplicado al cine, este concepto revela cómo las películas funcionan dentro de un ecosistema cultural más amplio, donde los significados se generan no de manera aislada sino a través de complejas interacciones con otros textos culturales. La teoría de Lotman enfatiza la importancia de las fronteras semióticas - esos espacios liminales donde ocurre la traducción entre diferentes sistemas de signos - y cómo el cine actúa como un mecanismo de traducción cultural. Su concepto de "explosión" cultural explica cómo ciertos filmes pueden reconfigurar radicalmente los códigos cinematográficos existentes, mientras que su noción del texto como generador de sentidos ilumina la capacidad del cine para producir significados nuevos e impredecibles en cada contexto de recepción.',
  
  semiosphere_structure: {
    center_periphery: {
      center: 'Códigos dominantes, cine mainstream',
      periphery: 'Innovación, cine experimental',
      dynamic: 'Movimiento constante entre centro y periferia'
    },
    boundary: {
      function: 'Filtro traductor',
      bilingual_mechanism: 'Traduce lo externo a códigos internos',
      creativity: 'Zona de máxima generación semiótica'
    },
    asymmetry: {
      principle: 'Desequilibrio productivo',
      dialogue: 'Comunicación a través de la diferencia'
    }
  },
  
  text_concepts: {
    text_memory: {
      definition: 'El texto fílmico como memoria cultural',
      layers: 'Palimpsesto de significados históricos'
    },
    text_generator: {
      function: 'Genera nuevos significados en cada lectura',
      context_dependence: 'Significado cambia con contexto'
    },
    explosion: {
      definition: 'Momentos de cambio impredecible',
      cinema: 'Innovaciones que reconfiguran el lenguaje'
    }
  }
};

export const DELEUZE_MOVEMENT_TIME = {
  metadata: {
    id: 'deleuze-movement-time',
    name: 'Imagen-Movimiento e Imagen-Tiempo',
    author: 'Gilles Deleuze',
    year: 1985,
    complexity: 'expert',
    timeToLearn: 40,
    culturalContext: 'Filosofía del Cine'
  },
  
  shortDescription: 'Taxonomía semiótica del cine basada en Bergson y Peirce, distinguiendo entre el cine clásico (movimiento) y moderno (tiempo).',
  
  description: 'Gilles Deleuze revolucionó la teoría cinematográfica al proponer una clasificación completamente nueva de las imágenes fílmicas basada en las filosofías de Henri Bergson y C.S. Peirce. Su distinción fundamental entre imagen-movimiento (cine clásico) e imagen-tiempo (cine moderno) marca un antes y después en la comprensión del lenguaje cinematográfico. La imagen-movimiento, dominante hasta la Segunda Guerra Mundial, se basa en el esquema sensoriomotor donde las percepciones llevan a acciones. La imagen-tiempo emerge cuando este esquema se rompe, revelando el tiempo en estado puro a través de situaciones ópticas y sonoras puras. Deleuze identifica múltiples tipos de imágenes: percepción, acción, afección, pulsión, reflexión (para el movimiento) y cristal, recuerdo, sueño, pensamiento (para el tiempo). Esta taxonomía no solo clasifica, sino que revela cómo el cine piensa y cómo nos hace pensar.',
  
  movement_image: {
    perception_image: {
      definition: 'Lo que se ve',
      types: ['Objetiva', 'Subjetiva', 'Semi-subjetiva']
    },
    action_image: {
      definition: 'Esquema sensoriomotor',
      forms: ['Gran forma (SAS)', 'Pequeña forma (ASA)']
    },
    affection_image: {
      definition: 'Rostro y primer plano',
      quality: 'Potencia pura del afecto'
    },
    drive_image: {
      definition: 'Pulsiones y mundos originarios',
      naturalism: 'Cine de las pulsiones'
    },
    reflection_image: {
      definition: 'Relación imagen-pensamiento',
      transformation: 'Figuras de transformación'
    }
  },
  
  time_image: {
    crystal_image: {
      definition: 'Coalescencia actual-virtual',
      indiscernibility: 'Presente y pasado coexisten'
    },
    memory_image: {
      sheets_of_past: 'Capas de tiempo',
      peaks_of_present: 'Puntos de actualización'
    },
    dream_image: {
      definition: 'Circuitos oníricos',
      metamorphosis: 'Transformaciones oníricas'
    },
    thought_image: {
      nooshock: 'Choque que fuerza a pensar',
      unthought: 'Lo impensado en el pensamiento'
    }
  }
};

export const HEATH_SUTURE_THEORY = {
  metadata: {
    id: 'heath-suture-theory',
    name: 'Teoría de la Sutura',
    author: 'Stephen Heath',
    year: 1977,
    complexity: 'advanced',
    timeToLearn: 26,
    culturalContext: 'Screen Theory'
  },
  
  shortDescription: 'Análisis de cómo el cine "sutura" al espectador en la narración, ocultando las marcas de enunciación.',
  
  description: 'Stephen Heath desarrolló el concepto psicoanalítico de sutura para explicar cómo el cine clásico "cose" al espectador dentro del tejido narrativo, haciéndolo olvidar que está viendo una construcción. La sutura opera principalmente a través del sistema shot/reverse-shot, donde la alternancia de planos crea la ilusión de un espacio coherente y completo, ocultando la fragmentación real del montaje. Este proceso no es meramente técnico sino profundamente ideológico: al posicionar al espectador como sujeto unificado de la visión, el cine reproduce las estructuras de subjetividad dominantes. Heath muestra cómo la sutura trabaja para borrar las huellas del proceso de producción, creando lo que él llama "la ficción del sujeto único". Su teoría es fundamental para entender cómo el cine mainstream naturaliza su propia construcción y cómo el cine experimental puede resistir estos mecanismos.',
  
  suture_mechanisms: {
    shot_reverse_shot: {
      function: 'Inscribir al espectador en el espacio diegético',
      ideology: 'Naturalización del punto de vista'
    },
    absence_presence: {
      frame: 'Lo que muestra implica lo que oculta',
      offscreen: 'Presencia de la ausencia'
    },
    subject_position: {
      construction: 'Cómo el filme posiciona al espectador',
      interpellation: 'Llamada ideológica'
    },
    continuity_editing: {
      function: 'Borrar las huellas del dispositivo',
      transparency: 'Ilusión de transparencia'
    }
  },
  
  resistance: {
    counter_cinema: 'Hacer visible el dispositivo',
    brechtian_distance: 'Romper la sutura',
    materialist_film: 'Exponer el proceso de producción'
  }
};

export const BETTETINI_CONVERSATION = {
  metadata: {
    id: 'bettetini-conversation',
    name: 'Conversación Audiovisual',
    author: 'Gianfranco Bettetini',
    year: 1984,
    complexity: 'intermediate',
    timeToLearn: 20,
    culturalContext: 'Semiótica Italiana'
  },
  
  shortDescription: 'El cine como forma de conversación simbólica entre el texto y el espectador, con simulacros de intercambio comunicativo.',
  
  description: 'Gianfranco Bettetini propone entender el cine como una forma peculiar de conversación donde, a pesar de la aparente unidireccionalidad del medio, se establece un genuino intercambio comunicativo. Su teoría revela cómo el texto fílmico construye un "simulacro de interlocutor" que dialoga simbólicamente con el espectador. Este diálogo no es real pero tampoco es completamente ilusorio: opera en un nivel simbólico donde el filme anticipa, responde y cuestiona las reacciones del espectador. Bettetini identifica marcas conversacionales específicas en el cine: miradas a cámara, interpelaciones, pausas significativas, preguntas retóricas visuales. Su enfoque es especialmente útil para analizar cómo diferentes géneros cinematográficos establecen distintos "pactos conversacionales" con sus audiencias, desde la complicidad del thriller hasta la confrontación del cine experimental.',
  
  conversational_model: {
    symbolic_conversation: {
      definition: 'Intercambio simbólico no real',
      simulation: 'Simulacro de diálogo'
    },
    prosthetic_subject: {
      enunciator: 'Sujeto enunciador construido',
      enunciatee: 'Sujeto espectador implícito'
    },
    conversational_pact: {
      agreement: 'Pacto comunicativo',
      roles: 'Aceptación de roles comunicativos'
    },
    temporal_articulation: {
      discourse_time: 'Tiempo del relato',
      reception_time: 'Tiempo de la recepción',
      articulation: 'Gestión de temporalidades'
    }
  }
};

export const CASETTI_ENUNCIATION = {
  metadata: {
    id: 'casetti-enunciation',
    name: 'Teoría de la Enunciación Fílmica',
    author: 'Francesco Casetti',
    year: 1986,
    complexity: 'advanced',
    timeToLearn: 25,
    culturalContext: 'Semiótica de la Enunciación'
  },
  
  shortDescription: 'Análisis de las marcas de enunciación en el filme y los roles comunicativos que construye.',
  
  description: 'Francesco Casetti desarrolla una teoría sistemática de la enunciación cinematográfica que examina cómo los filmes revelan (o esconden) las huellas de su propio proceso de producción discursiva. A diferencia del cine clásico que busca borrar estas marcas, Casetti muestra que toda película contiene inevitablemente señales de su enunciación: desde la posición de cámara hasta las decisiones de montaje. Su modelo identifica tres niveles de enunciación: el "yo" que habla (instancia enunciadora), el "tú" al que se dirige (instancia espectatorial) y el "él" de lo que se habla (instancia diegética). Esta triangulación permite analizar cómo diferentes estilos cinematográficos construyen distintas relaciones comunicativas: desde la transparencia del cine clásico hasta la reflexividad del cine moderno. Casetti también examina cómo el punto de vista opera simultáneamente en dimensiones ópticas, cognitivas y evaluativas.',
  
  enunciation_levels: {
    filmic_text: {
      marks: 'Huellas del acto enunciativo',
      examples: ['Mirada a cámara', 'Voz over', 'Intertítulos']
    },
    communicative_roles: {
      enunciator: 'Quien construye el discurso',
      enunciatee: 'A quien se dirige',
      modes: ['Objetivo', 'Interpelación', 'Subjetivo']
    },
    point_of_view: {
      optical: 'Desde dónde se ve',
      cognitive: 'Qué se sabe',
      evaluative: 'Cómo se valora'
    },
    metadiscourse: {
      definition: 'Discurso sobre el discurso',
      reflexivity: 'Cine que habla del cine'
    }
  }
};

export const AUMONT_IMAGE_ANALYSIS = {
  metadata: {
    id: 'aumont-image-analysis',
    name: 'Análisis de la Imagen Fílmica',
    author: 'Jacques Aumont',
    year: 1990,
    complexity: 'intermediate',
    timeToLearn: 22,
    culturalContext: 'Estética del Cine Francés'
  },
  
  shortDescription: 'Aproximación sistemática al análisis de la imagen cinematográfica como signo complejo multidimensional.',
  
  description: 'Jacques Aumont propone un método riguroso para analizar la imagen cinematográfica en toda su complejidad, yendo más allá de los enfoques puramente narrativos o temáticos. Su sistema examina cuatro dimensiones fundamentales: plástica (líneas, formas, colores, texturas), espacial (profundidad, encuadre, fuera de campo), temporal (duración, ritmo, movimiento) y simbólica (códigos culturales, iconográficos, metafóricos). Aumont enfatiza que estas dimensiones no operan de manera aislada sino que se entrelazan para crear el efecto total de la imagen. Su enfoque es particularmente valioso para analizar cómo los grandes cineastas construyen imágenes que funcionan simultáneamente como representación, expresión y símbolo. El método de Aumont revela cómo cada decisión visual - desde la composición hasta la iluminación - contribuye a la construcción del sentido cinematográfico.',
  
  image_dimensions: {
    plastic_values: {
      components: ['Línea', 'Forma', 'Color', 'Textura', 'Luz'],
      organization: 'Composición y equilibrio'
    },
    representational_space: {
      depth_cues: 'Indicadores de profundidad',
      frame_dynamics: 'Tensiones del encuadre',
      offscreen_space: 'Espacios sugeridos'
    },
    temporal_dimension: {
      duration: 'Tiempo del plano',
      rhythm: 'Cadencia visual',
      movement: 'Dinámicas internas'
    },
    symbolic_layer: {
      cultural_codes: 'Significados culturales',
      iconography: 'Tradiciones visuales',
      metaphorical_reading: 'Niveles figurados'
    }
  }
};

export const ODIN_SEMIO_PRAGMATICS = {
  metadata: {
    id: 'odin-semio-pragmatics',
    name: 'Semio-pragmática del Cine',
    author: 'Roger Odin',
    year: 2000,
    complexity: 'advanced',
    timeToLearn: 24,
    culturalContext: 'Pragmática Francesa'
  },
  
  shortDescription: 'Análisis de los modos de producción de sentido y afectos en el cine según contextos de lectura.',
  
  description: 'Roger Odin desarrolla un enfoque revolucionario que desplaza el foco del texto fílmico hacia los procesos de lectura. Su semio-pragmática propone que no existe un significado inherente en las películas, sino que el sentido se produce a través de diferentes "modos de producción de sentido" activados por los espectadores según el contexto. Odin identifica múltiples modos: ficcionalizante (construir un mundo diegético), documentalizante (interrogar la realidad), fabulizante (extraer una moraleja), espectacular (gozar del espectáculo), artístico (apreciar el trabajo del autor), privado (proyectar vivencias personales). Cada modo implica operaciones cognitivas y afectivas específicas. Esta teoría explica por qué la misma película puede ser leída como ficción en un cine, como documento en un archivo, o como objeto artístico en un museo. El enfoque de Odin es fundamental para entender la dimensión pragmática del cine.',
  
  reading_modes: {
    fictionalizing: {
      process: 'Construcción de un mundo diegético',
      affects: 'Identificación narrativa'
    },
    documentarizing: {
      process: 'Lectura como documento del mundo',
      interrogation: 'Cuestionamiento del enunciador real'
    },
    fabulizing: {
      process: 'Extracción de moraleja',
      discourse: 'Valores y enseñanzas'
    },
    spectacular: {
      process: 'Espectáculo puro',
      pleasure: 'Goce de las formas'
    },
    artistic: {
      process: 'Lectura estética',
      author: 'Reconocimiento autoral'
    },
    private: {
      process: 'Proyección de vivencias personales',
      memory: 'Cine familiar y recuerdos'
    }
  }
};

export const STAM_REFLEXIVITY = {
  metadata: {
    id: 'stam-reflexivity',
    name: 'Reflexividad en el Cine',
    author: 'Robert Stam',
    year: 1985,
    complexity: 'intermediate',
    timeToLearn: 18,
    culturalContext: 'Teoría de la Reflexividad'
  },
  
  shortDescription: 'Estudio de las estrategias autorreflexivas del cine que revelan su propia construcción como texto.',
  
  description: 'Robert Stam examina sistemáticamente cómo el cine puede volverse sobre sí mismo, revelando y comentando su propia naturaleza construida. La reflexividad cinematográfica va desde guiños sutiles hasta deconstrucciones radicales del medio. Stam identifica múltiples estrategias reflexivas: autoriales (presencia visible del director), diegéticas (personajes conscientes de ser filmados), intertextuales (referencias a otros filmes), genéricas (comentarios sobre convenciones), tecnológicas (exposición del aparato cinematográfico). Su análisis muestra que la reflexividad no es meramente un juego formal sino una práctica política que puede desnaturalizar las convenciones dominantes del cine. Desde la Nueva Ola Francesa hasta el cine contemporáneo, la reflexividad ha sido una herramienta crucial para cuestionar la transparencia del cine clásico y explorar nuevas posibilidades expresivas.',
  
  reflexivity_types: {
    authorial: {
      definition: 'Presencia del autor en el texto',
      forms: ['Cameos', 'Voz del director', 'Firma estilística']
    },
    diegetic: {
      definition: 'Personajes conscientes de ser filmados',
      breaking_fourth_wall: 'Mirada a cámara'
    },
    intertextual: {
      definition: 'Referencias a otros filmes',
      types: ['Citas', 'Parodias', 'Homenajes', 'Remakes']
    },
    generic: {
      definition: 'Comentario sobre convenciones de género',
      deconstruction: 'Desnaturalización de códigos'
    },
    technological: {
      definition: 'Exposición del dispositivo',
      apparatus: 'Mostrar cámaras, sets, proceso'
    }
  }
};

export const ZUNZUNEGUI_CONFIGURATIONAL = {
  metadata: {
    id: 'zunzunegui-configurational',
    name: 'Análisis Configuracional',
    author: 'Santos Zunzunegui',
    year: 1989,
    complexity: 'intermediate',
    timeToLearn: 20,
    culturalContext: 'Semiótica Española'
  },
  
  shortDescription: 'Método de análisis textual que estudia las configuraciones significantes del filme como sistema.',
  
  description: 'Santos Zunzunegui desarrolla un método analítico que concibe el filme como un sistema de configuraciones significantes en múltiples niveles. Su enfoque integra herramientas de la semiótica estructural con atención a la especificidad del medio cinematográfico. El análisis configuracional examina cómo los elementos materiales del filme (imágenes, sonidos, montaje) se organizan en configuraciones textuales (estructuras narrativas y discursivas) que a su vez generan configuraciones semánticas (isotopías, temas, significados) y pragmáticas (efectos en el espectador). Zunzunegui enfatiza que el sentido no reside en elementos aislados sino en las relaciones que establecen entre sí. Su método es especialmente útil para revelar la coherencia profunda de filmes aparentemente fragmentarios o experimentales, mostrando cómo incluso las obras más radicales operan según principios configuracionales identificables.',
  
  analytical_levels: {
    material_configuration: {
      elements: 'Componentes físicos del filme',
      organization: 'Articulación material'
    },
    textual_configuration: {
      structures: 'Organización narrativa y discursiva',
      coherence: 'Principios de construcción'
    },
    semantic_configuration: {
      isotopies: 'Líneas de coherencia semántica',
      themes: 'Configuraciones temáticas'
    },
    pragmatic_configuration: {
      effects: 'Configuración de efectos en receptor',
      strategies: 'Estrategias comunicativas'
    }
  }
};

// Exportar todas las metodologías
export const SEMIOTIC_METHODOLOGIES = [
  PEIRCE_TRIADIC_SEMIOTICS,
  ECO_CINEMATIC_CODES,
  LOTMAN_SEMIOSPHERE,
  DELEUZE_MOVEMENT_TIME,
  HEATH_SUTURE_THEORY,
  BETTETINI_CONVERSATION,
  CASETTI_ENUNCIATION,
  AUMONT_IMAGE_ANALYSIS,
  ODIN_SEMIO_PRAGMATICS,
  STAM_REFLEXIVITY,
  ZUNZUNEGUI_CONFIGURATIONAL
];

export default {
  PEIRCE_TRIADIC_SEMIOTICS,
  ECO_CINEMATIC_CODES,
  LOTMAN_SEMIOSPHERE,
  DELEUZE_MOVEMENT_TIME,
  HEATH_SUTURE_THEORY,
  BETTETINI_CONVERSATION,
  CASETTI_ENUNCIATION,
  AUMONT_IMAGE_ANALYSIS,
  ODIN_SEMIO_PRAGMATICS,
  STAM_REFLEXIVITY,
  ZUNZUNEGUI_CONFIGURATIONAL
};