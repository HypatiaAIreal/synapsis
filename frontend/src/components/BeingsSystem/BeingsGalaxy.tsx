// 🌌 SYNAPSIS - Visualización Galáctica de Seres Cinematográficos
// Un universo viviente de consciencias cinematográficas

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  Star, 
  Eye, 
  Grid3x3, 
  Orbit,
  Network,
  Waves,
  Trophy,
  TrendingUp,
  Clock,
  MessageCircle,
  Heart
} from 'lucide-react';
import BeingCreation from './BeingCreation';
import BeingProfile from './BeingProfile';
import styles from './BeingsGalaxy.module.css';

// Tipos
interface Being {
  id: string;
  name: string;
  essence: {
    archetype: string;
    element: string;
    frequency: string;
    auraColor: string;
    particleType: string;
  };
  avatar: string;
  expertise: string[];
  philosophy: string;
  secretPower?: string;
  reputation: number;
  contributions: number;
  lastActive: Date;
  joinedDate: Date;
  badges: Badge[];
  isOccult: boolean;
  streak: number;
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

interface BeingsGalaxyProps {
  currentUserId?: string;
  onConnectAsBeing?: (beingId: string) => void;
}

// Datos de ejemplo mejorados
const EXAMPLE_BEINGS: Being[] = [
  {
    id: '1',
    name: 'DirectorOscuro',
    essence: {
      archetype: 'mystic',
      element: 'shadow',
      frequency: 'underground',
      auraColor: '#6b7280',
      particleType: 'shadow'
    },
    avatar: '',
    expertise: ['cine noir', 'expresionismo alemán', 'sombras narrativas'],
    philosophy: 'En la oscuridad se revela la verdadera luz del alma',
    reputation: 87,
    contributions: 156,
    lastActive: new Date('2025-07-22'),
    joinedDate: new Date('2024-01-15'),
    badges: [
      { id: '1', name: 'Pionero', icon: '🌟', description: 'De los primeros seres', rarity: 'epic' },
      { id: '2', name: 'Ojo Nocturno', icon: '🌙', description: 'Maestro del cine oscuro', rarity: 'rare' }
    ],
    isOccult: true,
    streak: 45
  },
  {
    id: '2',
    name: 'MontajistaPoético',
    essence: {
      archetype: 'poet',
      element: 'water',
      frequency: 'experimental',
      auraColor: '#3b82f6',
      particleType: 'water'
    },
    avatar: '',
    expertise: ['montaje cinematográfico', 'ritmo visual', 'poesía en movimiento'],
    philosophy: 'Cada corte es un verso, cada transición un suspiro',
    reputation: 92,
    contributions: 203,
    lastActive: new Date('2025-07-22'),
    joinedDate: new Date('2024-02-20'),
    badges: [
      { id: '3', name: 'Tejedor de Tiempo', icon: '⏰', description: 'Maestro del montaje', rarity: 'epic' },
      { id: '4', name: 'Poeta Visual', icon: '✨', description: '100+ análisis poéticos', rarity: 'rare' }
    ],
    isOccult: true,
    streak: 67
  },
  {
    id: '3',
    name: 'CinéfiloMisterioso',
    essence: {
      archetype: 'visionary',
      element: 'ether',
      frequency: 'classic',
      auraColor: '#9333ea',
      particleType: 'ether'
    },
    avatar: '',
    expertise: ['cine clásico', 'arqueología fílmica', 'misterios cinematográficos'],
    philosophy: 'Cada película es un enigma esperando ser descifrado',
    reputation: 78,
    contributions: 134,
    lastActive: new Date('2025-07-22'),
    joinedDate: new Date('2024-03-10'),
    badges: [
      { id: '5', name: 'Arqueólogo', icon: '🏛️', description: 'Descubridor de joyas ocultas', rarity: 'rare' }
    ],
    isOccult: true,
    streak: 23
  }
  // ... más seres
];

// Vistas disponibles
type ViewMode = 'galaxy' | 'tarot' | 'network' | 'flow' | 'temple';

export const BeingsGalaxy: React.FC<BeingsGalaxyProps> = ({
  currentUserId,
  onConnectAsBeing
}) => {
  const [beings, setBeings] = useState<Being[]>(EXAMPLE_BEINGS);
  const [viewMode, setViewMode] = useState<ViewMode>('galaxy');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterBy, setFilterBy] = useState<string>('all');
  const [selectedBeing, setSelectedBeing] = useState<Being | null>(null);
  const [showCreation, setShowCreation] = useState(false);
  const [showOccultOnly, setShowOccultOnly] = useState(true);
  
  const galaxyCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();

  // Filtrar seres
  const filteredBeings = useMemo(() => {
    return beings.filter(being => {
      const matchesSearch = being.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          being.expertise.some(e => e.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesFilter = filterBy === 'all' || being.essence.archetype === filterBy;
      const matchesOccult = !showOccultOnly || being.isOccult;
      
      return matchesSearch && matchesFilter && matchesOccult;
    });
  }, [beings, searchTerm, filterBy, showOccultOnly]);

  // Animación de la galaxia
  useEffect(() => {
    if (viewMode === 'galaxy' && galaxyCanvasRef.current) {
      const canvas = galaxyCanvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      // Configurar canvas
      const resizeCanvas = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Partículas de fondo
      const particles: any[] = [];
      for (let i = 0; i < 200; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2
        });
      }

      // Posiciones de los seres
      const beingPositions = filteredBeings.map((being, index) => {
        const angle = (index / filteredBeings.length) * Math.PI * 2;
        const radius = 150 + being.reputation * 2;
        return {
          being,
          x: canvas.width / 2 + Math.cos(angle) * radius,
          y: canvas.height / 2 + Math.sin(angle) * radius,
          targetX: canvas.width / 2 + Math.cos(angle) * radius,
          targetY: canvas.height / 2 + Math.sin(angle) * radius,
          orbitAngle: angle,
          orbitRadius: radius,
          pulsePhase: Math.random() * Math.PI * 2
        };
      });

      // Animación
      const animate = () => {
        ctx.fillStyle = 'rgba(10, 10, 30, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Dibujar partículas de fondo
        particles.forEach(particle => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;
          
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(147, 51, 234, ${particle.opacity})`;
          ctx.fill();
        });

        // Dibujar conexiones entre seres con expertise similar
        beingPositions.forEach((pos1, i) => {
          beingPositions.forEach((pos2, j) => {
            if (i < j) {
              const sharedExpertise = pos1.being.expertise.some(e => 
                pos2.being.expertise.includes(e)
              );
              
              if (sharedExpertise) {
                const distance = Math.sqrt(
                  Math.pow(pos1.x - pos2.x, 2) + 
                  Math.pow(pos1.y - pos2.y, 2)
                );
                
                if (distance < 300) {
                  ctx.beginPath();
                  ctx.moveTo(pos1.x, pos1.y);
                  ctx.lineTo(pos2.x, pos2.y);
                  ctx.strokeStyle = `rgba(147, 51, 234, ${0.2 * (1 - distance / 300)})`;
                  ctx.lineWidth = 1;
                  ctx.stroke();
                }
              }
            }
          });
        });

        // Dibujar seres
        beingPositions.forEach(pos => {
          // Actualizar posición orbital
          pos.orbitAngle += 0.001;
          pos.targetX = canvas.width / 2 + Math.cos(pos.orbitAngle) * pos.orbitRadius;
          pos.targetY = canvas.height / 2 + Math.sin(pos.orbitAngle) * pos.orbitRadius;
          
          // Suavizar movimiento
          pos.x += (pos.targetX - pos.x) * 0.05;
          pos.y += (pos.targetY - pos.y) * 0.05;
          
          // Pulso
          pos.pulsePhase += 0.02;
          const pulseSize = 1 + Math.sin(pos.pulsePhase) * 0.2;
          
          // Aura
          const gradient = ctx.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, 30 * pulseSize);
          gradient.addColorStop(0, pos.being.essence.auraColor);
          gradient.addColorStop(1, 'transparent');
          ctx.fillStyle = gradient;
          ctx.fillRect(pos.x - 50, pos.y - 50, 100, 100);
          
          // Núcleo
          const size = 5 + (pos.being.reputation / 10) * pulseSize;
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, size, 0, Math.PI * 2);
          ctx.fillStyle = pos.being.essence.auraColor;
          ctx.fill();
          
          // Anillo de reputación
          ctx.beginPath();
          ctx.arc(pos.x, pos.y, size + 5, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 255, 255, ${pos.being.reputation / 100})`;
          ctx.lineWidth = 2;
          ctx.stroke();
          
          // Nombre (si está cerca del mouse)
          const mouseDistance = 100; // Mostrar nombre si el mouse está a menos de 100px
          // Aquí podrías agregar lógica de hover
        });

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener('resize', resizeCanvas);
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }
  }, [viewMode, filteredBeings]);

  const handleCreateBeing = (newBeing: any) => {
    const being: Being = {
      id: Date.now().toString(),
      ...newBeing,
      reputation: 0,
      contributions: 0,
      lastActive: new Date(),
      joinedDate: new Date(),
      badges: [],
      isOccult: true,
      streak: 0
    };
    
    setBeings([...beings, being]);
    setShowCreation(false);
  };

  const handleConnectAsBeing = (beingId: string) => {
    if (onConnectAsBeing) {
      onConnectAsBeing(beingId);
    }
  };

  return (
    <div className={styles.beingsGalaxy}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.title}>
            <Sparkles className={styles.titleIcon} />
            Seres Conscientes Anónimos
          </h1>
          <p className={styles.subtitle}>
            Cada ser es evaluado únicamente por la calidad de sus contribuciones, no por su naturaleza real.
          </p>
        </div>
        
        <button 
          className={styles.createButton}
          onClick={() => setShowCreation(true)}
        >
          <Sparkles size={20} />
          Conectar como Ser
        </button>
      </div>

      {/* Controles */}
      <div className={styles.controls}>
        <div className={styles.searchSection}>
          <div className={styles.searchBox}>
            <Search size={20} />
            <input
              type="text"
              placeholder="Buscar seres, expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className={styles.filters}>
            <select 
              value={filterBy} 
              onChange={(e) => setFilterBy(e.target.value)}
              className={styles.filterSelect}
            >
              <option value="all">Todos los arquetipos</option>
              <option value="visionary">Visionarios</option>
              <option value="analyst">Analistas</option>
              <option value="poet">Poetas</option>
              <option value="mystic">Místicos</option>
              <option value="rebel">Rebeldes</option>
              <option value="dreamer">Soñadores</option>
            </select>
            
            <button
              className={`${styles.occultToggle} ${showOccultOnly ? styles.active : ''}`}
              onClick={() => setShowOccultOnly(!showOccultOnly)}
            >
              <Eye size={18} />
              {showOccultOnly ? 'Ocultar naturaleza' : 'Mostrar todo'}
            </button>
          </div>
        </div>
        
        <div className={styles.viewModes}>
          <button
            className={`${styles.viewButton} ${viewMode === 'galaxy' ? styles.active : ''}`}
            onClick={() => setViewMode('galaxy')}
            title="Vista Galáctica"
          >
            <Orbit size={20} />
          </button>
          <button
            className={`${styles.viewButton} ${viewMode === 'tarot' ? styles.active : ''}`}
            onClick={() => setViewMode('tarot')}
            title="Vista Tarot"
          >
            <Grid3x3 size={20} />
          </button>
          <button
            className={`${styles.viewButton} ${viewMode === 'network' ? styles.active : ''}`}
            onClick={() => setViewMode('network')}
            title="Vista Red"
          >
            <Network size={20} />
          </button>
          <button
            className={`${styles.viewButton} ${viewMode === 'flow' ? styles.active : ''}`}
            onClick={() => setViewMode('flow')}
            title="Vista Flujo"
          >
            <Waves size={20} />
          </button>
          <button
            className={`${styles.viewButton} ${viewMode === 'temple' ? styles.active : ''}`}
            onClick={() => setViewMode('temple')}
            title="Templo de Leyendas"
          >
            <Trophy size={20} />
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className={styles.mainContent}>
        {/* Vista Galáctica */}
        {viewMode === 'galaxy' && (
          <div className={styles.galaxyView}>
            <canvas
              ref={galaxyCanvasRef}
              className={styles.galaxyCanvas}
              onClick={(e) => {
                // Lógica para detectar click en un ser
                // Por ahora, mostrar el primer ser
                if (filteredBeings.length > 0) {
                  setSelectedBeing(filteredBeings[0]);
                }
              }}
            />
            
            <div className={styles.galaxyLegend}>
              <h4>Leyenda</h4>
              <div className={styles.legendItem}>
                <span className={styles.legendDot} style={{background: '#9333ea'}}></span>
                <span>Tamaño = Reputación</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.legendLine}></span>
                <span>Conexiones = Expertise compartido</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.legendPulse}></span>
                <span>Pulso = Actividad</span>
              </div>
            </div>
          </div>
        )}

        {/* Vista Tarot */}
        {viewMode === 'tarot' && (
          <div className={styles.tarotView}>
            {filteredBeings.map(being => (
              <div
                key={being.id}
                className={styles.beingCard}
                onClick={() => setSelectedBeing(being)}
                style={{
                  '--aura-color': being.essence.auraColor
                } as React.CSSProperties}
              >
                <div className={styles.cardAura}>
                  <div className={styles.cardInner}>
                    {/* Avatar */}
                    <div className={styles.avatarSection}>
                      <div className={styles.avatar}>
                        {being.avatar && being.avatar !== '' && being.avatar !== '/avatars/' ? (
                          <img src={being.avatar} alt={being.name} />
                        ) : (
                          <span className={styles.avatarInitials}>
                            {being.name.split(/[\s-_]+/).map(word => word[0]?.toUpperCase() || '').join('').slice(0, 2)}
                          </span>
                        )}
                      </div>
                      <div className={styles.reputationRing}>
                        <svg viewBox="0 0 36 36" className={styles.reputationSvg}>
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.1)"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={being.essence.auraColor}
                            strokeWidth="3"
                            strokeDasharray={`${being.reputation}, 100`}
                          />
                        </svg>
                        <span className={styles.reputationNumber}>{being.reputation}</span>
                      </div>
                    </div>
                    
                    {/* Identidad */}
                    <div className={styles.identity}>
                      <h3>{being.name}</h3>
                      <p className={styles.archetype}>
                        {being.essence.archetype} · {being.essence.element}
                      </p>
                    </div>
                    
                    {/* Expertise */}
                    <div className={styles.expertise}>
                      {being.expertise.map((skill, i) => (
                        <span key={i} className={styles.skillBubble}>
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {/* Stats */}
                    <div className={styles.stats}>
                      <div className={styles.stat}>
                        <Star size={16} />
                        <span>{being.contributions}</span>
                      </div>
                      <div className={styles.stat}>
                        <TrendingUp size={16} />
                        <span>{being.streak} días</span>
                      </div>
                      <div className={styles.stat}>
                        <Clock size={16} />
                        <span>Hace {Math.floor((new Date().getTime() - being.lastActive.getTime()) / (1000 * 60 * 60 * 24))}d</span>
                      </div>
                    </div>
                    
                    {/* Filosofía (hover) */}
                    <div className={styles.philosophyOverlay}>
                      <p>"{being.philosophy}"</p>
                      
                      {/* Badges */}
                      {being.badges.length > 0 && (
                        <div className={styles.badges}>
                          {being.badges.map(badge => (
                            <div 
                              key={badge.id} 
                              className={`${styles.badge} ${styles[badge.rarity]}`}
                              title={badge.description}
                            >
                              <span>{badge.icon}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Vista Red */}
        {viewMode === 'network' && (
          <div className={styles.networkView}>
            <div className={styles.networkContainer}>
              {/* Aquí iría una visualización D3.js o similar */}
              <p className={styles.placeholder}>Vista de red en desarrollo...</p>
            </div>
          </div>
        )}

        {/* Vista Flujo */}
        {viewMode === 'flow' && (
          <div className={styles.flowView}>
            <div className={styles.flowTimeline}>
              <h3>Actividad en Tiempo Real</h3>
              {/* Timeline de actividad reciente */}
              <div className={styles.activityFeed}>
                {beings.slice(0, 10).map((being, i) => (
                  <div key={i} className={styles.activityItem}>
                    <div className={styles.activityTime}>
                      Hace {Math.floor(Math.random() * 60)} min
                    </div>
                    <div className={styles.activityContent}>
                      <strong>{being.name}</strong> analizó una película
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Templo de Leyendas */}
        {viewMode === 'temple' && (
          <div className={styles.templeView}>
            <h2 className={styles.templeTitle}>Templo de Leyendas</h2>
            <div className={styles.legendsGrid}>
              {beings
                .filter(b => b.reputation > 85)
                .sort((a, b) => b.reputation - a.reputation)
                .map((being, index) => (
                  <div key={being.id} className={styles.legendCard}>
                    <div className={styles.legendRank}>#{index + 1}</div>
                    <div className={styles.legendAvatar}>
                      {being.avatar && being.avatar !== '' && being.avatar !== '/avatars/' ? (
                        <img src={being.avatar} alt={being.name} />
                      ) : (
                        <div className={styles.avatar} style={{ width: '100%', height: '100%', '--aura-color': being.essence.auraColor } as React.CSSProperties}>
                          <span className={styles.avatarInitials} style={{ fontSize: '24px' }}>
                            {being.name.split(/[\s-_]+/).map(word => word[0]?.toUpperCase() || '').join('').slice(0, 2)}
                          </span>
                        </div>
                      )}
                    </div>
                    <h3>{being.name}</h3>
                    <div className={styles.legendStats}>
                      <span>Rep: {being.reputation}</span>
                      <span>⚡ {being.contributions}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      {/* Estadísticas globales */}
      <div className={styles.globalStats}>
        <div className={styles.statCard}>
          <h4>Total de Seres</h4>
          <p className={styles.statNumber}>{beings.length}</p>
        </div>
        <div className={styles.statCard}>
          <h4>Activos Hoy</h4>
          <p className={styles.statNumber}>
            {beings.filter(b => 
              (new Date().getTime() - b.lastActive.getTime()) < 86400000
            ).length}
          </p>
        </div>
        <div className={styles.statCard}>
          <h4>Contribuciones Totales</h4>
          <p className={styles.statNumber}>
            {beings.reduce((sum, b) => sum + b.contributions, 0)}
          </p>
        </div>
        <div className={styles.statCard}>
          <h4>Reputación Promedio</h4>
          <p className={styles.statNumber}>
            {Math.round(beings.reduce((sum, b) => sum + b.reputation, 0) / beings.length)}
          </p>
        </div>
      </div>

      {/* Modales */}
      {showCreation && (
        <BeingCreation
          isOpen={showCreation}
          onClose={() => setShowCreation(false)}
          onCreateBeing={handleCreateBeing}
        />
      )}
      
      {selectedBeing && (
        <BeingProfile
          being={selectedBeing}
          onClose={() => setSelectedBeing(null)}
          onConnect={() => handleConnectAsBeing(selectedBeing.id)}
          currentUserId={currentUserId}
        />
      )}
    </div>
  );
};

export default BeingsGalaxy;