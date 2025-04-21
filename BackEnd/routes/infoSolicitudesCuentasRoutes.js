const express = require('express');
const router = express.Router();
const { InfoEscuela } = require('../controllers/infoCuentasController.js');

router.get('/info/escuelas', InfoEscuela);

module.exports = router;
