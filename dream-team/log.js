// Cria os arrays(vetores) para salvar os dados no localStorage
var usuarios = []
var senhas = []
var cpf = []
var nome = []
var email = []

    //Função para validação do email
function validarEmail (email) {
    var emailTestando =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
     return emailTestando.test(email); 
  }

    // Função do button de "Cadastrar", na tela de cadastro
function Registrar() {

    // Inputs da tela de cadastro
    let emailCadastro = document.getElementById("email")
    let userCadastro = document.getElementById("user")
    let passwordCadastro = document.getElementById("confirmarSenha")
    let passwordConfirm = document.getElementById("senhaCadastro")
    let cpfCadastro = document.getElementById("cpf")
    var nomeCadastro = document.getElementById("nomeCompleto")

    // Pega as informações do localStorage
    nome = JSON.parse(localStorage.getItem("cadastroNome"))
    usuarios = JSON.parse(localStorage.getItem("cadastroUsuario"))
    senhas = JSON.parse(localStorage.getItem("cadastroSenha"))
    cpf = JSON.parse(localStorage.getItem("cadastroCpf"))
    email = JSON.parse(localStorage.getItem("cadastroEmail"))

        // Verifica se os campos estão vazios na tela de cadastro
    if (emailCadastro.value == "" || passwordCadastro.value == "" || passwordConfirm.value == "" || cpfCadastro.value == "") {
        swal("ERRO", "Preencha os campos corretamente", 'error')

        //Validação para verificar se o email é valido
    } else if(validarEmail(emailCadastro.value) == false){
        swal("ERRO", "Email invalido!", 'error')

        // Validação para verificar se a senha e a confirmação de senha coincidem
    } else if (passwordCadastro.value != passwordConfirm.value) {
        swal("ERRO", "As senhas não coincidem", 'error')

    } else {
        if (usuarios == null) {

            nome = []
            usuarios = []
            senhas = []
            cpf = []
            email = []
            nome.push(nomeCadastro.value)
            usuarios.push(userCadastro.value)
            senhas.push(passwordCadastro.value)
            cpf.push(cpfCadastro.value)
            email.push(emailCadastro.value)

            localStorage.setItem("cadastroNome", JSON.stringify(nome))
            localStorage.setItem("cadastroUsuario", JSON.stringify(usuarios))
            localStorage.setItem("cadastroSenha", JSON.stringify(senhas))
            localStorage.setItem("cadastroCpf", JSON.stringify(cpf))
            localStorage.setItem("cadastroEmail", JSON.stringify(email))

            // Aqui tem um sweet alert que é um alert estilizado (swal = sweet alert)
            swal("Cadastrado com sucesso!", `Seja bem vindo ${nomeCadastro.value}`, "success");

            // Coloca um tempo de espera de uma página para outra
            setTimeout(function() {
                window.location.href = "loginSA.html"
            }, 2000);

        } else {
            // Push é utilizado para guardar as informações no array dentro do localStorage
            nome.push(nomeCadastro.value)
            usuarios.push(userCadastro.value)
            senhas.push(passwordCadastro.value)
            cpf.push(cpfCadastro.value)
            email.push(emailCadastro.value)
            localStorage.setItem("cadastroNome", JSON.stringify(nome))
            localStorage.setItem("cadastroUsuario", JSON.stringify(usuarios))
            localStorage.setItem("cadastroSenha", JSON.stringify(senhas))
            localStorage.setItem("cadastroCpf", JSON.stringify(cpf))
            localStorage.setItem("cadastroEmail", JSON.stringify(email))

            swal("Cadastrado com sucesso!", `Seja bem vindo ${nomeCadastro.value}`, "success");
            
            setTimeout(function() {
                window.location.href = "loginSA.html"
            }, 2000);
        }
    }
}

// Função do button de "Já possuo cadastro", da tela de cadastro
function iHaveAccount() {

    window.location.href = "loginSA.html"

}

// Função do button de "Esqueci minha senha" da tela de login
function forgotPassword() {

    swal("Tem certeza que ja está cadastrado?", "Efetue o cadastro clicando na opção abaixo!", "warning")

}

// Função do button "Cadastre-se", da tela de login
function goCad() {

    window.location.href = "cadastroSA.html"

}

// Função do button "Sair" da main page
function logOut() {

    window.location.href = "loginSA.html"

}

// Função do button de "Entrar", na tela de login
function Login() {
    // Inputs da tela de login
    var userLogin = document.getElementById("usuarioLog").value
    var passwordLogin = document.getElementById("senhaLog").value

    // Pega as informações salvas no localStorage para utilizar na validação da tela de login
    usuarios = JSON.parse(localStorage.getItem("cadastroUsuario"))
    senhas = JSON.parse(localStorage.getItem("cadastroSenha"))
    cpf = JSON.parse(localStorage.getItem("cadastroCpf"))
    nome = JSON.parse(localStorage.getItem("cadastroNome"))
    email = JSON.parse(localStorage.getItem("cadastroEmail"))

    if (userLogin == "" || passwordLogin == "") {
        swal("ERRO", "Digite corretamente os dados", "error");
    } else {
        for (i = 0; i < usuarios.length; i++) {
            // Validação do usuário e senha na tela de login
            if (userLogin == usuarios[i]) {

                if (passwordLogin == senhas[i]) {
                    //Armazenando os dados do usuario que efetuou login
                    localStorage.setItem("usuarioLogado", JSON.stringify(usuarios[i]))
                    localStorage.setItem("senhaLogado", JSON.stringify(senhas[i]))
                    localStorage.setItem("cpfLogado", JSON.stringify(cpf[i]))
                    localStorage.setItem("nomeLogado", JSON.stringify(nome[i]))
                    localStorage.setItem("emailLogado", JSON.stringify(email[i]))

                    swal("Login efetuado com sucesso!", `Você efetou login como ${userLogin}`, "success");

                    setTimeout(function() {
                        window.location.href = "mainPage.html"
                    }, 2000);
                } else {
                    swal("ERRO", "Dados incorretos", "error");
                }
                return
            }
        }
    }
    swal("ERRO", "Usuário não encontrado", "error");
}