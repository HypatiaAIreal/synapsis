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

export const GAINES_POLITICAL_DOCUMENTARY: Methodology = {
  metadata: {
    id: 'gaines-political-documentary',
    name: 'Documental Político',
    author: 'Jane Gaines',
    year: 1999,
    category: 'documentary',
    complexity: 'advanced',
    timeToLearn: 30,
    prerequisities: ['political-theory', 'documentary-basics'],
    culturalContext: 'Teoría documental activista estadounidense',
    language: 'es'
  },
  
  description: `Jane Gaines desarrolló teorías sobre el "documental político radical" que busca no solo representar sino catalizar cambio social. Su concepto de "mimesis política" examina cómo los documentales pueden producir una "imitación" en el mundo real - espectadores movidos a replicar acciones vistas en pantalla. Gaines analiza la tradición del documental activista desde los newsreels obreros hasta el video-activismo contemporáneo. Su trabajo sobre "evidencia visible" examina cómo los documentales funcionan como prueba legal, histórica y moral. Gaines teoriza sobre el "deseo de que las cosas sean diferentes" como motor del documental político. Su análisis del "documental comprometido" examina las estrategias formales que mueven de la indignación a la acción.`,
  
  keyConcepts: [
    {
      term: 'Mimesis Política',
      definition: 'Imitación que produce acción política real',
      importance: 'fundamental',
      relatedTerms: ['acción', 'catálisis']
    },
    {
      term: 'Documental Comprometido',
      definition: 'Cine con agenda activista explícita',
      importance: 'fundamental',
      relatedTerms: ['activismo', 'compromiso']
    },
    {
      term: 'Evidencia Visible',
      definition: 'Documental como prueba legal/histórica/moral',
      importance: 'important',
      relatedTerms: ['prueba', 'testimonio']
    },
    {
      term: 'Deseo de Diferencia',
      definition: 'Motor emocional del cambio político',
      importance: 'important',
      relatedTerms: ['utopía', 'transformación']
    },
    {
      term: 'Estrategias Movilizadoras',
      definition: 'Técnicas formales que producen acción',
      importance: 'important',
      relatedTerms: ['retórica', 'persuasión']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar mimesis',
      description: 'Localizar potencial de imitación política',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Buscar acciones modelo presentadas',
        'Considerar viabilidad de replicación',
        'La mimesis puede ser literal o figurativa'
      ],
      commonMistakes: [
        'Confundir inspiración con mimesis',
        'Ignorar condiciones para la acción'
      ]
    },
    {
      order: 2,
      name: 'Analizar compromiso',
      description: 'Evaluar nivel y tipo de activismo',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'El compromiso puede ser explícito o implícito',
        'Considerar contexto de producción'
      ]
    },
    {
      order: 3,
      name: 'Examinar evidencia',
      description: 'Analizar función probatoria del documental',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Buscar deseo',
      description: 'Identificar motor emocional de cambio',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificar estrategias',
      description: 'Catalogar técnicas movilizadoras empleadas',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Evaluar eficacia',
      description: 'Analizar impacto político real o potencial',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Conecta teoría con práctica activista',
    'Valoriza función política del documental',
    'Análisis histórico de tradiciones radicales',
    'Atención a eficacia real',
    'Marco para evaluar impacto político'
  ],
  
  limitations: [
    'Puede instrumentalizar valor estético',
    'Dificultad para medir eficacia real',
    'Sesgo hacia ciertos tipos de activismo',
    'Menos útil para documentales contemplativos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jane Gaines', 'Michael Renov'],
      title: 'Collecting Visible Evidence',
      year: 1999,
      publisher: 'University of Minnesota Press',
      essential: true      
    },
    {
      type: 'article',
      authors: ['Jane Gaines'],
      title: 'Political Mimesis',
      year: 1999,
      journal: 'Collecting Visible Evidence',
      publisher: 'University of Minnesota Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jane Gaines'],
      title: 'Contested Culture: The Image, the Voice, and the Law',
      year: 1991,
      publisher: 'University of North Carolina Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Hour of the Furnaces',
        year: 1968,
        director: 'Solanas & Getino'
      },
      analysisExcerpt: `Ejemplo paradigmático de mimesis política radical. El film no solo documenta sino que funciona como acto revolucionario. Interrumpe proyección para debate, convirtiendo cine en asamblea. Evidencia visible del neocolonialismo en América Latina. Deseo de diferencia articulado mediante análisis marxista y llamado a las armas. Estrategias movilizadoras incluyen: montaje agresivo, interpelación directa, imágenes de lucha como modelo. La eficacia se mide en su uso real por movimientos revolucionarios. Compromiso total: los cineastas arriesgan libertad y vida.`,
      insightsGenerated: [
        'El documental puede ser acto político en sí mismo',
        'La forma radical puede catalizar acción radical',
        'La mimesis política requiere condiciones materiales'
      ],
      methodologyApplication: 'Análisis de documental como herramienta revolucionaria',
      keyFindings: [
        'El cine militante trasciende representación',
        'La eficacia política puede requerir innovación formal',
        'El compromiso extremo produce obras extremas'
      ]
    },
    {
      film: {
        title: 'I Am Not Your Negro',
        year: 2016,
        director: 'Raoul Peck'
      },
      analysisExcerpt: `Mimesis política contemporánea sofisticada. Las palabras de Baldwin, décadas después, catalizan acción en era de Black Lives Matter. Evidencia visible de la continuidad del racismo estructural. Deseo de diferencia articulado mediante yuxtaposición temporal: pasado/presente. Estrategias movilizadoras: dignidad de Baldwin como modelo, análisis incisivo como arma, belleza formal como persuasión. Compromiso con justicia racial mediante resurrección de voz profética. La eficacia se ve en su adopción por movimientos actuales.`,
      insightsGenerated: [
        'La mimesis puede ser intelectual y moral, no solo física',
        'El archivo histórico puede activarse políticamente',
        'La elegancia formal no disminuye el impacto político'
      ],
      methodologyApplication: 'Examen de activación política del archivo',
      keyFindings: [
        'El documental político evoluciona con los tiempos',
        'Las voces del pasado pueden movilizar el presente',
        'La complejidad estética puede aumentar eficacia política'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'waugh-committed-documentary',
      relationshipType: 'parallel',
      synergyDescription: 'Waugh ofrece historia paralela del documental comprometido',
      combinedInsightPotential: 8
    },
    {
      id: 'winston-documentary-tradition',
      relationshipType: 'complementary',
      synergyDescription: 'Winston problematiza las certezas políticas que Gaines afirma',
      combinedInsightPotential: 7
    },
    {
      id: 'ranciere-politics-aesthetics',
      relationshipType: 'complementary',
      synergyDescription: 'Rancière teoriza la relación estética-política que Gaines practica',
      combinedInsightPotential: 9
    }
  ]
};
