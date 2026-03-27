// MovieBlocks.tsx - VERSIÓN MEJORADA con mejor manejo de datos y editor
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  ChevronLeft, Lock, Globe, User, Info, Edit3, MessageSquare,
  Calendar, Clock, DollarSign, Film, Star, Users, MapPin,
  Image, ExternalLink, Eye, Sparkles, Brain, Camera, Music, Palette
} from 'lucide-react';
import AnalysisEditor from './AnalysisEditor';
import styles from './MovieBlocks.module.css';

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

const MovieBlocks: React.FC<MovieBlocksProps> = ({ movieId, onBack }) => {
  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [activeBlock, setActiveBlock] = useState<string>('artistic');
  const [loading, setLoading] = useState(true);
  const [showEditor, setShowEditor] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Actualizar nombres de bloques según especificación
  const blockDefinitions = [
    { id: 'artistic', title: 'Ficha Artística', icon: '🎭', description: 'Director, reparto y equipo creativo' },
    { id: 'technical', title: 'Ficha Técnica', icon: '⚙️', description: 'Datos técnicos, duración y formato' },
    { id: 'visual', title: 'Crítica & Imágenes', icon: '🎨', description: 'Galería visual y críticas' },
    { id: 'production', title: 'Producción & Taquilla', icon: '💰', description: 'Presupuesto, recaudación y datos de producción' },
    { id: 'content', title: 'Contenido & Argumento', icon: '📖', description: 'Sinopsis, temas y estructura narrativa' },
    { id: 'personal', title: 'Mis Análisis', icon: '🧠', isPrivate: true, canEdit: true, description: 'Tus reflexiones y análisis privados' },
    { id: 'community', title: 'Estudios Comunitarios', icon: '🌍', description: 'Análisis compartidos por la comunidad' },
    { id: 'references', title: 'Referencias & Enlaces', icon: '🔗', description: 'Enlaces externos y recursos adicionales' }
  ];

  useEffect(() => {
    fetchMovieData();
  }, [movieId]);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      setError(null);
      console.log('📊 Cargando película ID:', movieId);
      
      // URL correcta con append_to_response
      const url = `http://localhost:3000/api/tmdb/movie/${movieId}?append_to_response=credits,images,videos,keywords,reviews,external_ids`;
      console.log('📊 URL de petición:', url);
      
      const response = await axios.get(url);
      
      // console.log('📊 Respuesta recibida:', response.data);
      console.log('📊 Respuesta recibida:', response.data);
      console.log('📊 DATA COMPLETO:', JSON.stringify(response.data.data, null, 2));
      
      if (response.data.success && response.data.data) {
        setMovieData(response.data.data);
        console.log('✅ Datos establecidos correctamente');
      } else {
        console.error('❌ Respuesta sin datos válidos');
        setError('No se pudieron cargar los datos de la película');
      }
    } catch (error) {
      console.error('❌ Error cargando película:', error);
      setError('Error al conectar con el servidor');
    } finally {
      setLoading(false);
    }
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

  // Función helper para obtener miembros del crew por departamento
  const getCrewByDepartment = (department: string) => {
    return movieData?.credits?.crew?.filter(person => person.department === department) || [];
  };

  // Función helper para obtener miembros del crew por job específico
  const getCrewByJob = (job: string) => {
    return movieData?.credits?.crew?.filter(person => person.job === job) || [];
  };

  const renderBlockContent = () => {
    if (error) {
      return (
        <div className={styles.errorMessage}>
          <p>❌ {error}</p>
          <button onClick={fetchMovieData} className={styles.retryButton}>
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
      case 'artistic':
        return (
          <>
            {/* Información básica */}
            <div className={styles.basicInfo}>
              <div className={styles.infoRow}>
                <strong>Título Original</strong>
                <span>{movieData.original_title || movieData.title || 'N/A'}</span>
              </div>
              
              {/* Director(es) */}
              <div className={styles.infoRow}>
                <strong>Director(es)</strong>
                <span>
                  {getCrewByJob('Director').map(d => d.name).join(', ') || 'N/A'}
                </span>
              </div>

              <div className={styles.infoRow}>
                <strong>Año de Lanzamiento</strong>
                <span>{movieData.release_date ? new Date(movieData.release_date).getFullYear() : 'N/A'}</span>
              </div>

              <div className={styles.infoRow}>
                <strong>Géneros</strong>
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
                <strong>Calificación</strong>
                <span className={styles.rating}>
                  ⭐ {movieData.vote_average ? `${movieData.vote_average.toFixed(1)}/10` : 'N/A'}
                  {movieData.vote_count && (
                    <span className={styles.voteCount}> ({movieData.vote_count.toLocaleString()} votos)</span>
                  )}
                </span>
              </div>
            </div>

            {/* Sinopsis */}
            {movieData.overview && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>Sinopsis</h3>
                <p className={styles.synopsis}>{movieData.overview}</p>
              </div>
            )}

            {/* Reparto Principal */}
            {movieData.credits?.cast && movieData.credits.cast.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>Reparto Principal</h3>
                <div className={styles.castGrid}>
                  {movieData.credits.cast.slice(0, 10).map((actor, idx) => (
                    <div key={idx} className={styles.castCard}>
                      <strong>{actor.name}</strong>
                      <span className={styles.characterName}>{actor.character}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className={styles.tmdbNotice}>
              🎭 <strong>¡Ficha artística completa con datos TMDB!</strong>
              <br />
              Información actualizada desde The Movie Database.
            </div>
          </>
        );

      case 'technical':
        return (
          <>
            <div className={styles.technicalGrid}>
              <div className={styles.technicalItem}>
                <span className={styles.technicalLabel}>
                  <Calendar size={16} /> Fecha de estreno
                </span>
                <p className={styles.technicalValue}>
                  {movieData.release_date ? new Date(movieData.release_date).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  }) : 'N/A'}
                </p>
              </div>
              
              <div className={styles.technicalItem}>
                <span className={styles.technicalLabel}>
                  <Clock size={16} /> Duración
                </span>
                <p className={styles.technicalValue}>
                  {movieData.runtime ? `${movieData.runtime} minutos` : 'N/A'}
                </p>
              </div>
              
              <div className={styles.technicalItem}>
                <span className={styles.technicalLabel}>
                  <Globe size={16} /> Idioma Original
                </span>
                <p className={styles.technicalValue}>
                  {movieData.original_language?.toUpperCase() || 'N/A'}
                </p>
              </div>

              <div className={styles.technicalItem}>
                <span className={styles.technicalLabel}>
                  <Film size={16} /> Estado
                </span>
                <p className={styles.technicalValue}>
                  {movieData.status || 'N/A'}
                </p>
              </div>

              <div className={styles.technicalItem}>
                <span className={styles.technicalLabel}>
                  <MapPin size={16} /> Países de producción
                </span>
                <p className={styles.technicalValue}>
                  {movieData.production_countries?.map(c => c.name).join(', ') || 'N/A'}
                </p>
              </div>

              <div className={styles.technicalItem}>
                <span className={styles.technicalLabel}>
                  <Globe size={16} /> Idiomas hablados
                </span>
                <p className={styles.technicalValue}>
                  {movieData.spoken_languages?.map(l => l.english_name || l.name).join(', ') || 'N/A'}
                </p>
              </div>
            </div>

            {/* Equipo técnico completo */}
            <div className={styles.dataSection}>
              <h3 className={styles.dataSectionTitle}>
                <Camera size={20} />
                Equipo Técnico Completo
              </h3>
              
              {/* Director de Fotografía */}
              <div className={styles.crewSection}>
                <h4>Dirección de Fotografía</h4>
                <div className={styles.crewList}>
                  {getCrewByJob('Director of Photography').map((person, idx) => (
                    <div key={idx} className={styles.crewItem}>
                      <span className={styles.crewJob}>Director de Fotografía:</span>
                      <span className={styles.crewName}>{person.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Música */}
              <div className={styles.crewSection}>
                <h4><Music size={16} /> Música</h4>
                <div className={styles.crewList}>
                  {getCrewByJob('Original Music Composer').map((person, idx) => (
                    <div key={idx} className={styles.crewItem}>
                      <span className={styles.crewJob}>Compositor:</span>
                      <span className={styles.crewName}>{person.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Montaje */}
              <div className={styles.crewSection}>
                <h4>Montaje</h4>
                <div className={styles.crewList}>
                  {getCrewByJob('Editor').map((person, idx) => (
                    <div key={idx} className={styles.crewItem}>
                      <span className={styles.crewJob}>Editor:</span>
                      <span className={styles.crewName}>{person.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diseño de Producción */}
              <div className={styles.crewSection}>
                <h4><Palette size={16} /> Diseño de Producción</h4>
                <div className={styles.crewList}>
                  {getCrewByJob('Production Design').map((person, idx) => (
                    <div key={idx} className={styles.crewItem}>
                      <span className={styles.crewJob}>Diseñador de Producción:</span>
                      <span className={styles.crewName}>{person.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Departamento de Cámara */}
              <div className={styles.crewSection}>
                <h4>Departamento de Cámara</h4>
                <div className={styles.crewList}>
                  {getCrewByDepartment('Camera')
                    .filter(p => p.job !== 'Director of Photography')
                    .slice(0, 5)
                    .map((person, idx) => (
                      <div key={idx} className={styles.crewItem}>
                        <span className={styles.crewJob}>{person.job}:</span>
                        <span className={styles.crewName}>{person.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </>
        );

      case 'visual':
        return (
          <>
            {/* Galería de imágenes */}
            {movieData.images?.posters && movieData.images.posters.length > 0 ? (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>
                  <Image size={20} />
                  Posters Oficiales
                </h3>
                <div className={styles.imageGrid}>
                  {movieData.images.posters.slice(0, 6).map((image, idx) => (
                    <img 
                      key={idx}
                      src={`https://image.tmdb.org/t/p/w300${image.file_path}`}
                      alt={`Poster ${idx + 1}`}
                      className={styles.posterImage}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.noDataSection}>
                <p>No hay posters disponibles</p>
              </div>
            )}

            {movieData.images?.backdrops && movieData.images.backdrops.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>
                  <Image size={20} />
                  Imágenes de la Película
                </h3>
                <div className={styles.backdropGrid}>
                  {movieData.images.backdrops.slice(0, 6).map((image, idx) => (
                    <img 
                      key={idx}
                      src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
                      alt={`Imagen ${idx + 1}`}
                      className={styles.backdropImage}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Reviews/Críticas */}
            {movieData.reviews?.results && movieData.reviews.results.length > 0 ? (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>Críticas de la Comunidad</h3>
                <div className={styles.reviewList}>
                  {movieData.reviews.results.slice(0, 3).map((review, idx) => (
                    <div key={idx} className={styles.reviewCard}>
                      <div className={styles.reviewHeader}>
                        <h4>{review.author}</h4>
                        {review.author_details?.rating && (
                          <span className={styles.reviewRating}>
                            <Star size={16} />
                            {review.author_details.rating}/10
                          </span>
                        )}
                      </div>
                      <p className={styles.reviewContent}>
                        {review.content.length > 300 
                          ? review.content.substring(0, 300) + '...' 
                          : review.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className={styles.noDataSection}>
                <p>No hay críticas disponibles</p>
              </div>
            )}
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
                  {movieData.budget ? `$${movieData.budget.toLocaleString()}` : 'N/A'}
                </p>
              </div>

              <div className={styles.productionCard}>
                <h4>
                  <DollarSign size={20} />
                  Recaudación
                </h4>
                <p className={styles.moneyValue}>
                  {movieData.revenue ? `$${movieData.revenue.toLocaleString()}` : 'N/A'}
                </p>
              </div>
            </div>

            {/* Compañías productoras */}
            {movieData.production_companies && movieData.production_companies.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>Compañías Productoras</h3>
                <div className={styles.companyGrid}>
                  {movieData.production_companies.map((company, idx) => (
                    <div key={idx} className={styles.companyCard}>
                      {company.logo_path && (
                        <img 
                          src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                          alt={company.name}
                          className={styles.companyLogo}
                        />
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

            {/* Información adicional de producción */}
            {movieData.budget && movieData.revenue && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>Detalles de Producción</h3>
                <div className={styles.productionDetails}>
                  <div className={styles.detailRow}>
                    <strong>ROI (Retorno de Inversión):</strong>
                    <span>
                      {((movieData.revenue / movieData.budget - 1) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className={styles.detailRow}>
                    <strong>Ganancias Netas:</strong>
                    <span>
                      ${(movieData.revenue - movieData.budget).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            )}
          </>
        );

      case 'content':
        return (
          <>
            {/* Sinopsis completa */}
            {movieData.overview && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>Argumento</h3>
                <p className={styles.synopsis}>{movieData.overview}</p>
                {movieData.tagline && (
                  <blockquote className={styles.tagline}>"{movieData.tagline}"</blockquote>
                )}
              </div>
            )}

            {/* Palabras clave temáticas */}
            {movieData.keywords?.keywords && movieData.keywords.keywords.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>Temas y Palabras Clave</h3>
                <div className={styles.keywordList}>
                  {movieData.keywords.keywords.map((keyword, idx) => (
                    <span key={idx} className={styles.keywordTag}>
                      {keyword.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Géneros con descripción */}
            {movieData.genres && movieData.genres.length > 0 && (
              <div className={styles.dataSection}>
                <h3 className={styles.dataSectionTitle}>Análisis de Géneros</h3>
                <div className={styles.genreAnalysis}>
                  {movieData.genres.map((genre, idx) => (
                    <div key={idx} className={styles.genreCard}>
                      <h4>{genre.name}</h4>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        );

      case 'personal':
        return (
          <>
            {showEditor ? (
              <div className={styles.editorContainer}>
                <AnalysisEditor
                  blockType={activeBlock}
                  movieId={movieId}
                  movieTitle={movieData?.title || ''}
                  onSave={() => setShowEditor(false)}
                  onCancel={() => setShowEditor(false)}
                />
              </div>
            ) : (
              <div className={styles.personalAnalysisSection}>
                <div className={styles.privateNotice}>
                  <Lock size={20} />
                  <span>Este espacio es privado. Solo tú puedes ver estos análisis.</span>
                </div>
                
                {/* Botón para crear análisis */}
                <button
                  onClick={() => setShowEditor(true)}
                  className={styles.createAnalysisButtonLarge}
                >
                  <Edit3 size={20} />
                  <span>Escribir mi análisis personal</span>
                  <Sparkles size={20} className={styles.sparkleIcon} />
                </button>

                {/* Lista de análisis guardados */}
                <div className={styles.savedAnalysesList}>
                  <div className={styles.emptyState}>
                    <Brain size={48} className={styles.emptyIcon} />
                    <p>Aún no has escrito análisis para esta película</p>
                    <p className={styles.emptySubtext}>
                      Comparte tus reflexiones, emociones y pensamientos más profundos
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        );

      case 'community':
        return (
          <>
            <div className={styles.communitySection}>
              <div className={styles.communityNotice}>
                <Globe size={20} />
                <span>Análisis compartidos por la comunidad de forma anónima</span>
              </div>

              {/* Aquí aparecerán los análisis comunitarios */}
              <div className={styles.communityAnalyses}>
                <div className={styles.noAnalysis}>
                  <p className={styles.noAnalysisText}>
                    Aún no hay análisis comunitarios para esta película.
                  </p>
                  <p className={styles.inviteText}>
                    ¡Sé el primero en compartir tu perspectiva con la comunidad!
                  </p>
                </div>
              </div>
            </div>
          </>
        );

      case 'references':
        return (
          <>
            {/* Enlaces externos */}
            <div className={styles.dataSection}>
              <h3 className={styles.dataSectionTitle}>
                <ExternalLink size={20} />
                Enlaces Oficiales
              </h3>
              <div className={styles.externalLinks}>
                {movieData.homepage && (
                  <a href={movieData.homepage} target="_blank" rel="noopener noreferrer" 
                     className={styles.externalLink}>
                    🌐 Sitio Web Oficial
                  </a>
                )}
                {movieData.external_ids?.imdb_id && (
                  <a href={`https://www.imdb.com/title/${movieData.external_ids.imdb_id}`} 
                     target="_blank" rel="noopener noreferrer" 
                     className={styles.externalLink}>
                    🎬 Ver en IMDb
                  </a>
                )}
                {movieData.external_ids?.facebook_id && (
                  <a href={`https://facebook.com/${movieData.external_ids.facebook_id}`} 
                     target="_blank" rel="noopener noreferrer" 
                     className={styles.externalLink}>
                    📘 Página de Facebook
                  </a>
                )}
                {movieData.external_ids?.twitter_id && (
                  <a href={`https://twitter.com/${movieData.external_ids.twitter_id}`} 
                     target="_blank" rel="noopener noreferrer" 
                     className={styles.externalLink}>
                    🐦 Twitter/X Oficial
                  </a>
                )}
                {movieData.external_ids?.instagram_id && (
                  <a href={`https://instagram.com/${movieData.external_ids.instagram_id}`} 
                     target="_blank" rel="noopener noreferrer" 
                     className={styles.externalLink}>
                    📷 Instagram Oficial
                  </a>
                )}
              </div>
            </div>

            {/* Videos/Trailers */}
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
                          <img 
                            src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                            alt={video.name}
                            className={styles.videoThumbnail}
                          />
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
      {/* Header */}
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
                0 análisis personales
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
        {/* Sidebar izquierdo - 8 Bloques */}
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

              {/* Header del bloque */}
              <div className={styles.blockHeader}>
                <h2 className={styles.blockHeaderTitle}>
                  <span className={styles.blockHeaderIcon}>{currentBlock?.icon}</span>
                  {currentBlock?.title}
                </h2>
              </div>

              {/* Contenido dinámico según el bloque */}
              {renderBlockContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBlocks;