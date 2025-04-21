const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/userRoutes.js');
const infoRoutes = require('./routes/infoSolicitudesCuentasRoutes.js');
const newInfoSchoolRoutes = require('./routes/newInfoSchoolRoutes.js');
const changeRoutes = require('./routes/changeStatusRoutes.js');

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/get', infoRoutes);

app.use('/new', newInfoSchoolRoutes);

app.use('/change', changeRoutes);


module.exports = app;
