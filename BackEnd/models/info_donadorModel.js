const db = require('../config/db');

const newInfoDonador = async (id_usuario, rfc, correo, edad,  nombre, ine, inst, correo_institucion, rfc_institucion, nombre_institucion, reporte) => {
  const [result] = await db.execute(
    'INSERT INTO info_donador(id_usuario, rfc, correo, edad,  nombre, ine, inst, correo_institucion, rfc_institucion, nombre_institucion, reporte, status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)',
    [id_usuario, rfc, correo, edad,  nombre, ine, inst, correo_institucion, rfc_institucion, nombre_institucion, reporte]
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
