const fs = require('fs');
const TomatoStrategy = require('../strategies/TomatoStrategy');
const RiceStrategy = require('../strategies/RiceStrategy');
const CornStrategy = require('../strategies/CornStrategy');
const PotatoStrategy = require('../strategies/PotatoStrategy');

const strategies = {
  tomato: new TomatoStrategy(),
  rice: new RiceStrategy(),
  corn: new CornStrategy(),
  potato: new PotatoStrategy(),
};

exports.predict = async (req, res) => {
  try {
    const { type } = req.body; // misal 'tomato', 'rice', ...
    if (!strategies[type]) return res.status(400).json({ error: 'Invalid type' });

    const imageBuffer = fs.readFileSync(req.file.path);
    const result = await strategies[type].predict(imageBuffer);

    res.json({ result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Prediction failed' });
  }
};
