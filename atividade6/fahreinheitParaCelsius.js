function converter() {
    let grausF= parseInt(document.getElementById("grausF").value);
    let grausC= document.getElementById("grausC");

    grausC.innerHTML= ("A temperatura em graus Celsius é: " + (5*((grausF-32)/9)));
}