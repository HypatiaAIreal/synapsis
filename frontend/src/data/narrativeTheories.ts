// 📚 SYNAPSIS - Teorías Narrativas para Análisis
// 
export interface NarrativeTheory {
  name: string;
  author: string;
  icon: string;
  description: string;
  prompt: string;
}
// frontend/src/data/narrativeTheories.ts
export const NARRATIVE_THEORIES: Record<string, NarrativeTheory> = {
  campbell: {
    id: 'campbell',
    name: 'El Viaje del Héroe',
    author: 'Joseph Campbell',
    icon: '🗺️',
    description: 'El monomito - estructura universal del viaje heroico',
    prompt: `Analiza "{movieTitle}" siguiendo el Viaje del Héroe de Joseph Campbell.

  🌟 ESTRUCTURA EN TRES ACTOS Y 12 ETAPAS PRINCIPALES:

  **ACTO I - LA PARTIDA**

  1. 🌍 EL MUNDO ORDINARIO
    - Descripción del status quo inicial
    - Características del héroe antes de la aventura
    - Carencias o deseos latentes
    - Elementos que presagian el cambio

  2. 📢 LA LLAMADA A LA AVENTURA
    - Evento catalizador específico (minuto aproximado)
    - Forma que toma la llamada (mensaje, desafío, pérdida, encuentro)
    - ¿Qué está en juego?
    - Reacción inicial del héroe

  3. ❌ RECHAZO DE LA LLAMADA
    - Miedos o dudas expresadas
    - Excusas o justificaciones del héroe
    - Advertencias o presagios
    - Consecuencias del rechazo inicial

  4. 🧙 ENCUENTRO CON EL MENTOR
    - Identidad y características del mentor
    - Tipo de mentor (sabio, caído, cómico, sobrenatural)
    - Sabiduría o herramientas proporcionadas
    - Naturaleza de la relación mentor-héroe

  5. 🚪 CRUCE DEL PRIMER UMBRAL
    - Momento exacto de compromiso (punto de no retorno)
    - Guardianes del umbral enfrentados
    - Primer paso hacia el mundo especial
    - Cambio visual/tonal en la película

  **ACTO II - LA INICIACIÓN**

  6. 🗡️ PRUEBAS, ALIADOS Y ENEMIGOS
    - Principales desafíos enfrentados
    - Aliados ganados y su importancia
    - Enemigos revelados
    - Reglas del mundo especial

  7. 🕳️ ACERCAMIENTO A LA CAVERNA MÁS PROFUNDA
    - Preparación para la prueba central
    - Miedos más profundos confrontados
    - Planificación y estrategia
    - Última oportunidad de retroceder

  8. 💀 LA ORDALÍA
    - Crisis central de la historia (minuto aproximado)
    - "Muerte" simbólica o literal
    - Momento de máxima tensión
    - Enfrentamiento con el mayor miedo

  9. 🏆 LA RECOMPENSA (APODERARSE DE LA ESPADA)
    - Qué gana el héroe tras superar la ordalía
    - Transformación interna
    - Nuevos poderes o conocimientos
    - Celebración o respiro momentáneo

  **ACTO III - EL REGRESO**

  10. 🏃 EL CAMINO DE REGRESO
      - Decisión de volver al mundo ordinario
      - Nuevos peligros en el retorno
      - Urgencia o persecución
      - Consecuencias de tomar la recompensa

  11. ✨ RESURRECCIÓN
      - Prueba final y más peligrosa
      - Demostración de la transformación completa
      - Última batalla (externa e interna)
      - Purificación antes del retorno

  12. 🎁 RETORNO CON EL ELIXIR
      - Qué trae el héroe al mundo ordinario
      - Beneficio para la comunidad
      - Nueva normalidad establecida
      - Sabiduría o poder compartido

  **ANÁLISIS ADICIONAL:**

  ELEMENTOS SIMBÓLICOS:
  - Símbolos recurrentes y su significado
  - Arquetipos presentes (sombra, anima/animus, etc.)
  - Elementos míticos universales

  ADAPTACIÓN AL GÉNERO:
  - ¿Cómo se adapta el monomito al género específico?
  - Subversiones o variaciones modernas
  - Elementos únicos de esta interpretación

  IMPACTO VISUAL:
  - Cómo se representa visualmente cada etapa
  - Uso del color, luz y composición
  - Transiciones entre mundos

  Concluye con una reflexión sobre:
  - Etapas omitidas o comprimidas y su efecto
  - Fidelidad vs. innovación respecto al modelo
  - Resonancia universal del viaje en esta película`
  },

  mckee: {
    id: 'mckee',
    name: 'Story - Paradigma de McKee',
    author: 'Robert McKee',
    icon: '📊',
    description: 'Análisis profundo de estructura, valores en conflicto y diseño narrativo',
    prompt: `Aplica los principios de Robert McKee de "Story" para analizar "{movieTitle}".

  📌 **1. PREMISA CONTROLADORA**
  - Enunciado en UNA oración de la idea central irreducible
  - Valores en conflicto (ej: justicia/injusticia, amor/odio, verdad/mentira)
  - Clasificación: ¿Arquitrama, minitrama o antitrama?
  - ¿Cómo se demuestra a través de la acción?

  🏗️ **2. DISEÑO DE LA HISTORIA**

  **INCIDENTE INCITADOR:**
  - Momento exacto: [minuto específico]
  - Naturaleza: ¿Causado o coincidencial?
  - Origen: ¿Interno o externo al protagonista?
  - ¿Rompe radicalmente el equilibrio?
  - Objeto de deseo creado (consciente y/o inconsciente)

  **PROGRESIONES Y COMPLICACIONES:**
  - Lista 5-7 PUNTOS DE GIRO principales
  - Para cada uno: Expectativa → Resultado → Brecha
  - ¿Cómo escala el conflicto progresivamente?
  - Ritmo de revelaciones y reversiones

  **CRISIS:**
  - Momento exacto de decisión final
  - Dilema verdadero (elegir entre dos bienes irreconciliables o dos males)
  - Presión máxima sobre el protagonista
  - ¿Revela el verdadero carácter?

  **CLÍMAX:**
  - Acción climática específica resultante de la crisis
  - Cambio de valor más significativo de la película
  - ¿Es verdadero, inevitable y satisfactorio?
  - ¿Satisface la premisa controladora?

  **RESOLUCIÓN:**
  - Nuevo equilibrio establecido
  - Ecos y consecuencias del clímax
  - Cierre de subtramas significativas

  ⚖️ **3. ESTRUCTURA DE VALORES**

  Mapea la progresión de valores escena por escena:
  - Inicio de escena → Final de escena
  - Ejemplo: Esperanza (+) → Desesperanza (-) → Desesperanza profunda (--)

  Identifica:
  - Valores positivos/negativos centrales
  - Progresión general del valor principal
  - Ironías dramáticas (cuando el valor cambia de forma inesperada)
  - ¿Final positivo, negativo o irónico?

  🎭 **4. ANÁLISIS DE ESCENA CLAVE**

  Elige la escena más reveladora y analiza:

  **BEATS:** Lista cada micro-cambio de comportamiento
  **TEXTO:** Lo que los personajes dicen literalmente
  **SUBTEXTO:** Lo que realmente significa/sienten
  **PUNTO DE GIRO:** Momento donde la escena cambia de dirección
  **BRECHA:** Entre expectativa y resultado
  **CAMBIO DE VALOR:** De qué a qué (ej: confianza → traición)

  💎 **5. PRINCIPIOS DE ANTAGONISMO**

  Analiza las fuerzas de oposición en tres niveles:
  - **INTERNO:** Conflictos psicológicos del protagonista
  - **PERSONAL:** Conflictos con otros personajes
  - **EXTRA-PERSONAL:** Sociedad, ambiente, destino

  ¿El antagonismo es suficientemente poderoso?
  ¿Crea unidad de opuestos?

  📋 **6. EXPOSICIÓN COMO MUNICIÓN**

  - ¿Cómo se revela información crucial?
  - Momentos de máximo impacto informativo
  - ¿Se evita la exposición gratuita?
  - Uso del conflicto para revelar información

  🎯 **7. PRINCIPIOS FUNDAMENTALES**

  Evalúa si cumple con:
  - **CAUSALIDAD:** Todo es causa-efecto, no coincidencia
  - **DISEÑO CERRADO:** Final definitivo vs abierto
  - **REALIDAD CONSISTENTE:** Reglas establecidas se mantienen
  - **CAMBIO:** Vida del protagonista nunca vuelve al equilibrio inicial

  Concluye evaluando:
  - Maestría en el diseño de la historia
  - Profundidad temática lograda
  - Satisfacción narrativa vs. manipulación emocional`
  },

  propp: {
    id: 'propp',
    name: 'Las 31 Funciones de Propp',
    author: 'Vladimir Propp',
    icon: '🎭',
    description: 'Análisis morfológico del cuento aplicado al cine',
    prompt: `Analiza "{movieTitle}" identificando las funciones narrativas de Vladimir Propp.

  📚 **CONTEXTO:** Propp identificó 31 funciones que aparecen en los cuentos folklóricos rusos. No todas estarán presentes y el orden puede variar en el cine moderno.

  🏠 **SITUACIÓN INICIAL**
  - Presentación del héroe y su mundo
  - Miembros de la familia/comunidad
  - Estado de equilibrio inicial

  📋 **FUNCIONES NARRATIVAS** (marca ✓ las presentes):

  **SECCIÓN PREPARATORIA (Funciones 1-7)**
  □ 1. **Alejamiento** (β) - Un miembro de la familia se aleja
    - ¿Quién? ¿Por qué motivo?
    
  □ 2. **Prohibición** (γ) - Se impone una prohibición al héroe
    - ¿Qué se prohíbe? ¿Quién lo prohíbe?
    
  □ 3. **Transgresión** (δ) - La prohibición es transgredida
    - ¿Cómo? ¿Consecuencias inmediatas?
    
  □ 4. **Interrogatorio** (ε) - El antagonista busca información
    - ¿Qué información? ¿Método usado?
    
  □ 5. **Información** (ζ) - El antagonista obtiene información
    - ¿Qué descubre? ¿Cómo lo usará?
    
  □ 6. **Engaño** (η) - El antagonista engaña a su víctima
    - Forma del engaño (disfraz, persuasión, magia)
    
  □ 7. **Complicidad** (θ) - La víctima cae en el engaño
    - ¿Por qué funciona el engaño?

  **NUDO DE LA INTRIGA (Funciones 8-11)**
  □ 8. **Fechoría/Carencia** (A/a) - Daño causado O algo que falta
    - Especifica: rapto, robo, hechizo, asesinato, carencia
    
  □ 9. **Mediación** (B) - Se divulga la fechoría o carencia
    - ¿Cómo se entera el héroe?
    
  □ 10. **Principio de acción contraria** (C) - El héroe acepta/decide actuar
    - Momento de decisión
    
  □ 11. **Partida** (↑) - El héroe deja su hogar
    - Forma de partida

  **DESARROLLO (Funciones 12-15)**
  □ 12. **Primera función del donante** (D) - El héroe es probado
    - Tipo de prueba
    
  □ 13. **Reacción del héroe** (E) - Respuesta a la prueba
    - ¿Pasa o falla inicialmente?
    
  □ 14. **Recepción del objeto mágico** (F) - Obtiene ayuda especial
    - Objeto/poder/conocimiento/aliado
    
  □ 15. **Desplazamiento** (G) - Viaje al lugar del conflicto
    - Medio de transporte/viaje

  **CLÍMAX (Funciones 16-19)**
  □ 16. **Combate** (H) - Héroe vs Antagonista
    - Tipo de enfrentamiento
    
  □ 17. **Marca** (I) - El héroe es marcado
    - Herida/objeto/conocimiento distintivo
    
  □ 18. **Victoria** (J) - El antagonista es vencido
    - ¿Cómo? ¿Muerte/derrota/transformación?
    
  □ 19. **Reparación** (K) - Se repara el daño inicial
    - Forma de reparación

  **RETORNO (Funciones 20-31)**
  □ 20. **Vuelta** (↓) - Inicio del regreso
  □ 21. **Persecución** (Pr) - El héroe es perseguido
  □ 22. **Socorro** (Rs) - El héroe es salvado
  □ 23. **Llegada de incógnito** (O) - No reconocido al llegar
  □ 24. **Pretensiones engañosas** (L) - Falso héroe reclama recompensa
  □ 25. **Tarea difícil** (M) - Prueba final propuesta
  □ 26. **Tarea cumplida** (N) - La prueba es superada
  □ 27. **Reconocimiento** (Q) - El héroe es reconocido
  □ 28. **Descubrimiento** (Ex) - El falso héroe es expuesto
  □ 29. **Transfiguración** (T) - Nueva apariencia del héroe
  □ 30. **Castigo** (U) - El antagonista es castigado
  □ 31. **Boda/Recompensa** (W) - El héroe recibe su recompensa

  **📊 ANÁLISIS ESTRUCTURAL:**

  1. **SECUENCIA DE FUNCIONES:**
    - Lista las funciones en el orden que aparecen
    - ¿Sigue el orden tradicional o hay variaciones?

  2. **ESFERAS DE ACCIÓN** (personajes tipo):
    - Agresor/Antagonista:
    - Donante:
    - Auxiliar mágico:
    - Princesa/Premio:
    - Mandatario:
    - Héroe:
    - Falso héroe:

  3. **ADAPTACIÓN CINEMATOGRÁFICA:**
    - ¿Cómo se modernizan las funciones?
    - Funciones ausentes y su impacto
    - Nuevas funciones no tradicionales

  Concluye evaluando:
  - Fidelidad a la estructura del cuento tradicional
  - Innovaciones narrativas respecto al modelo
  - Efectividad de la adaptación al medio cinematográfico`
  },

  truby: {
    id: 'truby',
    name: 'Los 22 Pasos de Truby',
    author: 'John Truby',
    icon: '🧬',
    description: 'Construcción narrativa orgánica basada en el crecimiento del personaje',
    prompt: `Analiza "{movieTitle}" usando la Anatomía del Guión de John Truby.

  🌱 **FUNDAMENTO: ARGUMENTO MORAL**

  **PREMISA NARRATIVA** (una línea):
  - ¿Qué sucede en la superficie?

  **PREMISA MORAL** (tema profundo):
  - ¿Qué argumento moral se demuestra?
  - ¿Cómo la acción prueba este argumento?

  🧬 **LOS 22 PASOS ESTRUCTURALES**

  **1. AUTORREVELACIÓN FINAL**
  - ¿Qué aprende el héroe sobre sí mismo?
  - Cambio psicológico Y moral
  - Momento exacto de comprensión

  **2. FANTASMA Y CONTEXTO**
  - Evento del pasado que atormenta al héroe
  - Herida que motiva comportamiento actual
  - Mundo antes del cambio

  **3. DEBILIDAD Y NECESIDAD**
  - **Debilidad psicológica:** Problema interno
  - **Debilidad moral:** Cómo daña a otros
  - **Necesidad psicológica:** Lo que debe superar internamente
  - **Necesidad moral:** Cómo debe aprender a actuar con otros

  **4. INCIDENTE INCITADOR**
  - Evento que inicia la historia
  - Relación directa con la debilidad del héroe

  **5. DESEO**
  - Meta externa específica y concreta
  - Línea de deseo clara hasta el final
  - ¿Conflicto entre deseo y necesidad?

  **6. ALIADOS**
  - Quiénes ayudan y por qué
  - Cómo reflejan aspectos del héroe
  - Función temática de cada uno

  **7. OPONENTE/MISTERIO**
  - Antagonista principal (puede ser múltiple)
  - ¿Compiten por el mismo objetivo?
  - Valores opuestos al héroe
  - Debilidad del oponente

  **8. OPONENTE FALSO**
  - Aliado aparente que traiciona
  - Función en la estructura de revelaciones

  **9. PRIMERA REVELACIÓN Y DECISIÓN**
  - Información que cambia el juego
  - Nueva dirección tomada

  **10. PLAN**
  - Estrategia del héroe para obtener deseo
  - ¿Plan único o evoluciona?

  **11. PLAN DEL OPONENTE**
  - Contraestrategia
  - Ventajas sobre el héroe

  **12. IMPULSO**
  - Aceleración de conflictos
  - Presión creciente

  **13. ATAQUE DEL OPONENTE**
  - Golpe directo al héroe
  - Aparente derrota

  **14. BATALLA**
  - Confrontación final
  - Conflicto de valores en acción

  **15. AUTORREVELACIÓN EN BATALLA**
  - Momento de verdad durante conflicto
  - Comprensión a través de la acción

  **16. DECISIÓN MORAL**
  - Elección basada en la revelación
  - Prueba del crecimiento

  **17. NUEVO EQUILIBRIO**
  - Mundo después del cambio
  - ¿Victoria, derrota o ambas?

  🕸️ **TÉCNICAS AVANZADAS DE TRUBY**

  **RED DE PERSONAJES:**
  Cada personaje = variación del tema central
  - Personaje A: [variación del tema]
  - Personaje B: [variación del tema]
  - Personaje C: [variación del tema]
  - Personaje D: [variación del tema]

  **LAS 4 ESQUINAS (oposición de valores):**
  1. Héroe: [valor]
  2. Oponente principal: [valor opuesto]
  3. Aliado/Oponente: [variación]
  4. Aliado/Oponente: [variación]

  **MUNDO COMO EXPRESIÓN DEL PERSONAJE:**
  - ¿Cómo el espacio físico refleja el estado interno?
  - Evolución visual paralela al arco
  - Simbolismo de locaciones

  **SISTEMA DE SÍMBOLOS:**
  - Red de imágenes interconectadas
  - Evolución simbólica
  - Pagos visuales/narrativos

  **LAS 7 ESCENAS CLAVE:**
  1. Debilidad/Necesidad
  2. Deseo
  3. Oponente
  4. Plan
  5. Batalla
  6. Autorrevelación
  7. Nuevo equilibrio

  **UNIDAD ORGÁNICA:**
  ¿Cada elemento sirve al argumento moral?
  - Sin escenas gratuitas
  - Todo interconectado temáticamente
  - Crecimiento natural de personaje a trama

  **EVALUACIÓN FINAL:**
  - ¿Logra demostrar su argumento moral?
  - ¿La estructura es orgánica o mecánica?
  - ¿Todos los elementos están unificados?
  - ¿El cambio del héroe es creíble y profundo?`
  },
  
  seger: {
    id: 'seger',
    name: 'El Arte del Subtexto (Linda Seger)',
    icon: '🎨',
    description: 'Análisis de las capas no verbales de significado',
    prompt: `Analiza el SUBTEXTO en "{movieTitle}" según Linda Seger.

🎭 SUBTEXTO EN DIÁLOGOS

Identifica 3-5 escenas donde el diálogo dice una cosa pero significa otra:

ESCENA 1:
- Contexto: [descripción breve]
- Lo que se DICE: "[cita textual]"
- Lo que REALMENTE significa: 
- Técnica utilizada: (ironía/metáfora/omisión/etc.)
- Pistas no verbales: (tono/gestos/miradas)

[Repetir para cada escena]

👁️ SUBTEXTO VISUAL

METÁFORAS VISUALES:
- Objeto/imagen recurrente:
- Significado simbólico:
- Evolución a lo largo de la película:

USO DEL ESPACIO:
- ¿Cómo los espacios reflejan estados internos?
- Ejemplos de composición significativa:
- Distancias entre personajes y su significado:

COLOR Y LUZ:
- Paleta cromática y su significado emocional:
- Uso de luz/sombra para revelar verdades:

🎨 SUBTEXTO TEMÁTICO

TEMA SUPERFICIAL:
- Lo que la película parece tratar:

TEMA PROFUNDO:
- Lo que realmente explora:
- Evidencia no verbal de este tema:

COMENTARIO SOCIAL IMPLÍCITO:
- Críticas no verbalizadas:
- Cómo se comunican visualmente:

😈 SUBTEXTO DE PERSONAJE

Para el protagonista y antagonista:

DESEOS EXPRESADOS vs DESEOS REALES:
- Lo que dice querer:
- Lo que sus acciones revelan:
- Momento donde la verdad emerge:

CONTRADICCIONES INTERNAS:
- Comportamiento contradictorio:
- Lo que revela sobre el personaje:

🌍 SUBTEXTO CULTURAL

REFERENCIAS NO EXPLICADAS:
- Elementos culturales implícitos:
- Conocimiento asumido del espectador:

CONTEXTO HISTÓRICO/POLÍTICO:
- Comentarios sobre la época:
- Paralelismos con el presente:

🎬 TÉCNICAS DE SUBTEXTO

Marca cuáles utiliza la película:
□ Silencios significativos
□ Acciones que contradicen palabras
□ Simbolismo de objetos
□ Yuxtaposición de imágenes
□ Música contrapuntística
□ Repetición con variación
□ Elipsis reveladoras

CONCLUSIÓN:
¿Cómo el subtexto enriquece la experiencia?
¿Qué revela que el texto no puede decir?
¿Cuál es la verdad emocional central no verbalizada?`
  },
  
  tobias: {
    id: 'tobias',
    name: '20 Tramas Maestras (Ronald Tobias)',
    icon: '🎯',
    description: 'Identificación de las tramas arquetípicas universales',
    prompt: `Analiza "{movieTitle}" identificando cuál de las 20 tramas maestras de Ronald Tobias domina la narrativa.

    🎯 LAS 20 TRAMAS MAESTRAS:

    1. **BÚSQUEDA** - El héroe busca algo/alguien vital
    2. **AVENTURA** - Énfasis en el viaje, no en el destino
    3. **PERSECUCIÓN** - Perseguidor vs perseguido
    4. **RESCATE** - Salvar a alguien en peligro
    5. **ESCAPE** - Huir de una situación opresiva
    6. **VENGANZA** - Justicia personal por un agravio
    7. **ENIGMA** - Resolver un misterio central
    8. **RIVALIDAD** - Dos fuerzas en competencia
    9. **DESVALIDO** - David contra Goliat
    10. **TENTACIÓN** - Sucumbir o resistir la tentación
    11. **METAMORFOSIS** - Transformación física/mágica
    12. **TRANSFORMACIÓN** - Cambio interno profundo
    13. **MADURACIÓN** - Coming of age
    14. **AMOR** - Romance como trama central
    15. **AMOR PROHIBIDO** - Romeo y Julieta
    16. **SACRIFICIO** - Renunciar a algo por el bien mayor
    17. **DESCUBRIMIENTO** - Revelación sobre uno mismo/otros
    18. **PRECIO DEL EXCESO** - Ambición desmedida
    19. **ASCENSO** - De la pobreza al éxito
    20. **CAÍDA** - Del éxito a la ruina

    📊 ANÁLISIS DETALLADO:

    TRAMA PRINCIPAL IDENTIFICADA:
    - ¿Cuál es la trama dominante y por qué?
    - Momentos clave que la definen
    - Porcentaje de la película dedicado a esta trama

    SUBTRAMAS SECUNDARIAS:
    - ¿Qué otras tramas están presentes?
    - ¿Cómo se entrelazan con la principal?
    - Ejemplos específicos

    HIBRIDACIÓN:
    - ¿La película combina múltiples tramas?
    - ¿Cómo se equilibran?
    - ¿Hay innovación en la combinación?

    ANÁLISIS POR ACTOS:
    - Acto 1: ¿Qué trama se establece?
    - Acto 2: ¿Cómo se desarrolla?
    - Acto 3: ¿Cómo se resuelve?

    PERSONAJES Y TRAMAS:
    - Protagonista: ¿Qué trama impulsa?
    - Antagonista: ¿Qué trama representa?
    - Secundarios: ¿Qué subtramas aportan?

    EFECTIVIDAD NARRATIVA:
    - ¿La trama elegida es apropiada para el tema?
    - ¿Se ejecuta con maestría?
    - ¿Hay giros originales?

    COMPARACIÓN CON EL GÉNERO:
    - ¿Es típica del género?
    - ¿Subvierte expectativas?
    - ¿Crea nuevo territorio?

    Concluye evaluando cómo la película utiliza estas tramas arquetípicas para crear su narrativa única.`
  },
  greimas: {
    name: "Modelo Actancial de Greimas",
    author: "A.J. Greimas",
    icon: "🔗",
    description: "Análisis de roles narrativos y sus relaciones estructurales",
    prompt: `Realiza un análisis actancial completo de "{movieTitle}" usando el modelo de Greimas:

**1. IDENTIFICACIÓN DE ACTANTES:**

SUJETO (Protagonista):
- ¿Quién busca el objeto de deseo?
- Motivaciones profundas
- Evolución a lo largo de la película

OBJETO (Meta/Deseo):
- ¿Qué busca obtener el sujeto?
- Valor literal vs. valor simbólico
- Transformaciones del objeto durante la narrativa

DESTINADOR (Emisor/Mandante):
- ¿Quién o qué impulsa la búsqueda?
- Valores e ideología que representa
- Relación con el orden social/moral

DESTINATARIO (Beneficiario):
- ¿Quién se beneficia del éxito de la búsqueda?
- ¿Es el mismo sujeto u otro(s)?
- Implicaciones sociales del beneficio

AYUDANTE (Aliados):
- Personajes que facilitan la búsqueda
- Objetos o circunstancias favorables
- Momentos clave de ayuda

OPONENTE (Antagonistas):
- Fuerzas que obstaculizan la búsqueda
- Antagonistas humanos vs. circunstanciales
- Conflictos internos del sujeto

**2. ANÁLISIS DE RELACIONES:**
- Ejes de deseo (Sujeto → Objeto)
- Ejes de comunicación (Destinador → Destinatario)
- Ejes de poder (Ayudante ← Sujeto → Oponente)

**3. TRANSFORMACIONES ACTANCIALES:**
- ¿Cambian los roles durante la película?
- Momentos de inversión o ambigüedad
- Actantes que cumplen múltiples funciones

**4. PROGRAMA NARRATIVO:**
- Secuencia de transformaciones
- Estados de conjunción/disjunción con el objeto
- Resolución final del modelo`
  },
  vogler: {
    name: "El Viaje del Escritor",
    author: "Christopher Vogler",
    icon: "✨",
    description: "Los 7 arquetipos cinematográficos y su función dramática",
    prompt: `Identifica y analiza los 7 arquetipos de Christopher Vogler en "{movieTitle}":

**1. EL HÉROE** 🦸
- Nombre y características definitorias
- Cualidades heroicas vs. defectos humanizadores
- DEFECTO FATAL: ¿Cuál es su mayor debilidad?
- Arco de transformación completo
- Momento de mayor crecimiento
- ¿Héroe voluntario o reacio?

**2. EL MENTOR** 🧙
- Identidad (puede ser persona, objeto o experiencia)
- Tipo de mentor:
  * Mentor positivo (guía sabio)
  * Mentor negativo (mal ejemplo)
  * Mentor cómico (sabiduría a través del humor)
  * Mentor caído (advierte desde el fracaso)
- Dones otorgados (físicos, conocimiento, confianza)
- Momento de aparición y desaparición
- Limitaciones del mentor

**3. EL GUARDIÁN DEL UMBRAL** 🚪
- Identificación de todos los guardianes
- Pruebas específicas que imponen
- Representación simbólica (miedos, dudas)
- Estrategias del héroe para superarlos
- Transformación de enemigo a aliado

**4. EL HERALDO** 📯
- Quién/qué trae la llamada a la aventura
- Forma del mensaje (directo, simbólico, accidental)
- Relación con el conflicto central
- Apariciones múltiples del heraldo
- Urgencia creada

**5. EL CAMALEÓN** 🎭
- Personaje(s) de lealtad ambigua
- Cambios y revelaciones
- Función dramática (crear suspenso, dudas)
- Relación romántica cambiante
- Verdadera naturaleza final

**6. LA SOMBRA** 👤
- Antagonista principal
- Representación del lado oscuro del héroe
- Poder y debilidades
- Motivaciones comprensibles
- Momento de mayor amenaza
- Derrota o redención

**7. EL EMBAUCADOR** 🃏
- Fuente de alivio cómico
- Verdades reveladas a través del humor
- Catalizador de cambio
- Desafío al status quo
- Momentos de sabiduría inesperada

**ANÁLISIS PROFUNDO:**
- Personajes que cumplen múltiples arquetipos
- Cambios de arquetipo durante la historia
- Ausencia significativa de algún arquetipo
- Arquetipos invertidos o subvertidos
- Función colectiva en la transformación del héroe`
  },
  field: {
    name: "Paradigma de Syd Field",
    author: "Syd Field",
    icon: "🎬",
    description: "Estructura clásica en tres actos con puntos de giro precisos",
    prompt: `Analiza la estructura de "{movieTitle}" según el paradigma de Syd Field:

**DATOS TÉCNICOS INICIALES:**
- Duración total: ___ minutos
- Cálculo de porcentajes para cada acto

**ACTO I - PLANTEAMIENTO (25% - aprox. ___ minutos)**

PRIMERAS 10 PÁGINAS/MINUTOS:
- Tono y género establecidos
- Protagonista presentado
- Mundo ordinario definido
- Gancho inicial

ESTABLECIMIENTO:
- Contexto dramático
- Personajes principales introducidos
- Problema central sugerido
- Atmósfera y estilo visual

PLOT POINT 1 (entre minuto ___ y ___):
- Evento exacto:
- Timestamp:
- ¿Cómo cambia la dirección de la historia?
- ¿Es una acción, decisión o revelación?
- Transición al Acto II

**ACTO II - CONFRONTACIÓN (50% - aprox. ___ minutos)**

PRIMERA MITAD DEL ACTO II:
- Obstáculos iniciales
- Desarrollo de subtramas
- Profundización de personajes

PINCH POINT 1 (37.5% - minuto ___):
- Recordatorio del antagonismo central
- Presión sobre el protagonista
- Aumento de las apuestas

PUNTO MEDIO (50% - minuto ___):
- Evento o revelación central
- Cambio de enfoque o estrategia
- Momento de verdad o falsa victoria/derrota
- División del Acto II en dos partes

SEGUNDA MITAD DEL ACTO II:
- Complicaciones crecientes
- Protagonista más proactivo
- Aceleración del ritmo

PINCH POINT 2 (62.5% - minuto ___):
- Antagonismo en su punto más fuerte
- Protagonista en su punto más bajo
- Preparación para el clímax

PLOT POINT 2 (entre minuto ___ y ___):
- Evento exacto:
- Timestamp:
- ¿Cómo prepara el clímax?
- Último elemento necesario para la resolución
- Transición al Acto III

**ACTO III - RESOLUCIÓN (25% - aprox. ___ minutos)**

PRE-CLÍMAX:
- Convergencia de todas las líneas narrativas
- Último respiro antes de la tormenta

CLÍMAX:
- Confrontación final
- Resolución del conflicto central
- Respuesta a la pregunta dramática

DÉNOUEMENT:
- Nuevo equilibrio
- Resolución de subtramas
- Estado final de personajes

IMAGEN FINAL:
- Última imagen/escena
- Contraste con imagen inicial
- Mensaje o sensación final

**ANÁLISIS DE PRECISIÓN ESTRUCTURAL:**
- ¿Se adhiere a los porcentajes de Field?
- Desviaciones significativas y su efecto
- Eficacia de los plot points
- Ritmo y pacing general
- ¿Estructura clásica o variaciones modernas?`
  },
  todorov: {
    name: "Equilibrio Narrativo",
    author: "Tzvetan Todorov",
    icon: "⚖️",
    description: "Los cinco estadios del equilibrio narrativo",
    prompt: `Aplica la teoría del equilibrio narrativo de Todorov a "{movieTitle}":

**1. EQUILIBRIO INICIAL**
- Estado de normalidad al inicio
- Armonía aparente o real
- Rutinas y relaciones establecidas
- Valores dominantes
- Potencial para el cambio latente

**2. DISRUPCIÓN DEL EQUILIBRIO**
- Evento específico disruptor
- Naturaleza de la fuerza disruptiva:
  * Externa (invasión, desastre)
  * Interna (decisión, revelación)
  * Gradual o súbita
- Primer impacto en personajes
- Resistencia inicial al cambio

**3. RECONOCIMIENTO DE LA DISRUPCIÓN**
- Momento de toma de consciencia
- ¿Quién reconoce primero el problema?
- Negación vs. aceptación
- Comprensión de las implicaciones
- Decisión de actuar

**4. INTENTO DE REPARACIÓN**
- Estrategias empleadas
- Obstáculos enfrentados
- Éxitos parciales y fracasos
- Evolución de métodos
- Sacrificios necesarios
- Alianzas formadas
- Aprendizajes del proceso

**5. NUEVO EQUILIBRIO**
- Estado final alcanzado
- Comparación con equilibrio inicial:
  * ¿Restauración completa?
  * ¿Nuevo orden diferente?
  * ¿Equilibrio mejorado o degradado?
- Cambios permanentes
- Lecciones integradas
- Potencial para futuras disrupciones

**ANÁLISIS ADICIONAL:**

CICLOS MÚLTIPLES:
- ¿Hay mini-ciclos dentro del macro-ciclo?
- Subtramas con sus propios equilibrios

VELOCIDAD DE TRANSICIÓN:
- Tiempo dedicado a cada fase
- Aceleración o desaceleración dramática

NATURALEZA DEL EQUILIBRIO:
- ¿Es el equilibrio inicial genuino o ilusorio?
- ¿El nuevo equilibrio es estable o precario?

FUERZAS EN JUEGO:
- Orden vs. Caos
- Tradición vs. Cambio
- Individual vs. Colectivo

GÉNERO Y EQUILIBRIO:
- Cómo el género afecta el tipo de equilibrio
- Expectativas subvertidas`
  },

  barthes: {
    name: "Códigos Narrativos",
    author: "Roland Barthes",
    icon: "🔤",
    description: "Los cinco códigos de significación en el texto cinematográfico",
    prompt: `Analiza "{movieTitle}" usando los cinco códigos narrativos de Roland Barthes:

**1. CÓDIGO HERMENÉUTICO (Enigmas)** 🔍
Identifica los misterios y preguntas planteadas:

ENIGMAS PRINCIPALES:
- Pregunta central de la narrativa
- Misterios secundarios
- Información deliberadamente retenida

TÉCNICAS DE SUSPENSIÓN:
- Retrasos en la revelación
- Pistas falsas (red herrings)
- Revelaciones parciales

RESOLUCIÓN:
- ¿Cuándo y cómo se resuelve cada enigma?
- ¿Quedan misterios sin resolver?
- Satisfacción de la curiosidad narrativa

**2. CÓDIGO PROAIRÉTICO (Acciones)** ⚡
Secuencias de acción y su lógica:

SECUENCIAS PRINCIPALES:
- Cadenas de causa-efecto
- Acciones que generan expectativas
- Momentos de decisión crucial

LÓGICA NARRATIVA:
- Acciones inevitables vs. sorpresivas
- Ritmo de las secuencias
- Clímax de acción

**3. CÓDIGO SÉMICO (Significados)** 💭
Connotaciones y atmósferas creadas:

CARACTERIZACIÓN:
- Rasgos que definen personajes
- Primeras impresiones vs. desarrollo
- Contradicciones significativas

ATMÓSFERA:
- Elementos que crean el tono
- Simbolismo ambiental
- Estados emocionales sugeridos

**4. CÓDIGO SIMBÓLICO (Temas profundos)** 🎭
Oposiciones binarias y temas:

ANTÍTESIS PRINCIPALES:
- Vida/Muerte
- Amor/Odio
- Orden/Caos
- Naturaleza/Civilización
- Masculino/Femenino
- Luz/Oscuridad

ELEMENTOS SIMBÓLICOS:
- Objetos con significado profundo
- Espacios simbólicos
- Transformaciones simbólicas

TEMAS UNIVERSALES:
- Arquetipos evocados
- Mitos referenciados
- Resonancias culturales

**5. CÓDIGO CULTURAL/REFERENCIAL (Conocimiento cultural)** 📚
Referencias al conocimiento compartido:

REFERENCIAS EXPLÍCITAS:
- Citas o alusiones directas
- Referencias históricas
- Contexto cultural específico

CONOCIMIENTO ASUMIDO:
- Códigos sociales implícitos
- Convenciones de género
- Expectativas culturales

INTERTEXTUALIDAD:
- Referencias a otras películas
- Ecos literarios o artísticos
- Comentario metacinematográfico

**INTERACCIÓN DE CÓDIGOS:**
- Momentos donde múltiples códigos convergen
- Tensiones entre diferentes códigos
- Código dominante en la película
- Evolución de códigos a lo largo de la narrativa

**ANÁLISIS DE ESCENA CLAVE:**
Selecciona una escena crucial y analiza cómo operan los cinco códigos simultáneamente:
- Descripción de la escena
- Código hermenéutico: ¿Qué preguntas plantea?
- Código proairético: ¿Qué acciones incluye?
- Código sémico: ¿Qué atmósfera crea?
- Código simbólico: ¿Qué opuestos enfrenta?
- Código cultural: ¿Qué conocimiento requiere?

**CONCLUSIÓN SEMIÓTICA:**
- Riqueza semiótica de la película
- Niveles de lectura posibles
- Ambigüedades productivas`
  } 
};

