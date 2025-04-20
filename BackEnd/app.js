const express = require('express');
const cors = require('cors');
const app = express();

const userRoutes = require('./routes/userRoutes.js');

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);

module.exports = app;
