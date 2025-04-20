const db = require('../config/db');

const newInfoDonador = async (rfc_resp, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institución, rfc, edad_responsable, nombre_identificacion, ine, reporte) => {
  const [result] = await db.execute(
    'INSERT INTO cuenta_donador(rfc_responsable, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institución, rfc, edad_responsable, nombre_identificacion, ine, reporte,status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)',
    [rfc_resp, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institución, rfc, edad_responsable, nombre_identificacion, ine, reporte]
  );
  return result;
};

module.exports = {
  newInfoDonador
};
