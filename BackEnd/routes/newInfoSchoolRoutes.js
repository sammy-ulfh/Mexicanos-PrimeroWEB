const express = require('express');
const router = express.Router();
const { formularioContestado } = require('../controllers/inicialFormController.js');

router.get('/new/info/school', formularioContestado);

module.exports = router;
