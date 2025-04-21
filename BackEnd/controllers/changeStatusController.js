const Escuelas = require('../models/changeStatusEscuelaModel.js');
//const Donantes = require('../models/infoDonanteModel.js');

const statusEscuela = async (req, res) => {
  const { id, type, id_escuela, status, razon_rechazo } = req.body;
  console.log(req.body);

  try{
    const resultado = await Escuelas.changeStatusEscuela(status, id_escuela, razon_rechazo);
    res.status(201).json({ mensaje: 'Status modificado correctamente', id: id, type: type});
  }catch (error){
    console.error('Error al modificar los datos:', error);
    res.status(500).json({ mensaje: 'Error al modificar los datos', error });
  }
};
/*
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
*/
module.exports = {
  statusEscuela,
};
