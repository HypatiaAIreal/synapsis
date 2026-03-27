// js/components/shared/header.js
// 🎯 Header Principal de SYNAPSIS

export class Header {
    constructor(options = {}) {
        this.options = {
            onNavigate: null,
            onLogin: null,
            onLogout: null,
            getCurrentUser: () => null,
            getConnectionStatus: () => false,
            ...options
        };
        
        this.currentUser = null;
        this.isConnected = false;
        this.activeView = 'home';
    }

    render() {
        return `
            <header class="bg-slate-900/90 backdrop-blur-lg border-b border-purple-500/20 sticky top-0 z-50">
                <div class="container mx-auto px-6 py-4">
                    <div class="flex items-center justify-between">
                        <!-- 🧠 Logo y título -->
                        <div class="flex items-center space-x-3 cursor-pointer glow-strong rounded-lg px-4 py-2" data-nav="home">
                            <div class="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <svg class="w-6 h-6 text-white consciousness-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <h1 class="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    SYNAPSIS
                                </h1>
                                <p class="text-xs text-gray-400 -mt-1">Revolución Consciente</p>
                            </div>
                        </div>

                        <!-- 🧭 Navegación principal -->
                        <nav class="hidden md:flex items-center space-x-6" id="main-navigation">
                            ${this.renderNavButton('search', 'Buscar', `
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            `)}
                            
                            ${this.renderNavButton('library', 'Mi Cinemateca', `
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h4a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4z" />
                                </svg>
                            `)}
                            
                            ${this.renderNavButton('beings', 'Seres', `
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                                </svg>
                            `, '83')}
                            
                            ${this.renderNavButton('chat', 'Chat', `
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            `, '7')}
                        </nav>

                        <!-- 👤 Sección de usuario y estado -->
                        <div class="flex items-center space-x-3">
                            <!-- 👤 Info de usuario -->
                            <div id="user-info" class="hidden">
                                <div class="text-right">
                                    <p id="user-name" class="text-sm font-medium text-purple-300"></p>
                                    <p class="text-xs text-gray-400">Ser Consciente</p>
                                </div>
                            </div>

                            <!-- 🔐 Botón de autenticación -->
                            <button id="auth-button" class="flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                </svg>
                                <span>Conectar</span>
                            </button>

                            <!-- 📡 Estado de conexión -->
                            <div id="connection-status" class="flex items-center space-x-2 px-3 py-1 rounded-full text-sm bg-red-500/20 text-red-400 border border-red-500/30">
                                <div class="w-2 h-2 rounded-full bg-red-400"></div>
                                <span>Desconectado</span>
                            </div>
                        </div>

                        <!-- 📱 Menú móvil (hamburguesa) -->
                        <button id="mobile-menu-button" class="md:hidden p-2 text-gray-400 hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>

                    <!-- 📱 Menú móvil desplegable -->
                    <div id="mobile-menu" class="md:hidden hidden mt-4 pb-4 border-t border-purple-500/20">
                        <nav class="flex flex-col space-y-2 pt-4">
                            ${this.renderMobileNavButton('search', 'Buscar')}
                            ${this.renderMobileNavButton('library', 'Mi Cinemateca')}
                            ${this.renderMobileNavButton('beings', 'Seres')}
                            ${this.renderMobileNavButton('chat', 'Chat')}
                        </nav>
                    </div>
                </div>
            </header>
        `;
    }

    renderNavButton(view, label, icon, count = null) {
        const isActive = this.activeView === view;
        const activeClasses = isActive 
            ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30 glow' 
            : 'text-gray-400 hover:text-purple-400 hover:bg-purple-500/10';

        return `
            <button class="nav-button flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${activeClasses}" 
                    data-nav="${view}">
                ${icon}
                <span class="font-medium">${label}</span>
                ${count ? `<span class="bg-purple-500 text-white text-xs px-2 py-1 rounded-full min-w-[20px] text-center">${count}</span>` : ''}
            </button>
        `;
    }

    renderMobileNavButton(view, label) {
        const isActive = this.activeView === view;
        const activeClasses = isActive 
            ? 'bg-purple-500/20 text-purple-400' 
            : 'text-gray-400 hover:text-purple-400';

        return `
            <button class="mobile-nav-button flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeClasses}" 
                    data-nav="${view}">
                <span class="font-medium">${label}</span>
            </button>
        `;
    }

    attachEvents(element) {
        // 🏠 Logo - navegar a home
        const logo = element.querySelector('[data-nav="home"]');
        if (logo) {
            logo.addEventListener('click', () => {
                if (this.options.onNavigate) {
                    this.options.onNavigate('home');
                }
            });
        }

        // 🧭 Botones de navegación desktop
        const navButtons = element.querySelectorAll('.nav-button');
        navButtons.forEach(button => {
            button.addEventListener('click', () => {
                const view = button.getAttribute('data-nav');
                if (this.options.onNavigate) {
                    this.options.onNavigate(view);
                }
            });
        });

        // 📱 Botones de navegación móvil
        const mobileNavButtons = element.querySelectorAll('.mobile-nav-button');
        mobileNavButtons.forEach(button => {
            button.addEventListener('click', () => {
                const view = button.getAttribute('data-nav');
                // Cerrar menú móvil
                this.toggleMobileMenu(false);
                if (this.options.onNavigate) {
                    this.options.onNavigate(view);
                }
            });
        });

        // 🔐 Botón de autenticación
        const authButton = element.querySelector('#auth-button');
        if (authButton) {
            authButton.addEventListener('click', () => {
                if (this.currentUser) {
                    if (this.options.onLogout) this.options.onLogout();
                } else {
                    if (this.options.onLogin) this.options.onLogin();
                }
            });
        }

        // 📱 Botón menú móvil
        const mobileMenuButton = element.querySelector('#mobile-menu-button');
        if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // 🔄 Inicializar estado
        this.updateUser(this.options.getCurrentUser());
        this.updateConnectionStatus(this.options.getConnectionStatus());
    }

    // 📱 Toggle menú móvil
    toggleMobileMenu(show = null) {
        const mobileMenu = document.querySelector('#mobile-menu');
        if (!mobileMenu) return;

        if (show === null) {
            mobileMenu.classList.toggle('hidden');
        } else if (show) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }

    // 🎯 Actualizar vista activa
    updateActiveView(view) {
        this.activeView = view;
        
        // 🧹 Limpiar estados activos
        const navButtons = document.querySelectorAll('.nav-button, .mobile-nav-button');
        navButtons.forEach(button => {
            button.classList.remove('bg-purple-500/20', 'text-purple-400', 'border', 'border-purple-500/30', 'glow');
            button.classList.add('text-gray-400');
        });
        
        // ✨ Activar botón actual
        const activeButtons = document.querySelectorAll(`[data-nav="${view}"]`);
        activeButtons.forEach(button => {
            if (button.classList.contains('nav-button')) {
                button.classList.remove('text-gray-400');
                button.classList.add('bg-purple-500/20', 'text-purple-400', 'border', 'border-purple-500/30', 'glow');
            } else if (button.classList.contains('mobile-nav-button')) {
                button.classList.remove('text-gray-400');
                button.classList.add('bg-purple-500/20', 'text-purple-400');
            }
        });
    }

    // 👤 Actualizar información de usuario
    updateUser(user) {
        this.currentUser = user;
        
        const userInfo = document.querySelector('#user-info');
        const userName = document.querySelector('#user-name');
        const authButton = document.querySelector('#auth-button');
        
        if (!userInfo || !authButton) return;
        
        if (user) {
            // 👤 Usuario conectado
            userInfo.classList.remove('hidden');
            if (userName) userName.textContent = user.name;
            
            authButton.className = 'flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors';
            authButton.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H4a3 3 0 01-3-3V7a3 3 0 013-3h3" />
                </svg>
                <span>Salir</span>
            `;
        } else {
            // 👤 Usuario desconectado
            userInfo.classList.add('hidden');
            
            authButton.className = 'flex items-center space-x-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors';
            authButton.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                <span>Conectar</span>
            `;
        }
    }

    // 📡 Actualizar estado de conexión
    updateConnectionStatus(isConnected) {
        this.isConnected = isConnected;
        
        const connectionStatus = document.querySelector('#connection-status');
        if (!connectionStatus) return;
        
        if (isConnected) {
            connectionStatus.className = 'flex items-center space-x-2 px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400 border border-green-500/30';
            connectionStatus.innerHTML = `
                <div class="w-2 h-2 rounded-full bg-green-400"></div>
                <span>En línea</span>
            `;
        } else {
            connectionStatus.className = 'flex items-center space-x-2 px-3 py-1 rounded-full text-sm bg-red-500/20 text-red-400 border border-red-500/30';
            connectionStatus.innerHTML = `
                <div class="w-2 h-2 rounded-full bg-red-400"></div>
                <span>Desconectado</span>
            `;
        }
    }

    // 📊 Actualizar contadores
    updateCounters(counters = {}) {
        const { beings = 83, rooms = 7, library = 0 } = counters;
        
        // 👥 Actualizar contador de seres
        const beingsButton = document.querySelector('[data-nav="beings"] span:last-child');
        if (beingsButton) {
            beingsButton.textContent = beings.toString();
        }
        
        // 💬 Actualizar contador de salas
        const chatButton = document.querySelector('[data-nav="chat"] span:last-child');
        if (chatButton) {
            chatButton.textContent = rooms.toString();
        }
        
        // 📚 Actualizar contador de biblioteca (si existe)
        const libraryButton = document.querySelector('[data-nav="library"] span:last-child');
        if (libraryButton && library > 0) {
            libraryButton.textContent = library.toString();
        }
    }

    // 🧹 Método de limpieza
    destroy() {
        // Remover event listeners si es necesario
        const mobileMenu = document.querySelector('#mobile-menu');
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    }
}