// controllers/chatController.js
const Chat = require('../models/chatModel.js');

const crearChat = async (req, res) => {
    try {
        const resultado = await Chat.crearChat();
        res.status(201).json({ mensaje: 'Chat creado exitosamente', id_chat: resultado.insertId });
    } catch (error) {
        console.error('Error al crear el chat:', error);
        res.status(500).json({ mensaje: 'Error al crear el chat', error });
    }
};

const obtenerChats = async (req, res) => {
    try {
        const resultado = await Chat.obtenerChats();
        res.status(200).json({ mensaje: 'Chats obtenidos exitosamente', chats: resultado });
    } catch (error) {
        console.error('Error al obtener los chats:', error);
        res.status(500).json({ mensaje: 'Error al obtener los chats', error });
    }
};

const obtenerChatPorId = async (req, res) => {
    try {
        const { id_chat } = req.headers;
        const resultado = await Chat.obtenerChatPorId(id_chat);
        if (resultado) {
            res.status(200).json({ mensaje: 'Chat encontrado', chat: resultado });
        } else {
            res.status(404).json({ mensaje: 'Chat no encontrado' });
        }
    } catch (error) {
        console.error('Error al obtener el chat:', error);
        res.status(500).json({ mensaje: 'Error al obtener el chat', error });
    }
};

const eliminarChat = async (req, res) => {
    try {
        const { id_chat } = req.params;
        await Chat.eliminarChat(id_chat);
        res.status(200).json({ mensaje: 'Chat eliminado exitosamente' });
    } catch (error) {
        console.error('Error al eliminar el chat:', error);
        res.status(500).json({ mensaje: 'Error al eliminar el chat', error });
    }
};

module.exports = {
    crearChat,
    obtenerChats,
    obtenerChatPorId,
    eliminarChat
};
