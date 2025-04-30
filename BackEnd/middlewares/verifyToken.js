const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        res.status(401).json({ mensaje: 'Token no valido.' });
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err){
            res.status(403).json({ mensaje: 'Token inválido' });
        }

        req.payload = payload;
        next();
    })

}

module.exports = {
    verifyToken,
}