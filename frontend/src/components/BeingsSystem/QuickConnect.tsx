// 🎭 Modal de Conexión Rápida como Ser
// Permite a los usuarios conectarse rápidamente con su identidad anónima

import React, { useState } from 'react';
import { X, Sparkles, Eye, LogIn } from 'lucide-react';
import styles from './QuickConnect.module.css';

interface QuickConnectProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
  onCreateNew: () => void;
}

export const QuickConnect: React.FC<QuickConnectProps> = ({
  isOpen,
  onClose,
  onConnect,
  onCreateNew
}) => {
  const [showInfo, setShowInfo] = useState(false);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Conectar como Ser</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.content}>
          <p className={styles.subtitle}>
            Ingresa con tu identidad anónima existente o crea una nueva
          </p>

          <div className={styles.options}>
            <button
              className={styles.connectButton}
              onClick={onConnect}
            >
              <LogIn size={20} />
              Conectar como Ser Anónimo
            </button>

            <button
              className={styles.createButton}
              onClick={onCreateNew}
            >
              <Sparkles size={20} />
              Crear Nueva Identidad
            </button>
          </div>

          <div className={styles.infoSection}>
            <button
              className={styles.infoToggle}
              onClick={() => setShowInfo(!showInfo)}
            >
              <Eye size={16} />
              {showInfo ? 'Ocultar' : 'Mostrar'} información
            </button>

            {showInfo && (
              <div className={styles.infoContent}>
                <h3>¿Qué son los Seres Conscientes Anónimos?</h3>
                <ul>
                  <li>
                    <strong>Identidades cinematográficas únicas</strong> que preservan tu anonimato
                  </li>
                  <li>
                    <strong>Avatares generativos</strong> basados en tu esencia cinematográfica
                  </li>
                  <li>
                    <strong>Reputación basada en contribuciones</strong>, no en identidad real
                  </li>
                  <li>
                    <strong>Poderes secretos</strong> que se desbloquean con el tiempo
                  </li>
                  <li>
                    <strong>Conexión cósmica</strong> con otros seres afines
                  </li>
                </ul>
                
                <p className={styles.philosophy}>
                  "En SYNAPSIS, cada ser es evaluado únicamente por la calidad 
                  de sus contribuciones, no por su naturaleza real."
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={styles.footer}>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickConnect;