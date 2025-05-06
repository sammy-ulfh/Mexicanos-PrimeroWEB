// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController.js');
const { verifyToken } = require('../middlewares/verifyToken');


// Crear un nuevo chat
router.post('/crear', verifyToken, chatController.crearChat);

// Obtener todos los chats
router.get('/todos', verifyToken, chatController.obtenerChats);

// Obtener un chat por su ID
router.get('/:id_chat', verifyToken, chatController.obtenerChatPorId);

// Eliminar un chat por su ID
router.delete('/eliminar/:id_chat', verifyToken, chatController.eliminarChat);

module.exports = router;
