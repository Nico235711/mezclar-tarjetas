
function acertar(tarjetas) {
  tarjetas.forEach(elemento => {
    elemento.classList.add("acertada")
  })
}

function error(tarjetas) {
  tarjetas.forEach(elemento => {
    elemento.classList.add("error")
  })

  setTimeout(() => {

    tarjetas.forEach(elemento => {
      elemento.classList.remove("descubierta")
      elemento.classList.remove("error")
    })
  }, 1000);
}
