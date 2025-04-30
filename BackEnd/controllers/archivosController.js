import  subirArchivo  from "../models/archivosModel.js";
import multer from "multer";//npm install express multer @aws-sdk/client-s3

const upload = multer({ dest: "uploads/" }); 


const subirArchivoMiddleware = upload.single("archivo");


const subirArchivoController = async (req, res) => {
  try {
    const { id_chat, id_sender } = req.body;

    const archivoLocalPath = req.file.path;
    const nombreArchivo = req.file.originalname;

    const url = await subirArchivo.subirArchivo(archivoLocalPath, nombreArchivo);
    await subirArchivo.subirUrlPDF(id_chat, id_sender, nombreArchivo, url);
    res.status(200).json({
      mensaje: "Archivo subido correctamente",
      url
    });

  } catch (err) {
    console.error("Error al subir archivo:", err);
    res.status(500).json({ error: "Error al subir archivo" });
  }
};

module.exports = {
    subirArchivoController,
    subirArchivoMiddleware
};