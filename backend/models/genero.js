const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
    nombre: {
        type: String
    },
    estado: {
        type: String,
        enum: ['activo', 'inactivo'],
        default: 'activo'
    },
    creacion: {
        type: Date,
        default: Date.now
    },
    actualizacion: {
        type: Date,
        default: Date.now
    },
    descripcion: String
});

module.exports = mongoose.model('Genre', genreSchema);