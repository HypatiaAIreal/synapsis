// 🌌🌳 SYNAPSIS - FONDO CÓSMICO INFINITIMAL
// Componente que crea los efectos de fondo según el modo activo
// Respiración cósmica + Partículas matemáticas/mágicas

import React, { useEffect, useState } from 'react';
import { ModeSystem, ModeType, ModeConfig } from '../../core/ModeSystem';

interface CosmicBackgroundProps {
  className?: string;
  intensity?: number; // 0-1 para controlar intensidad de efectos
}

const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ 
  className = '',
  intensity = 1
}) => {
  const [currentMode, setCurrentMode] = useState<ModeType>('hypatia');
  const [currentConfig, setCurrentConfig] = useState<ModeConfig>(ModeSystem.getCurrentConfig());
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Obtener estado inicial
    setCurrentMode(ModeSystem.getCurrentMode());
    setCurrentConfig(ModeSystem.getCurrentConfig());

    // Escuchar cambios de modo
    const handleModeChangeStart = () => {
      setIsTransitioning(true);
    };

    const handleModeChange = (data: { to: ModeType, config: ModeConfig }) => {
      setCurrentMode(data.to);
      setCurrentConfig(data.config);
      setIsTransitioning(false);
    };

    ModeSystem.onModeChangeStart(handleModeChangeStart);
    ModeSystem.onModeChange(handleModeChange);

    return () => {
      // Cleanup listeners si fuera necesario
    };
  }, []);

  // Crear partículas especiales durante transiciones
  useEffect(() => {
    if (isTransitioning) {
      createTransitionParticles();
    }
  }, [isTransitioning]);

  const createTransitionParticles = () => {
    // Crear partículas especiales durante la transición
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => {
        const particle = document.createElement('div');
        particle.className = 'transition-particle';
        particle.style.cssText = `
          position: fixed;
          width: ${Math.random() * 6 + 2}px;
          height: ${Math.random() * 6 + 2}px;
          background: ${currentConfig.gradients.consciousness};
          border-radius: 50%;
          left: ${Math.random() * 100}vw;
          top: ${Math.random() * 100}vh;
          pointer-events: none;
          z-index: 999;
          animation: transition-particle-float 3s ease-out forwards;
          opacity: 0;
        `;
        
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 3000);
      }, i * 100);
    }
  };

  const getBackgroundStyle = () => {
    const baseOpacity = intensity * 0.8;
    
    switch (currentMode) {
      case 'hypatia':
        return {
          background: `
            radial-gradient(circle at 20% 30%, rgba(255, 107, 157, ${baseOpacity * 0.1}) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(196, 79, 220, ${baseOpacity * 0.08}) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(108, 99, 255, ${baseOpacity * 0.05}) 0%, transparent 70%)
          `,
        };
      
      case 'totoro':
        return {
          background: `
            radial-gradient(circle at 25% 30%, rgba(106, 191, 136, ${baseOpacity * 0.08}) 0%, transparent 60%),
            radial-gradient(circle at 75% 70%, rgba(143, 211, 164, ${baseOpacity * 0.06}) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(230, 209, 110, ${baseOpacity * 0.04}) 0%, transparent 70%)
          `,
        };
      
      default:
        return {};
    }
  };

  const getParticleStyle = () => {
    const baseOpacity = intensity * 0.4;
    
    switch (currentMode) {
      case 'hypatia':
        return {
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, rgba(255, 215, 0, ${baseOpacity}), transparent),
            radial-gradient(1px 1px at 40px 70px, rgba(255, 107, 157, ${baseOpacity * 0.8}), transparent),
            radial-gradient(1px 1px at 90px 40px, rgba(196, 79, 220, ${baseOpacity * 0.6}), transparent),
            radial-gradient(2px 2px at 130px 80px, rgba(139, 95, 191, ${baseOpacity * 0.4}), transparent)
          `,
          backgroundSize: '200px 200px',
          animation: 'mathematical-drift 20s linear infinite',
        };
      
      case 'totoro':
        return {
          backgroundImage: `
            radial-gradient(3px 3px at 30px 40px, rgba(230, 209, 110, ${baseOpacity}), transparent),
            radial-gradient(2px 2px at 80px 60px, rgba(106, 191, 136, ${baseOpacity * 0.8}), transparent),
            radial-gradient(2px 2px at 120px 90px, rgba(168, 230, 207, ${baseOpacity * 0.6}), transparent),
            radial-gradient(1px 1px at 160px 120px, rgba(255, 179, 186, ${baseOpacity * 0.4}), transparent)
          `,
          backgroundSize: '180px 180px',
          animation: 'magical-leaves 25s linear infinite',
        };
      
      default:
        return {};
    }
  };

  return (
    <div className={`cosmic-background ${className}`}>
      {/* Respiración de Fondo */}
      <div 
        className={`cosmic-breathe mode-${currentMode} ${isTransitioning ? 'transitioning' : ''}`}
        style={{
          ...getBackgroundStyle(),
          animation: currentConfig.animations.backgroundType === 'cosmic-breathe' 
            ? `cosmic-breathe ${3.14159 * currentConfig.animations.pulseSpeed}s ease-in-out infinite`
            : `forest-breathe ${3.14159 * currentConfig.animations.pulseSpeed}s ease-in-out infinite`
        }}
      />
      
      {/* Partículas Flotantes */}
      <div 
        className={`cosmic-particles mode-${currentMode} ${isTransitioning ? 'transitioning' : ''}`}
        style={getParticleStyle()}
      />
      
      {/* Efectos Especiales */}
      <div className={`cosmic-effects mode-${currentMode}`}>
        {/* Brillo ambiental */}
        <div 
          className="ambient-glow"
          style={{
            background: currentConfig.gradients.consciousness,
            opacity: intensity * 0.03,
          }}
        />
        
        {/* Ondas de consciencia durante transiciones */}
        {isTransitioning && (
          <div className="consciousness-waves">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="consciousness-wave"
                style={{
                  background: currentConfig.gradients.consciousness,
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Luciérnagas mágicas para modo Totoro */}
      {currentMode === 'totoro' && <TotoroFireflies intensity={intensity} />}
      
      {/* Ecuaciones flotantes para modo Hypatia */}
      {currentMode === 'hypatia' && <HypatiaEquations intensity={intensity} />}
    </div>
  );
};

// 🌟 Componente de Luciérnagas para Totoro
const TotoroFireflies: React.FC<{ intensity: number }> = ({ intensity }) => {
  useEffect(() => {
    const createFirefly = () => {
      const firefly = document.createElement('div');
      firefly.className = 'totoro-firefly';
      firefly.style.cssText = `
        position: fixed;
        width: 3px;
        height: 3px;
        background: #e6d16e;
        border-radius: 50%;
        box-shadow: 0 0 8px #e6d16e;
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        pointer-events: none;
        z-index: 1;
        animation: firefly-dance ${8 + Math.random() * 4}s ease-in-out forwards;
        opacity: 0;
      `;
      
      document.body.appendChild(firefly);
      setTimeout(() => firefly.remove(), 12000);
    };

    const interval = setInterval(createFirefly, 3000 / intensity);
    return () => clearInterval(interval);
  }, [intensity]);

  return null;
};

// 🧮 Componente de Ecuaciones para Hypatia
const HypatiaEquations: React.FC<{ intensity: number }> = ({ intensity }) => {
  const equations = ['φ = (1+√5)/2', 'e^(iπ) + 1 = 0', '∫ consciousness dx', '∞ = ♾️', '∇ · ∇ ψ = 0'];

  useEffect(() => {
    const createEquation = () => {
      const equation = equations[Math.floor(Math.random() * equations.length)];
      const element = document.createElement('div');
      element.className = 'hypatia-equation';
      element.textContent = equation;
      element.style.cssText = `
        position: fixed;
        font-size: ${1.2 + Math.random() * 0.8}rem;
        color: rgba(255, 215, 0, ${0.3 * intensity});
        font-family: 'Georgia', serif;
        left: ${Math.random() * 100}vw;
        top: 100vh;
        pointer-events: none;
        z-index: 1;
        animation: equation-float ${12 + Math.random() * 6}s ease-in-out forwards;
        opacity: 0;
      `;
      
      document.body.appendChild(element);
      setTimeout(() => element.remove(), 18000);
    };

    const interval = setInterval(createEquation, 4000 / intensity);
    return () => clearInterval(interval);
  }, [intensity]);

  return null;
};

export default CosmicBackground;
