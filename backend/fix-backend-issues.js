// 🔧 FIX RÁPIDO: Verificar que el backend esté corriendo correctamente

// En una terminal PowerShell o CMD:

// 1. Detener el servidor actual (Ctrl+C)

// 2. Navegar al backend:
cd C:\synapsis\backend

// 3. Verificar que todas las dependencias estén instaladas:
npm install

// 4. Iniciar el servidor con logs detallados:
npm run dev

// 5. Verificar en la consola que aparezca:
// ✅ "GET /api/ai/providers (Modelos desde MongoDB Atlas) 🌐"

// 6. Si hay errores de importación, verificar:
// - Que el archivo shared-ai-config.service.js use module.exports
// - Que todas las dependencias estén instaladas (mongodb, crypto)

// 7. Test manual desde el navegador:
// Abrir: http://localhost:3000/api/ai/providers
// Debería mostrar JSON con los proveedores

// 8. Si sigue sin funcionar, agregar más logs en ai-config.routes.js:

router.get('/providers', async (req, res) => {
  console.log('🔍 ENTRANDO A /api/ai/providers');
  console.log('🔍 sharedAIConfig existe?', !!sharedAIConfig);
  console.log('🔍 getAvailableModels existe?', typeof sharedAIConfig.getAvailableModels);
  
  try {
    // ... resto del código
  } catch (error) {
    console.error('❌ Error COMPLETO:', error);
    console.error('❌ Stack:', error.stack);
  }
});

// 9. También verificar CORS en server.js:
// Asegurarse de que incluya:
app.use(cors({
  origin: ["http://localhost:3001", "http://127.0.0.1:3001", "http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}));
