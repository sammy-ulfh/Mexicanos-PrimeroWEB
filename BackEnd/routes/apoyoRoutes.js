const express = require('express');
const router = express.Router();
const apoyoController = require('../controllers/apoyoController.js');

router.post('/new', apoyoController.newApoyo);

router.patch('/descripcion', apoyoController.newApoyoDescripcion);

router.patch('/status', apoyoController.cambiarStatus);

module.exports = router;