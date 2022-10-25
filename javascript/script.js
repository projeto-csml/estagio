// MOSTRAR E ESCONDER SENHA
function eyeClick() {
    let senha1 = document.getElementById("senha1");
    let senha2 = document.getElementById("senha2");
    let eye = document.getElementById("senhaonoff");
    let senhaTypePassword = senha1.type == "password";

    if (senhaTypePassword) {
        senha1.setAttribute("type", "text");
        senha2.setAttribute("type", "text");
        eye.setAttribute("src", "../img/eye-off.svg");
        eye.setAttribute("alt", "Ocultar Senha");

    } else {
        senha1.setAttribute("type", "password");
        senha2.setAttribute("type", "password");
        eye.setAttribute("src", "../img/eye.svg");
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

// VALIDAÇÃO TELA DE CADASTRO E LOGIN
function valuetipo(){
    //entrada
    let tipo = document.form.tipo.value;

    //processamento
    if(tipo == "acrilico"){
        valor = 10;
    }
    else if(tipo == "antiqueda"){
        valor = 12;
    }
    else if(tipo == "silicone"){
        valor = 15;
    }

    //saida
    document.getElementById("res").value = valor;

    document.getElementById("glitter").checked = false;
    document.getElementById("name").checked = false;
    document.getElementById("numero").checked = false;
    document.getElementById("foto").checked = false;
}
function valuea(valor, marcado){
    //entrada
    total = document.getElementById("res").value;

    //processamento
    if(marcado){
        total = Number(total) + Number(valor);
    }
    else {
        total = Number(total) - Number(valor)
    }

    //saida
    document.getElementById("res").value = total;
}
function envia(form){
    if(form.email.value == "") {
        alert("O Campo email é obrigatório")
        form.email.focus();
        return false;
    } 

    else if(form.senha1.value == "") {
        alert("O Campo senha é obrigatório")
        form.senha.focus();
        return false;
    } 

    else if(form.nome.value == "") {
        alert("O Campo nome é obrigatório")
        form.nome.focus();
        return false;
    } 

    else if(form.senha1.value != form.senha2.value){
        alert("As senhas não coincidem");
        return false;
    }

    var chk1 = document.form.check.checked;
    if(chk1 == false){
        alert("Você não aceitou os termos")
        return false
    } else {
        return true
    }
}

function senhas(){
    let senha1 = document.form.senha1.value;
    let senha2 = document.form.senha2.value;

    
    if(senha1 != senha2) {
        document.getElementById("msg").style.display = "block";
    }
    else {
        document.getElementById("msg").style.display = "none";
    }
}