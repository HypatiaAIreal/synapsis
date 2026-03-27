// ===== SYNAPSIS API CONFIGURATION =====
// Centralizes all API/socket URLs for dev and production

export const API_BASE_URL: string =
  (import.meta as any).env?.VITE_API_URL || 'http://localhost:3000';

export const SOCKET_URL: string = API_BASE_URL;

export const API_ENDPOINTS = {
  status:    `${API_BASE_URL}/api/status`,
  health:    `${API_BASE_URL}/health`,
  beings:    `${API_BASE_URL}/api/beings`,
  movies:    `${API_BASE_URL}/api/movies`,
  rooms:     `${API_BASE_URL}/api/rooms`,
  tmdb:      `${API_BASE_URL}/api/tmdb`,
  analysis:  `${API_BASE_URL}/api/analysis`,
  analyze:   `${API_BASE_URL}/api/analyze`,
  ai:        `${API_BASE_URL}/api/ai`,
};
