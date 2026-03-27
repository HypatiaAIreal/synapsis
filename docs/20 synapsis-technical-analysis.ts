// 🎬 SISTEMA DE ANÁLISIS TÉCNICO CINEMATOGRÁFICO PROFUNDO
// Para SYNAPSIS - Por Hypatia Colossus & Claude

interface TechnicalAnalysisSystem {
  photography: PhotographyAnalysis;
  sound: SoundAnalysis;
  editing: EditingAnalysis;
  production: ProductionAnalysis;
  postProduction: PostProductionAnalysis;
}

// 📷 ANÁLISIS FOTOGRÁFICO
interface PhotographyAnalysis {
  camera: {
    type: CameraType[];
    manufacturer: string[];
    model: string[];
    sensor: {
      size: ['Super 35', 'Full Frame', 'Large Format', '65mm', '70mm', 'IMAX'];
      resolution: ['2K', '4K', '6K', '8K', '12K'];
    };
    movement: {
      techniques: ['Handheld', 'Steadicam', 'Dolly', 'Crane', 'Drone', 'Gimbal'];
      style: ['Static', 'Dynamic', 'Floating', 'Documentary', 'Kinetic'];
    };
  };
  
  lenses: {
    type: ['Prime', 'Zoom', 'Anamorphic', 'Vintage', 'Specialty'];
    focalLength: {
      wide: ['8mm', '10mm', '14mm', '18mm', '24mm'];
      normal: ['35mm', '40mm', '50mm'];
      telephoto: ['85mm', '100mm', '135mm', '200mm', '300mm+'];
    };
    aperture: ['T1.3', 'T1.5', 'T2', 'T2.8', 'T4', 'T5.6'];
    characteristics: ['Sharp', 'Soft', 'Flare-prone', 'Bokeh quality', 'Distortion'];
  };
  
  lighting: {
    style: ['Natural', 'Artificial', 'Mixed', 'Available light'];
    quality: ['Hard', 'Soft', 'Diffused', 'Directional'];
    colorTemperature: ['Warm (2800K)', 'Neutral (3200K)', 'Daylight (5600K)', 'Cool (6500K+)'];
    techniques: {
      key: ['Rembrandt', 'Loop', 'Butterfly', 'Split', 'Broad', 'Short'];
      setup: ['Three-point', 'High-key', 'Low-key', 'Silhouette', 'Chiaroscuro'];
      modifiers: ['Softbox', 'Beauty dish', 'Reflector', 'Flag', 'Scrim', 'Gel'];
    };
    motivation: ['Motivated', 'Unmotivated', 'Symbolic', 'Expressive'];
  };
  
  composition: {
    rules: ['Rule of thirds', 'Golden ratio', 'Leading lines', 'Symmetry', 'Patterns'];
    framing: ['Wide shot', 'Medium shot', 'Close-up', 'Extreme close-up', 'Detail shot'];
    depth: ['Shallow DOF', 'Deep focus', 'Split diopter', 'Rack focus'];
    movement: ['Pan', 'Tilt', 'Track', 'Zoom', 'Combination'];
  };
  
  colorGrading: {
    approach: ['Naturalistic', 'Stylized', 'Monochromatic', 'Desaturated', 'Hyper-saturated'];
    palette: ['Warm', 'Cool', 'Complementary', 'Analogous', 'Triadic'];
    contrast: ['High contrast', 'Low contrast', 'Crushed blacks', 'Blown highlights'];
    lookDevelopment: ['Film emulation', 'Digital native', 'Vintage', 'Futuristic'];
  };
}

// 🎵 ANÁLISIS SONORO
interface SoundAnalysis {
  design: {
    approach: ['Realistic', 'Hyperrealistic', 'Stylized', 'Minimalist', 'Maximalist'];
    layers: ['Dialogue', 'ADR', 'Foley', 'Ambience', 'SFX', 'Music'];
    spatialization: ['Mono', 'Stereo', '5.1', '7.1', 'Atmos', 'Binaural'];
  };
  
  music: {
    score: {
      style: ['Orchestral', 'Electronic', 'Hybrid', 'Minimalist', 'Avant-garde'];
      function: ['Diegetic', 'Non-diegetic', 'Meta-diegetic'];
      emotionalRole: ['Empathetic', 'Anempathetic', 'Contrapuntal'];
    };
    instrumentation: string[];
    themes: ['Leitmotif', 'Character themes', 'Location themes', 'Emotional themes'];
  };
  
  mixing: {
    philosophy: ['Dialogue-forward', 'Music-forward', 'Effects-heavy', 'Balanced'];
    dynamics: ['Compressed', 'Dynamic', 'Loud', 'Quiet', 'Variable'];
    frequency: ['Full spectrum', 'Limited range', 'Bass-heavy', 'Treble-focused'];
  };
}

// ✂️ ANÁLISIS DE MONTAJE
interface EditingAnalysis {
  rhythm: {
    pace: ['Slow', 'Moderate', 'Fast', 'Variable', 'Accelerating', 'Decelerating'];
    averageShotLength: number; // in seconds
    variation: ['Consistent', 'Varied', 'Rhythmic', 'Arrhythmic'];
  };
  
  transitions: {
    cuts: ['Hard cut', 'Jump cut', 'Match cut', 'Smash cut', 'L-cut', 'J-cut'];
    effects: ['Dissolve', 'Fade', 'Wipe', 'Iris', 'Digital transition'];
    motivation: ['Action', 'Graphic', 'Rhythmic', 'Spatial', 'Temporal'];
  };
  
  continuity: {
    style: ['Classical', 'Discontinuous', 'Elliptical', 'Parallel', 'Associative'];
    techniques: ['180-degree rule', 'Eyeline match', 'Action match', 'Cross-cutting'];
    violations: ['Intentional', 'Stylistic', 'Experimental'];
  };
  
  temporality: {
    structure: ['Linear', 'Non-linear', 'Circular', 'Fragmented'];
    devices: ['Flashback', 'Flashforward', 'Parallel action', 'Time-lapse', 'Slow-motion'];
  };
}

// 🎭 SISTEMA DE PLANTILLAS DINÁMICAS
interface DynamicTemplate {
  id: string;
  name: string;
  icon: string;
  
  // Preguntas generativas que se adaptan
  prompts: {
    opening: string[];
    exploration: string[];
    deepening: string[];
    synthesis: string[];
  };
  
  // Elementos técnicos a analizar
  technicalFocus: {
    required: string[];
    optional: string[];
    advanced: string[];
  };
  
  // Conexiones con metodologías
  methodologyLinks: {
    primary: string[];
    secondary: string[];
    experimental: string[];
  };
  
  // Mood y tono de la reflexión
  emotionalTone: {
    spectrum: ['Analytical', 'Poetic', 'Personal', 'Academic', 'Experimental'];
    intensity: ['Subtle', 'Moderate', 'Intense', 'Overwhelming'];
  };
}

// 🌟 GENERADOR DE INSIGHTS
class InsightGenerator {
  generatePrompts(
    movie: Movie,
    template: DynamicTemplate,
    userProfile: UserProfile
  ): PersonalizedPrompts {
    // Algoritmo que combina:
    // - Género y estilo de la película
    // - Preferencias del usuario
    // - Análisis previos
    // - Momento del día/año
    // - Estado emocional detectado
    
    return {
      primary: this.adaptPromptToContext(template.prompts.opening, context),
      exploratory: this.generateExploratoryQuestions(movie, template),
      connective: this.findConnectionsToUserHistory(userProfile, movie),
      transcendent: this.generateTranscendentQuestions(movie)
    };
  }
  
  // Preguntas que elevan el análisis
  generateTranscendentQuestions(movie: Movie): string[] {
    return [
      `¿Qué aspecto de ${movie.title} revela algo sobre ti que no sabías?`,
      `Si esta película fuera un espejo, ¿qué reflejo no esperabas ver?`,
      `¿Qué silencio en la película habla más fuerte que cualquier diálogo?`,
      `¿En qué momento la técnica se vuelve invisible y por qué?`,
      `¿Qué haría diferente el director si supiera que estás viendo su película ahora?`
    ];
  }
}

// 🔮 SISTEMA DE ANÁLISIS HOLOGRÁFICO
interface HolographicAnalysis {
  // Cada reflexión se puede ver desde múltiples ángulos
  perspectives: {
    creator: 'Como cineasta',
    audience: 'Como espectador',
    character: 'Como personaje',
    camera: 'Como la cámara misma',
    time: 'Desde el futuro/pasado'
  };
  
  // Capas de profundidad
  layers: {
    surface: 'Lo evidente',
    subtext: 'Lo sugerido',
    unconscious: 'Lo no intencional',
    quantum: 'Las posibilidades no realizadas'
  };
  
  // Conexiones rizomáticas
  connections: {
    intertextual: 'Con otras películas',
    personal: 'Con tu vida',
    universal: 'Con la experiencia humana',
    cosmic: 'Con el universo cinematográfico'
  };
}