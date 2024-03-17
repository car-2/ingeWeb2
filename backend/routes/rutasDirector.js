const express = require('express');
const rutas = express.Router();
const controlador = require('../controllers/controladorDirector.js');

rutas.post('/', controlador.crearDirector);
rutas.get('/', controlador.buscarTodoDirector);
rutas.get('/:id', controlador.buscarDirector);
rutas.patch('/:id', controlador.actualizarDirector);
rutas.delete('/:id', controlador.eliminarDirector);

module.exports = rutas;