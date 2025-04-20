const express = require('express');
const router = express.Router();
const { crearUsuario } = require('../controllers/userController.js');

router.post('/new/user', crearUsuario);

module.exports = router;
