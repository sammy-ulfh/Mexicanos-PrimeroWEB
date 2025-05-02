const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.cookies.jwtToken;

    if (!token) {
        return res.status(401).json({ mensaje: 'Token no válido.' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            return res.status(403).json({ mensaje: 'Token inválido' });
        }

        req.payload = payload;
        req.id = payload.id_usuario;
        req.type = payload.tipo;
        next();
    });
}

module.exports = {
    verifyToken,
}
