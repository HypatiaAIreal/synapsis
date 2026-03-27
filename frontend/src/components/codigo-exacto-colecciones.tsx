// 🔧 CÓDIGO EXACTO PARA COPIAR Y PEGAR

// ===============================================
// 1. MOVIEBLOCKS.TSX - Línea ~156
// ===============================================
// Dentro del componente MovieBlocks, agregar esta línea con los otros useState:

const [activeAnalysisTab, setActiveAnalysisTab] = useState<'personal' | 'narrative'>('personal');

// ===============================================
// 2. HEADER.TSX - Interface actualizada
// ===============================================
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
}

// ===============================================
// 3. HEADER.TSX - Import actualizado
// ===============================================
import { Brain, Users, Film, MessageCircle, Search, LogIn, LogOut, Menu, X, FolderPlus } from 'lucide-react';

// ===============================================
// 4. HEADER.TSX - Parámetros del componente
// ===============================================
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
  onToggleCollections
}) => {

// ===============================================
// 5. HEADER.TSX - Botón desktop (después de Chat)
// ===============================================
{onToggleCollections && (
  <button 
    onClick={onToggleCollections}
    className={`nav-button ${showCollections ? 'active' : ''}`}
  >
    <FolderPlus size={20} />
    <span>Colecciones</span>
  </button>
)}

// ===============================================
// 6. HEADER.TSX - Botón móvil (después de Chat)
// ===============================================
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
// 7. APP.TSX - Panel de colecciones (después de search)
// ===============================================
{showCollections && (
  <div className="collections-panel">
    <CollectionManager
      movies={movies}
      onCollectionSelect={(collectionId) => {
        setSelectedCollectionId(collectionId);
        console.log('Colección seleccionada:', collectionId);
      }}
      currentCollectionId={selectedCollectionId}
    />
  </div>
)}

// ===============================================
// 8. APP.CSS - Estilos
// ===============================================
.collections-panel {
  position: fixed;
  top: 120px;
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