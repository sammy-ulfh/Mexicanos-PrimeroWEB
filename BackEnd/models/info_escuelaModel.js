const db = require('../config/db');

const newInfoSchool = async (correo_escuela, id_usuario, turno, nombre_escuela, dir_matutino, dir_vespertino, direccion, urlReporte, nombre, correo, edad) => {
  const [result] = await db.execute(
    `INSERT INTO info_escuela (correo_escuela, id_usuario, turno, nombre_escuela, dir_matutino, dir_vespertino, direccion, reporte, nombre, correo, edad, status, razon_rechazo)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, null)
     ON DUPLICATE KEY UPDATE
     turno = VALUES(turno),
     nombre_escuela = VALUES(nombre_escuela),
     dir_matutino = VALUES(dir_matutino),
     dir_vespertino = VALUES(dir_vespertino),
     direccion = VALUES(direccion),
     reporte = VALUES(reporte),
     nombre = VALUES(nombre),
     correo = VALUES(correo),
     edad = VALUES(edad),
     status = 1,
     razon_rechazo = null`
    ,
    [correo_escuela, id_usuario, turno, nombre_escuela, dir_matutino, dir_vespertino, direccion, urlReporte, nombre, correo, edad]
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

const getRazonRechazo = async (id) => {
  const [result] = await db.execute(
    'SELECT razon_rechazo FROM info_escuela WHERE status = 3 AND id_usuario = ?',
    [id]
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

const newNecesidades = async (necesidades) => {
  const [result] = await db.execute(
    'INSERT INTO info_escuela(necesidades) VALUES(?)',
    [necesidades]
  );
  return result;
};

const subirReporteEscuela = async (id_usuario, path) => {
  const [result] = await db.execute(
    'UPDATE info_escuela SET reporte = ? WHERE id_usuario = ?;',
    [path, id_usuario]
  );
  return result;
};

module.exports = {
  newInfoSchool,
  changeStatusEscuela,
  getSolicitudesEscuelas,
  statusEscuelaInicial,
  newNecesidades,
  subirReporteEscuela,
  getRazonRechazo
};
