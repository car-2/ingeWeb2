const express = require('express');
const router = express.Router();
const tipoC = require('../controllers/tipoC');

router.post('/', tipoC.createTipo);
router.get('/', tipoC.getAllTipo);
router.put('/:id',tipoC.upData);
router.delete('/:id',tipoC.delData);

module.exports = router;