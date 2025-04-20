const db = require('../config/db');

const typeUser = async (id_usuario) => {
    const [result] = await db.execute(
      'SELECT tipo FROM usuarios WHERE id_usuario = ?',
      [id_usuario]
    );
    return result.length > 0 ? result[0].status : null;
  };
  

module.exports = {
  typeUser
};