const db = require('../config/db');

const statusEscuelaInicial = async (id_usuario) => {
    const [result] = await db.execute(
      'SELECT status FROM cuenta_escuelas WHERE id_usuario = ?',
      [id_usuario]
    );
    return result.length > 0 ? result[0].status : null;
  };
  

module.exports = {
  statusEscuelaInicial
};
