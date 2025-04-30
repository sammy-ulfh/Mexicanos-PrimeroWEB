// models/chatModel.js
const db = require('../config/db');

// Crear un nuevo chat
const crearChat = async (nombre_chat, descripcion) => {
    const [result] = await db.execute(
      'INSERT INTO chat (nombre_chat, descripcion, fecha_creacion) VALUES (?, ?, NOW())',
      [nombre_chat, descripcion]
    );
    return result;
};

// Obtener todos los chats
const obtenerChats = async () => {
    const [result] = await db.execute(
      'SELECT * FROM chat ORDER BY fecha_creacion DESC'
    );
    return result;
};

// Obtener un chat por su ID
const obtenerChatPorId = async (id_chat) => {
    const [result] = await db.execute(
      'SELECT * FROM chat WHERE id_chat = ?',
      [id_chat]
    );
    return result[0]; // Devuelve un solo chat
};

// (Opcional) Eliminar un chat por su ID
const eliminarChat = async (id_chat) => {
    const [result] = await db.execute(
      'DELETE FROM chat WHERE id_chat = ?',
      [id_chat]
    );
    return result;
};

// models/chat_participantesModel.js

// Agregar un participante a un chat
const agregarParticipante = async (id_chat, id_usuario) => {
    const [result] = await db.execute(
      'INSERT INTO chat_participantes (id_chat, id_usuario) VALUES (?, ?)',
      [id_chat, id_usuario]
    );
    return result;
};

// Obtener participantes de un chat
const obtenerParticipantesPorChat = async (id_chat) => {
    const [result] = await db.execute(
      'SELECT * FROM chat_participantes WHERE id_chat = ?',
      [id_chat]
    );
    return result;
};

// (Opcional) Eliminar un participante de un chat
const eliminarParticipante = async (id_chat, id_usuario) => {
    const [result] = await db.execute(
      'DELETE FROM chat_participantes WHERE id_chat = ? AND id_usuario = ?',
      [id_chat, id_usuario]
    );
    return result;
};

module.exports = {
    crearChat,
    obtenerChats,
    obtenerChatPorId,
    eliminarChat,
    agregarParticipante,
    obtenerParticipantesPorChat,
    eliminarParticipante
};
