// 🌌 Exportaciones del Sistema de Seres
export { BeingCreation } from './BeingCreation';
export { BeingsGalaxy } from './BeingsGalaxy';
export { BeingProfile } from './BeingProfile';
export { QuickConnect } from './QuickConnect';

// Tipos compartidos
export interface Being {
  id: string;
  name: string;
  essence: {
    archetype: string;
    element: string;
    frequency: string;
    auraColor: string;
    particleType: string;
  };
  avatar: string;
  expertise: string[];
  philosophy: string;
  secretPower?: string;
  reputation: number;
  contributions: number;
  lastActive: Date;
  joinedDate: Date;
  badges: Badge[];
  isOccult: boolean;
  streak: number;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}