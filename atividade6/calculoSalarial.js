function calcular() {
    let valorHora= parseInt(document.getElementById("valorHora").value);
    let horasTrabalhadas= parseInt(document.getElementById("horasTrabalhadas").value);
    let resultado= document.getElementById("resultado");

    resultado.innerHTML= ("O valor o salário é: "+(valorHora*horasTrabalhadas));
    
}