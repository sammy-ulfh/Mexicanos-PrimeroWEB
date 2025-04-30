const express = require('express');
const router = express.Router();

const { verifyToken } = require('./verifyToken.js');

router.get('/token', verifyToken);

module.exports = router;