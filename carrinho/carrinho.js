// carrinho.js
// Este script controla a exibição e a manipulação do carrinho de compras.
// Ele lê os itens armazenados em localStorage, calcula o subtotal,
// renderiza a lista visual e permite remover ou limpar os produtos.

// Une entradas do mesmo produto e tamanho e soma suas quantidades.
function agruparItens(carrinho) { // Consolida produtos iguais sem misturar tamanhos diferentes.
    var itensAgrupados = []; // Cria a lista que receberá os itens já agrupados.

    for (var i = 0; i < carrinho.length; i++) { // Percorre todos os itens salvos.
        var itemAtual = carrinho[i]; // Guarda o item que está sendo analisado.
        // Usa 1 se a quantidade estiver ausente ou não puder ser convertida para número.
        var quantidadeItem = parseInt(itemAtual.quantidade, 10) || 1; // Converte a quantidade ou usa uma unidade como padrão.

        // Não permite quantidades menores que uma unidade.
        if (quantidadeItem < 1) { // Confere se a quantidade é menor que uma unidade.
            quantidadeItem = 1; // Corrige o valor para uma unidade.
        } // Fecha a validação da quantidade.

        // Considera duplicados apenas itens com o mesmo identificador e tamanho.
        var itemExistente = itensAgrupados.find(function (item) { // Procura o mesmo produto com o mesmo tamanho.
            return item.id === itemAtual.id && item.tamanho === itemAtual.tamanho; // Retorna verdadeiro apenas para a combinação igual.
        }); // Guarda o item encontrado, ou undefined se for novo.

        if (itemExistente) { // Soma quantidades quando o item já está agrupado.
            itemExistente.quantidade += quantidadeItem; // Atualiza a quantidade da linha existente.
        } else { // Cria uma nova linha quando ainda não existe essa combinação.
            var novoItem = Object.assign({}, itemAtual, { quantidade: quantidadeItem }); // Copia os dados e normaliza a quantidade.
            itensAgrupados.push(novoItem); // Adiciona o novo item à lista agrupada.
        } // Fecha a verificação de item existente.
    } // Fecha a repetição do carrinho.

    return itensAgrupados; // Devolve os itens consolidados.
} // Fecha a função de agrupamento.

function mostrarCarrinho() { // Monta a tela e recalcula os valores do carrinho.
    // Lê os itens do carrinho salvos no navegador.
    var carrinhoSalvo = localStorage.getItem("carrinho"); // Lê o texto do carrinho armazenado.
    var carrinho = JSON.parse(carrinhoSalvo) || []; // Converte o texto em lista ou cria uma lista vazia.
    carrinho = agruparItens(carrinho); // Junta duplicados antes de exibir os itens.

    if (carrinhoSalvo !== null) { // Confere se já havia um carrinho salvo.
        localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Salva a versão agrupada no navegador.
    } // Fecha a verificação de carrinho salvo.

    // Busca os elementos HTML necessários para renderizar o carrinho.
    var lista = document.getElementById("lista-produtos"); // Localiza a área onde os produtos serão exibidos.
    var subtotal = 0; // Prepara a soma dos preços multiplicados pelas quantidades.
    var quantidade = 0; // Prepara a soma de unidades no carrinho.

    // Limpa a lista antes de re-renderizar para evitar duplicações.
    lista.innerHTML = ""; // Apaga os cartões antigos antes de redesenhar a lista.

    // Percorre cada item do carrinho para montar a tela.
    for (var i = 0; i < carrinho.length; i++) { // Percorre cada produto do carrinho.
        var item = carrinho[i]; // Guarda os dados do produto atual.

        // Converte o preço salvo em texto, como "R$ 89,90", para número decimal.
        var preco = parseFloat(item.preco.replace("R$", "").replace(",", ".")); // Converte o preço em reais para número.

        subtotal = subtotal + preco * item.quantidade; // Soma o preço multiplicado pela quantidade deste item.
        quantidade = quantidade + item.quantidade; // Soma as unidades deste item ao total de unidades.

        // Cria a linha do produto, seus controles de quantidade e o botão de remoção.
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
        `; // Acrescenta a linha montada à lista do carrinho.
    } // Fecha a repetição de produtos.

    // Atualiza a quantidade de itens exibida na página.
    document.getElementById("quantidade-itens").innerHTML = quantidade + " produtos"; // Mostra quantas unidades estão no carrinho.

    // Atualiza o subtotal e o total com o valor formatado em reais.
    document.getElementById("subtotal").innerHTML = // Localiza e atualiza o subtotal exibido.
        "R$ " + subtotal.toFixed(2).replace(".", ","); // Formata o valor com duas casas e vírgula decimal.

    document.getElementById("total").innerHTML = // Localiza e atualiza o total da compra.
        "R$ " + subtotal.toFixed(2).replace(".", ","); // Exibe o total no formato usado pela loja.

    // Se o carrinho estiver vazio, mostra a mensagem de carrinho vazio.
    if (carrinho.length == 0) { // Verifica se não há itens para mostrar.
        document.getElementById("carrinho-vazio").style.display = "block"; // Mostra o aviso de carrinho vazio.
    } else { // Executa quando existe ao menos um item.
        document.getElementById("carrinho-vazio").style.display = "none"; // Oculta o aviso de carrinho vazio.
    } // Fecha a verificação de carrinho vazio.
} // Fecha a função que monta o carrinho.

// Atualiza a quantidade de um item e redesenha o carrinho.
function alterarQuantidade(posicao, alteracao) { // Soma ou subtrai unidades do item indicado.
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; // Lê o carrinho salvo ou inicia uma lista vazia.
    carrinho = agruparItens(carrinho); // Garante que a posição corresponde à lista exibida.

    var item = carrinho[posicao]; // Localiza o item na posição recebida pelo botão.
    if (!item) { // Confere se existe um item nessa posição.
        alert("Não foi possível localizar o item no carrinho."); // Informa que o item não foi encontrado.
        return; // Interrompe a alteração sem item válido.
    } // Fecha a verificação de item encontrado.

    if (alteracao < 0 && item.quantidade <= 1) { // Impede reduzir a quantidade abaixo de uma unidade.
        return; // Mantém a quantidade mínima sem alterar o carrinho.
    } // Fecha a verificação de quantidade mínima.

    item.quantidade += alteracao; // Aplica o aumento ou a redução solicitada.
    localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Salva a quantidade atualizada.
    mostrarCarrinho(); // Atualiza a tela com os novos valores.
} // Fecha a função de ajuste da quantidade.

// Remove um produto da posição informada pelo array do carrinho.
function removerProduto(posicao) { // Exclui a linha de produto indicada.
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; // Lê os itens salvos ou inicia uma lista vazia.

    carrinho.splice(posicao, 1); // Remove um item a partir da posição informada.

    localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Salva a lista sem o produto removido.

    mostrarCarrinho(); // Atualiza a lista e os totais na tela.
} // Fecha a função de remoção.

// Limpa o carrinho inteiro e atualiza a tela.
function limparCarrinho() { // Apaga todos os produtos salvos no carrinho.
    localStorage.removeItem("carrinho"); // Remove a lista inteira do armazenamento local.

    mostrarCarrinho(); // Atualiza a tela para mostrar o estado vazio.
} // Fecha a função de limpeza.

// Executa a renderização ao carregar a página.
mostrarCarrinho(); // Desenha o carrinho assim que o arquivo é carregado.
