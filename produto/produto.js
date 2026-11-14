// produto.js
// Este script preenche as seções de categorias da página de produtos.
// Ele percorre a lista de produtos e insere um card para cada um no container
// da categoria correspondente.

produtos.forEach(function (produto) {
  // Busca a grade da categoria atual (camisetas, calças, etc.).
  const grade = document.querySelector(`#${produto.categoria} .grade`);

  // Adiciona um card com imagem, nome, preço e botão de ver produto.
  grade.innerHTML += `
    <a class="card" href="../descricao-produto/descricao-produto.html?produto=${produto.id}">
      <img src="../imagens/${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <span>Ver produto</span>
    </a>
  `;
});
