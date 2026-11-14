// login.js
// Este script realiza o login do usuário na aplicação.
// Ele verifica se o email e a senha informados existem no localStorage
// e, em caso positivo, salva o usuário logado e redireciona para a home.

// Captura os elementos do formulário de login.
let btnLogin = document.getElementById('btn-login');
let email = document.getElementById('email');
let senha = document.getElementById('senha');

// Quando clicar no botão de login, chama a função de autenticação.
btnLogin.addEventListener('click', loginUsuario);

function loginUsuario (evento) {
    // impede o envio padrão do formulário para que a lógica JavaScript controle o fluxo.
    evento.preventDefault();

    // Lê a lista de usuários cadastrados no navegador.
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Busca um usuário que tenha o mesmo email e senha digitados.
    let usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.email === email.value.trim() && usuario.senha === senha.value;
    });

    if (usuarioEncontrado) {
        // Salva o email do usuário como "usuário logado".
        localStorage.setItem('usuarioLogado', usuarioEncontrado.email);
        alert('Bem vindo a F.Company!');

        // Redireciona para a página inicial da loja.
        window.location.href = '../home/index.html';
    } else {
        // Mostra mensagem de erro se os dados estiverem incorretos.
        alert('Email ou senha incorretos');
    }
}