const Apoyo = require('../models/apoyoModel');

const newApoyo = async (req, res) => {
    const { id_chat, tipo_apoyo, descripcion} = req.body;

    if(req.payload.tipo == 2){
        try {
            console.log(req.body);
            await Apoyo.newApoyoEscuela(req.payload.id_usuario, tipo_apoyo, descripcion, id_chat);
            res.status(201).json({ mensaje: 'Información almacenada'});
        } catch (error) {
            console.error('Error al guardar la información:', error);
            res.status(500).json({ mensaje: 'Error al guardar la información', error });
        }
    }
    else if(req.payload.tipo == 3){
        try {
            await Apoyo.newApoyoDonador(req.payload.id_usuario, tipo_apoyo, descripcion, id_chat);
            res.status(201).json({ mensaje: 'Información almacenada'});
        } catch (error) {
            console.error('Error al guardar la información:', error);
            res.status(500).json({ mensaje: 'Error al guardar la información', error });
        }
    }
    
}

const cambiarStatus = async (req, res) => {
    try {
        const { id_apoyo,  status, razon_rechazo  } = req.body;
        console.log(req.body);
        if(status==3){
            await Apoyo.cambiarStatus(id_apoyo, null, status, razon_rechazo);
            res.status(201).json({ mensaje: 'Información almacenada', redirigir: 'http://localhost:5173/admin/apoyos' });
        }
        else if(status==2){
            await Apoyo.cambiarStatus(id_apoyo, req.payload.id_usuario, status, razon_rechazo);
            res.status(201).json({ mensaje: 'información almacenada', redirigir:'/admin/apoyos'});
        }
    } catch (error) {
        console.error('Error al guardar la información:', error);
        res.status(500).json({ mensaje: 'Error al guardar la información', error });
    }
}

const getApoyos = async (req, res) => {
    try {
        const result = await Apoyo.getApoyos();
        res.status(200).json({ mensaje: 'Solicitudes extraidas correctamente', response: result});
    } catch (error) {
        console.error('Error al obtener los apoyos:', error);
        res.status(500).json({ mensaje: 'Error al obtener los apoyos', error });
    }
}

module.exports = {
    newApoyo,
    cambiarStatus,
    getApoyos
};