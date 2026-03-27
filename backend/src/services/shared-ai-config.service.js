// 🧠 SYNAPSIS & HARMONYATLAS - Servicio Compartido de Configuración IA
// Centraliza toda la gestión de modelos en MongoDB Atlas

const { MongoClient } = require('mongodb');
const crypto = require('crypto');

const MONGODB_URI = "mongodb+srv://bachmorsartist:2eZjk7mIqPArdC5D@cluster0.7l0vgdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || 'your-32-byte-encryption-key-here';

class SharedAIConfigService {
  constructor() {
    this.client = null;
    this.db = null;
    this.modelsCache = null;
    this.cacheExpiry = null;
  }

  async connect() {
    if (!this.client) {
      this.client = new MongoClient(MONGODB_URI);
      await this.client.connect();
      this.db = this.client.db('ai_config');
      
      // Crear índices
      await this.db.collection('ai_models').createIndex({ provider: 1 });
      await this.db.collection('ai_models').createIndex({ 'rating.quality': -1 });
      await this.db.collection('ai_providers').createIndex({ enabled: 1 });
    }
    return this.db;
  }

  // Encriptar API keys
  encrypt(text) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
  }

  // Desencriptar API keys
  decrypt(text) {
    const parts = text.split(':');
    const iv = Buffer.from(parts.shift(), 'hex');
    const encryptedText = Buffer.from(parts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
  }

  // Obtener todos los modelos disponibles
  async getAvailableModels(appId = 'synapsis') {
    try {
      await this.connect();

      // Usar caché si está disponible y no ha expirado
      if (this.modelsCache && this.cacheExpiry && new Date() < this.cacheExpiry) {
        return this.modelsCache;
      }

      // Obtener modelos de MongoDB
      const models = await this.db.collection('ai_models')
        .find({ enabled: { $ne: false } })
        .toArray();

      // Obtener proveedores con API keys
      const providers = await this.db.collection('ai_providers')
        .find({ enabled: true })
        .toArray();

      // Mapear API keys a modelos
      const providersMap = {};
      providers.forEach(provider => {
        providersMap[provider._id] = {
          apiKey: provider.apiKeyEnc ? this.decrypt(provider.apiKeyEnc) : null,
          endpoint: provider.apiEndpoint
        };
      });

      // Enriquecer modelos con información de proveedores
      const enrichedModels = models.map(model => ({
        ...model,
        apiKey: providersMap[model.provider]?.apiKey,
        apiEndpoint: providersMap[model.provider]?.endpoint,
        available: !!providersMap[model.provider]?.apiKey
      }));

      // Guardar en caché por 5 minutos
      this.modelsCache = enrichedModels;
      this.cacheExpiry = new Date(Date.now() + 5 * 60 * 1000);

      // Registrar uso
      await this.logAccess(appId);

      return enrichedModels;
    } catch (error) {
      console.error('Error obteniendo modelos:', error);
      throw error;
    }
  }

  // Obtener configuración de un modelo específico
  async getModel(modelId) {
    try {
      await this.connect();
      
      const model = await this.db.collection('ai_models').findOne({ _id: modelId });
      if (!model) {
        throw new Error(`Modelo no encontrado: ${modelId}`);
      }

      // Obtener proveedor
      const provider = await this.db.collection('ai_providers').findOne({ 
        _id: model.provider,
        enabled: true 
      });

      if (provider && provider.apiKeyEnc) {
        model.apiKey = this.decrypt(provider.apiKeyEnc);
        model.apiEndpoint = provider.apiEndpoint;
        model.available = true;
      } else {
        model.available = false;
      }

      return model;
    } catch (error) {
      console.error('Error obteniendo modelo:', error);
      throw error;
    }
  }

  // Actualizar API key de un proveedor
  async updateProviderKey(providerId, apiKey) {
    try {
      await this.connect();
      
      const encryptedKey = this.encrypt(apiKey);
      
      await this.db.collection('ai_providers').updateOne(
        { _id: providerId },
        { 
          $set: { 
            apiKeyEnc: encryptedKey,
            updatedAt: new Date()
          }
        },
        { upsert: true }
      );

      // Limpiar caché
      this.modelsCache = null;
      
      return { success: true };
    } catch (error) {
      console.error('Error actualizando API key:', error);
      throw error;
    }
  }

  // Actualizar precios de un modelo
  async updateModelPricing(modelId, newPricing) {
    try {
      await this.connect();
      
      await this.db.collection('ai_models').updateOne(
        { _id: modelId },
        { 
          $set: { 
            cost: newPricing,
            lastPriceUpdate: new Date(),
            updatedAt: new Date()
          }
        }
      );

      // Limpiar caché
      this.modelsCache = null;
      
      return { success: true };
    } catch (error) {
      console.error('Error actualizando precios:', error);
      throw error;
    }
  }

  // Registrar uso de un modelo
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
      // No lanzar error para no interrumpir el flujo principal
      return { success: false, error: error.message };
    }
  }

  // Obtener estadísticas de uso
  async getUsageStats(filters = {}) {
    try {
      await this.connect();
      
      const query = {};
      if (filters.appId) query.appId = filters.appId;
      if (filters.startDate) query.timestamp = { $gte: new Date(filters.startDate) };
      if (filters.endDate) {
        query.timestamp = query.timestamp || {};
        query.timestamp.$lte = new Date(filters.endDate);
      }

      const stats = await this.db.collection('ai_usage_stats')
        .aggregate([
          { $match: query },
          {
            $group: {
              _id: {
                model: '$modelId',
                provider: '$providerId'
              },
              totalTokens: { $sum: '$tokensUsed' },
              totalCost: { $sum: '$cost' },
              count: { $sum: 1 }
            }
          },
          { $sort: { totalCost: -1 } }
        ])
        .toArray();

      return stats;
    } catch (error) {
      console.error('Error obteniendo estadísticas:', error);
      throw error;
    }
  }

  // Registrar acceso
  async logAccess(appId) {
    try {
      await this.db.collection('ai_access_logs').insertOne({
        appId,
        timestamp: new Date(),
        action: 'get_models'
      });
    } catch (error) {
      // Silenciar errores de logging
    }
  }

  // Cerrar conexión
  async close() {
    if (this.client) {
      await this.client.close();
      this.client = null;
      this.db = null;
    }
  }
}

// Exportar singleton
module.exports = new SharedAIConfigService();
