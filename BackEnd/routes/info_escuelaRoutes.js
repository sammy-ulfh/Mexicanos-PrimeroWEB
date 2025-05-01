const express = require('express');
const router = express.Router();
const escuelaController = require('../controllers/info_escuelaController.js');
const { verifyToken } = require('../middlewares/verifyToken');

router.get('/user/info', verifyToken, escuelaController.formularioContestado);

router.get('/info/escuelas', verifyToken, escuelaController.InfoEscuela);

router.get('/get/status', verifyToken, escuelaController.extraerStatus);

router.get('/get/rejected', verifyToken, escuelaController.razonRechazo);

router.post('/new/info',  verifyToken,  escuelaController.subirMiddleware, escuelaController.completarForm);

router.patch('/change/status', verifyToken, escuelaController.changeStatus);

//router.patch('/reporte', escuelaController.subirMiddleware, escuelaController);
module.exports = router;