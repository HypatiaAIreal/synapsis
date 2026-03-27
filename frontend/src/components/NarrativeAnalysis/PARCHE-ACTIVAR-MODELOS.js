// PARCHE PARA AIModelSelector - Mostrar todos los modelos como disponibles
// Agregar estas líneas después de la línea 43 (después de setProviders(data.providers);)

// HACK: Activar todos los modelos localmente
const allModelsEnabled = data.providers.map(provider => ({
  ...provider,
  models: provider.models.map(model => ({
    ...model,
    available: true  // Forzar todos como disponibles
  }))
}));
setProviders(allModelsEnabled);
console.log('✅ Todos los modelos activados localmente');

// FIN DEL PARCHE