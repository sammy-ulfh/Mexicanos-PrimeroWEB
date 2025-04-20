const express = require('express');
const router = express.Router();
const { formularioContestado } = require('../controllers/inicialFormController.js');

router.get('/user/info', formularioContestado);

module.exports = router;
