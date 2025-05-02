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
const chatParticipantesRoutes = require('./routes/chat_participantesRoutes.js');
const mensajesRoutes = require('./routes/mensajesRoutes.js');

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173', // frontend Vite
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true // solo si usas cookies o autenticación por sesión
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

// Ruta de prueba directa (para aislar errores)
app.get('/prueba/:id', (req, res) => {
  res.json({ mensaje: `Ruta de prueba recibida con ID: ${req.params.id}` });
});

module.exports = app;
