// routes/chat_participantesRoutes.js
const express = require('express');
const router = express.Router();
const chatParticipantesController = require('../controllers/chat_participantesController.js');

// Agregar un participante a un chat
router.post('/agregar', chatParticipantesController.agregarParticipante);

// Obtener participantes de un chat
router.get('/:id_chat', chatParticipantesController.obtenerParticipantesPorChat);

// Eliminar un participante de un chat
router.delete('/eliminar', chatParticipantesController.eliminarParticipante);

module.exports = router;
