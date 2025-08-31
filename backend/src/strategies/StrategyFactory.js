const TomatoStrategy = require('./TomatoStrategy');
// const RiceStrategy = require('./RiceStrategy');
// const CornStrategy = require('./CornStrategy');
// const PotatoStrategy = require('./PotatoStrategy');

class StrategyFactory {
  static get(name) {
    switch ((name || '').toLowerCase()) {
      case 'tomato':
        return new TomatoStrategy();
      // case 'rice':   return new RiceStrategy();
      // case 'corn':   return new CornStrategy();
      // case 'potato': return new PotatoStrategy();
      default:
        return null;
    }
  }
}

module.exports = StrategyFactory;
