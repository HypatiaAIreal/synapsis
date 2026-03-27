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

export const SOLANAS_GETINO_THIRD_CINEMA: Methodology = {
  metadata: {
    id: 'solanas-getino-third-cinema',
    name: 'Tercer Cine',
    author: ['Fernando Solanas', 'Octavio Getino'],
    year: 1969,
    category: 'postcolonial-decolonial',
    complexity: 'intermediate',
    timeToLearn: 30,
    prerequisities: ['latin-american-history', 'marxism-basics'],
    culturalContext: 'Cine militante latinoamericano',
    language: 'es'
  },
  
  description: `Fernando Solanas y Octavio Getino lanzaron el manifiesto "Hacia un tercer cine" que revolucionó el pensamiento sobre cine político en el Tercer Mundo. Rechazando tanto el "primer cine" (Hollywood comercial) como el "segundo cine" (cine de autor europeo), propusieron un "tercer cine" militante al servicio de la liberación. Este cine no busca espectadores sino actores históricos, no contemplación sino acción. Su concepto de "cine-acto" transforma la proyección en asamblea política. El "film-ensayo" mezcla géneros para crear armas ideológicas. Su análisis de la "colonización cultural" muestra cómo el cine dominante perpetúa dependencia mental. El tercer cine es cine imperfecto, urgente, peligroso - que arriesga la estética por la eficacia política.`,
  
  keyConcepts: [
    {
      term: 'Tercer Cine',
      definition: 'Cine militante de liberación que busca transformación revolucionaria',
      importance: 'fundamental',
      relatedTerms: ['cine militante', 'cine guerrilla']
    },
    {
      term: 'Primer/Segundo Cine',
      definition: 'Hollywood comercial / Cine de autor burgués, ambos rechazados',
      importance: 'fundamental',
      relatedTerms: ['cine dominante', 'cine burgués']
    },
    {
      term: 'Cine-Acto',
      definition: 'Proyección como acción política y espacio de organización',
      importance: 'fundamental',
      relatedTerms: ['cine-debate', 'cine-asamblea']
    },
    {
      term: 'Film-Ensayo',
      definition: 'Forma híbrida que mezcla géneros para eficacia ideológica',
      importance: 'important',
      relatedTerms: ['documental militante', 'ensayo audiovisual']
    },
    {
      term: 'Colonización Cultural',
      definition: 'Dominación mental a través de productos culturales hegemónicos',
      importance: 'important',
      relatedTerms: ['imperialismo cultural', 'dependencia mental']
    },
    {
      term: 'Cine Imperfecto',
      definition: 'Estética de urgencia que prioriza mensaje sobre forma',
      importance: 'important',
      relatedTerms: ['estética guerrilla', 'anti-profesionalismo']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Clasificación de posición cinematográfica',
      description: 'Determinar si el film pertenece al primer, segundo o tercer cine',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Examinar objetivos: comercial, artístico o político',
        'Analizar relación con industria y audiencia',
        'Identificar compromiso revolucionario'
      ],
      commonMistakes: [
        'Confundir temática política con tercer cine',
        'Ignorar films que mezclan categorías'
      ]
    },
    {
      order: 2,
      name: 'Análisis de militancia',
      description: 'Evaluar compromiso político y revolucionario del film',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar llamados directos a la acción',
        'Identificar análisis de contradicciones sociales',
        'Examinar propuestas de transformación'
      ]
    },
    {
      order: 3,
      name: 'Búsqueda de cine-acto',
      description: 'Identificar elementos que activan participación política',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Buscar interpelaciones directas al espectador',
        'Identificar momentos de ruptura contemplativa',
        'Examinar uso previsto del film'
      ]
    },
    {
      order: 4,
      name: 'Análisis de forma ensayística',
      description: 'Examinar mezclas genéricas y experimentación formal',
      timeEstimate: 60,
      difficulty: 'advanced'
    },
    {
      order: 5,
      name: 'Identificación de descolonización',
      description: 'Buscar elementos que combaten colonización mental',
      timeEstimate: 45,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluación de imperfección productiva',
      description: 'Analizar cómo la urgencia política determina la forma',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 7,
      name: 'Análisis de eficacia política',
      description: 'Evaluar potencial movilizador y conscientizador',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Radicalidad política necesaria en contextos de opresión',
    'Conecta teoría con praxis revolucionaria',
    'Crea nuevas formas más allá de modelos dominantes',
    'Influencia duradera en cine político global',
    'Democratización de medios de producción'
  ],
  
  limitations: [
    'Dogmatismo puede limitar experimentación estética',
    'Contexto histórico específico de los 60-70',
    'Rechazo del placer puede alienar audiencias',
    'Dificultad de sostenibilidad económica',
    'Binarios pueden simplificar realidades complejas'
  ],
  
  bibliography: [
    {
      type: 'article',
      authors: ['Fernando Solanas', 'Octavio Getino'],
      title: 'Towards a Third Cinema',
      year: 1969,
      journal: 'Tricontinental',
      pages: '107-132',
      essential: true
    },
    {
      type: 'book',
      authors: ['Octavio Getino', 'Susana Velleggia'],
      title: 'El cine de las historias de la revolución',
      year: 2002,
      publisher: 'Altamira',
      essential: false
    },
    {
      type: 'book',
      authors: ['Mike Wayne'],
      title: 'Political Film: The Dialectics of Third Cinema',
      year: 2001,
      publisher: 'Pluto Press',
      essential: false
    },
    {
      type: 'book',
      authors: ['Anthony Guneratne', 'Wimal Dissanayake'],
      title: 'Rethinking Third Cinema',
      year: 2003,
      publisher: 'Routledge',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'The Hour of the Furnaces',
        year: 1968,
        director: "Fernando Solanas, Octavio Getino"
      },
      analysisExcerpt: `La Hora de los Hornos es el tercer cine paradigmático. Film-ensayo de 4 horas dividido en actos para proyección-debate. Mezcla todos los géneros: documental, ficción, animación, found footage. Interpela directamente: "Cada espectador es un cobarde o un traidor". Incluye pausas para discusión colectiva. Analiza sistemáticamente el neocolonialismo argentino. Forma urgente, imperfecta, efectiva. No busca contemplación estética sino acción revolucionaria. Cine como arma de descolonización mental y material.`,
      insightsGenerated: [
        'El tercer cine requiere nuevas formas de exhibición',
        'La imperfección técnica puede ser virtud política',
        'El cine-acto transforma relación film-espectador'
      ],
      methodologyApplication: 'Ejemplo fundacional de todos los principios del tercer cine',
      keyFindings: [
        'La forma debe ser tan revolucionaria como el contenido',
        'El tercer cine crea sus propios circuitos de distribución',
        'La eficacia política justifica cualquier medio expresivo'
      ]
    },
    {
      film: {
        title: 'I Am Not Your Negro',
        year: 2016,
        director: 'Raoul Peck'
      },
      analysisExcerpt: `Peck actualiza el tercer cine para el siglo XXI. Film-ensayo basado en Baldwin que conecta pasado y presente del racismo estadounidense. Rechaza contemplación liberal por análisis estructural. Forma híbrida: archivo, animación, música. Interpela directamente la complicidad blanca. Producción intersticial entre documental mainstream y cine militante. Demuestra que el tercer cine puede evolucionar sin perder radicalidad política. Descolonización de la historia oficial estadounidense.`,
      insightsGenerated: [
        'El tercer cine contemporáneo puede usar canales mainstream',
        'La forma ensayística sigue siendo políticamente efectiva',
        'La descolonización mental permanece urgente'
      ],
      methodologyApplication: 'Adaptación contemporánea de principios del tercer cine',
      keyFindings: [
        'Los principios del tercer cine trascienden su contexto original',
        'Nuevas tecnologías permiten nuevas formas de cine militante',
        'La urgencia política sigue determinando la forma'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'rocha-hunger-aesthetics',
      relationshipType: 'parallel',
      synergyDescription: 'Rocha desarrolla estética del hambre contemporánea al tercer cine',
      combinedInsightPotential: 9
    },
    {
      id: 'espinosa-imperfect-cinema',
      relationshipType: 'complementary',
      synergyDescription: 'Espinosa teoriza el cine imperfecto que complementa el tercer cine',
      combinedInsightPotential: 9
    },
    {
      id: 'fanon-decolonization',
      relationshipType: 'complementary',
      synergyDescription: 'Fanon proporciona base teórica para la descolonización que busca el tercer cine',
      combinedInsightPotential: 9
    }
  ]
};
