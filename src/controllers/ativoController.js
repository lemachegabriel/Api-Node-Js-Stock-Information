const mongoose = require('mongoose');

const ativo = mongoose.model('ativos')

module.exports = {
    async index(req, res) {
        const ativos = await ativo.find();

        return res.json(ativos);
    },
    async show(req, res) {
        const ativos = await ativo.findById(req.params.id);

        return res.json(ativos)
    },
    async store(req, res) {
        const ativos = await ativo.create(req.body);

        return res.json(ativos);
    },
    async update(req, res) {
        const ativos = await ativo.findByIdAndUpdate(req.params.id, req.body, {new: true});

        return res.json(ativos); 
    },
    async destroy(req, res) {
        await ativo.findByIdAndRemove(req.params.id);

        return res.send('excluido');
    }
}