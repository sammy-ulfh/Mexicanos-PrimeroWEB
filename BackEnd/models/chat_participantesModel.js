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
  ie.nombre AS nombre_escuela,
  cp.id_donante,
  id.nombre AS nombre_donante,
  cp.id_admin,
  u.correo AS nombre_admin  -- o puedes usar otro campo si admin tiene su propio detalle
FROM chat_participantes cp
LEFT JOIN info_escuela ie ON cp.id_escuela = ie.id_usuario
LEFT JOIN info_donador id ON cp.id_donante = id.id_usuario
LEFT JOIN usuarios u ON cp.id_admin = u.id_usuario
WHERE (
    cp.id_escuela = ? OR 
    cp.id_donante = ? OR 
    cp.id_admin = ?
)
AND (
    (cp.id_escuela IS NOT NULL) +
    (cp.id_donante IS NOT NULL) +
    (cp.id_admin IS NOT NULL)
) = 2;
`,
    [id, id, id]
  );
  return result;
};

module.exports = {
    agregarParticipante,
    obtenerParticipantesPorChat,
    eliminarParticipante,
    getChats
};