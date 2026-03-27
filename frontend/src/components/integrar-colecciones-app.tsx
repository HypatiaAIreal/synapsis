// 📚 INTEGRAR SISTEMA DE COLECCIONES EN App.tsx

// 1. IMPORTAR AL INICIO:
import { CollectionManager } from './components/Collections/CollectionManager';

// 2. AGREGAR ESTADO (después de otros useState):
const [showCollections, setShowCollections] = useState(false);
const [selectedCollectionId, setSelectedCollectionId] = useState('all-movies');

// 3. EN EL HEADER, AGREGAR BOTÓN DE COLECCIONES:
// Después del botón de Cinemateca, agregar:
<button
  onClick={() => setShowCollections(!showCollections)}
  className={`nav-item ${showCollections ? 'active' : ''}`}
>
  <FolderPlus size={20} />
  <span>Colecciones</span>
</button>

// 4. EN EL CONTENIDO PRINCIPAL, AGREGAR:
// Después de {activeView === 'dashboard' && ...}
{activeView === 'search' && showCollections && (
  <div className="collections-panel">
    <CollectionManager
      movies={cinemateca}
      onCollectionSelect={(collectionId) => {
        setSelectedCollectionId(collectionId);
        // Aquí puedes filtrar las películas según la colección
        console.log('Colección seleccionada:', collectionId);
      }}
      currentCollectionId={selectedCollectionId}
    />
  </div>
)}

// 5. AGREGAR ESTILOS EN App.css:
.collections-panel {
  position: fixed;
  top: 60px;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #1a1a1a;
  z-index: 100;
  overflow: hidden;
}

// 6. IMPORTAR lucide-react icons si no están:
import { FolderPlus } from 'lucide-react';