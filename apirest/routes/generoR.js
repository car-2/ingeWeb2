const express = require('express');
const router = express.Router();
const generoC = require('../controllers/generoC');

router.get('/', generoC.getAllGeneros);
router.post('/', generoC.newGenero);
router.put('/:id', generoC.upDataG);
router.delete('/:id', generoC.delDataG);

module.exports = router;