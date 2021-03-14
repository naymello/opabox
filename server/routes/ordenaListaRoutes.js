const express = require('express');

const router = express.Router();

const ordenaLista = require('../controllers/ordenaListaController');

router.post('/', ordenaLista);

module.exports = router;
