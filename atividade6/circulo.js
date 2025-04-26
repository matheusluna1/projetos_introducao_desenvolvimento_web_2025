function calcular() {
    let raio= parseInt(document.getElementById("raio").value);
    let resultado= document.getElementById("resultado");

    resultado.innerHTML= ("A área do círculo é: "+(3.14*raio**2));
}