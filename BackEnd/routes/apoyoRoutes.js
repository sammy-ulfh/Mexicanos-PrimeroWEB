const express = require('express');
const router = express.Router();
const apoyoController = require('../controllers/apoyoController.js');
const { verifyToken } = require('../middlewares/verifyToken.js');

router.post('/new',verifyToken, apoyoController.newApoyo);

router.patch('/status',verifyToken, apoyoController.cambiarStatus);

router.get('/info', verifyToken,  apoyoController.getApoyos);

module.exports = router;