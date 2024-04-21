const mongoose = require('mongoose'); 

const mediaSchema = new mongoose.Schema({
    Titulo: {
        type: String,
    },

    Sipnosis: {
        type: String,
    },

    Link: {
        type: String,
    },

    Caratula: {
        type: String,
    },

    Estreno: {
        type: String,
    },

    Genero: {
        type: String,

    },

    Director: {
        type: String,

    },

    Productora: {
        type: String,

    },

    Tipo: {
        type: String,

    },

    CreadaEn: {
        type: Date,
        default: Date.now
    },

    ActualizadaEn: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('mediaM', mediaSchema);