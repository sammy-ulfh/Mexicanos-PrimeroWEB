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
    `SELECT mensajes.id_mensaje, mensajes.id_chat, mensajes.id_sender, mensajes.contenido, mensajes.fecha_envio, usuarios.tipo, usuarios.img, usuarios.nombre
      FROM mensajes
      LEFT JOIN usuarios ON mensajes.id_sender = usuarios.id_usuario
      WHERE mensajes.id_chat = ?
      ORDER BY mensajes.fecha_envio ASC;`,
    [id_chat]
  );
  return rows;
};

module.exports = {
  saveMessage,
  getMessagesByChat,
};