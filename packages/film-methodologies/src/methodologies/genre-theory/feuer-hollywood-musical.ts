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

export const FEUER_HOLLYWOOD_MUSICAL: Methodology = {
  metadata: {
    id: 'feuer-hollywood-musical',
    name: 'El Musical de Hollywood',
    author: 'Jane Feuer',
    year: 1982,
    category: 'genre-theory',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['musical-knowledge'],
    culturalContext: 'Estudios del musical cinematográfico',
    language: 'es'
  },
  
  description: `Jane Feuer desarrolló la teoría más influyente del musical cinematográfico, analizándolo como género que reflexiona sobre su propia naturaleza como entretenimiento mientras aparenta espontaneidad. Su concepto central de "mito de espontaneidad" revela cómo los musicales usan elaboradas coreografías y producción para crear ilusión de expresión natural e improvisada. Feuer examina tres oposiciones que estructuran el género: espontaneidad/artificio, comunidad/aislamiento, integración/separación. Su análisis de "números diegéticos" (canciones justificadas) versus "números no-diegéticos" (convención pura) muestra estrategias de naturalización. Feuer teoriza el musical como género conservador que reconcilia contradicciones mediante la utopía del número musical, pero también encuentra potencial subversivo en el exceso y artificio.`,
  
  keyConcepts: [
    {
      term: 'Mito de Espontaneidad',
      definition: 'Ilusión de expresión natural creada mediante elaborada artificialidad',
      importance: 'fundamental',
      relatedTerms: ['naturalización', 'artificio', 'improvisación']
    },
    {
      term: 'Diegético/No-diegético',
      definition: 'Números musicales justificados narrativamente vs. convención pura',
      importance: 'fundamental',
      relatedTerms: ['justificación', 'convención', 'integración']
    },
    {
      term: 'Comunidad Utópica',
      definition: 'Ideal de armonía colectiva alcanzado en números grupales',
      importance: 'important',
      relatedTerms: ['utopía', 'colectividad', 'armonía']
    },
    {
      term: 'Auto-reflexividad',
      definition: 'Cómo el musical comenta sobre el entretenimiento mismo',
      importance: 'important',
      relatedTerms: ['metacine', 'reflexividad', 'backstage']
    },
    {
      term: 'Integración',
      definition: 'Grado en que números musicales se unen orgánicamente a la narrativa',
      importance: 'important',
      relatedTerms: ['unidad', 'fragmentación', 'flujo']
    },
    {
      term: 'Bricolage',
      definition: 'Ensamblaje de elementos diversos en el número musical',
      importance: 'important',
      relatedTerms: ['mezcla', 'pastiche', 'collage']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación del mito de espontaneidad',
      description: 'Analizar cómo se naturaliza la artificialidad',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar momentos de "inspiración" súbita',
        'Notar cómo se justifica el canto/baile',
        'Identificar tensión preparación/espontaneidad'
      ],
      commonMistakes: [
        'Tomar espontaneidad al pie de la letra',
        'Ignorar trabajo de naturalización'
      ]
    },
    {
      order: 2,
      name: 'Análisis diegético/no-diegético',
      description: 'Clasificar y examinar tipos de números musicales',
      timeEstimate: 45,
      difficulty: 'basic',
      tips: [
        'Identificar fuente de música en la narrativa',
        'Notar transiciones entre modos',
        'Analizar función de cada tipo'
      ]
    },
    {
      order: 3,
      name: 'Examen de auto-reflexividad',
      description: 'Identificar comentarios sobre el entretenimiento',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar musicales backstage',
        'Identificar tematización del espectáculo'
      ]
    },
    {
      order: 4,
      name: 'Análisis de comunidad utópica',
      description: 'Examinar construcción de armonía colectiva',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Evaluación de integración',
      description: 'Analizar relación números/narrativa',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Estudio del bricolage',
      description: 'Examinar mezcla de elementos en números',
      timeEstimate: 30,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Teoría específica y profunda del musical',
    'Revela ideología detrás de la forma',
    'Análisis formal sofisticado',
    'Conecta estética con función social',
    'Influyente en estudios posteriores',
    'Claridad conceptual y aplicabilidad'
  ],
  
  limitations: [
    'Enfoque principalmente en era clásica Hollywood',
    'Menos aplicable a musicales no-americanos',
    'Puede sobre-interpretar conservadurismo',
    'Ignora placeres queer del género',
    'Minimiza dimensiones raciales',
    'Visión algo determinista de la ideología'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Jane Feuer'],
      title: 'The Hollywood Musical',
      year: 1993,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Jane Feuer'],
      title: 'The Self-Reflexive Musical and the Myth of Entertainment',
      year: 1977,
      journal: 'Quarterly Review of Film Studies',      
      pages: '313-326',
      essential: true
    },
    {
      type: 'book',
      authors: ['Jane Feuer'],
      title: 'The International Art Musical: Defining and Periodising the Post-1980s Musical',
      year: 2010,      
      publisher: 'BFI',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Singin\' in the Rain',
        year: 1952,
        director: 'Stanley Donen, Gene Kelly'
      },
      analysisExcerpt: `Singin' in the Rain epitomiza la auto-reflexividad del musical backstage. El mito de espontaneidad opera perfectamente: Gene Kelly "espontáneamente" baila bajo la lluvia en número elaboradamente coreografiado. El film tematiza la transición al sonoro, comentando sobre la artificialidad del cine mientras la celebra. Números diegéticos (ensayos) se transforman fluidamente en no-diegéticos (fantasías). La comunidad utópica se forma alrededor del "verdadero" talento vs. artificio (Lina). Paradójicamente, celebra autenticidad mediante máxima artificialidad. El bricolage mezcla elementos de vaudeville, cine mudo, y Broadway.`,
      insightsGenerated: [
        'El musical puede ser auto-reflexivo sin ser crítico',
        'La espontaneidad requiere máxima preparación',
        'La artificialidad puede celebrar autenticidad'
      ],
      methodologyApplication: 'Análisis de auto-reflexividad y mito de espontaneidad',
      keyFindings: [
        'Singin\' in the Rain es meta-musical perfecto',
        'La reflexividad sirve para afirmar, no criticar',
        'El musical clásico reconcilia todas sus contradicciones'
      ]
    },
    {
      film: {
        title: 'Chicago',
        year: 2002,
        director: 'Rob Marshall'
      },
      analysisExcerpt: `Chicago representa evolución posmoderna del musical que Feuer anticipó. Todos los números son explícitamente no-diegéticos - fantasías en la mente de Roxie. No hay mito de espontaneidad sino artificialidad abierta. La auto-reflexividad es cínica: el showbiz como metáfora del sistema legal corrupto. No hay comunidad utópica sino individuos manipuladores. La integración es total pero irónica - los números no interrumpen porque TODO es performance. El film confirma y subvierte simultáneamente las teorías de Feuer sobre el género.`,
      insightsGenerated: [
        'El musical posmoderno abandona el mito de espontaneidad',
        'La auto-reflexividad puede ser crítica, no celebratoria',
        'La integración total puede servir al cinismo'
      ],
      methodologyApplication: 'Análisis de musical posmoderno contra modelo clásico',
      keyFindings: [
        'Chicago deconstruye convenciones que Feuer identificó',
        'El musical puede sobrevivir sin utopía comunitaria',
        'La artificialidad abierta tiene su propio poder'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'altman-american-film-musical',
      relationshipType: 'parallel',
      synergyDescription: 'Altman ofrece análisis más histórico mientras Feuer es más ideológico',
      combinedInsightPotential: 9
    },
    {
      id: 'dyer-entertainment-utopia',
      relationshipType: 'complementary',
      synergyDescription: 'Dyer teoriza la utopía que Feuer identifica en números musicales',
      combinedInsightPotential: 9
    },
    {
      id: 'williams-melodrama-mode',
      relationshipType: 'complementary',
      synergyDescription: 'Williams ve melodrama donde Feuer ve especificidad del musical',
      combinedInsightPotential: 8
    }
  ]
};
