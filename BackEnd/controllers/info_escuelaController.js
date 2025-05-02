const subirArchivo  = require("../models/archivosModel.js");
const multer = require("multer");//npm install express multer @aws-sdk/client-s3
const Escuela = require('../models/info_escuelaModel.js');
const Donante = require('../models/info_donadorModel.js');
const upload = multer({ dest: "uploads/" }); 
const path = require('path');

const subirMiddleware = upload.single("archivo");

const completarForm = async (req, res) => {
    try {
        const { correo_escuela, turn, nombre_escuela, dir_matutino, dir_vespertino, direccion, nombre, correo, edad } = req.body;
        let urlReporte = '';
        if (req.file) {
            const archivoLocalPath = req.file.path;
            const nombreArchivo = req.file.originalname;
            urlReporte = await subirArchivo.subirArchivo(archivoLocalPath, nombreArchivo);
        }
        await Escuela.newInfoSchool(correo_escuela, req.payload.id_usuario, turn, nombre_escuela, dir_matutino, dir_vespertino, direccion, urlReporte, nombre, correo, edad);

      res.status(201).json({ mensaje: 'Información almacenada', redirigir: 'portal/wait' });
  
    } catch (error) {
      console.error('Error al guardar la información:', error.message);
      console.error(error.stack);
      res.status(500).json({ mensaje: 'Error al guardar la información', error: error.message });
    }
  };

  const InfoEscuela = async (req, res) => {
  
    try{
      const resultado = await Escuela.getSolicitudesEscuelas();
      res.status(201).json({ mensaje: 'Solicitudes extraidas correctamente', response: resultado});
    }catch (error){
      console.error('Error al extraer los datos:', error);
      res.status(500).json({ mensaje: 'Error al extraer las solicitudes', error });
    }
  };

  const razonRechazo = async (req, res) => {
  
    try{
      const resultado = await Escuela.getRazonRechazo(req.payload.id_usuario);
      res.status(201).json({ mensaje: 'Razon extraida correctamente', response: resultado});
    }catch (error){
      console.error('Error al extraer la razon de rechazo:', error);
      res.status(500).json({ mensaje: 'Error al extraer la razon de rechazo:', error });
    }
  };
  

const changeStatus = async (req, res) => {
  const { id, status, razon_rechazo } = req.body; // id de escuela o donante

  try{
      const resultado = await Escuela.changeStatusEscuela(status, id, razon_rechazo);
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

const extraerStatus = async (req, res) => {
  try {
    if (req.type === 3){
      const response = await Donante.statusDonadorInicial(req.id);
      res.status(201).json({ mensaje: 'Status', status: response});
    }else {
      const response = await Escuela.statusEscuelaInicial(req.id);
      res.status(201).json({ mensaje: 'Status', status: response});
    }
  } catch (error) {
    console.error('Error al guardar la extraer status', error);
    res.status(500).json({ mensaje: 'Error al extraer status', error });
  }
};

module.exports = {
  completarForm,
  InfoEscuela,
  changeStatus,
  formularioContestado,
  completarNecesidades,
  subirMiddleware,
  extraerStatus,
  razonRechazo
};
