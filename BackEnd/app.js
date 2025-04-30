const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/usuariosRoutes.js');
const schoolRoutes = require('./routes/info_escuelaRoutes.js');
const donatorRoutes = require('./routes/info_donadorRoutes.js');
const apoyoRoutes = require('./routes/apoyoRoutes.js');
const archivosRoutes = require('./routes/archivosRoutes.js');

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/school', schoolRoutes);
app.use('/donator', donatorRoutes);
app.use('/apoyo', apoyoRoutes);
app.use('/archivos', archivosRoutes);


module.exports = app;
