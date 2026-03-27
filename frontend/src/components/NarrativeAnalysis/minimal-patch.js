// 🚀 PARCHE MÍNIMO para integrar el Modal sin romper la funcionalidad existente

// En NarrativeAnalysisPanel.tsx, buscar donde dice:
// <h3 className={styles.sectionTitle}>
//   <Sparkles className={styles.sectionIcon} />
//   Elige tu asistente de IA
// </h3>

// Y SOLO agregar después del <h3>:

import AIModelSelector from './AIModelSelector';

// Al inicio del componente, agregar:
const [showModelModal, setShowModelModal] = useState(false);

// Donde está el dropdown actual de proveedores, agregar un botón ANTES:
<div style={{ marginBottom: '16px' }}>
  <button
    onClick={() => setShowModelModal(true)}
    style={{
      width: '100%',
      padding: '12px 20px',
      background: 'linear-gradient(135deg, rgba(255,107,157,0.2), rgba(196,79,220,0.2))',
      border: '2px solid rgba(255,107,157,0.4)',
      borderRadius: '10px',
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      transition: 'all 0.3s'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(255,107,157,0.3)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    🤖 Abrir selector avanzado de modelos
  </button>
  <p style={{ 
    textAlign: 'center', 
    marginTop: '8px', 
    fontSize: '14px', 
    color: '#94a3b8' 
  }}>
    o usa el selector clásico abajo
  </p>
</div>

// Al final del componente, antes del último </div>:
<AIModelSelector
  isOpen={showModelModal}
  onClose={() => setShowModelModal(false)}
  onSelectModel={(modelId, modelInfo) => {
    setSelectedModel(modelId);
    setShowModalModal(false);
  }}
  selectedModelId={selectedModel}
/>

// NOTA: Este enfoque:
// 1. NO rompe nada existente
// 2. Agrega el modal como opción adicional
// 3. Mantiene el selector original funcionando
// 4. Los usuarios pueden elegir qué interfaz usar
