const TomatoStrategy = require('./TomatoStrategy');
const RiceStrategy = require('./RiceStrategy');
const CornStrategy = require('./CornStrategy');
const PotatoStrategy = require('./PotatoStrategy');

class StrategyFactory {
  static getStrategy(plantType) {
    switch (plantType.toLowerCase()) {
      case 'tomato':
        return new TomatoStrategy();
      case 'rice':
        return new RiceStrategy();
      case 'corn':
        return new CornStrategy();
      case 'potato':
        return new PotatoStrategy();
      default:
        throw new Error(`Strategy untuk tanaman "${plantType}" tidak ditemukan`);
    }
  }

  static getSupportedPlants() {
    return ['tomato', 'rice', 'corn', 'potato'];
  }
}

module.exports = StrategyFactory;