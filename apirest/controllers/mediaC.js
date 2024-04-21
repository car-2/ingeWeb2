const mediaM = require('../models/mediaM');


exports.addmedia = async (req, res) => {
    const media = new mediaM(req.body);
    await media.save();

    res.status(200).json(media);
};

exports.getAllMedia = async (req, res) => {
    const getMedia = await mediaM.find();
    res.status(200).json(getMedia);
};

exports.upMedia = async (req, res) => {
    const idMedia = req.params.id;
    const updatedDate =  req.body;

    const updatedMedia = await mediaM.findByIdAndUpdate(
        {_id: idMedia}, 
        {$set: updatedDate},
        {new: true}
    );
    res.status(200).json(updatedMedia);
};

exports.delMedia = async (req, res) => {
    const idMedia = req.params.id;
    const delMedia = await mediaM.findByIdAndDelete(
        {_id: idMedia}
    );
    res.status(200).json(delMedia);
};
