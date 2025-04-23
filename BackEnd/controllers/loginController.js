const jwt = require('jsonwebtoken');

const Login = require('../models/loginModel.js');

const loginUser =  async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password){
    req.status(400).json({ mensaje: 'Ningun dato debe estar vacio.' });
  }

  try{
    const verifyUser = await Login.user(email, password);

    if (verifyUser.length > 0){
      const payload = verifyUser[0];
      
      const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1h' });

      res.json({ token });
    }
    else{
      res.status(404).json({ mensaje: 'Correo o contraseña incorrecto.' });
    }
  }catch(err){
    res.status(500).json({ mensaje: 'Error al generar el token.', err });
  }
}

module.exports = {
  loginUser,
}
