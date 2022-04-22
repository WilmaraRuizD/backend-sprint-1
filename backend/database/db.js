const mysql = require('mysql2');
const {config} = require("dotenv");

config();

const mysqlConnection = mysql.createConnection({
  host:process.env.HOST || "",
  user:process.env.USER|| "",
  password:process.env.PASSWORD|| "",
  database: process.env.database|| "",
}, 'single');

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Conectado a bcvihi91hfj1t8zoymfa-mysql.services.clever-cloud.com ');
  }
});

module.exports = mysqlConnection;
