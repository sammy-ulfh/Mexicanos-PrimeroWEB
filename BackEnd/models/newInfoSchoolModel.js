const db = require('../config/db');

const newInfoSchool = async (id_user, type, turn, name_school, dir_mat, dir_ves, direction, report, name_resp, email_resp, edad_resp) => {
  const [result] = await db.execute(
    'INSERT INTO cuenta_escuela(id_usuario, tipo, turno, nombre_escuela, dir_matutino, dir_vespertino, direccion, reporte, nombre_responsable, correo_responsable, edad_responsable, status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)',
    [id_user, type, turn, name_school, dir_mat, dir_ves, direction, report, name_resp, email_resp, edad_resp, status]
  );
  return result;
};

module.exports = {
  newInfoSchool
};
