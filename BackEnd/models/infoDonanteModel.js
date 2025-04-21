const db = require('../config/db');

const getSolicitudesDonantes = async () => {
  const [result] = await db.execute(
    'SELECT * FROM cuenta_donador WHERE status = 1'
  );
  return result;
};

module.exports = {
  getSolicitudesDonantes
};
