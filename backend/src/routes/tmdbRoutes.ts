/**
 * 🎬 SYNAPSIS TMDB Routes - Endpoints para búsqueda y gestión de películas
 */

import { Router } from 'express';
import tmdbService from '../services/tmdbService';
import connectDB from '../config/database';

const router = Router();

// Conectar a MongoDB para gestionar cinemateca
let db: any;
connectDB().then(database => {
  db = database;
});

/**
 * 🔍 POST /api/tmdb/search
 * Buscar películas en TMDB
 */
router.post('/tmdb/search', async (req, res) => {
  try {
    const { query, options = {} } = req.body;
    
    if (!query || query.length < 2) {
      return res.status(400).json({
        success: false,
        error: 'La búsqueda debe tener al menos 2 caracteres'
      });
    }

    console.log(`🔍 Buscando películas: "${query}"`);
    
    const results = await tmdbService.searchMovies(query, options.page || 1);
    
    res.json({
      success: true,
      data: results,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('❌ Error en búsqueda TMDB:', error);
    res.status(500).json({
      success: false,
      error: 'Error al buscar películas'
    });
  }
});

/**
 * 🎬 GET /api/tmdb/movie/:id
 * Obtener detalles de película con datos enriquecidos
 */
router.get('/tmdb/movie/:id', async (req, res) => {
  try {
    const movieId = parseInt(req.params.id);
    const { append_to_response } = req.query;
    
    console.log(`🎬 Obteniendo película ID: ${movieId}`);
    console.log(`📊 append_to_response: ${append_to_response}`);
    
    // Si viene append_to_response, obtener todo de una vez
    if (append_to_response) {
      const details = await tmdbService.getMovieDetailsEnhanced(movieId, append_to_response as string);
      
      console.log('✅ Datos obtenidos:');
      console.log('- Título:', details.title);
      console.log('- Fecha:', details.release_date);
      console.log('- Rating:', details.vote_average);
      console.log('- Credits:', !!details.credits);
      console.log('- Images:', !!details.images);
      
      res.json({
        success: true,
        data: details
      });
    } else {
      // Comportamiento original: detalles + créditos
      const [details, credits] = await Promise.all([
        tmdbService.getMovieDetails(movieId),
        tmdbService.getMovieCredits(movieId)
      ]);
      
      res.json({
        success: true,
        data: {
          ...details,
          credits
        }
      });
    }
  } catch (error) {
    console.error('❌ Error obteniendo detalles:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener detalles de la película',
      details: error.message
    });
  }
});

/**
 * 📚 GET /api/cinemateca
 * Obtener películas de la cinemateca del usuario
 */
router.get('/cinemateca', async (req, res) => {
  try {
    const userId = req.query.userId || 'demo_user';
    
    const cinemateca = await db.collection('cinemateca')
      .find({ userId })
      .sort({ addedAt: -1 })
      .toArray();
    
    res.json({
      success: true,
      data: cinemateca,
      count: cinemateca.length
    });
  } catch (error) {
    console.error('❌ Error obteniendo cinemateca:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener la cinemateca'
    });
  }
});

/**
 * ➕ POST /api/cinemateca/add
 * Agregar película a la cinemateca con TODOS los datos enriquecidos
 */
router.post('/cinemateca/add', async (req, res) => {
  try {
    const { movie, userId = 'demo_user' } = req.body;
    
    if (!movie || !movie.id) {
      return res.status(400).json({
        success: false,
        error: 'Datos de película inválidos'
      });
    }

    // Verificar si ya existe
    const exists = await db.collection('cinemateca').findOne({
      userId,
      'movie.id': movie.id
    });

    if (exists) {
      return res.json({
        success: false,
        error: 'La película ya está en tu cinemateca'
      });
    }

    // Obtener TODOS los datos enriquecidos antes de guardar
    console.log('📊 Obteniendo datos completos para guardar en cinemateca...');
    const fullMovieData = await tmdbService.getMovieDetailsEnhanced(
      movie.id, 
      'credits,images,videos,keywords,reviews,external_ids'
    );

    // Agregar a cinemateca con datos completos
    const result = await db.collection('cinemateca').insertOne({
      userId,
      movie: fullMovieData, // Guardamos TODOS los datos
      movieBasic: movie, // Guardamos también los datos básicos para búsqueda rápida
      addedAt: new Date(),
      analysisCount: 0,
      lastViewed: null
    });

    console.log('✅ Película agregada con datos completos');

    res.json({
      success: true,
      data: {
        _id: result.insertedId,
        movie: fullMovieData
      },
      message: 'Película agregada a tu cinemateca con todos los datos'
    });
  } catch (error) {
    console.error('❌ Error agregando a cinemateca:', error);
    res.status(500).json({
      success: false,
      error: 'Error al agregar película a la cinemateca'
    });
  }
});

/**
 * ❌ DELETE /api/cinemateca/:movieId
 * Eliminar película de la cinemateca
 */
router.delete('/cinemateca/:movieId', async (req, res) => {
  try {
    const movieId = parseInt(req.params.movieId);
    const userId = req.query.userId || 'demo_user';
    
    const result = await db.collection('cinemateca').deleteOne({
      userId,
      'movie.id': movieId
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        error: 'Película no encontrada en tu cinemateca'
      });
    }

    res.json({
      success: true,
      message: 'Película eliminada de tu cinemateca'
    });
  } catch (error) {
    console.error('❌ Error eliminando de cinemateca:', error);
    res.status(500).json({
      success: false,
      error: 'Error al eliminar película de la cinemateca'
    });
  }
});

/**
 * 🔥 GET /api/tmdb/trending
 * Obtener películas trending
 */
router.get('/tmdb/trending', async (req, res) => {
  try {
    const timeWindow = (req.query.timeWindow as 'day' | 'week') || 'week';
    const results = await tmdbService.getTrendingMovies(timeWindow);
    
    res.json({
      success: true,
      data: results
    });
  } catch (error) {
    console.error('❌ Error obteniendo trending:', error);
    res.status(500).json({
      success: false,
      error: 'Error al obtener películas trending'
    });
  }
});

export default router;