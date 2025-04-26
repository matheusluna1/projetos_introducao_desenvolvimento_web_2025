function soma() {
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    let resultado = document.getElementById("resultado");
    
    resultado.innerHTML= ("A soma dos dois números é: "+ (numero1+numero2));
}