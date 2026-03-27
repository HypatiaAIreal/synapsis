// 🎯 INTERFACES PRINCIPALES

import { 
  MethodologyCategory, 
  ComplexityLevel, 
  InsightType, 
  ApplicationMode,
  FilmContext,
  AnalysisQuery,
  MethodologyMetadata,
  MethodologyCombinationType
} from './types';

// ============================================
// METODOLOGÍA BASE
// ============================================

export interface Methodology {
  metadata: MethodologyMetadata;
  description: string; // 200-300 palabras
  keyConcepts: KeyConcept[];
  applicationProcess: ApplicationStep[];
  strengths: string[];
  limitations: string[];
  bibliography: BibliographyEntry[];
  tools?: AnalysisTool[];
  examples: FilmExample[];
  relatedMethodologies?: RelatedMethodology[];
  digitalTools?: DigitalTool[];
}

export interface KeyConcept {
  term: string;
  definition: string;
  importance: 'fundamental' | 'important' | 'supplementary';
  relatedTerms?: string[];
}

export interface ApplicationStep {
  order: number;
  name: string;
  description: string;
  timeEstimate?: number; // minutos
  difficulty: ComplexityLevel;
  tips?: string[];
  commonMistakes?: string[];
}

export interface BibliographyEntry {
  type: 'book' | 'article' | 'film' | 'web' | 'thesis';
  authors: string[];
  title: string;
  year: number;
  publisher?: string;
  journal?: string;
  url?: string;
  pages?: string;
  essential: boolean;
}

export interface FilmExample {
  film: {
    title: string;
    year: number;
    director: string;
  };
  analysisExcerpt: string;
  insightsGenerated: string[];
  methodologyApplication: string;
  keyFindings: string[];
}

export interface RelatedMethodology {
  id: string;
  relationshipType: MethodologyCombinationType;
  synergyDescription: string;
  combinedInsightPotential: number; // 0-10
}

export interface DigitalTool {
  name: string;
  type: 'software' | 'webapp' | 'library' | 'framework';
  url?: string;
  description: string;
  cost: 'free' | 'freemium' | 'paid';
  platforms?: string[];
}

// ============================================
// ANÁLISIS Y RESULTADOS
// ============================================

export interface AnalysisResult {
  methodologyId: string;
  filmContext: FilmContext;
  query: AnalysisQuery;
  content: string;
  insights: Insight[];
  confidence: number; // 0-1
  processingTime: number; // ms
  references: AnalysisReference[];
  suggestedFollowUps?: SuggestedAnalysis[];
}

export interface Insight {
  type: InsightType;
  content: string;
  significance: 'minor' | 'moderate' | 'major' | 'revolutionary';
  evidence: Evidence[];
  connections?: InsightConnection[];
  confidence: number; // 0-1
}

export interface Evidence {
  type: 'scene' | 'dialogue' | 'visual' | 'audio' | 'structural' | 'contextual';
  timestamp?: string; // "HH:MM:SS"
  description: string;
  strength: 'weak' | 'moderate' | 'strong';
}

export interface InsightConnection {
  targetInsightId?: string;
  targetMethodologyId?: string;
  connectionType: 'supports' | 'contradicts' | 'extends' | 'reframes';
  description: string;
}

export interface AnalysisReference {
  type: 'timestamp' | 'scene' | 'concept' | 'external';
  value: string;
  context?: string;
}

export interface SuggestedAnalysis {
  methodologyId: string;
  reason: string;
  potentialInsights: string[];
  estimatedValue: number; // 0-10
}

// ============================================
// SISTEMA ADAPTATIVO
// ============================================

export interface AdaptiveAnalysisConfig {
  film: FilmContext;
  query: AnalysisQuery;
  userProfile?: UserProfile;
  constraints?: AnalysisConstraints;
  preferences?: AnalysisPreferences;
}

export interface UserProfile {
  expertiseLevel: ComplexityLevel;
  familiarMethodologies: string[];
  interests: string[];
  culturalBackground?: string;
  language: string;
  analysisHistory?: AnalysisHistoryEntry[];
}

export interface AnalysisConstraints {
  maxMethodologies?: number;
  timeLimit?: number; // minutos
  complexityLimit?: ComplexityLevel;
  requiredMethodologies?: string[];
  excludedMethodologies?: string[];
}

export interface AnalysisPreferences {
  prioritizePractical: boolean;
  includeHistoricalContext: boolean;
  focusOnInnovation: boolean;
  preferredOutputStyle: 'academic' | 'accessible' | 'creative';
  visualizationPreference: 'none' | 'minimal' | 'rich';
}

export interface AnalysisHistoryEntry {
  filmId: string;
  methodologiesUsed: string[];
  satisfactionScore?: number;
  insightsGenerated: number;
  date: Date;
}

// ============================================
// COMBINACIONES Y SÍNTESIS
// ============================================

export interface MethodologyCombination {
  id: string;
  name: string;
  methodologies: string[]; // IDs
  type: MethodologyCombinationType;
  description: string;
  whenToUse: string[];
  expectedOutcomes: string[];
  synergyScore: number; // 0-10
  examples?: CombinationExample[];
}

export interface CombinationExample {
  film: string;
  context: string;
  results: string;
  insightsGenerated: string[];
}

export interface SynthesisResult {
  combinationUsed: MethodologyCombination;
  individualAnalyses: AnalysisResult[];
  synthesizedInsights: Insight[];
  emergentPatterns: EmergentPattern[];
  contradictions: Contradiction[];
  overallCoherence: number; // 0-1
}

export interface EmergentPattern {
  description: string;
  supportingMethodologies: string[];
  significance: string;
  implications: string[];
}

export interface Contradiction {
  methodologyA: string;
  methodologyB: string;
  claimA: string;
  claimB: string;
  possibleResolution?: string;
  productiveTension: boolean;
}

// ============================================
// HERRAMIENTAS DE IA
// ============================================

export interface AITool {
  id: string;
  name: string;
  description: string;
  supportedMethodologies: string[];
  capabilities: AICapability[];
  apiEndpoint?: string;
  configuration?: any;
}

export interface AICapability {
  type: 'analysis' | 'synthesis' | 'pattern-detection' | 'visualization' | 'dialogue';
  description: string;
  inputFormat: any;
  outputFormat: any;
  examples?: any[];
}

export interface PromptTemplate {
  id: string;
  methodologyId: string;
  name: string;
  template: string;
  variables: PromptVariable[];
  expectedOutput: string;
  examples: PromptExample[];
}

export interface PromptVariable {
  name: string;
  type: 'film' | 'scene' | 'concept' | 'question' | 'custom';
  required: boolean;
  description: string;
  defaultValue?: any;
}

export interface PromptExample {
  input: Record<string, any>;
  output: string;
  quality: 'excellent' | 'good' | 'acceptable';
}

// ============================================
// EVOLUCIÓN Y APRENDIZAJE
// ============================================

export interface MethodologyEvolution {
  originalId: string;
  evolutionType: 'refinement' | 'extension' | 'fusion' | 'revolution';
  changes: EvolutionChange[];
  justification: string;
  validatedBy?: ValidationRecord[];
  adoptionRate?: number;
}

export interface EvolutionChange {
  aspect: 'concepts' | 'process' | 'scope' | 'tools' | 'combinations';
  description: string;
  impact: 'minor' | 'moderate' | 'major';
}

export interface ValidationRecord {
  validatorType: 'expert' | 'community' | 'empirical' | 'ai';
  score: number;
  comments?: string;
  date: Date;
}

// ============================================
// EXPORTACIONES DE UTILIDAD
// ============================================

export interface MethodologyExport {
  format: 'json' | 'pdf' | 'markdown' | 'interactive';
  content: Methodology | MethodologyCombination | SynthesisResult;
  metadata: ExportMetadata;
}

export interface ExportMetadata {
  exportDate: Date;
  version: string;
  includedElements: string[];
  purpose?: string;
  targetAudience?: string;
}
