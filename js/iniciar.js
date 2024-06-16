function iniciar() {
  movimientos = 0;
  repartirTarjetas(niveles[nivelActual].tarjetas);
  obtenerMaxMovimientos()
  document.querySelector("#mov").innerText = "00";
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function (elemento) {
    elemento.addEventListener("click", descubrir);
  });

  if (!modoRelax) {
    iniciarCronometro();
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}

function reiniciar() {
  nivelActual = 0
  actualizarNivel()
  iniciar();
}

iniciar();

document.querySelectorAll(".reiniciar").forEach(boton => {
  boton.addEventListener("click", reiniciar)
});

document.querySelector("#subir").addEventListener("click", cargarNuevoNivel);

function iniciarJuegoNormal() {
  modoRelax = false;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciarJuegoRelax() {
  modoRelax = true;
  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
}