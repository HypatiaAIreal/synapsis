// 🎭 TIPOS PRINCIPALES DEL SISTEMA

export type MethodologyCategory = 
  | 'structural-narratological'
  | 'screenplay-dramaturgy'
  | 'psychoanalytic'
  | 'feminist-gender'
  | 'semiotic'
  | 'marxist-sociological'
  | 'phenomenological-philosophical'
  | 'postcolonial-decolonial'
  | 'cognitive'
  | 'genre-theory'
  | 'montage'
  | 'documentary'
  | 'contemporary-experimental'
  | 'hybrid-interdisciplinary';

export type ComplexityLevel = 'basic' | 'intermediate' | 'advanced' | 'expert';

export type AnalysisDepth = 'surface' | 'structural' | 'deep' | 'comprehensive';

export type FilmGenre = 
  | 'action' | 'adventure' | 'animation' | 'comedy' | 'crime'
  | 'documentary' | 'drama' | 'family' | 'fantasy' | 'film-noir'
  | 'history' | 'horror' | 'music' | 'musical' | 'mystery'
  | 'romance' | 'science-fiction' | 'thriller' | 'war' | 'western';

export type CulturalOrigin = 
  | 'hollywood' | 'european' | 'asian' | 'latin-american' 
  | 'african' | 'middle-eastern' | 'oceanic' | 'global';

export type MethodologyCombinationType = 
  | 'complementary'      // Se refuerzan mutuamente
  | 'dialectical'        // Tensión productiva
  | 'synthetic'          // Crean algo nuevo juntas
  | 'parallel'           // Coexisten sin interacción
  | 'hierarchical';      // Una domina sobre otra

export type InsightType = 
  | 'structural'         // Sobre la forma
  | 'thematic'          // Sobre temas/contenido
  | 'contextual'        // Sobre contexto histórico/cultural
  | 'technical'         // Sobre aspectos técnicos
  | 'emergent'          // Nuevos descubrimientos
  | 'connective';       // Conexiones entre elementos

export type ApplicationMode = 
  | 'manual'            // Aplicación humana tradicional
  | 'assisted'          // Con ayuda de IA
  | 'automated'         // Completamente automatizado
  | 'collaborative'     // Humano-IA juntos
  | 'emergent';         // Solo posible con colaboración

export interface TimeRange {
  start: number;
  end: number;
  era?: string;
}

export interface FilmContext {
  title: string;
  year: number;
  director: string[];
  genres: FilmGenre[];
  duration: number;
  culturalOrigin: CulturalOrigin;
  language: string[];
  productionCountries: string[];
  historicalContext?: string;
  productionContext?: string;
}

export interface AnalysisQuery {
  questionType: 'formal' | 'thematic' | 'ideological' | 'historical' | 'affective' | 'technical';
  depth: AnalysisDepth;
  scope: 'micro' | 'meso' | 'macro';
  focusAreas?: string[];
  timeConstraints?: number; // minutos disponibles
  outputFormat?: 'academic' | 'educational' | 'creative' | 'general';
}

export interface MethodologyMetadata {
  id: string;
  name: string;
  author: string | string[];
  year: number;
  category: MethodologyCategory;
  complexity: ComplexityLevel;
  timeToLearn: number; // horas estimadas
  prerequisities?: string[]; // IDs de otras metodologías
  culturalContext?: string;
  language: string;
}
