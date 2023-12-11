const login = "admin"
const senha = "123"

function realizarLogin(event) {
        
    event.preventDefault();

    let loginUser = document.querySelector(".email").value;
    let psswdUser = document.querySelector(".senha").value;
    let loginResult = document.querySelector(".showLoginResult");

    if (loginUser === login && psswdUser === senha) {
        loginResult.innerHTML = "Login Realizado";
        window.location.href = "index.html"
    } else if (loginUser === login) {
        loginResult.innerHTML = "Senha Incorreta";
    } else if (psswdUser === senha) {
        loginResult.innerHTML = "Email Incorreto";
    } else {
        loginResult.innerHTML = "Login Incorreto";
    }
}

function abrirLink(){
    window.location.href = "cadastro.html"
}