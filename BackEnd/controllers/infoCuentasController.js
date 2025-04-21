const Escuelas = require('../models/infoEscuelaModel.js');
const Donantes = require('../models/infoDonanteModel.js');

const InfoEscuela = async (req, res) => {

  try{
    const resultado = await Escuelas.getSolicitudesEscuelas();
    console.log(resultado);
    res.status(201).json({ mensaje: 'Solicitudes extraidas correctamente', response: resultado});
  }catch (error){
    console.error('Error al extraer los datos:', error);
    res.status(500).json({ mensaje: 'Error al extraer las solicitudes', error });
  }
};

const InfoDonante = async (req, res) => {

  try{
    const resultado = await Donantes.getSolicitudesDonantes();
    console.log(resultado);
    res.status(201).json({ mensaje: 'Solicitudes extraidas correctamente', response: resultado});
  }catch (error){
    console.error('Error al extraer los datos:', error);
    res.status(500).json({ mensaje: 'Error al extraer las solicitudes', error });
  }
};

module.exports = {
  InfoEscuela,
  InfoDonante,
};
