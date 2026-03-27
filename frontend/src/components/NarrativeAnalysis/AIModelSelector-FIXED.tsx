// 🤖 Componente Modal de Selección de IA para Análisis Narrativo - VERSIÓN ARREGLADA
import React, { useState, useEffect } from 'react';
import { X, Sparkles, Check, AlertCircle, DollarSign, Zap, Brain } from 'lucide-react';
import styles from './AIModelSelector.module.css';

interface Model {
  id: string;
  name: string;
  displayName: string;
  provider: string;
  costPer1kTokens: number;
  available: boolean;
  description?: string;
  maxTokens?: number;
  strengths?: string[];
}

interface Provider {
  id: string;
  name: string;
  icon: string;
  models: Model[];
}

interface AIModelSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectModel: (modelId: string, modelInfo: Model) => void;
  selectedModelId?: string;
}

export const AIModelSelector: React.FC<AIModelSelectorProps> = ({
  isOpen,
  onClose,
  onSelectModel,
  selectedModelId
}) => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedProvider, setSelectedProvider] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      loadProviders();
    }
  }, [isOpen]);

  const loadProviders = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3000/api/ai/providers');
      const data = await response.json();

      if (data.success && data.providers) {
        console.log('🤖 Modelos cargados:', data.providers);
        setProviders(data.providers);
        // Seleccionar primer proveedor con modelos disponibles
        const firstAvailable = data.providers.find((p: Provider) => 
          p.models.some((m: Model) => m.available)
        );
        if (firstAvailable) {
          setSelectedProvider(firstAvailable.id);
        }
      } else {
        setError('No se pudieron cargar los modelos');
      }
    } catch (err) {
      setError('Error al conectar con el servidor');
      console.error('Error loading providers:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleModelSelect = (model: Model) => {
    if (!model.available) {
      // Mostrar mensaje de que el modelo no está disponible
      alert(`⚠️ ${model.displayName || model.name} no está disponible actualmente.\n\nPor favor, selecciona otro modelo.`);
      return;
    }
    
    console.log('✅ Modelo seleccionado:', model.id, model);
    onSelectModel(model.id, model);
  };

  if (!isOpen) return null;

  const getProviderIcon = (providerId: string) => {
    const icons: Record<string, string> = {
      anthropic: '🧠',
      openai: '🤖',
      google: '✨',
      xai: '🔮',
      deepseek: '🌊'
    };
    return icons[providerId] || '🤖';
  };

  const getProviderColor = (providerId: string) => {
    const colors: Record<string, string> = {
      anthropic: '#D4A574',
      openai: '#74AA9C',
      google: '#4285F4',
      xai: '#8B5CF6',
      deepseek: '#059669'
    };
    return colors[providerId] || '#6B7280';
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>
            <Sparkles className={styles.headerIcon} />
            Elige tu asistente de IA
          </h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Cargando modelos disponibles...</p>
          </div>
        ) : error ? (
          <div className={styles.error}>
            <AlertCircle size={24} />
            <p>{error}</p>
            <button onClick={loadProviders}>Reintentar</button>
          </div>
        ) : (
          <>
            {/* Tabs de proveedores */}
            <div className={styles.providerTabs}>
              {providers.map((provider) => {
                const hasAvailable = provider.models.some(m => m.available);
                return (
                  <button
                    key={provider.id}
                    className={`${styles.providerTab} ${
                      selectedProvider === provider.id ? styles.active : ''
                    } ${!hasAvailable ? styles.disabled : ''}`}
                    onClick={() => hasAvailable && setSelectedProvider(provider.id)}
                    style={{
                      borderColor: selectedProvider === provider.id ? getProviderColor(provider.id) : undefined
                    }}
                  >
                    <span className={styles.providerIcon}>{provider.icon}</span>
                    <span className={styles.providerName}>{provider.name}</span>
                    {hasAvailable ? (
                      <span className={styles.availableBadge}>
                        <Check size={14} />
                      </span>
                    ) : (
                      <span className={styles.unavailableBadge}>
                        <AlertCircle size={14} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Lista de modelos */}
            <div className={styles.modelsList}>
              {providers
                .find(p => p.id === selectedProvider)
                ?.models.map((model) => (
                  <div
                    key={model.id}
                    className={`${styles.modelCard} ${
                      selectedModelId === model.id ? styles.selected : ''
                    } ${!model.available ? styles.disabled : ''}`}
                    onClick={() => handleModelSelect(model)}  // Usar la función que verifica disponibilidad
                    style={{
                      cursor: model.available ? 'pointer' : 'not-allowed',
                      opacity: model.available ? 1 : 0.6
                    }}
                  >
                    <div className={styles.modelHeader}>
                      <h3>{model.displayName || model.name}</h3>
                      {selectedModelId === model.id && model.available && (
                        <span className={styles.selectedBadge}>
                          <Check size={16} />
                        </span>
                      )}
                    </div>

                    <p className={styles.modelDescription}>
                      {model.description || 'Modelo de IA avanzado'}
                    </p>

                    {model.strengths && model.strengths.length > 0 && (
                      <div className={styles.modelStrengths}>
                        {model.strengths.slice(0, 3).map((strength, idx) => (
                          <span key={idx} className={styles.strengthTag}>
                            {strength}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className={styles.modelFooter}>
                      <div className={styles.modelSpecs}>
                        <span className={styles.specItem}>
                          <Zap size={14} />
                          {model.maxTokens ? `${(model.maxTokens / 1000).toFixed(0)}K tokens` : 'Estándar'}
                        </span>
                        <span className={styles.specItem}>
                          <DollarSign size={14} />
                          {model.costPer1kTokens > 0 
                            ? `$${model.costPer1kTokens.toFixed(4)}/1K`
                            : 'Gratis'
                          }
                        </span>
                      </div>

                      {!model.available && (
                        <div className={styles.unavailableMessage}>
                          <AlertCircle size={16} />
                          No disponible
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>

            {/* Resumen del modelo seleccionado */}
            {selectedModelId && (
              <div className={styles.selectionSummary}>
                <p>
                  Modelo seleccionado: <strong>{
                    providers.flatMap(p => p.models)
                      .find(m => m.id === selectedModelId)?.displayName
                  }</strong>
                </p>
              </div>
            )}

            {/* Mensaje de ayuda */}
            <div style={{
              marginTop: '16px',
              padding: '12px',
              background: 'rgba(147, 51, 234, 0.1)',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#e9d5ff'
            }}>
              💡 <strong>Nota:</strong> Solo puedes seleccionar modelos marcados como disponibles. 
              Los modelos en gris requieren configuración adicional de API keys.
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AIModelSelector;
