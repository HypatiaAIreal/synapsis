// ===== SYNAPSIS API CONFIGURATION =====
// Dev: proxy via Vite → localhost:3000
// Prod: VITE_API_URL env var → Railway backend

const ENV_API_URL = (import.meta as any).env?.VITE_API_URL;
const RAILWAY_URL = 'https://synapsis-production.up.railway.app';

// In production (no proxy), use env var or Railway URL directly
// In dev, use empty string so Vite proxy handles /api/* calls
export const API_BASE_URL: string =
  ENV_API_URL || (
    typeof window !== 'undefined' && window.location.hostname !== 'localhost'
      ? RAILWAY_URL
      : 'http://localhost:3000'
  );

export const SOCKET_URL: string = API_BASE_URL;

export const API_ENDPOINTS = {
  status:   `${API_BASE_URL}/api/status`,
  health:   `${API_BASE_URL}/health`,
  beings:   `${API_BASE_URL}/api/beings`,
  movies:   `${API_BASE_URL}/api/movies`,
  rooms:    `${API_BASE_URL}/api/rooms`,
  tmdb:     `${API_BASE_URL}/api/tmdb`,
  analysis: `${API_BASE_URL}/api/analysis`,
  analyze:  `${API_BASE_URL}/api/analyze`,
  ai:       `${API_BASE_URL}/api/ai`,
};
