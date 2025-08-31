const tf = require('@tensorflow/tfjs-node');
const path = require('path');

class BaseStrategy {
  /**
   * @param {string} modelDir absolute path to the folder containing model.json
   * @param {string[]} labels optional class labels in index order
   */
  constructor(modelDir, labels = []) {
    this.modelDir = modelDir;
    this.labels = labels;
    this.model = null;
  }

  async loadModel() {
    if (!this.model) {
      const modelPath = path.resolve(this.modelDir, 'model.json');
      this.model = await tf.loadLayersModel(`file://${modelPath}`);
    }
  }

  _getInputSize() {
    const shape = this.model.inputs[0].shape; // [null, H, W, C]
    const h = shape[1] || 224;
    const w = shape[2] || 224;
    return [h, w];
  }

  _preprocess(imageBuffer) {
    const [h, w] = this._getInputSize();
    return tf.tidy(() =>
      tf.node
        .decodeImage(imageBuffer, 3)         // RGB
        .resizeBilinear([h, w])
        .expandDims(0)                        // [1, H, W, 3]
        .toFloat()
        .div(tf.scalar(255))
    );
  }

  /**
   * @returns {Promise<number[]>} probabilities/logits array
   */
  async predict(imageBuffer) {
    await this.loadModel();
    const input = this._preprocess(imageBuffer);
    const output = this.model.predict(input);
    const tensor = Array.isArray(output) ? output[0] : output;
    const probs = await tensor.data();       // Float32Array
    tf.dispose([input, output]);
    return Array.from(probs);
  }

  topK(probs, k = 3) {
    const items = probs.map((p, i) => ({
      index: i,
      label: this.labels[i] || `class_${i}`,
      score: p,
    }));
    items.sort((a, b) => b.score - a.score);
    return items.slice(0, k);
  }
}

module.exports = BaseStrategy;
