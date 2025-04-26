function conversao() {
    let metros= parseInt(document.getElementById("metros").value);
    let centimetros= document.getElementById("centimetros");

    centimetros.innerHTML= ("A medida em centímetros é: " + (metros*100));
}