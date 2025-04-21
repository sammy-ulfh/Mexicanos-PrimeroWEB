const newInfoSchool = require('../models/newInfoSchoolModel.js');
const newInfoDonador = require('../models/newInfoDonadorModel.js');

const completarForm = async (req, res) => {
    try {
      const { id_usuario, tipo } = req.body;
      const type = parseInt(tipo, 10);


  
      if (type == 2) {
        const { turn, name_school, dir_mat, dir_ves, direction,  name_resp, email_resp, edad_resp } = req.body;
        await newInfoSchool.newInfoSchool(id_usuario, type, turn, name_school, dir_mat, dir_ves, direction, name_resp, email_resp, edad_resp);
      } 
      else if (type == 3) {
        const { rfc_resp, correo_responsable, tipo, inst, nombre_responsable, correo_institucion, rfc, edad_responsable, nombre_institucion, ine} = req.body;
        await newInfoDonador.newInfoDonador(rfc_resp, correo_responsable, id_usuario, tipo, inst, nombre_responsable, correo_institucion, rfc, edad_responsable, nombre_institucion, ine);
      }
  
      res.status(201).json({ mensaje: 'Formulario Enviado', redirigir: 'portal/wait' });
  
    } catch (error) {
      console.error('Error al crear el usuario:', error);
      res.status(500).json({ mensaje: 'Error al crear el usuario', error });
    }
  };
  

module.exports = {
  completarForm,
};
