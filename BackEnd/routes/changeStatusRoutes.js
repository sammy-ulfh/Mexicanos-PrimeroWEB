const express = require('express');
const router = express.Router();
const { statusEscuela, statusDonante } = require('../controllers/changeStatusController.js');

router.patch('/status/escuela', statusEscuela);
router.patch('/status/donante', statusDonante);

module.exports = router;
