const FormEscuela = require('../models/inicialFormEscuelaModel.js');
const FormDonador = require('../models/inicialFormDonadorModel.js');

const formularioContestado = async (req, res) => {
  const { id_usuario, type } = req.query;

  try {
    if (type == 2) {
      const statEscuela = await FormEscuela.statusEscuelaInicial(id_usuario);

      if (!statEscuela) {
        res.status(200).json({ status: 0 }); // 0 = no existe, se redirigía a 'new/account/school'
      } else {
        res.status(200).json({ status: statEscuela });
      }

    } else if (type == 3) {
      const statDonador = await FormDonador.statusDonadorInicial(id_usuario);

      if (!statDonador) {
        res.status(200).json({ status: 0 }); // 0 = no existe, se redirigía a 'new/account/donator'
      } else {
        res.status(200).json({ status: statDonador });
      }
    }

  } catch (error) {
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear el usuario', error });
  }
};

module.exports = {
  formularioContestado,
};
