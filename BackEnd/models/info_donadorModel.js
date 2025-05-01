const db = require('../config/db');

const newInfoDonador = async (rfc, id_usuario, nombre, correo, edad, ine, inst, nombre_institucion, correo_institucion, rfc_institucion, reporte) => {
  const [result] = await db.execute(
    'INSERT INTO info_donador(rfc, id_usuario, nombre, correo, edad, ine, inst, nombre_institucion, correo_institucion, rfc_institucion, reporte, status) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1)',
    [rfc, id_usuario, nombre, correo, edad, ine, inst, nombre_institucion, correo_institucion, rfc_institucion, reporte]
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

const getRazonRechazo = async (id) => {
  const [result] = await db.execute(
    'SELECT razon_rechazo FROM info_donandor WHERE status = 3 AND id_usuario = ?',
    [id]
  );
  return result;
};

module.exports = {
  newInfoDonador,
  changeStatusDonante,
  getSolicitudesDonantes,
  statusDonadorInicial,
  getRazonRechazo
};
