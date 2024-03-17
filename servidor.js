const express = require('express');
const app = express();
app.use(express.json());
require('./backend/baseDatos/dataBase.js');
const rutasDirector = require('./backend/routes/rutasDirector.js');
const rutasGeneros = require('./backend/routes/rutasGenero.js');
const rutasPeliculas = require('./backend/routes/rutasMedia.js');
const rutasProductora = require('./backend/routes/rutasProductora.js');
const rutasTipo = require('./backend/routes/rutasTipo.js');

async function principal(){
    await app.listen(8568);
    console.log("Servidor corriendo en el puerto 8568");

}
app.get('/', (req, res) =>{
    res.send("hola mundos");
});

app.use('/director', rutasDirector);
app.use('/generos', rutasGeneros);
app.use('/peliculas', rutasPeliculas);
app.use('/productora', rutasProductora);
app.use('/tipo', rutasTipo);

principal();