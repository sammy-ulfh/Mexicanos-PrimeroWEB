const Donantes = require('../models/info_donadorModel.js');

const statusDonante = async (req, res) => {
  const { id, type, id_donante, status, razon_rechazo } = req.body;
  console.log(req.body);

  try{
    const resultado = await Donantes.changeStatusDonante(status, id_donante, razon_rechazo);
    res.status(201).json({ mensaje: 'Status modificado correctamente', id: id, type: type});
  }catch (error){
    console.error('Error al modificar los datos:', error);
    res.status(500).json({ mensaje: 'Error al modificar los datos', error });
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

const callStatus = async (id_usuario) => {
  const status = await Donantes.statusDonadorInicial(id_usuario);
  return status;
};

module.exports = {
  InfoDonante,
  statusDonante,
  callStatus
};
