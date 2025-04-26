function calcular() {
    let lado= parseInt(document.getElementById("lado").value);
    let area= document.getElementById("area");
    let dobro= document.getElementById("dobro");

    let resultadoarea= lado*2;

    area.innerHTML= ("O valor da área é: "+(resultadoarea));
    dobro.innerHTML= ("O valor do dobro da área é: "+ (resultadoarea*2));
}