const express = require('express');
const router = express.Router();
const { statusEscuela } = require('../controllers/changeStatusController.js');

router.patch('/status/escuela', statusEscuela);

module.exports = router;
