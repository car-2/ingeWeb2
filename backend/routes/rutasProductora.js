const express = require('express');
const rutas = express.Router();
const controladorProductora = require('../controllers/controladorProductora.js');

rutas.post('/', controladorProductora.crearProductora);
rutas.get('/', controladorProductora.obtenerTodoProductora);
rutas.get('/:id', controladorProductora.obtenerProductora);
rutas.patch('/:id', controladorProductora.actualizarProductora);
rutas.delete('/:id', controladorProductora.eliminarProductora);

module.exports = rutas;