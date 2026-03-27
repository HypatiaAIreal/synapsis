Necesito implementar las metodologías de la categoría "[CATEGORÍA]" para el módulo @synapsis/film-methodologies.

Tengo el documento maestro con todas las metodologías de esta categoría. Para cada metodología, crea la implementación TypeScript completa siguiendo esta estructura:

\```typescript

export const [METHODOLOGY_ID]: Methodology = {

 metadata: {

  id: '[methodology-id]',

  name: '[Nombre Completo]',

  author: '[Autor(es)]',

  year: [año],

  category: '[category-id]',

  complexity: '[basic|intermediate|advanced|expert]',

  timeToLearn: [horas],

  prerequisities: [array de IDs],

  culturalContext: '[contexto]',

  language: 'es'

 },

 

 description: `[Descripción de 200-300 palabras del documento]`,

 

 keyConcepts: [

  {

   term: '[Término]',

   definition: '[Definición]',

   importance: '[fundamental|important|supplementary]',

   relatedTerms: [array]

  },

  // más conceptos...

 ],

 

 applicationProcess: [

  {

   order: 1,

   name: '[Nombre del paso]',

   description: '[Descripción detallada]',

   timeEstimate: [minutos],

   difficulty: '[complexity level]',

   tips: [array de tips],

   commonMistakes: [array de errores comunes]

  },

  // más pasos...

 ],

 

 strengths: [array de fortalezas],

 

 limitations: [array de limitaciones],

 

 bibliography: [

  {

   type: '[book|article|film|web|thesis]',

   authors: [array de autores],

   title: '[Título]',

   year: [año],

   publisher: '[Editorial]',

   journal: '[Revista si aplica]',

   url: '[URL si aplica]',

   pages: '[páginas]',

   essential: [true|false]

  },

  // más bibliografía...

 ],

 

 examples: [

  {

   film: {

​    title: '[Título]',

​    year: [año],

​    director: '[Director]'

   },

   analysisExcerpt: `[Extracto del análisis]`,

   insightsGenerated: [array de insights],

   methodologyApplication: '[Cómo se aplicó]',

   keyFindings: [array de hallazgos]

  },

  // más ejemplos...

 ],

 

 relatedMethodologies: [

  {

   id: '[related-id]',

   relationshipType: '[complementary|dialectical|synthetic|parallel|hierarchical]',

   synergyDescription: '[Descripción de la sinergia]',

   combinedInsightPotential: [0-10]

  },

  // más relaciones...

 ],

 

 digitalTools: [

  {

   name: '[Nombre]',

   type: '[software|webapp|library|framework]',

   url: '[URL]',

   description: '[Descripción]',

   cost: '[free|freemium|paid]',

   platforms: [array de plataformas]

  },

  // más herramientas...

 ]

};

\```