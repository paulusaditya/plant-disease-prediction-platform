const BaseStrategy = require('./BaseStrategy');

class TomatoStrategy extends BaseStrategy {
  constructor() {
    super('backend/models/tomato');
  }
}

module.exports = TomatoStrategy;
