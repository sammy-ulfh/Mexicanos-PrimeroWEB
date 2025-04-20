const Usuario = require('../models/userModel.js');

const crearUsuario = async (req, res) => {
  const { type, email, password } = req.body;

  try{
    const resultado = await Usuario.crearUsuario(type, email, password);
    res.status(201).json({ mensaje: 'Usuario creado', id: resultado.insertId });
  }catch (error){
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear el usuario', error });
  }
};

module.exports = {
  crearUsuario,
};
