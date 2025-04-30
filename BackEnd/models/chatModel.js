// Model para chats
const db = require('../config/db');

// Crear un nuevo chat
const crearChat = async () => {
    const [result] = await db.execute(
      'INSERT INTO chat (fecha) VALUES (NOW())',
      []
    );
    return result;
};

// Obtener todos los chats
const obtenerChats = async () => {
    const [result] = await db.execute(
      'SELECT * FROM chat ORDER BY fecha DESC'
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

module.exports = {
    crearChat,
    obtenerChats,
    obtenerChatPorId,
    eliminarChat
};
