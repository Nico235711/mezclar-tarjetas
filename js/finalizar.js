function finalizar() {
  if (niveles.length - 1 > nivelActual) {
    clearInterval(cronometro)
    document.querySelector("#subeNivel").classList.add("visible")
  } else {
    document.querySelector("#endGame").classList.add("visible")
  }
}