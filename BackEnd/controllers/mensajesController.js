const Mensajes = require('../models/mensajesModel.js');

const saveMessage = async (req, res) => {
  try {
    const { idChat, contenido } = req.body;
    console.log(req.body);
    if (!idChat || !req.payload.id_usuario || !contenido) {
      return res.status(400).json({ mensaje: 'Faltan datos obligatorios' });
    }
    
    const result = await Mensajes.saveMessage(idChat, req.payload.id_usuario, contenido);
    res.status(201).json({
      mensaje: 'Mensaje guardado correctamente',
      idMensaje: result.insertId,
      idChat,
      contenido,
    });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    res.status(500).json({ mensaje: 'Error al guardar el mensaje', error });
  }
};

const getMessages = async (req, res) => {
  try {
    const { idChat } = req.params;
    if (!idChat) {
      return res.status(400).json({ mensaje: 'Debe especificar idChat' });
    }

    const mensajes = await Mensajes.getMessagesByChat(idChat);
    res.status(200).json({
      mensaje: 'Mensajes obtenidos correctamente',
      mensajes,
    });
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
    res.status(500).json({ mensaje: 'Error al obtener mensajes', error });
  }
};

module.exports = {
  saveMessage,
  getMessages,
};