const Donantes = require('../models/info_donadorModel.js');
const subirArchivo  = require("../models/archivosModel.js");
const multer = require("multer");//npm install express multer @aws-sdk/client-s3
const upload = multer({ dest: "uploads/" });
const path = require('path');

const subirMiddleware = upload.fields([{name: "ine", maxCount: 1}, {name: "reporte", maxCount: 1}]); // Cambia 'archivo' por el nombre del campo en tu formulario

const changeStatus = async (req, res) => {
  const { id, status, razon_rechazo } = req.body;

  try{
    const resultado = await Donantes.changeStatusDonante(status, id, razon_rechazo);
    res.status(201).json({ mensaje: 'Status modificado correctamente', id: id});
  }catch (error){
    console.error('Error al modificar los datos:', error);
    res.status(500).json({ mensaje: 'Error al modificar los datos', error });
  }
};

const InfoDonante = async (req, res) => {

  try{
    const resultado = await Donantes.getSolicitudesDonantes();
    res.status(201).json({ mensaje: 'Solicitudes extraidas correctamente', response: resultado});
  }catch (error){
    console.error('Error al extraer los datos:', error);
    res.status(500).json({ mensaje: 'Error al extraer las solicitudes', error });
  }
};

const completarForm = async (req, res) => {
    try {

      console.log(req.body);
      const { rfc, correo, edad, inst, correo_institucion, rfc_institucion, nombre_institucion } = req.body;
      let urlReporte = '';
      let urlINE = '';
      if (req.files?.ine?.[0]) {
          const archivo = req.files.ine[0];
          urlINE = await subirArchivo.subirArchivo(archivo.path, archivo.originalname);
      }
      if (req.files?.reporte?.[0]) {
        const archivo = req.files.reporte[0];
        urlReporte = await subirArchivo.subirArchivo(archivo.path, archivo.originalname);
      }
      console.log(req);
      await Donantes.newInfoDonador(rfc, req.payload.id_usuario, correo, edad, urlINE, inst, nombre_institucion, correo_institucion, rfc_institucion, urlReporte);

      res.status(201).json({ mensaje: 'Información almacenada', redirigir: 'portal/wait' });
  
    } catch (error) {
      console.error('Error al guardar la información:', error.message);
      console.error(error.stack);
      res.status(500).json({ mensaje: 'Error al guardar la información', error: error.message });
    }
  };

const extraerStatus = async (req, res) => {
  try {
      const response = await Donantes.statusDonadorInicial(req.id);
      res.status(201).json({ mensaje: 'Status', status: response});

  } catch (error) {
    console.error('Error al guardar la extraer status', error);
    res.status(500).json({ mensaje: 'Error al extraer status', error });
  }
};

const razonRechazo = async (req, res) => {
  
    try{
      const resultado = await Donantes.getRazonRechazo(req.payload.id_usuario);
      res.status(201).json({ mensaje: 'Razon extraida correctamente', response: resultado});
    }catch (error){
      console.error('Error al extraer la razon de rechazo:', error);
      res.status(500).json({ mensaje: 'Error al extraer la razon de rechazo:', error });
    }
  };

module.exports = {
  InfoDonante,
  changeStatus,
  completarForm,
  subirMiddleware,
  extraerStatus,
  razonRechazo
};
