const subirArchivo  = require("../models/archivosModel.js");
const multer = require("multer");//npm install express multer @aws-sdk/client-s3
const Escuela = require('../models/info_escuelaModel.js');
const upload = multer({ dest: "uploads/" }); 

const subirMiddleware = upload.single("archivo");

const completarForm = async (req, res) => {
    try {
  
        const { correo_escuela, id_usuario, nombre_escuela, dir_matutino, dir_vespertino, direccion, necesidades, reporte, nombre, correo, edad } = req.body;

        let urlReporte = '';
        if (req.file) {
            const archivoLocalPath = req.file.path;
            const nombreArchivo = req.file.originalname;
            urlReporte = await subirArchivo.subirArchivo(archivoLocalPath, nombreArchivo);
        }
        await Escuela.newInfoSchool(correo_escuela, id_usuario, nombre_escuela, dir_matutino, dir_vespertino, direccion, necesidades, reporte, urlReporte, nombre, correo, edad);

      res.status(201).json({ mensaje: 'Información almacenada', redirigir: 'portal/wait' });
  
    } catch (error) {
      console.error('Error al guardar la información:', error);
      res.status(500).json({ mensaje: 'Error al guardar la información', error });
    }
  };

  const InfoEscuela = async (req, res) => {
  
    try{
      const resultado = await Escuela.getSolicitudesEscuelas();
      console.log(resultado);
      res.status(201).json({ mensaje: 'Solicitudes extraidas correctamente', response: resultado});
    }catch (error){
      console.error('Error al extraer los datos:', error);
      res.status(500).json({ mensaje: 'Error al extraer las solicitudes', error });
    }
  };
  

const statusEscuela = async (req, res) => {
  const { id, type, id_escuela, status, razon_rechazo } = req.body;
  console.log(req.body);

  try{
    const resultado = await Escuela.changeStatusEscuela(status, id_escuela, razon_rechazo);
    res.status(201).json({ mensaje: 'Status modificado correctamente', id: id, type: type});
  }catch (error){
    console.error('Error al modificar los datos:', error);
    res.status(500).json({ mensaje: 'Error al modificar los datos', error });
  }
};

const formularioContestado = async (req, res) => {
  const { id_usuario, tipo } = req.body;
  const type = parseInt(tipo, 10);

  try {
    if (type == 2) {
      const statEscuela = await Escuela.statusEscuelaInicial(id_usuario);

      if (!statEscuela) {
        res.status(200).json({ status: 0 }); 
      } else {
        res.status(200).json({ status: statEscuela });
      }

    } else if (type == 3) {
      const statDonador = Donator.callStatus(id_usuario);
      if (!statDonador) {
        res.status(200).json({ status: 0 }); 
      } else {
        res.status(200).json({ status: statDonador });
      }
    }

  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear el usuario', error });
  }
};

const completarNecesidades = async (req, res) => {
  try {
    const { necesidades } = req.body;
    await Escuela.newNecesidades(necesidades);
    res.status(201).json({ mensaje: 'Información almacenada'});

  } catch (error) {
    console.error('Error al guardar la información:', error);
    res.status(500).json({ mensaje: 'Error al guardar la información', error });
  }
};


module.exports = {
  completarForm,
  InfoEscuela,
  statusEscuela,
  formularioContestado,
  completarNecesidades,
  subirMiddleware,
};
