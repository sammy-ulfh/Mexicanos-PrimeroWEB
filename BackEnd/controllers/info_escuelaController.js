const Escuela = require('../models/info_escuelaModel.js');
const Donator = require('./info_donadorController.js');

const completarForm = async (req, res) => {
    try {
      const { id_usuario, type } = req.body;
  
      if (type == 2) {
        const { correo_institucional , turn, name_school, dir_mat, dir_ves, direction, report,  name_resp, email_resp, edad_resp } = req.body;
        await Escuela.newInfoSchool(correo_institucional, id_usuario, type, turn, name_school, dir_mat, dir_ves, direction, report, name_resp, email_resp, edad_resp);
      } 
      else if (type == 3) {
        const { rfc, correo, edad, ine, id_usuario, tipo, inst, nombre_institucion, correo_institucion, rfc_institucion, nombre_institucion, reporte } = req.body;
        await Donator.newInfoDonador(rfc, correo, edad, ine, id_usuario, tipo, inst, nombre_institucion, correo_institucion, rfc_institucion, nombre_institucion, reporte);
      }
  
      res.status(201).json({ mensaje: 'Información almacenada', redirigir: 'portal/wait' });
  
    } catch (error) {
      console.error('Error al guardar la información:', error);
      res.status(500).json({ mensaje: 'Error al guardar la información', error });
    }
  };

  const InfoEscuela = async (req, res) => {
  
    try{
      const resultado = await Escuela.getSolicitudesEscuelas();
      console.log(resultado);
      res.status(201).json({ mensaje: 'Solicitudes extraidas correctamente', response: resultado});
    }catch (error){
      console.error('Error al extraer los datos:', error);
      res.status(500).json({ mensaje: 'Error al extraer las solicitudes', error });
    }
  };
  

const statusEscuela = async (req, res) => {
  const { id, type, id_escuela, status, razon_rechazo } = req.body;
  console.log(req.body);

  try{
    const resultado = await Escuela.changeStatusEscuela(status, id_escuela, razon_rechazo);
    res.status(201).json({ mensaje: 'Status modificado correctamente', id: id, type: type});
  }catch (error){
    console.error('Error al modificar los datos:', error);
    res.status(500).json({ mensaje: 'Error al modificar los datos', error });
  }
};

const formularioContestado = async (req, res) => {
  const { id_usuario, tipo } = req.body;
  const type = parseInt(tipo, 10);

  try {
    if (type == 2) {
      const statEscuela = await Escuela.statusEscuelaInicial(id_usuario);

      if (!statEscuela) {
        res.status(200).json({ status: 0 }); 
      } else {
        res.status(200).json({ status: statEscuela });
      }

    } else if (type == 3) {
      const statDonador = Donator.callStatus(id_usuario);
      if (!statDonador) {
        res.status(200).json({ status: 0 }); 
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
  completarForm,
  InfoEscuela,
  statusEscuela,
  formularioContestado
};
