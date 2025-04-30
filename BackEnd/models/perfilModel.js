const db = require('../config/db.js');

const newInfo = async (id_usuario, img_institucion, correo_institucion, resumen_institucion ) => {
        const [result] = await db.execute(
          'INSERT INTO info_escuela(id_usuario, img_institucion, correo_institucion, resumen_institucion) VALUES(?, ?, ?, ?)',
          [id_usuario, img_institucion, correo_institucion, resumen_institucion]
        );
        return result;
}

module.exports = {
    newInfo,
}