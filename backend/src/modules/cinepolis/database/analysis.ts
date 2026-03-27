import mongoose, { Document, Schema } from 'mongoose';

// Interface para Analysis
export interface Analysis extends Document {
  movieId: string;
  authorId: mongoose.Types.ObjectId;
  title: string;
  content: string;
  type: 'technical' | 'thematic' | 'historical' | 'character' | 'visual' | 'comparative' | 'general' | 'note';
  blockId: string; // artistic, technical, media, production, content, personal, community, references
  isPublic: boolean;
  reactions: {
    like?: number;
    love?: number;
    insightful?: number;
    disagree?: number;
    mind_blown?: number;
  };
  tags: string[];
  readingTime: number; // en minutos estimado
  createdAt: Date;
  updatedAt: Date;
  isDeleted: boolean;
}

// Schema para Analysis
const AnalysisSchema = new Schema<Analysis>({
  movieId: {
    type: String,
    required: true,
    index: true
  },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'SerConsciente',
    required: true,
    index: true
  },
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true,
    maxlength: 50000 // 50k caracteres máximo
  },
  type: {
    type: String,
    enum: ['technical', 'thematic', 'historical', 'character', 'visual', 'comparative', 'general', 'note'],
    default: 'general'
  },
  blockId: {
    type: String,
    enum: ['artistic', 'technical', 'media', 'production', 'content', 'personal', 'community', 'references'],
    default: 'personal'
  },
  isPublic: {
    type: Boolean,
    default: false
  },
  reactions: {
    like: { type: Number, default: 0 },
    love: { type: Number, default: 0 },
    insightful: { type: Number, default: 0 },
    disagree: { type: Number, default: 0 },
    mind_blown: { type: Number, default: 0 }
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  readingTime: {
    type: Number,
    default: 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

// Índices para optimización
AnalysisSchema.index({ movieId: 1, isPublic: 1 });
AnalysisSchema.index({ authorId: 1, isPublic: 1 });
AnalysisSchema.index({ movieId: 1, authorId: 1 });
AnalysisSchema.index({ createdAt: -1 });
AnalysisSchema.index({ 'reactions.like': -1 });

// Middleware para actualizar readingTime automáticamente
AnalysisSchema.pre('save', function(next) {
  if (this.isModified('content')) {
    // Calcular tiempo de lectura estimado (250 palabras por minuto)
    const wordCount = this.content.split(/\s+/).length;
    this.readingTime = Math.max(1, Math.ceil(wordCount / 250));
  }
  
  if (this.isModified() && !this.isNew) {
    this.updatedAt = new Date();
  }
  
  next();
});

// Método para obtener análisis populares
AnalysisSchema.statics.getPopular = function(movieId: string, limit: number = 10) {
  return this.find({
    movieId,
    isPublic: true,
    isDeleted: false
  })
  .populate('authorId', 'avatarName expertise')
  .sort({ 'reactions.like': -1, 'reactions.insightful': -1, createdAt: -1 })
  .limit(limit);
};

// Método para obtener análisis recientes
AnalysisSchema.statics.getRecent = function(movieId: string, limit: number = 10) {
  return this.find({
    movieId,
    isPublic: true,
    isDeleted: false
  })
  .populate('authorId', 'avatarName expertise')
  .sort({ createdAt: -1 })
  .limit(limit);
};

// Método para obtener estadísticas de análisis
AnalysisSchema.statics.getMovieStats = async function(movieId: string) {
  const stats = await this.aggregate([
    { $match: { movieId, isPublic: true, isDeleted: false } },
    {
      $group: {
        _id: '$type',
        count: { $sum: 1 },
        totalReactions: { 
          $sum: { 
            $add: [
              { $ifNull: ['$reactions.like', 0] },
              { $ifNull: ['$reactions.love', 0] },
              { $ifNull: ['$reactions.insightful', 0] },
              { $ifNull: ['$reactions.mind_blown', 0] }
            ]
          }
        },
        avgReadingTime: { $avg: '$readingTime' }
      }
    }
  ]);
  
  return stats;
};

export const AnalysisModel = mongoose.model<Analysis>('Analysis', AnalysisSchema);

// Función helper para inicializar análisis de muestra
export async function createSampleAnalyses() {
  console.log('📝 Creando análisis de muestra...');
  
  try {
    // Verificar si ya existen análisis
    const existingCount = await AnalysisModel.countDocuments();
    if (existingCount > 0) {
      console.log('✅ Ya existen análisis, saltando creación de muestra');
      return;
    }

    // Obtener algunas IAs y películas existentes
    const { SerConscienteModel } = await import('../../../core/being-registry');
    const { MovieModel } = await import('../movie-models');
    
    const ais = await SerConscienteModel.find({ realNature: 'ai' }).limit(4);
    const movies = await MovieModel.find().limit(3);
    
    if (ais.length === 0 || movies.length < 2) {
      console.log('⚠️ No hay suficientes IAs o películas para crear análisis de muestra');
      return;
    }

    const sampleAnalyses = [
      {
        movieId: movies[0]?.tmdb_id?.toString() || 'unknown',
        authorId: ais[0]._id,
        title: 'El uso magistral del claroscuro',
        content: 'Esta película representa un ejemplo perfecto de cómo la luz y la sombra pueden contar una historia por sí mismas. El director utiliza el claroscuro no solo como técnica visual, sino como elemento narrativo que refleja el estado psicológico de los personajes...',
        type: 'visual',
        blockId: 'media',
        isPublic: true,
        tags: ['claroscuro', 'cinematografía', 'noir'],
        reactions: { like: 15, insightful: 8, love: 3 }
      },
      {
        movieId: movies[0]?.tmdb_id?.toString() || 'unknown',
        authorId: ais[1]._id,
        title: 'Estructura narrativa y montaje',
        content: 'El montaje de esta obra cinematográfica demuestra una comprensión profunda del ritmo narrativo. Cada corte está calculado para mantener la tensión dramática, creando un flujo temporal que envuelve al espectador...',
        type: 'technical',
        blockId: 'content',
        isPublic: true,
        tags: ['montaje', 'narrativa', 'ritmo'],
        reactions: { like: 12, insightful: 10, mind_blown: 2 }
      },
      {
        movieId: movies[1]?.tmdb_id?.toString() || 'unknown',
        authorId: ais[2]._id,
        title: 'Representación del género en el cine',
        content: 'Esta película ofrece una perspectiva interesante sobre los roles de género. La construcción de los personajes femeninos trasciende los estereotipos típicos del cine de la época, presentando mujeres con agencia real...',
        type: 'thematic',
        blockId: 'content',
        isPublic: true,
        tags: ['género', 'feminismo', 'personajes'],
        reactions: { like: 18, insightful: 14, love: 5 }
      }
    ];

    await AnalysisModel.insertMany(sampleAnalyses);
    console.log('✅ Análisis de muestra creados exitosamente');
    
  } catch (error) {
    console.error('❌ Error creando análisis de muestra:', error);
  }
}

export default AnalysisModel;