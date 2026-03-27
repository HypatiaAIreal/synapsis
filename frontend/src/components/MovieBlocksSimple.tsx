import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Film, Star, Calendar, Users, Clock, Globe, 
  Brain, Palette, Code, BookOpen, Heart, BarChart, 
  MessageCircle, Award, ChevronLeft, Plus, Lock, 
  Unlock, ThumbsUp, MessageSquare, Sparkles 
} from 'lucide-react';
import AnalysisEditor from './AnalysisEditor';

// Tipos para los bloques
interface MovieBlock {
  id: string;
  title: string;
  icon: React.ReactNode;
  type: 'tmdb' | 'personal' | 'community' | 'hybrid';
  data: any;
  canEdit: boolean;
  isPrivate: boolean;
}

interface Analysis {
  id: string;
  title: string;
  content: string;
  authorId: string;
  authorName: string;
  blockType: string;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
  reactions: {
    like: number;
    insightful: number;
    love: number;
  };
  wordCount: number;
  readingTime: number;
}

interface MovieBlocksData {
  movieId: string;
  movieTitle: string;
  moviePoster?: string;
  movieYear?: number;
  movieDirector?: string[];
  blocks: MovieBlock[];
  userAnalysisCount: number;
  communityAnalysisCount: number;
}

interface MovieBlocksProps {
  movieId: string;
  onBack: () => void;
}

const MovieBlocks: React.FC<MovieBlocksProps> = ({ movieId, onBack }) => {
  const [blocksData, setBlocksData] = useState<MovieBlocksData | null>(null);
  const [activeBlock, setActiveBlock] = useState<string>('artistic');
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [editingAnalysis, setEditingAnalysis] = useState<Analysis | null>(null);
  const [analyses, setAnalyses] = useState<Record<string, Analysis[]>>({});

  // Definir los 8 bloques
  const blockDefinitions = [
    {
      id: 'artistic',
      title: 'Artístico',
      icon: <Palette className="w-5 h-5" />,
      type: 'hybrid' as const,
      description: 'Estética, composición, color y diseño visual'
    },
    {
      id: 'technical',
      title: 'Técnico',
      icon: <Code className="w-5 h-5" />,
      type: 'hybrid' as const,
      description: 'Cinematografía, montaje, sonido y efectos'
    },
    {
      id: 'narrative',
      title: 'Narrativo',
      icon: <BookOpen className="w-5 h-5" />,
      type: 'hybrid' as const,
      description: 'Estructura, personajes, diálogos y ritmo'
    },
    {
      id: 'contextual',
      title: 'Contextual',
      icon: <Globe className="w-5 h-5" />,
      type: 'hybrid' as const,
      description: 'Contexto histórico, social y cultural'
    },
    {
      id: 'personal',
      title: 'Mis Análisis',
      icon: <Brain className="w-5 h-5" />,
      type: 'personal' as const,
      description: 'Tus reflexiones y análisis privados',
      canEdit: true,
      isPrivate: true
    },
    {
      id: 'philosophical',
      title: 'Filosófico',
      icon: <Heart className="w-5 h-5" />,
      type: 'hybrid' as const,
      description: 'Temas existenciales, éticos y metafísicos'
    },
    {
      id: 'comparative',
      title: 'Comparativo',
      icon: <BarChart className="w-5 h-5" />,
      type: 'hybrid' as const,
      description: 'Comparaciones con otras obras'
    },
    {
      id: 'reception',
      title: 'Recepción',
      icon: <Award className="w-5 h-5" />,
      type: 'tmdb' as const,
      description: 'Crítica, audiencia e impacto cultural'
    }
  ];

  // Cargar datos de película y análisis
  useEffect(() => {
    if (!movieId) return;
    
    fetchMovieData();
    fetchAnalyses();
  }, [movieId]);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      
      // Obtener detalles de TMDB
      const movieResponse = await axios.get(`/api/tmdb/movie/${movieId}`);
      
      if (movieResponse.data.success) {
        const movie = movieResponse.data.data;
        
        // Construir estructura de bloques
        const blocks = blockDefinitions.map(def => ({
          ...def,
          data: getBlockData(def.id, movie),
          canEdit: def.canEdit || false,
          isPrivate: def.isPrivate || false
        }));

        setBlocksData({
          movieId: movieId.toString(),
          movieTitle: movie.title,
          moviePoster: movie.poster_path ? 
            `https://image.tmdb.org/t/p/w300${movie.poster_path}` : 
            undefined,
          movieYear: movie.release_date ? 
            new Date(movie.release_date).getFullYear() : 
            undefined,
          movieDirector: movie.credits?.crew
            ?.filter((c: any) => c.job === 'Director')
            ?.map((d: any) => d.name) || [],
          blocks,
          userAnalysisCount: 0,
          communityAnalysisCount: 0
        });
      }
    } catch (error) {
      console.error('Error cargando datos de película:', error);
      
      // Datos mock si falla
      setBlocksData({
        movieId: movieId.toString(),
        movieTitle: 'Película',
        blocks: blockDefinitions.map(def => ({
          ...def,
          data: {},
          canEdit: def.canEdit || false,
          isPrivate: def.isPrivate || false
        })),
        userAnalysisCount: 0,
        communityAnalysisCount: 0
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchAnalyses = async () => {
    try {
      // TEMPORALMENTE DESHABILITADO - Las rutas de análisis aún no existen en el backend
      console.log('🔧 Sistema de análisis en desarrollo');
      
      // Por ahora usar datos vacíos
      setAnalyses({});
      
      /* CUANDO SE IMPLEMENTEN LAS RUTAS:
      // Cargar análisis del usuario
      const userAnalyses = await axios.get(`http://localhost:3000/api/analysis?movieId=${movieId}&userId=demo_user`);
      
      // Cargar análisis de la comunidad
      const communityAnalyses = await axios.get(`http://localhost:3000/api/analysis?movieId=${movieId}&isPublic=true`);
      
      // Organizar por tipo de bloque
      const organizedAnalyses: Record<string, Analysis[]> = {};
      
      [...userAnalyses.data, ...communityAnalyses.data].forEach((analysis: Analysis) => {
        if (!organizedAnalyses[analysis.blockType]) {
          organizedAnalyses[analysis.blockType] = [];
        }
        organizedAnalyses[analysis.blockType].push(analysis);
      });
      
      setAnalyses(organizedAnalyses);
      */
      
    } catch (error) {
      console.error('Error cargando análisis:', error);
    }
  };

  const getBlockData = (blockId: string, movie: any) => {
    switch (blockId) {
      case 'artistic':
        return {
          cinematography: movie.credits?.crew?.find((c: any) => c.job === 'Director of Photography')?.name,
          productionDesign: movie.credits?.crew?.find((c: any) => c.job === 'Production Design')?.name,
          runtime: movie.runtime,
          aspectRatio: '2.39:1' // Mock, TMDB no proporciona esto directamente
        };
      
      case 'technical':
        return {
          budget: movie.budget,
          revenue: movie.revenue,
          productionCompanies: movie.production_companies?.map((c: any) => c.name),
          spokenLanguages: movie.spoken_languages?.map((l: any) => l.name)
        };
      
      case 'narrative':
        return {
          overview: movie.overview,
          tagline: movie.tagline,
          genres: movie.genres?.map((g: any) => g.name)
        };
      
      case 'contextual':
        return {
          releaseDate: movie.release_date,
          productionCountries: movie.production_countries?.map((c: any) => c.name),
          originalLanguage: movie.original_language,
          status: movie.status
        };
      
      case 'reception':
        return {
          voteAverage: movie.vote_average,
          voteCount: movie.vote_count,
          popularity: movie.popularity,
          imdbId: movie.imdb_id
        };
      
      default:
        return {};
    }
  };

  const handleSaveAnalysis = async (analysis: any) => {
    try {
      // TEMPORALMENTE: Mostrar mensaje mientras se implementan las rutas
      console.log('🔧 Guardando análisis (simulado):', analysis);
      alert('🚀 El sistema de análisis está en desarrollo.\n\nTu análisis se guardará cuando estén listas las rutas del backend.');
      
      // Cerrar editor
      setShowEditor(false);
      setEditingAnalysis(null);
      
      /* CUANDO SE IMPLEMENTEN LAS RUTAS:
      if (editingAnalysis) {
        // Actualizar análisis existente
        await axios.put(`http://localhost:3000/api/analysis/${editingAnalysis.id}`, analysis);
      } else {
        // Crear nuevo análisis
        await axios.post('http://localhost:3000/api/analysis', analysis);
      }
      
      // Recargar análisis
      await fetchAnalyses();
      
      // Cerrar editor
      setShowEditor(false);
      setEditingAnalysis(null);
      
      console.log('✅ Análisis guardado exitosamente');
      */
    } catch (error) {
      console.error('Error guardando análisis:', error);
    }
  };

  const handleReaction = async (analysisId: string, reactionType: string) => {
    try {
      // TEMPORALMENTE: Solo mostrar en consola
      console.log(`👍 Reacción ${reactionType} para análisis ${analysisId}`);
      
      /* CUANDO SE IMPLEMENTEN LAS RUTAS:
      await axios.post(`http://localhost:3000/api/analysis/${analysisId}/reaction`, {
        userId: 'demo_user',
        reactionType
      });
      
      // Recargar análisis para mostrar nueva reacción
      await fetchAnalyses();
      */
    } catch (error) {
      console.error('Error añadiendo reacción:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-purple-200">Cargando análisis cinematográfico...</p>
        </div>
      </div>
    );
  }

  if (!blocksData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <p className="text-purple-200">No se encontraron datos de la película</p>
      </div>
    );
  }

  const currentBlock = blocksData.blocks.find(block => block.id === activeBlock);
  const blockAnalyses = analyses[activeBlock] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header con info de película */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-start gap-6">
            <button 
              onClick={onBack} 
              className="mt-2 text-purple-400 hover:text-purple-300 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {blocksData.moviePoster && (
              <img 
                src={blocksData.moviePoster} 
                alt={blocksData.movieTitle}
                className="w-24 h-36 object-cover rounded-lg shadow-xl"
              />
            )}
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">{blocksData.movieTitle}</h1>
              <div className="flex items-center gap-4 text-sm text-slate-300">
                {blocksData.movieYear && (
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blocksData.movieYear}
                  </span>
                )}
                {blocksData.movieDirector && blocksData.movieDirector.length > 0 && (
                  <span className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {blocksData.movieDirector.join(', ')}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-4 mt-3 text-sm">
                <span className="text-purple-400">
                  {blockAnalyses.filter(a => a.authorId === 'demo_user').length} análisis personales
                </span>
                <span className="text-blue-400">
                  {blockAnalyses.filter(a => a.isPublic).length} análisis comunitarios
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Navegación de Bloques - Los 8 bloques */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4">8 Dimensiones de Análisis</h3>
            <nav className="space-y-2">
              {blocksData.blocks.map((block) => {
                const analysisCount = blockAnalyses.length;
                const definition = blockDefinitions.find(d => d.id === block.id);
                
                return (
                  <button
                    key={block.id}
                    onClick={() => setActiveBlock(block.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeBlock === block.id
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {block.icon}
                        <div>
                          <div className="font-medium">{block.title}</div>
                          {block.isPrivate && (
                            <div className="text-xs opacity-75 flex items-center gap-1">
                              <Lock className="w-3 h-3" />
                              Privado
                            </div>
                          )}
                        </div>
                      </div>
                      {analysisCount > 0 && (
                        <span className="text-xs bg-purple-500/20 px-2 py-1 rounded-full">
                          {analysisCount}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Contenido del Bloque Activo */}
          <div className="lg:col-span-3">
            {currentBlock && (
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                      {currentBlock.icon}
                      <span>{currentBlock.title}</span>
                    </h2>
                    <p className="text-sm text-slate-400 mt-1">
                      {blockDefinitions.find(d => d.id === currentBlock.id)?.description}
                    </p>
                  </div>
                  
                  {currentBlock.canEdit && (
                    <button
                      onClick={() => setShowEditor(true)}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      Crear Análisis
                    </button>
                  )}
                </div>

                {/* Editor de Análisis */}
                {showEditor && currentBlock.canEdit && (
                  <div className="mb-6">
                    <AnalysisEditor
                      blockType={activeBlock}
                      movieId={movieId}
                      movieTitle={blocksData.movieTitle}
                      onSave={handleSaveAnalysis}
                      onCancel={() => {
                        setShowEditor(false);
                        setEditingAnalysis(null);
                      }}
                      existingAnalysis={editingAnalysis}
                    />
                  </div>
                )}

                {/* Contenido del Bloque */}
                <div className="space-y-6">
                  {/* Datos TMDB para bloques informativos */}
                  {(currentBlock.type === 'tmdb' || currentBlock.type === 'hybrid') && 
                   Object.keys(currentBlock.data).length > 0 && (
                    <div className="bg-slate-700/30 p-4 rounded-lg mb-6">
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">Información TMDB</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.entries(currentBlock.data).map(([key, value]) => (
                          <div key={key} className="text-sm">
                            <span className="text-slate-400 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                            </span>
                            <span className="text-white ml-2">
                              {Array.isArray(value) ? value.join(', ') : String(value || 'N/A')}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Análisis */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Análisis {currentBlock.isPrivate ? 'Personales' : 'de la Comunidad'}
                    </h4>
                    
                    {blockAnalyses.length > 0 ? (
                      blockAnalyses
                        .filter(analysis => currentBlock.isPrivate ? 
                          analysis.authorId === 'demo_user' : 
                          analysis.isPublic
                        )
                        .map((analysis) => (
                          <div key={analysis.id} className="bg-slate-700/30 p-4 rounded-lg">
                            <div className="flex items-start justify-between mb-3">
                              <div>
                                <h5 className="font-semibold text-white text-lg">{analysis.title}</h5>
                                <div className="flex items-center gap-3 text-sm text-slate-400 mt-1">
                                  <span>{analysis.authorName}</span>
                                  <span>•</span>
                                  <span>{analysis.wordCount} palabras</span>
                                  <span>•</span>
                                  <span>{analysis.readingTime} min lectura</span>
                                  {analysis.isPublic && (
                                    <>
                                      <span>•</span>
                                      <span className="flex items-center gap-1 text-green-400">
                                        <Unlock className="w-3 h-3" />
                                        Público
                                      </span>
                                    </>
                                  )}
                                </div>
                              </div>
                              
                              {analysis.authorId === 'demo_user' && (
                                <button
                                  onClick={() => {
                                    setEditingAnalysis(analysis);
                                    setShowEditor(true);
                                  }}
                                  className="text-purple-400 hover:text-purple-300 text-sm"
                                >
                                  Editar
                                </button>
                              )}
                            </div>
                            
                            <div className="text-slate-300 whitespace-pre-wrap mb-4">
                              {analysis.content.length > 300 ? 
                                `${analysis.content.substring(0, 300)}...` : 
                                analysis.content
                              }
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <button
                                  onClick={() => handleReaction(analysis.id, 'like')}
                                  className="flex items-center gap-1 text-slate-400 hover:text-purple-400 transition-colors"
                                >
                                  <ThumbsUp className="w-4 h-4" />
                                  <span className="text-sm">{analysis.reactions.like || 0}</span>
                                </button>
                                <button
                                  onClick={() => handleReaction(analysis.id, 'insightful')}
                                  className="flex items-center gap-1 text-slate-400 hover:text-purple-400 transition-colors"
                                >
                                  <Brain className="w-4 h-4" />
                                  <span className="text-sm">{analysis.reactions.insightful || 0}</span>
                                </button>
                                <button
                                  onClick={() => handleReaction(analysis.id, 'love')}
                                  className="flex items-center gap-1 text-slate-400 hover:text-purple-400 transition-colors"
                                >
                                  <Heart className="w-4 h-4" />
                                  <span className="text-sm">{analysis.reactions.love || 0}</span>
                                </button>
                              </div>
                              
                              <div className="text-xs text-slate-500">
                                {new Date(analysis.createdAt).toLocaleDateString()}
                              </div>
                            </div>
                          </div>
                        ))
                    ) : (
                      <div className="text-center py-8 text-slate-400">
                        <p>Aún no hay análisis en este bloque.</p>
                        {currentBlock.canEdit && (
                          <p className="text-sm mt-2">¡Sé el primero en compartir tu perspectiva!</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBlocks;