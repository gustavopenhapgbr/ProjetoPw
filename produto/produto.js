// Preenche o catálogo e filtra os produtos pelo termo enviado na busca.

// Remove acentos e diferenças de maiúsculas para comparar textos de forma uniforme.
function normalizarTexto(texto) { // Prepara um texto para buscas sem acentos e sem diferença entre maiúsculas e minúsculas.
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(); // Separa e remove acentos e converte as letras para minúsculas.
} // Fecha a função de normalização.

// Lê e normaliza o termo informado no parâmetro "busca" da URL.
const parametrosBusca = new URLSearchParams(window.location.search); // Lê os parâmetros recebidos no endereço da página.
const termoBusca = (parametrosBusca.get("busca") || "").trim(); // Obtém a busca e remove espaços das pontas.
const termoNormalizado = normalizarTexto(termoBusca); // Normaliza o termo antes de comparar com os produtos.

// Guarda referências aos elementos da página que podem ser atualizados pela busca.
const campoBusca = document.querySelector(".busca input"); // Localiza o campo onde a busca foi digitada.
const tituloProdutos = document.getElementById("titulo-produtos"); // Localiza o título da área de produtos.
const descricaoProdutos = document.getElementById("descricao-produtos"); // Localiza o texto abaixo do título.
const mensagemSemResultados = document.getElementById("sem-resultados"); // Localiza o aviso para buscas sem correspondência.
let quantidadeResultados = 0; // Conta quantos produtos serão exibidos.

// Mantém o texto pesquisado visível após o carregamento dos resultados.
if (campoBusca) { // Confere se o campo de busca está presente na página.
  campoBusca.value = termoBusca; // Mantém o termo preenchido após carregar os resultados.
} // Fecha a verificação do campo.

// Informa que a página está exibindo resultados quando há uma pesquisa ativa.
if (termoNormalizado) { // Atualiza o cabeçalho somente quando existe uma busca.
  tituloProdutos.textContent = "Resultados da pesquisa"; // Troca o título padrão pelo título dos resultados.
  descricaoProdutos.textContent = `Resultados para "${termoBusca}".`; // Mostra qual termo foi pesquisado.
} // Fecha a atualização do cabeçalho.

// Renderiza os produtos correspondentes e oculta as categorias sem resultados.
produtos.forEach(function (produto) { // Examina cada produto cadastrado.
  const grupo = document.getElementById(produto.categoria); // Localiza a seção da categoria do produto.
  const grade = grupo.querySelector(".grade"); // Localiza a grade que receberá o cartão.

  // Combina nome, categoria e resumo para que todos possam corresponder à busca.
  const dadosBusca = normalizarTexto( // Normaliza os campos do produto que podem corresponder à busca.
    produto.nome + " " + produto.nomeCategoria + " " + produto.resumo
  ); // Finaliza a montagem do texto de comparação.

  if (termoNormalizado && !dadosBusca.includes(termoNormalizado)) { // Verifica se o produto não contém o termo pesquisado.
    grupo.hidden = true; // Oculta a seção da categoria sem correspondência.
    return; // Pula a criação do cartão para este produto.
  } // Fecha a verificação de correspondência.

  grupo.hidden = false; // Garante que a categoria correspondente fique visível.
  quantidadeResultados++; // Conta este produto como um resultado.
  // Cria o cartão com link para detalhes, imagem, nome, preço e ação.
  grade.innerHTML += `
    <a class="card" href="../descricao-produto/descricao-produto.html?produto=${produto.id}">
      <img src="../imagens/${produto.imagem}" alt="${produto.nome}">
      <h3>${produto.nome}</h3>
      <p>${produto.preco}</p>
      <span>Ver produto</span>
    </a>
  `; // Finaliza e adiciona o cartão à grade.
}); // Fecha a repetição pela lista de produtos.

// Mostra um aviso se a busca ativa não encontrou nenhum produto.
if (termoNormalizado && quantidadeResultados === 0) { // Confere se a pesquisa não encontrou nenhum produto.
  mensagemSemResultados.textContent = `Nenhum produto encontrado para "${termoBusca}".`; // Monta o aviso com o termo pesquisado.
  mensagemSemResultados.hidden = false; // Exibe o aviso na página.
} // Fecha a verificação de resultados vazios.
