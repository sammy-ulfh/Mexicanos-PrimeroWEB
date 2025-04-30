const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const token = req.cookies.jwtToken;
    console.log(token);

    if(!token){
        res.status(401).json({ mensaje: 'Token no valido.' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err){
            res.status(403).json({ mensaje: 'Token inválido' });
        }

        req.payload = payload;
        req.id = req.payload.id_usuario;
        req.type = req.payload.tipo;
        next();
    })

}

module.exports = {
    verifyToken,
}