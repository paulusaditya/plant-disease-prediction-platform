const express = require('express');
const multer = require('multer');
const { predict } = require('../src/controllers/predictController');

const upload = multer({ dest: 'uploads/' });
const router = express.Router();

router.post('/predict', upload.single('image'), predict);

module.exports = router;
