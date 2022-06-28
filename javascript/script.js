// MOSTRAR E ESCONDER SENHA
function eyeClick() {
    let inputSenha = document.getElementById("inputSenha");
    let eye = document.getElementById("senhaonoff");
    let senhaTypePassword = inputSenha.type == "password";

    if (senhaTypePassword) {
        inputSenha.setAttribute("type", "text");
        eye.setAttribute("src", "img/dec_senhaoff.png");
        eye.setAttribute("alt", "Ocultar Senha");

    } else {
        inputSenha.setAttribute("type", "password");
        eye.setAttribute("src", "img/dec_senhaon.png");
        eye.setAttribute("alt", "Mostrar Senha");

    }
}

// MOSTRAR E ESCONDER NAVBAR RESPONSIVO
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventdefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu); 