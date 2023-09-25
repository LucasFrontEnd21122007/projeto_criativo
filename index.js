// Seleciona o botão pelo seu ID
const changeTextButton = document.getElementById('changeTextButton');

// Seleciona o parágrafo pelo seu ID
const paragraph = document.getElementById('textToChange');

// Adiciona um evento de clique ao botão
changeTextButton.addEventListener('click', function() {
    // Altera o texto do parágrafo quando o botão é clicado
    paragraph.textContent = 'Texto alterado com JavaScript!';
});
