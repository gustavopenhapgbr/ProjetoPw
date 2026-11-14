// usuario.js
// Este script controla o menu de usuário do site.
// Ele mostra se o usuário está logado ou não e oferece acesso
// às páginas de login e cadastro ou a opção de logout.

// Busca o elemento HTML que contém o dropdown de usuário.
let dropdown = document.getElementById('dropdown-usuario');

// Tenta recuperar o email ou nome do usuário salvo no navegador.
let usuarioLogado = localStorage.getItem('usuarioLogado');

// Se existir um usuário logado, mostra uma saudação e o botão de sair.
if (usuarioLogado) {
    dropdown.innerHTML = `
        <p>Olá, ${usuarioLogado}</p>
        <button id="btn-sair">Sair</button>
    `;

    // Quando clicar em sair, remove o usuário do localStorage e recarrega a página.
    document.getElementById('btn-sair').addEventListener('click', function () {
        localStorage.removeItem('usuarioLogado');
        window.location.reload();
    });
} else {
    // Se não houver usuário logado, mostra links para entrar ou criar conta.
    dropdown.innerHTML = `
        <a href="../login/login.html">Entrar</a>
        <a href="../cadastro/cadastro.html">Criar conta</a>
    `;
}