
function acertar(tarjetas) {
  tarjetas.forEach(elemento => {
    elemento.classList.add("acertada")
  })
  document.querySelector("#sonido-acierto").cloneNode().play()
}

function errar(tarjetas) {
  tarjetas.forEach(elemento => {
    elemento.classList.add("error")
  })
  document.querySelector("#sonido-error").play()

  setTimeout(() => {

    tarjetas.forEach(elemento => {
      elemento.classList.remove("descubierta")
      elemento.classList.remove("error")
    })
  }, 1000);
}
