const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema({
    nombre: {
        type: String

    },
    estado: {
        type: String,
        enum: ['Activo', 'Inactivo'],
        default: 'Activo'
    },
    creacion: {
        type: Date,
        default: Date.now,
        // unique: true
    },
    actualizacion: {
        type: Date,
        default: Date.now
    },
    slogan: String,
    descripcion: String
});

module.exports = mongoose.model('Productora', productoraSchema);