var produtoId = window.location.search.substring(9);
var produto;
var tamanhoEscolhido = "M";

for (var i = 0; i < produtos.length; i++) {
    if (produtos[i].id == produtoId) {
        produto = produtos[i];
    }
}

if (produto != null) {
    document.getElementById("produto-imagem").src = "../imagens/" + produto.imagem;
    document.getElementById("produto-imagem").alt = produto.nome;
    document.getElementById("produto-categoria").innerHTML = produto.nomeCategoria;
        document.getElementById("produto-nome").innerHTML = produto.nome;
    document.getElementById("produto-preco").innerHTML = produto.preco;
    document.getElementById("produto-resumo").innerHTML = produto.resumo;
    document.getElementById("produto-descricao").innerHTML = produto.descricao;
}


function selecionarTamanho(tamanho) {

    var tamanhos = document.getElementsByClassName("tamanhos")[0].getElementsByTagName("span");

    for (var i = 0; i < tamanhos.length; i++) {
        tamanhos[i].className = "";
    }

    tamanho.className = "selecionado";

    tamanhoEscolhido = tamanho.innerHTML;
}

function adicionarCarrinho() {

    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    var item = {
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.imagem,
        tamanho: tamanhoEscolhido
    };

    carrinho.push(item);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");

}