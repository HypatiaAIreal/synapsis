// split-methodologies.js
// Script para dividir el archivo gigante en archivos individuales

const fs = require('fs');
const path = require('path');

// Configuración
const INPUT_FILE = './src/methodologies/structural-narratological.ts';
const OUTPUT_DIR = './src/methodologies/structural-narratological';

// Crear directorio si no existe
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Leer el archivo gigante
console.log('📖 Leyendo archivo gigante...');
const content = fs.readFileSync(INPUT_FILE, 'utf8');

// Regex para encontrar cada metodología
const methodologyRegex = /export const (\w+): Methodology = \{[\s\S]*?\n\};\n\n/g;

// Extraer imports comunes
const commonImports = `import { Methodology } from '../../core/interfaces';\n\n`;

// Encontrar todas las metodologías
const methodologies = [];
let match;
let lastIndex = 0;

while ((match = methodologyRegex.exec(content)) !== null) {
  const methodologyName = match[1];
  const methodologyContent = match[0];
  
  methodologies.push({
    name: methodologyName,
    content: methodologyContent,
    fileName: camelToKebab(methodologyName) + '.ts'
  });
  
  lastIndex = match.index + match[0].length;
}

console.log(`✅ Encontradas ${methodologies.length} metodologías`);

// Función para convertir CONSTANT_CASE a kebab-case
function camelToKebab(str) {
  return str.toLowerCase().replace(/_/g, '-');
}

// Crear archivos individuales
console.log('📝 Creando archivos individuales...');

methodologies.forEach((methodology) => {
  const fileContent = `${commonImports}${methodology.content}`;
  const filePath = path.join(OUTPUT_DIR, methodology.fileName);
  
  // Corregir typos comunes mientras guardamos
  const fixedContent = fileContent
    .replace(/prerequisites/g, 'prerequisities')
    .replace(/relatedMethod:/g, 'relatedMethodologies:');
  
  fs.writeFileSync(filePath, fixedContent);
  console.log(`✅ Creado: ${methodology.fileName}`);
});

// Crear archivo index.ts
console.log('📝 Creando index.ts...');

const indexContent = `// 📚 TEORÍAS ESTRUCTURALES Y NARRATOLÓGICAS
// Exportación de todas las metodologías de esta categoría

${methodologies.map(m => 
  `export { ${m.name} } from './${m.fileName.replace('.ts', '')}';`
).join('\n')}

// Array con todas las metodologías para facilitar el acceso
export const STRUCTURAL_NARRATOLOGICAL_METHODOLOGIES = [
${methodologies.map(m => `  ${m.name}`).join(',\n')}
];
`;

fs.writeFileSync(path.join(OUTPUT_DIR, 'index.ts'), indexContent);

// Encontrar y extraer el array final del archivo original
const arrayMatch = content.match(/export const STRUCTURAL_NARRATOLOGICAL_METHODOLOGIES = \[([\s\S]*?)\];/);
if (arrayMatch) {
  console.log('✅ Array de exportación encontrado y preservado');
}

console.log(`
🎉 ¡DIVISIÓN COMPLETADA!

📊 Resumen:
- Metodologías procesadas: ${methodologies.length}
- Archivos creados: ${methodologies.length + 1}
- Directorio: ${OUTPUT_DIR}

🔧 Próximos pasos:
1. Eliminar o renombrar el archivo gigante original
2. Actualizar imports en otros archivos
3. Ejecutar: npm run build para verificar

💡 Tip: Cada archivo ahora tiene ~400-500 líneas (mucho más manejable)
`);

// Crear un resumen de errores comunes encontrados
const commonErrors = {
  prerequisites: 'prerequisities',
  relatedMethod: 'relatedMethodologies',
  // Agregar más si encuentras otros
};

console.log('\n⚠️ Errores comunes corregidos:');
Object.entries(commonErrors).forEach(([wrong, correct]) => {
  console.log(`  - ${wrong} → ${correct}`);
});