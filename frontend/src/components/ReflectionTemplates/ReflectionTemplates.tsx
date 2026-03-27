// 🌟 SISTEMA REVOLUCIONARIO DE PLANTILLAS DE REFLEXIÓN
// Generador de perspectivas infinitas para análisis cinematográfico

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Sparkles, 
  Heart, 
  Brain, 
  Eye, 
  Compass,
  Layers,
  Zap,
  Globe,
  Moon,
  Sun,
  Cloud,
  Star,
  Flame,
  Droplets,  // ✅ Cambiado de Droplet
  Wind,
  Mountain,
  Trees,
  Waves,
  Sparkle,   // ✅ Usaremos este en lugar de Rainbow
  Triangle,  // ✅ Usaremos este en lugar de Prism
  Atom,
  Activity,  // ✅ Usaremos este en lugar de Dna
  Search,
  Settings,
  Camera,
  Film,
  Music,
  Palette,
  PenTool,
  BookOpen,
  Users,
  UserPlus,
  Home,
  Building,
  Map,
  Anchor,
  Feather,
  Coffee,
  Wine,
  Flower,
  Gem,
  Crown,
  Shield,
  Sword,
  Key,
  Lock,
  Unlock,
  Gift,
  Bell,
  Clock,
  Timer,
  Calendar,
  ChevronRight,
  ChevronDown,
  Info,
  Check,
  X
} from 'lucide-react';
import styles from './ReflectionTemplates.module.css';

// Tipos del sistema
interface ReflectionTemplate {
  id: string;
  name: string;
  icon: React.ReactNode;
  category: TemplateCategory;
  description: string;
  mood: EmotionalTone;
  complexity: 'intuitive' | 'analytical' | 'hybrid' | 'experimental';
  prompts: DynamicPrompt[];
  perspectives?: Perspective[];
  timeEstimate: number; // minutos
  tags: string[];
}

interface TemplateCategory {
  id: string;
  name: string;
  color: string;
  description: string;
}

interface DynamicPrompt {
  id: string;
  text: string;
  type: 'opening' | 'exploration' | 'deepening' | 'synthesis' | 'transcendent';
  optional?: boolean;
  followUps?: string[];
}

interface Perspective {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
}

interface EmotionalTone {
  primary: string;
  spectrum: string[];
  intensity: 'subtle' | 'moderate' | 'intense' | 'overwhelming';
}

interface ReflectionTemplatesProps {
  movieTitle: string;
  onSelectTemplate: (template: ReflectionTemplate) => void;
  userMood?: string;
  timeOfDay?: string;
  previousAnalyses?: number;
}

// Categorías de plantillas
const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    id: 'emotional',
    name: 'Dimensión Emocional',
    color: '#ec4899',
    description: 'Explora las resonancias emocionales y personales'
  },
  {
    id: 'technical',
    name: 'Dimensión Técnica',
    color: '#3b82f6',
    description: 'Analiza los aspectos técnicos y de construcción'
  },
  {
    id: 'narrative',
    name: 'Dimensión Narrativa',
    color: '#10b981',
    description: 'Examina las estructuras y elementos narrativos'
  },
  {
    id: 'philosophical',
    name: 'Dimensión Filosófica',
    color: '#9333ea',
    description: 'Profundiza en las implicaciones filosóficas'
  },
  {
    id: 'social',
    name: 'Dimensión Social',
    color: '#f59e0b',
    description: 'Contextualiza en términos sociales y culturales'
  },
  {
    id: 'sensorial',
    name: 'Dimensión Sensorial',
    color: '#06b6d4',
    description: 'Traduce la experiencia a percepciones sensoriales'
  },
  {
    id: 'temporal',
    name: 'Dimensión Temporal',
    color: '#8b5cf6',
    description: 'Analiza el tiempo y su percepción'
  },
  {
    id: 'spatial',
    name: 'Dimensión Espacial',
    color: '#059669',
    description: 'Explora el espacio cinematográfico'
  },
  {
    id: 'experimental',
    name: 'Dimensión Experimental',
    color: '#dc2626',
    description: 'Aproximaciones no convencionales'
  }
];

// Iconos personalizados que no existen en lucide-react
const Circle: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const Ghost: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 3C5.686 3 3 5.686 3 9v12l3-3 3 3 3-3 3 3 3-3 3 3V9c0-3.314-2.686-6-6-6H9z" />
    <circle cx="9" cy="9" r="1.5" fill="currentColor" />
    <circle cx="15" cy="9" r="1.5" fill="currentColor" />
  </svg>
);

const Thermometer: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
  </svg>
);

const Disc: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const Archive: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="21 8 21 21 3 21 3 8" />
    <rect x="1" y="3" width="22" height="5" />
    <line x1="10" y1="12" x2="14" y2="12" />
  </svg>
);

const FastForward: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 19 22 12 13 5 13 19" />
    <polygon points="2 19 11 12 2 5 2 19" />
  </svg>
);

const RefreshCw: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="23 4 23 10 17 10" />
    <polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const Tornado: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 4H3M20 8H6M21 12H3M20 16H6M19 20H8" />
  </svg>
);

const DoorOpen: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 4h3a2 2 0 0 1 2 2v14M4 20h16M4 20v-14a2 2 0 0 1 2-2h3" />
    <path d="M9 4v16" />
    <circle cx="11" cy="12" r="1" />
  </svg>
);

const ArrowUpDown: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="12" y1="20" x2="12" y2="4" />
    <polyline points="6 10 12 4 18 10" />
    <polyline points="6 14 12 20 18 14" />
  </svg>
);

const Frame: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <line x1="3" y1="15" x2="21" y2="15" />
  </svg>
);

const Microscope: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 18h8M9 21v-3M15 21v-3" />
    <path d="M12 3v8" />
    <path d="M8 14h8" />
    <path d="M14 11l3-3 3 3" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

const Telescope: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12l3 9 3-9M8 12l4 9M16 12l3 9 3-9" />
    <path d="M8 12L4 2l8 3" />
    <circle cx="14" cy="9" r="2" />
  </svg>
);

const Rainbow: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 17a10 10 0 0 0-20 0" />
    <path d="M6 17a6 6 0 0 1 12 0" />
    <path d="M10 17a2 2 0 0 1 4 0" />
  </svg>
);

const Prism: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" />
    <path d="M12 22V12" />
    <path d="M12 12L2 7" />
    <path d="M12 12l10-5" />
  </svg>
);

const Dna: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 15c6.667-6 13.333 0 20-6" />
    <path d="M9 22c1.798-2 3.202-2 5 0" />
    <path d="M9 2c1.798 2 3.202 2 5 0" />
    <path d="M2 9c6.667 6 13.333 0 20 6" />
  </svg>
);


// Plantillas expandidas
const REFLECTION_TEMPLATES: ReflectionTemplate[] = [
  // DIMENSIÓN EMOCIONAL
  {
    id: 'personal-resonance',
    name: 'Resonancia Personal',
    icon: <Heart className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[0],
    description: 'Cómo la película resuena con tu experiencia vital',
    mood: {
      primary: 'introspectivo',
      spectrum: ['nostálgico', 'contemplativo', 'revelador'],
      intensity: 'moderate'
    },
    complexity: 'intuitive',
    timeEstimate: 15,
    tags: ['personal', 'memoria', 'identidad'],
    prompts: [
      {
        id: 'pr1',
        text: '¿Qué momento de la película tocó una fibra personal que no esperabas?',
        type: 'opening'
      },
      {
        id: 'pr2',
        text: '¿Qué personaje refleja una parte de ti que raramente muestras?',
        type: 'exploration'
      },
      {
        id: 'pr3',
        text: 'Si esta película fuera un espejo, ¿qué reflejo no esperabas ver?',
        type: 'deepening'
      },
      {
        id: 'pr4',
        text: '¿Cómo ha cambiado tu percepción de ti mismo/a después de verla?',
        type: 'synthesis'
      }
    ]
  },
  {
    id: 'emotional-waves',
    name: 'Oleajes Emocionales',
    icon: <Waves className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[0],
    description: 'Mapea las mareas emocionales a lo largo de la película',
    mood: {
      primary: 'fluido',
      spectrum: ['ondulante', 'cíclico', 'transformador'],
      intensity: 'intense'
    },
    complexity: 'hybrid',
    timeEstimate: 20,
    tags: ['emociones', 'ritmo', 'transformación'],
    prompts: [
      {
        id: 'ew1',
        text: 'Describe el viaje emocional como si fuera una travesía marítima',
        type: 'opening'
      },
      {
        id: 'ew2',
        text: '¿En qué momento sentiste la marea más alta? ¿Y la más baja?',
        type: 'exploration'
      },
      {
        id: 'ew3',
        text: '¿Qué emociones navegaron bajo la superficie sin emerger completamente?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'cathartic-fire',
    name: 'Fuego Catártico',
    icon: <Flame className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[0],
    description: 'Momentos de liberación y transformación emocional',
    mood: {
      primary: 'liberador',
      spectrum: ['purificador', 'transformador', 'renaciente'],
      intensity: 'overwhelming'
    },
    complexity: 'intuitive',
    timeEstimate: 15,
    tags: ['catarsis', 'liberación', 'transformación'],
    prompts: [
      {
        id: 'cf1',
        text: '¿Qué ardió dentro de ti que necesitaba ser quemado?',
        type: 'opening'
      },
      {
        id: 'cf2',
        text: '¿De qué cenizas emergiste transformado/a?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'emotional-crystallization',
    name: 'Cristalización Emocional',
    icon: <Gem className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[0],
    description: 'Emociones que se solidifican y perduran',
    mood: {
      primary: 'permanente',
      spectrum: ['sólido', 'claro', 'multifacético'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 25,
    tags: ['permanencia', 'claridad', 'estructura'],
    prompts: [
      {
        id: 'ec1',
        text: '¿Qué emoción se cristalizó en ti como una gema permanente?',
        type: 'opening'
      },
      {
        id: 'ec2',
        text: 'Describe las facetas de este cristal emocional',
        type: 'exploration'
      },
      {
        id: 'ec3',
        text: '¿Cómo refracta la luz de tu experiencia este cristal?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'synaesthetic-emotions',
    name: 'Sinestesia Emocional',
    icon: <Sparkle className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[0],
    description: 'Traduce emociones a colores, sabores y texturas',
    mood: {
      primary: 'sinestésico',
      spectrum: ['sensorial', 'cruzado', 'multidimensional'],
      intensity: 'intense'
    },
    complexity: 'experimental',
    timeEstimate: 30,
    tags: ['sinestesia', 'sentidos', 'percepción'],
    prompts: [
      {
        id: 'se1',
        text: 'Si la película fuera un sabor, ¿a qué sabría cada acto?',
        type: 'opening'
      },
      {
        id: 'se2',
        text: '¿De qué color es la emoción principal? ¿Cómo cambia su tonalidad?',
        type: 'exploration'
      },
      {
        id: 'se3',
        text: '¿Qué textura tiene el clímax? ¿Es áspero, suave, punzante?',
        type: 'deepening'
      },
      {
        id: 'se4',
        text: 'Si pudieras tocar la banda sonora, ¿cómo se sentiría?',
        type: 'transcendent'
      }
    ]
  },

  // DIMENSIÓN TÉCNICA
  {
    id: 'visual-anatomy',
    name: 'Anatomía Visual',
    icon: <Eye className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[1],
    description: 'Deconstrucción detallada de la fotografía y composición',
    mood: {
      primary: 'analítico',
      spectrum: ['preciso', 'técnico', 'revelador'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 30,
    tags: ['fotografía', 'composición', 'técnica'],
    prompts: [
      {
        id: 'va1',
        text: '¿Qué decisión fotográfica define la identidad visual de la película?',
        type: 'opening'
      },
      {
        id: 'va2',
        text: 'Identifica tres momentos donde la cámara se vuelve personaje',
        type: 'exploration'
      },
      {
        id: 'va3',
        text: '¿Cómo dialogan la luz y la sombra en las escenas clave?',
        type: 'deepening'
      }
    ],
    perspectives: [
      {
        id: 'cinematographer',
        name: 'Como Director de Fotografía',
        description: 'Analiza desde la perspectiva del DP',
        icon: <Camera />
      },
      {
        id: 'gaffer',
        name: 'Como Gaffer',
        description: 'Enfócate en la iluminación',
        icon: <Sun />
      }
    ]
  },
  {
    id: 'sonic-architecture',
    name: 'Arquitectura Sonora',
    icon: <Music className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[1],
    description: 'Análisis profundo del diseño sonoro y musical',
    mood: {
      primary: 'inmersivo',
      spectrum: ['envolvente', 'texturizado', 'resonante'],
      intensity: 'intense'
    },
    complexity: 'analytical',
    timeEstimate: 25,
    tags: ['sonido', 'música', 'diseño sonoro'],
    prompts: [
      {
        id: 'sa1',
        text: '¿Qué sonido invisible sostiene el mundo de la película?',
        type: 'opening'
      },
      {
        id: 'sa2',
        text: 'Describe el "color" del silencio en tres escenas diferentes',
        type: 'exploration'
      },
      {
        id: 'sa3',
        text: '¿Cómo construye el sonido espacios que la imagen no muestra?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'editing-rhythm',
    name: 'Ritmo y Montaje',
    icon: <Timer className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[1],
    description: 'El pulso vital de la película a través del montaje',
    mood: {
      primary: 'rítmico',
      spectrum: ['pulsante', 'fluido', 'sincopado'],
      intensity: 'moderate'
    },
    complexity: 'hybrid',
    timeEstimate: 20,
    tags: ['montaje', 'ritmo', 'tempo'],
    prompts: [
      {
        id: 'er1',
        text: 'Si el montaje fuera música, ¿qué género sería y por qué?',
        type: 'opening'
      },
      {
        id: 'er2',
        text: '¿Dónde respira la película y dónde contiene el aliento?',
        type: 'exploration'
      },
      {
        id: 'er3',
        text: 'Identifica el corte más invisible y el más visible. ¿Qué los diferencia?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'color-psychology',
    name: 'Psicología del Color',
    icon: <Palette className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[1],
    description: 'Cómo el color narra y manipula emociones',
    mood: {
      primary: 'cromático',
      spectrum: ['vibrante', 'sutil', 'simbólico'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 20,
    tags: ['color', 'psicología', 'simbolismo'],
    prompts: [
      {
        id: 'cp1',
        text: '¿Qué historia cuenta la paleta de colores por sí sola?',
        type: 'opening'
      },
      {
        id: 'cp2',
        text: '¿Cómo evoluciona la temperatura de color con el arco emocional?',
        type: 'exploration'
      },
      {
        id: 'cp3',
        text: 'Si cada personaje fuera un color, ¿cómo se mezclarían?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'cinematic-microscopy',
    name: 'Microscopía Cinematográfica',
    icon: <Search className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[1],
    description: 'Análisis de detalles imperceptibles pero significativos',
    mood: {
      primary: 'detallista',
      spectrum: ['minucioso', 'revelador', 'obsesivo'],
      intensity: 'intense'
    },
    complexity: 'analytical',
    timeEstimate: 35,
    tags: ['detalles', 'subtexto', 'microcosmos'],
    prompts: [
      {
        id: 'cm1',
        text: '¿Qué objeto aparentemente insignificante carga el mayor peso simbólico?',
        type: 'opening'
      },
      {
        id: 'cm2',
        text: 'Encuentra tres gestos microscópicos que revelan verdades enormes',
        type: 'exploration'
      },
      {
        id: 'cm3',
        text: '¿Qué elemento del production design susurra lo que los diálogos gritan?',
        type: 'deepening'
      }
    ]
  },

  // DIMENSIÓN NARRATIVA
  {
    id: 'narrative-spirals',
    name: 'Espirales Narrativas',
    icon: <Atom className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[2],
    description: 'Estructuras narrativas no lineales y recursivas',
    mood: {
      primary: 'circular',
      spectrum: ['recursivo', 'espiral', 'fractal'],
      intensity: 'intense'
    },
    complexity: 'analytical',
    timeEstimate: 30,
    tags: ['estructura', 'no-lineal', 'complejidad'],
    prompts: [
      {
        id: 'ns1',
        text: '¿En qué punto la historia muerde su propia cola?',
        type: 'opening'
      },
      {
        id: 'ns2',
        text: 'Traza las espirales: ¿qué se repite pero diferente?',
        type: 'exploration'
      },
      {
        id: 'ns3',
        text: '¿Dónde está el centro del laberinto narrativo?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'meaning-networks',
    name: 'Redes de Significado',
    icon: <Globe className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[2],
    description: 'Conexiones temáticas y simbólicas entrelazadas',
    mood: {
      primary: 'conectivo',
      spectrum: ['entrelazado', 'sistémico', 'holístico'],
      intensity: 'moderate'
    },
    complexity: 'hybrid',
    timeEstimate: 25,
    tags: ['temas', 'símbolos', 'conexiones'],
    prompts: [
      {
        id: 'mn1',
        text: 'Dibuja mentalmente la red: ¿qué temas son nodos y cuáles son conexiones?',
        type: 'opening'
      },
      {
        id: 'mn2',
        text: '¿Qué símbolo aparentemente menor conecta todo?',
        type: 'exploration'
      },
      {
        id: 'mn3',
        text: '¿Dónde se rompe la red y qué significa esa ruptura?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'archetypal-masks',
    name: 'Máscaras y Arquetipos',
    icon: <Users className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[2],
    description: 'Personajes como portadores de fuerzas arquetípicas',
    mood: {
      primary: 'mítico',
      spectrum: ['universal', 'simbólico', 'profundo'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 20,
    tags: ['arquetipos', 'personajes', 'mitos'],
    prompts: [
      {
        id: 'am1',
        text: '¿Qué arquetipo ancestral despierta cada personaje principal?',
        type: 'opening'
      },
      {
        id: 'am2',
        text: '¿Cuándo caen las máscaras y qué revelan?',
        type: 'exploration'
      },
      {
        id: 'am3',
        text: '¿Qué personaje es la sombra de otro?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'inflection-points',
    name: 'Puntos de Inflexión',
    icon: <Zap className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[2],
    description: 'Momentos que cambian irreversiblemente la historia',
    mood: {
      primary: 'pivotal',
      spectrum: ['decisivo', 'transformador', 'irreversible'],
      intensity: 'intense'
    },
    complexity: 'analytical',
    timeEstimate: 20,
    tags: ['giros', 'cambios', 'momentos clave'],
    prompts: [
      {
        id: 'ip1',
        text: '¿Cuál es el momento exacto donde todo cambia para siempre?',
        type: 'opening'
      },
      {
        id: 'ip2',
        text: '¿Qué pequeña decisión desencadena la avalancha?',
        type: 'exploration'
      },
      {
        id: 'ip3',
        text: 'Si pudieras congelar un frame que lo cambia todo, ¿cuál sería?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'story-cosmology',
    name: 'Cosmología Narrativa',
    icon: <Star className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[2],
    description: 'El universo completo de la historia',
    mood: {
      primary: 'expansivo',
      spectrum: ['universal', 'totalizador', 'cósmico'],
      intensity: 'overwhelming'
    },
    complexity: 'hybrid',
    timeEstimate: 35,
    tags: ['universo', 'mundo', 'cosmología'],
    prompts: [
      {
        id: 'sc1',
        text: '¿Cuáles son las leyes físicas y metafísicas de este universo?',
        type: 'opening'
      },
      {
        id: 'sc2',
        text: '¿Qué existe más allá de los bordes del frame?',
        type: 'exploration'
      },
      {
        id: 'sc3',
        text: 'Si este mundo tuviera un mito de creación, ¿cuál sería?',
        type: 'deepening'
      }
    ]
  },

  // DIMENSIÓN FILOSÓFICA
  {
    id: 'filmic-ontology',
    name: 'Ontología Fílmica',
    icon: <Triangle className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[3],
    description: '¿Qué ES esta película en su esencia?',
    mood: {
      primary: 'existencial',
      spectrum: ['esencial', 'fundamental', 'originario'],
      intensity: 'intense'
    },
    complexity: 'analytical',
    timeEstimate: 30,
    tags: ['ser', 'esencia', 'existencia'],
    prompts: [
      {
        id: 'fo1',
        text: 'Si tuvieras que definir el SER de esta película, ¿qué dirías?',
        type: 'opening'
      },
      {
        id: 'fo2',
        text: '¿La película existe más en lo que muestra o en lo que oculta?',
        type: 'exploration'
      },
      {
        id: 'fo3',
        text: '¿Qué modo de existencia propone este filme?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'infinite-reflections',
    name: 'Reflexiones Infinitas',
    icon: <Layers className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[3],
    description: 'Espejos, recursividad y mise en abyme',
    mood: {
      primary: 'reflexivo',
      spectrum: ['especular', 'recursivo', 'infinito'],
      intensity: 'overwhelming'
    },
    complexity: 'experimental',
    timeEstimate: 25,
    tags: ['espejos', 'recursividad', 'infinito'],
    prompts: [
      {
        id: 'ir1',
        text: '¿Dónde se mira la película a sí misma?',
        type: 'opening'
      },
      {
        id: 'ir2',
        text: 'Si la película fuera un espejo, ¿qué reflejaría de ti que no es tuyo?',
        type: 'exploration'
      },
      {
        id: 'ir3',
        text: '¿En qué punto el reflejo se vuelve más real que lo reflejado?',
        type: 'transcendent'
      }
    ]
  },
  {
    id: 'paradoxes-dilemmas',
    name: 'Paradojas y Dilemas',
    icon: <Key className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[3],
    description: 'Contradicciones fértiles y dilemas irresolubles',
    mood: {
      primary: 'paradójico',
      spectrum: ['contradictorio', 'dialéctico', 'irresoluble'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 25,
    tags: ['paradojas', 'dilemas', 'contradicciones'],
    prompts: [
      {
        id: 'pd1',
        text: '¿Qué verdad y qué mentira coexisten sin cancelarse?',
        type: 'opening'
      },
      {
        id: 'pd2',
        text: '¿Cuál es el dilema central que la película se niega a resolver?',
        type: 'exploration'
      },
      {
        id: 'pd3',
        text: '¿Dónde la contradicción se vuelve la única verdad posible?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'significant-voids',
    name: 'Vacíos Significantes',
    icon: <Circle className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[3],
    description: 'Lo no dicho, lo ausente, lo que falta',
    mood: {
      primary: 'ausente',
      spectrum: ['vacío', 'silencioso', 'latente'],
      intensity: 'subtle'
    },
    complexity: 'experimental',
    timeEstimate: 20,
    tags: ['ausencia', 'silencio', 'vacío'],
    prompts: [
      {
        id: 'sv1',
        text: '¿Qué ausencia grita más fuerte que cualquier presencia?',
        type: 'opening'
      },
      {
        id: 'sv2',
        text: '¿Qué conversación crucial nunca sucede?',
        type: 'exploration'
      },
      {
        id: 'sv3',
        text: '¿En qué vacío habita el verdadero significado?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'visual-ethics',
    name: 'Ética Visual',
    icon: <Shield className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[3],
    description: 'La responsabilidad moral de la imagen',
    mood: {
      primary: 'ético',
      spectrum: ['responsable', 'cuestionador', 'comprometido'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 30,
    tags: ['ética', 'moral', 'responsabilidad'],
    prompts: [
      {
        id: 've1',
        text: '¿Qué derecho tiene la cámara de mirar lo que mira?',
        type: 'opening'
      },
      {
        id: 've2',
        text: '¿Cuándo la película cruza una línea ética y es necesario?',
        type: 'exploration'
      },
      {
        id: 've3',
        text: '¿Qué responsabilidad tienes tú como espectador?',
        type: 'deepening'
      }
    ]
  },

  // DIMENSIÓN SOCIAL
  {
    id: 'cultural-archaeology',
    name: 'Arqueología Cultural',
    icon: <Mountain className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[4],
    description: 'Capas de significado social sedimentadas',
    mood: {
      primary: 'arqueológico',
      spectrum: ['estratificado', 'histórico', 'revelador'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 30,
    tags: ['cultura', 'historia', 'sociedad'],
    prompts: [
      {
        id: 'ca1',
        text: '¿Qué estrato cultural expone la película sin querer?',
        type: 'opening'
      },
      {
        id: 'ca2',
        text: '¿Qué rituales sociales fosilizados aparecen?',
        type: 'exploration'
      },
      {
        id: 'ca3',
        text: '¿Qué dice de nosotros que esta historia sea contada ahora?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'collective-mirrors',
    name: 'Espejos Colectivos',
    icon: <Building className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[4],
    description: 'Cómo la película refleja nuestra sociedad',
    mood: {
      primary: 'reflexivo',
      spectrum: ['social', 'colectivo', 'revelador'],
      intensity: 'moderate'
    },
    complexity: 'hybrid',
    timeEstimate: 25,
    tags: ['sociedad', 'reflexión', 'colectivo'],
    prompts: [
      {
        id: 'cm1',
        text: '¿Qué verdad incómoda sobre nuestra sociedad revela?',
        type: 'opening'
      },
      {
        id: 'cm2',
        text: '¿Qué comportamiento colectivo normalizado cuestiona?',
        type: 'exploration'
      },
      {
        id: 'cm3',
        text: 'Si la sociedad fuera un personaje, ¿qué arco tendría?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'temporal-dialogues',
    name: 'Diálogos Temporales',
    icon: <Clock className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[4],
    description: 'Conversación entre la película y su época',
    mood: {
      primary: 'dialógico',
      spectrum: ['temporal', 'contextual', 'histórico'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 25,
    tags: ['tiempo', 'época', 'contexto'],
    prompts: [
      {
        id: 'td1',
        text: '¿Qué le dice esta película a su época que no podía decirse directamente?',
        type: 'opening'
      },
      {
        id: 'td2',
        text: '¿Cómo dialoga con el momento histórico de su creación?',
        type: 'exploration'
      },
      {
        id: 'td3',
        text: '¿Qué profecía accidental contiene sobre nuestro presente?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'global-resonances',
    name: 'Resonancias Globales',
    icon: <Globe className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[4],
    description: 'Impacto y significado transcultural',
    mood: {
      primary: 'universal',
      spectrum: ['global', 'transcultural', 'humano'],
      intensity: 'intense'
    },
    complexity: 'hybrid',
    timeEstimate: 30,
    tags: ['global', 'universal', 'humanidad'],
    prompts: [
      {
        id: 'gr1',
        text: '¿Qué aspecto de la experiencia humana universal captura?',
        type: 'opening'
      },
      {
        id: 'gr2',
        text: '¿Cómo se traduciría esta historia en otra cultura?',
        type: 'exploration'
      },
      {
        id: 'gr3',
        text: '¿Qué perdemos y qué ganamos al universalizar su mensaje?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'silent-revolutions',
    name: 'Revoluciones Silenciosas',
    icon: <Zap className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[4],
    description: 'Cambios sutiles pero profundos que propone',
    mood: {
      primary: 'revolucionario',
      spectrum: ['transformador', 'sutil', 'subversivo'],
      intensity: 'intense'
    },
    complexity: 'analytical',
    timeEstimate: 25,
    tags: ['cambio', 'revolución', 'transformación'],
    prompts: [
      {
        id: 'sr1',
        text: '¿Qué revolución silenciosa propone sin declararla?',
        type: 'opening'
      },
      {
        id: 'sr2',
        text: '¿Qué estructura de poder desafía sutilmente?',
        type: 'exploration'
      },
      {
        id: 'sr3',
        text: '¿Qué semilla de cambio planta en el espectador?',
        type: 'deepening'
      }
    ]
  },

  // DIMENSIÓN SENSORIAL
  {
    id: 'taste-of-cinema',
    name: 'El Sabor del Cine',
    icon: <Coffee className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[5],
    description: 'Traduce la experiencia visual a gustos y sabores',
    mood: {
      primary: 'gustativo',
      spectrum: ['sabroso', 'amargo', 'dulce', 'umami'],
      intensity: 'moderate'
    },
    complexity: 'experimental',
    timeEstimate: 20,
    tags: ['sabor', 'gusto', 'sinestesia'],
    prompts: [
      {
        id: 'tc1',
        text: 'Si la película fuera un menú, ¿qué serviría cada acto?',
        type: 'opening'
      },
      {
        id: 'tc2',
        text: '¿Qué escena deja un regusto amargo? ¿Y cuál es puro dulzor?',
        type: 'exploration'
      },
      {
        id: 'tc3',
        text: '¿Cuál es el sabor dominante que persiste después?',
        type: 'synthesis'
      }
    ]
  },
  {
    id: 'cinematic-textures',
    name: 'Texturas Cinematográficas',
    icon: <Feather className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[5],
    description: 'La película como experiencia táctil',
    mood: {
      primary: 'táctil',
      spectrum: ['suave', 'áspero', 'viscoso', 'sedoso'],
      intensity: 'intense'
    },
    complexity: 'experimental',
    timeEstimate: 25,
    tags: ['textura', 'tacto', 'sensación'],
    prompts: [
      {
        id: 'ct1',
        text: 'Si pudieras tocar la película, ¿cómo se sentiría cada escena?',
        type: 'opening'
      },
      {
        id: 'ct2',
        text: '¿Qué momento es terciopelo y cuál es papel de lija?',
        type: 'exploration'
      },
      {
        id: 'ct3',
        text: '¿Cómo cambia la textura emocional del principio al final?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'aromatic-memories',
    name: 'Memorias Aromáticas',
    icon: <Flower className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[5],
    description: 'Los aromas invisibles del cine',
    mood: {
      primary: 'olfativo',
      spectrum: ['fragante', 'terroso', 'metálico', 'floral'],
      intensity: 'subtle'
    },
    complexity: 'experimental',
    timeEstimate: 20,
    tags: ['aroma', 'olfato', 'memoria'],
    prompts: [
      {
        id: 'am1',
        text: '¿A qué huele cada locación importante?',
        type: 'opening'
      },
      {
        id: 'am2',
        text: '¿Qué aroma evocaría instantáneamente esta película?',
        type: 'exploration'
      },
      {
        id: 'am3',
        text: '¿Cómo huele el clímax emocional?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'temperature-mapping',
    name: 'Mapa de Temperaturas',
    icon: <Thermometer className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[5],
    description: 'Las variaciones térmicas de la narrativa',
    mood: {
      primary: 'térmico',
      spectrum: ['gélido', 'frío', 'tibio', 'cálido', 'ardiente'],
      intensity: 'moderate'
    },
    complexity: 'hybrid',
    timeEstimate: 20,
    tags: ['temperatura', 'calor', 'frío'],
    prompts: [
      {
        id: 'tm1',
        text: '¿Cuál es la temperatura emocional de cada acto?',
        type: 'opening'
      },
      {
        id: 'tm2',
        text: '¿Dónde sientes el frío más penetrante y el calor más envolvente?',
        type: 'exploration'
      },
      {
        id: 'tm3',
        text: '¿Cómo usa la película el contraste térmico narrativamente?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'sonic-colors',
    name: 'Colores Sonoros',
    icon: <Disc className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[5],
    description: 'Sinestesia entre sonido y color',
    mood: {
      primary: 'cromático-sonoro',
      spectrum: ['brillante', 'opaco', 'saturado', 'monocromático'],
      intensity: 'intense'
    },
    complexity: 'experimental',
    timeEstimate: 30,
    tags: ['sonido', 'color', 'sinestesia'],
    prompts: [
      {
        id: 'sc1',
        text: '¿De qué color es cada sonido importante?',
        type: 'opening'
      },
      {
        id: 'sc2',
        text: '¿Cómo se ve la banda sonora si cierras los ojos?',
        type: 'exploration'
      },
      {
        id: 'sc3',
        text: '¿Qué paleta cromática crea el diseño sonoro?',
        type: 'deepening'
      }
    ]
  },

  // DIMENSIÓN TEMPORAL
  {
    id: 'elastic-time',
    name: 'Tiempo Elástico',
    icon: <Clock className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[6],
    description: 'Cómo la película estira y comprime el tiempo',
    mood: {
      primary: 'temporal',
      spectrum: ['dilatado', 'comprimido', 'suspendido', 'acelerado'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 25,
    tags: ['tiempo', 'duración', 'percepción'],
    prompts: [
      {
        id: 'et1',
        text: '¿En qué momento el tiempo se detiene sin detenerse?',
        type: 'opening'
      },
      {
        id: 'et2',
        text: '¿Cuándo cinco segundos se sienten como una eternidad?',
        type: 'exploration'
      },
      {
        id: 'et3',
        text: '¿Cómo manipula la película tu percepción temporal?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'memory-architecture',
    name: 'Arquitectura de la Memoria',
    icon: <Archive className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[6],
    description: 'Cómo la película construye y deconstruye memorias',
    mood: {
      primary: 'mnemónico',
      spectrum: ['nostálgico', 'fragmentado', 'reconstructivo'],
      intensity: 'intense'
    },
    complexity: 'hybrid',
    timeEstimate: 30,
    tags: ['memoria', 'recuerdo', 'olvido'],
    prompts: [
      {
        id: 'ma1',
        text: '¿Cómo distingue la película entre memoria y realidad?',
        type: 'opening'
      },
      {
        id: 'ma2',
        text: '¿Qué recuerdos crea que no existían antes?',
        type: 'exploration'
      },
      {
        id: 'ma3',
        text: '¿Dónde la memoria se vuelve más real que el presente?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'future-echoes',
    name: 'Ecos del Futuro',
    icon: <FastForward className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[6],
    description: 'Anticipaciones y premoniciones temporales',
    mood: {
      primary: 'anticipatorio',
      spectrum: ['profético', 'premonitorio', 'futuro'],
      intensity: 'moderate'
    },
    complexity: 'experimental',
    timeEstimate: 25,
    tags: ['futuro', 'anticipación', 'profecía'],
    prompts: [
      {
        id: 'fe1',
        text: '¿Qué futuro late dentro del presente de la película?',
        type: 'opening'
      },
      {
        id: 'fe2',
        text: '¿Qué señales del porvenir pasan desapercibidas?',
        type: 'exploration'
      },
      {
        id: 'fe3',
        text: 'Si la película fuera una profecía, ¿qué anunciaría?',
        type: 'transcendent'
      }
    ]
  },
  {
    id: 'cyclical-time',
    name: 'Tiempo Cíclico',
    icon: <RefreshCw className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[6],
    description: 'Patrones que se repiten y ciclos narrativos',
    mood: {
      primary: 'cíclico',
      spectrum: ['repetitivo', 'ritual', 'eterno'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 20,
    tags: ['ciclos', 'repetición', 'patrones'],
    prompts: [
      {
        id: 'ct1',
        text: '¿Qué ciclo se completa sin que nos demos cuenta?',
        type: 'opening'
      },
      {
        id: 'ct2',
        text: '¿Qué se repite para mostrar que nada se repite igual?',
        type: 'exploration'
      },
      {
        id: 'ct3',
        text: '¿Dónde el final es un nuevo comienzo disfrazado?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'temporal-vertigo',
    name: 'Vértigo Temporal',
    icon: <Tornado className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[6],
    description: 'Desorientación y mareo temporal',
    mood: {
      primary: 'vertiginoso',
      spectrum: ['desorientador', 'mareante', 'inestable'],
      intensity: 'overwhelming'
    },
    complexity: 'experimental',
    timeEstimate: 25,
    tags: ['vértigo', 'desorientación', 'tiempo'],
    prompts: [
      {
        id: 'tv1',
        text: '¿En qué momento pierdes la noción del tiempo completamente?',
        type: 'opening'
      },
      {
        id: 'tv2',
        text: '¿Cómo te desorienta la película temporalmente?',
        type: 'exploration'
      },
      {
        id: 'tv3',
        text: '¿Qué ancla te devuelve al presente?',
        type: 'synthesis'
      }
    ]
  },

  // DIMENSIÓN ESPACIAL
  {
    id: 'cinematic-geography',
    name: 'Geografía Cinematográfica',
    icon: <Map className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[7],
    description: 'El espacio como personaje y narrativa',
    mood: {
      primary: 'espacial',
      spectrum: ['expansivo', 'claustrofóbico', 'laberíntico'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 25,
    tags: ['espacio', 'geografía', 'lugar'],
    prompts: [
      {
        id: 'cg1',
        text: '¿Cómo respira o ahoga el espacio a los personajes?',
        type: 'opening'
      },
      {
        id: 'cg2',
        text: 'Dibuja el mapa emocional de las locaciones',
        type: 'exploration'
      },
      {
        id: 'cg3',
        text: '¿Qué espacio existe solo en la mente de los personajes?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'architectural-emotions',
    name: 'Arquitectura Emocional',
    icon: <Building className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[7],
    description: 'Cómo los espacios construyen emociones',
    mood: {
      primary: 'arquitectónico',
      spectrum: ['estructurado', 'fluido', 'monumental'],
      intensity: 'moderate'
    },
    complexity: 'hybrid',
    timeEstimate: 25,
    tags: ['arquitectura', 'espacio', 'emoción'],
    prompts: [
      {
        id: 'ae1',
        text: '¿Qué emoción tiene cada habitación o espacio?',
        type: 'opening'
      },
      {
        id: 'ae2',
        text: '¿Cómo dialogan las arquitecturas con los estados anímicos?',
        type: 'exploration'
      },
      {
        id: 'ae3',
        text: 'Si las emociones fueran edificios, ¿cómo serían?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'liminal-spaces',
    name: 'Espacios Liminales',
    icon: <DoorOpen className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[7],
    description: 'Umbrales, transiciones y no-lugares',
    mood: {
      primary: 'liminal',
      spectrum: ['transitorio', 'umbral', 'intermedio'],
      intensity: 'subtle'
    },
    complexity: 'experimental',
    timeEstimate: 20,
    tags: ['liminal', 'umbral', 'transición'],
    prompts: [
      {
        id: 'ls1',
        text: '¿En qué espacios los personajes no están ni aquí ni allá?',
        type: 'opening'
      },
      {
        id: 'ls2',
        text: '¿Qué transformación ocurre en cada umbral?',
        type: 'exploration'
      },
      {
        id: 'ls3',
        text: '¿Dónde el espacio se vuelve portal?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'vertical-horizons',
    name: 'Horizontes Verticales',
    icon: <ArrowUpDown className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[7],
    description: 'La dimensión vertical del espacio narrativo',
    mood: {
      primary: 'vertical',
      spectrum: ['ascendente', 'descendente', 'flotante'],
      intensity: 'moderate'
    },
    complexity: 'analytical',
    timeEstimate: 20,
    tags: ['verticalidad', 'altura', 'profundidad'],
    prompts: [
      {
        id: 'vh1',
        text: '¿Cómo usa la película la altura para narrar poder o vulnerabilidad?',
        type: 'opening'
      },
      {
        id: 'vh2',
        text: '¿Qué significa cada ascenso y cada caída?',
        type: 'exploration'
      },
      {
        id: 'vh3',
        text: '¿Dónde la gravedad narrativa es más fuerte?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'offscreen-worlds',
    name: 'Mundos Fuera de Campo',
    icon: <Frame className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[7],
    description: 'Lo que existe más allá del encuadre',
    mood: {
      primary: 'expandido',
      spectrum: ['invisible', 'sugerido', 'infinito'],
      intensity: 'intense'
    },
    complexity: 'experimental',
    timeEstimate: 25,
    tags: ['fuera de campo', 'invisible', 'sugerido'],
    prompts: [
      {
        id: 'ow1',
        text: '¿Qué mundo vital existe fuera del frame?',
        type: 'opening'
      },
      {
        id: 'ow2',
        text: '¿Qué historia paralela transcurre en off?',
        type: 'exploration'
      },
      {
        id: 'ow3',
        text: '¿Cuándo lo invisible es más importante que lo visible?',
        type: 'deepening'
      }
    ]
  },

  // DIMENSIÓN EXPERIMENTAL
  {
    id: 'quantum-viewing',
    name: 'Visionado Cuántico',
    icon: <Atom className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[8],
    description: 'La película existe en múltiples estados simultáneos',
    mood: {
      primary: 'cuántico',
      spectrum: ['superpuesto', 'probabilístico', 'indeterminado'],
      intensity: 'overwhelming'
    },
    complexity: 'experimental',
    timeEstimate: 35,
    tags: ['cuántico', 'múltiple', 'simultaneidad'],
    prompts: [
      {
        id: 'qv1',
        text: '¿Qué otras películas coexisten en esta?',
        type: 'opening'
      },
      {
        id: 'qv2',
        text: '¿Cómo colapsa la observación las posibilidades narrativas?',
        type: 'exploration'
      },
      {
        id: 'qv3',
        text: 'Si cada espectador ve una película diferente, ¿cuál viste tú?',
        type: 'transcendent'
      }
    ]
  },
  {
    id: 'dna-cinema',
    name: 'ADN Cinematográfico',
    icon: <Activity className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[8],
    description: 'El código genético de la película',
    mood: {
      primary: 'genético',
      spectrum: ['codificado', 'hereditario', 'mutante'],
      intensity: 'intense'
    },
    complexity: 'experimental',
    timeEstimate: 30,
    tags: ['genética', 'código', 'herencia'],
    prompts: [
      {
        id: 'dc1',
        text: '¿Cuál es el gen dominante de esta película?',
        type: 'opening'
      },
      {
        id: 'dc2',
        text: '¿Qué mutaciones narrativas presenta?',
        type: 'exploration'
      },
      {
        id: 'dc3',
        text: '¿De qué otras películas heredó su código?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'dream-logic',
    name: 'Lógica Onírica',
    icon: <Moon className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[8],
    description: 'Análisis desde la lógica del sueño',
    mood: {
      primary: 'onírico',
      spectrum: ['surreal', 'subconsciente', 'simbólico'],
      intensity: 'intense'
    },
    complexity: 'experimental',
    timeEstimate: 25,
    tags: ['sueño', 'subconsciente', 'símbolo'],
    prompts: [
      {
        id: 'dl1',
        text: 'Si la película fuera un sueño, ¿de quién sería?',
        type: 'opening'
      },
      {
        id: 'dl2',
        text: '¿Qué lógica onírica gobierna las transiciones?',
        type: 'exploration'
      },
      {
        id: 'dl3',
        text: '¿Cuál es el significado latente bajo el contenido manifiesto?',
        type: 'deepening'
      }
    ]
  },
  {
    id: 'meta-consciousness',
    name: 'Metaconsciencia Fílmica',
    icon: <Brain className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[8],
    description: 'La película consciente de sí misma',
    mood: {
      primary: 'metaconsciente',
      spectrum: ['autorreferencial', 'consciente', 'reflexivo'],
      intensity: 'overwhelming'
    },
    complexity: 'experimental',
    timeEstimate: 30,
    tags: ['meta', 'consciencia', 'autorreferencia'],
    prompts: [
      {
        id: 'mc1',
        text: '¿En qué momento la película sabe que es película?',
        type: 'opening'
      },
      {
        id: 'mc2',
        text: '¿Cómo se comunica contigo sabiendo que la miras?',
        type: 'exploration'
      },
      {
        id: 'mc3',
        text: '¿Qué te dice la película sobre el acto de mirar?',
        type: 'transcendent'
      }
    ]
  },
  {
    id: 'possession-mode',
    name: 'Modo Posesión',
    icon: <Ghost className="templateIcon" />,
    category: TEMPLATE_CATEGORIES[8],
    description: 'Habita diferentes elementos de la película',
    mood: {
      primary: 'inmersivo',
      spectrum: ['habitante', 'poseedor', 'encarnado'],
      intensity: 'overwhelming'
    },
    complexity: 'experimental',
    timeEstimate: 40,
    tags: ['inmersión', 'perspectiva', 'encarnación'],
    prompts: [
      {
        id: 'pm1',
        text: 'Eres la cámara: ¿qué sientes al capturar cada escena?',
        type: 'opening'
      },
      {
        id: 'pm2',
        text: 'Eres la luz: ¿cómo decides iluminar u ocultar?',
        type: 'exploration'
      },
      {
        id: 'pm3',
        text: 'Eres el montaje: ¿por qué cortas donde cortas?',
        type: 'deepening'
      },
      {
        id: 'pm4',
        text: 'Eres el sonido: ¿qué susurras que nadie más escucha?',
        type: 'transcendent'
      }
    ],
    perspectives: [
      {
        id: 'camera',
        name: 'Soy la Cámara',
        description: 'Narra desde la perspectiva del dispositivo',
        icon: <Camera />
      },
      {
        id: 'light',
        name: 'Soy la Luz',
        description: 'Experimenta como la iluminación',
        icon: <Sun />
      },
      {
        id: 'sound',
        name: 'Soy el Sonido',
        description: 'Vive como las ondas sonoras',
        icon: <Music />
      },
      {
        id: 'time',
        name: 'Soy el Tiempo',
        description: 'Fluye como la temporalidad misma',
        icon: <Clock />
      }
    ]
  }
];

// // Iconos personalizados para casos especiales
// const Circle: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="12" cy="12" r="10" />
//   </svg>
// );

// const Ghost: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M9 3C5.686 3 3 5.686 3 9v12l3-3 3 3 3-3 3 3 3-3 3 3V9c0-3.314-2.686-6-6-6H9z" />
//     <circle cx="9" cy="9" r="1.5" fill="currentColor" />
//     <circle cx="15" cy="9" r="1.5" fill="currentColor" />
//   </svg>
// );

// const Thermometer: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
//   </svg>
// );

// const Disc: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <circle cx="12" cy="12" r="10" />
//     <circle cx="12" cy="12" r="3" />
//   </svg>
// );

// const Archive: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polyline points="21 8 21 21 3 21 3 8" />
//     <rect x="1" y="3" width="22" height="5" />
//     <line x1="10" y1="12" x2="14" y2="12" />
//   </svg>
// );

// const FastForward: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polygon points="13 19 22 12 13 5 13 19" />
//     <polygon points="2 19 11 12 2 5 2 19" />
//   </svg>
// );

// const RefreshCw: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <polyline points="23 4 23 10 17 10" />
//     <polyline points="1 20 1 14 7 14" />
//     <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
//   </svg>
// );

// const Tornado: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M21 4H3M20 8H6M21 12H3M20 16H6M19 20H8" />
//   </svg>
// );

// const DoorOpen: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <path d="M13 4h3a2 2 0 0 1 2 2v14M4 20h16M4 20v-14a2 2 0 0 1 2-2h3" />
//     <path d="M9 4v16" />
//     <circle cx="11" cy="12" r="1" />
//   </svg>
// );

// const ArrowUpDown: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <line x1="12" y1="20" x2="12" y2="4" />
//     <polyline points="6 10 12 4 18 10" />
//     <polyline points="6 14 12 20 18 14" />
//   </svg>
// );

// const Frame: React.FC<{ className?: string }> = ({ className }) => (
//   <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
//     <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
//     <line x1="9" y1="3" x2="9" y2="21" />
//     <line x1="15" y1="3" x2="15" y2="21" />
//     <line x1="3" y1="9" x2="21" y2="9" />
//     <line x1="3" y1="15" x2="21" y2="15" />
//   </svg>
// );

// Componente principal
export const ReflectionTemplatesModal: React.FC<ReflectionTemplatesProps> = ({
  movieTitle,
  onSelectTemplate,
  userMood,
  timeOfDay,
  previousAnalyses = 0
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('emotional');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedComplexity, setSelectedComplexity] = useState<string>('all');
  const [expandedTemplates, setExpandedTemplates] = useState<Set<string>>(new Set());
  const [selectedTemplate, setSelectedTemplate] = useState<ReflectionTemplate | null>(null);
  const [showAIRecommendations, setShowAIRecommendations] = useState(true);

  // Filtrar plantillas por categoría y búsqueda
  const filteredTemplates = useMemo(() => {
    return REFLECTION_TEMPLATES.filter(template => {
      const matchesCategory = template.category.id === selectedCategory;
      const matchesSearch = searchTerm === '' || 
        template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesComplexity = selectedComplexity === 'all' || template.complexity === selectedComplexity;
      
      return matchesCategory && matchesSearch && matchesComplexity;
    });
  }, [selectedCategory, searchTerm, selectedComplexity]);

  // Recomendaciones de IA basadas en contexto
  const aiRecommendations = useMemo(() => {
    const recommendations: ReflectionTemplate[] = [];
    
    // Basado en la hora del día
    if (timeOfDay === 'night') {
      recommendations.push(
        REFLECTION_TEMPLATES.find(t => t.id === 'dream-logic')!,
        REFLECTION_TEMPLATES.find(t => t.id === 'emotional-crystallization')!
      );
    } else if (timeOfDay === 'morning') {
      recommendations.push(
        REFLECTION_TEMPLATES.find(t => t.id === 'personal-resonance')!,
        REFLECTION_TEMPLATES.find(t => t.id === 'sonic-architecture')!
      );
    }
    
    // Basado en análisis previos
    if (previousAnalyses === 0) {
      recommendations.push(REFLECTION_TEMPLATES.find(t => t.id === 'personal-resonance')!);
    } else if (previousAnalyses > 5) {
      recommendations.push(
        REFLECTION_TEMPLATES.find(t => t.id === 'quantum-viewing')!,
        REFLECTION_TEMPLATES.find(t => t.id === 'meta-consciousness')!
      );
    }
    
    // Basado en el estado de ánimo
    if (userMood === 'contemplative') {
      recommendations.push(REFLECTION_TEMPLATES.find(t => t.id === 'significant-voids')!);
    } else if (userMood === 'analytical') {
      recommendations.push(REFLECTION_TEMPLATES.find(t => t.id === 'visual-anatomy')!);
    }
    
    // Eliminar duplicados y undefined
    return [...new Set(recommendations.filter(Boolean))].slice(0, 3);
  }, [timeOfDay, previousAnalyses, userMood]);

  // Manejar expansión de plantilla
  const toggleExpanded = (templateId: string) => {
    const newExpanded = new Set(expandedTemplates);
    if (newExpanded.has(templateId)) {
      newExpanded.delete(templateId);
    } else {
      newExpanded.add(templateId);
    }
    setExpandedTemplates(newExpanded);
  };

  // Seleccionar plantilla
  const handleSelectTemplate = (template: ReflectionTemplate) => {
    setSelectedTemplate(template);
    onSelectTemplate(template);
  };

  return (
    <div className={styles.reflectionTemplatesModal}>
      <div className={styles.header}>
        <h2 className={styles.title}>
          <Sparkles className={styles.titleIcon} />
          Plantillas de Reflexión Cinematográfica
        </h2>
        <p className={styles.subtitle}>
          Explora múltiples dimensiones de análisis para "{movieTitle}"
        </p>
      </div>

      {/* Recomendaciones de IA */}
      {showAIRecommendations && aiRecommendations.length > 0 && (
        <div className={styles.aiRecommendations}>
          <div className={styles.aiHeader}>
            <Brain size={20} />
            <span>Recomendaciones para ti</span>
            <button 
              className={styles.dismissButton}
              onClick={() => setShowAIRecommendations(false)}
            >
              ×
            </button>
          </div>
          <div className={styles.recommendationsList}>
            {aiRecommendations.map(template => (
              <div
                key={template.id}
                className={styles.recommendationCard}
                onClick={() => handleSelectTemplate(template)}
              >
                {template.icon}
                <div className={styles.recommendationInfo}>
                  <h4>{template.name}</h4>
                  <p>{template.description}</p>
                </div>
                <ChevronRight size={20} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navegación por categorías */}
      <div className={styles.categoryNav}>
        {TEMPLATE_CATEGORIES.map(category => (
          <button
            key={category.id}
            className={`${styles.categoryButton} ${selectedCategory === category.id ? styles.active : ''}`}
            onClick={() => setSelectedCategory(category.id)}
            style={{ '--category-color': category.color } as React.CSSProperties}
          >
            <span className={styles.categoryName}>{category.name}</span>
            <span className={styles.categoryCount}>
              {REFLECTION_TEMPLATES.filter(t => t.category.id === category.id).length}
            </span>
          </button>
        ))}
      </div>

      {/* Controles de filtrado */}
      <div className={styles.controls}>
        <div className={styles.searchBox}>
          <Search size={20} />
          <input
            type="text"
            placeholder="Buscar plantilla, tema o etiqueta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className={styles.complexityFilter}>
          <button
            className={selectedComplexity === 'all' ? styles.active : ''}
            onClick={() => setSelectedComplexity('all')}
          >
            Todas
          </button>
          <button
            className={selectedComplexity === 'intuitive' ? styles.active : ''}
            onClick={() => setSelectedComplexity('intuitive')}
          >
            Intuitivo
          </button>
          <button
            className={selectedComplexity === 'analytical' ? styles.active : ''}
            onClick={() => setSelectedComplexity('analytical')}
          >
            Analítico
          </button>
          <button
            className={selectedComplexity === 'hybrid' ? styles.active : ''}
            onClick={() => setSelectedComplexity('hybrid')}
          >
            Híbrido
          </button>
          <button
            className={selectedComplexity === 'experimental' ? styles.active : ''}
            onClick={() => setSelectedComplexity('experimental')}
          >
            Experimental
          </button>
        </div>
      </div>

      {/* Lista de plantillas */}
      <div className={styles.templatesList}>
        {filteredTemplates.map(template => (
          <div
            key={template.id}
            className={`${styles.templateCard} ${expandedTemplates.has(template.id) ? styles.expanded : ''}`}
          >
            <div 
              className={styles.templateHeader}
              onClick={() => toggleExpanded(template.id)}
            >
              <div className={styles.templateIcon}>{template.icon}</div>
              <div className={styles.templateInfo}>
                <h3>{template.name}</h3>
                <p>{template.description}</p>
                <div className={styles.templateMeta}>
                  <span className={styles.complexity}>
                    {template.complexity === 'intuitive' && '🌊 Intuitivo'}
                    {template.complexity === 'analytical' && '🔬 Analítico'}
                    {template.complexity === 'hybrid' && '🔄 Híbrido'}
                    {template.complexity === 'experimental' && '🚀 Experimental'}
                  </span>
                  <span className={styles.timeEstimate}>
                    <Clock size={14} /> ~{template.timeEstimate} min
                  </span>
                  <span className={styles.intensity}>
                    {template.mood.intensity === 'subtle' && '○○○●'}
                    {template.mood.intensity === 'moderate' && '○○●●'}
                    {template.mood.intensity === 'intense' && '○●●●'}
                    {template.mood.intensity === 'overwhelming' && '●●●●'}
                  </span>
                </div>
              </div>
              <button className={styles.expandButton}>
                {expandedTemplates.has(template.id) ? <ChevronDown /> : <ChevronRight />}
              </button>
            </div>
            
            {expandedTemplates.has(template.id) && (
              <div className={styles.templateContent}>
                {/* Tags */}
                <div className={styles.tags}>
                  {template.tags.map(tag => (
                    <span key={tag} className={styles.tag}>#{tag}</span>
                  ))}
                </div>
                
                {/* Prompts de ejemplo */}
                <div className={styles.prompts}>
                  <h4>Preguntas guía:</h4>
                  {template.prompts.slice(0, 3).map(prompt => (
                    <div key={prompt.id} className={styles.prompt}>
                      <span className={styles.promptType}>
                        {prompt.type === 'opening' && '🌅 Apertura'}
                        {prompt.type === 'exploration' && '🔍 Exploración'}
                        {prompt.type === 'deepening' && '🌊 Profundización'}
                        {prompt.type === 'synthesis' && '💎 Síntesis'}
                        {prompt.type === 'transcendent' && '✨ Trascendente'}
                      </span>
                      <p>{prompt.text}</p>
                    </div>
                  ))}
                </div>
                
                {/* Perspectivas si las tiene */}
                {template.perspectives && (
                  <div className={styles.perspectives}>
                    <h4>Perspectivas disponibles:</h4>
                    <div className={styles.perspectivesList}>
                      {template.perspectives.map(perspective => (
                        <div key={perspective.id} className={styles.perspective}>
                          {perspective.icon}
                          <span>{perspective.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Mood */}
                <div className={styles.mood}>
                  <h4>Tono emocional:</h4>
                  <div className={styles.moodSpectrum}>
                    {template.mood.spectrum.map(mood => (
                      <span key={mood} className={styles.moodItem}>{mood}</span>
                    ))}
                  </div>
                </div>
                
                {/* Botón de selección */}
                <button
                  className={styles.selectButton}
                  onClick={() => handleSelectTemplate(template)}
                >
                  <Check size={20} />
                  Usar esta plantilla
                </button>
              </div>
            )}
          </div>
        ))}
        
        {filteredTemplates.length === 0 && (
          <div className={styles.noResults}>
            <p>No se encontraron plantillas con estos criterios</p>
            <button onClick={() => {
              setSearchTerm('');
              setSelectedComplexity('all');
            }}>
              Limpiar filtros
            </button>
          </div>
        )}
      </div>

      {/* Footer informativo */}
      <div className={styles.footer}>
        <div className={styles.footerInfo}>
          <Info size={16} />
          <span>
            {REFLECTION_TEMPLATES.length} plantillas únicas • 
            {TEMPLATE_CATEGORIES.length} dimensiones de análisis • 
            Infinitas perspectivas posibles
          </span>
        </div>
      </div>
    </div>
  );
};

// Hook para generar prompts dinámicos basados en contexto
export const useReflectionPrompts = (
  template: ReflectionTemplate,
  movieData: any,
  userContext: any
) => {
  return useMemo(() => {
    // Aquí iría la lógica para personalizar los prompts basándose en:
    // - Género de la película
    // - Análisis previos del usuario
    // - Hora del día
    // - Estado emocional
    // - Patrones de reflexión anteriores
    
    const personalizedPrompts = template.prompts.map(prompt => ({
      ...prompt,
      text: prompt.text
        .replace('{movieTitle}', movieData.title)
        .replace('{genre}', movieData.genre)
        .replace('{director}', movieData.director)
    }));
    
    return personalizedPrompts;
  }, [template, movieData, userContext]);
};

export default ReflectionTemplatesModal;