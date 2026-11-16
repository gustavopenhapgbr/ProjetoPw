function normalizarTexto(texto) {
  return texto.toLowerCase();
}

const parametrosBusca = new URLSearchParams(window.location.search);
const termoBusca = (parametrosBusca.get("busca") || "").trim();
const termoNormalizado = normalizarTexto(termoBusca);

const campoBusca = document.querySelector(".busca input");
const tituloProdutos = document.getElementById("titulo-produtos");
const descricaoProdutos = document.getElementById("descricao-produtos");
const mensagemSemResultados = document.getElementById("sem-resultados");
let quantidadeResultados = 0;

if (campoBusca) {
  campoBusca.value = termoBusca;
}

if (termoNormalizado) {
  tituloProdutos.textContent = "Resultados da pesquisa";
  descricaoProdutos.textContent = `Resultados para "${termoBusca}".`;
}

produtos.forEach(function (produto) {
  const grupo = document.getElementById(produto.categoria);
  const grade = grupo.querySelector(".grade");

  const dadosBusca = normalizarTexto(
    produto.nome + " " + produto.nomeCategoria + " " + produto.resumo
  );

  if (termoNormalizado && !dadosBusca.includes(termoNormalizado)) {
    grupo.hidden = true;
    return;
  }

  grupo.hidden = false;
  quantidadeResultados++;
  grade.innerHTML += `
    <a class="card" href="../descricao-produto/descricao-produto.html?produto=${produto.id}">
      <img src="../imagens/${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <span>Ver produto</span>
    </a>
  `;
});

if (termoNormalizado && quantidadeResultados === 0) {
  mensagemSemResultados.textContent = `Nenhum produto encontrado para "${termoBusca}".`;
  mensagemSemResultados.hidden = false;
}