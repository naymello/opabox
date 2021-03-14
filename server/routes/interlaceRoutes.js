const express = require('express');

const router = express.Router();

const interlace = require('../controllers/interlaceController');

router.get('/', interlace);

module.exports = router;
