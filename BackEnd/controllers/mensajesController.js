const Mensajes = require('../models/mensajesModel.js');

const saveMessage = async (req, res) => {
  try {
    const { id_chat, texto } = req.body;
    if (!id_chat || !req.payload.id_usuario || !texto) {
      return res.status(400).json({ mensaje: 'Faltan datos obligatorios' });
    }
    console.log(req.body);
    
    const result = await Mensajes.saveMessage(id_chat, req.payload.id_usuario, texto);
    res.status(201).json({
      mensaje: 'Mensaje guardado correctamente',
      id_mensaje: result.insertId,
      id_chat,
      texto,
    });
  } catch (error) {
    console.error('Error al guardar el mensaje:', error);
    res.status(500).json({ mensaje: 'Error al guardar el mensaje', error });
  }
};

const getMessages = async (req, res) => {
  try {
    const { id_chat } = req.params;
    if (!id_chat) {
      return res.status(400).json({ mensaje: 'Debe especificar idChat' });
    }

    const mensajes = await Mensajes.getMessagesByChat(id_chat);
    res.status(200).json({
      mensaje: 'Mensajes obtenidos correctamente',
      response: mensajes,
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