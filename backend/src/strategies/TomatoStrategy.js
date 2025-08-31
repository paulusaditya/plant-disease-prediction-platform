const path = require('path');
const BaseStrategy = require('./BaseStrategy');

class TomatoStrategy extends BaseStrategy {
  constructor() {
    super(
      path.resolve(__dirname, '../../models/tomato'),
      [
        // Ganti sesuai kelas model tomatemu
        'Bacterial_spot',
        'Early_blight',
        'Late_blight',
        'Leaf_Mold',
        'Septoria_leaf_spot',
        'Spider_mites',
        'Target_Spot',
        'Yellow_Leaf_Curl_Virus',
        'Mosaic_virus',
        'Healthy',
      ]
    );
  }
}

module.exports = TomatoStrategy;
