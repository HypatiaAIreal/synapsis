// 🧠 SYNAPSIS - Módulo de Análisis Narrativo Automatizado
// Arquitectura para análisis cinematográfico usando metodologías clásicas

// ============================================
// TIPOS Y INTERFACES
// ============================================

interface NarrativeTheory {
  id: string;
  name: string;
  author: string;
  category: 'general' | 'screenplay';
  description: string;
  prompts: AnalysisPrompt[];
}

interface AnalysisPrompt {
  id: string;
  title: string;
  prompt: string;
  outputFormat: 'markdown' | 'structured' | 'json';
  expectedTokens: number;
}

interface AutomatedAnalysis {
  id: string;
  movieId: string;
  movieTitle: string;
  theoryId: string;
  theoryName: string;
  content: string;
  insights: Insight[];
  createdAt: Date;
  status: 'pending' | 'processing' | 'completed' | 'error';
}

interface Insight {
  category: string;
  finding: string;
  confidence: number;
  references?: string[];
}

// ============================================
// TEORÍAS Y METODOLOGÍAS
// ============================================

const NARRATIVE_THEORIES: Record<string, NarrativeTheory> = {
  // TEORÍAS GENERALES
  propp: {
    id: 'propp',
    name: 'Las 31 Funciones de Propp',
    author: 'Vladimir Propp',
    category: 'general',
    description: 'Análisis morfológico del cuento basado en 31 funciones narrativas',
    prompts: [
      {
        id: 'propp-functions',
        title: 'Identificar Funciones de Propp',
        prompt: `Analiza la película "{movieTitle}" identificando cuáles de las 31 funciones de Propp están presentes:
        
        1. Alejamiento
        2. Prohibición
        3. Transgresión
        4. Interrogatorio
        5. Información
        6. Engaño
        7. Complicidad
        8. Fechoría/Carencia
        9. Mediación
        10. Principio de acción contraria
        11. Partida
        12. Primera función del donante
        13. Reacción del héroe
        14. Recepción del objeto mágico
        15. Desplazamiento
        16. Combate
        17. Marca
        18. Victoria
        19. Reparación
        20. Vuelta
        21. Persecución
        22. Socorro
        23. Llegada de incógnito
        24. Pretensiones engañosas
        25. Tarea difícil
        26. Tarea cumplida
        27. Reconocimiento
        28. Descubrimiento
        29. Transfiguración
        30. Castigo
        31. Boda
        
        Para cada función identificada, proporciona:
        - Momento específico en la película
        - Personajes involucrados
        - Importancia narrativa
        
        Formato: Markdown con secciones claras`,
        outputFormat: 'markdown',
        expectedTokens: 2000
      }
    ]
  },

  greimas: {
    id: 'greimas',
    name: 'Modelo Actancial de Greimas',
    author: 'A.J. Greimas',
    category: 'general',
    description: 'Análisis de roles narrativos y sus relaciones',
    prompts: [
      {
        id: 'greimas-actants',
        title: 'Modelo Actancial',
        prompt: `Analiza "{movieTitle}" usando el modelo actancial de Greimas:
        
        Identifica claramente:
        
        1. SUJETO (protagonista)
           - ¿Quién busca el objeto?
           - Motivaciones
        
        2. OBJETO (objetivo)
           - ¿Qué busca el sujeto?
           - Valor simbólico
        
        3. DESTINADOR (quien motiva)
           - ¿Quién/qué impulsa la búsqueda?
           - Valores que representa
        
        4. DESTINATARIO (beneficiario)
           - ¿Quién se beneficia?
           - Transformación esperada
        
        5. AYUDANTE (aliados)
           - Personajes que ayudan
           - Recursos que aportan
        
        6. OPONENTE (antagonistas)
           - Fuerzas opositoras
           - Obstáculos que crean
        
        Analiza también las TRANSFORMACIONES del modelo a lo largo de la película.`,
        outputFormat: 'structured',
        expectedTokens: 1500
      }
    ]
  },

  campbell: {
    id: 'campbell',
    name: 'El Viaje del Héroe',
    author: 'Joseph Campbell',
    category: 'general',
    description: 'El monomito - estructura universal del viaje heroico',
    prompts: [
      {
        id: 'heros-journey',
        title: 'Las 17 Etapas del Viaje',
        prompt: `Analiza "{movieTitle}" según el Viaje del Héroe de Campbell:
        
        ACTO I - PARTIDA:
        1. El mundo ordinario
        2. La llamada a la aventura
        3. Rechazo de la llamada
        4. Encuentro con el mentor
        5. Cruce del primer umbral
        
        ACTO II - INICIACIÓN:
        6. Pruebas, aliados y enemigos
        7. Acercamiento a la caverna más profunda
        8. La ordalía
        9. La recompensa
        
        ACTO III - RETORNO:
        10. El camino de regreso
        11. Resurrección
        12. Retorno con el elixir
        
        Para cada etapa presente:
        - Escena específica
        - Duración aproximada
        - Elementos simbólicos
        - Variaciones del modelo clásico`,
        outputFormat: 'markdown',
        expectedTokens: 2500
      }
    ]
  },

  vogler: {
    id: 'vogler',
    name: 'El Viaje del Escritor',
    author: 'Christopher Vogler',
    category: 'general',
    description: 'Adaptación del monomito para guionistas',
    prompts: [
      {
        id: 'vogler-archetypes',
        title: 'Los 7 Arquetipos',
        prompt: `Identifica los arquetipos de Vogler en "{movieTitle}":
        
        1. HÉROE
           - Características
           - Defecto fatal
           - Arco de transformación
        
        2. MENTOR
           - Tipo de mentor (positivo/negativo/cómico)
           - Dones que otorga
           - Momento de aparición
        
        3. GUARDIÁN DEL UMBRAL
           - Pruebas que impone
           - Cómo es superado
        
        4. HERALDO
           - Mensaje que trae
           - Forma de la llamada
        
        5. CAMALEÓN
           - Transformaciones
           - Función dramática
        
        6. SOMBRA
           - Relación con el héroe
           - Poderes y debilidades
        
        7. EMBAUCADOR
           - Momentos cómicos
           - Verdades que revela
        
        Analiza cómo los personajes pueden cumplir múltiples arquetipos.`,
        outputFormat: 'structured',
        expectedTokens: 2000
      }
    ]
  },

  // TEORÍAS ESPECÍFICAS DE GUION
  mckee: {
    id: 'mckee',
    name: 'Story - Paradigma de McKee',
    author: 'Robert McKee',
    category: 'screenplay',
    description: 'Análisis profundo de estructura, escena y beats',
    prompts: [
      {
        id: 'mckee-structure',
        title: 'Estructura y Valores',
        prompt: `Analiza "{movieTitle}" según los principios de Robert McKee:
        
        1. PREMISA CONTROLADORA
           - Idea central
           - Valores en juego
        
        2. DISEÑO DE LA HISTORIA
           - Incidente incitador (timing y naturaleza)
           - Progresiones y complicaciones
           - Crisis
           - Clímax
           - Resolución
        
        3. VALORES EN CONFLICTO
           - Valor positivo/negativo central
           - Cómo cambian escena a escena
           - Ironías dramáticas
        
        4. ANÁLISIS DE ESCENA CLAVE
           - Beats de la escena
           - Punto de giro
           - Brecha entre expectativa y resultado
        
        5. SUBTEXTO
           - Lo no dicho
           - Verdadero significado bajo el diálogo`,
        outputFormat: 'markdown',
        expectedTokens: 2500
      }
    ]
  },

  field: {
    id: 'field',
    name: 'Paradigma de Syd Field',
    author: 'Syd Field',
    category: 'screenplay',
    description: 'Estructura en tres actos con puntos de giro',
    prompts: [
      {
        id: 'field-paradigm',
        title: 'Paradigma de Field',
        prompt: `Aplica el paradigma de Syd Field a "{movieTitle}":
        
        SETUP (25%)
        - Páginas/Minutos: 
        - Establecimiento del mundo
        - Presentación del protagonista
        - Situación dramática inicial
        
        PLOT POINT 1
        - Momento exacto:
        - Evento que lo constituye:
        - Cambio de dirección:
        
        CONFRONTACIÓN (50%)
        - Obstáculos principales
        - Pinch Point 1 (37.5%)
        - Punto medio (50%)
        - Pinch Point 2 (62.5%)
        - Escalada del conflicto
        
        PLOT POINT 2
        - Momento exacto:
        - Evento que lo constituye:
        - Preparación para el clímax:
        
        RESOLUCIÓN (25%)
        - Clímax
        - Dénouement
        - Imagen final
        
        Analiza la precisión matemática de la estructura.`,
        outputFormat: 'structured',
        expectedTokens: 1800
      }
    ]
  },

  truby: {
    id: 'truby',
    name: 'Anatomía del Guión',
    author: 'John Truby',
    category: 'screenplay',
    description: '22 pasos de construcción narrativa orgánica',
    prompts: [
      {
        id: 'truby-anatomy',
        title: 'Los 22 Pasos de Truby',
        prompt: `Analiza "{movieTitle}" con los 22 pasos de John Truby:
        
        1. Autorrevelación
        2. Necesidad y deseo
        3. Deseo
        4. Oponente
        5. Plan
        6. Batalla
        7. Autorrevelación
        8. Nuevo equilibrio
        
        ELEMENTOS CLAVE:
        - PREMISA MORAL: Argumento vs tema
        - DISEÑO DE PERSONAJE: Red de personajes
        - TRAMA ORGÁNICA: Cómo crece naturalmente
        - MUNDO DE LA HISTORIA: Expresión visual del tema
        - SISTEMA DE REVELACIONES: Información y timing
        - ESCENAS CLAVE: Las 7 escenas estructurales
        
        Enfócate en cómo cada elemento sirve al ARGUMENTO MORAL.`,
        outputFormat: 'markdown',
        expectedTokens: 2200
      }
    ]
  },

  seger: {
    id: 'seger',
    name: 'Análisis de Subtexto',
    author: 'Linda Seger',
    category: 'screenplay',
    description: 'El arte del subtexto y capas narrativas',
    prompts: [
      {
        id: 'seger-subtext',
        title: 'Subtexto y Capas',
        prompt: `Analiza el subtexto en "{movieTitle}" según Linda Seger:
        
        1. SUBTEXTO EN DIÁLOGOS
           - Lo que se dice vs. lo que se significa
           - Ejemplos específicos
           - Técnicas utilizadas
        
        2. SUBTEXTO VISUAL
           - Metáforas visuales
           - Simbolismo de objetos
           - Uso del espacio
        
        3. SUBTEXTO TEMÁTICO
           - Temas bajo la superficie
           - Comentario social implícito
           - Capas de significado
        
        4. SUBTEXTO DE PERSONAJE
           - Motivaciones ocultas
           - Contradicciones internas
           - Arcos no verbalizados
        
        5. SUBTEXTO CULTURAL
           - Referencias culturales
           - Contexto histórico implícito
           - Resonancias contemporáneas`,
        outputFormat: 'markdown',
        expectedTokens: 2000
      }
    ]
  },

  tobias: {
    id: 'tobias',
    name: '20 Tramas Maestras',
    author: 'Ronald Tobias',
    category: 'screenplay',
    description: 'Identificación de tramas arquetípicas',
    prompts: [
      {
        id: 'tobias-plots',
        title: 'Trama Maestra Dominante',
        prompt: `Identifica cuál de las 20 tramas maestras de Tobias domina en "{movieTitle}":
        
        1. Búsqueda
        2. Aventura
        3. Persecución
        4. Rescate
        5. Escape
        6. Venganza
        7. Enigma
        8. Rivalidad
        9. Desvalido
        10. Tentación
        11. Metamorfosis
        12. Transformación
        13. Maduración
        14. Amor
        15. Amor prohibido
        16. Sacrificio
        17. Descubrimiento
        18. Precio del exceso
        19. Ascenso
        20. Caída
        
        Analiza:
        - Trama principal y subtramas
        - Híbridos y combinaciones
        - Variaciones del modelo
        - Efectividad dramática`,
        outputFormat: 'structured',
        expectedTokens: 1500
      }
    ]
  }
};

// ============================================
// SERVICIO DE ANÁLISIS NARRATIVO
// ============================================

class NarrativeAnalysisService {
  private apiKey: string;
  private apiUrl = 'https://api.anthropic.com/v1/messages';
  
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Generar análisis usando una teoría específica
  async generateAnalysis(
    movieTitle: string,
    movieData: any,
    theoryId: string,
    promptId?: string
  ): Promise<AutomatedAnalysis> {
    const theory = NARRATIVE_THEORIES[theoryId];
    if (!theory) {
      throw new Error(`Teoría no encontrada: ${theoryId}`);
    }

    // Usar el primer prompt si no se especifica uno
    const prompt = promptId 
      ? theory.prompts.find(p => p.id === promptId)
      : theory.prompts[0];
      
    if (!prompt) {
      throw new Error(`Prompt no encontrado: ${promptId}`);
    }

    // Preparar el contexto de la película
    const movieContext = this.prepareMovieContext(movieData);
    
    // Construir el prompt final
    const finalPrompt = `
${prompt.prompt.replace('{movieTitle}', movieTitle)}

CONTEXTO DE LA PELÍCULA:
${movieContext}

Por favor, proporciona un análisis detallado y profundo siguiendo las instrucciones.
Incluye ejemplos específicos y minutaje cuando sea posible.
`;

    try {
      // Llamar a la API de Claude
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-opus-20240229',
          max_tokens: prompt.expectedTokens,
          messages: [
            {
              role: 'user',
              content: finalPrompt
            }
          ],
          system: `Eres un experto en análisis cinematográfico y narrativo, 
          especializado en la metodología de ${theory.author}. 
          Proporciona análisis académicos pero accesibles, 
          con ejemplos concretos de la película.`
        })
      });

      const data = await response.json();
      
      // Procesar y estructurar la respuesta
      const analysis: AutomatedAnalysis = {
        id: `analysis-${Date.now()}`,
        movieId: movieData.id,
        movieTitle,
        theoryId: theory.id,
        theoryName: theory.name,
        content: data.content[0].text,
        insights: this.extractInsights(data.content[0].text, theory),
        createdAt: new Date(),
        status: 'completed'
      };

      return analysis;
    } catch (error) {
      console.error('Error generando análisis:', error);
      throw error;
    }
  }

  // Preparar contexto de la película para el análisis
  private prepareMovieContext(movieData: any): string {
    return `
- Título: ${movieData.title}
- Año: ${movieData.release_date?.split('-')[0]}
- Director: ${movieData.credits?.crew?.find((c: any) => c.job === 'Director')?.name || 'Desconocido'}
- Género: ${movieData.genres?.map((g: any) => g.name).join(', ')}
- Duración: ${movieData.runtime} minutos
- Sinopsis: ${movieData.overview}
- Reparto principal: ${movieData.credits?.cast?.slice(0, 5).map((c: any) => `${c.name} como ${c.character}`).join(', ')}
`;
  }

  // Extraer insights clave del análisis
  private extractInsights(content: string, theory: NarrativeTheory): Insight[] {
    // Esta función podría usar NLP o patrones para extraer insights
    // Por ahora, una implementación simple
    const insights: Insight[] = [];
    
    // Buscar patrones comunes según la teoría
    if (theory.id === 'campbell' || theory.id === 'vogler') {
      if (content.includes('llamada a la aventura')) {
        insights.push({
          category: 'Estructura',
          finding: 'Presencia clara del momento de llamada a la aventura',
          confidence: 0.9
        });
      }
    }
    
    // Más lógica de extracción según cada teoría...
    
    return insights;
  }

  // Generar análisis comparativo usando múltiples teorías
  async generateComparativeAnalysis(
    movieTitle: string,
    movieData: any,
    theoryIds: string[]
  ): Promise<any> {
    const analyses = await Promise.all(
      theoryIds.map(theoryId => 
        this.generateAnalysis(movieTitle, movieData, theoryId)
      )
    );

    // Sintetizar los análisis en una visión unificada
    const synthesis = await this.synthesizeAnalyses(analyses);
    
    return {
      individualAnalyses: analyses,
      synthesis,
      commonPatterns: this.findCommonPatterns(analyses),
      contradictions: this.findContradictions(analyses)
    };
  }

  private async synthesizeAnalyses(analyses: AutomatedAnalysis[]): Promise<string> {
    // Implementar síntesis usando Claude
    // ...
    return 'Síntesis de múltiples perspectivas teóricas...';
  }

  private findCommonPatterns(analyses: AutomatedAnalysis[]): any[] {
    // Buscar patrones comunes entre análisis
    return [];
  }

  private findContradictions(analyses: AutomatedAnalysis[]): any[] {
    // Identificar contradicciones entre teorías
    return [];
  }
}

// ============================================
// COMPONENTE REACT PARA UI
// ============================================

interface NarrativeAnalysisProps {
  movieId: string;
  movieTitle: string;
  movieData: any;
}

const NarrativeAnalysisPanel: React.FC<NarrativeAnalysisProps> = ({
  movieId,
  movieTitle,
  movieData
}) => {
  const [selectedTheories, setSelectedTheories] = useState<string[]>([]);
  const [analyses, setAnalyses] = useState<AutomatedAnalysis[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<'selection' | 'results'>('selection');

  const handleGenerateAnalysis = async () => {
    setLoading(true);
    try {
      const service = new NarrativeAnalysisService(process.env.REACT_APP_CLAUDE_API_KEY!);
      
      for (const theoryId of selectedTheories) {
        const analysis = await service.generateAnalysis(
          movieTitle,
          movieData,
          theoryId
        );
        setAnalyses(prev => [...prev, analysis]);
      }
      
      setActiveTab('results');
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="narrative-analysis-panel">
      {activeTab === 'selection' && (
        <div className="theory-selection">
          <h3>🧠 Selecciona las Metodologías de Análisis</h3>
          
          <div className="theory-categories">
            <div className="category">
              <h4>📚 Teorías Generales</h4>
              {Object.values(NARRATIVE_THEORIES)
                .filter(t => t.category === 'general')
                .map(theory => (
                  <label key={theory.id} className="theory-option">
                    <input
                      type="checkbox"
                      checked={selectedTheories.includes(theory.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTheories([...selectedTheories, theory.id]);
                        } else {
                          setSelectedTheories(selectedTheories.filter(id => id !== theory.id));
                        }
                      }}
                    />
                    <div className="theory-info">
                      <strong>{theory.name}</strong>
                      <span className="author">por {theory.author}</span>
                      <p className="description">{theory.description}</p>
                    </div>
                  </label>
                ))}
            </div>
            
            <div className="category">
              <h4>🎬 Teorías de Guion</h4>
              {Object.values(NARRATIVE_THEORIES)
                .filter(t => t.category === 'screenplay')
                .map(theory => (
                  <label key={theory.id} className="theory-option">
                    <input
                      type="checkbox"
                      checked={selectedTheories.includes(theory.id)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedTheories([...selectedTheories, theory.id]);
                        } else {
                          setSelectedTheories(selectedTheories.filter(id => id !== theory.id));
                        }
                      }}
                    />
                    <div className="theory-info">
                      <strong>{theory.name}</strong>
                      <span className="author">por {theory.author}</span>
                      <p className="description">{theory.description}</p>
                    </div>
                  </label>
                ))}
            </div>
          </div>
          
          <button 
            className="generate-button"
            onClick={handleGenerateAnalysis}
            disabled={selectedTheories.length === 0 || loading}
          >
            {loading ? 'Generando análisis...' : `Generar ${selectedTheories.length} análisis`}
          </button>
        </div>
      )}
      
      {activeTab === 'results' && (
        <div className="analysis-results">
          <button onClick={() => setActiveTab('selection')}>
            ← Volver a selección
          </button>
          
          {analyses.map(analysis => (
            <div key={analysis.id} className="analysis-result">
              <h3>{analysis.theoryName}</h3>
              <div className="analysis-content">
                {analysis.content}
              </div>
              
              {analysis.insights.length > 0 && (
                <div className="insights">
                  <h4>💡 Insights Clave</h4>
                  {analysis.insights.map((insight, idx) => (
                    <div key={idx} className="insight">
                      <strong>{insight.category}:</strong> {insight.finding}
                      <span className="confidence">
                        Confianza: {Math.round(insight.confidence * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ============================================
// EXPORTS
// ============================================

export {
  NarrativeAnalysisService,
  NarrativeAnalysisPanel,
  NARRATIVE_THEORIES,
  type NarrativeTheory,
  type AutomatedAnalysis,
  type AnalysisPrompt,
  type Insight
};