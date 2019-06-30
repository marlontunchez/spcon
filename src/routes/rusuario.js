var express = require('express');

const requireToken = require('../middlewares/requireToken');
var uscontroller = require('../Controllers/UsuarioController.js');
var app = express.Router();
app.get('/usuarios', requireToken, uscontroller.getall);
app.post('/usuarios/edit', requireToken, uscontroller.editar);
app.put('/usuarios/delete', requireToken, uscontroller.eliminar);
app.post('/usuarios/create', requireToken, uscontroller.crear);

module.exports = app;