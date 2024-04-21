const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({
    Nombre: {
        type: String,
    },

    Estado: {
        type: String, 
        default: 'Inactivo'
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Director', directorSchema);