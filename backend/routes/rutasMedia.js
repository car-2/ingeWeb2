const express = require('express');
const rutas = express.Router();
const controladorMedia = require('../controllers/controladorMedia.js');

rutas.post('/', controladorMedia.crearMedia);
rutas.get('/', controladorMedia.obtenerTodoMedia);
rutas.get('/:id', controladorMedia.obtenerMedia);
rutas.patch('/:id', controladorMedia.actualizarMedia);
rutas.delete('/:id', controladorMedia.eliminarMedia);

module.exports = rutas;