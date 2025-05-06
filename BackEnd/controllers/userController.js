const jwt = require('jsonwebtoken');
const subirArchivo  = require("../models/archivosModel.js");
const multer = require("multer");
const Usuario = require('../models/usuariosModel.js');
const upload = multer({ dest: "uploads/" }); 
const path = require('path');
const { get } = require('http');

const subirMiddleware = upload.single("archivo");

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

      res.status(201).json({ token, id: payload.id_usuario, type: payload.tipo, name: payload.nombre});
    }else{
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

const setProfilePicture = async (req, res) => {
  try{
    let urlImagen = '';
    if (req.file) {
      const archivoLocalPath = req.file.path;
      const nombreArchivo = req.file.originalname;
      urlImagen = await subirArchivo.subirArchivo(archivoLocalPath, nombreArchivo);
    }
    const resultado = await Usuario.setProfilePicture(req.payload.id_usuario, urlImagen);
    res.status(201).json({ mensaje: 'Imagen extraida correctamente', response: resultado });
  }catch (error){
    console.error('Error al extraer la imagen:', error);
    res.status(500).json({ mensaje: 'Error al extraer la imagen', error });
  }
};

const getProfilePicture = async (req, res) => {
    try{
      const resultado = await Usuario.getProfilePicture(req.payload.id_usuario);
      res.status(200).json({ mensaje: 'Imagen extraida correctamente', response: resultado });
    }catch (error){
      console.error('Error al extraer la imagen:', error);
      res.status(500).json({ mensaje: 'Error al extraer la imagen', error });
    }
  }

 const setNombre = async (req, res) => {
  console.log('body:', req.body);
  const { nombre } = req.body;
  
  try {
    const resultado = await Usuario.setNombre(req.payload.id_usuario, nombre);
    res.status(201).json({ mensaje: 'Nombre actualizado correctamente', response: resultado });
  } catch (error) {
    console.error('Error al actualizar el nombre:', error);
    res.status(500).json({ mensaje: 'Error al actualizar el nombre', error });
  }
}

const getNombre = async (req, res) => {
  const { id_usuario } = req.body;
  try {
    const resultado = await Usuario.getNombre(id_usuario);
    res.status(200).json({ mensaje: 'Nombre extraido correctamente', response: resultado });
  } catch (error) {
    console.error('Error al extraer el nombre:', error);
    res.status(500).json({ mensaje: 'Error al extraer el nombre', error });
  }
}

const changePassword = async (req, res) => {
  const { password } = req.body;
  try {
    const resultado = await Usuario.changePassword(req.payload.id_usuario, password);
    res.status(201).json({ mensaje: 'Contraseña actualizada correctamente', response: resultado });
  } catch (error) {
    console.error('Error al actualizar la contraseña:', error);
    res.status(500).json({ mensaje: 'Error al actualizar la contraseña', error });
  }
}

const deleteUser = async (req, res) => {
  try {
    const resultado = await Usuario.deleteUser(req.payload.id_usuario);
    res.status(200).json({ mensaje: 'Usuario eliminado correctamente', response: resultado });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    res.status(500).json({ mensaje: 'Error al eliminar el usuario', error });
  }
}


module.exports = {
  crearUsuario,
  loginUser,
  setProfilePicture,
  subirMiddleware,
  getProfilePicture, 
  setNombre,
  getNombre,
  changePassword,
  deleteUser

};
