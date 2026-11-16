var produtoId = window.location.search.substring(9);
var produto;
var tamanhoEscolhido = "";

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

       if (!localStorage.getItem("usuarioLogado")) {
        alert("Faça login ou crie uma conta para adicionar produtos ao carrinho.");
        window.location.href = "../login/login.html";
        return;
    }
    if (tamanhoEscolhido === "") {
        alert("Selecione um tamanho antes de adicionar ao carrinho.");
        return;
    }

    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    var itemExistente = carrinho.find(function (itemAtual) {
        return itemAtual.id === produto.id && itemAtual.tamanho === tamanhoEscolhido;
    });

    if (itemExistente) {
        itemExistente.quantidade = (Number(itemExistente.quantidade) || 1) + 1;
    } else {
        var item = {
            id: produto.id,
            nome: produto.nome,
            preco: produto.preco,
            imagem: produto.imagem,
            tamanho: tamanhoEscolhido,
            quantidade: 1
        };

        carrinho.push(item);
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    alert("Produto adicionado ao carrinho!");

}