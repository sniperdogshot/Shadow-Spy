function toggleRegras() {
    var regrasDiv = document.getElementById('regras');
    var showRulesButton = document.querySelector('.show-rules-button');

    if (regrasDiv.style.display === 'none' || regrasDiv.style.display === '') {
        regrasDiv.style.display = 'block';
        showRulesButton.classList.add('hide-button'); // Esconde o botão
    } else {
        regrasDiv.style.display = 'none';
        showRulesButton.classList.remove('hide-button'); // Mostra o botão novamente
    }
}

// Exibir a imagem de fundo padrão ao carregar a página
window.onload = function() {
    document.getElementById('background-overlay').style.backgroundImage = 'url("img/fundo.jpg")';
};

// Inicializar conjuntos para armazenar números gerados
var numerosGeradosTiro = new Set();
var numerosGeradosBomba = new Set();

function gerarNumeroUnico(max, numerosGerados) {
    if (numerosGerados.size === max) {
        numerosGerados.clear(); // Resetar se todos os números já tiverem sido gerados
    }
    var numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * max) + 1;
    } while (numerosGerados.has(numeroAleatorio));
    numerosGerados.add(numeroAleatorio);
    return numeroAleatorio;
}

// Função para mostrar a imagem de tiro
function mostrarTiro() {
    var numeroAleatorio = gerarNumeroUnico(82, numerosGeradosTiro);
    let mensagens = {
        1: "Um de nós tem uma vida dupla. Quem?",
        // Adicione outras mensagens conforme necessário
    };
    let mensagemAleatoria = mensagens[numeroAleatorio] || "Mensagem padrão para outros números.";
    document.getElementById('resultado').innerHTML = `<br>${mensagemAleatoria}`;

    // Alterar imagem de fundo para tiro
    document.getElementById('background-overlay').style.backgroundImage = 'url("img/tiro.jpg")';
}

// Função para mostrar a imagem de bomba
function mostrarBomba() {
    var numeroAleatorio = gerarNumeroUnico(27, numerosGeradosBomba);
    let mensagens = {
        1: "Cientistas descobriram formas de colocar outra genital no corpo. Quem seria o primeiro da fila?",
        // Adicione outras mensagens conforme necessário
    };
    let mensagemAleatoria = mensagens[numeroAleatorio] || "Mensagem padrão para outros números.";
    document.getElementById('resultado').innerHTML = `<br>${mensagemAleatoria}`;

    // Alterar imagem de fundo para bomba
    document.getElementById('background-overlay').style.backgroundImage = 'url("img/bomba.jpg")';
}
