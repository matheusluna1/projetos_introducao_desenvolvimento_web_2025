function converter() {
    let grausC= parseInt(document.getElementById("grausC").value);
    let grausF= document.getElementById("grausF");

    grausF.innerHTML= ("A temperatura em graus Fahreinheit é: "+((grausC*9/5)+32));
}