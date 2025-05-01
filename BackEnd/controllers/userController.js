const jwt = require('jsonwebtoken');

const Usuario = require('../models/usuariosModel.js');

const loginUser =  async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password){
    req.status(400).json({ mensaje: 'Ningun dato debe estar vacio.' });
  }

  try{
    const verifyUser = await Usuario.user(email, password);

    if (verifyUser.length > 0){
      const payload = verifyUser[0];
      
      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });

      res.json({ token });
    }
    else{
      res.status(404).json({ mensaje: 'Correo o contraseña incorrecto.' });
    }
  }catch(err){
    res.status(500).json({ mensaje: 'Error al iniciar sesión.', err });
  }
}

const crearUsuario = async (req, res) => {
  const {type, email, password } = req.body;

  if (!type || !email || !password){
    res.status(400).json({ mensaje: 'Faltan datos' });
  }

  try{
    const resultado = await Usuario.crearUsuario(type, email, password);
    res.status(201).json({ mensaje: 'Usuario creado', id: resultado.insertId });
  }catch (error){
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear el usuario', error });
  }
};

const mandarPerfil = async (req, res) => {
  if(req.payload.tipo == 2){
    res.status(200).json({mensaje: 'Redirigiendo', redirigir: '/configuration/profile/school'});
  }
  else if(req.payload.tipo == 3){
    res.status(200).json({mensaje: 'Redirigiendo', redirigir: '/configuration/profile/donator'});
  }
  else{
    res.status(400).json({mensaje: 'Error al redirigir'});
  }
};

module.exports = {
  crearUsuario,
  loginUser,
  mandarPerfil
};
