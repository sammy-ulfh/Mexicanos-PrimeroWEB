const FormEscuela = require('../models/inicialFormEscuelaModel.js');
const FormDonador = require('../models/inicialFormDonadorModel.js');
const Type = require('../models/typeModel.js');

const formularioContestado = async (req, res) => {
  const { id_usuario } = req.body;

  try{
    const type = await Type.typeUser(id_usuario);
    
    
    if (type == 2 ) {
      const statEscuela = await FormEscuela.statusEscuelaInicial(id_usuario);
      if(!statEscuela){
        res.status(200).json({redirigir: 'new/account/school'});
      }
      else if (statEscuela == 1){
        res.status(200).json({redirigir: 'portal/wait'});
      }
      else if (statEscuela == 2){
        res.status(200).json({redirigir: 'portal/school'});
      }
      else if (statEscuela == 3){
        res.status(200).json({redirigir: 'portal/rejected'});
      }
    } 
    
    else if (type == 3)
    {
      const statDonador = await FormDonador.statusDonadorInicial(id_usuario);
      if(!statDonador){
        res.status(200).json({redirigir: 'new/account/donator'});
      }
      else if (statDonador == 1){
        res.status(200).json({redirigir: 'portal/wait'});
      }
      else if (statDonador == 2){
        res.status(200).json({redirigir: 'portal/school'});
      }
      else if (statDonador == 3){
        res.status(200).json({redirigir: 'portal/rejected'});
      }
    }

  }catch (error){
    console.error('Error al crear el usuario:', error);
    res.status(500).json({ mensaje: 'Error al crear el usuario', error });
  }
};

module.exports = {
  formularioContestado,
};
