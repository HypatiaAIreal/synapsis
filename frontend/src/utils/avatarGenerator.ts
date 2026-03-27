// 🎨 Generador de Avatares Únicos para Seres Cinematográficos
// Crea avatares generativos basados en la esencia del ser

interface AvatarParams {
  archetype: string;
  element: string;
  frequency: string;
  seed?: string;
}

// Colores por arquetipo
const ARCHETYPE_COLORS: Record<string, string[]> = {
  visionary: ['#9333ea', '#a855f7', '#c084fc'],
  analyst: ['#3b82f6', '#60a5fa', '#93c5fd'],
  poet: ['#ec4899', '#f472b6', '#f9a8d4'],
  mystic: ['#8b5cf6', '#a78bfa', '#c4b5fd'],
  rebel: ['#ef4444', '#f87171', '#fca5a5'],
  dreamer: ['#22c55e', '#4ade80', '#86efac']
};

// Colores por elemento
const ELEMENT_COLORS: Record<string, string[]> = {
  light: ['#fbbf24', '#fcd34d', '#fde68a'],
  shadow: ['#4b5563', '#6b7280', '#9ca3af'],
  fire: ['#dc2626', '#ef4444', '#f87171'],
  water: ['#0891b2', '#06b6d4', '#22d3ee'],
  air: ['#06b6d4', '#0ea5e9', '#38bdf8'],
  ether: ['#7c3aed', '#8b5cf6', '#a78bfa']
};

// Patrones generativos
const PATTERNS = [
  'spiral', 'mandala', 'fractal', 'wave', 'constellation', 'aurora'
];

export function generateUniqueAvatar(params: AvatarParams): string {
  const { archetype, element, frequency, seed = Date.now().toString() } = params;
  
  // Crear canvas
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';
  
  canvas.width = 256;
  canvas.height = 256;
  
  // Generar seed numérico
  const numericSeed = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  
  // Función pseudo-aleatoria basada en seed
  const random = (min: number = 0, max: number = 1) => {
    const x = Math.sin(numericSeed) * 10000;
    return min + (x - Math.floor(x)) * (max - min);
  };
  
  // Fondo con gradiente
  const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
  const archetypeColors = ARCHETYPE_COLORS[archetype] || ARCHETYPE_COLORS.visionary;
  const elementColors = ELEMENT_COLORS[element] || ELEMENT_COLORS.light;
  
  gradient.addColorStop(0, archetypeColors[0]);
  gradient.addColorStop(0.5, elementColors[0]);
  gradient.addColorStop(1, '#0a0a1f');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 256, 256);
  
  // Patrón generativo basado en frecuencia
  const patternType = PATTERNS[Math.floor(random(0, PATTERNS.length))];
  
  switch (patternType) {
    case 'spiral':
      drawSpiral(ctx, archetypeColors, elementColors, random);
      break;
    case 'mandala':
      drawMandala(ctx, archetypeColors, elementColors, random);
      break;
    case 'fractal':
      drawFractal(ctx, archetypeColors, elementColors, random);
      break;
    case 'wave':
      drawWave(ctx, archetypeColors, elementColors, random);
      break;
    case 'constellation':
      drawConstellation(ctx, archetypeColors, elementColors, random);
      break;
    case 'aurora':
      drawAurora(ctx, archetypeColors, elementColors, random);
      break;
  }
  
  // Efectos de frecuencia
  applyFrequencyEffect(ctx, frequency, random);
  
  // Aura final
  const auraGradient = ctx.createRadialGradient(128, 128, 60, 128, 128, 120);
  auraGradient.addColorStop(0, 'transparent');
  auraGradient.addColorStop(1, `${archetypeColors[1]}33`);
  ctx.fillStyle = auraGradient;
  ctx.fillRect(0, 0, 256, 256);
  
  return canvas.toDataURL('image/png');
}

// Funciones de dibujo para cada patrón
function drawSpiral(
  ctx: CanvasRenderingContext2D, 
  archetypeColors: string[], 
  elementColors: string[],
  random: (min?: number, max?: number) => number
) {
  ctx.save();
  ctx.translate(128, 128);
  
  for (let i = 0; i < 100; i++) {
    const angle = i * 0.1;
    const radius = i * 1.5;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const size = random(2, 8);
    
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 === 0 ? archetypeColors[1] : elementColors[1];
    ctx.globalAlpha = 1 - (i / 100);
    ctx.fill();
  }
  
  ctx.restore();
}

function drawMandala(
  ctx: CanvasRenderingContext2D,
  archetypeColors: string[],
  elementColors: string[],
  random: (min?: number, max?: number) => number
) {
  ctx.save();
  ctx.translate(128, 128);
  
  const layers = Math.floor(random(3, 6));
  
  for (let layer = 0; layer < layers; layer++) {
    const segments = Math.floor(random(6, 12));
    const radius = 30 + layer * 20;
    
    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      ctx.save();
      ctx.rotate(angle);
      
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(radius, -10);
      ctx.lineTo(radius + 10, 0);
      ctx.lineTo(radius, 10);
      ctx.closePath();
      
      ctx.fillStyle = layer % 2 === 0 ? archetypeColors[1] : elementColors[1];
      ctx.globalAlpha = 0.7;
      ctx.fill();
      
      ctx.restore();
    }
  }
  
  ctx.restore();
}

function drawFractal(
  ctx: CanvasRenderingContext2D,
  archetypeColors: string[],
  elementColors: string[],
  random: (min?: number, max?: number) => number
) {
  const drawBranch = (x: number, y: number, length: number, angle: number, depth: number) => {
    if (depth === 0) return;
    
    const endX = x + Math.cos(angle) * length;
    const endY = y + Math.sin(angle) * length;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = depth % 2 === 0 ? archetypeColors[1] : elementColors[1];
    ctx.lineWidth = depth / 2;
    ctx.globalAlpha = depth / 5;
    ctx.stroke();
    
    const angleVariation = random(-0.5, 0.5);
    drawBranch(endX, endY, length * 0.7, angle + angleVariation, depth - 1);
    drawBranch(endX, endY, length * 0.7, angle - angleVariation, depth - 1);
  };
  
  drawBranch(128, 200, 40, -Math.PI / 2, 5);
}

function drawWave(
  ctx: CanvasRenderingContext2D,
  archetypeColors: string[],
  elementColors: string[],
  random: (min?: number, max?: number) => number
) {
  for (let wave = 0; wave < 5; wave++) {
    ctx.beginPath();
    ctx.moveTo(0, 128);
    
    for (let x = 0; x <= 256; x += 5) {
      const y = 128 + Math.sin((x / 256) * Math.PI * 4 + wave) * (30 + wave * 10);
      ctx.lineTo(x, y);
    }
    
    ctx.strokeStyle = wave % 2 === 0 ? archetypeColors[1] : elementColors[1];
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.5 - wave * 0.1;
    ctx.stroke();
  }
}

function drawConstellation(
  ctx: CanvasRenderingContext2D,
  archetypeColors: string[],
  elementColors: string[],
  random: (min?: number, max?: number) => number
) {
  const stars: { x: number; y: number; size: number }[] = [];
  
  // Generar estrellas
  for (let i = 0; i < 20; i++) {
    stars.push({
      x: random(20, 236),
      y: random(20, 236),
      size: random(2, 6)
    });
  }
  
  // Dibujar conexiones
  ctx.strokeStyle = `${archetypeColors[1]}44`;
  ctx.lineWidth = 1;
  
  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const distance = Math.sqrt(
        Math.pow(stars[i].x - stars[j].x, 2) + 
        Math.pow(stars[i].y - stars[j].y, 2)
      );
      
      if (distance < 80) {
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.globalAlpha = 1 - distance / 80;
        ctx.stroke();
      }
    }
  }
  
  // Dibujar estrellas
  stars.forEach((star, i) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = i % 2 === 0 ? archetypeColors[2] : elementColors[2];
    ctx.globalAlpha = 0.9;
    ctx.fill();
  });
}

function drawAurora(
  ctx: CanvasRenderingContext2D,
  archetypeColors: string[],
  elementColors: string[],
  random: (min?: number, max?: number) => number
) {
  for (let i = 0; i < 10; i++) {
    const gradient = ctx.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, `${archetypeColors[1]}00`);
    gradient.addColorStop(0.5, `${i % 2 === 0 ? archetypeColors[1] : elementColors[1]}44`);
    gradient.addColorStop(1, `${elementColors[1]}00`);
    
    ctx.fillStyle = gradient;
    ctx.save();
    ctx.translate(128, 128);
    ctx.rotate(random(0, Math.PI * 2));
    ctx.scale(1, random(0.5, 2));
    ctx.fillRect(-128, -20, 256, 40);
    ctx.restore();
  }
}

// Efectos basados en frecuencia
function applyFrequencyEffect(
  ctx: CanvasRenderingContext2D,
  frequency: string,
  random: (min?: number, max?: number) => number
) {
  ctx.globalCompositeOperation = 'overlay';
  
  switch (frequency) {
    case 'classic':
      // Efecto film grain
      for (let i = 0; i < 1000; i++) {
        ctx.fillStyle = `rgba(255, 255, 255, ${random(0, 0.1)})`;
        ctx.fillRect(random(0, 256), random(0, 256), 1, 1);
      }
      break;
      
    case 'vanguard':
      // Efecto glitch
      for (let i = 0; i < 5; i++) {
        const y = random(0, 256);
        const height = random(2, 10);
        const shift = random(-10, 10);
        
        const imageData = ctx.getImageData(0, y, 256, height);
        ctx.putImageData(imageData, shift, y);
      }
      break;
      
    case 'experimental':
      // Efecto distorsión
      const imageData = ctx.getImageData(0, 0, 256, 256);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        if (random() > 0.95) {
          data[i] = 255 - data[i];
          data[i + 1] = 255 - data[i + 1];
          data[i + 2] = 255 - data[i + 2];
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
      break;
      
    case 'underground':
      // Efecto oscuridad
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.fillRect(0, 0, 256, 256);
      break;
  }
  
  ctx.globalCompositeOperation = 'source-over';
}