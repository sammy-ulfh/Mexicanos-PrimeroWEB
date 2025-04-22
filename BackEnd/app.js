const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/userRoutes.js');
const infoRoutes = require('./routes/infoSolicitudesCuentasRoutes.js');
const changeRoutes = require('./routes/changeStatusRoutes.js');
const newInfoSchoolRoutes = require('./routes/newInfoSchoolRoutes.js');

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/get', infoRoutes);

app.use('/change', changeRoutes);
app.use('/new', newInfoSchoolRoutes);


module.exports = app;
