k// Função do button de "Cadastrar", na tela de cadastro
function Registrar() {
    var dadosUsuariosStorage;
    // Inputs da tela de cadastro
    let emailCadastro = document.getElementById("email")
    let userCadastro = document.getElementById("user")
    let passwordCadastro = document.getElementById("confirmarSenha")
    let passwordConfirm = document.getElementById("senhaCadastro")
    let cpfCadastro = document.getElementById("cpf")
    let nomeCadastro = document.getElementById("nomeCompleto")

    dadosUsuariosStorage = localStorage.getItem("Dados")

    let array = []
    array = JSON.parse(dadosUsuariosStorage)

    if (emailCadastro.value == "" 
        || passwordCadastro.value == "" 
            || passwordConfirm.value == "" 
                || cpfCadastro.value == "") {
        swal("ERRO", "Preencha os campos corretamente", 'error')

    } else if(validarEmail(emailCadastro.value) == false) {
        swal("ERRO", "Email invalido!", 'error')
    
    //Validação para verificar se a senha e a confirmação de senha coincidem
    } else if (validarCpf(cpfCadastro.value) == false) {
        swal("ERRO", "CPF invalido!", "error")
        
    } else if (passwordCadastro.value != passwordConfirm.value) {
        swal("ERRO", "As senhas não coincidem", 'error')

    } else {
        if (dadosUsuariosStorage == null || dadosUsuariosStorage == undefined) {

            array = []

            var dadosUsuario = {
                nome: nomeCadastro.value,
                email: emailCadastro.value,
                usuario: userCadastro.value,
                cpf: cpfCadastro.value,
                senha: passwordCadastro.value
            }

            array.push(dadosUsuario)

            localStorage.setItem("Dados", JSON.stringify(array))

            // Aqui tem um sweet alert que é um alert estilizado (swal = sweet alert)
            swal("Cadastrado com sucesso!", `Seja bem vindo ${nomeCadastro.value}`, "success")

            // Coloca um tempo de espera de uma página para outra
            setTimeout(function() {
                window.location.href = "loginSA.html"
            }, 2000);

        } else {
            
            array = JSON.parse(dadosUsuariosStorage)
            
            dadosUsuario = {
                nome: nomeCadastro.value,
                email: emailCadastro.value,
                usuario: userCadastro.value,
                cpf: cpfCadastro.value,
                senha: passwordCadastro.value
            }    
            
        array.push(dadosUsuario)

        localStorage.setItem("Dados", JSON.stringify(array))
        
            swal("Cadastrado com sucesso!", `Seja bem vindo ${nomeCadastro.value}`, "success")
            
            setTimeout(function() {
                window.location.href = "loginSA.html"
            }, 2000);
        }
    }
}
// Função do button de "Entrar", na tela de login
function Login() {
    // Inputs da tela de login
    var userLogin = document.getElementById("usuarioLog").value
    var passwordLogin = document.getElementById("senhaLog").value

    dadosUsuariosStorage = localStorage.getItem("Dados")
    let arrayLogin = []

    arrayLogin = JSON.parse(dadosUsuariosStorage)
    
    if (userLogin == "" || passwordLogin == "") {
        swal("ERRO", "Digite corretamente os dados", "error")
    } else {
        
        for (i = 0; i < arrayLogin.length; i++) {
            // Validação do usuário e senha na tela de login
            if (userLogin == arrayLogin[i]['usuario']) {
                
                if (passwordLogin == arrayLogin[i]['senha']) {
                    
                    //Armazenando os dados do usuario que efetuou login
                    let flag = i
                    localStorage.setItem("usuarioLogado", JSON.stringify(arrayLogin[i]['usuario']))
                    localStorage.setItem("nomeLogado", JSON.stringify(arrayLogin[i]['nome']))
                    localStorage.setItem("emailLogado", JSON.stringify(arrayLogin[i]['email']))
                    localStorage.setItem("flag", flag)
                    
                    swal("Login efetuado com sucesso!", `Você efetou login como ${userLogin}`, "success")
                    setTimeout(function() {
                        window.location.href = "mainPage.html"
                    }, 2000);
                } else {
                    swal("ERRO", "Dados incorretos", "error")
                    return
                }
            return
            }
        }
    }    
}

//Função para validação do email
function validarEmail (email) {
    let emailTestando =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*.[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
     return emailTestando.test(email);
  }

// Validação do cpf
function validarCpf(number) {
    var sum;
    var rest;
    sum = 0;
    if (number == "00000000000") return false;

    for (i=1; i<=9; i++) sum = sum + parseInt(number.substring(i-1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(number.substring(9, 10)) ) return false;

    sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(number.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;
    
    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(number.substring(10, 11) ) ) return false;
    return true;
}