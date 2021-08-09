//Pegando os dados do ultimo usuario que efetuou login
let usuario = JSON.parse(localStorage.getItem("nomeLogado"))
// Pega os dados do local storage
let flag = localStorage.getItem("flag")
let dadosUsuariosStorage = localStorage.getItem("Dados")
let arrayMain = []

//Enviando pro input o nome do usuario que está logado
document.getElementById("entradaNome").value = "Bem vindo(a), "+ usuario.slice(0 ,10) + "."

function showPerfil() {
    window.location.href="perfilUsuario.html"
}

//Função para mostrar os dados utilizando sweet alert
function showDados() {

 arrayMain = JSON.parse(dadosUsuariosStorage)
    swal("Meus dados:",
        `
            Nome: ${arrayMain[flag]['nome']}
            CPF: ${arrayMain[flag]['cpf']}
            Usuario: ${arrayMain[flag]['usuario']}
            Email: ${arrayMain[flag]['email']}
        `,
        "warning")
}

// Função do button "Sair" da main page
function logOut() {

    localStorage.removeItem("usuarioLogado")
    window.location.href = "./src/index.html"

}

//Função que apaga usuario
function Direct() {

    swal({
        title: "Você está certo disso?",
        text: "Se você deletar, não poderá recuperar sua conta",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            
        let arrayDelete = []
        let dadosDelete = localStorage.getItem('Dados')
        arrayDelete = JSON.parse(dadosDelete)

        for(a=0; a < arrayDelete.length; a++) {
        
            if(arrayDelete[a]['usuario'] == usuario) {
                    let posiçãoExcluir = a 
            
                swal(`Adeus ${usuario}`, "Usuario excluido com sucesso", "success")
                    arrayDelete.splice(1, posiçãoExcluir)
                    localStorage.removeItem("usuarioLogado")
                    localStorage.setItem("Dados", JSON.stringify(arrayDelete))

                    setTimeout(function() {
                        window.location.href="./src/index.html"
                    }, 2000);
        } 
    }
        } else {
          swal(`${usuario} sua conta está a salvo`, `Obrigado, por continuar com a gente!`, "warning");
        }
      });
}

//Função para voltar para a mainPage
function backPage() {

    window.location.href="mainPage.html"

}