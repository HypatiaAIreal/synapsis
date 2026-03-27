// 🎬 SYNAPSIS - APIs para Sistema de Análisis Cinematográfico
// Por Hypatia & Carles - Endpoints para la revolución consciente

import express from 'express';
import { MovieAnalysisModel, PersonalDashboardModel, generateAnalysisId } from '../analysis/models';
import { findBeingByAvatarId } from '../core/being-registry';

// Import TMDB tools
import * as tmdb from '../modules/cinepolis/tmdb-integration';

const router = express.Router();

// ===== ENDPOINTS DE PELÍCULAS CON BLOQUES =====

// Obtener detalle completo de película con bloques
router.get('/movies/:movieId/details', async (req, res): Promise<void> => {
  try {
    const { movieId } = req.params;
    const { userId } = req.query; // avatarId opcional del usuario
    
    // Buscar película en nuestra base de datos
    const movie = await tmdb.MovieModel.findOne({ 
      $or: [{ id: movieId }, { tmdb_id: parseInt(movieId) }] 
    }).lean();
    
    if (!movie) {
      res.status(404).json({
        success: false,
        error: 'Película no encontrada'
      });
      return;
    }
    
    // Obtener datos adicionales de TMDB si tenemos tmdb_id
    let tmdbData = null;
    if (movie.tmdb_id) {
      try {
        // Aquí usarías los tools TMDB reales
        // Por ahora simulamos la estructura
        tmdbData = {
          cast: [
            { name: 'Actor Principal', character: 'Personaje', profile_path: null, order: 0 },
            // ... más datos del cast
          ],
          crew: [],
          images: {
            backdrops: [],
            posters: []
          },
          videos: {
            results: []
          },
          production_companies: [],
          // Los campos budget y revenue no están en nuestro modelo
          runtime: movie.duration || null,
          release_date: movie.year ? `${movie.year}-01-01` : null
        };
      } catch (error) {
        console.warn('Error obteniendo datos TMDB:', error);
      }
    }
    
    // Estadísticas comunitarias
    const communityAnalyses = await MovieAnalysisModel.find({
      movie_id: movieId,
      visibility: { $in: ['community', 'public'] }
    }).lean();
    
    const userAnalyses = userId ? await MovieAnalysisModel.find({
      movie_id: movieId,
      created_by: userId
    }).lean() : [];
    
    res.json({
      success: true,
      movie: {
        ...movie,
        tmdb_data: tmdbData,
        community_metrics: {
          total_analyses: communityAnalyses.length,
          average_rating: 0, // Calcularíamos basado en ratings
          most_discussed_themes: extractMostDiscussedThemes(communityAnalyses),
          trending_analyses: [...communityAnalyses]
            .sort((a, b) => b.reaction_count - a.reaction_count)
            .slice(0, 5)
            .map(a => a.id)
        },
        user_data: userId ? {
          personal_analyses: userAnalyses,
          analysis_count: userAnalyses.length
        } : null
      }
    });
    
  } catch (error) {
    console.error('Error obteniendo detalles de película:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
});

// ===== ENDPOINTS DE ANÁLISIS =====

// Obtener análisis de una película
router.get('/analyses/movie/:movieId', async (req, res): Promise<void> => {
  try {
    const { movieId } = req.params;
    const { visibility, created_by, analysis_type, block_category } = req.query;
    
    const filter: any = { movie_id: movieId };
    
    if (visibility) {
      filter.visibility = visibility;
    }
    
    if (created_by) {
      filter.created_by = created_by;
    }
    
    if (analysis_type) {
      filter.analysis_type = analysis_type;
    }
    
    if (block_category) {
      filter.block_category = block_category;
    }
    
    const analyses = await MovieAnalysisModel.find(filter)
      .sort({ created_at: -1 })
      .limit(50)
      .lean();
    
    res.json({
      success: true,
      analyses,
      count: analyses.length
    });
    
  } catch (error) {
    console.error('Error obteniendo análisis:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
});

// Crear nuevo análisis
router.post('/analyses', async (req, res): Promise<void> => {
  try {
    const {
      movie_id,
      movie_title,
      created_by,
      analysis_type,
      block_category,
      title,
      content,
      summary,
      tags,
      themes_explored,
      technical_aspects,
      visibility,
      references
    } = req.body;
    
    // Verificar que el ser existe
    const being = await findBeingByAvatarId(created_by);
    if (!being) {
      res.status(404).json({
        success: false,
        error: 'Ser no encontrado'
      });
      return;
    }
    
    // Crear análisis
    const analysisData = {
      id: generateAnalysisId(),
      movie_id,
      movie_title,
      created_by,
      analysis_type,
      block_category,
      title,
      content,
      summary,
      tags: tags || [],
      themes_explored: themes_explored || [],
      technical_aspects: technical_aspects || [],
      visibility: visibility || 'private',
      is_private: visibility !== 'community' && visibility !== 'public',
      references: references || [],
      depth_score: calculateDepthScore(content),
      originality_score: 5 // Por defecto, podría calcularse con IA
    };
    
    const analysis = new MovieAnalysisModel(analysisData);
    await analysis.save();
    
    // Actualizar dashboard personal
    await updatePersonalDashboard(created_by, 'analysis_created', analysis.id);
    
    res.json({
      success: true,
      analysis: analysis.toJSON(),
      message: 'Análisis creado exitosamente'
    });
    
  } catch (error) {
    console.error('Error creando análisis:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
});

// Obtener análisis específico
router.get('/analyses/:analysisId', async (req, res): Promise<void> => {
  try {
    const { analysisId } = req.params;
    const { userId } = req.query; // Para verificar permisos
    
    const analysis = await MovieAnalysisModel.findOne({ id: analysisId }).lean();
    
    if (!analysis) {
      res.status(404).json({
        success: false,
        error: 'Análisis no encontrado'
      });
      return;
    }
    
    // Verificar permisos de acceso
    const canAccess = 
      analysis.visibility === 'public' ||
      analysis.visibility === 'community' ||
      (analysis.created_by === userId);
    
    if (!canAccess) {
      res.status(403).json({
        success: false,
        error: 'No tienes permiso para ver este análisis'
      });
      return;
    }
    
    // Incrementar contador de vistas (solo si no es el autor)
    if (userId && analysis.created_by !== userId) {
      await MovieAnalysisModel.updateOne(
        { id: analysisId },
        { $inc: { view_count: 1 } }
      );
    }
    
    res.json({
      success: true,
      analysis
    });
    
  } catch (error) {
    console.error('Error obteniendo análisis:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
});

// Reaccionar a un análisis
router.post('/analyses/:analysisId/reactions', async (req, res): Promise<void> => {
  try {
    const { analysisId } = req.params;
    const { type, sender_id, note } = req.body;
    
    // Verificar que el ser existe
    const being = await findBeingByAvatarId(sender_id);
    if (!being) {
      res.status(404).json({
        success: false,
        error: 'Ser no encontrado'
      });
      return;
    }
    
    // Buscar análisis
    const analysis = await MovieAnalysisModel.findOne({ id: analysisId });
    if (!analysis) {
      res.status(404).json({
        success: false,
        error: 'Análisis no encontrado'
      });
      return;
    }
    
    // Remover reacción previa del mismo usuario
    analysis.reactions = analysis.reactions.filter(r => r.sender_id !== sender_id);
    
    // Agregar nueva reacción
    analysis.reactions.push({
      type,
      sender_id,
      added_at: new Date(),
      note
    });
    
    // Actualizar contador
    analysis.reaction_count = analysis.reactions.length;
    
    await analysis.save();
    
    res.json({
      success: true,
      message: 'Reacción agregada',
      reaction_count: analysis.reaction_count
    });
    
  } catch (error) {
    console.error('Error agregando reacción:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
});

// ===== ENDPOINTS DE DASHBOARD =====

// Obtener dashboard personal
router.get('/dashboard/:userId', async (req, res): Promise<void> => {
  try {
    const { userId } = req.params;
    
    // Verificar que el ser existe
    const being = await findBeingByAvatarId(userId);
    if (!being) {
      res.status(404).json({
        success: false,
        error: 'Ser no encontrado'
      });
      return;
    }
    
    // Buscar o crear dashboard
    let dashboard = await PersonalDashboardModel.findOne({ owner_id: userId }).lean();
    
    if (!dashboard) {
      // Crear dashboard inicial
      const newDashboard = new PersonalDashboardModel({
        owner_id: userId,
        private_analyses: [],
        shared_analyses: [],
        draft_analyses: [],
        saved_community_analyses: [],
        favorite_movies: [],
        watchlist: [],
        total_analyses_written: 0,
        community_impact_score: 0,
        areas_of_expertise: [],
        privacy_settings: {
          show_analysis_count: true,
          show_favorite_movies: false,
          allow_collaboration_invites: true,
          auto_share_high_quality: false
        },
        notification_preferences: {
          new_comments: true,
          new_reactions: true,
          collaboration_invites: true,
          community_highlights: true
        },
        recent_activity: []
      });
      
      await newDashboard.save();
      dashboard = newDashboard.toJSON();
    }
    
    res.json({
      success: true,
      dashboard
    });
    
  } catch (error) {
    console.error('Error obteniendo dashboard:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
});

// ===== UTILIDADES =====

function extractMostDiscussedThemes(analyses: any[]): string[] {
  const themeCount: Record<string, number> = {};
  
  analyses.forEach(analysis => {
    analysis.themes_explored?.forEach((theme: string) => {
      themeCount[theme] = (themeCount[theme] || 0) + 1;
    });
  });
  
  return Object.entries(themeCount)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5)
    .map(([theme]) => theme);
}

function calculateDepthScore(content: string): number {
  // Algoritmo simple para calcular profundidad del análisis
  const wordCount = content.split(/\s+/).length;
  const paragraphCount = content.split('\n\n').length;
  
  let score = 1;
  
  if (wordCount > 100) score += 1;
  if (wordCount > 300) score += 1;
  if (wordCount > 500) score += 1;
  if (wordCount > 1000) score += 1;
  
  if (paragraphCount > 2) score += 1;
  if (paragraphCount > 4) score += 1;
  
  // Buscar indicadores de análisis profundo
  const deepIndicators = [
    'cinematografía', 'montaje', 'narrativa', 'simbolismo',
    'metáfora', 'contexto histórico', 'influencias',
    'técnica', 'estilo', 'tema', 'personaje'
  ];
  
  const foundIndicators = deepIndicators.filter(indicator => 
    content.toLowerCase().includes(indicator)
  );
  
  score += Math.min(foundIndicators.length, 3);
  
  return Math.min(score, 10);
}

async function updatePersonalDashboard(userId: string, activityType: string, relatedId?: string): Promise<void> {
  try {
    const dashboard = await PersonalDashboardModel.findOne({ owner_id: userId });
    
    if (dashboard) {
      // Actualizar estadísticas
      if (activityType === 'analysis_created') {
        dashboard.total_analyses_written += 1;
      }
      
      // Agregar actividad reciente
      dashboard.recent_activity.unshift({
        type: activityType as any,
        description: getActivityDescription(activityType),
        related_id: relatedId,
        timestamp: new Date()
      });
      
      // Mantener solo las últimas 50 actividades
      if (dashboard.recent_activity.length > 50) {
        dashboard.recent_activity = dashboard.recent_activity.slice(0, 50);
      }
      
      await dashboard.save();
    }
  } catch (error) {
    console.warn('Error actualizando dashboard:', error);
  }
}

function getActivityDescription(activityType: string): string {
  switch (activityType) {
    case 'analysis_created': return 'Creaste un nuevo análisis';
    case 'analysis_shared': return 'Compartiste un análisis con la comunidad';
    case 'comment_received': return 'Recibiste un comentario en tu análisis';
    case 'reaction_received': return 'Recibiste una reacción en tu análisis';
    default: return 'Nueva actividad';
  }
}

export default router;