// cadastro.js
// Este script controla o cadastro de novos usuários.
// Ele valida os campos, impede emails repetidos e grava os dados no localStorage.

// Captura os elementos do formulário de cadastro.
let email = document.getElementById('email');
let senha = document.getElementById('senha');
let confirmarSenha = document.getElementById('confirmar-senha');
let btnCadastro = document.getElementById('btn-cadastro');

// Quando clicar no botão, chama a função de cadastro.
btnCadastro.addEventListener('click', cadastroUsuario);

function cadastroUsuario(evento) {
    // Evita o envio padrão do formulário para validar manualmente os dados.
    evento.preventDefault();

    // 1) Verifica se os campos estão vazios.
    if (email.value.trim() === '' || senha.value === '') {
        alert('Email ou senha vazios');
        return;
    }

    // 2) Valida se o email possui o formato básico com @ e ponto.
    if (!email.value.includes('@') || !email.value.includes('.')) {
        alert('Digite um e-mail válido');
        return;
    }

    // 3) Confirma se a senha e a confirmação são iguais.
    if (senha.value !== confirmarSenha.value) {
        alert('As senhas não coincidem');
        return;
    }

    // 4) Lê os usuários já cadastrados salvos no navegador.
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // 5) Verifica se o email já existe para evitar duplicidade.
    let emailExiste = usuarios.some(user => user.email === email.value.trim());
    if (emailExiste) {
        alert('Este e-mail já está cadastrado');
        return;
    }

    // Cria o objeto do novo usuário com email e senha.
    let usuario = {
        email: email.value.trim(),
        senha: senha.value
    };

    // Adiciona o novo usuário na lista e salva no localStorage.
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');

    // Redireciona para a página de login.
    window.location.href = '../login/login.html';
}