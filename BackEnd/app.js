const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

// Importar rutas
const userRoutes = require('./routes/usuariosRoutes.js');
const schoolRoutes = require('./routes/info_escuelaRoutes.js');
const donatorRoutes = require('./routes/info_donadorRoutes.js');
const apoyoRoutes = require('./routes/apoyoRoutes.js');
const archivosRoutes = require('./routes/archivosRoutes.js');
const perfilRoutes = require('./routes/perfilRoutes.js');
const chatRoutes = require('./routes/chatRoutes.js');
const chatParticipantesRoutes = require('./routes/chat_participantesRoutes'); // aun no sale
const mensajesRoutes = require('./routes/mensajesRoutes'); // aun no sale

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173', // El frontend
  credentials: true                // Permite enviar cookies/sesiones
}));
app.use(express.json());
app.use(cookieParser());

// Rutas principales
app.use('/user', userRoutes);
app.use('/school', schoolRoutes);
app.use('/donator', donatorRoutes);
app.use('/perfil', perfilRoutes);
app.use('/apoyo', apoyoRoutes);
app.use('/archivos', archivosRoutes);
app.use('/chat', chatRoutes);
app.use('/chat_participantes', chatParticipantesRoutes);
app.use('/mensajes', mensajesRoutes);

app.use('/api', mensajesRoutes);

module.exports = app;