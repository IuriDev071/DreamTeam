let lista3,lista4
let flag1, flag2
let flag3, flag4, flag5
flag1 = localStorage.getItem("flag1")
flag2 = localStorage.getItem("flag2")
flag4 = localStorage.getItem("flag5")
lista3 = localStorage.getItem("lista1")
lista4 = localStorage.getItem("lista2")
lista5 = localStorage.getItem("lista44")
document.getElementById("innerHtml").value = lista3
document.getElementById("innerHtml2").value = lista4
document.getElementById("innerHtml3").value = lista4
let nome1, nome2, nome3
if(flag1 == 0){
    
    document.getElementById("innerHtml").value = null
}
if(flag2 == 0){
    document.getElementById("innerHtml12").value = null
}
if(flag3 == 0){
    document.getElementById("innerHtml13").value = null
}
function addFavorito1(){
    localStorage.setItem("lista1", "Jeff Bezos")

    document.getElementById("innerHtml").value = localStorage.getItem("lista1")
    flag3 = 1
    localStorage.setItem("flag1", flag3)
}
function addFavorito2(){
    localStorage.setItem("lista2", "Mark Zuckerberg")
    
    document.getElementById("innerHtml2").value = localStorage.getItem("lista2")
    flag4 = 1
    localStorage.setItem("flag2", flag4)
}
function addFavorito3(){
    localStorage.setItem("lista44", "Bill Gates")
    
    document.getElementById("innerHtml3").value = localStorage.getItem("lista44")
    flag5 = 1
    localStorage.setItem("flag5", flag5)
}
function delButton1(){
    // workers.splice(1, 1)
    // lista = null
    localStorage.removeItem("lista1")
    document.getElementById("innerHtml").value = null
    localStorage.setItem("flag1", 0)
}
function delButton2(){
    // workers2.splice(1, 1)
    // lista2 = null
    localStorage.removeItem("lista2")
    document.getElementById("innerHtml2").value = null
    localStorage.setItem("flag2", 0)
}
function delButton3(){
    localStorage.removeItem("lista44")
    document.getElementById("innerHtml3").value = null
    localStorage.setItem("flag5", 0)
}
function viewPerfil(){
    window.location.href = "visualizarPerfil.html" 
}
function viewPerfil2(){
    window.location.href = "visualizarPerfil2.html" 
}
function viewPerfil3(){
    window.location.href = "visualizarPerfil3.html"
}