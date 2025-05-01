const db = require('../config/db');

const newApoyoEscuela = async (id_escuela, tipo_apoyo_escuela, descripcion_escuela, id_chat) => {
  const [exist] = await db.execute(
    'SELECT id_chat FROM apoyo WHERE id_chat = ?',
    [id_chat]
  );

  if (exist.length === 0) {
    const [result] = await db.execute(
      'INSERT INTO apoyo (id_escuela, id_chat, tipo_apoyo_escuela, descripcion_escuela, status) VALUES (?,?,?,?,1);',
      [ id_escuela, id_chat, tipo_apoyo_escuela, descripcion_escuela]
    );
    return result;
  }
  else {
    const [result] = await db.execute(
      'UPDATE apoyo SET id_escuela = ?, tipo_apoyo_escuela = ?, descripcion_escuela = ? WHERE id_chat = ?;',
      [ id_escuela, tipo_apoyo_escuela, descripcion_escuela, id_chat]
    );
    return result;
  }
  };

const newApoyoDonador = async (id_donador, tipo_apoyo_donador, descripcion_donador, id_chat) => {
  const [exist] = await db.execute(
    'SELECT id_chat FROM apoyo WHERE id_chat = ?',
    [id_chat]
  );

    if (exist.length === 0) {
      const [result] = await db.execute(
        'INSERT INTO apoyo (id_donador, id_chat, tipo_apoyo_donador, descripcion_donador, status) VALUES (?,?,?,?,1);',
        [ id_donador, id_chat, tipo_apoyo_donador, descripcion_donador]
      );
      return result;
    }
    else{
    const [result] = await db.execute(
      'UPDATE apoyo SET id_donador = ?, tipo_apoyo_donador = ?, descripcion_donador = ? WHERE id_chat = ?;',
      [id_donador, tipo_apoyo_donador, descripcion_donador, id_chat]
    );
    return result;
  }
  };

const cambiarStatus = async (id_apoyo, id_usuario, status, razon_rechazo) => {
    const [result] = await db.execute(
      'UPDATE apoyo SET id_admin= ?, status = ?, razon_rechazo = ? WHERE id_apoyo = ?;',
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

module.exports = {
    newApoyoEscuela,
    newApoyoDonador,
    cambiarStatus,
    getApoyos
};
  