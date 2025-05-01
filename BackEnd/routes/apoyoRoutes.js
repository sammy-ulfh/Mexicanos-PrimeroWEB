const express = require('express');
const router = express.Router();
const apoyoController = require('../controllers/apoyoController.js');

router.patch('/new', apoyoController.newApoyo);

router.patch('/status', apoyoController.cambiarStatus);

router.get('/info', apoyoController.getApoyos);

module.exports = router;