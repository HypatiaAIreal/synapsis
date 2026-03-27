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

export const WOLLEN_SIGNS_MEANING: Methodology = {
  metadata: {
    id: 'wollen-signs-meaning',
    name: 'Signos y Significación',
    author: 'Peter Wollen',
    year: 1969,
    category: 'semiotic',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['peirce-semiotics'],
    culturalContext: 'Semiótica peirceana aplicada al cine',
    language: 'es'
  },
  
  description: `Peter Wollen fue crucial en introducir la semiótica peirceana al análisis cinematográfico, complementando el modelo saussureano dominante. Su aplicación de la tricotomía de Charles Sanders Peirce - ícono (semejanza), índice (conexión causal) y símbolo (convención) - reveló la complejidad semiótica de la imagen cinematográfica. Wollen demostró que el cine combina los tres tipos: icónico (las imágenes se parecen a sus referentes), indexical (la fotografía como huella lumínica) y simbólico (convenciones narrativas y culturales). Su análisis del cine de autor mostró cómo los directores crean sistemas de significación personales dentro de convenciones de género. Wollen también conectó semiótica con política, analizando cómo diferentes prácticas significantes implican diferentes políticas de representación.`,
  
  keyConcepts: [
    {
      term: 'Tricotomía Peirceana',
      definition: 'Clasificación de signos en Ícono (semejanza), Índice (causalidad), Símbolo (convención)',
      importance: 'fundamental',
      relatedTerms: ['signo', 'Peirce', 'clasificación']
    },
    {
      term: 'Indexicalidad Fotográfica',
      definition: 'La imagen cinematográfica como huella física de la luz',
      importance: 'fundamental',
      relatedTerms: ['fotografía', 'huella', 'realismo']
    },
    {
      term: 'Iconicidad Cinemática',
      definition: 'Semejanza visual entre imagen y referente, potenciada por movimiento',
      importance: 'fundamental',
      relatedTerms: ['semejanza', 'representación', 'imagen']
    },
    {
      term: 'Autorismo Semiótico',
      definition: 'Sistema personal de signos y significados creado por un director',
      importance: 'important',
      relatedTerms: ['autor', 'estilo', 'sistema personal']
    },
    {
      term: 'Counter-Cinema',
      definition: 'Práctica cinematográfica que desafía los códigos dominantes',
      importance: 'important',
      relatedTerms: ['vanguardia', 'oposición', 'política']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de tipos de signos',
      description: 'Clasificar elementos como icónicos, indexicales o simbólicos',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Un mismo elemento puede funcionar en los tres niveles',
        'Considerar el contexto de interpretación',
        'No todos los signos encajan perfectamente en una categoría'
      ],
      commonMistakes: [
        'Ver las categorías como mutuamente excluyentes',
        'Ignorar la dimensión simbólica de imágenes "realistas"'
      ]
    },
    {
      order: 2,
      name: 'Análisis de mezclas semióticas',
      description: 'Examinar cómo se combinan diferentes tipos de signos',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Buscar predominancias en diferentes momentos',
        'Analizar transiciones entre tipos de signos'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de sistemas autorales',
      description: 'Identificar patrones de signos recurrentes en la obra de un director',
      timeEstimate: 90,
      difficulty: 'advanced',
      tips: [
        'Comparar múltiples films del mismo director',
        'Buscar evoluciones y constantes'
      ]
    },
    {
      order: 4,
      name: 'Identificación de antinomias',
      description: 'Localizar oposiciones estructurantes en el sistema del autor',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Análisis de reflexividad',
      description: 'Examinar momentos donde los signos se señalan a sí mismos',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación política del signo',
      description: 'Analizar implicaciones ideológicas de las elecciones semióticas',
      timeEstimate: 60,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Introduce modelo peirceano más rico que el saussureano',
    'Conecta semiótica con teoría del autor',
    'Incluye dimensión política del análisis',
    'Especialmente útil para cine experimental',
    'Claridad conceptual de las categorías',
    'Influencia duradera en teoría del cine'
  ],
  
  limitations: [
    'Simplifica la complejidad de Peirce',
    'El autorismo puede ser limitante',
    'Menos sistemático que otros enfoques',
    'Aplicación a veces inconsistente',
    'Sesgo hacia ciertos directores canónicos'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Peter Wollen'],
      title: 'Signs and Meaning in the Cinema',
      year: 1972,
      publisher: 'Indiana University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Peter Wollen'],
      title: 'Readings and Writings: Semiotic Counter-Strategies',
      year: 1982,
      publisher: 'Verso',
      essential: true
    },
    {
      type: 'book',
      authors: ['Peter Wollen'],
      title: 'Raiding the Icebox: Reflections on Twentieth-Century Culture',
      year: 1993,
      publisher: 'Indiana University Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Charles Sanders Peirce'],
      title: 'Philosophical Writings',
      year: 1955,
      publisher: 'Dover Publications',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Searchers',
        year: 1956,
        director: 'John Ford'
      },
      analysisExcerpt: `Wollen analiza The Searchers revelando el sistema semiótico de Ford. Iconicidad: paisajes del Monument Valley como imagen del Oeste. Indexicalidad: huellas, rastros, señales de humo como índices narrativos cruciales. Simbolismo: la casa/wilderness, civilización/salvajismo, puerta como umbral simbólico. Ford crea antinomias sistemáticas: hogar/errancia, integración/exclusión, blanco/indio. El famoso plano final de la puerta es simultáneamente icónico (imagen de Wayne), indexical (su sombra real) y simbólico (exclusión de la civilización).`,
      insightsGenerated: [
        'Ford integra magistralmente los tres tipos de signos',
        'Las antinomias estructuran toda la obra fordiana',
        'El western permite pureza semiótica: iconos de iconos'
      ],
      methodologyApplication: 'Análisis de integración de tipos de signos y sistema autoral',
      keyFindings: [
        'El paisaje funciona simultáneamente como ícono, índice y símbolo',
        'Ford construye un sistema coherente a través de su obra',
        'Los grandes autores crean gramáticas personales'
      ]
    },
    {
      film: {
        title: 'Blow-Up',
        year: 1966,
        director: 'Michelangelo Antonioni'
      },
      analysisExcerpt: `Blow-Up interroga directamente la naturaleza semiótica de la fotografía/cine. El fotógrafo busca índices (evidencia del crimen) en lo que parece pura iconicidad (semejanza con el parque). Las ampliaciones destruyen la iconicidad revelando el grano fotográfico - pura indexicalidad sin imagen. El simbolismo emerge en la ambigüedad: ¿qué significan las imágenes? El partido de tenis mimo final es puro símbolo sin iconicidad ni indexicalidad. Antonioni deconstruye la confianza en la imagen fotográfica como evidencia.`,
      insightsGenerated: [
        'La ampliación revela el conflicto entre iconicidad e indexicalidad',
        'La búsqueda de significado puede destruir el signo',
        'Antonioni cuestiona la tricotomía misma'
      ],
      methodologyApplication: 'Análisis de la investigación semiótica como tema',
      keyFindings: [
        'El cine puede tematizar su propia naturaleza semiótica',
        'Los límites entre tipos de signos son problemáticos',
        'La indexicalidad no garantiza verdad'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'bazin-ontology',
      relationshipType: 'complementary',
      synergyDescription: 'Bazin enfatiza indexicalidad que Wollen analiza semióticamente',
      combinedInsightPotential: 9
    },
    {
      id: 'barthes-photography',
      relationshipType: 'parallel',
      synergyDescription: 'Barthes en Camera Lucida explora similar territorio sobre índice fotográfico',
      combinedInsightPotential: 8
    },
    {
      id: 'auteur-theory',
      relationshipType: 'complementary',
      synergyDescription: 'Wollen da base semiótica a la teoría del autor',
      combinedInsightPotential: 8
    }
  ]
};
