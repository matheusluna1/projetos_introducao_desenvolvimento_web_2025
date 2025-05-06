function acao() {
    let valido = true;

    const nome = document.getElementById("idnome");
    const nomeErro = document.getElementById("nomeErro");

    if (nome.value.trim() === "" ) {
        nome.style.borderColor = "red";
        nomeErro.style.display = "block";
        valido = false
    } else{
        nome.style.borderColor = "green";
        nomeErro.style.display= "none";
    }

    const email = document.getElementById ("idemail");
    const emailErro = document.getElementById("emailErro");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email.value)) {
        email.style.borderColor = "red";
        emailErro.style.display = "block";
        valido= false;
    } else{
        email.style.borderColor = "green";
        emailErro.style.display = "none";
    }

    const mensagem = document.getElementById("idmensagem");
    const mensagemErro= document.getElementById ("mensagemErro");

    if (mensagem.value.trim() === "" ) {
        mensagem.style.borderColor = "red";
        mensagemErro.style.display = "block";
        valido= false;
    } else{
        mensagem.style.borderColor= "green";
        mensagemErro.style.display= "none";
    }

    if (valido) {
        alert ("Mensagem enviada com sucesso!!")
        
        document.getElementById("formulario").reset();
        nome.style.borderColor = "";
        email.style.borderColor = "";
        mensagem.style.borderColor = "";
    }

}