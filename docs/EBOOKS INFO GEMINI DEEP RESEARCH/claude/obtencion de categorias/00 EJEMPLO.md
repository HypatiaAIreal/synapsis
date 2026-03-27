EJEMPLO:

export const PROPP_FUNCTIONS: Methodology = {

 metadata: {

  id: 'propp-functions',

  name: 'Las 31 Funciones de Propp',

  author: 'Vladimir Propp',

  year: 1928,

  category: 'structural-narratological',

  complexity: 'intermediate',

  timeToLearn: 20,

  prerequisities: [],

  culturalContext: 'Formalismo ruso',

  language: 'es'

 },

 

 description: `Vladimir Propp revolucionó el análisis narrativo con su estudio morfológico del cuento folklórico ruso. Identificó 31 funciones narrativas que aparecen en un orden específico, aunque no todas deben estar presentes en cada relato. Esta metodología revela la estructura profunda compartida por narrativas aparentemente diversas, demostrando que bajo la superficie de innumerables historias existe un número limitado de funciones que los personajes pueden realizar. Su aplicación al cine permite identificar patrones universales en la construcción narrativa, especialmente útil en géneros como fantasía, aventura y cine de superhéroes donde los arquetipos son más evidentes.`,

 

 keyConcepts: [

  {

   term: 'Función',

   definition: 'Acción de un personaje definida desde el punto de vista de su significación en el desarrollo de la intriga',

   importance: 'fundamental',

   relatedTerms: ['esfera de acción', 'secuencia narrativa']

  },

  {

   term: 'Esfera de acción',

   definition: 'Conjunto de funciones agrupadas lógicamente que corresponden a un tipo de personaje',

   importance: 'fundamental',

   relatedTerms: ['agresor', 'donante', 'auxiliar', 'princesa', 'mandatario', 'héroe', 'falso héroe']

  },

  {

   term: 'Situación inicial',

   definition: 'Elemento morfológico que precede a las funciones y presenta a los personajes',

   importance: 'important'

  },

  {

   term: 'Secuencia',

   definition: 'Serie de funciones que forma una unidad narrativa completa',

   importance: 'important',

   relatedTerms: ['movimiento narrativo', 'desarrollo']

  }

 ],

 

 applicationProcess: [

  {

   order: 1,

   name: 'Segmentación del relato',

   description: 'Dividir la película en unidades narrativas significativas, identificando los momentos clave de cambio',

   timeEstimate: 30,

   difficulty: 'basic',

   tips: [

​    'Enfocarse en acciones que cambian el estado de la narrativa',

​    'Ignorar escenas puramente descriptivas o atmosféricas'

   ],

   commonMistakes: [

​    'Confundir acciones secundarias con funciones principales',

​    'Segmentar demasiado fino perdiendo la visión estructural'

   ]

  },

  {

   order: 2,

   name: 'Identificación de funciones',

   description: 'Examinar cada segmento para identificar cuál de las 31 funciones está presente',

   timeEstimate: 90,

   difficulty: 'intermediate',

   tips: [

​    'Una acción puede parecer diferente en superficie pero cumplir la misma función',

​    'No todas las funciones estarán presentes',

​    'El orden de las funciones es más importante que su presencia'

   ]

  },

  {

   order: 3,

   name: 'Mapeo de esferas de acción',

   description: 'Identificar qué personaje cumple cada rol funcional',

   timeEstimate: 45,

   difficulty: 'intermediate',

   tips: [

​    'Un personaje puede cumplir múltiples roles',

​    'Los roles pueden transferirse entre personajes'

   ]

  },

  {

   order: 4,

   name: 'Análisis de secuencias',

   description: 'Identificar las secuencias narrativas completas y sus interrelaciones',

   timeEstimate: 60,

   difficulty: 'advanced',

   tips: [

​    'Buscar patrones de repetición y variación',

​    'Analizar cómo se entrelazan múltiples secuencias'

   ]

  },

  {

   order: 5,

   name: 'Síntesis interpretativa',

   description: 'Interpretar qué revela la estructura sobre los temas y significados de la película',

   timeEstimate: 45,

   difficulty: 'advanced'

  }

 ],

 

 strengths: [

  'Revela estructuras narrativas universales',

  'Método sistemático y replicable',

  'Excelente para análisis comparativo entre films',

  'Identifica arquetipos narrativos fundamentales',

  'Base sólida para análisis estructural'

 ],

 

 limitations: [

  'Desarrollada para cuentos folklóricos, no específicamente para cine',

  'Puede resultar rígida para narrativas contemporáneas complejas',

  'Enfoque exclusivo en acciones, ignora aspectos psicológicos',

  'Dificultad con narrativas no lineales o experimentales',

  'Sesgo cultural hacia narrativas occidentales tradicionales'

 ],

 

 bibliography: [

  {

   type: 'book',

   authors: ['Vladimir Propp'],

   title: 'Morfología del cuento',

   year: 1928,

   publisher: 'Academia',

   essential: true

  },

  {

   type: 'book',

   authors: ['Vladimir Propp'],

   title: 'Las raíces históricas del cuento',

   year: 1946,

   publisher: 'Fundamentos',

   essential: false

  },

  {

   type: 'article',

   authors: ['David Bordwell'],

   title: 'ApProppriations and ImPropprieties: Problems in the Morphology of Film Narrative',

   year: 1988,

   journal: 'Cinema Journal',

   pages: '5-20',

   essential: true

  }

 ],

 

 examples: [

  {

   film: {

​    title: 'Star Wars: Episode IV - A New Hope',

​    year: 1977,

​    director: 'George Lucas'

   },

   analysisExcerpt: `La película sigue casi perfectamente el esquema de Propp: (1) Situación inicial: Luke en Tatooine; (8) Fechoría: El Imperio captura a Leia; (9) Mediación: R2-D2 trae el mensaje; (11) Partida: Luke deja Tatooine; (12) Primera función del donante: Obi-Wan entrena a Luke; (14) Recepción del objeto mágico: Luke recibe el sable de luz; (16) Combate: Ataque a la Estrella de la Muerte; (18) Victoria: Destrucción de la Estrella de la Muerte; (20) Vuelta: Ceremonia de premiación.`,

   insightsGenerated: [

​    'Star Wars reactualiza conscientemente el monomito usando la estructura de Propp',

​    'La "princesa" Leia subvierte parcialmente su rol tradicional',

​    'La Fuerza funciona como elemento mágico modernizado'

   ],

   methodologyApplication: 'Identificación directa de 15 de las 31 funciones en orden canónico',

   keyFindings: [

​    'Perfecta correspondencia con el modelo de cuento maravilloso',

​    'Modernización de elementos mágicos mediante ciencia ficción',

​    'Doble secuencia narrativa: rescate + destrucción'

   ]

  },

  {

   film: {

​    title: 'The Matrix',

​    year: 1999,

​    director: 'The Wachowskis'

   },

   analysisExcerpt: `Neo sigue el patrón de Propp con variaciones cyberpunk: (1) Situación inicial: Neo como hacker; (2-3) Prohibición/Transgresión: "Sigue al conejo blanco"; (8) Carencia: Falta de conocimiento sobre la realidad; (9) Mediación: Trinity lo contacta; (12) Donante: Morfeo ofrece las píldoras; (14) Objeto mágico: Habilidades de combate descargadas; (15) Desplazamiento: Entrada a Matrix; (16-18) Combate y Victoria: Enfrentamiento con Smith; (29) Transfiguración: Neo como "El Elegido"; (31) Recompensa: Control sobre Matrix.`,

   insightsGenerated: [

​    'La estructura de Propp funciona en narrativas de realidad virtual',

​    'El "objeto mágico" se reconceptualiza como información/código',

​    'La transfiguración es literal: cambio en la percepción de la realidad'

   ],

   methodologyApplication: 'Adaptación de funciones tradicionales a contexto tecnológico',

   keyFindings: [

​    'Propp aplicable a ciencia ficción contemporánea',

​    'Las funciones mantienen su poder estructural en nuevos contextos',

​    'La "magia" se recodifica como tecnología'

   ]

  }

 ],

 

 relatedMethodologies: [

  {

   id: 'greimas-actantial',

   relationshipType: 'synthetic',

   synergyDescription: 'Greimas desarrolló el modelo actancial basándose en las esferas de acción de Propp, creando un modelo más abstracto y flexible',

   combinedInsightPotential: 8

  },

  {

   id: 'campbell-hero-journey',

   relationshipType: 'complementary',

   synergyDescription: 'Ambos identifican patrones universales pero Campbell enfatiza la transformación psicológica mientras Propp se centra en acciones',

   combinedInsightPotential: 9

  },

  {

   id: 'barthes-narrative-codes',

   relationshipType: 'dialectical',

   synergyDescription: 'Barthes critica la rigidez estructural de Propp proponiendo una lectura más abierta y múltiple',

   combinedInsightPotential: 7

  }

 ],

 

 digitalTools: [

  {

   name: 'Propp Story Generator',

   type: 'webapp',

   url: 'https://proppgenerator.com',

   description: 'Generador interactivo de historias basado en las 31 funciones',

   cost: 'free',

   platforms: ['web']

  },

  {

   name: 'Narrative Function Analyzer',

   type: 'software',

   description: 'Software para mapear funciones de Propp en guiones',

   cost: 'paid',

   platforms: ['Windows', 'Mac']

  }

 ]

};