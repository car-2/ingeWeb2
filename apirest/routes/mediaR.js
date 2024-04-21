const express = require('express');
const router = express.Router();
const mediaC = require('../controllers/mediaC');

router.get('/', mediaC.getAllMedia);
router.post('/', mediaC.addmedia);
router.put('/:id', mediaC.upMedia);
router.delete('/:id', mediaC.delMedia);

module.exports = router;