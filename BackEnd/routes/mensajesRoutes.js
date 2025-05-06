const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/verifyToken.js');
const mensajesController = require('../controllers/mensajesController.js');

// Guardar un nuevo mensaje en un chat
// Body que se espera: { idChat, idSender, contenido }
router.put('/save/chat',verifyToken, mensajesController.saveMessage);

// Obtener todos los mensajes de un chat
// Query que se espera: ?idChat=123
router.get('/get/:id_chat',verifyToken, mensajesController.getMessages);

module.exports = router;