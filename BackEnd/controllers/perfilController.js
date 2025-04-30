const Perfil = require('../models/perfilModel.js');

const completarPerfil = async (req, res) => {
    try {
  
        const { id_usuario, img_institucion, correo_institucion, resumen_institucion } = req.body;
        await Perfil.newInfo(id_usuario, img_institucion, correo_institucion, resumen_institucion );

      res.status(201).json({ mensaje: 'Información almacenada', redirigir: 'portal/wait' });
  
    } catch (error) {
      console.error('Error al guardar la información:', error);
      res.status(500).json({ mensaje: 'Error al guardar la información', error });
    }
  };

  module.exports = {
    completarPerfil,
  }