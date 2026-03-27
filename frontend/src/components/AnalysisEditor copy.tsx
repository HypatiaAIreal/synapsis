import React, { useState, useEffect, useRef } from 'react';
import { 
  Bold, Italic, List, ListOrdered, Quote, Code, Link, Image, 
  Eye, EyeOff, Save, Send, ChevronDown, ChevronUp, Type,
  Hash, Minus, MoreHorizontal, CheckSquare, Table, Sparkles,
  Palette, AlignLeft, AlignCenter, AlignRight, Undo, Redo
} from 'lucide-react';

interface AnalysisEditorProps {
  blockType: string;
  movieId: string;
  movieTitle: string;
  onSave: (analysis: any) => void;
  onCancel: () => void;
  existingAnalysis?: any;
}

const AnalysisEditor: React.FC<AnalysisEditorProps> = ({
  blockType,
  movieId,
  movieTitle,
  onSave,
  onCancel,
  existingAnalysis
}) => {
  const [title, setTitle] = useState(existingAnalysis?.title || '');
  const [content, setContent] = useState(existingAnalysis?.content || '');
  const [isPublic, setIsPublic] = useState(existingAnalysis?.isPublic || false);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedText, setSelectedText] = useState('');
  const [cursorPosition, setCursorPosition] = useState(0);
  const [history, setHistory] = useState<string[]>([content]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Análisis tipos sugeridos según el bloque
  const analysisTypes = {
    artistic: ['Estética Visual', 'Composición', 'Color', 'Simbolismo'],
    technical: ['Cinematografía', 'Montaje', 'Sonido', 'Efectos'],
    narrative: ['Estructura', 'Personajes', 'Diálogos', 'Ritmo'],
    contextual: ['Histórico', 'Social', 'Político', 'Cultural'],
    personal: ['Reflexión', 'Emocional', 'Experiencia', 'Memoria'],
    philosophical: ['Existencial', 'Ético', 'Metafísico', 'Epistemológico'],
    comparative: ['Intertextual', 'Género', 'Director', 'Época'],
    reception: ['Crítica', 'Audiencia', 'Impacto', 'Legado']
  };

  // Plantillas de análisis
  const templates = {
    standard: `## Análisis de [Aspecto]

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

    comparative: `## Análisis Comparativo

### Obra Principal: ${movieTitle}
[Descripción breve]

### Obra Comparada: [Título]
[Descripción breve]

### Puntos de Comparación
1. **[Aspecto 1]**
   - ${movieTitle}: [Descripción]
   - [Otra obra]: [Descripción]

2. **[Aspecto 2]**
   - ${movieTitle}: [Descripción]
   - [Otra obra]: [Descripción]

### Conclusiones
[Síntesis comparativa]`,

    technical: `## Análisis Técnico

### Cinematografía
- **Planos utilizados**: [Descripción]
- **Movimientos de cámara**: [Descripción]
- **Iluminación**: [Descripción]

### Montaje
- **Ritmo**: [Descripción]
- **Transiciones**: [Descripción]
- **Continuidad**: [Descripción]

### Diseño Sonoro
- **Música**: [Descripción]
- **Efectos**: [Descripción]
- **Diálogos**: [Descripción]

### Valoración Técnica
[Tu evaluación general]`
  };

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

  // Toolbar de formato
  const FormatButton = ({ icon: Icon, onClick, title }: any) => (
    <button
      onClick={onClick}
      title={title}
      className="p-2 rounded hover:bg-slate-700 transition-colors text-slate-300 hover:text-white"
    >
      <Icon className="w-4 h-4" />
    </button>
  );

  // Convertir Markdown a HTML para preview
  const renderMarkdownPreview = (text: string) => {
    // Conversión básica de Markdown
    let html = text
      // Headers
      .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mb-2 text-purple-300">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mb-3 text-purple-400">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mb-4 text-white">$1</h1>')
      // Bold
      .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
      // Italic
      .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
      // Lists
      .replace(/^\* (.+)$/gim, '<li class="ml-4 mb-1">• $1</li>')
      .replace(/^\d+\. (.+)$/gim, '<li class="ml-4 mb-1">$1</li>')
      // Line breaks
      .replace(/\n/g, '<br/>');
    
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
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
  }, [content, history, historyIndex]);

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
      authorId: 'demo_user', // En producción vendría del usuario autenticado
      createdAt: existingAnalysis?.createdAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      wordCount: content.trim().split(/\s+/).length,
      readingTime: Math.ceil(content.trim().split(/\s+/).length / 200)
    };

    onSave(analysis);
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 overflow-hidden">
      {/* Header */}
      <div className="bg-slate-900/50 p-4 border-b border-slate-700/50">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">
              {existingAnalysis ? 'Editar' : 'Nuevo'} Análisis - {movieTitle}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-3 py-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-sm"
            >
              {showPreview ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showPreview ? 'Editor' : 'Preview'}
            </button>
          </div>
        </div>

        {/* Título */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título del análisis..."
          className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors"
        />
      </div>

      {/* Toolbar */}
      {!showPreview && (
        <div className="bg-slate-800/50 p-2 border-b border-slate-700/50">
          <div className="flex items-center gap-1 flex-wrap">
            <div className="flex items-center gap-1 pr-2 border-r border-slate-700">
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

            <div className="flex items-center gap-1 pr-2 border-r border-slate-700">
              <FormatButton 
                icon={Type} 
                onClick={() => insertElement('# ')} 
                title="Título"
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

            <div className="flex items-center gap-1 pr-2 border-r border-slate-700">
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

            <div className="flex items-center gap-1 pr-2 border-r border-slate-700">
              <FormatButton 
                icon={Link} 
                onClick={() => applyFormat('[', '](url)')} 
                title="Enlace"
              />
              <FormatButton 
                icon={Image} 
                onClick={() => insertElement('![alt text](url)')} 
                title="Imagen"
              />
              <FormatButton 
                icon={Minus} 
                onClick={() => insertElement('---\n')} 
                title="Línea divisoria"
              />
            </div>

            <div className="flex items-center gap-1">
              <FormatButton 
                icon={Undo} 
                onClick={() => {
                  if (historyIndex > 0) {
                    setHistoryIndex(historyIndex - 1);
                    setContent(history[historyIndex - 1]);
                  }
                }} 
                title="Deshacer (Ctrl+Z)"
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
              />
            </div>
          </div>

          {/* Plantillas */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-slate-400">Plantillas:</span>
            {Object.entries(templates).map(([key, template]) => (
              <button
                key={key}
                onClick={() => {
                  setContent(template);
                  saveToHistory(template);
                }}
                className="text-xs px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded transition-colors capitalize"
              >
                {key}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Editor/Preview */}
      <div className="p-4">
        {showPreview ? (
          <div className="min-h-[400px] prose prose-invert max-w-none">
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
            placeholder="Escribe tu análisis aquí... (Soporta Markdown)"
            className="w-full min-h-[400px] px-4 py-3 bg-slate-700/30 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 transition-colors resize-y font-mono text-sm leading-relaxed"
          />
        )}
      </div>

      {/* Footer */}
      <div className="bg-slate-900/50 p-4 border-t border-slate-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isPublic}
                onChange={(e) => setIsPublic(e.target.checked)}
                className="rounded border-slate-500 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-slate-300">
                Compartir con la comunidad
              </span>
            </label>
            
            <div className="text-xs text-slate-500">
              {content.trim().split(/\s+/).length} palabras • 
              ~{Math.ceil(content.trim().split(/\s+/).length / 200)} min lectura
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              onClick={handleSave}
              disabled={!title.trim() || !content.trim()}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              {existingAnalysis ? 'Actualizar' : 'Guardar'} Análisis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisEditor;