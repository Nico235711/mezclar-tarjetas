function descubrir() {
  // necesito saber cuantas descubiertas tengo
  let descubiertas

  // me fijo en la cantidad de tarjetas descubiertas
  const tarjetasDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)")
  if (tarjetasDescubiertas.length > 1) return

  // console.log(this);

  this.classList.add("descubierta");
  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)")
  if (descubiertas.length < 2) return
  comparar(descubiertas)
}

function comparar(tarjetasAComparar) {
  // me fijo si las dos tarjetas descubiertas son iguales
  if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor) {
    acertar(tarjetasAComparar)
  } else {
    error(tarjetasAComparar)
  }
}