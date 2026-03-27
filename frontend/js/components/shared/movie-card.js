// ================================================================
// js/components/shared/movie-card.js
// 🎬 Componente de Tarjeta de Película Reutilizable

import { AppConfig } from '../../config/constants.js';

export class MovieCard {
    constructor(movie, options = {}) {
        this.movie = movie;
        this.options = {
            showDetailsButton: true,
            showAddButton: false,
            showRemoveButton: false,
            onClick: null,
            onDetails: null,
            onAdd: null,
            onRemove: null,
            ...options
        };
    }

    render() {
        const posterUrl = this.getPosterUrl();
        const year = this.getYear();
        const rating = this.getRating();

        return `
            <div class="movie-card bg-slate-800/60 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-300" 
                 data-movie-id="${this.movie.id}">
                
                <!-- 🖼️ Poster y overlay -->
                <div class="relative aspect-[2/3] overflow-hidden">
                    <img
                        src="${posterUrl}"
                        alt="${this.movie.title}"
                        class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        onerror="this.src='https://placehold.co/500x750/1e293b/64748b?text=Sin+Poster'"
                    />
                    
                    <!-- ⭐ Rating badge -->
                    <div class="absolute top-3 right-3">
                        <div class="flex items-center gap-1 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1">
                            <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span class="text-white text-sm font-semibold">${rating}</span>
                        </div>
                    </div>
                    
                    <!-- 🎬 Action buttons overlay -->
                    <div class="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                        ${this.renderActionButtons()}
                    </div>
                </div>
                
                <!-- 📝 Info section -->
                <div class="p-4">
                    <h3 class="text-white font-bold text-lg mb-2 line-clamp-2 hover:text-purple-300 transition-colors duration-300 cursor-pointer" 
                        data-action="details">
                        ${this.movie.title}
                    </h3>
                    
                    <div class="flex items-center gap-4 text-slate-300 text-sm mb-3">
                        <div class="flex items-center gap-1">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span>${year}</span>
                        </div>
                        
                        ${this.movie.vote_count ? `
                            <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                                <span>${this.movie.vote_count.toLocaleString()} votos</span>
                            </div>
                        ` : ''}
                    </div>
                    
                    ${this.movie.overview ? `
                        <p class="text-slate-400 text-sm line-clamp-3 mb-3">
                            ${this.movie.overview}
                        </p>
                    ` : ''}
                    
                    <!-- 🎯 Desktop action buttons -->
                    <div class="sm:hidden flex gap-2 mt-3">
                        ${this.renderActionButtons(true)}
                    </div>
                </div>
            </div>
        `;
    }

    renderActionButtons(isDesktop = false) {
        const buttons = [];
        const buttonClass = isDesktop 
            ? 'flex-1 px-3 py-2 text-sm' 
            : 'px-3 py-2';

        if (this.options.showDetailsButton) {
            buttons.push(`
                <button class="${buttonClass} bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition-all" 
                        data-action="details">
                    <svg class="w-4 h-4 ${isDesktop ? 'inline mr-1' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    ${isDesktop ? 'Ver Detalles' : ''}
                </button>
            `);
        }

        if (this.options.showAddButton) {
            buttons.push(`
                <button class="${buttonClass} bg-green-600 hover:bg-green-700 rounded-lg text-white font-semibold transition-all" 
                        data-action="add">
                    <svg class="w-4 h-4 ${isDesktop ? 'inline mr-1' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    ${isDesktop ? 'Agregar' : ''}
                </button>
            `);
        }

        if (this.options.showRemoveButton) {
            buttons.push(`
                <button class="${buttonClass} bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-all" 
                        data-action="remove">
                    <svg class="w-4 h-4 ${isDesktop ? 'inline mr-1' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                    ${isDesktop ? 'Eliminar' : ''}
                </button>
            `);
        }

        const containerClass = isDesktop ? 'flex gap-2' : 'flex flex-col gap-2';
        return `<div class="${containerClass}">${buttons.join('')}</div>`;
    }

    attachEvents(element) {
        // 👁️ Ver detalles (título o botón)
        const detailsElements = element.querySelectorAll('[data-action="details"]');
        detailsElements.forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.options.onDetails) {
                    this.options.onDetails(this.movie);
                }
            });
        });

        // ➕ Agregar película
        const addButtons = element.querySelectorAll('[data-action="add"]');
        addButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.options.onAdd) {
                    this.options.onAdd(this.movie);
                }
            });
        });

        // 🗑️ Eliminar película
        const removeButtons = element.querySelectorAll('[data-action="remove"]');
        removeButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                if (this.options.onRemove) {
                    this.options.onRemove(this.movie);
                }
            });
        });

        // 🎬 Click general en tarjeta
        if (this.options.onClick) {
            element.addEventListener('click', () => {
                this.options.onClick(this.movie);
            });
        }
    }

    // 🛠️ Utilidades
    getPosterUrl() {
        if (!this.movie.poster_path) {
            return 'https://placehold.co/500x750/1e293b/64748b?text=Sin+Poster';
        }
        return `${AppConfig.TMDB.IMAGE_BASE}${this.movie.poster_path}`;
    }

    getYear() {
        if (!this.movie.release_date) return 'N/A';
        return new Date(this.movie.release_date).getFullYear().toString();
    }

    getRating() {
        if (!this.movie.vote_average) return 'N/A';
        return this.movie.vote_average.toFixed(1);
    }
}
