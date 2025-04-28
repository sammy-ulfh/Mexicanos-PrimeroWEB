const Apoyo = require('../models/apoyoModel');


const newApoyo = async (req, res) => {
    try {
        const {  id_escuela, id_donador, id_admin } = req.body;
        await Apoyo.newApoyo(id_escuela, id_donador, id_admin);
        res.status(201).json({ mensaje: 'Información almacenada'});
    } catch (error) {
        console.error('Error al guardar la información:', error);
        res.status(500).json({ mensaje: 'Error al guardar la información', error });
    }
}

const newApoyoDescripcion = async (req, res) => {

    const {tipo, id_apoyo} =req.body;
    if(tipo == 2){
        try {
            const { tipo_apoyo_escuela, descripcion_escuela} = req.body;
            await Apoyo.newApoyoEscuela(id_apoyo, tipo_apoyo_escuela, descripcion_escuela);
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
        await Apoyo.cambiarStatus(id_apoyo, status, razon_rechazo);
        res.status(201).json({ mensaje: 'Información almacenada'});
    } catch (error) {
        console.error('Error al guardar la información:', error);
        res.status(500).json({ mensaje: 'Error al guardar la información', error });
    }
}

module.exports = {
    newApoyo,
    newApoyoDescripcion,
    cambiarStatus
};