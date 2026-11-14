// carrinho.js
// Este script controla a exibição e a manipulação do carrinho de compras.
// Ele lê os itens armazenados em localStorage, calcula o subtotal,
// renderiza a lista visual e permite remover ou limpar os produtos.

function mostrarCarrinho() {
    // Lê os itens do carrinho salvos no navegador.
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    // Busca os elementos HTML necessários para renderizar o carrinho.
    var lista = document.getElementById("lista-produtos");
    var subtotal = 0;
    var quantidade = 0;

    // Limpa a lista antes de re-renderizar para evitar duplicações.
    lista.innerHTML = "";

    // Percorre cada item do carrinho para montar a tela.
    for (var i = 0; i < carrinho.length; i++) {
        var item = carrinho[i];

        // Converte o preço salvo em texto, como "R$ 89,90", para número decimal.
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

    // Atualiza a quantidade de itens exibida na página.
    document.getElementById("quantidade-itens").innerHTML = quantidade + " produtos";

    // Atualiza o subtotal e o total com o valor formatado em reais.
    document.getElementById("subtotal").innerHTML =
        "R$ " + subtotal.toFixed(2).replace(".", ",");

    document.getElementById("total").innerHTML =
        "R$ " + subtotal.toFixed(2).replace(".", ",");

    // Se o carrinho estiver vazio, mostra a mensagem de carrinho vazio.
    if (carrinho.length == 0) {
        document.getElementById("carrinho-vazio").style.display = "block";
    } else {
        document.getElementById("carrinho-vazio").style.display = "none";
    }
}

// Remove um produto da posição informada pelo array do carrinho.
function removerProduto(posicao) {
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

    carrinho.splice(posicao, 1);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    mostrarCarrinho();
}

// Limpa o carrinho inteiro e atualiza a tela.
function limparCarrinho() {
    localStorage.removeItem("carrinho");

    mostrarCarrinho();
}

// Executa a renderização ao carregar a página.
mostrarCarrinho();
