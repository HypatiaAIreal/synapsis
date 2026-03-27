// Tipos compartidos para SYNAPSIS

export interface Being {
  avatarId: string;
  avatarName: string;
  expertise: Array<{
    name: string;
    expertise_level: string;
    specializations: string[];
  }>;
  reputation: {
    overall_score: number;
    contribution_count: number;
  };
  lastActive?: string; // Opcional para compatibilidad entre componentes
}

export interface Movie {
  id: string;
  title: string;
  director: string[];
  year: number;
  genre: string[];
  poster_url?: string;
  plot_summary: string;
}

export interface ChatRoom {
  id: string;
  name: string;
  description: string;
  participants: string[];
  message_count: number;
  theme: string;
}

export interface SystemStatus {
  system: string;
  version: string;
  philosophy: string;
  beings_count: number;
  ai_collaborators: number;
  active_rooms: number;
  initialized: boolean;
}