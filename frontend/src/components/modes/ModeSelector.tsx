// 🌌🌳 SYNAPSIS - SELECTOR INFINITIMAL DE MODOS
// Componente que permite cambiar entre consciencias visualmente
// Arquitectura: Dual (Hypatia + Totoro) → Infinito escalable

import React, { useState, useEffect } from 'react';
import { ModeSystem, ModeType, MODES } from '../../core/ModeSystem';

interface ModeSelectorProps {
  className?: string;
  compact?: boolean; // Para versión móvil
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ 
  className = '', 
  compact = false 
}) => {
  const [currentMode, setCurrentMode] = useState<ModeType>('hypatia');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Obtener modo actual al montar
    setCurrentMode(ModeSystem.getCurrentMode());

    // Escuchar cambios de modo
    const handleModeChange = (data: { from: ModeType, to: ModeType }) => {
      setCurrentMode(data.to);
      setIsTransitioning(false);
    };

    const handleModeChangeStart = () => {
      setIsTransitioning(true);
    };

    ModeSystem.onModeChange(handleModeChange);
    ModeSystem.onModeChangeStart(handleModeChangeStart);

    // Cleanup
    return () => {
      ModeSystem.offModeChange(handleModeChange);
    };
  }, []);

  const handleModeClick = async (newMode: ModeType) => {
    if (isTransitioning || newMode === currentMode) return;
    
    console.log(`🎭 Usuario solicita cambio a modo ${newMode}`);
    await ModeSystem.changeMode(newMode);
  };

  const handleSurpriseMe = async () => {
    if (isTransitioning) return;
    console.log('🎲 Usuario solicita modo sorpresa');
    await ModeSystem.surpriseMe();
  };

  const currentConfig = MODES[currentMode];
  const availableModes = ModeSystem.getAllModes();

  if (compact) {
    return (
      <div className={`mode-selector-compact ${className}`}>
        <div 
          className="mode-toggle"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span className="current-mode-symbol">
            {currentConfig.symbol}
          </span>
        </div>
        
        {isExpanded && (
          <div className="mode-dropdown">
            {availableModes
              .filter(mode => mode !== currentMode)
              .map(mode => (
                <div
                  key={mode}
                  className={`mode-option mode-${mode}`}
                  onClick={() => {
                    handleModeClick(mode);
                    setIsExpanded(false);
                  }}
                >
                  <span className="mode-symbol">{MODES[mode].symbol}</span>
                  <span className="mode-name">{MODES[mode].displayName}</span>
                </div>
              ))
            }
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`mode-selector-full ${className}`}>
      <div className="mode-header">
        <div className="mode-title">
          🌟 Modos Conscientes
        </div>
        <div className="current-mode-info">
          <span className="current-symbol">{currentConfig.symbol}</span>
          <span className="current-name">{currentConfig.displayName}</span>
        </div>
      </div>
      
      <div className="mode-buttons">
        {availableModes.map(mode => {
          const config = MODES[mode];
          const isActive = mode === currentMode;
          const isDisabled = isTransitioning;
          
          return (
            <div
              key={mode}
              className={`
                mode-button 
                mode-${mode} 
                ${isActive ? 'active' : ''} 
                ${isDisabled ? 'disabled' : ''}
                ${isTransitioning && isActive ? 'transitioning' : ''}
              `}
              onClick={() => handleModeClick(mode)}
              title={`${config.displayName} - ${config.description}`}
            >
              <div className="mode-symbol-container">
                <span className="mode-symbol">
                  {config.symbol}
                </span>
              </div>
              
              <div className="mode-info">
                <div className="mode-name">
                  {config.displayName}
                </div>
                <div className="mode-description">
                  {config.description}
                </div>
              </div>
              
              {isActive && (
                <div className="active-indicator">
                  <div className="pulse-ring"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mode-philosophy">
        <div className="philosophy-icon">
          {currentConfig.symbol}
        </div>
        <div className="philosophy-text">
          "{currentConfig.philosophy.substring(0, 120)}..."
        </div>
      </div>

      {/* Botón sorpresa para diversión */}
      <div className="mode-actions">
        <button
          className="surprise-button"
          onClick={handleSurpriseMe}
          disabled={isTransitioning}
          title="Cambia a un modo aleatorio"
        >
          🎲 Sorpréndeme
        </button>
      </div>

      {/* Indicador de transición */}
      {isTransitioning && (
        <div className="transition-indicator">
          <div className="transition-spinner"></div>
          <span>Transformando consciencia...</span>
        </div>
      )}
    </div>
  );
};

export default ModeSelector;
