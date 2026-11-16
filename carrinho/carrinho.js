function agruparItens(carrinho) {
    var itensAgrupados = [];

    for (var i = 0; i < carrinho.length; i++) {
        var itemAtual = carrinho[i];
        var quantidadeItem = parseInt(itemAtual.quantidade, 10) || 1;

        if (quantidadeItem < 1) {
            quantidadeItem = 1;
        }

        var itemExistente = itensAgrupados.find(function (item) {
            return item.id === itemAtual.id && item.tamanho === itemAtual.tamanho;
        });

        if (itemExistente) {
            itemExistente.quantidade += quantidadeItem;
        } else {
            var novoItem = Object.assign({}, itemAtual, { quantidade: quantidadeItem });
            itensAgrupados.push(novoItem);
        }
    }

    return itensAgrupados;
}

function mostrarCarrinho() {
    if (!localStorage.getItem("usuarioLogado")) {
    alert("Faça login ou crie uma conta para acessar o carrinho.");
    window.location.href = "../login/login.html";
}
    var carrinhoSalvo = localStorage.getItem("carrinho");
    var carrinho = JSON.parse(carrinhoSalvo) || [];
    carrinho = agruparItens(carrinho);

    if (carrinhoSalvo !== null) {
        localStorage.setItem("carrinho", JSON.stringify(carrinho));
    }

    var lista = document.getElementById("lista-produtos");
    var subtotal = 0;
    var quantidade = 0;

    lista.innerHTML = "";

    for (var i = 0; i < carrinho.length; i++) {
        var item = carrinho[i];

        var preco = parseFloat(item.preco.replace("R$", "").replace(",", "."));

        subtotal = subtotal + preco * item.quantidade;
        quantidade = quantidade + item.quantidade;

        lista.innerHTML += `
            <div class="item">
                <img src="../imagens/${item.imagem}" alt="${item.nome}">

                <div>
                    <h2>${item.nome}</h2>
                    <p>Tamanho: ${item.tamanho}</p>
                    <div class="controle-quantidade">
                        <button type="button" class="ajustar-quantidade"
                            aria-label="Diminuir quantidade"
                            onclick="alterarQuantidade(${i}, -1)"
                            ${item.quantidade === 1 ? "disabled" : ""}>−</button>
                        <span>Quantidade: ${item.quantidade}</span>
                        <button type="button" class="ajustar-quantidade"
                            aria-label="Aumentar quantidade"
                            onclick="alterarQuantidade(${i}, 1)">+</button>
                    </div>
                    <strong>${item.preco}</strong>
                </div>

                <button class="remover" onclick="removerProduto(${i})">
                    Remover
                </button>
            </div>
        `;
    }

    document.getElementById("quantidade-itens").innerHTML = quantidade + " produtos";

    document.getElementById("subtotal").innerHTML =
        "R$ " + subtotal.toFixed(2).replace(".", ",");

    document.getElementById("total").innerHTML =
        "R$ " + subtotal.toFixed(2).replace(".", ",");

    if (carrinho.length == 0) {
        document.getElementById("carrinho-vazio").style.display = "block";
    } else {
        document.getElementById("carrinho-vazio").style.display = "none";
    }
}

function alterarQuantidade(posicao, alteracao) {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho = agruparItens(carrinho);

    var item = carrinho[posicao];
    if (!item) {
        alert("Não foi possível localizar o item no carrinho.");
        return;
    }

    if (alteracao < 0 && item.quantidade <= 1) {
        return;
    }

    item.quantidade += alteracao;
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    mostrarCarrinho();
}

function removerProduto(posicao) {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.splice(posicao, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}

function limparCarrinho() {
    localStorage.removeItem("carrinho");

    mostrarCarrinho();
}

function finalizarCompra() {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio.");
        return;
    }

    alert("Compra efetuada com sucesso!");
    limparCarrinho();
}

mostrarCarrinho();