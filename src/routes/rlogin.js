var express = require('express');
 var logincontroller = require('../Controllers/LoginController.js');
 // Llamamos al router
var app = express.Router();
 // Creamos una ruta de tipo GET para el método de pruebas
app.post('/login', logincontroller.login);
 // Exportamos la configuración
module.exports = app;