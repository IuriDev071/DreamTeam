// Pega o nome e email que está cadastrado no localStorage
let nome = localStorage.getItem("nomeLogado")
let email = localStorage.getItem("emailLogado")

let inputProfi = localStorage.getItem("profi")
let inputInfo = localStorage.getItem("info")
let inputQlf = localStorage.getItem("qlf")

    document.getElementById("name").value = nome.replace(/['"]+/g, '')
    document.getElementById("profi").value = inputProfi.replace(/['"]+/g, '')
    document.getElementById("infos").value = inputInfo.replace(/['"]+/g, '')
    document.getElementById("qualify").value = inputQlf.replace(/['"]+/g, '')

function attDados() {
    swal({
        title: "Você tem certeza que deseja atualizar suas informações?",
        text: "",
        buttons: true,
        dangerMode: false,
        icon: "warning"
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Pronto, suas informações foram atualizadas", {
            icon: "success",
        });
        let newProfi = document.getElementById("profi").value
            let newInfo = document.getElementById("infos").value
            let newQlf = document.getElementById("qualify").value
     
            localStorage.setItem("profi", newProfi)
            localStorage.setItem("info", newInfo)
            localStorage.setItem("qlf", newQlf)
        } else {
          
        }
      });
}