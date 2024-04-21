const express = require('express');
const router = express.Router();
const producerC = require('../controllers/producerC');

router.get('/', producerC.getAllProducers);
router.post('/', producerC.addProductora);
router.put('/:id', producerC.upProducers);
router.delete('/:id', producerC.delProducers);

module.exports = router;
