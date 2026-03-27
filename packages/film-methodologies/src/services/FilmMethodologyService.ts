// 🎬 SERVICIO PRINCIPAL DE METODOLOGÍAS CINEMATOGRÁFICAS

import { 
  Methodology, 
  FilmContext, 
  AnalysisQuery, 
  AnalysisResult,
  AdaptiveAnalysisConfig,
  MethodologyCombination,
  SynthesisResult,
  UserProfile
} from '../core/interfaces';

import { 
  MethodologyCategory, 
  ComplexityLevel,
  FilmGenre,
  CulturalOrigin 
} from '../core/types';

export class FilmMethodologyService {
  private methodologies: Map<string, Methodology> = new Map();
  private combinations: Map<string, MethodologyCombination> = new Map();
  private initialized: boolean = false;

  constructor() {
    this.initialize();
  }

  // ============================================
  // INICIALIZACIÓN
  // ============================================

  private async initialize(): Promise<void> {
    try {
      // Cargar todas las metodologías
      await this.loadMethodologies();
      // Cargar combinaciones predefinidas
      await this.loadCombinations();
      // Validar integridad
      this.validateIntegrity();
      
      this.initialized = true;
    } catch (error) {
      console.error('Error inicializando FilmMethodologyService:', error);
      throw error;
    }
  }

  private async loadMethodologies(): Promise<void> {
    // Aquí cargaríamos todas las metodologías
    // Por ahora, un ejemplo:
    const exampleMethodology: Methodology = {
      metadata: {
        id: 'propp-functions',
        name: 'Las 31 Funciones de Propp',
        author: 'Vladimir Propp',
        year: 1928,
        category: 'structural-narratological',
        complexity: 'intermediate',
        timeToLearn: 20,
        language: 'es'
      },
      description: 'Análisis morfológico del cuento que identifica 31 funciones narrativas universales...',
      keyConcepts: [
        {
          term: 'Función',
          definition: 'Acción de un personaje definida desde el punto de vista de su significación en el desarrollo de la intriga',
          importance: 'fundamental'
        }
      ],
      applicationProcess: [
        {
          order: 1,
          name: 'Identificación de funciones',
          description: 'Revisar la película identificando cada una de las 31 funciones',
          timeEstimate: 120,
          difficulty: 'intermediate'
        }
      ],
      strengths: ['Estructura clara', 'Aplicación universal'],
      limitations: ['Rigidez del modelo', 'Origen en cuentos folklóricos'],
      bibliography: [],
      examples: []
    };

    this.methodologies.set(exampleMethodology.metadata.id, exampleMethodology);
  }

  private async loadCombinations(): Promise<void> {
    // Cargar combinaciones predefinidas
  }

  private validateIntegrity(): void {
    // Validar que todas las referencias cruzadas existan
  }

  // ============================================
  // MÉTODOS PÚBLICOS PRINCIPALES
  // ============================================

  /**
   * Obtener una metodología por ID
   */
  public getMethodology(id: string): Methodology | undefined {
    return this.methodologies.get(id);
  }

  /**
   * Obtener todas las metodologías
   */
  public getAllMethodologies(): Methodology[] {
    return Array.from(this.methodologies.values());
  }

  /**
   * Obtener metodologías por categoría
   */
  public getMethodologiesByCategory(category: MethodologyCategory): Methodology[] {
    return this.getAllMethodologies().filter(m => m.metadata.category === category);
  }

  /**
   * Buscar metodologías por criterios
   */
  public searchMethodologies(criteria: {
    categories?: MethodologyCategory[];
    complexity?: ComplexityLevel[];
    authors?: string[];
    yearRange?: { start: number; end: number };
    keywords?: string[];
  }): Methodology[] {
    let results = this.getAllMethodologies();

    if (criteria.categories?.length) {
      results = results.filter(m => criteria.categories!.includes(m.metadata.category));
    }

    if (criteria.complexity?.length) {
      results = results.filter(m => criteria.complexity!.includes(m.metadata.complexity));
    }

    if (criteria.authors?.length) {
      results = results.filter(m => {
        const authors = Array.isArray(m.metadata.author) ? m.metadata.author : [m.metadata.author];
        return authors.some(a => criteria.authors!.includes(a));
      });
    }

    if (criteria.yearRange) {
      results = results.filter(m => 
        m.metadata.year >= criteria.yearRange!.start && 
        m.metadata.year <= criteria.yearRange!.end
      );
    }

    if (criteria.keywords?.length) {
      results = results.filter(m => {
        const searchText = `${m.metadata.name} ${m.description} ${m.keyConcepts.map(c => c.term).join(' ')}`.toLowerCase();
        return criteria.keywords!.some(keyword => searchText.includes(keyword.toLowerCase()));
      });
    }

    return results;
  }

  /**
   * Selección adaptativa de metodologías
   */
  public selectAdaptiveMethodologies(config: AdaptiveAnalysisConfig): {
    primary: Methodology[];
    complementary: Methodology[];
    optional: Methodology[];
    reasoning: string;
  } {
    const { film, query, userProfile, constraints, preferences } = config;
    
    // Algoritmo de selección adaptativa
    const primary: Methodology[] = [];
    const complementary: Methodology[] = [];
    const optional: Methodology[] = [];
    
    // 1. Seleccionar por género
    const genreMethodologies = this.selectByGenre(film.genres);
    primary.push(...genreMethodologies.slice(0, 2));
    
    // 2. Ajustar por época
    const eraMethodologies = this.selectByEra(film.year);
    complementary.push(...eraMethodologies.slice(0, 2));
    
    // 3. Considerar origen cultural
    const culturalMethodologies = this.selectByCulture(film.culturalOrigin);
    complementary.push(...culturalMethodologies.slice(0, 1));
    
    // 4. Ajustar por tipo de pregunta
    const queryMethodologies = this.selectByQuery(query);
    primary.push(...queryMethodologies.slice(0, 1));
    
    // 5. Filtrar por nivel de usuario
    if (userProfile) {
      this.filterByUserLevel(primary, userProfile.expertiseLevel);
      this.filterByUserLevel(complementary, userProfile.expertiseLevel);
    }
    
    // 6. Aplicar restricciones
    if (constraints) {
      this.applyConstraints(primary, complementary, constraints);
    }
    
    // 7. Sugerir opcionales basadas en preferencias
    if (preferences?.focusOnInnovation) {
      optional.push(...this.getInnovativeMethodologies().slice(0, 2));
    }
    
    const reasoning = this.generateSelectionReasoning(film, query, primary, complementary);
    
    return {
      primary: this.removeDuplicates(primary),
      complementary: this.removeDuplicates(complementary),
      optional: this.removeDuplicates(optional),
      reasoning
    };
  }

  /**
   * Combinar metodologías para análisis sintético
   */
  public combineMethodologies(
    methodologyIds: string[],
    film: FilmContext,
    query: AnalysisQuery
  ): MethodologyCombination | null {
    // Buscar combinación predefinida
    const predefined = this.findPredefinedCombination(methodologyIds);
    if (predefined) return predefined;
    
    // Crear combinación dinámica
    return this.createDynamicCombination(methodologyIds, film, query);
  }

  /**
   * Analizar compatibilidad entre metodologías
   */
  public analyzeCompatibility(methodologyIdA: string, methodologyIdB: string): {
    compatibilityScore: number; // 0-10
    type: 'complementary' | 'dialectical' | 'synthetic' | 'parallel' | 'incompatible';
    reasoning: string;
    suggestedApproach?: string;
  } {
    const methodA = this.getMethodology(methodologyIdA);
    const methodB = this.getMethodology(methodologyIdB);
    
    if (!methodA || !methodB) {
      throw new Error('Metodología no encontrada');
    }
    
    // Análisis de compatibilidad
    let score = 5; // Base neutral
    let type: any = 'parallel';
    let reasoning = '';
    
    // Misma categoría = generalmente compatibles
    if (methodA.metadata.category === methodB.metadata.category) {
      score += 2;
      type = 'complementary';
      reasoning += 'Misma categoría teórica. ';
    }
    
    // Diferentes paradigmas = tensión productiva
    if (this.areDifferentParadigms(methodA, methodB)) {
      score += 1;
      type = 'dialectical';
      reasoning += 'Paradigmas diferentes crean tensión productiva. ';
    }
    
    // Épocas muy diferentes = menor compatibilidad
    const yearDiff = Math.abs(methodA.metadata.year - methodB.metadata.year);
    if (yearDiff > 50) {
      score -= 1;
      reasoning += 'Contextos históricos muy diferentes. ';
    }
    
    return {
      compatibilityScore: Math.max(0, Math.min(10, score)),
      type,
      reasoning,
      suggestedApproach: this.suggestCombinationApproach(methodA, methodB, type)
    };
  }

  /**
   * Generar ruta de aprendizaje personalizada
   */
  public generateLearningPath(
    targetMethodologies: string[],
    currentLevel: ComplexityLevel,
    timeAvailable: number // horas
  ): {
    path: LearningStep[];
    estimatedTime: number;
    prerequisites: string[];
    milestones: Milestone[];
  } {
    const path: LearningStep[] = [];
    const prerequisites: string[] = [];
    const milestones: Milestone[] = [];
    
    // Ordenar metodologías por complejidad y prerequisitos
    const sortedMethodologies = this.sortByLearningOrder(targetMethodologies, currentLevel);
    
    let accumulatedTime = 0;
    
    for (const methodId of sortedMethodologies) {
      const method = this.getMethodology(methodId);
      if (!method) continue;
      
      // Agregar prerequisitos
      if (method.metadata.prerequisities) {
        prerequisites.push(...method.metadata.prerequisities);
      }
      
      // Crear paso de aprendizaje
      const step: LearningStep = {
        methodologyId: methodId,
        estimatedTime: method.metadata.timeToLearn,
        exercises: this.generateExercises(method),
        resources: this.gatherResources(method),
        checkpoint: this.createCheckpoint(method)
      };
      
      path.push(step);
      accumulatedTime += method.metadata.timeToLearn;
      
      // Agregar milestone cada 20 horas
      if (accumulatedTime >= 20) {
        milestones.push({
          name: `Dominio de ${path.length} metodologías`,
          methodologiesCovered: path.map(p => p.methodologyId),
          assessment: this.createAssessment(path)
        });
      }
      
      // Detener si excede tiempo disponible
      if (accumulatedTime >= timeAvailable) break;
    }
    
    return {
      path,
      estimatedTime: accumulatedTime,
      prerequisites: [...new Set(prerequisites)],
      milestones
    };
  }

  // ============================================
  // MÉTODOS DE UTILIDAD PRIVADOS
  // ============================================

  private selectByGenre(genres: FilmGenre[]): Methodology[] {
    const genreMap: Record<FilmGenre, string[]> = {
      'horror': ['clover-final-girl', 'kristeva-abjection', 'wood-repression'],
      'science-fiction': ['jameson-cognitive-mapping', 'baudrillard-simulacra', 'benjamin-technology'],
      'western': ['wollen-antinomies', 'lukacs-historical-novel', 'greimas-actantial'],
      'film-noir': ['metz-grande-syntagmatique', 'lacan-gaze', 'place-women-noir'],
      'melodrama': ['williams-body-genres', 'doane-womans-film', 'mulvey-visual-pleasure'],
      // ... más mapeos
      'action': [],
      'adventure': [],
      'animation': [],
      'comedy': [],
      'crime': [],
      'documentary': [],
      'drama': [],
      'family': [],
      'fantasy': [],
      'history': [],
      'music': [],
      'musical': [],
      'mystery': [],
      'romance': [],
      'thriller': [],
      'war': []
    };
    
    const methodologyIds = genres.flatMap(g => genreMap[g] || []);
    return methodologyIds
      .map(id => this.getMethodology(id))
      .filter((m): m is Methodology => m !== undefined);
  }

  private selectByEra(year: number): Methodology[] {
    if (year < 1960) {
      return this.searchMethodologies({
        keywords: ['classical', 'golden age', 'studio system']
      });
    } else if (year < 1980) {
      return this.searchMethodologies({
        keywords: ['new wave', 'auteur', 'modernist']
      });
    } else if (year < 2000) {
      return this.searchMethodologies({
        keywords: ['postmodern', 'blockbuster', 'high concept']
      });
    } else {
      return this.searchMethodologies({
        keywords: ['digital', 'transmedia', 'convergence']
      });
    }
  }

  private selectByCulture(origin: CulturalOrigin): Methodology[] {
    const cultureMap: Record<CulturalOrigin, string[]> = {
      'hollywood': ['bordwell-classical', 'schatz-genres', 'altman-genre'],
      'european': ['bazin-realism', 'deleuze-time-image', 'metz-semiology'],
      'asian': ['deleuze-time-image', 'burch-japanese', 'naficy-accented'],
      'latin-american': ['third-cinema', 'garcia-espinosa', 'rocha-aesthetics'],
      'african': ['diawara-african', 'ukadike-black-african', 'thackway-africa'],
      'middle-eastern': ['naficy-accented', 'said-orientalism', 'khanna-algeria'],
      'oceanic': ['indigenous-methodologies', 'fourth-cinema', 'decolonial-approaches'],
      'global': ['appadurai-scapes', 'iwabuchi-transnational', 'shohat-stam-unthinking']
    };
    
    const methodologyIds = cultureMap[origin] || [];
    return methodologyIds
      .map(id => this.getMethodology(id))
      .filter((m): m is Methodology => m !== undefined);
  }

  private selectByQuery(query: AnalysisQuery): Methodology[] {
    const queryMap: Record<string, string[]> = {
      'formal': ['metz-syntagmatique', 'bordwell-narration', 'eisenstein-montage'],
      'thematic': ['jameson-political', 'barthes-mythologies', 'levi-strauss-structural'],
      'ideological': ['althusser-ideology', 'gramsci-hegemony', 'hall-encoding'],
      'historical': ['benjamin-history', 'kracauer-history', 'rosenstone-historical'],
      'affective': ['williams-structures', 'massumi-affect', 'shaviro-cinematic'],
      'technical': ['murch-editing', 'chion-audiovision', 'manovich-language']
    };
    
    const methodologyIds = queryMap[query.questionType] || [];
    return methodologyIds
      .map(id => this.getMethodology(id))
      .filter((m): m is Methodology => m !== undefined);
  }

  private filterByUserLevel(methodologies: Methodology[], level: ComplexityLevel): void {
    const levelOrder: ComplexityLevel[] = ['basic', 'intermediate', 'advanced', 'expert'];
    const userLevelIndex = levelOrder.indexOf(level);
    
    // Filtrar metodologías que excedan el nivel del usuario
    const filtered = methodologies.filter(m => {
      const methodLevelIndex = levelOrder.indexOf(m.metadata.complexity);
      return methodLevelIndex <= userLevelIndex + 1; // Permitir un nivel más
    });
    
    methodologies.length = 0;
    methodologies.push(...filtered);
  }

  private applyConstraints(
    primary: Methodology[],
    complementary: Methodology[],
    constraints: any
  ): void {
    // Aplicar límites de cantidad
    if (constraints.maxMethodologies) {
      const total = primary.length + complementary.length;
      if (total > constraints.maxMethodologies) {
        const primaryKeep = Math.ceil(constraints.maxMethodologies * 0.6);
        const complementaryKeep = constraints.maxMethodologies - primaryKeep;
        
        primary.length = Math.min(primary.length, primaryKeep);
        complementary.length = Math.min(complementary.length, complementaryKeep);
      }
    }
    
    // Excluir metodologías específicas
    if (constraints.excludedMethodologies?.length) {
      const excluded = new Set(constraints.excludedMethodologies);
      primary = primary.filter(m => !excluded.has(m.metadata.id));
      complementary = complementary.filter(m => !excluded.has(m.metadata.id));
    }
  }

  private getInnovativeMethodologies(): Methodology[] {
    return this.searchMethodologies({
      categories: ['contemporary-experimental'],
      yearRange: { start: 2010, end: 2025 }
    });
  }

  private removeDuplicates(methodologies: Methodology[]): Methodology[] {
    const seen = new Set<string>();
    return methodologies.filter(m => {
      if (seen.has(m.metadata.id)) return false;
      seen.add(m.metadata.id);
      return true;
    });
  }

  private generateSelectionReasoning(
    film: FilmContext,
    query: AnalysisQuery,
    primary: Methodology[],
    complementary: Methodology[]
  ): string {
    let reasoning = `Para analizar "${film.title}" (${film.year}), `;
    reasoning += `una película de ${film.genres.join('/')} ${film.culturalOrigin}, `;
    reasoning += `con una pregunta ${query.questionType} de profundidad ${query.depth}, `;
    reasoning += `he seleccionado:\n\n`;
    
    reasoning += `METODOLOGÍAS PRIMARIAS:\n`;
    primary.forEach(m => {
      reasoning += `- ${m.metadata.name}: ideal para ${this.getMethodologyStrength(m, film, query)}\n`;
    });
    
    reasoning += `\nMETODOLOGÍAS COMPLEMENTARIAS:\n`;
    complementary.forEach(m => {
      reasoning += `- ${m.metadata.name}: aporta ${this.getMethodologyContribution(m, primary)}\n`;
    });
    
    return reasoning;
  }

  private getMethodologyStrength(
    methodology: Methodology,
    film: FilmContext,
    query: AnalysisQuery
  ): string {
    // Lógica para determinar por qué esta metodología es fuerte para este análisis
    return 'análisis profundo de estructura narrativa';
  }

  private getMethodologyContribution(
    methodology: Methodology,
    primary: Methodology[]
  ): string {
    // Lógica para determinar qué aporta esta metodología al conjunto
    return 'perspectiva cultural complementaria';
  }

  private findPredefinedCombination(methodologyIds: string[]): MethodologyCombination | null {
    // Buscar en combinaciones predefinidas
    for (const combination of this.combinations.values()) {
      if (this.arraysEqual(combination.methodologies.sort(), methodologyIds.sort())) {
        return combination;
      }
    }
    return null;
  }

  private createDynamicCombination(
    methodologyIds: string[],
    film: FilmContext,
    query: AnalysisQuery
  ): MethodologyCombination {
    const methodologies = methodologyIds
      .map(id => this.getMethodology(id))
      .filter((m): m is Methodology => m !== undefined);
    
    return {
      id: `dynamic-${Date.now()}`,
      name: `Combinación dinámica para ${film.title}`,
      methodologies: methodologyIds,
      type: this.determineCombinationType(methodologies),
      description: `Combinación adaptada específicamente para analizar ${film.title}`,
      whenToUse: [`Películas de ${film.genres.join('/')}`],
      expectedOutcomes: this.predictOutcomes(methodologies, film, query),
      synergyScore: this.calculateSynergyScore(methodologies)
    };
  }

  private areDifferentParadigms(methodA: Methodology, methodB: Methodology): boolean {
    const paradigmGroups = {
      structural: ['structural-narratological', 'semiotic'],
      humanistic: ['phenomenological-philosophical', 'psychoanalytic'],
      social: ['marxist-sociological', 'feminist-gender', 'postcolonial-decolonial'],
      technical: ['cognitive', 'montage']
    };
    
    let paradigmA = '';
    let paradigmB = '';
    
    for (const [paradigm, categories] of Object.entries(paradigmGroups)) {
      if (categories.includes(methodA.metadata.category)) paradigmA = paradigm;
      if (categories.includes(methodB.metadata.category)) paradigmB = paradigm;
    }
    
    return paradigmA !== paradigmB;
  }

  private suggestCombinationApproach(
    methodA: Methodology,
    methodB: Methodology,
    type: string
  ): string {
    switch (type) {
      case 'complementary':
        return `Aplicar ambas metodologías en paralelo y buscar convergencias`;
      case 'dialectical':
        return `Usar la tensión entre perspectivas para generar insights más profundos`;
      case 'synthetic':
        return `Crear un marco híbrido que integre elementos de ambas`;
      default:
        return `Aplicar secuencialmente, comparando resultados`;
    }
  }

  private sortByLearningOrder(
    methodologyIds: string[],
    currentLevel: ComplexityLevel
  ): string[] {
    const methodologies = methodologyIds
      .map(id => this.getMethodology(id))
      .filter((m): m is Methodology => m !== undefined);
    
    // Ordenar por complejidad y prerequisitos
    return methodologies
      .sort((a, b) => {
        const complexityOrder: ComplexityLevel[] = ['basic', 'intermediate', 'advanced', 'expert'];
        const aIndex = complexityOrder.indexOf(a.metadata.complexity);
        const bIndex = complexityOrder.indexOf(b.metadata.complexity);
        
        if (aIndex !== bIndex) return aIndex - bIndex;
        
        // Si tienen la misma complejidad, priorizar las sin prerequisitos
        const aPrereq = a.metadata.prerequisities?.length || 0;
        const bPrereq = b.metadata.prerequisities?.length || 0;
        
        return aPrereq - bPrereq;
      })
      .map(m => m.metadata.id);
  }

  private generateExercises(methodology: Methodology): Exercise[] {
    // Generar ejercicios basados en la metodología
    return [
      {
        type: 'analysis',
        description: `Aplicar ${methodology.metadata.name} a una escena de 5 minutos`,
        difficulty: methodology.metadata.complexity,
        estimatedTime: 30
      }
    ];
  }

  private gatherResources(methodology: Methodology): Resource[] {
    // Recopilar recursos de aprendizaje
    return methodology.bibliography
      .filter(b => b.essential)
      .map(b => ({
        type: 'reading',
        title: b.title,
        author: b.authors.join(', '),
        url: b.url
      }));
  }

  private createCheckpoint(methodology: Methodology): Checkpoint {
    return {
      type: 'practical',
      description: `Análisis completo usando ${methodology.metadata.name}`,
      criteria: [
        'Identificar todos los conceptos clave',
        'Aplicar el proceso completo',
        'Generar al menos 3 insights originales'
      ]
    };
  }

  private createAssessment(path: LearningStep[]): Assessment {
    return {
      type: 'comprehensive',
      description: 'Análisis comparativo usando múltiples metodologías',
      methodologies: path.map(p => p.methodologyId),
      estimatedTime: 120
    };
  }

  private determineCombinationType(methodologies: Methodology[]): any {
    // Lógica para determinar el tipo de combinación
    if (methodologies.every(m => m.metadata.category === methodologies[0].metadata.category)) {
      return 'complementary';
    }
    
    if (this.hasOpposingParadigms(methodologies)) {
      return 'dialectical';
    }
    
    return 'synthetic';
  }

  private hasOpposingParadigms(methodologies: Methodology[]): boolean {
    // Verificar si hay paradigmas opuestos
    return false; // Simplificado
  }

  private predictOutcomes(
    methodologies: Methodology[],
    film: FilmContext,
    query: AnalysisQuery
  ): string[] {
    return [
      'Comprensión multidimensional de la estructura narrativa',
      'Identificación de patrones culturales y universales',
      'Insights sobre la construcción de significado'
    ];
  }

  private calculateSynergyScore(methodologies: Methodology[]): number {
    // Calcular qué tan bien funcionan juntas
    let score = 5; // Base
    
    // Bonus por diversidad de categorías
    const categories = new Set(methodologies.map(m => m.metadata.category));
    score += Math.min(categories.size - 1, 3);
    
    // Bonus por complementariedad temporal
    const years = methodologies.map(m => m.metadata.year);
    const yearSpread = Math.max(...years) - Math.min(...years);
    if (yearSpread > 30) score += 1;
    
    return Math.min(score, 10);
  }

  private arraysEqual(a: string[], b: string[]): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
}

// ============================================
// TIPOS AUXILIARES
// ============================================

interface LearningStep {
  methodologyId: string;
  estimatedTime: number;
  exercises: Exercise[];
  resources: Resource[];
  checkpoint: Checkpoint;
}

interface Exercise {
  type: 'analysis' | 'comparison' | 'synthesis';
  description: string;
  difficulty: ComplexityLevel;
  estimatedTime: number;
}

interface Resource {
  type: 'reading' | 'video' | 'interactive';
  title: string;
  author?: string;
  url?: string;
}

interface Checkpoint {
  type: 'quiz' | 'practical' | 'peer-review';
  description: string;
  criteria: string[];
}

interface Milestone {
  name: string;
  methodologiesCovered: string[];
  assessment: Assessment;
}

interface Assessment {
  type: 'comprehensive' | 'focused';
  description: string;
  methodologies: string[];
  estimatedTime: number;
}
