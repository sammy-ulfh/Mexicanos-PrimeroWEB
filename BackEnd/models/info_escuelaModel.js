const db = require('../config/db');

const newInfoSchool = async (correo_escuela, id_usuario, nombre_escuela, dir_matutino, dir_vespertino, direccion, necesidades, reporte, nombre, correo, edad) => {
  const [result] = await db.execute(
    'INSERT INTO info_escuela(correo_escuela, id_usuario, nombre_escuela, dir_matutino, dir_vespertino, direccion, necesidades, reporte, nombre, correo, edad, status, razon_rechazo) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, null)',
    [correo_escuela, id_usuario, nombre_escuela, dir_matutino, dir_vespertino, direccion, necesidades, reporte, nombre, correo, edad]
  );
  return result;
};

const changeStatusEscuela = async ( status, id, razon_rechazo ) => {
  const [result] = await db.execute(
    'UPDATE info_escuela SET status = ?, razon_rechazo = ? WHERE id_usuario = ?;',
    [status, razon_rechazo || null, id]
  );
  return result;
};

const getSolicitudesEscuelas = async () => {
  const [result] = await db.execute(
    'SELECT * FROM info_escuela WHERE status = 1'
  );
  return result;
};

const statusEscuelaInicial = async (id_usuario) => {
  const [result] = await db.execute(
    'SELECT status FROM info_escuela WHERE id_usuario = ?',
    [id_usuario]
  );
  return result.length > 0 ? result[0].status : null;
};

module.exports = {
  newInfoSchool,
  changeStatusEscuela,
  getSolicitudesEscuelas,
  statusEscuelaInicial
};
