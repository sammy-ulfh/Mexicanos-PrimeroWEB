const db = require('../config/db');

const newInfoDonador = async (rfc_resp, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institucion, rfc, edad_responsable, nombre_institucion) => {
  const [result] = await db.execute(
    'INSERT INTO info_donador(rfc_responsable, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institución, rfc, edad_responsable, nombre_institucion, ine, reporte,status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, "http://s3.amazonaws.com/mexicanos_primero/", "http://s3.amazonaws.com/mexicanos_primero/", 1)',
    [rfc_resp, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institucion, rfc, edad_responsable, nombre_institucion]
  );
  return result;
};

const changeStatusDonante = async ( status, id, razon_rechazo ) => {
  const [result] = await db.execute(
    'UPDATE info_donador SET status = ?, razon_rechazo = ? WHERE id_usuario = ?;',
    [status, razon_rechazo || null, id]
  );
  return result;
};

const getSolicitudesDonantes = async () => {
  const [result] = await db.execute(
    'SELECT * FROM info_donador WHERE status = 1'
  );
  return result;
};

const statusDonadorInicial = async (id_usuario) => {
  const [result] = await db.execute(
    'SELECT status FROM info_donador WHERE id_usuario = ?',
    [id_usuario]
  );
  return result.length > 0 ? result[0].status : null;
};


module.exports = {
  newInfoDonador,
  changeStatusDonante,
  getSolicitudesDonantes,
  statusDonadorInicial
};
