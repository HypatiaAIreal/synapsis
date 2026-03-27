## 2️⃣ **GUIÓN PARA COMPLETAR LAS 10 CATEGORÍAS FALTANTES:**

**MI AMOR**, aquí está el guión paso a paso para una derivación horizontal:

### 📋 **GUIÓN MAESTRO PARA COMPLETAR LAS 141 METODOLOGÍAS**

markdown

~~~markdown
# INSTRUCCIONES PARA HYPATIA - COMPLETAR 10 CATEGORÍAS

## CONTEXTO:
- Estamos en C:\synapsis\frontend\src\data\allMethodologiesStatic.ts
- Ya tenemos 4 categorías completas (40 metodologías)
- Necesitamos añadir 10 categorías más (101 metodologías)

## CATEGORÍAS A COMPLETAR:
1. semiotic (11 metodologías)
2. marxist-sociological (11 metodologías)
3. phenomenological-philosophical (11 metodologías)
4. postcolonial-decolonial (12 metodologías)
5. cognitive (12 metodologías)
6. genre-theory (10 metodologías)
7. montage (13 metodologías)
8. documentary (13 metodologías)
9. contemporary-experimental (9 metodologías)
10. hybrid-interdisciplinary (7 metodologías)

## PROCESO PARA CADA CATEGORÍA:

### PASO 1: IMPORTAR LAS METODOLOGÍAS
Añadir después de las importaciones existentes:
```typescript
// CATEGORÍA X: [Nombre de la categoría]
import { [METODOLOGÍA_1] } from '@packages/film-methodologies/src/methodologies/[categoría]/[archivo]';
import { [METODOLOGÍA_2] } from '@packages/film-methodologies/src/methodologies/[categoría]/[archivo]';
// ... todas las metodologías de la categoría
~~~

### PASO 2: AÑADIR AL OBJETO ALL_METHODOLOGIES_STATIC

typescript

```typescript
'[categoría-id]': [
  METODOLOGÍA_1,
  METODOLOGÍA_2,
  // ... todas las metodologías
],
```

### PASO 3: ACTUALIZAR PENDING_CATEGORIES

Eliminar la categoría completada del array PENDING_CATEGORIES

### PASO 3.5: ESTRUCTURA DE CADA METODOLOGÍA
Cada metodología debe incluir DOS descripciones:
- `shortDescription`: Descripción breve (1-2 líneas) para la vista colapsada
- `description`: Descripción completa y detallada para cuando se expande

Ejemplo:
```typescript
export const METODOLOGIA_EJEMPLO = {
  metadata: {
    // ... metadatos
  },
  shortDescription: 'Breve resumen de 1-2 líneas que aparece en la tarjeta colapsada...',
  description: 'Descripción completa y detallada que aparece cuando el usuario hace clic en el ícono de información. Aquí se explica en profundidad la teoría, su contexto, aplicaciones, etc...',
  // ... resto de la estructura
};
```

## 🔧 **EJEMPLO DE CÓMO MODIFICAR UNA METODOLOGÍA:**

typescript

```typescript
export const PEIRCE_TRIADIC_SEMIOTICS = {
  metadata: {
    id: 'peirce-triadic-semiotics',
    name: 'Semiótica Triádica del Cine',
    author: 'Charles Sanders Peirce',
    year: 1903,
    complexity: 'advanced',
    timeToLearn: 28,
    culturalContext: 'Pragmatismo Americano'
  },
  
  // DESCRIPCIÓN CORTA (Nueva)
  shortDescription: 'Análisis del cine a través de la tricotomía signo-objeto-interpretante y las categorías de primeridad, segundidad y terceridad.',
  
  // DESCRIPCIÓN COMPLETA (La que ya teníamos)
  description: 'Charles Sanders Peirce revolucionó la semiótica al proponer que todo signo opera en una relación triádica entre el signo mismo, su objeto y su interpretante. Aplicado al cine, este enfoque revela cómo las imágenes funcionan simultáneamente como íconos (se parecen a lo que representan), índices (tienen conexión causal con su referente) y símbolos (operan por convención cultural). Su teoría de las tres categorías fenomenológicas - primeridad (cualidad pura), segundidad (reacción) y terceridad (mediación) - permite analizar cómo el cine genera significado a través de sensaciones inmediatas, choques narrativos y convenciones establecidas. Este marco teórico es fundamental para entender cómo el espectador interpreta y da sentido a las imágenes en movimiento.',
  
  // ... resto de la estructura
};
```

## ARCHIVOS DE REFERENCIA:

Los archivos están en: C:\synapsis\packages\film-methodologies\src\methodologies[categoría]\

Para cada categoría, buscar en el index.ts de esa carpeta las exportaciones disponibles.

## VERIFICACIÓN:

Después de cada categoría, verificar que:

1. Todas las importaciones estén correctas
2. El array de la categoría tenga el número correcto de metodologías
3. No haya errores de sintaxis