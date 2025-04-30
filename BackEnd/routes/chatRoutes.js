// routes/chatRoutes.js
const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController.js');

// Crear un nuevo chat
router.post('/crear', chatController.crearChat);

// Obtener todos los chats
router.get('/todos', chatController.obtenerChats);

// Obtener un chat por su ID
router.get('/:id_chat', chatController.obtenerChatPorId);

// Eliminar un chat por su ID
router.delete('/eliminar/:id_chat', chatController.eliminarChat);

module.exports = router;
