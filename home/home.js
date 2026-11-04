const grade = document.querySelector(".destaques .grade");

produtos.forEach(function (produto) {
  if (produto.destaque) {
    grade.innerHTML += `
      <a class="card" href="../descricao-produto/descricao-produto.html?produto=${produto.id}">
        <img src="../imagens/${produto.imagem}" alt="${produto.nome}">
        <h2>${produto.nome}</h2>
        <strong>${produto.preco}</strong>
      </a>
    `;
  }
});
