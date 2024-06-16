function descubrir() {
  // necesito saber cuantas descubiertas tengo
  let descubiertas;
  let tarjetasPendientes;

  // me fijo en la cantidad de tarjetas descubiertas
  const tarjetasDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (tarjetasDescubiertas.length > 1) return;

  // console.log(this);

  this.classList.add("descubierta");
  document.querySelector("#sonido-carta").play();
  descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
  if (descubiertas.length < 2) return;
  comparar(descubiertas);
  actualizarMovimientos();

  tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
  if (tarjetasPendientes.length === 0) finalizar();
}

function comparar(tarjetasAComparar) {
  // me fijo si las dos tarjetas descubiertas son iguales
  if (tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor) {
    acertar(tarjetasAComparar);
  } else {
    errar(tarjetasAComparar);
  }
}