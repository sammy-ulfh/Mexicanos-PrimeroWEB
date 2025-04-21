const db = require('../config/db');

const getSolicitudesEscuelas = async () => {
  const [result] = await db.execute(
    'SELECT * FROM cuenta_escuela'
  );
  return result;
};

module.exports = {
  getSolicitudesEscuelas
};
