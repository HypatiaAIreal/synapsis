// js/components/movie/movie-detail-view.js
// 🎬 Vista Detallada de Película con Sistema de 8 Bloques

import { TMDBService } from '../../services/tmdb-service.js';
import { UserService } from '../../services/user-service.js';
import { StorageService } from '../../services/storage-service.js';
import { NotificationService } from '../../services/notification-service.js';

export class MovieDetailView {
    constructor() {
        this.tmdbService = new TMDBService();
        this.userService = new UserService();
        this.storageService = new StorageService();
        this.notificationService = new NotificationService();
        
        this.movie = null;
        this.currentBlock = 'artistic';
        this.container = null;
        
        // Estados para análisis
        this.myAnalyses = [];
        this.communityAnalyses = [];
    }
    
    async initialize(movie) {
        console.log('🎬 Inicializando vista detallada para:', movie.title);
        this.movie = movie;
        
        // Si no tenemos detalles completos, cargarlos
        if (!movie.credits || !movie.images) {
            await this.loadCompleteDetails();
        }
        
        await this.loadAnalyses();
    }
    
    async loadCompleteDetails() {
        try {
            const details = await this.tmdbService.getMovieDetails(this.movie.id);
            this.movie = { ...this.movie, ...details };
        } catch (error) {
            console.error('Error cargando detalles completos:', error);
            this.notificationService.show('Error cargando detalles de la película', 'error');
        }
    }
    
    async loadAnalyses() {
        const currentUser = this.userService.getCurrentUser();
        if (!currentUser) return;
        
        // Cargar análisis propios
        try {
            const response = await fetch(`/api/analyses/movie/${this.movie.id}/user/${currentUser.id}`);
            if (response.ok) {
                this.myAnalyses = await response.json();
            }
        } catch (error) {
            // Fallback a localStorage
            const allAnalyses = this.storageService.getUserAnalyses(currentUser.id);
            this.myAnalyses = allAnalyses.filter(a => a.movieId === this.movie.id);
        }
        
        // Cargar análisis comunitarios
        try {
            const response = await fetch(`/api/analyses/movie/${this.movie.id}/community`);
            if (response.ok) {
                this.communityAnalyses = await response.json();
            }
        } catch (error) {
            console.warn('No se pudieron cargar análisis comunitarios');
        }
    }
    
    switchBlock(blockType) {
        console.log('🎯 Cambiando a bloque:', blockType);
        this.currentBlock = blockType;
        this.updateBlockContent();
        this.updateActiveBlock();
    }
    
    updateActiveBlock() {
        this.container.querySelectorAll('.block-nav').forEach(nav => {
            nav.classList.toggle('active', nav.dataset.block === this.currentBlock);
        });
    }
    
    updateBlockContent() {
        const contentContainer = this.container.querySelector('#block-content');
        contentContainer.innerHTML = this.renderBlockContent();
        
        // Si es el bloque de análisis, attachar eventos
        if (this.currentBlock === 'analysis') {
            this.attachAnalysisEvents();
        }
    }
    
    attachAnalysisEvents() {
        // Botón crear análisis
        const createBtn = this.container.querySelector('#create-analysis-btn');
        if (createBtn) {
            createBtn.addEventListener('click', () => {
                window.app.showAnalysisEditor(this.movie);
            });
        }
    }
    
    renderBlockContent() {
        switch (this.currentBlock) {
            case 'artistic':
                return this.renderArtisticBlock();
            case 'technical':
                return this.renderTechnicalBlock();
            case 'visual':
                return this.renderVisualBlock();
            case 'production':
                return this.renderProductionBlock();
            case 'content':
                return this.renderContentBlock();
            case 'analysis':
                return this.renderAnalysisBlock();
            case 'community':
                return this.renderCommunityBlock();
            case 'references':
                return this.renderReferencesBlock();
            default:
                return this.renderArtisticBlock();
        }
    }
    
    renderArtisticBlock() {
        const directors = this.movie.credits?.crew?.filter(p => p.job === 'Director') || [];
        const cast = this.movie.credits?.cast?.slice(0, 10) || [];
        const posterUrl = this.movie.poster_path ? 
            `https://image.tmdb.org/t/p/w500${this.movie.poster_path}` : 
            '/assets/images/no-poster.png';
        
        return `
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h2 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                    <span>🎭</span> Ficha Artística
                </h2>
                
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- Poster -->
                    <div class="lg:col-span-1">
                        <img 
                            src="${posterUrl}" 
                            alt="${this.movie.title}"
                            class="w-full rounded-lg shadow-xl"
                            onerror="this.src='/assets/images/no-poster.png'"
                        >
                    </div>
                    
                    <!-- Información -->
                    <div class="lg:col-span-2 space-y-6">
                        <!-- Título y año -->
                        <div>
                            <h3 class="text-3xl font-bold text-white mb-2">${this.movie.title}</h3>
                            ${this.movie.original_title !== this.movie.title ? `
                                <p class="text-gray-400 mb-1">Título original: ${this.movie.original_title}</p>
                            ` : ''}
                            <p class="text-gray-400">${this.movie.release_date ? new Date(this.movie.release_date).getFullYear() : 'Sin fecha'}</p>
                        </div>
                        
                        <!-- Directores -->
                        ${directors.length > 0 ? `
                            <div>
                                <h4 class="text-lg font-semibold text-purple-300 mb-2">
                                    ${directors.length > 1 ? 'Directores' : 'Director'}
                                </h4>
                                <p class="text-white">${directors.map(d => d.name).join(', ')}</p>
                            </div>
                        ` : ''}
                        
                        <!-- Géneros -->
                        ${this.movie.genres?.length > 0 ? `
                            <div>
                                <h4 class="text-lg font-semibold text-purple-300 mb-2">Géneros</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${this.movie.genres.map(genre => `
                                        <span class="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                                            ${genre.name}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        <!-- Calificación -->
                        <div>
                            <h4 class="text-lg font-semibold text-purple-300 mb-2">Calificación</h4>
                            <div class="flex items-center gap-4">
                                <div class="flex items-center gap-2">
                                    <svg class="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <span class="text-2xl font-bold text-white">
                                        ${this.movie.vote_average?.toFixed(1) || 'N/A'}
                                    </span>
                                    <span class="text-gray-400">/ 10</span>
                                </div>
                                <span class="text-gray-500">
                                    (${this.movie.vote_count?.toLocaleString() || 0} votos)
                                </span>
                            </div>
                        </div>
                        
                        <!-- Sinopsis -->
                        ${this.movie.overview ? `
                            <div>
                                <h4 class="text-lg font-semibold text-purple-300 mb-2">Sinopsis</h4>
                                <p class="text-gray-300 leading-relaxed">${this.movie.overview}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <!-- Reparto principal -->
                ${cast.length > 0 ? `
                    <div class="mt-8">
                        <h4 class="text-lg font-semibold text-purple-300 mb-4">Reparto Principal</h4>
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            ${cast.map(actor => `
                                <div class="text-center">
                                    <div class="text-white font-medium text-sm">${actor.name}</div>
                                    <div class="text-gray-400 text-xs">${actor.character}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    renderTechnicalBlock() {
        const crew = this.movie.credits?.crew || [];
        const cinematographer = crew.find(p => p.job === 'Director of Photography');
        const composer = crew.find(p => p.job === 'Original Music Composer');
        const editor = crew.find(p => p.job === 'Editor');
        
        return `
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h2 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                    <span>⚙️</span> Ficha Técnica
                </h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Información técnica básica -->
                    <div class="space-y-4">
                        <div>
                            <h4 class="text-sm font-medium text-gray-400 mb-1">Duración</h4>
                            <p class="text-lg text-white">
                                ${this.movie.runtime ? `${this.movie.runtime} minutos` : 'No disponible'}
                            </p>
                        </div>
                        
                        <div>
                            <h4 class="text-sm font-medium text-gray-400 mb-1">Idioma Original</h4>
                            <p class="text-lg text-white">
                                ${this.getLanguageName(this.movie.original_language)}
                            </p>
                        </div>
                        
                        <div>
                            <h4 class="text-sm font-medium text-gray-400 mb-1">País de Producción</h4>
                            <p class="text-lg text-white">
                                ${this.movie.production_countries?.map(c => c.name).join(', ') || 'No disponible'}
                            </p>
                        </div>
                        
                        ${this.movie.status ? `
                            <div>
                                <h4 class="text-sm font-medium text-gray-400 mb-1">Estado</h4>
                                <p class="text-lg text-white">${this.getStatusName(this.movie.status)}</p>
                            </div>
                        ` : ''}
                    </div>
                    
                    <!-- Equipo técnico -->
                    <div class="space-y-4">
                        ${cinematographer ? `
                            <div>
                                <h4 class="text-sm font-medium text-gray-400 mb-1">Dirección de Fotografía</h4>
                                <p class="text-lg text-white">${cinematographer.name}</p>
                            </div>
                        ` : ''}
                        
                        ${composer ? `
                            <div>
                                <h4 class="text-sm font-medium text-gray-400 mb-1">Música Original</h4>
                                <p class="text-lg text-white">${composer.name}</p>
                            </div>
                        ` : ''}
                        
                        ${editor ? `
                            <div>
                                <h4 class="text-sm font-medium text-gray-400 mb-1">Montaje</h4>
                                <p class="text-lg text-white">${editor.name}</p>
                            </div>
                        ` : ''}
                    </div>
                </div>
                
                <!-- Compañías de producción -->
                ${this.movie.production_companies?.length > 0 ? `
                    <div class="mt-8">
                        <h4 class="text-lg font-semibold text-purple-300 mb-4">Compañías de Producción</h4>
                        <div class="flex flex-wrap gap-4">
                            ${this.movie.production_companies.map(company => `
                                <div class="bg-gray-900/50 px-4 py-2 rounded-lg">
                                    <p class="text-white">${company.name}</p>
                                    ${company.origin_country ? `
                                        <p class="text-gray-400 text-sm">${company.origin_country}</p>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    renderVisualBlock() {
        const images = this.movie.images || {};
        const posters = images.posters?.slice(0, 6) || [];
        const backdrops = images.backdrops?.slice(0, 6) || [];
        
        return `
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h2 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                    <span>🎨</span> Crítica Visual & Imágenes
                </h2>
                
                <!-- Backdrops -->
                ${backdrops.length > 0 ? `
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold text-purple-300 mb-4">Imágenes de la Película</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            ${backdrops.map(img => `
                                <img 
                                    src="https://image.tmdb.org/t/p/w780${img.file_path}"
                                    alt="Imagen de ${this.movie.title}"
                                    class="rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                    onclick="window.open('https://image.tmdb.org/t/p/original${img.file_path}', '_blank')"
                                >
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                <!-- Posters alternativos -->
                ${posters.length > 1 ? `
                    <div>
                        <h3 class="text-lg font-semibold text-purple-300 mb-4">Posters Alternativos</h3>
                        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            ${posters.slice(1).map(img => `
                                <img 
                                    src="https://image.tmdb.org/t/p/w342${img.file_path}"
                                    alt="Poster de ${this.movie.title}"
                                    class="rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                    onclick="window.open('https://image.tmdb.org/t/p/original${img.file_path}', '_blank')"
                                >
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
                
                ${posters.length === 0 && backdrops.length === 0 ? `
                    <div class="text-center py-12">
                        <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p class="text-gray-400">No hay imágenes adicionales disponibles</p>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    renderProductionBlock() {
        const formatCurrency = (amount) => {
            if (!amount) return 'No disponible';
            return new Intl.NumberFormat('es-ES', {
                style: 'currency',
                currency: 'USD',
                maximumFractionDigits: 0
            }).format(amount);
        };
        
        const roi = this.movie.budget && this.movie.revenue ? 
            ((this.movie.revenue - this.movie.budget) / this.movie.budget * 100).toFixed(1) : null;
        
        return `
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h2 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                    <span>💰</span> Producción & Taquilla
                </h2>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <!-- Presupuesto -->
                    <div class="bg-gray-900/50 rounded-lg p-6 text-center">
                        <div class="text-4xl mb-2">💵</div>
                        <h3 class="text-sm font-medium text-gray-400 mb-2">Presupuesto</h3>
                        <p class="text-2xl font-bold text-white">
                            ${formatCurrency(this.movie.budget)}
                        </p>
                    </div>
                    
                    <!-- Recaudación -->
                    <div class="bg-gray-900/50 rounded-lg p-6 text-center">
                        <div class="text-4xl mb-2">💰</div>
                        <h3 class="text-sm font-medium text-gray-400 mb-2">Recaudación Mundial</h3>
                        <p class="text-2xl font-bold text-white">
                            ${formatCurrency(this.movie.revenue)}
                        </p>
                    </div>
                    
                    <!-- ROI -->
                    ${roi ? `
                        <div class="bg-gray-900/50 rounded-lg p-6 text-center">
                            <div class="text-4xl mb-2">📈</div>
                            <h3 class="text-sm font-medium text-gray-400 mb-2">Retorno de Inversión</h3>
                            <p class="text-2xl font-bold ${roi > 0 ? 'text-green-400' : 'text-red-400'}">
                                ${roi > 0 ? '+' : ''}${roi}%
                            </p>
                        </div>
                    ` : ''}
                </div>
                
                <!-- Fecha de estreno -->
                ${this.movie.release_date ? `
                    <div class="mt-8 text-center">
                        <h3 class="text-lg font-semibold text-purple-300 mb-2">Fecha de Estreno</h3>
                        <p class="text-xl text-white">
                            ${new Date(this.movie.release_date).toLocaleDateString('es-ES', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}
                        </p>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    renderContentBlock() {
        const keywords = this.movie.keywords?.keywords || [];
        
        return `
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h2 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                    <span>📖</span> Contenido & Argumento
                </h2>
                
                <!-- Sinopsis completa -->
                <div class="mb-8">
                    <h3 class="text-lg font-semibold text-purple-300 mb-4">Sinopsis Completa</h3>
                    <p class="text-gray-300 leading-relaxed">
                        ${this.movie.overview || 'No hay sinopsis disponible para esta película.'}
                    </p>
                </div>
                
                <!-- Tagline -->
                ${this.movie.tagline ? `
                    <div class="mb-8 text-center">
                        <p class="text-xl italic text-purple-300">
                            "${this.movie.tagline}"
                        </p>
                    </div>
                ` : ''}
                
                <!-- Palabras clave -->
                ${keywords.length > 0 ? `
                    <div>
                        <h3 class="text-lg font-semibold text-purple-300 mb-4">Temas y Conceptos</h3>
                        <div class="flex flex-wrap gap-2">
                            ${keywords.map(keyword => `
                                <span class="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                                    ${keyword.name}
                                </span>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        `;
    }
    
    renderAnalysisBlock() {
        const currentUser = this.userService.getCurrentUser();
        
        return `
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h2 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                    <span>🧠</span> Mis Análisis
                </h2>
                
                ${!currentUser ? `
                    <div class="text-center py-12">
                        <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <p class="text-gray-400 mb-4">Conectate para escribir análisis</p>
                        <button onclick="window.app.handleLogin()" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            Conectar
                        </button>
                    </div>
                ` : this.myAnalyses.length === 0 ? `
                    <div class="text-center py-12">
                        <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <p class="text-gray-400 mb-4">Aún no has escrito ningún análisis sobre esta película</p>
                        <button 
                            id="create-analysis-btn"
                            class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-medium transition-all glow">
                            ✍️ Escribir Análisis
                        </button>
                    </div>
                ` : `
                    <div class="space-y-4 mb-6">
                        ${this.myAnalyses.map(analysis => `
                            <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                                <h4 class="text-lg font-semibold text-white mb-2">${analysis.title}</h4>
                                <p class="text-gray-400 text-sm mb-2">
                                    ${new Date(analysis.createdAt).toLocaleDateString('es-ES')}
                                </p>
                                <p class="text-gray-300 line-clamp-3">${analysis.content}</p>
                                <button 
                                    onclick="window.app.viewAnalysis('${analysis.id}')"
                                    class="text-purple-400 hover:text-purple-300 text-sm mt-2">
                                    Leer más →
                                </button>
                            </div>
                        `).join('')}
                    </div>
                    <button 
                        id="create-analysis-btn"
                        class="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                        ➕ Escribir Nuevo Análisis
                    </button>
                `}
            </div>
        `;
    }
    
    renderCommunityBlock() {
        return `
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h2 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                    <span>🌍</span> Estudios Comunitarios
                </h2>
                
                ${this.communityAnalyses.length === 0 ? `
                    <div class="text-center py-12">
                        <div class="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <p class="text-gray-400">Aún no hay análisis comunitarios para esta película</p>
                        <p class="text-gray-500 text-sm mt-2">Sé el primero en compartir tu perspectiva</p>
                    </div>
                ` : `
                    <div class="space-y-4">
                        ${this.communityAnalyses.map(analysis => `
                            <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                                <div class="flex items-start justify-between mb-2">
                                    <div>
                                        <h4 class="text-lg font-semibold text-white">${analysis.title}</h4>
                                        <p class="text-purple-300 text-sm">Por ${analysis.authorName}</p>
                                    </div>
                                    <div class="flex items-center gap-2 text-gray-400">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                        </svg>
                                        <span class="text-sm">${analysis.likes || 0}</span>
                                    </div>
                                </div>
                                <p class="text-gray-400 text-sm mb-2">
                                    ${new Date(analysis.createdAt).toLocaleDateString('es-ES')}
                                </p>
                                <p class="text-gray-300 line-clamp-3">${analysis.content}</p>
                                <button 
                                    onclick="window.app.viewCommunityAnalysis('${analysis.id}')"
                                    class="text-purple-400 hover:text-purple-300 text-sm mt-2">
                                    Leer análisis completo →
                                </button>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        `;
    }
    
    renderReferencesBlock() {
        const imdbUrl = this.movie.imdb_id ? 
            `https://www.imdb.com/title/${this.movie.imdb_id}` : null;
        
        return `
            <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
                <h2 class="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                    <span>🔗</span> Referencias & Enlaces
                </h2>
                
                <div class="space-y-4">
                    <!-- Sitio oficial -->
                    ${this.movie.homepage ? `
                        <a href="${this.movie.homepage}" target="_blank" rel="noopener noreferrer" 
                           class="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                            <div class="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </div>
                            <div>
                                <p class="text-white font-medium">Sitio Web Oficial</p>
                                <p class="text-gray-400 text-sm">${this.movie.homepage}</p>
                            </div>
                        </a>
                    ` : ''}
                    
                    <!-- IMDB -->
                    ${imdbUrl ? `
                        <a href="${imdbUrl}" target="_blank" rel="noopener noreferrer" 
                           class="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                            <div class="w-10 h-10 bg-yellow-600 rounded-lg flex items-center justify-center">
                                <span class="text-white font-bold">IMDb</span>
                            </div>
                            <div>
                                <p class="text-white font-medium">Internet Movie Database</p>
                                <p class="text-gray-400 text-sm">Ver en IMDb</p>
                            </div>
                        </a>
                    ` : ''}
                    
                    <!-- TMDB -->
                    <a href="https://www.themoviedb.org/movie/${this.movie.id}" target="_blank" rel="noopener noreferrer" 
                       class="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-700/50 transition-colors">
                        <div class="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                            <span class="text-white font-bold text-xs">TMDB</span>
                        </div>
                        <div>
                            <p class="text-white font-medium">The Movie Database</p>
                            <p class="text-gray-400 text-sm">Ver información completa</p>
                        </div>
                    </a>
                </div>
            </div>
        `;
    }
    
    getLanguageName(code) {
        const languages = {
            'en': 'Inglés',
            'es': 'Español',
            'fr': 'Francés',
            'de': 'Alemán',
            'it': 'Italiano',
            'ja': 'Japonés',
            'ko': 'Coreano',
            'pt': 'Portugués',
            'ru': 'Ruso',
            'zh': 'Chino'
        };
        return languages[code] || code.toUpperCase();
    }
    
    getStatusName(status) {
        const statuses = {
            'Released': 'Estrenada',
            'Post Production': 'Post-producción',
            'In Production': 'En producción',
            'Planned': 'Planeada',
            'Canceled': 'Cancelada'
        };
        return statuses[status] || status;
    }
    
    render() {
        if (!this.movie) {
            return '<div>Cargando película...</div>';
        }
        
        const html = `
            <div class="container mx-auto px-4 py-8">
                <!-- Botón volver -->
                <button 
                    onclick="window.app.navigateTo('library')"
                    class="text-purple-400 hover:text-purple-300 mb-6 flex items-center gap-2 transition-colors">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Volver a Mi Cinemateca
                </button>
                
                <!-- Grid principal -->
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <!-- Navegación de bloques -->
                    <div class="lg:col-span-1">
                        <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 sticky top-24">
                            <h3 class="text-lg font-semibold text-white mb-4">📊 Bloques de Información</h3>
                            <nav class="space-y-2">
                                ${[
                                    { id: 'artistic', icon: '🎭', name: 'Ficha Artística' },
                                    { id: 'technical', icon: '⚙️', name: 'Ficha Técnica' },
                                    { id: 'visual', icon: '🎨', name: 'Crítica & Imágenes' },
                                    { id: 'production', icon: '💰', name: 'Producción & Taquilla' },
                                    { id: 'content', icon: '📖', name: 'Contenido & Argumento' },
                                    { id: 'analysis', icon: '🧠', name: 'Mis Análisis' },
                                    { id: 'community', icon: '🌍', name: 'Estudios Comunitarios' },
                                    { id: 'references', icon: '🔗', name: 'Referencias & Enlaces' }
                                ].map(block => `
                                    <button 
                                        data-block="${block.id}"
                                        onclick="window.app.currentView.switchBlock('${block.id}')"
                                        class="block-nav w-full text-left px-4 py-3 rounded-lg transition-all ${
                                            this.currentBlock === block.id 
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                                                : 'bg-gray-700/50 text-gray-300 hover:bg-gray-600/50'
                                        }">
                                        <span class="mr-2">${block.icon}</span>
                                        ${block.name}
                                    </button>
                                `).join('')}
                            </nav>
                        </div>
                    </div>
                    
                    <!-- Contenido del bloque -->
                    <div class="lg:col-span-3">
                        <div id="block-content">
                            ${this.renderBlockContent()}
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        this.container = document.createElement('div');
        this.container.innerHTML = html;
        
        return this.container;
    }
}