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

module.exports = {
  crearUsuario,
  user
};
