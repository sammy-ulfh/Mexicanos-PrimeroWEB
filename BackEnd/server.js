require('dotenv').config();
const app = require('./app.js');

const PORT = process.env.PORT;


app.listen(PORT, () => {
  console.log(`Servidor en escucha en localhost:${PORT}`);
});
