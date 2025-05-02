const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');
const { verifyToken } = require('../middlewares/verifyToken.js');

router.post('/new/info', verifyToken, perfilController.completarPerfil);
router.post('/get/info', verifyToken, perfilController.getInfo);
router.post('/get/profiles', verifyToken, perfilController.extraerPerfiles);

module.exports = router;