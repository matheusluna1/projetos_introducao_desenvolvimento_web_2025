function media() {
    let nota1= parseInt(document.getElementById("nota1").value);
    let nota2= parseInt(document.getElementById("nota2").value);
    let nota3= parseInt(document.getElementById("nota3").value);
    let nota4= parseInt(document.getElementById("nota4").value);
    
    let resultado= document.getElementById("resultado");

    resultado.innerHTML= ("A média bimestral é: "+(nota1+nota2+nota3+nota4)/4);


}