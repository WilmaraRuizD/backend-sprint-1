const express = require('express');
const app = express();
const dev = require('dotenv').config();
const path = require('path');
const morgan = require('morgan');

//importando routes

//const marcasRoutes =require('./routes/marcas');
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
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//router
//app.use('/', marcasRoutes);

app.use(require('./router/marcas'));
app.use(require('./router/lineas'));
app.use(require('./router/vehiculos'));
app.use('/api/marcas',require('./router/marcas'));
app.use('/api/lineas',require('./router/lineas'));
app.use('/api/vehiculos',require('./router/vehiculos'));

//archivo estaticos-static files
app.use(express.static(path.join(__dirname, 'public')));