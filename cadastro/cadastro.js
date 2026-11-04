let email = document.getElementById('email');
let senha = document.getElementById('senha');
let confirmarSenha = document.getElementById('confirmar-senha');
let btnCadastro = document.getElementById('btn-cadastro');

btnCadastro.addEventListener('click', cadastroUsuario);

function cadastroUsuario(evento) {
    evento.preventDefault();

    if (email.value.trim() === '' || senha.value === '') {
        alert('Email ou senha vazios');
        return;
    }

    if (!email.value.includes('@') || !email.value.includes('.')) {
        alert('Digite um e-mail válido');
        return;
    }

    if (senha.value !== confirmarSenha.value) {
        alert('As senhas não coincidem');
        return;
    }

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    let emailExiste = usuarios.some(user => user.email === email.value.trim());
    if (emailExiste) {
        alert('Este e-mail já está cadastrado');
        return;
    }

    let usuario = {
        email: email.value.trim(),
        senha: senha.value
    };

    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    alert('Cadastro realizado com sucesso!');

    window.location.href = '../login/login.html';
}