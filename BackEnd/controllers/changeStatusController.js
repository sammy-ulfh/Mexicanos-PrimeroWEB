const Status = require('../models/changeStatusModel.js');

const statusEscuela = async (req, res) => {
  const { id, type, id_escuela, status, razon_rechazo } = req.body;
  console.log(req.body);

  try{
    const resultado = await Status.changeStatusEscuela(status, id_escuela, razon_rechazo);
    res.status(201).json({ mensaje: 'Status modificado correctamente', id: id, type: type});
  }catch (error){
    console.error('Error al modificar los datos:', error);
    res.status(500).json({ mensaje: 'Error al modificar los datos', error });
  }
};

const statusDonante = async (req, res) => {
  const { id, type, id_donante, status, razon_rechazo } = req.body;
  console.log(req.body);

  try{
    const resultado = await Status.changeStatusDonante(status, id_donante, razon_rechazo);
    res.status(201).json({ mensaje: 'Status modificado correctamente', id: id, type: type});
  }catch (error){
    console.error('Error al modificar los datos:', error);
    res.status(500).json({ mensaje: 'Error al modificar los datos', error });
  }
};

module.exports = {
  statusEscuela,
  statusDonante,
};
