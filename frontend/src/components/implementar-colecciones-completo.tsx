// 🎬 ACTUALIZACIÓN COMPLETA PARA SISTEMA DE COLECCIONES

// ===============================================
// 1. EN App.tsx - ACTUALIZAR EL HEADER
// ===============================================

// BUSCAR esta línea (aparece varias veces):
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

// REEMPLAZAR con:
<Header
  currentView={currentView}
  currentBeing={currentBeing}
  isConnected={isConnected}
  systemStatus={systemStatus}
  onViewChange={handleViewChange}
  onShowAuth={handleShowAuth}
  onLogout={handleLogout}
  onShowDashboard={handleShowDashboard}
  showCollections={showCollections}
  onToggleCollections={() => setShowCollections(!showCollections)}
/>

// ===============================================
// 2. EN Header.tsx - AGREGAR PROPS Y BOTÓN
// ===============================================

// A) ACTUALIZAR la interface HeaderProps:
interface HeaderProps {
  currentView: string;
  currentBeing: any;
  isConnected: boolean;
  systemStatus: any;
  onViewChange: (view: string) => void;
  onShowAuth: () => void;
  onLogout: () => void;
  onShowDashboard: () => void;
  showCollections?: boolean;           // AGREGAR
  onToggleCollections?: () => void;    // AGREGAR
}

// B) ACTUALIZAR los parámetros del componente:
const Header: React.FC<HeaderProps> = ({
  currentView,
  currentBeing,
  isConnected,
  systemStatus,
  onViewChange,
  onShowAuth,
  onLogout,
  onShowDashboard,
  showCollections,           // AGREGAR
  onToggleCollections        // AGREGAR
}) => {

// C) IMPORTAR FolderPlus al inicio del archivo:
import { Brain, Users, Film, MessageCircle, Search, LogIn, LogOut, Menu, X, FolderPlus } from 'lucide-react';

// D) AGREGAR EL BOTÓN DE COLECCIONES después del botón de Chat:

// En la navegación desktop (después del botón de Chat):
<button 
  onClick={() => handleNavClick('chat')}
  className={`nav-button ${currentView === 'chat' ? 'active' : ''}`}
>
  <MessageCircle size={20} />
  <span>Chat</span>
  <span className="counter-badge">
    {systemStatus?.active_rooms || 4}
  </span>
</button>

{/* AGREGAR ESTE BOTÓN NUEVO */}
{onToggleCollections && (
  <button 
    onClick={onToggleCollections}
    className={`nav-button ${showCollections ? 'active' : ''}`}
  >
    <FolderPlus size={20} />
    <span>Colecciones</span>
  </button>
)}

// E) TAMBIÉN AGREGARLO en la navegación móvil (después del botón de Chat móvil):
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

{/* AGREGAR ESTE BOTÓN NUEVO PARA MÓVIL */}
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

// ===============================================
// 3. EN App.tsx - AGREGAR EL PANEL DE COLECCIONES
// ===============================================

// DESPUÉS de la línea {currentView === 'search' && renderSearch()}
// AGREGAR:
{showCollections && (
  <div className="collections-panel">
    <CollectionManager
      movies={movies}  // Cambiar de 'cinemateca' a 'movies'
      onCollectionSelect={(collectionId) => {
        setSelectedCollectionId(collectionId);
        console.log('Colección seleccionada:', collectionId);
      }}
      currentCollectionId={selectedCollectionId}
    />
  </div>
)}

// ===============================================
// 4. ESTILOS CSS PARA App.css
// ===============================================

.collections-panel {
  position: fixed;
  top: 120px; /* Ajustado para header + mode selector */
  left: 0;
  bottom: 0;
  width: 100%;
  background: #1a1a1a;
  z-index: 100;
  overflow: hidden;
  animation: slideInLeft 0.3s ease-out;
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}