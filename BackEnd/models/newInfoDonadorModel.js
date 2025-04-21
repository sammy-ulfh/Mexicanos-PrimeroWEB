const db = require('../config/db');

const newInfoDonador = async (rfc_resp, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institucion, rfc, edad_responsable, nombre_institucion) => {
  const [result] = await db.execute(
    'INSERT INTO cuenta_donador(rfc_responsable, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institución, rfc, edad_responsable, nombre_institucion, ine, reporte,status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "http://s3.amazonaws.com/mexicanos_primero/", "http://s3.amazonaws.com/mexicanos_primero/", 1)',
    [rfc_resp, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institucion, rfc, edad_responsable, nombre_institucion]
  );
  return result;
};

module.exports = {
  newInfoDonador
};
