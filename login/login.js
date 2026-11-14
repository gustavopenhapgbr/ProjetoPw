// login.js
// Este script realiza o login do usuário na aplicação.
// Ele verifica se o email e a senha informados existem no localStorage
// e, em caso positivo, salva o usuário logado e redireciona para a home.

// Captura os elementos do formulário de login.
let btnLogin = document.getElementById('btn-login'); // Localiza o botão de entrar.
let email = document.getElementById('email'); // Localiza o campo de email.
let senha = document.getElementById('senha'); // Localiza o campo de senha.

// Quando clicar no botão de login, chama a função de autenticação.
btnLogin.addEventListener('click', loginUsuario); // Chama a validação quando o botão é clicado.

function loginUsuario (evento) { // Valida os dados e inicia a sessão do usuário.
    // impede o envio padrão do formulário para que a lógica JavaScript controle o fluxo.
    evento.preventDefault(); // Impede o formulário de recarregar a página.

    // Lê a lista de usuários cadastrados no navegador.
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Lê os cadastros ou inicia uma lista vazia.

    // Busca um usuário que tenha o mesmo email e senha digitados.
    let usuarioEncontrado = usuarios.find(function (usuario) { // Procura uma conta com os dados informados.
        return usuario.email === email.value.trim() && usuario.senha === senha.value; // Exige email e senha iguais.
    }); // Guarda o resultado da procura.

    if (usuarioEncontrado) { // Continua se encontrou uma conta correspondente.
        // Salva o email do usuário como "usuário logado".
        localStorage.setItem('usuarioLogado', usuarioEncontrado.email); // Salva o email como usuário conectado.
        alert('Bem vindo a F.Company!'); // Confirma o login para o usuário.

        // Redireciona para a página inicial da loja.
        window.location.href = '../home/index.html'; // Abre a página inicial da loja.
    } else { // Executa este caminho quando os dados não correspondem.
        // Mostra mensagem de erro se os dados estiverem incorretos.
        alert('Email ou senha incorretos'); // Informa que a autenticação falhou.
    } // Fecha a verificação do usuário encontrado.
} // Fecha a função de login.