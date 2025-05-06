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

const getProfiles = async (type, search) => {
    const filtros = [search, search, search, search, search, search];
  
    let sql = `
      SELECT 
        u.img AS imagen_responsable,
        u.nombre AS nombre_responsable,
        u.resumen AS resumen_responsable,
        u.correo_contacto AS correo_responsable,
        ie.necesidades,
        ie.nombre_escuela,
        p.resumen_institucion AS resumen_escuela,
        idr.nombre_institucion,
        p.resumen_institucion AS resumen_donador
      FROM usuarios u
      LEFT JOIN info_escuela ie ON u.id_usuario = ie.id_usuario
      LEFT JOIN info_donador idr ON u.id_usuario = idr.id_usuario
      LEFT JOIN perfil p ON u.id_usuario = p.id_usuario
      WHERE (
        u.nombre LIKE ? OR
        u.resumen LIKE ? OR
        u.correo_contacto LIKE ? OR
        ie.nombre_escuela LIKE ? OR
        p.resumen_institucion LIKE ? OR
        idr.nombre_institucion LIKE ?
      )
    `;

  
    if (type === 1) {
      sql += ' AND u.tipo IN (3, 2)';
    } else if (type === 2) {
      sql += ' AND u.tipo = 3';
    } else if (type === 3) {
      sql += ' AND u.tipo = 2';
    }
  
    const [result] = await db.execute(sql, filtros);
    return result;
  };



module.exports = {
    newInfo,
    getInfo,
    getProfiles
}