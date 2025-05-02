const Perfil = require('../models/perfilModel.js');

const completarPerfil = async (req, res) => {
    try {
  
        const { id_usuario, img_institucion, correo_institucion, resumen_institucion, necesidades } = req.body;
        await Perfil.newInfo(id_usuario, img_institucion, correo_institucion, resumen_institucion, necesidades);

      res.status(201).json({ mensaje: 'Información almacenada', redirigir: 'portal/wait' });
  
    } catch (error) {
      console.error('Error al guardar la información:', error);
      res.status(500).json({ mensaje: 'Error al guardar la información', error });
    }
  };

  const getInfo = async (req, res) => {
    try {
        const { id_usuario } = req.body;
        const info = await Perfil.getInfo(id_usuario);
        res.status(200).json(info);
    } catch (error) {
        console.error('Error al obtener la información:', error);
        res.status(500).json({ mensaje: 'Error al obtener la información', error });
    }
  }

  const extraerPerfiles = async (req, res) => {
    try {
  
        const { search } = req.body;
        const data = await Perfil.getProfiles(req.type, search);

      res.status(201).json({ mensaje: 'Perfiles extraidos correctamente', data: data });
  
    } catch (error) {
      console.error('Error al extraer los perfiles:', error);
      res.status(500).json({ mensaje: 'Error al extraer los perfiles', error });
    }
  };

  module.exports = {
    completarPerfil,
    getInfo,
    extraerPerfiles
  }