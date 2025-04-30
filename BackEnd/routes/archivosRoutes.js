const express = require('express');
const router = express.Router();
const archivosController = require('../controllers/archivosController.js');

router.post('/subir', archivosController.subirArchivoMiddleware, archivosController.subirArchivoController);

module.exports = router;