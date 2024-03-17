const express = require('express');
const rutas = express.Router();
const controladorGenero = require('../controllers/controladorGenero.js');

rutas.post('/', controladorGenero.crearGenero);
rutas.get('/', controladorGenero.buscarTodoGenero);
rutas.get('/:id', controladorGenero.buscarGenero);
rutas.patch('/:id', controladorGenero.actualizarGenero);
rutas.delete('/:id', controladorGenero.eliminarGenero);

module.exports = rutas;