const express = require('express');
const router = express.Router();
const donadorController = require('../controllers/info_donadorController.js');
const { verifyToken } = require('../middlewares/verifyToken');

router.get('/info/donantes', verifyToken, donadorController.InfoDonante);

router.patch('/status', verifyToken, donadorController.statusDonante);

router.post('/new/info', verifyToken, donadorController.subirMiddleware, donadorController.completarForm);


module.exports = router;