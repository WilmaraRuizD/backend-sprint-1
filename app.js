const express = require('express');
const app = express();
const dev = require('dotenv').config();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnectio = require('express-myconnection');


//importando routes
const marcasRoutes =require('./routes/marcas');
const {urlencode} = require('express');

//settings
app.set('port', process.env.PORT||3000)

app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
 });

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));

//conexion a base de datos semillero
app.use(myconnectio(mysql, {
        host:process.env.HOST || "",
        user:process.env.USER|| "",
        password:process.env.PASSWORD|| "",
        database: process.env.database|| "",
    }, 'single'

))

app.use(express.urlencoded({
    extended: false
}))

//router
app.use('/', marcasRoutes);

//archivo estaticos-static files
app.use(express.static(path.join(__dirname, 'public')));