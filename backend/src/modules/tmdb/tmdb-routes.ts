/**
 * 🎬 SYNAPSIS TMDB ROUTES - API REST Endpoints
 * Endpoints para búsqueda y gestión de películas TMDB
 */

import { Router, Request, Response } from 'express';
import tmdbSearchEngine, { SearchOptions } from './tmdb-search';
import tmdbService from './tmdb-service';
import intelligentTMDBSearch from './intelligent-search';
import { MongoClient, Db } from 'mongodb';

const router = Router();

// Conexión a MongoDB para cinemateca
let db: Db | null = null;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/synapsis?retryWrites=true&w=majority';

MongoClient.connect(MONGODB_URI).then(client => {
    db = client.db('synapsis');
    console.log('🎬 Conectado a MongoDB para cinemateca');
}).catch(err => {
    console.error('❌ Error conectando a MongoDB:', err);
});

/**
 * 🔍 POST /api/tmdb/search - Búsqueda principal de películas
 */
router.post('/search', async (req: Request, res: Response): Promise<void> => {
    try {
        const { query, options = {} } = req.body;
        
        if (!query || typeof query !== 'string' || query.trim().length < 2) {
            res.status(400).json({
                success: false,
                error: 'Query debe tener al menos 2 caracteres'
            });
            return;
        }

        console.log(`🔍 API: Búsqueda TMDB INTELIGENTE - "${query}"`);
        
        // ⭐ NUEVO: Usar búsqueda inteligente que detecta personas vs películas
        const results = await intelligentTMDBSearch.intelligentSearch(query.trim());
        
        res.json({
            success: true,
            data: results,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('🚨 Error en búsqueda TMDB:', error);
        res.status(500).json({
            success: false,
            error: 'Error interno en búsqueda de películas',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

/**
 * 🎭 GET /api/tmdb/search/director/:name - Búsqueda por director
 */
router.get('/search/director/:name', async (req: Request, res: Response): Promise<void> => {
    try {
        const { name } = req.params;
        
        if (!name || name.trim().length < 2) {
            res.status(400).json({
                success: false,
                error: 'Nombre de director debe tener al menos 2 caracteres'
            });
            return;
        }

        console.log(`🎭 API: Búsqueda por director - "${name}"`);
        
        const results = await tmdbSearchEngine.searchByDirector(name.trim());
        
        res.json({
            success: true,
            data: results,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('🚨 Error en búsqueda por director:', error);
        res.status(500).json({
            success: false,
            error: 'Error interno en búsqueda por director',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

/**
 * 🎬 GET /api/tmdb/movie/:id - Obtener película por ID
 */
router.get('/movie/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const movieId = parseInt(id);
        
        if (isNaN(movieId) || movieId <= 0) {
            res.status(400).json({
                success: false,
                error: 'ID de película inválido'
            });
            return;
        }

        console.log(`🎬 API: Obtener película por ID - ${movieId}`);
        
        const movie = await tmdbSearchEngine.getMovieById(movieId);
        
        if (!movie) {
            res.status(404).json({
                success: false,
                error: 'Película no encontrada'
            });
            return;
        }
        
        res.json({
            success: true,
            data: movie,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error(`🚨 Error obteniendo película ${req.params.id}:`, error);
        res.status(500).json({
            success: false,
            error: 'Error interno obteniendo película',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

/**
 * 🔥 GET /api/tmdb/trending - Películas trending
 */
router.get('/trending', async (req: Request, res: Response): Promise<void> => {
    try {
        const { timeWindow = 'week' } = req.query;
        
        if (timeWindow !== 'day' && timeWindow !== 'week') {
            res.status(400).json({
                success: false,
                error: 'timeWindow debe ser "day" o "week"'
            });
            return;
        }

        console.log(`🔥 API: Películas trending - ${timeWindow}`);
        
        const results = await tmdbSearchEngine.getTrending(timeWindow as 'day' | 'week');
        
        res.json({
            success: true,
            data: results,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('🚨 Error obteniendo trending:', error);
        res.status(500).json({
            success: false,
            error: 'Error interno obteniendo películas trending',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

/**
 * 💡 GET /api/tmdb/movie/:id/recommendations - Recomendaciones
 */
router.get('/movie/:id/recommendations', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const movieId = parseInt(id);
        
        if (isNaN(movieId) || movieId <= 0) {
            res.status(400).json({
                success: false,
                error: 'ID de película inválido'
            });
            return;
        }

        console.log(`💡 API: Recomendaciones para película - ${movieId}`);
        
        const recommendations = await tmdbSearchEngine.getRecommendations(movieId);
        
        res.json({
            success: true,
            data: {
                movieId,
                recommendations,
                count: recommendations.length
            },
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error(`🚨 Error obteniendo recomendaciones para ${req.params.id}:`, error);
        res.status(500).json({
            success: false,
            error: 'Error interno obteniendo recomendaciones',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

/**
 * 🔍 POST /api/tmdb/search/advanced - Búsqueda avanzada multi-criterio
 */
router.post('/search/advanced', async (req: Request, res: Response): Promise<void> => {
    try {
        const { title, director, actor, year, genre, minRating } = req.body;
        
        // Validar que al menos un criterio esté presente
        if (!title && !director && !actor && !year && !genre) {
            res.status(400).json({
                success: false,
                error: 'Se requiere al menos un criterio de búsqueda'
            });
            return;
        }

        console.log('🔍 API: Búsqueda avanzada multi-criterio');
        
        const criteria = {
            title: title?.trim(),
            director: director?.trim(),
            actor: actor?.trim(),
            year: year ? parseInt(year) : undefined,
            genre: genre?.trim(),
            minRating: minRating ? parseFloat(minRating) : undefined
        };

        const results = await tmdbSearchEngine.advancedSearch(criteria);
        
        res.json({
            success: true,
            data: results,
            criteria,
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('🚨 Error en búsqueda avanzada:', error);
        res.status(500).json({
            success: false,
            error: 'Error interno en búsqueda avanzada',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

/**
 * 🖼️ GET /api/tmdb/movie/:id/images - Obtener imágenes de película
 */
router.get('/movie/:id/images', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const movieId = parseInt(id);
        
        if (isNaN(movieId) || movieId <= 0) {
            res.status(400).json({
                success: false,
                error: 'ID de película inválido'
            });
            return;
        }

        console.log(`🖼️ API: Imágenes para película - ${movieId}`);
        
        const images = await tmdbService.getMovieImages(movieId);
        
        res.json({
            success: true,
            data: {
                movieId,
                backdrops: images.backdrops.map((img: any) => ({
                    url: tmdbService.buildBackdropUrl(img.file_path, 'large'),
                    width: img.width,
                    height: img.height,
                    aspect_ratio: img.aspect_ratio
                })),
                posters: images.posters.map((img: any) => ({
                    url: tmdbService.buildImageUrl(img.file_path, 'large'),
                    width: img.width,
                    height: img.height,
                    aspect_ratio: img.aspect_ratio
                }))
            },
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error(`🚨 Error obteniendo imágenes para película ${req.params.id}:`, error);
        res.status(500).json({
            success: false,
            error: 'Error interno obteniendo imágenes',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

/**
 * 🎥 GET /api/tmdb/movie/:id/videos - Obtener videos (trailers) de película
 */
router.get('/movie/:id/videos', async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const movieId = parseInt(id);
        
        if (isNaN(movieId) || movieId <= 0) {
            res.status(400).json({
                success: false,
                error: 'ID de película inválido'
            });
            return;
        }

        console.log(`🎥 API: Videos para película - ${movieId}`);
        
        const videos = await tmdbService.getMovieVideos(movieId);
        
        res.json({
            success: true,
            data: {
                movieId,
                videos: videos.results.map((video: any) => ({
                    key: video.key,
                    name: video.name,
                    site: video.site,
                    type: video.type,
                    size: video.size,
                    url: video.site === 'YouTube' ? `https://www.youtube.com/watch?v=${video.key}` : null,
                    embedUrl: video.site === 'YouTube' ? `https://www.youtube.com/embed/${video.key}` : null
                }))
            },
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error(`🚨 Error obteniendo videos para película ${req.params.id}:`, error);
        res.status(500).json({
            success: false,
            error: 'Error interno obteniendo videos',
            details: error instanceof Error ? error.message : 'Error desconocido'
        });
    }
});

/**
 * ℹ️ GET /api/tmdb/status - Estado del servicio TMDB
 */
router.get('/status', async (req: Request, res: Response): Promise<void> => {
    try {
        const hasApiKey = !!process.env.TMDB_API_KEY;
        
        let tmdbStatus = 'disconnected';
        let testResult = null;
        
        if (hasApiKey) {
            try {
                // Test básico con búsqueda simple
                const testSearch = await tmdbService.searchMovies('test');
                tmdbStatus = 'connected';
                testResult = {
                    searchWorks: true,
                    resultsCount: testSearch.results.length
                };
            } catch (error) {
                tmdbStatus = 'error';
                testResult = {
                    error: error instanceof Error ? error.message : 'Error desconocido'
                };
            }
        }
        
        res.json({
            success: true,
            data: {
                status: tmdbStatus,
                hasApiKey,
                testResult,
                endpoints: {
                    search: '/api/tmdb/search',
                    searchByDirector: '/api/tmdb/search/director/:name',
                    getMovie: '/api/tmdb/movie/:id',
                    trending: '/api/tmdb/trending',
                    recommendations: '/api/tmdb/movie/:id/recommendations',
                    advancedSearch: '/api/tmdb/search/advanced',
                    images: '/api/tmdb/movie/:id/images',
                    videos: '/api/tmdb/movie/:id/videos'
                }
            },
            timestamp: new Date().toISOString()
        });
        
    } catch (error) {
        console.error('🚨 Error verificando estado TMDB:', error);
        res.status(500).json({
            success: false,
            error: 'Error verificando estado del servicio TMDB'
        });
    }
});

/**
 * 📚 GET /api/cinemateca - Obtener películas de la cinemateca del usuario
 */
router.get('/cinemateca', async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.query.userId || 'demo_user';
        
        if (!db) {
            res.status(500).json({
                success: false,
                error: 'Base de datos no disponible'
            });
            return;
        }
        
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
 * ➕ POST /api/cinemateca/add - Agregar película a la cinemateca
 */
router.post('/cinemateca/add', async (req: Request, res: Response): Promise<void> => {
    try {
        const { movie, userId = 'demo_user' } = req.body;
        
        if (!movie || !movie.id) {
            res.status(400).json({
                success: false,
                error: 'Datos de película inválidos'
            });
            return;
        }

        if (!db) {
            res.status(500).json({
                success: false,
                error: 'Base de datos no disponible'
            });
            return;
        }

        // Verificar si ya existe
        const exists = await db.collection('cinemateca').findOne({
            userId,
            'movie.id': movie.id
        });

        if (exists) {
            res.json({
                success: false,
                error: 'La película ya está en tu cinemateca'
            });
            return;
        }

        // Agregar a cinemateca
        const result = await db.collection('cinemateca').insertOne({
            userId,
            movie,
            addedAt: new Date(),
            analysisCount: 0,
            lastViewed: null
        });

        res.json({
            success: true,
            data: {
                _id: result.insertedId,
                movie
            },
            message: 'Película agregada a tu cinemateca'
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
 * ❌ DELETE /api/cinemateca/:movieId - Eliminar película de la cinemateca
 */
router.delete('/cinemateca/:movieId', async (req: Request, res: Response): Promise<void> => {
    try {
        const movieId = parseInt(req.params.movieId);
        const userId = req.query.userId || 'demo_user';
        
        if (!db) {
            res.status(500).json({
                success: false,
                error: 'Base de datos no disponible'
            });
            return;
        }
        
        const result = await db.collection('cinemateca').deleteOne({
            userId,
            'movie.id': movieId
        });

        if (result.deletedCount === 0) {
            res.status(404).json({
                success: false,
                error: 'Película no encontrada en tu cinemateca'
            });
            return;
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

export default router;