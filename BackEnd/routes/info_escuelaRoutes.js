const express = require('express');
const router = express.Router();
const escuelaController = require('../controllers/info_escuelaController.js');

router.get('/user/info', escuelaController.formularioContestado);

router.get('/info/escuelas', escuelaController.InfoEscuela);

router.post('/new/info', escuelaController.completarForm);

router.patch('/status/escuela', escuelaController.statusEscuela);

module.exports = router;