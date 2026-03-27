// 🎬 SYNAPSIS - Rutas de Análisis Narrativo con IA
const { Router } = require('express');
const { AnalyzeController } = require('../controllers/analyze.controller.js');

const router = Router();
const analyzeController = new AnalyzeController();

// 🤖 Endpoints de análisis narrativo
router.get('/providers', analyzeController.getProviders);
router.get('/models', analyzeController.getModels); // Para compatibilidad
router.post('/narrative', analyzeController.generateNarrativeAnalysis);
router.get('/movie/:movieId', analyzeController.getAnalysesByMovie);

module.exports = router;