// 🧠 SYNAPSIS - Panel de Análisis Narrativo con IA
import React, { useState } from 'react';
import { NARRATIVE_THEORIES } from '../../data/narrativeTheories';
import styles from './NarrativeAnalysis.module.css';

interface NarrativeAnalysisPanelProps {
  movieId: string;
  movieTitle: string;
  movieData: any;
  onSaveAnalysis?: (analysis: any) => void;
}

export const NarrativeAnalysisPanel: React.FC<NarrativeAnalysisPanelProps> = ({
  movieId,
  movieTitle,
  movieData,
  onSaveAnalysis
}) => {
  const [selectedTheory, setSelectedTheory] = useState<string>('');
  const [analysisResult, setAnalysisResult] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleGenerateAnalysis = async () => {
    if (!selectedTheory) {
      setError('Por favor selecciona una teoría');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const theory = NARRATIVE_THEORIES[selectedTheory];
      
      // Por ahora simulamos la respuesta para probar
      // Cuando tengas la API key, descomenta el código real
      setTimeout(() => {
        setAnalysisResult(`# Análisis de ${movieTitle} con ${theory.name}\n\n*Este es un análisis de demostración. Configura tu API key de Claude para obtener análisis reales.*\n\n## Ejemplo de contenido\n\nAquí aparecerá el análisis completo generado por Claude AI usando la metodología seleccionada.`);
        setLoading(false);
      }, 2000);

      /* CÓDIGO REAL (descomentar cuando tengas API key):
      const claudeService = new ClaudeService();
      const result = await claudeService.generateAnalysis(
        movieTitle,
        movieData,
        theory.prompt
      );
      
      setAnalysisResult(result);
      
      if (onSaveAnalysis) {
        onSaveAnalysis({
          movieId,
          movieTitle,
          theoryId: selectedTheory,
          theoryName: theory.name,
          content: result,
          createdAt: new Date().toISOString()
        });
      }
      */
    } catch (error) {
      setError('Error al generar análisis. Verifica tu API key.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.narrativeAnalysisPanel}>
      {!analysisResult ? (
        // Pantalla de selección
        <div className={styles.theorySelection}>
          <h2 className={styles.title}>
            🧠 Análisis Narrativo con IA
          </h2>
          <p className={styles.subtitle}>
            Analiza "{movieTitle}" usando metodologías cinematográficas clásicas
          </p>

          <div className={styles.theoryGrid}>
            {Object.entries(NARRATIVE_THEORIES).map(([key, theory]) => (
              <div
                key={key}
                className={`${styles.theoryCard} ${
                  selectedTheory === key ? styles.selected : ''
                }`}
                onClick={() => setSelectedTheory(key)}
              >
                <span className={styles.theoryIcon}>{theory.icon}</span>
                <h3>{theory.name}</h3>
                <p>{theory.description}</p>
              </div>
            ))}
          </div>

          {error && (
            <div className={styles.error}>{error}</div>
          )}

          <button
            className={styles.generateButton}
            onClick={handleGenerateAnalysis}
            disabled={!selectedTheory || loading}
          >
            {loading ? (
              <>
                <span className={styles.spinner}></span>
                Analizando con Claude...
              </>
            ) : (
              <>
                ✨ Generar Análisis
              </>
            )}
          </button>
        </div>
      ) : (
        // Pantalla de resultados
        <div className={styles.analysisResult}>
          <div className={styles.resultHeader}>
            <button
              className={styles.backButton}
              onClick={() => {
                setAnalysisResult('');
                setSelectedTheory('');
              }}
            >
              ← Volver
            </button>
            <h2>
              {NARRATIVE_THEORIES[selectedTheory].icon}{' '}
              {NARRATIVE_THEORIES[selectedTheory].name}
            </h2>
          </div>

          <div className={styles.analysisContent}>
            <div className={styles.markdownContent}>
              {analysisResult.split('\n').map((line, index) => {
                if (line.startsWith('# ')) {
                  return <h1 key={index}>{line.substring(2)}</h1>;
                } else if (line.startsWith('## ')) {
                  return <h2 key={index}>{line.substring(3)}</h2>;
                } else if (line.startsWith('### ')) {
                  return <h3 key={index}>{line.substring(4)}</h3>;
                } else if (line.startsWith('*') && line.endsWith('*')) {
                  return <p key={index} className={styles.italic}>{line.slice(1, -1)}</p>;
                } else if (line) {
                  return <p key={index}>{line}</p>;
                } else {
                  return <br key={index} />;
                }
              })}
            </div>
          </div>

          <div className={styles.resultActions}>
            <button
              className={styles.editButton}
              onClick={() => {
                console.log('Editar análisis');
              }}
            >
              ✏️ Editar y Personalizar
            </button>
            <button
              className={styles.saveButton}
              onClick={() => {
                console.log('Análisis guardado');
              }}
            >
              💾 Guardar en Mi Cinemateca
            </button>
          </div>
        </div>
      )}
    </div>
  );
};