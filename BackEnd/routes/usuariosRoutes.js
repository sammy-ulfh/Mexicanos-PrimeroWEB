const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/verifyToken.js');
const { crearUsuario, loginUser, setProfilePicture, subirMiddleware, getProfilePicture} = require('../controllers/userController.js');

router.put('/new/account', crearUsuario);
router.post('/login', loginUser);
router.post('/profile', verifyToken, subirMiddleware, setProfilePicture);
router.get('/get/profile', verifyToken, getProfilePicture);

module.exports = router;