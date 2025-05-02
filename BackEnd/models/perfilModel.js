const db = require('../config/db.js');

const newInfo = async (id_usuario, img_institucion, correo_institucion, resumen_institucion, necesidades = null) => {
        const [result] = await db.execute(
          'INSERT INTO perfil(id_usuario, img_institucion, correo_institucion, resumen_institucion) VALUES(?, ?, ?, ?)',
          [id_usuario, img_institucion, correo_institucion, resumen_institucion]
        );

        if (necesidades){
            const [result2] = await db.execute(
                'INSERT INTO info_escuela(necesidades) VALUES(?) WHERE id_usuario = ?',
                [necesidades, id_usuario]
            );
        }

        return result;
}

const getInfo = async (id_usuario) => {
    const [result] = await db.execute(
        'SELECT * FROM perfil WHERE id_usuario = ?',
        [id_usuario]
    );
    return result;
}

module.exports = {
    newInfo,
    getInfo
}