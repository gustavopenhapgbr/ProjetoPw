// produtos.js
// Este arquivo centraliza a base de dados dos produtos da loja.
// Cada objeto representa um item do catálogo com nome, categoria,
// preço, imagem e descrições usadas em diversas páginas.

// Campos: id identifica o produto nos links; categoria liga o item à grade;
// nomeCategoria e nome são exibidos na página; preço, imagem, resumo e descrição
// completam a apresentação; destaque marca os itens da página inicial.
const produtos = [ // Lista compartilhada pelos scripts de catálogo, home e detalhes.
  // Camisetas disponíveis na loja.
  {
    id: "camiseta-cinza-clara", // Identificador usado nos links e no carrinho.
    categoria: "camisetas", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Camisetas", // Nome da categoria mostrado e usado na busca.
    nome: "Camiseta Cinza Clara", // Nome exibido nos cartões e detalhes.
    preco: "R$ 89,90", // Preço apresentado ao cliente.
    imagem: "camiseta_1_cinza_claro.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Camiseta básica cinza clara. Confortável e fácil de combinar com seu estilo.", // Texto curto da página de detalhes.
    descricao: "Peça streetwear para compor seu visual no dia a dia.", // Descrição completa da peça.
    destaque: true // Inclui este produto na seção de destaques da home.
  },
  {
    id: "camiseta-preta", // Identificador usado nos links e no carrinho.
    categoria: "camisetas", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Camisetas", // Nome da categoria mostrado e usado na busca.
    nome: "Camiseta Preta", // Nome exibido nos cartões e detalhes.
    preco: "R$ 89,90", // Preço apresentado ao cliente.
    imagem: "camiseta_3_preta.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Camiseta preta versátil para completar seu visual streetwear.", // Texto curto da página de detalhes.
    descricao: "Uma peça confortável e fácil de combinar em diferentes ocasiões." // Descrição completa da peça.
  },
  // Calças disponíveis na loja.
  {
    id: "calca-cinza-logo-lateral", // Identificador usado nos links e no carrinho.
    categoria: "calcas", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Calças", // Nome da categoria mostrado e usado na busca.
    nome: "Calça Cinza Logo Lateral", // Nome exibido nos cartões e detalhes.
    preco: "R$ 159,90", // Preço apresentado ao cliente.
    imagem: "calca_1_cinza_logo_lateral.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Calça cinza com logo lateral para um visual streetwear marcante.", // Texto curto da página de detalhes.
    descricao: "Combine com suas camisetas favoritas para montar um look casual.", // Descrição completa da peça.
    destaque: true // Inclui este produto na seção de destaques da home.
  },
  {
    id: "calca-preta-guaxinim-duplo", // Identificador usado nos links e no carrinho.
    categoria: "calcas", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Calças", // Nome da categoria mostrado e usado na busca.
    nome: "Calça Preta Guaxinim Duplo", // Nome exibido nos cartões e detalhes.
    preco: "R$ 159,90", // Preço apresentado ao cliente.
    imagem: "calca_2_preta_guaxinim_duplo.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Calça preta com estampa de guaxinim duplo.", // Texto curto da página de detalhes.
    descricao: "Uma peça streetwear com estampa exclusiva para destacar seu estilo." // Descrição completa da peça.
  },
  // Shorts disponíveis na loja.
  {
    id: "shorts-moletom-cinza", // Identificador usado nos links e no carrinho.
    categoria: "shorts", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Shorts", // Nome da categoria mostrado e usado na busca.
    nome: "Shorts Moletom Cinza", // Nome exibido nos cartões e detalhes.
    preco: "R$ 99,90", // Preço apresentado ao cliente.
    imagem: "shorts_1_moletom_cinza.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Shorts de moletom cinza para trazer conforto ao seu dia a dia.", // Texto curto da página de detalhes.
    descricao: "Combine conforto e estilo em produções casuais.", // Descrição completa da peça.
    destaque: true // Inclui este produto na seção de destaques da home.
  },
  {
    id: "shorts-preto-script-lateral", // Identificador usado nos links e no carrinho.
    categoria: "shorts", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Shorts", // Nome da categoria mostrado e usado na busca.
    nome: "Shorts Preto Script Lateral", // Nome exibido nos cartões e detalhes.
    preco: "R$ 99,90", // Preço apresentado ao cliente.
    imagem: "shorts_2_preto_script_lateral.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Shorts preto com detalhe script lateral.", // Texto curto da página de detalhes.
    descricao: "Uma peça versátil para completar seu look streetwear." // Descrição completa da peça.
  },
  // Conjuntos disponíveis na loja.
  {
    id: "conjunto-azul", // Identificador usado nos links e no carrinho.
    categoria: "conjuntos", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Conjuntos", // Nome da categoria mostrado e usado na busca.
    nome: "Conjunto Azul", // Nome exibido nos cartões e detalhes.
    preco: "R$ 249,90", // Preço apresentado ao cliente.
    imagem: "conjunto_azul.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Conjunto azul para criar uma combinação completa com personalidade.", // Texto curto da página de detalhes.
    descricao: "As peças formam um look coordenado e fácil de usar.", // Descrição completa da peça.
    destaque: true // Inclui este produto na seção de destaques da home.
  },
  {
    id: "conjunto-bege", // Identificador usado nos links e no carrinho.
    categoria: "conjuntos", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Conjuntos", // Nome da categoria mostrado e usado na busca.
    nome: "Conjunto Bege", // Nome exibido nos cartões e detalhes.
    preco: "R$ 249,90", // Preço apresentado ao cliente.
    imagem: "conjunto_bege.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Conjunto bege com visual neutro e fácil de combinar.", // Texto curto da página de detalhes.
    descricao: "Uma opção coordenada para compor seu estilo com praticidade." // Descrição completa da peça.
  },
  // Acessórios disponíveis na loja.
  {
    id: "bolsa", // Identificador usado nos links e no carrinho.
    categoria: "acessorios", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Acessórios", // Nome da categoria mostrado e usado na busca.
    nome: "Bolsa", // Nome exibido nos cartões e detalhes.
    preco: "R$ 129,90", // Preço apresentado ao cliente.
    imagem: "bolsa.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Bolsa para levar seus itens essenciais e completar seu visual.", // Texto curto da página de detalhes.
    descricao: "Um acessório prático para acompanhar suas produções.", // Descrição completa da peça.
    destaque: true // Inclui este produto na seção de destaques da home.
  },
  {
    id: "bone", // Identificador usado nos links e no carrinho.
    categoria: "acessorios", // Grupo que exibe o produto no catálogo.
    nomeCategoria: "Acessórios", // Nome da categoria mostrado e usado na busca.
    nome: "Boné", // Nome exibido nos cartões e detalhes.
    preco: "R$ 79,90", // Preço apresentado ao cliente.
    imagem: "bone.png", // Arquivo da foto dentro da pasta de imagens.
    resumo: "Boné para complementar seu visual streetwear.", // Texto curto da página de detalhes.
    descricao: "Um acessório versátil para usar no dia a dia." // Descrição completa da peça.
  }
]; // Fecha a lista de produtos.
