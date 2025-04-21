const db = require('../config/db');

const changeStatusEscuela = async ( status, id, razon_rechazo ) => {
  const [result] = await db.execute(
    'UPDATE cuenta_escuela SET status = ?, razon_rechazo = ? WHERE id_usuario = ?;',
    [status, razon_rechazo || null, id]
  );
  return result;
};

module.exports = {
  changeStatusEscuela,
};
