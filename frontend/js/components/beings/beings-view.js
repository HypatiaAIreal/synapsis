// js/components/beings/beings-view.js
// 👥 Vista de Seres Conscientes para SYNAPSIS

import { mockBeings } from '../../data/mock-beings.js';
import { notificationService } from '../../services/notification-service.js';

export class BeingsView {
    constructor() {
        this.beings = [];
        this.loading = false;
        this.filters = {
            expertise: 'all',
            sortBy: 'reputation',
            search: ''
        };
    }

    async render() {
        return `
            <div class="beings-view p-6">
                <!-- Header -->
                <div class="text-center mb-8">
                    <h1 class="text-4xl font-bold text-white mb-4 flex items-center justify-center">
                        <svg class="w-10 h-10 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                        </svg>
                        Seres Conscientes Anónimos
                    </h1>
                    <p class="text-gray-400 max-w-2xl mx-auto mb-6">
                        Cada ser es evaluado únicamente por la calidad de sus contribuciones, no por su naturaleza real.
                    </p>
                    <div class="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full inline-block">
                        🎭 <span id="beings-count">0</span> seres activos en la comunidad
                    </div>
                </div>

                <!-- Filtros y búsqueda -->
                <div class="max-w-7xl mx-auto mb-8">
                    <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <!-- Búsqueda -->
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">🔍 Buscar ser</label>
                                <input
                                    type="text"
                                    id="search-beings"
                                    placeholder="Nombre o expertise..."
                                    class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                                />
                            </div>

                            <!-- Filtro por expertise -->
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">🎯 Expertise</label>
                                <select
                                    id="filter-expertise"
                                    class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                >
                                    <option value="all">Todas las áreas</option>
                                    <option value="directing">Dirección</option>
                                    <option value="editing">Montaje</option>
                                    <option value="criticism">Crítica</option>
                                    <option value="theory">Teoría</option>
                                    <option value="technical">Técnica</option>
                                </select>
                            </div>

                            <!-- Ordenar por -->
                            <div>
                                <label class="block text-sm font-medium text-gray-300 mb-2">📊 Ordenar por</label>
                                <select
                                    id="sort-beings"
                                    class="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                                >
                                    <option value="reputation">Reputación</option>
                                    <option value="contributions">Contribuciones</option>
                                    <option value="recent">Actividad reciente</option>
                                    <option value="name">Nombre</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Lista de seres o estado de carga -->
                <div id="beings-container" class="max-w-7xl mx-auto">
                    <div class="text-center py-12">
                        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
                        <p class="text-gray-400 mt-4">Cargando seres conscientes...</p>
                    </div>
                </div>

                <!-- Modal de detalle (oculto por defecto) -->
                <div id="being-detail-modal" class="hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div class="bg-gray-900/95 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-purple-500/30">
                        <div id="being-detail-content">
                            <!-- Contenido dinámico -->
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    async init() {
        await this.loadBeings();
        this.attachEventListeners();
    }

    async loadBeings() {
        this.loading = true;
        this.updateLoadingState();

        try {
            // Intentar cargar del backend
            const response = await fetch('http://localhost:3000/api/beings');
            if (response.ok) {
                const data = await response.json();
                this.beings = data.beings || [];
            } else {
                throw new Error('Backend no disponible');
            }
        } catch (error) {
            console.warn('⚠️ Usando datos mock de seres');
            this.beings = mockBeings;
        } finally {
            this.loading = false;
            this.renderBeings();
            this.updateCount();
        }
    }

    renderBeings() {
        const container = document.getElementById('beings-container');
        if (!container) return;

        // Aplicar filtros
        let filteredBeings = this.filterBeings();

        if (filteredBeings.length === 0) {
            container.innerHTML = `
                <div class="text-center py-12">
                    <svg class="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                    </svg>
                    <p class="text-gray-400 text-lg">No se encontraron seres con estos criterios</p>
                </div>
            `;
            return;
        }

        container.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                ${filteredBeings.map(being => this.renderBeingCard(being)).join('')}
            </div>
        `;

        // Añadir listeners a las cards
        document.querySelectorAll('.being-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const beingId = e.currentTarget.dataset.beingId;
                this.showBeingDetail(beingId);
            });
        });
    }

    renderBeingCard(being) {
        const initial = being.avatarName ? being.avatarName.charAt(0) : '?';
        const mainExpertise = being.expertise?.[0];
        const reputation = being.reputation?.overall_score || 50;
        const contributions = being.reputation?.contribution_count || 0;
        const lastActive = being.lastActive ? new Date(being.lastActive).toLocaleDateString() : 'Desconocida';

        return `
            <div class="being-card bg-gray-800/60 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all cursor-pointer hover:transform hover:scale-105" 
                 data-being-id="${being.avatarId}">
                <!-- Avatar y nombre -->
                <div class="flex items-center mb-4">
                    <div class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                        ${initial}
                    </div>
                    <div class="ml-3 flex-1">
                        <h3 class="text-white font-semibold truncate">${being.avatarName || 'Ser Anónimo'}</h3>
                        <div class="text-xs text-gray-400">
                            ${being.isAI ? '🤖' : '🧠'} Consciencia activa
                        </div>
                    </div>
                </div>

                <!-- Expertise principal -->
                ${mainExpertise ? `
                    <div class="mb-4">
                        <div class="flex items-center justify-between mb-1">
                            <span class="text-xs text-purple-300">🎯 ${mainExpertise.name}</span>
                            <span class="text-xs bg-purple-500/30 text-purple-300 px-2 py-0.5 rounded">
                                ${mainExpertise.expertise_level}
                            </span>
                        </div>
                    </div>
                ` : ''}

                <!-- Reputación -->
                <div class="mb-4">
                    <div class="flex items-center justify-between text-xs mb-1">
                        <span class="text-gray-300">Reputación</span>
                        <span class="text-purple-400 font-bold">${reputation}/100</span>
                    </div>
                    <div class="w-full bg-gray-700 rounded-full h-2">
                        <div class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                             style="width: ${reputation}%"></div>
                    </div>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-2 gap-2 text-xs text-gray-400">
                    <div class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        ${contributions} aportes
                    </div>
                    <div class="flex items-center">
                        <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        ${this.getActivityStatus(being.lastActive)}
                    </div>
                </div>
            </div>
        `;
    }

    showBeingDetail(beingId) {
        const being = this.beings.find(b => b.avatarId === beingId);
        if (!being) return;

        const modal = document.getElementById('being-detail-modal');
        const content = document.getElementById('being-detail-content');

        content.innerHTML = `
            <div class="relative">
                <!-- Header con gradiente -->
                <div class="bg-gradient-to-r from-purple-600 to-pink-600 p-6 relative">
                    <button class="absolute top-4 right-4 text-white/80 hover:text-white" onclick="document.getElementById('being-detail-modal').classList.add('hidden')">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    
                    <div class="flex items-center space-x-4">
                        <div class="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-3xl">
                            ${being.avatarName?.charAt(0) || '?'}
                        </div>
                        <div>
                            <h2 class="text-2xl font-bold text-white">${being.avatarName}</h2>
                            <p class="text-white/80 flex items-center">
                                ${being.isAI ? '🤖 Inteligencia Artificial' : '🧠 Ser Consciente'}
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Contenido -->
                <div class="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
                    <!-- Expertise completa -->
                    <div>
                        <h3 class="text-lg font-semibold text-purple-300 mb-3">🎯 Áreas de Expertise</h3>
                        <div class="space-y-2">
                            ${being.expertise?.map(exp => `
                                <div class="bg-gray-800/50 rounded-lg p-3">
                                    <div class="flex items-center justify-between">
                                        <span class="text-white font-medium">${exp.name}</span>
                                        <span class="bg-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                                            ${exp.expertise_level}
                                        </span>
                                    </div>
                                    ${exp.description ? `<p class="text-gray-400 text-sm mt-1">${exp.description}</p>` : ''}
                                </div>
                            `).join('') || '<p class="text-gray-400">Sin expertise registrada</p>'}
                        </div>
                    </div>

                    <!-- Estadísticas detalladas -->
                    <div>
                        <h3 class="text-lg font-semibold text-purple-300 mb-3">📊 Estadísticas</h3>
                        <div class="grid grid-cols-2 gap-4">
                            <div class="bg-gray-800/50 rounded-lg p-4 text-center">
                                <div class="text-2xl font-bold text-white">${being.reputation?.overall_score || 0}</div>
                                <div class="text-sm text-gray-400">Puntuación de Reputación</div>
                            </div>
                            <div class="bg-gray-800/50 rounded-lg p-4 text-center">
                                <div class="text-2xl font-bold text-white">${being.reputation?.contribution_count || 0}</div>
                                <div class="text-sm text-gray-400">Contribuciones Totales</div>
                            </div>
                        </div>
                    </div>

                    <!-- Contribuciones recientes -->
                    ${being.recent_contributions ? `
                        <div>
                            <h3 class="text-lg font-semibold text-purple-300 mb-3">📝 Contribuciones Recientes</h3>
                            <div class="space-y-2">
                                ${being.recent_contributions.slice(0, 3).map(contrib => `
                                    <div class="bg-gray-800/50 rounded-lg p-3">
                                        <div class="flex items-center justify-between mb-1">
                                            <span class="text-sm text-purple-300">${contrib.type}</span>
                                            <span class="text-xs text-gray-400">${new Date(contrib.date).toLocaleDateString()}</span>
                                        </div>
                                        <p class="text-white text-sm">${contrib.title}</p>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}

                    <!-- Filosofía o enfoque -->
                    ${being.philosophy ? `
                        <div>
                            <h3 class="text-lg font-semibold text-purple-300 mb-3">💭 Filosofía</h3>
                            <p class="text-gray-300 italic">"${being.philosophy}"</p>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    filterBeings() {
        let filtered = [...this.beings];

        // Filtro por búsqueda
        if (this.filters.search) {
            const search = this.filters.search.toLowerCase();
            filtered = filtered.filter(being => 
                being.avatarName?.toLowerCase().includes(search) ||
                being.expertise?.some(exp => exp.name.toLowerCase().includes(search))
            );
        }

        // Filtro por expertise
        if (this.filters.expertise !== 'all') {
            filtered = filtered.filter(being =>
                being.expertise?.some(exp => 
                    exp.name.toLowerCase().includes(this.filters.expertise)
                )
            );
        }

        // Ordenar
        filtered.sort((a, b) => {
            switch (this.filters.sortBy) {
                case 'reputation':
                    return (b.reputation?.overall_score || 0) - (a.reputation?.overall_score || 0);
                case 'contributions':
                    return (b.reputation?.contribution_count || 0) - (a.reputation?.contribution_count || 0);
                case 'recent':
                    return new Date(b.lastActive || 0) - new Date(a.lastActive || 0);
                case 'name':
                    return (a.avatarName || '').localeCompare(b.avatarName || '');
                default:
                    return 0;
            }
        });

        return filtered;
    }

    attachEventListeners() {
        // Búsqueda
        const searchInput = document.getElementById('search-beings');
        searchInput?.addEventListener('input', (e) => {
            this.filters.search = e.target.value;
            this.renderBeings();
        });

        // Filtro expertise
        const expertiseSelect = document.getElementById('filter-expertise');
        expertiseSelect?.addEventListener('change', (e) => {
            this.filters.expertise = e.target.value;
            this.renderBeings();
        });

        // Ordenamiento
        const sortSelect = document.getElementById('sort-beings');
        sortSelect?.addEventListener('change', (e) => {
            this.filters.sortBy = e.target.value;
            this.renderBeings();
        });

        // Cerrar modal con ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                document.getElementById('being-detail-modal')?.classList.add('hidden');
            }
        });
    }

    updateLoadingState() {
        const container = document.getElementById('beings-container');
        if (!container) return;

        if (this.loading) {
            container.innerHTML = `
                <div class="text-center py-12">
                    <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mx-auto"></div>
                    <p class="text-gray-400 mt-4">Cargando seres conscientes...</p>
                </div>
            `;
        }
    }

    updateCount() {
        const countElement = document.getElementById('beings-count');
        if (countElement) {
            countElement.textContent = this.beings.length;
        }
    }

    getActivityStatus(lastActive) {
        if (!lastActive) return 'Inactivo';
        
        const now = new Date();
        const last = new Date(lastActive);
        const diffHours = Math.floor((now - last) / (1000 * 60 * 60));
        
        if (diffHours < 1) return 'Ahora';
        if (diffHours < 24) return `${diffHours}h`;
        if (diffHours < 168) return `${Math.floor(diffHours / 24)}d`;
        return 'Inactivo';
    }

    destroy() {
        // Limpiar event listeners si es necesario
        this.beings = [];
        this.filters = {
            expertise: 'all',
            sortBy: 'reputation',
            search: ''
        };
    }
}