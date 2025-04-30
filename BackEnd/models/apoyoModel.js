const db = require('../config/db');

const newApoyoEscuela = async (id_escuela, tipo_apoyo_escuela, descripcion_escuela, id_apoyo) => {
    const [result] = await db.execute(
      'UPDATE apoyo SET tipo_apoyo_escuela = ?, descripcion_escuela = ?, id_escuela = ? WHERE id_apoyo = ?;',
      [tipo_apoyo_escuela, descripcion_escuela, id_escuela, id_apoyo]
    );
    return result;
  };

const newApoyoDonador = async (id_donador, tipo_apoyo_donador, descripcion_donador, id_apoyo) => {
    const [result] = await db.execute(
      'UPDATE apoyo SET tipo_apoyo_donador = ?, descripcion_donador = ? WHERE id_apoyo = ?;',
      [tipo_apoyo_donador, descripcion_donador, id_donador, id_apoyo]
    );
    return result;
  };

const cambiarStatus = async (id_apoyo, id_usuario, status, razon_rechazo) => {
    const [result] = await db.execute(
      'UPDATE apoyo SET id_usuario= ?, status = ?, razon_rechazo = ? WHERE id_apoyo = ?;',
      [id_usuario, status, razon_rechazo, id_apoyo]
    );
    return result;
  };

const getApoyos = async () => {
    const [result] = await db.execute(
      'SELECT * FROM apoyo WHERE status = 1 ORDER BY fecha_inicio ASC;'
    );
    return result;
  };

const infoApoyo = async (id_apoyo) => {
    const [result] = await db.execute(
      'SELECT * FROM apoyo WHERE id_apoyo = ?',
      [id_apoyo]
    );
    return result.length > 0 ? result[0] : null;
  };


module.exports = {
    newApoyoEscuela,
    newApoyoDonador,
    cambiarStatus,
    getApoyos,
    infoApoyo
};
  