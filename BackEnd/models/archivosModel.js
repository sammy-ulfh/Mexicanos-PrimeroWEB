const db = require('../config/db');
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");// npm install @aws-sdk/client-s3
const fs = require("fs");


const subirUrlPDF = async (id_chat, id_sender, titulo, path) => {
  const [result] = await db.execute(
    'INSERT INTO archivos (id_chat, id_sender, titulo, fecha_envio, path) VALUES(?, ?, ?, NOW(), ?);',
    [id_chat, id_sender, titulo, path]
  );
  return result;
};

/*
const subirImgProfile = async (id_usuario, path) => {
  const [result] = await db.execute(
    'UPDATE usuarios SET img = ? WHERE id_usuario = ?;',
    [path, id_usuario]
  );
  return result;
};

const subirReporteDonador = async (id_usuario, path) => {
  const [result] = await db.execute(
    'UPDATE info_donador SET reporte = ? WHERE id_usuario = ?;',
    [path, id_usuario]
  );
  return result;
};

const subirIneDonador = async (id_usuario, path) => {
  const [result] = await db.execute(
    'UPDATE info_donador SET ine = ? WHERE id_usuario = ?;',
    [path, id_usuario]
  );
  return result;
};

const subirImgInstitucion = async (id_usuario, path) => {
  const [result] = await db.execute(
    'UPDATE perfil SET reporte = ? WHERE id_usuario = ?;',
    [path, id_usuario]
  );
  return result;
};
*/
const subirArchivo = async (archivoLocalPath, nombreArchivo) => {
  const bucket = "mexicanosprimero";
  const key = `documentos/${nombreArchivo}`;
  const body = fs.createReadStream(archivoLocalPath);

  const comando = new PutObjectCommand({
    Bucket: bucket,
    Key: key,
    Body: body,
    ContentType: obtenerContentType(nombreArchivo)
  });

  await s3.send(comando);

  const urlPublica = `https://${bucket}.s3.amazonaws.com/${key}`;

  fs.unlink(archivoLocalPath, err => {
    if (err) console.error("Error al borrar el archivo temporal:", err);
  });

  return urlPublica;
};

module.exports = {
  subirUrlPDF,
  subirArchivo
};
