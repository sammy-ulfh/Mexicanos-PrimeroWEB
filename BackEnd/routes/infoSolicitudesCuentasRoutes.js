const express = require('express');
const router = express.Router();
const { InfoEscuela, InfoDonante } = require('../controllers/infoCuentasController.js');

router.get('/info/escuelas', InfoEscuela);
router.get('/info/donantes', InfoDonante);

module.exports = router;
