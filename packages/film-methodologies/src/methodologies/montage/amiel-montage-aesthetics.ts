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

export const AMIEL_MONTAGE_AESTHETICS: Methodology = {
  metadata: {
    id: 'amiel-montage-aesthetics',
    name: 'Estética del Montaje',
    author: 'Vincent Amiel',
    year: 2001,
    category: 'montage',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['film-aesthetics', 'contemporary-cinema'],
    culturalContext: 'Teoría francesa contemporánea',
    language: 'es'
  },
  
  description: `Vincent Amiel propone una estética del montaje que distingue entre tres regímenes fundamentales: montaje-narrativo (que cuenta), montaje-discursivo (que argumenta) y montaje-correspondencia (que asocia poéticamente). Su teoría examina cómo el montaje contemporáneo ha evolucionado más allá de funciones puramente narrativas o ideológicas hacia formas más abiertas y asociativas. Amiel analiza el "montaje flotante" del cine moderno donde las conexiones entre planos son sugestivas más que determinantes. Su concepto de "montaje-pensamiento" explora cómo ciertos cineastas usan el corte como forma de reflexión filosófica. Su trabajo sobre el montaje en la era digital examina cómo las nuevas tecnologías permiten formas híbridas que combinan los tres regímenes.`,
  
  keyConcepts: [
    {
      term: 'Montaje-Narrativo',
      definition: 'Función de contar historias, hacer progresar la acción',
      importance: 'fundamental',
      relatedTerms: ['narración', 'progresión', 'causalidad']
    },
    {
      term: 'Montaje-Discursivo',
      definition: 'Función argumentativa, desarrollar ideas o tesis',
      importance: 'fundamental',
      relatedTerms: ['argumento', 'discurso', 'retórica']
    },
    {
      term: 'Montaje-Correspondencia',
      definition: 'Asociaciones poéticas libres entre imágenes',
      importance: 'fundamental',
      relatedTerms: ['poesía', 'asociación', 'correspondencia']
    },
    {
      term: 'Montaje Flotante',
      definition: 'Conexiones sugestivas indeterminadas entre planos',
      importance: 'important',
      relatedTerms: ['sugestión', 'ambigüedad', 'apertura']
    },
    {
      term: 'Montaje-Pensamiento',
      definition: 'El corte como forma de reflexión filosófica',
      importance: 'important',
      relatedTerms: ['filosofía', 'reflexión', 'pensamiento']
    },
    {
      term: 'Montaje-Sensación',
      definition: 'Transmisión de experiencias sensoriales mediante cortes',
      importance: 'important',
      relatedTerms: ['sensación', 'experiencia', 'sensorialidad']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del régimen dominante',
      description: 'Determinar si predomina narrativo/discursivo/correspondencia',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Un film puede mezclar los tres regímenes',
        'Buscar el modo organizador principal',
        'Atender a momentos de cambio de régimen'
      ],
      commonMistakes: [
        'Pensar que son categorías excluyentes',
        'Ignorar hibridaciones sutiles'
      ]
    },
    {
      order: 2,
      name: 'Búsqueda de hibridaciones',
      description: 'Identificar mezclas y transiciones entre regímenes',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Los momentos más interesantes son híbridos',
        'Buscar dónde la narración se vuelve poética',
        'Notar cuándo el discurso se narrativiza'
      ]
    },
    {
      order: 3,
      name: 'Análisis de montaje flotante',
      description: 'Examinar conexiones sugestivas e indeterminadas',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar cortes que no explican sino sugieren',
        'Identificar ambigüedades productivas',
        'Notar espacios interpretativos abiertos'
      ]
    },
    {
      order: 4,
      name: 'Examen de montaje-pensamiento',
      description: 'Identificar reflexión filosófica mediante cortes',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'El corte puede ser una forma de pensar',
        'Buscar momentos donde el montaje filosofa',
        'Atender a pausas reflexivas'
      ]
    },
    {
      order: 5,
      name: 'Identificación de montaje-sensación',
      description: 'Detectar transmisión de experiencias sensoriales',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Búsqueda de aperturas',
      description: 'Localizar indeterminaciones productivas',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 7,
      name: 'Análisis de dimensión estética',
      description: 'Evaluar montaje como arte más allá de función',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 8,
      name: 'Evaluación poética total',
      description: 'Comprender sistema completo de correspondencias',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Marco teórico elegante y flexible',
    'Atiende dimensión artística del montaje',
    'Perfectamente adaptado al cine contemporáneo',
    'Incluye desarrollos digitales',
    'Aplicabilidad amplia a diversos estilos',
    'Valoriza experimentación y poesía visual'
  ],
  
  limitations: [
    'Menos conocido internacionalmente',
    'Categorías pueden ser imprecisas',
    'Fronteras permeables entre regímenes',
    'Sesgo hacia cine de arte y ensayo',
    'Menos sistemático que otros enfoques',
    'Requiere sensibilidad estética desarrollada'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Vincent Amiel'],
      title: 'Esthétique du montage',
      year: 2001,
      publisher: 'Nathan',
      essential: true
    },
    {
      type: 'book',
      authors: ['Vincent Amiel'],
      title: 'Esthétique du montage (2e édition)',
      year: 2010,
      publisher: 'Armand Colin',
      essential: true
    },
    {
      type: 'book',
      authors: ['Vincent Amiel'],
      title: 'Le Corps au cinéma: Keaton, Bresson, Cassavetes',
      year: 2007,
      publisher: 'PUF',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'In the Mood for Love',
        year: 2000,
        director: 'Wong Kar-wai'
      },
      analysisExcerpt: `Wong Kar-wai ejemplifica el montaje-correspondencia llevado a la perfección. Las conexiones entre planos son más musicales que narrativas. Montaje flotante entre deseo y represión: cortes que sugieren sin afirmar. Correspondencias: lluvia/lágrimas, pasillos/laberintos emocionales, relojes/tiempo perdido. Montaje-sensación: la textura del deseo no consumado. Momentos de montaje-pensamiento sobre la memoria y el arrepentimiento. La narración existe pero disuelta en pura estética. Cada corte es una pincelada en un cuadro impresionista del anhelo.`,
      insightsGenerated: [
        'El montaje-correspondencia puede estructurar un film entero',
        'La sensación puede ser más importante que la información',
        'El montaje flotante crea espacios para el espectador'
      ],
      methodologyApplication: 'Predominio del montaje-correspondencia con elementos flotantes',
      keyFindings: [
        'Los tres regímenes pueden fundirse orgánicamente',
        'La estética pura del montaje puede ser narrativa',
        'El cine contemporáneo privilegia la sugestión'
      ]
    },
    {
      film: {
        title: 'The Tree of Life',
        year: 2011,
        director: 'Terrence Malick'
      },
      analysisExcerpt: `Malick fusiona magistralmente los tres regímenes. Montaje-narrativo: historia familiar en Texas. Montaje-discursivo: meditación sobre gracia vs. naturaleza. Montaje-correspondencia: cosmos/infancia, dinosaurios/hermanos. Constante flotación entre memoria/presente/eternidad. Montaje-pensamiento puro: el corte como pregunta metafísica. Montaje-sensación: texturas de infancia recuperadas. Las secuencias cósmicas funcionan como correspondencias expandidas. Hibridación total donde narrativa, discurso y poesía son indistinguibles.`,
      insightsGenerated: [
        'Los tres regímenes pueden operar simultáneamente',
        'El montaje-pensamiento puede abarcar lo cósmico',
        'La hibridación crea nuevas posibilidades expresivas'
      ],
      methodologyApplication: 'Síntesis perfecta de los tres regímenes de montaje',
      keyFindings: [
        'Amiel anticipa evolución del cine contemplativo',
        'El montaje puede ser simultáneamente todo',
        'La estética del montaje define el cine como arte'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'deleuze-time-image',
      relationshipType: 'complementary',
      synergyDescription: 'Deleuze teoriza filosóficamente lo que Amiel categoriza estéticamente',
      combinedInsightPotential: 9
    },
    {
      id: 'tarkovsky-time-sculpting',
      relationshipType: 'synthetic',
      synergyDescription: 'Ambos privilegian dimensión poética sobre funcional',
      combinedInsightPotential: 8
    },
    {
      id: 'contemporary-film-theory',
      relationshipType: 'complementary',
      synergyDescription: 'Amiel sintetiza tendencias del cine contemporáneo',
      combinedInsightPotential: 8
    }
  ]
};
