let btnLogin = document.getElementById('btn-login');
let email = document.getElementById('email');
let senha = document.getElementById('senha');

btnLogin.addEventListener('click', loginUsuario);


function loginUsuario (evento) {
    evento.preventDefault();

    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    let usuarioEncontrado = usuarios.find(function (usuario) {
        return usuario.email === email.value.trim() && usuario.senha === senha.value;
    });

    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', usuarioEncontrado.email);
        alert('Bem vindo a F.Company!')
        window.location.href = '../home/index.html';  
    } else {
        alert('Email ou senha incorretos');
    }
}