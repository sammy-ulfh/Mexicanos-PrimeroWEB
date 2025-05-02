// controllers/chat_participantesController.js
const ChatParticipantes = require('../models/chat_participantesModel.js');

const agregarParticipante = async (req, res) => {
    try {
        const { id_chat, id_usuario } = req.body;
        const resultado = await ChatParticipantes.agregarParticipante(id_chat, id_usuario);
        res.status(201).json({ mensaje: 'Participante agregado exitosamente', id: resultado.insertId });
    } catch (error) {
        console.error('Error al agregar participante:', error);
        res.status(500).json({ mensaje: 'Error al agregar participante', error });
    }
};

const obtenerParticipantesPorChat = async (req, res) => {
    try {
        const { id_chat } = req.params;
        const resultado = await ChatParticipantes.obtenerParticipantesPorChat(id_chat);
        res.status(200).json({ mensaje: 'Participantes obtenidos exitosamente', participantes: resultado });
    } catch (error) {
        console.error('Error al obtener participantes:', error);
        res.status(500).json({ mensaje: 'Error al obtener participantes', error });
    }
};

const eliminarParticipante = async (req, res) => {
    try {
        const { id_chat, id_usuario } = req.body;
        await ChatParticipantes.eliminarParticipante(id_chat, id_usuario);
        res.status(200).json({ mensaje: 'Participante eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar participante:', error);
        res.status(500).json({ mensaje: 'Error al eliminar participante', error });
    }
};

const obtenerChats = async (req, res) => {
    try {
        const id = req.id;
        const resultado = await ChatParticipantes.getChats(id);
        res.status(200).json({ mensaje: 'Chats obtenidos exitosamente', chats: resultado });
    } catch (error) {
        console.error('Error al obtener los chats:', error);
        res.status(500).json({ mensaje: 'Error al obtener los chats', error });
    }
};

const obtenerProcesosActivos = async (req, res) => {
    try {
        const id = 1;
        console.log(id);
        const resultado = await ChatParticipantes.getProcesosActivos(id);
        res.status(200).json({ mensaje: 'Procesos activos obtenidos exitosamente', chats: resultado });
    } catch (error) {
        console.error('Error al obtener los procesos activos:', error);
        res.status(500).json({ mensaje: 'Error al obtener procesos activos', error });
    }
};

module.exports = {
    agregarParticipante,
    obtenerParticipantesPorChat,
    eliminarParticipante,
    obtenerChats,
    obtenerProcesosActivos
};
