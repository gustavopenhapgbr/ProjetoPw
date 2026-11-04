let dropdown = document.getElementById('dropdown-usuario');
let usuarioLogado = localStorage.getItem('usuarioLogado');

if (usuarioLogado) {
    dropdown.innerHTML = `
        <p>Olá, ${usuarioLogado}</p>
        <button id="btn-sair">Sair</button>
    `;

    document.getElementById('btn-sair').addEventListener('click', function () {
        localStorage.removeItem('usuarioLogado');
        window.location.reload();
    });
} else {
     dropdown.innerHTML = `
        <a href="../login/login.html">Entrar</a>
        <a href="../cadastro/cadastro.html">Criar conta</a>
    `;
}