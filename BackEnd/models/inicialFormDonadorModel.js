const db = require('../config/db');

const statusDonadorInicial = async (id_usuario) => {
    const [result] = await db.execute(
      'SELECT status FROM cuenta_donador WHERE id_usuario = ?',
      [id_usuario]
    );
    return result.length > 0 ? result[0].status : null;
  };
  

module.exports = {
  statusDonadorInicial
};
