const express = require('express');
const router = express.Router();
const mensajesController = require('../controllers/mensajesController.js');

// Guardar un nuevo mensaje en un chat
// Body que se espera: { idChat, idSender, contenido }
router.put('/save/chat', mensajesController.saveMessage);

// Obtener todos los mensajes de un chat
// Query que se espera: ?idChat=123
router.get('/get/chat', mensajesController.getMessages);

module.exports = router;