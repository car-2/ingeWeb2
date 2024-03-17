const mongoose = require('mongoose');

const tipoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: String,
    fechaCreacion: {
        type: Date,
        default: Date.now,
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model('Tipo', tipoSchema);