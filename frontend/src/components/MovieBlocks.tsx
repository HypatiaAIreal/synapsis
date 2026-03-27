// MovieBlocks.tsx - VERSIÓN MEJORADA con mapeo inteligente de datos
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  ChevronLeft, Lock, Globe, User, Info, Edit3, MessageSquare,
  Calendar, Clock, DollarSign, Film, Star, Users, MapPin,
  Image, ExternalLink, Eye, Sparkles, Brain, Camera, Music, Palette,
  Heart, TrendingUp, Award, Zap, X
} from 'lucide-react';
import AnalysisEditor from './AnalysisEditor';
import { NarrativeAnalysisPanel } from './NarrativeAnalysis/NarrativeAnalysisPanel';
import AIModelSelector from './NarrativeAnalysis/AIModelSelector';
import { NARRATIVE_THEORIES } from '../data/narrativeTheories';
import styles from './MovieBlocks.module.css';
import { CollectionManager } from './Collections/CollectionManager';
import MovieAnalyses from './MovieAnalyses';
import { saveAnalysisWithMetadata } from '../utils/analysisHelpers';

interface MovieData {
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string;
  runtime?: number;
  budget?: number;
  revenue?: number;
  vote_average?: number;
  vote_count?: number;
  overview?: string;
  tagline?: string;
  homepage?: string;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  status?: string;
  
  // Datos procesados
  credits?: {
    cast?: any[];
    crew?: any[];
  };
  genres?: any[];
  production_companies?: any[];
  production_countries?: any[];
  spoken_languages?: any[];
  images?: {
    posters?: any[];
    backdrops?: any[];
  };
  videos?: {
    results?: any[];
  };
  keywords?: {
    keywords?: any[];
  };
  reviews?: {
    results?: any[];
  };
  external_ids?: {
    imdb_id?: string;
    facebook_id?: string;
    twitter_id?: string;
    instagram_id?: string;
  };
}

interface MovieBlocksProps {
  movieId: string;
  onBack: () => void;
}

// 🎯 FUNCIÓN DE MAPEO INTELIGENTE
const mapMovieData = (rawData: any): MovieData => {
  // Si los datos ya vienen en formato correcto, los devolvemos tal cual
  if (rawData.original_title && rawData.release_date && rawData.runtime) {
    return rawData;
  }
  
  // Mapeo inteligente para datos con estructura diferente
  return {
    // IDs
    id: rawData.id || rawData.tmdbId,
    
    // Títulos
    title: rawData.title,
    original_title: rawData.originalTitle || rawData.original_title,
    
    // Descripción
    overview: rawData.plot_summary || rawData.overview,
    tagline: rawData.tagline,
    
    // Fechas y tiempos
    release_date: rawData.release_date || (rawData.year ? `${rawData.year}-01-01` : null),
    runtime: rawData.duration || rawData.runtime,
    
    // Ratings
    vote_average: rawData.rating || rawData.vote_average,
    vote_count: rawData.votes || rawData.vote_count,
    
    // Financieros
    budget: rawData.budget,
    revenue: rawData.revenue,
    
    // Estados
    status: rawData.status,
    
    // Imágenes
    poster_path: rawData.poster_path || (rawData.poster_url ? rawData.poster_url.split('/').pop() : null),
    backdrop_path: rawData.backdrop_path || (rawData.backdrop_url ? rawData.backdrop_url.split('/').pop() : null),
    
    // Información adicional
    original_language: rawData.original_language,
    homepage: rawData.homepage,
    
    // Géneros - con manejo inteligente
    genres: rawData.genres || (rawData.genre ? rawData.genre.map((g: string | any, idx: number) => 
      typeof g === 'string' ? { id: idx, name: g } : g
    ) : []),
    
    // Créditos - con estructura correcta
    credits: rawData.credits || {
      cast: rawData.cast || [],
      crew: rawData.crew || []
    },
    
    // Compañías y países
    production_companies: rawData.production_companies || [],
    production_countries: rawData.production_countries || [],
    spoken_languages: rawData.spoken_languages || [],
    
    // Multimedia y extras
    images: rawData.images || {},
    videos: rawData.videos || {},
    keywords: rawData.keywords || {},
    reviews: rawData.reviews || {},
    external_ids: rawData.external_ids || {}
  };
};

const MovieBlocks: React.FC<MovieBlocksProps> = ({ movieId, onBack }) => {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [activeBlock, setActiveBlock] = useState<string>('artistic');
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedAnalyses, setSavedAnalyses] = useState<any[]>([]);
  const [activeAnalysisTab, setActiveAnalysisTab] = useState<'personal' | 'narrative'>('personal');
  const [showAISelector, setShowAISelector] = useState(false);
  const [selectedAIModel, setSelectedAIModel] = useState<any>(null);
  const [showCollections, setShowCollections] = useState(false);

  // Mejorar nombres y descripciones de bloques
  const blockDefinitions = [
    { 
      id: 'artistic', 
      title: 'Ficha Artística', 
      icon: '🎭', 
      description: 'Director, reparto y equipo creativo',
      color: '#e11d48' // rose-600
    },
    { 
      id: 'technical', 
      title: 'Ficha Técnica', 
      icon: '⚙️', 
      description: 'Datos técnicos, duración y formato',
      color: '#2563eb' // blue-600
    },
    { 
      id: 'visual', 
      title: 'Crítica & Imágenes', 
      icon: '🎨', 
      description: 'Galería visual y críticas',
      color: '#7c3aed' // violet-600
    },
    { 
      id: 'production', 
      title: 'Producción & Taquilla', 
      icon: '💰', 
      description: 'Presupuesto, recaudación y datos de producción',
      color: '#16a34a' // green-600
    },
    { 
      id: 'content', 
      title: 'Contenido & Argumento', 
      icon: '📖', 
      description: 'Sinopsis, temas y estructura narrativa',
      color: '#ea580c' // orange-600
    },
    { 
      id: 'personal', 
      title: 'Mis Análisis', 
      icon: '🧠', 
      isPrivate: true, 
      canEdit: true, 
      description: 'Tus reflexiones y análisis privados',
      color: '#9333ea' // purple-600
    },
    { 
      id: 'community', 
      title: 'Estudios Comunitarios', 
      icon: '🌍', 
      description: 'Análisis compartidos por la comunidad',
      color: '#0891b2' // cyan-600
    },
    { 
      id: 'references', 
      title: 'Referencias & Enlaces', 
      icon: '🔗', 
      description: 'Enlaces externos y recursos adicionales',
      color: '#dc2626' // red-600
    },   
    {
      id: 'narrative',
      title: 'Análisis Narrativo IA',
      icon: '🤖',
      description: 'Análisis con metodologías cinematográficas',
      color: '#ec4899' // pink-600
    }
  ];

  useEffect(() => {
    fetchMovieData();
    loadSavedAnalyses();
  }, [movieId]);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('📊 Cargando película ID:', movieId);
      
      const url = `http://localhost:3000/api/tmdb/movie/${movieId}?append_to_response=credits,images,videos,keywords,reviews,external_ids`;
      const response = await axios.get(url);
      
      console.log('📊 Respuesta recibida:', response.data);
      
      if (response.data.success && response.data.data) {
        // 🎯 APLICAR MAPEO INTELIGENTE
        const mappedData = mapMovieData(response.data.data);
        setMovieData(mappedData);
        console.log('✅ Datos mapeados y establecidos:', mappedData);
      } else {
        setError('No se pudieron cargar los datos de la película');
      }
    } catch (error) {
      console.error('❌ Error cargando película:', error);
      setError('Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
  };

  const loadSavedAnalyses = async () => {
    try {
      // Aquí cargarías los análisis guardados desde el backend
      // Por ahora simulamos con localStorage
      const saved = localStorage.getItem(`analyses_${movieId}`);
      if (saved) {
        const analyses = JSON.parse(saved);
        // Asegurar que cada análisis tenga la metadata de película
        const enrichedAnalyses = analyses.map((analysis: any) => ({
          ...analysis,
          movieId: movieId,
          movieTitle: analysis.movieTitle || movieData?.title || 'Película',
          moviePoster: analysis.moviePoster || (movieData?.poster_path ? 
            (movieData.poster_path.startsWith('/') 
              ? `https://image.tmdb.org/t/p/w300${movieData.poster_path}`
              : `https://image.tmdb.org/t/p/w300/${movieData.poster_path}`)
            : undefined)
        }));
        setSavedAnalyses(enrichedAnalyses);
      }
    } catch (error) {
      console.error('Error cargando análisis:', error);
    }
  };

  const handleSaveAnalysis = (analysis: any) => {
    try {
      // Usar la función helper para guardar con metadata completa
      const enrichedAnalysis = saveAnalysisWithMetadata(
        movieId,
        movieData?.title || 'Película',
        movieData?.poster_path ? 
          (movieData.poster_path.startsWith('/') 
            ? `https://image.tmdb.org/t/p/w300${movieData.poster_path}`
            : `https://image.tmdb.org/t/p/w300/${movieData.poster_path}`)
          : undefined,
        analysis
      );
      
      // Actualizar estado local
      const updatedAnalyses = [...savedAnalyses, enrichedAnalysis];
      setSavedAnalyses(updatedAnalyses);
      
      setShowEditor(false);
      
      // Mostrar confirmación (opcional)
      console.log('✅ Análisis guardado exitosamente');
    } catch (error) {
      console.error('Error al guardar análisis:', error);
      alert('Error al guardar el análisis. Por favor, intenta de nuevo.');
    }
  };

  const handleSelectAIModel = (modelId: string, modelInfo: any) => {
    setSelectedAIModel(modelInfo);
    setShowAISelector(false);
    console.log('Modelo seleccionado:', modelInfo);
  };

  const renderBlockHeader = () => {
    if (!movieData) return null;
    
    return (
      <div className={styles.movieHeader}>
        <h1 className={styles.movieMainTitle}>{movieData.title || 'Sin título'}</h1>
        <div className={styles.movieMetadata}>
          <span>🎬 {movieData.release_date ? new Date(movieData.release_date).getFullYear() : 'N/A'}</span>
          <span>📊 TMDB ID: {movieData.id || movieId}</span>
          <span className={styles.rating}>
            ⭐ {movieData.vote_average ? `${movieData.vote_average.toFixed(1)}/10` : 'N/A'}
            {movieData.vote_count && (
              <span className={styles.voteCount}> ({movieData.vote_count.toLocaleString()} votos)</span>
            )}
          </span>
        </div>
      </div>
    );
  };

  // Funciones helper mejoradas
  const getCrewByDepartment = (department: string) => {
    return movieData?.credits?.crew?.filter(person => person.department === department) || [];
  };

  const getCrewByJob = (job: string) => {
    return movieData?.credits?.crew?.filter(person => person.job === job) || [];
  };

  // 🎨 FUNCIÓN PARA ICONOS DE GÉNERO
  const getGenreIcon = (genreName: string): string => {
    const genreIcons: { [key: string]: string } = {
      'Acción': '⚔️',
      'Action': '⚔️',
      'Aventura': '🗺️',
      'Adventure': '🗺️',
      'Animación': '🎨',
      'Animation': '🎨',
      'Comedia': '😄',
      'Comedy': '😄',
      'Crimen': '🔍',
      'Crime': '🔍',
      'Documental': '📹',
      'Documentary': '📹',
      'Drama': '🎭',
      'Familia': '👨‍👩‍👧‍👦',
      'Family': '👨‍👩‍👧‍👦',
      'Fantasía': '🦄',
      'Fantasy': '🦄',
      'Historia': '📜',
      'History': '📜',
      'Terror': '👻',
      'Horror': '👻',
      'Música': '🎵',
      'Music': '🎵',
      'Misterio': '❓',
      'Mystery': '❓',
      'Romance': '💕',
      'Ciencia ficción': '🚀',
      'Science Fiction': '🚀',
      'TV Movie': '📺',
      'Suspense': '😰',
      'Thriller': '😰',
      'Guerra': '⚔️',
      'War': '⚔️',
      'Western': '🤠'
    };
    return genreIcons[genreName] || '🎬';
  };



  const renderBlockContent = () => {
    if (error) {
      return (
        <div className={styles.errorMessage}>
          <p>❌ {error}</p>
          <button onClick={fetchMovieData} className={styles.retryButton}>
            <TrendingUp size={20} />
            Reintentar
          </button>
        </div>
      );
    }

    if (!movieData) {
      return (
        <div className={styles.noDataMessage}>
          <p>No se pudieron cargar los datos de la película</p>
        </div>
      );
    }

    switch (activeBlock) {
      case 'narrative':
        return (
          <NarrativeAnalysisPanel
            movieId={movieId}
            movieTitle={movieData.title}
            movieData={{
              ...movieData,
              director: movieData.credits?.crew?.find(c => c.job === 'Director')?.name || 'Desconocido',
              runtime: movieData.runtime || 0,
              overview: movieData.overview || '',
              genres: movieData.genres || []
            }}
            onSaveAnalysis={(analysis) => {
              console.log('Análisis guardado:', analysis);
              handleSaveAnalysis(analysis);
            }}
            userId="demo_user"
          />
        );

      case 'artistic':
        return (
          <>
            {/* Información básica mejorada */}
            <div className={styles.basicInfo}>
              <div className={styles.infoRow}>
                <strong>Título Original</strong>
                <span>{movieData.original_title || movieData.title || 'N/A'}</span>
              </div>
              
              {/* Director(es) con mejor estilo */}
              <div className={styles.infoRow}>
                <strong>
                  <Camera size={16} className={styles.inlineIcon} />
                  Director(es)
                </strong>
                <span>
                  {getCrewByJob('Director').map(d => d.name).join(', ') || 'N/A'}
                </span>
              </div>

              <div className={styles.infoRow}>
                <strong>
                  <Calendar size={16} className={styles.inlineIcon} />
                  Año de Lanzamiento
                </strong>
                <span>{movieData.release_date ? new Date(movieData.release_date).getFullYear() : 'N/A'}</span>
              </div>

              <div className={styles.infoRow}>
                <strong>
                  <Award size={16} className={styles.inlineIcon} />
                  Géneros
                </strong>
                <div className={styles.genreList}>
                  {movieData.genres && movieData.genres.length > 0 ? (
                    movieData.genres.map((genre, idx) => (
                      <span key={idx} className={styles.genreTag}>
                        {genre.name}
                      </span>
                    ))
                  ) : (
                    <span>N/A</span>
                  )}
                </div>
              </div>

              <div className={styles.infoRow}>
                <strong>
                  <Star size={16} className={styles.inlineIcon} />
                  Calificación
                </strong>
                <span className={styles.rating}>
                  ⭐ {movieData.vote_average ? `${movieData.vote_average.toFixed(1)}/10` : 'N/A'}
                  {movieData.vote_count && (
                    <span className={styles.voteCount}> ({movieData.vote_count.toLocaleString()} votos)</span>
                  )}
                </span>
              </div>
            </div>

            {/* Sinopsis con mejor diseño */}
            {movieData.overview && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>
                  <Sparkles size={20} />
                  Sinopsis
                </h3>
                <p className={styles.synopsis}>{movieData.overview}</p>
                {movieData.tagline && (
                  <blockquote className={styles.tagline}>"{movieData.tagline}"</blockquote>
                )}
              </div>
            )}

            {/* Reparto Principal con fotos si están disponibles */}
            {movieData.credits?.cast && movieData.credits.cast.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>
                  <Users size={20} />
                  Reparto Principal
                </h3>
                <div className={styles.castGrid}>
                  {movieData.credits.cast.slice(0, 10).map((actor, idx) => (
                    <div key={idx} className={styles.castCard}>
                      <div className={styles.castInfo}>
                        <strong>{actor.name}</strong>
                        <span className={styles.characterName}>como {actor.character}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.tmdbNotice}>
              🎭 <strong>¡Ficha artística completa con datos TMDB!</strong>
              <br />
              <span>Información actualizada desde The Movie Database</span>
            </div>
          </>
        );

      case 'technical':
        return (
          <>
            <div className={styles.technicalSection}>
              <div className={styles.technicalGrid}>
                {/* Grid de información técnica básica */}
                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}>
                    <Calendar size={24} />
                  </div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>Fecha de estreno</span>
                    <p className={styles.technicalValue}>
                      {movieData.release_date ? new Date(movieData.release_date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'N/A'}
                    </p>
                  </div>
                </div>
                
                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}>
                    <Clock size={24} />
                  </div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>Duración</span>
                    <p className={styles.technicalValue}>
                      {movieData.runtime ? `${movieData.runtime} minutos` : 'N/A'}
                    </p>
                  </div>
                </div>

                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}>
                    <Globe size={24} />
                  </div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>País de origen</span>
                    <p className={styles.technicalValue}>
                      {movieData.production_countries?.map(c => c.name).join(', ') || 'N/A'}
                    </p>
                  </div>
                </div>

                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}>
                    <MessageSquare size={24} />
                  </div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>Idioma original</span>
                    <p className={styles.technicalValue}>
                      {movieData.original_language ? getLanguageName(movieData.original_language) : 'N/A'}
                    </p>
                  </div>
                </div>

                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}>
                    <Info size={24} />
                  </div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>Estado</span>
                    <p className={styles.technicalValue}>
                      {getStatusInSpanish(movieData.status)}
                    </p>
                  </div>
                </div>

                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}>
                    <Film size={24} />
                  </div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>Formato</span>
                    <p className={styles.technicalValue}>
                      {movieData.video ? 'Video' : 'Cinematográfico'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Equipo técnico completo - SECCIÓN COMPLETA */}
              <div className={styles.crewSection}>
                <h3 className={styles.crewTitle}>
                  <Users size={24} />
                  Equipo Técnico Completo
                </h3>

                <div className={styles.crewDepartments}>
                  {/* Dirección */}
                  {getCrewByJob('Director').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Camera size={18} /> Dirección
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Director').map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Guión */}
                  {getCrewByJob('Screenplay').concat(getCrewByJob('Writer')).length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Edit3 size={18} /> Guión
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Screenplay').concat(getCrewByJob('Writer')).map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Producción */}
                  {getCrewByJob('Producer').concat(getCrewByJob('Executive Producer')).length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Film size={18} /> Producción
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Producer').concat(getCrewByJob('Executive Producer')).map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name} {person.job === 'Executive Producer' && <span className={styles.jobTag}>(Ejecutivo)</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Fotografía */}
                  {getCrewByJob('Director of Photography').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Camera size={18} /> Dirección de Fotografía
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Director of Photography').map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Música */}
                  {getCrewByJob('Original Music Composer').concat(getCrewByJob('Music')).length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Music size={18} /> Música Original
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Original Music Composer').concat(getCrewByJob('Music')).map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Montaje */}
                  {getCrewByJob('Editor').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Film size={18} /> Montaje / Edición
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Editor').map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Diseño de Producción */}
                  {getCrewByJob('Production Design').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Palette size={18} /> Diseño de Producción
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Production Design').map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Dirección de Arte */}
                  {getCrewByJob('Art Direction').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Palette size={18} /> Dirección de Arte
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Art Direction').map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Vestuario */}
                  {getCrewByJob('Costume Design').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Palette size={18} /> Diseño de Vestuario
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Costume Design').map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Efectos Visuales */}
                  {(getCrewByJob('Visual Effects').concat(getCrewByJob('Visual Effects Supervisor')).length > 0) && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Zap size={18} /> Efectos Visuales
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Visual Effects').concat(getCrewByJob('Visual Effects Supervisor')).map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name} {person.job === 'Visual Effects Supervisor' && <span className={styles.jobTag}>(Supervisor)</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Sonido */}
                  {(getCrewByJob('Sound').concat(getCrewByJob('Sound Designer')).concat(getCrewByJob('Sound Mixer')).length > 0) && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Music size={18} /> Diseño de Sonido
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Sound').concat(getCrewByJob('Sound Designer')).concat(getCrewByJob('Sound Mixer')).map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Maquillaje */}
                  {(getCrewByJob('Makeup Artist').concat(getCrewByJob('Makeup Department Head')).length > 0) && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Palette size={18} /> Maquillaje
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Makeup Artist').concat(getCrewByJob('Makeup Department Head')).map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Casting */}
                  {getCrewByJob('Casting').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Users size={18} /> Dirección de Casting
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Casting').map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Coordinación de Acrobacias */}
                  {getCrewByJob('Stunt Coordinator').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}>
                        <Zap size={18} /> Coordinación de Acrobacias
                      </h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Stunt Coordinator').map((person, idx) => (
                          <span key={idx} className={styles.crewMember}>
                            {person.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Información técnica adicional */}
              <div className={styles.additionalTechnicalInfo}>
                <h3 className={styles.technicalSubtitle}>
                  <Info size={20} />
                  Información Técnica Adicional
                </h3>
                
                {/* Idiomas hablados */}
                {movieData.spoken_languages && movieData.spoken_languages.length > 0 && (
                  <div className={styles.technicalDetail}>
                    <strong>Idiomas hablados:</strong>
                    <span>{movieData.spoken_languages.map(lang => lang.name || lang.english_name).join(', ')}</span>
                  </div>
                )}
                
                {/* Título original si es diferente */}
                {movieData.original_title && movieData.original_title !== movieData.title && (
                  <div className={styles.technicalDetail}>
                    <strong>Título original:</strong>
                    <span>{movieData.original_title}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        );

      case 'visual':
        return (
          <>
            <div className={styles.visualSection}>
              {/* Galería de Posters */}
              {movieData.images?.posters && movieData.images.posters.length > 0 && (
                <div className={styles.gallerySection}>
                  <h3 className={styles.galleryTitle}>
                    <Image size={24} />
                    Galería de Posters
                    <span className={styles.galleryCount}>{movieData.images.posters.length} imágenes</span>
                  </h3>
                  <div className={styles.posterGallery}>
                    {movieData.images.posters.slice(0, 8).map((image, idx) => (
                      <div key={idx} className={styles.posterContainer}>
                        <img 
                          src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
                          alt={`Poster ${idx + 1}`}
                          className={styles.galleryPoster}
                          loading="lazy"
                        />
                        <div className={styles.posterOverlay}>
                          <Eye size={24} />
                          <span>Ver en HD</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Capturas de la película */}
              {movieData.images?.backdrops && movieData.images.backdrops.length > 0 && (
                <div className={styles.gallerySection}>
                  <h3 className={styles.galleryTitle}>
                    <Camera size={24} />
                    Capturas de la Película
                    <span className={styles.galleryCount}>{movieData.images.backdrops.length} imágenes</span>
                  </h3>
                  <div className={styles.screenshotGallery}>
                    {movieData.images.backdrops.slice(0, 9).map((image, idx) => (
                      <div key={idx} className={styles.screenshotContainer}>
                        <img 
                          src={`https://image.tmdb.org/t/p/w780${image.file_path}`}
                          alt={`Captura ${idx + 1}`}
                          className={styles.screenshot}
                          loading="lazy"
                        />
                        <div className={styles.screenshotOverlay}>
                          <div className={styles.imageStats}>
                            <span><Eye size={16} /> HD</span>
                            {image.vote_average > 0 && (
                              <span><Star size={16} /> {image.vote_average.toFixed(1)}</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Sección de Críticas Mejorada */}
              <div className={styles.reviewsSection}>
                <h3 className={styles.reviewsTitle}>
                  <MessageSquare size={24} />
                  Críticas y Reseñas
                </h3>

                {movieData.reviews?.results && movieData.reviews.results.length > 0 ? (
                  <div className={styles.reviewsGrid}>
                    {movieData.reviews.results.slice(0, 4).map((review, idx) => (
                      <article key={idx} className={styles.reviewCard}>
                        <div className={styles.reviewHeader}>
                          <div className={styles.reviewAuthor}>
                            <div className={styles.authorAvatar}>
                              {review.author_details?.avatar_path ? (
                                <img 
                                  src={`https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`}
                                  alt={review.author}
                                />
                              ) : (
                                <User size={24} />
                              )}
                            </div>
                            <div className={styles.authorInfo}>
                              <h4>{review.author}</h4>
                              <time>{new Date(review.created_at).toLocaleDateString('es-ES', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}</time>
                            </div>
                          </div>
                          {review.author_details?.rating && (
                            <div className={styles.reviewRating}>
                              <Star size={18} />
                              <span>{review.author_details.rating}/10</span>
                            </div>
                          )}
                        </div>
                        
                        <div className={styles.reviewContent}>
                          <p>
                            {review.content.length > 400 
                              ? review.content.substring(0, 400) + '...' 
                              : review.content}
                          </p>
                          {review.content.length > 400 && (
                            <div className={styles.analysisActions}>
                              <button 
                                className={styles.viewButton}
                                onClick={() => alert('Ver análisis completo - Por implementar')}
                              >
                                <Eye size={16} /> Ver
                              </button>
                              <button 
                                className={styles.editButton}
                                onClick={() => {
                                  // Aquí podrías pre-cargar el contenido en el editor
                                  setShowEditor(true);
                                }}
                              >
                                <Edit3 size={16} /> Editar
                              </button>
                              <button 
                                className={styles.deleteButton}
                                onClick={() => {
                                  if (confirm('¿Estás seguro de eliminar este análisis?')) {
                                    const updatedAnalyses = savedAnalyses.filter((a) => a !== analysis);
                                    setSavedAnalyses(updatedAnalyses);
                                    localStorage.setItem(`analyses_${movieId}`, JSON.stringify(updatedAnalyses));
                                  }
                                }}
                              >
                                <X size={16} /> Eliminar
                              </button>
                            </div>
                          )}
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className={styles.noReviews}>
                    <MessageSquare size={48} />
                    <p>Aún no hay críticas disponibles</p>
                    <span>Sé el primero en compartir tu opinión</span>
                  </div>
                )}
              </div>
            </div>
          </>
        );

      case 'production':
        return (
          <>
            <div className={styles.productionGrid}>
              <div className={styles.productionCard}>
                <h4>
                  <DollarSign size={20} />
                  Presupuesto
                </h4>
                <p className={styles.moneyValue}>
                  {movieData.budget ? `$${movieData.budget.toLocaleString()}` : 'No disponible'}
                </p>
              </div>

              <div className={styles.productionCard}>
                <h4>
                  <TrendingUp size={20} />
                  Recaudación Mundial
                </h4>
                <p className={styles.moneyValue}>
                  {movieData.revenue ? `$${movieData.revenue.toLocaleString()}` : 'No disponible'}
                </p>
              </div>
            </div>

            {/* Análisis financiero si hay datos */}
            {movieData.budget && movieData.revenue && movieData.budget > 0 && (
              <div className={styles.dataSection}>
                <div className={styles.financialAnalysis}>
                  <h3 className={styles.financialTitle}>
                    <Zap size={20} />
                    Análisis Financiero
                  </h3>
                  <div className={styles.financialMetrics}>
                    <div className={styles.financialMetric}>
                      <span className={styles.metricLabel}>ROI (Retorno de Inversión)</span>
                      <span className={movieData.revenue > movieData.budget ? styles.profitText : styles.lossText}>
                        {((movieData.revenue / movieData.budget - 1) * 100).toFixed(1)}%
                      </span>
                    </div>
                    <div className={styles.financialMetric}>
                      <span className={styles.metricLabel}>Ganancias/Pérdidas</span>
                      <span className={movieData.revenue > movieData.budget ? styles.profitText : styles.lossText}>
                        ${(movieData.revenue - movieData.budget).toLocaleString()}
                      </span>
                    </div>
                    <div className={styles.financialMetric}>
                      <span className={styles.metricLabel}>Multiplicador</span>
                      <span className={styles.metricValue}>{(movieData.revenue / movieData.budget).toFixed(2)}x</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Compañías productoras con logos */}
            {movieData.production_companies && movieData.production_companies.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>
                  <Film size={20} />
                  Compañías Productoras
                </h3>
                <div className={styles.companyGrid}>
                  {movieData.production_companies.map((company, idx) => (
                    <div key={idx} className={styles.companyCard}>
                      {company.logo_path ? (
                        <img 
                          src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                          alt={company.name}
                          className={styles.companyLogo}
                        />
                      ) : (
                        <div className={styles.companyPlaceholder}>
                          <Film size={40} />
                        </div>
                      )}
                      <p>{company.name}</p>
                      {company.origin_country && (
                        <span className={styles.companyCountry}>{company.origin_country}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        );

      case 'content':
        return (
          <>
            <div className={styles.contentSection}>
              {/* Sinopsis Principal */}
              <div className={styles.synopsisCard}>
                <div className={styles.synopsisHeader}>
                  <h3 className={styles.synopsisTitle}>
                    <Info size={24} />
                    Sinopsis Completa
                  </h3>
                  {movieData.tagline && (
                    <div className={styles.taglineBadge}>
                      <Sparkles size={16} />
                      Tagline
                    </div>
                  )}
                </div>
                
                <div className={styles.synopsisContent}>
                  {movieData.overview ? (
                    <>
                      <p className={styles.synopsisText}>{movieData.overview}</p>
                      {movieData.tagline && (
                        <blockquote className={styles.taglineQuote}>
                          <span className={styles.quoteIcon}>"</span>
                          {movieData.tagline}
                          <span className={styles.quoteIcon}>"</span>
                        </blockquote>
                      )}
                    </>
                  ) : (
                    <p className={styles.noContent}>No hay sinopsis disponible</p>
                  )}
                </div>
              </div>

              {/* Análisis Temático */}
              {movieData.keywords?.keywords && movieData.keywords.keywords.length > 0 && (
                <div className={styles.thematicSection}>
                  <h3 className={styles.thematicTitle}>
                    <Zap size={24} />
                    Análisis Temático
                  </h3>
                  
                  <div className={styles.keywordCloud}>
                    {movieData.keywords.keywords.map((keyword, idx) => (
                      <span 
                        key={idx} 
                        className={styles.themeTag}
                        style={{
                          fontSize: `${Math.random() * 8 + 14}px`,
                          opacity: Math.random() * 0.4 + 0.6
                        }}
                      >
                        {keyword.name}
                      </span>
                    ))}
                  </div>

                  <div className={styles.thematicAnalysis}>
                    <h4>Temas Principales Identificados:</h4>
                    <div className={styles.themeCategories}>
                      {/* Aquí podrías categorizar los keywords */}
                      <div className={styles.themeCategory}>
                        <span className={styles.categoryIcon}>🎭</span>
                        <span className={styles.categoryName}>Drama Humano</span>
                      </div>
                      <div className={styles.themeCategory}>
                        <span className={styles.categoryIcon}>🌍</span>
                        <span className={styles.categoryName}>Contexto Social</span>
                      </div>
                      <div className={styles.themeCategory}>
                        <span className={styles.categoryIcon}>💫</span>
                        <span className={styles.categoryName}>Elementos Fantásticos</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Estructura Narrativa */}
              <div className={styles.narrativeStructure}>
                <h3 className={styles.narrativeTitle}>
                  <Brain size={24} />
                  Estructura Narrativa
                </h3>
                
                <div className={styles.genreBreakdown}>
                  {movieData.genres && movieData.genres.map((genre, idx) => (
                    <div key={idx} className={styles.genreAnalysisCard}>
                      <div className={styles.genreHeader}>
                        <h4>{genre.name}</h4>
                        <div className={styles.genreIcon}>
                          {getGenreIcon(genre.name)}
                        </div>
                      </div>
                      <p className={styles.genreDescription}>
                        {getGenreDescription(genre.name)}
                      </p>
                      <div className={styles.genreElements}>
                        <span className={styles.elementTag}>Narrativa</span>
                        <span className={styles.elementTag}>Estilo Visual</span>
                        <span className={styles.elementTag}>Tono</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'personal':
        // Usar el nuevo componente MovieAnalyses con datos REALES
        const movieAnalyses: any[] = [];
        
        // Convertir savedAnalyses al formato correcto
        savedAnalyses.forEach((analysis: any) => {
          if (analysis.type !== 'narrative') {
            // Reflexiones personales
            movieAnalyses.push({
              id: analysis.id || `ref-${Date.now()}-${Math.random()}`,
              createdAt: new Date(analysis.createdAt || Date.now()),
              lastModified: new Date(analysis.lastModified || analysis.createdAt || Date.now()),
              summary: typeof analysis.content === 'string' 
                ? analysis.content.substring(0, 150) + '...' 
                : analysis.title || 'Mi reflexión personal',
              fullContent: analysis.content || '',
              wordCount: analysis.wordCount || 500,
              readingTime: analysis.readingTime || Math.ceil((analysis.content?.length || 500) / 250),
              type: 'reflection',
              rating: analysis.rating || 5
            });
          } else {
            // Análisis con IA (tipo narrative)
            movieAnalyses.push({
              id: analysis.id || `ai-${Date.now()}-${Math.random()}`,
              createdAt: new Date(analysis.createdAt || Date.now()),
              lastModified: new Date(analysis.createdAt || Date.now()),
              methodology: analysis.theoryName || 'Análisis Narrativo',
              aiModel: analysis.modelUsed || 'Claude-3',
              summary: typeof analysis.content === 'string'
                ? analysis.content.substring(0, 150) + '...'
                : 'Análisis con IA',
              fullContent: analysis.content || '',
              insights: analysis.insights || [],
              wordCount: analysis.wordCount || 2000,
              readingTime: analysis.readingTime || 8,
              type: 'ai-analysis'
            });
          }
        });
        
        return (
          <>
            {showEditor ? (
              <div className={styles.editorContainer}>
                <AnalysisEditor
                  blockType={activeBlock}
                  movieId={movieId}
                  movieTitle={movieData?.title || ''}
                  onSave={handleSaveAnalysis}
                  onCancel={() => setShowEditor(false)}
                />
              </div>
            ) : (
              <MovieAnalyses
                movieId={movieId}
                movieTitle={movieData?.title || 'Sin título'}
                moviePoster={movieData?.poster_path ? 
              movieData.poster_path.startsWith('/') 
                ? `https://image.tmdb.org/t/p/w300${movieData.poster_path}`
                : `https://image.tmdb.org/t/p/w300/${movieData.poster_path}`
              : undefined}
                analyses={movieAnalyses}
                onViewAnalysis={(analysisId) => {
                  console.log('Ver análisis:', analysisId);
                }}
                onEditAnalysis={(analysis) => {
                  if (analysis.type === 'reflection') {
                    // Abrir el editor con el análisis existente
                    setShowEditor(true);
                    // TODO: Pre-cargar el contenido en el editor
                    console.log('Editar reflexión:', analysis);
                  } else {
                    alert('Los análisis con IA no se pueden editar. Puedes generar uno nuevo con diferentes parámetros.');
                  }
                }}
                onDeleteAnalysis={(analysisId) => {
                  // Actualizar localStorage y estado
                  const updatedAnalyses = savedAnalyses.filter(a => a.id !== analysisId);
                  setSavedAnalyses(updatedAnalyses);
                  localStorage.setItem(`analyses_${movieId}`, JSON.stringify(updatedAnalyses));
                  console.log('✅ Análisis eliminado');
                }}
                onCreateNew={(type) => {
                  if (type === 'reflection') {
                    // Abrir el editor de reflexiones
                    setShowEditor(true);
                  } else {
                    // Cambiar al bloque de análisis narrativo
                    setActiveBlock('narrative');
                  }
                }}
              />
            )}
          </>
        );

      case 'community':
        return (
          <>
            <div className={styles.communitySection}>
              <div className={styles.communityBanner}>
                <span className={styles.communityIcon}>
                  <Globe size={32} />
                </span>
                <div className={styles.communityInfo}>
                  <h3>Análisis compartidos por la comunidad SYNAPSIS</h3>
                  <p>Descubre perspectivas únicas de otros cinéfilos</p>
                </div>
              </div>

              {/* Aquí aparecerán los análisis comunitarios */}
              <div className={styles.communityEmpty}>
                <span className={styles.communityEmptyIcon}>
                  <Heart size={72} />
                </span>
                <p className={styles.communityEmptyText}>
                  Aún no hay análisis comunitarios para esta película.
                </p>
                <p className={styles.communityInvite}>
                  ¡Sé el primero en compartir tu perspectiva con la comunidad!
                </p>
                <button className={styles.shareAnalysisButton}>
                  <Globe size={20} />
                  Compartir mi análisis
                </button>
              </div>
            </div>
          </>
        );

      case 'references':
        return (
          <>
            {/* Enlaces externos mejorados */}
            <div className={styles.dataSection}>
              <h3 className={styles.dataSectionTitle}>
                <ExternalLink size={20} />
                Enlaces Oficiales
              </h3>
              <div className={styles.externalLinks}>
                {movieData.homepage && (
                  <a href={movieData.homepage} target="_blank" rel="noopener noreferrer" 
                     className={styles.externalLink}>
                    <Globe size={20} />
                    Sitio Web Oficial
                  </a>
                )}
                {movieData.external_ids?.imdb_id && (
                  <a href={`https://www.imdb.com/title/${movieData.external_ids.imdb_id}`} 
                     target="_blank" rel="noopener noreferrer" 
                     className={styles.externalLink}>
                    <Film size={20} />
                    Ver en IMDb
                  </a>
                )}
                {movieData.external_ids?.facebook_id && (
                  <a href={`https://facebook.com/${movieData.external_ids.facebook_id}`} 
                     target="_blank" rel="noopener noreferrer" 
                     className={styles.externalLink}>
                    <Users size={20} />
                    Página de Facebook
                  </a>
                )}
              </div>
            </div>

            {/* Videos/Trailers con mejor presentación */}
            {movieData.videos?.results && movieData.videos.results.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>
                  <Film size={20} />
                  Trailers y Videos
                </h3>
                <div className={styles.videoGrid}>
                  {movieData.videos.results
                    .filter(video => video.site === 'YouTube')
                    .slice(0, 6)
                    .map((video, idx) => (
                      <div key={idx} className={styles.videoCard}>
                        <a 
                          href={`https://youtube.com/watch?v=${video.key}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.videoLink}
                        >
                          <div className={styles.videoThumbnailWrapper}>
                            <img 
                              src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                              alt={video.name}
                              className={styles.videoThumbnail}
                            />
                            <div className={styles.playOverlay}>
                              <Film size={40} />
                            </div>
                          </div>
                          <p className={styles.videoTitle}>{video.name}</p>
                          <span className={styles.videoType}>{video.type}</span>
                        </a>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </>
        );

      default:
        return null;
    }
  };

  // Helpers adicionales
  const getLanguageName = (code: string): string => {
    const languages: { [key: string]: string } = {
      'en': 'Inglés',
      'es': 'Español',
      'fr': 'Francés',
      'de': 'Alemán',
      'it': 'Italiano',
      'ja': 'Japonés',
      'ko': 'Coreano',
      'pt': 'Portugués',
      'ru': 'Ruso',
      'zh': 'Chino',
      // Agregar más según necesites
    };
    return languages[code] || code.toUpperCase();
  };

  const getStatusInSpanish = (status?: string): string => {
    const statusMap: { [key: string]: string } = {
      'Released': 'Estrenada',
      'In Production': 'En Producción',
      'Post Production': 'Post-producción',
      'Planned': 'Planeada',
      'Canceled': 'Cancelada',
      'Rumored': 'Rumoreada'
    };
    return status ? (statusMap[status] || status) : '';
  };

  const getGenreDescription = (genreName: string): string => {
    const descriptions: { [key: string]: string } = {
      'Acción': 'Películas con secuencias dinámicas, persecuciones y combates espectaculares.',
      'Aventura': 'Historias de viajes épicos, exploración y descubrimientos extraordinarios.',
      'Animación': 'Obras creadas mediante técnicas de animación, desde tradicional hasta CGI.',
      'Comedia': 'Películas diseñadas para provocar risa y entretenimiento ligero.',
      'Crimen': 'Historias centradas en actividades criminales y sus consecuencias.',
      'Documental': 'Obras no ficticias que exploran temas reales y personas auténticas.',
      'Drama': 'Narrativas emotivas que exploran conflictos humanos profundos.',
      'Familia': 'Contenido apropiado para todas las edades, con valores familiares.',
      'Fantasía': 'Mundos imaginarios con elementos mágicos y sobrenaturales.',
      'Historia': 'Recreaciones de eventos históricos y épocas pasadas.',
      'Terror': 'Diseñadas para provocar miedo, tensión y suspenso extremo.',
      'Música': 'Centradas en la música como elemento narrativo principal.',
      'Misterio': 'Tramas enigmáticas que mantienen el suspenso hasta el final.',
      'Romance': 'Historias de amor y relaciones sentimentales.',
      'Ciencia ficción': 'Exploraciones de futuros posibles, tecnología y conceptos científicos.',
      'Suspense': 'Narrativas tensas que mantienen al espectador en vilo.',
      'Guerra': 'Conflictos bélicos y sus impactos humanos.',
      'Western': 'Ambientadas en el viejo oeste americano.'
    };
    return descriptions[genreName] || `Género cinematográfico: ${genreName}`;
  };

  const currentBlock = blockDefinitions.find(b => b.id === activeBlock);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingContent}>
          <div className={styles.spinner}></div>
          <p className={styles.loadingText}>Cargando análisis cinematográfico...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Header mejorado */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <button onClick={onBack} className={styles.backButton}>
            <ChevronLeft size={24} />
          </button>
          
          <div>
            <h1 className={styles.movieTitle}>{movieData?.title || 'Película'}</h1>
            <div className={styles.movieStats}>
              <span className={styles.stat}>
                <User size={12} />
                {savedAnalyses.length} análisis personales
              </span>
              <span className={styles.stat}>
                <Globe size={12} />
                0 análisis comunitarios
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        {/* Sidebar izquierdo - 8 Bloques mejorado */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <h3 className={styles.sidebarTitle}>
              <MessageSquare size={20} />
              Bloques de Análisis
            </h3>
            
            <div className={styles.blocksList}>
              {blockDefinitions.map((block) => (
                <button
                  key={block.id}
                  onClick={() => setActiveBlock(block.id)}
                  className={`${styles.blockButton} ${
                    activeBlock === block.id ? styles.blockButtonActive : ''
                  }`}
                  style={{
                    borderColor: activeBlock === block.id ? block.color : 'transparent',
                    backgroundColor: activeBlock === block.id ? `${block.color}20` : 'transparent'
                  }}
                >
                  <div className={styles.blockButtonContent}>
                    <div className={styles.blockButtonLeft}>
                      <span className={styles.blockIcon}>{block.icon}</span>
                      <span className={styles.blockTitle}>{block.title}</span>
                    </div>
                    {block.isPrivate && <Lock size={16} className={styles.lockIcon} />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.contentWrapper}>
              {/* Header de película con datos básicos */}
              {renderBlockHeader()}

              {/* Header del bloque con color personalizado */}
              <div className={styles.blockHeader}>
                <h2 className={styles.blockHeaderTitle} style={{ color: currentBlock?.color }}>
                  <span className={styles.blockHeaderIcon}>{currentBlock?.icon}</span>
                  {currentBlock?.title}
                </h2>
                <p className={styles.blockDescription}>{currentBlock?.description}</p>
              </div>

              {/* Contenido dinámico según el bloque */}
              {renderBlockContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de selección de IA */}
      <AIModelSelector
        isOpen={showAISelector}
        onClose={() => setShowAISelector(false)}
        onSelectModel={handleSelectAIModel}
        selectedModelId={selectedAIModel?.id}
      />
      {/* Sistema de Colecciones */}
      {showCollections && (
        <div className={styles.collectionsOverlay}>
          <CollectionManager
            movies={[movieData]}
            onCollectionSelect={(collectionId) => {
              console.log('Colección seleccionada:', collectionId);
              setShowCollections(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MovieBlocks;