const fs = require('fs');
const StrategyFactory = require('../strategies/StrategyFactory');

exports.predict = async (req, res) => {
  try {
    const { plant } = req.params;
    if (!req.file) {
      return res.status(400).json({ error: 'File image tidak ditemukan (field name: image)' });
    }

    const strategy = StrategyFactory.get(plant);
    if (!strategy) {
      return res.status(400).json({ error: `Plant "${plant}" belum didukung` });
    }

    const imageBuffer = fs.readFileSync(req.file.path);
    const probs = await strategy.predict(imageBuffer);
    const top = strategy.topK(probs, 3);

    // (opsional) hapus file upload setelah dipakai
    fs.unlink(req.file.path, () => {});

    res.json({
      plant,
      top,          // 3 prediksi teratas
      raw: probs,   // seluruh probabilitas
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Prediction failed' });
  }
};
