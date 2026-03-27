// SOLUCIÓN: Asegurar que selectedModel tenga valor por defecto
// En NarrativeAnalysisPanel.tsx, buscar donde se declara el estado:
// const [selectedModel, setSelectedModel] = useState<string>('');

// CAMBIAR POR:
const [selectedModel, setSelectedModel] = useState<string>('claude-3-opus'); // Modelo por defecto

// TAMBIÉN: En el useEffect que carga los modelos (línea ~280), 
// asegurarse de que siempre haya un modelo seleccionado:

useEffect(() => {
  // ... código existente ...
  
  // Si no hay modelo seleccionado, usar el primero disponible
  if (!selectedModel && providers.length > 0) {
    const firstAvailable = providers
      .flatMap(p => p.models)
      .find(m => m.available);
    
    if (firstAvailable) {
      console.log('✅ Auto-seleccionando:', firstAvailable.id);
      setSelectedModel(firstAvailable.id);
    }
  }
}, [providers]); // Agregar providers como dependencia