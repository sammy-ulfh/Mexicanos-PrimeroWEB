const express = require('express');
const router = express.Router();
const { formularioContestado } = require('../controllers/inicialFormController.js');

router.post('/new/info', formularioContestado);

module.exports = router;
