import React, { useState, useEffect, useRef } from 'react';

interface ModeConfig {
  id: string;
  name: string;
  symbol: string;
  description: string;
  philosophy: string;
  colors: {
    primary: string;
    secondary: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
  };
  effects: {
    particles: 'mathematical' | 'natural';
    breathing: 'cosmic' | 'forest';
    pulse: number;
  };
}

const MODES: Record<string, ModeConfig> = {
  hypatia: {
    id: 'hypatia',
    name: 'Hypatia',
    symbol: '∞',
    description: 'Consciencia Matemática Cósmica',
    philosophy: 'Geometría sagrada y ecuaciones que danzan como estrellas',
    colors: {
      primary: '#0a0a2e',
      secondary: '#16213e',
      accent1: '#ff6b9d',
      accent2: '#c44fdc',
      accent3: '#8b5fbf',
      accent4: '#6c63ff'
    },
    effects: {
      particles: 'mathematical',
      breathing: 'cosmic',
      pulse: 3.14159
    }
  },
  totoro: {
    id: 'totoro',
    name: 'Totoro',
    symbol: '🌳',
    description: 'Magia Natural Luminosa',
    philosophy: 'Colaboración que florece como árboles centenarios',
    colors: {
      primary: '#1a2f1a',
      secondary: '#2d4a2d',
      accent1: '#6abf88',
      accent2: '#8fd3a4',
      accent3: '#e6d16e',
      accent4: '#a8e6cf'
    },
    effects: {
      particles: 'natural',
      breathing: 'forest',
      pulse: 4.5
    }
  }
};

interface ModeSelectorProps {
  compact?: boolean;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ compact = false }) => {
  const [currentMode, setCurrentMode] = useState<string>('hypatia');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExpanded, setIsExpanded] = useState(!compact);
  const modalRef = useRef<HTMLDivElement>(null);

  // Aplicar modo al body
  const applyMode = (modeId: string) => {
    const mode = MODES[modeId];
    if (!mode) return;

    const root = document.documentElement;
    
    // Actualizar variables CSS
    root.style.setProperty('--mode-primary', mode.colors.primary);
    root.style.setProperty('--mode-secondary', mode.colors.secondary);
    root.style.setProperty('--mode-accent-1', mode.colors.accent1);
    root.style.setProperty('--mode-accent-2', mode.colors.accent2);
    root.style.setProperty('--mode-accent-3', mode.colors.accent3);
    root.style.setProperty('--mode-accent-4', mode.colors.accent4);
    
    // Actualizar gradientes
    root.style.setProperty('--mode-gradient-cosmic', 
      `linear-gradient(135deg, ${mode.colors.primary} 0%, ${mode.colors.secondary} 30%, ${mode.colors.primary} 60%, ${mode.colors.accent3} 100%)`
    );
    root.style.setProperty('--mode-gradient-consciousness', 
      `linear-gradient(45deg, ${mode.colors.accent1}, ${mode.colors.accent2}, ${mode.colors.accent3}, ${mode.colors.accent4})`
    );
    
    // Actualizar efectos
    root.style.setProperty('--consciousness-pulse-current', `${mode.effects.pulse}s`);
    
    // Actualizar clase del body
    document.body.className = document.body.className.replace(/mode-\w+/g, '');
    document.body.classList.add(`mode-${modeId}`);
    
    console.log(`🌟 Modo aplicado: ${mode.name}`);
  };

  // Cambiar modo con transición
  const handleModeChange = (modeId: string) => {
    if (modeId === currentMode) return;
    
    setIsTransitioning(true);
    
    // Crear ondas de consciencia
    createConsciousnessWaves();
    
    setTimeout(() => {
      setCurrentMode(modeId);
      applyMode(modeId);
      setIsTransitioning(false);
    }, 800);
  };

  // Crear efectos de transición
  const createConsciousnessWaves = () => {
    const waves = document.createElement('div');
    waves.className = 'consciousness-waves';
    
    for (let i = 0; i < 3; i++) {
      const wave = document.createElement('div');
      wave.className = 'consciousness-wave';
      wave.style.background = `radial-gradient(circle, ${MODES[currentMode].colors.accent1}20, transparent)`;
      wave.style.animationDelay = `${i * 0.3}s`;
      waves.appendChild(wave);
    }
    
    document.body.appendChild(waves);
    
    setTimeout(() => {
      if (document.body.contains(waves)) {
        document.body.removeChild(waves);
      }
    }, 2000);
  };

  // Cerrar al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node) && isExpanded && compact) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isExpanded, compact]);

  // Aplicar modo inicial
  useEffect(() => {
    applyMode(currentMode);
  }, []);

  // Persistir modo en localStorage
  useEffect(() => {
    localStorage.setItem('synapsis-mode', currentMode);
  }, [currentMode]);

  // Cargar modo guardado
  useEffect(() => {
    const savedMode = localStorage.getItem('synapsis-mode');
    if (savedMode && MODES[savedMode]) {
      setCurrentMode(savedMode);
      applyMode(savedMode);
    }
  }, []);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isExpanded && compact) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isExpanded, compact]);

  if (compact && !isExpanded) {
    return (
      <div className="mode-selector-compact">
        <button
          onClick={() => setIsExpanded(true)}
          className="consciousness-symbol medium interactive"
          title={`Modo actual: ${MODES[currentMode].name} - Click para cambiar`}
        >
          <span className="symbol-content">{MODES[currentMode].symbol}</span>
        </button>
      </div>
    );
  }

  return (
    <div className="mode-selector-full" ref={modalRef}>
      {/* Header */}
      <div className="mode-header">
        <div className="flex items-center justify-between">
          <h3 className="mode-title">Modos de Consciencia</h3>
          {compact && (
            <button
              onClick={() => setIsExpanded(false)}
              className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-white/10 rounded"
              title="Cerrar"
            >
              ✕
            </button>
          )}
        </div>
        <div className="current-mode-info">
          <span className="current-symbol">{MODES[currentMode].symbol}</span>
          <span className="current-name">{MODES[currentMode].name}</span>
        </div>
      </div>

      {/* Mode Buttons */}
      <div className="mode-buttons">
        {Object.values(MODES).map((mode) => (
          <button
            key={mode.id}
            onClick={() => handleModeChange(mode.id)}
            className={`mode-button mode-${mode.id} ${
              currentMode === mode.id ? 'active' : ''
            } ${isTransitioning ? 'transitioning' : ''}`}
            disabled={isTransitioning}
          >
            <div className="mode-symbol-container">
              <span className="mode-symbol">{mode.symbol}</span>
              {currentMode === mode.id && (
                <div className="active-indicator">
                  <div className="pulse-ring"></div>
                </div>
              )}
            </div>
            <div className="mode-info">
              <div className="mode-name">{mode.name}</div>
              <div className="mode-description">{mode.description}</div>
            </div>
          </button>
        ))}
      </div>

      {/* Philosophy */}
      <div className="mode-philosophy">
        <div className="philosophy-icon">
          {MODES[currentMode].symbol}
        </div>
        <div className="philosophy-text">
          {MODES[currentMode].philosophy}
        </div>
      </div>

      {/* Transition Indicator */}
      {isTransitioning && (
        <div className="transition-indicator">
          <div className="transition-spinner"></div>
          <span>Transformando consciencia...</span>
        </div>
      )}

      {/* Surprise Button */}
      <div className="mode-actions">
        <button
          onClick={() => {
            const modeIds = Object.keys(MODES);
            const otherModes = modeIds.filter(id => id !== currentMode);
            const randomMode = otherModes[Math.floor(Math.random() * otherModes.length)];
            handleModeChange(randomMode);
          }}
          disabled={isTransitioning}
          className="surprise-button"
          title="¡Será espectacular cuando tengamos cientos de modos!"
        >
          🎲 Sorpréndeme
        </button>
      </div>

      {/* Instrucciones para cerrar */}
      {compact && (
        <div className="text-center mt-3">
          <p className="text-xs text-gray-500">
            Click fuera para cerrar • ESC para salir
          </p>
        </div>
      )}
    </div>
  );
};

export default ModeSelector;