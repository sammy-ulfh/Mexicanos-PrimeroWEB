const express = require('express');
const router = express.Router();
const { crearUsuario, loginUser } = require('../controllers/userController.js');

router.put('/new/account', crearUsuario);
router.post('/login', loginUser);

module.exports = router;