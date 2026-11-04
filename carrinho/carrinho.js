
function mostrarCarrinho() {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    var lista = document.getElementById("lista-produtos");
    var subtotal = 0;
    var quantidade = 0;

    lista.innerHTML = "";

    for (var i = 0; i < carrinho.length; i++) {
        var item = carrinho[i];

        var preco = parseFloat(item.preco.replace("R$", "").replace(",", "."));

        subtotal = subtotal + preco;
        quantidade++;

        lista.innerHTML += `
            <div class="item">
                <img src="../imagens/${item.imagem}" alt="${item.nome}">

                <div>
                    <h2>${item.nome}</h2>
                    <p>Tamanho: ${item.tamanho}</p>
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

mostrarCarrinho();
