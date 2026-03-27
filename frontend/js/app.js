// js/app.js
// 🧠 SYNAPSIS - Aplicación Principal Modular

import { AppConfig } from './config/constants.js';
import { TMDBService } from './services/tmdb-service.js';
import { UserService } from './services/user-service.js';
import { StorageService } from './services/storage-service.js';
import { Router } from './utils/router.js';
import { Header } from './components/shared/header.js';
import { NotificationService } from './services/notification-service.js';

// 📱 Importar vistas principales
import { HomeView } from './components/home/home-view.js';
import { SearchView } from './components/search/search-view.js';
import { LibraryView } from './components/library/library-view.js';
import { MovieDetailView } from './components/movie/movie-detail-view.js';
import { BeingsView } from './components/beings/beings-view.js';
import { ChatView } from './components/chat/chat-view.js';

class SynapsisApp {
    constructor() {
        console.log('🧠 SYNAPSIS - Iniciando aplicación modular...');
        
        // 🔧 Inicializar servicios principales
        this.tmdbService = new TMDBService();
        this.userService = new UserService();
        this.storageService = new StorageService();
        this.notificationService = new NotificationService();
        
        // 🎯 Estado global de la aplicación
        this.state = {
            currentUser: null,
            currentView: 'home',
            currentMovie: null,
            userLibrary: [],
            beings: [],
            rooms: [],
            isConnected: false
        };
        
        // 🌐 Router para navegación
        this.router = new Router();
        
        // 📱 Componentes principales
        this.header = null;
        this.currentViewComponent = null;
        
        // 🚀 Inicializar aplicación
        this.init();
    }

    async init() {
        try {
            console.log('🔧 Configurando aplicación...');
            
            // 🎯 Configurar router
            this.setupRouter();
            
            // 🎨 Crear componentes base
            await this.createBaseComponents();
            
            // 👤 Cargar sesión de usuario
            await this.loadUserSession();
            
            // 🌐 Conectar WebSocket
            this.connectWebSocket();
            
            // 📊 Cargar datos iniciales
            await this.loadInitialData();
            
            // 🎯 Navegar a vista inicial
            this.navigateToInitialView();
            
            // ✅ Ocultar loading
            this.hideInitialLoading();
            
            console.log('✅ SYNAPSIS cargado completamente');
            
        } catch (error) {
            console.error('❌ Error inicializando SYNAPSIS:', error);
            this.showError('Error cargando la aplicación');
        }
    }

    // 🎯 CONFIGURACIÓN DEL ROUTER
    setupRouter() {
        this.router.addRoute('home', () => this.showView('home'));
        this.router.addRoute('search', () => this.showView('search'));
        this.router.addRoute('library', () => this.showView('library'));
        this.router.addRoute('movie/:id', (params) => this.showMovieDetail(params.id));
        this.router.addRoute('beings', () => this.showView('beings'));
        this.router.addRoute('chat', () => this.showView('chat'));
        
        // 🎯 Escuchar cambios de URL
        this.router.listen();
    }

    // 🎨 CREAR COMPONENTES BASE
    async createBaseComponents() {
        // 🎯 Header principal
        this.header = new Header({
            onNavigate: (view) => this.navigateTo(view),
            onLogin: () => this.handleLogin(),
            onLogout: () => this.handleLogout(),
            getCurrentUser: () => this.state.currentUser,
            getConnectionStatus: () => this.state.isConnected
        });
        
        // 🎨 Renderizar header
        const headerContainer = document.getElementById('main-header');
        headerContainer.innerHTML = this.header.render();
        this.header.attachEvents(headerContainer);
    }

    // 🎯 NAVEGACIÓN ENTRE VISTAS
    async showView(viewName) {
        console.log(`🎯 Navegando a vista: ${viewName}`);
        
        // 🧹 Limpiar vista anterior
        if (this.currentViewComponent && this.currentViewComponent.destroy) {
            this.currentViewComponent.destroy();
        }
        
        const contentContainer = document.getElementById('main-content');
        
        try {
            switch (viewName) {
                case 'home':
                    this.currentViewComponent = new HomeView({
                        onNavigate: (view) => this.navigateTo(view),
                        getSystemStatus: () => this.getSystemStatus()
                    });
                    break;
                    
                case 'search':
                    this.currentViewComponent = new SearchView({
                        tmdbService: this.tmdbService,
                        onMovieSelect: (movie) => this.handleMovieSelect(movie),
                        onMovieAdd: (movie) => this.handleMovieAdd(movie)
                    });
                    break;
                    
                case 'library':
                    this.currentViewComponent = new LibraryView({
                        library: this.state.userLibrary,
                        onMovieSelect: (movie) => this.showMovieDetail(movie.id),
                        onMovieRemove: (movie) => this.handleMovieRemove(movie),
                        onNavigateToSearch: () => this.navigateTo('search')
                    });
                    break;
                    
                case 'beings':
                    this.currentViewComponent = new BeingsView({
                        beings: this.state.beings,
                        isLoading: false
                    });
                    break;
                    
                case 'chat':
                    this.currentViewComponent = new ChatView({
                        rooms: this.state.rooms,
                        currentUser: this.state.currentUser,
                        onLogin: () => this.handleLogin()
                    });
                    break;
                    
                default:
                    throw new Error(`Vista desconocida: ${viewName}`);
            }
            
            // 🎨 Renderizar nueva vista
            contentContainer.innerHTML = this.currentViewComponent.render();
            this.currentViewComponent.attachEvents(contentContainer);
            
            // 📊 Actualizar estado
            this.state.currentView = viewName;
            
            // 🎯 Actualizar header
            this.header.updateActiveView(viewName);
            
        } catch (error) {
            console.error(`❌ Error cargando vista ${viewName}:`, error);
            this.showError(`Error cargando la vista ${viewName}`);
        }
    }

    // 🎬 MOSTRAR DETALLE DE PELÍCULA
    async showMovieDetail(movieId) {
        console.log(`🎬 Mostrando detalle de película: ${movieId}`);
        
        try {
            // 🔍 Buscar película en biblioteca o cargar desde TMDB
            let movie = this.state.userLibrary.find(m => m.id == movieId);
            
            if (!movie) {
                console.log('🔄 Cargando detalles desde TMDB...');
                movie = await this.tmdbService.getMovieDetails(movieId);
            }
            
            if (!movie) {
                throw new Error('Película no encontrada');
            }
            
            // 🎯 Actualizar estado
            this.state.currentMovie = movie;
            
            // 🎨 Crear vista de detalle
            this.currentViewComponent = new MovieDetailView({
                movie: movie,
                onBack: () => this.navigateBack(),
                onAnalysisCreate: (analysis) => this.handleAnalysisCreate(analysis),
                tmdbService: this.tmdbService
            });
            
            // 🎨 Renderizar
            const contentContainer = document.getElementById('main-content');
            contentContainer.innerHTML = this.currentViewComponent.render();
            this.currentViewComponent.attachEvents(contentContainer);
            
            // 📊 Actualizar estado
            this.state.currentView = 'movieDetail';
            
        } catch (error) {
            console.error('❌ Error cargando detalle de película:', error);
            this.showError('Error cargando los detalles de la película');
            this.navigateTo('library');
        }
    }

    // 🎬 MANEJO DE PELÍCULAS
    async handleMovieSelect(movie) {
        console.log('🎬 Película seleccionada para ver detalles:', movie.title);
        this.navigateTo(`movie/${movie.id}`);
    }

    async handleMovieAdd(movie) {
        console.log('➕ Agregando película a biblioteca:', movie.title);
        
        if (!this.state.currentUser) {
            this.notificationService.show('⚠️ Debes conectarte para guardar películas', 'warning');
            return;
        }

        try {
            // 🔍 Obtener detalles completos
            const fullMovie = await this.tmdbService.getMovieDetails(movie.id);
            
            // 💾 Guardar en biblioteca
            await this.storageService.saveMovieToLibrary(this.state.currentUser.id, fullMovie);
            
            // 📊 Actualizar estado local
            if (!this.state.userLibrary.find(m => m.id === fullMovie.id)) {
                this.state.userLibrary.push(fullMovie);
            }
            
            // ✅ Notificar éxito
            this.notificationService.show(`✅ "${movie.title}" agregada a tu cinemateca`, 'success');
            
        } catch (error) {
            console.error('❌ Error agregando película:', error);
            this.notificationService.show('❌ Error agregando la película', 'error');
        }
    }

    async handleMovieRemove(movie) {
        console.log('🗑️ Eliminando película de biblioteca:', movie.title);
        
        // 🔔 Confirmar eliminación
        const confirmed = confirm(`¿Eliminar "${movie.title}" de tu cinemateca?`);
        if (!confirmed) return;

        try {
            // 🗑️ Eliminar del storage
            await this.storageService.removeMovieFromLibrary(this.state.currentUser.id, movie.id);
            
            // 📊 Actualizar estado local
            this.state.userLibrary = this.state.userLibrary.filter(m => m.id !== movie.id);
            
            // 🔄 Refrescar vista si estamos en biblioteca
            if (this.state.currentView === 'library' && this.currentViewComponent.refresh) {
                this.currentViewComponent.refresh(this.state.userLibrary);
            }
            
            // ✅ Notificar éxito
            this.notificationService.show(`🗑️ "${movie.title}" eliminada de tu cinemateca`, 'info');
            
        } catch (error) {
            console.error('❌ Error eliminando película:', error);
            this.notificationService.show('❌ Error eliminando la película', 'error');
        }
    }

    // 📝 MANEJO DE ANÁLISIS
    async handleAnalysisCreate(analysis) {
        console.log('📝 Creando análisis:', analysis.title);
        
        try {
            // 💾 Guardar análisis
            await this.storageService.saveAnalysis(this.state.currentUser.id, analysis);
            
            // ✅ Notificar éxito
            this.notificationService.show(`✅ Análisis "${analysis.title}" guardado`, 'success');
            
        } catch (error) {
            console.error('❌ Error guardando análisis:', error);
            this.notificationService.show('❌ Error guardando el análisis', 'error');
        }
    }

    // 👤 MANEJO DE USUARIOS
    async handleLogin() {
        try {
            const user = await this.userService.login();
            this.state.currentUser = user;
            
            // 📚 Cargar biblioteca del usuario
            await this.loadUserLibrary();
            
            // 🎯 Actualizar header
            this.header.updateUser(user);
            
            // ✅ Notificar éxito
            this.notificationService.show(`👋 Bienvenido, ${user.name}!`, 'success');
            
        } catch (error) {
            console.error('❌ Error en login:', error);
            this.notificationService.show('❌ Error al conectar', 'error');
        }
    }

    async handleLogout() {
        try {
            await this.userService.logout();
            this.state.currentUser = null;
            this.state.userLibrary = [];
            
            // 🎯 Actualizar header
            this.header.updateUser(null);
            
            // 🏠 Navegar a home
            this.navigateTo('home');
            
            // ✅ Notificar éxito
            this.notificationService.show('👋 Sesión cerrada', 'info');
            
        } catch (error) {
            console.error('❌ Error en logout:', error);
        }
    }

    // 📊 CARGA DE DATOS
    async loadUserSession() {
        try {
            const user = await this.userService.getCurrentUser();
            if (user) {
                this.state.currentUser = user;
                await this.loadUserLibrary();
            }
        } catch (error) {
            console.warn('⚠️ No hay sesión de usuario guardada');
        }
    }

    async loadUserLibrary() {
        if (!this.state.currentUser) return;
        
        try {
            const library = await this.storageService.getUserLibrary(this.state.currentUser.id);
            this.state.userLibrary = library || [];
            console.log(`📚 Biblioteca cargada: ${this.state.userLibrary.length} películas`);
        } catch (error) {
            console.error('❌ Error cargando biblioteca:', error);
        }
    }

    async loadInitialData() {
        try {
            // 📊 Cargar datos del sistema si están disponibles
            const [beings, rooms] = await Promise.allSettled([
                this.loadBeings(),
                this.loadRooms()
            ]);
            
            console.log('📊 Datos iniciales cargados');
        } catch (error) {
            console.warn('⚠️ Algunos datos no pudieron cargarse:', error);
        }
    }

    async loadBeings() {
        try {
            // 🤝 Intentar cargar desde backend
            const response = await axios.get(`${AppConfig.BACKEND_URL}/api/beings`);
            this.state.beings = response.data.beings || [];
        } catch (error) {
            console.warn('⚠️ Backend no disponible, usando datos simulados');
            // 📝 Cargar datos simulados
            const { mockBeings } = await import('./data/mock-beings.js');
            this.state.beings = mockBeings;
        }
    }

    async loadRooms() {
        try {
            // 🤝 Intentar cargar desde backend
            const response = await axios.get(`${AppConfig.BACKEND_URL}/api/rooms`);
            this.state.rooms = response.data.rooms || [];
        } catch (error) {
            console.warn('⚠️ Backend no disponible, usando datos simulados');
            // 📝 Cargar datos simulados
            const { mockRooms } = await import('./data/mock-rooms.js');
            this.state.rooms = mockRooms;
        }
    }

    // 🌐 WEBSOCKET
    connectWebSocket() {
        try {
            this.socket = io(AppConfig.BACKEND_URL);
            
            this.socket.on('connect', () => {
                this.state.isConnected = true;
                this.header.updateConnectionStatus(true);
                console.log('🔌 Conectado a SYNAPSIS WebSocket');
            });
            
            this.socket.on('disconnect', () => {
                this.state.isConnected = false;
                this.header.updateConnectionStatus(false);
                console.log('📡 Desconectado de SYNAPSIS WebSocket');
            });
            
            // 📝 Eventos de análisis
            this.socket.on('new_analysis_notification', (data) => {
                this.notificationService.show(`📝 Nuevo análisis: ${data.title}`, 'info');
            });
            
        } catch (error) {
            console.warn('⚠️ WebSocket no disponible:', error);
        }
    }

    // 🛠️ UTILIDADES
    navigateTo(view) {
        this.router.navigate(view);
    }

    navigateToInitialView() {
        const currentHash = window.location.hash.slice(1) || 'home';
        this.router.navigate(currentHash);
    }

    navigateBack() {
        window.history.back();
    }

    getSystemStatus() {
        return {
            beings_count: this.state.beings.length,
            ai_collaborators: 4,
            active_rooms: this.state.rooms.length,
            movies_count: this.state.userLibrary.length,
            philosophy: "Seres conscientes anónimos colaborando en la búsqueda del conocimiento"
        };
    }

    hideInitialLoading() {
        const loading = document.getElementById('initial-loading');
        if (loading) {
            loading.style.display = 'none';
        }
    }

    showError(message) {
        this.notificationService.show(message, 'error');
    }
}

// 🚀 INICIALIZAR APLICACIÓN CUANDO EL DOM ESTÉ LISTO
document.addEventListener('DOMContentLoaded', () => {
    window.synapsisApp = new SynapsisApp();
});

// 🌐 Hacer disponible globalmente para debugging
window.SynapsisApp = SynapsisApp;