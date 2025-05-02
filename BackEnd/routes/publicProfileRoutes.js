const express = require('express');
const router = express.Router();
const { getPublicProfile } = require('../controllers/publicProfileController.js');
const { verifyToken } = require('../middlewares/verifyToken'); 

router.get('/profile', verifyToken, getPublicProfile);

module.exports = router;
