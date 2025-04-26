const db = require('../config/db');

const newInfoSchool = async (correo_institucional, id_user, type, turn, name_school, dir_mat, dir_ves, direction, report, name_resp, email_resp, edad_resp) => {
  const [result] = await db.execute(
    'INSERT INTO info_escuela(correo_institucional, id_usuario, tipo, turno, nombre_escuela, dir_matutino, dir_vespertino, direccion, reporte, nombre_responsable, correo_responsable, edad_responsable, status, razon_rechazo) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, null)',
    [correo_institucional, id_user, type, turn, name_school, dir_mat, dir_ves, direction, report, name_resp, email_resp, edad_resp]
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
