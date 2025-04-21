const express = require('express');
const router = express.Router();
const { completarForm } = require('../controllers/newInfoController.js');

router.post('/new/info', completarForm);

module.exports = router;
