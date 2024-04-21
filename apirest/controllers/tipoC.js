const tipoM = require('../models/tipoM'); 
exports.createTipo = async (req, res) => {
    const tipo = new tipoM(req.body);
    await tipo.save();
    res.status(200).json(tipo);  
}

exports.getAllTipo  = async (req, res) => {
    const tipos = await tipoM.find();

    res.status(201).json(tipos);
}

exports.upData = async (req, res) => {
    const idTipo = req.params.id;
    const updateData = req.body;
    const updateTipo = await tipoM.findByIdAndUpdate(
        {_id: idTipo},
        {$set: updateData},
        {new: true}
        
    )
    res.status(201).json(updateTipo);
}

exports.delData = async (req, res) => {
    const idTipo = req.params.id;
    const deletedTipo = await tipoM.findByIdAndDelete(
        {_id: idTipo }
    )
    res.status(201).json(deletedTipo);
};