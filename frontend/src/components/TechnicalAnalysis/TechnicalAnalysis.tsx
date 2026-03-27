// 🎬 SISTEMA DE ANÁLISIS TÉCNICO CINEMATOGRÁFICO
// La herramienta más completa para análisis técnico profundo

import React, { useState, useEffect, useCallback } from 'react';
import { 
  Camera, 
  Aperture, 
  Sun, 
  Palette, 
  Music, 
  Film, 
  Scissors,
  Zap,
  Eye,
  Layers,
  Sparkles,
  ChevronRight,
  Check,
  Info
} from 'lucide-react';
import styles from './TechnicalAnalysis.module.css';

// Tipos del sistema
interface TechnicalAnalysisState {
  photography: PhotographyAnalysis;
  sound: SoundAnalysis;
  editing: EditingAnalysis;
  production: ProductionAnalysis;
  colorGrading: ColorGradingAnalysis;
}

interface PhotographyAnalysis {
  camera: {
    type: string[];
    manufacturer: string[];
    model: string[];
    sensor: {
      size: string[];
      resolution: string[];
    };
    movement: {
      techniques: string[];
      style: string[];
    };
  };
  lenses: {
    type: string[];
    focalLength: string[];
    aperture: string[];
    characteristics: string[];
  };
  lighting: {
    style: string[];
    quality: string[];
    colorTemperature: string[];
    techniques: {
      key: string[];
      setup: string[];
      modifiers: string[];
    };
    motivation: string[];
  };
  composition: {
    rules: string[];
    framing: string[];
    depth: string[];
    movement: string[];
  };
}

interface SoundAnalysis {
  design: {
    approach: string[];
    layers: string[];
    spatialization: string[];
  };
  music: {
    style: string[];
    function: string[];
    emotionalRole: string[];
    instrumentation: string[];
  };
  mixing: {
    philosophy: string[];
    dynamics: string[];
    frequency: string[];
  };
}

interface EditingAnalysis {
  rhythm: {
    pace: string[];
    variation: string[];
  };
  transitions: {
    cuts: string[];
    effects: string[];
    motivation: string[];
  };
  continuity: {
    style: string[];
    techniques: string[];
  };
  temporality: {
    structure: string[];
    devices: string[];
  };
}

interface ProductionAnalysis {
  format: string[];
  aspectRatio: string[];
  location: string[];
  period: string[];
}

interface ColorGradingAnalysis {
  approach: string[];
  palette: string[];
  contrast: string[];
  lookDevelopment: string[];
}

interface TechnicalAnalysisProps {
  movieId: string;
  movieTitle: string;
  onSave: (analysis: TechnicalAnalysisState) => void;
  initialAnalysis?: TechnicalAnalysisState;
}

// Datos de opciones técnicas
const TECHNICAL_OPTIONS = {
  camera: {
    type: ['Digital', 'Film', 'Hybrid', 'Mixed Media'],
    manufacturer: ['ARRI', 'RED', 'Sony', 'Canon', 'Blackmagic', 'Panavision', 'Other'],
    model: {
      ARRI: ['Alexa 65', 'Alexa LF', 'Alexa Mini LF', 'Alexa 35', 'Alexa Classic'],
      RED: ['Weapon 8K', 'Monstro 8K', 'Gemini 5K', 'Komodo', 'V-Raptor'],
      Sony: ['Venice', 'Venice 2', 'FX9', 'FX6', 'FX3', 'A7S III'],
      Canon: ['C700', 'C500 Mark II', 'C300 Mark III', 'C70'],
      Blackmagic: ['URSA Mini Pro 12K', 'Pocket Cinema Camera 6K'],
      Panavision: ['Millennium DXL2', 'Genesis', 'Film Cameras']
    },
    sensor: {
      size: ['Super 16', 'Super 35', 'Full Frame', 'Large Format', '65mm', '70mm IMAX'],
      resolution: ['HD', '2K', '4K', '6K', '8K', '12K']
    },
    movement: {
      techniques: ['Handheld', 'Steadicam', 'Dolly', 'Crane/Jib', 'Drone', 'Gimbal', 'Slider', 'Technocrane'],
      style: ['Static', 'Dynamic', 'Floating', 'Documentary-style', 'Kinetic', 'Smooth', 'Frenetic']
    }
  },
  lenses: {
    type: ['Spherical Primes', 'Spherical Zooms', 'Anamorphic', 'Vintage', 'Specialty', 'Mixed'],
    series: {
      prime: ['Zeiss Master Prime', 'Zeiss Supreme Prime', 'Cooke S4/i', 'Leica Summilux-C', 'ARRI Signature Prime'],
      anamorphic: ['Panavision C/E/G Series', 'Cooke Anamorphic/i', 'ARRI Master Anamorphic', 'Vintage Kowa/Lomo'],
      vintage: ['Cooke Speed Panchro', 'Bausch & Lomb Super Baltar', 'Canon K-35', 'Zeiss Super Speed']
    },
    focalLength: {
      wide: ['8mm', '10mm', '14mm', '16mm', '18mm', '21mm', '24mm', '28mm'],
      normal: ['32mm', '35mm', '40mm', '50mm'],
      telephoto: ['65mm', '75mm', '85mm', '100mm', '135mm', '150mm', '200mm', '300mm+']
    },
    aperture: ['T1.3', 'T1.4', 'T1.5', 'T1.8', 'T2', 'T2.1', 'T2.8', 'T4', 'T5.6'],
    characteristics: ['Sharp/Clinical', 'Soft/Dreamy', 'High Flare', 'Low Contrast', 'Vintage Character', 'Modern/Clean']
  },
  lighting: {
    style: ['Natural Available', 'Naturalistic', 'Stylized', 'Expressionistic', 'Mixed Sources'],
    quality: ['Hard/Direct', 'Soft/Diffused', 'Bounce', 'Filtered', 'Atmospheric'],
    colorTemperature: ['Warm (2800-3200K)', 'Neutral (4000-4500K)', 'Daylight (5600K)', 'Cool (6500K+)', 'Mixed'],
    techniques: {
      key: ['Rembrandt', 'Loop', 'Butterfly/Paramount', 'Split', 'Broad', 'Short', 'Flat'],
      setup: ['Three-point', 'High-key', 'Low-key', 'Chiaroscuro', 'Silhouette', 'Motivated', 'Unmotivated'],
      modifiers: ['Softbox', 'Beauty Dish', '4x4/8x8 Frames', 'Reflectors', 'Negative Fill', 'Haze/Smoke', 'Practicals']
    },
    motivation: ['Story-driven', 'Mood-driven', 'Time-accurate', 'Stylistic', 'Symbolic']
  },
  composition: {
    rules: ['Rule of Thirds', 'Golden Ratio', 'Leading Lines', 'Symmetry', 'Frame within Frame', 'Negative Space'],
    framing: ['Extreme Wide', 'Wide Shot', 'Medium Wide', 'Medium Shot', 'Medium Close', 'Close-up', 'Extreme Close-up'],
    depth: ['Shallow DOF', 'Deep Focus', 'Split Diopter', 'Selective Focus', 'Rack Focus'],
    movement: ['Static', 'Pan', 'Tilt', 'Track/Dolly', 'Crane', 'Zoom', 'Combined Movement']
  },
  sound: {
    design: {
      approach: ['Realistic', 'Hyperrealistic', 'Stylized', 'Minimalist', 'Maximalist', 'Subjective'],
      layers: ['Dialogue', 'ADR', 'Foley', 'Atmospheres', 'Hard Effects', 'Design Elements', 'Music'],
      spatialization: ['Mono', 'Stereo', '5.1 Surround', '7.1 Surround', 'Dolby Atmos', 'DTS:X']
    },
    music: {
      style: ['Orchestral', 'Electronic', 'Hybrid', 'Minimalist', 'Ambient', 'Pop/Rock', 'Ethnic/World'],
      function: ['Diegetic', 'Non-diegetic', 'Meta-diegetic', 'Trans-diegetic'],
      emotionalRole: ['Empathetic', 'Anempathetic', 'Contrapuntal', 'Neutral', 'Ironic']
    },
    mixing: {
      philosophy: ['Dialogue-forward', 'Music-forward', 'Effects-heavy', 'Balanced', 'Dynamic'],
      dynamics: ['Compressed', 'Wide Dynamic Range', 'Loud', 'Quiet', 'Variable'],
      frequency: ['Full Spectrum', 'Limited/Filtered', 'Bass-heavy', 'Mid-focused', 'Bright']
    }
  },
  editing: {
    rhythm: {
      pace: ['Slow/Contemplative', 'Moderate', 'Fast', 'Frenetic', 'Variable', 'Rhythmic'],
      variation: ['Consistent', 'Building', 'Diminishing', 'Erratic', 'Musical']
    },
    transitions: {
      cuts: ['Hard Cut', 'Jump Cut', 'Match Cut', 'Smash Cut', 'L-Cut', 'J-Cut', 'Split Edit'],
      effects: ['Dissolve', 'Fade', 'Wipe', 'Iris', 'Digital Transition', 'Invisible Cut'],
      motivation: ['Action-driven', 'Emotion-driven', 'Rhythm-driven', 'Conceptual', 'Graphic Match']
    },
    continuity: {
      style: ['Classical/Invisible', 'Discontinuous', 'Elliptical', 'Parallel', 'Associative', 'Soviet Montage'],
      techniques: ['180° Rule', 'Eyeline Match', 'Action Match', 'Cross-cutting', 'Montage Sequence']
    },
    temporality: {
      structure: ['Linear', 'Non-linear', 'Circular', 'Fragmented', 'Stream of Consciousness'],
      devices: ['Flashback', 'Flashforward', 'Parallel Action', 'Time-lapse', 'Slow Motion', 'Freeze Frame']
    }
  },
  colorGrading: {
    approach: ['Naturalistic', 'Enhanced Reality', 'Stylized', 'Period-accurate', 'Genre-specific'],
    palette: ['Warm', 'Cool', 'Neutral', 'Desaturated', 'Vibrant', 'Monochromatic', 'Complementary'],
    contrast: ['High Contrast', 'Low Contrast', 'Crushed Blacks', 'Lifted Blacks', 'Film-like'],
    lookDevelopment: ['Film Emulation', 'Digital Native', 'Vintage', 'Futuristic', 'Custom LUT']
  }
};

export const TechnicalAnalysisPanel: React.FC<TechnicalAnalysisProps> = ({
  movieId,
  movieTitle,
  onSave,
  initialAnalysis
}) => {
  const [activeSection, setActiveSection] = useState<string>('photography');
  const [analysis, setAnalysis] = useState<TechnicalAnalysisState>(
    initialAnalysis || createEmptyAnalysis()
  );
  const [showTooltip, setShowTooltip] = useState<string | null>(null);
  const [completionPercentage, setCompletionPercentage] = useState(0);
  const [aiSuggestions, setAiSuggestions] = useState<string[]>([]);

  // Calcular porcentaje de completitud
  useEffect(() => {
    const calculateCompletion = () => {
      let totalFields = 0;
      let filledFields = 0;

      const countFields = (obj: any) => {
        Object.values(obj).forEach(value => {
          if (Array.isArray(value)) {
            totalFields++;
            if (value.length > 0) filledFields++;
          } else if (typeof value === 'object') {
            countFields(value);
          }
        });
      };

      countFields(analysis);
      setCompletionPercentage(totalFields > 0 ? Math.round((filledFields / totalFields) * 100) : 0);
    };

    calculateCompletion();
  }, [analysis]);

  // Función para crear análisis vacío
  function createEmptyAnalysis(): TechnicalAnalysisState {
    return {
      photography: {
        camera: {
          type: [],
          manufacturer: [],
          model: [],
          sensor: { size: [], resolution: [] },
          movement: { techniques: [], style: [] }
        },
        lenses: {
          type: [],
          focalLength: [],
          aperture: [],
          characteristics: []
        },
        lighting: {
          style: [],
          quality: [],
          colorTemperature: [],
          techniques: { key: [], setup: [], modifiers: [] },
          motivation: []
        },
        composition: {
          rules: [],
          framing: [],
          depth: [],
          movement: []
        }
      },
      sound: {
        design: { approach: [], layers: [], spatialization: [] },
        music: { style: [], function: [], emotionalRole: [], instrumentation: [] },
        mixing: { philosophy: [], dynamics: [], frequency: [] }
      },
      editing: {
        rhythm: { pace: [], variation: [] },
        transitions: { cuts: [], effects: [], motivation: [] },
        continuity: { style: [], techniques: [] },
        temporality: { structure: [], devices: [] }
      },
      production: {
        format: [],
        aspectRatio: [],
        location: [],
        period: []
      },
      colorGrading: {
        approach: [],
        palette: [],
        contrast: [],
        lookDevelopment: []
      }
    };
  }

  // Manejar selección de checkboxes
  const handleCheckboxChange = (section: string, subsection: string, value: string, subsubsection?: string) => {
    setAnalysis(prev => {
      const newAnalysis = { ...prev };
      
      if (subsubsection) {
        // Para propiedades anidadas profundas
        const sectionData = (newAnalysis as any)[section][subsection][subsubsection];
        if (sectionData.includes(value)) {
          (newAnalysis as any)[section][subsection][subsubsection] = sectionData.filter((item: string) => item !== value);
        } else {
          (newAnalysis as any)[section][subsection][subsubsection] = [...sectionData, value];
        }
      } else {
        // Para propiedades anidadas simples
        const sectionData = (newAnalysis as any)[section][subsection];
        if (sectionData.includes(value)) {
          (newAnalysis as any)[section][subsection] = sectionData.filter((item: string) => item !== value);
        } else {
          (newAnalysis as any)[section][subsection] = [...sectionData, value];
        }
      }
      
      return newAnalysis;
    });
  };

  // Generar sugerencias de IA basadas en selecciones
  useEffect(() => {
    const generateAISuggestions = () => {
      const suggestions = [];
      
      // Sugerencias basadas en la fotografía
      if (analysis.photography.camera.type.includes('Film')) {
        suggestions.push('Considera explorar el grano de película y su textura emocional');
      }
      
      if (analysis.photography.lighting.style.includes('Chiaroscuro')) {
        suggestions.push('El claroscuro sugiere temas de dualidad - explora los contrastes morales');
      }
      
      if (analysis.editing.rhythm.pace.includes('Frenetic')) {
        suggestions.push('El ritmo frenético puede reflejar el estado mental de los personajes');
      }
      
      // Más sugerencias contextuales...
      setAiSuggestions(suggestions.slice(0, 3));
    };
    
    generateAISuggestions();
  }, [analysis]);

  // Secciones del análisis
  const sections = [
    { id: 'photography', name: 'Fotografía', icon: Camera },
    { id: 'lenses', name: 'Óptica', icon: Aperture },
    { id: 'lighting', name: 'Iluminación', icon: Sun },
    { id: 'sound', name: 'Sonido', icon: Music },
    { id: 'editing', name: 'Montaje', icon: Scissors },
    { id: 'color', name: 'Color', icon: Palette },
    { id: 'production', name: 'Producción', icon: Film }
  ];

  return (
    <div className={styles.technicalAnalysisPanel}>
      {/* Header con progreso */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          <Zap className={styles.titleIcon} />
          Análisis Técnico Cinematográfico
        </h2>
        <div className={styles.movieInfo}>
          <span>{movieTitle}</span>
        </div>
        <div className={styles.progress}>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressFill} 
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          <span className={styles.progressText}>{completionPercentage}% completado</span>
        </div>
      </div>

      {/* Navegación por secciones */}
      <div className={styles.sectionNav}>
        {sections.map(section => (
          <button
            key={section.id}
            className={`${styles.sectionButton} ${activeSection === section.id ? styles.active : ''}`}
            onClick={() => setActiveSection(section.id)}
          >
            <section.icon size={20} />
            <span>{section.name}</span>
          </button>
        ))}
      </div>

      {/* Sugerencias de IA */}
      {aiSuggestions.length > 0 && (
        <div className={styles.aiSuggestions}>
          <div className={styles.aiHeader}>
            <Sparkles size={16} />
            <span>Sugerencias de análisis</span>
          </div>
          {aiSuggestions.map((suggestion, index) => (
            <div key={index} className={styles.suggestion}>
              {suggestion}
            </div>
          ))}
        </div>
      )}

      {/* Contenido de la sección activa */}
      <div className={styles.sectionContent}>
        {activeSection === 'photography' && (
          <PhotographySection
            data={analysis.photography}
            onChange={(subsection, value, subsubsection) => 
              handleCheckboxChange('photography', subsection, value, subsubsection)
            }
          />
        )}
        
        {activeSection === 'lenses' && (
          <LensesSection
            data={analysis.photography.lenses}
            onChange={(subsection, value) => 
              handleCheckboxChange('photography', 'lenses', value, subsection)
            }
          />
        )}
        
        {activeSection === 'lighting' && (
          <LightingSection
            data={analysis.photography.lighting}
            onChange={(subsection, value, subsubsection) => 
              handleCheckboxChange('photography', 'lighting', value, subsubsection)
            }
          />
        )}
        
        {activeSection === 'sound' && (
          <SoundSection
            data={analysis.sound}
            onChange={(subsection, value, subsubsection) => 
              handleCheckboxChange('sound', subsection, value, subsubsection)
            }
          />
        )}
        
        {activeSection === 'editing' && (
          <EditingSection
            data={analysis.editing}
            onChange={(subsection, value, subsubsection) => 
              handleCheckboxChange('editing', subsection, value, subsubsection)
            }
          />
        )}
        
        {activeSection === 'color' && (
          <ColorSection
            data={analysis.colorGrading}
            onChange={(subsection, value) => 
              handleCheckboxChange('colorGrading', subsection, value)
            }
          />
        )}
        
        {activeSection === 'production' && (
          <ProductionSection
            data={analysis.production}
            onChange={(subsection, value) => 
              handleCheckboxChange('production', subsection, value)
            }
          />
        )}
      </div>

      {/* Botón de guardar */}
      <div className={styles.footer}>
        <button 
          className={styles.saveButton}
          onClick={() => onSave(analysis)}
        >
          <Check size={20} />
          Guardar Análisis Técnico
        </button>
      </div>
    </div>
  );
};

// Componente para la sección de Fotografía
const PhotographySection: React.FC<{
  data: any;
  onChange: (subsection: string, value: string, subsubsection?: string) => void;
}> = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <Camera size={24} />
        Fotografía y Cámara
      </h3>
      
      {/* Tipo de cámara */}
      <div className={styles.optionGroup}>
        <h4>Tipo de Captura</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.camera.type.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.camera.type.includes(option)}
                onChange={() => onChange('camera', option, 'type')}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Fabricante */}
      <div className={styles.optionGroup}>
        <h4>Fabricante</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.camera.manufacturer.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.camera.manufacturer.includes(option)}
                onChange={() => onChange('camera', option, 'manufacturer')}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sensor */}
      <div className={styles.optionGroup}>
        <h4>Sensor / Formato</h4>
        <div className={styles.subGroup}>
          <h5>Tamaño</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.camera.sensor.size.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.camera.sensor.size.includes(option)}
                  onChange={() => onChange('camera', option, 'sensor.size')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Resolución</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.camera.sensor.resolution.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.camera.sensor.resolution.includes(option)}
                  onChange={() => onChange('camera', option, 'sensor.resolution')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Movimiento de cámara */}
      <div className={styles.optionGroup}>
        <h4>Movimiento de Cámara</h4>
        <div className={styles.subGroup}>
          <h5>Técnicas</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.camera.movement.techniques.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.camera.movement.techniques.includes(option)}
                  onChange={() => onChange('camera', option, 'movement.techniques')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Estilo</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.camera.movement.style.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.camera.movement.style.includes(option)}
                  onChange={() => onChange('camera', option, 'movement.style')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Composición */}
      <div className={styles.optionGroup}>
        <h4>Composición</h4>
        <div className={styles.subGroup}>
          <h5>Reglas Compositivas</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.composition.rules.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.composition.rules.includes(option)}
                  onChange={() => onChange('composition', option, 'rules')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Encuadre</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.composition.framing.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.composition.framing.includes(option)}
                  onChange={() => onChange('composition', option, 'framing')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Profundidad de Campo</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.composition.depth.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.composition.depth.includes(option)}
                  onChange={() => onChange('composition', option, 'depth')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para Lentes
const LensesSection: React.FC<{
  data: any;
  onChange: (subsection: string, value: string) => void;
}> = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <Aperture size={24} />
        Óptica y Lentes
      </h3>
      
      <div className={styles.optionGroup}>
        <h4>Tipo de Lentes</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.lenses.type.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.type.includes(option)}
                onChange={() => onChange('type', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Distancias Focales Utilizadas</h4>
        <div className={styles.subGroup}>
          <h5>Gran Angular</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.lenses.focalLength.wide.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.focalLength.includes(option)}
                  onChange={() => onChange('focalLength', option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Normal</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.lenses.focalLength.normal.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.focalLength.includes(option)}
                  onChange={() => onChange('focalLength', option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Teleobjetivo</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.lenses.focalLength.telephoto.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.focalLength.includes(option)}
                  onChange={() => onChange('focalLength', option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Apertura</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.lenses.aperture.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.aperture.includes(option)}
                onChange={() => onChange('aperture', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Características Ópticas</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.lenses.characteristics.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.characteristics.includes(option)}
                onChange={() => onChange('characteristics', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente para Iluminación
const LightingSection: React.FC<{
  data: any;
  onChange: (subsection: string, value: string, subsubsection?: string) => void;
}> = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <Sun size={24} />
        Iluminación
      </h3>
      
      <div className={styles.optionGroup}>
        <h4>Estilo de Iluminación</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.lighting.style.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.style.includes(option)}
                onChange={() => onChange('style', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Calidad de Luz</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.lighting.quality.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.quality.includes(option)}
                onChange={() => onChange('quality', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Temperatura de Color</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.lighting.colorTemperature.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.colorTemperature.includes(option)}
                onChange={() => onChange('colorTemperature', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Técnicas de Iluminación</h4>
        
        <div className={styles.subGroup}>
          <h5>Luz Principal (Key Light)</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.lighting.techniques.key.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.techniques.key.includes(option)}
                  onChange={() => onChange('techniques', option, 'key')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Setup de Iluminación</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.lighting.techniques.setup.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.techniques.setup.includes(option)}
                  onChange={() => onChange('techniques', option, 'setup')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Modificadores</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.lighting.techniques.modifiers.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.techniques.modifiers.includes(option)}
                  onChange={() => onChange('techniques', option, 'modifiers')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Motivación de la Luz</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.lighting.motivation.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.motivation.includes(option)}
                onChange={() => onChange('motivation', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente para Sonido
const SoundSection: React.FC<{
  data: any;
  onChange: (subsection: string, value: string, subsubsection?: string) => void;
}> = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <Music size={24} />
        Diseño de Sonido y Música
      </h3>
      
      <div className={styles.optionGroup}>
        <h4>Diseño de Sonido</h4>
        
        <div className={styles.subGroup}>
          <h5>Enfoque</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.sound.design.approach.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.design.approach.includes(option)}
                  onChange={() => onChange('design', option, 'approach')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Capas de Sonido</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.sound.design.layers.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.design.layers.includes(option)}
                  onChange={() => onChange('design', option, 'layers')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Espacialización</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.sound.design.spatialization.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.design.spatialization.includes(option)}
                  onChange={() => onChange('design', option, 'spatialization')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Música</h4>
        
        <div className={styles.subGroup}>
          <h5>Estilo Musical</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.sound.music.style.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.music.style.includes(option)}
                  onChange={() => onChange('music', option, 'style')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Función Narrativa</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.sound.music.function.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.music.function.includes(option)}
                  onChange={() => onChange('music', option, 'function')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Rol Emocional</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.sound.music.emotionalRole.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.music.emotionalRole.includes(option)}
                  onChange={() => onChange('music', option, 'emotionalRole')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Mezcla de Sonido</h4>
        
        <div className={styles.subGroup}>
          <h5>Filosofía de Mezcla</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.sound.mixing.philosophy.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.mixing.philosophy.includes(option)}
                  onChange={() => onChange('mixing', option, 'philosophy')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Dinámicas</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.sound.mixing.dynamics.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.mixing.dynamics.includes(option)}
                  onChange={() => onChange('mixing', option, 'dynamics')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Espectro de Frecuencias</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.sound.mixing.frequency.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.mixing.frequency.includes(option)}
                  onChange={() => onChange('mixing', option, 'frequency')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para Montaje
const EditingSection: React.FC<{
  data: any;
  onChange: (subsection: string, value: string, subsubsection?: string) => void;
}> = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <Scissors size={24} />
        Montaje y Edición
      </h3>
      
      <div className={styles.optionGroup}>
        <h4>Ritmo</h4>
        
        <div className={styles.subGroup}>
          <h5>Velocidad</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.editing.rhythm.pace.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.rhythm.pace.includes(option)}
                  onChange={() => onChange('rhythm', option, 'pace')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Variación</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.editing.rhythm.variation.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.rhythm.variation.includes(option)}
                  onChange={() => onChange('rhythm', option, 'variation')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Transiciones</h4>
        
        <div className={styles.subGroup}>
          <h5>Tipos de Corte</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.editing.transitions.cuts.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.transitions.cuts.includes(option)}
                  onChange={() => onChange('transitions', option, 'cuts')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Efectos de Transición</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.editing.transitions.effects.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.transitions.effects.includes(option)}
                  onChange={() => onChange('transitions', option, 'effects')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Motivación del Corte</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.editing.transitions.motivation.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.transitions.motivation.includes(option)}
                  onChange={() => onChange('transitions', option, 'motivation')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Continuidad</h4>
        
        <div className={styles.subGroup}>
          <h5>Estilo de Continuidad</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.editing.continuity.style.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.continuity.style.includes(option)}
                  onChange={() => onChange('continuity', option, 'style')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Técnicas</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.editing.continuity.techniques.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.continuity.techniques.includes(option)}
                  onChange={() => onChange('continuity', option, 'techniques')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Temporalidad</h4>
        
        <div className={styles.subGroup}>
          <h5>Estructura Temporal</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.editing.temporality.structure.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.temporality.structure.includes(option)}
                  onChange={() => onChange('temporality', option, 'structure')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
        
        <div className={styles.subGroup}>
          <h5>Dispositivos Temporales</h5>
          <div className={styles.checkboxGrid}>
            {TECHNICAL_OPTIONS.editing.temporality.devices.map(option => (
              <label key={option} className={styles.checkbox}>
                <input
                  type="checkbox"
                  checked={data.temporality.devices.includes(option)}
                  onChange={() => onChange('temporality', option, 'devices')}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente para Color
const ColorSection: React.FC<{
  data: any;
  onChange: (subsection: string, value: string) => void;
}> = ({ data, onChange }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <Palette size={24} />
        Color y Gradación
      </h3>
      
      <div className={styles.optionGroup}>
        <h4>Enfoque de Color</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.colorGrading.approach.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.approach.includes(option)}
                onChange={() => onChange('approach', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Paleta de Color</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.colorGrading.palette.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.palette.includes(option)}
                onChange={() => onChange('palette', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Contraste</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.colorGrading.contrast.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.contrast.includes(option)}
                onChange={() => onChange('contrast', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Look Development</h4>
        <div className={styles.checkboxGrid}>
          {TECHNICAL_OPTIONS.colorGrading.lookDevelopment.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.lookDevelopment.includes(option)}
                onChange={() => onChange('lookDevelopment', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

// Componente para Producción
const ProductionSection: React.FC<{
  data: any;
  onChange: (subsection: string, value: string) => void;
}> = ({ data, onChange }) => {
  const productionOptions = {
    format: ['35mm Film', '16mm Film', 'Digital', 'Mixed Formats', 'Archive Footage'],
    aspectRatio: ['1.33:1 (4:3)', '1.66:1', '1.78:1 (16:9)', '1.85:1', '2.35:1', '2.39:1', '2.76:1', 'Variable'],
    location: ['Studio', 'On Location', 'Mixed', 'International', 'Single Location'],
    period: ['Contemporary', 'Period', 'Futuristic', 'Timeless', 'Multiple Periods']
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>
        <Film size={24} />
        Producción
      </h3>
      
      <div className={styles.optionGroup}>
        <h4>Formato de Captura Original</h4>
        <div className={styles.checkboxGrid}>
          {productionOptions.format.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.format.includes(option)}
                onChange={() => onChange('format', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Relación de Aspecto</h4>
        <div className={styles.checkboxGrid}>
          {productionOptions.aspectRatio.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.aspectRatio.includes(option)}
                onChange={() => onChange('aspectRatio', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Locaciones</h4>
        <div className={styles.checkboxGrid}>
          {productionOptions.location.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.location.includes(option)}
                onChange={() => onChange('location', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={styles.optionGroup}>
        <h4>Período</h4>
        <div className={styles.checkboxGrid}>
          {productionOptions.period.map(option => (
            <label key={option} className={styles.checkbox}>
              <input
                type="checkbox"
                checked={data.period.includes(option)}
                onChange={() => onChange('period', option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnicalAnalysisPanel;