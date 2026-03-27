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

export const METZ_IMAGINARY_SIGNIFIER: Methodology = {
  metadata: {
    id: 'metz-imaginary-signifier',
    name: 'El Significante Imaginario',
    author: 'Christian Metz',
    year: 1977,
    category: 'psychoanalytic',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['semiotics', 'lacan-gaze-mirror'],
    culturalContext: 'Psicosemiótica francesa',
    language: 'es'
  },
  
  description: `Christian Metz fue pionero en aplicar sistemáticamente el psicoanálisis a la semiótica del cine, creando una teoría comprehensiva sobre cómo el cine produce significado y placer. Su concepto del "significante imaginario" describe cómo el cine, a diferencia de otras artes, presenta ausencias (los actores no están realmente presentes) como presencias, creando una experiencia única de presencia-en-ausencia. Metz analizó los mecanismos psicológicos específicos del dispositivo cinematográfico: la identificación primaria con la cámara, el voyeurismo institucionalizado, el fetichismo de la técnica, y la regresión a estados infantiles. Su trabajo distingue entre el régimen escópico del cine y otras artes visuales.`,
  
  keyConcepts: [
    {
      term: 'Significante Imaginario',
      definition: 'El cine como presencia de una ausencia, pura percepción sin objeto real',
      importance: 'fundamental',
      relatedTerms: ['presencia-ausencia', 'percepción sin objeto']
    },
    {
      term: 'Identificación Primaria',
      definition: 'Identificación con el acto de percepción/cámara, no con personajes',
      importance: 'fundamental',
      relatedTerms: ['identificación cinematográfica', 'sujeto-cámara']
    },
    {
      term: 'Régimen Escópico',
      definition: 'Sistema de ver sin ser visto específico del cine',
      importance: 'fundamental',
      relatedTerms: ['voyeurismo institucional', 'mirada unidireccional']
    },
    {
      term: 'Voyeurismo/Exhibicionismo',
      definition: 'Placeres perversos institucionalizados por el dispositivo cinematográfico',
      importance: 'important',
      relatedTerms: ['escopofilia', 'placer visual']
    },
    {
      term: 'Fetichismo Cinematográfico',
      definition: 'La técnica como defensa contra la ausencia del objeto',
      importance: 'important',
      relatedTerms: ['fetiche técnico', 'defensa perceptual']
    },
    {
      term: 'Estado Fílmico',
      definition: 'Regresión psíquica del espectador similar al sueño',
      importance: 'important',
      relatedTerms: ['estado onírico', 'regresión espectatorial']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis del dispositivo cinematográfico',
      description: 'Examinar las condiciones materiales de visionado',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Considerar sala oscura, inmovilidad, proyección',
        'Analizar cómo estas condiciones afectan la psique',
        'Comparar con otros dispositivos artísticos'
      ],
      commonMistakes: [
        'Ignorar las condiciones materiales de recepción',
        'No distinguir entre tipos de identificación'
      ]
    },
    {
      order: 2,
      name: 'Identificación de tipos de identificación',
      description: 'Distinguir entre identificación primaria y secundaria',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Primaria: con el acto de ver/cámara',
        'Secundaria: con personajes específicos',
        'La primaria es condición de la secundaria'
      ]
    },
    {
      order: 3,
      name: 'Examen del régimen escópico',
      description: 'Analizar la estructura del mirar cinematográfico',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'El espectador ve sin ser visto',
        'Los actores exhiben sin ver al espectador',
        'La cámara media esta relación imposible'
      ]
    },
    {
      order: 4,
      name: 'Búsqueda de mecanismos voyeuristas',
      description: 'Identificar cómo el film explota el placer de mirar',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Escenas de observación secreta',
        'Uso del punto de vista para implicar al espectador',
        'Momentos de intimidad "robada"'
      ]
    },
    {
      order: 5,
      name: 'Análisis del fetichismo técnico',
      description: 'Examinar fascinación con el aparato cinematográfico',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Énfasis en efectos especiales',
        'Virtuosismo técnico como fin en sí',
        'La técnica como defensa contra la falta'
      ]
    },
    {
      order: 6,
      name: 'Evaluación del estado fílmico',
      description: 'Analizar la regresión psíquica del espectador',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Específico al medio cinematográfico',
    'Integra semiótica y psicoanálisis sistemáticamente',
    'Explica el placer cinematográfico específico',
    'Analiza el dispositivo técnico-psíquico',
    'Base teórica para estudios posteriores',
    'Considera aspectos materiales y psíquicos'
  ],
  
  limitations: [
    'Extremadamente técnico y denso',
    'Ignora diferencias culturales en recepción',
    'Modelo de espectador pasivo',
    'Sesgo hacia cine narrativo clásico',
    'Poco aplicable a nuevos medios digitales',
    'Determinismo tecnológico'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Christian Metz'],
      title: 'The Imaginary Signifier: Psychoanalysis and the Cinema',
      year: 1982,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Christian Metz'],
      title: 'Film Language: A Semiotics of the Cinema',
      year: 1974,
      publisher: 'University of Chicago Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Christian Metz'],
      title: 'Language and Cinema',
      year: 1974,
      publisher: 'Mouton',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Peeping Tom',
        year: 1960,
        director: 'Michael Powell'
      },
      analysisExcerpt: `Peeping Tom es una reflexión metacinematográfica sobre las teorías de Metz. Mark literaliza la identificación primaria: su cámara es extensión de su ojo, instrumento de placer y muerte. El film expone el voyeurismo inherente del cine: Mark filma a sus víctimas muriendo, nosotros miramos a Mark filmar. El fetichismo técnico es explícito: Mark obsesionado con su equipo, la cámara como objeto transicional. El significante imaginario se tematiza: las víctimas ven su propia muerte filmada, presencia de su futura ausencia. El dispositivo cinematográfico se revela como máquina de placer sádico.`,
      insightsGenerated: [
        'El cine reflexivo expone sus propios mecanismos psíquicos',
        'La cámara puede ser simultáneamente ojo y arma',
        'El espectador es cómplice estructural del voyeur'
      ],
      methodologyApplication: 'Análisis de la reflexividad sobre el dispositivo cinematográfico',
      keyFindings: [
        'Powell anticipa las teorías de Metz intuitivamente',
        'El horror puede emerger de la estructura misma del cine',
        'La identificación primaria puede ser perturbadora'
      ]
    },
    {
      film: {
        title: 'Cinema Paradiso',
        year: 1988,
        director: 'Giuseppe Tornatore'
      },
      analysisExcerpt: `Cinema Paradiso nostálgicamente celebra el dispositivo cinematográfico que Metz analiza. La sala de cine como espacio de regresión infantil es literal: Totò crece en el cine. La identificación primaria se muestra en los rostros del público absorbidos. El proyeccionista Alfredo encarna la mediación técnica entre film y espectador. La censura de escenas románticas revela el cine como máquina de deseo frustrado. El montaje final de besos censurados es puro significante imaginario: presencias acumuladas de placeres ausentes. El film es elegía al estado fílmico clásico.`,
      insightsGenerated: [
        'La nostalgia cinematográfica es nostalgia del dispositivo',
        'El cine como experiencia colectiva de regresión',
        'El placer diferido puede ser más intenso'
      ],
      methodologyApplication: 'Celebración nostálgica del dispositivo que Metz deconstruye',
      keyFindings: [
        'El dispositivo cinematográfico genera afecto profundo',
        'La identificación primaria puede ser placentera y formativa',
        'El significante imaginario crea memoria afectiva duradera'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'baudry-apparatus',
      relationshipType: 'parallel',
      synergyDescription: 'Baudry y Metz desarrollaron teorías complementarias del dispositivo',
      combinedInsightPotential: 9
    },
    {
      id: 'lacan-gaze-mirror',
      relationshipType: 'complementary',
      synergyDescription: 'Metz aplica conceptos lacanianos específicamente al cine',
      combinedInsightPotential: 9
    },
    {
      id: 'mulvey-male-gaze',
      relationshipType: 'complementary',
      synergyDescription: 'Mulvey critica y expande Metz desde perspectiva feminista',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Dispositif Analyzer',
      type: 'framework',
      description: 'Marco para analizar dispositivos cinematográficos',
      cost: 'free',
      platforms: ['academic']
    },
    {
      name: 'Spectatorship Studies Database',
      type: 'webapp',
      description: 'Recursos sobre teorías de espectatorialidad',
      cost: 'paid',
      platforms: ['web']
    }
  ]
};
