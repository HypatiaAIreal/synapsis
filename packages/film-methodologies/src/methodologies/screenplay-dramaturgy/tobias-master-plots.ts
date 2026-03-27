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

export const TOBIAS_MASTER_PLOTS: Methodology = {
  metadata: {
    id: 'tobias-master-plots',
    name: '20 Tramas Maestras',
    author: 'Ronald Tobias',
    year: 1993,
    category: 'screenplay-dramaturgy',
    complexity: 'basic',
    timeToLearn: 20,
    prerequisities: [],
    culturalContext: 'Análisis de patrones narrativos universales',
    language: 'es'
  },
  
  description: `Ronald Tobias propuso que todas las historias pueden clasificarse en 20 "tramas maestras" fundamentales que han persistido a través de culturas y épocas. A diferencia de enfoques estructurales, Tobias se centra en patrones temáticos y situacionales que definen el conflicto central de cualquier narrativa. Cada trama maestra tiene sus propias convenciones, expectativas y variaciones posibles. Su sistema ayuda a los escritores a identificar el motor dramático de su historia y comprender las expectativas del género que están trabajando. Tobias enfatiza que estas tramas no son fórmulas rígidas sino patrones flexibles que pueden combinarse, subvertirse o reinventarse.`,
  
  keyConcepts: [
    {
      term: '20 Tramas Maestras',
      definition: 'Búsqueda, Aventura, Persecución, Rescate, Escape, Venganza, Enigma, Rivalidad, Desvalido, Tentación, Metamorfosis, Transformación, Maduración, Amor, Amor Prohibido, Sacrificio, Descubrimiento, Precio del Exceso, Ascenso, Caída',
      importance: 'fundamental',
      relatedTerms: ['arquetipos narrativos', 'patrones universales']
    },
    {
      term: 'Patrones Temáticos',
      definition: 'Conflictos universales humanos que trascienden culturas y épocas',
      importance: 'fundamental',
      relatedTerms: ['temas universales', 'conflictos arquetípicos']
    },
    {
      term: 'Motor Dramático',
      definition: 'El conflicto o búsqueda central que impulsa cada tipo de trama',
      importance: 'important',
      relatedTerms: ['conflicto central', 'fuerza narrativa']
    },
    {
      term: 'Convenciones de Trama',
      definition: 'Expectativas específicas que cada trama maestra genera en la audiencia',
      importance: 'important',
      relatedTerms: ['expectativas de género', 'reglas implícitas']
    },
    {
      term: 'Combinación de Tramas',
      definition: 'Uso de múltiples tramas maestras en una sola narrativa',
      importance: 'important',
      relatedTerms: ['híbridos narrativos', 'complejidad estructural']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificación de trama dominante',
      description: 'Determinar cuál de las 20 tramas define principalmente la historia',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Buscar el conflicto o búsqueda central',
        'Considerar qué pregunta dramática principal se plantea',
        'La trama dominante determina la estructura general'
      ],
      commonMistakes: [
        'Confundir tema con trama',
        'No distinguir trama principal de subtramas'
      ]
    },
    {
      order: 2,
      name: 'Reconocimiento de convenciones',
      description: 'Identificar qué expectativas genera la trama elegida',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Cada trama tiene resoluciones típicas',
        'Conocer convenciones permite subvertirlas conscientemente',
        'Las audiencias esperan ciertos elementos'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de tramas secundarias',
      description: 'Identificar otras tramas maestras presentes',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Las subtramas suelen usar diferentes tramas maestras',
        'La combinación crea riqueza narrativa',
        'Evitar demasiadas tramas simultáneas'
      ]
    },
    {
      order: 4,
      name: 'Análisis del motor dramático',
      description: 'Examinar qué impulsa específicamente la acción',
      timeEstimate: 30,
      difficulty: 'intermediate',
      tips: [
        'Cada trama tiene su propio tipo de tensión',
        'El motor debe mantenerse activo',
        'Identificar qué mantiene el interés'
      ]
    },
    {
      order: 5,
      name: 'Evaluación de variaciones',
      description: 'Analizar cómo se personaliza o subvierte la trama',
      timeEstimate: 45,
      difficulty: 'advanced',
      tips: [
        'Las mejores historias varían las convenciones',
        'Mantener lo esencial mientras se innova',
        'Las subversiones deben ser significativas'
      ]
    }
  ],
  
  strengths: [
    'Sistema comprehensivo pero flexible de clasificación',
    'Ayuda a identificar rápidamente género y expectativas',
    'Útil para desarrollo inicial y brainstorming',
    'Permite combinaciones creativas de elementos',
    'Base cultural amplia y multicultural',
    'Fácil de entender y aplicar para principiantes'
  ],
  
  limitations: [
    'Puede simplificar historias complejas excesivamente',
    'Las categorías a veces se solapan confusamente',
    'No aborda estructura específica o desarrollo',
    'Menos útil para narrativas experimentales',
    'Riesgo de pensar limitadamente en categorías'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Ronald Tobias'],
      title: '20 Master Plots: And How to Build Them',
      year: 1993,
      publisher: 'Writer\'s Digest Books',
      essential: true
    },
    {
      type: 'book',
      authors: ['Ronald Tobias'],
      title: 'Theme & Strategy',
      year: 1999,
      publisher: 'Writer\'s Digest Books',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Fugitive',
        year: 1993,
        director: 'Andrew Davis'
      },
      analysisExcerpt: `Ejemplo claro de combinación de tramas. Trama principal: PERSECUCIÓN (Kimble huyendo de Gerard). Trama secundaria: ENIGMA (¿Quién mató a Helen Kimble?). Elementos de VENGANZA (buscar justicia por su esposa). La persecución proporciona tensión constante mientras el enigma da propósito a la huida. Motor dramático dual: supervivencia física + necesidad de verdad. Convenciones de persecución subvertidas: el perseguidor (Gerard) gradualmente se vuelve aliado. La resolución satisface ambas tramas: escape exitoso Y resolución del misterio.`,
      insightsGenerated: [
        'La combinación persecución + enigma es especialmente efectiva',
        'Dos motores dramáticos pueden reforzarse mutuamente',
        'Subvertir convenciones (perseguidor→aliado) añade profundidad'
      ],
      methodologyApplication: 'Identificación clara de tramas múltiples trabajando sinérgicamente',
      keyFindings: [
        'Las mejores películas combinan múltiples tramas maestras',
        'Cada trama debe tener su propia resolución',
        'Los motores dramáticos pueden alternarse para mantener ritmo'
      ]
    },
    {
      film: {
        title: 'Pretty Woman',
        year: 1990,
        director: 'Garry Marshall'
      },
      analysisExcerpt: `Combinación de múltiples tramas maestras. Principal: AMOR (romance entre Vivian y Edward). Secundarias: TRANSFORMACIÓN (Vivian de prostituta a dama), ASCENSO (movilidad social), elementos de CENICIENTA. Motor dramático: ¿Puede el amor superar las diferencias de clase? Convenciones románticas parcialmente subvertidas: la "princesa" rescata al "príncipe" emocionalmente. La transformación es bidireccional: ella gana estatus, él gana humanidad. La trama de ASCENSO tradicionalmente termina en tragedia, pero aquí se subvierte con final feliz.`,
      insightsGenerated: [
        'El cuento de hadas moderno combina amor + transformación + ascenso',
        'Las tramas pueden reforzarse temáticamente',
        'Subvertir finales típicos puede revitalizar tramas antiguas'
      ],
      methodologyApplication: 'Análisis de cómo múltiples tramas crean cuento de hadas moderno',
      keyFindings: [
        'Las tramas románticas se enriquecen con transformación social',
        'La bidireccionalidad del cambio profundiza la historia',
        'Conocer convenciones permite subvertirlas efectivamente'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'propp-morphology',
      relationshipType: 'parallel',
      synergyDescription: 'Propp analiza funciones mientras Tobias categoriza tipos de conflicto',
      combinedInsightPotential: 7
    },
    {
      id: 'polti-dramatic-situations',
      relationshipType: 'complementary',
      synergyDescription: 'Polti\'s 36 situaciones dramáticas precedieron el trabajo de Tobias',
      combinedInsightPotential: 8
    },
    {
      id: 'booker-seven-plots',
      relationshipType: 'dialectical',
      synergyDescription: 'Booker reduce a 7 arquetipos lo que Tobias expande a 20',
      combinedInsightPotential: 7
    }
  ],
  
  digitalTools: [
    {
      name: 'Plot Generator',
      type: 'webapp',
      description: 'Generador basado en las 20 tramas maestras',
      cost: 'free',
      platforms: ['web']
    },
    {
      name: 'Master Plots Analyzer',
      type: 'software',
      description: 'Software para identificar y combinar tramas maestras',
      cost: 'paid',
      platforms: ['Windows', 'Mac']
    }
  ]
};
