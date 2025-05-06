const express = require('express');
const router = express.Router();
const archivosController = require('../controllers/archivosController.js');
const { verifyToken } = require('../middlewares/verifyToken');

router.post('/subir', verifyToken, archivosController.subirArchivoMiddleware, archivosController.subirArchivoController);

module.exports = router;