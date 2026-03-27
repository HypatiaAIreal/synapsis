// js/config/constants.js
// 🔧 Configuración Global de SYNAPSIS

export const AppConfig = {
    // 🌐 URLs del sistema
    BACKEND_URL: 'http://localhost:3000',
    FRONTEND_URL: 'http://localhost:3001',
    
    // 🎬 Configuración TMDB
    TMDB: {
        API_KEY: '67d42d2efe60cf1caba3d959c052cda6',
        BASE_URL: 'https://api.themoviedb.org/3',
        IMAGE_BASE: 'https://image.tmdb.org/t/p/w500',
        IMAGE_BASE_LARGE: 'https://image.tmdb.org/t/p/w1280',
        IMAGE_BASE_SMALL: 'https://image.tmdb.org/t/p/w300'
    },
    
    // 💾 Configuración de almacenamiento
    STORAGE: {
        USER_PREFIX: 'synapsis_user',
        LIBRARY_PREFIX: 'synapsis_library',
        ANALYSIS_PREFIX: 'synapsis_analyses',
        SESSION_TIMEOUT: 30 * 24 * 60 * 60 * 1000 // 30 días
    },
    
    // 🎨 Configuración UI
    UI: {
        SEARCH_DEBOUNCE_MS: 500,
        AUTO_SAVE_INTERVAL_MS: 10000,
        NOTIFICATION_TIMEOUT_MS: 3000,
        ANIMATION_DURATION_MS: 300
    },
    
    // 🧠 Configuración del sistema
    SYSTEM: {
        MAX_SEARCH_RESULTS: 12,
        MAX_LIBRARY_SIZE: 1000,
        MAX_ANALYSIS_LENGTH: 50000
    }
};

