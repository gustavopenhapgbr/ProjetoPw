// home.js
// Este script carrega os produtos em destaque na página inicial.
// Ele percorre a lista de produtos e cria os cards visuais para cada item destacado.

// Seleciona o container da grade de destaques na home.
const grade = document.querySelector(".destaques .grade"); // Localiza a área onde os destaques serão inseridos.

// Para cada produto da lista, verifica se ele está marcado como destaque.
produtos.forEach(function (produto) { // Examina cada produto cadastrado.
  if (produto.destaque) { // Continua somente para produtos marcados como destaque.
    // Adiciona no HTML um card com imagem, nome e preço do produto.
    // O link leva para a página de descrição do produto específico.
    // Acrescenta um cartão com o link, a imagem, o nome e o preço.
    grade.innerHTML += `
      <a class="card" href="../descricao-produto/descricao-produto.html?produto=${produto.id}">
        <img src="../imagens/${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <strong>${produto.preco}</strong>
      </a>
    `; // Finaliza o cartão inserido na página inicial.
  } // Fecha a condição do destaque.
}); // Fecha a repetição pela lista de produtos.
