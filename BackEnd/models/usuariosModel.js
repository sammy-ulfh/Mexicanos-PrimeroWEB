const db = require('../config/db');

const crearUsuario = async (type, email, password) => {
  const [result] = await db.execute(
    'INSERT INTO usuarios(tipo, correo, contrasena) VALUES(?, ?, ?)',
    [type, email, password]
  );
  return result;
};

const user = async (email, password) => {
  const [result] = await db.execute(
    'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?',
    [email, password]
  );
  return result;
} 

const setProfilePicture = async (id_usuario, img) => {
  const [result] = await db.execute(
    'UPDATE usuarios SET img = ? WHERE id_usuario = ?',
    [img, id_usuario]
  );
  return result;
};

const getProfilePicture = async (id_usuario) => {
  const [result] = await db.execute(
    'SELECT img FROM usuarios WHERE id_usuario = ?',
    [id_usuario]
  );
  return result;
};

module.exports = {
  crearUsuario,
  user,
  setProfilePicture, 
  getProfilePicture
};
