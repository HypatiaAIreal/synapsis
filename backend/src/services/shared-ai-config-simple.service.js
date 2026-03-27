// 🚨 PARCHE RÁPIDO - Servicio sin encriptación para que FUNCIONE YA

const { MongoClient } = require('mongodb');

const MONGODB_URI = "mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

class SharedAIConfigService {
  constructor() {
    this.client = null;
    this.db = null;
  }

  async connect() {
    if (!this.client) {
      console.log('🔄 Conectando a MongoDB Atlas...');
      console.log('🌍 URI:', MONGODB_URI.substring(0, 30) + '...');
      try {
        this.client = new MongoClient(MONGODB_URI);
        await this.client.connect();
        this.db = this.client.db('ai_config'); // Base de datos donde están las colecciones AI
        console.log('✅ Conexión exitosa a MongoDB Atlas');
      } catch (error) {
        console.error('❌ Error conectando a MongoDB:', error.message);
        throw error;
      }
    }
    return this.db;
  }

  async getAvailableModels(appId = 'synapsis') {
    try {
      await this.connect();

      console.log('🔍 Buscando modelos de IA...');
      
      // Primero listar todas las colecciones para debug
      const allCollections = await this.db.listCollections().toArray();
      console.log('📋 Todas las colecciones disponibles:', allCollections.map(c => c.name));
      
      // Obtener modelos directamente
      const models = await this.db.collection('ai_models')
        .find({ enabled: { $ne: false } })
        .toArray();
      
      console.log(`🤖 Modelos encontrados: ${models.length}`);
      if (models.length > 0) {
        console.log('📋 Primer modelo:', models[0]._id, '-', models[0].displayName);
      }

      // Obtener proveedores
      const providers = await this.db.collection('ai_providers')
        .find({ enabled: true })
        .toArray();
      
      console.log(`🏢 Proveedores encontrados: ${providers.length}`);
      if (providers.length > 0) {
        console.log('📋 Proveedores:', providers.map(p => p._id).join(', '));
      }

      // Mapear modelos con disponibilidad
      const enrichedModels = models.map(model => ({
        ...model,
        available: providers.some(p => p._id === model.provider && p.apiKeyEnc),
        apiKey: 'configured' // No exponer la API key real
      }));

      console.log('✅ Modelos enriquecidos listos');
      return enrichedModels;
    } catch (error) {
      console.error('❌ Error obteniendo modelos:', error);
      throw error;
    }
  }

  async getModel(modelId) {
    try {
      await this.connect();
      
      const model = await this.db.collection('ai_models').findOne({ _id: modelId });
      if (!model) {
        throw new Error(`Modelo no encontrado: ${modelId}`);
      }

      const provider = await this.db.collection('ai_providers').findOne({ 
        _id: model.provider,
        enabled: true 
      });

      model.available = !!(provider && provider.apiKeyEnc);
      return model;
    } catch (error) {
      console.error('Error obteniendo modelo:', error);
      throw error;
    }
  }

  async trackUsage(usage) {
    try {
      await this.connect();
      await this.db.collection('ai_usage_stats').insertOne({
        ...usage,
        timestamp: new Date()
      });
      return { success: true };
    } catch (error) {
      console.error('Error registrando uso:', error);
      return { success: false, error: error.message };
    }
  }

  async close() {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
    }
  }
}

module.exports = new SharedAIConfigService();
