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
    var numeroAleatorio = gerarNumeroUnico(110, numerosGeradosTiro);
    let mensagens = {
        1: "Um de nós tem uma vida dupla. Quem?",
        2: "Estamos todos em quarentena, contagiados por um vírus mortal e incurável. Quem criara uma epidemia?",
        3: "Estamos concorrendo a presidência. Quem será o escolhido?",
        4: "Você esta passando por dificuldades. Quem você não pede conselhos?",
        5: "Todos sentimos medo quando quem está dirigindo? ",
        6: "Você fingi dormir para não conversar com?",
        7: "Estamos em um avião em queda livre e temos paraquedas para todos, menos para um. Quem é o primeiro a pegar o paraquedas e se salvar?",
        8: "Viajamos para Las Vegas. Quem volta casado?",
        9: "Somos apóstolos. Quem é judas?",
        10: "Todos publicamos livros. Qual menos te interessa?",
        11: "Um de nós não poderá mais te abraçar. Quem?",
        12: "Somos procurados na época do velho oeste. Quem é preso primeiro?",
        13: "Nossas cabeças estão a Prêmio. Qual vale menos?",
        14: "Estamos precisando de um novo general. Por favor, que não seja…",
        15: "Somos todos comediantes. Quem é o primeiro a morrer de fome?",
        16: "Um de nós irá morrer sendo vítima de um acerto de contas. Quem?",
        17: "Quem se acha mais inteligente do que realmente é?",
        18: "Estamos em uma ilha deserta. Quem é o primeiro a propor canibalismo?",
        19: "Quem daqui você jamais se atreveria a deixar irritado?",    
        20: "Fomos presos. Quem é o primeiro a se prostituir em troca de proteção?",
        21: "Estamos no programa do Silvio Santos. Quem discute com ele? ",
        22: "Quem se acha melhor que os outros?",
        23: "Lúcifer propõe realizar todos nossos desejos em troca das nossas almas. Quem é o primeiro a aceitar?",
        24: "Ganhamos dinheiro para cada colher de merda que comemos. Quem está mais disposto a se tornar rico?",
        25: "Quem sempre pede o prato mais caro e na hora da conta sugere dividir tudo em partes iguais?",
        26: "O serviço militar agora e obrigatório para todos e todas. Quem atira no próprio pé para não servir?",
        27: "Quem lê a bíblia?",
        28: "Quem se veste pior é...?",
        29: "Estamos no apocalipse zumbi. Quem é o primeiro a morrer?",
        30: "Trabalhamos em um fast food. Quem cospe na comida?",
        31: "Um de nós e um robô. Quem?",
        32: "Quem daqui você não deixaria adotar seu filho?",
        33: "Todos acham que pessoas do mesmo gênero possam se casar exceto…",
        34: "Quem peidou?",
        35: "Quem convidaria a ex para tomar café e mentiria sobre sua vida atual?",
        36: "Um de nos tem a coleção de chicletes do ex. Quem?",
        37: "Alguém não vê graça nenhuma nesse jogo e está fingindo rir para disfarçar. Quem?",
        38: "Alguém esta fingindo estar de boa, mas ficou ressentido pelo resultado de uma carta. Quem?",
        39: "Um amigo precisa de doação de sangue. Quem disse que doou, mas ao passou nem perto?",
        40: "Quem tem mais chance de ser preso por um crime que ao cometeu?",
        41: "Estamos no filme do Sherlock Holmes. Quem é o assassino?",
        42: "Estamos em filme de suspense. Quem é o assassino?",
        43: "Um de nos já tem um filho não reconhecido. Quem?",
        44: "Somos policiais, quem atira primeiro e pergunta depois?",
        45: "Somos biólogos, quem inventa um vírus mortal e depois vende a cura?",
        46: "Quem ganha na loteria e some das nossas vidas para sempre?",
        47: "Acidentalmente atropelamos uma pessoa. Quem da a ideia de fugir do local?",
        48: "Ascendemos no mundo da música. Quem é o primeiro a morrer de overdose?",
        49: "Fomos presos por um crime e estamos sendo interrogados. Quem é o primeiro a confessar?",
        50: "Vamos saltar de paraquedas. Qual paraquedas não abre?",
        51: "Colocamos nossas faces nas notas de real. Quem pegou a note mais barata",
        52: "Quem faz xixi na piscina? ",
        53: "Eu fui assassinado. Quem é o assassino? ",
        54: "Viramos mafiosos colombianos. Quem seria o chefão? ",
        55: "Estamos em um mundo de super-heróis. Quem seria o Capitão Pátria? ",
        56: "Ganhamos na loteria. Quem é o primeiro a gastar toda sua parte? ",
        57: "Quem está com quilinho a mais? ",
        58: "Voltando das férias alguém esta com quilinhos a mais. Quem é o primeiro a comentar…",
        59: "Somos senadores. Quem ganha mais propina? ",
        60: "Alguém foi traficante de escravos na vida passada. Quem?",
        61: "Vão entregar um prêmio por falta de higiene pessoal. Quem ganharia?",
        62: "A internet do mundo vai acabar. Quem é o primeiro a se matar?",
        63: "Quem de nós está envelhecendo pior?",
        64: "Quem você jamais gostaria de ter como chefe?",
        65: "Quem se casara com alguém que ainda não nasceu?",
        66: "Quem é adepto a teoria da terra plana?",
        67: "Você morrera se não socar a cara de alguém quem você escolhera?",
        68: "Fazemos uma viagem himalaia e encontramos o pé grande com quem ele mais se parece?",
        69: "Cada um vira chefe de uma equipe. Quem mais maltrata seus funcionários?",
        70: "Um de nos sempre quis ser policial só para atirar nos vagabundos com bala de borracha. Quem?",
        71: "Quem não aparenta sua idade?",
        72: "Um de nos realmente e mais imaturo que os outros. Quem?",
        73: "5 anos atrás um de nos tinha um futuro muito promissor. Quem?",
        74: "Um de nos quer matar todos os outros. Quem?",
        75: "Descobrimos um segredo cabuloso. Quem é o primeiro a contar?",
        76: "Um de nos tem o fetiche de comer coco. Quem?",
        77: "Um de nos acredita que seria melhor não ter saúde pública. Quem?",
        78: "Um de nos admira Hitler secretamente. Quem?",
        79: "Quem odeia a própria vida?",
        80: "Marcamos uma viagem entre amigos. Quem fura de última hora?",
        81: "Quem pede dinheiro emprestado e nunca devolve?",
        82: "Somos todos presidentes de países diferentes. Quem é o primeiro a impor pena de morte",
        83: "Quem acredita em Papai Noel e Coelhinho da Páscoa?",
        84: "Quem te daria o melhor concelho amoroso?",
        85: "Quem tem coragem de se mudar sozinho para outro pais?",
        86: "Quem ja visitou mais paises?",
        87: "Em filmes de açao quem sempre torce para o vilao?",
        88: "Quem mais demora no banho?",
        89: "Quem tem um diario ?",
        90: "Quem acredita em amor a primeira vista?",
        91: "Quem é mais afetado pelas redes sociais?",
        92: "Quem seria uma celebridade?",
        93: "Quem anda na rua parecendo que esta em um filme?",
        94: "Quem seria eleito a presidente?",
        95: "Se pudesse escolher em qual família iria nascer, qual escolheria?",
        96: "Se pudesse trocar de vida com um dos seus amigos, com que seria?",
        97: "Qual dos seus amigos tem mais chance de ser um viajante no tempo?",
        98: "Se tivesse que escolher apenas uma pessoas para conviver para o resto da vida, quem seria?",
        99: "Quem nunca guarda o carrinho de compras do mercado?",
        100: "Quem acredita em vida em outros planetas?",
        101: "Quem e a favor da pena de morte",
        102: "Em qual dos seus amigos você não confia?",
        103: "Quem acredita em justiça pelas próprias mãos?",
        104: "Quem acredita em astrologia?",
        105: "Se o céu é o paraíso, quem não pode faltar por lá?",
        105: "Com quem você sente que pode ser totalmente transparente e sincero(a)?",
        107: "Com quem você sente que pode ser totalmente transparente e sincero(a)?",
        108: "Quem acredita em reencarnação?",
        109: "Quem acredita em Lei do retorno?",
        110: "Quem gostaria de ser imortal (apenas você e mais ninguém)?",
    }
    let mensagemAleatoria = mensagens[numeroAleatorio] || "Mensagem padrão para outros números.";
    document.getElementById('resultado').innerHTML = `<br>${mensagemAleatoria}`;

    // Alterar imagem de fundo para tiro
    document.getElementById('background-overlay').style.backgroundImage = 'url("img/tiro.jpg")';
}

// Função para mostrar a imagem de bomba
function mostrarBomba() {
    var numeroAleatorio = gerarNumeroUnico(34, numerosGeradosBomba);
    let mensagens = {
        1: "Cientistas descobriram formas de colocar outra genital no corpo. Quem seria o primeiro da fila?",
        2: "Alguém este apaixonado por outra pessoa dessa mesa. Quem?",
        3: "Vazaram fotos de uma orgia octogenários. Quem estava lá?",
        4: "Jamais encostaria na roupa íntima de... ?",
        5: "Quem tem nojo de sexo oral?",
        6: "Um de vocês quer transar comigo. Quem?",
        7: "Quem daqui é mais egoísta na cama?",
        8: "Alguém se masturba pensando no presidente. Quem?",
        9: "Um de nos já teve gonorreia, clamídia ou sífilis. Quem?",
        10: "Alguém entre nos dormiria com os próprios pais por um milhão. Quem?",
        11: "Alguém tem fetiche por pessoas casadas. Quem?",
        12: "Quem quer organizar uma orgia agora entre nos mesmos?",
        13: "Alguém entre nos e uma estrela porno super famosa. Quem?",
        14: "Com quem voce nunca faria menage?",
        15: "Um de nos e voyeur. Quem?",
        16: "Quem é mais irresponsável na hora do sexo?",
        17: "Quem não se sentira culpado por dormir com a ex do coleguinha?",
        18: "Quem tem o histórico porno mais estranho?",
        19: "Quem jamais participaria de uma orgia?",
        20: "Um de nos foi virgem por muito mais tempo do que diz. Quem?",
        21: "A ciência descobriu como fazer clones de si. Quem ira se clonar para transar consigo mesmo?",
        22: "Um de nos e modelo para brinquedos sexuais. Quem?",
        23: "Um de nos sempre que tiver orgasmos tem a imagem de um de nos. Quem?",
        24: "Sempre que você tem um orgasmo vem a imagem de um de nos. Tomara que não seja do…",
        25: "Quem faria sexo com um animal?",
        26: "Quem você apagaria da memória?",
        27: "Um de nos acha que o beijo LGBT deveria ser censurado. Quem?",
        28: "Quem usa a cabeça de baixo antes da de cima?",
        29: "Quem teria uma plantação e viveria disso?",
        30: "Quem acredita em relacionamento a distancia?",
        31: "Quem prioriza inteligencia a aparencia?",
        32: "Quem já ficou com irmão ou irma de um amigo?",
        33: "Quem já se apaixonou por um(a) amigo(a) e nunca teve coragem de falar?",
        34: "Quem Já se apaixonou pela(o) namorada(o) de um(a) amigo(a)?",
    };
    let mensagemAleatoria = mensagens[numeroAleatorio] || "Mensagem padrão para outros números.";
    document.getElementById('resultado').innerHTML = `<br>${mensagemAleatoria}`;

    // Alterar imagem de fundo para bomba
    document.getElementById('background-overlay').style.backgroundImage = 'url("img/bomba.jpg")';
}
