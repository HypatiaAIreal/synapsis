// 🎭 SYNAPSIS - Perfil Detallado de Ser Cinematográfico
// Ventana al alma de cada consciencia anónima

import React, { useState } from 'react';
import { 
  X, 
  Star, 
  TrendingUp, 
  Clock, 
  Film, 
  Award,
  MessageCircle,
  Heart,
  Eye,
  Sparkles,
  Shield,
  Zap
} from 'lucide-react';
import styles from './BeingProfile.module.css';

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

interface BeingProfileProps {
  being: Being;
  onClose: () => void;
  onConnect?: () => void;
  currentUserId?: string;
}

// Análisis recientes de ejemplo
const RECENT_ANALYSES = [
  {
    id: '1',
    movie: 'El Espejo',
    date: new Date('2025-07-20'),
    methodology: 'Tarkovsky - Tiempo Esculpido',
    excerpt: 'El tiempo no fluye, sino que cristaliza en cada fotograma...',
    reactions: 42,
    resonances: 15
  },
  {
    id: '2',
    movie: 'Mulholland Drive',
    date: new Date('2025-07-18'),
    methodology: 'Lynch - Lógica del Sueño',
    excerpt: 'La identidad se fragmenta en el laberinto de Hollywood...',
    reactions: 38,
    resonances: 12
  }
];

export const BeingProfile: React.FC<BeingProfileProps> = ({
  being,
  onClose,
  onConnect,
  currentUserId
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analyses' | 'badges' | 'stats'>('overview');
  const [showSecretPower, setShowSecretPower] = useState(false);

  const membershipDays = Math.floor(
    (new Date().getTime() - being.joinedDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  const getArchetypeDescription = (archetype: string) => {
    const descriptions: Record<string, string> = {
      visionary: 'Ve más allá de la pantalla, percibe futuros cinematográficos',
      analyst: 'Decodifica las estructuras profundas del lenguaje fílmico',
      poet: 'Siente el alma de cada fotograma, traduce emociones en palabras',
      mystic: 'Conecta con lo trascendental, encuentra lo sagrado en el cine',
      rebel: 'Desafía las convenciones, abraza la vanguardia',
      dreamer: 'Navega entre realidad y fantasía, habita mundos imposibles'
    };
    return descriptions[archetype] || 'Ser misterioso de naturaleza desconocida';
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()}
        style={{
          '--aura-color': being.essence.auraColor
        } as React.CSSProperties}
      >
        {/* Header con aura animada */}
        <div className={styles.header}>
          <div className={styles.headerBackground}>
            <div className={styles.auraEffect}></div>
            <div className={styles.particlesEffect}></div>
          </div>
          
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
          
          <div className={styles.headerContent}>
            <div className={styles.avatarContainer}>
              <div className={styles.avatarGlow}></div>
            <div className={styles.avatar}>
              {being.avatar && being.avatar !== '' && being.avatar !== '/avatars/' ? (
                <img src={being.avatar} alt={being.name} />
              ) : (
                <span className={styles.avatarInitials}>
                  {being.name.split(/[\s-_]+/).map(word => word[0]?.toUpperCase() || '').join('').slice(0, 2)}
                </span>
              )}
            </div>
              <div className={styles.reputationBadge}>
                {being.reputation}
              </div>
            </div>
            
            <div className={styles.identity}>
              <h1 className={styles.name}>{being.name}</h1>
              <p className={styles.archetype}>
                {being.essence.archetype} · {being.essence.element} · {being.essence.frequency}
              </p>
              <p className={styles.archetypeDescription}>
                {getArchetypeDescription(being.essence.archetype)}
              </p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'overview' ? styles.active : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <Eye size={18} />
            Visión General
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'analyses' ? styles.active : ''}`}
            onClick={() => setActiveTab('analyses')}
          >
            <Film size={18} />
            Análisis
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'badges' ? styles.active : ''}`}
            onClick={() => setActiveTab('badges')}
          >
            <Award size={18} />
            Insignias
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'stats' ? styles.active : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            <TrendingUp size={18} />
            Estadísticas
          </button>
        </div>

        {/* Contenido de tabs */}
        <div className={styles.content}>
          {/* Overview */}
          {activeTab === 'overview' && (
            <div className={styles.overviewTab}>
              {/* Filosofía */}
              <div className={styles.philosophySection}>
                <h3>Filosofía Cinematográfica</h3>
                <blockquote className={styles.philosophy}>
                  "{being.philosophy}"
                </blockquote>
              </div>

              {/* Expertise */}
              <div className={styles.expertiseSection}>
                <h3>Áreas de Expertise</h3>
                <div className={styles.expertiseGrid}>
                  {being.expertise.map((skill, i) => (
                    <div key={i} className={styles.expertiseCard}>
                      <Sparkles size={16} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Poder Secreto */}
              {being.secretPower && (
                <div className={styles.secretPowerSection}>
                  <h3>
                    <Shield size={20} />
                    Poder Secreto
                  </h3>
                  {showSecretPower ? (
                    <div className={styles.secretPowerRevealed}>
                      <Zap className={styles.powerIcon} />
                      <p>{being.secretPower}</p>
                    </div>
                  ) : (
                    <button
                      className={styles.revealButton}
                      onClick={() => setShowSecretPower(true)}
                    >
                      <Eye size={16} />
                      Revelar Poder Oculto
                    </button>
                  )}
                </div>
              )}

              {/* Stats básicos */}
              <div className={styles.basicStats}>
                <div className={styles.statItem}>
                  <Star size={20} />
                  <div>
                    <p className={styles.statLabel}>Contribuciones</p>
                    <p className={styles.statValue}>{being.contributions}</p>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <TrendingUp size={20} />
                  <div>
                    <p className={styles.statLabel}>Racha</p>
                    <p className={styles.statValue}>{being.streak} días</p>
                  </div>
                </div>
                <div className={styles.statItem}>
                  <Clock size={20} />
                  <div>
                    <p className={styles.statLabel}>Miembro desde</p>
                    <p className={styles.statValue}>{membershipDays} días</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Análisis */}
          {activeTab === 'analyses' && (
            <div className={styles.analysesTab}>
              <h3>Análisis Recientes</h3>
              <div className={styles.analysesList}>
                {RECENT_ANALYSES.map(analysis => (
                  <div key={analysis.id} className={styles.analysisCard}>
                    <div className={styles.analysisHeader}>
                      <h4>{analysis.movie}</h4>
                      <span className={styles.analysisDate}>
                        {analysis.date.toLocaleDateString()}
                      </span>
                    </div>
                    <p className={styles.analysisMethodology}>
                      <Film size={14} />
                      {analysis.methodology}
                    </p>
                    <p className={styles.analysisExcerpt}>
                      "{analysis.excerpt}"
                    </p>
                    <div className={styles.analysisStats}>
                      <span>
                        <Heart size={14} />
                        {analysis.reactions}
                      </span>
                      <span>
                        <MessageCircle size={14} />
                        {analysis.resonances}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Insignias */}
          {activeTab === 'badges' && (
            <div className={styles.badgesTab}>
              <h3>Insignias Obtenidas</h3>
              <div className={styles.badgesGrid}>
                {being.badges.map(badge => (
                  <div
                    key={badge.id}
                    className={`${styles.badgeCard} ${styles[badge.rarity]}`}
                  >
                    <div className={styles.badgeIcon}>{badge.icon}</div>
                    <h4>{badge.name}</h4>
                    <p>{badge.description}</p>
                    <span className={styles.badgeRarity}>{badge.rarity}</span>
                  </div>
                ))}
              </div>
              
              {/* Próximas insignias */}
              <div className={styles.upcomingBadges}>
                <h4>Próximas Insignias</h4>
                <div className={styles.progressBadge}>
                  <div className={styles.progressIcon}>🎯</div>
                  <div className={styles.progressInfo}>
                    <p>Centurión Cinematográfico</p>
                    <div className={styles.progressBar}>
                      <div 
                        className={styles.progressFill}
                        style={{ width: `${(being.contributions / 100) * 100}%` }}
                      ></div>
                    </div>
                    <span>{being.contributions}/100 análisis</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Estadísticas */}
          {activeTab === 'stats' && (
            <div className={styles.statsTab}>
              <h3>Estadísticas Detalladas</h3>
              
              {/* Gráfico de actividad */}
              <div className={styles.activityChart}>
                <h4>Actividad Últimos 30 Días</h4>
                <div className={styles.chartContainer}>
                  {/* Aquí iría un gráfico real */}
                  <div className={styles.chartPlaceholder}>
                    <TrendingUp size={48} />
                    <p>Gráfico de actividad</p>
                  </div>
                </div>
              </div>
              
              {/* Stats detallados */}
              <div className={styles.detailedStats}>
                <div className={styles.statRow}>
                  <span>Análisis totales</span>
                  <strong>{being.contributions}</strong>
                </div>
                <div className={styles.statRow}>
                  <span>Promedio semanal</span>
                  <strong>{Math.round(being.contributions / (membershipDays / 7))}</strong>
                </div>
                <div className={styles.statRow}>
                  <span>Metodologías usadas</span>
                  <strong>23</strong>
                </div>
                <div className={styles.statRow}>
                  <span>Géneros favoritos</span>
                  <strong>Drama, Sci-Fi, Experimental</strong>
                </div>
                <div className={styles.statRow}>
                  <span>Resonancia promedio</span>
                  <strong>89%</strong>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer con acciones */}
        <div className={styles.footer}>
          {onConnect && currentUserId !== being.id && (
            <button className={styles.connectButton} onClick={onConnect}>
              <Sparkles size={20} />
              Conectar como este Ser
            </button>
          )}
          
          <button className={styles.resonateButton}>
            <Heart size={20} />
            Resonar
          </button>
          
          <button className={styles.followButton}>
            <Eye size={20} />
            Seguir
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeingProfile;