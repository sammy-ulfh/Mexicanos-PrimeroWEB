const Usuarios = require('../models/usuariosModel.js');
const Perfil = require('../models/perfilModel.js');
const InfoEscuela = require('../models/info_escuelaModel.js');

const getPublicProfile = async (req, res) => {
  try {
    // el id del usuario debe venir en el header "user-id"
    const userId = req.headers['user-id'];
    if (!userId) return res.status(400).json({ mensaje: 'Falta el id de usuario en headers' });

    const user = await Usuarios.getUserById(userId);
    if (!user) return res.status(404).json({ mensaje: 'Usuario no encontrado' });

    const profile = await Perfil.getInfo(userId);
    let escuelaInfo = null;
    // asumir que para escuelas el campo -tipo- es 2
    if (user.tipo == 2) {
      escuelaInfo = await InfoEscuela.getInfoEscuelaByUser(userId);
    }
    return res.status(200).json({ user, profile, escuelaInfo });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener el perfil público', error: error.message });
  }
};

module.exports = {
  getPublicProfile
};
