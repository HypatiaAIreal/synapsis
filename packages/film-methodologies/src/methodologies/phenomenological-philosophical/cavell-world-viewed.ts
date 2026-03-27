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

export const CAVELL_WORLD_VIEWED: Methodology = {
  metadata: {
    id: 'cavell-world-viewed',
    name: 'El Mundo Visto',
    author: 'Stanley Cavell',
    year: 1971,
    category: 'phenomenological-philosophical',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['philosophy-basics', 'film-genre-knowledge'],
    culturalContext: 'Filosofía analítica estadounidense',
    language: 'es'
  },
  
  description: `Stanley Cavell desarrolló una filosofía del cine única que combina filosofía analítica angloamericana con reflexiones sobre el escepticismo, el lenguaje ordinario y el perfeccionismo moral. Su concepto del "mundo visto" explora la naturaleza ontológica peculiar del cine: vemos un mundo completo del cual estamos ausentes, satisfaciendo nuestro deseo de ver el mundo sin ser vistos. Cavell analiza cómo el cine confronta el problema filosófico del escepticismo sobre otras mentes mediante la presentación de seres humanos en su especificidad corporal y expresiva. Su trabajo sobre géneros de Hollywood - especialmente la "comedia de re-matrimonio" y el "melodrama de la mujer desconocida" - muestra cómo el cine popular aborda cuestiones filosóficas fundamentales sobre reconocimiento, matrimonio y perfeccionismo moral.`,
  
  keyConcepts: [
    {
      term: 'El Mundo Visto',
      definition: 'Naturaleza ontológica del cine: presencia del mundo con nuestra ausencia',
      importance: 'fundamental',
      relatedTerms: ['ontología cinematográfica', 'presencia/ausencia']
    },
    {
      term: 'Automatismo',
      definition: 'Base mecánica de la fotografía/cine que garantiza relación con realidad',
      importance: 'fundamental',
      relatedTerms: ['mecanismo', 'realidad fotográfica']
    },
    {
      term: 'Tipos e Individuos',
      definition: 'Las estrellas de cine como individuos que encarnan tipos',
      importance: 'important',
      relatedTerms: ['star system', 'individualidad típica']
    },
    {
      term: 'Reconocimiento',
      definition: 'Problema central del conocimiento del otro y de uno mismo',
      importance: 'fundamental',
      relatedTerms: ['conocimiento', 'otredad', 'identidad']
    },
    {
      term: 'Perfeccionismo Moral',
      definition: 'Educación del deseo y transformación del self',
      importance: 'important',
      relatedTerms: ['educación', 'transformación', 'ética']
    },
    {
      term: 'Comedia de Re-matrimonio',
      definition: 'Género que explora la posibilidad de comenzar de nuevo',
      importance: 'important',
      relatedTerms: ['segunda oportunidad', 'conversación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Análisis del automatismo',
      description: 'Examinar la base fotográfica/mecánica del film',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Considerar qué garantiza la realidad de lo filmado',
        'Analizar momentos donde el automatismo es visible',
        'Reflexionar sobre la ausencia del espectador'
      ],
      commonMistakes: [
        'Confundir automatismo con determinismo',
        'Ignorar las elecciones dentro del automatismo'
      ]
    },
    {
      order: 2,
      name: 'Exploración del mundo visto',
      description: 'Analizar la peculiar ontología de presencia/ausencia',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar cómo el film presenta un mundo completo',
        'Examinar nuestra posición como espectadores ausentes',
        'Buscar momentos de reflexividad sobre el ver'
      ]
    },
    {
      order: 3,
      name: 'Identificación de tipos/individuos',
      description: 'Analizar cómo los actores encarnan tipos siendo individuos',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 4,
      name: 'Análisis del reconocimiento',
      description: 'Examinar problemas de conocimiento y reconocimiento',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Buscar momentos de reconocimiento o su fracaso',
        'Analizar cómo los personajes se conocen',
        'Considerar el reconocimiento del espectador'
      ]
    },
    {
      order: 5,
      name: 'Exploración del perfeccionismo',
      description: 'Identificar temas de educación moral y transformación',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis de la conversación',
      description: 'Examinar el diálogo como forma de vida',
      timeEstimate: 45,
      difficulty: 'intermediate'
    }
  ],
  
  strengths: [
    'Conecta cine con problemas filosóficos fundamentales',
    'Dignifica géneros populares como filosóficamente ricos',
    'Análisis sensible al lenguaje y la expresión',
    'Integra ética y estética naturalmente',
    'Escritura accesible y elegante',
    'Atención al cine como forma de vida'
  ],
  
  limitations: [
    'Enfoque principalmente en Hollywood clásico',
    'Sesgo hacia films con mucho diálogo',
    'Menos aplicable a cine experimental',
    'Perspectiva culturalmente específica',
    'Idealización del matrimonio heterosexual',
    'Menor atención a aspectos formales'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Stanley Cavell'],
      title: 'The World Viewed: Reflections on the Ontology of Film',
      year: 1979,
      publisher: 'Harvard University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Stanley Cavell'],
      title: 'Pursuits of Happiness: The Hollywood Comedy of Remarriage',
      year: 1981,
      publisher: 'Harvard University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Stanley Cavell'],
      title: 'Contesting Tears: The Hollywood Melodrama of the Unknown Woman',
      year: 1996,
      publisher: 'University of Chicago Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Stanley Cavell'],
      title: 'Cities of Words: Pedagogical Letters on a Register of the Moral Life',
      year: 2004,
      publisher: 'Harvard University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Philadelphia Story',
        year: 1940,
        director: 'George Cukor'
      },
      analysisExcerpt: `The Philadelphia Story ejemplifica la comedia de re-matrimonio cavelliana. Tracy Lord debe transformarse de "diosa" a mujer humana capaz de reconocimiento mutuo. El film explora el perfeccionismo moral: no la perfección sino la capacidad de cambio y crecimiento. La conversación como forma de intimidad y conocimiento mutuo. Dexter conoce a Tracy mejor que ella misma, pero debe esperar su auto-reconocimiento. El re-matrimonio como segunda oportunidad filosófica, no mera repetición. El automatismo del cine captura la especificidad irreemplazable de Hepburn/Grant.`,
      insightsGenerated: [
        'El matrimonio como estado de conversación permanente',
        'El reconocimiento requiere humildad y vulnerabilidad',
        'La comedia puede ser vehículo de educación moral'
      ],
      methodologyApplication: 'Análisis de reconocimiento y perfeccionismo en comedia',
      keyFindings: [
        'Hollywood clásico contiene filosofía moral sofisticada',
        'El re-matrimonio simboliza la posibilidad de renovación',
        'La especificidad de las estrellas es filosóficamente significativa'
      ]
    },
    {
      film: {
        title: 'Eternal Sunshine of the Spotless Mind',
        year: 2004,
        director: 'Michel Gondry'
      },
      analysisExcerpt: `Eternal Sunshine moderniza los temas cavellianos de reconocimiento y re-comienzo. El borrado de memoria plantea radicalmente el problema del conocimiento del otro: ¿podemos reconocer sin memoria? Joel y Clementine se re-encuentran sin recordarse, sugiriendo un reconocimiento más profundo que el cognitivo. El film explora si el perfeccionismo moral es posible sin memoria del fracaso. La conversación en la playa de Montauk como momento de reconocimiento puro. El automatismo digital crea nuevos modos de presencia/ausencia de la memoria.`,
      insightsGenerated: [
        'El reconocimiento puede trascender la memoria consciente',
        'El olvido no borra la necesidad de confrontar nuestros patrones',
        'La tecnología replantea problemas filosóficos clásicos'
      ],
      methodologyApplication: 'Aplicación contemporánea de conceptos cavellianos',
      keyFindings: [
        'Los temas de Cavell permanecen relevantes en cine contemporáneo',
        'La ciencia ficción puede explorar problemas de filosofía moral',
        'El reconocimiento es más profundo que el conocimiento'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'wittgenstein-language-games',
      relationshipType: 'complementary',
      synergyDescription: 'Cavell aplica la filosofía del lenguaje ordinario de Wittgenstein al cine',
      combinedInsightPotential: 9
    },
    {
      id: 'emerson-perfectionism',
      relationshipType: 'complementary',
      synergyDescription: 'El perfeccionismo moral de Cavell deriva de Emerson',
      combinedInsightPotential: 8
    },
    {
      id: 'rohmer-moral-tales',
      relationshipType: 'complementary',
      synergyDescription: 'Rohmer explora temas morales similares en registro diferente',
      combinedInsightPotential: 7
    }
  ]
};
