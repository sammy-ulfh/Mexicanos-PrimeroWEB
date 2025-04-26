const express = require('express');
const router = express.Router();
const donadorController = require('../controllers/info_donadorController.js');

router.get('/info/donantes', donadorController.InfoDonante);

router.patch('/status/donante', donadorController.statusDonante);

router.post('/new/info', donadorController.completarForm);


module.exports = router;