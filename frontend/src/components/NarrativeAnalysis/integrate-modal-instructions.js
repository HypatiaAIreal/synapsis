// 🎬 Integración del Modal de Selección de IA en NarrativeAnalysisPanel

import React from 'react';
import AIModelSelector from './AIModelSelector';

// En el componente NarrativeAnalysisPanel, actualizar la sección de "Elige tu asistente de IA":

// 1. Agregar estado para el modal (al inicio del componente):
const [showModelModal, setShowModelModal] = useState(false);

// 2. Modificar el handler de selección de modelo:
const handleModelSelection = (modelId: string, modelInfo: any) => {
  setSelectedModel(modelId);
  setShowModelModal(false);
  console.log('Modelo seleccionado desde modal:', modelInfo);
};

// 3. En la sección "Elige tu asistente de IA", reemplazar el contenido actual con:

{/* Selector de modelo mejorado con modal */}
<div className={styles.modelSelector}>
  <h3 className={styles.sectionTitle}>
    <Sparkles className={styles.sectionIcon} />
    Elige tu asistente de IA
  </h3>
  
  {/* Botón para abrir el modal */}
  <button
    className={styles.openModalButton}
    onClick={() => setShowModelModal(true)}
  >
    <span className={styles.modelIcon}>🤖</span>
    {selectedModel ? 
      providers.flatMap(p => p.models).find(m => m.id === selectedModel)?.name || 'Seleccionar modelo'
      : 'Seleccionar asistente de IA'
    }
    <ChevronDown size={20} />
  </button>
  
  {/* Información del modelo seleccionado */}
  {selectedModel && selectedModelInfo && (
    <div className={styles.selectedModelInfo}>
      <p className={styles.modelName}>{selectedModelInfo.name}</p>
      <p className={styles.modelCost}>
        Costo estimado: ${estimatedCost.toFixed(4)} por análisis
      </p>
    </div>
  )}
</div>

// 4. Al final del componente, antes del último cierre, agregar el modal:

{/* Modal de selección de IA */}
<AIModelSelector
  isOpen={showModelModal}
  onClose={() => setShowModelModal(false)}
  onSelectModel={handleModelSelection}
  selectedModelId={selectedModel}
/>

// 5. Estilos adicionales necesarios en NarrativeAnalysis.module.css:

.openModalButton {
  width: 100%;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 107, 157, 0.3);
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  transition: all 0.3s;
}

.openModalButton:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 107, 157, 0.5);
  transform: translateY(-1px);
}

.modelIcon {
  font-size: 24px;
}

.selectedModelInfo {
  margin-top: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border-left: 3px solid #ff6b9d;
}

.modelName {
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 4px 0;
}

.modelCost {
  font-size: 14px;
  color: #94a3b8;
  margin: 0;
}

// IMPORTANTE: Este enfoque mantiene TODA la funcionalidad existente de las metodologías
// y solo mejora la selección de modelos con un modal más elegante.
