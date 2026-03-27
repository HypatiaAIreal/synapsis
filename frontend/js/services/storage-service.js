// ================================================================
// js/services/storage-service.js
// 💾 Servicio de almacenamiento unificado

import { AppConfig } from '../config/constants.js';

export class StorageService {
    constructor() {
        this.backendUrl = AppConfig.BACKEND_URL;
    }

    // 🎬 GESTIÓN DE BIBLIOTECA DE PELÍCULAS
    async saveMovieToLibrary(userId, movie) {
        try {
            // 🌐 Intentar guardar en backend primero
            const response = await fetch(`${this.backendUrl}/api/users/${userId}/movies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(movie)
            });

            if (response.ok) {
                console.log('✅ Película guardada en backend');
            } else {
                console.warn('⚠️ Backend no disponible, guardando localmente');
            }
        } catch (error) {
            console.warn('⚠️ Backend no disponible, guardando localmente');
        }

        // 💾 Guardar localmente también (siempre)
        const libraryKey = `${AppConfig.STORAGE.LIBRARY_PREFIX}_${userId}`;
        const currentLibrary = this.getFromLocalStorage(libraryKey) || [];
        
        // 🔍 Evitar duplicados
        if (!currentLibrary.find(m => m.id === movie.id)) {
            currentLibrary.push({
                ...movie,
                added_date: new Date().toISOString()
            });
            this.saveToLocalStorage(libraryKey, currentLibrary);
            console.log('✅ Película guardada localmente');
        }
    }

    async removeMovieFromLibrary(userId, movieId) {
        try {
            // 🌐 Intentar eliminar del backend
            const response = await fetch(`${this.backendUrl}/api/users/${userId}/movies/${movieId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                console.log('✅ Película eliminada del backend');
            }
        } catch (error) {
            console.warn('⚠️ Backend no disponible para eliminación');
        }

        // 💾 Eliminar localmente
        const libraryKey = `${AppConfig.STORAGE.LIBRARY_PREFIX}_${userId}`;
        const currentLibrary = this.getFromLocalStorage(libraryKey) || [];
        const updatedLibrary = currentLibrary.filter(m => m.id != movieId);
        this.saveToLocalStorage(libraryKey, updatedLibrary);
        console.log('✅ Película eliminada localmente');
    }

    async getUserLibrary(userId) {
        try {
            // 🌐 Intentar cargar desde backend
            const response = await fetch(`${this.backendUrl}/api/users/${userId}/movies`);
            if (response.ok) {
                const data = await response.json();
                console.log('✅ Biblioteca cargada desde backend');
                return data.movies || [];
            }
        } catch (error) {
            console.warn('⚠️ Backend no disponible, cargando desde localStorage');
        }

        // 💾 Cargar desde localStorage
        const libraryKey = `${AppConfig.STORAGE.LIBRARY_PREFIX}_${userId}`;
        const library = this.getFromLocalStorage(libraryKey) || [];
        console.log('✅ Biblioteca cargada desde localStorage');
        return library;
    }

    // 📝 GESTIÓN DE ANÁLISIS
    async saveAnalysis(userId, analysis) {
        try {
            // 🌐 Intentar guardar en backend
            const response = await fetch(`${this.backendUrl}/api/analysis`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...analysis,
                    userId,
                    createdAt: new Date().toISOString()
                })
            });

            if (response.ok) {
                console.log('✅ Análisis guardado en backend');
                return await response.json();
            }
        } catch (error) {
            console.warn('⚠️ Backend no disponible para análisis');
        }

        // 💾 Guardar localmente
        const analysisKey = `${AppConfig.STORAGE.ANALYSIS_PREFIX}_${userId}`;
        const currentAnalyses = this.getFromLocalStorage(analysisKey) || [];
        const newAnalysis = {
            ...analysis,
            id: Date.now(),
            userId,
            createdAt: new Date().toISOString()
        };
        currentAnalyses.push(newAnalysis);
        this.saveToLocalStorage(analysisKey, currentAnalyses);
        console.log('✅ Análisis guardado localmente');
        return newAnalysis;
    }

    async getUserAnalyses(userId) {
        try {
            // 🌐 Intentar cargar desde backend
            const response = await fetch(`${this.backendUrl}/api/analysis?userId=${userId}`);
            if (response.ok) {
                const data = await response.json();
                return data.analyses || [];
            }
        } catch (error) {
            console.warn('⚠️ Backend no disponible para análisis');
        }

        // 💾 Cargar desde localStorage  
        const analysisKey = `${AppConfig.STORAGE.ANALYSIS_PREFIX}_${userId}`;
        return this.getFromLocalStorage(analysisKey) || [];
    }

    // 🛠️ UTILIDADES LOCALSTORAGE
    saveToLocalStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (error) {
            console.error('❌ Error guardando en localStorage:', error);
        }
    }

    getFromLocalStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('❌ Error leyendo de localStorage:', error);
            return null;
        }
    }

    removeFromLocalStorage(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('❌ Error eliminando de localStorage:', error);
        }
    }
}