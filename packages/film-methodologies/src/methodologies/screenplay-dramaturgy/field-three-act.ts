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

export const FIELD_THREE_ACT: Methodology = {
  metadata: {
    id: 'field-three-act',
    name: 'Paradigma de los Tres Actos',
    author: 'Syd Field',
    year: 1979,
    category: 'screenplay-dramaturgy',
    complexity: 'basic',
    timeToLearn: 15,
    prerequisities: [],
    culturalContext: 'Estructura clásica de Hollywood',
    language: 'es'
  },
  
  description: `Syd Field revolucionó la enseñanza de escritura de guiones al articular el "paradigma" de la estructura en tres actos que se convirtió en el estándar de Hollywood. Su modelo divide un guión de 120 páginas en: Acto I (Planteamiento, 25%), Acto II (Confrontación, 50%), y Acto III (Resolución, 25%), unidos por dos puntos de giro en las páginas 25-27 y 85-90. Field introdujo conceptos como el incidente incitante (página 10), el punto medio (página 60), y la importancia de las primeras 10 páginas. Su enfoque práctico y cuantitativo democratizó la escritura de guiones, proporcionando una plantilla clara que los escritores podían seguir. Field enfatizó que la estructura no es una fórmula sino una forma de organizar la información dramática.`,
  
  keyConcepts: [
    {
      term: 'Tres Actos',
      definition: 'Planteamiento (25%), Confrontación (50%), Resolución (25%) de la historia',
      importance: 'fundamental',
      relatedTerms: ['estructura', 'proporción narrativa']
    },
    {
      term: 'Plot Points',
      definition: 'Eventos que giran la historia en nueva dirección al final de Actos I y II',
      importance: 'fundamental',
      relatedTerms: ['puntos de giro', 'cambio direccional']
    },
    {
      term: 'Incidente Incitante',
      definition: 'Evento que inicia la historia, típicamente en página 10',
      importance: 'fundamental',
      relatedTerms: ['catalizador', 'detonante']
    },
    {
      term: 'Punto Medio',
      definition: 'Evento en página 60 que cambia la dirección del Acto II',
      importance: 'important',
      relatedTerms: ['midpoint', 'giro central']
    },
    {
      term: 'Setup/Payoff',
      definition: 'Plantear elementos que tendrán importancia posterior',
      importance: 'important',
      relatedTerms: ['plante y pago', 'preparación']
    },
    {
      term: 'Las 10 Primeras Páginas',
      definition: 'Sección crucial para establecer tono, género, personajes y premisa',
      importance: 'important',
      relatedTerms: ['gancho', 'establecimiento']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'División en actos',
      description: 'Dividir el guión en proporciones 30-60-30 páginas',
      timeEstimate: 20,
      difficulty: 'basic',
      tips: [
        'Acto I: páginas 1-30 (establecimiento)',
        'Acto II: páginas 30-90 (desarrollo del conflicto)',
        'Acto III: páginas 90-120 (resolución)'
      ],
      commonMistakes: [
        'Hacer el Acto I demasiado largo',
        'No dividir el Acto II en dos mitades'
      ]
    },
    {
      order: 2,
      name: 'Identificación de plot points',
      description: 'Localizar los eventos en páginas 25-27 y 85-90',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Deben ser eventos, no revelaciones internas',
        'Deben cambiar la dirección de la historia',
        'Deben ser dramáticos y visuales'
      ]
    },
    {
      order: 3,
      name: 'Localización del incidente incitante',
      description: 'Encontrar el evento alrededor de página 10',
      timeEstimate: 15,
      difficulty: 'basic',
      tips: [
        'Es el verdadero inicio de la historia',
        'Rompe el equilibrio establecido',
        'Debe ocurrir antes de página 15'
      ]
    },
    {
      order: 4,
      name: 'Análisis del punto medio',
      description: 'Identificar el evento en página 60',
      timeEstimate: 20,
      difficulty: 'intermediate',
      tips: [
        'Divide el Acto II en dos partes',
        'Cambia la aproximación del protagonista',
        'Aumenta las apuestas'
      ]
    },
    {
      order: 5,
      name: 'Verificación de setup/payoff',
      description: 'Rastrear elementos plantados y sus pagos',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Todo setup debe tener payoff',
        'Los payoffs deben estar preparados',
        'Evitar deus ex machina'
      ]
    },
    {
      order: 6,
      name: 'Evaluación de las primeras 10 páginas',
      description: 'Analizar efectividad del establecimiento inicial',
      timeEstimate: 30,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Claridad y simplicidad del modelo',
    'Estándar ampliamente aceptado en la industria',
    'Fácil de aprender y aplicar para principiantes',
    'Proporciona disciplina estructural clara',
    'Base sólida para otros métodos más complejos',
    'Cuantificable y medible para revisión'
  ],
  
  limitations: [
    'Puede resultar mecánica y formulaica',
    'No funciona para todas las historias o géneros',
    'Sesgo hacia cine comercial americano',
    'Ignora narrativas no lineales o experimentales',
    'Puede limitar la creatividad si se aplica rígidamente',
    'Simplifica la complejidad narrativa'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Syd Field'],
      title: 'Screenplay: The Foundations of Screenwriting',
      year: 1979,
      publisher: 'Dell Publishing',
      essential: true
    },
    {
      type: 'book',
      authors: ['Syd Field'],
      title: 'The Screenwriter\'s Workbook',
      year: 1984,
      publisher: 'Dell Publishing',
      essential: true
    },
    {
      type: 'book',
      authors: ['Syd Field'],
      title: 'Four Screenplays: Studies in the American Screenplay',
      year: 1994,
      publisher: 'Dell Publishing',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Thelma & Louise',
        year: 1991,
        director: 'Ridley Scott'
      },
      analysisExcerpt: `Field frecuentemente usa Thelma & Louise como ejemplo perfecto. Acto I: Establecimiento de vidas ordinarias insatisfactorias. Incidente incitante (p.10): Decisión de escapada de fin de semana. Plot Point 1 (p.25): El disparo en el estacionamiento cambia todo. Acto II primera mitad: Huida inicial y adaptación. Punto Medio (p.60): Robo al banco, transformación de víctimas a agentes. Acto II segunda mitad: Persecución intensificada. Plot Point 2 (p.85): Rodeadas por la policía. Acto III: Decisión final y vuelo hacia la libertad.`,
      insightsGenerated: [
        'Los plot points son literalmente puntos de no retorno',
        'El punto medio marca transformación de personajes',
        'La estructura soporta un arco de empoderamiento'
      ],
      methodologyApplication: 'Aplicación exacta del paradigma con timing perfecto',
      keyFindings: [
        'Field efectivo para road movies con arco transformacional',
        'Los plot points pueden ser acciones impulsivas con consecuencias',
        'La estructura clásica puede contener temas radicales'
      ]
    },
    {
      film: {
        title: 'The Shawshank Redemption',
        year: 1994,
        director: 'Frank Darabont'
      },
      analysisExcerpt: `Estructura clásica en contexto carcelario. Acto I: Andy llega a Shawshank, establecimiento del mundo carcelario. Incidente incitante: Paliza de las "hermanas". Plot Point 1: Andy se ofrece a ayudar con los impuestos del guardia. Acto II primera mitad: Andy gana respeto y posición. Punto medio: Expansión de la biblioteca, Andy encuentra propósito. Acto II segunda mitad: Plan de escape en marcha. Plot Point 2: Tommy asesinado, Andy decide escapar. Acto III: Escape y redención.`,
      insightsGenerated: [
        'La estructura funciona incluso en narrativas de largo plazo',
        'Los plot points pueden ser decisiones internas con consecuencias externas',
        'El paradigma flexible para diferentes ritmos narrativos'
      ],
      methodologyApplication: 'Adaptación del paradigma a narrativa extendida temporalmente',
      keyFindings: [
        'Field aplicable a historias que cubren años',
        'Los actos pueden contener múltiples mini-arcos',
        'La paciencia narrativa no contradice la estructura'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'snyder-save-cat',
      relationshipType: 'complementary',
      synergyDescription: 'Snyder subdivide y especifica más detalladamente el paradigma de Field',
      combinedInsightPotential: 8
    },
    {
      id: 'aristotle-poetics',
      relationshipType: 'complementary',
      synergyDescription: 'Field moderniza la estructura aristotélica básica',
      combinedInsightPotential: 7
    },
    {
      id: 'freytag-pyramid',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos dividen en actos pero con énfasis diferentes',
      combinedInsightPotential: 7
    }
  ],
  
  digitalTools: [
    {
      name: 'WriterDuet',
      type: 'software',
      url: 'https://writerduet.com',
      description: 'Software de escritura con plantillas del paradigma de Field',
      cost: 'freemium',
      platforms: ['web', 'Windows', 'Mac']
    },
    {
      name: 'Final Draft',
      type: 'software',
      description: 'Estándar de la industria con herramientas de estructura',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    }
  ]
};
