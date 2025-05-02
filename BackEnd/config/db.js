const mysql = require('mysql2/promise');
require('dotenv').config()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: "root",
  password: "13Leon2017!",
  database: process.env.DB_NAME
});

module.exports = pool;
