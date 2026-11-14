// produtos.js
// Este arquivo centraliza a base de dados dos produtos da loja.
// Cada objeto representa um item do catálogo com nome, categoria,
// preço, imagem e descrições usadas em diversas páginas.

const produtos = [
  {
    id: "camiseta-cinza-clara",
    categoria: "camisetas",
    nomeCategoria: "Camisetas",
    nome: "Camiseta Cinza Clara",
    preco: "R$ 89,90",
    imagem: "camiseta_1_cinza_claro.png",
    resumo: "Camiseta básica cinza clara. Confortável e fácil de combinar com seu estilo.",
    descricao: "Peça streetwear para compor seu visual no dia a dia.",
    destaque: true
  },
  {
    id: "camiseta-preta",
    categoria: "camisetas",
    nomeCategoria: "Camisetas",
    nome: "Camiseta Preta",
    preco: "R$ 89,90",
    imagem: "camiseta_3_preta.png",
    resumo: "Camiseta preta versátil para completar seu visual streetwear.",
    descricao: "Uma peça confortável e fácil de combinar em diferentes ocasiões."
  },
  {
    id: "calca-cinza-logo-lateral",
    categoria: "calcas",
    nomeCategoria: "Calças",
    nome: "Calça Cinza Logo Lateral",
    preco: "R$ 159,90",
    imagem: "calca_1_cinza_logo_lateral.png",
    resumo: "Calça cinza com logo lateral para um visual streetwear marcante.",
    descricao: "Combine com suas camisetas favoritas para montar um look casual.",
    destaque: true
  },
  {
    id: "calca-preta-guaxinim-duplo",
    categoria: "calcas",
    nomeCategoria: "Calças",
    nome: "Calça Preta Guaxinim Duplo",
    preco: "R$ 159,90",
    imagem: "calca_2_preta_guaxinim_duplo.png",
    resumo: "Calça preta com estampa de guaxinim duplo.",
    descricao: "Uma peça streetwear com estampa exclusiva para destacar seu estilo."
  },
  {
    id: "shorts-moletom-cinza",
    categoria: "shorts",
    nomeCategoria: "Shorts",
    nome: "Shorts Moletom Cinza",
    preco: "R$ 99,90",
    imagem: "shorts_1_moletom_cinza.png",
    resumo: "Shorts de moletom cinza para trazer conforto ao seu dia a dia.",
    descricao: "Combine conforto e estilo em produções casuais.",
    destaque: true
  },
  {
    id: "shorts-preto-script-lateral",
    categoria: "shorts",
    nomeCategoria: "Shorts",
    nome: "Shorts Preto Script Lateral",
    preco: "R$ 99,90",
    imagem: "shorts_2_preto_script_lateral.png",
    resumo: "Shorts preto com detalhe script lateral.",
    descricao: "Uma peça versátil para completar seu look streetwear."
  },
  {
    id: "conjunto-azul",
    categoria: "conjuntos",
    nomeCategoria: "Conjuntos",
    nome: "Conjunto Azul",
    preco: "R$ 249,90",
    imagem: "conjunto_azul.png",
    resumo: "Conjunto azul para criar uma combinação completa com personalidade.",
    descricao: "As peças formam um look coordenado e fácil de usar.",
    destaque: true
  },
  {
    id: "conjunto-bege",
    categoria: "conjuntos",
    nomeCategoria: "Conjuntos",
    nome: "Conjunto Bege",
    preco: "R$ 249,90",
    imagem: "conjunto_bege.png",
    resumo: "Conjunto bege com visual neutro e fácil de combinar.",
    descricao: "Uma opção coordenada para compor seu estilo com praticidade."
  },
  {
    id: "bolsa",
    categoria: "acessorios",
    nomeCategoria: "Acessórios",
    nome: "Bolsa",
    preco: "R$ 129,90",
    imagem: "bolsa.png",
    resumo: "Bolsa para levar seus itens essenciais e completar seu visual.",
    descricao: "Um acessório prático para acompanhar suas produções.",
    destaque: true
  },
  {
    id: "bone",
    categoria: "acessorios",
    nomeCategoria: "Acessórios",
    nome: "Boné",
    preco: "R$ 79,90",
    imagem: "bone.png",
    resumo: "Boné para complementar seu visual streetwear.",
    descricao: "Um acessório versátil para usar no dia a dia."
  }
];
