const Director = require('../models/director.js');

exports.crearDirector = async (req, res)=>{
    const director = new Director(req.body);
    await director.save();
    res.status(200).json(director);
}
exports.buscarTodoDirector = async (req, res)=>{
    const director = await Director.find();
    res.status(200).json(director);
}
exports.buscarDirector = async (req, res)=>{
    const idDirector = req.params.id;
    const director = await Director.findById({_id: idDirector});
    res.status(200).json(director);
}
exports.actualizarDirector = async (req, res)=>{
    const idDirector = req.params.id;
    const director = await Director.findByIdAndUpdate({_id: idDirector}, {$set: req.body}, {new: true})
    if(!director){
        return res.status(404).json({mensaje: 'No se logro actualizar, no se encontro el director'});
    }
    res.status(200).json(director);
}
exports.eliminarDirector = async (req, res)=>{
    const idDirector = req.params.id;
    await Director.findByIdAndDelete({_id: idDirector}, {new: true});
    if(!director){
        return res.status(404).json({mensaje: 'No se logro eliminar, no se encontro el director'});
    }
    res.status(200).json({ mensaje: 'Director eliminado' });
}