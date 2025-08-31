const express = require('express');
const multer = require('multer');
const path = require('path');
const predictController = require('../controllers/predictController');

const router = express.Router();

const upload = multer({
  dest: path.resolve(__dirname, '../../uploads'), // pastikan folder ada/terbuat
  limits: { fileSize: 5 * 1024 * 1024 },         // 5MB
});

router.post('/:plant', upload.single('image'), predictController.predict);

module.exports = router;
