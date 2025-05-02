const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');

router.post('/new/info', perfilController.completarPerfil);
router.post('/get/info', perfilController.getInfo);

module.exports = router;