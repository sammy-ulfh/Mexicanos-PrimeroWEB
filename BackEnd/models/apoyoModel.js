const db = require('../config/db');

const newApoyoEscuela = async (id_escuela, tipo_apoyo_escuela, descripcion_escuela, id_apoyo) => {
    const [result] = await db.execute(
      'UPDATE apoyo SET  id_escuela = ?, tipo_apoyo_escuela = ?, descripcion_escuela = ? WHERE id_apoyo = ?;',
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
      'SELECT id_apoyo, tipo_apoyo_escuela, tipo_apoyo_donador, descripcion_escuela, descripcion_donador FROM apoyo WHERE status = 1 ORDER BY fecha_inicio ASC;'
    );
    return result;
  };

const newApoyo = async () => {
    const [result] = await db.execute(
      'INSERT INTO apoyo (status) VALUES(1);',
    );
    return result;
  };

module.exports = {
    newApoyoEscuela,
    newApoyoDonador,
    cambiarStatus,
    getApoyos,
    newApoyo
};
  