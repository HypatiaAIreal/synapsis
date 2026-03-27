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

export const NEALE_GENRE_HOLLYWOOD: Methodology = {
  metadata: {
    id: 'neale-genre-hollywood',
    name: 'Género y Hollywood',
    author: 'Steve Neale',
    year: 1980,
    category: 'genre-theory',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['film-industry-knowledge'],
    culturalContext: 'Estudios de género británicos',
    language: 'es'
  },
  
  description: `Steve Neale desarrolló una teoría comprehensiva del género cinematográfico que combina análisis industrial, textual y de recepción. Su concepto central de "repetición y diferencia" explica cómo los géneros equilibran la familiaridad necesaria para el reconocimiento con la novedad requerida para mantener interés. Neale analiza los géneros como "sistemas de expectativas y hipótesis" que las audiencias llevan a los films, guiando su comprensión y placer. Su trabajo pionero sobre la masculinidad en géneros de acción reveló dimensiones de género (gender) en el género (genre) previamente ignoradas. Neale examina cómo la industria de Hollywood usa los géneros como estrategia económica para minimizar riesgos y maximizar audiencias. Su análisis de "verosimilitud genérica" muestra cómo cada género establece sus propias reglas de credibilidad.`,
  
  keyConcepts: [
    {
      term: 'Repetición y Diferencia',
      definition: 'Balance esencial entre elementos familiares y novedosos que caracteriza todo género',
      importance: 'fundamental',
      relatedTerms: ['convención', 'innovación', 'variación']
    },
    {
      term: 'Sistemas de Expectativas',
      definition: 'Conjunto de hipótesis y anticipaciones que las audiencias traen a cada género',
      importance: 'fundamental',
      relatedTerms: ['horizonte de expectativas', 'competencia genérica']
    },
    {
      term: 'Verosimilitud Genérica',
      definition: 'Reglas de credibilidad específicas de cada género, distintas del realismo',
      importance: 'important',
      relatedTerms: ['credibilidad', 'convenciones de realidad']
    },
    {
      term: 'Economía Genérica',
      definition: 'Uso de géneros como estrategia industrial para gestionar riesgo y audiencia',
      importance: 'important',
      relatedTerms: ['marketing', 'producción industrial']
    },
    {
      term: 'Intertextualidad Genérica',
      definition: 'Referencias y relaciones entre films dentro del mismo género',
      importance: 'important',
      relatedTerms: ['corpus genérico', 'referencias']
    },
    {
      term: 'Género y Gender',
      definition: 'Construcciones de masculinidad/feminidad específicas de cada género',
      importance: 'important',
      relatedTerms: ['masculinidad', 'espectáculo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de repeticiones',
      description: 'Catalogar elementos familiares y convencionales del género',
      timeEstimate: 45,
      difficulty: 'basic',
      tips: [
        'Comparar con otros films del mismo género',
        'Identificar tropos y convenciones recurrentes',
        'Incluir elementos narrativos y estilísticos'
      ],
      commonMistakes: [
        'Ignorar repeticiones sutiles o estilísticas',
        'Enfocarse solo en elementos narrativos'
      ]
    },
    {
      order: 2,
      name: 'Localización de diferencias',
      description: 'Identificar innovaciones y variaciones específicas',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar tanto grandes como pequeñas innovaciones',
        'Considerar contexto histórico de las diferencias'
      ]
    },
    {
      order: 3,
      name: 'Análisis de expectativas',
      description: 'Examinar qué anticipa la audiencia y cómo se gestiona',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Considerar materiales promocionales',
        'Analizar primeros minutos del film',
        'Identificar momentos de confirmación/subversión'
      ]
    },
    {
      order: 4,
      name: 'Examen de verosimilitud',
      description: 'Analizar las reglas de credibilidad específicas operando',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Consideración económica',
      description: 'Examinar estrategias industriales y de marketing',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Investigar presupuesto y taquilla',
        'Analizar campaña publicitaria',
        'Considerar estrellas y su función genérica'
      ]
    },
    {
      order: 6,
      name: 'Análisis de género/gender',
      description: 'Examinar construcciones de masculinidad/feminidad',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Integra perspectivas industrial, textual y de audiencia',
    'Atención pionera a dimensiones de género (gender)',
    'Modelo dinámico que explica cambio y continuidad',
    'Base empírica sólida en investigación industrial',
    'Aplicable a géneros contemporáneos',
    'Considera factores económicos cruciales'
  ],
  
  limitations: [
    'Enfoque principalmente en Hollywood mainstream',
    'Puede normalizar convenciones problemáticas',
    'Menos útil para cine experimental o de autor',
    'Concepto de verosimilitud a veces vago',
    'Énfasis en estructura sobre ideología'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Steve Neale'],
      title: 'Genre and Hollywood',
      year: 2000,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Steve Neale'],
      title: 'Genre',
      year: 1980,
      publisher: 'British Film Institute',
      essential: true
    },
    {
      type: 'article',
      authors: ['Steve Neale'],
      title: 'Questions of Genre',
      year: 1990,
      journal: 'Screen',      
      pages: '45-66',
      essential: true
    },
    {
      type: 'article',
      authors: ['Steve Neale'],
      title: 'Masculinity as Spectacle',
      year: 1983,
      journal: 'Screen',      
      pages: '2-17',
      essential: true
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Die Hard',
        year: 1988,
        director: 'John McTiernan'
      },
      analysisExcerpt: `Die Hard ejemplifica perfectamente la dialéctica repetición/diferencia. Repeticiones: héroe solitario contra terroristas, rehenes, cuenta regresiva. Diferencias clave: héroe vulnerable y doméstico (pies descalzos, miedo), espacio único cerrado (rascacielos), Navidad como contexto irónico. Las expectativas de acción se satisfacen pero con héroe "común" que sufre. Verosimilitud genérica permite supervivencia increíble pero dentro de lógica de vulnerabilidad establecida. Económicamente, redefinió el género creando fórmula "Die Hard en un X" infinitamente replicable.`,
      insightsGenerated: [
        'Las diferencias estratégicas pueden redefinir géneros enteros',
        'La vulnerabilidad masculina puede coexistir con heroísmo de acción',
        'El éxito económico puede institucionalizar innovaciones como nuevas convenciones'
      ],
      methodologyApplication: 'Análisis de cómo diferencias específicas crean nueva fórmula genérica',
      keyFindings: [
        'La innovación dentro de la repetición puede ser extremadamente lucrativa',
        'Los géneros evolucionan mediante diferencias que se vuelven nuevas repeticiones',
        'La masculinidad en crisis puede ser comercialmente viable'
      ]
    },
    {
      film: {
        title: 'Scream',
        year: 1996,
        director: 'Wes Craven'
      },
      analysisExcerpt: `Scream manipula conscientemente las expectativas genéricas del slasher. Repeticiones: asesino enmascarado, víctimas adolescentes, final girl. Diferencias: personajes conocen las reglas del género, meta-comentario constante, asesinos desmitificados. El film hace explícito el "sistema de expectativas" que Neale teoriza, con personajes discutiendo reglas de supervivencia. Verosimilitud genérica se vuelve tema: ¿qué es creíble en un mundo que conoce películas de terror? Económicamente, revitalizó género moribundo mediante auto-consciencia.`,
      insightsGenerated: [
        'La auto-consciencia genérica puede renovar géneros agotados',
        'Hacer explícitas las expectativas no las destruye necesariamente',
        'El conocimiento genérico de audiencias puede incorporarse productivamente'
      ],
      methodologyApplication: 'Análisis de meta-género y expectativas explicitadas',
      keyFindings: [
        'Los géneros pueden sobrevivir volviéndose auto-reflexivos',
        'Las audiencias sofisticadas requieren mayor complejidad genérica',
        'La economía genérica premia tanto nostalgia como innovación'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'altman-semantic-syntactic',
      relationshipType: 'parallel',
      synergyDescription: 'Ambos analizan evolución genérica pero Neale enfatiza economía e industria',
      combinedInsightPotential: 9
    },
    {
      id: 'clover-horror-gender',
      relationshipType: 'complementary',
      synergyDescription: 'Clover profundiza el análisis de género/gender que Neale inició',
      combinedInsightPotential: 9
    },
    {
      id: 'schatz-genre-evolution',
      relationshipType: 'complementary',
      synergyDescription: 'Schatz ofrece modelo evolutivo mientras Neale enfoca proceso continuo',
      combinedInsightPotential: 8
    }
  ]
};
