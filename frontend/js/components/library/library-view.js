// js/components/library/library-view.js
// 📚 Vista de Cinemateca Personal SYNAPSIS

import { UserService } from '../../services/user-service.js';
import { TMDBService } from '../../services/tmdb-service.js';
import { StorageService } from '../../services/storage-service.js';
import { NotificationService } from '../../services/notification-service.js';
import { MovieCard } from '../shared/movie-card.js';
import { FilmIcon, FilterIcon, SortIcon, SearchIcon } from '../../utils/icons.js';

export class LibraryView {
    constructor() {
        this.userService = new UserService();
        this.tmdbService = new TMDBService();
        this.storageService = new StorageService();
        this.notificationService = new NotificationService();
        
        this.movies = [];
        this.filteredMovies = [];
        this.currentFilter = 'all';
        this.currentSort = 'date_desc';
        this.searchQuery = '';
        
        this.container = null;
    }
    
    async initialize() {
        console.log('📚 Inicializando vista de cinemateca');
        await this.loadUserLibrary();
    }
    
    async loadUserLibrary() {
        const currentUser = this.userService.getCurrentUser();
        if (!currentUser) {
            this.movies = [];
            this.filteredMovies = [];
            return;
        }
        
        try {
            // Intentar cargar desde backend primero
            const response = await fetch(`/api/users/${currentUser.id}/movies`);
            if (response.ok) {
                this.movies = await response.json();
            } else {
                throw new Error('Backend no disponible');
            }
        } catch (error) {
            console.warn('⚠️ Cargando cinemateca desde localStorage');
            this.movies = this.storageService.getUserMovies(currentUser.id);
        }
        
        this.applyFiltersAndSort();
    }
    
    applyFiltersAndSort() {
        // Aplicar filtros
        this.filteredMovies = this.movies.filter(movie => {
            // Filtro por género
            if (this.currentFilter !== 'all') {
                const hasGenre = movie.genres?.some(g => 
                    g.name.toLowerCase() === this.currentFilter.toLowerCase()
                );
                if (!hasGenre) return false;
            }
            
            // Filtro por búsqueda
            if (this.searchQuery) {
                const query = this.searchQuery.toLowerCase();
                const matchesTitle = movie.title?.toLowerCase().includes(query);
                const matchesOriginal = movie.original_title?.toLowerCase().includes(query);
                const matchesOverview = movie.overview?.toLowerCase().includes(query);
                const matchesDirector = movie.credits?.crew?.some(person => 
                    person.job === 'Director' && 
                    person.name.toLowerCase().includes(query)
                );
                
                if (!matchesTitle && !matchesOriginal && !matchesOverview && !matchesDirector) {
                    return false;
                }
            }
            
            return true;
        });
        
        // Aplicar orden
        this.filteredMovies.sort((a, b) => {
            switch (this.currentSort) {
                case 'date_desc':
                    return new Date(b.added_date || 0) - new Date(a.added_date || 0);
                case 'date_asc':
                    return new Date(a.added_date || 0) - new Date(b.added_date || 0);
                case 'title_asc':
                    return (a.title || '').localeCompare(b.title || '');
                case 'title_desc':
                    return (b.title || '').localeCompare(a.title || '');
                case 'rating_desc':
                    return (b.vote_average || 0) - (a.vote_average || 0);
                case 'rating_asc':
                    return (a.vote_average || 0) - (b.vote_average || 0);
                case 'year_desc':
                    return this.getYear(b) - this.getYear(a);
                case 'year_asc':
                    return this.getYear(a) - this.getYear(b);
                default:
                    return 0;
            }
        });
    }
    
    getYear(movie) {
        return movie.release_date ? new Date(movie.release_date).getFullYear() : 0;
    }
    
    getAllGenres() {
        const genresSet = new Set();
        this.movies.forEach(movie => {
            movie.genres?.forEach(genre => {
                genresSet.add(genre.name);
            });
        });
        return Array.from(genresSet).sort();
    }
    
    async removeMovie(movieId) {
        const confirmed = confirm('¿Seguro que quieres eliminar esta película de tu cinemateca?');
        if (!confirmed) return;
        
        const currentUser = this.userService.getCurrentUser();
        if (!currentUser) return;
        
        try {
            // Intentar eliminar del backend
            const response = await fetch(`/api/users/${currentUser.id}/movies/${movieId}`, {
                method: 'DELETE'
            });
            
            if (!response.ok) {
                throw new Error('Error eliminando del backend');
            }
        } catch (error) {
            console.warn('⚠️ Eliminando solo de localStorage');
        }
        
        // Eliminar de la lista local
        this.movies = this.movies.filter(m => m.id !== movieId);
        this.storageService.removeUserMovie(currentUser.id, movieId);
        
        // Actualizar vista
        this.applyFiltersAndSort();
        this.render();
        
        this.notificationService.show('Película eliminada de tu cinemateca', 'success');
    }
    
    handleSearch(query) {
        this.searchQuery = query;
        this.applyFiltersAndSort();
        this.renderMoviesGrid();
    }
    
    handleFilterChange(filter) {
        this.currentFilter = filter;
        this.applyFiltersAndSort();
        this.renderMoviesGrid();
        this.updateActiveFilter();
    }
    
    handleSortChange(sort) {
        this.currentSort = sort;
        this.applyFiltersAndSort();
        this.renderMoviesGrid();
        this.updateActiveSort();
    }
    
    updateActiveFilter() {
        this.container.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === this.currentFilter);
        });
    }
    
    updateActiveSort() {
        this.container.querySelectorAll('.sort-option').forEach(option => {
            option.classList.toggle('active', option.dataset.sort === this.currentSort);
        });
    }
    
    renderMoviesGrid() {
        const gridContainer = this.container.querySelector('#library-grid');
        
        if (this.filteredMovies.length === 0) {
            gridContainer.innerHTML = this.renderEmptyState();
            return;
        }
        
        gridContainer.innerHTML = `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                ${this.filteredMovies.map(movie => {
                    const movieCard = new MovieCard(movie, {
                        showRemoveButton: true,
                        showDetailsButton: true,
                        onRemove: () => this.removeMovie(movie.id),
                        onDetails: () => {
                            window.app.showMovieDetail(movie);
                        }
                    });
                    return movieCard.render();
                }).join('')}
            </div>
        `;
        
        // Attachar eventos a las tarjetas
        gridContainer.querySelectorAll('.movie-card').forEach((card, index) => {
            const movieCard = new MovieCard(this.filteredMovies[index], {
                showRemoveButton: true,
                showDetailsButton: true,
                onRemove: () => this.removeMovie(this.filteredMovies[index].id),
                onDetails: () => {
                    window.app.showMovieDetail(this.filteredMovies[index]);
                }
            });
            movieCard.attachEvents(card);
        });
    }
    
    renderEmptyState() {
        const currentUser = this.userService.getCurrentUser();
        
        if (!currentUser) {
            return `
                <div class="text-center py-12">
                    <div class="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-2">Conectate para ver tu cinemateca</h3>
                    <p class="text-gray-400 mb-6">Necesitas estar conectado para acceder a tu colección personal</p>
                    <button onclick="window.app.handleLogin()" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                        Conectar
                    </button>
                </div>
            `;
        }
        
        if (this.searchQuery || this.currentFilter !== 'all') {
            return `
                <div class="text-center py-12">
                    <div class="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg class="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 class="text-xl font-semibold text-white mb-2">No se encontraron películas</h3>
                    <p class="text-gray-400 mb-6">Intenta cambiar los filtros o términos de búsqueda</p>
                    <button onclick="window.app.currentView.handleFilterChange('all'); window.app.currentView.handleSearch('')" 
                            class="text-purple-400 hover:text-purple-300 font-medium">
                        Limpiar filtros
                    </button>
                </div>
            `;
        }
        
        return `
            <div class="text-center py-12">
                <div class="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg class="w-10 h-10 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M5 12h14M5 16h14" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Tu cinemateca está vacía</h3>
                <p class="text-gray-400 mb-6">Busca y agrega películas para empezar tu colección personal</p>
                <button onclick="window.app.navigateTo('search')" class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Buscar Películas
                </button>
            </div>
        `;
    }
    
    render() {
        const currentUser = this.userService.getCurrentUser();
        const genres = this.getAllGenres();
        
        const html = `
            <div class="container mx-auto px-4 py-8">
                <!-- Header -->
                <div class="mb-8">
                    <h1 class="text-4xl font-bold text-white mb-2 flex items-center gap-3">
                        <div class="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h18M3 12h18M3 16h18" />
                            </svg>
                        </div>
                        Mi Cinemateca Personal
                    </h1>
                    <p class="text-gray-400">
                        ${currentUser ? `${this.movies.length} películas en tu colección` : 'Conectate para ver tu colección'}
                    </p>
                </div>
                
                <!-- Controles -->
                ${currentUser && this.movies.length > 0 ? `
                    <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mb-8 border border-gray-700">
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <!-- Búsqueda -->
                            <div class="lg:col-span-1">
                                <label class="block text-sm font-medium text-gray-300 mb-2">Buscar en tu colección</label>
                                <div class="relative">
                                    <input 
                                        type="text"
                                        placeholder="Título, director, descripción..."
                                        value="${this.searchQuery}"
                                        onkeyup="window.app.currentView.handleSearch(this.value)"
                                        class="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                                    >
                                    <div class="absolute left-3 top-3.5 text-gray-500">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            <!-- Filtros -->
                            <div class="lg:col-span-1">
                                <label class="block text-sm font-medium text-gray-300 mb-2">Filtrar por género</label>
                                <div class="flex flex-wrap gap-2">
                                    <button 
                                        data-filter="all"
                                        onclick="window.app.currentView.handleFilterChange('all')"
                                        class="filter-btn px-4 py-2 rounded-lg text-sm font-medium transition-all ${this.currentFilter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}">
                                        Todos
                                    </button>
                                    ${genres.slice(0, 4).map(genre => `
                                        <button 
                                            data-filter="${genre.toLowerCase()}"
                                            onclick="window.app.currentView.handleFilterChange('${genre.toLowerCase()}')"
                                            class="filter-btn px-4 py-2 rounded-lg text-sm font-medium transition-all ${this.currentFilter === genre.toLowerCase() ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}">
                                            ${genre}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                            
                            <!-- Ordenar -->
                            <div class="lg:col-span-1">
                                <label class="block text-sm font-medium text-gray-300 mb-2">Ordenar por</label>
                                <select 
                                    onchange="window.app.currentView.handleSortChange(this.value)"
                                    class="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-purple-500 focus:outline-none">
                                    <option value="date_desc" ${this.currentSort === 'date_desc' ? 'selected' : ''}>Más recientes</option>
                                    <option value="date_asc" ${this.currentSort === 'date_asc' ? 'selected' : ''}>Más antiguas</option>
                                    <option value="title_asc" ${this.currentSort === 'title_asc' ? 'selected' : ''}>Título (A-Z)</option>
                                    <option value="title_desc" ${this.currentSort === 'title_desc' ? 'selected' : ''}>Título (Z-A)</option>
                                    <option value="rating_desc" ${this.currentSort === 'rating_desc' ? 'selected' : ''}>Mejor valoradas</option>
                                    <option value="rating_asc" ${this.currentSort === 'rating_asc' ? 'selected' : ''}>Peor valoradas</option>
                                    <option value="year_desc" ${this.currentSort === 'year_desc' ? 'selected' : ''}>Año (más nuevas)</option>
                                    <option value="year_asc" ${this.currentSort === 'year_asc' ? 'selected' : ''}>Año (más antiguas)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                ` : ''}
                
                <!-- Grid de películas -->
                <div id="library-grid">
                    ${this.renderEmptyState()}
                </div>
            </div>
        `;
        
        this.container = document.createElement('div');
        this.container.innerHTML = html;
        
        // Renderizar grid si hay películas
        if (this.movies.length > 0) {
            this.renderMoviesGrid();
        }
        
        return this.container;
    }
}