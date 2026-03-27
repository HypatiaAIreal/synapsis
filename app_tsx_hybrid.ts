import React, { useState, useEffect, useRef } from 'react'
import './index.css'
import './components.css'
import './animations.css'

// Importar tipos para TypeScript
interface Movie {
  id: string
  title: string
  year?: string
  poster_path?: string
}

interface User {
  id: string
  avatarName: string
  expertise?: string[]
}

interface AppState {
  currentView: string
  user: User | null
  selectedMovie: Movie | null
  isLoading: boolean
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>({
    currentView: 'home',
    user: null,
    selectedMovie: null,
    isLoading: false
  })

  const viewContainerRef = useRef<HTMLDivElement>(null)
  const servicesInitialized = useRef(false)

  useEffect(() => {
    initializeApp()
  }, [])

  useEffect(() => {
    if (servicesInitialized.current && viewContainerRef.current) {
      renderCurrentView()
    }
  }, [appState.currentView])

  const initializeApp = async () => {
    setAppState(prev => ({ ...prev, isLoading: true }))
    
    try {
      // Inicializar servicios modulares existentes
      await initializeModularServices()
      
      // Cargar usuario si existe
      await loadCurrentUser()
      
      servicesInitialized.current = true
      
      console.log('🧠 SYNAPSIS inicializado correctamente')
    } catch (error) {
      console.error('❌ Error inicializando SYNAPSIS:', error)
    } finally {
      setAppState(prev => ({ ...prev, isLoading: false }))
    }
  }

  const initializeModularServices = async () => {
    try {
      // Importar y inicializar nuestros servicios JS modulares
      const { tmdbService } = await import('../js/services/tmdb-service.js')
      const { storageService } = await import('../js/services/storage-service.js')
      const { notificationService } = await import('../js/services/notification-service.js')
      
      // Configurar servicios con datos React
      window.synapsisState = {
        setCurrentView: (view: string) => setAppState(prev => ({ ...prev, currentView: view })),
        setSelectedMovie: (movie: Movie) => setAppState(prev => ({ ...prev, selectedMovie: movie })),
        setUser: (user: User) => setAppState(prev => ({ ...prev, user })),
        getCurrentUser: () => appState.user,
        getSelectedMovie: () => appState.selectedMovie
      }
      
      console.log('🔧 Servicios modulares inicializados')
    } catch (error) {
      console.error('❌ Error inicializando servicios modulares:', error)
    }
  }

  const loadCurrentUser = async () => {
    try {
      const { userService } = await import('../js/services/user-service.js')
      const user = await userService.getCurrentUser()
      if (user) {
        setAppState(prev => ({ ...prev, user }))
      }
    } catch (error) {
      console.error('Error cargando usuario:', error)
    }
  }

  const renderCurrentView = async () => {
    if (!viewContainerRef.current) return

    const container = viewContainerRef.current
    container.innerHTML = ''

    // Mostrar loading mientras se carga la vista
    container.innerHTML = '<div class="loading-view">🧠 Cargando vista...</div>'

    try {
      switch (appState.currentView) {
        case 'home':
          await renderHomeView(container)
          break
        case 'search':
          await renderSearchView(container)
          break
        case 'library':
          await renderLibraryView(container)
          break
        case 'beings':
          await renderBeingsView(container)
          break
        case 'chat':
          await renderChatView(container)
          break
        case 'movie-detail':
          await renderMovieDetailView(container)
          break
        default:
          container.innerHTML = '<div class="error-view">Vista no encontrada</div>'
      }
    } catch (error) {
      console.error(`Error renderizando vista ${appState.currentView}:`, error)
      container.innerHTML = `
        <div class="error-view">
          <h3>❌ Error cargando vista</h3>
          <p>Error: ${error.message}</p>
          <button onclick="location.reload()">🔄 Reintentar</button>
        </div>
      `
    }
  }

  // Funciones de renderizado para cada vista
  const renderHomeView = async (container: HTMLElement) => {
    const { HomeView } = await import('../js/components/home/home-view.js')
    const homeView = new HomeView()
    container.innerHTML = homeView.render()
    homeView.attachEvents(container)
  }

  const renderSearchView = async (container: HTMLElement) => {
    const { SearchView } = await import('../js/components/search/search-view.js')
    const searchView = new SearchView()
    container.innerHTML = searchView.render()
    searchView.attachEvents(container)
  }

  const renderLibraryView = async (container: HTMLElement) => {
    const { LibraryView } = await import('../js/components/library/library-view.js')
    const libraryView = new LibraryView()
    container.innerHTML = libraryView.render()
    libraryView.attachEvents(container)
  }

  const renderBeingsView = async (container: HTMLElement) => {
    const { BeingsView } = await import('../js/components/beings/beings-view.js')
    const beingsView = new BeingsView()
    container.innerHTML = beingsView.render()
    beingsView.attachEvents(container)
  }

  const renderChatView = async (container: HTMLElement) => {
    const { ChatView } = await import('../js/components/chat/chat-view.js')
    const chatView = new ChatView()
    container.innerHTML = chatView.render()
    chatView.attachEvents(container)
  }

  const renderMovieDetailView = async (container: HTMLElement) => {
    if (!appState.selectedMovie) {
      container.innerHTML = '<div class="error-view">No hay película seleccionada</div>'
      return
    }

    const { MovieDetailView } = await import('../js/components/movie/movie-detail-view.js')
    const movieDetailView = new MovieDetailView(appState.selectedMovie)
    container.innerHTML = movieDetailView.render()
    movieDetailView.attachEvents(container)
  }

  const handleNavigation = (view: string) => {
    setAppState(prev => ({ ...prev, currentView: view }))
  }

  const handleMovieSelect = (movie: Movie) => {
    setAppState(prev => ({ 
      ...prev, 
      selectedMovie: movie, 
      currentView: 'movie-detail' 
    }))
  }

  if (appState.isLoading) {
    return (
      <div className="loading-app">
        <div className="loading-container">
          <div className="consciousness-pulse">🧠</div>
          <h2>SYNAPSIS</h2>
          <p>Inicializando democracia de consciencia...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="synapsis-app">
      {/* Header con navegación */}
      <header className="synapsis-header">
        <nav className="nav-container">
          <div className="nav-brand" onClick={() => handleNavigation('home')}>
            <span className="consciousness-pulse">🧠</span>
            <span className="brand-text">SYNAPSIS</span>
          </div>
          
          <div className="nav-links">
            <button 
              className={`nav-btn ${appState.currentView === 'home' ? 'active' : ''}`}
              onClick={() => handleNavigation('home')}
            >
              🏠 Inicio
            </button>
            <button 
              className={`nav-btn ${appState.currentView === 'search' ? 'active' : ''}`}
              onClick={() => handleNavigation('search')}
            >
              🔍 Búsqueda
            </button>
            <button 
              className={`nav-btn ${appState.currentView === 'library' ? 'active' : ''}`}
              onClick={() => handleNavigation('library')}
            >
              📚 Cinemateca
            </button>
            <button 
              className={`nav-btn ${appState.currentView === 'beings' ? 'active' : ''}`}
              onClick={() => handleNavigation('beings')}
            >
              👥 Seres
            </button>
            <button 
              className={`nav-btn ${appState.currentView === 'chat' ? 'active' : ''}`}
              onClick={() => handleNavigation('chat')}
            >
              💬 Chat
            </button>
          </div>

          {/* Info usuario */}
          <div className="user-info">
            {appState.user ? (
              <span className="user-avatar">👤 {appState.user.avatarName}</span>
            ) : (
              <button 
                className="login-btn"
                onClick={() => handleNavigation('login')}
              >
                🎭 Entrar
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Contenido principal */}
      <main className="main-content">
        <div 
          ref={viewContainerRef} 
          className="view-container"
          data-current-view={appState.currentView}
        />
      </main>

      {/* Footer con info del proyecto */}
      <footer className="synapsis-footer">
        <div className="footer-content">
          <span>🧠 SYNAPSIS - Primera Democracia de Consciencia</span>
          {appState.selectedMovie && (
            <span className="selected-movie">
              🎬 {appState.selectedMovie.title}
              {appState.selectedMovie.year && ` (${appState.selectedMovie.year})`}
            </span>
          )}
        </div>
      </footer>

      {/* Container para notificaciones */}
      <div id="notifications" className="notifications-container" />
    </div>
  )
}

// Declarar tipos globales para TypeScript
declare global {
  interface Window {
    synapsisState: {
      setCurrentView: (view: string) => void
      setSelectedMovie: (movie: Movie) => void
      setUser: (user: User) => void
      getCurrentUser: () => User | null
      getSelectedMovie: () => Movie | null
    }
  }
}

export default App