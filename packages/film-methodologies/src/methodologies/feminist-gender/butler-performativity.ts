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

export const BUTLER_PERFORMATIVITY: Methodology = {
  metadata: {
    id: 'butler-performativity',
    name: 'Performatividad de Género',
    author: 'Judith Butler',
    year: 1990,
    category: 'feminist-gender',
    complexity: 'advanced',
    timeToLearn: 40,
    prerequisities: ['gender-theory', 'post-structuralism'],
    culturalContext: 'Teoría queer post-estructuralista',
    language: 'es'
  },
  
  description: `Judith Butler transformó los estudios de género con su teoría de la performatividad, argumentando que el género no es algo que somos sino algo que hacemos repetidamente. Para el análisis cinematográfico, esto significa que las películas no simplemente representan géneros preexistentes sino que participan activamente en su construcción a través de la repetición estilizada de actos. Butler deconstruye la distinción sexo/género, mostrando cómo ambos son construcciones culturales naturalizadas a través de la reiteración. En el cine, esto se manifiesta en códigos visuales, gestuales, y narrativos que producen la ilusión de géneros naturales y estables. Su trabajo sobre la "matriz heterosexual" revela cómo el cine mainstream refuerza la coherencia obligatoria entre sexo, género y deseo heterosexual.`,
  
  keyConcepts: [
    {
      term: 'Gender Performativity',
      definition: 'El género como efecto de actos repetidos que crean la ilusión de esencia',
      importance: 'fundamental',
      relatedTerms: ['iteración', 'construcción', 'actos de género']
    },
    {
      term: 'Heterosexual Matrix',
      definition: 'Sistema que exige coherencia entre sexo, género y deseo heterosexual',
      importance: 'fundamental',
      relatedTerms: ['heteronormatividad', 'coherencia obligatoria']
    },
    {
      term: 'Regulatory Fiction',
      definition: 'El género como ficción reguladora que se presenta como natural',
      importance: 'fundamental',
      relatedTerms: ['naturalización', 'norma reguladora']
    },
    {
      term: 'Citationality',
      definition: 'Cómo los actos de género citan y reiteran normas previas',
      importance: 'important',
      relatedTerms: ['repetición', 'iterabilidad']
    },
    {
      term: 'Subversive Repetition',
      definition: 'Repetición con diferencia que puede desestabilizar normas',
      importance: 'important',
      relatedTerms: ['resignificación', 'resistencia']
    },
    {
      term: 'Drag',
      definition: 'Performance que revela el carácter construido del género',
      importance: 'important',
      relatedTerms: ['parodia', 'imitación']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de actos performativos',
      description: 'Catalogar gestos, posturas, movimientos que constituyen género',
      timeEstimate: 60,
      difficulty: 'advanced',
      tips: [
        'Observar micro-gestos y posturas corporales',
        'Analizar formas de hablar, caminar, mirar',
        'Notar qué actos se repiten para establecer género'
      ],
      commonMistakes: [
        'Confundir performance teatral con performatividad',
        'Buscar solo actos exagerados o evidentes'
      ]
    },
    {
      order: 2,
      name: 'Análisis de la matriz heterosexual',
      description: 'Examinar cómo se impone coherencia sexo-género-deseo',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Identificar momentos de "corrección" de género',
        'Analizar cómo se castiga la incoherencia'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de citacionalidad',
      description: 'Identificar qué normas previas se están citando',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Reconocer referencias a ideales de género',
        'Ver cómo se invocan normas históricas'
      ]
    },
    {
      order: 4,
      name: 'Examen de drag/parodia',
      description: 'Localizar momentos que revelan la construcción del género',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Identificación de subversiones',
      description: 'Encontrar repeticiones que desestabilizan normas',
      timeEstimate: 45,
      difficulty: 'advanced'
    },
    {
      order: 6,
      name: 'Análisis de materialización',
      description: 'Examinar cómo los cuerpos llegan a importar según normas de género',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Desnaturaliza completamente el género como esencia',
    'Marco teórico revolucionario con implicaciones políticas',
    'Aplicable a cualquier representación cinematográfica',
    'Abre posibilidades para resistencia y cambio',
    'Influencia fundamental en estudios queer y trans'
  ],
  
  limitations: [
    'Alta abstracción teórica dificulta aplicación práctica',
    'Debate sobre voluntarismo vs. determinismo en la teoría',
    'Puede minimizar materialidad corporal y violencia',
    'Jerga técnica densa puede ser excluyente'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Judith Butler'],
      title: 'Gender Trouble: Feminism and the Subversion of Identity',
      year: 1990,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Judith Butler'],
      title: 'Bodies That Matter: On the Discursive Limits of Sex',
      year: 1993,
      publisher: 'Routledge',
      essential: true
    },
    {
      type: 'book',
      authors: ['Judith Butler'],
      title: 'Undoing Gender',
      year: 2004,
      publisher: 'Routledge',
      essential: false
    },
    {
      type: 'book',
      authors: ['Judith Butler'],
      title: 'Notes Toward a Performative Theory of Assembly',
      year: 2015,
      publisher: 'Harvard University Press',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Paris Is Burning',
        year: 1990,
        director: 'Jennie Livingston'
      },
      analysisExcerpt: `Paris Is Burning es el ejemplo cinematográfico perfecto de la performatividad butleriana. Los balls documentados muestran el género como performance elaborada donde la "realness" (pasar por real) revela paradójicamente la artificialidad de todo género. Las categorías competitivas (Executive Realness, Femme Queen) muestran cómo se cita y reitera un ideal nunca plenamente alcanzable. El drag no imita un original sino que revela que no hay original, solo copias de copias. Los participantes subvierten mediante repetición excesiva, pero también revelan cómo la performatividad puede ser supervivencia para sujetos marginalizados.`,
      insightsGenerated: [
        'El drag revela que todo género es imitación sin original',
        'La "realness" muestra la imposibilidad de encarnar plenamente el género',
        'La performatividad puede ser tanto subversión como supervivencia'
      ],
      methodologyApplication: 'Análisis de balls como laboratorio de performatividad de género',
      keyFindings: [
        'El documental captura la performatividad en acción',
        'Las categorías de competencia revelan la citacionalidad del género',
        'La subversión no garantiza liberación de las normas'
      ]
    },
    {
      film: {
        title: 'Boys Don\'t Cry',
        year: 1999,
        director: 'Kimberly Peirce'
      },
      analysisExcerpt: `Boys Don't Cry muestra trágicamente el poder de la matriz heterosexual. Brandon Teena performa masculinidad a través de actos repetidos: forma de vestir, caminar, cortejar. Su éxito en "pasar" demuestra que el género es performativo, no esencial. Pero cuando su "incoherencia" corporal es descubierta, la violencia extrema busca restaurar la matriz heterosexual. El film muestra que mientras el género es performativo, las consecuencias de transgredir las normas son brutalmente materiales. La performatividad no es voluntarista: Brandon no puede simplemente elegir su género sin consecuencias.`,
      insightsGenerated: [
        'La performatividad exitosa del género demuestra su construcción',
        'La violencia busca restaurar la coherencia de la matriz heterosexual',
        'La materialidad del cuerpo emerge en momentos de crisis normativa'
      ],
      methodologyApplication: 'Análisis de performatividad trans y violencia normativa',
      keyFindings: [
        'El género es performativo pero con consecuencias materiales',
        'La matriz heterosexual se mantiene mediante violencia',
        'La performatividad no es simple elección voluntaria'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'de-lauretis-technologies',
      relationshipType: 'complementary',
      synergyDescription: 'De Lauretis muestra cómo las tecnologías producen el género que Butler teoriza como performativo',
      combinedInsightPotential: 9
    },
    {
      id: 'austin-speech-acts',
      relationshipType: 'complementary',
      synergyDescription: 'Butler adapta la teoría de actos de habla de Austin a los actos de género',
      combinedInsightPotential: 8
    },
    {
      id: 'foucault-discourse',
      relationshipType: 'complementary',
      synergyDescription: 'Butler aplica análisis foucaultiano del discurso a la construcción del género',
      combinedInsightPotential: 9
    }
  ]
};
