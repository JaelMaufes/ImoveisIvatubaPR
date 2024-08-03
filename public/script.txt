// Adicione interatividade e funcionalidades dinâmicas aqui
// Exemplo: carregar imóveis via API

// Exemplo fictício:
const apiUrl = '/api/imoveis';
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        // Processar dados e exibir na página
    })
    .catch(error => console.error('Erro ao carregar imóveis:', error));

// Use jQuery para interações e funcionalidades dinâmicas
$(document).ready(function() {
    // Exemplo: alterar cor de fundo do header ao clicar
    $('header').on('click', function() {
        $(this).css('background-color', '#f0f0f0');
    });

    // Outras interações aqui
});

// Use jQuery para interações e funcionalidades dinâmicas
$(document).ready(function() {
    // Exemplo: ocultar parágrafos quando clicados
    $('p').click(function() {
        $(this).hide();
    });

    // Outras interações aqui
});



