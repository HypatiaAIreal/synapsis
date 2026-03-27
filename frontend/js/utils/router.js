// js/utils/router.js
// 🧭 Router simple para navegación SPA

export class Router {
    constructor() {
        this.routes = new Map();
        this.currentRoute = null;
        this.basePath = '';
    }

    // ➕ Agregar ruta
    addRoute(path, handler) {
        this.routes.set(path, handler);
        console.log(`🛣️ Ruta registrada: ${path}`);
    }

    // 🎯 Navegar a ruta
    navigate(path, params = {}) {
        // 🔄 Actualizar URL sin recargar página
        const fullPath = this.basePath + path;
        window.history.pushState(params, '', `#${path}`);
        
        // 🎯 Ejecutar handler
        this.handleRoute(path, params);
    }

    // 🎯 Manejar ruta
    handleRoute(path, params = {}) {
        console.log(`🧭 Navegando a: ${path}`);
        
        // 🔍 Buscar ruta exacta primero
        if (this.routes.has(path)) {
            this.currentRoute = path;
            this.routes.get(path)(params);
            return;
        }

        // 🔍 Buscar rutas con parámetros
        for (const [route, handler] of this.routes) {
            const routeParams = this.matchRoute(route, path);
            if (routeParams) {
                this.currentRoute = route;
                handler(routeParams);
                return;
            }
        }

        // ❌ Ruta no encontrada
        console.warn(`⚠️ Ruta no encontrada: ${path}`);
        this.navigate('home');
    }

    // 🎯 Hacer match de ruta con parámetros
    matchRoute(route, path) {
        const routeParts = route.split('/');
        const pathParts = path.split('/');

        if (routeParts.length !== pathParts.length) {
            return null;
        }

        const params = {};
        for (let i = 0; i < routeParts.length; i++) {
            const routePart = routeParts[i];
            const pathPart = pathParts[i];

            if (routePart.startsWith(':')) {
                // Es un parámetro
                const paramName = routePart.slice(1);
                params[paramName] = pathPart;
            } else if (routePart !== pathPart) {
                // No coincide
                return null;
            }
        }

        return params;
    }

    // 👂 Escuchar cambios de URL
    listen() {
        // 🎯 Manejar botones atrás/adelante del navegador
        window.addEventListener('popstate', (event) => {
            const path = window.location.hash.slice(1) || 'home';
            this.handleRoute(path, event.state || {});
        });

        // 🎯 Manejar ruta inicial
        const initialPath = window.location.hash.slice(1) || 'home';
        this.handleRoute(initialPath);
    }

    // 🔄 Obtener ruta actual
    getCurrentRoute() {
        return this.currentRoute;
    }

    // 🔙 Ir atrás
    back() {
        window.history.back();
    }

    // ⏭️ Ir adelante  
    forward() {
        window.history.forward();
    }
}

// ================================================================
// js/utils/debounce.js
// ⏱️ Función debounce para optimizar búsquedas

export function debounce(func, wait, immediate = false) {
    let timeout;
    
    return function executedFunction(...args) {
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(this, args);
    };
}

// ================================================================
// js/utils/date-utils.js
// 📅 Utilidades de fechas

export class DateUtils {
    // 📅 Formatear fecha para mostrar
    static formatDate(dateString) {
        if (!dateString) return 'Sin fecha';
        
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // 📅 Obtener solo el año
    static getYear(dateString) {
        if (!dateString) return 'N/A';
        return new Date(dateString).getFullYear();
    }

    // ⏰ Formatear tiempo relativo
    static getRelativeTime(dateString) {
        if (!dateString) return 'Desconocido';
        
        const date = new Date(dateString);
        const now = new Date();
        const diff = now.getTime() - date.getTime();
        
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        const months = Math.floor(days / 30);
        const years = Math.floor(months / 12);
        
        if (years > 0) return `Hace ${years} año${years > 1 ? 's' : ''}`;
        if (months > 0) return `Hace ${months} mes${months > 1 ? 'es' : ''}`;
        if (days > 0) return `Hace ${days} día${days > 1 ? 's' : ''}`;
        if (hours > 0) return `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
        if (minutes > 0) return `Hace ${minutes} minuto${minutes > 1 ? 's' : ''}`;
        return 'Ahora mismo';
    }

    // 📅 Verificar si es fecha válida
    static isValidDate(dateString) {
        const date = new Date(dateString);
        return date instanceof Date && !isNaN(date);
    }
}

// ================================================================
// js/utils/image-utils.js
// 🖼️ Utilidades de imágenes

import { AppConfig } from '../config/constants.js';

export class ImageUtils {
    // 🖼️ Obtener URL del poster
    static getPosterUrl(posterPath, size = 'w500') {
        if (!posterPath) return null;
        
        const baseUrl = size === 'large' ? AppConfig.TMDB.IMAGE_BASE_LARGE : 
                       size === 'small' ? AppConfig.TMDB.IMAGE_BASE_SMALL : 
                       AppConfig.TMDB.IMAGE_BASE;
        return `${baseUrl}${posterPath}`;
    }

    // 🖼️ Obtener URL del backdrop
    static getBackdropUrl(backdropPath, size = 'large') {
        if (!backdropPath) return null;
        
        const baseUrl = size === 'large' ? 'https://image.tmdb.org/t/p/w1920' : 
                       'https://image.tmdb.org/t/p/w1280';
        return `${baseUrl}${backdropPath}`;
    }

    // 🖼️ Imagen placeholder
    static getPlaceholderUrl(width = 500, height = 750, text = 'Sin Poster') {
        return `https://placehold.co/${width}x${height}/1e293b/64748b?text=${encodeURIComponent(text)}`;
    }

    // 🖼️ Manejar error de imagen
    static handleImageError(img, fallbackText = 'Error Imagen') {
        img.onerror = null; // Prevenir loop infinito
        img.src = this.getPlaceholderUrl(500, 750, fallbackText);
    }

    // 🖼️ Crear elemento imagen con fallback
    static createImageWithFallback(src, alt, className = '', fallbackText = 'Sin Imagen') {
        const img = document.createElement('img');
        img.src = src || this.getPlaceholderUrl(500, 750, fallbackText);
        img.alt = alt;
        img.className = className;
        
        if (src) {
            img.onerror = () => this.handleImageError(img, fallbackText);
        }
        
        return img;
    }

    // 🎨 Obtener gradiente de avatar
    static getAvatarGradient(seed) {
        const gradients = [
            'from-purple-500 to-pink-500',
            'from-blue-500 to-cyan-500',
            'from-emerald-500 to-teal-500',
            'from-yellow-500 to-orange-500',
            'from-red-500 to-pink-500',
            'from-indigo-500 to-purple-500',
            'from-green-500 to-emerald-500',
            'from-gray-500 to-slate-500'
        ];
        
        const index = seed ? seed.length % gradients.length : 0;
        return gradients[index];
    }
}

// ================================================================
// js/utils/validation.js
// ✅ Utilidades de validación

export class ValidationUtils {
    // ✅ Validar query de búsqueda
    static validateSearchQuery(query) {
        if (!query || typeof query !== 'string') {
            return { valid: false, message: 'Query debe ser un string válido' };
        }
        
        const trimmed = query.trim();
        if (trimmed.length < 2) {
            return { valid: false, message: 'Query debe tener al menos 2 caracteres' };
        }
        
        if (trimmed.length > 100) {
            return { valid: false, message: 'Query no puede exceder 100 caracteres' };
        }
        
        return { valid: true, query: trimmed };
    }

    // ✅ Validar título de análisis
    static validateAnalysisTitle(title) {
        if (!title || typeof title !== 'string') {
            return { valid: false, message: 'Título es requerido' };
        }
        
        const trimmed = title.trim();
        if (trimmed.length < 5) {
            return { valid: false, message: 'Título debe tener al menos 5 caracteres' };
        }
        
        if (trimmed.length > 200) {
            return { valid: false, message: 'Título no puede exceder 200 caracteres' };
        }
        
        return { valid: true, title: trimmed };
    }

    // ✅ Validar contenido de análisis
    static validateAnalysisContent(content) {
        if (!content || typeof content !== 'string') {
            return { valid: false, message: 'Contenido es requerido' };
        }
        
        const trimmed = content.trim();
        if (trimmed.length < 50) {
            return { valid: false, message: 'Contenido debe tener al menos 50 caracteres' };
        }
        
        if (trimmed.length > AppConfig.SYSTEM.MAX_ANALYSIS_LENGTH) {
            return { valid: false, message: `Contenido no puede exceder ${AppConfig.SYSTEM.MAX_ANALYSIS_LENGTH} caracteres` };
        }
        
        return { valid: true, content: trimmed };
    }

    // ✅ Validar ID de película
    static validateMovieId(movieId) {
        const id = parseInt(movieId);
        if (isNaN(id) || id <= 0) {
            return { valid: false, message: 'ID de película inválido' };
        }
        
        return { valid: true, id };
    }

    // ✅ Validar email (básico)
    static validateEmail(email) {
        if (!email || typeof email !== 'string') {
            return { valid: false, message: 'Email es requerido' };
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return { valid: false, message: 'Email no tiene formato válido' };
        }
        
        return { valid: true, email: email.toLowerCase() };
    }

    // ✅ Sanitizar HTML básico
    static sanitizeHtml(str) {
        if (!str || typeof str !== 'string') return '';
        
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    // ✅ Validar privacidad de análisis
    static validatePrivacyLevel(privacy) {
        const validLevels = ['private', 'anonymous', 'public'];
        if (!validLevels.includes(privacy)) {
            return { valid: false, message: 'Nivel de privacidad inválido' };
        }
        
        return { valid: true, privacy };
    }
}