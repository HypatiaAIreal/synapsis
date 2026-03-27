// NarrativeAnalysisPanel.tsx - VERSIÓN ARREGLADA COMPLETAMENTE
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { API_BASE_URL } from '../../config/api';
import { 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Save, 
  Share2, 
  Clock, 
  DollarSign,
  AlertCircle,
  Check,
  Copy,
  History,
  BookOpen,
  Brain
} from 'lucide-react';
import { NARRATIVE_THEORIES } from '../../data/narrativeTheories';
import styles from './NarrativeAnalysis.module.css';
import AIModelSelector from './AIModelSelector';
import MethodologySelector from '../MethodologySelector/MethodologySelector';
import { methodologyIntegrationService } from '../../data/methodologyIntegration'; 

// Tipos mejorados
interface ModelInfo {
  id: string;
  name: string;
  costPer1kTokens: number;
  available: boolean;
  provider: string;
  description?: string;
  maxTokens?: number;
  strengths?: string[];
}

interface ProviderInfo {
  id: string;
  name: string;
  icon: string;
  models: ModelInfo[];
  expanded: boolean;
  color?: string;
}

interface SavedAnalysis {
  id: string;
  movieId: string;
  movieTitle: string;
  theoryId: string;
  theoryName: string;
  modelUsed: string;
  content: string;
  cost: string;
  tokensUsed: number;
  createdAt: string;
  shared: boolean;
  likes?: number;
}

interface NarrativeAnalysisPanelProps {
  movieId: string;
  movieTitle: string;
  movieData: any;
  onSaveAnalysis?: (analysis: any) => void;
  userId?: string;
}


// Componente mejorado de renderizado de Markdown
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const renderMarkdown = useCallback((text: string) => {
    // Dividir por bloques de 
    const safeText = typeof text === 'string' ? text : String(text || '');
    const parts = safeText.split(/```(\w*)\n([\s\S]*?)```/g);
    
    return parts.map((part, index) => {
      // Si es código
      if (index % 3 === 2) {
        const language = parts[index - 1] || 'text';
        return (
          <pre key={index} className={styles.codeBlock}>
            <code className={`language-${language}`}>{part}</code>
          </pre>
        );
      }
      
      // Si es texto normal
      return part.split('\n').map((line, lineIndex) => {
        const key = `${index}-${lineIndex}`;
        
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={key} className={styles.h1}>{line.substring(2)}</h1>;
        } else if (line.startsWith('## ')) {
          return <h2 key={key} className={styles.h2}>{line.substring(3)}</h2>;
        } else if (line.startsWith('### ')) {
          return <h3 key={key} className={styles.h3}>{line.substring(4)}</h3>;
        } else if (line.startsWith('#### ')) {
          return <h4 key={key} className={styles.h4}>{line.substring(5)}</h4>;
        }
        
        // Listas
        if (line.startsWith('- ') || line.startsWith('* ')) {
          return <li key={key} className={styles.listItem}>{renderInlineMarkdown(line.substring(2))}</li>;
        }
        
        // Listas numeradas
        const numberedMatch = line.match(/^(\d+)\.\s(.+)/);
        if (numberedMatch) {
          return (
            <li key={key} className={styles.numberedItem}>
              {renderInlineMarkdown(numberedMatch[2])}
            </li>
          );
        }
        
        // Blockquotes
        if (line.startsWith('> ')) {
          return (
            <blockquote key={key} className={styles.blockquote}>
              {renderInlineMarkdown(line.substring(2))}
            </blockquote>
          );
        }
        
        // Líneas horizontales
        if (line === '---' || line === '***') {
          return <hr key={key} className={styles.divider} />;
        }
        
        // Párrafos normales
        if (line.trim()) {
          return <p key={key} className={styles.paragraph}>{renderInlineMarkdown(line)}</p>;
        }
        
        // Líneas vacías
        return <br key={key} />;
      });
    }).flat();
  }, []);
  
  // Renderizar markdown inline (negrita, cursiva, enlaces)
  const renderInlineMarkdown = (text: string): React.ReactNode => {
    // Reemplazar **texto** por <strong>
    text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    
    // Reemplazar *texto* por <em>
    text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
    
    // Reemplazar `código` por <code>
    text = text.replace(/`(.+?)`/g, '<code class="' + styles.inlineCode + '">$1</code>');
    
    // Reemplazar [texto](url) por enlaces
    text = text.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
    
    return <span dangerouslySetInnerHTML={{ __html: text }} />;
  };
  
  return <div className={styles.markdownContent}>{renderMarkdown(content)}</div>;
};

export const NarrativeAnalysisPanel: React.FC<NarrativeAnalysisPanelProps> = ({
  movieId,
  movieTitle,
  movieData,
  onSaveAnalysis,
  userId = 'demo_user'
}) => {
  const [selectedTheory, setSelectedTheory] = useState<string>('');
  const [selectedModel, setSelectedModel] = useState<string>('');
  const [showAIModal, setShowAIModal] = useState(false);
  const [showMethodologyModal, setShowMethodologyModal] = useState(false);
  const [selectedMethodologyInfo, setSelectedMethodologyInfo] = useState<any>(null);
  const [useNewMethodologies, setUseNewMethodologies] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [providers, setProviders] = useState<ProviderInfo[]>([]);
  const [estimatedCost, setEstimatedCost] = useState<number>(0);
  const [actualCost, setActualCost] = useState<string>('');
  const [savedAnalyses, setSavedAnalyses] = useState<SavedAnalysis[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);
  

  // Configuración mejorada de proveedores
  const defaultProviders: ProviderInfo[] = useMemo(() => [
    {
      id: 'anthropic',
      name: 'Anthropic',
      icon: '🧠',
      expanded: true,
      color: '#D4A574',
      models: [
        {
          id: 'claude-3-opus',
          name: 'Claude 3 Opus',
          provider: 'anthropic',
          costPer1kTokens: 0.015,
          available: false,
          description: 'Modelo más avanzado para análisis profundos',
          maxTokens: 4096,
          strengths: ['Análisis detallado', 'Comprensión contextual', 'Escritura académica']
        },
        {
          id: 'claude-3-sonnet',
          name: 'Claude 3 Sonnet',
          provider: 'anthropic',
          costPer1kTokens: 0.003,
          available: false,
          description: 'Balance perfecto entre calidad y velocidad',
          maxTokens: 4096,
          strengths: ['Velocidad', 'Precisión', 'Costo-efectivo']
        },
        {
          id: 'claude-3-haiku',
          name: 'Claude 3 Haiku',
          provider: 'anthropic',
          costPer1kTokens: 0.00025,
          available: false,
          description: 'Rápido y económico para análisis básicos',
          maxTokens: 4096,
          strengths: ['Ultra rápido', 'Económico', 'Resúmenes']
        }
      ]
    },
    {
      id: 'openai',
      name: 'OpenAI',
      icon: '🤖',
      expanded: false,
      color: '#74AA9C',
      models: [
        {
          id: 'gpt-4',
          name: 'GPT-4',
          provider: 'openai',
          costPer1kTokens: 0.03,
          available: false,
          description: 'Modelo más capaz de OpenAI',
          maxTokens: 8192,
          strengths: ['Razonamiento complejo', 'Creatividad', 'Multitarea']
        },
        {
          id: 'gpt-4-turbo',
          name: 'GPT-4 Turbo',
          provider: 'openai',
          costPer1kTokens: 0.01,
          available: false,
          description: 'Versión optimizada con ventana de contexto ampliada',
          maxTokens: 128000,
          strengths: ['Contexto largo', 'Velocidad mejorada', 'Actualizado']
        },
        {
          id: 'gpt-3.5-turbo',
          name: 'GPT-3.5 Turbo',
          provider: 'openai',
          costPer1kTokens: 0.0005,
          available: false,
          description: 'Rápido y económico para tareas simples',
          maxTokens: 4096,
          strengths: ['Velocidad', 'Economía', 'Eficiencia']
        }
      ]
    },
    {
      id: 'google',
      name: 'Google',
      icon: '✨',
      expanded: false,
      color: '#4285F4',
      models: [
        {
          id: 'gemini-2.5-pro',
          name: 'Gemini 1.5 Pro',
          provider: 'google',
          costPer1kTokens: 0.00125,
          available: false,
          description: 'IA multimodal avanzada de Google',
          maxTokens: 1000000,
          strengths: ['Contexto masivo', 'Multimodal', 'Razonamiento']
        },
        {
          id: 'gemini-1.5-flash', 
          name: 'Gemini 1.5 Flash',
          provider: 'google',
          costPer1kTokens: 0.00035,
          available: false,
          description: 'Versión ultra rápida y eficiente',
          maxTokens: 1000000,
          strengths: ['Velocidad extrema', 'Costo bajo', 'Escalable']
        }
      ]
    },
    {
      id: 'xai',
      name: 'xAI',
      icon: '🔮',
      expanded: false,
      color: '#8B5CF6',
      models: [
        {
          id: 'grok',
          name: 'Grok',
          provider: 'xai',
          costPer1kTokens: 0.005,
          available: false,
          description: 'IA con humor y perspectiva única',
          maxTokens: 8192,
          strengths: ['Sin censura', 'Humor', 'Actualidad']
        }
      ]
    },
    {
      id: 'local',
      name: 'Modelos Locales',
      icon: '💻',
      expanded: false,
      color: '#10B981',
      models: [
        {
          id: 'llama-3',
          name: 'Llama 3 70B',
          provider: 'local',
          costPer1kTokens: 0,
          available: false,
          description: 'Modelo open source de Meta',
          maxTokens: 4096,
          strengths: ['Privacidad', 'Sin costo', 'Personalizable']
        },
        {
          id: 'deepseek',
          name: 'DeepSeek Chat',
          provider: 'deepseek',
          costPer1kTokens: 0.0014,
          available: false,
          description: 'Modelo eficiente y económico',
          maxTokens: 32768,
          strengths: ['Eficiente', 'Económico', 'Código']
        }
      ]
    }
  ], []);

  // Cargar modelos disponibles y análisis guardados
  useEffect(() => {
    fetchAvailableModels();
    loadSavedAnalyses();
  }, [movieId]);

  // Calcular costo estimado
  useEffect(() => {
    if (selectedTheory && selectedModel) {
      calculateEstimatedCost();
    }
  }, [selectedTheory, selectedModel]);

  // const fetchAvailableModels = async () => {
  //   try {
  //     console.log('🔄 Cargando modelos desde MongoDB Atlas...');
  //     const response = await fetch('http://localhost:3000/api/ai/providers');
  //     const data = await response.json();
      
  //     if (data.success && data.providers) {
  //       // La nueva estructura viene agrupada por proveedor
  //       const updatedProviders = defaultProviders.map(provider => {
  //         const apiProvider = data.providers.find((p: any) => p.id === provider.id);
  //         if (apiProvider) {
  //           return {
  //             ...provider,
  //             models: provider.models.map(model => {
  //               const apiModel = apiProvider.models.find((m: any) => m.id === model.id);
  //               return {
  //                 ...model,
  //                 available: apiModel ? apiModel.available : false,
  //                 costPer1kTokens: apiModel ? apiModel.costPer1kTokens : model.costPer1kTokens
  //               };
  //             })
  //           };
  //         }
  //         return provider;
  //       });
        
  //       setProviders(updatedProviders);
        
  //       // Auto-seleccionar primer modelo disponible
  //       const firstAvailable = updatedProviders
  //         .flatMap(p => p.models)
  //         .find(m => m.available);
        
  //       if (firstAvailable) {
  //         console.log('✅ Modelo auto-seleccionado:', firstAvailable.id);
  //         setSelectedModel(firstAvailable.id);
  //       } else {
  //         console.warn('⚠️ No hay modelos disponibles. Activando modo demo...');
  //         // Activar modo demo si no hay modelos disponibles
  //         setSelectedModel('demo-mode');
  //       }
  //     }
  //   } catch (error) {
  //     console.error('Error cargando modelos:', error);
  //     setProviders(defaultProviders);
  //     // En caso de error, usar modo demo
  //     setSelectedModel('demo-mode');
  //   }
  // };

  const fetchAvailableModels = async () => {
    try {
      console.log('🔄 Cargando modelos desde MongoDB Atlas...');
      const response = await fetch(`${API_BASE_URL}/api/ai/providers`);
      const data = await response.json();
      console.log('📡 Providers desde MongoDB:', data.providers);
      
      if (data.success && data.providers) {
        // USAR DIRECTAMENTE LOS PROVIDERS DE MONGODB
        setProviders(data.providers);
        
        // Auto-seleccionar primer modelo disponible
        const firstAvailable = data.providers
          .flatMap(p => p.models)
          .find(m => m.available);
        
        if (firstAvailable) {
          console.log('✅ Modelo auto-seleccionado:', firstAvailable.id);
          setSelectedModel(firstAvailable.id);
        }
      }
    } catch (error) {
      console.error('Error cargando modelos:', error);
      setProviders(defaultProviders);
    }
  };

  const loadSavedAnalyses = async () => {
    try {
      // Primero intentar cargar del backend
      const response = await fetch(`${API_BASE_URL}/api/analyses/movie/${movieId}`);
      if (response.ok) {
        const data = await response.json();
        setSavedAnalyses(data.analyses || []);
      } else {
        // Fallback a localStorage
        const local = localStorage.getItem(`analyses_${movieId}`);
        if (local) {
          setSavedAnalyses(JSON.parse(local));
        }
      }
    } catch (error) {
      // Fallback a localStorage
      const local = localStorage.getItem(`analyses_${movieId}`);
      if (local) {
        setSavedAnalyses(JSON.parse(local));
      }
    }
  };

  const calculateEstimatedCost = () => {
    if (useNewMethodologies && selectedMethodologyInfo) {
      // Para metodologías nuevas, estimar basándonos en la descripción
      const model = providers.flatMap(p => p.models).find(m => m.id === selectedModel);
      if (model) {
        const descriptionLength = selectedMethodologyInfo.description?.length || 200;
        const promptTokens = Math.ceil((descriptionLength + 500) / 3.5);
        const contextTokens = 500;
        const estimatedResponseTokens = promptTokens * 2.5;
        const totalTokens = promptTokens + contextTokens + estimatedResponseTokens;
        
        const cost = (totalTokens / 1000) * model.costPer1kTokens;
        setEstimatedCost(cost);
      }
    } else {
      // Lógica original para teorías clásicas
      const theory = NARRATIVE_THEORIES[selectedTheory as keyof typeof NARRATIVE_THEORIES];
      const model = providers.flatMap(p => p.models).find(m => m.id === selectedModel);
      
      if (theory && model) {
        const promptTokens = Math.ceil(theory.prompt.length / 3.5);
        const contextTokens = 500;
        const estimatedResponseTokens = promptTokens * 2.5;
        const totalTokens = promptTokens + contextTokens + estimatedResponseTokens;
        
        const cost = (totalTokens / 1000) * model.costPer1kTokens;
        setEstimatedCost(cost);
      }
    }
  };

  const generateAnalysis = async () => {
    if (!selectedModel || selectedModel === '') {
      setError('Por favor selecciona un modelo de IA');
      return;
    }

    if (!selectedTheory) {
      setError('Por favor selecciona una teoría de análisis');
      return;
    }

    setLoading(true);
    setError('');

    try {
      console.log('🚀 Generando análisis con:', {
        // modelId: selectedModel,
        modelId: selectedModel,
        theory: selectedTheory,
        movie: movieTitle
      });

      let prompt = '';
      let theoryName = '';
      
      if (useNewMethodologies && selectedMethodologyInfo) {
        // Usar el servicio de integración para obtener el prompt
        prompt = methodologyIntegrationService.getAnalysisPrompt(selectedTheory, movieTitle);
        theoryName = selectedMethodologyInfo.name;
      } else {
        // Usar las teorías clásicas
        const theory = NARRATIVE_THEORIES[selectedTheory as keyof typeof NARRATIVE_THEORIES];
        prompt = theory.prompt.replace('{movieTitle}', movieTitle);
        theoryName = theory.name;
      }
      
      // Añadir contexto de película si está disponible
      const movieContext = movieData ? `
        Contexto de la película:
        - Año: ${movieData.release_date?.split('-')[0]}
        - Director: ${movieData.director || 'Desconocido'}
        - Géneros: ${movieData.genres?.map((g: any) => g.name).join(', ')}
        - Duración: ${movieData.runtime} minutos
        - Sinopsis: ${movieData.overview}
      ` : '';
      
      const fullPrompt = movieContext + '\n\n' + prompt;
      
      const requestBody = {
        modelId: selectedModel,
        prompt: fullPrompt,
        movieId,
        movieTitle,
        theoryId: selectedTheory,
        userId,
        maxTokens: providers.flatMap(p => p.models).find(m => m.id === selectedModel)?.maxTokens || 4096
      };

      console.log('📤 Enviando al backend:', requestBody);

      const response = await fetch(`${API_BASE_URL}/api/ai/narrative`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || `Error ${response.status}`);
      }

      console.log('✅ Análisis generado exitosamente');
      // setAnalysisResult(data.analysis);
      setAnalysisResult(typeof data.analysis === 'string' ? data.analysis : JSON.stringify(data.analysis, null, 2));
      setActualCost(data.metadata?.estimatedCost || 'Demo');

      // Crear objeto de análisis completo
      const newAnalysis: SavedAnalysis = {
        id: data.id || `analysis-${Date.now()}`,
        movieId,
        movieTitle,
        theoryId: selectedTheory,
        theoryName: theoryName,
        modelUsed: providers.flatMap(p => p.models).find(m => m.id === selectedModel)?.name || 'Demo Mode',
        content: typeof data.analysis === 'string' ? data.analysis : JSON.stringify(data.analysis, null, 2),
        cost: data.metadata?.estimatedCost || 'Demo',
        tokensUsed: data.metadata?.tokensUsed || 0,
        createdAt: data.metadata?.timestamp || new Date().toISOString(),
        shared: false,
        type: 'narrative' // ASEGURAR QUE SE MARQUE COMO NARRATIVO
      };

      // Guardar en backend y localStorage
      await saveAnalysis(newAnalysis);
      
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      setError(errorMessage);
      console.error('❌ Error generando análisis:', error);
    } finally {
      setLoading(false);
    }
  };

  const saveAnalysis = async (analysis: SavedAnalysis) => {
    try {
      // Intentar guardar en backend
      const response = await fetch(`${API_BASE_URL}/api/analyses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(analysis)
      });

      if (response.ok) {
        const savedData = await response.json();
        analysis.id = savedData.id;
      }
    } catch (error) {
      console.error('Error guardando en backend:', error);
    }

    // Guardar también en localStorage como backup
    const existingAnalyses = [...savedAnalyses, analysis];
    setSavedAnalyses(existingAnalyses);
    localStorage.setItem(`analyses_${movieId}`, JSON.stringify(existingAnalyses));

    if (onSaveAnalysis) {
      onSaveAnalysis(analysis);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(analysisResult);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const shareAnalysis = async () => {
    try {
      const currentAnalysis = savedAnalyses.find(a => 
        a.theoryId === selectedTheory && a.content === analysisResult
      );
      
      if (currentAnalysis) {
        // Marcar como compartido
        currentAnalysis.shared = true;
        await saveAnalysis(currentAnalysis);
        
        setShareSuccess(true);
        setTimeout(() => setShareSuccess(false), 3000);
      }
    } catch (error) {
      console.error('Error compartiendo:', error);
    }
  };

  const loadPreviousAnalysis = (analysis: SavedAnalysis) => {
    setSelectedTheory(analysis.theoryId);
    setAnalysisResult(analysis.content);
    setActualCost(analysis.cost);
    setShowHistory(false);
  };

  const selectedModelInfo = providers.flatMap(p => p.models).find(m => m.id === selectedModel);
  console.log('🔍 Debug Gemini:', {
    selectedModel,
    selectedModelInfo,
    allModels: providers.flatMap(p => p.models).map(m => ({ id: m.id, name: m.name }))
  });
  const selectedTheoryInfo = useNewMethodologies && selectedMethodologyInfo 
    ? selectedMethodologyInfo 
    : (selectedTheory ? NARRATIVE_THEORIES[selectedTheory as keyof typeof NARRATIVE_THEORIES] : null);

  return (
    <div className={styles.narrativeAnalysisPanel}>
      {/* Header con historial */}
      <div className={styles.panelHeader}>
        <h2 className={styles.mainTitle}>
          <Brain className={styles.titleIcon} />
          Análisis Narrativo Inteligente
        </h2>
        
        {savedAnalyses.length > 0 && !analysisResult && (
          <button
            className={styles.historyButton}
            onClick={() => setShowHistory(!showHistory)}
          >
            <History size={18} />
            Historial ({savedAnalyses.length})
          </button>
        )}
      </div>

      {/* Mensaje de modo demo si no hay modelos disponibles */}
      {selectedModel === 'demo-mode' && (
        <div className={styles.demoNotice} style={{
          background: 'rgba(251, 191, 36, 0.1)',
          border: '1px solid rgba(251, 191, 36, 0.3)',
          borderRadius: '12px',
          padding: '16px',
          marginBottom: '20px',
          color: '#fbbf24'
        }}>
          <AlertCircle size={20} style={{ display: 'inline', marginRight: '8px' }} />
          <strong>Modo Demo:</strong> No hay modelos de IA configurados. 
          Los análisis serán simulados. Para análisis reales, configura al menos un modelo en MongoDB.
        </div>
      )}

      {/* Historial de análisis */}
      {showHistory && (
        <div className={styles.historyPanel}>
          <h3>Análisis anteriores de "{movieTitle}"</h3>
          <div className={styles.historyList}>
            {savedAnalyses.map((analysis) => (
              <div
                key={analysis.id}
                className={styles.historyItem}
                onClick={() => loadPreviousAnalysis(analysis)}
              >
                <div className={styles.historyItemHeader}>
                  <span className={styles.theoryBadge}>
                    {NARRATIVE_THEORIES[analysis.theoryId as keyof typeof NARRATIVE_THEORIES]?.icon} {analysis.theoryName}
                  </span>
                  <span className={styles.modelBadge}>{analysis.modelUsed}</span>
                </div>
                <div className={styles.historyItemMeta}>
                  <span><Clock size={14} /> {new Date(analysis.createdAt).toLocaleDateString()}</span>
                  <span><DollarSign size={14} /> {analysis.cost}</span>
                  {analysis.shared && <span className={styles.sharedBadge}>🌍 Compartido</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!analysisResult ? (
        // Pantalla de selección mejorada
        <div className={styles.theorySelection}>
          <p className={styles.subtitle}>
            Analiza <strong>"{movieTitle}"</strong> usando metodologías cinematográficas clásicas con IA avanzada
          </p>

          {/* Selector de modelo mejorado */}
          <div className={styles.modelSelector}>
            <h3 className={styles.sectionTitle}>
              <Sparkles className={styles.sectionIcon} />
              Elige tu asistente de IA
            </h3>
            <button
              onClick={() => setShowAIModal(true)}
              className={styles.aiSelectorButton}
              style={{
                width: '100%',
                padding: '16px 24px',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #ff6b9d, #c44fdc)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(255, 107, 157, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 107, 157, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(255, 107, 157, 0.3)';
              }}
            >
              🤖 Abrir selector de modelos
            </button>
            
            {selectedModelInfo && (
              <div className={styles.selectedModelSummary}>
                <h4>Modelo seleccionado:</h4>
                <div className={styles.selectedModelDetails}>
                  <span className={styles.selectedModelName}>
                    {providers.find(p => p.models.some(m => m.id === selectedModel))?.icon}{' '}
                    {selectedModelInfo.name}
                  </span>
                  <span className={styles.selectedModelCost}>
                    {selectedModelInfo.costPer1kTokens > 0 
                      ? `${selectedModelInfo.costPer1kTokens}/1K tokens`
                      : 'Sin costo'
                    }
                  </span>
                </div>
              </div>
            )}

            {selectedModel === 'demo-mode' && (
              <div className={styles.selectedModelSummary}>
                <h4>Modo:</h4>
                <div className={styles.selectedModelDetails}>
                  <span className={styles.selectedModelName}>
                    🎭 Modo Demo
                  </span>
                  <span className={styles.selectedModelCost}>
                    Análisis simulado
                  </span>
                </div>
              </div>
            )}
          </div>
          
          {/* Mostrar metodología nueva seleccionada */}
          {useNewMethodologies && selectedMethodologyInfo && (
            <div className={styles.selectedMethodologyInfo} style={{
              background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(59, 130, 246, 0.1))',
              border: '1px solid rgba(147, 51, 234, 0.3)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '24px'
            }}>
              <h4 style={{ margin: '0 0 8px 0', color: '#9333ea' }}>Metodología seleccionada:</h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong style={{ fontSize: '18px', color: 'white' }}>{selectedMethodologyInfo.name}</strong>
                  <p style={{ margin: '4px 0 0 0', color: 'rgba(255, 255, 255, 0.7)' }}>
                    por {selectedMethodologyInfo.author} ({selectedMethodologyInfo.year || 'fecha desconocida'})
                  </p>
                </div>
                <button
                  onClick={() => setShowMethodologyModal(true)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  Cambiar
                </button>
              </div>
            </div>
          )}

          {/* Selector de teorías mejorado */}
          <div className={styles.theorySection}>
            <h3 className={styles.sectionTitle}>
              <BookOpen className={styles.sectionIcon} />
              Selecciona la metodología de análisis
            </h3>
            
            {/* Botón para explorar las 141 metodologías */}
            <button
              className={styles.exploreAllButton}
              onClick={() => setShowMethodologyModal(true)}
              style={{
                width: '100%',
                padding: '16px 24px',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #9333ea, #3b82f6)',
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontSize: '18px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 16px rgba(147, 51, 234, 0.3)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(147, 51, 234, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 16px rgba(147, 51, 234, 0.3)';
              }}
            >
              🚀 Explorar 141 Metodologías de Análisis
            </button>
            
            <div style={{ textAlign: 'center', margin: '16px 0', color: 'rgba(255, 255, 255, 0.7)' }}>
              — O elige una de las 11 metodologías clásicas —
            </div>
            
            <div className={styles.theoryGrid}>
              {Object.entries(NARRATIVE_THEORIES).map(([key, theory]) => (
                <div
                  key={key}
                  className={`${styles.theoryCard} ${
                    selectedTheory === key ? styles.selected : ''
                  }`}
                  onClick={() => {
                    setSelectedTheory(key);
                    setUseNewMethodologies(false);
                    setSelectedMethodologyInfo(null);
                  }}
                >
                  <span className={styles.theoryIcon}>{theory.icon}</span>
                  <h3>{theory.name}</h3>
                  <p className={styles.theoryAuthor}>por {theory.author}</p>
                  <p className={styles.theoryDescription}>{theory.description}</p>
                  {selectedTheory === key && (
                    <div className={styles.selectedIndicator}>
                      <Check size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Estimación de costos mejorada */}
          {selectedTheory && selectedModel && selectedModel !== 'demo-mode' && selectedTheoryInfo && (
            <div className={styles.costEstimation}>
              <h4>
                <DollarSign className={styles.costIcon} />
                Estimación de inversión
              </h4>
              <div className={styles.costDetails}>
                <div className={styles.costRow}>
                  <span>Modelo:</span>
                  <strong>{selectedModelInfo?.name}</strong>
                </div>
                <div className={styles.costRow}>
                  <span>Teoría:</span>
                  <strong>{selectedTheoryInfo?.name}</strong>
                </div>
                <div className={styles.costRow}>
                  <span>Tokens estimados:</span>
                  <strong>~{Math.ceil(((selectedTheoryInfo?.prompt?.length || selectedTheoryInfo?.description?.length) || 0) * 3.5 / 1000)}K</strong>
                </div>
                <div className={styles.costTotal}>
                  <span>Costo estimado:</span>
                  <strong className={styles.costAmount}>
                    {estimatedCost > 0 ? `$${estimatedCost.toFixed(4)}` : 'Gratis'}
                  </strong>
                </div>
              </div>
              <small className={styles.costNote}>
                * El costo final puede variar según la longitud de la respuesta
              </small>
            </div>
          )}

          {/* Mensajes de error */}
          {error && (
            <div className={styles.error}>
              <AlertCircle size={18} />
              {error}
            </div>
          )}

          {/* Botón de generar mejorado */}
          <button
            className={styles.generateButton}
            onClick={generateAnalysis}
            disabled={!selectedTheory || (!selectedModel && selectedModel !== 'demo-mode') || loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                Analizando con {selectedModelInfo?.name || 'Demo Mode'}...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Generar Análisis Narrativo
                {selectedModel !== 'demo-mode' && estimatedCost > 0 && ` (~$${estimatedCost.toFixed(3)})`}
              </>
            )}
          </button>
        </div>
      ) : (
        // Pantalla de resultados mejorada
        <div className={styles.analysisResult}>
          <div className={styles.resultHeader}>
            <button
              className={styles.backButton}
              onClick={() => {
                setAnalysisResult('');
                setSelectedTheory('');
                setActualCost('');
                setError('');
                setUseNewMethodologies(false);
                setSelectedMethodologyInfo(null);
              }}
            >
              ← Nuevo análisis
            </button>
            
            <div className={styles.resultTitle}>
              <h2>
                {selectedTheoryInfo?.icon}{' '}
                {selectedTheoryInfo?.name}
              </h2>
              <p className={styles.resultSubtitle}>
                Análisis de "{movieTitle}"
              </p>
            </div>
            
            <div className={styles.resultMetadata}>
              <span className={styles.modelBadge}>
                {providers.find(p => p.models.some(m => m.id === selectedModel))?.icon || '🎭'}{' '}
                {selectedModelInfo?.name || 'Demo Mode'}
              </span>
              {actualCost && (
                <span className={styles.costBadge}>
                  <DollarSign size={14} />
                  {actualCost}
                </span>
              )}
            </div>
          </div>

          <div className={styles.analysisContent}>
            <MarkdownRenderer content={analysisResult} />
          </div>

          <div className={styles.resultActions}>
            <button
              className={`${styles.actionButton} ${copySuccess ? styles.success : ''}`}
              onClick={copyToClipboard}
            >
              {copySuccess ? (
                <>
                  <Check size={18} />
                  Copiado
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copiar análisis
                </>
              )}
            </button>
            
            <button
              className={`${styles.actionButton} ${styles.shareButton} ${shareSuccess ? styles.success : ''}`}
              onClick={shareAnalysis}
            >
              {shareSuccess ? (
                <>
                  <Check size={18} />
                  Compartido con la comunidad
                </>
              ) : (
                <>
                  <Share2 size={18} />
                  Compartir con la comunidad
                </>
              )}
            </button>
            
            <button
              className={`${styles.actionButton} ${styles.saveButton}`}
              onClick={() => {
                const analysis = savedAnalyses.find(a => 
                  a.theoryId === selectedTheory && a.content === analysisResult
                );
                if (analysis) {
                  alert('✅ Análisis guardado en tu cinemateca');
                }
              }}
            >
              <Save size={18} />
              Guardado en Mi Cinemateca
            </button>
          </div>
        </div>
      )}
      {showAIModal && (
        <AIModelSelector
          isOpen={showAIModal}
          onClose={() => setShowAIModal(false)}
          onSelectModel={(modelId, modelInfo) => {
            console.log('🎯 Modelo seleccionado en panel:', modelId);
            setSelectedModel(modelId);
            setShowAIModal(false);
          }}
          selectedModelId={selectedModel}
        />
      )}
      
      {/* Modal del nuevo selector de metodologías */}
      {showMethodologyModal && (
        <MethodologySelector
          isOpen={showMethodologyModal}
          onClose={() => setShowMethodologyModal(false)}
          onSelectMethodology={(methodologyId, methodology, categoryId) => {
            console.log('🎯 Metodología seleccionada:', methodologyId, 'de categoría:', categoryId);
            setSelectedTheory(methodologyId);
            setSelectedMethodologyInfo(methodology);
            // Si es una metodología de la selección curada (clásica), no usar nuevas metodologías
            setUseNewMethodologies(categoryId !== 'curated-selection');
            setShowMethodologyModal(false);
          }}
          selectedMethodologyId={selectedTheory}
        />
      )}
    </div>
  );
};
