const StrategyFactory = require('../strategies/StrategyFactory');

class ModelService {
  constructor() {
    this.strategies = new Map();
  }

  async warmupModels() {
    console.log('🔥 Warming up all models...');
    const plants = StrategyFactory.getSupportedPlants();
    
    for (const plant of plants) {
      try {
        const strategy = StrategyFactory.getStrategy(plant);
        await strategy.loadModel();
        this.strategies.set(plant, strategy);
        console.log(`✅ ${plant} model ready`);
      } catch (error) {
        console.error(`❌ Failed to load ${plant} model:`, error);
      }
    }
  }

  getStrategy(plantType) {
    return this.strategies.get(plantType) || StrategyFactory.getStrategy(plantType);
  }
}

module.exports = new ModelService();