function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.querySelector("div#res");
  var img = window.document.getElementById("foto");
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert("Verifique se os dados estão corretos");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 12) {
        //criança
        img.src = "./img/menino.jpg";
      } else if (idade < 21) {
        //jovem
        img.src = "./img/rapaz.jpg";
      } else if (idade < 50) {
        //adulto
        img.src = "./img/homem.jpg";
      } else {
        //idoso
        img.src = "./img/Homem velho.jpg";
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 12) {
        //criança
        img.src = "./img/menina.jpg";
      } else if (idade < 21) {
        //jovem
        img.src = "./img/moça.jpg";
      } else if (idade < 50) {
        //adulto
        img.src = "./img/mulher.jpg";
      } else {
        //idoso
        img.src = "./img/mulher velha.jpg";
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `É ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
