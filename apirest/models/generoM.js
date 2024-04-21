const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema({
    Nombre: {
        type: String,
    },

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

module.exports = mongoose.model('generoM', generoSchema);