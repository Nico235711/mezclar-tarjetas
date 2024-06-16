function iniciarCronometro() {
  clearInterval(cronometro) // esto evita que el cronómetro se rompa
  let segundos = niveles[nivelActual].segundos + 1;
  // console.log(segundos);
  let minutos = niveles[nivelActual].minutos;
  let segundosTexto;
  let minutosTexto;

  function actualizarContador() {
    segundos--;
    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      timeOver();
    }
    segundosTexto = segundos;
    minutosTexto = minutos;
    if (segundos < 10) {
      segundosTexto = "0" + segundos;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
    document.querySelector("#segundos").innerText = segundosTexto;
    document.querySelector("#minutos").innerText = minutosTexto;
  }
  cronometro = setInterval(actualizarContador, 1000);
}
