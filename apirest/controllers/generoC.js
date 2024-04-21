const generoM = require('../models/generoM');
exports.newGenero = async (req, res) => {
    const genero = new generoM(req.body);
    await genero.save();

    res.status(201).json(genero);
};

exports.getAllGeneros = async (req, res) => {
    const genero = await generoM.find();

    res.status(200).json(genero);
};

exports.upDataG = async (req, res) => {
    const idGenero = req.params.id;
    const updatedData = req.body;

    const updateGenero = await generoM.findByIdAndUpdate(
        {_id: idGenero},
        {$set: updatedData},
        {new: true}
    );
    
    res.status(200).json(updateGenero);
};

exports.delDataG = async (req, res) => {
    const idGenero = req.params.id;
    const deletedGenero = await generoM.findByIdAndDelete(
        {_id: idGenero}
    );

    res.status(200).json(deletedGenero);
};