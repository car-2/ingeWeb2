const express = require('express');
const router = express.Router();
const directorC = require('../controllers/directorC');

router.get('/', directorC.getAllDirectors);
router.post('/', directorC.addDirector);
router.put('/:id', directorC.upDirectors);
router.delete('/:id', directorC.delDirector);

module.exports = router;