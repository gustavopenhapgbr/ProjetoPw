// descricao-produto.js
// Este script controla a página de detalhes do produto.
// Ele captura o código do produto na URL, mostra as informações do item,
// permite selecionar tamanho e adiciona o produto ao carrinho.

// Extrai o id do produto da URL, que vem no formato ?produto=nome-do-produto.
// Exemplo: "?produto=camiseta-cinza-clara". substring(9) corta o início da string.
var produtoId = window.location.search.substring(9); // Obtém o identificador depois de "?produto=" na URL.
var produto; // Guarda o produto encontrado na lista compartilhada.
var tamanhoEscolhido = ""; // Começa vazio para exigir que o cliente escolha um tamanho.

// Procura o produto correspondente dentro da lista global de produtos.
for (var i = 0; i < produtos.length; i++) { // Percorre todos os produtos cadastrados.
    if (produtos[i].id == produtoId) { // Compara o identificador da lista com o da URL.
        produto = produtos[i]; // Guarda o produto correspondente.
    } // Fecha a comparação do identificador.
} // Fecha a busca na lista de produtos.

// Se o produto foi encontrado, preenche os elementos HTML com seus dados.
if (produto != null) { // Preenche a página apenas se o produto foi localizado.
    document.getElementById("produto-imagem").src = "../imagens/" + produto.imagem; // Define o arquivo da foto.
    document.getElementById("produto-imagem").alt = produto.nome; // Define o texto alternativo da imagem.
    document.getElementById("produto-categoria").innerHTML = produto.nomeCategoria; // Mostra a categoria.
    document.getElementById("produto-nome").innerHTML = produto.nome; // Mostra o nome do produto.
    document.getElementById("produto-preco").innerHTML = produto.preco; // Mostra o preço.
    document.getElementById("produto-resumo").innerHTML = produto.resumo; // Mostra o resumo do produto.
    document.getElementById("produto-descricao").innerHTML = produto.descricao; // Mostra a descrição completa.
} // Fecha o preenchimento dos dados encontrados.

// Função que marca visualmente o tamanho selecionado.
function selecionarTamanho(tamanho) { // Marca uma opção e guarda o tamanho escolhido.

    // Busca todos os elementos <span> dentro do grupo de tamanhos.
    var tamanhos = document.getElementsByClassName("tamanhos")[0].getElementsByTagName("span"); // Localiza todas as opções de tamanho.

    // Remove a classe "selecionado" de todos os tamanhos antes de marcar o novo.
    for (var i = 0; i < tamanhos.length; i++) { // Percorre as opções antes de marcar a nova.
        tamanhos[i].className = ""; // Remove a seleção anterior.
    } // Fecha a limpeza das opções.

    // Adiciona a classe de seleção ao tamanho clicado.
    tamanho.className = "selecionado"; // Aplica o estilo de selecionado à opção clicada.

    // Guarda o tamanho atual escolhido para usar quando o item for enviado ao carrinho.
    tamanhoEscolhido = tamanho.innerHTML; // Guarda o texto do tamanho para usar no carrinho.
} // Fecha a função de seleção do tamanho.

// Função responsável por adicionar o produto ao carrinho.
function adicionarCarrinho() { // Adiciona o produto selecionado ao armazenamento do carrinho.

    if (tamanhoEscolhido === "") { // Confere se o cliente escolheu um tamanho.
        alert("Selecione um tamanho antes de adicionar ao carrinho."); // Explica o que falta fazer.
        return; // Interrompe a inclusão sem tamanho escolhido.
    } // Fecha a validação do tamanho.

    // Lê o carrinho salvo no localStorage ou cria um array vazio caso não exista.
    var carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; // Converte os dados salvos em uma lista.

    var itemExistente = carrinho.find(function (itemAtual) { // Procura o mesmo produto com o mesmo tamanho.
        return itemAtual.id === produto.id && itemAtual.tamanho === tamanhoEscolhido; // Exige que os dois dados coincidam.
    }); // Guarda o item encontrado, se já estiver no carrinho.

    if (itemExistente) { // Aumenta a quantidade quando a combinação já existe.
        itemExistente.quantidade = (Number(itemExistente.quantidade) || 1) + 1; // Soma uma unidade à quantidade atual.
    } else { // Cria uma nova linha quando ainda não existe essa combinação.
        // Cria um objeto com as informações do item que será salvo.
        var item = { // Reúne os dados necessários para exibir o produto no carrinho.
            id: produto.id, // Identifica o produto.
            nome: produto.nome, // Guarda o nome para exibição.
            preco: produto.preco, // Guarda o preço para os cálculos.
            imagem: produto.imagem, // Guarda o arquivo da imagem.
            tamanho: tamanhoEscolhido, // Guarda a opção selecionada.
            quantidade: 1 // Inicia a linha com uma unidade.
        }; // Fecha os dados do novo item.

        // Guarda o item no carrinho.
        carrinho.push(item); // Adiciona o novo item à lista.
    } // Fecha a verificação de item existente.

    // Salva o carrinho atualizado no navegador.
    localStorage.setItem("carrinho", JSON.stringify(carrinho)); // Salva a lista atualizada no navegador.

    // Informa o usuário que o produto foi adicionado.
    alert("Produto adicionado ao carrinho!"); // Confirma a inclusão ao cliente.

} // Fecha a função de inclusão no carrinho.