produtos.forEach(function (produto) {
  const grade = document.querySelector(`#${produto.categoria} .grade`);

  grade.innerHTML += `
    <a class="card" href="../descricao-produto/descricao-produto.html?produto=${produto.id}">
      <img src="../imagens/${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <span>Ver produto</span>
    </a>
  `;
});
