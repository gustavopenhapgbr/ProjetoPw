// usuario.js
// Este script controla o menu de usuário do site.
// Ele mostra se o usuário está logado ou não e oferece acesso
// às páginas de login e cadastro ou a opção de logout.

// Busca o elemento HTML que contém o dropdown de usuário.
let dropdown = document.getElementById('dropdown-usuario'); // Localiza o espaço do menu da conta.

// Tenta recuperar o email ou nome do usuário salvo no navegador.
let usuarioLogado = localStorage.getItem('usuarioLogado'); // Lê o usuário salvo como conectado.

// Se existir um usuário logado, mostra uma saudação e o botão de sair.
if (usuarioLogado) { // Verifica se existe um usuário conectado.
    // Monta a saudação e o botão de saída.
    dropdown.innerHTML = `
        <p>Olá, ${usuarioLogado}</p>
        <button id="btn-sair">Sair</button>
    `; // Finaliza a montagem da saudação e do botão de saída.

    // Quando clicar em sair, remove o usuário do localStorage e recarrega a página.
    document.getElementById('btn-sair').addEventListener('click', function () { // Define o que acontece ao sair.
        localStorage.removeItem('usuarioLogado'); // Apaga o usuário conectado do navegador.
        window.location.reload(); // Atualiza a página para mostrar as opções de visitante.
    }); // Fecha o evento de clique do botão de saída.
} else { // Executa este caminho quando não há usuário conectado.
    // Se não houver usuário logado, mostra links para entrar ou criar conta.
    // Mostra os links para entrar ou criar uma conta.
    dropdown.innerHTML = `
        <a href="../login/login.html">Entrar</a>
        <a href="../cadastro/cadastro.html">Criar conta</a>
    `; // Finaliza a montagem dos links de acesso.
} // Fecha a verificação de usuário conectado.