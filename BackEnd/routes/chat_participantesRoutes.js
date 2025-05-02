// routes/chat_participantesRoutes.js
const express = require('express');
const router = express.Router();
const chatParticipantesController = require('../controllers/chat_participantesController.js');
const { verifyToken } = require('../middlewares/verifyToken');

// Agregar un participante a un chat
router.post('/agregar', verifyToken, chatParticipantesController.agregarParticipante);

// Obtener participantes de un chat
router.get('/chats', verifyToken, chatParticipantesController.obtenerParticipantesPorChat);

router.get('/todos', verifyToken, chatParticipantesController.obtenerChats);

router.get('/procesos/activos', verifyToken, chatParticipantesController.obtenerProcesosActivos);

// Eliminar un participante de un chat
router.delete('/eliminar', verifyToken, chatParticipantesController.eliminarParticipante);

module.exports = router;
