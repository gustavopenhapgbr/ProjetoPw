// descricao-produto.js
// Este script controla a página de detalhes do produto.
// Ele captura o código do produto na URL, mostra as informações do item,
// permite selecionar tamanho e adiciona o produto ao carrinho.

// Extrai o id do produto da URL, que vem no formato ?produto=nome-do-produto.
// Exemplo: "?produto=camiseta-cinza-clara". substring(9) corta o início da string.
var produtoId = window.location.search.substring(9);
var produto;
var tamanhoEscolhido = "M";

// Procura o produto correspondente dentro da lista global de produtos.
for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].id == produtoId) {
        produto = produtos[i];
    }
}

// Se o produto foi encontrado, preenche os elementos HTML com seus dados.
if (produto != null) {
    document.getElementById("produto-imagem").src = "../imagens/" + produto.imagem;
    document.getElementById("produto-imagem").alt = produto.nome;
    document.getElementById("produto-categoria").innerHTML = produto.nomeCategoria;
    document.getElementById("produto-nome").innerHTML = produto.nome;
    document.getElementById("produto-preco").innerHTML = produto.preco;
    document.getElementById("produto-resumo").innerHTML = produto.resumo;
    document.getElementById("produto-descricao").innerHTML = produto.descricao;
}

// Função que marca visualmente o tamanho selecionado.
function selecionarTamanho(tamanho) {

    // Busca todos os elementos <span> dentro do grupo de tamanhos.
    var tamanhos = document.getElementsByClassName("tamanhos")[0].getElementsByTagName("span");

    // Remove a classe "selecionado" de todos os tamanhos antes de marcar o novo.
    for (var i = 0; i < tamanhos.length; i++) {
        tamanhos[i].className = "";
    }

    // Adiciona a classe de seleção ao tamanho clicado.
    tamanho.className = "selecionado";

    // Guarda o tamanho atual escolhido para usar quando o item for enviado ao carrinho.
    tamanhoEscolhido = tamanho.innerHTML;
}

// Função responsável por adicionar o produto ao carrinho.
function adicionarCarrinho() {

    // Lê o carrinho salvo no localStorage ou cria um array vazio caso não exista.
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Cria um objeto com as informações do item que será salvo.
    var item = {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.imagem,
        tamanho: tamanhoEscolhido
    };

    // Guarda o item no carrinho.
    carrinho.push(item);

    // Salva o carrinho atualizado no navegador.
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // Informa o usuário que o produto foi adicionado.
    alert("Produto adicionado ao carrinho!");

}