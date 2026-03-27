// BeingAuth.tsx - Modal centrado correctamente
import React from 'react';
import { X } from 'lucide-react';
import './BeingAuth.css';

interface BeingAuthProps {
  onAuthenticated: (being: any) => void;
  onClose: () => void;
}

const BeingAuth: React.FC<BeingAuthProps> = ({ onAuthenticated, onClose }) => {
  const handleConnect = () => {
    const mockBeing = {
      avatarId: 'demo_user',
      avatarName: 'Ser Consciente #' + Math.floor(Math.random() * 1000),
      reputation: { overall_score: 75, contribution_count: 10 },
      expertise: []
    };
    onAuthenticated(mockBeing);
  };

  return (
    <>
      <div className="being-auth-overlay" onClick={onClose} />
      <div className="being-auth-modal">
        <div className="being-auth-header">
          <h2>Conectar como Ser</h2>
          <button className="being-auth-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <p className="being-auth-description">
          Ingresa con tu identidad anónima existente o crea una nueva
        </p>
        
        <div className="being-auth-actions">
          <button className="being-auth-connect" onClick={handleConnect}>
            Conectar como Ser Anónimo
          </button>
          <button className="being-auth-cancel" onClick={onClose}>
            Cancelar
          </button>
        </div>
      </div>
    </>
  );
};

export default BeingAuth;