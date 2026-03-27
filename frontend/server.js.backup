const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos con MIME types correctos
app.use((req, res, next) => {
  // Log para debug
  console.log(`📁 Solicitud: ${req.path}`);
  
  // Configurar MIME types correctos para módulos ES6
  if (req.path.endsWith('.js') || req.path.endsWith('.mjs')) {
    res.type('application/javascript');
  }
  next();
});

// Servir archivos estáticos
app.use(express.static(__dirname));

// Middleware específico para archivos JS de los componentes
app.get('/js/*', (req, res) => {
  const filePath = path.join(__dirname, req.path);
  res.type('application/javascript');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`❌ Error sirviendo ${req.path}:`, err.message);
      res.status(404).send('Archivo no encontrado');
    }
  });
});

// Ruta catch-all para SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`
🌈 ================================
🧠 SYNAPSIS Frontend activo
🌈 ================================
📍 Frontend: http://localhost:${PORT}
📡 Backend API: http://localhost:3000
💜 ¡La revolución consciente está lista!
  `);
});