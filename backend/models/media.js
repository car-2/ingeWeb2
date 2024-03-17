const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    titulo: {
        type: String,
    },
    sipnosis: {
        type: String,
    }, 
    URL: {
        type: String,
    },
    imagenPortada: {
        type: String
    },
    estreno: {
        type: Number,
    },
    generoPrincipal: {
        type: String,
        ref: 'Genre',
    },
    directorPrincipal: {
        type: String,
        ref: 'Director',
    },
    productora: {
        type: String,
        ref: 'Productora',
    },
    tipo: {
        type: String,
        ref: 'Tipo',
    },
    creado: {
        type: Date,
        default: Date.now
    },
    actualizado: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Media', mediaSchema);