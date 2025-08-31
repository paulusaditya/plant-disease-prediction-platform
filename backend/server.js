const express = require('express');
const predictRoutes = require('./routes/predict');

const app = express();
app.use(express.json());
app.use('/api', predictRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
