// routes.js
const express = require('express');
const router = express.Router();

// Rota para listar todos os imóveis
router.get('/imoveis', (req, res) => {
    // Consulte o MongoDB para obter os dados dos imóveis
    // e renderize a página com os resultados
    res.render('imoveis', { imoveis: listaDeImoveis });
});

// Outras rotas (como detalhes de imóveis, página de contato etc.)

module.exports = router;
