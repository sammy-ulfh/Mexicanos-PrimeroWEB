const express = require('express');
const router = express.Router();
const { crearUsuario, loginUser, mandarPerfil } = require('../controllers/userController.js');

router.put('/new/account', crearUsuario);
router.post('/login', loginUser);
router.get('/rediregir', mandarPerfil);

module.exports = router;