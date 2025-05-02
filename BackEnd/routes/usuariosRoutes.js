const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/verifyToken.js');
const { crearUsuario, loginUser, setProfilePicture, subirMiddleware, getProfilePicture, setNombre, getNombre} = require('../controllers/userController.js');

router.put('/new/account', crearUsuario);
router.post('/login', loginUser);
router.patch('/profile', verifyToken, subirMiddleware, setProfilePicture);
router.get('/get/profile', verifyToken, getProfilePicture);
router.patch('/set/nombre', verifyToken, subirMiddleware, setNombre);
router.post('/get/nombre', getNombre);
module.exports = router;