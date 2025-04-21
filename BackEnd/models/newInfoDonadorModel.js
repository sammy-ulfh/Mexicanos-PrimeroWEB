const db = require('../config/db');

const newInfoDonador = async (id_user, type, turn, name_school, dir_mat, dir_ves, direction, name_resp, email_resp, edad_resp, status = 1) => {
  const [result] = await db.execute(
    'INSERT INTO cuenta_donador(rfc_responsable, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institución, rfc, edad_responsable, nombre_institucion, ine, reporte,status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "http://s3.amazonaws.com/mexicanos_primero/", 1)',
    [rfc_resp, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institucion, rfc, edad_responsable, nombre_institucion, ine]
  );
  return result;
};

module.exports = {
  newInfoDonador
};
