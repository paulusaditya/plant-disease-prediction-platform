const tf = require('@tensorflow/tfjs');
const fs = require('fs');

class BaseStrategy {
  constructor(modelPath) {
    this.modelPath = modelPath;
    this.model = null;
  }

  async loadModel() {
    if (!this.model) {
      this.model = await tf.loadLayersModel(`file://${this.modelPath}/model.json`);
    }
  }

  async predict(imageBuffer, inputShape = [224, 224]) {
    await this.loadModel();

    const tensor = tf.node
      .decodeImage(imageBuffer, 3)
      .resizeNearestNeighbor(inputShape)
      .expandDims()
      .toFloat()
      .div(tf.scalar(255.0));

    const prediction = this.model.predict(tensor);
    return prediction.arraySync();
  }
}

module.exports = BaseStrategy;
