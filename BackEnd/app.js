const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

const userRoutes = require('./routes/usuariosRoutes.js');
const schoolRoutes = require('./routes/info_escuelaRoutes.js');
const donatorRoutes = require('./routes/info_donadorRoutes.js');
const middlewareRoutes = require('./middlewares/middlewareRoutes');
const apoyoRoutes = require('./routes/apoyoRoutes.js');

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/user', userRoutes);
app.use('/school', schoolRoutes);
app.use('/donator', donatorRoutes);
app.use('/verify', middlewareRoutes);

app.use('/apoyo', apoyoRoutes);


module.exports = app;
