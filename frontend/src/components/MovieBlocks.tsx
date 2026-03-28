// MovieBlocks.tsx - VERSIÓN MEJORADA con mapeo inteligente de datos
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config/api';
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
  if (rawData.original_title && rawData.release_date && rawData.runtime) {
    return rawData;
  }
  return {
    id: rawData.id || rawData.tmdbId,
    title: rawData.title,
    original_title: rawData.originalTitle || rawData.original_title,
    overview: rawData.plot_summary || rawData.overview,
    tagline: rawData.tagline,
    release_date: rawData.release_date || (rawData.year ? `${rawData.year}-01-01` : null),
    runtime: rawData.duration || rawData.runtime,
    vote_average: rawData.rating || rawData.vote_average,
    vote_count: rawData.votes || rawData.vote_count,
    budget: rawData.budget,
    revenue: rawData.revenue,
    status: rawData.status,
    poster_path: rawData.poster_path || (rawData.poster_url ? rawData.poster_url.split('/').pop() : null),
    backdrop_path: rawData.backdrop_path || (rawData.backdrop_url ? rawData.backdrop_url.split('/').pop() : null),
    original_language: rawData.original_language,
    homepage: rawData.homepage,
    genres: rawData.genres || (rawData.genre ? rawData.genre.map((g: string | any, idx: number) => 
      typeof g === 'string' ? { id: idx, name: g } : g
    ) : []),
    credits: rawData.credits || {
      cast: rawData.cast || [],
      crew: rawData.crew || []
    },
    production_companies: rawData.production_companies || [],
    production_countries: rawData.production_countries || [],
    spoken_languages: rawData.spoken_languages || [],
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

  const blockDefinitions = [
    { id: 'artistic', title: 'Ficha Artística', icon: '🎭', description: 'Director, reparto y equipo creativo', color: '#e11d48' },
    { id: 'technical', title: 'Ficha Técnica', icon: '⚙️', description: 'Datos técnicos, duración y formato', color: '#2563eb' },
    { id: 'visual', title: 'Crítica & Imágenes', icon: '🎨', description: 'Galería visual y críticas', color: '#7c3aed' },
    { id: 'production', title: 'Producción & Taquilla', icon: '💰', description: 'Presupuesto, recaudación y datos de producción', color: '#16a34a' },
    { id: 'content', title: 'Contenido & Argumento', icon: '📖', description: 'Sinopsis, temas y estructura narrativa', color: '#ea580c' },
    { id: 'personal', title: 'Mis Análisis', icon: '🧠', isPrivate: true, canEdit: true, description: 'Tus reflexiones y análisis privados', color: '#9333ea' },
    { id: 'community', title: 'Estudios Comunitarios', icon: '🌍', description: 'Análisis compartidos por la comunidad', color: '#0891b2' },
    { id: 'references', title: 'Referencias & Enlaces', icon: '🔗', description: 'Enlaces externos y recursos adicionales', color: '#dc2626' },
    { id: 'narrative', title: 'Análisis Narrativo IA', icon: '🤖', description: 'Análisis con metodologías cinematográficas', color: '#ec4899' }
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
      const url = `${API_BASE_URL}/api/tmdb/movie/${movieId}?append_to_response=credits,images,videos,keywords,reviews,external_ids`;
      const response = await axios.get(url);
      console.log('📊 Respuesta recibida:', response.data);
      if (response.data.success && response.data.data) {
        const mappedData = mapMovieData(response.data.data);
        setMovieData(mappedData);
        console.log('✅ Datos mapeados:', mappedData);
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
      const saved = localStorage.getItem(`analyses_${movieId}`);
      if (saved) {
        const analyses = JSON.parse(saved);
        const enrichedAnalyses = analyses.map((analysis: any) => ({
          ...analysis,
          movieId: movieId,
          movieTitle: analysis.movieTitle || movieData?.title || 'Película',
        }));
        setSavedAnalyses(enrichedAnalyses);
      }
    } catch (error) {
      console.error('Error cargando análisis:', error);
    }
  };

  const handleSaveAnalysis = (analysis: any) => {
    try {
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
      const updatedAnalyses = [...savedAnalyses, enrichedAnalysis];
      setSavedAnalyses(updatedAnalyses);
      setShowEditor(false);
    } catch (error) {
      console.error('Error al guardar análisis:', error);
    }
  };

  const handleSelectAIModel = (modelId: string, modelInfo: any) => {
    setSelectedAIModel(modelInfo);
    setShowAISelector(false);
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

  const getCrewByDepartment = (department: string) => {
    return movieData?.credits?.crew?.filter(person => person.department === department) || [];
  };

  const getCrewByJob = (job: string) => {
    return movieData?.credits?.crew?.filter(person => person.job === job) || [];
  };

  const getGenreIcon = (genreName: string): string => {
    const genreIcons: { [key: string]: string } = {
      'Acción': '⚔️', 'Action': '⚔️', 'Aventura': '🗺️', 'Adventure': '🗺️',
      'Animación': '🎨', 'Animation': '🎨', 'Comedia': '😄', 'Comedy': '😄',
      'Crimen': '🔍', 'Crime': '🔍', 'Documental': '📹', 'Documentary': '📹',
      'Drama': '🎭', 'Familia': '👨‍👩‍👧‍👦', 'Family': '👨‍👩‍👧‍👦',
      'Fantasía': '🦄', 'Fantasy': '🦄', 'Historia': '📜', 'History': '📜',
      'Terror': '👻', 'Horror': '👻', 'Música': '🎵', 'Music': '🎵',
      'Misterio': '❓', 'Mystery': '❓', 'Romance': '💕',
      'Ciencia ficción': '🚀', 'Science Fiction': '🚀',
      'Suspense': '😰', 'Thriller': '😰', 'Guerra': '⚔️', 'War': '⚔️', 'Western': '🤠'
    };
    return genreIcons[genreName] || '🎬';
  };

  const getLanguageName = (code: string): string => {
    const languages: { [key: string]: string } = {
      'en': 'Inglés', 'es': 'Español', 'fr': 'Francés', 'de': 'Alemán',
      'it': 'Italiano', 'ja': 'Japonés', 'ko': 'Coreano', 'pt': 'Portugués',
      'ru': 'Ruso', 'zh': 'Chino'
    };
    return languages[code] || code.toUpperCase();
  };

  const getStatusInSpanish = (status?: string): string => {
    const statusMap: { [key: string]: string } = {
      'Released': 'Estrenada', 'In Production': 'En Producción',
      'Post Production': 'Post-producción', 'Planned': 'Planeada',
      'Canceled': 'Cancelada', 'Rumored': 'Rumoreada'
    };
    return status ? (statusMap[status] || status) : '';
  };

  const getGenreDescription = (genreName: string): string => {
    const descriptions: { [key: string]: string } = {
      'Acción': 'Películas con secuencias dinámicas, persecuciones y combates espectaculares.',
      'Drama': 'Narrativas emotivas que exploran conflictos humanos profundos.',
      'Ciencia ficción': 'Exploraciones de futuros posibles, tecnología y conceptos científicos.',
      'Terror': 'Diseñadas para provocar miedo, tensión y suspenso extremo.',
      'Comedia': 'Películas diseñadas para provocar risa y entretenimiento ligero.',
    };
    return descriptions[genreName] || `Género cinematográfico: ${genreName}`;
  };

  const renderBlockContent = () => {
    if (error) {
      return (
        <div className={styles.errorMessage}>
          <p>❌ {error}</p>
          <button onClick={fetchMovieData} className={styles.retryButton}>
            <TrendingUp size={20} /> Reintentar
          </button>
        </div>
      );
    }
    if (!movieData) return <div className={styles.noDataMessage}><p>No se pudieron cargar los datos</p></div>;

    switch (activeBlock) {
      case 'narrative':
        return (
          <NarrativeAnalysisPanel
            movieId={movieId}
            movieTitle={movieData.title}
            movieData={{...movieData, runtime: movieData.runtime || 0, overview: movieData.overview || '', genres: movieData.genres || []}}
            onSaveAnalysis={handleSaveAnalysis}
            userId="demo_user"
          />
        );

      case 'artistic':
        return (
          <>
            <div className={styles.basicInfo}>
              <div className={styles.infoRow}>
                <strong>Título Original</strong>
                <span>{movieData.original_title || movieData.title || 'N/A'}</span>
              </div>
              <div className={styles.infoRow}>
                <strong><Camera size={16} className={styles.inlineIcon} /> Director</strong>
                <span>{getCrewByJob('Director').map(d => d.name).join(', ') || 'N/A'}</span>
              </div>
              <div className={styles.infoRow}>
                <strong><Calendar size={16} className={styles.inlineIcon} /> Año</strong>
                <span>{movieData.release_date ? new Date(movieData.release_date).getFullYear() : 'N/A'}</span>
              </div>
              <div className={styles.infoRow}>
                <strong><Award size={16} className={styles.inlineIcon} /> Géneros</strong>
                <div className={styles.genreList}>
                  {movieData.genres && movieData.genres.length > 0
                    ? movieData.genres.map((g, i) => <span key={i} className={styles.genreTag}>{g.name}</span>)
                    : <span>N/A</span>}
                </div>
              </div>
              <div className={styles.infoRow}>
                <strong><Star size={16} className={styles.inlineIcon} /> Calificación</strong>
                <span className={styles.rating}>
                  ⭐ {movieData.vote_average ? `${movieData.vote_average.toFixed(1)}/10` : 'N/A'}
                  {movieData.vote_count && <span className={styles.voteCount}> ({movieData.vote_count.toLocaleString()} votos)</span>}
                </span>
              </div>
            </div>
            {movieData.overview && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}><Sparkles size={20} /> Sinopsis</h3>
                <p className={styles.synopsis}>{movieData.overview}</p>
                {movieData.tagline && <blockquote className={styles.tagline}>"{movieData.tagline}"</blockquote>}
              </div>
            )}
            {movieData.credits?.cast && movieData.credits.cast.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}><Users size={20} /> Reparto Principal</h3>
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
                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}><Calendar size={24} /></div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>Fecha de estreno</span>
                    <p className={styles.technicalValue}>
                      {movieData.release_date ? new Date(movieData.release_date).toLocaleDateString('es-ES', {year:'numeric',month:'long',day:'numeric'}) : 'N/A'}
                    </p>
                  </div>
                </div>
                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}><Clock size={24} /></div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>Duración</span>
                    <p className={styles.technicalValue}>{movieData.runtime ? `${movieData.runtime} minutos` : 'N/A'}</p>
                  </div>
                </div>
                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}><Globe size={24} /></div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>País de origen</span>
                    <p className={styles.technicalValue}>{movieData.production_countries?.map(c => c.name).join(', ') || 'N/A'}</p>
                  </div>
                </div>
                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}><MessageSquare size={24} /></div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>Idioma original</span>
                    <p className={styles.technicalValue}>{movieData.original_language ? getLanguageName(movieData.original_language) : 'N/A'}</p>
                  </div>
                </div>
                <div className={styles.technicalCard}>
                  <div className={styles.technicalIcon}><Info size={24} /></div>
                  <div className={styles.technicalInfo}>
                    <span className={styles.technicalLabel}>Estado</span>
                    <p className={styles.technicalValue}>{getStatusInSpanish(movieData.status)}</p>
                  </div>
                </div>
              </div>

              <div className={styles.crewSection}>
                <h3 className={styles.crewTitle}><Users size={24} /> Equipo Técnico</h3>
                <div className={styles.crewDepartments}>
                  {getCrewByJob('Director').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}><Camera size={18} /> Dirección</h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Director').map((p, i) => <span key={i} className={styles.crewMember}>{p.name}</span>)}
                      </div>
                    </div>
                  )}
                  {getCrewByJob('Screenplay').concat(getCrewByJob('Writer')).length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}><Edit3 size={18} /> Guión</h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Screenplay').concat(getCrewByJob('Writer')).map((p, i) => <span key={i} className={styles.crewMember}>{p.name}</span>)}
                      </div>
                    </div>
                  )}
                  {getCrewByJob('Producer').concat(getCrewByJob('Executive Producer')).length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}><Film size={18} /> Producción</h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Producer').concat(getCrewByJob('Executive Producer')).map((p, i) => (
                          <span key={i} className={styles.crewMember}>{p.name}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {getCrewByJob('Director of Photography').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}><Camera size={18} /> Fotografía</h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Director of Photography').map((p, i) => <span key={i} className={styles.crewMember}>{p.name}</span>)}
                      </div>
                    </div>
                  )}
                  {getCrewByJob('Original Music Composer').concat(getCrewByJob('Music')).length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}><Music size={18} /> Música</h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Original Music Composer').concat(getCrewByJob('Music')).map((p, i) => <span key={i} className={styles.crewMember}>{p.name}</span>)}
                      </div>
                    </div>
                  )}
                  {getCrewByJob('Editor').length > 0 && (
                    <div className={styles.crewDepartment}>
                      <h4 className={styles.departmentTitle}><Film size={18} /> Montaje</h4>
                      <div className={styles.crewMembers}>
                        {getCrewByJob('Editor').map((p, i) => <span key={i} className={styles.crewMember}>{p.name}</span>)}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {movieData.spoken_languages && movieData.spoken_languages.length > 0 && (
                <div className={styles.additionalTechnicalInfo}>
                  <h3 className={styles.technicalSubtitle}><Info size={20} /> Información Adicional</h3>
                  <div className={styles.technicalDetail}>
                    <strong>Idiomas hablados:</strong>
                    <span>{movieData.spoken_languages.map(lang => lang.name || lang.english_name).join(', ')}</span>
                  </div>
                </div>
              )}
            </div>
          </>
        );

      case 'visual':
        return (
          <>
            <div className={styles.visualSection}>
              {movieData.images?.posters && movieData.images.posters.length > 0 && (
                <div className={styles.gallerySection}>
                  <h3 className={styles.galleryTitle}>
                    <Image size={24} /> Galería de Posters
                    <span className={styles.galleryCount}>{movieData.images.posters.length} imágenes</span>
                  </h3>
                  <div className={styles.posterGallery}>
                    {movieData.images.posters.slice(0, 8).map((image, idx) => (
                      <div key={idx} className={styles.posterContainer}>
                        <img src={`https://image.tmdb.org/t/p/w300${image.file_path}`} alt={`Poster ${idx+1}`} className={styles.galleryPoster} loading="lazy" />
                        <div className={styles.posterOverlay}><Eye size={24} /><span>Ver en HD</span></div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {movieData.images?.backdrops && movieData.images.backdrops.length > 0 && (
                <div className={styles.gallerySection}>
                  <h3 className={styles.galleryTitle}>
                    <Camera size={24} /> Capturas
                    <span className={styles.galleryCount}>{movieData.images.backdrops.length} imágenes</span>
                  </h3>
                  <div className={styles.screenshotGallery}>
                    {movieData.images.backdrops.slice(0, 9).map((image, idx) => (
                      <div key={idx} className={styles.screenshotContainer}>
                        <img src={`https://image.tmdb.org/t/p/w780${image.file_path}`} alt={`Captura ${idx+1}`} className={styles.screenshot} loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className={styles.reviewsSection}>
                <h3 className={styles.reviewsTitle}><MessageSquare size={24} /> Críticas y Reseñas</h3>
                {movieData.reviews?.results && movieData.reviews.results.length > 0 ? (
                  <div className={styles.reviewsGrid}>
                    {movieData.reviews.results.slice(0, 4).map((review, idx) => (
                      <article key={idx} className={styles.reviewCard}>
                        <div className={styles.reviewHeader}>
                          <div className={styles.reviewAuthor}>
                            <div className={styles.authorAvatar}><User size={24} /></div>
                            <div className={styles.authorInfo}>
                              <h4>{review.author}</h4>
                              <time>{new Date(review.created_at).toLocaleDateString('es-ES', {year:'numeric',month:'long',day:'numeric'})}</time>
                            </div>
                          </div>
                          {review.author_details?.rating && (
                            <div className={styles.reviewRating}><Star size={18} /><span>{review.author_details.rating}/10</span></div>
                          )}
                        </div>
                        <div className={styles.reviewContent}>
                          <p>{review.content.length > 400 ? review.content.substring(0, 400) + '...' : review.content}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className={styles.noReviews}>
                    <MessageSquare size={48} />
                    <p>Aún no hay críticas disponibles</p>
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
                <h4><DollarSign size={20} /> Presupuesto</h4>
                <p className={styles.moneyValue}>{movieData.budget ? `$${movieData.budget.toLocaleString()}` : 'No disponible'}</p>
              </div>
              <div className={styles.productionCard}>
                <h4><TrendingUp size={20} /> Recaudación Mundial</h4>
                <p className={styles.moneyValue}>{movieData.revenue ? `$${movieData.revenue.toLocaleString()}` : 'No disponible'}</p>
              </div>
            </div>
            {movieData.budget && movieData.revenue && movieData.budget > 0 && (
              <div className={styles.dataSection}>
                <div className={styles.financialAnalysis}>
                  <h3 className={styles.financialTitle}><Zap size={20} /> Análisis Financiero</h3>
                  <div className={styles.financialMetrics}>
                    <div className={styles.financialMetric}>
                      <span className={styles.metricLabel}>ROI</span>
                      <span className={movieData.revenue > movieData.budget ? styles.profitText : styles.lossText}>
                        {((movieData.revenue / movieData.budget - 1) * 100).toFixed(1)}%
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
            {movieData.production_companies && movieData.production_companies.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}><Film size={20} /> Compañías Productoras</h3>
                <div className={styles.companyGrid}>
                  {movieData.production_companies.map((company, idx) => (
                    <div key={idx} className={styles.companyCard}>
                      {company.logo_path ? (
                        <img src={`https://image.tmdb.org/t/p/w200${company.logo_path}`} alt={company.name} className={styles.companyLogo} />
                      ) : (
                        <div className={styles.companyPlaceholder}><Film size={40} /></div>
                      )}
                      <p>{company.name}</p>
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
              <div className={styles.synopsisCard}>
                <div className={styles.synopsisHeader}>
                  <h3 className={styles.synopsisTitle}><Info size={24} /> Sinopsis Completa</h3>
                </div>
                <div className={styles.synopsisContent}>
                  {movieData.overview ? (
                    <>
                      <p className={styles.synopsisText}>{movieData.overview}</p>
                      {movieData.tagline && (
                        <blockquote className={styles.taglineQuote}>
                          <span className={styles.quoteIcon}>"</span>{movieData.tagline}<span className={styles.quoteIcon}>"</span>
                        </blockquote>
                      )}
                    </>
                  ) : <p className={styles.noContent}>No hay sinopsis disponible</p>}
                </div>
              </div>
              {movieData.keywords?.keywords && movieData.keywords.keywords.length > 0 && (
                <div className={styles.thematicSection}>
                  <h3 className={styles.thematicTitle}><Zap size={24} /> Temas</h3>
                  <div className={styles.keywordCloud}>
                    {movieData.keywords.keywords.map((keyword, idx) => (
                      <span key={idx} className={styles.themeTag}>{keyword.name}</span>
                    ))}
                  </div>
                </div>
              )}
              <div className={styles.narrativeStructure}>
                <h3 className={styles.narrativeTitle}><Brain size={24} /> Estructura Narrativa</h3>
                <div className={styles.genreBreakdown}>
                  {movieData.genres && movieData.genres.map((genre, idx) => (
                    <div key={idx} className={styles.genreAnalysisCard}>
                      <div className={styles.genreHeader}>
                        <h4>{genre.name}</h4>
                        <div className={styles.genreIcon}>{getGenreIcon(genre.name)}</div>
                      </div>
                      <p className={styles.genreDescription}>{getGenreDescription(genre.name)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );

      case 'personal':
        const movieAnalyses: any[] = [];
        savedAnalyses.forEach((analysis: any) => {
          if (analysis.type !== 'narrative') {
            movieAnalyses.push({
              id: analysis.id || `ref-${Date.now()}-${Math.random()}`,
              createdAt: new Date(analysis.createdAt || Date.now()),
              lastModified: new Date(analysis.lastModified || analysis.createdAt || Date.now()),
              summary: typeof analysis.content === 'string' ? analysis.content.substring(0, 150) + '...' : analysis.title || 'Mi reflexión personal',
              fullContent: analysis.content || '',
              wordCount: analysis.wordCount || 500,
              readingTime: analysis.readingTime || Math.ceil((analysis.content?.length || 500) / 250),
              type: 'reflection',
              rating: analysis.rating || 5
            });
          } else {
            movieAnalyses.push({
              id: analysis.id || `ai-${Date.now()}-${Math.random()}`,
              createdAt: new Date(analysis.createdAt || Date.now()),
              lastModified: new Date(analysis.createdAt || Date.now()),
              methodology: analysis.theoryName || 'Análisis Narrativo',
              aiModel: analysis.modelUsed || 'Claude-3',
              summary: typeof analysis.content === 'string' ? analysis.content.substring(0, 150) + '...' : 'Análisis con IA',
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
                onViewAnalysis={(analysisId) => { console.log('Ver análisis:', analysisId); }}
                onEditAnalysis={(analysis) => {
                  if (analysis.type === 'reflection') { setShowEditor(true); }
                  else { alert('Los análisis con IA no se pueden editar.'); }
                }}
                onDeleteAnalysis={(analysisId) => {
                  const updatedAnalyses = savedAnalyses.filter(a => a.id !== analysisId);
                  setSavedAnalyses(updatedAnalyses);
                  localStorage.setItem(`analyses_${movieId}`, JSON.stringify(updatedAnalyses));
                }}
                onCreateNew={(type) => {
                  if (type === 'reflection') { setShowEditor(true); }
                  else { setActiveBlock('narrative'); }
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
                <span className={styles.communityIcon}><Globe size={32} /></span>
                <div className={styles.communityInfo}>
                  <h3>Análisis compartidos por la comunidad SYNAPSIS</h3>
                  <p>Descubre perspectivas únicas de otros cinéfilos</p>
                </div>
              </div>
              <div className={styles.communityEmpty}>
                <span className={styles.communityEmptyIcon}><Heart size={72} /></span>
                <p className={styles.communityEmptyText}>Aún no hay análisis comunitarios para esta película.</p>
                <button className={styles.shareAnalysisButton}><Globe size={20} /> Compartir mi análisis</button>
              </div>
            </div>
          </>
        );

      case 'references':
        return (
          <>
            <div className={styles.dataSection}>
              <h3 className={styles.dataSectionTitle}><ExternalLink size={20} /> Enlaces Oficiales</h3>
              <div className={styles.externalLinks}>
                {movieData.homepage && (
                  <a href={movieData.homepage} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                    <Globe size={20} /> Sitio Web Oficial
                  </a>
                )}
                {movieData.external_ids?.imdb_id && (
                  <a href={`https://www.imdb.com/title/${movieData.external_ids.imdb_id}`} target="_blank" rel="noopener noreferrer" className={styles.externalLink}>
                    <Film size={20} /> Ver en IMDb
                  </a>
                )}
              </div>
            </div>
            {movieData.videos?.results && movieData.videos.results.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}><Film size={20} /> Trailers y Videos</h3>
                <div className={styles.videoGrid}>
                  {movieData.videos.results.filter(v => v.site === 'YouTube').slice(0, 6).map((video, idx) => (
                    <div key={idx} className={styles.videoCard}>
                      <a href={`https://youtube.com/watch?v=${video.key}`} target="_blank" rel="noopener noreferrer" className={styles.videoLink}>
                        <div className={styles.videoThumbnailWrapper}>
                          <img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} alt={video.name} className={styles.videoThumbnail} />
                          <div className={styles.playOverlay}><Film size={40} /></div>
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
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <button onClick={onBack} className={styles.backButton}>
            <ChevronLeft size={24} />
          </button>
          <div>
            <h1 className={styles.movieTitle}>{movieData?.title || 'Película'}</h1>
            <div className={styles.movieStats}>
              <span className={styles.stat}><User size={12} /> {savedAnalyses.length} análisis personales</span>
              <span className={styles.stat}><Globe size={12} /> 0 análisis comunitarios</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <h3 className={styles.sidebarTitle}><MessageSquare size={20} /> Bloques de Análisis</h3>
            <div className={styles.blocksList}>
              {blockDefinitions.map((block) => (
                <button
                  key={block.id}
                  onClick={() => setActiveBlock(block.id)}
                  className={`${styles.blockButton} ${activeBlock === block.id ? styles.blockButtonActive : ''}`}
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

        <div className={styles.content}>
          <div className={styles.contentInner}>
            <div className={styles.contentWrapper}>
              {renderBlockHeader()}
              <div className={styles.blockHeader}>
                <h2 className={styles.blockHeaderTitle} style={{ color: currentBlock?.color }}>
                  <span className={styles.blockHeaderIcon}>{currentBlock?.icon}</span>
                  {currentBlock?.title}
                </h2>
                <p className={styles.blockDescription}>{currentBlock?.description}</p>
              </div>
              {renderBlockContent()}
            </div>
          </div>
        </div>
      </div>

      <AIModelSelector
        isOpen={showAISelector}
        onClose={() => setShowAISelector(false)}
        onSelectModel={handleSelectAIModel}
        selectedModelId={selectedAIModel?.id}
      />
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
