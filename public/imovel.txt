// Imovel.js
const mongoose = require('mongoose');

const imovelSchema = new mongoose.Schema({
    seunome: String,
    endereco: String,
    contato: String,
    descricao: String,
    preco: Number,

    // Outros campos relevantes
});

const Imovel = mongoose.model('Imovel', imovelSchema);

module.exports = Imovel;
