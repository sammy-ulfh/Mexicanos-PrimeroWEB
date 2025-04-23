const db = require('../config/db.js');

const user = async (email, password) => {
  const [result] = await db.execute(
    'SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?',
    [email, password]
  );
  return result;
} 

module.exports = {
  user,
}
