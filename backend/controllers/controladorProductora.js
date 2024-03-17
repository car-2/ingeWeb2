const Productora = require('../models/productora.js');

exports.crearProductora = async (req, res) => {
    const productora = new Productora(req.body);
    await productora.save();
    res.status(200).json(productora);
};
exports.obtenerTodoProductora = async (req, res) => {
    const productora = await Productora.find();
    res.status(200).json(productora);
};
exports.obtenerProductora = async (req, res) => {
    const productora = await Productora.findById(req.params.id);
    res.status(200).json(productora);
};
exports.actualizarProductora = async (req, res) => {
    const idProductora = req.params.id;
    const productora = await Productora.findByIdAndUpdate({ _id: idProductora }, {$set: req.body}, { new: true });
    if(!productora) {
        return res.status(404).json({ mensaje: 'No se logro actualizar, no se encontro la productora' });
    }
    res.status(200).json(productora);
};
exports.eliminarProductora = async (req, res) => {
    const idProductora = req.params.id;
    await Productora.findByIdAndDelete(idProductora);
    if(!productora) {
        return res.status(404).json({ mensaje: 'No se logro eliminar, no se encontro la productora' });
    }
    res.status(200).json({ mensaje: 'Productora eliminada' });
};