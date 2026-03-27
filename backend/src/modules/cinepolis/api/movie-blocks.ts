import express from 'express';
import { Request, Response } from 'express';
import { MovieModel } from '../movie-models';
import { AnalysisModel } from '../database/analysis';
import { SerConscienteModel } from '../../../core/being-registry';

const router = express.Router();

// Tipos para el sistema de bloques
interface MovieBlock {
  id: string;
  title: string;
  icon: string;
  type: 'tmdb' | 'personal' | 'community' | 'hybrid';
  data: any;
  canEdit: boolean;
  isPrivate: boolean;
}

interface MovieBlocksResponse {
  movieId: string;
  movieTitle: string;
  blocks: MovieBlock[];
  userAnalysisCount: number;
  communityAnalysisCount: number;
}

// GET /api/movies/:movieId/blocks - Obtener todos los bloques de una película
router.get('/:movieId/blocks', async (req: Request, res: Response): Promise<void> => {
  try {
    const { movieId } = req.params;
    const userId = req.query.userId as string; // Para análisis personales
    
    // Obtener datos básicos de la película
    const movie = await MovieModel.findOne({ tmdb_id: parseInt(movieId) });
    if (!movie) {
      res.status(404).json({ error: 'Película no encontrada' });
      return;
    }

    // Obtener análisis de la comunidad para esta película  
    const communityAnalyses = await AnalysisModel.find({
      movieId: movieId,
      isPublic: true
    }).populate('authorId', 'avatarName expertise');

    // Obtener análisis personales si userId está presente
    const personalAnalyses = userId ? await AnalysisModel.find({
      movieId: movieId,
      authorId: userId
    }) : [];

    // Construir los bloques usando solo campos que existen
    const blocks: MovieBlock[] = [
      // Bloque 1: Ficha Artística (TMDB) - Solo campos existentes
      {
        id: 'artistic',
        title: 'Ficha Artística',
        icon: '🎭',
        type: 'tmdb',
        data: {
          director: movie.director || [],
          writer: movie.writer || [],
          producer: movie.producer || [],
          composer: movie.composer || 'No especificado',
          cinematographer: movie.cinematographer || 'No especificado',
          cast: [] // Lo llenaremos desde TMDB API más adelante
        },
        canEdit: false,
        isPrivate: false
      },

      // Bloque 2: Ficha Técnica - Solo campos existentes
      {
        id: 'technical', 
        title: 'Ficha Técnica',
        icon: '⚙️',
        type: 'tmdb',
        data: {
          duration: movie.duration || 0,
          year: movie.year,
          genre: movie.genre || [],
          country: movie.country || [],
          language: movie.language || [],
          tmdbId: movie.tmdb_id,
          imdbId: movie.imdb_id || 'No disponible'
        },
        canEdit: false,
        isPrivate: false
      },

      // Bloque 3: Crítica & Imágenes - Solo campos existentes
      {
        id: 'media',
        title: 'Crítica & Imágenes', 
        icon: '🎨',
        type: 'tmdb',
        data: {
          poster: movie.poster_url || '',
          backdrop: movie.backdrop_url || '',
          visualStyle: movie.visual_style || [],
          // Campos que se pueden expandir con TMDB API
          stills: [],
          trailers: [],
          professionalReviews: []
        },
        canEdit: false,
        isPrivate: false
      },

      // Bloque 4: Producción & Taquilla - Campos básicos
      {
        id: 'production',
        title: 'Producción & Taquilla',
        icon: '💰', 
        type: 'tmdb',
        data: {
          addedBy: movie.added_by,
          addedAt: movie.added_at,
          analysisCount: movie.analysis_count || 0,
          discussionCount: movie.discussion_count || 0,
          // Campos a expandir con TMDB API
          productionInfo: 'Información disponible via TMDB API'
        },
        canEdit: false,
        isPrivate: false
      },

      // Bloque 5: Contenido & Argumento - Campos existentes
      {
        id: 'content',
        title: 'Contenido & Argumento',
        icon: '📖',
        type: 'hybrid',
        data: {
          synopsis: movie.plot_summary || 'Sin sinopsis disponible',
          plot: movie.plot_summary || 'Sin argumento disponible',
          themes: movie.themes || ['Drama', 'Narrativa cinematográfica'],
          narrativeStructure: movie.narrative_structure || 'Estructura clásica de tres actos',
          visualStyle: movie.visual_style || []
        },
        canEdit: true,
        isPrivate: false
      },

      // Bloque 6: Mis Análisis (Personal)
      {
        id: 'personal',
        title: 'Mis Análisis',
        icon: '🧠',
        type: 'personal',
        data: {
          analyses: personalAnalyses,
          drafts: personalAnalyses.filter(a => !a.isPublic),
          published: personalAnalyses.filter(a => a.isPublic),
          notes: personalAnalyses.filter(a => a.type === 'note'),
          canCreate: !!userId
        },
        canEdit: true,
        isPrivate: true
      },

      // Bloque 7: Estudios Comunitarios
      {
        id: 'community',
        title: 'Estudios Comunitarios', 
        icon: '🌍',
        type: 'community',
        data: {
          analyses: communityAnalyses.map(analysis => ({
            id: analysis._id,
            title: analysis.title,
            content: analysis.content?.substring(0, 200) + '...',
            author: (analysis.authorId as any)?.avatarName || 'Ser Anónimo',
            authorExpertise: (analysis.authorId as any)?.expertise?.[0] || { domain: 'General', level: 'básico' },
            type: analysis.type,
            reactions: analysis.reactions || {},
            createdAt: analysis.createdAt,
            readingTime: Math.ceil((analysis.content?.length || 0) / 1000) // Palabras por minuto estimado
          })),
          totalCount: communityAnalyses.length,
          categories: [
            'Análisis Técnico',
            'Interpretación Temática', 
            'Contexto Histórico',
            'Análisis de Personajes',
            'Estilo Visual',
            'Comparaciones'
          ]
        },
        canEdit: false,
        isPrivate: false
      },

      // Bloque 8: Referencias & Enlaces - Campos básicos
      {
        id: 'references',
        title: 'Referencias & Enlaces',
        icon: '🔗',
        type: 'hybrid',
        data: {
          tmdbUrl: `https://www.themoviedb.org/movie/${movie.tmdb_id}`,
          imdbUrl: movie.imdb_id ? `https://www.imdb.com/title/${movie.imdb_id}` : null,
          // Campos que se pueden expandir
          externalLinks: [],
          academicStudies: [],
          documentaries: [],
          interviews: []
        },
        canEdit: true,
        isPrivate: false
      }
    ];

    const response: MovieBlocksResponse = {
      movieId: movieId,
      movieTitle: movie.title,
      blocks: blocks,
      userAnalysisCount: personalAnalyses.length,
      communityAnalysisCount: communityAnalyses.length
    };

    res.json({
      success: true,
      data: response
    });

  } catch (error) {
    console.error('Error obteniendo bloques de película:', error);
    res.status(500).json({
      success: false,
      error: 'Error interno del servidor'
    });
  }
});

// POST /api/movies/:movieId/analysis - Crear nuevo análisis para una película
router.post('/:movieId/analysis', async (req: Request, res: Response): Promise<void> => {
  try {
    const { movieId } = req.params;
    const { authorId, title, content, type, blockId, isPublic = false } = req.body;

    // Verificar que el autor existe
    const author = await SerConscienteModel.findOne({ avatarId: authorId });
    if (!author) {
      res.status(404).json({ error: 'Autor no encontrado' });
      return;
    }

    // Crear el análisis
    const newAnalysis = new AnalysisModel({
      movieId,
      authorId: author._id,
      title,
      content, 
      type: type || 'general',
      blockId: blockId || 'personal',
      isPublic,
      reactions: {},
      createdAt: new Date(),
      updatedAt: new Date()
    });

    await newAnalysis.save();

    res.json({
      success: true,
      analysis: newAnalysis,
      message: 'Análisis creado exitosamente'
    });

  } catch (error) {
    console.error('Error creando análisis:', error);
    res.status(500).json({
      success: false,
      error: 'Error creando análisis'
    });
  }
});

// PUT /api/movies/:movieId/analysis/:analysisId - Actualizar análisis
router.put('/:movieId/analysis/:analysisId', async (req: Request, res: Response): Promise<void> => {
  try {
    const { analysisId } = req.params;
    const { title, content, isPublic } = req.body;

    const updatedAnalysis = await AnalysisModel.findByIdAndUpdate(
      analysisId,
      {
        title,
        content,
        isPublic,
        updatedAt: new Date()
      },
      { new: true }
    );

    if (!updatedAnalysis) {
      res.status(404).json({ error: 'Análisis no encontrado' });
      return;
    }

    res.json({
      success: true,
      analysis: updatedAnalysis,
      message: 'Análisis actualizado exitosamente'
    });

  } catch (error) {
    console.error('Error actualizando análisis:', error);
    res.status(500).json({
      success: false,
      error: 'Error actualizando análisis'
    });
  }
});

// POST /api/movies/:movieId/analysis/:analysisId/reaction - Añadir reacción a análisis
router.post('/:movieId/analysis/:analysisId/reaction', async (req: Request, res: Response): Promise<void> => {
  try {
    const { analysisId } = req.params;
    const { userId, reactionType } = req.body; // 'like', 'love', 'insightful', 'disagree'

    const analysis = await AnalysisModel.findById(analysisId);
    if (!analysis) {
      res.status(404).json({ error: 'Análisis no encontrado' });
      return;
    }

    // Inicializar reactions si no existe
    if (!analysis.reactions) {
      analysis.reactions = {};
    }

    // Verificar que el tipo de reacción es válido
    const validReactions = ['like', 'love', 'insightful', 'disagree', 'mind_blown'];
    if (!validReactions.includes(reactionType)) {
      res.status(400).json({ error: 'Tipo de reacción inválido' });
      return;
    }

    // Actualizar o crear reacción usando notación de corchetes
    if (!(analysis.reactions as any)[reactionType]) {
      (analysis.reactions as any)[reactionType] = 0;
    }
    (analysis.reactions as any)[reactionType]++;

    await analysis.save();

    res.json({
      success: true,
      reactions: analysis.reactions,
      message: 'Reacción añadida exitosamente'
    });

  } catch (error) {
    console.error('Error añadiendo reacción:', error);
    res.status(500).json({
      success: false,
      error: 'Error añadiendo reacción'
    });
  }
});

// // export default router;

// import { Request, Response } from 'express';
// import { Movie } from '../models/Movie';
// import { Analysis } from '../models/Analysis';
// import { ObjectId } from 'mongoose';



// export const getMovieBlocks = async (req: Request, res: Response) => {
//   try {
//     const { movieId } = req.params;
//     const { userId = 'demo_user' } = req.query;

//     console.log(`🎬 Obteniendo bloques para película: ${movieId}, usuario: ${userId}`);

//     // Buscar la película
//     const movie = await Movie.findOne({ 
//       $or: [
//         { tmdb_id: movieId },
//         { _id: ObjectId.isValid(movieId) ? movieId : null }
//       ]
//     });

//     if (!movie) {
//       console.log(`❌ Película no encontrada: ${movieId}`);
//       return res.status(404).json({
//         success: false,
//         message: 'Película no encontrada'
//       });
//     }

//     // ARREGLO: Manejar demo_user correctamente
//     let userQuery = {};
//     if (userId && userId !== 'demo_user') {
//       if (ObjectId.isValid(userId as string)) {
//         userQuery = { authorId: new ObjectId(userId as string) };
//       } else {
//         // Si no es un ObjectId válido, buscar por username o crear usuario demo
//         userQuery = { authorUsername: userId };
//       }
//     }

//     // Buscar análisis existentes
//     let analyses = [];
//     if (Object.keys(userQuery).length > 0) {
//       analyses = await Analysis.find({
//         movieId: movie._id,
//         ...userQuery
//       }).sort({ blockNumber: 1 });
//     }

//     console.log(`✅ Encontrados ${analyses.length} análisis para la película`);

//     // Crear estructura de 8 bloques
//     const blocks = [
//       {
//         id: 1,
//         title: "Ficha Artística",
//         type: "artistic_sheet",
//         content: analyses.find(a => a.blockNumber === 1)?.content || "",
//         canEdit: true,
//         icon: "🎭"
//       },
//       {
//         id: 2,
//         title: "Ficha Técnica", 
//         type: "technical_sheet",
//         content: analyses.find(a => a.blockNumber === 2)?.content || "",
//         canEdit: true,
//         icon: "⚙️"
//       },
//       {
//         id: 3,
//         title: "Crítica & Imágenes",
//         type: "critique_images",
//         content: analyses.find(a => a.blockNumber === 3)?.content || "",
//         canEdit: true,
//         icon: "🖼️"
//       },
//       {
//         id: 4,
//         title: "Producción & Taquilla",
//         type: "production_box_office",
//         content: analyses.find(a => a.blockNumber === 4)?.content || "",
//         canEdit: true,
//         icon: "💰"
//       },
//       {
//         id: 5,
//         title: "Contenido & Argumento",
//         type: "content_argument", 
//         content: analyses.find(a => a.blockNumber === 5)?.content || "",
//         canEdit: true,
//         icon: "📝"
//       },
//       {
//         id: 6,
//         title: "Mis Análisis",
//         type: "personal_analysis",
//         content: analyses.find(a => a.blockNumber === 6)?.content || "",
//         canEdit: true,
//         icon: "🧠"
//       },
//       {
//         id: 7,
//         title: "Estudios Comunitarios",
//         type: "community_studies",
//         content: analyses.find(a => a.blockNumber === 7)?.content || "",
//         canEdit: true,
//         icon: "👥"
//       },
//       {
//         id: 8,
//         title: "Referencias & Enlaces",
//         type: "references_links",
//         content: analyses.find(a => a.blockNumber === 8)?.content || "",
//         canEdit: true,
//         icon: "🔗"
//       }
//     ];

//     res.json({
//       success: true,
//       movie: {
//         id: movie._id,
//         title: movie.title,
//         director: movie.director,
//         year: movie.year,
//         poster_url: movie.poster_url,
//         tmdb_id: movie.tmdb_id
//       },
//       blocks,
//       userId: userId || 'demo_user',
//       totalBlocks: 8
//     });

//   } catch (error) {
//     console.error('Error obteniendo bloques de película:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Error del servidor',
//       error: error.message
//     });
//   }
// };

// // También agregar endpoint para crear usuario demo si no existe
// export const createDemoUser = async (req: Request, res: Response) => {
//   try {
//     // Crear usuario demo temporal
//     const demoUser = {
//       _id: new ObjectId(),
//       username: 'demo_user',
//       displayName: 'Usuario Demo',
//       isDemo: true,
//       createdAt: new Date()
//     };

//     res.json({
//       success: true,
//       user: demoUser
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: 'Error creando usuario demo'
//     });
//   }
// };