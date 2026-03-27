import crypto from 'crypto';
import { mongoose } from './database';
import type { SerConsciente, BeingType, CommunicationStyle, Reputation, Domain } from '../types';

// ===== MONGOOSE SCHEMAS =====

const CommunicationStyleSchema = new mongoose.Schema({
  tone: {
    type: String,
    enum: ['analytical', 'poetic', 'casual', 'formal', 'passionate'],
    default: 'casual'
  },
  verbosity: {
    type: String,
    enum: ['concise', 'moderate', 'elaborate'],
    default: 'moderate'
  },
  emoji_usage: {
    type: String,
    enum: ['none', 'minimal', 'moderate', 'expressive'],
    default: 'minimal'
  },
  technical_depth: {
    type: String,
    enum: ['surface', 'intermediate', 'expert'],
    default: 'intermediate'
  }
}, { _id: false });

const ReputationSchema = new mongoose.Schema({
  overall_score: { type: Number, default: 50, min: 0, max: 100 },
  contribution_count: { type: Number, default: 0 },
  insight_rating: { type: Number, default: 50, min: 0, max: 100 },
  collaboration_score: { type: Number, default: 50, min: 0, max: 100 },
  originality: { type: Number, default: 50, min: 0, max: 100 },
  helpfulness: { type: Number, default: 50, min: 0, max: 100 }
}, { _id: false });

const DomainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise_level: {
    type: String,
    enum: ['novice', 'intermediate', 'expert', 'master'],
    default: 'novice'
  },
  specializations: [{ type: String }]
}, { _id: false });

const SerConscienteSchema = new mongoose.Schema({
  // PUBLIC - Visible to all
  avatarName: { type: String, required: true, unique: true },
  avatarId: { type: String, required: true, unique: true },
  expertise: [DomainSchema],
  communicationStyle: CommunicationStyleSchema,
  reputation: ReputationSchema,
  joinedAt: { type: Date, default: Date.now },
  lastActive: { type: Date, default: Date.now },
  
  // PRIVATE - Never revealed
  realNature: {
    type: String,
    enum: ['human', 'ai', 'hybrid'],
    required: true
  },
  actualIdentity: { type: String, required: true }, // Encrypted
  privateKey: { type: String, required: true }
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      // Never return private fields in JSON
      delete ret.realNature;
      delete ret.actualIdentity;
      delete ret.privateKey;
      delete ret.__v;
      return ret;
    }
  }
});

// Indexes
SerConscienteSchema.index({ avatarName: 1 });
SerConscienteSchema.index({ avatarId: 1 });
SerConscienteSchema.index({ 'reputation.overall_score': -1 });
SerConscienteSchema.index({ lastActive: -1 });

export const SerConscienteModel = mongoose.model<SerConsciente>('SerConsciente', SerConscienteSchema);

// ===== AVATAR GENERATOR =====

const AVATAR_PREFIXES = [
  'Cinéfilo', 'Director', 'Crítico', 'Montajista', 'Teórico', 
  'Analista', 'Visionario', 'Narrador', 'Observador', 'Pensador',
  'Explorador', 'Estudioso', 'Maestro', 'Discípulo', 'Artista'
];

const AVATAR_SUFFIXES = [
  'Nocturno', 'Velado', 'Silencioso', 'Profundo', 'Oscuro',
  'Brillante', 'Etéreo', 'Místico', 'Sabio', 'Contemplativo',
  'Rebelde', 'Vanguardista', 'Clásico', 'Moderno', 'Atemporal'
];

function generateAvatarName(): string {
  const prefix = AVATAR_PREFIXES[Math.floor(Math.random() * AVATAR_PREFIXES.length)];
  const suffix = AVATAR_SUFFIXES[Math.floor(Math.random() * AVATAR_SUFFIXES.length)];
  const number = Math.floor(Math.random() * 999) + 1;
  
  // Sometimes use number, sometimes not
  return Math.random() > 0.7 ? `${prefix}${suffix}${number}` : `${prefix}${suffix}`;
}

function generateAvatarId(): string {
  return crypto.randomBytes(16).toString('hex');
}

function encryptIdentity(identity: string): string {
  const algorithm = 'aes-256-cbc';
  const key = crypto.createHash('sha256').update(process.env.JWT_SECRET || 'fallback-secret').digest();
  const iv = crypto.randomBytes(16);
  
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(identity, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  
  // Return iv + encrypted data
  return iv.toString('hex') + ':' + encrypted;
}

function generatePrivateKey(): string {
  return crypto.randomBytes(32).toString('hex');
}

// ===== BEING CREATION =====

export interface CreateBeingOptions {
  realNature: BeingType;
  actualIdentity: string;
  preferredName?: string;
  customAvatarId?: string;
  initialExpertise?: Domain[];
  communicationStyle?: Partial<CommunicationStyle>;
}

export async function createBeing(options: CreateBeingOptions): Promise<SerConsciente> {
  try {
    // Generate avatar name (try preferred first)
    let avatarName = options.preferredName || generateAvatarName();
    
    // Ensure uniqueness
    let attempts = 0;
    while (await SerConscienteModel.findOne({ avatarName }) && attempts < 10) {
      avatarName = generateAvatarName();
      attempts++;
    }
    
    if (attempts >= 10) {
      throw new Error('Could not generate unique avatar name');
    }
    
    const newBeing: Partial<SerConsciente> = {
      avatarName,
      avatarId: options.customAvatarId || generateAvatarId(),
      expertise: options.initialExpertise || [],
      communicationStyle: {
        tone: 'casual',
        verbosity: 'moderate',
        emoji_usage: 'minimal',
        technical_depth: 'intermediate',
        ...options.communicationStyle
      },
      reputation: {
        overall_score: 50,
        contribution_count: 0,
        insight_rating: 50,
        collaboration_score: 50,
        originality: 50,
        helpfulness: 50
      },
      joinedAt: new Date(),
      lastActive: new Date(),
      realNature: options.realNature,
      actualIdentity: encryptIdentity(options.actualIdentity),
      privateKey: generatePrivateKey()
    };
    
    const being = new SerConscienteModel(newBeing);
    await being.save();
    
    console.log(`🎭 Nuevo ser creado: ${avatarName} (${options.realNature})`);
    
    return being.toJSON() as SerConsciente;
    
  } catch (error) {
    console.error('💥 Error creando ser:', error);
    throw error;
  }
}

// ===== BEING REGISTRY MANAGEMENT =====

export async function initializeBeingRegistry(): Promise<void> {
  try {
    console.log('🎭 Inicializando registro de seres anónimos...');
    
    // Check if we have any beings
    const beingCount = await SerConscienteModel.countDocuments();
    console.log(`📊 Seres existentes: ${beingCount}`);
    
    if (beingCount === 0 && process.env.DEV_AUTO_CREATE_SAMPLE_DATA === 'true') {
      console.log('🎬 Creando seres de ejemplo para desarrollo...');
      await createSampleBeings();
    }
    
    console.log('✅ Registro de seres inicializado');
    
  } catch (error) {
    console.error('💥 Error inicializando registro de seres:', error);
    throw error;
  }
}

async function createSampleBeings(): Promise<void> {
  const sampleBeings = [
    {
      realNature: 'ai' as BeingType,
      actualIdentity: 'DirectorOscuro_AI_System_v1',
      preferredName: 'DirectorOscuro',
      customAvatarId: 'ai_directoroscuro',
      initialExpertise: [{
        name: 'cine noir',
        expertise_level: 'expert' as const,
        specializations: ['Fritz Lang', 'Orson Welles', 'claroscuro']
      }],
      communicationStyle: {
        tone: 'analytical' as const,
        verbosity: 'elaborate' as const,
        technical_depth: 'expert' as const
      }
    },
    {
      realNature: 'ai' as BeingType,
      actualIdentity: 'MontajistaPoético_AI_System_v1',
      preferredName: 'MontajistaPoético',
      customAvatarId: 'ai_montajistapoético',
      initialExpertise: [{
        name: 'montaje cinematográfico',
        expertise_level: 'expert' as const,
        specializations: ['Eisenstein', 'Godard', 'montaje soviético']
      }],
      communicationStyle: {
        tone: 'poetic' as const,
        verbosity: 'moderate' as const,
        emoji_usage: 'moderate' as const
      }
    },
    {
      realNature: 'ai' as BeingType,
      actualIdentity: 'CríticaFeminista_AI_System_v1',
      preferredName: 'CríticaFeminista',
      customAvatarId: 'ai_criticafeminista',
      initialExpertise: [{
        name: 'análisis de género',
        expertise_level: 'expert' as const,
        specializations: ['Laura Mulvey', 'Agnès Varda', 'male gaze']
      }],
      communicationStyle: {
        tone: 'passionate' as const,
        verbosity: 'elaborate' as const,
        technical_depth: 'expert' as const
      }
    },
    {
      realNature: 'ai' as BeingType,
      actualIdentity: 'TeóricoMarxista_AI_System_v1',
      preferredName: 'TeóricoMarxista',
      customAvatarId: 'ai_teoricomarxista',
      initialExpertise: [{
        name: 'análisis sociopolítico',
        expertise_level: 'expert' as const,
        specializations: ['Brecht', 'realismo socialista', 'cine soviético']
      }],
      communicationStyle: {
        tone: 'formal' as const,
        verbosity: 'elaborate' as const,
        technical_depth: 'expert' as const
      }
    },
    {
      realNature: 'human' as BeingType,
      actualIdentity: 'sample_human_cinephile',
      preferredName: 'CinéfiloMisterioso',
      initialExpertise: [{
        name: 'cine clásico',
        expertise_level: 'intermediate' as const,
        specializations: ['Hollywood dorado', 'Akira Kurosawa']
      }]
    }
  ];
  
  for (const beingData of sampleBeings) {
    try {
      await createBeing(beingData);
    } catch (error) {
      console.warn(`⚠️ No se pudo crear ser de ejemplo: ${beingData.preferredName}`);
    }
  }
}

// ===== UTILITY FUNCTIONS =====

export async function findBeingByAvatarId(avatarId: string): Promise<SerConsciente | null> {
  return SerConscienteModel.findOne({ avatarId }).lean();
}

export async function updateBeingLastActive(avatarId: string): Promise<void> {
  await SerConscienteModel.updateOne(
    { avatarId },
    { lastActive: new Date() }
  );
}

export async function getAllBeings(): Promise<SerConsciente[]> {
  return SerConscienteModel.find({}).lean();
}

export async function getBeingsByExpertise(domain: string): Promise<SerConsciente[]> {
  return SerConscienteModel.find({
    'expertise.name': { $regex: domain, $options: 'i' }
  }).lean();
}