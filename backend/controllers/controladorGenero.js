const Genero = require('../models/genero.js');

exports.crearGenero = async (req, res) => {
    const genero = new Genero(req.body);
    await genero.save();
    res.status(200).send(genero);
};
exports.buscarTodoGenero = async (req, res) => {
    const genero = await Genero.find();
    res.status(200).send(genero);
};
exports.buscarGenero = async (req, res) => {
    const idGenero = req.params.id;
    const genero = await Genero.findById({ _id: idGenero });
    res.status(200).send(genero);
};
exports.actualizarGenero = async (req, res) => {
    const idGenero = req.params.id;
    const genero = await Genero.findByIdAndUpdate({ _id: idGenero }, {$set: req.body}, {new: true});
    if (!genero) {
        return res.status(404).send({ mensaje: 'No se logro actualizar, no se encontro el genero' });
    }
    res.status(200).send(genero);
};
exports.eliminarGenero = async (req, res) => {
    const idGenero = req.params.id;
    const genero = await Genero.findByIdAndDelete({ _id: idGenero }, {new: true});
    if (!genero) {
        return res.status(404).send({ mensaje: 'No se logro eliminar, no se encontro el genero' });
    }
    res.status(200).json({ mensaje: 'Genero eliminado' });

};