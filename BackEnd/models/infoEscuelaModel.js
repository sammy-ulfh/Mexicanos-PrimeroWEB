const db = require('../config/db');

const getSolicitudesEscuelas = async () => {
  const [result] = await db.execute(
    'SELECT * FROM cuenta_escuela WHERE status = 1'
  );
  return result;
};

module.exports = {
  getSolicitudesEscuelas
};
