const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const userRoutes = require('./routes/usuariosRoutes.js');
const schoolRoutes = require('./routes/info_escuelaRoutes.js');
const donatorRoutes = require('./routes/info_donadorRoutes.js');
const apoyoRoutes = require('./routes/apoyoRoutes.js');
const archivosRoutes = require('./routes/archivosRoutes.js');
const perfilRoutes = require('./routes/perfilRoutes.js');
const chatRoutes = require('./routes/chatRoutes.js');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/user', userRoutes);
app.use('/school', schoolRoutes);
app.use('/donator', donatorRoutes);
app.use('/perfil', perfilRoutes);
app.use('/apoyo', apoyoRoutes);
app.use('/archivos', archivosRoutes);
app.use('/chat', chatRoutes);


module.exports = app;
