// Escribimos los niveles dinámicamente
escribirNiveles();

// Asignamos eventos iniciales
document.querySelectorAll(".reiniciar").forEach(function(elemento) {
  elemento.addEventListener("click", reiniciar);
});

document
  .querySelector("#juego-normal")
  .addEventListener("click", iniciarJuegoNormal);

document
  .querySelector("#juego-relax")
  .addEventListener("click", iniciarJuegoRelax);

document
  .querySelector("#control-nivel")
  .addEventListener("click", mostrarMenuNiveles);

document
  .querySelector("#cierra-niveles")
  .addEventListener("click", ocultarMenuNiveles);

document.querySelectorAll(".nivel").forEach(function(elemento) {
  elemento.addEventListener("click", cambiarNivel);
});

document.querySelector("#subir").addEventListener("click", cargarNuevoNivel);

document.querySelector("body").addEventListener("click", clickearFueraDeMenu);

document.addEventListener("keydown", teclearEscCierraMenu);

//Mostramos pantalla de bienvenida
document.querySelector("#bienvenida").classList.add("visible");
