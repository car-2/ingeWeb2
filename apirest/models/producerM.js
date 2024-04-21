const mongoose = require('mongoose');

const producerSchema = new mongoose.Schema({
    Nombre: {
        type: String,
        required: true,
        unique: true
    },
    
    Slogan: String,

    Estado: {
        type: String,
        default: 'Inactivo'
    },

    Descripcion: String,

    fechaCreacion: {
        type: Date,
        default: Date.now
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('producerM', producerSchema);