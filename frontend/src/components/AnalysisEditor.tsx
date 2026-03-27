import React, { useState, useEffect, useRef } from 'react';
import { 
  Bold, Italic, List, ListOrdered, Quote, Code, Link, Image, 
  Eye, EyeOff, Save, Send, ChevronDown, ChevronUp, Type,
  Hash, Minus, MoreHorizontal, CheckSquare, Table, Sparkles,
  Palette, AlignLeft, AlignCenter, AlignRight, Undo, Redo,
  Heart, Star, MessageCircle, Bookmark, Coffee, Moon, Sun, Globe,
  Brain, Camera, Layers, Zap, BookOpen
} from 'lucide-react';
import styles from './AnalysisEditor.module.css';
import { ReflectionTemplatesModal } from './ReflectionTemplates';
import { TechnicalAnalysisPanel } from './TechnicalAnalysis';

interface AnalysisEditorProps {
  blockType: string;
  movieId: string;
  movieTitle: string;
  movieData?: any;
  onSave: (analysis: any) => void;
  onCancel: () => void;
  existingAnalysis?: any;
}

const AnalysisEditor: React.FC<AnalysisEditorProps> = ({
  blockType,
  movieId,
  movieTitle,
  movieData,
  onSave,
  onCancel,
  existingAnalysis
}) => {
  // Estados principales
  const [title, setTitle] = useState(existingAnalysis?.title || '');
  const [content, setContent] = useState(existingAnalysis?.content || '');
  const [isPublic, setIsPublic] = useState(existingAnalysis?.isPublic || false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [history, setHistory] = useState<string[]>([content]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [mood, setMood] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  
  // NUEVOS ESTADOS PARA INTEGRACIÓN
  const [activeView, setActiveView] = useState<'editor' | 'technical' | 'templates'>('editor');
  const [showTemplatesModal, setShowTemplatesModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [technicalAnalysis, setTechnicalAnalysis] = useState<any>(existingAnalysis?.technicalAnalysis || null);
  
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Plantilla mejorada para análisis personal de películas
  const personalTemplate = `# Mi Experiencia con ${movieTitle}

## 🌟 Primera Impresión
*¿Qué sentiste al ver la película por primera vez? ¿Qué expectativas tenías?*

[Escribe aquí tu primera impresión...]

## 💫 Momentos Memorables

### Escena que más me impactó
*Describe la escena y por qué te marcó tanto*

[Describe la escena...]

### Diálogo favorito
*¿Qué frase o conversación te quedó grabada?*

> "[Escribe el diálogo aquí]"

*¿Por qué este diálogo resonó contigo?*

## 🎭 Personajes

### Personaje con el que más me identifiqué
[Nombre del personaje y por qué te identificaste]

### Personaje que más me sorprendió
[Nombre y qué te sorprendió de él/ella]

## 💭 Reflexión Personal

### ¿Cómo me conecté emocionalmente con la historia?
[Tu conexión emocional...]

### ¿Qué aprendí o qué me hizo reflexionar?
[Tus reflexiones...]

### ¿Cambió mi perspectiva sobre algo?
[Si cambió algo en ti...]

## 🎨 Aspectos Técnicos que Destacaría

- **Cinematografía**: [Lo que más te gustó visualmente]
- **Música**: [Cómo la banda sonora afectó tu experiencia]
- **Actuaciones**: [Qué interpretaciones te impresionaron]

## 🌈 Mi Estado de Ánimo
*¿Cómo te sentiste durante y después de ver la película?*

Estado: [feliz/melancólico/inspirado/reflexivo/emocionado]

## ⭐ Mi Calificación Personal

**[X] / 5 estrellas**

### ¿Por qué esta calificación?
[Justifica tu puntuación personal]

## 📝 Notas Adicionales

### ¿La volverías a ver? ¿Por qué?
[Tu respuesta...]

### ¿A quién se la recomendarías?
[Tipo de persona o situación...]

## 💬 Conclusión Personal

[Tu reflexión final sobre la experiencia completa de ver esta película...]

---
*Análisis escrito el ${new Date().toLocaleDateString('es-ES', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}*`;

  // PLANTILLAS EXPANDIDAS - Ahora incluye las nuevas dimensiones
  const templates = {
    // DIMENSIÓN PERSONAL/CLÁSICA
    personal: personalTemplate,
    standard: `## Análisis de ${movieTitle}

### Contexto
[Describe el contexto relevante]

### Observaciones Principales
- Punto 1
- Punto 2
- Punto 3

### Interpretación
[Tu interpretación detallada]

### Conclusión
[Síntesis y reflexión final]`,
    
    // DIMENSIÓN EMOCIONAL
    'emotional-resonance': `# 💜 Resonancia Personal con ${movieTitle}

## ¿Qué momento tocó una fibra personal que no esperabas?
[Tu respuesta profunda...]

## ¿Qué personaje refleja una parte de ti que raramente muestras?
[Explora esa conexión...]

## Si esta película fuera un espejo, ¿qué reflejo no esperabas ver?
[Tu reflexión más íntima...]

## ¿Cómo ha cambiado tu percepción de ti mismo/a después de verla?
[El impacto transformador...]`,
    
    'emotional-waves': `# 🌊 Oleajes Emocionales en ${movieTitle}

## Describe el viaje emocional como si fuera una travesía marítima
[Tu metáfora náutica...]

## ¿En qué momento sentiste la marea más alta? ¿Y la más baja?
**Marea alta**: [Momento y emoción...]
**Marea baja**: [Momento y emoción...]

## ¿Qué emociones navegaron bajo la superficie sin emerger completamente?
[Las corrientes ocultas...]`,
    
    // DIMENSIÓN TÉCNICA
    'visual-anatomy': `# 👁️ Anatomía Visual de ${movieTitle}

## ¿Qué decisión fotográfica define la identidad visual de la película?
[Tu análisis técnico...]

## Tres momentos donde la cámara se vuelve personaje:
1. [Momento 1 - descripción...]
2. [Momento 2 - descripción...]
3. [Momento 3 - descripción...]

## ¿Cómo dialogan la luz y la sombra en las escenas clave?
[Tu interpretación de la iluminación...]`,
    
    'sonic-architecture': `# 🎵 Arquitectura Sonora de ${movieTitle}

## ¿Qué sonido invisible sostiene el mundo de la película?
[El sonido fantasma...]

## Describe el "color" del silencio en tres escenas diferentes:
1. **Escena**: [Color del silencio...]
2. **Escena**: [Color del silencio...]
3. **Escena**: [Color del silencio...]

## ¿Cómo construye el sonido espacios que la imagen no muestra?
[Los espacios sonoros...]`,
    
    // DIMENSIÓN FILOSÓFICA
    'filmic-ontology': `# 🔮 Ontología Fílmica de ${movieTitle}

## Si tuvieras que definir el SER de esta película, ¿qué dirías?
[La esencia fundamental...]

## ¿La película existe más en lo que muestra o en lo que oculta?
[Tu reflexión ontológica...]

## ¿Qué modo de existencia propone este filme?
[El ser cinematográfico...]`,
    
    // DIMENSIÓN EXPERIMENTAL
    'quantum-viewing': `# ⚛️ Visionado Cuántico de ${movieTitle}

## ¿Qué otras películas coexisten en esta?
[Las películas superpuestas...]

## ¿Cómo colapsa la observación las posibilidades narrativas?
[Tu teoría cuántica...]

## Si cada espectador ve una película diferente, ¿cuál viste tú?
[Tu película única...]`,
    
    'possession-mode': `# 👻 Modo Posesión: ${movieTitle}

## Como la CÁMARA: ¿Qué sientes al capturar cada escena?
[Tu experiencia como dispositivo...]

## Como la LUZ: ¿Cómo decides iluminar u ocultar?
[Tus decisiones lumínicas...]

## Como el MONTAJE: ¿Por qué cortas donde cortas?
[Tu lógica de edición...]

## Como el SONIDO: ¿Qué susurras que nadie más escucha?
[Tus secretos sonoros...]`
  };

  // Moods para seleccionar
  const moods = [
    { icon: '😊', label: 'Feliz', value: 'happy' },
    { icon: '😢', label: 'Melancólico', value: 'melancholic' },
    { icon: '🤔', label: 'Reflexivo', value: 'thoughtful' },
    { icon: '😮', label: 'Sorprendido', value: 'surprised' },
    { icon: '😍', label: 'Enamorado', value: 'in-love' },
    { icon: '😰', label: 'Ansioso', value: 'anxious' },
    { icon: '🤗', label: 'Inspirado', value: 'inspired' },
    { icon: '😔', label: 'Nostálgico', value: 'nostalgic' },
    { icon: '✨', label: 'Trascendente', value: 'transcendent' },
    { icon: '🌀', label: 'Vertiginoso', value: 'vertiginous' },
    { icon: '🔥', label: 'Apasionado', value: 'passionate' },
    { icon: '🌊', label: 'Fluido', value: 'fluid' }
  ];

  // Guardar en historial
  const saveToHistory = (newContent: string) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newContent);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  // Aplicar formato
  const applyFormat = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    const newContent = 
      content.substring(0, start) + 
      before + selectedText + after + 
      content.substring(end);
    
    setContent(newContent);
    saveToHistory(newContent);
    
    // Restaurar foco y selección
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + before.length,
        end + before.length
      );
    }, 0);
  };

  // Insertar elemento
  const insertElement = (element: string) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const position = textarea.selectionStart;
    const newContent = 
      content.substring(0, position) + 
      element + 
      content.substring(position);
    
    setContent(newContent);
    saveToHistory(newContent);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        position + element.length,
        position + element.length
      );
    }, 0);
  };

  // Aplicar plantilla de reflexión seleccionada
  const applyReflectionTemplate = (template: any) => {
    let templateContent = `# ${template.icon} ${template.name}\n\n`;
    
    // Añadir descripción
    templateContent += `*${template.description}*\n\n`;
    
    // Añadir prompts como secciones
    template.prompts.forEach((prompt: any) => {
      const typeLabel = {
        'opening': '🌅 Apertura',
        'exploration': '🔍 Exploración',
        'deepening': '🌊 Profundización',
        'synthesis': '💎 Síntesis',
        'transcendent': '✨ Trascendente'
      }[prompt.type] || prompt.type;
      
      templateContent += `## ${typeLabel}\n\n`;
      templateContent += `**${prompt.text}**\n\n`;
      templateContent += `[Tu reflexión aquí...]\n\n`;
    });
    
    // Añadir sección de mood si la plantilla lo sugiere
    if (template.mood) {
      templateContent += `## 🌈 Tono Emocional\n\n`;
      templateContent += `- **Intensidad**: ${template.mood.intensity}\n`;
      templateContent += `- **Espectro**: ${template.mood.spectrum.join(', ')}\n\n`;
    }
    
    // Añadir perspectivas si las tiene
    if (template.perspectives && template.perspectives.length > 0) {
      templateContent += `## 🎭 Perspectivas Disponibles\n\n`;
      template.perspectives.forEach((perspective: any) => {
        templateContent += `### ${perspective.name}\n`;
        templateContent += `*${perspective.description}*\n\n`;
        templateContent += `[Explora desde esta perspectiva...]\n\n`;
      });
    }
    
    setContent(templateContent);
    saveToHistory(templateContent);
    setSelectedTemplate(template);
  };

  // Toolbar de formato
  const FormatButton = ({ icon: Icon, onClick, title, active = false }: any) => (
    <button
      onClick={onClick}
      title={title}
      className={`${styles.formatButton} ${active ? styles.formatButtonActive : ''}`}
    >
      <Icon className="w-4 h-4" />
    </button>
  );

  // Convertir Markdown a HTML para preview
  const renderMarkdownPreview = (text: string) => {
    // Conversión mejorada de Markdown
    let html = text
      // Headers
      .replace(/^#### (.*$)/gim, '<h4 class="' + styles.previewH4 + '">$1</h4>')
      .replace(/^### (.*$)/gim, '<h3 class="' + styles.previewH3 + '">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="' + styles.previewH2 + '">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="' + styles.previewH1 + '">$1</h1>')
      // Bold y Italic
      .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      // Code
      .replace(/`(.+?)`/g, '<code class="' + styles.inlineCode + '">$1</code>')
      // Blockquote
      .replace(/^> (.+)$/gim, '<blockquote class="' + styles.blockquote + '">$1</blockquote>')
      // Lists
      .replace(/^\* (.+)$/gim, '<li>$1</li>')
      .replace(/^\- (.+)$/gim, '<li>$1</li>')
      .replace(/^\d+\. (.+)$/gim, '<li>$1</li>')
      // Horizontal rule
      .replace(/^---$/gim, '<hr class="' + styles.horizontalRule + '">')
      // Line breaks
      .replace(/\n/g, '<br/>');
    
    // Wrap lists
    html = html.replace(/(<li>.*<\/li>)/s, '<ul class="' + styles.list + '">$1</ul>');
    
    return <div className={styles.markdownPreview} dangerouslySetInnerHTML={{ __html: html }} />;
  };

  // Atajos de teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.metaKey) {
        switch (e.key) {
          case 'b':
            e.preventDefault();
            applyFormat('**', '**');
            break;
          case 'i':
            e.preventDefault();
            applyFormat('*', '*');
            break;
          case 's':
            e.preventDefault();
            handleSave();
            break;
          case 'p':
            e.preventDefault();
            setShowPreview(!showPreview);
            break;
          case 'z':
            e.preventDefault();
            if (historyIndex > 0) {
              setHistoryIndex(historyIndex - 1);
              setContent(history[historyIndex - 1]);
            }
            break;
          case 'y':
            e.preventDefault();
            if (historyIndex < history.length - 1) {
              setHistoryIndex(historyIndex + 1);
              setContent(history[historyIndex + 1]);
            }
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [content, history, historyIndex, showPreview]);

  const handleSave = () => {
    if (!title.trim() || !content.trim()) {
      alert('Por favor completa el título y contenido');
      return;
    }

    const analysis = {
      id: existingAnalysis?.id || Date.now().toString(),
      title: title.trim(),
      content: content.trim(),
      blockType,
      movieId,
      movieTitle,
      isPublic,
      mood,
      rating,
      authorId: 'demo_user',
      createdAt: existingAnalysis?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      wordCount: content.trim().split(/\s+/).length,
      readingTime: Math.ceil(content.trim().split(/\s+/).length / 200),
      // Nuevo: guardar análisis técnico si existe
      technicalAnalysis: technicalAnalysis,
      // Nuevo: guardar plantilla utilizada
      templateUsed: selectedTemplate?.id || null
    };

    onSave(analysis);
  };

  return (
    <div className={styles.editorContainer}>
      {/* Header con navegación mejorada */}
      <div className={styles.editorHeader}>
        <div className={styles.headerLeft}>
          <Sparkles className={styles.headerIcon} />
          <h3 className={styles.editorTitle}>
            {existingAnalysis ? 'Editar' : 'Nuevo'} Análisis - {movieTitle}
          </h3>
        </div>
        <div className={styles.headerRight}>
          {/* Navegación entre vistas */}
          <div className={styles.viewSelector}>
            <button
              onClick={() => setActiveView('editor')}
              className={`${styles.viewButton} ${activeView === 'editor' ? styles.viewButtonActive : ''}`}
              title="Editor de texto"
            >
              <BookOpen size={18} />
              Editor
            </button>
            <button
              onClick={() => setActiveView('technical')}
              className={`${styles.viewButton} ${activeView === 'technical' ? styles.viewButtonActive : ''}`}
              title="Análisis técnico"
            >
              <Camera size={18} />
              Técnico
            </button>
            <button
              onClick={() => setShowTemplatesModal(true)}
              className={styles.viewButton}
              title="Explorar plantillas"
            >
              <Layers size={18} />
              50+ Plantillas
            </button>
          </div>
          
          {activeView === 'editor' && (
            <button
              onClick={() => setShowPreview(!showPreview)}
              className={styles.previewToggle}
            >
              {showPreview ? <EyeOff size={18} /> : <Eye size={18} />}
              {showPreview ? 'Editor' : 'Vista Previa'}
            </button>
          )}
        </div>
      </div>

      {/* Vista del Editor */}
      {activeView === 'editor' && (
        <>
          {/* Título y metadata */}
          <div className={styles.metadataSection}>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Dale un título a tu análisis..."
              className={styles.titleInput}
            />
            
            {/* Mood selector expandido */}
            <div className={styles.moodSection}>
              <span className={styles.moodLabel}>Estado de ánimo:</span>
              <div className={styles.moodGrid}>
                {moods.map((m) => (
                  <button
                    key={m.value}
                    onClick={() => setMood(m.value)}
                    className={`${styles.moodButton} ${mood === m.value ? styles.moodButtonActive : ''}`}
                    title={m.label}
                  >
                    {m.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Rating */}
            <div className={styles.ratingSection}>
              <span className={styles.ratingLabel}>Mi calificación:</span>
              <div className={styles.starRating}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={styles.starButton}
                  >
                    <Star 
                      size={24} 
                      className={star <= rating ? styles.starFilled : styles.starEmpty}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Toolbar */}
          {!showPreview && (
            <div className={styles.toolbar}>
              <div className={styles.toolbarGroup}>
                <FormatButton 
                  icon={Bold} 
                  onClick={() => applyFormat('**', '**')} 
                  title="Negrita (Ctrl+B)"
                />
                <FormatButton 
                  icon={Italic} 
                  onClick={() => applyFormat('*', '*')} 
                  title="Cursiva (Ctrl+I)"
                />
                <FormatButton 
                  icon={Code} 
                  onClick={() => applyFormat('`', '`')} 
                  title="Código"
                />
              </div>

              <div className={styles.toolbarDivider} />

              <div className={styles.toolbarGroup}>
                <FormatButton 
                  icon={Type} 
                  onClick={() => insertElement('# ')} 
                  title="Título principal"
                />
                <FormatButton 
                  icon={Hash} 
                  onClick={() => insertElement('## ')} 
                  title="Subtítulo"
                />
                <FormatButton 
                  icon={Quote} 
                  onClick={() => insertElement('> ')} 
                  title="Cita"
                />
              </div>

              <div className={styles.toolbarDivider} />

              <div className={styles.toolbarGroup}>
                <FormatButton 
                  icon={List} 
                  onClick={() => insertElement('- ')} 
                  title="Lista"
                />
                <FormatButton 
                  icon={ListOrdered} 
                  onClick={() => insertElement('1. ')} 
                  title="Lista numerada"
                />
                <FormatButton 
                  icon={CheckSquare} 
                  onClick={() => insertElement('- [ ] ')} 
                  title="Checklist"
                />
              </div>

              <div className={styles.toolbarDivider} />

              <div className={styles.toolbarGroup}>
                <FormatButton 
                  icon={Link} 
                  onClick={() => applyFormat('[', '](url)')} 
                  title="Enlace"
                />
                <FormatButton 
                  icon={Image} 
                  onClick={() => insertElement('![descripción](url)')} 
                  title="Imagen"
                />
                <FormatButton 
                  icon={Minus} 
                  onClick={() => insertElement('---\n')} 
                  title="Línea divisoria"
                />
              </div>

              <div className={styles.toolbarDivider} />

              <div className={styles.toolbarGroup}>
                <FormatButton 
                  icon={Undo} 
                  onClick={() => {
                    if (historyIndex > 0) {
                      setHistoryIndex(historyIndex - 1);
                      setContent(history[historyIndex - 1]);
                    }
                  }} 
                  title="Deshacer (Ctrl+Z)"
                  active={historyIndex > 0}
                />
                <FormatButton 
                  icon={Redo} 
                  onClick={() => {
                    if (historyIndex < history.length - 1) {
                      setHistoryIndex(historyIndex + 1);
                      setContent(history[historyIndex + 1]);
                    }
                  }} 
                  title="Rehacer (Ctrl+Y)"
                  active={historyIndex < history.length - 1}
                />
              </div>

              <div className={styles.toolbarSpacer} />

              {/* Insertar emojis comunes */}
              <div className={styles.toolbarGroup}>
                <button 
                  className={styles.emojiButton}
                  onClick={() => insertElement('❤️')}
                  title="Corazón"
                >
                  ❤️
                </button>
                <button 
                  className={styles.emojiButton}
                  onClick={() => insertElement('⭐')}
                  title="Estrella"
                >
                  ⭐
                </button>
                <button 
                  className={styles.emojiButton}
                  onClick={() => insertElement('🎬')}
                  title="Cine"
                >
                  🎬
                </button>
                <button 
                  className={styles.emojiButton}
                  onClick={() => insertElement('💭')}
                  title="Pensamiento"
                >
                  💭
                </button>
                <button 
                  className={styles.emojiButton}
                  onClick={() => insertElement('🔮')}
                  title="Místico"
                >
                  🔮
                </button>
                <button 
                  className={styles.emojiButton}
                  onClick={() => insertElement('🌊')}
                  title="Fluido"
                >
                  🌊
                </button>
              </div>
            </div>
          )}

          {/* Plantillas expandidas con las nuevas */}
          <div className={styles.templatesBar}>
            <span className={styles.templatesLabel}>Plantillas rápidas:</span>
            <div className={styles.templateButtons}>
              {/* Plantillas clásicas */}
              <button
                onClick={() => {
                  setContent(templates.personal);
                  saveToHistory(templates.personal);
                }}
                className={styles.templateButton}
              >
                💜 Personal
              </button>
              <button
                onClick={() => {
                  setContent(templates.standard);
                  saveToHistory(templates.standard);
                }}
                className={styles.templateButton}
              >
                📝 Standard
              </button>
              
              {/* Nuevas plantillas de dimensiones */}
              <button
                onClick={() => {
                  setContent(templates['emotional-resonance']);
                  saveToHistory(templates['emotional-resonance']);
                }}
                className={styles.templateButton}
              >
                💜 Resonancia
              </button>
              <button
                onClick={() => {
                  setContent(templates['emotional-waves']);
                  saveToHistory(templates['emotional-waves']);
                }}
                className={styles.templateButton}
              >
                🌊 Oleajes
              </button>
              <button
                onClick={() => {
                  setContent(templates['visual-anatomy']);
                  saveToHistory(templates['visual-anatomy']);
                }}
                className={styles.templateButton}
              >
                👁️ Visual
              </button>
              <button
                onClick={() => {
                  setContent(templates['sonic-architecture']);
                  saveToHistory(templates['sonic-architecture']);
                }}
                className={styles.templateButton}
              >
                🎵 Sonoro
              </button>
              <button
                onClick={() => {
                  setContent(templates['filmic-ontology']);
                  saveToHistory(templates['filmic-ontology']);
                }}
                className={styles.templateButton}
              >
                🔮 Ontología
              </button>
              <button
                onClick={() => {
                  setContent(templates['quantum-viewing']);
                  saveToHistory(templates['quantum-viewing']);
                }}
                className={styles.templateButton}
              >
                ⚛️ Cuántico
              </button>
              <button
                onClick={() => {
                  setContent(templates['possession-mode']);
                  saveToHistory(templates['possession-mode']);
                }}
                className={styles.templateButton}
              >
                👻 Posesión
              </button>
              
              {/* Botón para ver todas las plantillas */}
              <button
                onClick={() => setShowTemplatesModal(true)}
                className={`${styles.templateButton} ${styles.templateButtonSpecial}`}
              >
                ✨ Ver 50+ plantillas...
              </button>
            </div>
          </div>

          {/* Editor/Preview */}
          <div className={styles.editorContent}>
            {showPreview ? (
              <div className={styles.previewContainer}>
                <div className={styles.previewMetadata}>
                  {mood && (
                    <span className={styles.previewMood}>
                      Estado: {moods.find(m => m.value === mood)?.icon} {moods.find(m => m.value === mood)?.label}
                    </span>
                  )}
                  {rating > 0 && (
                    <span className={styles.previewRating}>
                      Calificación: {'⭐'.repeat(rating)}
                    </span>
                  )}
                  {selectedTemplate && (
                    <span className={styles.previewTemplate}>
                      Plantilla: {selectedTemplate.name}
                    </span>
                  )}
                </div>
                {renderMarkdownPreview(content)}
              </div>
            ) : (
              <textarea
                ref={textareaRef}
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                  saveToHistory(e.target.value);
                }}
                placeholder="Empieza a escribir tu análisis aquí... 

Puedes usar Markdown para dar formato:
- **texto en negrita**
- *texto en cursiva*
- # Títulos
- > Citas
- - Listas

O selecciona una plantilla arriba para empezar más rápido 💜

NUEVO: Explora las 50+ plantillas de reflexión con el botón '✨ Ver 50+ plantillas...'
NUEVO: Usa el análisis técnico con el botón '🎬 Técnico' arriba"
                className={styles.editorTextarea}
              />
            )}
          </div>
        </>
      )}

      {/* Vista de Análisis Técnico */}
      {activeView === 'technical' && (
        <div className={styles.technicalView}>
          <TechnicalAnalysisPanel
            movieId={movieId}
            movieTitle={movieTitle}
            onSave={(analysis) => {
              setTechnicalAnalysis(analysis);
              setActiveView('editor');
              // Añadir referencia al análisis técnico en el contenido
              const technicalReference = `\n\n## 🎬 Análisis Técnico Completado\n\n*Se ha completado un análisis técnico detallado de esta película.*\n\n`;
              setContent(content + technicalReference);
              saveToHistory(content + technicalReference);
            }}
            initialAnalysis={technicalAnalysis}
          />
        </div>
      )}

      {/* Footer */}
      <div className={styles.editorFooter}>
        <div className={styles.footerLeft}>
          <label className={styles.publicToggle}>
            <input
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
              className={styles.publicCheckbox}
            />
            <Globe size={16} />
            <span>Compartir con la comunidad</span>
          </label>
          
          <div className={styles.wordCount}>
            <Coffee size={14} />
            {content.trim().split(/\s+/).filter(word => word.length > 0).length} palabras • 
            ~{Math.ceil(content.trim().split(/\s+/).filter(word => word.length > 0).length / 200)} min lectura
          </div>
          
          {/* Indicador de análisis técnico */}
          {technicalAnalysis && (
            <div className={styles.technicalIndicator}>
              <Camera size={14} />
              <span>Análisis técnico incluido</span>
            </div>
          )}
        </div>

        <div className={styles.footerRight}>
          <button
            onClick={onCancel}
            className={styles.cancelButton}
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            disabled={!title.trim() || !content.trim()}
            className={styles.saveButton}
          >
            <Save size={18} />
            {existingAnalysis ? 'Actualizar' : 'Guardar'} Análisis
          </button>
        </div>
      </div>

      {/* Modal de Plantillas de Reflexión */}
      {showTemplatesModal && (
        <ReflectionTemplatesModal
          movieTitle={movieTitle}
          onSelectTemplate={(template) => {
            applyReflectionTemplate(template);
            setShowTemplatesModal(false);
            // Enfocar el editor
            setTimeout(() => {
              textareaRef.current?.focus();
            }, 100);
          }}
          userMood={mood || 'contemplative'}
          timeOfDay={new Date().getHours() > 18 ? 'night' : 'day'}
          previousAnalyses={3} // Podrías obtener esto de los datos reales
        />
      )}
    </div>
  );
};

export default AnalysisEditor;