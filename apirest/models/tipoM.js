const mongoose = require('mongoose');

const tipoSchema = new mongoose.Schema({
    Nombre: {
        type: String,
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

module.exports = mongoose.model('tipoM', tipoSchema);