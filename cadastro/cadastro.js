// cadastro.js
// Este script controla o cadastro de novos usuários.
// Ele valida os campos, impede emails repetidos e grava os dados no localStorage.

// Captura os elementos do formulário de cadastro.
let email = document.getElementById('email'); // Localiza o campo de email do cadastro.
let senha = document.getElementById('senha'); // Localiza o campo da nova senha.
let confirmarSenha = document.getElementById('confirmar-senha'); // Localiza a confirmação da senha.
let btnCadastro = document.getElementById('btn-cadastro'); // Localiza o botão de criar conta.

// Quando clicar no botão, chama a função de cadastro.
btnCadastro.addEventListener('click', cadastroUsuario); // Inicia a validação quando o botão é clicado.

function cadastroUsuario(evento) { // Valida os campos e salva a nova conta.
    // Evita o envio padrão do formulário para validar manualmente os dados.
    evento.preventDefault(); // Impede o envio padrão do formulário.

    // 1) Verifica se os campos estão vazios.
    if (email.value.trim() === '' || senha.value === '') { // Confere se email ou senha estão vazios.
        alert('Email ou senha vazios'); // Explica por que o cadastro não pode continuar.
        return; // Interrompe a função sem salvar a conta.
    } // Fecha a verificação de campos vazios.

    // 2) Valida se o email possui o formato básico com @ e ponto.
    if (!email.value.includes('@') || !email.value.includes('.')) { // Faz uma validação básica do formato do email.
        alert('Digite um e-mail válido'); // Solicita que o usuário corrija o endereço.
        return; // Interrompe o cadastro enquanto o email for inválido.
    } // Fecha a validação do email.

    // 3) Confirma se a senha e a confirmação são iguais.
    if (senha.value !== confirmarSenha.value) { // Compara a senha com o campo de confirmação.
        alert('As senhas não coincidem'); // Informa que os campos têm valores diferentes.
        return; // Interrompe o cadastro até as senhas coincidirem.
    } // Fecha a comparação das senhas.

    // 4) Lê os usuários já cadastrados salvos no navegador.
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || []; // Lê os cadastros existentes ou cria uma lista vazia.

    // 5) Verifica se o email já existe para evitar duplicidade.
    let emailExiste = usuarios.some(user => user.email === email.value.trim()); // Verifica se o email já pertence a uma conta.
    if (emailExiste) { // Não permite cadastrar o mesmo email novamente.
        alert('Este e-mail já está cadastrado'); // Informa que a conta já existe.
        return; // Interrompe o cadastro duplicado.
    } // Fecha a verificação de email repetido.

    // Cria o objeto do novo usuário com email e senha.
    let usuario = { // Cria os dados que serão guardados para a nova conta.
        email: email.value.trim(), // Remove espaços extras do email.
        senha: senha.value // Guarda a senha informada no formulário.
    }; // Fecha o objeto da nova conta.

    // Adiciona o novo usuário na lista e salva no localStorage.
    usuarios.push(usuario); // Adiciona a conta à lista de usuários.
    localStorage.setItem('usuarios', JSON.stringify(usuarios)); // Salva a lista atualizada no navegador.

    alert('Cadastro realizado com sucesso!'); // Confirma que a conta foi criada.

    // Redireciona para a página de login.
    window.location.href = '../login/login.html'; // Leva o usuário à página de login.
} // Fecha a função de cadastro.