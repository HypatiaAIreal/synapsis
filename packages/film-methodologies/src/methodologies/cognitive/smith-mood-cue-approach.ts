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

export const SMITH_MOOD_CUE_APPROACH: Methodology = {
  metadata: {
    id: 'smith-mood-cue',
    name: 'Mood Cues y Emoción',
    author: 'Greg M. Smith',
    year: 2003,
    category: 'cognitive',
    complexity: 'intermediate',
    timeToLearn: 25,
    prerequisities: ['emotion-theory', 'film-style'],
    culturalContext: 'Teoría cognitiva del estado anímico cinematográfico',
    language: 'es'
  },
  
  description: `Greg M. Smith desarrolló el modelo de "mood-cue approach" que explica cómo los films crean y mantienen estados emocionales sostenidos. A diferencia de teorías que se centran en momentos emocionales puntuales, Smith analiza cómo las películas construyen "emotional orientations" - predisposiciones afectivas que colorean toda la experiencia. Su teoría examina cómo múltiples canales (música, color, ritmo, actuación) trabajan sinérgicamente para crear "moods" (estados de ánimo) que preparan emociones específicas. Smith distingue entre "emotion episodes" (breves e intensos) y "moods" (duraderos y difusos), mostrando cómo los segundos facilitan los primeros.`,
  
  keyConcepts: [
    {
      term: 'Mood Cues',
      definition: 'Señales múltiples y redundantes que establecen estado anímico',
      importance: 'fundamental',
      relatedTerms: ['señales afectivas', 'indicadores anímicos']
    },
    {
      term: 'Emotional Orientation',
      definition: 'Predisposición afectiva sostenida que colorea la experiencia',
      importance: 'fundamental',
      relatedTerms: ['tono emocional', 'atmósfera']
    },
    {
      term: 'Mood vs. Emotion',
      definition: 'Estados duraderos/difusos vs. respuestas breves/intensas',
      importance: 'fundamental',
      relatedTerms: ['duración afectiva', 'intensidad']
    },
    {
      term: 'Synergistic Channels',
      definition: 'Múltiples elementos estilísticos trabajando coordinadamente',
      importance: 'important',
      relatedTerms: ['redundancia', 'refuerzo']
    },
    {
      term: 'Emotional Anchors',
      definition: 'Elementos que fijan y refuerzan estados emocionales',
      importance: 'important',
      relatedTerms: ['leitmotiv emocional', 'fijación afectiva']
    }
  ],
  
  applicationProcess: [
    {
      order: 1,
      name: 'Identificar emotional orientation',
      description: 'Determinar el estado anímico base del film',
      timeEstimate: 30,
      difficulty: 'basic',
      tips: [
        'Evaluar primeras escenas cuidadosamente',
        'Buscar consistencias entre elementos',
        'Notar el "tono" general establecido'
      ],
      commonMistakes: [
        'Confundir emociones puntuales con mood general',
        'Ignorar sutilezas del establecimiento anímico'
      ]
    },
    {
      order: 2,
      name: 'Mapear mood cues',
      description: 'Catalogar señales en cada canal expresivo',
      timeEstimate: 60,
      difficulty: 'intermediate',
      tips: [
        'Examinar música, color, ritmo, actuación, encuadre',
        'Buscar patrones recurrentes',
        'Notar refuerzos entre canales'
      ]
    },
    {
      order: 3,
      name: 'Analizar sinergia',
      description: 'Examinar cómo trabajan juntos los canales',
      timeEstimate: 45,
      difficulty: 'intermediate',
      tips: [
        'Identificar momentos de convergencia máxima',
        'Notar contrapuntos o tensiones'
      ]
    },
    {
      order: 4,
      name: 'Distinguir mood/emotion',
      description: 'Separar base anímica de picos emocionales',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 5,
      name: 'Localizar emotional anchors',
      description: 'Identificar elementos de fijación emocional',
      timeEstimate: 30,
      difficulty: 'intermediate'
    },
    {
      order: 6,
      name: 'Evaluar mantenimiento del mood',
      description: 'Analizar cómo se sostiene el estado anímico',
      timeEstimate: 45,
      difficulty: 'advanced'
    }
  ],
  
  strengths: [
    'Análisis holístico del afecto cinematográfico',
    'Atiende a duración y sostenimiento emocional',
    'Considera múltiples canales expresivos',
    'Útil para análisis de géneros y estilos',
    'Método sistemático pero flexible'
  ],
  
  limitations: [
    'Distinción mood/emotion a veces problemática',
    'Complejidad de interacciones entre canales',
    'Menos útil para cine emocionalmente fragmentado',
    'Puede simplificar respuestas individuales variables'
  ],
  
  bibliography: [
    {
      type: 'book',
      authors: ['Greg M. Smith'],
      title: 'Film Structure and the Emotion System',
      year: 2003,
      publisher: 'Cambridge University Press',
      essential: true
    },
    {
      type: 'article',
      authors: ['Greg M. Smith'],
      title: 'Local Emotions, Global Moods, and Film Structure',
      year: 1999,
      journal: 'Passionate Views',
      publisher: 'Johns Hopkins University Press',
      essential: true
    },
    {
      type: 'book',
      authors: ['Ed S. Tan'],
      title: 'Emotion and the Structure of Narrative Film',
      year: 1996,
      publisher: 'Lawrence Erlbaum',
      essential: false
    }
  ],
  
  examples: [
    {
      film: {
        title: 'Amélie',
        year: 2001,
        director: 'Jean-Pierre Jeunet'
      },
      analysisExcerpt: `Amélie ejemplifica perfectamente el mood-cue approach con saturación estilística. Emotional orientation: caprichosa/optimista establecida desde los créditos. Mood cues omnipresentes: paleta verde-roja, música de acordeón, movimientos de cámara juguetones, actuación estilizada. Sinergia máxima entre todos los canales. Los emotion episodes (descubrimientos, pequeñas venganzas) emergen naturalmente del mood base. Emotional anchors en objetos (caja de tesoros, álbum de fotos) y música recurrente. El film mantiene coherencia anímica absoluta.`,
      insightsGenerated: [
        'La saturación de mood cues crea mundo emocional hermético',
        'La coherencia estilística sostiene la orientación emocional',
        'Los emotional anchors funcionan como leitmotivs afectivos'
      ],
      methodologyApplication: 'Análisis de saturación y coherencia de mood cues',
      keyFindings: [
        'Jeunet crea un sistema emocional total',
        'La redundancia estilística refuerza más que agota',
        'El mood permite emociones complejas dentro de tono consistente'
      ]
    },
    {
      film: {
        title: 'The Social Network',
        year: 2010,
        director: 'David Fincher'
      },
      analysisExcerpt: `The Social Network establece un mood frío/acelerado desde la escena inicial. Mood cues: paleta azul-gris, música electrónica pulsante de Reznor/Ross, diálogos rápidos, edición precisa. La emotional orientation es ambivalente: emoción del éxito + vacío de las relaciones. Los canales trabajan en tensión productiva: música enérgica sobre imágenes de aislamiento. Emotional anchors en la música y en espacios recurrentes (deposiciones, dormitorio). El mood sostiene una crítica emocional de la era digital.`,
      insightsGenerated: [
        'Los mood cues pueden crear ambivalencia productiva',
        'La tensión entre canales genera complejidad emocional',
        'El mood frío puede sostener crítica social'
      ],
      methodologyApplication: 'Análisis de mood cues en tensión y ambivalencia',
      keyFindings: [
        'Fincher usa el mood para comentario social',
        'La frialdad estilística refleja frialdad temática',
        'Los mood cues pueden trabajar dialécticamente'
      ]
    }
  ],
  
  relatedMethodologies: [
    {
      id: 'plantinga-emotion',
      relationshipType: 'synthetic',
      synergyDescription: 'Plantinga y Smith colaboraron en teorizar emoción cinematográfica',
      combinedInsightPotential: 9
    },
    {
      id: 'bellour-analysis',
      relationshipType: 'complementary',
      synergyDescription: 'Bellour también analiza sistemas de repetición y variación',
      combinedInsightPotential: 7
    },
    {
      id: 'color-theory',
      relationshipType: 'complementary',
      synergyDescription: 'La teoría del color es crucial para mood cues visuales',
      combinedInsightPotential: 8
    }
  ]
};
