// 🌌 Generador de Nombres Cósmicos para Seres Cinematográficos
// Crea nombres únicos basados en elementos cinematográficos y cósmicos

interface NameParams {
  archetype?: string;
  element?: string;
  frequency?: string;
  style?: 'mystical' | 'technical' | 'poetic' | 'abstract';
}

// Prefijos por arquetipo
const ARCHETYPE_PREFIXES: Record<string, string[]> = {
  visionary: ['Lumi', 'Astro', 'Cosmo', 'Stellax', 'Nebul', 'Quant', 'Chroma', 'Prism'],
  analyst: ['Data', 'Logic', 'Pixel', 'Frame', 'Sync', 'Meta', 'Code', 'Grid'],
  poet: ['Luna', 'Lyra', 'Echo', 'Muse', 'Verso', 'Rhyme', 'Flow', 'Soul'],
  mystic: ['Umbra', 'Mystic', 'Shadow', 'Void', 'Zen', 'Karma', 'Aura', 'Spirit'],
  rebel: ['Chaos', 'Riot', 'Punk', 'Neon', 'Volt', 'Flux', 'Storm', 'Blaze'],
  dreamer: ['Dream', 'Cloud', 'Float', 'Drift', 'Wisp', 'Haze', 'Mist', 'Bubble']
};

// Sufijos por elemento
const ELEMENT_SUFFIXES: Record<string, string[]> = {
  light: ['nova', 'ray', 'glow', 'shine', 'beam', 'spark', 'flash', 'lux'],
  shadow: ['shade', 'dark', 'noir', 'void', 'dusk', 'night', 'eclipse', 'phantom'],
  fire: ['flame', 'burn', 'ember', 'blaze', 'pyre', 'ignite', 'torch', 'flare'],
  water: ['wave', 'flow', 'tide', 'drop', 'stream', 'ocean', 'ripple', 'cascade'],
  air: ['wind', 'breeze', 'gale', 'drift', 'float', 'sky', 'zephyr', 'whisper'],
  ether: ['void', 'space', 'quantum', 'phase', 'field', 'plane', 'realm', 'dimension']
};

// Conectores opcionales
const CONNECTORS = ['', '-', '_', '.', '·'];

// Modificadores por frecuencia
const FREQUENCY_MODIFIERS: Record<string, string[]> = {
  classic: ['Classic', 'Prime', 'Origin', 'Pure', 'True', 'Core'],
  vanguard: ['Neo', 'New', 'Next', 'Future', 'Ultra', 'Hyper'],
  experimental: ['X', 'Ex', 'Test', 'Beta', 'Lab', 'Proto'],
  underground: ['Sub', 'Under', 'Deep', 'Hidden', 'Secret', 'Dark']
};

// Números y símbolos opcionales
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const SYMBOLS = ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'λ', 'μ', 'ξ', 'π', 'σ', 'φ', 'ψ', 'ω'];

export function cosmicNameGenerator(params: NameParams = {}): string {
  const { 
    archetype = randomChoice(Object.keys(ARCHETYPE_PREFIXES)),
    element = randomChoice(Object.keys(ELEMENT_SUFFIXES)),
    frequency = randomChoice(Object.keys(FREQUENCY_MODIFIERS)),
    style = randomChoice(['mystical', 'technical', 'poetic', 'abstract'])
  } = params;
  
  let name = '';
  
  switch (style) {
    case 'mystical':
      name = generateMysticalName(archetype, element, frequency);
      break;
    case 'technical':
      name = generateTechnicalName(archetype, element, frequency);
      break;
    case 'poetic':
      name = generatePoeticName(archetype, element, frequency);
      break;
    case 'abstract':
      name = generateAbstractName(archetype, element, frequency);
      break;
  }
  
  return name;
}

// Generadores específicos por estilo
function generateMysticalName(archetype: string, element: string, frequency: string): string {
  const prefix = randomChoice(ARCHETYPE_PREFIXES[archetype] || ['Mystic']);
  const suffix = randomChoice(ELEMENT_SUFFIXES[element] || ['soul']);
  const modifier = Math.random() > 0.7 ? randomChoice(FREQUENCY_MODIFIERS[frequency] || ['']) : '';
  
  if (modifier) {
    return `${modifier}${prefix}${capitalize(suffix)}`;
  }
  
  return `${prefix}${randomChoice(CONNECTORS)}${suffix}`;
}

function generateTechnicalName(archetype: string, element: string, frequency: string): string {
  const prefix = randomChoice(ARCHETYPE_PREFIXES[archetype] || ['System']);
  const suffix = randomChoice(ELEMENT_SUFFIXES[element] || ['core']);
  const number = Math.random() > 0.5 ? randomChoice(NUMBERS) + randomChoice(NUMBERS) + randomChoice(NUMBERS) : '';
  
  return `${prefix}_${suffix}${number}`;
}

function generatePoeticName(archetype: string, element: string, frequency: string): string {
  const prefix = randomChoice(ARCHETYPE_PREFIXES[archetype] || ['Silent']);
  const suffix = randomChoice(ELEMENT_SUFFIXES[element] || ['whisper']);
  const connector = randomChoice(['of', 'the', 'and']);
  
  if (Math.random() > 0.5) {
    return `${prefix} ${connector} ${capitalize(suffix)}`;
  }
  
  return `${prefix}${capitalize(suffix)}`;
}

function generateAbstractName(archetype: string, element: string, frequency: string): string {
  const base = randomChoice([
    ...ARCHETYPE_PREFIXES[archetype] || [],
    ...ELEMENT_SUFFIXES[element] || []
  ]);
  
  const symbol = Math.random() > 0.6 ? randomChoice(SYMBOLS) : '';
  const number = Math.random() > 0.7 ? randomChoice(NUMBERS) : '';
  
  return `${symbol}${base}${number}`;
}

// Generador de nombres completamente aleatorios
export function generateRandomCosmicName(): string {
  const styles = ['mystical', 'technical', 'poetic', 'abstract'];
  const style = randomChoice(styles) as 'mystical' | 'technical' | 'poetic' | 'abstract';
  
  return cosmicNameGenerator({ style });
}

// Generador de nombres temáticos
export function generateThemedName(theme: string): string {
  const themes: Record<string, NameParams> = {
    'noir': {
      archetype: 'mystic',
      element: 'shadow',
      frequency: 'underground',
      style: 'mystical'
    },
    'scifi': {
      archetype: 'analyst',
      element: 'ether',
      frequency: 'vanguard',
      style: 'technical'
    },
    'arthouse': {
      archetype: 'poet',
      element: 'light',
      frequency: 'experimental',
      style: 'poetic'
    },
    'action': {
      archetype: 'rebel',
      element: 'fire',
      frequency: 'vanguard',
      style: 'technical'
    },
    'fantasy': {
      archetype: 'dreamer',
      element: 'air',
      frequency: 'classic',
      style: 'mystical'
    }
  };
  
  const params = themes[theme] || {};
  return cosmicNameGenerator(params);
}

// Validador de nombres únicos
export function isNameUnique(name: string, existingNames: string[]): boolean {
  const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  return !existingNames.some(existing => {
    const normalizedExisting = existing.toLowerCase().replace(/[^a-z0-9]/g, '');
    return normalizedExisting === normalizedName;
  });
}

// Generador de variaciones
export function generateNameVariations(baseName: string, count: number = 5): string[] {
  const variations: string[] = [baseName];
  
  for (let i = 0; i < count - 1; i++) {
    const variation = Math.random();
    
    if (variation < 0.25) {
      // Añadir número
      variations.push(`${baseName}${randomChoice(NUMBERS)}${randomChoice(NUMBERS)}`);
    } else if (variation < 0.5) {
      // Añadir símbolo
      variations.push(`${randomChoice(SYMBOLS)}${baseName}`);
    } else if (variation < 0.75) {
      // Cambiar capitalización
      variations.push(alternateCase(baseName));
    } else {
      // Añadir modificador
      const modifiers = ['New', 'Alt', 'Neo', 'True', 'Real'];
      variations.push(`${randomChoice(modifiers)}${baseName}`);
    }
  }
  
  return [...new Set(variations)]; // Eliminar duplicados
}

// Funciones auxiliares
function randomChoice<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function alternateCase(str: string): string {
  return str.split('').map((char, i) => 
    i % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
  ).join('');
}

// Exportar función principal y utilidades
export default cosmicNameGenerator;