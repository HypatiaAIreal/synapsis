// 🎬 ACTUALIZACIÓN PARA INTEGRAR EL NUEVO SISTEMA DE METODOLOGÍAS

import React from 'react';
import { MethodologyIntegrationService } from '../../data/methodologyIntegration';

// Función para actualizar el NarrativeAnalysisPanel existente
export const updateNarrativeAnalysisPanel = () => {
  // Esta función actualizará el componente existente para usar tanto
  // las 11 metodologías clásicas como las 100+ nuevas
  
  const integrationService = new MethodologyIntegrationService();
  
  // Reemplazar el botón de "Abrir selector de modelos" por:
  // "Abrir selector de metodologías" que mostrará la nueva UI 3x5
  
  return {
    // Mantener las 11 teorías clásicas
    classicTheories: true,
    
    // Agregar el nuevo selector
    newMethodologySelector: true,
    
    // Usar el servicio de integración
    service: integrationService
  };
};

// Wrapper temporal para la transición
export const EnhancedNarrativeAnalysisPanel = (props: any) => {
  const [useNewSystem, setUseNewSystem] = React.useState(false);
  
  return (
    <div>
      {/* Botón de toggle para cambiar entre sistemas */}
      <button
        onClick={() => setUseNewSystem(!useNewSystem)}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          padding: '8px 16px',
          background: useNewSystem ? '#7b61ff' : '#666',
          color: 'white',
          border: 'none',
          borderRadius: '20px',
          fontSize: '12px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        {useNewSystem ? '🚀 Sistema Nuevo (100+)' : '📚 Sistema Clásico (11)'}
      </button>
      
      {/* Renderizar el componente apropiado */}
      {useNewSystem ? (
        // Aquí iría el nuevo selector con las 100+ metodologías
        <div>Nueva UI con 100+ metodologías (por implementar)</div>
      ) : (
        // Mantener el sistema actual
        <div>Sistema actual con 11 teorías</div>
      )}
    </div>
  );
};

// INSTRUCCIONES DE INTEGRACIÓN:
/*
1. En NarrativeAnalysisPanel.tsx, reemplazar la sección de teorías por:

// Importar al inicio
import { MethodologySelector } from './MethodologySelector';
import { MethodologyIntegrationService } from '../data/methodologyIntegration';

// En el componente, agregar:
const [showNewMethodologySelector, setShowNewMethodologySelector] = useState(false);
const integrationService = new MethodologyIntegrationService();

// Reemplazar el grid de teorías actual con:
<div className={styles.theorySection}>
  <h3 className={styles.sectionTitle}>
    <BookOpen className={styles.sectionIcon} />
    Selecciona la metodología de análisis
  </h3>
  
  <button
    onClick={() => setShowNewMethodologySelector(true)}
    className={styles.newMethodologySelectorButton}
    style={{
      width: '100%',
      padding: '20px',
      marginBottom: '20px',
      background: 'linear-gradient(135deg, #7b61ff, #b98ff3)',
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
      transition: 'all 0.3s ease'
    }}
  >
    🚀 Explorar 100+ Metodologías de Análisis
  </button>
  
  <p style={{ textAlign: 'center', margin: '20px 0', color: '#999' }}>
    — O usa las metodologías clásicas —
  </p>
  
  <div className={styles.theoryGrid}>
    {Object.entries(NARRATIVE_THEORIES).map(([key, theory]) => (
      // ... código existente del grid ...
    ))}
  </div>
</div>

// Agregar el modal del nuevo selector:
{showNewMethodologySelector && (
  <MethodologySelector
    movie={movieData}
    onSelectMethodology={(methodologyId, aiModel) => {
      // Obtener el prompt de la metodología seleccionada
      const prompt = integrationService.getAnalysisPrompt(methodologyId, movieTitle);
      
      // Usar el prompt con el sistema existente
      setSelectedTheory(methodologyId);
      setSelectedModel(aiModel || selectedModel);
      setShowNewMethodologySelector(false);
      
      // Generar análisis con el nuevo prompt
      // ... código de generación ...
    }}
    onClose={() => setShowNewMethodologySelector(false)}
  />
)}
*/

// BENEFICIOS DE ESTA INTEGRACIÓN:
// 1. Mantiene compatibilidad total con las 11 teorías existentes
// 2. Agrega acceso a 100+ metodologías nuevas
// 3. UI mejorada de 3 columnas x 5 filas
// 4. Sistema de recomendaciones adaptativas
// 5. Sin romper funcionalidad existente
