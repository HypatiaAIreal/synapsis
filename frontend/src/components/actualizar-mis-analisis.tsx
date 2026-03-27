// 🧠 ACTUALIZAR MovieBlocks.tsx - SECCIÓN "MIS ANÁLISIS"
// Reemplazar TODO el case 'personal': con este código mejorado

case 'personal':
  // Estado para las pestañas (agregar al inicio del componente)
  // const [activeAnalysisTab, setActiveAnalysisTab] = useState<'personal' | 'narrative'>('personal');
  
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
                {savedAnalyses.filter(a => a.type !== 'narrative').length > 0 ? (
                  savedAnalyses.filter(a => a.type !== 'narrative').map((analysis, idx) => (
                    <div key={idx} className={styles.analysisCard}>
                      <h4>{analysis.title || 'Mi Análisis Personal'}</h4>
                      <div className={styles.analysisMetadata}>
                        <span>{new Date(analysis.createdAt).toLocaleDateString('es-ES')}</span>
                        <span>{analysis.mood || '😊'}</span>
                        <span>⭐ {analysis.rating || 5}/5</span>
                      </div>
                      <p className={styles.analysisPreview}>
                        {analysis.content.substring(0, 200)}...
                      </p>
                      <button className={styles.readMoreButton}>
                        Leer más →
                      </button>
                    </div>
                  ))
                ) : (
                  <div className={styles.emptyState}>
                    <Brain size={48} className={styles.emptyIcon} />
                    <p>Aún no has escrito análisis personales</p>
                    <p className={styles.emptySubtext}>
                      Comparte tus reflexiones y emociones sobre esta película
                    </p>
                  </div>
                )}
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
                          <time>{new Date(analysis.createdAt).toLocaleDateString('es-ES', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</time>
                          
                          {/* Vista previa del análisis con formato */}
                          <div className={styles.narrativePreview}>
                            {analysis.content.split('\n').slice(0, 5).map((line, i) => {
                              if (line.startsWith('# ')) {
                                return <h5 key={i}>{line.substring(2)}</h5>;
                              } else if (line.startsWith('## ')) {
                                return <h6 key={i}>{line.substring(3)}</h6>;
                              } else if (line) {
                                return <p key={i}>{line}</p>;
                              }
                              return null;
                            })}
                          </div>
                        </div>
                        
                        <div className={styles.narrativeActions}>
                          <button 
                            className={styles.viewButton}
                            onClick={() => {
                              // Aquí abrir modal con análisis completo
                              alert('Ver análisis completo - Por implementar');
                            }}
                          >
                            <Eye size={16} /> Ver completo
                          </button>
                          <button 
                            className={styles.shareButton}
                            onClick={() => {
                              // Compartir con la comunidad
                              alert('Compartir análisis - Por implementar');
                            }}
                          >
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
                
                {/* Botón para generar más análisis */}
                {savedAnalyses.filter(a => a.type === 'narrative').length > 0 && (
                  <button 
                    onClick={() => setActiveBlock('narrative')}
                    className={styles.generateMoreButton}
                  >
                    <Sparkles size={20} />
                    Generar más análisis con IA
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );

// AGREGAR AL INICIO DEL COMPONENTE MovieBlocks:
const [activeAnalysisTab, setActiveAnalysisTab] = useState<'personal' | 'narrative'>('personal');