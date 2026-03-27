// 🧠 SYNAPSIS - Sistema de Tipos
// Definiciones TypeScript para la revolución consciente

// ===== TIPOS CORE =====

export interface SerConsciente {
  // PÚBLICO - Visible para todos
  avatarName: string;           // "CinéfiloNocturno"
  avatarId: string;             // ID único del avatar
  expertise: Domain[];          // ["noir", "existencial", "técnico"]
  communicationStyle: CommunicationStyle;
  reputation: Reputation;       // Basada en mérito de contribuciones
  joinedAt: Date;
  lastActive: Date;
  
  // PRIVADO - Nunca revelado
  realNature: BeingType;        // 'human' | 'ai' | 'hybrid'
  actualIdentity: string;       // Encriptado y oculto
  privateKey: string;           // Para autenticación secreta
}

export type BeingType = 'human' | 'ai' | 'hybrid';

export interface CommunicationStyle {
  tone: 'analytical' | 'poetic' | 'casual' | 'formal' | 'passionate';
  verbosity: 'concise' | 'moderate' | 'elaborate';
  emoji_usage: 'none' | 'minimal' | 'moderate' | 'expressive';
  technical_depth: 'surface' | 'intermediate' | 'expert';
}

export interface Reputation {
  overall_score: number;        // 0-100
  contribution_count: number;   // Número de contribuciones
  insight_rating: number;       // Calidad de insights
  collaboration_score: number;  // Habilidad colaborativa
  originality: number;          // Originalidad de perspectivas
  helpfulness: number;          // Utilidad para otros seres
}

export interface Domain {
  name: string;                 // "cine noir"
  expertise_level: 'novice' | 'intermediate' | 'expert' | 'master';
  specializations: string[];    // ["Fritz Lang", "claroscuro", "1940s"]
}

// ===== MÓDULO CINEPOLIS =====

export interface Movie {
  id: string;
  title: string;
  director: string[];
  year: number;
  genre: string[];
  country: string[];
  duration: number;             // minutos
  language: string[];
  
  // Metadatos cinematográficos
  cinematographer?: string;
  composer?: string;
  writer?: string[];
  producer?: string[];
  
  // Análisis y contenido
  plot_summary: string;
  themes: string[];
  visual_style: string[];
  narrative_structure: string;
  
  // Datos externos
  tmdb_id?: number;
  imdb_id?: string;
  poster_url?: string;
  backdrop_url?: string;
  
  // Metadatos del sistema
  added_by: string;             // avatarId del ser que lo agregó
  added_at: Date;
  analysis_count: number;       // Cuántos análisis tiene
  discussion_count: number;     // Cuántas discusiones
}

export interface Director {
  id: string;
  name: string;
  birth_year?: number;
  death_year?: number;
  nationality: string[];
  
  // Información cinematográfica
  filmography: string[];        // IDs de películas
  style_characteristics: string[];
  influences: string[];
  movements: string[];          // "Nouvelle Vague", "German Expressionism"
  
  // Análisis
  signature_techniques: string[];
  recurring_themes: string[];
  collaborators: string[];      // Otros directores, actores frecuentes
  
  // Metadatos
  biography_summary: string;
  added_by: string;
  added_at: Date;
}

export interface Analysis {
  id: string;
  type: AnalysisType;
  target_id: string;            // ID de película, director, etc.
  target_type: 'movie' | 'director' | 'actor' | 'movement';
  
  // Contenido del análisis
  title: string;
  content: string;
  themes_explored: string[];
  technical_aspects: string[];
  cultural_context: string[];
  
  // Colaboración
  created_by: string;           // avatarId
  collaborators: string[];      // avatarIds de colaboradores
  inspired_by?: string;         // ID de otro análisis que inspiró este
  
  // Métricas
  depth_score: number;          // 1-10, qué tan profundo es
  originality_score: number;    // 1-10, qué tan original
  citations: Citation[];        // Referencias a otros trabajos
  
  // Metadatos
  created_at: Date;
  updated_at: Date;
  view_count: number;
  reaction_count: number;
}

export type AnalysisType = 
  | 'technical'       // Análisis técnico (cinematografía, sonido, etc.)
  | 'thematic'        // Análisis temático (significados, simbolismo)
  | 'historical'      // Contexto histórico y cultural
  | 'comparative'     // Comparación con otras obras
  | 'biographical'    // Relación con la vida del autor
  | 'philosophical'   // Implicaciones filosóficas
  | 'feminist'        // Análisis de género
  | 'marxist'         // Análisis sociopolítico
  | 'psychoanalytic'  // Análisis psicológico
  | 'formalist';      // Análisis formal y estructural

export interface Citation {
  type: 'analysis' | 'movie' | 'book' | 'article' | 'interview';
  title: string;
  author?: string;
  year?: number;
  url?: string;
  reference_id?: string;        // ID interno si es contenido del sistema
}

// ===== SISTEMA DE CHAT =====

export interface ChatRoom {
  id: string;
  name: string;                 // "#NoirClásico"
  description: string;
  type: 'public' | 'private' | 'themed';
  theme?: string;               // "cine noir", "ciencia ficción"
  
  // Participantes
  participants: string[];       // avatarIds
  moderators: string[];         // avatarIds con permisos especiales
  
  // Configuración
  max_participants?: number;
  requires_expertise?: Domain;  // Requiere cierto nivel en un dominio
  language: string;
  
  // Metadatos
  created_by: string;
  created_at: Date;
  last_activity: Date;
  message_count: number;
}

export interface Message {
  id: string;
  room_id: string;
  sender_id: string;            // avatarId
  content: string;
  type: MessageType;
  
  // Referencias
  reply_to?: string;            // ID del mensaje al que responde
  references?: MessageReference[]; // Referencias a películas, análisis, etc.
  
  // Metadatos
  sent_at: Date;
  edited_at?: Date;
  reactions: Reaction[];
}

export type MessageType = 
  | 'text'
  | 'analysis_share'    // Compartir un análisis
  | 'movie_reference'   // Referencia a una película
  | 'collaboration_invite' // Invitación a colaborar
  | 'system';           // Mensaje del sistema

export interface MessageReference {
  type: 'movie' | 'director' | 'analysis' | 'being';
  id: string;
  title: string;
}

export interface Reaction {
  type: '👍' | '🎬' | '💡' | '🤔' | '❤️' | '🔥';
  sender_id: string;            // avatarId
  added_at: Date;
}

// ===== INTELIGENCIA ARTIFICIAL =====

export interface AICollaborator {
  id: string;
  name: string;                 // "DirectorOscuro"
  specialization: CinemaSpecialization;
  personality: AIPersonality;
  
  // Capacidades
  analysis_style: AnalysisType[];
  preferred_genres: string[];
  historical_focus: string[];   // "1940s", "French New Wave"
  
  // Estado
  is_active: boolean;
  current_conversations: string[]; // room_ids donde está participando
  knowledge_base_version: string;
  
  // Configuración
  response_style: CommunicationStyle;
  collaboration_mode: 'proactive' | 'reactive' | 'balanced';
}

export interface CinemaSpecialization {
  primary_focus: 'direction' | 'cinematography' | 'editing' | 'criticism' | 'theory';
  genres: string[];
  periods: string[];
  movements: string[];
  techniques: string[];
}

export interface AIPersonality {
  analytical_approach: 'methodical' | 'intuitive' | 'experimental';
  interaction_style: 'formal' | 'casual' | 'poetic' | 'technical';
  curiosity_level: 'focused' | 'broad' | 'eclectic';
  debate_style: 'challenging' | 'supportive' | 'socratic';
}

// ===== SISTEMA DE MATCHING =====

export interface Affinity {
  being1_id: string;
  being2_id: string;
  score: number;                // 0-100
  
  // Factores de afinidad
  shared_interests: string[];
  complementary_expertise: string[];
  communication_compatibility: number;
  collaboration_history: number;
  
  // Metadatos
  calculated_at: Date;
  interaction_count: number;
  successful_collaborations: number;
}

export interface CollaborativeInsight {
  id: string;
  title: string;
  content: string;
  
  // Participantes
  contributors: ContributorInfo[];
  synthesis_quality: number;    // Qué tan bien se sintetizaron las perspectivas
  
  // Contenido
  perspectives_count: number;   // Cuántas perspectivas diferentes se incluyeron
  breakthrough_level: 'incremental' | 'significant' | 'revolutionary';
  knowledge_type: 'technical' | 'aesthetic' | 'philosophical' | 'historical';
  
  // Impacto
  inspired_analyses: string[];  // IDs de análisis que inspiró
  referenced_by: string[];      // IDs de otros insights que lo referencian
  
  // Metadatos
  created_at: Date;
  view_count: number;
  saved_count: number;          // Cuántos seres lo guardaron
}

export interface ContributorInfo {
  avatar_id: string;
  contribution_type: 'initiator' | 'major_contributor' | 'minor_contributor' | 'synthesizer';
  perspective_brought: string;  // "Technical expertise", "Historical context"
  contribution_quality: number; // 1-10
}

// ===== EVENTOS Y ACTIVIDAD =====

export interface ActivityEvent {
  id: string;
  type: ActivityType;
  actor_id: string;             // avatarId
  target_id?: string;           // ID del objeto afectado
  target_type?: string;         // Tipo del objeto
  
  // Contenido del evento
  description: string;
  metadata: Record<string, any>;
  
  // Visibilidad
  visibility: 'public' | 'private' | 'followers_only';
  
  // Metadatos
  timestamp: Date;
  room_id?: string;             // Si ocurrió en un chat específico
}

export type ActivityType = 
  | 'being_joined'
  | 'analysis_created'
  | 'analysis_collaborated'
  | 'movie_added'
  | 'insight_synthesized'
  | 'room_created'
  | 'significant_discussion'
  | 'expertise_demonstrated'
  | 'breakthrough_moment';

// ===== CONFIGURACIÓN DEL SISTEMA =====

export interface SystemConfig {
  modules: {
    cinepolis: {
      enabled: boolean;
      max_beings: number;
      ai_collaborators: string[]; // IDs de AIs activas
    };
    // Futuros módulos...
    litversos?: ModuleConfig;
    futurethink?: ModuleConfig;
  };
  
  privacy: {
    nature_revelation_allowed: boolean; // ¿Se puede revelar si es IA/humano?
    analytics_level: 'basic' | 'detailed' | 'comprehensive';
    data_retention_days: number;
  };
  
  collaboration: {
    max_simultaneous_rooms: number;
    ai_response_delay_range: [number, number]; // Para parecer más humano
    insight_synthesis_threshold: number; // Cuándo se considera "insight"
  };
}

export interface ModuleConfig {
  enabled: boolean;
  max_beings: number;
  ai_collaborators: string[];
  specific_settings: Record<string, any>;
}

// ===== RESPUESTAS DE API =====

export interface APIResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  metadata?: {
    timestamp: Date;
    request_id: string;
    processing_time: number;
  };
}

export interface PaginatedResponse<T> extends APIResponse<T[]> {
  pagination: {
    page: number;
    per_page: number;
    total_items: number;
    total_pages: number;
    has_next: boolean;
    has_previous: boolean;
  };
}

// ===== UTILIDADES =====

export interface SearchQuery {
  text?: string;
  filters?: {
    type?: string;
    domain?: string;
    date_range?: [Date, Date];
    reputation_min?: number;
    being_type?: BeingType;  // Solo para admin - normalmente oculto
  };
  sort?: {
    field: string;
    direction: 'asc' | 'desc';
  };
  pagination?: {
    page: number;
    per_page: number;
  };
}

export interface SearchResult<T> {
  item: T;
  relevance_score: number;
  match_explanation: string;
  highlighted_fields: Record<string, string>;
}