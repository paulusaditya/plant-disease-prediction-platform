const express = require('express');
const cors = require('cors');
const predictRoutes = require('./src/routes/predict');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/predict', predictRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
