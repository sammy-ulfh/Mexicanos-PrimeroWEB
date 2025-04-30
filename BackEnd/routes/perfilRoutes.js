const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');

router.post('/new/info', perfilController.completarPerfil);

module.exports = router;