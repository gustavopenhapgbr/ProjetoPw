const produtoId = new URLSearchParams(window.location.search).get("produto");
const produto = produtos.find(function (item) {
  return item.id === produtoId;
});

if (produto) {
  document.getElementById("produto-imagem").src = `../imagens/${produto.imagem}`;
  document.getElementById("produto-imagem").alt = produto.nome;
  document.getElementById("produto-categoria").textContent = produto.nomeCategoria;
  document.getElementById("produto-nome").textContent = produto.nome;
  document.getElementById("produto-preco").textContent = produto.preco;
  document.getElementById("produto-resumo").textContent = produto.resumo;
  document.getElementById("produto-descricao").textContent = produto.descricao;
  document.title = `F.Company | ${produto.nome}`;
}
