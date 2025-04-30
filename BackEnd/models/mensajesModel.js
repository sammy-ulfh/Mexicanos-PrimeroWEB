const db = require('../config/db');

const saveMessage = async (id_chat, id_sender, contenido) => {
  // Insertar un mensaje nuevo con fecha actual
  const [result] = await db.execute(
    `INSERT INTO mensajes (id_chat, id_sender, contenido, fecha_envio)
     VALUES (?, ?, ?, NOW())`,
    [id_chat, id_sender, contenido]
  );
  return result;
};

const getMessagesByChat = async (id_chat) => {
  // Recuperar todos los mensajes de un chat ordenados por fecha
  const [rows] = await db.execute(
    `SELECT id_mensaje, id_chat, id_sender, contenido, fecha_envio
     FROM mensajes
     WHERE id_chat = ?
     ORDER BY fecha_envio ASC`,
    [id_chat]
  );
  return rows;
};

module.exports = {
  saveMessage,
  getMessagesByChat,
};