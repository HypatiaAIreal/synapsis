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

export const EGRI_DRAMATIC_WRITING: Methodology = {
  metadata: {
    id: 'egri-dramatic-writing',
    name: 'Arte de la Escritura Dramática',
    author: 'Lajos Egri',
    year: 1946,
    category: 'screenplay-dramaturgy',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['basic-playwriting'],
    culturalContext: 'Teoría dramática europea-americana',
    language: 'es'
  },
  
  description: `Lajos Egri, dramaturgo y teórico húngaro-americano, revolucionó la escritura dramática con su concepto de "premisa" - una declaración que contiene personaje, conflicto y resolución en forma de tesis que la obra probará. Su teoría sostiene que toda gran obra dramática parte de una premisa clara (por ejemplo, "Los celos ciegos conducen a la destrucción" para Otelo) que el escritor debe "probar" a través de la acción dramática. Egri enfatizó la construcción tridimensional de personajes (fisiológica, sociológica, psicológica) argumentando que el personaje, no la trama, debe impulsar la historia. Su método de "conflicto en crescendo" establece que cada escena debe intensificar el conflicto anterior hasta alcanzar un clímax inevitable.`,
  
  keyConcepts: [
    {
      term: 'Premisa',
      definition: 'Tesis que la obra prueba dramáticamente a través de la acción',
      importance: 'fundamental',
      relatedTerms: ['tesis dramática', 'proposición']
    },
    {
      term: 'Personaje Tridimensional',
      definition: 'Construcción completa: Dimensión Fisiológica (física), Sociológica (entorno), Psicológica (mental)',
      importance: 'fundamental',
      relatedTerms: ['caracterización completa', 'profundidad de personaje']
    },
    {
      term: 'Conflicto en Crescendo',
      definition: 'Intensificación progresiva del conflicto hasta el clímax',
      importance: 'fundamental',
      relatedTerms: ['escalada dramática', 'tensión creciente']
    },
    {
      term: 'Unidad de Opuestos',
      definition: 'Protagonista y antagonista deben ser igualmente fuertes pero opuestos',
      importance: 'important',
      relatedTerms: ['equilibrio dramático', 'fuerzas opuestas']
    },
    {
      term: 'Dialéctica Dramática',
      definition: 'Tesis vs Antítesis generando Síntesis a través del conflicto',
      importance: 'important',
      relatedTerms: ['proceso dialéctico', 'resolución']
    },
    {
      term: 'Orquestación',
      definition: 'Cada personaje representa un aspecto diferente del tema central',
      importance: 'important',
      relatedTerms: ['variación temática', 'conjunto dramático']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Formulación de la premisa',
      description: 'Crear una declaración clara que la obra probará',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Debe contener sujeto, verbo activo y resultado',
        'Ejemplo: "La ambición desmedida lleva a la autodestrucción"',
        'Debe ser probable dramáticamente, no solo declarable'
      ],
      commonMistakes: [
        'Confundir premisa con tema o moraleja',
        'Crear premisas demasiado vagas o amplias'
      ]
    },
    {
      order: 2,
      name: 'Construcción tridimensional de personajes',
      description: 'Desarrollar cada dimensión completamente',
      timeEstimate: 90,
      difficulty: 'intermediate',
      tips: [
        'Fisiológica: edad, salud, apariencia, defectos',
        'Sociológica: clase, educación, ocupación, religión',
        'Psicológica: temperamento, actitudes, complejos, ambiciones'
      ]
    },
    {
      order: 3,
      name: 'Diseño del conflicto en crescendo',
      description: 'Planificar la escalada progresiva de conflictos',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Cada escena debe superar la anterior en intensidad',
        'No puede haber retrocesos en la tensión',
        'El clímax debe ser inevitable dada la premisa'
      ]
    },
    {
      order: 4,
      name: 'Creación de unidad de opuestos',
      description: 'Equilibrar fuerzas protagónicas y antagónicas',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'El antagonista debe ser tan fuerte como el protagonista',
        'Sus objetivos deben ser mutuamente excluyentes',
        'Ambos deben creer tener razón'
      ]
    },
    {
      order: 5,
      name: 'Orquestación de personajes',
      description: 'Asignar a cada personaje su función temática',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Cada personaje ilumina un aspecto del tema',
        'Evitar duplicaciones funcionales',
        'Crear contraste y variedad'
      ]
    },
    {
      order: 6,
      name: 'Verificación de la prueba',
      description: 'Confirmar que la acción demuestra la premisa',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Énfasis en personaje sobre trama crea historias orgánicas',
    'La premisa proporciona claridad temática y direccional',
    'Método sistemático para crear personajes complejos',
    'El conflicto en crescendo garantiza momentum dramático',
    'Base filosófica sólida en dialéctica',
    'Probado en teatro y adaptable al cine'
  ],
  
  limitations: [
    'Puede resultar didáctico si se aplica rígidamente',
    'No todas las historias tienen premisas claras únicas',
    'Menos aplicable a cine de acción o espectáculo',
    'Sesgo hacia drama psicológico y teatro',
    'Puede limitar ambigüedad temática moderna'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Lajos Egri'],
      title: 'The Art of Dramatic Writing',
      year: 1946,
      publisher: 'Simon & Schuster',
      essential: true
    },
    {
      type: 'book',
      authors: ['Lajos Egri'],
      title: 'The Art of Creative Writing',
      year: 1965,
      publisher: 'Citadel Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Lajos Egri'],
      title: 'Your Key to Successful Writing',
      year: 1969,
      publisher: 'Putnam Adult',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'There Will Be Blood',
        year: 2007,
        director: 'Paul Thomas Anderson'
      },
      analysisExcerpt: `Ejemplo perfecto del método Egri. Premisa: "La ambición sin límites destruye el alma humana." Daniel Plainview: construcción tridimensional completa - Fisiológica (robusto, envejeciendo, lesión de pierna), Sociológica (self-made man, misántropo, capitalista), Psicológica (paranoia, odio, necesidad de dominar). Conflicto en crescendo desde competencia de negocios hasta violencia personal. Unidad de opuestos con Eli Sunday: ambición material vs espiritual. Cada personaje orquestado: H.W. (amor filial perdido), Henry (falsa fraternidad), Eli (hipocresía religiosa). El clímax prueba la premisa: Daniel solo con su riqueza, habiendo destruido todo lo humano.`,
      insightsGenerated: [
        'La premisa se prueba a través de la degradación progresiva',
        'La construcción tridimensional crea un monstruo creíble',
        'El conflicto en crescendo es implacable por 158 minutos'
      ],
      methodologyApplication: 'Aplicación rigurosa del método creando tragedia americana épica',
      keyFindings: [
        'Egri efectivo para épicas de carácter',
        'La premisa puede explorarse durante películas largas',
        'La orquestación temática unifica narrativas expansivas'
      ]
    },
    {
      film: {
        title: 'Whiplash',
        year: 2014,
        director: 'Damien Chazelle'
      },
      analysisExcerpt: `Estructura Egri contemporánea. Premisa: "La obsesión por la perfección destruye la humanidad." Andrew: Fisiológica (joven, manos sangrantes), Sociológica (clase media, familia rota), Psicológica (necesidad de aprobación, obsesión). Fletcher: unidad de opuestos perfecta, igualmente obsesivo pero sádico. Conflicto en crescendo desde insultos hasta violencia psicológica y física. Orquestación: padre (mediocridad aceptada), Nicole (vida normal rechazada), otros estudiantes (víctimas del sistema). El final ambiguo aún prueba la premisa: Andrew alcanza perfección técnica pero pierde su humanidad.`,
      insightsGenerated: [
        'La premisa puede probarse incluso con finales ambiguos',
        'El conflicto psicológico puede ser tan intenso como el físico',
        'La unidad de opuestos puede mostrar dos caras de la misma obsesión'
      ],
      methodologyApplication: 'Adaptación moderna del conflicto en crescendo al thriller psicológico',
      keyFindings: [
        'Egri aplicable a dramas contemporáneos intensos',
        'La música puede servir como campo de batalla dramático',
        'La ambigüedad moral no contradice la claridad de premisa'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'mckee-story',
      relationshipType: 'complementary',
      synergyDescription: 'McKee expande el concepto de premisa hacia valores narrativos cambiantes',
      combinedInsightPotential: 9
    },
    {
      id: 'truby-anatomy',
      relationshipType: 'parallel',
      synergyDescription: 'Truby desarrolla la premisa narrativa con enfoque más flexible',
      combinedInsightPotential: 8
    },
    {
      id: 'stanislavsky-method',
      relationshipType: 'complementary',
      synergyDescription: 'Stanislavsky proporciona técnicas actorales para personajes tridimensionales',
      combinedInsightPotential: 8
    }
  ],
  
  digitalTools: [
    {
      name: 'Character Dimension Builder',
      type: 'framework',
      description: 'Plantilla para construir personajes tridimensionales según Egri',
      cost: 'free',
      platforms: ['web']
    },
    {
      name: 'Premise Proof Tracker',
      type: 'software',
      description: 'Herramienta para verificar que las escenas prueban la premisa',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    }
  ]
};
