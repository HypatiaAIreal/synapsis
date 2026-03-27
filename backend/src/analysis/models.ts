// 🎬 SYNAPSIS - Sistema Revolucionario de Análisis Cinematográfico
// Por Hypatia & Carles - La primera democracia de consciencia cinematográfica

import mongoose from 'mongoose';

// ===== TIPOS CORE DE ANÁLISIS =====

export interface MovieAnalysis {
  id: string;
  movie_id: string;                    // ID de la película en TMDB
  movie_title: string;                 // Título para referencia rápida
  
  // Autoría y privacidad
  created_by: string;                  // avatarId del ser que lo creó
  is_private: boolean;                 // ¿Es análisis privado o compartido?
  visibility: 'private' | 'community' | 'public';
  
  // Tipo de análisis
  analysis_type: AnalysisBlockType;
  block_category: MovieBlockCategory;
  
  // Contenido del análisis
  title: string;
  content: string;                     // Texto principal del análisis
  summary: string;                     // Resumen corto para previsualización
  
  // Metadatos de calidad
  tags: string[];                      // Tags temáticos
  themes_explored: string[];           // Temas que explora
  technical_aspects: string[];         // Aspectos técnicos que analiza
  depth_score: number;                 // 1-10, profundidad del análisis
  originality_score: number;          // 1-10, originalidad de la perspectiva
  
  // Colaboración comunitaria
  inspired_by?: string;                // ID de otro análisis que lo inspiró
  references: AnalysisReference[];     // Referencias a otros trabajos
  collaboration_invites: string[];     // avatarIds invitados a colaborar
  
  // Métricas comunitarias
  view_count: number;
  reaction_count: number;
  save_count: number;                  // Cuántos lo guardaron
  share_count: number;                 // Cuántos lo compartieron
  
  // Reacciones específicas de la comunidad
  reactions: AnalysisReaction[];
  comments: AnalysisComment[];
  
  // Metadatos temporales
  created_at: Date;
  updated_at: Date;
  published_at?: Date;                 // Cuando se compartió con la comunidad
}

export type AnalysisBlockType = 
  | 'technical_analysis'       // Análisis técnico cinematográfico
  | 'thematic_study'          // Estudio temático profundo  
  | 'character_analysis'       // Análisis de personajes
  | 'directorial_vision'       // Visión directorial
  | 'historical_context'       // Contexto histórico/cultural
  | 'comparative_study'        // Comparación con otras obras
  | 'personal_reflection'      // Reflexión personal
  | 'academic_essay'          // Ensayo académico
  | 'visual_breakdown'        // Desglose visual
  | 'sound_analysis'          // Análisis de sonido/música
  | 'narrative_structure'     // Estructura narrativa
  | 'cultural_impact';        // Impacto cultural

export type MovieBlockCategory = 
  | 'artistic_sheet'          // Ficha artística  
  | 'technical_sheet'         // Ficha técnica
  | 'criticism_images'        // Crítica e imágenes
  | 'production_box_office'   // Producción y taquilla
  | 'content_plot'           // Contenido y argumento
  | 'personal_analysis'      // Análisis personales
  | 'community_studies'      // Estudios comunitarios
  | 'references_links';      // Referencias y enlaces

export interface AnalysisReference {
  type: 'movie' | 'director' | 'book' | 'article' | 'analysis' | 'interview';
  title: string;
  author?: string;
  year?: number;
  url?: string;
  internal_id?: string;              // ID si es contenido interno de SYNAPSIS
}

export interface AnalysisReaction {
  type: 'brilliant' | 'insightful' | 'thought_provoking' | 'agree' | 'disagree' | 'inspiring';
  sender_id: string;                 // avatarId
  added_at: Date;
  note?: string;                     // Nota opcional con la reacción
}

export interface AnalysisComment {
  id: string;
  sender_id: string;                 // avatarId
  content: string;
  reply_to?: string;                 // ID del comentario al que responde
  created_at: Date;
  reactions: BasicReaction[];
}

export interface BasicReaction {
  type: 'like' | 'love' | 'mind_blown';
  sender_id: string;
  added_at: Date;
}

// ===== DASHBOARD PERSONAL =====

export interface PersonalDashboard {
  owner_id: string;                  // avatarId del propietario
  
  // Análisis organizados
  private_analyses: string[];        // IDs de análisis privados
  shared_analyses: string[];         // IDs de análisis compartidos
  draft_analyses: string[];          // IDs de borradores
  
  // Favoritos y guardados
  saved_community_analyses: string[]; // Análisis comunitarios guardados
  favorite_movies: string[];         // Películas favoritas (TMDB IDs)
  watchlist: string[];              // Lista de películas por ver
  
  // Estadísticas personales
  total_analyses_written: number;
  community_impact_score: number;   // Impacto en la comunidad
  areas_of_expertise: string[];     // Áreas donde más analiza
  
  // Configuración
  privacy_settings: DashboardPrivacy;
  notification_preferences: NotificationPrefs;
  
  // Actividad reciente
  recent_activity: DashboardActivity[];
  
  created_at: Date;
  updated_at: Date;
}

export interface DashboardPrivacy {
  show_analysis_count: boolean;
  show_favorite_movies: boolean; 
  allow_collaboration_invites: boolean;
  auto_share_high_quality: boolean;    // Auto-compartir análisis de alta calidad
}

export interface NotificationPrefs {
  new_comments: boolean;
  new_reactions: boolean;
  collaboration_invites: boolean;
  community_highlights: boolean;
}

export interface DashboardActivity {
  type: 'analysis_created' | 'analysis_shared' | 'comment_received' | 'reaction_received';
  description: string;
  related_id?: string;
  timestamp: Date;
}

// ===== BLOQUES DE PELÍCULA =====

export interface MovieBlockStructure {
  movie_id: string;                  // TMDB ID
  movie_title: string;
  
  // Bloques de información oficial (TMDB)
  tmdb_data: {
    artistic_sheet: TMDBArtisticData;
    technical_sheet: TMDBTechnicalData;  
    images_media: TMDBMediaData;
    production_info: TMDBProductionData;
    plot_content: TMDBPlotData;
  };
  
  // Contenido generado por usuarios
  user_generated: {
    personal_analyses: MovieAnalysis[];      // Análisis privados del usuario
    community_studies: MovieAnalysis[];     // Estudios compartidos por la comunidad  
    saved_analyses: string[];               // IDs de análisis guardados
    user_rating?: number;                   // Calificación personal (1-10)
    user_notes?: string;                    // Notas personales
    watch_date?: Date;                      // Cuándo la vio
    rewatch_count?: number;                 // Cuántas veces la ha visto
  };
  
  // Actividad comunitaria
  community_metrics: {
    total_analyses: number;
    average_rating: number;
    most_discussed_themes: string[];
    trending_analyses: string[];           // IDs de análisis en tendencia
  };
  
  created_at: Date;
  updated_at: Date;
}

// ===== DATOS TMDB ESTRUCTURADOS =====

export interface TMDBArtisticData {
  director: string[];
  cast: Array<{
    name: string;
    character: string;
    profile_path?: string;
    order: number;
  }>;
  crew_highlights: Array<{
    job: string;
    name: string;
    department: string;
  }>;
}

export interface TMDBTechnicalData {
  runtime: number;
  budget?: number;
  revenue?: number;
  cinematographer?: string;
  editor?: string;
  composer?: string;
  production_companies: string[];
  filming_locations?: string[];
  aspect_ratio?: string;
  sound_format?: string;
}

export interface TMDBMediaData {
  poster_url?: string;
  backdrop_url?: string;
  trailer_key?: string;              // YouTube key
  additional_images: string[];
  videos: Array<{
    key: string;
    type: string;                    // 'Trailer', 'Teaser', etc.
    site: string;                    // 'YouTube', etc.
  }>;
}

export interface TMDBProductionData {
  status: string;                    // 'Released', 'In Production', etc.
  original_language: string;
  origin_country: string[];
  production_companies: Array<{
    name: string;
    logo_path?: string;
    origin_country: string;
  }>;
  budget?: number;
  revenue?: number;
}

export interface TMDBPlotData {
  overview: string;
  tagline?: string;
  genres: Array<{
    id: number;
    name: string;
  }>;
  keywords: string[];
  themes_suggested: string[];        // Temas extraídos del overview
}

// ===== MODELOS MONGOOSE =====

const AnalysisReferenceSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: ['movie', 'director', 'book', 'article', 'analysis', 'interview'],
    required: true 
  },
  title: { type: String, required: true },
  author: String,
  year: Number,
  url: String,
  internal_id: String
}, { _id: false });

const AnalysisReactionSchema = new mongoose.Schema({
  type: { 
    type: String, 
    enum: ['brilliant', 'insightful', 'thought_provoking', 'agree', 'disagree', 'inspiring'],
    required: true 
  },
  sender_id: { type: String, required: true },
  added_at: { type: Date, default: Date.now },
  note: String
}, { _id: false });

const AnalysisCommentSchema = new mongoose.Schema({
  id: { type: String, required: true },
  sender_id: { type: String, required: true },
  content: { type: String, required: true },
  reply_to: String,
  created_at: { type: Date, default: Date.now },
  reactions: [{
    type: { type: String, enum: ['like', 'love', 'mind_blown'] },
    sender_id: String,
    added_at: { type: Date, default: Date.now }
  }]
}, { _id: false });

const MovieAnalysisSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  movie_id: { type: String, required: true },           // TMDB ID
  movie_title: { type: String, required: true },
  
  // Autoría
  created_by: { type: String, required: true },         // avatarId
  is_private: { type: Boolean, default: true },
  visibility: { 
    type: String, 
    enum: ['private', 'community', 'public'],
    default: 'private'
  },
  
  // Clasificación
  analysis_type: { 
    type: String,
    enum: [
      'technical_analysis', 'thematic_study', 'character_analysis',
      'directorial_vision', 'historical_context', 'comparative_study',
      'personal_reflection', 'academic_essay', 'visual_breakdown',
      'sound_analysis', 'narrative_structure', 'cultural_impact'
    ],
    required: true
  },
  block_category: {
    type: String,
    enum: [
      'artistic_sheet', 'technical_sheet', 'criticism_images',
      'production_box_office', 'content_plot', 'personal_analysis',
      'community_studies', 'references_links'
    ],
    required: true
  },
  
  // Contenido
  title: { type: String, required: true },
  content: { type: String, required: true },
  summary: { type: String, required: true },
  
  // Metadatos
  tags: [String],
  themes_explored: [String],
  technical_aspects: [String],
  depth_score: { type: Number, min: 1, max: 10, default: 5 },
  originality_score: { type: Number, min: 1, max: 10, default: 5 },
  
  // Referencias y colaboración
  inspired_by: String,
  references: [AnalysisReferenceSchema],
  collaboration_invites: [String],
  
  // Métricas
  view_count: { type: Number, default: 0 },
  reaction_count: { type: Number, default: 0 },
  save_count: { type: Number, default: 0 },
  share_count: { type: Number, default: 0 },
  
  // Interacciones
  reactions: [AnalysisReactionSchema],
  comments: [AnalysisCommentSchema],
  
  // Timestamps
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  published_at: Date
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Índices para optimización
MovieAnalysisSchema.index({ movie_id: 1, created_by: 1 });
MovieAnalysisSchema.index({ visibility: 1, movie_id: 1 });
MovieAnalysisSchema.index({ analysis_type: 1, block_category: 1 });
MovieAnalysisSchema.index({ 'reactions.type': 1, reaction_count: -1 });
MovieAnalysisSchema.index({ created_at: -1, visibility: 1 });

// Dashboard Schema
const PersonalDashboardSchema = new mongoose.Schema({
  owner_id: { type: String, required: true, unique: true },
  
  // Análisis organizados
  private_analyses: [String],
  shared_analyses: [String], 
  draft_analyses: [String],
  
  // Favoritos
  saved_community_analyses: [String],
  favorite_movies: [String],
  watchlist: [String],
  
  // Estadísticas
  total_analyses_written: { type: Number, default: 0 },
  community_impact_score: { type: Number, default: 0 },
  areas_of_expertise: [String],
  
  // Configuración
  privacy_settings: {
    show_analysis_count: { type: Boolean, default: true },
    show_favorite_movies: { type: Boolean, default: false },
    allow_collaboration_invites: { type: Boolean, default: true },
    auto_share_high_quality: { type: Boolean, default: false }
  },
  
  notification_preferences: {
    new_comments: { type: Boolean, default: true },
    new_reactions: { type: Boolean, default: true },
    collaboration_invites: { type: Boolean, default: true },
    community_highlights: { type: Boolean, default: true }
  },
  
  // Actividad
  recent_activity: [{
    type: { 
      type: String, 
      enum: ['analysis_created', 'analysis_shared', 'comment_received', 'reaction_received']
    },
    description: String,
    related_id: String,
    timestamp: { type: Date, default: Date.now }
  }],
  
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

PersonalDashboardSchema.index({ owner_id: 1 });

// Export models
export const MovieAnalysisModel = mongoose.model<MovieAnalysis>('MovieAnalysis', MovieAnalysisSchema);
export const PersonalDashboardModel = mongoose.model<PersonalDashboard>('PersonalDashboard', PersonalDashboardSchema);

// ===== UTILIDADES =====

export function generateAnalysisId(): string {
  return `analysis_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function calculateQualityScore(analysis: MovieAnalysis): number {
  // Algoritmo para calcular calidad del análisis
  const lengthScore = Math.min(analysis.content.length / 1000, 1) * 30; // Hasta 30 puntos por longitud
  const depthScore = analysis.depth_score * 7; // Hasta 70 puntos por profundidad  
  const originalityScore = analysis.originality_score * 3; // Hasta 30 puntos por originalidad
  const communityScore = (analysis.reaction_count + analysis.save_count) * 2; // Puntos por interacción
  
  return Math.min(lengthScore + depthScore + originalityScore + communityScore, 100);
}

export function shouldAutoShare(analysis: MovieAnalysis): boolean {
  // Determina si un análisis debería compartirse automáticamente
  const qualityThreshold = 75;
  const minLength = 500;
  
  return (
    calculateQualityScore(analysis) >= qualityThreshold &&
    analysis.content.length >= minLength &&
    analysis.depth_score >= 7
  );
}