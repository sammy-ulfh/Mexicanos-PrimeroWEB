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
const getChats = async (id) => {
  const [result] = await db.execute(
    `SELECT 
      cp.id_chat,
      cp.id_escuela,
      u_escuela.nombre AS nombre_escuela,
      u_escuela.img AS img_escuela,
      cp.id_donante,
      u_donante.nombre AS nombre_donante,
      u_donante.img AS img_donante,
      cp.id_admin,
      u_admin.nombre AS nombre_admin,
      u_admin.img AS img_admin,
      m.contenido AS ultimo_mensaje,
      m.fecha_envio AS fecha_ultimo_mensaje
    FROM chat_participantes cp
    LEFT JOIN usuarios u_escuela ON cp.id_escuela = u_escuela.id_usuario
    LEFT JOIN usuarios u_donante ON cp.id_donante = u_donante.id_usuario
    LEFT JOIN usuarios u_admin   ON cp.id_admin   = u_admin.id_usuario
    LEFT JOIN (
        SELECT m1.*
        FROM mensajes m1
        INNER JOIN (
            SELECT id_chat, MAX(fecha_envio) AS max_fecha
            FROM mensajes
            GROUP BY id_chat
        ) m2 ON m1.id_chat = m2.id_chat AND m1.fecha_envio = m2.max_fecha
    ) m ON cp.id_chat = m.id_chat
    WHERE (
        cp.id_escuela = ? OR 
        cp.id_donante = ? OR 
        cp.id_admin = ?
    )
    AND (
        (cp.id_escuela IS NOT NULL) +
        (cp.id_donante IS NOT NULL) +
        (cp.id_admin IS NOT NULL)
    ) = ?;`,
    [id, id, id, 2]
  );  
  
  return result;
};


module.exports = {
    agregarParticipante,
    obtenerParticipantesPorChat,
    eliminarParticipante,
    getChats
};