function Comofunciona() {
    var destino = document.getElementById("ComoFunciona");

    if (destino) {
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
    } else {
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
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const nome = document.getElementById('nome').value;  

    if(!nome) {
        alert("Sem nome");
        return
    } else if(!email){
        alert("Sem email")
        return
    } else if(!senha){
        alert("Sem senha")
        return
    } else{
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);
        window.location.href = "Tela de Login.html"
    }
}
function sim() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;


    if(!email){
        alert("Sem email")
        return
    } else if(!senha){
        alert("Sem senha")
        return
    } else{

        localStorage.setItem("email", email);
        localStorage.setItem("senha", senha);
        window.location.href = "index.html"
    }
    
}

function cadastrar() {
    const main = document.getElementById('conteudo');
    main.innerHTML = `
        <div class="Cadastrodivconteiner">
            <img src="img/LogoTechShip.png" alt="logo">
            <p class="Titulotechship">TECH SHIP</p>
            <p class="subtitulocadastro">Crie sua conta</p>
            <p class="nomecadastro">Nome Completo</p>
            <input type="text" id="nome" placeholder="Seu Nome" class="inputnomecadastro">
            <p class="nomecadastro">Email</p>
            <input type="email" id="email" placeholder="Digite seu E-Mail" class="inputemailcadastro">
            <p class="nomecadastro">Senha</p>
            <input type="password" id="senha" placeholder="Digite sua Senha" class="inputsenhacadastro">
            <br>
            <button class="buttoncadastrol" onclick="nao()">Criar Conta</button>
            <p class="façalogincadastro">Já tem uma conta? <a class="a" href="#" onclick="login(); return false;">Faça login</a></p>
            <hr class="linhacadastro">
            <p class="façalogincadastro">Sistema de Gestão Logística © 2025</p>
        </div>
    `;
}
function login() {
    const main = document.getElementById('conteudo');
    main.innerHTML = `
        <div class="Cadastrodivconteiner">
            <img src="img/LogoTechShip.png" alt="logo">
            <p class="Titulotechship">TECH SHIP</p>
            <p class="subtitulologin">Bem-vindo de volta!</p>
            <p class="nomecadastro">Email</p>
            <input type="email" id="email" placeholder="Digite seu E-Mail" class="inputemaillogin">
            <p class="nomecadastro">Senha</p>
            <input type="password" id="senha" placeholder="Digite sua Senha" class="inputsenhalogin">
            <br>
            <button class="buttoncadastro" onclick="sim()">Entrar</button>
            <p class="façalogincadastro">Não tem uma conta? <a class="a" href="#" onclick="cadastrar(); return false;">Faça Cadastro</a></p>
            <hr  class="linhacadastro">
            <p class="façalogincadastro">Sistema de Gestão Logística © 2025</p>
        </div>
    `;
}