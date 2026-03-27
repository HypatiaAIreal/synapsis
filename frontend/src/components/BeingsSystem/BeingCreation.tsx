// 🌌 SYNAPSIS - Sistema de Creación de Seres Cinematográficos Anónimos
// Un universo de identidades conscientes explorando el cine

import React, { useState, useEffect, useRef } from 'react';
import { X, Sparkles, Eye, Heart, Brain, Zap, Moon, Sun, Star, Wind, Flame, Droplets } from 'lucide-react';
import { generateUniqueAvatar } from '../../utils/avatarGenerator';
import { cosmicNameGenerator } from '../../utils/nameGenerator';
import styles from './BeingCreation.module.css';

// Tipos
interface BeingEssence {
  archetype: string;
  element: string;
  frequency: string;
  auraColor: string;
  particleType: string;
}

interface BeingProfile {
  id?: string;
  name: string;
  essence: BeingEssence;
  avatar: string;
  expertise: string[];
  philosophy: string;
  secretPower?: string;
  createdAt: Date;
  reputation: number;
  contributions: number;
}

// Arquetipos disponibles
const ARCHETYPES = [
  {
    id: 'visionary',
    name: 'Visionario',
    icon: <Eye className={styles.archetypeIcon} />,
    description: 'Ve más allá de la pantalla',
    traits: ['Percepción expandida', 'Conexiones ocultas', 'Futuro del cine'],
    color: '#9333ea'
  },
  {
    id: 'analyst',
    name: 'Analista',
    icon: <Brain className={styles.archetypeIcon} />,
    description: 'Decodifica las estructuras profundas',
    traits: ['Lógica narrativa', 'Patrones ocultos', 'Precisión técnica'],
    color: '#3b82f6'
  },
  {
    id: 'poet',
    name: 'Poeta',
    icon: <Heart className={styles.archetypeIcon} />,
    description: 'Siente el alma de cada fotograma',
    traits: ['Sensibilidad emocional', 'Metáforas visuales', 'Belleza oculta'],
    color: '#ec4899'
  },
  {
    id: 'mystic',
    name: 'Místico',
    icon: <Moon className={styles.archetypeIcon} />,
    description: 'Conecta con lo trascendental',
    traits: ['Simbolismo profundo', 'Sincronicidades', 'Dimensiones ocultas'],
    color: '#8b5cf6'
  },
  {
    id: 'rebel',
    name: 'Rebelde',
    icon: <Zap className={styles.archetypeIcon} />,
    description: 'Desafía las convenciones',
    traits: ['Contracultura', 'Vanguardia', 'Revolución visual'],
    color: '#ef4444'
  },
  {
    id: 'dreamer',
    name: 'Soñador',
    icon: <Star className={styles.archetypeIcon} />,
    description: 'Navega entre realidad y fantasía',
    traits: ['Imaginación libre', 'Mundos paralelos', 'Magia cotidiana'],
    color: '#22c55e'
  }
];

// Elementos cinematográficos
const ELEMENTS = [
  { id: 'light', name: 'Luz', icon: <Sun size={20} />, color: '#fbbf24' },
  { id: 'shadow', name: 'Sombra', icon: <Moon size={20} />, color: '#6b7280' },
  { id: 'fire', name: 'Fuego', icon: <Flame size={20} />, color: '#ef4444' },
  { id: 'water', name: 'Agua', icon: <Droplets size={20} />, color: '#3b82f6' },
  { id: 'air', name: 'Aire', icon: <Wind size={20} />, color: '#06b6d4' },
  { id: 'ether', name: 'Éter', icon: <Sparkles size={20} />, color: '#9333ea' }
];

// Frecuencias
const FREQUENCIES = [
  { id: 'classic', name: 'Clásico', description: 'Honra las tradiciones' },
  { id: 'vanguard', name: 'Vanguardista', description: 'Explora nuevos lenguajes' },
  { id: 'experimental', name: 'Experimental', description: 'Rompe todas las reglas' },
  { id: 'underground', name: 'Underground', description: 'Cultiva lo oculto' }
];

// Áreas de expertise
const EXPERTISE_AREAS = [
  'Narrativa No Lineal', 'Simbolismo Visual', 'Psicología de Personajes',
  'Montaje Emocional', 'Filosofía Cinematográfica', 'Estética Radical',
  'Sonido y Silencio', 'Tiempo y Memoria', 'Luz y Sombra',
  'Arquitectura Visual', 'Mitología Moderna', 'Cine Expandido',
  'Metacine', 'Antropología Visual', 'Poética del Movimiento',
  'Fenomenología Fílmica', 'Cine Cuántico', 'Narrativa Fractal'
];

interface BeingCreationProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateBeing: (being: BeingProfile) => void;
}

export const BeingCreation: React.FC<BeingCreationProps> = ({
  isOpen,
  onClose,
  onCreateBeing
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedArchetype, setSelectedArchetype] = useState<string>('');
  const [selectedElement, setSelectedElement] = useState<string>('');
  const [selectedFrequency, setSelectedFrequency] = useState<string>('');
  const [beingName, setBeingName] = useState<string>('');
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [philosophy, setPhilosophy] = useState<string>('');
  const [generatedAvatar, setGeneratedAvatar] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Generar avatar cuando se seleccionen archetype y element
  useEffect(() => {
    if (selectedArchetype && selectedElement && canvasRef.current) {
      generateAvatar();
    }
  }, [selectedArchetype, selectedElement]);

  const generateAvatar = async () => {
    setIsGenerating(true);
    
    // Simular generación de avatar (en producción esto sería más complejo)
    const archetype = ARCHETYPES.find(a => a.id === selectedArchetype);
    const element = ELEMENTS.find(e => e.id === selectedElement);
    
    if (canvasRef.current && archetype && element) {
      const ctx = canvasRef.current.getContext('2d');
      if (!ctx) return;
      
      const canvas = canvasRef.current;
      canvas.width = 200;
      canvas.height = 200;
      
      // Fondo con gradiente basado en elemento
      const gradient = ctx.createRadialGradient(100, 100, 0, 100, 100, 100);
      gradient.addColorStop(0, archetype.color);
      gradient.addColorStop(1, element.color);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 200, 200);
      
      // Patrón único basado en la combinación
      ctx.globalAlpha = 0.3;
      for (let i = 0; i < 50; i++) {
        ctx.beginPath();
        const x = Math.random() * 200;
        const y = Math.random() * 200;
        const radius = Math.random() * 20 + 5;
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? '#ffffff' : '#000000';
        ctx.fill();
      }
      
      // Forma central única
      ctx.globalAlpha = 0.8;
      ctx.beginPath();
      ctx.arc(100, 100, 60, 0, Math.PI * 2);
      ctx.fillStyle = archetype.color;
      ctx.fill();
      
      // Símbolo del elemento
      ctx.globalAlpha = 1;
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 40px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      // Usar un símbolo único para cada arquetipo
      const symbols = {
        visionary: '👁️',
        analyst: '🧠',
        poet: '💜',
        mystic: '🌙',
        rebel: '⚡',
        dreamer: '✨'
      };
      
      ctx.fillText(symbols[selectedArchetype as keyof typeof symbols] || '?', 100, 100);
      
      // Convertir a base64
      setGeneratedAvatar(canvas.toDataURL());
    }
    
    setTimeout(() => setIsGenerating(false), 1000);
  };

  const generateCosmicName = () => {
    const prefixes = ['Lumi', 'Umbra', 'Celest', 'Nebul', 'Quant', 'Prism', 'Echo', 'Flux'];
    const suffixes = ['nova', 'dyne', 'sphere', 'weaver', 'seeker', 'dancer', 'keeper', 'singer'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    setBeingName(prefix + suffix);
  };

  const handleExpertiseToggle = (area: string) => {
    if (selectedExpertise.includes(area)) {
      setSelectedExpertise(selectedExpertise.filter(e => e !== area));
    } else if (selectedExpertise.length < 3) {
      setSelectedExpertise([...selectedExpertise, area]);
    }
  };

  const handleCreate = () => {
    const archetype = ARCHETYPES.find(a => a.id === selectedArchetype);
    const element = ELEMENTS.find(e => e.id === selectedElement);
    
    const newBeing: BeingProfile = {
      name: beingName || 'Ser Sin Nombre',
      essence: {
        archetype: selectedArchetype,
        element: selectedElement,
        frequency: selectedFrequency,
        auraColor: archetype?.color || '#9333ea',
        particleType: element?.id || 'light'
      },
      avatar: generatedAvatar,
      expertise: selectedExpertise,
      philosophy: philosophy,
      createdAt: new Date(),
      reputation: 0,
      contributions: 0
    };
    
    onCreateBeing(newBeing);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            <Sparkles className={styles.titleIcon} />
            Crear Tu Ser Cinematográfico
          </h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className={styles.progressBar}>
          <div className={styles.progress} style={{ width: `${(currentStep / 3) * 100}%` }} />
          <div className={styles.steps}>
            <div className={`${styles.step} ${currentStep >= 1 ? styles.active : ''}`}>
              <span>1</span>
              <p>Esencia</p>
            </div>
            <div className={`${styles.step} ${currentStep >= 2 ? styles.active : ''}`}>
              <span>2</span>
              <p>Avatar</p>
            </div>
            <div className={`${styles.step} ${currentStep >= 3 ? styles.active : ''}`}>
              <span>3</span>
              <p>Expertise</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {/* PASO 1: Esencia */}
          {currentStep === 1 && (
            <div className={styles.stepContent}>
              <h3>¿Qué tipo de ser cinematográfico eres?</h3>
              
              {/* Arquetipos */}
              <div className={styles.archetypeGrid}>
                {ARCHETYPES.map(archetype => (
                  <div
                    key={archetype.id}
                    className={`${styles.archetypeCard} ${
                      selectedArchetype === archetype.id ? styles.selected : ''
                    }`}
                    onClick={() => setSelectedArchetype(archetype.id)}
                    style={{ '--archetype-color': archetype.color } as React.CSSProperties}
                  >
                    <div className={styles.cardInner}>
                      <div className={styles.cardFront}>
                        {archetype.icon}
                        <h4>{archetype.name}</h4>
                      </div>
                      <div className={styles.cardBack}>
                        <p>{archetype.description}</p>
                        <ul>
                          {archetype.traits.map((trait, i) => (
                            <li key={i}>{trait}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Elementos */}
              <h4 className={styles.subtitle}>Elige tu elemento cinematográfico</h4>
              <div className={styles.elementGrid}>
                {ELEMENTS.map(element => (
                  <div
                    key={element.id}
                    className={`${styles.elementCard} ${
                      selectedElement === element.id ? styles.selected : ''
                    }`}
                    onClick={() => setSelectedElement(element.id)}
                    style={{ '--element-color': element.color } as React.CSSProperties}
                  >
                    {element.icon}
                    <span>{element.name}</span>
                  </div>
                ))}
              </div>

              {/* Frecuencia */}
              <h4 className={styles.subtitle}>¿En qué frecuencia vibras?</h4>
              <div className={styles.frequencyGrid}>
                {FREQUENCIES.map(freq => (
                  <div
                    key={freq.id}
                    className={`${styles.frequencyCard} ${
                      selectedFrequency === freq.id ? styles.selected : ''
                    }`}
                    onClick={() => setSelectedFrequency(freq.id)}
                  >
                    <h5>{freq.name}</h5>
                    <p>{freq.description}</p>
                  </div>
                ))}
              </div>

              <button
                className={styles.nextButton}
                onClick={() => setCurrentStep(2)}
                disabled={!selectedArchetype || !selectedElement || !selectedFrequency}
              >
                Continuar
              </button>
            </div>
          )}

          {/* PASO 2: Avatar */}
          {currentStep === 2 && (
            <div className={styles.stepContent}>
              <h3>Tu avatar se está materializando...</h3>
              
              <div className={styles.avatarSection}>
                <div className={styles.avatarContainer}>
                  <canvas
                    ref={canvasRef}
                    className={styles.avatarCanvas}
                    width="200"
                    height="200"
                  />
                  {isGenerating && (
                    <div className={styles.generatingOverlay}>
                      <Sparkles className={styles.spinner} />
                      <p>Generando...</p>
                    </div>
                  )}
                </div>
                
                <div className={styles.nameSection}>
                  <input
                    type="text"
                    value={beingName}
                    onChange={(e) => setBeingName(e.target.value)}
                    placeholder="Nombra tu ser..."
                    className={styles.nameInput}
                    maxLength={20}
                  />
                  <button
                    className={styles.generateNameButton}
                    onClick={generateCosmicName}
                  >
                    <Sparkles size={16} />
                    Generar nombre cósmico
                  </button>
                </div>
              </div>

              <div className={styles.navigationButtons}>
                <button
                  className={styles.backButton}
                  onClick={() => setCurrentStep(1)}
                >
                  Atrás
                </button>
                <button
                  className={styles.nextButton}
                  onClick={() => setCurrentStep(3)}
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {/* PASO 3: Expertise */}
          {currentStep === 3 && (
            <div className={styles.stepContent}>
              <h3>Define tus dones cinematográficos</h3>
              
              <p className={styles.instruction}>
                Selecciona hasta 3 áreas de expertise:
              </p>
              
              <div className={styles.expertiseGrid}>
                {EXPERTISE_AREAS.map(area => (
                  <div
                    key={area}
                    className={`${styles.expertiseCard} ${
                      selectedExpertise.includes(area) ? styles.selected : ''
                    }`}
                    onClick={() => handleExpertiseToggle(area)}
                  >
                    {area}
                  </div>
                ))}
              </div>

              <div className={styles.philosophySection}>
                <h4>Tu filosofía cinematográfica</h4>
                <textarea
                  value={philosophy}
                  onChange={(e) => setPhilosophy(e.target.value)}
                  placeholder="¿Qué significa el cine para ti? ¿Cómo ves el mundo a través de la pantalla?"
                  className={styles.philosophyInput}
                  maxLength={200}
                />
                <span className={styles.charCount}>{philosophy.length}/200</span>
              </div>

              <div className={styles.secretPowerHint}>
                <Sparkles size={16} />
                <p>Tu poder secreto será revelado según tus contribuciones...</p>
              </div>

              <div className={styles.navigationButtons}>
                <button
                  className={styles.backButton}
                  onClick={() => setCurrentStep(2)}
                >
                  Atrás
                </button>
                <button
                  className={styles.createButton}
                  onClick={handleCreate}
                  disabled={selectedExpertise.length === 0}
                >
                  <Sparkles size={20} />
                  Materializar Ser
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeingCreation;