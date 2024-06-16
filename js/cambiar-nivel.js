function subirNivel() {
  nivelActual++;
}

function actualizarNivel() {
  let nivelTexto = nivelActual + 1;
  if (nivelTexto < 10) {
    nivelTexto = "0" + nivelTexto;
  }
  document.querySelector("#nivel").innerText = nivelTexto;
}

function cargarNuevoNivel() {
  subirNivel();
  actualizarNivel();
  iniciar();
}
