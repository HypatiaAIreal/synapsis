// 🧠 INTEGRACIÓN DE ANÁLISIS NARRATIVOS EN "MIS ANÁLISIS"
// Actualizar MovieBlocks.tsx en el case 'personal':

case 'personal':
  return (
    <>
      {showEditor ? (
        <div className={styles.editorContainer}>
          <AnalysisEditor
            blockType={activeBlock}
            movieId={movieId}
            movieTitle={movieData?.title || ''}
            onSave={handleSaveAnalysis}
            onCancel={() => setShowEditor(false)}
          />
        </div>
      ) : (
        <div className={styles.personalAnalysisSection}>
          <div className={styles.privateNotice}>
            <Lock size={20} />
            <span>Este espacio es privado. Solo tú puedes ver estos análisis.</span>
          </div>
          
          {/* Pestañas para tipos de análisis */}
          <div className={styles.analysisTabs}>
            <button 
              className={`${styles.analysisTab} ${activeAnalysisTab === 'personal' ? styles.active : ''}`}
              onClick={() => setActiveAnalysisTab('personal')}
            >
              ✍️ Mis Reflexiones
            </button>
            <button 
              className={`${styles.analysisTab} ${activeAnalysisTab === 'narrative' ? styles.active : ''}`}
              onClick={() => setActiveAnalysisTab('narrative')}
            >
              🤖 Análisis con IA
            </button>
          </div>

          {activeAnalysisTab === 'personal' ? (
            <>
              {/* Botón para crear análisis personal */}
              <button
                onClick={() => setShowEditor(true)}
                className={styles.createAnalysisButtonLarge}
              >
                <Edit3 size={20} />
                <span>Escribir mi análisis personal</span>
                <Sparkles size={20} className={styles.sparkleIcon} />
              </button>

              {/* Lista de análisis personales */}
              <div className={styles.savedAnalysesList}>
                {savedAnalyses.filter(a => a.type !== 'narrative').map((analysis, idx) => (
                  <div key={idx} className={styles.analysisCard}>
                    <h4>{analysis.title}</h4>
                    <div className={styles.analysisMetadata}>
                      <span>{new Date(analysis.createdAt).toLocaleDateString('es-ES')}</span>
                      <span>{analysis.wordCount} palabras</span>
                    </div>
                    <p className={styles.analysisPreview}>
                      {analysis.content.substring(0, 200)}...
                    </p>
                    <button className={styles.readMoreButton}>
                      Leer más →
                    </button>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              {/* Análisis narrativos con IA */}
              <div className={styles.narrativeAnalysesList}>
                <h3 className={styles.narrativeTitle}>
                  <Brain size={24} />
                  Análisis Narrativos con IA
                </h3>
                
                {savedAnalyses.filter(a => a.type === 'narrative').length > 0 ? (
                  <div className={styles.narrativeGrid}>
                    {savedAnalyses.filter(a => a.type === 'narrative').map((analysis, idx) => (
                      <div key={idx} className={styles.narrativeAnalysisCard}>
                        <div className={styles.narrativeHeader}>
                          <span className={styles.theoryBadge}>
                            {analysis.theoryName}
                          </span>
                          <span className={styles.modelBadge}>
                            {analysis.modelUsed}
                          </span>
                        </div>
                        
                        <div className={styles.narrativeContent}>
                          <h4>{analysis.theoryName}</h4>
                          <time>{new Date(analysis.createdAt).toLocaleDateString('es-ES')}</time>
                          <p className={styles.narrativePreview}>
                            {analysis.content.substring(0, 150)}...
                          </p>
                        </div>
                        
                        <div className={styles.narrativeActions}>
                          <button className={styles.viewButton}>
                            <Eye size={16} /> Ver completo
                          </button>
                          <button className={styles.shareButton}>
                            <Globe size={16} /> Compartir
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.emptyNarrative}>
                    <Zap size={48} />
                    <p>Aún no has generado análisis narrativos con IA</p>
                    <button 
                      onClick={() => setActiveBlock('narrative')}
                      className={styles.goToNarrativeButton}
                    >
                      Ir a Análisis Narrativo →
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );

// AGREGAR ESTOS ESTILOS A MovieBlocks.module.css:

/* Pestañas de análisis */
.analysisTabs {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid rgba(147, 51, 234, 0.2);
}

.analysisTab {
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  color: #9ca3af;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
}

.analysisTab:hover {
  color: #e9d5ff;
}

.analysisTab.active {
  color: #9333ea;
}

.analysisTab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background: #9333ea;
}

/* Grid de análisis narrativos */
.narrativeGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.narrativeAnalysisCard {
  background: linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(147, 51, 234, 0.05));
  border: 1px solid rgba(236, 72, 153, 0.2);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.narrativeAnalysisCard:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(236, 72, 153, 0.2);
}

.narrativeHeader {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.theoryBadge, .modelBadge {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.theoryBadge {
  background: rgba(236, 72, 153, 0.2);
  color: #f9a8d4;
}

.modelBadge {
  background: rgba(147, 51, 234, 0.2);
  color: #e9d5ff;
}

.narrativeContent h4 {
  color: #ec4899;
  margin: 0 0 0.5rem 0;
}

.narrativeContent time {
  font-size: 0.875rem;
  color: #9ca3af;
}

.narrativePreview {
  margin-top: 1rem;
  color: #e5e7eb;
  line-height: 1.6;
}

.narrativeActions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.viewButton, .shareButton {
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid rgba(236, 72, 153, 0.3);
  background: transparent;
  color: #f9a8d4;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.viewButton:hover {
  background: rgba(236, 72, 153, 0.1);
}

.shareButton:hover {
  background: rgba(147, 51, 234, 0.1);
}

.emptyNarrative {
  text-align: center;
  padding: 3rem;
  color: #9ca3af;
}

.emptyNarrative svg {
  color: #ec4899;
  margin-bottom: 1rem;
}

.goToNarrativeButton {
  margin-top: 1rem;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #ec4899, #9333ea);
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.goToNarrativeButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(236, 72, 153, 0.3);
}