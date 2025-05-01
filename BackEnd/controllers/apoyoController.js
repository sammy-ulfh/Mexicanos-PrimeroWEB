const Apoyo = require('../models/apoyoModel');

const newApoyo = async (req, res) => {

    const {id_apoyo} =req.body;
    tipo = 2;
    if(id_apoyo){
        newStatus(req, res);
    }
    if(tipo == 2){
        try {
            const { id_usuario, tipo_apoyo_escuela, descripcion_escuela} = req.body;
            console.log(req.body);
            await Apoyo.newApoyoEscuela(id_usuario, tipo_apoyo_escuela, descripcion_escuela, id_apoyo);
            res.status(201).json({ mensaje: 'Información almacenada'});
        } catch (error) {
            console.error('Error al guardar la información:', error);
            res.status(500).json({ mensaje: 'Error al guardar la información', error });
        }
    }
    else if(tipo == 3){
        try {
            const { tipo_apoyo_donador, descripcion_donador} = req.body;
            await Apoyo.newApoyoDonador(id_apoyo, tipo_apoyo_donador, descripcion_donador);
            res.status(201).json({ mensaje: 'Información almacenada'});
        } catch (error) {
            console.error('Error al guardar la información:', error);
            res.status(500).json({ mensaje: 'Error al guardar la información', error });
        }
    }
    
}

const cambiarStatus = async (req, res) => {
    try {
        const { status, razon_rechazo, id_apoyo } = req.body;
        if(status==3){
            await Apoyo.cambiarStatus(id_apoyo, null, status, razon_rechazo);
            res.status(201).json({ mensaje: 'Información almacenada', redirigir: 'portal/wait' });
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

const newStatus = async (req, res) => {
    try {
        const result = await Apoyo.newApoyo();
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