import React, { useState } from 'react';
import { Brain, Users, Film, MessageCircle, Search, LogIn, LogOut, Menu, X, FolderPlus, FileText } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  currentBeing: any;
  isConnected: boolean;
  systemStatus: any;
  onViewChange: (view: string) => void;
  onShowAuth: () => void;
  onLogout: () => void;
  onShowDashboard: () => void;
  showCollections?: boolean;
  onToggleCollections?: () => void;
  onShowQuickConnect?: () => void; // NUEVO
}

const Header: React.FC<HeaderProps> = ({
  currentView,
  currentBeing,
  isConnected,
  systemStatus,
  onViewChange,
  onShowAuth,
  onLogout,
  onShowDashboard,
  showCollections,
  onToggleCollections,
  onShowQuickConnect // NUEVO
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (view: string) => {
    onViewChange(view);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="header-content">
          {/* Logo con símbolo infinito */}
          <div 
            className="logo"
            onClick={() => {
              handleNavClick('home');
              if (window.location.pathname !== '/') {
                window.history.pushState({}, '', '/');
              }
            }}
          >
            <div className="logo-icon">∞</div>
            <div className="logo-text">
              <h1>SYNAPSIS</h1>
              <p>Revolución Consciente</p>
            </div>
          </div>

          {/* Navegación principal - Desktop */}
          <nav className="main-nav hidden md:flex">
            <button 
              onClick={() => handleNavClick('search')}
              className={`nav-button ${currentView === 'search' ? 'active' : ''}`}
            >
              <Search size={20} />
              <span>Buscar</span>
            </button>

            <button 
              onClick={() => handleNavClick('movies')}
              className={`nav-button ${currentView === 'movies' ? 'active' : ''}`}
            >
              <Film size={20} />
              <span>Películas</span>
            </button>

            <button 
              onClick={() => handleNavClick('beings')}
              className={`nav-button ${currentView === 'beings' ? 'active' : ''}`}
            >
              <Users size={20} />
              <span>Seres</span>
              <span className="counter-badge">
                {systemStatus?.beings_count || 83}
              </span>
            </button>

            <button 
              onClick={() => handleNavClick('chat')}
              className={`nav-button ${currentView === 'chat' ? 'active' : ''}`}
            >
              <MessageCircle size={20} />
              <span>Chat</span>
              <span className="counter-badge">S
                {systemStatus?.active_rooms || 4}
              </span>
            </button>

            {/* Botón Mis Análisis */}
            <button 
              onClick={() => handleNavClick('analyses')}
              className={`nav-button ${currentView === 'analyses' ? 'active' : ''}`}
            >
              <FileText size={20} />
              <span>Mis Análisis</span>
            </button>

            {/* {onToggleCollections && (
              <button 
                onClick={onToggleCollections}
                className={`nav-button ${showCollections ? 'active' : ''}`}
              >
                <FolderPlus size={20} />
                <span>Colecciones</span>
              </button>
            )} */}
          </nav>

          {/* User section - Desktop */}
          <div className="user-section hidden md:flex">
            {/* Dashboard Button */}
            {currentBeing && (
              <button
                onClick={onShowDashboard}
                className="nav-button"
                title="Dashboard Personal"
              >
                <Brain size={20} />
              </button>
            )}

            {/* Being Status */}
            {currentBeing ? (
              <>
                <div className="user-name">
                  {currentBeing.avatarName}
                </div>
                <button
                  onClick={onLogout}
                  className="nav-button"
                  title="Desconectar"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <button
                onClick={onShowQuickConnect || onShowAuth}
                className="connect-button"
              >
                <LogIn size={20} />
                <span>Conectar como Ser</span>
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-purple-500/30 bg-slate-900/95 backdrop-blur-md">
            <nav className="flex flex-col p-4 gap-2">
              <button 
                onClick={() => handleNavClick('search')}
                className={`nav-button w-full justify-start ${currentView === 'search' ? 'active' : ''}`}
              >
                <Search size={20} />
                <span>Buscar</span>
              </button>

              <button 
                onClick={() => handleNavClick('movies')}
                className={`nav-button w-full justify-start ${currentView === 'movies' ? 'active' : ''}`}
              >
                <Film size={20} />
                <span>Películas</span>
              </button>

              <button 
                onClick={() => handleNavClick('beings')}
                className={`nav-button w-full justify-start ${currentView === 'beings' ? 'active' : ''}`}
              >
                <Users size={20} />
                <span>Seres</span>
                <span className="counter-badge ml-auto">
                  {systemStatus?.beings_count || 83}
                </span>
              </button>

              <button 
                onClick={() => handleNavClick('chat')}
                className={`nav-button w-full justify-start ${currentView === 'chat' ? 'active' : ''}`}
              >
                <MessageCircle size={20} />
                <span>Chat</span>
                <span className="counter-badge ml-auto">
                  {systemStatus?.active_rooms || 4}
                </span>
              </button>

              <button 
                onClick={() => handleNavClick('analyses')}
                className={`nav-button w-full justify-start ${currentView === 'analyses' ? 'active' : ''}`}
              >
                <FileText size={20} />
                <span>Mis Análisis</span>
              </button>

              {onToggleCollections && (
                <button 
                  onClick={() => {
                    onToggleCollections();
                    setMobileMenuOpen(false);
                  }}
                  className={`nav-button w-full justify-start ${showCollections ? 'active' : ''}`}
                >
                  <FolderPlus size={20} />
                  <span>Colecciones</span>
                </button>
              )}

              {/* Mobile User Section */}
              <div className="pt-4 mt-4 border-t border-purple-500/30">
                {currentBeing ? (
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between px-3 py-2">
                      <span className="text-sm text-gray-300">Conectado como:</span>
                      <span className="text-sm font-medium">{currentBeing.avatarName}</span>
                    </div>
                    <button
                      onClick={() => {
                        onShowDashboard();
                        setMobileMenuOpen(false);
                      }}
                      className="nav-button w-full justify-start"
                    >
                      <Brain size={20} />
                      <span>Dashboard Personal</span>
                    </button>
                    <button
                      onClick={() => {
                        onLogout();
                        setMobileMenuOpen(false);
                      }}
                      className="nav-button w-full justify-start"
                    >
                      <LogOut size={20} />
                      <span>Desconectar</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      (onShowQuickConnect || onShowAuth)();
                      setMobileMenuOpen(false);
                    }}
                    className="connect-button w-full"
                  >
                    <LogIn size={20} />
                    <span>Conectar como Ser</span>
                  </button>
                )}
              </div>
            </nav>
          </div>
        )}
      </header>
      
      {/* Connection Status Indicator - Flotante */}
      <div className="connection-indicator">
        <div className={`connection-light ${isConnected ? 'online' : 'offline'}`} />
      </div>
    </>
  );
};

export default Header;