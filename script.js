function Comofunciona(){
    var destino = document.getElementById("ComoFunciona");

    if(destino) {
        destino.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}   

const pagina = document.getElementById("pagina");
const botaoTrocarTema = document.getElementById("trocarTema");

function trocarTema() {
    if (pagina.classList.contains('tema-dark')) {
        pagina.classList.remove('tema-dark');
        botaoTrocarTema.textContent = "Alterar Para Tema Escuro";
        localStorage.setItem('tema', 'claro');
    }else {
        pagina.classList.add("tema-dark");
        botaoTrocarTema.textContent = "Alterar Para Tema Claro";
        localStorage.setItem('tema', 'escuro');
    }
}
botaoTrocarTema.addEventListener('click', trocarTema);

(function carregarTema() {
    const temaSalvo = localStorage.getItem('tema'); 

    if (temaSalvo === 'dark') {
        pagina.classList.add('tema-dark');
        botaoTrocarTema.textContent = "Alterar Para Tema Claro";
    } else {
        pagina.classList.remove('tema-dark');
        botaoTrocarTema.textContent = "Alterar Para Tema Escuro";
    }
})();
function nao() {
    window.location.href="Tela de Login.html"
}
function sim() {
    window.location.href="index.html"
}