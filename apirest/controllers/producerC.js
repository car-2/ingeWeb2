const producerM = require('../models/producerM');

exports.addProductora = async (req, res) => {
    const producer = new producerM(req.body);
    await producer.save();

    res.status(200).json(producer);
};

exports.getAllProducers = async (req, res) => {
    const productoras = await producerM.find();

    res.status(200).json(productoras);
};

exports.upProducers = async (req, res) => {
    const idProductora = req.params.id;
    const upProductora = req.body;

    const updateProducer = await producerM.findByIdAndUpdate(
        {_id: idProductora},
        {$set: upProductora},
        {new: true}
    );

    res.status(200).json(updateProducer);
};

exports.delProducers = async (req, res) => {
    const idProductora = req.params.id;
    const deletedProducer = await producerM.findByIdAndDelete(
        {_id: idProductora},
        {new: true}
    );
    res.status(200).json(deletedProducer);
};