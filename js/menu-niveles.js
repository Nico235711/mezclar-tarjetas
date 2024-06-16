function escribirNiveles() {
  const menuNiveles = document.querySelector(".selecciona-nivel ul");
  niveles.forEach(function(elemento, indice) {
    const controlNivel = document.createElement("li");
    controlNivel.innerHTML =
      "<button class='nivel' data-nivel=" +
      indice +
      ">Nivel " +
      (indice + 1) +
      "</button>";
    menuNiveles.appendChild(controlNivel);
  });
}

function cambiarNivel() {
  const nivel = parseInt(this.dataset.nivel);
  nivelActual = nivel;
  
  actualizarNivel();
  iniciar();
}

function mostrarMenuNiveles(evento) {
  evento.stopPropagation();
  document.querySelector(".selecciona-nivel").classList.toggle("visible");
}

function ocultarMenuNiveles() {
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function clickearFueraDeMenu(evento) {
  if (evento.target.closest(".selecciona-nivel")) return;
  document.querySelector(".selecciona-nivel").classList.remove("visible");
}

function teclearEscCierraMenu(evento) {
  // console.log(evento.key);
  if (evento.key === "Escape") ocultarMenuNiveles();
}
