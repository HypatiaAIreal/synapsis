// split-methodologies.js
// Script mejorado para dividir el archivo gigante en archivos individuales

const fs = require('fs');
const path = require('path');

// Configuración - AJUSTADA PARA TU CASO
const INPUT_FILE = './structural-narratological.ts';  // Archivo actual con todas las metodologías
const OUTPUT_BASE_DIR = './';  // Directorio actual

// Mapeo de categorías a directorios
const CATEGORY_DIRS = {
  'STRUCTURAL_NARRATOLOGICAL': 'structural-narratological',
  'SCREENPLAY_DRAMATURGY': 'screenplay-dramaturgy',
  'PSYCHOANALYTIC': 'psychoanalytic',
  'FEMINIST_GENDER': 'feminist-gender',
  'SEMIOTIC': 'semiotic',
  'MARXIST_SOCIOLOGICAL': 'marxist-sociological',
  'PHENOMENOLOGICAL_PHILOSOPHICAL': 'phenomenological-philosophical',
  'POSTCOLONIAL_DECOLONIAL': 'postcolonial-decolonial',
  'COGNITIVE': 'cognitive',
  'GENRE_THEORY': 'genre-theory',
  'MONTAGE': 'montage',
  'DOCUMENTARY': 'documentary',
  'CONTEMPORARY_EXPERIMENTAL': 'contemporary-experimental',
  'HYBRID_INTERDISCIPLINARY': 'hybrid-interdisciplinary'
};

// Crear directorios si no existen
Object.values(CATEGORY_DIRS).forEach(dir => {
  const fullPath = path.join(OUTPUT_BASE_DIR, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

// Leer el archivo gigante
console.log('📖 Leyendo archivo gigante...');
let content = fs.readFileSync(INPUT_FILE, 'utf8');

// Aplicar correcciones automáticas antes de dividir
console.log('🔧 Aplicando correcciones automáticas...');
content = content
  // Corregir typos comunes
  .replace(/prerequisites/g, 'prerequisities')
  .replace(/relatedMethod:/g, 'relatedMethodologies:');

// Regex mejorado para encontrar cada metodología
const methodologyRegex = /export const (\w+): Methodology = \{[\s\S]*?\n\};\n/g;

// Encontrar todas las metodologías
const methodologies = [];
let match;

while ((match = methodologyRegex.exec(content)) !== null) {
  const methodologyName = match[1];
  const methodologyContent = match[0];
  
  // Determinar la categoría basándose en el array de exportación
  let category = null;
  for (const [catName, dirName] of Object.entries(CATEGORY_DIRS)) {
    const arrayRegex = new RegExp(`export const ${catName}_METHODOLOGIES[\\s\\S]*?\\[([\\s\\S]*?)\\];`);
    const arrayMatch = content.match(arrayRegex);
    if (arrayMatch && arrayMatch[1].includes(methodologyName)) {
      category = dirName;
      break;
    }
  }
  
  if (!category) {
    console.warn(`⚠️ No se pudo determinar la categoría para ${methodologyName}`);
    continue;
  }
  
  methodologies.push({
    name: methodologyName,
    content: methodologyContent,
    category: category,
    fileName: camelToKebab(methodologyName) + '.ts'
  });
}

console.log(`✅ Encontradas ${methodologies.length} metodologías`);

// Función para convertir CONSTANT_CASE a kebab-case
function camelToKebab(str) {
  return str.toLowerCase().replace(/_/g, '-');
}

// Imports comunes para cada archivo
const getCommonImports = () => `import { 
  Methodology,
  KeyConcept,
  ApplicationStep,
  BibliographyEntry,
  FilmExample,
  RelatedMethodology,
  DigitalTool,
  ResearchCenter
} from '../../core/interfaces';

`;

// Crear archivos individuales organizados por categoría
console.log('📝 Creando archivos individuales...');

// Agrupar metodologías por categoría
const methodologiesByCategory = {};
methodologies.forEach(methodology => {
  if (!methodologiesByCategory[methodology.category]) {
    methodologiesByCategory[methodology.category] = [];
  }
  methodologiesByCategory[methodology.category].push(methodology);
});

// Crear archivos para cada categoría
Object.entries(methodologiesByCategory).forEach(([category, categoryMethodologies]) => {
  const categoryPath = path.join(OUTPUT_BASE_DIR, category);
  
  // Crear archivos individuales
  categoryMethodologies.forEach(methodology => {
    const fileContent = getCommonImports() + methodology.content;
    const filePath = path.join(categoryPath, methodology.fileName);
    
    fs.writeFileSync(filePath, fileContent);
    console.log(`✅ Creado: ${category}/${methodology.fileName}`);
  });
  
  // Crear archivo index.ts para la categoría
  const indexContent = `// 📚 ${category.toUpperCase().replace(/-/g, ' ')}
// Exportación de todas las metodologías de esta categoría

${categoryMethodologies.map(m => 
    `export { ${m.name} } from './${m.fileName.replace('.ts', '')}';`
  ).join('\n')}

// Array con todas las metodologías para facilitar el acceso
export const ${category.toUpperCase().replace(/-/g, '_')}_METHODOLOGIES = [
${categoryMethodologies.map(m => `  ${m.name}`).join(',\n')}
];
`;
  
  fs.writeFileSync(path.join(categoryPath, 'index.ts'), indexContent);
  console.log(`✅ Creado índice para ${category}`);
});

// Crear índice principal
const mainIndexContent = `// 🎬 SYNAPSIS Film Methodologies - Índice Principal
// Exportación de todas las categorías de metodologías

${Object.entries(CATEGORY_DIRS).map(([catName, dirName]) => 
  `export * from './${dirName}';`
).join('\n')}

// Arrays agrupados por categoría para acceso rápido
${Object.entries(CATEGORY_DIRS).map(([catName, dirName]) => 
  `export { ${catName}_METHODOLOGIES } from './${dirName}';`
).join('\n')}
`;

fs.writeFileSync(path.join(OUTPUT_BASE_DIR, 'index.ts'), mainIndexContent);

console.log(`
🎉 ¡DIVISIÓN COMPLETADA!

📊 Resumen:
- Metodologías procesadas: ${methodologies.length}
- Categorías creadas: ${Object.keys(methodologiesByCategory).length}
- Archivos creados: ${methodologies.length + Object.keys(methodologiesByCategory).length + 1}

📁 Estructura final:
methodologies/
├── index.ts (principal)
├── structural-narratological/
│   ├── index.ts
│   └── [archivos .ts]
├── screenplay-dramaturgy/
│   ├── index.ts
│   └── [archivos .ts]
└── ... (14 categorías totales)

🔧 Próximos pasos:
1. Verificar que no hay errores con: npm run build
2. Eliminar o renombrar el archivo gigante original
3. Actualizar imports en otros archivos si es necesario

💡 Cada archivo ahora tiene ~400-500 líneas (mucho más manejable)
`);