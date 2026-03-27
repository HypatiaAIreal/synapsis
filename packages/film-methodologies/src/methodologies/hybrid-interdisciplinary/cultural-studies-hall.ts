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

export const CULTURAL_STUDIES_HALL: Methodology = {
  metadata: {
    id: 'cultural-studies-hall',
    name: 'Estudios Culturales - Stuart Hall aplicado al cine',
    author: 'Stuart Hall',
    year: 1973,
    category: 'hybrid-interdisciplinary',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['cultural-theory', 'media-studies'],
    culturalContext: 'Birmingham School y estudios poscoloniales',
    language: 'es'
  },
  
  description: `Stuart Hall revolucionó el análisis cultural al desarrollar un enfoque interdisciplinario que combina marxismo, semiótica, psicoanálisis y teoría poscolonial para entender cómo los textos mediáticos, incluido el cine, participan en la construcción de identidades y la negociación del poder cultural. Su modelo de "codificación/decodificación" transformó la comprensión de cómo los significados no son fijados por los productores sino negociados por audiencias activas que pueden realizar lecturas dominantes, negociadas u oposicionales. Hall conceptualizó la cultura como campo de lucha donde diferentes grupos compiten por hegemonía simbólica. Su trabajo sobre representación examina cómo el cine construye diferencia racial, nacional y cultural a través de regímenes de representación históricamente específicos.`,
  
  keyConcepts: [
    {
      term: 'Codificación/Decodificación',
      definition: 'Proceso dual donde productores codifican significados que audiencias decodifican activamente',
      importance: 'fundamental',
      relatedTerms: ['encoding', 'decoding', 'significado']
    },
    {
      term: 'Lecturas Negociadas',
      definition: 'Tres posiciones de lectura: dominante/hegemónica, negociada, oposicional',
      importance: 'fundamental',
      relatedTerms: ['recepción', 'interpretación', 'resistencia']
    },
    {
      term: 'Representación como Constitutiva',
      definition: 'La representación no refleja sino que construye activamente la realidad social',
      importance: 'fundamental',
      relatedTerms: ['construcción', 'poder simbólico']
    },
    {
      term: 'Articulación',
      definition: 'Conexiones contingentes entre elementos que no son necesarias ni permanentes',
      importance: 'important',
      relatedTerms: ['contingencia', 'conexión', 'contexto']
    },
    {
      term: 'Identidad como Proceso',
      definition: 'Identidad nunca completa, siempre en formación y contextual',
      importance: 'important',
      relatedTerms: ['devenir', 'fluidez identitaria']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis del contexto de producción',
      description: 'Examinar condiciones institucionales, económicas e ideológicas de codificación',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Investigar momento histórico de producción',
        'Identificar marcos institucionales dominantes',
        'Considerar intenciones declaradas y no declaradas'
      ],
      commonMistakes: [
        'Asumir intención unívoca del productor',
        'Ignorar contradicciones en el proceso de codificación'
      ]
    },
    {
      order: 2,
      name: 'Identificación de códigos dominantes',
      description: 'Localizar significados preferidos inscritos en el texto',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Buscar códigos visuales, narrativos y sonoros',
        'Identificar representaciones naturalizadas',
        'Examinar ausencias significativas'
      ]
    },
    {
      order: 3,
      name: 'Mapeo de posiciones de lectura',
      description: 'Analizar posibles decodificaciones desde diferentes posiciones sociales',
      timeEstimate: 120,
      difficulty: 'advanced',
      tips: [
        'Considerar múltiples identidades interseccionales',
        'No asumir homogeneidad en grupos sociales',
        'Incluir evidencia empírica cuando sea posible'
      ]
    },
    {
      order: 4,
      name: 'Análisis de articulaciones',
      description: 'Examinar conexiones contingentes entre elementos culturales',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Estudio de regímenes de representación',
      description: 'Identificar patrones históricos en la construcción de diferencia',
      timeEstimate: 90,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluación de luchas hegemónicas',
      description: 'Analizar cómo el film participa en batallas por significado cultural',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Marco interdisciplinario rico y flexible',
    'Reconoce poder activo de las audiencias',
    'Conecta textos con contextos políticos amplios',
    'Útil para análisis de representación y diferencia',
    'Evita determinismos económicos o textuales',
    'Políticamente comprometido sin ser dogmático'
  ],
  
  limitations: [
    'Puede ser ecléctico en aplicación',
    'Dificultad para verificar lecturas empíricamente',
    'Tensión entre estructura y agencia no resuelta',
    'Originalmente británico-céntrico',
    'Complejidad puede dificultar aplicación sistemática'
  ],
  
  bibliography: [
    {
      type: 'article',
      authors: ['Stuart Hall'],
      title: 'Encoding/Decoding',
      year: 1980,
      journal: 'Culture, Media, Language',
      publisher: 'Hutchinson',
      pages: '128-138',
      essential: true
    },
    {
      type: 'book',
      authors: ['Stuart Hall'],
      title: 'Representation: Cultural Representations and Signifying Practices',
      year: 1997,
      publisher: 'Sage',
      essential: true
    },
    {
      type: 'article',
      authors: ['Stuart Hall'],
      title: 'Cultural Identity and Diaspora',
      year: 1996,
      journal: 'Contemporary Postcolonial Theory',
      pages: '110-121',
      essential: true
    },
    {
      type: 'book',
      authors: ['David Morley', 'Kuan-Hsing Chen'],
      title: 'Stuart Hall: Critical Dialogues in Cultural Studies',
      year: 1996,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Black Panther',
        year: 2018,
        director: 'Ryan Coogler'
      },
      analysisExcerpt: `Black Panther ejemplifica las complejidades de codificación/decodificación en el cine contemporáneo. Marvel/Disney codifica un blockbuster que celebra África mientras opera dentro del capitalismo global. Las audiencias africanas y afroamericanas decodifican diferentemente: para algunos es empoderamiento representacional largamente esperado (lectura dominante), otros negocian celebrando representación mientras critican elementos (Wakanda como fantasía aislacionista), mientras lecturas oposicionales ven commodificación de identidad negra para consumo global. La película articula tecnología con tradición, diáspora con África, de formas contingentes que permiten múltiples identificaciones.`,
      insightsGenerated: [
        'Un mismo texto permite lecturas radicalmente diferentes según posición social',
        'La representación "positiva" no escapa a contradicciones del capital global',
        'Las articulaciones África/tecnología desafían estereotipos mientras crean nuevos mitos'
      ],
      methodologyApplication: 'Análisis multinivel de codificación institucional y decodificaciones diversas',
      keyFindings: [
        'Black Panther demuestra complejidad de representación en Hollywood global',
        'Las audiencias negocian activamente entre celebración y crítica',
        'La identidad diaspórica se articula de formas contingentes y contestadas'
      ]
    },
    {
      film: {
        title: 'My Beautiful Laundrette',
        year: 1985,
        director: 'Stephen Frears'
      },
      analysisExcerpt: `My Beautiful Laundrette representa el "nuevo etnicismo" que Hall teorizó: identidades británico-asiáticas complejas más allá de binarios. La película codifica múltiples intersecciones: raza, clase, sexualidad, generación. Omar y Johnny articulan deseo homoerótico con tensiones raciales/clase del Thatcherismo. Audiencias paquistaníes-británicas produjeron lecturas divergentes: algunos celebraron visibilidad, otros rechazaron representación de homosexualidad. La lavandería funciona como espacio liminal donde identidades se negocian. El film rechaza essential-ismo cultural, mostrando identidades como procesos dinámicos de becoming británico-asiático-queer.`,
      insightsGenerated: [
        'Las identidades híbridas desafían categorías fijas de representación',
        'La interseccionalidad complica posiciones de lectura predecibles',
        'Los espacios cotidianos pueden ser sitios de negociación cultural radical'
      ],
      methodologyApplication: 'Análisis de articulaciones múltiples e identidades en proceso',
      keyFindings: [
        'El nuevo etnicismo permite complejidad más allá de "imágenes positivas"',
        'Las comunidades no son homogéneas en sus decodificaciones',
        'La forma cinematográfica puede encarnar hibridez cultural'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'postcolonial-theory',
      relationshipType: 'complementary',
      synergyDescription: 'Hall integra perspectivas poscoloniales en análisis de representación y diferencia',
      combinedInsightPotential: 9
    },
    {
      id: 'reception-studies',
      relationshipType: 'complementary',
      synergyDescription: 'Los estudios de recepción operacionalizan el modelo encoding/decoding de Hall',
      combinedInsightPotential: 9
    },
    {
      id: 'critical-race-theory',
      relationshipType: 'complementary',
      synergyDescription: 'CRT profundiza análisis de Hall sobre raza y representación',
      combinedInsightPotential: 8
    }
  ]
};
