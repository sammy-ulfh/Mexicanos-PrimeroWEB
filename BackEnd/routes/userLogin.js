const express = require('express');
const router = express.Router();

const { loginUser } = require('../controllers/loginController.js');

router.post('/', loginUser);

module.exports = router;
