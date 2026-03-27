import mongoose from 'mongoose';

// Connection options
const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  family: 4 // Use IPv4, skip trying IPv6
};

export async function connectDatabase(): Promise<void> {
  try {
    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
      throw new Error('MONGODB_URI not found in environment variables');
    }

    console.log('🔌 Conectando a MongoDB Atlas...');
    
    await mongoose.connect(mongoUri, mongoOptions);
    
    console.log('✅ Conectado a MongoDB Atlas exitosamente');
    
    // Handle connection events
    mongoose.connection.on('error', (error) => {
      console.error('💥 MongoDB connection error:', error);
    });
    
    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ MongoDB desconectado');
    });
    
    mongoose.connection.on('reconnected', () => {
      console.log('🔄 MongoDB reconectado');
    });
    
  } catch (error) {
    console.error('💥 Error conectando a MongoDB:', error);
    throw error;
  }
}

export async function disconnectDatabase(): Promise<void> {
  try {
    await mongoose.disconnect();
    console.log('👋 Desconectado de MongoDB');
  } catch (error) {
    console.error('💥 Error desconectando de MongoDB:', error);
    throw error;
  }
}

// Database health check
export async function isDatabaseConnected(): Promise<boolean> {
  return mongoose.connection.readyState === 1;
}

// Export mongoose for use in models
export { mongoose };