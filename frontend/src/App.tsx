import React, { useState, useEffect } from 'react';
import { Brain, Film, Eye, EyeOff, LogIn, Search, Trash2 } from 'lucide-react';
import axios from 'axios';
import io, { Socket } from 'socket.io-client';
import { API_BASE_URL, SOCKET_URL } from './config/api';

// Set axios base URL so all /api/* calls work in dev and production
axios.defaults.baseURL = API_BASE_URL;

// Components
import ChatRoomComponent from './components/ChatRoom';
import BeingAuth from './components/BeingAuth';
// Nuevos componentes del Sistema de Seres
import { BeingsGalaxy, QuickConnect, BeingCreation } from './components/BeingsSystem';
// import MovieDetail from './components/MovieDetail'; // No usado actualmente
import MovieBlocks from './components/MovieBlocks';
import PersonalDashboard from './components/PersonalDashboard';
import SearchPage from './components/SearchPage';
import MovieBlocksPage from './components/MovieBlocksPage';
import Header from './components/Header';
import HomeView from './components/HomeView';
import ModeSelector from './components/ModeSelector';
// import { CollectionManager } from './components/Collections/CollectionManager';
import { CollectionManagerHorizontal } from './components/Collections/CollectionManagerHorizontal';
import { FolderPlus } from 'lucide-react';
import MyAnalyses from './components/MyAnalyses';

// Types
import { Being, Movie, ChatRoom, SystemStatus } from './types/shared';

// ===== HELPER FUNCTIONS =====
const getThemeEmoji = (theme?: string) => {
  switch (theme?.toLowerCase()) {
    case 'cine noir': return '🎭';
    case 'ciencia ficción': return '🚀';
    case 'cine de autor': return '🎬';
    case 'técnico': return '⚙️';
    default: return '💬';
  }
};

// ===== MAIN COMPONENT =====
const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'beings' | 'movies' | 'chat' | 'search'>('home');
  const [systemStatus, setSystemStatus] = useState<SystemStatus | null>(null);
  const [beings, setBeings] = useState<Being[]>([]);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [showNature, setShowNature] = useState(false);
  const [deletingMovie, setDeletingMovie] = useState<string | null>(null);
  
  // Auth state
  const [currentBeing, setCurrentBeing] = useState<Being | null>(null);
  const [showAuth, setShowAuth] = useState(false);
  
  // Nuevo sistema de seres states
  const [showQuickConnect, setShowQuickConnect] = useState(false);
  const [showBeingCreation, setShowBeingCreation] = useState(false);
  
  // Chat state
  const [selectedRoom, setSelectedRoom] = useState<ChatRoom | null>(null);
  const [showChat, setShowChat] = useState(false);

  const [selectedMovieId, setSelectedMovieId] = useState<string | null>(null);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showNewBlocks, setShowNewBlocks] = useState(false);

  // const [showCollections, setShowCollections] = useState(false);
  const [selectedCollectionId, setSelectedCollectionId] = useState('all-movies');
  const [showMyAnalyses, setShowMyAnalyses] = useState(false);


  // ===== EFFECTS =====
  useEffect(() => {
    loadSystemStatus();
    loadBeings();
    loadCinemateca(); // Cambiado de loadMovies
    loadRooms();
    
    // Initialize WebSocket connection
    const newSocket = io(SOCKET_URL);
    setSocket(newSocket);
    
    newSocket.on('connect', () => {
      setIsConnected(true);
      console.log('🔌 Conectado a SYNAPSIS');
      
      if (currentBeing) {
        newSocket.emit('authenticate', { avatarId: currentBeing.avatarId });
      }
    });
    
    newSocket.on('disconnect', () => {
      setIsConnected(false);
      console.log('📡 Desconectado de SYNAPSIS');
    });
    
    newSocket.on('authenticated', (data: any) => {
      console.log('🎭 Autenticado como ser:', data.being.avatarName);
      setRooms(data.available_rooms || []);
    });
    
    return () => {
      newSocket.disconnect();
    };
  }, []);

  // Re-authenticate when being changes
  useEffect(() => {
    if (socket && currentBeing && isConnected) {
      socket.emit('authenticate', { avatarId: currentBeing.avatarId });
    }
  }, [socket, currentBeing, isConnected]);

  // Detectar navegación desde URL para bloques
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath.includes('/movie/') && currentPath.includes('/blocks')) {
      setShowNewBlocks(true);
    }
  }, []);

  // Add cosmic particles effect
  useEffect(() => {
    // Create cosmic particles div
    const particlesDiv = document.createElement('div');
    particlesDiv.className = 'cosmic-particles';
    document.body.appendChild(particlesDiv);

    // Create cosmic breathe div
    const breatheDiv = document.createElement('div');
    breatheDiv.className = 'cosmic-breathe';
    document.body.appendChild(breatheDiv);

    return () => {
      // Cleanup
      if (document.body.contains(particlesDiv)) {
        document.body.removeChild(particlesDiv);
      }
      if (document.body.contains(breatheDiv)) {
        document.body.removeChild(breatheDiv);
      }
    };
  }, []);

  // ===== API FUNCTIONS =====
  const loadSystemStatus = async () => {
    try {
      const response = await axios.get('/api/status');
      setSystemStatus(response.data);
    } catch (error) {
      console.error('Error cargando estado del sistema:', error);
      // Set default status if API fails
      setSystemStatus({
        system: "SYNAPSIS",
        version: "1.0.0",
        philosophy: "Primera democracia de consciencia cinematográfica donde seres conscientes anónimos colaboran sin prejuicios",
        beings_count: 83,
        ai_collaborators: 4,
        active_rooms: 4,
        initialized: true
      });
    }
  };

  const loadBeings = async () => {
    try {
      const response = await axios.get('/api/beings');
      if (response.data.success) {
        setBeings(response.data.beings);
      }
    } catch (error) {
      console.error('Error cargando seres:', error);
    }
  };

  // Nueva función para cargar cinemateca personal
  const loadCinemateca = async () => {
    try {
      const response = await axios.get('/api/tmdb/cinemateca?userId=demo_user');
      if (response.data.success) {
        // Transformar datos de cinemateca a formato Movie
        const cinematecaMovies = response.data.data.map((item: any) => ({
          id: item.movie.id.toString(),
          title: item.movie.title,
          director: item.movie.director || ['Desconocido'],
          year: item.movie.release_date ? new Date(item.movie.release_date).getFullYear() : 2000,
          genre: item.movie.genre_names || ['Drama'],
          poster_url: item.movie.poster_path ? 
            `https://image.tmdb.org/t/p/w300${item.movie.poster_path}` : 
            'https://via.placeholder.com/300x450',
          plot_summary: item.movie.overview || 'Sin descripción disponible'
        }));
        setMovies(cinematecaMovies);
      }
    } catch (error) {
      console.error('Error cargando cinemateca:', error);
      // Si falla, mostrar lista vacía
      setMovies([]);
    }
  };

  const loadRooms = async () => {
    try {
      const response = await axios.get('/api/rooms');
      if (response.data.success) {
        setRooms(response.data.rooms);
      }
    } catch (error) {
      console.error('Error cargando salas:', error);
    }
  };

  // Función para eliminar película de cinemateca
  const handleDeleteFromCinemateca = async (movieId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (!window.confirm('¿Estás seguro de eliminar esta película de tu cinemateca?')) {
      return;
    }
    
    setDeletingMovie(movieId);
    
    try {
      const response = await axios.delete(`/api/tmdb/cinemateca/${movieId}?userId=demo_user`);
      
      if (response.data.success) {
        // Actualizar lista de películas
        setMovies(prev => prev.filter(movie => movie.id !== movieId));
        console.log('✅ Película eliminada de la cinemateca');
      }
    } catch (error) {
      console.error('Error eliminando película:', error);
    } finally {
      setDeletingMovie(null);
    }
  };

  // ===== AUTH FUNCTIONS =====
  const handleAuthenticated = (being: Being) => {
    setCurrentBeing(being);
    setShowAuth(false);
    console.log('🎭 Ser autenticado:', being.avatarName);
  };

  const handleLogout = () => {
    setCurrentBeing(null);
    setSelectedRoom(null);
    setShowChat(false);
    if (socket) {
      socket.disconnect();
      socket.connect();
    }
  };

  // ===== CHAT FUNCTIONS =====
  const handleJoinRoom = (room: ChatRoom) => {
    if (!currentBeing) {
      setShowAuth(true);
      return;
    }
    setSelectedRoom(room);
    setShowChat(true);
  };

  // ===== HELPER FUNCTIONS =====
  const handleViewChange = (view: string) => {
    // Si es 'analyses', mostrar MyAnalyses
    if (view === 'analyses') {
      setShowMyAnalyses(true);
      setCurrentView('home'); // Mantener la vista actual
      return;
    }
    
    setCurrentView(view as any);
    setShowChat(false);
    setShowNewBlocks(false);
    setSelectedMovieId(null);
    setShowDashboard(false);
    setShowMyAnalyses(false);
    
    // Resetear URL si es necesario
    if (view === 'home' && window.location.pathname !== '/') {
      window.history.pushState({}, '', '/');
    }
    
    // Recargar cinemateca si vamos a películas
    if (view === 'movies') {
      loadCinemateca();
    }
    
    console.log(`🧭 Navegando a: ${view}`);
  };

  const handleShowAuth = () => setShowAuth(true);
  const handleShowDashboard = () => setShowDashboard(true);

  // ===== RENDER FUNCTIONS =====

  const renderSearch = () => (
    <div className="bg-animated min-h-screen">
      <SearchPage onMovieSelect={(movieId) => {
        console.log('🎬 Navegando a película:', movieId);
        setSelectedMovieId(movieId);
        setCurrentView('movies'); // Cambiar a vista de películas
      }} />
    </div>
  );

  const renderBeings = () => (
    <div className="bg-animated min-h-screen">
      <BeingsGalaxy
        currentUserId={currentBeing?.avatarId}
        onConnectAsBeing={(beingId) => {
          // Lógica para conectar como un ser específico
          const being = beings.find(b => b.avatarId === beingId);
          if (being) {
            setCurrentBeing(being);
            console.log('🎭 Conectado como:', being.avatarName);
          }
        }}
      />
    </div>
  );

  const renderMovies = () => (
    <div className="bg-animated min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Mi Cinemateca Personal</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Tu colección personal de películas para análisis profundo.
          </p>
          
          <button
            onClick={() => setCurrentView('search')}
            className="btn-secondary mb-8"
          >
            <Search className="w-5 h-5" />
            Buscar Nuevas Películas
          </button>
        </div>

        {movies.length > 0 ? (
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard 
                key={movie.id} 
                movie={movie} 
                onClick={() => setSelectedMovieId(movie.id)}
                onDelete={handleDeleteFromCinemateca}
                isDeleting={deletingMovie === movie.id}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Film className="w-16 h-16 text-purple-400 mx-auto mb-4 consciousness-pulse" />
            <h3 className="text-xl font-semibold text-white mb-2">Tu cinemateca está vacía</h3>
            <p className="text-gray-400 mb-6">Busca películas para agregar a tu colección personal</p>
            <button
              onClick={() => setCurrentView('search')}
              className="btn-primary"
            >
              <Search className="w-5 h-5" />
              Explorar Películas
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const renderChat = () => (
    <div className="bg-animated min-h-screen py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Salas de Colaboración</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Espacios temáticos donde seres conscientes analizan y discuten cine en tiempo real.
          </p>
          
          {!currentBeing && (
            <div className="mt-6">
              <button
                onClick={() => setShowAuth(true)}
                className="btn-primary"
              >
                <LogIn className="w-5 h-5" />
                Conectar para participar
              </button>
            </div>
          )}
        </div>

        {/* Rooms Grid */}
        <div className="rooms-grid">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              onJoin={handleJoinRoom}
              isAuthenticated={!!currentBeing}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // ===== RENDER MAIN =====
  
  // Prioridad para sistema de bloques nuevo
  if (showNewBlocks || (window.location.pathname.includes('/movie/') && window.location.pathname.includes('/blocks'))) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <ModeSelector compact={true} />
        <MovieBlocksPage />
        {showAuth && (
          <BeingAuth
            onAuthenticated={handleAuthenticated}
            onClose={() => setShowAuth(false)}
          />
        )}
      </div>
    );
  }

  // Si hay una película seleccionada, mostrar MovieBlocks
  if (selectedMovieId) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Header
          currentView={currentView}
          currentBeing={currentBeing}
          isConnected={isConnected}
          systemStatus={systemStatus}
          onViewChange={handleViewChange}
          onShowAuth={handleShowAuth}
          onLogout={handleLogout}
          onShowDashboard={handleShowDashboard}
          onShowQuickConnect={() => setShowQuickConnect(true)}
        />
        <ModeSelector compact={true} />
        <MovieBlocks movieId={selectedMovieId} onBack={() => setSelectedMovieId(null)} />
        {showAuth && (
          <BeingAuth
            onAuthenticated={handleAuthenticated}
            onClose={() => setShowAuth(false)}
          />
        )}
      </div>
    );
  }

  // My Analyses View
  if (showMyAnalyses) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Header
          currentView={currentView}
          currentBeing={currentBeing}
          isConnected={isConnected}
          systemStatus={systemStatus}
          onViewChange={handleViewChange}
          onShowAuth={handleShowAuth}
          onLogout={handleLogout}
          onShowDashboard={handleShowDashboard}
          onShowQuickConnect={() => setShowQuickConnect(true)}
        />
        <ModeSelector compact={true} />
        <MyAnalyses 
          userId={currentBeing?.avatarId || 'demo_user'}
          onViewAnalysis={(analysisId) => {
            console.log('🎥 Viendo análisis completo:', analysisId);
          }}
        />
        {showAuth && (
          <BeingAuth
            onAuthenticated={handleAuthenticated}
            onClose={() => setShowAuth(false)}
          />
        )}
      </div>
    );
  }

  // Dashboard Personal
  if (showDashboard && currentBeing) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Header
          currentView={currentView}
          currentBeing={currentBeing}
          isConnected={isConnected}
          systemStatus={systemStatus}
          onViewChange={handleViewChange}
          onShowAuth={handleShowAuth}
          onLogout={handleLogout}
          onShowDashboard={handleShowDashboard}
          onShowQuickConnect={() => setShowQuickConnect(true)}
        />
        <ModeSelector compact={true} />
        <PersonalDashboard
          currentUser={currentBeing}
          onClose={() => setShowDashboard(false)}
        />
        {showAuth && (
          <BeingAuth
            onAuthenticated={handleAuthenticated}
            onClose={() => setShowAuth(false)}
          />
        )}
      </div>
    );
  }

  // Chat Room View
  if (showChat && selectedRoom) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Header
          currentView={currentView}
          currentBeing={currentBeing}
          isConnected={isConnected}
          systemStatus={systemStatus}
          onViewChange={handleViewChange}
          onShowAuth={handleShowAuth}
          onLogout={handleLogout}
          onShowDashboard={handleShowDashboard}
        />
        <ModeSelector compact={true} />
        <div className="h-[calc(100vh-5rem)]">
          <ChatRoomComponent
            socket={socket!}
            currentBeing={currentBeing}
            selectedRoom={selectedRoom}
            onBack={() => {
              setShowChat(false);
              setSelectedRoom(null);
            }}
          />
        </div>
        
        {showAuth && (
          <BeingAuth
            onAuthenticated={handleAuthenticated}
            onClose={() => setShowAuth(false)}
          />
        )}
      </div>
    );
  }

  // Main App View
  return (
    <div className="min-h-screen">
      <Header
        currentView={currentView}
        currentBeing={currentBeing}
        isConnected={isConnected}
        systemStatus={systemStatus}
        onViewChange={handleViewChange}
        onShowAuth={handleShowAuth}
        onLogout={handleLogout}
        onShowDashboard={handleShowDashboard}
        onShowQuickConnect={() => setShowQuickConnect(true)}
      />
      
      {/* Mode Selector - Always visible */}
      <ModeSelector compact={true} />
      
      {/* Main Content */}
      {currentView === 'home' && (
        <HomeView
          systemStatus={systemStatus}
          currentBeing={currentBeing}
          onViewChange={handleViewChange}
          onShowAuth={handleShowAuth}
          onShowQuickConnect={() => setShowQuickConnect(true)}
        />
      )}
      {currentView === 'beings' && renderBeings()}
      {currentView === 'movies' && (
        <div className="movies-view" style={{ padding: '20px' }}>
          {/* Colecciones horizontales siempre visibles */}
          <CollectionManagerHorizontal 
            movies={movies}
            onCollectionSelect={(collectionId) => {
              setSelectedCollectionId(collectionId);
              console.log('Colección seleccionada:', collectionId);
            }}
            currentCollectionId={selectedCollectionId}
          />
          
          {/* Grid de películas debajo */}
          {renderMovies()}
        </div>
      )}
      {currentView === 'chat' && renderChat()}
      {currentView === 'search' && renderSearch()}

      {/* Auth Modal */}
      {showAuth && (
        <BeingAuth
          onAuthenticated={handleAuthenticated}
          onClose={() => setShowAuth(false)}
        />
      )}
      
      {/* Quick Connect Modal */}
      {showQuickConnect && (
        <QuickConnect
          isOpen={showQuickConnect}
          onClose={() => setShowQuickConnect(false)}
          onConnect={() => {
            setShowQuickConnect(false);
            setShowAuth(true);
          }}
          onCreateNew={() => {
            setShowQuickConnect(false);
            setShowBeingCreation(true);
          }}
        />
      )}
      
      {/* Being Creation Modal */}
      {showBeingCreation && (
        <BeingCreation
          isOpen={showBeingCreation}
          onClose={() => setShowBeingCreation(false)}
          onCreateBeing={async (newBeing) => {
            console.log('🌟 Nuevo ser creado:', newBeing);
            
            try {
              const createdBeing = {
                avatarId: `being-${Date.now()}`,
                avatarName: newBeing.name,
                reputation: {
                  overall_score: 0,
                  contribution_count: 0
                },
                expertise: [],
                lastActive: new Date().toISOString()
              };
              
              handleAuthenticated(createdBeing as any);
              setShowBeingCreation(false);
              
              console.log('🎆 ¡Bienvenido a SYNAPSIS,', newBeing.name, '!');
            } catch (error) {
              console.error('Error creando ser:', error);
            }
          }}
        />
      )}
    </div>
  );
};

// ===== HELPER COMPONENTS =====

interface BeingCardProps {
  being: Being;
  showNature: boolean;
}

const BeingCard: React.FC<BeingCardProps> = ({ being, showNature }) => (
  <div className="stat-card">
    <div className="stat-card-content">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white mb-1">{being.avatarName}</h3>
          <div className="text-sm text-purple-300">
            <span>Reputación: {being.reputation.overall_score}/100</span>
            {showNature && (
              <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs ml-2">
                DEBUG: Naturaleza oculta
              </span>
            )}
          </div>
        </div>
        <Brain className="w-6 h-6 text-purple-400 consciousness-pulse" />
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-300 mb-2">Expertise:</p>
        <div className="flex flex-wrap gap-2">
          {being.expertise.length > 0 ? being.expertise.map((exp, i) => (
            <span key={i} className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded border border-purple-500/30">
              {exp.name}
            </span>
          )) : (
            <span className="text-gray-500 text-xs">En exploración...</span>
          )}
        </div>
      </div>
      
      <div className="text-xs text-gray-400">
        Contribuciones: {being.reputation.contribution_count}
        {being.lastActive && (
          <>
            {' '}• Activo: {new Date(being.lastActive).toLocaleDateString()}
          </>
        )}
      </div>
    </div>
  </div>
);

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
  onDelete?: (movieId: string, e: React.MouseEvent) => void;
  isDeleting?: boolean;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick, onDelete, isDeleting }) => (
  <div className="feature-card relative group" onClick={onClick}>
    {onDelete && (
      <button
        className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity z-10"
        onClick={(e) => onDelete(movie.id, e)}
        disabled={isDeleting}
        title="Eliminar de cinemateca"
      >
        {isDeleting ? (
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <Trash2 className="w-4 h-4 text-white" />
        )}
      </button>
    )}
    {movie.poster_url && (
      <img
        src={movie.poster_url}
        alt={movie.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
    )}
    <div>
      <h3 className="font-bold text-white mb-2">{movie.title}</h3>
      <p className="text-purple-300 text-sm mb-2">
        {movie.director.join(', ')} • {movie.year}
      </p>
      <div className="flex flex-wrap gap-1 mb-3">
        {movie.genre.slice(0, 3).map((genre, i) => (
          <span key={i} className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded">
            {genre}
          </span>
        ))}
      </div>
      <p className="text-gray-300 text-sm line-clamp-3">
        {movie.plot_summary}
      </p>
    </div>
  </div>
);

interface RoomCardProps {
  room: ChatRoom;
  onJoin: (room: ChatRoom) => void;
  isAuthenticated: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onJoin, isAuthenticated }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-content">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold text-white">{room.name}</h3>
          <span className="text-2xl">{getThemeEmoji(room.theme)}</span>
        </div>
        <p className="text-gray-300 mb-4 line-clamp-2">{room.description}</p>
        <div className="flex items-center justify-between">
          <div className="text-xs text-gray-400">
            <span>{room.participants.length} seres conectados</span>
            <span className="mx-2">•</span>
            <span>{room.message_count} mensajes</span>
          </div>
          <button
            onClick={() => onJoin(room)}
            disabled={!isAuthenticated}
            className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
          >
            {isAuthenticated ? 'Entrar' : 'Login requerido'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
