import axios from 'axios';
import { mongoose } from '../../core/database';
import type { Movie, Director } from '../../types';

// ===== TMDB API SETUP =====

const TMDB_BASE_URL = process.env.TMDB_BASE_URL || 'https://api.themoviedb.org/3';
const TMDB_API_KEY = process.env.TMDB_API_KEY;

if (!TMDB_API_KEY) {
  console.warn('⚠️ TMDB_API_KEY no configurada. Funcionalidad limitada.');
}

const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
    language: 'es-ES'
  }
});

// ===== MONGOOSE SCHEMAS =====

const MovieSchema = new mongoose.Schema({
  // Basic info
  title: { type: String, required: true },
  director: [{ type: String }],
  year: { type: Number, required: true },
  genre: [{ type: String }],
  country: [{ type: String }],
  duration: { type: Number }, // minutes
  language: [{ type: String }],
  
  // Cast and crew
  cinematographer: { type: String },
  composer: { type: String },
  writer: [{ type: String }],
  producer: [{ type: String }],
  
  // Analysis data
  plot_summary: { type: String },
  themes: [{ type: String }],
  visual_style: [{ type: String }],
  narrative_structure: { type: String },
  
  // External data
  tmdb_id: { type: Number, unique: true, sparse: true },
  imdb_id: { type: String },
  poster_url: { type: String },
  backdrop_url: { type: String },
  
  // System metadata
  added_by: { type: String, required: true },
  added_at: { type: Date, default: Date.now },
  analysis_count: { type: Number, default: 0 },
  discussion_count: { type: Number, default: 0 }
}, {
  timestamps: true
});

MovieSchema.index({ title: 1, year: 1 });
MovieSchema.index({ director: 1 });
MovieSchema.index({ genre: 1 });
MovieSchema.index({ tmdb_id: 1 });

const DirectorSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  birth_year: { type: Number },
  death_year: { type: Number },
  nationality: [{ type: String }],
  
  // Filmography
  filmography: [{ type: String }], // Movie IDs
  style_characteristics: [{ type: String }],
  influences: [{ type: String }],
  movements: [{ type: String }],
  
  // Analysis
  signature_techniques: [{ type: String }],
  recurring_themes: [{ type: String }],
  collaborators: [{ type: String }],
  
  // Metadata
  biography_summary: { type: String },
  added_by: { type: String, required: true },
  added_at: { type: Date, default: Date.now }
}, {
  timestamps: true
});

DirectorSchema.index({ name: 1 });

export const MovieModel = mongoose.model<Movie>('Movie', MovieSchema);
export const DirectorModel = mongoose.model<Director>('Director', DirectorSchema);

// ===== TMDB API FUNCTIONS =====

interface TMDBMovie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  genre_ids: number[];
  director?: string;
  poster_path?: string;
  backdrop_path?: string;
  runtime?: number;
  production_countries?: Array<{ name: string }>;
  spoken_languages?: Array<{ name: string }>;
}

interface TMDBGenre {
  id: number;
  name: string;
}

let genreMap: Map<number, string> = new Map();

async function loadGenres(): Promise<void> {
  try {
    const response = await tmdbApi.get('/genre/movie/list');
    const genres: TMDBGenre[] = response.data.genres;
    
    genres.forEach(genre => {
      genreMap.set(genre.id, genre.name);
    });
    
    console.log(`📋 ${genres.length} géneros cargados desde TMDB`);
  } catch (error) {
    console.warn('⚠️ No se pudieron cargar géneros de TMDB:', error);
  }
}

async function getMovieDetails(tmdbId: number): Promise<TMDBMovie | null> {
  try {
    const [movieResponse, creditsResponse] = await Promise.all([
      tmdbApi.get(`/movie/${tmdbId}`),
      tmdbApi.get(`/movie/${tmdbId}/credits`)
    ]);
    
    const movie = movieResponse.data;
    const credits = creditsResponse.data;
    
    // Find director
    const director = credits.crew.find((person: any) => person.job === 'Director');
    
    return {
      ...movie,
      director: director?.name
    };
  } catch (error) {
    console.warn(`⚠️ No se pudo obtener detalles de película TMDB ID ${tmdbId}:`, error);
    return null;
  }
}

function mapTMDBToMovie(tmdbMovie: TMDBMovie, addedBy: string): Partial<Movie> {
  const year = tmdbMovie.release_date ? parseInt(tmdbMovie.release_date.split('-')[0]) : 0;
  
  return {
    title: tmdbMovie.title,
    director: tmdbMovie.director ? [tmdbMovie.director] : [],
    year: year,
    genre: tmdbMovie.genre_ids?.map(id => genreMap.get(id)).filter((g): g is string => Boolean(g)) || [],
    country: tmdbMovie.production_countries?.map(c => c.name) || [],
    duration: tmdbMovie.runtime || 0,
    language: tmdbMovie.spoken_languages?.map(l => l.name) || [],
    plot_summary: tmdbMovie.overview || '',
    themes: [], // To be filled later by analysis
    visual_style: [],
    narrative_structure: 'unknown',
    tmdb_id: tmdbMovie.id,
    poster_url: tmdbMovie.poster_path ? `https://image.tmdb.org/t/p/w500${tmdbMovie.poster_path}` : undefined,
    backdrop_url: tmdbMovie.backdrop_path ? `https://image.tmdb.org/t/p/w1280${tmdbMovie.backdrop_path}` : undefined,
    added_by: addedBy,
    analysis_count: 0,
    discussion_count: 0
  };
}

// ===== DATABASE FUNCTIONS =====

export async function addMovieFromTMDB(tmdbId: number, addedBy: string): Promise<Movie | null> {
  try {
    // Check if movie already exists
    const existing = await MovieModel.findOne({ tmdb_id: tmdbId });
    if (existing) {
      console.log(`🎬 Película ya existe: ${existing.title}`);
      return existing;
    }
    
    // Get movie details from TMDB
    const tmdbMovie = await getMovieDetails(tmdbId);
    if (!tmdbMovie) {
      console.warn(`⚠️ No se pudo obtener película TMDB ID ${tmdbId}`);
      return null;
    }
    
    // Convert to our format
    const movieData = mapTMDBToMovie(tmdbMovie, addedBy);
    
    // Create movie
    const movie = new MovieModel(movieData);
    await movie.save();
    
    // Create director if doesn't exist
    if (tmdbMovie.director) {
      await addDirectorIfNotExists(tmdbMovie.director, addedBy);
    }
    
    console.log(`🎬 Película agregada: ${movie.title} (${movie.year})`);
    return movie;
    
  } catch (error) {
    console.error(`💥 Error agregando película TMDB ID ${tmdbId}:`, error);
    return null;
  }
}

async function addDirectorIfNotExists(directorName: string, addedBy: string): Promise<Director | null> {
  try {
    // Check if director exists
    const existing = await DirectorModel.findOne({ name: directorName });
    if (existing) {
      return existing;
    }
    
    // Create basic director entry
    const director = new DirectorModel({
      name: directorName,
      nationality: [],
      filmography: [],
      style_characteristics: [],
      influences: [],
      movements: [],
      signature_techniques: [],
      recurring_themes: [],
      collaborators: [],
      biography_summary: `Director de cine. Información detallada pendiente de análisis.`,
      added_by: addedBy
    });
    
    await director.save();
    console.log(`👤 Director agregado: ${directorName}`);
    
    return director;
    
  } catch (error) {
    console.error(`💥 Error agregando director ${directorName}:`, error);
    return null;
  }
}

// ===== INITIALIZATION =====

export async function initializeTMDBIntegration(): Promise<void> {
  try {
    if (!TMDB_API_KEY) {
      console.warn('⚠️ TMDB no configurado, saltando inicialización');
      return;
    }
    
    console.log('🎭 Inicializando integración TMDB...');
    
    // Load genre mappings
    await loadGenres();
    
    console.log('✅ Integración TMDB lista');
    
  } catch (error) {
    console.error('💥 Error inicializando TMDB:', error);
    throw error;
  }
}

export async function importInitialMovies(): Promise<void> {
  try {
    // Check if we already have movies
    const movieCount = await MovieModel.countDocuments();
    if (movieCount > 0) {
      console.log(`📊 Ya existen ${movieCount} películas, saltando importación inicial`);
      return;
    }
    
    console.log('🎬 Importando películas iniciales...');
    
    // Famous movies with their TMDB IDs
    const initialMovies = [
      // Film Noir Classics
      { tmdbId: 949, title: 'The Third Man' }, // 1949
      { tmdbId: 18, title: 'The Maltese Falcon' }, // 1941
      { tmdbId: 17, title: 'Double Indemnity' }, // 1944
      { tmdbId: 1566, title: 'Touch of Evil' }, // 1958
      { tmdbId: 1639, title: 'The Big Sleep' }, // 1946
      
      // Science Fiction
      { tmdbId: 62, title: '2001: A Space Odyssey' }, // 1968
      { tmdbId: 78, title: 'Blade Runner' }, // 1982
      { tmdbId: 2548, title: 'Metropolis' }, // 1927
      { tmdbId: 1584, title: 'Alphaville' }, // 1965
      
      // Auteur Cinema
      { tmdbId: 8348, title: '8½' }, // 1963
      { tmdbId: 3084, title: 'Persona' }, // 1966
      { tmdbId: 3924, title: 'The Rules of the Game' }, // 1939
      { tmdbId: 18148, title: 'Tokyo Story' }, // 1953
      { tmdbId: 1838, title: 'Mulholland Drive' } // 2001
    ];
    
    const addedBy = 'system_initial_import';
    let successCount = 0;
    
    for (const movieInfo of initialMovies) {
      try {
        const movie = await addMovieFromTMDB(movieInfo.tmdbId, addedBy);
        if (movie) {
          successCount++;
        }
        
        // Rate limiting - wait between requests
        await new Promise(resolve => setTimeout(resolve, 250));
        
      } catch (error) {
        console.warn(`⚠️ Error importando ${movieInfo.title}:`, error);
      }
    }
    
    console.log(`✅ ${successCount}/${initialMovies.length} películas importadas exitosamente`);
    
  } catch (error) {
    console.error('💥 Error importando películas iniciales:', error);
    throw error;
  }
}

// ===== UTILITY FUNCTIONS =====

export async function searchMoviesByTitle(title: string): Promise<Movie[]> {
  return MovieModel.find({
    title: { $regex: title, $options: 'i' }
  }).limit(20);
}

export async function getMoviesByDirector(directorName: string): Promise<Movie[]> {
  return MovieModel.find({
    director: { $regex: directorName, $options: 'i' }
  });
}

export async function getMoviesByGenre(genre: string): Promise<Movie[]> {
  return MovieModel.find({
    genre: { $regex: genre, $options: 'i' }
  });
}

export async function getAllMovies(): Promise<Movie[]> {
  return MovieModel.find({}).sort({ year: -1 });
}