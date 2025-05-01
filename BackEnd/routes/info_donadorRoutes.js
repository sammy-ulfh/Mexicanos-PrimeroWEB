const express = require('express');
const router = express.Router();
const donadorController = require('../controllers/info_donadorController.js');
const { verifyToken } = require('../middlewares/verifyToken');

router.get('/info/donantes', verifyToken, donadorController.InfoDonante);

router.get('/info/donante', verifyToken, donadorController.InfoDonante);

router.patch('/change/status', verifyToken, donadorController.changeStatus);

router.patch('/get/status', verifyToken, donadorController.extraerStatus);

router.get('/get/rejected', verifyToken, donadorController.razonRechazo);

router.post('/new/info', verifyToken, donadorController.subirMiddleware, donadorController.completarForm);


module.exports = router;