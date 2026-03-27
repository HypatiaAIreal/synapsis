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

export const PELESHIAN_DISTANCE_MONTAGE: Methodology = {
  metadata: {
    id: 'peleshian-distance-montage',
    name: 'Montaje a Distancia',
    author: 'Artavazd Peleshian',
    year: 1970,
    category: 'montage',
    complexity: 'expert',
    timeToLearn: 50,
    prerequisities: ['soviet-montage', 'musical-structure', 'film-poetry'],
    culturalContext: 'Cine poético armenio-soviético',
    language: 'es'
  },
  
  description: `Artavazd Peleshian, cineasta armenio-soviético, desarrolló una teoría revolucionaria del "montaje a distancia" o "montaje contrapuntístico" que trasciende la yuxtaposición linear de planos. En lugar de crear significado mediante planos adyacentes, Peleshian establece "rimas visuales" y resonancias a través de todo el film, donde imágenes separadas por minutos o secuencias enteras dialogan entre sí. Su método crea una "sinfonía visual" donde temas y motivos reaparecen transformados, acumulando significado con cada iteración. Peleshian rechaza la narrativa linear en favor de estructuras circulares y espirales donde el final recontextualiza el principio. Su concepto de "montaje cósmico" busca revelar fuerzas universales mediante la organización rítmica de imágenes.`,
  
  keyConcepts: [
    {
      term: 'Montaje a Distancia',
      definition: 'Conexiones entre planos no adyacentes que resuenan a través del film',
      importance: 'fundamental',
      relatedTerms: ['distancia', 'resonancia', 'eco visual']
    },
    {
      term: 'Montaje Contrapuntístico',
      definition: 'Voces visuales independientes que dialogan como en fuga musical',
      importance: 'fundamental',
      relatedTerms: ['contrapunto', 'polifonía', 'voces']
    },
    {
      term: 'Rimas Visuales',
      definition: 'Imágenes que se hacen eco y transforman mutuamente a distancia',
      importance: 'fundamental',
      relatedTerms: ['rima', 'eco', 'correspondencia']
    },
    {
      term: 'Estructura Circular/Espiral',
      definition: 'Organización no-lineal donde fin y principio se conectan',
      importance: 'important',
      relatedTerms: ['circularidad', 'espiral', 'retorno']
    },
    {
      term: 'Montaje Cósmico',
      definition: 'Revelación de fuerzas universales (gravedad, energía) mediante ritmo',
      importance: 'important',
      relatedTerms: ['cosmos', 'fuerzas universales', 'energía']
    },
    {
      term: 'Acumulación Semántica',
      definition: 'Significado que crece con cada retorno transformado de motivo',
      importance: 'important',
      relatedTerms: ['acumulación', 'transformación', 'crecimiento']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de rimas visuales',
      description: 'Mapear ecos y correspondencias distantes',
      timeEstimate: 120,
      difficulty: 'expert',
      tips: [
        'Buscar imágenes que dialogan sin estar juntas',
        'Notar transformaciones de motivos',
        'Atender a geometrías y movimientos similares'
      ],
      commonMistakes: [
        'Confundir con simple repetición',
        'No percibir conexiones sutiles'
      ]
    },
    {
      order: 2,
      name: 'Mapeo de estructura total',
      description: 'Visualizar arquitectura temporal completa',
      timeEstimate: 90,
      difficulty: 'expert',
      tips: [
        'Crear diagrama visual de conexiones',
        'Identificar patrones espirales o circulares',
        'Ver el film como totalidad'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de acumulaciones',
      description: 'Rastrear cómo crece el significado por retorno',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 4,
      name: 'Análisis de contrapunto',
      description: 'Examinar líneas visuales independientes',
      timeEstimate: 90,
      difficulty: 'expert'
    },
    {
      order: 5,
      name: 'Examen de circularidad',
      description: 'Analizar retornos transformados',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Identificación de fuerzas cósmicas',
      description: 'Detectar universales revelados',
      timeEstimate: 60,
      difficulty: 'expert'
    },
    {
      order: 7,
      name: 'Evaluación de experiencia total',
      description: 'Comprender red completa de significaciones',
      timeEstimate: 90,
      difficulty: 'expert'
    }
  ],
  
  strengths: [
    'Innovación formal sin precedentes',
    'Trasciende limitaciones del montaje lineal',
    'Crea experiencias únicas e irrepetibles',
    'Profundidad filosófica extraordinaria',
    'Influencia clave en cine experimental',
    'Organicidad estructural perfecta'
  ],
  
  limitations: [
    'Aplicación extremadamente específica',
    'Rechaza narrativa completamente',
    'Accesibilidad muy limitada',
    'Poca documentación teórica disponible',
    'Corpus fílmico muy pequeño',
    'Complejidad puede ser abrumadora'
  ],
  
  bibliography: [
    {
      type: 'article',
      authors: ['Artavazd Peleshian'],
      title: 'Montage-at-a-Distance, or: A Theory of Distance',
      year: 1988,
      journal: 'Armenian Cinema Catalog',
      essential: true
    },
    {
      type: 'book',
      authors: ['François Niney'],
      title: 'L\'Épreuve du Réel à l\'Écran',
      year: 2013,
      publisher: 'De Boeck Supérieur',
      essential: false
    },
    {
      type: 'book',
      authors: ['Patrick Cazals'],
      title: 'Artavazd Peleshian: Une Symphonie du Monde',
      year: 1992,
      publisher: 'Éditions Aras',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Seasons',
        year: 1975,
        director: 'Artavazd Peleshian'
      },
      analysisExcerpt: `The Seasons demuestra el montaje a distancia puro. Humanos y naturaleza en contrapunto cósmico. Imágenes de pastores/avalanchas riman a través del film. Estructura circular: las estaciones retornan transformadas. Heno rodando colina abajo dialoga con humanos descendiendo minutos después. Montaje cósmico: gravedad como fuerza protagonista. Acumulación: cada retorno de motivo añade capa de significado. No hay narrativa, solo fuerzas universales en juego. La sinfonía visual revela ciclos de vida/muerte/renacimiento.`,
      insightsGenerated: [
        'Las imágenes pueden comunicarse a través del tiempo fílmico',
        'La estructura circular trasciende la linealidad',
        'Las fuerzas naturales pueden ser personajes'
      ],
      methodologyApplication: 'Demostración perfecta del montaje a distancia',
      keyFindings: [
        'El montaje puede ser arquitectónico, no solo secuencial',
        'Las rimas visuales crean poesía cinematográfica',
        'La repetición transformada genera profundidad'
      ]
    },
    {
      film: {
        title: 'Our Century',
        year: 1982,
        director: 'Artavazd Peleshian'
      },
      analysisExcerpt: `Our Century aplica montaje a distancia a la era espacial. Cosmonautas/tierra en diálogo constante. Lanzamientos riman con multitudes terrestres. Gravedad vs. escape: tema central mediante montaje. Estructura espiral: cada intento de escape retorna transformado. Rostros en centrifugadora dialogan con rostros en tierra. Montaje contrapuntístico: aspiración celestial/atadura terrestre. No celebra conquista espacial sino revela tragedia de separación. Energía cinética extrema acumulándose hasta éxtasis/agotamiento.`,
      insightsGenerated: [
        'El montaje a distancia puede ser crítica social',
        'Los ecos visuales revelan ironías profundas',
        'La estructura espiral intensifica temas'
      ],
      methodologyApplication: 'Montaje a distancia como comentario histórico',
      keyFindings: [
        'La técnica trasciende lo formal hacia lo político',
        'Las fuerzas cósmicas incluyen aspiraciones humanas',
        'El contrapunto visual puede ser dialéctico'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'eisenstein-montage',
      relationshipType: 'synthetic',
      synergyDescription: 'Peleshian lleva el montaje soviético a dimensión cósmica y musical',
      combinedInsightPotential: 9
    },
    {
      id: 'musical-structure',
      relationshipType: 'complementary',
      synergyDescription: 'La estructura musical (fuga, sinfonía) es base del montaje a distancia',
      combinedInsightPotential: 9
    },
    {
      id: 'structural-film',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos exploran estructuras formales radicales',
      combinedInsightPotential: 8
    }
  ]
};
