// 🔧 Servicio de Integración de Metodologías - VERSIÓN ESTÁTICA
// Combina las 11 metodologías clásicas con las nuevas del módulo

import { NARRATIVE_THEORIES } from './narrativeTheories';
import { ALL_METHODOLOGIES_STATIC } from './allMethodologiesStatic';

// Tipos
export interface MethodologyInfo {
  id: string;
  name: string;
  author: string;
  year?: number;
  description: string;
  category: string;
  complexity?: 'basic' | 'intermediate' | 'advanced' | 'expert';
  timeToLearn?: number;
  icon?: string;
  prompt?: string;
  isClassic?: boolean;
}

export interface CategoryInfo {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
  methodologies: MethodologyInfo[];
}

// Clase principal del servicio
export class MethodologyIntegrationService {
  private classicMethodologies: Map<string, MethodologyInfo> = new Map();
  private newMethodologies: Map<string, MethodologyInfo> = new Map();
  private categories: Map<string, CategoryInfo> = new Map();

  constructor() {
    this.initializeClassicMethodologies();
    this.initializeCategories();
    this.loadStaticMethodologies();
  }

  // Inicializar las 11 metodologías clásicas
  private initializeClassicMethodologies() {
    Object.entries(NARRATIVE_THEORIES).forEach(([id, theory]) => {
      this.classicMethodologies.set(id, {
        id,
        name: theory.name,
        author: theory.author,
        description: theory.description,
        category: 'curated-selection',
        icon: theory.icon,
        prompt: theory.prompt,
        isClassic: true,
        complexity: this.inferComplexity(theory.name)
      });
    });
  }

  // Cargar metodologías estáticas
  private loadStaticMethodologies() {
    Object.entries(ALL_METHODOLOGIES_STATIC).forEach(([categoryId, methodologies]) => {
      const categoryMethodologies: MethodologyInfo[] = [];
      
      methodologies.forEach((methodology: any) => {
        if (methodology?.metadata) {
          const methodologyInfo: MethodologyInfo = {
            id: methodology.metadata.id,
            name: methodology.metadata.name,
            author: Array.isArray(methodology.metadata.author) 
              ? methodology.metadata.author.join(', ') 
              : methodology.metadata.author,
            year: methodology.metadata.year,
            description: methodology.description,
            category: categoryId,
            complexity: methodology.metadata.complexity,
            timeToLearn: methodology.metadata.timeToLearn,
            isClassic: false
          };

          categoryMethodologies.push(methodologyInfo);
          this.newMethodologies.set(methodologyInfo.id, methodologyInfo);
        }
      });

      // Actualizar la categoría con sus metodologías
      const category = this.categories.get(categoryId);
      if (category) {
        category.methodologies = categoryMethodologies;
      }
    });
  }

  // Inicializar categorías
  private initializeCategories() {
    // Categoría especial con las 11 clásicas
    this.categories.set('curated-selection', {
      id: 'curated-selection',
      name: 'Selección Hypatia & Carles',
      icon: '💜',
      color: '#9333ea',
      description: '11 metodologías esenciales curadas especialmente',
      methodologies: Array.from(this.classicMethodologies.values())
    });

    // Las otras 14 categorías
    const categories = [
      {
        id: 'structural-narratological',
        name: 'Estructurales y Narratológicas',
        icon: '📚',
        color: '#3b82f6',
        description: 'Análisis de la estructura narrativa y sus funciones'
      },
      {
        id: 'screenplay-dramaturgy',
        name: 'Guion y Dramaturgia',
        icon: '📝',
        color: '#10b981',
        description: 'Técnicas de escritura y construcción dramática'
      },
      {
        id: 'psychoanalytic',
        name: 'Psicoanalíticas',
        icon: '🧠',
        color: '#ef4444',
        description: 'El inconsciente y la psique en el cine'
      },
      {
        id: 'feminist-gender',
        name: 'Feministas y de Género',
        icon: '♀️',
        color: '#ec4899',
        description: 'Perspectivas de género y teoría feminista'
      },
      {
        id: 'semiotic',
        name: 'Semióticas',
        icon: '🔤',
        color: '#8b5cf6',
        description: 'Signos, símbolos y significados cinematográficos'
      },
      {
        id: 'marxist-sociological',
        name: 'Marxistas y Sociológicas',
        icon: '⚒️',
        color: '#dc2626',
        description: 'Análisis social, político e ideológico'
      },
      {
        id: 'phenomenological-philosophical',
        name: 'Fenomenológicas y Filosóficas',
        icon: '💭',
        color: '#0891b2',
        description: 'La experiencia y filosofía del cine'
      },
      {
        id: 'postcolonial-decolonial',
        name: 'Poscoloniales y Decoloniales',
        icon: '🌍',
        color: '#059669',
        description: 'Perspectivas no occidentales y decoloniales'
      },
      {
        id: 'cognitive',
        name: 'Cognitivas',
        icon: '🧩',
        color: '#7c3aed',
        description: 'Percepción, emoción y procesamiento mental'
      },
      {
        id: 'genre-theory',
        name: 'Teoría de Géneros',
        icon: '🎭',
        color: '#ca8a04',
        description: 'Análisis de géneros cinematográficos'
      },
      {
        id: 'montage',
        name: 'Teorías del Montaje',
        icon: '✂️',
        color: '#0284c7',
        description: 'El arte de la edición y el montaje'
      },
      {
        id: 'documentary',
        name: 'Teorías del Documental',
        icon: '📹',
        color: '#65a30d',
        description: 'Análisis del cine documental'
      },
      {
        id: 'contemporary-experimental',
        name: 'Contemporáneas y Experimentales',
        icon: '🔬',
        color: '#e11d48',
        description: 'Vanguardia y nuevas aproximaciones'
      },
      {
        id: 'hybrid-interdisciplinary',
        name: 'Híbridas e Interdisciplinarias',
        icon: '🔀',
        color: '#0e7490',
        description: 'Enfoques múltiples e interdisciplinarios'
      }
    ];

    categories.forEach(cat => {
      this.categories.set(cat.id, {
        ...cat,
        methodologies: []
      });
    });
  }

  // Cargar metodologías de una categoría específica (ahora síncrono)
  loadMethodologiesForCategory(categoryId: string): MethodologyInfo[] {
    // Si es la categoría curada, devolver las clásicas
    if (categoryId === 'curated-selection') {
      return Array.from(this.classicMethodologies.values());
    }

    // Devolver las metodologías ya cargadas para esa categoría
    const category = this.categories.get(categoryId);
    return category?.methodologies || [];
  }

  // Obtener todas las categorías
  getCategories(): CategoryInfo[] {
    return Array.from(this.categories.values());
  }

  // Obtener una metodología específica
  getMethodology(methodologyId: string): MethodologyInfo | undefined {
    return this.classicMethodologies.get(methodologyId) || 
           this.newMethodologies.get(methodologyId);
  }

  // Buscar metodologías
  searchMethodologies(query: string): MethodologyInfo[] {
    const lowerQuery = query.toLowerCase();
    const results: MethodologyInfo[] = [];

    // Buscar en clásicas
    this.classicMethodologies.forEach(methodology => {
      if (methodology.name.toLowerCase().includes(lowerQuery) ||
          methodology.author.toLowerCase().includes(lowerQuery) ||
          methodology.description.toLowerCase().includes(lowerQuery)) {
        results.push(methodology);
      }
    });

    // Buscar en nuevas
    this.newMethodologies.forEach(methodology => {
      if (methodology.name.toLowerCase().includes(lowerQuery) ||
          methodology.author.toLowerCase().includes(lowerQuery) ||
          methodology.description.toLowerCase().includes(lowerQuery)) {
        results.push(methodology);
      }
    });

    return results;
  }

  // Obtener prompt para análisis con IA
  getAnalysisPrompt(methodologyId: string, movieTitle: string): string {
    const methodology = this.getMethodology(methodologyId);
    if (!methodology) {
      throw new Error(`Metodología no encontrada: ${methodologyId}`);
    }

    // Si es una metodología clásica con prompt definido
    if (methodology.prompt) {
      return methodology.prompt.replace('{movieTitle}', movieTitle);
    }

    // Para metodologías nuevas, generar prompt basado en la información
    return this.generatePromptForMethodology(methodology, movieTitle);
  }

  // Generar prompt para metodologías sin prompt predefinido
  private generatePromptForMethodology(methodology: MethodologyInfo, movieTitle: string): string {
    return `Analiza la película "${movieTitle}" utilizando la metodología ${methodology.name} de ${methodology.author} (${methodology.year || 'fecha desconocida'}).

${methodology.description}

Por favor proporciona un análisis detallado que incluya:
1. Aplicación de los conceptos principales de esta metodología
2. Identificación de elementos clave en la película según este enfoque
3. Interpretación de significados y estructuras
4. Ejemplos específicos con referencias a escenas
5. Conclusiones sobre lo que esta metodología revela de la película

El análisis debe ser profundo, académico pero accesible, y demostrar comprensión tanto de la metodología como de la película.`;
  }

  // Inferir complejidad basada en el nombre (para metodologías clásicas)
  private inferComplexity(name: string): 'basic' | 'intermediate' | 'advanced' | 'expert' {
    if (name.includes('Básico') || name.includes('Introducción')) return 'basic';
    if (name.includes('Avanzado') || name.includes('Complejo')) return 'advanced';
    if (name.includes('Experto') || name.includes('Especializado')) return 'expert';
    return 'intermediate';
  }

  // Obtener metodologías recomendadas para una película
  getRecommendedMethodologies(movieData: any): MethodologyInfo[] {
    const recommendations: MethodologyInfo[] = [];
    
    // Lógica de recomendación basada en género, época, etc.
    // Por ahora, devolver algunas clásicas como recomendación
    const classicRecommendations = ['campbell', 'mckee', 'propp'];
    
    classicRecommendations.forEach(id => {
      const methodology = this.classicMethodologies.get(id);
      if (methodology) {
        recommendations.push(methodology);
      }
    });

    return recommendations;
  }
}

// Instancia singleton del servicio
export const methodologyIntegrationService = new MethodologyIntegrationService();