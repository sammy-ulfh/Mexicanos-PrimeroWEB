const db = require('../config/db');

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

// Eliminar un participante de un chat
const eliminarParticipante = async (id_chat, id_usuario) => {
    const [result] = await db.execute(
      'DELETE FROM chat_participantes WHERE id_chat = ? AND id_usuario = ?',
      [id_chat, id_usuario]
    );
    return result;
};

// Obtener todos los chats
const obtenerChats = async (id) => {
  const [result] = await db.execute(
    'SELECT * FROM chat_participantes WHERE id_usuario = ?',
    [id]
  );
  return result;
};

module.exports = {
    agregarParticipante,
    obtenerParticipantesPorChat,
    eliminarParticipante,
    obtenerChats
};