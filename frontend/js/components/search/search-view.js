// js/components/search/search-view.js
// 🔍 Vista de Búsqueda Principal

import { MovieCard } from '../shared/movie-card.js';
import { debounce } from '../../utils/debounce.js';
import { AppConfig } from '../../config/constants.js';

export class SearchView {
    constructor(options = {}) {
        this.options = {
            tmdbService: null,
            onMovieSelect: null,
            onMovieAdd: null,
            ...options
        };
        
        this.searchQuery = '';
        this.searchResults = [];
        this.searchLoading = false;
        this.searchTimeout = null;
        
        // 💡 Sugerencias inspiradoras
        this.suggestions = [
            "Denis Villeneuve", "Quentin Tarantino", "Christopher Nolan", 
            "Dune", "Blade Runner", "Matrix", "Kubrick", "Scorsese"
        ];
        
        // 🔍 Debounced search
        this.debouncedSearch = debounce(this.performSearch.bind(this), AppConfig.UI.SEARCH_DEBOUNCE_MS);
    }

    render() {
        return `
            <div class="min-h-screen bg-slate-950 text-white">
                <div class="container mx-auto px-4 py-8">
                    <!-- 🎯 Header de búsqueda -->
                    <div class="max-w-4xl mx-auto mb-8">
                        <div class="text-center mb-8 fade-in">
                            <h2 class="text-4xl font-bold text-white mb-2 flex items-center justify-center gap-3">
                                <svg class="w-8 h-8 text-purple-400 sparkle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                </svg>
                                Buscador Cinematográfico
                                <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                                </svg>
                            </h2>
                            <p class="text-slate-300 text-lg">
                                Encuentra películas y agrégalas a tu cinemateca personal
                            </p>
                        </div>

                        <!-- 🔍 Barra de búsqueda -->
                        <div class="bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20 glow slide-in-left">
                            <div class="relative">
                                <div class="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                                    <svg class="h-6 w-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    id="search-input"
                                    placeholder="Busca películas o directores... ej: 'Denis Villeneuve', 'Dune', 'Quentin Tarantino'"
                                    class="w-full pl-16 pr-6 py-4 text-lg bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300 form-input"
                                />
                                <div id="search-loading" class="absolute inset-y-0 right-0 pr-6 flex items-center hidden">
                                    <div class="loader"></div>
                                </div>
                            </div>
                            
                            <!-- 💡 Sugerencias -->
                            <div class="mt-4 text-center">
                                <p class="text-slate-400 mb-3 text-sm">💡 Prueba con:</p>
                                <div class="flex flex-wrap justify-center gap-2" id="suggestions-container">
                                    ${this.suggestions.map(suggestion => `
                                        <button class="suggestion-btn px-3 py-1 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all text-sm" 
                                                data-suggestion="${suggestion}">
                                            ${suggestion}
                                        </button>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 📊 Estado de búsqueda -->
                    <div id="search-status" class="max-w-7xl mx-auto mb-4 text-center hidden">
                        <p class="text-slate-300">
                            <span id="results-count" class="text-purple-400 font-semibold">0</span> resultados para 
                            <span id="search-term" class="text-white font-semibold">""</span>
                        </p>
                    </div>

                    <!-- 🎬 Resultados de búsqueda -->
                    <div id="search-results" class="max-w-7xl mx-auto">
                        <div id="movies-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 hidden">
                            <!-- Las tarjetas de películas se insertan aquí -->
                        </div>
                        
                        <!-- 📭 Estado vacío -->
                        <div id="empty-state" class="text-center py-12">
                            <svg class="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <p class="text-lg text-slate-400">Escribe algo para comenzar la búsqueda</p>
                            <p class="text-sm text-slate-500 mt-2">Busca por título, director o actor</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    attachEvents(element) {
        // 🔍 Input de búsqueda
        const searchInput = element.querySelector('#search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                this.searchQuery = query;
                
                if (query.length >= 2) {
                    this.debouncedSearch(query);
                } else {
                    this.showEmptyState();
                }
            });

            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const query = e.target.value.trim();
                    if (query.length >= 2) {
                        this.performSearch(query);
                    }
                }
            });
        }

        // 💡 Sugerencias
        const suggestionBtns = element.querySelectorAll('.suggestion-btn');
        suggestionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const suggestion = btn.getAttribute('data-suggestion');
                if (searchInput) {
                    searchInput.value = suggestion;
                    this.searchQuery = suggestion;
                    this.performSearch(suggestion);
                }
            });
        });
    }

    async performSearch(query) {
        if (!this.options.tmdbService) {
            console.error('❌ TMDBService no disponible');
            return;
        }

        console.log(`🔍 Búsqueda iniciada: "${query}"`);
        this.setSearchLoading(true);
        this.hideEmptyState();
        
        try {
            const results = await this.options.tmdbService.searchMovies(query);
            const uniqueResults = results.slice(0, AppConfig.SYSTEM.MAX_SEARCH_RESULTS);
            
            this.searchResults = uniqueResults;
            
            if (uniqueResults.length > 0) {
                this.showSearchResults(uniqueResults, query);
            } else {
                this.showNoResults(query);
            }
            
        } catch (error) {
            console.error('❌ Error en búsqueda:', error);
            this.showSearchError(query);
        } finally {
            this.setSearchLoading(false);
        }
    }

    showSearchResults(results, query) {
        const moviesGrid = document.getElementById('movies-grid');
        const searchStatus = document.getElementById('search-status');
        const resultsCount = document.getElementById('results-count');
        const searchTerm = document.getElementById('search-term');
        
        if (!moviesGrid) return;

        // 📊 Actualizar estado
        if (searchStatus && resultsCount && searchTerm) {
            resultsCount.textContent = results.length;
            searchTerm.textContent = `"${query}"`;
            searchStatus.classList.remove('hidden');
        }

        // 🎬 Generar tarjetas de películas
        moviesGrid.innerHTML = results.map(movie => {
            const movieCard = new MovieCard(movie, {
                showDetailsButton: true,
                showAddButton: true,
                onDetails: (movie) => {
                    if (this.options.onMovieSelect) {
                        this.options.onMovieSelect(movie);
                    }
                },
                onAdd: (movie) => {
                    if (this.options.onMovieAdd) {
                        this.options.onMovieAdd(movie);
                    }
                }
            });
            return movieCard.render();
        }).join('');

        // 🎯 Attachar eventos a las tarjetas
        const movieCards = moviesGrid.querySelectorAll('.movie-card');
        movieCards.forEach((cardElement, index) => {
            const movie = results[index];
            const movieCard = new MovieCard(movie, {
                showDetailsButton: true,
                showAddButton: true,
                onDetails: (movie) => {
                    if (this.options.onMovieSelect) {
                        this.options.onMovieSelect(movie);
                    }
                },
                onAdd: (movie) => {
                    if (this.options.onMovieAdd) {
                        this.options.onMovieAdd(movie);
                    }
                }
            });
            movieCard.attachEvents(cardElement);
        });

        // 👁️ Mostrar grid
        moviesGrid.classList.remove('hidden');
        moviesGrid.classList.add('fade-in');
    }

    showNoResults(query) {
        const moviesGrid = document.getElementById('movies-grid');
        const searchStatus = document.getElementById('search-status');
        
        if (moviesGrid) {
            moviesGrid.classList.add('hidden');
            moviesGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <svg class="w-16 h-16 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p class="text-slate-400 text-lg mb-2">No se encontraron resultados</p>
                    <p class="text-slate-500 text-sm">Para "${query}". Intenta con otros términos.</p>
                </div>
            `;
            moviesGrid.classList.remove('hidden');
        }
        
        if (searchStatus) {
            searchStatus.classList.add('hidden');
        }
    }

    showSearchError(query) {
        const moviesGrid = document.getElementById('movies-grid');
        const searchStatus = document.getElementById('search-status');
        
        if (moviesGrid) {
            moviesGrid.classList.add('hidden');
            moviesGrid.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <svg class="w-16 h-16 text-red-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p class="text-red-400 text-lg mb-2">Error en la búsqueda</p>
                    <p class="text-slate-500 text-sm">Inténtalo de nuevo en unos momentos.</p>
                </div>
            `;
            moviesGrid.classList.remove('hidden');
        }
        
        if (searchStatus) {
            searchStatus.classList.add('hidden');
        }
    }

    showEmptyState() {
        const moviesGrid = document.getElementById('movies-grid');
        const searchStatus = document.getElementById('search-status');
        const emptyState = document.getElementById('empty-state');
        
        if (moviesGrid) moviesGrid.classList.add('hidden');
        if (searchStatus) searchStatus.classList.add('hidden');
        if (emptyState) emptyState.classList.remove('hidden');
    }

    hideEmptyState() {
        const emptyState = document.getElementById('empty-state');
        if (emptyState) emptyState.classList.add('hidden');
    }

    setSearchLoading(loading) {
        this.searchLoading = loading;
        const loadingElement = document.getElementById('search-loading');
        
        if (loadingElement) {
            if (loading) {
                loadingElement.classList.remove('hidden');
            } else {
                loadingElement.classList.add('hidden');
            }
        }
    }

    // 🧹 Limpieza
    destroy() {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
    }
}