var myFullpage = new fullpage('#fullpage', {
    sectionsColor: ['#56097f', '#6818b5', '#7b2cbf', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage'],
    navigation: true,
    navigationTooltips: ['Home', 'Sobre', 'Desenvolvedores'],
    showActiveTooltip: true,
    menu: '#menu'
});

function logIn() {
    window.location.href = "../loginSA.html"
}

function cadastre(){
    window.location.href = "../cadastroSA.html"
}