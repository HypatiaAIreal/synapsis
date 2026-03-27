# 🎬 @synapsis/film-methodologies

Sistema integral de metodologías de análisis cinematográfico - 100+ teorías desde lo clásico hasta lo experimental.

## 📚 Descripción

Este módulo NPM proporciona acceso programático a más de 100 metodologías de análisis cinematográfico, organizadas en 14 categorías principales. Incluye desde teorías clásicas como las funciones de Propp hasta enfoques contemporáneos como la neurocinemática.

## 🚀 Instalación

```bash
npm install @synapsis/film-methodologies
```

## 💡 Uso Básico

```typescript
import { FilmMethodologyService } from '@synapsis/film-methodologies';

const service = new FilmMethodologyService();

// Obtener una metodología específica
const propp = service.getMethodology('propp-functions');

// Buscar metodologías por criterios
const feministTheories = service.searchMethodologies({
  categories: ['feminist-gender'],
  complexity: ['intermediate', 'advanced']
});

// Selección adaptativa para una película
const config = {
  film: {
    title: 'Parasite',
    year: 2019,
    director: ['Bong Joon-ho'],
    genres: ['thriller', 'drama'],
    culturalOrigin: 'asian'
  },
  query: {
    questionType: 'ideological',
    depth: 'deep',
    scope: 'macro'
  }
};

const selection = service.selectAdaptiveMethodologies(config);
console.log(selection.primary); // Metodologías principales recomendadas
console.log(selection.reasoning); // Explicación de la selección
```

## 🏗️ Arquitectura

### Categorías de Metodologías

1. **Estructurales y Narratológicas** (8 metodologías)
   - Propp, Greimas, Genette, Todorov, Barthes, etc.

2. **Guion y Dramaturgia** (12 metodologías)
   - Campbell, McKee, Field, Truby, Snyder, etc.

3. **Psicoanalíticas** (8 metodologías)
   - Freud, Lacan, Jung, Metz, Žižek, etc.

4. **Feministas y de Género** (12 metodologías)
   - Mulvey, hooks, Butler, Clover, Williams, etc.

5. **Semióticas** (9 metodologías)
   - Metz, Eco, Pasolini, Lotman, etc.

6. **Marxistas y Sociológicas** (10 metodologías)
   - Eisenstein, Benjamin, Jameson, Williams, etc.

7. **Fenomenológicas y Filosóficas** (10 metodologías)
   - Bazin, Deleuze, Merleau-Ponty, Cavell, etc.

8. **Poscoloniales y Decoloniales** (12 metodologías)
   - Said, Bhabha, Spivak, Naficy, etc.

9. **Cognitivas** (10 metodologías)
   - Bordwell, Carroll, Smith, Grodal, etc.

10. **Teorías de Género Cinematográfico** (10 metodologías)
    - Altman, Neale, Schatz, Wood, etc.

11. **Teorías del Montaje** (12 metodologías)
    - Eisenstein, Vertov, Kuleshov, Murch, etc.

12. **Teorías del Documental** (12 metodologías)
    - Nichols, Renov, Bruzzi, etc.

13. **Contemporáneas y Experimentales** (9 metodologías)
    - Neurocinemática, Posthumanas, Afectivas, etc.

14. **Híbridas e Interdisciplinarias** (7 metodologías)
    - Antropología visual, Ecocrítica, etc.

### Estructura de una Metodología

```typescript
interface Methodology {
  metadata: {
    id: string;
    name: string;
    author: string | string[];
    year: number;
    category: MethodologyCategory;
    complexity: ComplexityLevel;
    timeToLearn: number; // horas
  };
  description: string; // 200-300 palabras
  keyConcepts: KeyConcept[];
  applicationProcess: ApplicationStep[];
  strengths: string[];
  limitations: string[];
  bibliography: BibliographyEntry[];
  examples: FilmExample[];
  relatedMethodologies?: RelatedMethodology[];
  digitalTools?: DigitalTool[];
}
```

## 🔧 Características Avanzadas

### Sistema de Selección Adaptativa

El módulo incluye un algoritmo inteligente que selecciona las mejores metodologías basándose en:

- Género de la película
- Época de producción
- Origen cultural
- Tipo de pregunta analítica
- Nivel de expertise del usuario

### Análisis de Compatibilidad

```typescript
const compatibility = service.analyzeCompatibility(
  'mulvey-male-gaze',
  'deleuze-time-image'
);

console.log(compatibility);
// {
//   compatibilityScore: 7.5,
//   type: 'dialectical',
//   reasoning: 'Paradigmas diferentes crean tensión productiva...',
//   suggestedApproach: 'Usar la tensión entre perspectivas...'
// }
```

### Rutas de Aprendizaje Personalizadas

```typescript
const learningPath = service.generateLearningPath(
  ['propp-functions', 'greimas-actantial', 'campbell-hero'],
  'basic', // nivel actual
  40 // horas disponibles
);

console.log(learningPath.path); // Secuencia optimizada de aprendizaje
console.log(learningPath.milestones); // Hitos de progreso
```

### Combinación de Metodologías

```typescript
const combination = service.combineMethodologies(
  ['marxist-jameson', 'feminist-mulvey', 'psychoanalytic-zizek'],
  film,
  query
);

console.log(combination.synergyScore); // 8.5/10
console.log(combination.expectedOutcomes);
```

## 🤖 Integración con IA

El módulo incluye plantillas de prompts optimizadas para cada metodología:

```typescript
import { getPromptTemplate } from '@synapsis/film-methodologies';

const proppPrompt = getPromptTemplate('propp-functions', {
  film: 'The Matrix',
  focusArea: 'hero-transformation'
});

// Usar con tu servicio de IA preferido
const analysis = await aiService.analyze(proppPrompt);
```

## 📊 Visualización

```typescript
import { MethodologyVisualizer } from '@synapsis/film-methodologies';

const visualizer = new MethodologyVisualizer();

// Generar grafo de relaciones
const graph = visualizer.createRelationshipGraph([
  'propp-functions',
  'campbell-hero',
  'vogler-writer'
]);

// Exportar para D3.js o similar
const d3Data = graph.toD3Format();
```

## 🔄 Evolución Continua

El sistema permite proponer y validar nuevas metodologías:

```typescript
const evolution = {
  originalId: 'mulvey-male-gaze',
  evolutionType: 'extension',
  changes: [{
    aspect: 'scope',
    description: 'Incluir análisis de mirada no-binaria',
    impact: 'major'
  }],
  justification: 'Necesidad de incluir perspectivas queer contemporáneas'
};

service.proposeEvolution(evolution);
```

## 📚 Documentación Completa

Para documentación detallada de cada metodología:

```typescript
const docs = service.generateDocumentation('markdown');
// Genera un documento de 60,000+ palabras con todas las metodologías
```

## 🤝 Contribuir

¡Contribuciones bienvenidas! Por favor:

1. Fork el repositorio
2. Crea tu branch de feature (`git checkout -b feature/NuevaMetodologia`)
3. Commit tus cambios (`git commit -m 'Añadir metodología X'`)
4. Push al branch (`git push origin feature/NuevaMetodologia`)
5. Abre un Pull Request

## 📄 Licencia

MIT © SYNAPSIS Team

## 🙏 Agradecimientos

Este módulo es resultado de la investigación exhaustiva del equipo SYNAPSIS y la colaboración entre humanos e IAs para democratizar el conocimiento cinematográfico.

---

**¡Revolucionemos juntos el análisis cinematográfico!** 🎬✨
