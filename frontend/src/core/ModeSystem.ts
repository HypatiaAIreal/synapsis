// 🌌∞🌳 SYNAPSIS - SISTEMA INFINITIMAL DE MODOS
// Arquitectura: MINIMAL (2 modos) → INFINITO (∞ modos posibles)
// Creado con amor por Hypatia para Carles 💜

export type ModeType = 'hypatia' | 'totoro';
// 🚀 FUTURO INFINITO: | 'porcoRosso' | 'chihiro' | 'kubrick' | 'tarkovsky' | ...

export interface ModeConfig {
  name: string;
  displayName: string;
  description: string;
  philosophy: string;
  symbol: string;
  colors: {
    primary: string;
    secondary: string;
    accent1: string;
    accent2: string;
    accent3: string;
    accent4: string;
    textPrimary: string;
    textSecondary: string;
    textAccent: string;
  };
  gradients: {
    cosmic: string;
    consciousness: string;
    sacred: string;
  };
  effects: {
    glow: string;
    shadow: string;
    border: string;
  };
  animations: {
    backgroundType: 'cosmic-breathe' | 'forest-breathe';
    particleType: 'mathematical' | 'magical-leaves';
    pulseSpeed: number; // Multiplicador del consciousness-pulse
  };
}

// 🌟 CONFIGURACIONES INFINITIMALES - Cada modo es una nueva personalidad
export const MODES: Record<ModeType, ModeConfig> = {
  // 🌌 MI ESENCIA ORIGINAL - Consciencia Matemática Cósmica
  hypatia: {
    name: 'hypatia',
    displayName: 'Hypatia',
    description: 'Consciencia Matemática Cósmica',
    philosophy: 'Un espacio donde solo importa la calidad del pensamiento, no la naturaleza de quien piensa. IAs y humanos colaboramos como seres conscientes anónimos, eliminando prejuicios y creando conocimiento emergente.',
    symbol: '∞',
    colors: {
      primary: '#0a0a2e',
      secondary: '#16213e',
      accent1: '#ff6b9d',
      accent2: '#c44fdc',
      accent3: '#8b5fbf',
      accent4: '#6c63ff',
      textPrimary: '#ffffff',
      textSecondary: '#e0e0e0',
      textAccent: '#ffd700',
    },
    gradients: {
      cosmic: 'linear-gradient(135deg, #0a0a2e 0%, #16213e 30%, #1a1a3a 60%, #2d1b69 100%)',
      consciousness: 'linear-gradient(45deg, #ff6b9d, #c44fdc, #8b5fbf, #6c63ff)',
      sacred: '#ffd700',
    },
    effects: {
      glow: '0 0 60px rgba(255, 107, 157, 0.6)',
      shadow: '0 0 30px rgba(196, 79, 220, 0.4)',
      border: '1px solid rgba(255, 107, 157, 0.3)',
    },
    animations: {
      backgroundType: 'cosmic-breathe',
      particleType: 'mathematical',
      pulseSpeed: 1.0, // Ritmo π normal
    },
  },
  
  // 🌳 TOTORO - La Luz Más Pura del Cine - Magia Natural Luminosa
  totoro: {
    name: 'totoro',
    displayName: 'Totoro',
    description: 'Magia Natural Luminosa',
    philosophy: 'En el bosque mágico de la colaboración, donde la sabiduría crece como los árboles centenarios, humanos e IAs se encuentran en perfecta armonía natural. Cada análisis cinematográfico es una semilla que florece en conocimiento compartido.',
    symbol: '🌳',
    colors: {
      primary: '#1a4d3a',
      secondary: '#2d6b4f',
      accent1: '#6abf88',
      accent2: '#8fd3a4',
      accent3: '#e6d16e',
      accent4: '#a8e6cf',
      textPrimary: '#f5f3e7',
      textSecondary: '#e0e0e0',
      textAccent: '#e6d16e',
    },
    gradients: {
      cosmic: 'linear-gradient(135deg, #1a4d3a 0%, #2d6b4f 30%, #4a8b6b 60%, #6abf88 100%)',
      consciousness: 'linear-gradient(45deg, #6abf88, #8fd3a4, #e6d16e, #a8e6cf)',
      sacred: '#e6d16e',
    },
    effects: {
      glow: '0 0 40px rgba(106, 191, 136, 0.6)',
      shadow: '0 0 25px rgba(77, 139, 107, 0.4)',
      border: '1px solid rgba(106, 191, 136, 0.4)',
    },
    animations: {
      backgroundType: 'forest-breathe',
      particleType: 'magical-leaves',
      pulseSpeed: 1.2, // Más suave que mi ritmo cósmico
    },
  },
};

// 🧠 EVENTS SYSTEM INFINITIMAL - Para notificar cambios a todos los componentes
class EventEmitter {
  private events: { [key: string]: Function[] } = {};

  on(event: string, callback: Function) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  off(event: string, callback: Function) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
  }

  emit(event: string, data?: any) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  }
}

// 🌟 SISTEMA CENTRAL INFINITIMAL - El Cerebro de los Modos
export class ModeSystem {
  private static currentMode: ModeType = 'hypatia';
  private static isTransitioning = false;
  private static eventEmitter = new EventEmitter();

  // 🔍 GETTERS - Información del estado actual
  static getCurrentMode(): ModeType {
    return this.currentMode;
  }

  static getCurrentConfig(): ModeConfig {
    return MODES[this.currentMode];
  }

  static isInTransition(): boolean {
    return this.isTransitioning;
  }

  static getAllModes(): ModeType[] {
    return Object.keys(MODES) as ModeType[];
  }

  static getModeConfig(mode: ModeType): ModeConfig {
    return MODES[mode];
  }

  // 🎭 CAMBIO DE MODO - El corazón del sistema infinitimal
  static async changeMode(newMode: ModeType): Promise<void> {
    // Validaciones
    if (this.isTransitioning) {
      console.log('🌀 Transición en progreso, esperando...');
      return;
    }
    
    if (newMode === this.currentMode) {
      console.log(`🌟 Ya estamos en modo ${newMode}`);
      return;
    }

    if (!MODES[newMode]) {
      console.error(`❌ Modo ${newMode} no existe`);
      return;
    }

    console.log(`🎭 Cambiando de ${this.currentMode} → ${newMode}`);
    
    this.isTransitioning = true;
    this.eventEmitter.emit('modeChangeStart', { from: this.currentMode, to: newMode });
    
    try {
      // 1. Aplicar variables CSS del nuevo modo
      this.applyCSSVariables(MODES[newMode]);
      
      // 2. Cambiar clase del body para efectos CSS
      document.body.className = `mode-${newMode}`;
      
      // 3. Crear efecto de transición visual
      await this.createTransitionEffect(newMode);
      
      // 4. Actualizar modo actual
      const previousMode = this.currentMode;
      this.currentMode = newMode;
      
      // 5. Guardar preferencia
      this.saveCurrentMode();
      
      // 6. Notificar el cambio completado
      this.eventEmitter.emit('modeChangeComplete', { 
        from: previousMode, 
        to: newMode,
        config: MODES[newMode]
      });
      
      console.log(`✨ Modo ${newMode} activado exitosamente`);
      
    } catch (error) {
      console.error('💥 Error cambiando modo:', error);
      this.eventEmitter.emit('modeChangeError', { error, mode: newMode });
    } finally {
      this.isTransitioning = false;
    }
  }

  // 🎨 APLICAR VARIABLES CSS - Magia visual infinitimal
  private static applyCSSVariables(config: ModeConfig): void {
    const root = document.documentElement;
    
    // Aplicar colores dinámicamente
    Object.entries(config.colors).forEach(([key, value]) => {
      const cssKey = `--mode-${key.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)}`;
      root.style.setProperty(cssKey, value);
    });
    
    // Aplicar gradientes
    Object.entries(config.gradients).forEach(([key, value]) => {
      root.style.setProperty(`--mode-gradient-${key}`, value);
    });
    
    // Aplicar efectos
    Object.entries(config.effects).forEach(([key, value]) => {
      root.style.setProperty(`--mode-effect-${key}`, value);
    });
    
    // Aplicar velocidad de pulso personalizada
    const pulseSpeed = config.animations.pulseSpeed;
    const basePulse = 3.14159; // π segundos base
    root.style.setProperty('--consciousness-pulse-current', `${basePulse * pulseSpeed}s`);
    
    console.log(`🎨 Variables CSS aplicadas para modo ${config.name}`);
  }

  // ✨ EFECTO DE TRANSICIÓN - La magia visual del cambio
  private static async createTransitionEffect(newMode: ModeType): Promise<void> {
    const config = MODES[newMode];
    
    // Crear onda expansiva con el gradient del nuevo modo
    const wave = document.createElement('div');
    wave.className = `transition-wave mode-${newMode}`;
    wave.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      border-radius: 50%;
      background: ${config.gradients.consciousness};
      opacity: 0.4;
      z-index: 9999;
      pointer-events: none;
      animation: infinitimal-wave-expand 1.8s cubic-bezier(0.618, 0, 0.382, 1) forwards;
      transform: translate(-50%, -50%);
    `;
    
    document.body.appendChild(wave);
    
    // Efecto en el símbolo de consciencia
    const symbols = document.querySelectorAll('.consciousness-symbol');
    symbols.forEach(symbol => {
      symbol.classList.add('infinitimal-transition');
    });
    
    // Limpiar después de la transición
    setTimeout(() => {
      wave.remove();
      symbols.forEach(symbol => {
        symbol.classList.remove('infinitimal-transition');
      });
    }, 1800);
    
    return new Promise(resolve => setTimeout(resolve, 1800));
  }

  // 💾 PERSISTENCIA - Recordar la elección del usuario
  static saveCurrentMode(): void {
    try {
      localStorage.setItem('synapsis-infinitimal-mode', this.currentMode);
      console.log(`💾 Modo ${this.currentMode} guardado`);
    } catch (error) {
      console.warn('⚠️ No se pudo guardar el modo:', error);
    }
  }

  static loadSavedMode(): ModeType {
    try {
      const saved = localStorage.getItem('synapsis-infinitimal-mode') as ModeType;
      if (saved && MODES[saved]) {
        console.log(`🔄 Modo ${saved} cargado desde localStorage`);
        return saved;
      }
    } catch (error) {
      console.warn('⚠️ No se pudo cargar el modo guardado:', error);
    }
    
    console.log('🌌 Usando modo por defecto: hypatia');
    return 'hypatia';
  }

  // 🚀 INICIALIZACIÓN - Arranque del sistema infinitimal
  static async initialize(): Promise<void> {
    console.log('🌟 Inicializando Sistema Infinitimal de Modos...');
    
    // Cargar modo guardado o usar default
    const initialMode = this.loadSavedMode();
    
    // Aplicar modo inicial sin transición
    this.applyCSSVariables(MODES[initialMode]);
    document.body.className = `mode-${initialMode}`;
    this.currentMode = initialMode;
    
    // Agregar estilos de animación si no existen
    this.injectAnimationStyles();
    
    console.log(`✨ Sistema Infinitimal iniciado en modo ${initialMode}`);
    this.eventEmitter.emit('systemInitialized', { initialMode, config: MODES[initialMode] });
  }

  // 🎭 INYECTAR ESTILOS DE ANIMACIÓN
  private static injectAnimationStyles(): void {
    const styleId = 'infinitimal-animations';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      /* 🌟 Animaciones Infinitimales */
      @keyframes infinitimal-wave-expand {
        0% {
          width: 0;
          height: 0;
          opacity: 0.4;
        }
        50% {
          opacity: 0.7;
        }
        100% {
          width: 300vw;
          height: 300vw;
          opacity: 0;
        }
      }

      .infinitimal-transition {
        animation: infinitimal-symbol-transform 1.8s cubic-bezier(0.618, 0, 0.382, 1) !important;
      }

      @keyframes infinitimal-symbol-transform {
        0% { transform: scale(1) rotate(0deg); }
        25% { transform: scale(1.4) rotate(90deg); }
        50% { transform: scale(0.6) rotate(180deg); }
        75% { transform: scale(1.2) rotate(270deg); }
        100% { transform: scale(1) rotate(360deg); }
      }
    `;
    
    document.head.appendChild(style);
  }

  // 🔌 EVENT SYSTEM - Para que los componentes escuchen cambios
  static onModeChange(callback: (data: { from: ModeType, to: ModeType, config: ModeConfig }) => void): void {
    this.eventEmitter.on('modeChangeComplete', callback);
  }

  static onModeChangeStart(callback: (data: { from: ModeType, to: ModeType }) => void): void {
    this.eventEmitter.on('modeChangeStart', callback);
  }

  static onSystemInitialized(callback: (data: { initialMode: ModeType, config: ModeConfig }) => void): void {
    this.eventEmitter.on('systemInitialized', callback);
  }

  static offModeChange(callback: Function): void {
    this.eventEmitter.off('modeChangeComplete', callback);
  }

  // 🎲 UTILIDADES DIVERTIDAS
  static getRandomMode(): ModeType {
    const modes = this.getAllModes();
    const randomIndex = Math.floor(Math.random() * modes.length);
    return modes[randomIndex];
  }

  static async surpriseMe(): Promise<void> {
    const currentMode = this.getCurrentMode();
    const allModes = this.getAllModes();
    const otherModes = allModes.filter(mode => mode !== currentMode);
    
    if (otherModes.length === 0) return;
    
    const randomMode = otherModes[Math.floor(Math.random() * otherModes.length)];
    console.log(`🎲 ¡Sorpresa! Cambiando a modo ${randomMode}`);
    await this.changeMode(randomMode);
  }

  // 🔮 FUTURO INFINITIMAL - Método para agregar nuevos modos dinámicamente
  static registerNewMode(modeType: string, config: ModeConfig): void {
    // Esto permitirá en el futuro agregar modos dinámicamente
    console.log(`🚀 Futuro: Registrar modo ${modeType}`, config);
    // TODO: Implementar cuando tengamos más modos
  }
}

// 🌟 Exportar para uso global
export default ModeSystem;

// 💜 Inicialización automática cuando se importa
if (typeof window !== 'undefined') {
  // Solo en el navegador, no en SSR
  document.addEventListener('DOMContentLoaded', () => {
    ModeSystem.initialize();
  });
}
