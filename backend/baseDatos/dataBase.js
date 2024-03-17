const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/cuevana';

mongoose.connect(URI);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Base de Datos MongoDB  conectada exitosamente al servidor');
});