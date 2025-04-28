const db = require('../config/db');

const newApoyo = async (id_escuela, id_donador, id_admin) => {
    const [result] = await db.execute(
      'INSERT INTO apoyo(id_escuela, id_donador, id_admin, activo, status) VALUES(?, ?, ?, FALSE, 1);',
      [id_escuela, id_donador, id_admin]
    );
    return result;
  };

const newApoyoEscuela = async (id_apoyo, tipo_apoyo_escuela, descripcion_escuela) => {
    const [result] = await db.execute(
      'UPDATE apoyo SET tipo_apoyo_escuela = ?, descripcion_escuela = ? WHERE id_apoyo = ?;',
      [tipo_apoyo_escuela, descripcion_escuela, id_apoyo]
    );
    return result;
  };

const newApoyoDonador = async (id_apoyo, tipo_apoyo_donador, descripcion_donador) => {
    const [result] = await db.execute(
      'UPDATE apoyo SET tipo_apoyo_donador = ?, descripcion_donador = ? WHERE id_apoyo = ?;',
      [tipo_apoyo_donador, descripcion_donador, id_apoyo]
    );
    return result;
  };

const cambiarStatus = async (id_apoyo, status, razon_rechazo) => {
    const [result] = await db.execute(
      'UPDATE apoyo SET status = ?, razon_rechazo = ? WHERE id_apoyo = ?;',
      [status, razon_rechazo, id_apoyo]
    );
    return result;
  };

const getApoyos = async () => {
    const [result] = await db.execute(
      'SELECT * FROM apoyo WHERE status = 1 ORDER BY fecha_inicio DESC'
    );
    return result;
  };

module.exports = {
    newApoyo,
    newApoyoEscuela,
    newApoyoDonador,
    cambiarStatus
};
  