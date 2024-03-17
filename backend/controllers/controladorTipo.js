const Tipo = require('../models/tipo.js');

exports.crearTipo = async (req, res) => {
    const tipo = new Tipo(req.body);
    await tipo.save();
    res.status(200).send(tipo);
}
exports.obtenerTodoTipo = async (req, res) => {
    const tipos = await Tipo.find();
    res.status(200).send(tipos);
}
exports.obtenerTipo = async (req, res) => {
    const tipo = await Tipo.findById(req.params.id);
    res.status(200).send(tipo);
}
exports.actualizarTipo = async (req, res) => {
    const idTipo = req.params.id;
    const tipo = await Tipo.findByIdAndUpdate({ _id: idTipo }, {$set: req.body}, { new: true });
    if(!tipo) {
        return res.status(404).json({ mensaje: 'No se logro actualizar, no se encontro el tipo' });
    }
    res.status(200).send(tipo);
}
exports.eliminarTipo = async (req, res) => {
    const idTipo = req.params.id;
    await Tipo.findByIdAndDelete(idTipo);
    if(!tipo) {
        return res.status(404).json({ mensaje: 'No se logro eliminar, no se encontro el tipo' });
    }
    res.status(200).json({ mensaje: 'Tipo eliminado' });
}

