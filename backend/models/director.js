const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    nombre: {
        type: String,

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
    }
});

module.exports = mongoose.model('Director', directorSchema);