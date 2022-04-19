const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  port: 3306,
  database: 'semillero',
  multipleStatements:true
});

  mysqlConnection.connect(function (err) {
     if (err) {
      console.error(err);
      return;
    } else {
      console.log('Db is connected');
    }
  });
  
  module.exports = mysqlConnection;