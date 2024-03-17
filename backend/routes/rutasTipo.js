const exprees = require('express');
const rutas = exprees.Router();
const controladorTipo = require('../controllers/controladorTipo.js');

rutas.post('/', controladorTipo.crearTipo);
rutas.get('/', controladorTipo.obtenerTodoTipo);
rutas.get('/:id', controladorTipo.obtenerTipo);
rutas.patch('/:id', controladorTipo.actualizarTipo);
rutas.delete('/:id', controladorTipo.eliminarTipo);


module.exports = rutas;