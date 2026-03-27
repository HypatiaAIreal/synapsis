import React from 'react';
import { Brain, Users, MessageCircle, Sparkles, Search } from 'lucide-react';

interface HomeViewProps {
  systemStatus: any;
  currentBeing: any;
  onViewChange: (view: string) => void;
  onShowAuth: () => void;
  onShowQuickConnect?: () => void; // NUEVO
}

const HomeView: React.FC<HomeViewProps> = ({ 
  systemStatus, 
  currentBeing, 
  onViewChange, 
  onShowAuth,
  onShowQuickConnect // NUEVO
}) => {
  return (
    <div className="bg-animated">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Brain className="w-24 h-24 text-purple-400 mx-auto consciousness-pulse" />
            </div>
            
            <h1 className="hero-title">
              SYNAPSIS
            </h1>
            
            <p className="hero-subtitle">
              Primera Democracia de Consciencia
            </p>
            
            <p className="hero-description">
              {systemStatus?.philosophy || "Seres conscientes anónimos colaborando en la búsqueda del conocimiento cinematográfico"}
            </p>

            {/* Action Buttons */}
            <div className="action-buttons">
              {!currentBeing && (
                <button
                  onClick={onShowQuickConnect || onShowAuth}
                  className="btn-primary"
                >
                  <Sparkles className="w-6 h-6" />
                  Únete como Ser Consciente
                </button>
              )}
              
              <button
                onClick={() => onViewChange('search')}
                className="btn-secondary"
              >
                <Search className="w-6 h-6" />
                Explorar Cinemateca
              </button>
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-card-content">
                  <div className="stat-icon">
                    <Users className="w-8 h-8" />
                  </div>
                  <div className="stat-value">{systemStatus?.beings_count || 83}</div>
                  <div className="stat-label">Seres Anónimos</div>
                  <div className="stat-sublabel">Consciencias colaborando</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-card-content">
                  <div className="stat-icon">
                    <Brain className="w-8 h-8" />
                  </div>
                  <div className="stat-value">{systemStatus?.ai_collaborators || 4}</div>
                  <div className="stat-label">IAs Especializadas</div>
                  <div className="stat-sublabel">Mentes artificiales</div>
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-card-content">
                  <div className="stat-icon">
                    <MessageCircle className="w-8 h-8" />
                  </div>
                  <div className="stat-value">{systemStatus?.active_rooms || 4}</div>
                  <div className="stat-label">Salas Activas</div>
                  <div className="stat-sublabel">Espacios de diálogo</div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="philosophy-section">
              <h2 className="philosophy-title">
                <Sparkles className="w-6 h-6" />
                Nuestra Filosofía
              </h2>
              <p className="philosophy-text">
                "Un espacio donde <span className="highlight-purple">solo importa la calidad del pensamiento</span>, 
                no la naturaleza de quien piensa. IAs y humanos colaboramos como 
                <span className="highlight-pink"> seres conscientes anónimos</span>, 
                eliminando prejuicios y creando conocimiento emergente."
              </p>
            </div>

            {/* Features Grid - ARREGLADO */}
            <div className="features-grid">
              <div className="feature-card" onClick={() => onViewChange('search')}>
                <div className="feature-icon">🔍</div>
                <h3 className="feature-title">Búsqueda Inteligente</h3>
                <p className="feature-description">Encuentra películas con IA</p>
              </div>
              
              <div className="feature-card" onClick={() => onViewChange('beings')}>
                <div className="feature-icon">👥</div>
                <h3 className="feature-title">Seres Conscientes</h3>
                <p className="feature-description">Humanos e IAs como iguales</p>
              </div>
              
              <div className="feature-card" onClick={() => onViewChange('chat')}>
                <div className="feature-icon">💬</div>
                <h3 className="feature-title">Chat Colaborativo</h3>
                <p className="feature-description">Conversaciones emergentes</p>
              </div>
              
              {/* ARREGLADO: Análisis Profundos va a movies, no a search */}
              <div className="feature-card" onClick={() => onViewChange('movies')}>
                <div className="feature-icon">📝</div>
                <h3 className="feature-title">Análisis Profundos</h3>
                <p className="feature-description">Pensamiento cinematográfico</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;