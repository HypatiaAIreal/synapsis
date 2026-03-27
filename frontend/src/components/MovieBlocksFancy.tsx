import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Film, Star, Calendar, Users, Clock, Globe, 
  Brain, Palette, Code, BookOpen, Heart, BarChart, 
  MessageCircle, Award, ChevronLeft, Plus, Lock, 
  Unlock, ThumbsUp, MessageSquare, Sparkles, TrendingUp,
  FileText, Eye, DollarSign, Layers 
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
  color: string;
  emoji: string;
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

  // Definir los 8 bloques con diseño mejorado
  const blockDefinitions = [
    {
      id: 'artistic',
      title: 'Artístico',
      icon: <Palette className="w-5 h-5" />,
      emoji: '🎨',
      type: 'hybrid' as const,
      description: 'Estética, composición, color y diseño visual',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'technical',
      title: 'Técnico',
      icon: <Code className="w-5 h-5" />,
      emoji: '⚙️',
      type: 'hybrid' as const,
      description: 'Cinematografía, montaje, sonido y efectos',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'narrative',
      title: 'Narrativo',
      icon: <BookOpen className="w-5 h-5" />,
      emoji: '📖',
      type: 'hybrid' as const,
      description: 'Estructura, personajes, diálogos y ritmo',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 'contextual',
      title: 'Contextual',
      icon: <Globe className="w-5 h-5" />,
      emoji: '🌍',
      type: 'hybrid' as const,
      description: 'Contexto histórico, social y cultural',
      color: 'from-orange-600 to-amber-600'
    },
    {
      id: 'personal',
      title: 'Mis Análisis',
      icon: <Brain className="w-5 h-5" />,
      emoji: '🧠',
      type: 'personal' as const,
      description: 'Tus reflexiones y análisis privados',
      canEdit: true,
      isPrivate: true,
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'philosophical',
      title: 'Filosófico',
      icon: <Heart className="w-5 h-5" />,
      emoji: '💭',
      type: 'hybrid' as const,
      description: 'Temas existenciales, éticos y metafísicos',
      color: 'from-pink-600 to-rose-600'
    },
    {
      id: 'comparative',
      title: 'Comparativo',
      icon: <BarChart className="w-5 h-5" />,
      emoji: '📊',
      type: 'hybrid' as const,
      description: 'Comparaciones con otras obras',
      color: 'from-teal-600 to-cyan-600'
    },
    {
      id: 'reception',
      title: 'Recepción',
      icon: <Award className="w-5 h-5" />,
      emoji: '🏆',
      type: 'tmdb' as const,
      description: 'Crítica, audiencia e impacto cultural',
      color: 'from-yellow-600 to-orange-600'
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
      const movieResponse = await axios.get(`http://localhost:3000/api/tmdb/movie/${movieId}`);
      
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
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-400 border-t-transparent mx-auto mb-4"></div>
          <p className="text-xl text-purple-200 animate-pulse">Cargando análisis cinematográfico...</p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
      {/* Background effect */}
      <div className="fixed inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      {/* Header con info de película - MEJORADO */}
      <div className="bg-gradient-to-b from-black/60 to-transparent backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-[1600px] mx-auto px-6 py-6">
          <div className="flex items-start gap-6">
            <button 
              onClick={onBack} 
              className="mt-2 text-purple-300 hover:text-purple-200 transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            {blocksData.moviePoster && (
              <img 
                src={blocksData.moviePoster} 
                alt={blocksData.movieTitle}
                className="w-32 h-48 object-cover rounded-xl shadow-2xl ring-2 ring-purple-500/30 hover:ring-purple-500/50 transition-all duration-300"
              />
            )}
            
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">{blocksData.movieTitle}</h1>
              <div className="flex items-center gap-6 text-sm text-purple-200">
                {blocksData.movieYear && (
                  <span className="flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full">
                    <Calendar className="w-4 h-4" />
                    {blocksData.movieYear}
                  </span>
                )}
                {blocksData.movieDirector && blocksData.movieDirector.length > 0 && (
                  <span className="flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full">
                    <Users className="w-4 h-4" />
                    {blocksData.movieDirector.join(', ')}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-6 mt-4 text-sm">
                <span className="text-purple-300 flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  {blockAnalyses.filter(a => a.authorId === 'demo_user').length} análisis personales
                </span>
                <span className="text-blue-300 flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  {blockAnalyses.filter(a => a.isPublic).length} análisis comunitarios
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 py-8">
        <div className="flex gap-8">
          
          {/* Navegación de Bloques - DISEÑO ESPECTACULAR */}
          <div className="w-80 flex-shrink-0">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-purple-400" />
              8 Dimensiones de Análisis
            </h3>
            <nav className="space-y-3">
              {blocksData.blocks.map((block) => {
                const analysisCount = blockAnalyses.length;
                const definition = blockDefinitions.find(d => d.id === block.id);
                
                return (
                  <button
                    key={block.id}
                    onClick={() => setActiveBlock(block.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      activeBlock === block.id
                        ? 'bg-gradient-to-r ' + definition?.color + ' text-white shadow-xl scale-105 ring-2 ring-white/30'
                        : 'bg-white/5 backdrop-blur text-purple-200 hover:bg-white/10 hover:text-white border border-purple-500/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{definition?.emoji}</span>
                        <div>
                          <div className="font-semibold text-lg">{block.title}</div>
                          {block.isPrivate && (
                            <div className="text-xs opacity-80 flex items-center gap-1 mt-1">
                              <Lock className="w-3 h-3" />
                              Privado
                            </div>
                          )}
                        </div>
                      </div>
                      {analysisCount > 0 && (
                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full font-semibold">
                          {analysisCount}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Contenido del Bloque Activo - DISEÑO MEJORADO */}
          <div className="flex-1">
            {currentBlock && (
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden">
                {/* Header del bloque */}
                <div className={`bg-gradient-to-r ${blockDefinitions.find(d => d.id === currentBlock.id)?.color} p-6`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-white flex items-center gap-3 drop-shadow-lg">
                        <span className="text-4xl">{blockDefinitions.find(d => d.id === currentBlock.id)?.emoji}</span>
                        <span>{currentBlock.title}</span>
                      </h2>
                      <p className="text-white/80 mt-2">
                        {blockDefinitions.find(d => d.id === currentBlock.id)?.description}
                      </p>
                    </div>
                    
                    {currentBlock.canEdit && (
                      <button
                        onClick={() => setShowEditor(true)}
                        className="bg-white/20 backdrop-blur hover:bg-white/30 text-white px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 font-semibold transform hover:scale-105"
                      >
                        <Plus className="w-5 h-5" />
                        Crear Análisis
                      </button>
                    )}
                  </div>
                </div>

                {/* Contenido del bloque */}
                <div className="p-6">
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
                      <div className="bg-black/20 backdrop-blur p-6 rounded-xl border border-purple-500/10">
                        <h4 className="text-lg font-bold text-purple-300 mb-4 flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          Información TMDB
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {Object.entries(currentBlock.data).map(([key, value]) => (
                            <div key={key} className="bg-white/5 p-3 rounded-lg">
                              <span className="text-purple-400 text-xs uppercase tracking-wider">
                                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}:
                              </span>
                              <p className="text-white font-medium mt-1">
                                {Array.isArray(value) ? value.join(', ') : String(value || 'N/A')}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Análisis */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-bold text-white flex items-center gap-3">
                        <MessageSquare className="w-6 h-6 text-purple-400" />
                        Análisis {currentBlock.isPrivate ? 'Personales' : 'de la Comunidad'}
                      </h4>
                      
                      {blockAnalyses.length > 0 ? (
                        blockAnalyses
                          .filter(analysis => currentBlock.isPrivate ? 
                            analysis.authorId === 'demo_user' : 
                            analysis.isPublic
                          )
                          .map((analysis) => (
                            <div key={analysis.id} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                              <div className="flex items-start justify-between mb-4">
                                <div>
                                  <h5 className="font-bold text-white text-xl mb-2">{analysis.title}</h5>
                                  <div className="flex items-center gap-4 text-sm text-purple-300">
                                    <span className="flex items-center gap-1">
                                      <Users className="w-4 h-4" />
                                      {analysis.authorName}
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                      <FileText className="w-4 h-4" />
                                      {analysis.wordCount} palabras
                                    </span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1">
                                      <Clock className="w-4 h-4" />
                                      {analysis.readingTime} min
                                    </span>
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
                                    className="text-purple-400 hover:text-purple-300 text-sm font-medium"
                                  >
                                    Editar
                                  </button>
                                )}
                              </div>
                              
                              <div className="text-purple-100 whitespace-pre-wrap mb-4 leading-relaxed">
                                {analysis.content.length > 300 ? 
                                  `${analysis.content.substring(0, 300)}...` : 
                                  analysis.content
                                }
                              </div>
                              
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <button
                                    onClick={() => handleReaction(analysis.id, 'like')}
                                    className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1 rounded-lg"
                                  >
                                    <ThumbsUp className="w-4 h-4" />
                                    <span className="text-sm font-medium">{analysis.reactions.like || 0}</span>
                                  </button>
                                  <button
                                    onClick={() => handleReaction(analysis.id, 'insightful')}
                                    className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1 rounded-lg"
                                  >
                                    <Brain className="w-4 h-4" />
                                    <span className="text-sm font-medium">{analysis.reactions.insightful || 0}</span>
                                  </button>
                                  <button
                                    onClick={() => handleReaction(analysis.id, 'love')}
                                    className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors bg-purple-500/10 hover:bg-purple-500/20 px-3 py-1 rounded-lg"
                                  >
                                    <Heart className="w-4 h-4" />
                                    <span className="text-sm font-medium">{analysis.reactions.love || 0}</span>
                                  </button>
                                </div>
                                
                                <div className="text-xs text-purple-400">
                                  {new Date(analysis.createdAt).toLocaleDateString('es-ES', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                  })}
                                </div>
                              </div>
                            </div>
                          ))
                      ) : (
                        <div className="text-center py-12 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-xl border border-purple-500/10">
                          <MessageSquare className="w-16 h-16 text-purple-400 mx-auto mb-4 opacity-50" />
                          <p className="text-purple-200 text-lg">Aún no hay análisis en este bloque.</p>
                          {currentBlock.canEdit && (
                            <p className="text-purple-300 text-sm mt-2">¡Sé el primero en compartir tu perspectiva!</p>
                          )}
                        </div>
                      )}
                    </div>
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