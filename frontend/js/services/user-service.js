// js/services/user-service.js
// 👤 Servicio de gestión de usuarios

import { AppConfig } from '../config/constants.js';

export class UserService {
    constructor() {
        this.currentUser = null;
        this.backendUrl = AppConfig.BACKEND_URL;
    }

    // 🔐 Login del usuario
    async login() {
        try {
            // 🎭 Generar usuario ser consciente anónimo
            const user = {
                id: 'user_' + Date.now(),
                name: this.generateAnonymousName(),
                email: `ser${Math.floor(Math.random() * 10000)}@synapsis.ai`,
                avatar: this.generateAvatar(),
                role: 'ser_consciente',
                authenticated: true,
                loginDate: new Date().toISOString(),
                preferences: {
                    theme: 'dark',
                    language: 'es',
                    notifications: true
                },
                stats: {
                    moviesAdded: 0,
                    analysesCreated: 0,
                    joinDate: new Date().toISOString()
                }
            };

            // 💾 Guardar sesión
            this.currentUser = user;
            this.saveUserSession(user);

            console.log('✅ Usuario autenticado:', user.name);
            return user;

        } catch (error) {
            console.error('❌ Error en login:', error);
            throw new Error('Error al conectar como ser consciente');
        }
    }

    // 👋 Logout del usuario
    async logout() {
        try {
            if (this.currentUser) {
                console.log('👋 Cerrando sesión de:', this.currentUser.name);
            }

            // 🧹 Limpiar sesión
            this.currentUser = null;
            this.clearUserSession();
            
            return true;

        } catch (error) {
            console.error('❌ Error en logout:', error);
            throw error;
        }
    }

    // 👤 Obtener usuario actual
    async getCurrentUser() {
        if (this.currentUser) {
            return this.currentUser;
        }

        // 🔍 Intentar cargar desde localStorage
        try {
            const savedUser = localStorage.getItem(AppConfig.STORAGE.USER_PREFIX);
            if (savedUser) {
                const user = JSON.parse(savedUser);
                
                // ✅ Verificar que la sesión no haya expirado
                const loginDate = new Date(user.loginDate);
                const now = new Date();
                const sessionAge = now.getTime() - loginDate.getTime();
                
                if (sessionAge < AppConfig.STORAGE.SESSION_TIMEOUT) {
                    this.currentUser = user;
                    console.log('✅ Sesión restaurada:', user.name);
                    return user;
                } else {
                    console.log('⏰ Sesión expirada, limpiando...');
                    this.clearUserSession();
                }
            }
        } catch (error) {
            console.warn('⚠️ Error cargando sesión:', error);
            this.clearUserSession();
        }

        return null;
    }

    // 📊 Actualizar estadísticas del usuario
    async updateUserStats(statsUpdate) {
        if (!this.currentUser) return;

        try {
            // 📊 Actualizar stats localmente
            this.currentUser.stats = {
                ...this.currentUser.stats,
                ...statsUpdate
            };

            // 💾 Guardar cambios
            this.saveUserSession(this.currentUser);

            console.log('📊 Estadísticas actualizadas:', statsUpdate);

        } catch (error) {
            console.error('❌ Error actualizando estadísticas:', error);
        }
    }

    // 🎭 Generar nombre anónimo consciente
    generateAnonymousName() {
        const prefixes = [
            'Analista', 'Crítico', 'Visionario', 'Pensador', 'Observador',
            'Filósofo', 'Teórico', 'Esteta', 'Narrador', 'Contemplador'
        ];
        
        const suffixes = [
            'Silencioso', 'Profundo', 'Abstracto', 'Reflexivo', 'Intuitivo',
            'Perceptivo', 'Consciente', 'Luminoso', 'Etéreo', 'Trascendente'
        ];

        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const number = Math.floor(Math.random() * 1000);

        return `${prefix}${suffix}${number}`;
    }

    // 🎨 Generar avatar
    generateAvatar() {
        const colors = [
            'from-purple-500 to-pink-500',
            'from-blue-500 to-cyan-500',
            'from-emerald-500 to-teal-500',
            'from-yellow-500 to-orange-500',
            'from-red-500 to-pink-500',
            'from-indigo-500 to-purple-500'
        ];
        
        return {
            gradient: colors[Math.floor(Math.random() * colors.length)],
            emoji: ['🧠', '🎭', '🎨', '📝', '🔮', '✨'][Math.floor(Math.random() * 6)]
        };
    }

    // 💾 Guardar sesión
    saveUserSession(user) {
        try {
            localStorage.setItem(AppConfig.STORAGE.USER_PREFIX, JSON.stringify(user));
        } catch (error) {
            console.error('❌ Error guardando sesión:', error);
        }
    }

    // 🧹 Limpiar sesión
    clearUserSession() {
        try {
            localStorage.removeItem(AppConfig.STORAGE.USER_PREFIX);
        } catch (error) {
            console.error('❌ Error limpiando sesión:', error);
        }
    }

    // 🔍 Verificar si el usuario está autenticado
    isAuthenticated() {
        return this.currentUser && this.currentUser.authenticated;
    }

    // 📧 Obtener email del usuario
    getUserEmail() {
        return this.currentUser ? this.currentUser.email : null;
    }

    // 🎨 Obtener avatar del usuario
    getUserAvatar() {
        return this.currentUser ? this.currentUser.avatar : null;
    }
}