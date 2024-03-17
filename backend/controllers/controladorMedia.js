const Media = require('../models/media.js');

exports.crearMedia = async (req, res) => {
    const media = new Media(req.body);
    await media.save();
    res.status(200).json(media);
};
exports.obtenerTodoMedia = async (req, res) => {
    const media = await Media.find();
    res.status(200).json(media);
};
exports.obtenerMedia = async (req, res) => {
    const media = await Media.findById(req.params.id);
    res.status(200).json(media);
};
exports.actualizarMedia = async (req, res) => {
    const idMedia = req.params.id;
    const media = await Media.findByIdAndUpdate({ _id: idMedia }, {$set: req.body}, { new: true });
    if(!media) {
        return res.status(404).json({ mensaje: 'No se logro actualizar, no se encontro la pelicula' });
    }
    res.status(200).json(media);
};
exports.eliminarMedia = async (req, res) => {
    const idMedia = req.params.id;
    await Media.findByIdAndDelete(idMedia);
    if(!media) {
        return res.status(404).json({ mensaje: 'No se logro eliminar, no se encontro la pelicula' });
    }
    res.status(200).json({ mensaje: 'Media eliminada' });
};