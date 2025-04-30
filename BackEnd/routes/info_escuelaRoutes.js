const express = require('express');
const router = express.Router();
const escuelaController = require('../controllers/info_escuelaController.js');
const { verifyToken } = require('../middlewares/verifyToken');

router.get('/user/info', escuelaController.formularioContestado);

router.get('/info/escuelas',escuelaController.InfoEscuela);

router.post('/new/info', escuelaController.subirMiddleware, escuelaController.completarForm);

router.patch('/status/escuela', escuelaController.statusEscuela);

//router.patch('/reporte', escuelaController.subirMiddleware, escuelaController);
module.exports = router;